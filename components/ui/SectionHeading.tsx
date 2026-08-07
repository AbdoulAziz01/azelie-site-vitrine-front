import { cn } from "@/lib/utils";
import { SplitText } from "@/components/ui/SplitText";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-gradient-brand-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-700 dark:text-gold-300">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        <SplitText by="words">{title}</SplitText>
      </h2>
      {description && (
        <Reveal delay={0.15}>
          <p className="mt-4 text-base leading-relaxed text-ink-500 dark:text-ink-300 sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
