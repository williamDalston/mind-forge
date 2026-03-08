import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your data — Sessions, insights, and reviews",
  description:
    "See everything you've created in Mind Forge: sessions completed, insights in your vault, favorites, weekly reviews, and quick captures.",
  openGraph: {
    title: "Your data | Will Alston — Mind Forge",
    description:
      "Your Mind Forge data: sessions, insights, vault, and reviews.",
  },
  alternates: {
    canonical: "https://willalston.space/data",
  },
};

export default function DataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
