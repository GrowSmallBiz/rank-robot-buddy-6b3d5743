import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import TechnicalSEO from "./pages/services/TechnicalSEO";
import OnPageSEO from "./pages/services/OnPageSEO";
import AEO from "./pages/services/AEO";
import GEO from "./pages/services/GEO";
import LocalSEO from "./pages/services/LocalSEO";
import LinkBuilding from "./pages/services/LinkBuilding";
import PaidMedia from "./pages/services/PaidMedia";
import SocialMedia from "./pages/services/SocialMedia";
import WebsiteDesign from "./pages/services/WebsiteDesign";
import ManagedAISEO from "./pages/services/ManagedAISEO";
import ManagedSEOPricing from "./pages/services/ManagedSEOPricing";
import ReputationManagement from "./pages/services/ReputationManagement";
import AIReceptionist from "./pages/services/AIReceptionist";
import CRM from "./pages/services/CRM";
import LinkedInOutreach from "./pages/services/LinkedInOutreach";
import QuadBots from "./pages/services/QuadBots";
import FreeAssessment from "./pages/FreeAssessment";
import HVAC from "./pages/industries/HVAC";
import HomeServices from "./pages/industries/HomeServices";
import Dental from "./pages/industries/Dental";
import MedSpa from "./pages/industries/MedSpa";
import Chiropractor from "./pages/industries/Chiropractor";
import AutoRepair from "./pages/industries/AutoRepair";
import Photographers from "./pages/industries/Photographers";
import Realtors from "./pages/industries/Realtors";
import BrandingGuidelines from "./pages/BrandingGuidelines";
import DownloadBrandingDocx from "./pages/DownloadBrandingDocx";
import NotFound from "./pages/NotFound";
import IndexBackup from "./pages/IndexBackup";
import Services from "./pages/Services";

const queryClient = new QueryClient();

const AppLayout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Outlet />
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
