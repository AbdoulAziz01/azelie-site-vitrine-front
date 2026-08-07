"use client";

import { useRef, type MouseEvent } from "react";
import Link from "next/link";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const cardClasses = (className?: string) =>
  cn(
    "group relative overflow-hidden rounded-2xl border border-border-subtle bg-surface p-6 [transform-style:preserve-3d] transition-[border-color,box-shadow] duration-300 ease-out will-change-transform hover:border-transparent hover:shadow-[var(--shadow-brand)] sm:p-8",
    className
  );

const cardInner = (
  <>
    {/* Voile dégradé statique, déjà présent */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-brand-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
    {/* Halo qui suit le curseur */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(280px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in srgb, var(--color-gold-400) 18%, transparent), transparent 65%)",
      }}
    />
  </>
);

/** Tilt 3D + halo au curseur, désactivé sur tactile et mouvement réduit. */
function useTilt<T extends HTMLElement>(maxTilt = 6) {
  const ref = useRef<T>(null);

  const onMouseMove = (e: MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--spot-x", `${px * 100}%`);
    el.style.setProperty("--spot-y", `${py * 100}%`);

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    )
      return;

    gsap.to(el, {
      rotateY: (px - 0.5) * maxTilt * 2,
      rotateX: (0.5 - py) * maxTilt * 2,
      transformPerspective: 900,
      y: -4,
      duration: 0.45,
      ease: "power2.out",
    });
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { rotateX: 0, rotateY: 0, y: 0, duration: 0.6, ease: "power3.out" });
  };

  return { ref, onMouseMove, onMouseLeave };
}

export function Card({
  id,
  href,
  className,
  children,
}: {
  id?: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement & HTMLAnchorElement>();

  if (href) {
    return (
      <Link
        id={id}
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={cardClasses(className)}
      >
        {cardInner}
        <div className="relative">{children}</div>
      </Link>
    );
  }

  return (
    <div
      id={id}
      ref={ref as React.Ref<HTMLDivElement>}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cardClasses(className)}
    >
      {cardInner}
      <div className="relative">{children}</div>
    </div>
  );
}
