import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="bg-noise relative overflow-hidden border-b border-border-subtle pt-12 pb-14 sm:pt-16 sm:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-br from-ink-700/10 via-teal-400/15 to-gold-300/20 blur-3xl"
      />
      <Container className="relative max-w-3xl text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-gradient-brand-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-700 dark:text-gold-300">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-500 dark:text-ink-300 sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
