import { cn } from "@/lib/utils";

export function IconChip({
  icon: Icon,
  size = "md",
  className,
}: {
  icon: React.ComponentType<{ className?: string }>;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "animate-icon-float inline-flex shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-[var(--shadow-soft)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
        size === "md" ? "h-11 w-11" : "h-9 w-9",
        className
      )}
    >
      <Icon className={size === "md" ? "h-5 w-5" : "h-4 w-4"} />
    </div>
  );
}
