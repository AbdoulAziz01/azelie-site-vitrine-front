import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center py-32">
      <Container className="max-w-lg text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-gold-600 dark:text-gold-300">
          Erreur 404
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Cette page n&apos;existe pas
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
          La page que vous recherchez a peut-être été déplacée ou
          n&apos;existe plus.
        </p>
        <LinkButton href="/" className="mt-8">
          Retour à l&apos;accueil
        </LinkButton>
      </Container>
    </section>
  );
}
