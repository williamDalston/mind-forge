"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  getMockChallenge,
  getMockRefinement,
  getMockConversationVersion,
} from "@/data/ai-responses";

interface AiToolsPanelProps {
  arcTitle: string;
  userText: string;
  onSaveRefinement?: (text: string) => void;
  onSaveChallenge?: (text: string) => void;
  onSaveConversation?: (text: string) => void;
}

type AiAction = "challenge" | "refine" | "conversation" | null;

export function AiToolsPanel({
  arcTitle,
  userText,
  onSaveRefinement,
  onSaveChallenge,
  onSaveConversation,
}: AiToolsPanelProps) {
  const [activeAction, setActiveAction] = useState<AiAction>(null);
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleAction = (action: AiAction) => {
    if (!userText.trim()) return;
    setActiveAction(action);
    setLoading(true);
    setResponse("");

    setTimeout(() => {
      let result = "";
      switch (action) {
        case "challenge":
          result = getMockChallenge(arcTitle, userText);
          onSaveChallenge?.(result);
          break;
        case "refine":
          result = getMockRefinement(userText);
          onSaveRefinement?.(result);
          break;
        case "conversation":
          result = getMockConversationVersion(userText);
          onSaveConversation?.(result);
          break;
      }
      setResponse(result);
      setLoading(false);
    }, 600);
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
        <div className="rounded-lg bg-muted/50 p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
            Thinking...
          </div>
        </div>
      )}

      {response && !loading && (
        <div className="rounded-lg bg-muted/50 border border-border/50 p-4 space-y-2">
          <div className="flex items-center gap-2 text-xs font-medium text-gold/80 uppercase tracking-wider">
            {activeAction === "challenge" && "Challenge"}
            {activeAction === "refine" && "Refinement"}
            {activeAction === "conversation" && "Conversation Version"}
          </div>
          <div className="text-sm leading-relaxed whitespace-pre-wrap">
            {response}
          </div>
        </div>
      )}
    </div>
  );
}
