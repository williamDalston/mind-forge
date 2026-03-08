"use client";

import { useMemo, useState, useRef, useCallback } from "react";
import { useForgeStore } from "@/store/forge-store";
import { weeklyArcs } from "@/data/weekly-arcs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { emerge, settle, stagger } from "@/lib/motion";

interface PatternAnalysis {
  recurringMotifs: string[];
  blindSpots: string[];
  growthEdges: string[];
  selfPortrait: string;
  nextChallenge: string;
}

export default function ReviewPage() {
  const { entries, currentArcIndex, streak, totalSessions } = useForgeStore();

  const arc = weeklyArcs[currentArcIndex];
  const arcEntries = entries.filter((e) => e.weeklyArcId === arc.id);

  // Weekly voice letter state
  const [letterText, setLetterText] = useState("");
  const [letterLoading, setLetterLoading] = useState(false);
  const [letterAudioUrl, setLetterAudioUrl] = useState<string | null>(null);
  const letterAudioRef = useRef<HTMLAudioElement | null>(null);

  // Pattern analysis state
  const [patterns, setPatterns] = useState<PatternAnalysis | null>(null);
  const [patternsLoading, setPatternsLoading] = useState(false);

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

  // Generate weekly voice letter
  const handleGenerateLetter = useCallback(async () => {
    if (arcEntries.length === 0) return;
    setLetterLoading(true);
    setLetterText("");
    setLetterAudioUrl(null);

    try {
      const entryData = arcEntries.map((e) => {
        const p = weeklyArcs
          .flatMap((a) => a.dailyPrompts)
          .find((pr) => pr.id === e.dailyPromptId);
        return {
          dayLabel: p?.dayLabel || "",
          distillationText: e.distillationText,
          reflectionText: e.reflectionText,
          carryLine: e.carryLine,
        };
      });

      const res = await fetch("/api/weekly-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ entries: entryData }),
      });

      if (!res.ok) throw new Error();
      const data = await res.json();
      setLetterText(data.text);

      if (data.audio) {
        const audioBlob = Uint8Array.from(atob(data.audio), (c) => c.charCodeAt(0));
        const blob = new Blob([audioBlob], { type: "audio/mpeg" });
        const url = URL.createObjectURL(blob);
        setLetterAudioUrl(url);
      }
    } catch {
      setLetterText("Could not generate your weekly letter. Try again.");
    } finally {
      setLetterLoading(false);
    }
  }, [arcEntries]);

  const handlePlayLetter = useCallback(() => {
    if (!letterAudioUrl) return;
    if (letterAudioRef.current) {
      if (letterAudioRef.current.paused) {
        letterAudioRef.current.play();
      } else {
        letterAudioRef.current.pause();
      }
      return;
    }
    const audio = new Audio(letterAudioUrl);
    letterAudioRef.current = audio;
    audio.play();
    audio.onended = () => {
      letterAudioRef.current = null;
    };
  }, [letterAudioUrl]);

  // Generate pattern analysis
  const handleAnalyzePatterns = useCallback(async () => {
    if (entries.length < 3) return;
    setPatternsLoading(true);
    setPatterns(null);

    try {
      const entryData = entries.slice(-20).map((e) => ({
        date: e.date,
        distillationText: e.distillationText,
        reflectionText: e.reflectionText,
        carryLine: e.carryLine,
        carryAction: e.carryAction,
        tags: e.tags,
      }));

      const res = await fetch("/api/patterns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ entries: entryData }),
      });

      if (!res.ok) throw new Error();
      const data = await res.json();
      setPatterns(data);
    } catch {
      setPatterns(null);
    } finally {
      setPatternsLoading(false);
    }
  }, [entries]);

  return (
    <motion.div className="space-y-10" variants={stagger} initial="hidden" animate="visible">
      <PageHeader
        title="Forge Review"
        subtitle="Track your intellectual growth and reflect on your journey."
      />

      {/* Growth Stats */}
      <motion.div
        variants={emerge}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Total Sessions", value: totalSessions },
          { label: "Current Streak", value: `${streak} day${streak !== 1 ? "s" : ""}` },
          { label: "Themes Explored", value: themesExplored },
          { label: "Favorited Insights", value: favoritedEntries.length },
        ].map((stat) => (
          <Card key={stat.label} className="bg-card border-border/50 card-hover">
            <CardContent className="pt-6 pb-6">
              <p className="text-2xl stat-number">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Current Week Review */}
      <motion.div variants={settle}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
          <h2 className="font-display text-lg sm:text-xl font-semibold">
            This Week: {arc.title}
          </h2>
          <Badge
            variant="outline"
            className="border-gold/30 text-gold text-xs capitalize w-fit"
          >
            {arc.themeCategory}
          </Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Weekly completion */}
          <Card className="bg-card border-border/50">
            <CardContent className="pt-5 pb-5 space-y-3">
              <h3 className="text-sm font-medium">Completion</h3>
              <div className="flex gap-1 sm:gap-1.5">
                {arc.dailyPrompts.map((prompt, i) => {
                  const completed = arcEntries.some(
                    (e) => e.dailyPromptId === prompt.id
                  );
                  return (
                    <div
                      key={prompt.id}
                      className={cn(
                        "flex-1 h-7 sm:h-8 rounded flex items-center justify-center text-[10px] sm:text-xs",
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

      {/* Weekly Voice Letter */}
      <motion.div variants={settle}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl font-semibold">
            Weekly Voice Letter
          </h2>
          {arcEntries.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleGenerateLetter}
              disabled={letterLoading}
              className="text-xs border-gold/30 text-gold/80 hover:text-gold"
            >
              {letterLoading ? (
                <span className="flex items-center gap-1.5">
                  <div className="h-3 w-3 animate-spin rounded-full border border-gold/30 border-t-gold" />
                  Generating...
                </span>
              ) : letterText ? (
                "Regenerate"
              ) : (
                "Generate Letter"
              )}
            </Button>
          )}
        </div>

        {letterText ? (
          <Card className="bg-card border-gold/15">
            <CardContent className="pt-6 pb-6 space-y-4">
              <p className="text-sm leading-relaxed text-foreground/85 italic">
                {letterText}
              </p>
              {letterAudioUrl && (
                <button
                  onClick={handlePlayLetter}
                  aria-label="Play weekly voice letter audio"
                  className="text-xs text-gold/50 hover:text-gold/80 transition-colors flex items-center gap-1.5"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Listen to your weekly letter
                </button>
              )}
            </CardContent>
          </Card>
        ) : arcEntries.length === 0 ? (
          <Card className="bg-card border-border/30">
            <CardContent className="pt-8 pb-8 text-center">
              <p className="text-muted-foreground text-sm">
                Complete sessions this week to receive your weekly voice letter.
              </p>
            </CardContent>
          </Card>
        ) : !letterLoading ? (
          <Card className="bg-card border-border/30 border-dashed">
            <CardContent className="pt-8 pb-8 text-center">
              <p className="text-muted-foreground text-sm">
                Click &ldquo;Generate Letter&rdquo; to hear a personal reflection on your week.
              </p>
            </CardContent>
          </Card>
        ) : null}
      </motion.div>

      {/* Best Lines This Week */}
      <motion.div variants={settle}>
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
                  "bg-card border-border/30 card-hover",
                  d.favorited && "border-gold/20 favorited-accent"
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

      {/* Pattern Mirror — AI-powered */}
      <motion.div variants={settle}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl font-semibold">
            Pattern Mirror
          </h2>
          {entries.length >= 3 && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleAnalyzePatterns}
              disabled={patternsLoading}
              className="text-xs border-gold/30 text-gold/80 hover:text-gold"
            >
              {patternsLoading ? (
                <span className="flex items-center gap-1.5">
                  <div className="h-3 w-3 animate-spin rounded-full border border-gold/30 border-t-gold" />
                  Analyzing...
                </span>
              ) : patterns ? (
                "Re-analyze"
              ) : (
                "Analyze Patterns"
              )}
            </Button>
          )}
        </div>

        {patterns ? (
          <div className="space-y-4">
            {/* Self portrait */}
            <Card className="bg-card border-gold/15">
              <CardContent className="pt-5 pb-5 space-y-2">
                <h3 className="text-xs font-medium text-gold/70 uppercase tracking-wider">
                  Self-Portrait
                </h3>
                <p className="text-sm leading-relaxed text-foreground/85">
                  {patterns.selfPortrait}
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Recurring motifs */}
              <Card className="bg-card border-border/50">
                <CardContent className="pt-5 pb-5 space-y-2">
                  <h3 className="text-xs font-medium text-foreground/60 uppercase tracking-wider">
                    Recurring Motifs
                  </h3>
                  <ul className="space-y-1.5">
                    {patterns.recurringMotifs.map((m, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="text-gold/50 mt-1 shrink-0">&#8226;</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Growth edges */}
              <Card className="bg-card border-border/50">
                <CardContent className="pt-5 pb-5 space-y-2">
                  <h3 className="text-xs font-medium text-foreground/60 uppercase tracking-wider">
                    Growth Edges
                  </h3>
                  <ul className="space-y-1.5">
                    {patterns.growthEdges.map((g, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="text-gold/50 mt-1 shrink-0">&#8226;</span>
                        {g}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Blind spots */}
            {patterns.blindSpots.length > 0 && (
              <Card className="bg-card border-ember/10">
                <CardContent className="pt-5 pb-5 space-y-2">
                  <h3 className="text-xs font-medium text-ember/60 uppercase tracking-wider">
                    Blind Spots
                  </h3>
                  <ul className="space-y-1.5">
                    {patterns.blindSpots.map((b, i) => (
                      <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                        <span className="text-ember/40 mt-1 shrink-0">&#8226;</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Next challenge */}
            <Card className="bg-card border-gold/10">
              <CardContent className="pt-5 pb-5 space-y-2">
                <h3 className="text-xs font-medium text-gold/70 uppercase tracking-wider">
                  Your Next Challenge
                </h3>
                <p className="text-sm leading-relaxed text-foreground/85 italic">
                  {patterns.nextChallenge}
                </p>
              </CardContent>
            </Card>
          </div>
        ) : entries.length < 3 ? (
          <Card className="bg-card border-border/30">
            <CardContent className="pt-8 pb-8 text-center">
              <p className="text-muted-foreground text-sm">
                Complete at least 3 sessions for AI pattern analysis.
                You have {entries.length} of 3 needed.
              </p>
            </CardContent>
          </Card>
        ) : !patternsLoading ? (
          <Card className="bg-card border-border/30 border-dashed">
            <CardContent className="pt-8 pb-8 text-center">
              <p className="text-muted-foreground text-sm">
                Click &ldquo;Analyze Patterns&rdquo; to see what your entries reveal about you.
              </p>
            </CardContent>
          </Card>
        ) : null}
      </motion.div>

      {/* All-time Recurring Themes */}
      <motion.div variants={settle}>
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
    </motion.div>
  );
}
