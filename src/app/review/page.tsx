"use client";

import { useMemo } from "react";
import { useForgeStore } from "@/store/forge-store";
import { weeklyArcs } from "@/data/weekly-arcs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function ReviewPage() {
  const { entries, currentArcIndex, streak, totalSessions } = useForgeStore();

  const arc = weeklyArcs[currentArcIndex];
  const arcEntries = entries.filter((e) => e.weeklyArcId === arc.id);

  const allTags = useMemo(() => {
    const tagCounts: Record<string, number> = {};
    entries.forEach((e) =>
      e.tags.forEach((t) => {
        tagCounts[t] = (tagCounts[t] || 0) + 1;
      })
    );
    return Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8);
  }, [entries]);

  const weeklyTags = useMemo(() => {
    const tagCounts: Record<string, number> = {};
    arcEntries.forEach((e) =>
      e.tags.forEach((t) => {
        tagCounts[t] = (tagCounts[t] || 0) + 1;
      })
    );
    return Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);
  }, [arcEntries]);

  const bestDistillations = useMemo(
    () =>
      arcEntries
        .filter((e) => e.distillationText.trim())
        .map((e) => ({
          text: e.distillationText,
          date: e.date,
          favorited: e.favorited,
          prompt: weeklyArcs
            .flatMap((a) => a.dailyPrompts)
            .find((p) => p.id === e.dailyPromptId),
        })),
    [arcEntries]
  );

  const favoritedEntries = entries.filter((e) => e.favorited);

  const themesExplored = new Set(entries.map((e) => e.weeklyArcId)).size;

  return (
    <div className="space-y-8">
      <PageHeader
        title="Forge Review"
        subtitle="Track your intellectual growth and reflect on your journey."
      />

      {/* Growth Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Total Sessions", value: totalSessions },
          { label: "Current Streak", value: `${streak} day${streak !== 1 ? "s" : ""}` },
          { label: "Themes Explored", value: themesExplored },
          { label: "Favorited Insights", value: favoritedEntries.length },
        ].map((stat, i) => (
          <Card key={stat.label} className="bg-card border-border/50">
            <CardContent className="pt-5 pb-5">
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {stat.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Current Week Review */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <h2 className="font-display text-xl font-semibold">
            This Week: {arc.title}
          </h2>
          <Badge
            variant="outline"
            className="border-gold/30 text-gold text-xs capitalize"
          >
            {arc.themeCategory}
          </Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Weekly completion */}
          <Card className="bg-card border-border/50">
            <CardContent className="pt-5 pb-5 space-y-3">
              <h3 className="text-sm font-medium">Completion</h3>
              <div className="flex gap-1.5">
                {arc.dailyPrompts.map((prompt, i) => {
                  const completed = arcEntries.some(
                    (e) => e.dailyPromptId === prompt.id
                  );
                  return (
                    <div
                      key={prompt.id}
                      className={cn(
                        "flex-1 h-8 rounded flex items-center justify-center text-xs",
                        completed
                          ? "bg-gold/20 text-gold"
                          : "bg-muted text-muted-foreground"
                      )}
                      title={`Day ${i + 1}: ${prompt.dayLabel}`}
                    >
                      {prompt.dayLabel.slice(0, 3)}
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-muted-foreground">
                {arcEntries.length} of 7 sessions completed
              </p>
            </CardContent>
          </Card>

          {/* Weekly themes */}
          <Card className="bg-card border-border/50">
            <CardContent className="pt-5 pb-5 space-y-3">
              <h3 className="text-sm font-medium">Themes This Week</h3>
              {weeklyTags.length === 0 ? (
                <p className="text-xs text-muted-foreground">
                  Complete sessions to see your themes.
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {weeklyTags.map(([tag, count]) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-border/40 capitalize text-xs"
                    >
                      {tag}{" "}
                      <span className="ml-1 text-muted-foreground">
                        {count}
                      </span>
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Best Lines This Week */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <h2 className="font-display text-xl font-semibold mb-4">
          Best Lines
        </h2>
        {bestDistillations.length === 0 ? (
          <Card className="bg-card border-border/30">
            <CardContent className="pt-8 pb-8 text-center">
              <p className="text-muted-foreground text-sm">
                Your distilled insights will appear here as you complete
                sessions.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {bestDistillations.map((d, i) => (
              <Card
                key={i}
                className={cn(
                  "bg-card border-border/30",
                  d.favorited && "border-gold/20"
                )}
              >
                <CardContent className="pt-4 pb-4">
                  <p className="text-sm leading-relaxed italic">
                    &ldquo;{d.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-muted-foreground">
                      {d.prompt?.dayLabel}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      &middot; {new Date(d.date).toLocaleDateString()}
                    </span>
                    {d.favorited && (
                      <span className="text-gold text-xs">&#9733;</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </motion.div>

      {/* All-time Recurring Themes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <h2 className="font-display text-xl font-semibold mb-4">
          Recurring Themes
        </h2>
        {allTags.length === 0 ? (
          <Card className="bg-card border-border/30">
            <CardContent className="pt-8 pb-8 text-center">
              <p className="text-muted-foreground text-sm">
                Your recurring themes will emerge as you complete more sessions.
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-card border-border/50">
            <CardContent className="pt-5 pb-5 space-y-3">
              {allTags.map(([tag, count]) => {
                const max = allTags[0][1];
                const pct = (count / max) * 100;
                return (
                  <div key={tag} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm capitalize">{tag}</span>
                      <span className="text-xs text-muted-foreground">
                        {count}
                      </span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gold/70 rounded-full transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        )}
      </motion.div>
    </div>
  );
}
