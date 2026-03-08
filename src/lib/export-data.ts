import type { ForgeEntry, WeeklyReview, QuickCapture } from "@/types";
import { weeklyArcs } from "@/data/weekly-arcs";

function getArcTitle(arcId: string): string {
  return weeklyArcs.find((a) => a.id === arcId)?.title ?? arcId;
}

function getPromptLabel(entry: ForgeEntry): string {
  for (const arc of weeklyArcs) {
    const prompt = arc.dailyPrompts.find((p) => p.id === entry.dailyPromptId);
    if (prompt) return `${arc.title} · ${prompt.dayLabel}`;
  }
  return entry.dailyPromptId;
}

export function exportAsJson(
  entries: ForgeEntry[],
  reviews: WeeklyReview[],
  captures: QuickCapture[]
): void {
  const data = {
    exportedAt: new Date().toISOString(),
    source: "Mind Forge",
    entries,
    reviews,
    captures,
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `mind-forge-export-${new Date().toISOString().split("T")[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function exportAsCsv(entries: ForgeEntry[]): void {
  const headers = [
    "date",
    "theme",
    "prompt",
    "reflection",
    "extension",
    "distillation",
    "application",
    "carry_line",
    "carry_action",
    "tags",
    "favorited",
  ];
  const rows = entries.map((e) => {
    const theme = getArcTitle(e.weeklyArcId);
    const prompt = getPromptLabel(e);
    return [
      e.date,
      theme,
      prompt,
      (e.reflectionText ?? "").replace(/"/g, '""'),
      (e.extensionText ?? "").replace(/"/g, '""'),
      (e.distillationText ?? "").replace(/"/g, '""'),
      (e.applicationText ?? "").replace(/"/g, '""'),
      (e.carryLine ?? "").replace(/"/g, '""'),
      e.carryAction ?? "",
      e.tags.join("; "),
      e.favorited ? "yes" : "no",
    ];
  });
  const csv =
    headers.join(",") +
    "\n" +
    rows.map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `mind-forge-insights-${new Date().toISOString().split("T")[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
