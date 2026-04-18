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
    items: {
      name: string;
      description?: string;
      url?: string;
      category?: string;
      areaServed?: { "@type": string; name: string };
      eligibleCustomerType?: string;
      availability?: string;
    }[];
  };
  /**
   * When true, uses cross-referenced @id graph:
   * - Service.provider → sitewide Organization @id (no inline duplicate)
   * - Adds @id to Service and BreadcrumbList
   * - Emits a WebPage wrapper linking Service, BreadcrumbList, and (optionally) FAQPage
   */
  useEntityGraph?: boolean;
  /** Page name for WebPage entity (used when useEntityGraph). Falls back to serviceName. */
  pageName?: string;
  /** Page description for WebPage entity (used when useEntityGraph). Falls back to description. */
  pageDescription?: string;
  /** When set with useEntityGraph, WebPage.mainEntity references the FAQPage @id on this URL. */
  hasFaqPage?: boolean;
}

const BASE_URL = "https://growsmallbiz.io";

export const ServiceJsonLd = ({
  serviceName,
  serviceType,
  description,
  url,
  breadcrumbs,
  rating,
  offerCatalog,
  useEntityGraph = false,
  pageName,
  pageDescription,
  hasFaqPage = false,
}: ServiceJsonLdProps) => {
  const pageUrl = `${BASE_URL}${url}${url.endsWith("/") ? "" : "/"}`;
  const serviceId = `${pageUrl}#service`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const webpageId = `${pageUrl}#webpage`;
  const faqpageId = `${pageUrl}#faqpage`;

  const provider = useEntityGraph
    ? { "@id": `${BASE_URL}/#organization` }
    : {
        "@type": "ProfessionalService",
        name: "GrowSmallBiz Digital Marketing",
        url: BASE_URL,
        telephone: "+1-925-886-3724",
        address: {
          "@type": "PostalAddress",
          addressCountry: "US",
        },
        priceRange: "$$",
      };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    ...(useEntityGraph && { "@id": serviceId }),
    name: serviceName,
    description,
    serviceType,
    url: pageUrl,
    provider,
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
    ...(offerCatalog && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: offerCatalog.name,
        itemListElement: offerCatalog.items.map((item) => ({
          "@type": "Offer",
          ...(item.availability && { availability: item.availability }),
          ...(item.eligibleCustomerType && { eligibleCustomerType: item.eligibleCustomerType }),
          ...(item.areaServed && { areaServed: item.areaServed }),
          itemOffered: {
            "@type": "Service",
            name: item.name,
            ...(item.description && { description: item.description }),
            ...(item.url && { url: item.url }),
            ...(item.category && { category: item.category }),
          },
        })),
      },
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...(useEntityGraph && { "@id": breadcrumbId }),
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

  const webpageSchema = useEntityGraph
    ? {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": webpageId,
        url: pageUrl,
        name: pageName || serviceName,
        description: pageDescription || description,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": serviceId },
        breadcrumb: { "@id": breadcrumbId },
        ...(hasFaqPage && { mainEntity: { "@id": faqpageId } }),
      }
    : null;

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      {webpageSchema && (
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
      )}
    </Head>
  );
};
