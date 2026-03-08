import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In — Mind Forge",
  description: "Sign in or create an account to sync your Mind Forge data across devices.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
