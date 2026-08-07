"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

function parseValue(raw: string) {
  const match = raw.match(/^(\D*)(\d+(?:[.,]\d+)?)(\D*)$/);
  if (!match) return { prefix: "", number: 0, suffix: raw, decimals: 0 };
  const [, prefix, numberStr, suffix] = match;
  const normalized = numberStr.replace(",", ".");
  const decimals = normalized.includes(".") ? normalized.split(".")[1].length : 0;
  return { prefix, number: parseFloat(normalized), suffix, decimals };
}

export function AnimatedStat({
  value,
  label,
  delay = 0,
  className,
}: {
  value: string;
  label: string;
  delay?: number;
  className?: string;
}) {
  const { prefix, number, suffix, decimals } = parseValue(value);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, number, {
      duration: 1.6,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, number, delay, count]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <dt className="sr-only">{label}</dt>
      <dd className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {prefix}
        {decimals ? display.toFixed(decimals) : Math.round(display)}
        {suffix}
      </dd>
      <p className="mt-1 text-xs text-ink-500 dark:text-ink-400 sm:text-sm">
        {label}
      </p>
    </div>
  );
}
