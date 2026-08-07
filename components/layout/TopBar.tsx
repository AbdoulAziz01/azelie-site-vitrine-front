import { Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { href: siteConfig.socials.linkedin, label: "LinkedIn", icon: FaLinkedinIn },
  { href: siteConfig.socials.twitter, label: "X", icon: FaXTwitter },
  { href: siteConfig.socials.instagram, label: "Instagram", icon: FaInstagram },
  { href: siteConfig.socials.github, label: "GitHub", icon: FaGithub },
];

export function TopBar() {
  return (
    <div className="hidden border-b border-transparent bg-ink-950 text-white lg:block dark:border-border-subtle dark:bg-white dark:text-ink-900">
      <Container className="flex h-10 items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white/60 transition-colors hover:text-gold-300 dark:text-ink-400 dark:hover:text-gold-600"
              >
                <social.icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
          <span className="h-4 w-px bg-white/15 dark:bg-border-subtle" />
          <span className="inline-flex items-center gap-1.5 text-white/70 dark:text-ink-500">
            <MapPin className="h-3.5 w-3.5 text-teal-400 dark:text-teal-600" />
            {siteConfig.address}
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-1.5 text-white/70 transition-colors hover:text-white dark:text-ink-500 dark:hover:text-ink-900"
          >
            <Mail className="h-3.5 w-3.5 text-teal-400 dark:text-teal-600" />
            {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-1.5 text-white/70 transition-colors hover:text-white dark:text-ink-500 dark:hover:text-ink-900"
          >
            <Phone className="h-3.5 w-3.5 text-teal-400 dark:text-teal-600" />
            {siteConfig.phone}
          </a>
        </div>
      </Container>
    </div>
  );
}
