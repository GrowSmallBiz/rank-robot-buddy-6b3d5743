import { Head } from "vite-react-ssg";

const BASE_URL = "https://growsmallbiz.io";

interface LocationJsonLdProps {
  cityName: string;
  stateCode: string;
  description: string;
  url: string;
  /** City latitude — used as the geographic center of the service area */
  latitude: number;
  /** City longitude — used as the geographic center of the service area */
  longitude: number;
  breadcrumbs: { name: string; url: string }[];
  /** Optional: nearby cities also served from this location page (for areaServed expansion) */
  nearbyCities?: { name: string; latitude?: number; longitude?: number }[];
  /** Optional: aggregateRating for this city/branch */
  rating?: { ratingValue: string; reviewCount: string };
}

/**
 * Emits a LocalBusiness + MarketingAgency schema scoped to a specific city,
 * plus a BreadcrumbList. The business is linked back to the sitewide
 * Organization entity (#organization) via parentOrganization.@id so Google
 * understands this is a local service-area branch of a national org.
 *
 * Address = Danville HQ (the legal address of the business).
 * areaServed = the city this page targets (+ optional nearby cities).
 */
export const LocationJsonLd = ({
  cityName,
  stateCode,
  description,
  url,
  latitude,
  longitude,
  breadcrumbs,
  nearbyCities,
  rating,
}: LocationJsonLdProps) => {
  const pageUrl = `${BASE_URL}${url}${url.endsWith("/") ? "" : "/"}`;
  const localBusinessId = `${pageUrl}#localbusiness`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  const areaServed: object[] = [
    {
      "@type": "City",
      name: `${cityName}, ${stateCode}`,
      geo: {
        "@type": "GeoCoordinates",
        latitude,
        longitude,
      },
    },
    ...(nearbyCities ?? []).map((c) => ({
      "@type": "City",
      name: `${c.name}, ${stateCode}`,
      ...(c.latitude !== undefined && c.longitude !== undefined
        ? {
            geo: {
              "@type": "GeoCoordinates",
              latitude: c.latitude,
              longitude: c.longitude,
            },
          }
        : {}),
    })),
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MarketingAgency", "ProfessionalService"],
    "@id": localBusinessId,
    name: `GrowSmallBiz Digital Marketing — ${cityName}, ${stateCode}`,
    description,
    url: pageUrl,
    image: `${BASE_URL}/images/growsmallbiz-logo.webp`,
    logo: `${BASE_URL}/images/growsmallbiz-logo.webp`,
    telephone: "+1-925-886-3724",
    email: "info@growsmallbiz.io",
    priceRange: "$$",
    // Legal/HQ address — required for LocalBusiness validity
    address: {
      "@type": "PostalAddress",
      streetAddress: "52 Antelope CT",
      addressLocality: "Danville",
      addressRegion: "CA",
      postalCode: "94506",
      addressCountry: "US",
    },
    // Geographic center signal: the city this page targets
    geo: {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    },
    areaServed,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    // Cross-reference to the sitewide Organization entity
    parentOrganization: { "@id": `${BASE_URL}/#organization` },
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
    "@id": breadcrumbId,
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
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Head>
  );
};
