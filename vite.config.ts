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
    includedRoutes: (paths: string[]) => {
      // Only pre-render routes explicitly defined with lazy() in App.tsx
      // Exclude redirect (Component:) routes — they work client-side via SPA fallback
      // Also exclude file-system "ghost" paths that vite-react-ssg auto-discovers
      const fs = require("fs");
      const appSrc = fs.readFileSync(
        path.resolve(__dirname, "src/App.tsx"),
        "utf-8"
      );
      const lazyPaths = new Set<string>();
      const re = /path:\s*["']([^"'*]+)["']\s*,\s*lazy:/g;
      let m: RegExpExecArray | null;
      while ((m = re.exec(appSrc)) !== null) {
        const p = "/" + m[1].replace(/^\//, "");
        lazyPaths.add(p);
        lazyPaths.add(p + "/");
      }
      lazyPaths.add("/");

      return paths.filter((p) => lazyPaths.has(p) || lazyPaths.has(p + "/"));
    },
  },
}));
