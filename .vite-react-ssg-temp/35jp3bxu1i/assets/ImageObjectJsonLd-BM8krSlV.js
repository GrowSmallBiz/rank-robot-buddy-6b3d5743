import { j as jsxDEV } from "../main.mjs";
import { Head } from "vite-react-ssg";
const BASE_URL = "https://growsmallbiz.io";
const DEFAULT_LICENSE = `${BASE_URL}/about/`;
const ORG_ID = `${BASE_URL}/#organization`;
const toAbsolute = (url) => {
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `${BASE_URL}${url}`;
  return `${BASE_URL}/${url}`;
};
const ImageObjectJsonLd = ({ pageUrl, images }) => {
  if (!images || images.length === 0) return null;
  const absolutePageUrl = toAbsolute(pageUrl);
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${absolutePageUrl}#image-list`,
    itemListElement: images.map((img, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "ImageObject",
        "@id": `${absolutePageUrl}#image-${idx + 1}`,
        contentUrl: toAbsolute(img.contentUrl || img.url),
        url: toAbsolute(img.url),
        caption: img.caption,
        ...img.description && { description: img.description },
        ...img.width && { width: img.width },
        ...img.height && { height: img.height },
        license: img.license || DEFAULT_LICENSE,
        acquireLicensePage: img.acquireLicensePage || DEFAULT_LICENSE,
        creditText: img.creditText || "GrowSmallBiz Digital Marketing",
        creator: { "@id": ORG_ID },
        copyrightNotice: `© ${(/* @__PURE__ */ new Date()).getUTCFullYear()} GrowSmallBiz Digital Marketing`
      }
    }))
  };
  return /* @__PURE__ */ jsxDEV(Head, { children: /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(itemList) }, void 0, false, {
    fileName: "/dev-server/src/components/seo/ImageObjectJsonLd.tsx",
    lineNumber: 79,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/seo/ImageObjectJsonLd.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, void 0);
};
export {
  ImageObjectJsonLd as I
};
