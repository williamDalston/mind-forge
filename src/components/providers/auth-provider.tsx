"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { fetchUserData, updateProfile } from "@/lib/supabase/sync";
import { useForgeStore } from "@/store/forge-store";
import type { SupabaseClient, User } from "@supabase/supabase-js";

interface AuthContextType {
  user: User | null;
  supabase: SupabaseClient;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() => createClient());
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const pushLocalDataToServer = useCallback(async (
    userId: string,
    store: ReturnType<typeof useForgeStore.getState>
  ) => {
    try {
      const { upsertEntry, upsertReview } = await import("@/lib/supabase/sync");

      for (const entry of store.entries) {
        await upsertEntry(supabase, entry, userId);
      }

      for (const review of store.reviews) {
        await upsertReview(supabase, review, userId);
      }

      await updateProfile(supabase, userId, {
        streak: store.streak,
        lastSessionDate: store.lastSessionDate,
        currentArcIndex: store.currentArcIndex,
        currentDayIndex: store.currentDayIndex,
        totalSessions: store.totalSessions,
      });
    } catch (err) {
      console.error("Failed to push local data:", err);
    }
  }, [supabase]);

  const loadUserData = useCallback(async (userId: string) => {
    try {
      const data = await fetchUserData(supabase);
      if (!data) return;

      const store = useForgeStore.getState();

      if (data.entries.length > 0 || data.profile) {
        useForgeStore.setState({
          entries: data.entries,
          reviews: data.reviews,
          currentArcIndex: data.profile?.current_arc_index ?? store.currentArcIndex,
          currentDayIndex: data.profile?.current_day_index ?? store.currentDayIndex,
          streak: data.profile?.streak ?? store.streak,
          lastSessionDate: data.profile?.last_session_date ?? store.lastSessionDate,
          totalSessions: data.profile?.total_sessions ?? store.totalSessions,
        });
      } else if (store.entries.length > 0) {
        await pushLocalDataToServer(userId, store);
      }
    } catch (err) {
      console.error("Failed to load user data:", err);
    }
  }, [supabase, pushLocalDataToServer]);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      if (user) {
        loadUserData(user.id);
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const newUser = session?.user ?? null;
        setUser(newUser);

        if (event === "SIGNED_IN" && newUser) {
          await loadUserData(newUser.id);
        }

        if (event === "SIGNED_OUT") {
          useForgeStore.getState().clearDraft();
          useForgeStore.setState({
            entries: [],
            reviews: [],
            currentArcIndex: 0,
            currentDayIndex: 0,
            streak: 0,
            lastSessionDate: null,
            totalSessions: 0,
          });
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase, loadUserData]);

  return (
    <AuthContext.Provider value={{ user, supabase, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
