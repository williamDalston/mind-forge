interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="font-display text-3xl font-semibold tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-muted-foreground text-base">{subtitle}</p>
      )}
    </div>
  );
}
