import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { readFileSync } from "fs";

// Pre-compute the set of lazy-loaded routes at config time (Node.js context)
const appSrc = readFileSync(path.resolve(__dirname, "src/App.tsx"), "utf-8");
const lazyPaths = new Set<string>();
const re = /path:\s*["']([^"'*]+)["']\s*,\s*lazy:/g;
let m: RegExpExecArray | null;
while ((m = re.exec(appSrc)) !== null) {
  const p = "/" + m[1].replace(/^\//, "");
  lazyPaths.add(p);
  lazyPaths.add(p + "/");
}
lazyPaths.add("/");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Disable lovable-tagger during SSG prerendering; it references `window`,
    // which does not exist in Node.js. Keep it for the regular `vite` dev server.
    mode === "development" && !process.env.VITE_SSG_BUILD && componentTagger(),
  ].filter(Boolean),
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
    includedRoutes: (paths: string[]) =>
      paths.filter((raw) => {
        // vite-react-ssg may pass paths with or without a leading slash.
        // Normalize to leading-slash form before checking against lazyPaths.
        const p = raw.startsWith("/") ? raw : "/" + raw;
        return lazyPaths.has(p) || lazyPaths.has(p + "/");
      }),
  },
}));
