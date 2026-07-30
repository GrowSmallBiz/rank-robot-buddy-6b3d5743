import { j as jsxDEV } from "../main.mjs";
import { Head } from "vite-react-ssg";
const BASE_URL = "https://growsmallbiz.io";
const ServiceJsonLd = ({
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
  hasFaqPage = false
}) => {
  const pageUrl = `${BASE_URL}${url}${url.endsWith("/") ? "" : "/"}`;
  const serviceId = `${pageUrl}#service`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const webpageId = `${pageUrl}#webpage`;
  const faqpageId = `${pageUrl}#faqpage`;
  const provider = useEntityGraph ? { "@id": `${BASE_URL}/#organization` } : {
    "@type": "ProfessionalService",
    name: "GrowSmallBiz Digital Marketing",
    url: BASE_URL,
    telephone: "+1-925-886-3724",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US"
    },
    priceRange: "$$"
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    ...useEntityGraph && { "@id": serviceId },
    name: serviceName,
    description,
    serviceType,
    url: pageUrl,
    provider,
    areaServed: {
      "@type": "Country",
      name: "United States"
    },
    ...rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating.ratingValue,
        reviewCount: rating.reviewCount
      }
    },
    ...offerCatalog && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: offerCatalog.name,
        itemListElement: offerCatalog.items.map((item) => ({
          "@type": "Offer",
          ...item.availability && { availability: item.availability },
          ...item.eligibleCustomerType && { eligibleCustomerType: item.eligibleCustomerType },
          ...item.areaServed && { areaServed: item.areaServed },
          itemOffered: {
            "@type": "Service",
            name: item.name,
            ...item.description && { description: item.description },
            ...item.url && { url: item.url },
            ...item.category && { category: item.category }
          }
        }))
      }
    }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...useEntityGraph && { "@id": breadcrumbId },
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.name,
        item: `${BASE_URL}${crumb.url}${crumb.url.endsWith("/") ? "" : "/"}`
      }))
    ]
  };
  const webpageSchema = useEntityGraph ? {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": webpageId,
    url: pageUrl,
    name: pageName || serviceName,
    description: pageDescription || description,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": serviceId },
    breadcrumb: { "@id": breadcrumbId },
    ...hasFaqPage && { mainEntity: { "@id": faqpageId } }
  } : null;
  return /* @__PURE__ */ jsxDEV(Head, { children: [
    /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(serviceSchema) }, void 0, false, {
      fileName: "/dev-server/src/components/seo/ServiceJsonLd.tsx",
      lineNumber: 152,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) }, void 0, false, {
      fileName: "/dev-server/src/components/seo/ServiceJsonLd.tsx",
      lineNumber: 155,
      columnNumber: 7
    }, void 0),
    webpageSchema && /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(webpageSchema) }, void 0, false, {
      fileName: "/dev-server/src/components/seo/ServiceJsonLd.tsx",
      lineNumber: 159,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/seo/ServiceJsonLd.tsx",
    lineNumber: 151,
    columnNumber: 5
  }, void 0);
};
export {
  ServiceJsonLd as S
};
