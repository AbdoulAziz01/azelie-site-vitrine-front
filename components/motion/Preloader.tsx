"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const SESSION_KEY = "azelie-preloaded";

export function Preloader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem(SESSION_KEY)) return;

    document.documentElement.classList.add("overflow-hidden");

    let raf: number;
    let shown = false;
    const start = performance.now();
    const duration = 1100;

    const tick = (now: number) => {
      if (!shown) {
        shown = true;
        setVisible(true);
      }
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem(SESSION_KEY, "1");
        setTimeout(() => {
          setVisible(false);
          document.documentElement.classList.remove("overflow-hidden");
        }, 350);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink-950"
        >
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            exit={{ clipPath: "inset(0 0 0 100%)", transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] } }}
            className="absolute inset-0 bg-ink-950"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center gap-6"
          >
            <div className="rounded-2xl bg-white p-3 shadow-[var(--shadow-glow-gold)]">
              <Image
                src="/images/Azelie.jpeg"
                alt="AZELIE"
                width={1080}
                height={447}
                priority
                className="h-9 w-auto"
              />
            </div>
            <div className="h-px w-40 overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-gradient-brand"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <span className="font-mono text-xs tracking-[0.2em] text-white/40">
              {String(progress).padStart(3, "0")}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
