"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

const PLAIN_WORDS = ["AZELIE", "transforme", "vos", "idées", "en"];
const GRADIENT_WORDS = ["solutions", "numériques", "performantes"];
const TRAILING_WORDS = ["au", "Sénégal"];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[86vh] items-center overflow-hidden sm:min-h-[90vh]"
    >
      {/* Préchargement conditionnel de la photo desktop : ce lien n'est
          respecté que par les navigateurs correspondant à la media query,
          donc aucun octet de la photo n'est téléchargé sur mobile. */}
      <link
        rel="preload"
        as="image"
        href="/images/hero-team-desktop.webp"
        media="(min-width: 640px)"
        fetchPriority="high"
      />

      {/* Fond mobile : composition graphique premium (pas de photo).
          La photo source est un plan large avec les sujets cadrés sur sa
          moitié droite — recadrée en portrait sur mobile, elle ne montre
          qu'un zoom flou et peu lisible. On lui préfère un habillage
          graphique net, cohérent avec l'identité teal/gold d'AZELIE. */}
      <motion.div
        aria-hidden
        style={{ y: imageY }}
        className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-teal-950 sm:hidden"
      >
        <div className="animate-icon-float absolute -right-16 -top-24 h-64 w-64 rounded-full bg-gold-400/25 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-teal-500/25 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </motion.div>

      {/* Fond desktop/tablette : la photo, en image CSS responsive
          (pas de next/image) pour garantir qu'elle n'est jamais chargée
          sous 640px. */}
      <motion.div
        aria-hidden
        style={{ y: imageY }}
        className="animate-hero-breathe absolute inset-0 hidden scale-110 bg-cover bg-[78%_center] sm:block sm:bg-[url('/images/hero-team-desktop.webp')]"
      />

      {/* Voile sombre pour la lisibilité du texte : léger sur mobile
          (le fond graphique est déjà sombre), en dégradé gauche→droite
          à partir de sm: (texte aligné à gauche, on laisse la photo de
          droite respirer). */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent sm:bg-gradient-to-r sm:from-ink-950/65 sm:via-ink-950/25 sm:to-transparent"
      />

      <Container className="relative py-20 sm:py-28">
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="max-w-2xl text-center sm:text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold-300" />
            Votre partenaire numérique
          </motion.span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.12] text-balance text-white sm:text-5xl">
            {PLAIN_WORDS.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
            {GRADIENT_WORDS.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + (PLAIN_WORDS.length + i) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-gradient-brand inline-block"
                style={{ animationDelay: `${i * 0.35}s`, animationDuration: "3.5s" }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
            {TRAILING_WORDS.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay:
                    0.15 +
                    (PLAIN_WORDS.length + GRADIENT_WORDS.length + i) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {word}
                {i < TRAILING_WORDS.length - 1 && <>&nbsp;</>}
              </motion.span>
            ))}
            .
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-6 max-w-[520px] text-base leading-relaxed text-white/80 sm:mx-0 sm:text-lg"
          >
            Web, mobile, IA et formation : nous accompagnons particuliers et
            entreprises dans leur transformation numérique, à Dakar et
            au-delà.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-start"
          >
            <LinkButton href="/services" size="lg">
              Découvrir nos services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </LinkButton>
            <Link
              href="/services#formation"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/70 bg-transparent px-8 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Nos formations
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
