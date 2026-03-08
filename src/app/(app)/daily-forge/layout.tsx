import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Forge — Structured Intellectual Training",
  description:
    "The daily forge session by Will Alston. A guided 5-step reflection process to sharpen your thinking, distill insights, and build conversational brilliance.",
  openGraph: {
    title: "Daily Forge — Structured Intellectual Training | Will Alston",
    description:
      "A guided 5-step reflection process to sharpen your thinking, distill insights, and build conversational brilliance. Built by Will Alston.",
  },
  alternates: {
    canonical: "https://willalston.space/daily-forge",
  },
};

export default function DailyForgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
