"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-brand bg-[length:180%_auto] bg-left text-white shadow-[var(--shadow-brand)] hover:bg-right hover:shadow-[var(--shadow-glow-gold)]",
  secondary:
    "bg-surface border border-border-subtle text-foreground hover:border-gold-400 hover:text-gold-600 dark:hover:text-gold-300",
  ghost: "bg-transparent text-foreground hover:bg-surface-muted",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

function buttonClasses(variant: Variant, size: Size, className?: string) {
  return cn(
    "group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium tracking-tight transition-[background-position,box-shadow,color,border-color] duration-500 ease-out will-change-transform",
    variants[variant],
    sizes[size],
    className
  );
}

/** Effet magnétique : le bouton suit légèrement le curseur puis rebondit
 * au clic. Utilise GSAP directement sur le DOM pour éviter tout conflit
 * de transform avec les classes CSS. Neutralisé pour les préférences
 * de mouvement réduit et les écrans tactiles. */
function useMagnetic<T extends HTMLElement>(strength = 0.3) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const setX = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
    const setY = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setX((e.clientX - rect.left - rect.width / 2) * strength);
      setY((e.clientY - rect.top - rect.height / 2) * strength);
    };
    const onLeave = () => {
      setX(0);
      setY(0);
      gsap.to(el, { scale: 1, duration: 0.4, ease: "back.out(2)" });
    };
    const onDown = () => gsap.to(el, { scale: 0.94, duration: 0.15, ease: "power2.out" });
    const onUp = () => gsap.to(el, { scale: 1, duration: 0.4, ease: "back.out(2)" });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mousedown", onDown);
    el.addEventListener("mouseup", onUp);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mouseup", onUp);
    };
  }, [strength]);

  return ref;
}

const Shine = () => (
  <span
    aria-hidden
    className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-white/25 opacity-0 transition-[opacity,transform] duration-700 ease-out group-hover:translate-x-[350%] group-hover:opacity-100"
  />
);

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  const ref = useMagnetic<HTMLButtonElement>();
  return (
    <button ref={ref} className={buttonClasses(variant, size, className)} {...rest}>
      {variant === "primary" && <Shine />}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

type LinkButtonProps = {
  href: string;
  target?: string;
  rel?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function LinkButton({
  href,
  target,
  rel,
  variant = "primary",
  size = "md",
  className,
  children,
}: LinkButtonProps) {
  const ref = useMagnetic<HTMLAnchorElement>();
  return (
    <Link
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={buttonClasses(variant, size, className)}
    >
      {variant === "primary" && <Shine />}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}
