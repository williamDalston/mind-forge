"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Calibration, CarryAction, ForgeEntry, QuickCapture, WeeklyReview } from "@/types";
import { weeklyArcs } from "@/data/weekly-arcs";

interface DraftEntry {
  reflectionText: string;
  extensionText: string;
  distillationText: string;
  applicationText: string;
  calibration?: Calibration;
  carryLine?: string;
  carryAction?: CarryAction;
  aiChallenge?: string;
  aiRefinement?: string;
  conversationVersion?: string;
}

interface ForgeState {
  entries: ForgeEntry[];
  reviews: WeeklyReview[];
  captures: QuickCapture[];
  currentArcIndex: number;
  currentDayIndex: number;
  currentStep: number;
  draft: DraftEntry;
  streak: number;
  lastSessionDate: string | null;
  totalSessions: number;

  // Actions
  setDraftField: (field: keyof DraftEntry, value: string) => void;
  setDraftCalibration: (calibration: Calibration) => void;
  setDraftCarry: (carryLine: string, carryAction: CarryAction) => void;
  setDraftAiResponse: (field: "aiChallenge" | "aiRefinement" | "conversationVersion", value: string) => void;
  updateLastEntryCarry: (carryLine: string, carryAction: CarryAction) => void;
  addCapture: (text: string, type: QuickCapture["type"]) => void;
  deleteCapture: (id: string) => void;
  clearDraft: () => void;
  setCurrentStep: (step: number) => void;
  completeSession: () => void;
  toggleFavorite: (entryId: string) => void;
  saveReview: (review: Omit<WeeklyReview, "id" | "createdAt">) => void;
  advanceDay: () => void;
  setArc: (arcIndex: number) => void;
  setDay: (dayIndex: number) => void;
  getEntriesForArc: (arcId: string) => ForgeEntry[];
  getEntryForPrompt: (promptId: string) => ForgeEntry | undefined;
  getCurrentArc: () => (typeof weeklyArcs)[0];
  getCurrentPrompt: () => (typeof weeklyArcs)[0]["dailyPrompts"][0];
}

const emptyDraft: DraftEntry = {
  reflectionText: "",
  extensionText: "",
  distillationText: "",
  applicationText: "",
};

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

function isConsecutiveDay(lastDate: string | null): boolean {
  if (!lastDate) return false;
  const last = new Date(lastDate);
  const today = new Date(getToday());
  const diff = today.getTime() - last.getTime();
  const dayMs = 24 * 60 * 60 * 1000;
  return diff <= dayMs && diff > 0;
}

function isSameDay(lastDate: string | null): boolean {
  if (!lastDate) return false;
  return lastDate === getToday();
}

// Fire-and-forget Supabase sync helper
async function syncToSupabase(action: () => Promise<void>) {
  try {
    await action();
  } catch (err) {
    console.error("Supabase sync error:", err);
  }
}

function getSupabaseClient() {
  return import("@/lib/supabase/client").then((m) => m.createClient());
}

async function getUserId() {
  const supabase = await getSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  return { supabase, userId: user?.id ?? null };
}

