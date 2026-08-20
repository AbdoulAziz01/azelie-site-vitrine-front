import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { team } from "@/lib/site-config";

export function Team() {
  return (
    <section id="equipe" className="border-y border-border-subtle bg-surface-muted py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Équipe"
          title="Les personnes derrière AZELIE"
          description="Trois fondateurs, une même exigence : allier ingénierie, donnée et pédagogie pour construire des produits qui durent."
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <Card href={`/equipe/${member.slug}`} className="flex h-full flex-col">
                {member.photo ? (
                  <div className="relative -mx-6 -mt-6 mb-6 h-72 overflow-hidden sm:-mx-8 sm:-mt-8">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/0 to-transparent" />
                  </div>
                ) : null}
                <h3 className="font-display text-base font-semibold tracking-tight">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-gold-600 dark:text-gold-300">
                  {member.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                  {member.bio}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
