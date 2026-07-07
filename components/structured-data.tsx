import { siteContent } from "@/data/site-content";

const siteUrl = siteContent.seo.siteUrl;
const professional = siteContent.professional;

const localBusinessId = `${siteUrl}/#local-business`;
const websiteId = `${siteUrl}/#website`;
const webpageId = `${siteUrl}/#webpage`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: professional.name,
      inLanguage: "it-IT",
      publisher: {
        "@id": localBusinessId,
      },
    },
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: siteUrl,
      name: siteContent.seo.title,
      description: siteContent.seo.description,
      isPartOf: {
        "@id": websiteId,
      },
      about: {
        "@id": localBusinessId,
      },
      inLanguage: "it-IT",
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService", "MedicalBusiness"],
      "@id": localBusinessId,
      name: professional.name,
      description: siteContent.seo.description,
      url: siteUrl,
      image: `${siteUrl}/android-chrome-512x512.png`,
      logo: `${siteUrl}/android-chrome-512x512.png`,
      telephone: professional.phone,
      email: professional.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: professional.streetAddress,
        addressLocality: professional.city,
        addressRegion: professional.region,
        addressCountry: professional.country,
      },
      areaServed: siteContent.seo.areaServed.map((area) => ({
        "@type": "Place",
        name: area,
      })),
      knowsAbout: siteContent.seo.knowsAbout,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Percorsi di psicoterapia",
        itemListElement: siteContent.services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
            provider: {
              "@id": localBusinessId,
            },
            areaServed: siteContent.seo.areaServed.map((area) => ({
              "@type": "Place",
              name: area,
            })),
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: siteContent.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export function StructuredData() {
  return (
    <script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
