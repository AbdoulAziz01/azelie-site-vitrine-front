import type { Metadata } from "next";
import Image from "next/image";
import {
  Code2,
  Smartphone,
  BrainCircuit,
  Workflow,
  Sparkles,
  Layers,
  GraduationCap,
  Cpu,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { IconChip } from "@/components/ui/IconChip";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { Cta } from "@/components/sections/Cta";
import { services, type ServiceItem } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services digitaux au Sénégal",
  description:
    "Développement web, mobile, IA, automatisation, SaaS, UI/UX design, transformation digitale et formation informatique : découvrez les services de l'agence digitale AZELIE au Sénégal.",
  alternates: { canonical: "/services" },
};

const iconMap: Record<ServiceItem["icon"], typeof Code2> = {
  code: Code2,
  smartphone: Smartphone,
  brain: BrainCircuit,
  workflow: Workflow,
  sparkles: Sparkles,
  layers: Layers,
  graduation: GraduationCap,
  cpu: Cpu,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title="Une expertise complète pour construire votre avenir numérique"
        description="De la conception à la mise à l'échelle, AZELIE accompagne les entreprises sur l'ensemble de leur trajectoire digitale."
      />

      <section className="py-16 sm:py-24">
        <Container className="max-w-5xl space-y-20">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const reversed = i % 2 === 1;
            return (
              <Reveal key={service.slug}>
                <div
                  id={service.slug}
                  className={`scroll-mt-28 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <IconChip icon={Icon} size="md" className="h-12 w-12" />
                    <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-500 dark:text-ink-300">
                      {service.description}
                    </p>
                    <LinkButton href="/contact" variant="secondary" className="mt-6">
                      En discuter avec notre équipe
                    </LinkButton>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-border-subtle bg-surface-muted">
                    <div className="relative h-48 w-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-ink-950/0 to-transparent" />
                    </div>
                    <div className="p-8">
                      <p className="text-xs font-semibold uppercase tracking-wide text-gold-600 dark:text-gold-300">
                        Ce qui est inclus
                      </p>
                      <ul className="mt-4 space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                            <span className="text-ink-600 dark:text-ink-200">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </Container>
      </section>

      <Cta />
    </>
  );
}
