import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssgOptions: {
    dirStyle: "nested",
    script: "async",
    includedRoutes: (paths: string[]) => [
      "/",
      "/about",
      "/services",
      "/contact",
      "/free-assessment",
      "/services/technical-seo",
      "/services/on-page-seo",
      "/services/aeo",
      "/services/geo",
      "/services/local-seo",
      "/services/link-building",
      "/services/paid-media",
      "/services/social-media",
      "/services/website-design",
      "/services/managed-ai-seo",
      "/services/managed-seo-pricing",
      "/services/reputation-management",
      "/services/ai-receptionist",
      "/services/crm",
      "/services/linkedin-outreach",
      "/services/quad-bots",
    ],
  },
}));
