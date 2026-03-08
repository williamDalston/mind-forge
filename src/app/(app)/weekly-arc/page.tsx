"use client";

import { useForgeStore } from "@/store/forge-store";
import { weeklyArcs } from "@/data/weekly-arcs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { settle } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function WeeklyArcPage() {
  const router = useRouter();
  const {
    currentArcIndex,
    currentDayIndex,
    entries,
    setArc,
    setDay,
  } = useForgeStore();

  const arc = weeklyArcs[currentArcIndex % weeklyArcs.length];
  const completedIds = new Set(entries.map((e) => e.dailyPromptId));

  return (
    <div className="space-y-8">
      <PageHeader
        title={arc.title}
        subtitle={arc.description + " Each day builds on the last; by day 7 you'll have a full arc of reflection on this theme."}
      />

      {/* Arc selector */}
      <div className="flex flex-wrap gap-2">
        {weeklyArcs.map((a, i) => (
          <Button
            key={a.id}
            variant={i === currentArcIndex ? "default" : "outline"}
            size="sm"
            onClick={() => setArc(i)}
            className={cn(
              "text-xs",
              i === currentArcIndex
                ? "bg-gold/90 hover:bg-gold text-primary-foreground"
                : "border-border/60 hover:border-gold/40 hover:text-gold"
            )}
          >
            {a.title}
          </Button>
        ))}
      </div>

      {/* Emotional arc meter */}
      <Card className="bg-card border-border/50">
        <CardContent className="pt-5 pb-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Weekly Emotional Arc</span>
            <span className="text-xs text-muted-foreground">
              {arc.dailyPrompts.filter((p) => completedIds.has(p.id)).length} of
              7 days completed
            </span>
          </div>
          <div className="flex items-center gap-0.5 sm:gap-1">
            {arc.dailyPrompts.map((prompt, i) => {
              const isDay5 = prompt.depthTier === 3;
              const completed = completedIds.has(prompt.id);
              return (
                <div key={prompt.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <div
                      className={cn(
                        "w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-medium transition-colors",
                        completed
                          ? isDay5 ? "bg-ember text-primary-foreground" : "bg-gold text-primary-foreground"
                          : i === currentDayIndex
                          ? isDay5
                            ? "bg-ember/20 text-ember border border-ember/40"
                            : "bg-gold/20 text-gold border border-gold/40"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {completed ? (
                        <span aria-label="Completed">&#10003;</span>
                      ) : (
                        i + 1
                      )}
                    </div>
                    <span className={cn(
                      "text-[9px] sm:text-[10px] leading-tight text-center hidden sm:block",
                      i === currentDayIndex
                        ? isDay5 ? "text-ember/70" : "text-gold/70"
                        : "text-muted-foreground/50"
                    )}>
                      {prompt.dayLabel}
                    </span>
                  </div>
                  {i < arc.dailyPrompts.length - 1 && (
                    <div
                      className={cn(
                        "flex-1 h-0.5 mx-0.5 mb-0 sm:mb-4",
                        completed ? isDay5 ? "bg-ember/50" : "bg-gold/50" : "bg-muted"
                      )}
                    />
                  )}
                </div>
              );
            })}
          </div>
          {/* Depth tier labels */}
          <div className="hidden sm:flex justify-between text-[10px] text-muted-foreground/40 px-2">
            <span>safe observation</span>
            <span className="text-ember/40">the turn</span>
            <span>integration</span>
          </div>
        </CardContent>
      </Card>

      {/* Day cards */}
      <div className="space-y-3">
        {arc.dailyPrompts.map((prompt, i) => {
          const isCompleted = completedIds.has(prompt.id);
          const isCurrent = i === currentDayIndex;
          const isDay5 = prompt.depthTier === 3;
          const sparkFormLabel = prompt.sparkForm.replace(/_/g, " ");

          return (
            <motion.div
              key={prompt.id}
              variants={settle}
              initial="hidden"
              animate="visible"
            >
              <Card
                className={cn(
                  "bg-card cursor-pointer card-hover",
                  isDay5 ? "border-ember/15 hover:border-ember/30" : "border-border/30",
                  isCurrent && (isDay5 ? "border-ember/30" : "border-gold/30"),
                  isCompleted && "opacity-80"
                )}
                onClick={() => {
                  setDay(i);
                  router.push("/daily-forge");
                }}
              >
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-xs",
                            isCurrent
                              ? isDay5 ? "border-ember/40 text-ember" : "border-gold/40 text-gold"
                              : "border-border/40"
                          )}
                        >
                          Day {i + 1}: {prompt.dayLabel}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-[10px] border-border/30 text-muted-foreground/50 capitalize"
                        >
                          {sparkFormLabel}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-[10px] border-border/30",
                            prompt.depthTier === 3 ? "text-ember/50" : "text-muted-foreground/50"
                          )}
                        >
                          Tier {prompt.depthTier}
                        </Badge>
                        {isCompleted && (
                          <span className={cn("text-xs", isDay5 ? "text-ember" : "text-gold")}>&#10003; Completed</span>
                        )}
                        {isCurrent && !isCompleted && (
                          <span className={cn("text-xs", isDay5 ? "text-ember/70" : "text-gold/70")}>Current</span>
                        )}
                      </div>
                      <h3 className="font-medium text-sm mt-1.5">
                        {prompt.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                        {prompt.sparkText.slice(0, 120)}...
                      </p>
                      {prompt.tensionNote && (
                        <p className={cn(
                          "text-[10px] mt-1.5 italic",
                          isDay5 ? "text-ember/30" : "text-muted-foreground/30"
                        )}>
                          {prompt.tensionNote}
                        </p>
                      )}
                    </div>
                    <div className="text-muted-foreground ml-4 mt-1">
                      &rarr;
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
