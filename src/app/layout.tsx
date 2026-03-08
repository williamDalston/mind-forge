import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mind Forge",
  description:
    "Daily intellectual training for people who want more than shallow productivity and scattered inspiration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}
      >
        <div className="flex min-h-screen">
          <SidebarNav />
          <main className="flex-1 md:ml-64 overflow-auto">
            <div className="mx-auto max-w-4xl px-6 py-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
