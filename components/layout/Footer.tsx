import Link from "next/link";
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { navLinks, secondaryLinks, services, siteConfig } from "@/lib/site-config";

const socialLinks = [
  { href: siteConfig.socials.linkedin, label: "LinkedIn", icon: FaLinkedinIn },
  { href: siteConfig.socials.twitter, label: "X", icon: FaXTwitter },
  { href: siteConfig.socials.instagram, label: "Instagram", icon: FaInstagram },
  { href: siteConfig.socials.github, label: "GitHub", icon: FaGithub },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white dark:bg-white dark:text-ink-900">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-ink-700/20 via-teal-400/15 to-gold-300/20 blur-3xl"
      />

      <Container className="relative py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <Logo imgClassName="h-14 sm:h-16" forceColor priority={false} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55 dark:text-ink-500">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-[image:var(--gradient-brand)] hover:text-white dark:border-border-subtle dark:text-ink-500"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-300 dark:text-gold-600">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks
                .filter((link) => link.href !== "/")
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white dark:text-ink-500 dark:hover:text-ink-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              {secondaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white dark:text-ink-500 dark:hover:text-ink-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-300 dark:text-gold-600">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 9).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white dark:text-ink-500 dark:hover:text-ink-900"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-300 dark:text-gold-600">
              Contact
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm text-white/60 dark:text-ink-500">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                {siteConfig.address}
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-white dark:hover:text-ink-900"
                >
                  <Mail className="h-4 w-4 shrink-0 text-teal-400" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-white dark:hover:text-ink-900"
                >
                  <Phone className="h-4 w-4 shrink-0 text-teal-400" />
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 dark:border-border-subtle dark:text-ink-400 sm:flex-row">
          <p>© {year} AZELIE. Tous droits réservés.</p>
          <p>Conçu et développé à Dakar, Sénégal.</p>
        </div>
      </Container>
    </footer>
  );
}