export const useForgeStore = create<ForgeState>()(
  persist(
    (set, get) => ({
      entries: [],
      reviews: [],
      captures: [],
      currentArcIndex: 0,
      currentDayIndex: 0,
      currentStep: 0,
      draft: { ...emptyDraft },
      streak: 0,
      lastSessionDate: null,
      totalSessions: 0,

      setDraftField: (field, value) =>
        set((state) => ({
          draft: { ...state.draft, [field]: value },
        })),

      clearDraft: () => set({ draft: { ...emptyDraft }, currentStep: 0 }),

      setDraftCalibration: (calibration) =>
        set((state) => ({ draft: { ...state.draft, calibration } })),

      setDraftCarry: (carryLine, carryAction) =>
        set((state) => ({ draft: { ...state.draft, carryLine, carryAction } })),

      setDraftAiResponse: (field, value) =>
        set((state) => ({ draft: { ...state.draft, [field]: value } })),

      updateLastEntryCarry: (carryLine, carryAction) => {
        const state = get();
        const lastEntry = state.entries[state.entries.length - 1];
        if (!lastEntry) return;

        const updatedEntry = { ...lastEntry, carryLine, carryAction, updatedAt: new Date().toISOString() };
        set({
          entries: state.entries.map((e) => (e.id === lastEntry.id ? updatedEntry : e)),
        });

        syncToSupabase(async () => {
          const { supabase, userId } = await getUserId();
          if (!userId) return;
          const { upsertEntry } = await import("@/lib/supabase/sync");
          await upsertEntry(supabase, updatedEntry, userId);
        });
      },

      addCapture: (text, type) => {
        const capture: QuickCapture = {
          id: crypto.randomUUID(),
          text,
          type,
          createdAt: new Date().toISOString(),
        };
        set((state) => ({ captures: [...state.captures, capture] }));
      },

      deleteCapture: (id) =>
        set((state) => ({ captures: state.captures.filter((c) => c.id !== id) })),

      setCurrentStep: (step) => set({ currentStep: step }),

      completeSession: () => {
        const state = get();
        const arc = weeklyArcs[state.currentArcIndex];
        const prompt = arc.dailyPrompts[state.currentDayIndex];
        const today = getToday();

        const entry: ForgeEntry = {
          id: crypto.randomUUID(),
          dailyPromptId: prompt.id,
          weeklyArcId: arc.id,
          date: today,
          calibration: state.draft.calibration,
          reflectionText: state.draft.reflectionText,
          extensionText: state.draft.extensionText,
          distillationText: state.draft.distillationText,
          applicationText: state.draft.applicationText,
          carryLine: state.draft.carryLine,
          carryAction: state.draft.carryAction,
          aiChallenge: state.draft.aiChallenge,
          aiRefinement: state.draft.aiRefinement,
          conversationVersion: state.draft.conversationVersion,
          tags: [...prompt.tags],
          favorited: false,
          completed: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        let newStreak = state.streak;
        if (isSameDay(state.lastSessionDate)) {
          // same day, no streak change
        } else if (isConsecutiveDay(state.lastSessionDate)) {
          newStreak = state.streak + 1;
        } else {
          newStreak = 1;
        }

        const newTotalSessions = state.totalSessions + 1;

        set({
          entries: [...state.entries, entry],
          streak: newStreak,
          lastSessionDate: today,
          totalSessions: newTotalSessions,
        });

        syncToSupabase(async () => {
          const { supabase, userId } = await getUserId();
          if (!userId) return;
          const { upsertEntry, updateProfile } = await import("@/lib/supabase/sync");
          await upsertEntry(supabase, entry, userId);
          await updateProfile(supabase, userId, {
            streak: newStreak,
            lastSessionDate: today,
            currentArcIndex: state.currentArcIndex,
            currentDayIndex: state.currentDayIndex,
            totalSessions: newTotalSessions,
          });
        });
      },

      toggleFavorite: (entryId) => {
        const entry = get().entries.find((e) => e.id === entryId);
        const newFavorited = entry ? !entry.favorited : false;

        set((state) => ({
          entries: state.entries.map((e) =>
            e.id === entryId ? { ...e, favorited: !e.favorited } : e
          ),
        }));

        syncToSupabase(async () => {
          const { supabase, userId } = await getUserId();
          if (!userId) return;
          const { toggleFavoriteRemote } = await import("@/lib/supabase/sync");
          await toggleFavoriteRemote(supabase, entryId, newFavorited);
        });
      },

      saveReview: (review) => {
        const fullReview: WeeklyReview = {
          ...review,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
        };

        set((state) => ({
          reviews: [...state.reviews, fullReview],
        }));

        syncToSupabase(async () => {
          const { supabase, userId } = await getUserId();
          if (!userId) return;
          const { upsertReview } = await import("@/lib/supabase/sync");
          await upsertReview(supabase, fullReview, userId);
        });
      },

      advanceDay: () => {
        const state = get();
        const arc = weeklyArcs[state.currentArcIndex];
        let newArcIndex = state.currentArcIndex;
        let newDayIndex = state.currentDayIndex;

        if (state.currentDayIndex < arc.dailyPrompts.length - 1) {
          newDayIndex = state.currentDayIndex + 1;
        } else {
          newArcIndex = (state.currentArcIndex + 1) % weeklyArcs.length;
          newDayIndex = 0;
        }

        set({
          currentArcIndex: newArcIndex,
          currentDayIndex: newDayIndex,
          currentStep: 0,
          draft: { ...emptyDraft },
        });

        syncToSupabase(async () => {
          const { supabase, userId } = await getUserId();
          if (!userId) return;
          const { updateProfile } = await import("@/lib/supabase/sync");
          await updateProfile(supabase, userId, {
            currentArcIndex: newArcIndex,
            currentDayIndex: newDayIndex,
          });
        });
      },

      setArc: (arcIndex) => {
        set({ currentArcIndex: arcIndex, currentDayIndex: 0, currentStep: 0, draft: { ...emptyDraft } });

        syncToSupabase(async () => {
          const { supabase, userId } = await getUserId();
          if (!userId) return;
          const { updateProfile } = await import("@/lib/supabase/sync");
          await updateProfile(supabase, userId, {
            currentArcIndex: arcIndex,
            currentDayIndex: 0,
          });
        });
      },

      setDay: (dayIndex) => {
        set({ currentDayIndex: dayIndex, currentStep: 0, draft: { ...emptyDraft } });

        syncToSupabase(async () => {
          const { supabase, userId } = await getUserId();
          if (!userId) return;
          const { updateProfile } = await import("@/lib/supabase/sync");
          await updateProfile(supabase, userId, { currentDayIndex: dayIndex });
        });
      },

      getEntriesForArc: (arcId) => get().entries.filter((e) => e.weeklyArcId === arcId),

      getEntryForPrompt: (promptId) => get().entries.find((e) => e.dailyPromptId === promptId),

      getCurrentArc: () => weeklyArcs[get().currentArcIndex % weeklyArcs.length],

      getCurrentPrompt: () => {
        const state = get();
        const arc = weeklyArcs[state.currentArcIndex % weeklyArcs.length];
        return arc.dailyPrompts[state.currentDayIndex % arc.dailyPrompts.length];
      },
    }),
    {
      name: "mind-forge-storage",
    }
  )
);
