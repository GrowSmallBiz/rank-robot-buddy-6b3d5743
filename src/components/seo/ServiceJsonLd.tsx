import { Head } from "vite-react-ssg";

interface ServiceJsonLdProps {
  serviceName: string;
  serviceType: string;
  description: string;
  url: string;
  breadcrumbs: { name: string; url: string }[];
  /** Optional aggregateRating */
  rating?: { ratingValue: string; reviewCount: string };
  /** Optional offer catalog for Service schema */
  offerCatalog?: {
    name: string;
    items: { name: string }[];
  };
}

const BASE_URL = "https://growsmallbiz.io";

export const ServiceJsonLd = ({
  serviceName,
  serviceType,
  description,
  url,
  breadcrumbs,
  rating,
}: ServiceJsonLdProps) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    serviceType,
    url: `${BASE_URL}${url}${url.endsWith('/') ? '' : '/'}`,
    provider: {
      "@type": "ProfessionalService",
      name: "GrowSmallBiz Digital Marketing",
      url: BASE_URL,
      telephone: "+1-925-886-3724",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
      priceRange: "$$",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    ...(rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating.ratingValue,
        reviewCount: rating.reviewCount,
      },
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.name,
        item: `${BASE_URL}${crumb.url}${crumb.url.endsWith('/') ? '' : '/'}`,
      })),
    ],
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Head>
  );
};
