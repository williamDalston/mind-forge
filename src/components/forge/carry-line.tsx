"use client";

import { useState } from "react";
import { CarryAction } from "@/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const ACTIONS: { key: CarryAction; label: string }[] = [
  { key: "notice", label: "Notice something" },
  { key: "say", label: "Say something" },
  { key: "decide", label: "Decide something" },
  { key: "stop", label: "Stop something" },
  { key: "build", label: "Build something" },
  { key: "write", label: "Write something" },
];

export function CarryLine({
  onSave,
}: {
  onSave: (carryLine: string, carryAction: CarryAction) => void;
}) {
  const [line, setLine] = useState("");
  const [action, setAction] = useState<CarryAction | null>(null);

  const canSave = line.trim().length > 0 && action;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div>
        <p className="text-xs text-gold/70 uppercase tracking-wider mb-1">
          Carry into life
        </p>
        <p className="text-sm text-foreground/70">
          One line to take with you today. Not a paragraph. A blade.
        </p>
      </div>

      <input
        type="text"
        value={line}
        onChange={(e) => setLine(e.target.value)}
        placeholder="The one thing worth remembering..."
        aria-label="Carry line"
        className="w-full bg-background border border-border/40 rounded-lg px-3 py-2.5 text-sm focus:border-gold/40 focus:outline-none transition-colors"
        maxLength={200}
        autoFocus
      />

      <div>
        <p className="text-xs text-muted-foreground/50 mb-2">
          Today I will:
        </p>
        <div className="flex flex-wrap gap-2">
          {ACTIONS.map((a) => (
            <button
              key={a.key}
              onClick={() => setAction(a.key)}
              aria-pressed={action === a.key}
              className={cn(
                "px-3 py-2.5 rounded-full text-xs border transition-all",
                action === a.key
                  ? "border-gold/40 bg-gold/10 text-gold"
                  : "border-border/30 text-muted-foreground/50 hover:text-muted-foreground hover:border-border/50"
              )}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>

      {canSave && (
        <motion.button
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => onSave(line.trim(), action!)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs bg-gold/10 border border-gold/20 text-gold hover:bg-gold/15 hover:border-gold/30 transition-all"
        >
          Carry this forward
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        </motion.button>
      )}
    </motion.div>
  );
}
