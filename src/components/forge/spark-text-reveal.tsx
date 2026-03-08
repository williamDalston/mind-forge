"use client";

import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

interface SparkTextRevealProps {
  text: string;
  className?: string;
  charDelay?: number;
  onComplete?: () => void;
}

const reducedMotionSubscribe = (cb: () => void) => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const getReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Signature interaction: character-by-character text reveal with ember glow.
 * Each character fades in from blur with a warm color, then settles to inherit.
 * Respects prefers-reduced-motion by showing text immediately.
 */
export function SparkTextReveal({
  text,
  className,
  charDelay = 14,
  onComplete,
}: SparkTextRevealProps) {
  const prefersReduced = useSyncExternalStore(
    reducedMotionSubscribe,
    getReducedMotion,
    () => false
  );

  const [revealedCount, setRevealedCount] = useState(() =>
    typeof window !== "undefined" && getReducedMotion() ? text.length : 0
  );
  const [skipped, setSkipped] = useState(() =>
    typeof window !== "undefined" && getReducedMotion()
  );
  const [showSkip, setShowSkip] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (prefersReduced) {
      onComplete?.();
      return;
    }

    // Show skip button after 2s
    const skipTimer = setTimeout(() => setShowSkip(true), 2000);

    intervalRef.current = setInterval(() => {
      setRevealedCount((prev) => {
        const next = prev + 1;
        if (next >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          onComplete?.();
          return text.length;
        }
        return next;
      });
    }, charDelay);

    return () => {
      clearTimeout(skipTimer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, charDelay, onComplete, prefersReduced]);

  const handleSkip = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRevealedCount(text.length);
    setSkipped(true);
    onComplete?.();
  }, [text.length, onComplete]);

  const isComplete = revealedCount >= text.length;

  return (
    <div className={cn("relative", className)}>
      <p className="text-base leading-relaxed whitespace-pre-wrap prose-width">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className={cn(
              i < revealedCount
                ? skipped
                  ? ""
                  : "animate-[spark-char-reveal_0.5s_ease-out_forwards]"
                : "opacity-0"
            )}
            style={
              !skipped && i < revealedCount
                ? { animationDelay: "0ms" }
                : undefined
            }
          >
            {char}
          </span>
        ))}
      </p>

      {showSkip && !isComplete && (
        <button
          onClick={handleSkip}
          className="absolute -bottom-6 right-0 text-[11px] text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors"
        >
          Skip reveal
        </button>
      )}
    </div>
  );
}
