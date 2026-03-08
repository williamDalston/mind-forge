export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse" role="status" aria-label="Loading content">
      {/* Header skeleton */}
      <div className="space-y-2">
        <div className="h-8 w-48 bg-muted/50 rounded-lg" />
        <div className="h-4 w-80 bg-muted/30 rounded" />
      </div>

      {/* Card skeleton */}
      <div className="rounded-xl border border-border/30 p-6 space-y-4">
        <div className="h-4 w-24 bg-muted/40 rounded" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-muted/30 rounded" />
          <div className="h-4 w-3/4 bg-muted/30 rounded" />
          <div className="h-4 w-1/2 bg-muted/30 rounded" />
        </div>
      </div>

      {/* Stats skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl border border-border/30 p-5">
            <div className="h-7 w-12 bg-muted/40 rounded mb-1" />
            <div className="h-3 w-24 bg-muted/30 rounded" />
          </div>
        ))}
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
