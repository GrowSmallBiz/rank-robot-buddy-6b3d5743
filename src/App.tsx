import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import Index from "./pages/Index";

const AppLayout = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <Outlet />
  </TooltipProvider>
);

const lazy = (importFn: () => Promise<{ default: React.ComponentType }>) =>
  async () => {
    const mod = await importFn();
    return { Component: mod.default };
  };

export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: Index },
      { path: "about", lazy: lazy(() => import("./pages/About")) },
      { path: "services", lazy: lazy(() => import("./pages/Services")) },
      { path: "service", lazy: lazy(() => import("./pages/Services")) },
      { path: "paid-advertising-services", lazy: lazy(() => import("./pages/services/PaidMedia")) },
      { path: "services/website-design", lazy: lazy(() => import("./pages/services/WebsiteDesign")) },
      { path: "local-seo-services", lazy: lazy(() => import("./pages/services/ManagedAISEO")) },
      { path: "local-seo-services/aeo", lazy: lazy(() => import("./pages/services/AEO")) },
      { path: "local-seo-services/geo", lazy: lazy(() => import("./pages/services/GEO")) },
      { path: "local-seo-services/local-seo", lazy: lazy(() => import("./pages/services/LocalSEO")) },
      { path: "local-seo-services/authority-building", lazy: lazy(() => import("./pages/services/AuthorityBuilding")) },
      { path: "local-seo-services/link-building", lazy: lazy(() => import("./pages/services/LinkBuilding")) },
      { path: "local-seo-services/technical-seo", lazy: lazy(() => import("./pages/services/TechnicalSEO")) },
      { path: "local-seo-services/on-page-seo", lazy: lazy(() => import("./pages/services/OnPageSEO")) },
      { path: "services/paid-ads", lazy: lazy(() => import("./pages/services/PaidMedia")) },
      { path: "website-design", lazy: lazy(() => import("./pages/services/WebsiteDesign")) },
      { path: "local-seo-services", lazy: lazy(() => import("./pages/services/ManagedAISEO")) },
      
      { path: "contact", lazy: lazy(() => import("./pages/Contact")) },
      { path: "privacy-policy", lazy: lazy(() => import("./pages/PrivacyPolicy")) },
      { path: "terms-of-service", lazy: lazy(() => import("./pages/TermsOfService")) },
      { path: "404", lazy: lazy(() => import("./pages/NotFound")) },
      { path: "*", lazy: lazy(() => import("./pages/NotFound")) },
    ],
  },
];

export default AppLayout;
