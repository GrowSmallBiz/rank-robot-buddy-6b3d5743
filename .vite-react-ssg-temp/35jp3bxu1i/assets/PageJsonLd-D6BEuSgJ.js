import { j as jsxDEV } from "../main.mjs";
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
  return /* @__PURE__ */ jsxDEV(Head, { children: [
    /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(pageSchema) }, void 0, false, {
      fileName: "/dev-server/src/components/seo/PageJsonLd.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) }, void 0, false, {
      fileName: "/dev-server/src/components/seo/PageJsonLd.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/seo/PageJsonLd.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, void 0);
};
export {
  PageJsonLd as P
};
