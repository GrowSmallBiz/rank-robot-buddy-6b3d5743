import { jsx } from "react/jsx-runtime";
import { useState, useEffect, createElement } from "react";
const PdfViewer = ({ src, className }) => {
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    import("./PdfViewer-DDIA9CTJ.js").then((mod) => {
      setComponent(() => mod.PdfViewer);
    });
  }, []);
  if (!Component) {
    return /* @__PURE__ */ jsx("div", { className: "my-8 mx-auto max-w-4xl rounded-xl border border-border bg-muted/10 p-8 text-center text-muted-foreground text-sm", children: "Loading PDF viewer…" });
  }
  return createElement(Component, { src, className });
};
export {
  PdfViewer as P
};
