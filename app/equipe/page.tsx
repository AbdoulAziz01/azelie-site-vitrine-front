import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Cta } from "@/components/sections/Cta";
import { team } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Équipe",
  description:
    "Rencontrez les trois fondateurs d'AZELIE : ingénierie, data et développement full stack au service de vos projets.",
};

export default function EquipePage() {
  return (
    <>
      <PageHero
        eyebrow="Équipe"
        title="Les personnes derrière AZELIE"
        description="Trois fondateurs, une même exigence : allier ingénierie, donnée et pédagogie pour construire des produits qui durent."
      />

      <section className="py-16 sm:py-24">
        <Container className="max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08}>
                <Card className="flex h-full flex-col">
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
                  <h2 className="font-display text-base font-semibold tracking-tight">
                    {member.name}
                  </h2>
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

          <Reveal delay={0.3}>
            <div className="mt-16 rounded-2xl border border-border-subtle bg-gradient-brand-soft p-8 text-center sm:p-12">
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Envie de rejoindre l&apos;aventure ?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                Nous sommes toujours à la recherche de talents passionnés par
                la technologie et le produit. Écrivez-nous, même sans offre
                ouverte.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <Cta />
    </>
  );
}
