import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, GraduationCap, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { WaveBackground } from "@/components/ui/WaveBackground";
import { BreadcrumbJsonLd, PersonJsonLd } from "@/components/seo/JsonLd";
import { team, projects } from "@/lib/site-config";

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return {};

  return {
    title: `${member.name} — ${member.role}`,
    description: member.bio,
    alternates: { canonical: `/equipe/${member.slug}` },
    openGraph: {
      type: "profile",
      title: `${member.name} — ${member.role}`,
      description: member.bio,
      images: member.photo ? [{ url: member.photo, alt: member.name }] : undefined,
    },
  };
}

function MissingInfo({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-2xl border border-dashed border-border-subtle bg-surface-muted p-6 text-sm text-ink-400">
      {children} — [INFORMATIONS À COMPLÉTER]
    </p>
  );
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  const professionalLinks = [
    member.linkedin && { label: "LinkedIn", href: member.linkedin, icon: FaLinkedinIn },
    member.github && { label: "GitHub", href: member.github, icon: FaGithub },
    member.personalEmail && {
      label: member.personalEmail,
      href: `mailto:${member.personalEmail}`,
      icon: Mail,
    },
    member.personalPhone && {
      label: member.personalPhone,
      href: `tel:${member.personalPhone.replace(/\s/g, "")}`,
      icon: Phone,
    },
  ].filter(Boolean) as { label: string; href: string; icon: typeof FaLinkedinIn }[];

  const devProjects = member.personalProjects?.filter((p) => p.category === "Développement") ?? [];
  const designProjects = member.personalProjects?.filter((p) => p.category === "UI/UX Design") ?? [];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Équipe", path: "/equipe" },
          { name: member.name, path: `/equipe/${member.slug}` },
        ]}
      />
      <PersonJsonLd member={member} />

      {/* Hero : photo + nom + fonction */}
      <section className="bg-noise relative overflow-hidden border-b border-border-subtle pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-br from-ink-700/10 via-teal-400/15 to-gold-300/20 blur-3xl"
        />
        <Container className="relative max-w-3xl text-center">
          <Link
            href="/equipe"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-foreground dark:text-ink-300"
          >
            ← Toute l&apos;équipe
          </Link>

          {member.photo && (
            <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-surface shadow-[var(--shadow-brand)] sm:h-40 sm:w-40">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                sizes="160px"
                className="object-cover object-top"
              />
            </div>
          )}

          <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {member.name}
          </h1>
          <p className="mt-2 text-sm font-medium text-gold-600 dark:text-gold-300 sm:text-base">
            {member.role}
          </p>
        </Container>
      </section>

      {/* Présentation */}
      <section className="relative flex min-h-[48vh] items-center overflow-hidden py-16 sm:min-h-[56vh] sm:py-20">
        <WaveBackground />
        <Container className="relative z-10 max-w-3xl text-center">
          <Reveal>
            <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-gradient-brand-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-700 dark:text-gold-300">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
              Présentation
            </span>
            <span
              aria-hidden
              className="text-gradient-brand block font-display text-6xl leading-none sm:text-7xl"
            >
              &ldquo;
            </span>
            <blockquote className="mx-auto -mt-4 text-lg leading-relaxed text-ink-600 dark:text-ink-200 sm:-mt-6 sm:text-2xl sm:leading-relaxed">
              {member.bio}
            </blockquote>
          </Reveal>
        </Container>
      </section>

      {/* Parcours */}
      <section className="border-y border-border-subtle bg-surface-muted py-16 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Parcours
            </h2>
          </Reveal>

          {member.education && member.education.length > 0 && (
            <Reveal delay={0.05}>
              <ul className="mt-6 space-y-2">
                {member.education.map((edu) => (
                  <li
                    key={edu.degree}
                    className="flex items-center gap-3 rounded-xl border border-border-subtle bg-surface p-4 text-sm"
                  >
                    <GraduationCap className="h-4 w-4 shrink-0 text-gold-500" />
                    <span>
                      <span className="font-medium">{edu.degree}</span>
                      {" — "}
                      <span className="text-ink-500 dark:text-ink-300">
                        {edu.institution}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {member.timeline && member.timeline.length > 0 ? (
            <ol className="mt-8 space-y-6 border-l border-border-subtle pl-6">
              {member.timeline.map((step, i) => (
                <Reveal key={step.label} as="li" delay={i * 0.06} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[1.65rem] top-1 h-3 w-3 rounded-full bg-gradient-brand"
                  />
                  <h3 className="font-display text-base font-semibold tracking-tight">
                    {step.label}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                    {step.description}
                  </p>
                </Reveal>
              ))}
            </ol>
          ) : (
            <div className="mt-8">
              <MissingInfo>Détails du parcours professionnel</MissingInfo>
            </div>
          )}
        </Container>
      </section>

      {/* Expertises */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-4xl">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Expertises
            </h2>
          </Reveal>

          {member.skillCategories && member.skillCategories.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {member.skillCategories.map((cat, i) => (
                <Reveal key={cat.category} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-border-subtle bg-surface p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold-600 dark:text-gold-300">
                      {cat.category}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {member.expertise.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      {/* Projets personnels (si disponibles) */}
      {member.personalProjects && member.personalProjects.length > 0 && (
        <section className="border-y border-border-subtle bg-surface-muted py-16 sm:py-24">
          <Container className="max-w-5xl">
            <Reveal>
              <h2 className="text-center font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Projets
              </h2>
            </Reveal>

            {devProjects.length > 0 && (
              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-600 dark:text-gold-300">
                  Développement
                </p>
                <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {devProjects.map((project, i) => (
                    <Reveal key={project.name} delay={i * 0.06}>
                      {project.link ? (
                        <Card href={project.link} className="flex h-full flex-col">
                          <h3 className="font-display text-base font-semibold tracking-tight">
                            {project.name}
                          </h3>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                            {project.description}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 dark:text-gold-300">
                            Voir le projet
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </span>
                        </Card>
                      ) : (
                        <div className="flex h-full flex-col rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8">
                          <h3 className="font-display text-base font-semibold tracking-tight">
                            {project.name}
                          </h3>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                            {project.description}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

            {designProjects.length > 0 && (
              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-600 dark:text-gold-300">
                  UI/UX Design
                </p>
                <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {designProjects.map((project, i) => (
                    <Reveal key={project.name} delay={i * 0.06}>
                      <div className="flex h-full flex-col rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8">
                        <h3 className="font-display text-base font-semibold tracking-tight">
                          {project.name}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                          {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </Container>
        </section>
      )}

      {/* Rôle chez AZELIE */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-gradient-brand-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-700 dark:text-gold-300">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                Rôle chez AZELIE
              </span>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {member.role}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-500 dark:text-ink-300 sm:text-lg">
                {member.name.split(" ")[0]} fait partie de l&apos;équipe
                fondatrice d&apos;AZELIE et contribue à l&apos;ensemble des
                projets et produits de l&apos;entreprise.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <Card href="/projets" className="flex h-full flex-col">
                  {project.image && (
                    <div className="relative -mx-6 -mt-6 mb-6 h-40 overflow-hidden sm:-mx-8 sm:-mt-8">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                  )}
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-600 dark:text-gold-300">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-display text-base font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                    {project.summary}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision (si disponible) */}
      {member.vision && (
        <section className="border-y border-border-subtle bg-surface-muted py-16 sm:py-24">
          <Container className="max-w-2xl text-center">
            <Reveal>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-gradient-brand-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-700 dark:text-gold-300">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                Vision
              </span>
              <blockquote className="font-display text-xl font-medium leading-snug tracking-tight text-balance sm:text-2xl">
                « {member.vision} »
              </blockquote>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Liens professionnels */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Liens professionnels
            </h2>

            {professionalLinks.length > 0 || member.portfolioUrl ? (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                {professionalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-border-subtle px-5 text-sm font-medium text-ink-600 transition-colors hover:border-gold-400 hover:text-gold-600 dark:text-ink-200 dark:hover:text-gold-300"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </a>
                ))}
                {member.portfolioUrl && (
                  <LinkButton
                    href={member.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                  >
                    Voir mon portfolio
                    <ArrowUpRight className="h-4 w-4" />
                  </LinkButton>
                )}
              </div>
            ) : (
              <div className="mt-8">
                <MissingInfo>Profils professionnels publics (LinkedIn, GitHub...)</MissingInfo>
              </div>
            )}
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-border-subtle bg-surface-muted py-16 sm:py-24">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Vous avez un projet ?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ink-500 dark:text-ink-300">
              Parlons de votre projet et de la façon dont notre équipe peut
              vous accompagner.
            </p>
            <div className="mt-8 flex justify-center">
              <LinkButton href="/contact" size="lg">
                Discuter avec notre équipe
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </LinkButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
