export type SparkForm =
  | "paradox"
  | "scenario"
  | "historical_mirror"
  | "inversion"
  | "uncomfortable_question"
  | "observation_seed";

export type DepthTier = 1 | 2 | 3;

export type DayStage =
  | "observe"
  | "name"
  | "complicate"
  | "compare"
  | "apply"
  | "articulate"
  | "synthesize";

export const DAY_STAGES: { key: DayStage; label: string; dayIndex: number }[] = [
  { key: "observe", label: "Observe", dayIndex: 0 },
  { key: "name", label: "Name", dayIndex: 1 },
  { key: "complicate", label: "Complicate", dayIndex: 2 },
  { key: "compare", label: "Compare", dayIndex: 3 },
  { key: "apply", label: "Apply", dayIndex: 4 },
  { key: "articulate", label: "Articulate", dayIndex: 5 },
  { key: "synthesize", label: "Synthesize", dayIndex: 6 },
];

export interface WeeklyArc {
  id: string;
  title: string;
  slug: string;
  description: string;
  themeCategory: string;
  dailyPrompts: DailyPrompt[];
}

export interface DailyPrompt {
  id: string;
  weeklyArcId: string;
  dayIndex: number;
  dayLabel: string;
  title: string;
  sparkForm: SparkForm;
  depthTier: DepthTier;
  sparkText: string;
  reflectionPrompt: string;
  extensionPrompt: string;
  distillationPrompt: string;
  applicationPrompt?: string;
  tensionNote?: string;
  emotionalGoal?: string;
  tags: string[];
}

export interface Calibration {
  energy: number;    // 1-5
  clarity: number;   // 1-5
  mood: number;      // 1-5
}

export type CarryAction = "notice" | "say" | "decide" | "stop" | "build" | "write";

export interface ForgeEntry {
  id: string;
  dailyPromptId: string;
  weeklyArcId: string;
  date: string;
  calibration?: Calibration;
  reflectionText: string;
  extensionText: string;
  distillationText: string;
  applicationText: string;
  carryLine?: string;
  carryAction?: CarryAction;
  aiRefinement?: string;
  aiChallenge?: string;
  conversationVersion?: string;
  tags: string[];
  favorited: boolean;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface QuickCapture {
  id: string;
  text: string;
  type: "insight" | "line" | "pattern" | "truth";
  createdAt: string;
}

export interface WeeklyReview {
  id: string;
  weeklyArcId: string;
  synthesisText: string;
  recurringThemes: string[];
  strongestInsight: string;
  bestConversationLine: string;
  growthNote: string;
  createdAt: string;
}

export type ForgeStep = "spark" | "reflect" | "extend" | "distill" | "apply";

export const FORGE_STEPS: { key: ForgeStep; label: string; description: string }[] = [
  { key: "spark", label: "Spark", description: "Encounter the idea" },
  { key: "reflect", label: "Reflect", description: "What feels true here?" },
  { key: "extend", label: "Extend", description: "Add your own connection" },
  { key: "distill", label: "Distill", description: "Find the core insight" },
  { key: "apply", label: "Apply", description: "Bring it into life" },
];

export const TAGS = [
  "psychology",
  "philosophy",
  "strategy",
  "relationships",
  "work",
  "meaning",
  "communication",
  "self-knowledge",
  "decision-making",
] as const;

export type Tag = (typeof TAGS)[number];
