import { j as jsxDEV, F as Fragment } from "../main.mjs";
import { useMemo } from "react";
import { b as buildCtaUrl } from "./use-utm-X_toIThi.js";
import "vite-react-ssg";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "react-router-dom";
const BASE_FORM_URL = "https://api.leadconnectorhq.com/widget/form/8qUn6xE0v2Jwcs63q0uV";
const ConsultationFormSection = ({
  iframeHeight = "1006px",
  iframeBorderRadius = "0px",
  utmCampaign = "consultation-form",
  utmMedium,
  headingOverride,
  eyebrowOverride,
  descriptionOverride,
  formUrlOverride,
  formNameOverride,
  dataHeightOverride,
  sectionClassName,
  headingGradientClass,
  cardBorderColor = "#17a2b8",
  cardGlowClass = "shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]",
  heroOverlay = false
}) => {
  const iframeSrc = useMemo(
    () => formUrlOverride ?? buildCtaUrl(BASE_FORM_URL, utmCampaign, utmMedium),
    [formUrlOverride, utmCampaign, utmMedium]
  );
  const formId = formUrlOverride ? iframeSrc.split("/").pop() ?? "" : "8qUn6xE0v2Jwcs63q0uV";
  const inlineId = `inline-${formId}`;
  const formName = formNameOverride ?? "GrowSmallBiz Website Contact";
  const dataHeight = dataHeightOverride ?? "1126";
  return /* @__PURE__ */ jsxDEV("section", { className: `py-16 md:py-24 relative overflow-hidden ${sectionClassName ?? "bg-[#2d465c]"}`, children: [
    heroOverlay && /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,210,190,0.16),transparent_55%)] pointer-events-none" }, void 0, false, {
        fileName: "/dev-server/src/components/sections/ConsultationFormSection.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[hsl(18_85%_65%/0.18)] blur-3xl pointer-events-none" }, void 0, false, {
        fileName: "/dev-server/src/components/sections/ConsultationFormSection.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[hsl(280_60%_70%/0.14)] blur-3xl pointer-events-none" }, void 0, false, {
        fileName: "/dev-server/src/components/sections/ConsultationFormSection.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/ConsultationFormSection.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: `max-w-3xl mx-auto relative rounded-2xl ${cardGlowClass}`,
        style: { border: `2px solid ${cardBorderColor}` },
        children: /* @__PURE__ */ jsxDEV("div", { className: "relative rounded-2xl p-8", style: { backgroundColor: "#191321" }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-3 text-sm", children: eyebrowOverride ?? "Ready to Talk?" }, void 0, false, {
              fileName: "/dev-server/src/components/sections/ConsultationFormSection.tsx",
              lineNumber: 89,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: `text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 bg-clip-text text-transparent ${headingGradientClass ?? "bg-gradient-heading text-white"}`, children: headingOverride ?? "Get a Consultation" }, void 0, false, {
              fileName: "/dev-server/src/components/sections/ConsultationFormSection.tsx",
              lineNumber: 90,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-white/80 text-lg", children: descriptionOverride ?? "Tell us a little about your business and what kind of growth support you need. We will review your inquiry and follow up with the next best step." }, void 0, false, {
              fileName: "/dev-server/src/components/sections/ConsultationFormSection.tsx",
              lineNumber: 93,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/ConsultationFormSection.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "iframe",
            {
              src: iframeSrc,
              style: { width: "100%", height: iframeHeight, border: "none", borderRadius: iframeBorderRadius },
              id: inlineId,
              loading: "lazy",
              "data-layout": "{'id':'INLINE'}",
              "data-trigger-type": "alwaysShow",
              "data-trigger-value": "",
              "data-activation-type": "alwaysActivated",
              "data-activation-value": "",
              "data-deactivation-type": "neverDeactivate",
              "data-deactivation-value": "",
              "data-form-name": formName,
              "data-height": dataHeight,
              "data-layout-iframe-id": inlineId,
              "data-form-id": formId,
              title: formName
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/sections/ConsultationFormSection.tsx",
              lineNumber: 99,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/sections/ConsultationFormSection.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/sections/ConsultationFormSection.tsx",
        lineNumber: 83,
        columnNumber: 9
      },
      void 0
    ) }, void 0, false, {
      fileName: "/dev-server/src/components/sections/ConsultationFormSection.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/ConsultationFormSection.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, void 0);
};
export {
  ConsultationFormSection
};
