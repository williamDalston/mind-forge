"use client";

import { useState } from "react";
import { Calibration } from "@/types";
import { motion } from "framer-motion";

const DIMENSIONS = [
  { key: "energy" as const, label: "Energy", low: "Depleted", high: "Charged" },
  { key: "clarity" as const, label: "Clarity", low: "Foggy", high: "Sharp" },
  { key: "mood" as const, label: "Mood", low: "Heavy", high: "Light" },
];

export function CalibrationCheck({
  onComplete,
}: {
  onComplete: (calibration: Calibration) => void;
}) {
  const [values, setValues] = useState<Calibration>({ energy: 3, clarity: 3, mood: 3 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
    >
      <div>
        <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-1">
          Before you begin
        </p>
        <p className="text-sm text-foreground/70">
          Where are you right now? Five seconds. Be honest.
        </p>
      </div>

      <div className="space-y-4">
        {DIMENSIONS.map((dim) => (
          <div key={dim.key} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{dim.label}</span>
              <span className="text-[10px] text-muted-foreground/60">
                {values[dim.key] <= 2 ? dim.low : values[dim.key] >= 4 ? dim.high : "Neutral"}
              </span>
            </div>
            <div
              role="group"
              aria-label={`${dim.label}: ${values[dim.key] <= 2 ? dim.low : values[dim.key] >= 4 ? dim.high : "Neutral"}`}
              className="relative h-2 rounded-full bg-muted/30"
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gold/60 transition-all duration-200 ease-out"
                style={{ width: `${(values[dim.key] / 5) * 100}%` }}
              />
              <div className="absolute inset-0 flex">
                {[1, 2, 3, 4, 5].map((level) => (
                  <button
                    key={level}
                    onClick={() => setValues((v) => ({ ...v, [dim.key]: level }))}
                    aria-label={`${dim.label} level ${level} of 5`}
                    aria-pressed={level <= values[dim.key]}
                    className="flex-1 h-full py-3 -my-2 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => onComplete(values)}
        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs bg-gold/10 border border-gold/20 text-gold hover:bg-gold/15 hover:border-gold/30 transition-all"
      >
        Begin
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
      </button>
    </motion.div>
  );
}
