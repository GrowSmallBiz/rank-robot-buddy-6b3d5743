import { Head, ViteReactSSG } from "vite-react-ssg";
import * as React from "react";
import { useEffect, lazy as lazy$1, Suspense } from "react";
import * as ReactJSXDevRuntime from "react/jsx-dev-runtime";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLocation, Navigate, Outlet } from "react-router-dom";
const _jsxDEV = ReactJSXDevRuntime.jsxDEV;
const Fragment = ReactJSXDevRuntime.Fragment;
const SOURCE_KEY = Symbol.for("__jsxSource__");
const cleanFileName = (fileName) => {
  if (!fileName) return "";
  if (fileName.includes("dev_server")) {
    fileName = fileName.split("dev_server")[1].slice(1);
  }
  if (fileName.includes("sandbox-scheduler/sandbox")) {
    const sandboxPart = fileName.split("sandbox-scheduler/")[1];
    fileName = sandboxPart.split("/").slice(1).join("/");
  }
  return fileName.replace(/^\/dev-server\//, "");
};
const sourceElementMap = /* @__PURE__ */ new Map();
window.sourceElementMap = sourceElementMap;
function getSourceKey(sourceInfo) {
  return `${cleanFileName(sourceInfo.fileName)}:${sourceInfo.lineNumber}:${sourceInfo.columnNumber}`;
}
function unregisterElement(node, sourceInfo) {
  const key = getSourceKey(sourceInfo);
  const refs = sourceElementMap.get(key);
  if (refs) {
    for (const ref of refs) {
      if (ref.deref() === node) {
        refs.delete(ref);
        break;
      }
    }
    if (refs.size === 0) {
      sourceElementMap.delete(key);
    }
  }
}
function registerElement(node, sourceInfo) {
  const key = getSourceKey(sourceInfo);
  if (!sourceElementMap.has(key)) {
    sourceElementMap.set(key, /* @__PURE__ */ new Set());
  }
  sourceElementMap.get(key).add(new WeakRef(node));
}
function getTypeName(type) {
  var _a, _b;
  if (typeof type === "string") return type;
  if (typeof type === "function") return type.displayName || type.name || "Unknown";
  if (typeof type === "object" && type !== null) {
    return type.displayName || ((_a = type.render) == null ? void 0 : _a.displayName) || ((_b = type.render) == null ? void 0 : _b.name) || "Unknown";
  }
  return "Unknown";
}
function jsxDEV(type, props, key, isStatic, source, self) {
  if ((source == null ? void 0 : source.fileName) && typeof type !== "string" && type !== Fragment) {
    const typeName = getTypeName(type);
    const jsxSourceInfo = {
      fileName: cleanFileName(source.fileName),
      lineNumber: source.lineNumber,
      columnNumber: source.columnNumber,
      displayName: typeName
    };
    const originalRef = props == null ? void 0 : props.ref;
    const enhancedProps = {
      ...props,
      ref: (node) => {
        if (node) {
          if (!node[SOURCE_KEY]) {
            node[SOURCE_KEY] = jsxSourceInfo;
            registerElement(node, jsxSourceInfo);
          }
        }
        if (typeof originalRef === "function") {
          originalRef(node);
        } else if (originalRef && typeof originalRef === "object") {
          originalRef.current = node;
        }
      }
    };
    return _jsxDEV(type, enhancedProps, key, isStatic, source, self);
  }
  if ((source == null ? void 0 : source.fileName) && typeof type === "string") {
    const sourceInfo = {
      fileName: cleanFileName(source.fileName),
      lineNumber: source.lineNumber,
      columnNumber: source.columnNumber,
      displayName: type
    };
    const originalRef = props == null ? void 0 : props.ref;
    const enhancedProps = {
      ...props,
      ref: (node) => {
        if (node) {
          const existingSource = node[SOURCE_KEY];
          if (existingSource) {
            if (getSourceKey(existingSource) !== getSourceKey(sourceInfo)) {
              unregisterElement(node, existingSource);
              node[SOURCE_KEY] = sourceInfo;
              registerElement(node, sourceInfo);
            }
          } else {
            node[SOURCE_KEY] = sourceInfo;
            registerElement(node, sourceInfo);
          }
        }
        if (typeof originalRef === "function") {
          originalRef(node);
        } else if (originalRef && typeof originalRef === "object") {
          originalRef.current = node;
        }
      }
    };
    return _jsxDEV(type, enhancedProps, key, isStatic, source, self);
  }
  return _jsxDEV(type, props, key, isStatic, source, self);
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/tooltip.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  void 0
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
  const [toPath, toQuery = ""] = to.split("?");
  const inboundParams = new URLSearchParams(search);
  const mergedParams = new URLSearchParams(toQuery);
  inboundParams.forEach((value, key) => {
    mergedParams.set(key, value);
  });
  const mergedQuery = mergedParams.toString();
  const dest = `${toPath}${mergedQuery ? `?${mergedQuery}` : ""}${hash}`;
  const absoluteDest = `https://growsmallbiz.io${toPath}`;
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("meta", { httpEquiv: "refresh", content: `0;url=${dest}` }, void 0, false, {
        fileName: "/dev-server/src/components/Redirect.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: absoluteDest }, void 0, false, {
        fileName: "/dev-server/src/components/Redirect.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "noindex, follow" }, void 0, false, {
        fileName: "/dev-server/src/components/Redirect.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("title", { children: "Redirecting…" }, void 0, false, {
        fileName: "/dev-server/src/components/Redirect.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/Redirect.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Navigate, { to: dest, replace: true }, void 0, false, {
      fileName: "/dev-server/src/components/Redirect.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/Redirect.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, void 0);
};
const Toaster = lazy$1(() => import("./assets/toaster-ueSzMWn_.js").then((m) => ({ default: m.Toaster })));
const Sonner = lazy$1(() => import("./assets/sonner-BptkPQJk.js").then((m) => ({ default: m.Toaster })));
const AppLayout = () => /* @__PURE__ */ jsxDEV(TooltipProvider, { children: [
  /* @__PURE__ */ jsxDEV(ScrollToTop, {}, void 0, false, {
    fileName: "/dev-server/src/App.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(Suspense, { fallback: null, children: [
    /* @__PURE__ */ jsxDEV(Toaster, {}, void 0, false, {
      fileName: "/dev-server/src/App.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Sonner, {}, void 0, false, {
      fileName: "/dev-server/src/App.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/App.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
    fileName: "/dev-server/src/App.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/App.tsx",
  lineNumber: 18,
  columnNumber: 3
}, void 0);
const lazy = (importFn) => async () => {
  try {
    const mod = await importFn();
    return { Component: mod.default };
  } catch (err) {
    const key = "chunk-reload-at";
    const last = Number(sessionStorage.getItem(key) ?? 0);
    if (Date.now() - last >= 1e4) {
      sessionStorage.setItem(key, String(Date.now()));
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
      { index: true, lazy: lazy(() => import("./assets/Index-Dcl9P8Hs.js")) },
      { path: "about", lazy: lazy(() => import("./assets/About-DVHh1Z4o.js")) },
      { path: "services", lazy: lazy(() => import("./assets/Services-BOG1Lq_r.js")) },
      { path: "service", lazy: lazy(() => import("./assets/Services-BOG1Lq_r.js")) },
      { path: "services/paid-advertising", lazy: lazy(() => import("./assets/PaidMedia-DAw27_uA.js")) },
      { path: "services/paid-advertising/google-ads", lazy: lazy(() => import("./assets/GoogleAds-BbZoVcj-.js")) },
      { path: "services/paid-advertising/google-local-services-ads", lazy: lazy(() => import("./assets/LSA-CXi1wiBh.js")) },
      { path: "services/paid-advertising/facebook-ads", lazy: lazy(() => import("./assets/FacebookAds-CVipUdYZ.js")) },
      { path: "services/website-design", lazy: lazy(() => import("./assets/WebsiteDesign-D90j0CCO.js")) },
      { path: "services/seo-agency", lazy: lazy(() => import("./assets/ManagedAISEO-C01dsZgE.js")) },
      { path: "services/seo-agency/ai-search-optimization", lazy: lazy(() => import("./assets/AISearchOptimization-CwNwvZiK.js")) },
      { path: "services/seo-agency/aeo", lazy: lazy(() => import("./assets/AEO-CtWoStqn.js")) },
      { path: "services/seo-agency/geo", lazy: lazy(() => import("./assets/GEO-CWJsIzlo.js")) },
      { path: "services/seo-agency/local-seo", lazy: lazy(() => import("./assets/LocalSEO-DshHpWIk.js")) },
      { path: "services/seo-agency/authority-building", lazy: lazy(() => import("./assets/AuthorityBuilding-C7A8BNYq.js")) },
      { path: "services/seo-agency/link-building", lazy: lazy(() => import("./assets/LinkBuilding-4nrcudYJ.js")) },
      { path: "services/seo-agency/technical-seo", lazy: lazy(() => import("./assets/TechnicalSEO-B9Jj3N22.js")) },
      { path: "services/seo-agency/on-page-seo", lazy: lazy(() => import("./assets/OnPageSEO-DsIBAQv1.js")) },
      { path: "services/paid-ads", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/services/paid-advertising/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 69,
        columnNumber: 53
      }, void 0) },
      { path: "services/marketing-automation-for-small-business", lazy: lazy(() => import("./assets/MarketingAutomation-D-3SWVg4.js")) },
      { path: "services/ai-receptionist-and-conversational-ai", lazy: lazy(() => import("./assets/AIReceptionist-Bw2q1fcd.js")) },
      { path: "services/marketing-automation-for-small-business/universal-inbox", lazy: lazy(() => import("./assets/UniversalInbox-BwkmP50N.js")) },
      { path: "services/marketing-automation-for-small-business/workflow-automations", lazy: lazy(() => import("./assets/WorkflowAutomations-WsLMapfu.js")) },
      { path: "services/marketing-automation-for-small-business/website-builder", lazy: lazy(() => import("./assets/WebsiteBuilder-XR1vzpgw.js")) },
      { path: "services/marketing-automation-for-small-business/email-sms-marketing", lazy: lazy(() => import("./assets/EmailSmsMarketing-CRrEnQFq.js")) },
      { path: "services/marketing-automation-for-small-business/integrated-payments", lazy: lazy(() => import("./assets/IntegratedPayments-bzIocz0q.js")) },
      { path: "services/marketing-automation-for-small-business/social-media-planner", lazy: lazy(() => import("./assets/SocialMediaPlanner-CoHNTggw.js")) },
      { path: "services/marketing-automation-for-small-business/calendar-scheduling", lazy: lazy(() => import("./assets/CalendarScheduling-hSKKUlTu.js")) },
      { path: "services/marketing-automation-for-small-business/sales-tracker", lazy: lazy(() => import("./assets/SalesTracker-BpwxgySa.js")) },
      { path: "services/marketing-automation-for-small-business/forms-surveys", lazy: lazy(() => import("./assets/FormsSurveys-Dk4-P48p.js")) },
      { path: "services/marketing-automation-for-small-business/reviews", lazy: lazy(() => import("./assets/Reviews-MGuiRhq_.js")) },
      { path: "services/marketing-automation-for-small-business/call-tracking", lazy: lazy(() => import("./assets/CallTracking-DXYZywbg.js")) },
      { path: "services/marketing-automation-for-small-business/crm", lazy: lazy(() => import("./assets/Crm-D-jxjpfS.js")) },
      { path: "services/marketing-automation-for-small-business/sales-funnels", lazy: lazy(() => import("./assets/SalesFunnels-CIOQ05K2.js")) },
      { path: "services/marketing-automation-for-small-business/memberships", lazy: lazy(() => import("./assets/Memberships-GKeWXJ1F.js")) },
      { path: "services/marketing-automation-for-small-business/webchat", lazy: lazy(() => import("./assets/Webchat-DN8WHknv.js")) },
      { path: "services/marketing-automation-for-small-business/generate-leads", lazy: lazy(() => import("./assets/GenerateLeads-B6zavLc4.js")) },
      { path: "locations/locations-we-serve", lazy: lazy(() => import("./assets/LocationsWeServe-CzLwkBDz.js")) },
      { path: "locations/danville-ca", lazy: lazy(() => import("./assets/DanvilleCA-CH5x21FD.js")) },
      { path: "locations/san-ramon-ca", lazy: lazy(() => import("./assets/SanRamonCA-C4lk1rVM.js")) },
      { path: "locations/walnut-creek-ca", lazy: lazy(() => import("./assets/WalnutCreekCA-BuaUckkJ.js")) },
      { path: "locations/concord-ca", lazy: lazy(() => import("./assets/ConcordCA-CHIzeIBF.js")) },
      { path: "locations/dublin-ca", lazy: lazy(() => import("./assets/DublinCA-BSBGDWq5.js")) },
      { path: "locations/pleasanton-ca", lazy: lazy(() => import("./assets/PleasantonCA-UjAZeGPi.js")) },
      { path: "locations/livermore-ca", lazy: lazy(() => import("./assets/LivermoreCA-BnMlt__U.js")) },
      { path: "locations/tracy-ca", lazy: lazy(() => import("./assets/TracyCA-CAq-fiVp.js")) },
      { path: "locations/pleasant-hill-ca", lazy: lazy(() => import("./assets/PleasantHillCA-nCf5_PGq.js")) },
      { path: "locations/martinez-ca", lazy: lazy(() => import("./assets/MartinezCA-DaNcccUV.js")) },
      // ── NEW niche page routes ──
      { path: "home-service-contractors", lazy: lazy(() => import("./assets/HomeServices-pRjPKCJ8.js")) },
      { path: "home-service-contractors/marketing-for-hvac-contractors", lazy: lazy(() => import("./assets/index-Ohj7Nc-D.js")) },
      { path: "home-service-contractors/tree-lawn-landscaping-marketing", lazy: lazy(() => import("./assets/index-BwyBCHVW.js")) },
      { path: "home-service-contractors/painting-companies-marketing", lazy: lazy(() => import("./assets/index-Buoq2XP7.js")) },
      { path: "home-service-contractors/landscape-construction-hardscaping-marketing", lazy: lazy(() => import("./assets/index-CSkrq5tY.js")) },
      { path: "industries/painting-companies", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/painting-companies-marketing/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 107,
        columnNumber: 65
      }, void 0) },
      { path: "health-and-wellness-practices", lazy: lazy(() => import("./assets/HealthAndWellness-DXr3UPg_.js")) },
      { path: "health-and-wellness-practices/marketing-for-med-spas", lazy: lazy(() => import("./assets/index-D-88JErd.js")) },
      { path: "health-and-wellness-practices/marketing-for-chiropractors", lazy: lazy(() => import("./assets/index-CDQ2jh_I.js")) },
      { path: "health-and-wellness-practices/marketing-for-dentists", lazy: lazy(() => import("./assets/index-CWh_0xwr.js")) },
      { path: "professional-services", lazy: lazy(() => import("./assets/ProfessionalServices-BYLw0aQB.js")) },
      { path: "professional-services/marketing-for-realtors", lazy: lazy(() => import("./assets/RealtorMarketing-COzJT4h0.js")) },
      { path: "professional-services/marketing-for-photographers", lazy: lazy(() => import("./assets/index-Du5SAMFQ.js")) },
      // ── NEW case study routes ──
      { path: "home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study", lazy: lazy(() => import("./assets/HvacPlumbingElectrical-RM0LJJ-V.js")) },
      { path: "home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study", lazy: lazy(() => import("./assets/HvacPlumbingElectrical-CtVdCJLf.js")) },
      { path: "home-service-contractors/marketing-for-roofers/roofing-marketing-case-study", lazy: lazy(() => import("./assets/Roofers-BMXx7qya.js")) },
      { path: "home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study", lazy: lazy(() => import("./assets/TreeLawnLandscaping-C-3HfYvO.js")) },
      { path: "home-service-contractors/marketing-for-landscapers/landscaping-marketing-case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 124,
        columnNumber: 119
      }, void 0) },
      { path: "home-service-contractors/marketing-for-home-remodelers/home-remodeling-marketing-case-study", lazy: lazy(() => import("./assets/HomeRemodeling-DGdD0H9k.js")) },
      { path: "home-service-contractors/marketing-for-cleaning-services/cleaning-marketing-case-study", lazy: lazy(() => import("./assets/CleaningServices-CXJhP-Hc.js")) },
      { path: "health-and-wellness-practices/marketing-for-med-spas/med-spa-marketing-case-study", lazy: lazy(() => import("./assets/MedSpaCaseStudy-B-ZlVbHk.js")) },
      { path: "health-and-wellness-practices/marketing-for-dentists/dental-marketing-case-study", lazy: lazy(() => import("./assets/DentalCaseStudy-vY_akqoj.js")) },
      { path: "health-and-wellness-practices/marketing-for-chiropractors/chiropractic-marketing-case-study", lazy: lazy(() => import("./assets/ChiropracticCaseStudy-Bgan_Yt1.js")) },
      // ── 301 REDIRECTS: old niche pages → new ──
      { path: "home-service-contractors/hvac-marketing", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-hvac-contractors/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 133,
        columnNumber: 75
      }, void 0) },
      { path: "home-service-contractors/roofing-marketing", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-roofers/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 134,
        columnNumber: 78
      }, void 0) },
      { path: "home-service-contractors/landscaping-marketing", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-landscapers/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 135,
        columnNumber: 82
      }, void 0) },
      { path: "home-service-contractors/home-renovation-marketing", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-home-remodelers/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 136,
        columnNumber: 86
      }, void 0) },
      { path: "home-service-contractors/cleaning-service-marketing", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-cleaning-services/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 137,
        columnNumber: 87
      }, void 0) },
      { path: "health-and-wellness-practices/med-spa-marketing", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/health-and-wellness-practices/marketing-for-med-spas/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 139,
        columnNumber: 83
      }, void 0) },
      { path: "health-and-wellness-practices/chiropractic-marketing", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/health-and-wellness-practices/marketing-for-chiropractors/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 140,
        columnNumber: 88
      }, void 0) },
      { path: "health-and-wellness-practices/dental-marketing", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/health-and-wellness-practices/marketing-for-dentists/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 141,
        columnNumber: 82
      }, void 0) },
      { path: "professional-services/realtor-marketing", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/professional-services/marketing-for-realtors/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 143,
        columnNumber: 75
      }, void 0) },
      { path: "professional-services/photographers-marketing", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/professional-services/marketing-for-photographers/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 145,
        columnNumber: 81
      }, void 0) },
      // ── 301 REDIRECTS: old flat service URLs → canonical nested paths ──
      { path: "services/facebook-ads", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/services/paid-advertising/facebook-ads/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 148,
        columnNumber: 57
      }, void 0) },
      { path: "services/google-ads", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/services/paid-advertising/google-ads/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 149,
        columnNumber: 55
      }, void 0) },
      { path: "services/local-seo", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/services/seo-agency/local-seo/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 150,
        columnNumber: 54
      }, void 0) },
      { path: "professional-services/photography-marketing", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/professional-services/marketing-for-photographers/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 151,
        columnNumber: 79
      }, void 0) },
      // ── 301 REDIRECTS: ghost file-path URLs (SSG pre-renders physical .tsx paths) → canonical ──
      { path: "case-studies/google-ads-for-small-businesses/hvac-plumbing-electrical", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 154,
        columnNumber: 105
      }, void 0) },
      { path: "case-studies/local-seo-service/hvac-plumbing-electrical", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 155,
        columnNumber: 91
      }, void 0) },
      { path: "case-studies/local-seo-hvac-plumbing-electrical", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 156,
        columnNumber: 83
      }, void 0) },
      { path: "case-studies/roofers", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-roofers/roofing-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 157,
        columnNumber: 56
      }, void 0) },
      { path: "case-studies/tree-lawn-landscaping", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 158,
        columnNumber: 70
      }, void 0) },
      { path: "case-studies/home-remodeling", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-home-remodelers/home-remodeling-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 159,
        columnNumber: 64
      }, void 0) },
      { path: "case-studies/cleaning-services", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-cleaning-services/cleaning-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 160,
        columnNumber: 66
      }, void 0) },
      { path: "case-studies/med-spa-case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 161,
        columnNumber: 67
      }, void 0) },
      { path: "case-studies/dental-case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/health-and-wellness-practices/marketing-for-dentists/dental-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 162,
        columnNumber: 66
      }, void 0) },
      { path: "case-studies/chiropractic-case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 163,
        columnNumber: 72
      }, void 0) },
      // ── 301 REDIRECTS: old case study pages → new ──
      { path: "home-service-contractors/hvac-marketing/seo-case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 166,
        columnNumber: 90
      }, void 0) },
      { path: "home-service-contractors/hvac-marketing/google-ads-case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 167,
        columnNumber: 97
      }, void 0) },
      { path: "home-service-contractors/roofing-marketing/case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-roofers/roofing-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 168,
        columnNumber: 89
      }, void 0) },
      { path: "home-service-contractors/landscaping-marketing/case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 169,
        columnNumber: 93
      }, void 0) },
      { path: "home-service-contractors/home-renovation-marketing/case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-home-remodelers/home-remodeling-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 170,
        columnNumber: 97
      }, void 0) },
      { path: "home-service-contractors/cleaning-service-marketing/case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-cleaning-services/cleaning-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 171,
        columnNumber: 98
      }, void 0) },
      { path: "health-and-wellness-practices/med-spa-marketing/case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 173,
        columnNumber: 94
      }, void 0) },
      { path: "health-and-wellness-practices/dental-marketing/case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/health-and-wellness-practices/marketing-for-dentists/dental-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 174,
        columnNumber: 93
      }, void 0) },
      { path: "health-and-wellness-practices/chiropractic-marketing/case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 175,
        columnNumber: 99
      }, void 0) },
      // ── 301 REDIRECTS: -seo-case-study → -marketing-case-study (combined SEO+PPC content) ──
      { path: "home-service-contractors/marketing-for-roofers/roofing-seo-case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-roofers/roofing-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 178,
        columnNumber: 105
      }, void 0) },
      { path: "home-service-contractors/marketing-for-landscapers/landscaping-seo-case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 179,
        columnNumber: 113
      }, void 0) },
      { path: "home-service-contractors/tree-lawn-landscaping-marketing/landscaping-seo-case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 180,
        columnNumber: 119
      }, void 0) },
      { path: "home-service-contractors/marketing-for-home-remodelers/home-remodeling-seo-case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-home-remodelers/home-remodeling-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 181,
        columnNumber: 121
      }, void 0) },
      { path: "home-service-contractors/marketing-for-cleaning-services/cleaning-seo-case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/home-service-contractors/marketing-for-cleaning-services/cleaning-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 182,
        columnNumber: 116
      }, void 0) },
      { path: "health-and-wellness-practices/marketing-for-med-spas/med-spa-seo-case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/health-and-wellness-practices/marketing-for-med-spas/med-spa-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 183,
        columnNumber: 111
      }, void 0) },
      { path: "health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/health-and-wellness-practices/marketing-for-dentists/dental-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 184,
        columnNumber: 110
      }, void 0) },
      { path: "health-and-wellness-practices/marketing-for-chiropractors/chiropractic-seo-case-study", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-marketing-case-study/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 185,
        columnNumber: 121
      }, void 0) },
      { path: "blog", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 187,
        columnNumber: 40
      }, void 0) },
      { path: "specials/current-offers", lazy: lazy(() => import("./assets/CurrentOffers-CbwZG8fa.js")) },
      { path: "specials", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/specials/current-offers/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 189,
        columnNumber: 44
      }, void 0) },
      { path: "specials/mothers-day", lazy: lazy(() => import("./assets/MothersDayCohort-Bv67W5Ti.js")) },
      { path: "mothers-day-mom-owned-business-cohort", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/specials/mothers-day/" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 191,
        columnNumber: 73
      }, void 0) },
      { path: "mothers-day-2026/dc", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/specials/mothers-day/?utm_source=danville-chamber&utm_medium=web-specials&utm_campaign=mothers-day-offer" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 192,
        columnNumber: 55
      }, void 0) },
      { path: "mothers-day-2026/dc/", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/specials/mothers-day/?utm_source=danville-chamber&utm_medium=web-specials&utm_campaign=mothers-day-offer" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 193,
        columnNumber: 56
      }, void 0) },
      { path: "specials/mothers-day/fb-biz", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/specials/mothers-day/?utm_source=fb-biz&utm_medium=sm-post&utm_campaign=mothers-day-offer" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 194,
        columnNumber: 63
      }, void 0) },
      { path: "specials/mothers-day/fb-biz/", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/specials/mothers-day/?utm_source=fb-biz&utm_medium=sm-post&utm_campaign=mothers-day-offer" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 195,
        columnNumber: 64
      }, void 0) },
      { path: "specials/mothers-day/fb-personal", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/specials/mothers-day/?utm_source=fb-pp&utm_medium=sm-post&utm_campaign=mothers-day-offer" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 196,
        columnNumber: 68
      }, void 0) },
      { path: "specials/mothers-day/fb-personal/", Component: () => /* @__PURE__ */ jsxDEV(Redirect, { to: "/specials/mothers-day/?utm_source=fb-pp&utm_medium=sm-post&utm_campaign=mothers-day-offer" }, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 197,
        columnNumber: 69
      }, void 0) },
      { path: "contact", lazy: lazy(() => import("./assets/Contact-BlF2sI3P.js")) },
      { path: "privacy-policy", lazy: lazy(() => import("./assets/PrivacyPolicy-IhIdPyUE.js")) },
      { path: "terms-of-service", lazy: lazy(() => import("./assets/TermsOfService-DMGCBGFo.js")) },
      { path: "h1-check", lazy: lazy(() => import("./assets/H1Check-Bjj4-d0Y.js")) },
      { path: "404", lazy: lazy(() => import("./assets/NotFound-C_yubgA_.js")) },
      { path: "*", lazy: lazy(() => import("./assets/NotFound-C_yubgA_.js")) }
    ]
  }
];
if (typeof window !== "undefined") {
  const isStaleChunkError = (msg) => typeof msg === "string" && (msg.includes("Failed to fetch dynamically imported module") || msg.includes("Importing a module script failed") || msg.includes("error loading dynamically imported module"));
  const KEY = "chunk-reload-at";
  const COOLDOWN_MS = 1e4;
  window.addEventListener("load", () => {
    setTimeout(() => sessionStorage.removeItem(KEY), 2e3);
  });
  const reloadOnce = () => {
    const last = Number(sessionStorage.getItem(KEY) ?? 0);
    if (Date.now() - last < COOLDOWN_MS) return;
    sessionStorage.setItem(KEY, String(Date.now()));
    window.location.reload();
  };
  window.addEventListener("unhandledrejection", (e) => {
    var _a;
    const msg = ((_a = e.reason) == null ? void 0 : _a.message) ?? e.reason;
    if (isStaleChunkError(msg)) reloadOnce();
  });
  window.addEventListener("error", (e) => {
    if (isStaleChunkError(e.message)) reloadOnce();
  });
}
const createRoot = ViteReactSSG({ routes });
export {
  Fragment as F,
  cn as c,
  createRoot,
  jsxDEV as j
};
