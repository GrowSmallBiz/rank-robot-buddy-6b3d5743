import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App";
import "./index.css";

// Global guard: stale dynamic-import chunks after a deploy/HMR cause
// "Failed to fetch dynamically imported module". Reload once to recover.
if (typeof window !== "undefined") {
  const isStaleChunkError = (msg: unknown) =>
    typeof msg === "string" &&
    (msg.includes("Failed to fetch dynamically imported module") ||
      msg.includes("Importing a module script failed") ||
      msg.includes("error loading dynamically imported module"));

  const reloadOnce = () => {
    const key = "chunk-reload";
    if (!sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, "1");
      window.location.reload();
    }
  };

  window.addEventListener("unhandledrejection", (e) => {
    const msg = e.reason?.message ?? e.reason;
    if (isStaleChunkError(msg)) reloadOnce();
  });

  window.addEventListener("error", (e) => {
    if (isStaleChunkError(e.message)) reloadOnce();
  });
}

export const createRoot = ViteReactSSG({ routes });
