"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ForgeEntry, WeeklyReview } from "@/types";
import { weeklyArcs } from "@/data/weekly-arcs";

interface DraftEntry {
  reflectionText: string;
  extensionText: string;
  distillationText: string;
  applicationText: string;
}

interface ForgeState {
  entries: ForgeEntry[];
  reviews: WeeklyReview[];
  currentArcIndex: number;
  currentDayIndex: number;
  currentStep: number;
  draft: DraftEntry;
  streak: number;
  lastSessionDate: string | null;
  totalSessions: number;

  // Actions
  setDraftField: (field: keyof DraftEntry, value: string) => void;
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

export const useForgeStore = create<ForgeState>()(
  persist(
    (set, get) => ({
      entries: [],
      reviews: [],
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
          reflectionText: state.draft.reflectionText,
          extensionText: state.draft.extensionText,
          distillationText: state.draft.distillationText,
          applicationText: state.draft.applicationText,
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

        set({
          entries: [...state.entries, entry],
          draft: { ...emptyDraft },
          currentStep: 0,
          streak: newStreak,
          lastSessionDate: today,
          totalSessions: state.totalSessions + 1,
        });
      },

      toggleFavorite: (entryId) =>
        set((state) => ({
          entries: state.entries.map((e) =>
            e.id === entryId ? { ...e, favorited: !e.favorited } : e
          ),
        })),

      saveReview: (review) =>
        set((state) => ({
          reviews: [
            ...state.reviews,
            {
              ...review,
              id: crypto.randomUUID(),
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      advanceDay: () =>
        set((state) => {
          const arc = weeklyArcs[state.currentArcIndex];
          if (state.currentDayIndex < arc.dailyPrompts.length - 1) {
            return { currentDayIndex: state.currentDayIndex + 1, currentStep: 0, draft: { ...emptyDraft } };
          }
          // advance to next arc
          const nextArc = (state.currentArcIndex + 1) % weeklyArcs.length;
          return { currentArcIndex: nextArc, currentDayIndex: 0, currentStep: 0, draft: { ...emptyDraft } };
        }),

      setArc: (arcIndex) =>
        set({ currentArcIndex: arcIndex, currentDayIndex: 0, currentStep: 0, draft: { ...emptyDraft } }),

      setDay: (dayIndex) =>
        set({ currentDayIndex: dayIndex, currentStep: 0, draft: { ...emptyDraft } }),

      getEntriesForArc: (arcId) => get().entries.filter((e) => e.weeklyArcId === arcId),

      getEntryForPrompt: (promptId) => get().entries.find((e) => e.dailyPromptId === promptId),

      getCurrentArc: () => weeklyArcs[get().currentArcIndex],

      getCurrentPrompt: () => {
        const state = get();
        return weeklyArcs[state.currentArcIndex].dailyPrompts[state.currentDayIndex];
      },
    }),
    {
      name: "mind-forge-storage",
    }
  )
);
