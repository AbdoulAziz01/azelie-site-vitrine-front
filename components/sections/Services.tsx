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
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { services, type ServiceItem } from "@/lib/site-config";

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

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Nos expertises"
          title="Un savoir-faire complet, du concept au produit fini"
          description="AZELIE accompagne les particuliers, les entreprises et les étudiants dans le développement web, les logiciels de gestion, les services informatiques, le dépannage, les réseaux, la cybersécurité, l'intelligence artificielle et les formations numériques."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.slug} delay={(i % 4) * 0.06}>
                <Card
                  href={`/services/${service.slug}`}
                  className="flex h-full flex-col"
                >
                  <div className="relative -mx-6 -mt-6 mb-6 h-28 overflow-hidden sm:-mx-8 sm:-mt-8">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ink-950/45" />
                    <div className="relative flex h-full items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                    {service.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 dark:text-gold-300">
                    En savoir plus
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
