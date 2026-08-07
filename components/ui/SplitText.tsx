"use client";

import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export function SplitText({
  children,
  className,
  by = "chars",
  delay = 0,
}: {
  children: string;
  className?: string;
  by?: "chars" | "words";
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const split = new SplitType(el, {
      types: by === "chars" ? "words,chars" : "words",
    });
    const targets = by === "chars" ? split.chars : split.words;
    if (!targets || targets.length === 0) return;

    gsap.set(targets, { opacity: 0, yPercent: 115, filter: "blur(8px)" });

    let played = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played) {
          played = true;
          gsap.to(targets, {
            opacity: 1,
            yPercent: 0,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
            stagger: by === "chars" ? 0.018 : 0.07,
            delay,
          });
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      split.revert();
    };
  }, [by, delay]);

  return (
    <span ref={ref} className={cn("split-text-mask inline", className)}>
      {children}
    </span>
  );
}
