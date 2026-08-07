"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Changer de thème"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-foreground transition-colors hover:border-gold-400 hover:text-gold-500",
        className
      )}
    >
      {mounted && (
        <>
          <Sun className={cn("h-5 w-5", isDark ? "hidden" : "block")} />
          <Moon className={cn("h-5 w-5", isDark ? "block" : "hidden")} />
        </>
      )}
    </button>
  );
}
