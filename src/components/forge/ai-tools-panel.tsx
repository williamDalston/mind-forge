"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AiToolsPanelProps {
  arcTitle: string;
  userText: string;
  step?: string;
  onSaveRefinement?: (text: string) => void;
  onSaveChallenge?: (text: string) => void;
  onSaveConversation?: (text: string) => void;
}

type AiAction = "challenge" | "refine" | "conversation" | null;

export function AiToolsPanel({
  arcTitle,
  userText,
  step,
  onSaveRefinement,
  onSaveChallenge,
  onSaveConversation,
}: AiToolsPanelProps) {
  const [activeAction, setActiveAction] = useState<AiAction>(null);
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [response]);

  const handleAction = async (action: AiAction) => {
    if (!userText.trim() || loading) return;
    setActiveAction(action);
    setLoading(true);
    setResponse("");

    try {
      let result = "";

      if (action === "challenge") {
        const res = await fetch("/api/challenge", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userText, arcTitle, step }),
        });
        if (!res.ok) throw new Error();
        const data = await res.json();
        result = data.result;
        onSaveChallenge?.(result);
      } else if (action === "refine") {
        const res = await fetch("/api/refine", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userText }),
        });
        if (!res.ok) throw new Error();
        const data = await res.json();
        result = data.result;
        onSaveRefinement?.(result);
      } else if (action === "conversation") {
        const res = await fetch("/api/rehearse", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: userText, style: "casual" }),
        });
        if (!res.ok) throw new Error();
        const data = await res.json();
        result = data.result;
        onSaveConversation?.(result);
      }

      setResponse(result);
    } catch {
      setResponse("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const actions = [
    {
      key: "challenge" as const,
      label: "Challenge Me",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
    },
    {
      key: "refine" as const,
      label: "Refine",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
        </svg>
      ),
    },
    {
      key: "conversation" as const,
      label: "Make Conversational",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {actions.map((action) => (
          <Button
            key={action.key}
            variant="outline"
            size="sm"
            disabled={!userText.trim() || loading}
            onClick={() => handleAction(action.key)}
            className={cn(
              "gap-1.5 text-xs border-border/60 hover:border-gold/40 hover:text-gold transition-colors",
              activeAction === action.key && "border-gold/60 text-gold"
            )}
          >
            {action.icon}
            {action.label}
          </Button>
        ))}
      </div>

      {loading && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg bg-muted/50 p-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
            Thinking...
          </div>
        </motion.div>
      )}

      {response && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg bg-muted/50 border border-border/50 p-4 space-y-2"
        >
          <div className="flex items-center gap-2 text-xs font-medium text-gold/80 uppercase tracking-wider">
            {activeAction === "challenge" && "Challenge"}
            {activeAction === "refine" && "Refinement"}
            {activeAction === "conversation" && "Conversation Version"}
          </div>
          <div className="text-sm leading-relaxed whitespace-pre-wrap prose-width">
            {response}
          </div>
          <button
            onClick={handleCopy}
            aria-label="Copy AI response to clipboard"
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
  );
}
