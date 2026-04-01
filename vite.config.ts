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
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Skip anything marked external by vite-react-ssg
          if (id.includes("node_modules")) {
            if (id.includes("lucide-react")) return "vendor-icons";
            if (id.includes("@radix-ui")) return "vendor-radix";
            if (id.includes("class-variance-authority") || id.includes("tailwind-merge") || id.includes("clsx")) return "vendor-ui";
          }
        },
      },
    },
  },
  ssgOptions: {
    dirStyle: "nested",
    script: "async",
    includedRoutes: (paths: string[]) => paths,
  },
}));
