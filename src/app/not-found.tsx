import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 bg-background">
      <div className="text-center space-y-5 max-w-md">
        <p className="text-xs text-muted-foreground/50 uppercase tracking-wider">
          Page not found
        </p>
        <h1 className="display-heading text-2xl sm:text-3xl font-semibold text-foreground">
          This page doesn&apos;t exist
        </h1>
        <p className="text-sm text-muted-foreground">
          The link may be broken or the page was moved. Return to the dashboard
          to continue your session.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gold-shimmer text-primary-foreground text-sm font-medium transition-colors"
        >
          Back to Mind Forge &rarr;
        </Link>
      </div>
    </div>
  );
}
