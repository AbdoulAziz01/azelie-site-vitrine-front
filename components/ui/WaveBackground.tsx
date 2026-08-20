/**
 * Fond animé "vagues" pour une section qui doit accrocher le regard
 * (ex. présentation d'un profil). Pur CSS/SVG (aucune lib JS), respecte
 * prefers-reduced-motion via les classes .animate-* définies dans
 * globals.css. Un masque en dégradé estompe le bas du fond pour une
 * transition douce vers la section suivante plutôt qu'une coupe nette.
 */
export function WaveBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)]"
    >
      {/* Halo central, pulse doucement derrière le texte */}
      <div className="animate-pulse-glow absolute left-1/2 top-1/3 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-teal-300/25 via-gold-300/20 to-transparent blur-3xl" />

      {/* Blobs qui dérivent lentement, pleinement visibles (pas de troncature en bord) */}
      <div className="animate-blob-drift absolute left-10 top-16 h-64 w-64 rounded-full bg-gold-400/30 blur-3xl sm:h-80 sm:w-80" />
      <div
        className="animate-blob-drift absolute right-10 bottom-24 h-56 w-56 rounded-full bg-teal-400/30 blur-3xl sm:h-72 sm:w-72"
        style={{ animationDelay: "-7s" }}
      />

      {/* Vagues superposées : quatre couches, plus saturées en bas pour contraster avec le pastel du haut */}
      <div className="absolute inset-x-0 bottom-0 h-full">
        <svg
          className="animate-wave-slow absolute bottom-0 h-[55%] w-[200%] sm:h-[62%]"
          viewBox="0 0 2400 300"
          preserveAspectRatio="none"
        >
          <path
            d="M0,180 C300,280 600,60 1200,180 C1500,280 1800,60 2400,180 L2400,300 L0,300 Z"
            fill="var(--color-teal-500)"
            fillOpacity="0.28"
          />
        </svg>
        <svg
          className="animate-wave-medium absolute bottom-0 h-[45%] w-[200%] sm:h-[50%]"
          viewBox="0 0 2400 260"
          preserveAspectRatio="none"
        >
          <path
            d="M0,180 C400,80 800,220 1200,140 C1600,60 2000,200 2400,120 L2400,260 L0,260 Z"
            fill="var(--color-gold-500)"
            fillOpacity="0.22"
          />
        </svg>
        <svg
          className="animate-wave-fast absolute bottom-0 h-[32%] w-[200%] sm:h-[36%]"
          viewBox="0 0 2400 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,140 C350,80 750,180 1200,120 C1650,60 2050,180 2400,120 L2400,200 L0,200 Z"
            fill="var(--color-ink-800)"
            fillOpacity="0.16"
          />
        </svg>
        <svg
          className="animate-wave-xfast absolute bottom-0 h-[20%] w-[200%]"
          viewBox="0 0 2400 140"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C300,50 600,120 1200,80 C1800,40 2100,120 2400,90 L2400,140 L0,140 Z"
            fill="var(--color-teal-300)"
            fillOpacity="0.18"
          />
        </svg>
      </div>
    </div>
  );
}
