import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { ChevronLeft, ChevronRight, ZoomOut, ZoomIn } from "lucide-react";
import { B as Button } from "../main.mjs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "react-router-dom";
import "@radix-ui/react-slot";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
const PdfViewer = ({ src, className = "" }) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);
  const onDocumentLoadSuccess = useCallback(({ numPages: numPages2 }) => {
    setNumPages(numPages2);
    setPageNumber(1);
  }, []);
  const goToPrev = () => setPageNumber((p) => Math.max(1, p - 1));
  const goToNext = () => setPageNumber((p) => Math.min(numPages, p + 1));
  const zoomIn = () => setScale((s) => Math.min(2.5, s + 0.2));
  const zoomOut = () => setScale((s) => Math.max(0.6, s - 0.2));
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `my-8 mx-auto max-w-4xl rounded-xl border border-border bg-muted/10 overflow-hidden ${className}`,
      onContextMenu: (e) => e.preventDefault(),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-2 border-b border-border bg-card/50", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "ghost",
                size: "icon",
                onClick: goToPrev,
                disabled: pageNumber <= 1,
                className: "h-8 w-8",
                children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground px-2", children: [
              pageNumber,
              " / ",
              numPages || "—"
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "ghost",
                size: "icon",
                onClick: goToNext,
                disabled: pageNumber >= numPages,
                className: "h-8 w-8",
                children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: zoomOut, className: "h-8 w-8", children: /* @__PURE__ */ jsx(ZoomOut, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground w-12 text-center", children: [
              Math.round(scale * 100),
              "%"
            ] }),
            /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: zoomIn, className: "h-8 w-8", children: /* @__PURE__ */ jsx(ZoomIn, { className: "w-4 h-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-auto max-h-[700px] flex justify-center p-4 select-none", children: /* @__PURE__ */ jsx(
          Document,
          {
            file: src,
            onLoadSuccess: onDocumentLoadSuccess,
            loading: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-48 text-muted-foreground text-sm", children: "Loading PDF…" }),
            error: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-48 text-destructive text-sm", children: "Failed to load PDF" }),
            children: /* @__PURE__ */ jsx(
              Page,
              {
                pageNumber,
                scale,
                renderTextLayer: false,
                renderAnnotationLayer: false
              }
            )
          }
        ) })
      ]
    }
  );
};
export {
  PdfViewer
};
