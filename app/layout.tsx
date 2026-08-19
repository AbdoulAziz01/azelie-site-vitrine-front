import type { Metadata } from "next";
import { Geist, Sora } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const bodyFont = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AZELIE",
    "Azelie Sénégal",
    "entreprise informatique Sénégal",
    "entreprise digitale Sénégal",
    "agence informatique Sénégal",
    "agence web Sénégal",
    "développement web Sénégal",
    "développement mobile Dakar",
    "formation digitale Sénégal",
    "formation informatique Sénégal",
    "entreprise IT Sénégal",
    "intelligence artificielle Sénégal",
    "transformation digitale Sénégal",
    "agence digitale Dakar",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "fr_SN",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/banniere-afrique.png",
        width: 1177,
        height: 660,
        alt: `${siteConfig.name} — agence digitale au Sénégal`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/banniere-afrique.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <ThemeProvider>
          <MotionProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
