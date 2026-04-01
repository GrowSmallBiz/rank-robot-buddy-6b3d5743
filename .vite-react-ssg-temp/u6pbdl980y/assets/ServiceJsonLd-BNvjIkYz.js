import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
const BASE_URL = "https://growsmallbiz.io";
const ServiceJsonLd = ({
  serviceName,
  serviceType,
  description,
  url,
  breadcrumbs,
  rating
}) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    serviceType,
    provider: {
      "@type": "LocalBusiness",
      name: "GrowSmallBiz Digital Marketing",
      url: BASE_URL,
      telephone: "+1-555-GROW-BIZ",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US"
      },
      priceRange: "$$"
    },
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
    }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
  return /* @__PURE__ */ jsxs(Head, { children: [
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(serviceSchema) }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) })
  ] });
};
export {
  ServiceJsonLd as S
};
