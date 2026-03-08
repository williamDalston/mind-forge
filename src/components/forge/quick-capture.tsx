"use client";

import { useState } from "react";
import { useForgeStore } from "@/store/forge-store";
import { QuickCapture } from "@/types";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const CAPTURE_TYPES: { key: QuickCapture["type"]; label: string; emoji: string }[] = [
  { key: "insight", label: "Insight", emoji: "\u26A1" },
  { key: "line", label: "Strong line", emoji: "\u2726" },
  { key: "pattern", label: "Pattern noticed", emoji: "\u21BB" },
  { key: "truth", label: "Truth", emoji: "\u25C6" },
];

export function QuickCaptureWidget() {
  const { captures, addCapture, deleteCapture } = useForgeStore();
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [type, setType] = useState<QuickCapture["type"]>("insight");

  const handleSave = () => {
    if (!text.trim()) return;
    addCapture(text.trim(), type);
    setText("");
    setIsOpen(false);
  };

  const recentCaptures = [...captures].reverse().slice(0, 5);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-medium">Quick Capture</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xs text-gold/60 hover:text-gold transition-colors flex items-center gap-1"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Capture
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="rounded-xl border border-gold/15 bg-card p-4 space-y-3">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Catch it before it fades..."
                className="w-full bg-background border border-border/40 rounded-lg px-3 py-2 text-sm focus:border-gold/40 focus:outline-none transition-colors"
                autoFocus
                onKeyDown={(e) => e.key === "Enter" && handleSave()}
              />
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  {CAPTURE_TYPES.map((ct) => (
                    <button
                      key={ct.key}
                      onClick={() => setType(ct.key)}
                      className={cn(
                        "px-2.5 py-1 rounded-full text-[10px] border transition-all",
                        type === ct.key
                          ? "border-gold/30 bg-gold/10 text-gold"
                          : "border-border/20 text-muted-foreground/40 hover:text-muted-foreground"
                      )}
                    >
                      {ct.emoji} {ct.label}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleSave}
                  disabled={!text.trim()}
                  className="text-xs text-gold/60 hover:text-gold transition-colors disabled:opacity-30"
                >
                  Save
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {recentCaptures.length > 0 ? (
        <div className="space-y-2">
          {recentCaptures.map((capture) => (
            <div
              key={capture.id}
              className="group flex items-start gap-2 px-3 py-2 rounded-lg bg-card border border-border/20"
            >
              <span className="text-[10px] text-muted-foreground/40 mt-0.5 shrink-0">
                {CAPTURE_TYPES.find((ct) => ct.key === capture.type)?.emoji}
              </span>
              <p className="text-xs text-foreground/70 flex-1 leading-relaxed">
                {capture.text}
              </p>
              <button
                onClick={() => deleteCapture(capture.id)}
                aria-label="Delete capture"
                className="text-[10px] text-muted-foreground/30 hover:text-muted-foreground/50 transition-colors opacity-0 group-hover:opacity-100 shrink-0"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xs text-muted-foreground/30 text-center py-4">
          Sudden insight? Strong line? Capture it here.
        </p>
      )}
    </div>
  );
}
