"use client";

import { useRef } from "react";
import Image from "next/image";
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
      className="relative flex min-h-[80vh] items-center overflow-hidden sm:min-h-[90vh]"
    >
      <motion.div
        style={{ y: imageY }}
        className="animate-hero-breathe absolute inset-0 scale-110"
      >
        <Image
          src="/images/hd-photo-1-hero.png"
          alt="L'équipe AZELIE collaborant sur un projet numérique"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center] sm:object-[78%_center] sm:object-center"
        />
      </motion.div>

      {/* Voile sombre pour la lisibilité du texte : uniforme sur mobile
          (le texte y est centré, donc toute la largeur doit contraster),
          en dégradé gauche→droite à partir de sm: (texte aligné à gauche,
          on laisse les visages de droite respirer). */}
      <div
        aria-hidden
        className="absolute inset-0 bg-ink-950/60 sm:bg-gradient-to-r sm:from-ink-950/65 sm:via-ink-950/25 sm:to-transparent"
      />

      <Container className="relative py-24 sm:py-28">
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
            className="mx-auto mt-6 max-w-[600px] text-base leading-relaxed text-white/80 sm:mx-0 sm:text-lg"
          >
            <span className="sm:hidden">
              Web, mobile, IA et formation : AZELIE accompagne particuliers
              et entreprises dans leur transformation numérique.
            </span>
            <span className="hidden sm:inline">
              AZELIE accompagne les particuliers, les entreprises et les
              étudiants dans le développement web, les logiciels de gestion,
              les services informatiques, le dépannage, les réseaux, la
              cybersécurité, l&apos;intelligence artificielle et les
              formations numériques.
            </span>
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
