"use client";

import { useAuth } from "@/components/providers/auth-provider";
import { useRouter } from "next/navigation";

export function UserMenu() {
  const { user, supabase } = useAuth();
  const router = useRouter();

  if (!user) {
    return (
      <button
        onClick={() => router.push("/auth/login")}
        className="text-[11px] text-gold/60 hover:text-gold transition-colors"
      >
        Sign in to sync your data
      </button>
    );
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
    router.refresh();
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-[11px] text-muted-foreground/60 truncate flex-1">
        {user.email}
      </span>
      <button
        onClick={handleSignOut}
        className="text-[11px] text-muted-foreground/40 hover:text-muted-foreground transition-colors shrink-0"
      >
        Sign out
      </button>
    </div>
  );
}
