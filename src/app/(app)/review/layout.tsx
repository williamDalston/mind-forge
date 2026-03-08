import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forge Review — Track Intellectual Growth",
  description:
    "Review your intellectual training progress — streaks, patterns, AI-generated weekly letters, and growth insights. Mind Forge by Will Alston.",
  openGraph: {
    title: "Forge Review — Track Intellectual Growth | Will Alston",
    description:
      "Review your intellectual training progress — streaks, patterns, AI-generated weekly letters, and growth insights.",
  },
  alternates: {
    canonical: "https://willalston.space/review",
  },
};

export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
