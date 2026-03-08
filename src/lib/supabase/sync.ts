import type { SupabaseClient } from "@supabase/supabase-js";
import type { ForgeEntry, WeeklyReview } from "@/types";

// Snake_case DB row types
interface DbEntry {
  id: string;
  user_id: string;
  daily_prompt_id: string;
  weekly_arc_id: string;
  date: string;
  reflection_text: string;
  extension_text: string;
  distillation_text: string;
  application_text: string;
  ai_refinement: string | null;
  ai_challenge: string | null;
  conversation_version: string | null;
  calibration_energy: number | null;
  calibration_clarity: number | null;
  calibration_mood: number | null;
  carry_line: string | null;
  carry_action: string | null;
  tags: string[];
  favorited: boolean;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

interface DbProfile {
  id: string;
  streak: number;
  last_session_date: string | null;
  current_arc_index: number;
  current_day_index: number;
  total_sessions: number;
}

interface DbReview {
  id: string;
  user_id: string;
  weekly_arc_id: string;
  synthesis_text: string;
  recurring_themes: string[];
  strongest_insight: string;
  best_conversation_line: string;
  growth_note: string;
  created_at: string;
}

function dbEntryToForgeEntry(row: DbEntry): ForgeEntry {
  return {
    id: row.id,
    dailyPromptId: row.daily_prompt_id,
    weeklyArcId: row.weekly_arc_id,
    date: row.date,
    reflectionText: row.reflection_text,
    extensionText: row.extension_text,
    distillationText: row.distillation_text,
    applicationText: row.application_text,
    aiRefinement: row.ai_refinement ?? undefined,
    aiChallenge: row.ai_challenge ?? undefined,
    conversationVersion: row.conversation_version ?? undefined,
    calibration: row.calibration_energy != null
      ? { energy: row.calibration_energy, clarity: row.calibration_clarity!, mood: row.calibration_mood! }
      : undefined,
    carryLine: row.carry_line ?? undefined,
    carryAction: (row.carry_action as ForgeEntry["carryAction"]) ?? undefined,
    tags: row.tags ?? [],
    favorited: row.favorited,
    completed: row.completed,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function dbReviewToWeeklyReview(row: DbReview): WeeklyReview {
  return {
    id: row.id,
    weeklyArcId: row.weekly_arc_id,
    synthesisText: row.synthesis_text,
    recurringThemes: row.recurring_themes ?? [],
    strongestInsight: row.strongest_insight,
    bestConversationLine: row.best_conversation_line,
    growthNote: row.growth_note,
    createdAt: row.created_at,
  };
}

export async function fetchUserData(supabase: SupabaseClient) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const [entriesRes, reviewsRes, profileRes] = await Promise.all([
    supabase.from("forge_entries").select("*").eq("user_id", user.id).order("created_at"),
    supabase.from("weekly_reviews").select("*").eq("user_id", user.id).order("created_at"),
    supabase.from("user_profiles").select("*").eq("id", user.id).single(),
  ]);

  return {
    entries: (entriesRes.data ?? []).map(dbEntryToForgeEntry),
    reviews: (reviewsRes.data ?? []).map(dbReviewToWeeklyReview),
    profile: profileRes.data as DbProfile | null,
    userId: user.id,
  };
}

export async function upsertEntry(supabase: SupabaseClient, entry: ForgeEntry, userId: string) {
  const { error } = await supabase.from("forge_entries").upsert({
    id: entry.id,
    user_id: userId,
    daily_prompt_id: entry.dailyPromptId,
    weekly_arc_id: entry.weeklyArcId,
    date: entry.date,
    reflection_text: entry.reflectionText,
    extension_text: entry.extensionText,
    distillation_text: entry.distillationText,
    application_text: entry.applicationText,
    ai_refinement: entry.aiRefinement ?? null,
    ai_challenge: entry.aiChallenge ?? null,
    conversation_version: entry.conversationVersion ?? null,
    calibration_energy: entry.calibration?.energy ?? null,
    calibration_clarity: entry.calibration?.clarity ?? null,
    calibration_mood: entry.calibration?.mood ?? null,
    carry_line: entry.carryLine ?? null,
    carry_action: entry.carryAction ?? null,
    tags: entry.tags,
    favorited: entry.favorited,
    completed: entry.completed,
    created_at: entry.createdAt,
    updated_at: entry.updatedAt,
  });
  return { error };
}

export async function updateProfile(
  supabase: SupabaseClient,
  userId: string,
  data: {
    streak?: number;
    lastSessionDate?: string | null;
    currentArcIndex?: number;
    currentDayIndex?: number;
    totalSessions?: number;
  }
) {
  const { error } = await supabase.from("user_profiles").upsert({
    id: userId,
    streak: data.streak,
    last_session_date: data.lastSessionDate,
    current_arc_index: data.currentArcIndex,
    current_day_index: data.currentDayIndex,
    total_sessions: data.totalSessions,
  });
  return { error };
}

export async function toggleFavoriteRemote(
  supabase: SupabaseClient,
  entryId: string,
  favorited: boolean
) {
  const { error } = await supabase
    .from("forge_entries")
    .update({ favorited, updated_at: new Date().toISOString() })
    .eq("id", entryId);
  return { error };
}

export async function upsertReview(
  supabase: SupabaseClient,
  review: WeeklyReview,
  userId: string
) {
  const { error } = await supabase.from("weekly_reviews").upsert({
    id: review.id,
    user_id: userId,
    weekly_arc_id: review.weeklyArcId,
    synthesis_text: review.synthesisText,
    recurring_themes: review.recurringThemes,
    strongest_insight: review.strongestInsight,
    best_conversation_line: review.bestConversationLine,
    growth_note: review.growthNote,
    created_at: review.createdAt,
  });
  return { error };
}
