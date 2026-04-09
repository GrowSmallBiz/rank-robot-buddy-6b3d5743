import { Head } from "vite-react-ssg";

const BASE_URL = "https://growsmallbiz.io";

interface LocationJsonLdProps {
  cityName: string;
  stateCode: string;
  description: string;
  url: string;
  latitude: number;
  longitude: number;
  breadcrumbs: { name: string; url: string }[];
}

export const LocationJsonLd = ({
  cityName,
  stateCode,
  description,
  url,
  latitude,
  longitude,
  breadcrumbs,
}: LocationJsonLdProps) => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `GrowSmallBiz Digital Marketing – ${cityName}, ${stateCode}`,
    description,
    url: `${BASE_URL}${url}${url.endsWith("/") ? "" : "/"}`,
    telephone: "+1-925-886-3724",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: stateCode,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: cityName,
      geo: {
        "@type": "GeoCoordinates",
        latitude,
        longitude,
      },
    },
    parentOrganization: {
      "@type": "Organization",
      name: "GrowSmallBiz Digital Marketing",
      url: BASE_URL,
    },
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
        item: `${BASE_URL}${crumb.url}${crumb.url.endsWith("/") ? "" : "/"}`,
      })),
    ],
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(locationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Head>
  );
};
