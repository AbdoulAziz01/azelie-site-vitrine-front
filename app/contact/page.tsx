import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { IconChip } from "@/components/ui/IconChip";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact — Agence digitale à Dakar",
  description:
    "Parlons de votre projet. Contactez l'équipe AZELIE, agence informatique et digitale basée à Dakar, Sénégal, pour démarrer votre transformation digitale.",
  alternates: { canonical: "/contact" },
};

const contactInfo = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Téléphone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Adresse", value: siteConfig.address, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Un premier échange sans engagement pour comprendre vos objectifs et vous proposer la meilleure approche."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Nos coordonnées
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                Notre équipe vous répond généralement sous 24h ouvrées.
              </p>
              <ul className="mt-8 space-y-6">
                {contactInfo.map((info) => (
                  <li key={info.label} className="flex items-start gap-4">
                    <IconChip icon={info.icon} />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-ink-400">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm font-medium transition-colors hover:text-gold-600 dark:hover:text-gold-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{info.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-10">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 bg-gradient-brand"
              />
              <ContactForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
