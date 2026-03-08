"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useForgeStore } from "@/store/forge-store";
import { weeklyArcs } from "@/data/weekly-arcs";
import { UserMenu } from "./user-menu";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  {
    href: "/",
    label: "Dashboard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    href: "/daily-forge",
    label: "Daily Forge",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    href: "/weekly-arc",
    label: "Weekly Arc",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    href: "/vault",
    label: "Idea Vault",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 7l10-4 10 4-10 4z" />
        <path d="M2 17l10 4 10-4" />
        <path d="M2 12l10 4 10-4" />
      </svg>
    ),
  },
  {
    href: "/review",
    label: "Review",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    href: "/data",
    label: "Your data",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    href: "/about",
    label: "About",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
];

export function SidebarNav() {
  const pathname = usePathname();
  const { streak, currentArcIndex, currentDayIndex, entries } = useForgeStore();

  const arc = weeklyArcs[currentArcIndex];
  const arcEntries = entries.filter((e) => e.weeklyArcId === arc.id);
  const completedCount = arc.dailyPrompts.filter((p) =>
    arcEntries.some((e) => e.dailyPromptId === p.id)
  ).length;

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-sidebar/95 backdrop-blur-sm border-b border-sidebar-border shadow-[0_1px_3px_oklch(0_0_0/0.04)] dark:shadow-[0_1px_3px_oklch(0_0_0/0.15)] px-4 h-14 md:hidden">
        <Link href="/" className="font-display text-lg font-semibold tracking-wide text-gold">
          Mind Forge
        </Link>
        <div className="flex items-center gap-3">
          {streak > 0 && (
            <span className="text-xs text-gold/70 flex items-center gap-1">
              <span className="ember-glow text-sm">&#9632;</span>
              {streak}
            </span>
          )}
          <ThemeToggle />
        </div>
      </div>

      {/* Sidebar — desktop only */}
      <aside
        className="fixed top-0 left-0 z-40 h-full w-64 bg-sidebar border-r border-sidebar-border flex-col hidden md:flex"
      >
        {/* Logo */}
        <div className="flex items-center px-6 h-16 border-b border-sidebar-border">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/15 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <span className="font-display text-lg font-semibold tracking-wide text-gold">
              Mind Forge
            </span>
          </Link>
        </div>

        {/* Nav items */}
        <nav aria-label="Main navigation" className="flex-1 px-3 py-5 space-y-0.5">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150",
                  isActive
                    ? "bg-sidebar-accent text-gold"
                    : "text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/40"
                )}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-gold rounded-full" />
                )}
                <span className={cn(
                  "transition-colors",
                  isActive ? "text-gold" : "text-sidebar-foreground/40"
                )}>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="px-4 py-4 border-t border-sidebar-border space-y-3">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-muted-foreground/60 uppercase tracking-wider">
                {arc.title}
              </span>
              <span className="text-[11px] text-muted-foreground/40">
                {completedCount}/7
              </span>
            </div>
            <div className="flex gap-1">
              {arc.dailyPrompts.map((prompt, i) => (
                <div
                  key={prompt.id}
                  className={cn(
                    "flex-1 h-1 rounded-full transition-colors",
                    arcEntries.some((e) => e.dailyPromptId === prompt.id)
                      ? "bg-gold/70"
                      : i === currentDayIndex
                      ? "bg-gold/25"
                      : "bg-muted/50"
                  )}
                />
              ))}
            </div>
          </div>

          {streak > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-base ember-glow leading-none">&#9632;</span>
              <span className="text-xs text-muted-foreground/60">
                <span className="text-gold font-medium">{streak}</span> day{streak > 1 ? "s" : ""} streak
              </span>
            </div>
          )}

          <div className="flex items-center justify-between">
            <UserMenu />
            <ThemeToggle />
          </div>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav aria-label="Mobile navigation" className="fixed bottom-0 left-0 right-0 z-50 bg-sidebar/95 backdrop-blur-md border-t border-sidebar-border shadow-[0_-2px_8px_oklch(0_0_0/0.06)] dark:shadow-[0_-2px_8px_oklch(0_0_0/0.2)] md:hidden safe-bottom">
        <div className="flex items-center justify-around h-16 px-1">
          {navItems.filter((item) => item.href !== "/about").map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex flex-col items-center justify-center gap-0.5 flex-1 h-full text-[10px] transition-colors",
                  isActive
                    ? "text-gold"
                    : "text-sidebar-foreground/40 active:text-sidebar-foreground/60"
                )}
              >
                <span className={cn(isActive && "text-gold")}>
                  {item.icon}
                </span>
                <span className="truncate">{item.label}</span>
                {isActive && (
                  <span className="absolute top-1 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-gold" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile spacer top */}
      <div className="h-14 md:hidden" />
    </>
  );
}
