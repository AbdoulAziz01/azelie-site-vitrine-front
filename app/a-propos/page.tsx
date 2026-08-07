import type { Metadata } from "next";
import { Target, Eye, Heart, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconChip } from "@/components/ui/IconChip";
import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { Reveal } from "@/components/ui/Reveal";
import { Cta } from "@/components/sections/Cta";
import { Team } from "@/components/sections/Team";
import { stats } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "AZELIE est une entreprise technologique sénégalaise spécialisée en développement web, mobile, IA, automatisation et transformation digitale.",
};

const values = [
  {
    icon: Target,
    title: "Exigence",
    text: "Chaque produit livré répond à un niveau d'exigence élevé, du code à l'expérience utilisateur.",
  },
  {
    icon: Eye,
    title: "Transparence",
    text: "Nous cadrons chaque projet clairement : délais, périmètre et budget, sans mauvaise surprise.",
  },
  {
    icon: Heart,
    title: "Ancrage local",
    text: "Nous concevons des solutions pensées pour les réalités du marché africain, sans compromis sur la qualité mondiale.",
  },
  {
    icon: Rocket,
    title: "Ambition",
    text: "Nous visons l'excellence technique pour permettre à nos clients de rivaliser à l'échelle internationale.",
  },
];

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une entreprise technologique sénégalaise, tournée vers le monde"
        description="AZELIE conçoit des produits numériques exigeants pour des entreprises ambitieuses, depuis Dakar."
      />

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-ink-500 dark:text-ink-300 sm:text-lg">
              AZELIE est née d&apos;une conviction simple : l&apos;Afrique de
              l&apos;Ouest regorge de talents technologiques capables de
              produire des solutions numériques au niveau des standards
              internationaux les plus exigeants. Notre mission est de mettre
              ce savoir-faire au service des entreprises qui veulent
              accélérer leur transformation digitale — qu&apos;il s&apos;agisse
              de développement web et mobile, d&apos;intelligence
              artificielle, d&apos;automatisation ou de produits SaaS. Notre
              mission passe aussi par la formation : nous préparons les
              talents de demain aux métiers du numérique et du digital.
            </p>
            <p className="mt-6 text-base leading-relaxed text-ink-500 dark:text-ink-300 sm:text-lg">
              Basée à Dakar, notre équipe pluridisciplinaire accompagne des
              startups, PME et grandes entreprises dans la conception,
              la construction et l&apos;évolution de leurs produits
              numériques, avec une exigence constante de qualité et
              d&apos;impact mesurable.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-16 grid grid-cols-2 gap-8 border-y border-border-subtle py-10 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <AnimatedStat
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  delay={i * 0.1}
                />
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface-muted/50 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Nos valeurs"
            title="Ce qui guide chacun de nos projets"
            align="center"
            className="mx-auto"
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.06}>
                <div className="group rounded-2xl border border-border-subtle bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                  <IconChip icon={value.icon} className="mx-auto" />
                  <h3 className="mt-4 font-display text-base font-semibold tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Team />
      <Cta />
    </>
  );
}
