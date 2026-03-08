"use client";

import { useForgeStore } from "@/store/forge-store";
import { weeklyArcs } from "@/data/weekly-arcs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { emerge, settle, stagger } from "@/lib/motion";
import { QuickCaptureWidget } from "@/components/forge/quick-capture";
import { OnboardingModal } from "@/components/onboarding/onboarding-modal";
import { StreakMilestone } from "@/components/forge/streak-milestone";

function useAutoAdvance() {
  const { currentArcIndex, currentDayIndex, entries, lastSessionDate, advanceDay } =
    useForgeStore();
  const advanced = useRef(false);

  useEffect(() => {
    if (advanced.current) return;
    const today = new Date().toISOString().split("T")[0];
    if (lastSessionDate === today) return; // already did a session today

    const arc = weeklyArcs[currentArcIndex % weeklyArcs.length];
    const prompt = arc.dailyPrompts[currentDayIndex % arc.dailyPrompts.length];
    const alreadyCompleted = entries.some((e) => e.dailyPromptId === prompt.id);

    if (alreadyCompleted) {
      advanced.current = true;
      advanceDay();
    }
  }, [currentArcIndex, currentDayIndex, entries, lastSessionDate, advanceDay]);
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function StreakDisplay({ streak }: { streak: number }) {
  if (streak === 0) return null;
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl ember-glow" aria-hidden="true">&#9632;</span>
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
  const arc = weeklyArcs[arcIndex % weeklyArcs.length];
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
  useAutoAdvance();
  const { currentArcIndex, currentDayIndex, entries, streak, totalSessions, draft } =
    useForgeStore();

  const arc = weeklyArcs[currentArcIndex % weeklyArcs.length];
  const prompt = arc.dailyPrompts[currentDayIndex % arc.dailyPrompts.length];
  const recentEntries = [...entries].reverse().slice(0, 3);
  const arcEntries = entries.filter((e) => e.weeklyArcId === arc.id);
  const hasDraft =
    !!(draft?.reflectionText?.trim() || draft?.extensionText?.trim() || draft?.distillationText?.trim() || draft?.applicationText?.trim());

  return (
    <>
      <OnboardingModal />
      <StreakMilestone streak={streak} />
      <motion.div
        className="space-y-12"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
      {/* Hero */}
      <motion.div variants={emerge}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs text-muted-foreground/50 uppercase tracking-wider">
              {getGreeting()}
            </p>
            <h1 className="display-heading text-2xl sm:text-3xl font-semibold mt-0.5 hidden md:block">
              Mind Forge
            </h1>
            <p className="mt-1 text-sm sm:text-base text-muted-foreground">
              Turn ideas into mental strength, personal wisdom, and
              conversational brilliance.
            </p>
          </div>
          <StreakDisplay streak={streak} />
        </div>
      </motion.div>

      {/* Resume session — when draft has content */}
      {hasDraft && (
        <motion.div variants={settle}>
          <Card className="bg-card border-gold/20 overflow-hidden">
            <CardContent className="pt-5 pb-5">
              <p className="text-xs text-gold/70 uppercase tracking-wider mb-1">
                In progress
              </p>
              <p className="text-sm text-foreground/90 mb-3">
                You have an unfinished session. Pick up where you left off.
              </p>
              <Link href="/daily-forge">
                <Button className="gold-shimmer text-primary-foreground">
                  Continue today&apos;s session &rarr;
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Today's Theme + CTA */}
      <motion.div variants={settle}>
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
            <p className="text-sm text-foreground/70 mb-5 prose-width">
              {prompt.sparkText.slice(0, 320)}
              {prompt.sparkText.length > 320 ? "…" : ""}
            </p>
            <Link href="/daily-forge">
              <Button className="gold-shimmer text-primary-foreground">
                {hasDraft ? "Continue" : "Start today's forge"} &rarr;
              </Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>

      {/* Yesterday's carry line */}
      {(() => {
        const yesterday = [...entries].reverse().find((e) => e.carryLine);
        if (!yesterday) return null;
        return (
          <motion.div variants={settle}>
            <Card className="bg-card border-gold/10">
              <CardContent className="pt-5 pb-5">
                <p className="text-[10px] text-gold/50 uppercase tracking-wider mb-1.5">
                  Carry line
                </p>
                <p className="text-sm text-foreground/80 italic">
                  &ldquo;{yesterday.carryLine}&rdquo;
                </p>
                {yesterday.carryAction && (
                  <p className="text-[10px] text-muted-foreground/40 mt-1.5 capitalize">
                    Action: {yesterday.carryAction} something
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        );
      })()}

      {/* Stats Row */}
      <motion.div
        variants={settle}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
      >
        <Card className="bg-card border-border/50 card-hover">
          <CardContent className="pt-5 pb-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl stat-number">{totalSessions}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Sessions completed
                </p>
              </div>
              <div className="text-gold/30">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" /><circle cx="12" cy="12" r="4" /></svg>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border/50 card-hover">
          <CardContent className="pt-5 pb-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl stat-number">
                  {new Set(entries.map((e) => e.weeklyArcId)).size}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Themes explored
                </p>
              </div>
              <div className="text-gold/30">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 7l10-4 10 4-10 4z" /><path d="M2 17l10 4 10-4" /><path d="M2 12l10 4 10-4" /></svg>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border/50 card-hover">
          <CardContent className="pt-5 pb-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl stat-number">
                  {entries.filter((e) => e.favorited).length}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Saved insights
                </p>
              </div>
              <div className="text-gold/30">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Weekly Progress */}
      <motion.div variants={settle}>
        <Card className="bg-card border-border/50">
          <CardContent className="pt-5 pb-5">
            <WeeklyProgress arcIndex={currentArcIndex} entries={arcEntries} />
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Capture */}
      <motion.div variants={settle}>
        <QuickCaptureWidget />
      </motion.div>

      {/* Recent Insights */}
      <motion.div variants={settle}>
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
          <Card className="bg-card border-border/30 border-dashed">
            <CardContent className="pt-10 pb-10 text-center space-y-3">
              <div className="text-muted-foreground/30 mx-auto w-fit">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7l10-4 10 4-10 4z" /><path d="M2 17l10 4 10-4" /><path d="M2 12l10 4 10-4" /></svg>
              </div>
              <p className="text-muted-foreground text-sm">
                Your strongest insights from each session will appear here. Complete your first Daily Forge to start building the list.
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
                <Link key={entry.id} href={`/vault?entry=${entry.id}`}>
                  <Card className="bg-card border-border/30 card-hover cursor-pointer">
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
                </Link>
              );
            })}
          </div>
        )}
      </motion.div>
    </motion.div>
    </>
  );
}
