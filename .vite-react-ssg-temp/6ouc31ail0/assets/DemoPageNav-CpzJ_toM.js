import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { B as Button } from "./Header-Dct2bBAe.js";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { u as useUtm } from "./use-utm-CiJKCMCk.js";
const DemoPageNav = () => {
  const { buildUrl } = useUtm();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "py-10", style: { backgroundColor: "hsl(var(--ghl-section-bg))" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 text-center max-w-3xl", children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsx(
      "a",
      {
        href: buildUrl("https://lp.growsmallbiz.io/ai-client-growth-system-demo", "schedule-demo"),
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Schedule a Demo"
      }
    ) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "text-center py-8", style: { backgroundColor: "hsl(var(--background))" }, children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/services/marketing-automation-for-small-business/#demo-videos", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "w-5 h-5 mr-2" }),
      "View All Demo Videos"
    ] }) }) })
  ] });
};
export {
  DemoPageNav as D
};
