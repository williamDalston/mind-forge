"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ONBOARDING_KEY = "mind-forge-onboarding-done";

export function OnboardingModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const done = localStorage.getItem(ONBOARDING_KEY);
    if (done) return;
    setOpen(true);
  }, []);

  const finish = () => {
    localStorage.setItem(ONBOARDING_KEY, "true");
    setOpen(false);
  };

  const reasons = [
    { id: "sharper", label: "Sharper thinking" },
    { id: "conversations", label: "Better conversations" },
    { id: "consistency", label: "Daily consistency" },
    { id: "depth", label: "More depth, less noise" },
  ];

  return (
    <Dialog open={open} onOpenChange={(v) => !v && finish()}>
      <DialogContent className="bg-card border-gold/20 max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-lg">
            {step === 0 ? "What brought you here?" : "How Mind Forge works"}
          </DialogTitle>
        </DialogHeader>
        {step === 0 ? (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Pick one (or just continue). This helps set the tone.
            </p>
            <div className="grid grid-cols-1 gap-2">
              {reasons.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-left px-4 py-3 rounded-lg border border-border/50 hover:border-gold/30 hover:bg-gold/5 text-sm transition-colors"
                >
                  {r.label}
                </button>
              ))}
            </div>
            <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
              Skip
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Each day you get one idea. You reflect, extend it with your own thought,
              distill a portable insight, and optionally apply it. Sessions take a few minutes.
              Over time you build a vault of insights you can search and use in real life.
            </p>
            <Button onClick={finish} className="w-full gold-shimmer text-primary-foreground">
              Get started
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
