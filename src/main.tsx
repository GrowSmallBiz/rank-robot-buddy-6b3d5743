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

  const KEY = "chunk-reload-at";
  const COOLDOWN_MS = 10_000;

  // Clear the flag once the page has successfully loaded — allows a fresh
  // reload attempt on the next stale-chunk error instead of getting stuck.
  window.addEventListener("load", () => {
    setTimeout(() => sessionStorage.removeItem(KEY), 2_000);
  });

  const reloadOnce = () => {
    const last = Number(sessionStorage.getItem(KEY) ?? 0);
    if (Date.now() - last < COOLDOWN_MS) return; // avoid reload loop
    sessionStorage.setItem(KEY, String(Date.now()));
    window.location.reload();
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
