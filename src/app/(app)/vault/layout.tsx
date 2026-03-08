import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Idea Vault — Your Archive of Distilled Insights",
  description:
    "Search and revisit your strongest reflections, distilled thoughts, and conversation-ready insights from Mind Forge sessions by Will Alston.",
  openGraph: {
    title: "Idea Vault — Your Archive of Distilled Insights | Will Alston",
    description:
      "Search and revisit your strongest reflections, distilled thoughts, and conversation-ready insights.",
  },
  alternates: {
    canonical: "https://willalston.space/vault",
  },
};

export default function VaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
