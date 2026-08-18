import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { blogPosts } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Nos réflexions sur la technologie, le produit et la transformation digitale au Sénégal et en Afrique.",
  alternates: { canonical: "/blog" },
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <PageHero
        eyebrow="Blog"
        title="Idées et perspectives"
        description="Nos réflexions sur la technologie, le produit et la transformation digitale en Afrique."
      />

      <section className="py-16 sm:py-24">
        <Container className="max-w-4xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[var(--shadow-brand)]"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-brand-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between text-xs text-ink-400">
                      <span className="font-medium uppercase tracking-wide text-gold-600 dark:text-gold-300">
                        {post.category}
                      </span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h2 className="mt-4 flex-1 font-display text-lg font-semibold tracking-tight">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-border-subtle pt-4 text-xs text-ink-400">
                      <span>{formatDate(post.date)}</span>
                      <ArrowUpRight className="h-4 w-4 text-ink-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-500 dark:text-ink-500" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
