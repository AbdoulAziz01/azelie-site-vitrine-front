"use client";

import { MotionConfig } from "framer-motion";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { Preloader } from "@/components/motion/Preloader";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <Preloader />
      <CustomCursor />
      <SmoothScroll>{children}</SmoothScroll>
    </MotionConfig>
  );
}
