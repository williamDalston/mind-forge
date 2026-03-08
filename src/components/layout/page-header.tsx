interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="display-heading text-3xl font-semibold">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-muted-foreground/75 text-[15px] leading-relaxed max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}
