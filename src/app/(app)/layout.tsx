import Link from "next/link";
import { SidebarNav } from "@/components/layout/sidebar-nav";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main id="main-content" className="flex-1 md:ml-64 overflow-auto">
        <div className="mx-auto max-w-4xl px-5 py-6 pb-24 md:px-8 md:py-10 md:pb-10 page-enter">
          {children}
          <footer className="mt-16 pt-6 border-t border-border/30 text-center">
            <p className="text-[11px] text-muted-foreground/50">
              Will Alston — Mind Forge
              {" · "}
              <Link href="/about" className="text-muted-foreground/60 hover:text-gold transition-colors">
                About
              </Link>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
