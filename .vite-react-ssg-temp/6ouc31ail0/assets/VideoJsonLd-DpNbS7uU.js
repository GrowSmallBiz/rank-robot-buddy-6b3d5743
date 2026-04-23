import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schema) }) });
};
export {
  VideoJsonLd as V
};
