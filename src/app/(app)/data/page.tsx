"use client";

import { useForgeStore } from "@/store/forge-store";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";
import { motion } from "framer-motion";
import { settle } from "@/lib/motion";

export default function YourDataPage() {
  const { entries, reviews, captures, totalSessions, streak } = useForgeStore();
  const favoritedCount = entries.filter((e) => e.favorited).length;
  const themesCount = new Set(entries.map((e) => e.weeklyArcId)).size;

  const stats = [
    {
      label: "Sessions completed",
      value: totalSessions,
      href: "/daily-forge",
      cta: "Start a session",
    },
    {
      label: "Insights in your vault",
      value: entries.length,
      href: "/vault",
      cta: "View vault",
    },
    {
      label: "Saved favorites",
      value: favoritedCount,
      href: "/vault?favorites=1",
      cta: "View favorites",
    },
    {
      label: "Themes explored",
      value: themesCount,
      href: "/weekly-arc",
      cta: "Weekly arc",
    },
    {
      label: "Weekly reviews",
      value: reviews.length,
      href: "/review",
      cta: "Review",
    },
    {
      label: "Quick captures",
      value: captures.length,
      href: "/",
      cta: "Dashboard",
    },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Your data"
        subtitle="Everything you've created in Mind Forge: sessions, insights, favorites, reviews, and quick captures. Your data stays on this device and, when signed in, syncs to your account."
      />

      {streak > 0 && (
        <motion.div variants={settle} initial="hidden" animate="visible">
          <Card className="bg-card border-gold/15">
            <CardContent className="pt-5 pb-5 flex items-center gap-3">
              <span className="text-2xl ember-glow">&#9632;</span>
              <div>
                <p className="text-2xl font-display font-semibold text-gold">
                  {streak} day{streak !== 1 ? "s" : ""} streak
                </p>
                <p className="text-xs text-muted-foreground">
                  Keep going — your practice is compounding.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {stats.map((stat, i) => (
          <motion.div key={stat.label} variants={settle} initial="hidden" animate="visible">
            <Card className="bg-card border-border/50 card-hover h-full">
              <CardContent className="pt-5 pb-5 flex flex-col h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-2xl font-display font-semibold stat-number">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                  <Link href={stat.href}>
                    <Button variant="outline" size="sm" className="text-xs border-gold/30 text-gold shrink-0">
                      {stat.cta} &rarr;
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div variants={settle} initial="hidden" animate="visible">
        <Card className="bg-card border-border/30">
          <CardContent className="pt-6 pb-6">
            <h2 className="font-display text-lg font-medium mb-2">Where to see it all</h2>
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Idea Vault</strong> — Search and browse every insight you&apos;ve distilled. Filter by tag or favorites.
              <br />
              <strong>Review</strong> — Weekly reflection, pattern analysis, and your voice letter.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/vault">
                <Button className="gold-shimmer text-primary-foreground">
                  Open Idea Vault
                </Button>
              </Link>
              <Link href="/review">
                <Button variant="outline" className="border-gold/30 text-gold">
                  Open Review
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
