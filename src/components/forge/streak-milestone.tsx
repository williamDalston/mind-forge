"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const MILESTONE_KEY = "mind-forge-last-milestone";
const MILESTONES = [7, 30, 100];
const MESSAGES: Record<number, string> = {
  7: "One week of consistent practice. You're building a habit.",
  30: "Thirty days. Your thinking is tangibly sharper.",
  100: "One hundred sessions. This is part of who you are now.",
};

export function StreakMilestone({ streak }: { streak: number }) {
  const [celebrating, setCelebrating] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || streak < MILESTONES[0]) return;
    const last = parseInt(localStorage.getItem(MILESTONE_KEY) ?? "0", 10);
    const next = MILESTONES.find((m) => m > last && streak >= m) ?? null;
    if (next != null) {
      setCelebrating(next);
      localStorage.setItem(MILESTONE_KEY, String(next));
    }
  }, [streak]);

  if (celebrating == null) return null;

  return (
    <Dialog open={true} onOpenChange={() => setCelebrating(null)}>
      <DialogContent className="bg-card border-gold/30 max-w-sm text-center">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-gold">
            {celebrating} days
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          {MESSAGES[celebrating]}
        </p>
        <div className="text-4xl pt-2 ember-glow">&#9632;</div>
        <Button
          onClick={() => setCelebrating(null)}
          className="gold-shimmer text-primary-foreground"
        >
          Continue
        </Button>
      </DialogContent>
    </Dialog>
  );
}
