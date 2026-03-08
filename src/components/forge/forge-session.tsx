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
import { CalibrationCheck } from "./calibration-check";
import { CarryLine } from "./carry-line";
import { ConversationRehearsal } from "./conversation-rehearsal";
import { VoiceCapture } from "./voice-capture";
import { SparkTextReveal } from "./spark-text-reveal";
import { turn, ignite } from "@/lib/motion";

const HONESTY_NUDGES = [
  "Write the honest answer, not the flattering one.",
  "You do not need to be noble here. Just accurate.",
  "Say it without softening it.",
  "The comfortable answer is probably not the true one.",
  "Write the true answer first. Do not optimize for sounding smart.",
  "Specific beats impressive.",
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
    setDraftCalibration,
    setDraftAiResponse,
    completeSession,
    clearDraft,
    advanceDay,
    updateLastEntryCarry,
    getEntryForPrompt,
  } = useForgeStore();

  const arc = weeklyArcs[currentArcIndex];
  const prompt = arc.dailyPrompts[currentDayIndex];
  const existingEntry = getEntryForPrompt(prompt.id);
  const step = FORGE_STEPS[currentStep];
  const [completed, setCompleted] = useState(false);
  const [savedDistillation, setSavedDistillation] = useState("");
  const [calibrated, setCalibrated] = useState(!!draft.calibration);
  const [carrySaved, setCarrySaved] = useState(false);
  const [savedCarryLine, setSavedCarryLine] = useState("");
  const [deepeningShown, setDeepeningShown] = useState(false);
  const [deepeningText, setDeepeningText] = useState("");
  const [deepeningLoading, setDeepeningLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioLoading, setAudioLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  // Warn before navigating away with unsaved draft content
  useEffect(() => {
    const hasDraftContent =
      draft.reflectionText || draft.extensionText || draft.distillationText || draft.applicationText;

    if (!hasDraftContent || completed) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [draft, completed]);

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
  const currentValue = currentField ? (draft[currentField] as string) || "" : "";
  const currentPromptText = promptMap[step.key] || "";

  // For apply step, skip if no applicationPrompt
  const hasApplicationPrompt = !!prompt.applicationPrompt;
  const effectiveLastStep = hasApplicationPrompt ? FORGE_STEPS.length - 1 : FORGE_STEPS.length - 2;

  const canGoNext =
    (currentStep === 0 && calibrated) || (currentStep > 0 && currentValue.trim().length > 0);

  const isLastStep = currentStep === effectiveLastStep;

  const handleComplete = useCallback(() => {
    setSavedDistillation(draft.distillationText);
    completeSession();
    setCompleted(true);
  }, [completeSession, draft.distillationText]);

  const handleNext = useCallback(() => {
    if (isLastStep) {
      handleComplete();
    } else {
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
    clearDraft();
    advanceDay();
    setCompleted(false);
    router.push("/daily-forge");
  }, [clearDraft, advanceDay, router]);

  const handleSpeak = useCallback(async (text: string) => {
    if (audioLoading) return;
    if (audioUrl) {
      if (audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }
      return;
    }
    setAudioLoading(true);
    try {
      const res = await fetch("/api/speak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) throw new Error("TTS failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.play();
      audio.onended = () => {
        URL.revokeObjectURL(url);
        setAudioUrl(null);
        audioRef.current = null;
      };
    } catch {
      console.error("Speech generation failed");
    } finally {
      setAudioLoading(false);
    }
  }, [audioLoading, audioUrl]);

  // Real AI deepening challenge
  const handleDeepeningChallenge = useCallback(async () => {
    setDeepeningLoading(true);
    try {
      const res = await fetch("/api/challenge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userText: currentValue,
          arcTitle: arc.title,
          step: step.key,
        }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setDeepeningText(data.result);
    } catch {
      setDeepeningText("What part of this answer is still edited for comfort? What would the version without self-protection sound like?");
    } finally {
      setDeepeningLoading(false);
      setDeepeningShown(true);
    }
  }, [currentValue, arc.title, step.key]);

  // Handle voice transcription — append to current field
  const handleVoiceTranscription = useCallback(
    (text: string) => {
      if (!currentField) return;
      const existing = (draft[currentField] as string) || "";
      const newValue = existing ? `${existing} ${text}` : text;
      setDraftField(currentField, newValue);
    },
    [currentField, draft, setDraftField]
  );

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
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center pt-2">
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
        variants={ignite}
        initial="hidden"
        animate="visible"
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
            {savedDistillation && (
              <div className="max-w-md mx-auto space-y-2">
                <p className="text-sm text-foreground/80 italic border-l-2 border-gold/30 pl-3">
                  &ldquo;{savedDistillation}&rdquo;
                </p>
                <button
                  onClick={() => handleSpeak(savedDistillation)}
                  disabled={audioLoading}
                  aria-label={audioLoading ? "Generating audio" : audioUrl ? "Pause playback" : "Hear your distillation spoken aloud"}
                  className="text-xs text-gold/50 hover:text-gold/80 transition-colors flex items-center gap-1.5 mx-auto"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {audioUrl ? (
                      <>
                        <rect x="6" y="4" width="4" height="16" />
                        <rect x="14" y="4" width="4" height="16" />
                      </>
                    ) : (
                      <polygon points="5 3 19 12 5 21 5 3" />
                    )}
                  </svg>
                  {audioLoading ? "Generating..." : audioUrl ? "Playing" : "Hear it spoken"}
                </button>
              </div>
            )}

            {/* Carry line — saves directly to the completed entry */}
            {!carrySaved ? (
              <div className="max-w-md mx-auto w-full text-left">
                <CarryLine
                  onSave={(line, action) => {
                    updateLastEntryCarry(line, action);
                    setSavedCarryLine(line);
                    setCarrySaved(true);
                  }}
                />
              </div>
            ) : (
              <div className="max-w-md mx-auto">
                <p className="text-xs text-muted-foreground/50">
                  Carrying: <span className="text-foreground/60">{savedCarryLine}</span>
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center pt-2">
              <Button variant="outline" onClick={() => { clearDraft(); router.push("/vault"); }}>
                View in Vault
              </Button>
              <Button variant="outline" onClick={() => { clearDraft(); router.push("/"); }}>
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
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-1 flex-wrap">
          <span className={cn(isDay5 ? "text-ember" : "text-gold/70")}>
            {arc.title}
          </span>
          <span>&middot;</span>
          <span>Day {currentDayIndex + 1}: {prompt.dayLabel}</span>
          <Badge
            variant="outline"
            className={cn(
              "text-[10px] capitalize",
              isDay5 ? "border-ember/30 text-ember/70" : "border-border/40"
            )}
          >
            {sparkFormLabel}
          </Badge>
        </div>
        <h1 className={cn(
          "font-display text-xl sm:text-2xl font-semibold",
          isDay5 && "text-foreground"
        )}>
          {prompt.title}
        </h1>
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

      {/* Tension note */}
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
          variants={turn}
          initial="hidden"
          animate="visible"
          exit="exit"
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
                /* Spark step - calibration then idea */
                <div className="space-y-4">
                  {!calibrated && (
                    <CalibrationCheck
                      onComplete={(cal) => {
                        setDraftCalibration(cal);
                        setCalibrated(true);
                      }}
                    />
                  )}
                  {calibrated && (
                    <>
                      <SparkTextReveal
                        text={prompt.sparkText}
                        className={cn(
                          isDay5 ? "text-foreground" : "text-foreground/90"
                        )}
                        charDelay={isDay5 ? 40 : 30}
                      />
                      <p className="text-sm text-muted-foreground italic">
                        {isDay5
                          ? "Sit with this before you respond. When you're ready, continue."
                          : "Read the passage above. When you\u2019re ready, continue to reflect."}
                      </p>
                    </>
                  )}
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
                      "min-h-[200px] bg-background resize-none text-base leading-relaxed",
                      isDay5
                        ? "border-ember/20 focus:border-ember/40"
                        : "border-border/40 focus:border-gold/40"
                    )}
                    value={currentValue}
                    onChange={(e) =>
                      setDraftField(currentField, e.target.value)
                    }
                  />

                  {/* Voice capture + character count row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <VoiceCapture onTranscription={handleVoiceTranscription} />
                      {step.key === "distill" && currentValue.trim().length > 10 && (
                        <button
                          onClick={() => handleSpeak(currentValue)}
                          disabled={audioLoading}
                          aria-label={audioLoading ? "Generating audio" : audioUrl ? "Pause playback" : "Say it aloud"}
                          className="text-xs text-gold/50 hover:text-gold/80 transition-colors flex items-center gap-1.5"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {audioUrl ? (
                              <>
                                <rect x="6" y="4" width="4" height="16" />
                                <rect x="14" y="4" width="4" height="16" />
                              </>
                            ) : (
                              <polygon points="5 3 19 12 5 21 5 3" />
                            )}
                          </svg>
                          {audioLoading ? "Generating..." : audioUrl ? "Playing" : "Say it aloud"}
                        </button>
                      )}
                    </div>
                    {currentValue && (
                      <p className="text-xs text-muted-foreground">
                        {currentValue.length} characters
                      </p>
                    )}
                  </div>

                  {/* Conversation rehearsal on distill step */}
                  {step.key === "distill" && currentValue.trim().length > 10 && (
                    <ConversationRehearsal text={currentValue} />
                  )}

                  {/* Deepening challenge — real AI, available on all days with 50+ chars */}
                  {currentValue.trim().length > 50 && !deepeningShown && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <button
                        onClick={handleDeepeningChallenge}
                        disabled={deepeningLoading}
                        className={cn(
                          "text-xs transition-colors italic flex items-center gap-1.5",
                          isDay5
                            ? "text-ember/40 hover:text-ember/70"
                            : "text-gold/40 hover:text-gold/70"
                        )}
                      >
                        {deepeningLoading ? (
                          <>
                            <div className="h-3 w-3 animate-spin rounded-full border border-gold/30 border-t-gold" />
                            Thinking...
                          </>
                        ) : (
                          "Go deeper \u2192"
                        )}
                      </button>
                    </motion.div>
                  )}

                  {deepeningShown && deepeningText && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "text-xs italic border-l-2 pl-3 py-1",
                        isDay5
                          ? "text-ember/60 border-ember/20"
                          : "text-gold/60 border-gold/20"
                      )}
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
            step={step.key}
            onSaveChallenge={(text) => setDraftAiResponse("aiChallenge", text)}
            onSaveRefinement={(text) => setDraftAiResponse("aiRefinement", text)}
            onSaveConversation={(text) => setDraftAiResponse("conversationVersion", text)}
          />
        </motion.div>
      )}

      {/* Emotional goal — subtle footer */}
      {prompt.emotionalGoal && currentStep === 0 && (
        <p className="text-[11px] text-muted-foreground/60 text-center">
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
