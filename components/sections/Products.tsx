import Image from "next/image";
import { Boxes } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconChip } from "@/components/ui/IconChip";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { products } from "@/lib/site-config";

const statusStyles: Record<string, string> = {
  Disponible: "text-emerald-600 dark:text-emerald-400",
  Bêta: "text-gold-600 dark:text-gold-300",
  "Bientôt disponible": "text-ink-400",
};

export function Products() {
  return (
    <section id="produits" className="border-y border-border-subtle bg-surface-tint py-16 sm:py-24">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <SectionHeading
            eyebrow="Nos produits"
            title="Des produits maison, pensés pour durer"
            description="Au-delà du sur-mesure, AZELIE développe ses propres produits pour répondre aux besoins récurrents des entreprises africaines."
            align="center"
            className="mx-auto"
          />
          <LinkButton href="/produits" variant="secondary">
            Tous les produits
          </LinkButton>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
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
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
                  {product.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                  {product.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
