"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { TopBar } from "@/components/layout/TopBar";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

// Sur la page d'accueil, ces sections vivent toutes sous l'URL "/" — on
// suit donc le scroll pour savoir laquelle est visible et surligner le
// bon lien de navigation, plutôt que de comparer uniquement le pathname.
const HOME_SECTION_HREFS: Record<string, string> = {
  services: "/services",
  produits: "/produits",
  projets: "/projets",
  equipe: "/equipe",
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState<string | null>(null);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();
    return () => {
      document.body.style.overflow = original;
      lenis?.start();
    };
  }, [open, lenis]);

  useEffect(() => {
    if (pathname !== "/") return;

    const onScroll = () => {
      const triggerLine = 140;
      let current: string | null = null;
      for (const [id, href] of Object.entries(HOME_SECTION_HREFS)) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= triggerLine) {
          current = href;
        }
      }
      setActiveHref(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  const isActive = (href: string) => {
    if (pathname !== "/") return pathname === href;
    return href === "/" ? activeHref === null : activeHref === href;
  };

  return (
    <>
      <TopBar />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            aria-hidden
            className="fixed inset-0 z-40 bg-ink-950/50 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      <header className="sticky top-0 z-50 w-full">
        <Container className={cn("transition-all duration-300", scrolled ? "py-3" : "py-4")}>
          <nav
            className={cn(
              "flex h-16 items-center justify-between rounded-full border border-border-subtle bg-background/90 pr-2 pl-4 backdrop-blur-lg transition-shadow duration-300 sm:pr-3 sm:pl-6",
              scrolled ? "shadow-[var(--shadow-brand)]" : "shadow-[var(--shadow-soft)]"
            )}
          >
            <Logo />

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-medium text-ink-500 transition-colors hover:text-foreground dark:text-ink-300 dark:hover:text-white",
                      active && "text-foreground dark:text-white"
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-surface-muted"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <ThemeToggle />
              <LinkButton href="/contact" size="sm">
                Nous contacter
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </LinkButton>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle transition-colors hover:border-gold-400"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden lg:hidden"
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
                  }}
                  className="mt-3 rounded-2xl border border-border-subtle bg-background shadow-[var(--shadow-brand)]"
                >
                  <div className="flex flex-col gap-1 p-4">
                    {navLinks.map((link) => (
                      <motion.div
                        key={link.href}
                        variants={{
                          hidden: { opacity: 0, x: -16 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          href={link.href}
                          className={cn(
                            "block rounded-lg px-3 py-3 text-base font-medium text-ink-500 transition-colors hover:bg-surface-muted hover:text-foreground dark:text-ink-300",
                            isActive(link.href) && "text-foreground dark:text-white"
                          )}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-4"
                    >
                      <LinkButton href="/contact" className="justify-center">
                        Nous contacter
                      </LinkButton>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="mt-3 block text-center text-sm text-ink-400"
                      >
                        {siteConfig.email}
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </header>
    </>
  );
}
