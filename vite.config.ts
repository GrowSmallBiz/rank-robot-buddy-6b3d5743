import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerenderStatic from "vite-plugin-prerender-static";

const allRoutes = [
  { path: "/", tags: { title: "Managed AI SEO Services | GrowSmallBiz Digital Marketing", description: "Professional AI-powered SEO services to grow your business. Technical SEO, On-Page SEO, AEO, GEO, Local SEO and Link Building." } },
  { path: "/about", tags: { title: "About Us | GrowSmallBiz Digital Marketing", description: "Learn about GrowSmallBiz Digital Marketing — AI-powered SEO and marketing for local service businesses." } },
  { path: "/blog", tags: { title: "Blog | GrowSmallBiz Digital Marketing", description: "Digital marketing insights, SEO tips, and AI strategies for local businesses." } },
  { path: "/contact", tags: { title: "Contact Us | GrowSmallBiz Digital Marketing", description: "Get in touch with GrowSmallBiz for a free marketing assessment." } },
  { path: "/free-assessment", tags: { title: "Free Marketing Assessment | GrowSmallBiz Digital Marketing", description: "Request your free AI-powered marketing assessment today." } },
  // Services
  { path: "/services/technical-seo", tags: { title: "Technical SEO Services | GrowSmallBiz", description: "Site speed, crawlability, and technical foundation optimization for local businesses." } },
  { path: "/services/on-page-seo", tags: { title: "On-Page SEO Services | GrowSmallBiz", description: "Content optimization, keyword targeting, and meta tag management." } },
  { path: "/services/aeo", tags: { title: "Answer Engine Optimization (AEO) | GrowSmallBiz", description: "Optimize your content for AI-powered answer engines and featured snippets." } },
  { path: "/services/geo", tags: { title: "Generative Engine Optimization (GEO) | GrowSmallBiz", description: "Visibility in generative AI search results like ChatGPT and Gemini." } },
  { path: "/services/local-seo", tags: { title: "Local SEO Services | GrowSmallBiz", description: "Google Business Profile, local citations, and map pack rankings." } },
  { path: "/services/link-building", tags: { title: "Link Building Services | GrowSmallBiz", description: "High-quality backlink acquisition and digital PR for authority building." } },
  { path: "/services/paid-media", tags: { title: "Paid Media & Advertising | GrowSmallBiz", description: "Google Ads, Meta Ads, and PPC management for local businesses." } },
  { path: "/services/social-media", tags: { title: "Social Media Management | GrowSmallBiz", description: "Content creation and social strategy for local service businesses." } },
  { path: "/services/website-design", tags: { title: "Website Design Services | GrowSmallBiz", description: "Conversion-optimized website design and development." } },
  { path: "/services/ai-seo-hub", tags: { title: "AI SEO Hub | GrowSmallBiz", description: "AI-powered SEO dashboard and analytics platform." } },
  { path: "/services/managed-seo-pricing", tags: { title: "Managed SEO Pricing | GrowSmallBiz", description: "Transparent pricing for managed SEO services." } },
  { path: "/services/reputation-management", tags: { title: "Reputation Management | GrowSmallBiz", description: "Review generation and online reputation management." } },
  { path: "/services/ai-receptionist", tags: { title: "AI Receptionist | GrowSmallBiz", description: "24/7 AI-powered phone answering and lead capture." } },
  { path: "/services/crm", tags: { title: "CRM Solutions | GrowSmallBiz", description: "Customer relationship management and automation." } },
  { path: "/services/linkedin-outreach", tags: { title: "LinkedIn Outreach | GrowSmallBiz", description: "B2B lead generation through LinkedIn." } },
  { path: "/services/quad-bots", tags: { title: "AI QuadBots | GrowSmallBiz", description: "Conversational AI, voice AI, lead generation, and supervisor bots." } },
  // Industries
  { path: "/industries/hvac", tags: { title: "HVAC Marketing | GrowSmallBiz", description: "Digital marketing and SEO for HVAC companies." } },
  { path: "/industries/home-services", tags: { title: "Home Services Marketing | GrowSmallBiz", description: "Digital marketing for home service contractors." } },
  { path: "/industries/dental", tags: { title: "Dental Marketing | GrowSmallBiz", description: "Digital marketing and SEO for dental practices." } },
  { path: "/industries/med-spa", tags: { title: "Med Spa Marketing | GrowSmallBiz", description: "Digital marketing and SEO for medical spas." } },
  { path: "/industries/chiropractor", tags: { title: "Chiropractor Marketing | GrowSmallBiz", description: "Digital marketing and SEO for chiropractic practices." } },
  { path: "/industries/auto-repair", tags: { title: "Auto Repair Marketing | GrowSmallBiz", description: "Digital marketing and SEO for auto repair shops." } },
  { path: "/industries/photographers", tags: { title: "Photographer Marketing | GrowSmallBiz", description: "Digital marketing and SEO for photographers." } },
  { path: "/industries/realtors", tags: { title: "Realtor Marketing | GrowSmallBiz", description: "Digital marketing and SEO for real estate agents." } },
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    prerenderStatic({ routes: allRoutes }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
