import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekly Arc — 7-Day Intellectual Training Cycle",
  description:
    "Track your weekly intellectual training arc. Each week explores a theme through 7 daily prompts of increasing depth — designed by Will Alston.",
  openGraph: {
    title: "Weekly Arc — 7-Day Intellectual Training Cycle | Will Alston",
    description:
      "Track your weekly intellectual training arc. Each week explores a theme through 7 daily prompts of increasing depth.",
  },
  alternates: {
    canonical: "https://willalston.space/weekly-arc",
  },
};

export default function WeeklyArcLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
