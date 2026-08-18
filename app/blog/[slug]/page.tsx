import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Cta } from "@/components/sections/Cta";
import { blogPosts } from "@/lib/site-config";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="pt-16 pb-24 sm:pt-20 sm:pb-32">
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-foreground dark:text-ink-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au blog
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <Badge>{post.category}</Badge>
            <span className="text-xs text-ink-400">
              {formatDate(post.date)} · {post.readingTime} de lecture
            </span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="mt-10 space-y-6 border-t border-border-subtle pt-10">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-ink-600 dark:text-ink-200"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </article>

      <Cta />
    </>
  );
}
