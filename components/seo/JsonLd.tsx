import { siteConfig } from "@/lib/site-config";

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
