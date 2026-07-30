import { j as jsxDEV } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { useState, useEffect, createElement } from "react";
const BASE_URL = "https://growsmallbiz.io";
const ArticleJsonLd = ({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "Subrata Guha",
  image,
  breadcrumbs
}) => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${BASE_URL}${url}${url.endsWith("/") ? "" : "/"}`,
    datePublished,
    ...dateModified && { dateModified },
    author: {
      "@type": "Person",
      name: authorName
    },
    publisher: {
      "@type": "Organization",
      name: "GrowSmallBiz Digital Marketing",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/growsmallbiz-logo.webp`
      }
    },
    ...image && { image }
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
    /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(articleSchema) }, void 0, false, {
      fileName: "/dev-server/src/components/seo/ArticleJsonLd.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) }, void 0, false, {
      fileName: "/dev-server/src/components/seo/ArticleJsonLd.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/seo/ArticleJsonLd.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, void 0);
};
const PdfViewer = ({ src, className }) => {
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    import("./PdfViewer-CHzwZkzv.js").then((mod) => {
      setComponent(() => mod.PdfViewer);
    });
  }, []);
  if (!Component) {
    return /* @__PURE__ */ jsxDEV("div", { className: "my-8 mx-auto max-w-4xl rounded-xl border border-border bg-muted/10 p-8 text-center text-muted-foreground text-sm", children: "Loading PDF viewer…" }, void 0, false, {
      fileName: "/dev-server/src/components/PdfViewerWrapper.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, void 0);
  }
  return createElement(Component, { src, className });
};
export {
  ArticleJsonLd as A,
  PdfViewer as P
};
