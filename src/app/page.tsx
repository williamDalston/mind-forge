"use client";

import { useForgeStore } from "@/store/forge-store";
import { weeklyArcs } from "@/data/weekly-arcs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

function StreakDisplay({ streak }: { streak: number }) {
  if (streak === 0) return null;
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl ember-glow">&#9632;</span>
      <div>
        <span className="text-2xl font-semibold text-gold">{streak}</span>
        <span className="text-sm text-muted-foreground ml-1">
          day{streak > 1 ? "s" : ""} streak
        </span>
      </div>
    </div>
  );
}

function WeeklyProgress({
  arcIndex,
  entries,
}: {
  arcIndex: number;
  entries: { dailyPromptId: string }[];
}) {
  const arc = weeklyArcs[arcIndex];
  const completedIds = new Set(entries.map((e) => e.dailyPromptId));

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Weekly Progress</span>
        <span className="text-xs text-muted-foreground">
          {arc.dailyPrompts.filter((p) => completedIds.has(p.id)).length} / 7
        </span>
      </div>
      <div className="flex gap-1.5">
        {arc.dailyPrompts.map((prompt, i) => (
          <div
            key={prompt.id}
            className={`flex-1 h-2 rounded-full transition-colors ${
              completedIds.has(prompt.id) ? "bg-gold" : "bg-muted"
            }`}
            title={`Day ${i + 1}: ${prompt.dayLabel}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { currentArcIndex, currentDayIndex, entries, streak, totalSessions } =
    useForgeStore();

  const arc = weeklyArcs[currentArcIndex];
  const prompt = arc.dailyPrompts[currentDayIndex];
  const recentEntries = [...entries].reverse().slice(0, 3);
  const arcEntries = entries.filter((e) => e.weeklyArcId === arc.id);

  return (
    <div className="space-y-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-display text-3xl font-semibold tracking-tight">
              Mind Forge
            </h1>
            <p className="mt-1 text-muted-foreground">
              Turn ideas into mental strength, personal wisdom, and
              conversational brilliance.
            </p>
          </div>
          <StreakDisplay streak={streak} />
        </div>
      </motion.div>

      {/* Today's Theme + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Card className="bg-card border-gold/15 overflow-hidden">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge
                variant="outline"
                className="border-gold/30 text-gold text-xs"
              >
                {arc.themeCategory}
              </Badge>
              <span className="text-xs text-muted-foreground">
                Week {currentArcIndex + 1} &middot; Day {currentDayIndex + 1}
              </span>
            </div>
            <h2 className="font-display text-xl font-semibold mb-1">
              {arc.title}: {prompt.dayLabel}
            </h2>
            <p className="text-sm text-muted-foreground mb-1">
              &ldquo;{prompt.title}&rdquo;
            </p>
            <p className="text-sm text-foreground/70 line-clamp-2 mb-5">
              {prompt.sparkText.slice(0, 180)}...
            </p>
            <Link href="/daily-forge">
              <Button className="bg-gold/90 hover:bg-gold text-primary-foreground">
                Start Today&apos;s Forge &rarr;
              </Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="grid grid-cols-3 gap-4"
      >
        <Card className="bg-card border-border/50">
          <CardContent className="pt-5 pb-5">
            <p className="text-2xl font-semibold">{totalSessions}</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Sessions completed
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border/50">
          <CardContent className="pt-5 pb-5">
            <p className="text-2xl font-semibold">
              {new Set(entries.map((e) => e.weeklyArcId)).size}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Themes explored
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border/50">
          <CardContent className="pt-5 pb-5">
            <p className="text-2xl font-semibold">
              {entries.filter((e) => e.favorited).length}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Saved insights
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Weekly Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
      >
        <Card className="bg-card border-border/50">
          <CardContent className="pt-5 pb-5">
            <WeeklyProgress arcIndex={currentArcIndex} entries={arcEntries} />
          </CardContent>
        </Card>
      </motion.div>

      {/* Recent Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display text-lg font-medium">Recent Insights</h3>
          {entries.length > 0 && (
            <Link
              href="/vault"
              className="text-sm text-gold/70 hover:text-gold transition-colors"
            >
              View all &rarr;
            </Link>
          )}
        </div>
        {recentEntries.length === 0 ? (
          <Card className="bg-card border-border/30">
            <CardContent className="pt-8 pb-8 text-center">
              <p className="text-muted-foreground text-sm">
                No insights yet. Complete your first forge session to start
                building your vault.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {recentEntries.map((entry) => {
              const entryArc = weeklyArcs.find(
                (a) => a.id === entry.weeklyArcId
              );
              return (
                <Card
                  key={entry.id}
                  className="bg-card border-border/30 hover:border-border/60 transition-colors"
                >
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed line-clamp-2">
                          {entry.distillationText || entry.reflectionText}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-muted-foreground">
                            {entryArc?.title}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            &middot;
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {new Date(entry.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      {entry.favorited && (
                        <span className="text-gold ml-2">&#9733;</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
}
