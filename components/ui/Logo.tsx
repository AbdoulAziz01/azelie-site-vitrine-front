import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  imgClassName,
  forceColor = false,
  priority = true,
}: {
  className?: string;
  imgClassName?: string;
  /** Always render the colored logo, ignoring theme (for surfaces that invert, like the Footer). */
  forceColor?: boolean;
  /** Précharger l'image en priorité (uniquement pertinent au-dessus de la ligne de flottaison, ex. Navbar). */
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="AZELIE — retour à l'accueil"
      className={cn(
        "inline-flex items-center transition-transform duration-300 hover:scale-[1.03]",
        className
      )}
    >
      <Image
        src="/images/Azelie Logo sans fond.png"
        alt="AZELIE"
        width={777}
        height={321}
        priority={priority}
        className={cn(
          "h-9 w-auto sm:h-10",
          !forceColor && "dark:hidden",
          imgClassName
        )}
      />
      {!forceColor && (
        <Image
          src="/images/Logo_Azelie_With.png"
          alt="AZELIE"
          width={726}
          height={344}
          priority
          className={cn(
            "hidden h-[50px] w-auto sm:h-[55px] dark:block",
            imgClassName
          )}
        />
      )}
    </Link>
  );
}
