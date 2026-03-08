"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForgeStore } from "@/store/forge-store";
import { weeklyArcs } from "@/data/weekly-arcs";
import { TAGS } from "@/types";
import Link from "next/link";
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
import { settle } from "@/lib/motion";
import { ForgeEntry } from "@/types";

export default function VaultPage() {
  const searchParams = useSearchParams();
  const { entries, toggleFavorite } = useForgeStore();
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<ForgeEntry | null>(null);

  // Open entry sheet or favorites filter from URL
  useEffect(() => {
    const entryId = searchParams.get("entry");
    const favorites = searchParams.get("favorites");
    if (favorites === "1") setShowFavoritesOnly(true);
    if (entryId && entries.length > 0) {
      const entry = entries.find((e) => e.id === entryId);
      if (entry) setSelectedEntry(entry);
    }
  }, [searchParams, entries]);

  const filteredEntries = useMemo(() => {
    let result = [...entries].reverse();

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (e) =>
          (e.distillationText ?? "").toLowerCase().includes(q) ||
          (e.reflectionText ?? "").toLowerCase().includes(q) ||
          (e.extensionText ?? "").toLowerCase().includes(q) ||
          (e.applicationText ?? "").toLowerCase().includes(q)
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
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <PageHeader
          title="Idea Vault"
          subtitle="Your archive of distilled thoughts, strongest reflections, and conversation-ready insights."
        />
        {filteredEntries.length > 0 && (
          <button
            type="button"
            onClick={() => window.print()}
            className="no-print text-xs text-muted-foreground hover:text-gold transition-colors flex items-center gap-1.5 shrink-0"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /></svg>
            Print
          </button>
        )}
      </div>

      {/* Search + Filters */}
      <div className="space-y-3">
        <Input
          placeholder="Search your insights..."
          aria-label="Search insights"
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
        <Card className="bg-card border-border/30 border-dashed">
          <CardContent className="pt-14 pb-14 text-center">
            {entries.length === 0 ? (
              <div className="space-y-4">
                <div className="text-muted-foreground/25 mx-auto w-fit">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7l10-4 10 4-10 4z" /><path d="M2 17l10 4 10-4" /><path d="M2 12l10 4 10-4" /></svg>
                </div>
                <p className="text-muted-foreground font-medium">
                  Your vault is empty
                </p>
                <p className="text-sm text-muted-foreground/70 max-w-sm mx-auto">
                  The vault is where every distilled insight from your sessions lives. Complete your first Daily Forge to start building a searchable archive you can use in real conversations.
                </p>
                <Link href="/daily-forge">
                  <Button className="bg-gold/90 hover:bg-gold text-primary-foreground mt-2">
                    Start Your First Forge &rarr;
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="text-muted-foreground/25 mx-auto w-fit">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
                </div>
                <p className="text-muted-foreground font-medium">
                  No entries match your filters
                </p>
                <p className="text-sm text-muted-foreground/70">
                  Try a different search term or clear the Favorites filter to see all insights.
                </p>
              </div>
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
                variants={settle}
                initial="hidden"
                animate="visible"
              >
                <Card
                  className={cn("bg-card border-border/30 card-hover cursor-pointer", entry.favorited && "favorited-accent")}
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
                        aria-label={entry.favorited ? "Remove from favorites" : "Add to favorites"}
                        className={cn(
                          "text-lg transition-colors shrink-0 p-1",
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
  info: { arc: (typeof weeklyArcs)[0]; prompt: (typeof weeklyArcs)[0]["dailyPrompts"][0] } | null;
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
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => {
                const text = (entry.distillationText || entry.reflectionText || "").trim();
                if (text) navigator.clipboard.writeText(text);
              }}
              className="text-xs text-gold/60 hover:text-gold transition-colors flex items-center gap-1 p-1"
              title="Copy portable insight"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
              Copy line
            </button>
            <button
              onClick={onToggleFavorite}
              aria-label={entry.favorited ? "Remove from favorites" : "Add to favorites"}
              className={cn(
                "text-xl transition-colors p-1",
                entry.favorited ? "text-gold" : "text-muted-foreground"
              )}
            >
              {entry.favorited ? "\u2605" : "\u2606"}
            </button>
          </div>
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

        {(entry.distillationText || entry.reflectionText) && (
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Lenses
            </h4>
            <p className="text-xs text-muted-foreground/80">
              Revisit this idea through different angles:
            </p>
            <div className="flex flex-wrap gap-2">
              {["Psychological", "Strategic", "Philosophical", "Personal"].map((lens) => (
                <span
                  key={lens}
                  className="px-2.5 py-1 rounded-md bg-muted/50 text-xs text-foreground/70 border border-border/40"
                >
                  {lens}
                </span>
              ))}
            </div>
          </div>
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
          "text-sm leading-relaxed whitespace-pre-wrap break-words",
          highlight && "text-foreground font-medium",
          muted && "text-muted-foreground"
        )}
      >
        {text}
      </p>
    </div>
  );
}
