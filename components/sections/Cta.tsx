import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export function Cta() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-8 py-16 text-center sm:px-16 sm:py-24">
            <Image
              src="/images/banniere-afrique.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 1200px, 100vw"
              className="object-cover object-right"
              priority={false}
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-ink-950/45"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[520px] -translate-x-1/2 rounded-full bg-gold-400/20 blur-3xl"
            />
            <h2 className="relative font-display text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              Prêt à donner vie à{" "}
              <span className="text-gradient-gold">votre projet</span> ?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
              Parlons de vos objectifs. Notre équipe vous répond sous 24h
              ouvrées pour cadrer votre projet ensemble.
            </p>
            <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LinkButton
                href="/contact"
                size="lg"
                className="bg-none bg-gold-400 text-ink-950 shadow-[var(--shadow-glow-gold)] hover:bg-gold-300 hover:shadow-[var(--shadow-glow-gold)]"
              >
                Démarrer un projet
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </LinkButton>
              <LinkButton
                href={`mailto:${siteConfig.email}`}
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10"
              >
                {siteConfig.email}
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
