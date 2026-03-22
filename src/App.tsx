import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import Index from "./pages/Index";

// Lazy-load all non-homepage routes for code splitting
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const TechnicalSEO = lazy(() => import("./pages/services/TechnicalSEO"));
const OnPageSEO = lazy(() => import("./pages/services/OnPageSEO"));
const AEO = lazy(() => import("./pages/services/AEO"));
const GEO = lazy(() => import("./pages/services/GEO"));
const LocalSEO = lazy(() => import("./pages/services/LocalSEO"));
const LinkBuilding = lazy(() => import("./pages/services/LinkBuilding"));
const PaidMedia = lazy(() => import("./pages/services/PaidMedia"));
const SocialMedia = lazy(() => import("./pages/services/SocialMedia"));
const WebsiteDesign = lazy(() => import("./pages/services/WebsiteDesign"));
const ManagedAISEO = lazy(() => import("./pages/services/ManagedAISEO"));
const ManagedSEOPricing = lazy(() => import("./pages/services/ManagedSEOPricing"));
const ReputationManagement = lazy(() => import("./pages/services/ReputationManagement"));
const AIReceptionist = lazy(() => import("./pages/services/AIReceptionist"));
const CRM = lazy(() => import("./pages/services/CRM"));
const LinkedInOutreach = lazy(() => import("./pages/services/LinkedInOutreach"));
const QuadBots = lazy(() => import("./pages/services/QuadBots"));
const FreeAssessment = lazy(() => import("./pages/FreeAssessment"));
const HVAC = lazy(() => import("./pages/industries/HVAC"));
const HomeServices = lazy(() => import("./pages/industries/HomeServices"));
const Dental = lazy(() => import("./pages/industries/Dental"));
const MedSpa = lazy(() => import("./pages/industries/MedSpa"));
const Chiropractor = lazy(() => import("./pages/industries/Chiropractor"));
const AutoRepair = lazy(() => import("./pages/industries/AutoRepair"));
const Photographers = lazy(() => import("./pages/industries/Photographers"));
const Realtors = lazy(() => import("./pages/industries/Realtors"));
const BrandingGuidelines = lazy(() => import("./pages/BrandingGuidelines"));
const DownloadBrandingDocx = lazy(() => import("./pages/DownloadBrandingDocx"));
const IndexBackup = lazy(() => import("./pages/IndexBackup"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const AppLayout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </TooltipProvider>
  </QueryClientProvider>
);

export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: Index },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
      { path: "services/technical-seo", Component: TechnicalSEO },
      { path: "services/on-page-seo", Component: OnPageSEO },
      { path: "services/aeo", Component: AEO },
      { path: "services/geo", Component: GEO },
      { path: "services/local-seo", Component: LocalSEO },
      { path: "services/link-building", Component: LinkBuilding },
      { path: "services/paid-media", Component: PaidMedia },
      { path: "services/social-media", Component: SocialMedia },
      { path: "services/website-design", Component: WebsiteDesign },
      { path: "services/managed-ai-seo", Component: ManagedAISEO },
      { path: "services/managed-seo-pricing", Component: ManagedSEOPricing },
      { path: "services/reputation-management", Component: ReputationManagement },
      { path: "services/ai-receptionist", Component: AIReceptionist },
      { path: "services/crm", Component: CRM },
      { path: "services/linkedin-outreach", Component: LinkedInOutreach },
      { path: "services/quad-bots", Component: QuadBots },
      { path: "free-assessment", Component: FreeAssessment },
      { path: "industries/hvac", Component: HVAC },
      { path: "industries/home-services", Component: HomeServices },
      { path: "industries/dental", Component: Dental },
      { path: "industries/med-spa", Component: MedSpa },
      { path: "industries/chiropractor", Component: Chiropractor },
      { path: "industries/auto-repair", Component: AutoRepair },
      { path: "industries/photographers", Component: Photographers },
      { path: "industries/realtors", Component: Realtors },
      { path: "branding-guidelines", Component: BrandingGuidelines },
      { path: "download-branding-docx", Component: DownloadBrandingDocx },
      { path: "homepage-backup", Component: IndexBackup },
      { path: "404", Component: NotFound },
      { path: "*", Component: NotFound },
    ],
  },
];

export default AppLayout;
