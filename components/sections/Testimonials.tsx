import Image from "next/image";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/site-config";

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Témoignages"
          title="Ce que disent nos clients"
          description="La satisfaction de nos clients est notre meilleure preuve : voici quelques retours sur nos projets."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-border-subtle bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand-soft text-gold-500">
                  <Quote className="h-4 w-4" />
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-200">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border-subtle pt-4">
                  {testimonial.photo ? (
                    <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.photo}
                        alt={testimonial.name}
                        fill
                        sizes="36px"
                        className="object-cover object-top"
                      />
                    </div>
                  ) : null}
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-ink-400">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
