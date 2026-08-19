import { siteConfig, type FaqItem, type TeamMember } from "@/lib/site-config";

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: ["Azelie Sénégal", "Azelie Digital"],
    url: siteConfig.url,
    inLanguage: "fr-SN",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function TeamJsonLd({ team }: { team: readonly TeamMember[] }) {
  const data = team.map((member) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    worksFor: { "@id": `${siteConfig.url}/#organization` },
  }));

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: "Azelie Digital",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/Logo_Azelie_With.png`,
    image: `${siteConfig.url}/images/banniere-afrique.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.locality,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
      streetAddress: "Plateau",
    },
    areaServed: {
      "@type": "Country",
      name: "Sénégal",
    },
    sameAs: Object.values(siteConfig.socials),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: readonly FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
