import Image from "next/image";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { projects } from "@/lib/site-config";

export function Projects() {
  return (
    <section id="projets" className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <SectionHeading
            eyebrow="Nos projets"
            title="Des projets qui créent un impact mesurable"
            description="Applications, plateformes, identité visuelle et automatisations : un aperçu concret de ce que nous construisons."
            align="center"
            className="mx-auto"
          />
          <LinkButton href="/projets" variant="secondary">
            Tous les projets
          </LinkButton>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
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
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink-400">
                  {project.client}
                </p>
                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300 sm:line-clamp-none">
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
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
