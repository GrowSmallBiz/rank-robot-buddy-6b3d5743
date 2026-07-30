import { j as jsxDEV, c as cn } from "../main.mjs";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight } from "lucide-react";
const Breadcrumb = React.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsxDEV("nav", { ref, "aria-label": "breadcrumb", ...props }, void 0, false, {
  fileName: "/dev-server/src/components/ui/breadcrumb.tsx",
  lineNumber: 12,
  columnNumber: 26
}, void 0));
Breadcrumb.displayName = "Breadcrumb";
const BreadcrumbList = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    "ol",
    {
      ref,
      className: cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/ui/breadcrumb.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    void 0
  )
);
BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV("li", { ref, className: cn("inline-flex items-center gap-1.5", className), ...props }, void 0, false, {
    fileName: "/dev-server/src/components/ui/breadcrumb.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, void 0)
);
BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = React.forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsxDEV(Comp, { ref, className: cn("transition-colors hover:text-foreground", className), ...props }, void 0, false, {
    fileName: "/dev-server/src/components/ui/breadcrumb.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, void 0);
});
BreadcrumbLink.displayName = "BreadcrumbLink";
const BreadcrumbPage = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    "span",
    {
      ref,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("font-normal text-foreground", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/ui/breadcrumb.tsx",
      lineNumber: 50,
      columnNumber: 5
    },
    void 0
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage";
const BreadcrumbSeparator = ({ children, className, ...props }) => /* @__PURE__ */ jsxDEV("li", { role: "presentation", "aria-hidden": "true", className: cn("[&>svg]:size-3.5", className), ...props, children: children ?? /* @__PURE__ */ jsxDEV(ChevronRight, {}, void 0, false, {
  fileName: "/dev-server/src/components/ui/breadcrumb.tsx",
  lineNumber: 64,
  columnNumber: 18
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/components/ui/breadcrumb.tsx",
  lineNumber: 63,
  columnNumber: 3
}, void 0);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
export {
  Breadcrumb as B,
  BreadcrumbList as a,
  BreadcrumbItem as b,
  BreadcrumbLink as c,
  BreadcrumbSeparator as d,
  BreadcrumbPage as e
};
