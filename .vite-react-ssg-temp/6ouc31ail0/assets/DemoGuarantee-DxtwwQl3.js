import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./Header-Dct2bBAe.js";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
const DemoGuarantee = () => /* @__PURE__ */ jsx("section", { className: "py-10", style: { backgroundColor: "hsl(var(--ghl-section-bg))" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-3xl text-center", children: [
  /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight mb-6", children: [
    '"No Risk ',
    /* @__PURE__ */ jsx("span", { className: "text-accent", children: "Guarantee" }),
    '"'
  ] }),
  /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-foreground mb-6", children: "The Choice Is Yours" }),
  /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-8 mb-8", children: [
    /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
      "Start today and get a 30 day ",
      /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "money back guarantee." }),
      " If, for any reason, you're not 100% satisfied with your License within 30 days of your purchase, simply reach out to Member Support, and we'll gladly issue you a full refund for your monthly subscription. ",
      /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "No questions asked." })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-4 italic", children: "*Memberships are month to month, no contracts!" })
  ] }),
  /* @__PURE__ */ jsx(
    Button,
    {
      size: "lg",
      className: "bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 h-auto",
      asChild: true,
      children: /* @__PURE__ */ jsxs(Link, { to: "/services/marketing-automation-for-small-business/#ready-to-talk", children: [
        /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 mr-2" }),
        "100% SATISFACTION GUARANTEE"
      ] })
    }
  )
] }) });
export {
  DemoGuarantee as D
};
