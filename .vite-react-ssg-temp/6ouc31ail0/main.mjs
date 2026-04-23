import { Head, ViteReactSSG } from "vite-react-ssg";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useEffect, lazy as lazy$1, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLocation, Navigate, Outlet } from "react-router-dom";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);
  return null;
};
const Redirect = ({ to }) => {
  const { search, hash } = useLocation();
  const dest = `${to}${search}${hash}`;
  const absoluteDest = `https://growsmallbiz.io${to}`;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("meta", { httpEquiv: "refresh", content: `0;url=${dest}` }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: absoluteDest }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, follow" }),
      /* @__PURE__ */ jsx("title", { children: "Redirecting…" })
    ] }),
    /* @__PURE__ */ jsx(Navigate, { to: dest, replace: true })
  ] });
};
const Toaster = lazy$1(() => import("./assets/toaster-JbqTvW1L.js").then((m) => ({ default: m.Toaster })));
const Sonner = lazy$1(() => import("./assets/sonner-D0qmM78w.js").then((m) => ({ default: m.Toaster })));
const AppLayout = () => /* @__PURE__ */ jsx(HelmetProvider, { children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [
  /* @__PURE__ */ jsx(ScrollToTop, {}),
  /* @__PURE__ */ jsxs(Suspense, { fallback: null, children: [
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsx(Sonner, {})
  ] }),
  /* @__PURE__ */ jsx(Outlet, {})
] }) });
const lazy = (importFn) => async () => {
  try {
    const mod = await importFn();
    return { Component: mod.default };
  } catch (err) {
    const key = "chunk-reload";
    if (!sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, "1");
      window.location.reload();
    }
    throw err;
  }
};
const routes = [
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, lazy: lazy(() => import("./assets/Index-_LxGJbM5.js")) },
      { path: "about", lazy: lazy(() => import("./assets/About-CSkOm4YV.js")) },
      { path: "services", lazy: lazy(() => import("./assets/Services-DXl_u6Pd.js")) },
      { path: "service", lazy: lazy(() => import("./assets/Services-DXl_u6Pd.js")) },
      { path: "services/paid-advertising", lazy: lazy(() => import("./assets/PaidMedia-DbKHL0rw.js")) },
      { path: "services/paid-advertising/google-ads", lazy: lazy(() => import("./assets/GoogleAds-6U7d7tKb.js")) },
      { path: "services/paid-advertising/google-local-services-ads", lazy: lazy(() => import("./assets/LSA-CAdIys3a.js")) },
      { path: "services/paid-advertising/facebook-ads", lazy: lazy(() => import("./assets/FacebookAds-CuLgfjGB.js")) },
      { path: "services/website-design", lazy: lazy(() => import("./assets/WebsiteDesign-ziwBUd8p.js")) },
      { path: "services/seo-agency", lazy: lazy(() => import("./assets/ManagedAISEO-j1OWCvLG.js")) },
      { path: "services/seo-agency/aeo", lazy: lazy(() => import("./assets/AEO-ufPGcBsY.js")) },
      { path: "services/seo-agency/geo", lazy: lazy(() => import("./assets/GEO-qbMw9Bhz.js")) },
      { path: "services/seo-agency/local-seo", lazy: lazy(() => import("./assets/LocalSEO-k0mGvunD.js")) },
      { path: "services/seo-agency/authority-building", lazy: lazy(() => import("./assets/AuthorityBuilding-CCsGkmXf.js")) },
      { path: "services/seo-agency/link-building", lazy: lazy(() => import("./assets/LinkBuilding-B_B6h85K.js")) },
      { path: "services/seo-agency/technical-seo", lazy: lazy(() => import("./assets/TechnicalSEO-CXprz3uZ.js")) },
      { path: "services/seo-agency/on-page-seo", lazy: lazy(() => import("./assets/OnPageSEO-DPiOKICW.js")) },
      { path: "services/paid-ads", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/services/paid-advertising/" }) },
      { path: "services/marketing-automation-for-small-business", lazy: lazy(() => import("./assets/MarketingAutomation-CLRIk8Sm.js")) },
      { path: "services/marketing-automation-for-small-business/universal-inbox", lazy: lazy(() => import("./assets/UniversalInbox-BkVcIR-f.js")) },
      { path: "services/marketing-automation-for-small-business/workflow-automations", lazy: lazy(() => import("./assets/WorkflowAutomations-OuOuwukr.js")) },
      { path: "services/marketing-automation-for-small-business/website-builder", lazy: lazy(() => import("./assets/WebsiteBuilder-BKWNJq9A.js")) },
      { path: "services/marketing-automation-for-small-business/email-sms-marketing", lazy: lazy(() => import("./assets/EmailSmsMarketing-pxX_Jkhe.js")) },
      { path: "services/marketing-automation-for-small-business/integrated-payments", lazy: lazy(() => import("./assets/IntegratedPayments-DKnwkfqZ.js")) },
      { path: "services/marketing-automation-for-small-business/social-media-planner", lazy: lazy(() => import("./assets/SocialMediaPlanner-Cv96lM03.js")) },
      { path: "services/marketing-automation-for-small-business/calendar-scheduling", lazy: lazy(() => import("./assets/CalendarScheduling-Dx98ArFX.js")) },
      { path: "services/marketing-automation-for-small-business/sales-tracker", lazy: lazy(() => import("./assets/SalesTracker-CZOxCOq5.js")) },
      { path: "services/marketing-automation-for-small-business/forms-surveys", lazy: lazy(() => import("./assets/FormsSurveys-Cf2Umwf6.js")) },
      { path: "services/marketing-automation-for-small-business/reviews", lazy: lazy(() => import("./assets/Reviews-CXv8nyno.js")) },
      { path: "services/marketing-automation-for-small-business/call-tracking", lazy: lazy(() => import("./assets/CallTracking-iQcP7v7Z.js")) },
      { path: "services/marketing-automation-for-small-business/crm", lazy: lazy(() => import("./assets/Crm-OIJb_DKS.js")) },
      { path: "services/marketing-automation-for-small-business/sales-funnels", lazy: lazy(() => import("./assets/SalesFunnels-D6q9W1Gg.js")) },
      { path: "services/marketing-automation-for-small-business/memberships", lazy: lazy(() => import("./assets/Memberships-CUFA4pAO.js")) },
      { path: "services/marketing-automation-for-small-business/webchat", lazy: lazy(() => import("./assets/Webchat-FZ6T2N4y.js")) },
      { path: "services/marketing-automation-for-small-business/generate-leads", lazy: lazy(() => import("./assets/GenerateLeads-BH2GK9fo.js")) },
      { path: "locations/locations-we-serve", lazy: lazy(() => import("./assets/LocationsWeServe-DMu6FUV7.js")) },
      { path: "locations/danville-ca", lazy: lazy(() => import("./assets/DanvilleCA-DCsIRrE_.js")) },
      { path: "locations/san-ramon-ca", lazy: lazy(() => import("./assets/SanRamonCA-DTfesTmK.js")) },
      { path: "locations/walnut-creek-ca", lazy: lazy(() => import("./assets/WalnutCreekCA-Befk9l6C.js")) },
      { path: "locations/concord-ca", lazy: lazy(() => import("./assets/ConcordCA-Ck7bdHKr.js")) },
      { path: "locations/dublin-ca", lazy: lazy(() => import("./assets/DublinCA-DwM-xdDF.js")) },
      { path: "locations/pleasanton-ca", lazy: lazy(() => import("./assets/PleasantonCA-9afRiJWk.js")) },
      { path: "locations/livermore-ca", lazy: lazy(() => import("./assets/LivermoreCA-ZRg29ddm.js")) },
      { path: "locations/tracy-ca", lazy: lazy(() => import("./assets/TracyCA-D45zXbgU.js")) },
      { path: "locations/pleasant-hill-ca", lazy: lazy(() => import("./assets/PleasantHillCA-C9bL0d75.js")) },
      { path: "locations/martinez-ca", lazy: lazy(() => import("./assets/MartinezCA-DPX3VR0P.js")) },
      // ── NEW niche page routes ──
      { path: "home-service-contractors", lazy: lazy(() => import("./assets/HomeServices-DjBRRxQb.js")) },
      { path: "home-service-contractors/marketing-for-hvac-contractors", lazy: lazy(() => import("./assets/index-BURz53bs.js")) },
      { path: "home-service-contractors/tree-lawn-landscaping-marketing", lazy: lazy(() => import("./assets/index-BDh00tT4.js")) },
      { path: "home-service-contractors/painting-companies-marketing", lazy: lazy(() => import("./assets/index-Ng2wh4Af.js")) },
      { path: "industries/painting-companies", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/painting-companies-marketing/" }) },
      { path: "health-and-wellness-practices", lazy: lazy(() => import("./assets/HealthAndWellness-CB_M_1Q0.js")) },
      { path: "health-and-wellness-practices/marketing-for-med-spas", lazy: lazy(() => import("./assets/index-DUmdwPYj.js")) },
      { path: "health-and-wellness-practices/marketing-for-chiropractors", lazy: lazy(() => import("./assets/index-PRLupEw6.js")) },
      { path: "health-and-wellness-practices/marketing-for-dentists", lazy: lazy(() => import("./assets/index-DH18LNcs.js")) },
      { path: "professional-services", lazy: lazy(() => import("./assets/ProfessionalServices-CDs9L9RK.js")) },
      { path: "professional-services/marketing-for-realtors", lazy: lazy(() => import("./assets/RealtorMarketing-BskG405F.js")) },
      { path: "professional-services/marketing-for-realtors-v2", lazy: lazy(() => import("./assets/RealtorMarketingV2-DSQpHfWi.js")) },
      { path: "professional-services/marketing-for-photographers", lazy: lazy(() => import("./assets/index-dNCwKPPZ.js")) },
      // ── NEW case study routes ──
      { path: "home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study", lazy: lazy(() => import("./assets/HvacPlumbingElectrical-D8EayJ3l.js")) },
      { path: "home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study", lazy: lazy(() => import("./assets/HvacPlumbingElectrical-CjTXR7N5.js")) },
      { path: "home-service-contractors/marketing-for-roofers/roofing-seo-case-study", lazy: lazy(() => import("./assets/Roofers-YsB8pQFY.js")) },
      { path: "home-service-contractors/marketing-for-landscapers/landscaping-seo-case-study", lazy: lazy(() => import("./assets/TreeLawnLandscaping-DZ5ai1I6.js")) },
      { path: "home-service-contractors/marketing-for-home-remodelers/home-remodeling-seo-case-study", lazy: lazy(() => import("./assets/HomeRemodeling-vPYjVY50.js")) },
      { path: "home-service-contractors/marketing-for-cleaning-services/cleaning-seo-case-study", lazy: lazy(() => import("./assets/CleaningServices-6oES4tVo.js")) },
      { path: "health-and-wellness-practices/marketing-for-med-spas/med-spa-seo-case-study", lazy: lazy(() => import("./assets/MedSpaCaseStudy-BHFzLCW5.js")) },
      { path: "health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study", lazy: lazy(() => import("./assets/DentalCaseStudy-CtNPF_De.js")) },
      { path: "health-and-wellness-practices/marketing-for-chiropractors/chiropractic-seo-case-study", lazy: lazy(() => import("./assets/ChiropracticCaseStudy-V0laXyGi.js")) },
      // ── 301 REDIRECTS: old niche pages → new ──
      { path: "home-service-contractors/hvac-marketing", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/marketing-for-hvac-contractors/" }) },
      { path: "home-service-contractors/roofing-marketing", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/marketing-for-roofers/" }) },
      { path: "home-service-contractors/landscaping-marketing", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/marketing-for-landscapers/" }) },
      { path: "home-service-contractors/home-renovation-marketing", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/marketing-for-home-remodelers/" }) },
      { path: "home-service-contractors/cleaning-service-marketing", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/marketing-for-cleaning-services/" }) },
      { path: "health-and-wellness-practices/med-spa-marketing", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/health-and-wellness-practices/marketing-for-med-spas/" }) },
      { path: "health-and-wellness-practices/chiropractic-marketing", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/health-and-wellness-practices/marketing-for-chiropractors/" }) },
      { path: "health-and-wellness-practices/dental-marketing", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/health-and-wellness-practices/marketing-for-dentists/" }) },
      { path: "professional-services/realtor-marketing", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/professional-services/marketing-for-realtors/" }) },
      { path: "professional-services/photographers-marketing", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/professional-services/marketing-for-photographers/" }) },
      // ── 301 REDIRECTS: old flat service URLs → canonical nested paths ──
      { path: "services/facebook-ads", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/services/paid-advertising/facebook-ads/" }) },
      { path: "services/google-ads", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/services/paid-advertising/google-ads/" }) },
      { path: "services/local-seo", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/services/seo-agency/local-seo/" }) },
      { path: "professional-services/photography-marketing", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/professional-services/marketing-for-photographers/" }) },
      // ── 301 REDIRECTS: ghost file-path URLs (SSG pre-renders physical .tsx paths) → canonical ──
      { path: "case-studies/google-ads-for-small-businesses/hvac-plumbing-electrical", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/" }) },
      { path: "case-studies/local-seo-service/hvac-plumbing-electrical", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/" }) },
      { path: "case-studies/local-seo-hvac-plumbing-electrical", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/" }) },
      { path: "case-studies/roofers", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/marketing-for-roofers/roofing-seo-case-study/" }) },
      { path: "case-studies/tree-lawn-landscaping", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/marketing-for-landscapers/landscaping-seo-case-study/" }) },
      { path: "case-studies/home-remodeling", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/marketing-for-home-remodelers/home-remodeling-seo-case-study/" }) },
      { path: "case-studies/cleaning-services", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/marketing-for-cleaning-services/cleaning-seo-case-study/" }) },
      { path: "case-studies/med-spa-case-study", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-seo-case-study/" }) },
      { path: "case-studies/dental-case-study", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study/" }) },
      { path: "case-studies/chiropractic-case-study", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-seo-case-study/" }) },
      // ── 301 REDIRECTS: old case study pages → new ──
      { path: "home-service-contractors/hvac-marketing/seo-case-study", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/" }) },
      { path: "home-service-contractors/hvac-marketing/google-ads-case-study", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/" }) },
      { path: "home-service-contractors/roofing-marketing/case-study", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/marketing-for-roofers/roofing-seo-case-study/" }) },
      { path: "home-service-contractors/landscaping-marketing/case-study", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/marketing-for-landscapers/landscaping-seo-case-study/" }) },
      { path: "home-service-contractors/home-renovation-marketing/case-study", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/marketing-for-home-remodelers/home-remodeling-seo-case-study/" }) },
      { path: "home-service-contractors/cleaning-service-marketing/case-study", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/home-service-contractors/marketing-for-cleaning-services/cleaning-seo-case-study/" }) },
      { path: "health-and-wellness-practices/med-spa-marketing/case-study", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-seo-case-study/" }) },
      { path: "health-and-wellness-practices/dental-marketing/case-study", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study/" }) },
      { path: "health-and-wellness-practices/chiropractic-marketing/case-study", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-seo-case-study/" }) },
      { path: "blog", Component: () => /* @__PURE__ */ jsx(Redirect, { to: "/" }) },
      { path: "contact", lazy: lazy(() => import("./assets/Contact-98y7xqWy.js")) },
      { path: "privacy-policy", lazy: lazy(() => import("./assets/PrivacyPolicy-D6kDWWoF.js")) },
      { path: "terms-of-service", lazy: lazy(() => import("./assets/TermsOfService-B9lqi-XR.js")) },
      { path: "404", lazy: lazy(() => import("./assets/NotFound-Bz3aCOll.js")) },
      { path: "*", lazy: lazy(() => import("./assets/NotFound-Bz3aCOll.js")) }
    ]
  }
];
const createRoot = ViteReactSSG({ routes });
export {
  cn as c,
  createRoot
};
