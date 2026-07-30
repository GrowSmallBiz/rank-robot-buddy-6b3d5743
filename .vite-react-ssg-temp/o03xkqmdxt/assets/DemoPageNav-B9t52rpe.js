import { j as jsxDEV, F as Fragment } from "../main.mjs";
import { B as Button } from "./button-Co-CyCVS.js";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { u as useUtm } from "./use-utm-X_toIThi.js";
const DemoPageNav = () => {
  const { buildUrl } = useUtm();
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("section", { className: "py-10", style: { backgroundColor: "hsl(var(--ghl-section-bg))" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 text-center max-w-3xl", children: /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxDEV(
      "a",
      {
        href: buildUrl("https://lp.growsmallbiz.io/ai-client-growth-system-demo", "schedule-demo"),
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Schedule a Demo"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/services/DemoPageNav.tsx",
        lineNumber: 15,
        columnNumber: 13
      },
      void 0
    ) }, void 0, false, {
      fileName: "/dev-server/src/components/services/DemoPageNav.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/services/DemoPageNav.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/services/DemoPageNav.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "text-center py-8", style: { backgroundColor: "hsl(var(--background))" }, children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV(Link, { to: "/services/marketing-automation-for-small-business/#demo-videos", children: [
      /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-5 h-5 mr-2" }, void 0, false, {
        fileName: "/dev-server/src/components/services/DemoPageNav.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, void 0),
      "View All Demo Videos"
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/services/DemoPageNav.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/services/DemoPageNav.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/services/DemoPageNav.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/services/DemoPageNav.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, void 0);
};
export {
  DemoPageNav as D
};
