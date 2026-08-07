import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border-subtle bg-surface-muted px-3 py-1 text-xs font-medium text-ink-500 dark:text-ink-300",
        className
      )}
    >
      {children}
    </span>
  );
}
