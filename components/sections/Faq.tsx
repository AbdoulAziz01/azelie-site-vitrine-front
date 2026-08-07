import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/lib/site-config";

export function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions fréquentes"
          align="center"
          className="mx-auto"
        />
        <Reveal className="mt-16">
          <Accordion items={faqs} />
        </Reveal>
      </Container>
    </section>
  );
}
