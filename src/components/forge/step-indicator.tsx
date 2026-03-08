"use client";

import { FORGE_STEPS } from "@/types";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export function StepIndicator({ currentStep, onStepClick }: StepIndicatorProps) {
  return (
    <div className="flex items-center gap-1 w-full">
      {FORGE_STEPS.map((step, i) => (
        <button
          key={step.key}
          onClick={() => onStepClick?.(i)}
          className="flex-1 group"
        >
          <div
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i < currentStep
                ? "bg-gold"
                : i === currentStep
                ? "bg-gold/60"
                : "bg-muted"
            )}
          />
          <span
            className={cn(
              "block mt-1.5 text-xs transition-colors",
              i === currentStep
                ? "text-gold font-medium"
                : i < currentStep
                ? "text-foreground/60"
                : "text-muted-foreground"
            )}
          >
            {step.label}
          </span>
        </button>
      ))}
    </div>
  );
}
