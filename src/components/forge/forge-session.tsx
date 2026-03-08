"use client";

import { useForgeStore } from "@/store/forge-store";
import { weeklyArcs } from "@/data/weekly-arcs";
import { FORGE_STEPS } from "@/types";
import { StepIndicator } from "./step-indicator";
import { AiToolsPanel } from "./ai-tools-panel";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { deepeningChallenges } from "@/data/ai-responses";

const HONESTY_NUDGES = [
  "Write the honest answer, not the flattering one.",
  "You do not need to be noble here. Just accurate.",
  "Say it without softening it.",
  "The comfortable answer is probably not the true one.",
];

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function ForgeSession() {
  const router = useRouter();
  const {
    currentArcIndex,
    currentDayIndex,
    currentStep,
    draft,
    setCurrentStep,
    setDraftField,
    completeSession,
    advanceDay,
    getEntryForPrompt,
  } = useForgeStore();

  const arc = weeklyArcs[currentArcIndex];
  const prompt = arc.dailyPrompts[currentDayIndex];
  const existingEntry = getEntryForPrompt(prompt.id);
  const step = FORGE_STEPS[currentStep];
  const [completed, setCompleted] = useState(false);
  const [deepeningShown, setDeepeningShown] = useState(false);
  const [deepeningText, setDeepeningText] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Day 5 (index 4) is "The Turn" — tier 3, confrontational
  const isDay5 = prompt.depthTier === 3;
  const sparkFormLabel = prompt.sparkForm.replace(/_/g, " ");

  useEffect(() => {
    if (currentStep > 0 && textareaRef.current) {
      textareaRef.current.focus();
    }
    setDeepeningShown(false);
    setDeepeningText("");
  }, [currentStep]);

  const fieldMap: Record<string, keyof typeof draft> = {
    reflect: "reflectionText",
    extend: "extensionText",
    distill: "distillationText",
    apply: "applicationText",
  };

  const promptMap: Record<string, string> = {
    reflect: prompt.reflectionPrompt,
    extend: prompt.extensionPrompt,
    distill: prompt.distillationPrompt,
    apply: prompt.applicationPrompt || "",
  };

  const currentField = fieldMap[step.key];
  const currentValue = currentField ? draft[currentField] : "";
  const currentPromptText = promptMap[step.key] || "";

  // For apply step, skip if no applicationPrompt
  const hasApplicationPrompt = !!prompt.applicationPrompt;
  const effectiveLastStep = hasApplicationPrompt ? FORGE_STEPS.length - 1 : FORGE_STEPS.length - 2;

  const canGoNext =
    currentStep === 0 || (currentField && draft[currentField].trim().length > 0);

  const isLastStep = currentStep === effectiveLastStep;

  const handleComplete = useCallback(() => {
    completeSession();
    setCompleted(true);
  }, [completeSession]);

  const handleNext = useCallback(() => {
    if (isLastStep) {
      handleComplete();
    } else {
      // Skip apply step if no applicationPrompt
      const nextStep = currentStep + 1;
      if (nextStep === 4 && !hasApplicationPrompt) {
        handleComplete();
      } else {
        setCurrentStep(nextStep);
      }
    }
  }, [isLastStep, handleComplete, setCurrentStep, currentStep, hasApplicationPrompt]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep, setCurrentStep]);

  const handleContinue = useCallback(() => {
    advanceDay();
    setCompleted(false);
    router.push("/daily-forge");
  }, [advanceDay, router]);

  const handleDeepeningChallenge = useCallback(() => {
    setDeepeningText(randomFrom(deepeningChallenges));
    setDeepeningShown(true);
  }, []);

  if (existingEntry && !completed) {
    return (
      <div className="space-y-6">
        <Card className="bg-card border-border/50">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="text-4xl">&#10003;</div>
            <h2 className="font-display text-xl font-semibold">
              Session Complete
            </h2>
            <p className="text-muted-foreground">
              You&apos;ve already completed today&apos;s forge on{" "}
              <span className="text-foreground">&quot;{prompt.title}&quot;</span>.
              Your insight has been saved to the vault.
            </p>
            <div className="flex gap-3 justify-center pt-2">
              <Button variant="outline" onClick={() => router.push("/vault")}>
                View in Vault
              </Button>
              <Button
                onClick={() => {
                  advanceDay();
                  router.push("/daily-forge");
                }}
                className="bg-gold/90 hover:bg-gold text-primary-foreground"
              >
                Next Prompt
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (completed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-6"
      >
        <Card className="bg-card border-gold/20">
          <CardContent className="pt-8 pb-8 text-center space-y-5">
            <div className="text-5xl ember-glow inline-block">&#9733;</div>
            <h2 className="font-display text-2xl font-semibold">
              Session Forged
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Your insight on &quot;{prompt.title}&quot; has been saved to your
              vault. Each session makes you sharper.
            </p>
            <div className="flex gap-3 justify-center pt-2">
              <Button variant="outline" onClick={() => router.push("/vault")}>
                View in Vault
              </Button>
              <Button variant="outline" onClick={() => router.push("/")}>
                Dashboard
              </Button>
              <Button
                onClick={handleContinue}
                className="bg-gold/90 hover:bg-gold text-primary-foreground"
              >
                Next Prompt
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className={cn("space-y-6", isDay5 && "max-w-2xl mx-auto")}>
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
          <span className={cn(isDay5 ? "text-ember" : "text-gold/70")}>
            {arc.title}
          </span>
          <span>&middot;</span>
          <span>Day {currentDayIndex + 1}: {prompt.dayLabel}</span>
          <Badge
            variant="outline"
            className={cn(
              "text-[10px] capitalize ml-1",
              isDay5 ? "border-ember/30 text-ember/70" : "border-border/40"
            )}
          >
            {sparkFormLabel}
          </Badge>
        </div>
        <h1 className={cn(
          "font-display text-2xl font-semibold",
          isDay5 && "text-foreground"
        )}>
          {prompt.title}
        </h1>
        {/* Day 5 intro signal */}
        {isDay5 && currentStep === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-ember/70 mt-2 italic"
          >
            Today the lens turns inward.
          </motion.p>
        )}
      </div>

      {/* Tension note - shown on spark step */}
      {currentStep === 0 && prompt.tensionNote && (
        <div className={cn(
          "text-xs px-3 py-2 rounded-md",
          isDay5 ? "bg-ember/5 text-ember/50 border border-ember/10" : "bg-muted/30 text-muted-foreground/60"
        )}>
          Tension: {prompt.tensionNote}
        </div>
      )}

      {/* Step indicator */}
      <StepIndicator
        currentStep={currentStep}
        onStepClick={(s) => {
          if (s <= currentStep) setCurrentStep(s);
        }}
      />

      {/* Step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <Card className={cn(
            "bg-card",
            isDay5 ? "border-ember/15" : "border-border/50"
          )}>
            <CardContent className="pt-6 space-y-5">
              <div className="flex items-center gap-2">
                <span className={cn(
                  "text-xs font-medium uppercase tracking-wider",
                  isDay5 ? "text-ember/80" : "text-gold/80"
                )}>
                  {step.label}
                </span>
                <span className="text-xs text-muted-foreground">
                  &mdash; {step.description}
                </span>
              </div>

              {currentStep === 0 ? (
                /* Spark step - display the idea */
                <div className="space-y-4">
                  <div className={cn(
                    "text-base leading-relaxed whitespace-pre-wrap",
                    isDay5 ? "text-foreground" : "text-foreground/90"
                  )}>
                    {prompt.sparkText}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    {isDay5
                      ? "Sit with this before you respond. When you're ready, continue."
                      : "Read the passage above. When you\u2019re ready, continue to reflect."}
                  </p>
                </div>
              ) : (
                /* Writing steps */
                <div className="space-y-4">
                  <p className={cn(
                    "text-sm leading-relaxed",
                    isDay5 ? "text-foreground/90" : "text-foreground/80"
                  )}>
                    {currentPromptText}
                  </p>

                  {/* Honesty nudge for Tier 3 prompts on writing steps */}
                  {isDay5 && currentStep >= 1 && currentStep <= 2 && (
                    <p className="text-xs text-ember/50 italic">
                      {randomFrom(HONESTY_NUDGES)}
                    </p>
                  )}

                  <Textarea
                    ref={textareaRef}
                    placeholder={
                      isDay5
                        ? "Be honest with yourself here..."
                        : "Write your thoughts here..."
                    }
                    className={cn(
                      "min-h-[160px] bg-background resize-none text-base leading-relaxed",
                      isDay5
                        ? "border-ember/20 focus:border-ember/40"
                        : "border-border/40 focus:border-gold/40"
                    )}
                    value={currentValue}
                    onChange={(e) =>
                      setDraftField(currentField, e.target.value)
                    }
                  />
                  {currentValue && (
                    <p className="text-xs text-muted-foreground text-right">
                      {currentValue.length} characters
                    </p>
                  )}

                  {/* Deepening challenge for Tier 3 — shown after user writes something */}
                  {isDay5 && currentValue.trim().length > 50 && !deepeningShown && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <button
                        onClick={handleDeepeningChallenge}
                        className="text-xs text-ember/40 hover:text-ember/70 transition-colors italic"
                      >
                        Go deeper &rarr;
                      </button>
                    </motion.div>
                  )}

                  {deepeningShown && deepeningText && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-ember/60 italic border-l-2 border-ember/20 pl-3 py-1"
                    >
                      {deepeningText}
                    </motion.div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* AI Tools - show on writing steps when there's text */}
      {currentStep > 0 && currentValue.trim() && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AiToolsPanel
            arcTitle={arc.title}
            userText={currentValue}
          />
        </motion.div>
      )}

      {/* Emotional goal — subtle footer */}
      {prompt.emotionalGoal && currentStep === 0 && (
        <p className="text-[11px] text-muted-foreground/40 text-center">
          {prompt.emotionalGoal}
        </p>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={currentStep === 0}
          className="text-muted-foreground"
        >
          &larr; Back
        </Button>

        <Button
          onClick={handleNext}
          disabled={!canGoNext}
          className={cn(
            isLastStep
              ? isDay5
                ? "bg-ember/90 hover:bg-ember text-primary-foreground"
                : "bg-gold/90 hover:bg-gold text-primary-foreground"
              : "bg-secondary hover:bg-accent text-foreground"
          )}
        >
          {isLastStep ? "Complete Session" : "Continue"} &rarr;
        </Button>
      </div>
    </div>
  );
}
