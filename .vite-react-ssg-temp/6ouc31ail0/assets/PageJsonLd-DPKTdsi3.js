import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
const BASE_URL = "https://growsmallbiz.io";
const PageJsonLd = ({
  pageType,
  name,
  description,
  url,
  breadcrumbs
}) => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": pageType,
    name,
    description,
    url: `${BASE_URL}${url}${url.endsWith("/") ? "" : "/"}`,
    publisher: {
      "@type": "Organization",
      name: "GrowSmallBiz Digital Marketing",
      url: BASE_URL
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
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(pageSchema) }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) })
  ] });
};
export {
  PageJsonLd as P
};
