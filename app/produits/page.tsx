import type { Metadata } from "next";
import Image from "next/image";
import { Boxes } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { IconChip } from "@/components/ui/IconChip";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Cta } from "@/components/sections/Cta";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { products } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Nos produits digitaux",
  description:
    "Découvrez les produits développés par AZELIE au Sénégal : AzelieEdu, JoniLink et les prochaines solutions pensées pour les entreprises et institutions africaines.",
  alternates: { canonical: "/produits" },
};

const statusStyles: Record<string, string> = {
  Disponible: "text-emerald-600 dark:text-emerald-400",
  Bêta: "text-gold-600 dark:text-gold-300",
  "Bientôt disponible": "text-ink-400",
};

export default function ProduitsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Produits", path: "/produits" },
        ]}
      />
      <PageHero
        eyebrow="Nos produits"
        title="Des produits maison, conçus pour les réalités du terrain"
        description="Au-delà du sur-mesure, AZELIE développe ses propres produits pour répondre aux besoins récurrents des entreprises africaines. De nouveaux produits rejoignent régulièrement le catalogue."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.08}>
                <Card className="flex h-full flex-col">
                  {product.image ? (
                    <div className="relative -mx-6 -mt-6 mb-6 h-40 overflow-hidden sm:-mx-8 sm:-mt-8">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
                    </div>
                  ) : (
                    <div className="mb-1">
                      <IconChip icon={Boxes} />
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-wide text-gold-600 dark:text-gold-300">
                      {product.category}
                    </p>
                    <Badge>
                      <span className={statusStyles[product.status]}>
                        {product.status}
                      </span>
                    </Badge>
                  </div>
                  <h2 className="mt-2 font-display text-lg font-semibold tracking-tight">
                    {product.name}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                    {product.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Cta />
    </>
  );
}
