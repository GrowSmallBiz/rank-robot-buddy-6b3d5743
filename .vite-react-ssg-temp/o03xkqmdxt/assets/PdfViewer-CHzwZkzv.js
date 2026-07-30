import { j as jsxDEV } from "../main.mjs";
import { useState, useCallback } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { ChevronLeft, ChevronRight, ZoomOut, ZoomIn } from "lucide-react";
import { B as Button } from "./button-Co-CyCVS.js";
import "vite-react-ssg";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "react-router-dom";
import "@radix-ui/react-slot";
import "class-variance-authority";
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
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: `my-8 mx-auto max-w-4xl rounded-xl border border-border bg-muted/10 overflow-hidden ${className}`,
      onContextMenu: (e) => e.preventDefault(),
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between px-4 py-2 border-b border-border bg-card/50", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                variant: "ghost",
                size: "icon",
                onClick: goToPrev,
                disabled: pageNumber <= 1,
                className: "h-8 w-8",
                children: /* @__PURE__ */ jsxDEV(ChevronLeft, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "/dev-server/src/components/PdfViewer.tsx",
                  lineNumber: 46,
                  columnNumber: 13
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/PdfViewer.tsx",
                lineNumber: 39,
                columnNumber: 11
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-muted-foreground px-2", children: [
              pageNumber,
              " / ",
              numPages || "—"
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/PdfViewer.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                variant: "ghost",
                size: "icon",
                onClick: goToNext,
                disabled: pageNumber >= numPages,
                className: "h-8 w-8",
                children: /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "/dev-server/src/components/PdfViewer.tsx",
                  lineNumber: 58,
                  columnNumber: 13
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/PdfViewer.tsx",
                lineNumber: 51,
                columnNumber: 11
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/PdfViewer.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxDEV(Button, { variant: "ghost", size: "icon", onClick: zoomOut, className: "h-8 w-8", children: /* @__PURE__ */ jsxDEV(ZoomOut, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/components/PdfViewer.tsx",
              lineNumber: 63,
              columnNumber: 13
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/PdfViewer.tsx",
              lineNumber: 62,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-muted-foreground w-12 text-center", children: [
              Math.round(scale * 100),
              "%"
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/PdfViewer.tsx",
              lineNumber: 65,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV(Button, { variant: "ghost", size: "icon", onClick: zoomIn, className: "h-8 w-8", children: /* @__PURE__ */ jsxDEV(ZoomIn, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/components/PdfViewer.tsx",
              lineNumber: 69,
              columnNumber: 13
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/PdfViewer.tsx",
              lineNumber: 68,
              columnNumber: 11
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/PdfViewer.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/PdfViewer.tsx",
          lineNumber: 37,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "overflow-auto max-h-[700px] flex justify-center p-4 select-none", children: /* @__PURE__ */ jsxDEV(
          Document,
          {
            file: src,
            onLoadSuccess: onDocumentLoadSuccess,
            loading: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center h-48 text-muted-foreground text-sm", children: "Loading PDF…" }, void 0, false, {
              fileName: "/dev-server/src/components/PdfViewer.tsx",
              lineNumber: 80,
              columnNumber: 13
            }, void 0),
            error: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center h-48 text-destructive text-sm", children: "Failed to load PDF" }, void 0, false, {
              fileName: "/dev-server/src/components/PdfViewer.tsx",
              lineNumber: 85,
              columnNumber: 13
            }, void 0),
            children: /* @__PURE__ */ jsxDEV(
              Page,
              {
                pageNumber,
                scale,
                renderTextLayer: false,
                renderAnnotationLayer: false
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/PdfViewer.tsx",
                lineNumber: 90,
                columnNumber: 11
              },
              void 0
            )
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/PdfViewer.tsx",
            lineNumber: 76,
            columnNumber: 9
          },
          void 0
        ) }, void 0, false, {
          fileName: "/dev-server/src/components/PdfViewer.tsx",
          lineNumber: 75,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/PdfViewer.tsx",
      lineNumber: 32,
      columnNumber: 5
    },
    void 0
  );
};
export {
  PdfViewer
};
