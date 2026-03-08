"use client";

import { useAuth } from "@/components/providers/auth-provider";
import { useState, useEffect } from "react";

export function SyncStatus() {
  const { user } = useAuth();
  const [online, setOnline] = useState(true);

  useEffect(() => {
    setOnline(typeof navigator !== "undefined" ? navigator.onLine : true);
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };
  }, []);

  if (!user) return null;

  return (
    <span
      className="text-[10px] text-muted-foreground/60 flex items-center gap-1"
      title={online ? "Synced when you make changes" : "Offline — will sync when back online"}
    >
      {online ? (
        <>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" aria-hidden />
          Synced
        </>
      ) : (
        <>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" aria-hidden />
          Offline
        </>
      )}
    </span>
  );
}
