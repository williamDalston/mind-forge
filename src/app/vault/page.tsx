"use client";

import { useState, useMemo } from "react";
import { useForgeStore } from "@/store/forge-store";
import { weeklyArcs } from "@/data/weekly-arcs";
import { TAGS } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { PageHeader } from "@/components/layout/page-header";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ForgeEntry } from "@/types";

export default function VaultPage() {
  const { entries, toggleFavorite } = useForgeStore();
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<ForgeEntry | null>(null);

  const filteredEntries = useMemo(() => {
    let result = [...entries].reverse();

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (e) =>
          e.distillationText.toLowerCase().includes(q) ||
          e.reflectionText.toLowerCase().includes(q) ||
          e.extensionText.toLowerCase().includes(q) ||
          e.applicationText.toLowerCase().includes(q)
      );
    }

    if (selectedTag) {
      result = result.filter((e) => e.tags.includes(selectedTag));
    }

    if (showFavoritesOnly) {
      result = result.filter((e) => e.favorited);
    }

    return result;
  }, [entries, search, selectedTag, showFavoritesOnly]);

  const getPromptForEntry = (entry: ForgeEntry) => {
    for (const arc of weeklyArcs) {
      const prompt = arc.dailyPrompts.find((p) => p.id === entry.dailyPromptId);
      if (prompt) return { arc, prompt };
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Idea Vault"
        subtitle="Your archive of distilled thoughts, strongest reflections, and conversation-ready insights."
      />

      {/* Search + Filters */}
      <div className="space-y-3">
        <Input
          placeholder="Search your insights..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-background border-border/40 focus:border-gold/40"
        />

        <div className="flex flex-wrap gap-2 items-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={cn(
              "text-xs",
              showFavoritesOnly
                ? "border-gold/40 text-gold"
                : "border-border/60"
            )}
          >
            &#9733; Favorites
          </Button>
          <Separator orientation="vertical" className="h-5" />
          {TAGS.map((tag) => (
            <Button
              key={tag}
              variant="outline"
              size="sm"
              onClick={() =>
                setSelectedTag(selectedTag === tag ? null : tag)
              }
              className={cn(
                "text-xs capitalize",
                selectedTag === tag
                  ? "border-gold/40 text-gold"
                  : "border-border/60"
              )}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filteredEntries.length === 0 ? (
        <Card className="bg-card border-border/30">
          <CardContent className="pt-12 pb-12 text-center">
            {entries.length === 0 ? (
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Your vault is empty.
                </p>
                <p className="text-sm text-muted-foreground">
                  Complete forge sessions to start building your collection of
                  insights.
                </p>
              </div>
            ) : (
              <p className="text-muted-foreground">
                No entries match your filters.
              </p>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          <p className="text-xs text-muted-foreground">
            {filteredEntries.length} insight{filteredEntries.length !== 1 && "s"}
          </p>
          {filteredEntries.map((entry, i) => {
            const info = getPromptForEntry(entry);
            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
              >
                <Card
                  className="bg-card border-border/30 hover:border-border/60 transition-colors cursor-pointer"
                  onClick={() => setSelectedEntry(entry)}
                >
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm leading-relaxed line-clamp-2 mb-2">
                          {entry.distillationText || entry.reflectionText}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          {info && (
                            <span className="text-xs text-muted-foreground">
                              {info.arc.title} &middot; {info.prompt.dayLabel}
                            </span>
                          )}
                          <span className="text-xs text-muted-foreground">
                            {new Date(entry.date).toLocaleDateString()}
                          </span>
                          {entry.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-[10px] border-border/40 capitalize"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(entry.id);
                        }}
                        className={cn(
                          "text-lg transition-colors shrink-0",
                          entry.favorited
                            ? "text-gold"
                            : "text-muted-foreground hover:text-gold/60"
                        )}
                      >
                        {entry.favorited ? "\u2605" : "\u2606"}
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Detail drawer */}
      <Sheet
        open={!!selectedEntry}
        onOpenChange={(open) => !open && setSelectedEntry(null)}
      >
        <SheetContent className="bg-card border-border/50 w-full sm:max-w-lg overflow-y-auto">
          {selectedEntry && (
            <EntryDetail
              entry={selectedEntry}
              onToggleFavorite={() => {
                toggleFavorite(selectedEntry.id);
                setSelectedEntry({
                  ...selectedEntry,
                  favorited: !selectedEntry.favorited,
                });
              }}
              info={getPromptForEntry(selectedEntry)}
            />
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

function EntryDetail({
  entry,
  onToggleFavorite,
  info,
}: {
  entry: ForgeEntry;
  onToggleFavorite: () => void;
  info: ReturnType<typeof getInfo> | null;
}) {
  return (
    <>
      <SheetHeader>
        <SheetTitle className="font-display text-lg">
          {info?.prompt.title || "Insight"}
        </SheetTitle>
      </SheetHeader>
      <div className="mt-4 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {info && (
              <Badge
                variant="outline"
                className="border-gold/30 text-gold text-xs"
              >
                {info.arc.title}
              </Badge>
            )}
            <span className="text-xs text-muted-foreground">
              {info?.prompt.dayLabel} &middot;{" "}
              {new Date(entry.date).toLocaleDateString()}
            </span>
          </div>
          <button
            onClick={onToggleFavorite}
            className={cn(
              "text-xl transition-colors",
              entry.favorited ? "text-gold" : "text-muted-foreground"
            )}
          >
            {entry.favorited ? "\u2605" : "\u2606"}
          </button>
        </div>

        <Separator className="bg-border/30" />

        {entry.reflectionText && (
          <Section title="Reflection" text={entry.reflectionText} />
        )}
        {entry.extensionText && (
          <Section title="Extension" text={entry.extensionText} />
        )}
        {entry.distillationText && (
          <Section title="Distillation" text={entry.distillationText} highlight />
        )}
        {entry.applicationText && (
          <Section title="Application" text={entry.applicationText} />
        )}

        {entry.aiChallenge && (
          <Section title="AI Challenge" text={entry.aiChallenge} muted />
        )}
        {entry.aiRefinement && (
          <Section title="AI Refinement" text={entry.aiRefinement} muted />
        )}
        {entry.conversationVersion && (
          <Section title="Conversation Version" text={entry.conversationVersion} muted />
        )}

        <div className="flex flex-wrap gap-1.5 pt-2">
          {entry.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs border-border/40 capitalize"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
}

function Section({
  title,
  text,
  highlight,
  muted,
}: {
  title: string;
  text: string;
  highlight?: boolean;
  muted?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <h4
        className={cn(
          "text-xs font-medium uppercase tracking-wider",
          highlight ? "text-gold/80" : muted ? "text-muted-foreground" : "text-foreground/60"
        )}
      >
        {title}
      </h4>
      <p
        className={cn(
          "text-sm leading-relaxed whitespace-pre-wrap",
          highlight && "text-foreground font-medium",
          muted && "text-muted-foreground"
        )}
      >
        {text}
      </p>
    </div>
  );
}

// Helper type for getPromptForEntry return
type ArcPromptInfo = { arc: (typeof weeklyArcs)[0]; prompt: (typeof weeklyArcs)[0]["dailyPrompts"][0] };
function getInfo(_entry: ForgeEntry): ArcPromptInfo | null { return null; }
