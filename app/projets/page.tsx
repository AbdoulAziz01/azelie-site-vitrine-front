import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Cta } from "@/components/sections/Cta";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { projects, services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Nos projets et réalisations",
  description:
    "Applications, plateformes, identité visuelle et automatisations réalisées par AZELIE au Sénégal : un aperçu concret de notre travail de développement web et digital.",
  alternates: { canonical: "/projets" },
};

export default function ProjetsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Projets", path: "/projets" },
        ]}
      />
      <PageHero
        eyebrow="Nos projets"
        title="Des projets qui créent un impact mesurable"
        description="Applications, sites web, plateformes, identités visuelles et automatisations : un aperçu concret de ce que nous construisons."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {projects.map((project, i) => {
              const relatedService = services.find((s) =>
                s.relatedProjectSlugs.includes(project.slug)
              );
              return (
              <Reveal key={project.slug} delay={i * 0.06}>
                <Card>
                  {project.image ? (
                    <div className="relative -mx-6 -mt-6 mb-6 h-48 overflow-hidden sm:-mx-8 sm:-mt-8">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
                    </div>
                  ) : (
                    <div className="bg-gradient-brand-soft relative -mx-6 -mt-6 mb-6 flex h-32 items-center justify-center overflow-hidden sm:-mx-8 sm:-mt-8">
                      <div aria-hidden className="bg-noise absolute inset-0 opacity-30" />
                      <span className="relative inline-flex items-center gap-2 text-xs font-medium text-ink-500 dark:text-ink-300">
                        <ImageIcon className="h-4 w-4" />
                        Visuel à venir
                      </span>
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-4">
                    <Badge>{project.category}</Badge>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-500 dark:text-ink-500" />
                  </div>
                  <h2 className="mt-4 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-ink-400">
                    {project.client}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                    {project.summary}
                  </p>
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
                  {relatedService && (
                    <Link
                      href={`/services/${relatedService.slug}`}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 transition-colors hover:text-gold-700 dark:text-gold-300 dark:hover:text-gold-200"
                    >
                      Service associé : {relatedService.title}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
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
