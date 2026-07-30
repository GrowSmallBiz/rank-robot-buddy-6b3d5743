import { j as jsxDEV } from "../main.mjs";
import { Head } from "vite-react-ssg";
const VideoJsonLd = ({
  name,
  description,
  thumbnailUrl,
  contentUrl,
  uploadDate,
  duration
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    contentUrl,
    uploadDate,
    ...duration && { duration },
    publisher: {
      "@type": "Organization",
      name: "GrowSmallBiz Digital Marketing",
      url: "https://growsmallbiz.io"
    }
  };
  return /* @__PURE__ */ jsxDEV(Head, { children: /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(schema) }, void 0, false, {
    fileName: "/dev-server/src/components/seo/VideoJsonLd.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/seo/VideoJsonLd.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, void 0);
};
export {
  VideoJsonLd as V
};
