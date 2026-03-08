"use client";

import { FORGE_STEPS } from "@/types";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export function StepIndicator({ currentStep, onStepClick }: StepIndicatorProps) {
  return (
    <div role="navigation" aria-label="Forge steps" className="flex items-center gap-1.5 w-full">
      {FORGE_STEPS.map((step, i) => (
        <button
          key={step.key}
          onClick={() => onStepClick?.(i)}
          disabled={i > currentStep}
          aria-label={`Step ${i + 1}: ${step.label}${i < currentStep ? " (completed)" : i === currentStep ? " (current)" : ""}`}
          aria-current={i === currentStep ? "step" : undefined}
          className={cn(
            "flex-1 group",
            i <= currentStep ? "cursor-pointer" : "cursor-default"
          )}
        >
          <div className="flex items-center gap-1.5">
            <div
              className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium shrink-0 transition-all duration-300 border",
                i < currentStep
                  ? "bg-gold/15 border-gold/30 text-gold"
                  : i === currentStep
                  ? "bg-gold/10 border-gold/40 text-gold step-pulse"
                  : "bg-muted/20 border-border/30 text-muted-foreground/30"
              )}
            >
              {i < currentStep ? (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              ) : (
                i + 1
              )}
            </div>
            <div
              className={cn(
                "flex-1 h-1 rounded-full transition-all duration-300",
                i < currentStep
                  ? "bg-gold"
                  : i === currentStep
                  ? "bg-gold/50 gentle-pulse"
                  : "bg-muted/60"
              )}
            />
          </div>
          <span
            className={cn(
              "hidden sm:block mt-1.5 text-[11px] transition-colors pl-0.5",
              i === currentStep
                ? "text-gold font-medium"
                : i < currentStep
                ? "text-foreground/50"
                : "text-muted-foreground/40"
            )}
          >
            {step.label}
          </span>
        </button>
      ))}
    </div>
  );
}
