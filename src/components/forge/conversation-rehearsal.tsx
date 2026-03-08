"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const STYLES = [
  { key: "casual", label: "Casual" },
  { key: "elegant", label: "Elegant" },
  { key: "shorter", label: "Shorter" },
  { key: "warmer", label: "Warmer" },
];

export function ConversationRehearsal({ text }: { text: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeStyle, setActiveStyle] = useState("");
  const [copied, setCopied] = useState(false);

  const handleRehearsal = async (style: string) => {
    if (loading) return;
    setActiveStyle(style);
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("/api/rehearse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, style }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setResult(data.result);
    } catch {
      setResult("Could not generate. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!text || text.trim().length < 10) return null;

  return (
    <div className="space-y-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-xs text-gold/40 hover:text-gold/70 transition-colors flex items-center gap-1.5"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        Make it speakable
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="rounded-lg border border-border/30 bg-card/50 p-3 space-y-3">
              <div className="flex gap-1.5 flex-wrap">
                {STYLES.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => handleRehearsal(s.key)}
                    disabled={loading}
                    className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] border transition-all",
                      activeStyle === s.key && result
                        ? "border-gold/30 bg-gold/10 text-gold"
                        : "border-border/20 text-muted-foreground/50 hover:text-muted-foreground hover:border-border/40"
                    )}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {loading && (
                <p className="text-xs text-muted-foreground/60 italic" role="status">
                  Shaping...
                </p>
              )}

              {result && !loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-2"
                >
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    &ldquo;{result}&rdquo;
                  </p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(result);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    aria-label="Copy rehearsal to clipboard"
                    className={cn(
                      "text-[10px] transition-colors",
                      copied ? "text-gold" : "text-muted-foreground/40 hover:text-muted-foreground/60"
                    )}
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
