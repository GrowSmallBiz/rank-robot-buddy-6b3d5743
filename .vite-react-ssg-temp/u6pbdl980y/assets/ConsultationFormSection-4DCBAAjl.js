import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { e as buildCtaUrl } from "../main.mjs";
const BASE_FORM_URL = "https://api.leadconnectorhq.com/widget/form/8qUn6xE0v2Jwcs63q0uV";
const ConsultationFormSection = ({
  iframeHeight = "1006px",
  utmCampaign = "consultation-form",
  utmMedium
}) => {
  const iframeSrc = useMemo(
    () => buildCtaUrl(BASE_FORM_URL, utmCampaign, utmMedium),
    [utmCampaign, utmMedium]
  );
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 relative overflow-hidden", style: { backgroundColor: "#2d465c" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "max-w-3xl mx-auto relative rounded-2xl shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]",
      style: { border: "2px solid #17a2b8" },
      children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl p-8", style: { backgroundColor: "#191321" }, children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-3 text-sm", children: "Ready to Talk?" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4", children: [
            "Get a ",
            /* @__PURE__ */ jsx("span", { className: "text-accent", children: "Consultation" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-white/80 text-lg", children: "Tell us a little about your business and what kind of growth support you need. We will review your inquiry and follow up with the next best step." })
        ] }),
        /* @__PURE__ */ jsx(
          "iframe",
          {
            src: iframeSrc,
            style: { width: "100%", height: iframeHeight, border: "none", borderRadius: "0px" },
            id: "inline-8qUn6xE0v2Jwcs63q0uV",
            loading: "lazy",
            "data-layout": "{'id':'INLINE'}",
            "data-trigger-type": "alwaysShow",
            "data-trigger-value": "",
            "data-activation-type": "alwaysActivated",
            "data-activation-value": "",
            "data-deactivation-type": "neverDeactivate",
            "data-deactivation-value": "",
            "data-form-name": "GrowSmallBiz Website Contact",
            "data-height": "1126",
            "data-layout-iframe-id": "inline-8qUn6xE0v2Jwcs63q0uV",
            "data-form-id": "8qUn6xE0v2Jwcs63q0uV",
            title: "GrowSmallBiz Website Contact"
          }
        )
      ] })
    }
  ) }) });
};
export {
  ConsultationFormSection as C
};
