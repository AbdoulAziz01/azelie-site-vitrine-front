import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  ArrowRight,
  ArrowUpRight,
  Target,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { IconChip } from "@/components/ui/IconChip";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { Cta } from "@/components/sections/Cta";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import {
  services,
  projects,
  serviceProcessSteps,
  TECH_CATALOG,
  type ServiceItem,
} from "@/lib/site-config";

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

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      type: "website",
      title: service.seo.title,
      description: service.seo.description,
      images: [{ url: service.image, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seo.title,
      description: service.seo.description,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];
  const relatedProjects = projects.filter((p) =>
    service.relatedProjectSlugs.includes(p.slug)
  );
  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);
  const contactHref = `/contact?service=${service.slug}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />
      <ServiceJsonLd service={service} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/85 to-ink-950/55" />
        </div>
        <Container className="relative max-w-3xl py-20 text-center sm:py-28">
          <Link
            href="/services"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            ← Tous les services
          </Link>
          <div className="flex justify-center">
            <IconChip icon={Icon} size="md" className="h-14 w-14" />
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            {service.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {service.tagline}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/65">
            {service.problem}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LinkButton href={contactHref} size="lg">
              Discuter avec notre équipe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </LinkButton>
          </div>
        </Container>
      </section>

      {/* Ce que nous faisons */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-5xl">
          <Reveal>
            <div className="max-w-2xl">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-gradient-brand-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-700 dark:text-gold-300">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                Ce que nous faisons
              </span>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Nos prestations dans ce domaine
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, i) => (
              <Reveal key={feature} delay={i * 0.06}>
                <Card className="flex h-full flex-col items-start">
                  <IconChip icon={Icon} size="sm" />
                  <p className="mt-4 text-sm font-medium leading-relaxed text-ink-700 dark:text-ink-100">
                    {feature}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Comment nous pouvons vous aider */}
      <section className="border-y border-border-subtle bg-surface-muted py-16 sm:py-24">
        <Container className="max-w-4xl">
          <Reveal>
            <div className="text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-gradient-brand-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-700 dark:text-gold-300">
                <Target className="h-3.5 w-3.5" />
                Cas d&apos;usage
              </span>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Comment nous pouvons vous aider
              </h2>
            </div>
          </Reveal>
          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.useCases.map((useCase, i) => (
              <Reveal
                key={useCase}
                as="li"
                delay={i * 0.05}
                className="flex items-start gap-3 rounded-xl border border-border-subtle bg-surface p-4 text-sm"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span className="text-ink-600 dark:text-ink-200">
                  {useCase}
                </span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Technologies */}
      {service.techCategories.length > 0 && (
        <section className="py-16 sm:py-24">
          <Container className="max-w-4xl">
            <Reveal>
              <div className="text-center">
                <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  Des outils au service du besoin
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                  AZELIE choisit le langage, le framework et les outils les
                  plus adaptés à chaque projet — pas une pile technique
                  unique imposée à tous nos clients.
                </p>
              </div>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {service.techCategories.map((category, i) => (
                <Reveal key={category} delay={i * 0.06}>
                  <div className="rounded-2xl border border-border-subtle bg-surface p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold-600 dark:text-gold-300">
                      {category}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {TECH_CATALOG[category]?.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Notre méthode */}
      <section className="border-y border-border-subtle bg-surface-muted py-16 sm:py-24">
        <Container className="max-w-4xl">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Notre méthode
            </h2>
          </Reveal>
          <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceProcessSteps.map((step, i) => (
              <Reveal
                key={step.title}
                as="li"
                delay={i * 0.06}
                className="h-full rounded-2xl border border-border-subtle bg-surface p-6"
              >
                <span className="font-display text-2xl font-semibold text-gold-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Réalisations */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-5xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Réalisations
            </h2>
          </Reveal>
          {relatedProjects.length > 0 ? (
            <div className="mt-10 space-y-8">
              {relatedProjects.map((project, i) => (
                <Reveal key={project.slug} delay={i * 0.08}>
                  <div
                    className={`grid grid-cols-1 items-center gap-8 rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8 lg:grid-cols-2 ${
                      i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div>
                      <Badge>{project.category}</Badge>
                      <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-ink-400">
                        {project.client}
                      </p>

                      <dl className="mt-6 space-y-4 text-sm">
                        {project.problem && (
                          <div>
                            <dt className="font-semibold text-ink-700 dark:text-ink-100">
                              Problème
                            </dt>
                            <dd className="mt-1 leading-relaxed text-ink-500 dark:text-ink-300">
                              {project.problem}
                            </dd>
                          </div>
                        )}
                        {project.solution && (
                          <div>
                            <dt className="font-semibold text-ink-700 dark:text-ink-100">
                              Solution
                            </dt>
                            <dd className="mt-1 leading-relaxed text-ink-500 dark:text-ink-300">
                              {project.solution}
                            </dd>
                          </div>
                        )}
                        {project.result && (
                          <div>
                            <dt className="font-semibold text-ink-700 dark:text-ink-100">
                              Résultat
                            </dt>
                            <dd className="mt-1 leading-relaxed text-ink-500 dark:text-ink-300">
                              {project.result}
                            </dd>
                          </div>
                        )}
                      </dl>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/projets"
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 transition-colors hover:text-gold-700 dark:text-gold-300"
                      >
                        Voir tous les projets
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>

                    {project.image ? (
                      <div className="relative h-56 overflow-hidden rounded-xl sm:h-72">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(min-width: 1024px) 45vw, 100vw"
                          className="object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="bg-gradient-brand-soft flex h-40 items-center justify-center rounded-xl">
                        <span className="text-xs font-medium text-ink-500 dark:text-ink-300">
                          Visuel à venir
                        </span>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal delay={0.1}>
              <p className="mt-8 rounded-2xl border border-dashed border-border-subtle bg-surface p-8 text-center text-sm text-ink-400">
                Les réalisations concrètes liées à ce service seront
                publiées ici prochainement.
              </p>
            </Reveal>
          )}
        </Container>
      </section>

      {/* Clients */}
      <section className="border-t border-border-subtle bg-surface-muted py-16 sm:py-24">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Ils nous font confiance
            </h2>
            <p className="mx-auto mt-4 max-w-xl rounded-2xl border border-dashed border-border-subtle bg-surface p-8 text-sm text-ink-400">
              Les logos et références clients publiquement communicables
              seront ajoutés ici prochainement.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Pourquoi AZELIE */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Pourquoi AZELIE ?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500 dark:text-ink-300 sm:text-lg">
              {service.whyAzelie}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      {service.faq && service.faq.length > 0 && (
        <section className="border-t border-border-subtle bg-surface-muted py-16 sm:py-24">
          <Container className="max-w-3xl">
            <Reveal>
              <h2 className="text-center font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Questions fréquentes
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <Accordion items={service.faq} />
            </Reveal>
          </Container>
        </section>
      )}

      {/* Services associés */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-5xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Services associés
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {relatedServices.map((related, i) => {
              const RelatedIcon = iconMap[related.icon];
              return (
                <Reveal key={related.slug} delay={i * 0.08}>
                  <Card
                    href={`/services/${related.slug}`}
                    className="flex h-full flex-col"
                  >
                    <IconChip icon={RelatedIcon} size="sm" />
                    <h3 className="mt-4 font-display text-base font-semibold tracking-tight">
                      {related.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                      {related.short}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 dark:text-gold-300">
                      Découvrir
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <Cta />
    </>
  );
}
