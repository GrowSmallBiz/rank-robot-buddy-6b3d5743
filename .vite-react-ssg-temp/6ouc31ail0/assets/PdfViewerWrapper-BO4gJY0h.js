import { jsxs, jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs(Head, { children: [
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(articleSchema) }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) })
  ] });
};
const PdfViewer = ({ src, className }) => {
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    import("./PdfViewer-CP6lxiGJ.js").then((mod) => {
      setComponent(() => mod.PdfViewer);
    });
  }, []);
  if (!Component) {
    return /* @__PURE__ */ jsx("div", { className: "my-8 mx-auto max-w-4xl rounded-xl border border-border bg-muted/10 p-8 text-center text-muted-foreground text-sm", children: "Loading PDF viewer…" });
  }
  return createElement(Component, { src, className });
};
export {
  ArticleJsonLd as A,
  PdfViewer as P
};
