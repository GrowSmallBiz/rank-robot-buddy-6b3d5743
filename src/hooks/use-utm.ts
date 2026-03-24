import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { captureInboundUtms, buildCtaUrl, CTA_URLS } from "@/lib/utm";

/**
 * Hook that provides UTM-aware CTA URL builders.
 * Captures inbound UTMs on mount and provides helpers for building CTA links.
 */
export function useUtm() {
  const location = useLocation();

  // Capture inbound UTMs once on first render
  useEffect(() => {
    captureInboundUtms();
  }, []);

  // Derive page medium from current route
  const pageMedium = useMemo(() => {
    const path = location.pathname;
    if (path === "/" || path === "") return "home";
    const segments = path.replace(/\/$/, "").split("/");
    return segments[segments.length - 1] || "home";
  }, [location.pathname]);

  /** Build a CTA URL with proper UTMs for the current page */
  const buildUrl = (baseUrl: string, campaign: string) =>
    buildCtaUrl(baseUrl, campaign, pageMedium);

  /** Pre-built strategy session URL */
  const strategySessionUrl = buildCtaUrl(
    CTA_URLS.strategySession,
    "strategy-session",
    pageMedium
  );

  /** Pre-built free audit URL */
  const freeAuditUrl = buildCtaUrl(
    CTA_URLS.freeAudit,
    "free-seo-audit",
    pageMedium
  );

  return {
    buildUrl,
    strategySessionUrl,
    freeAuditUrl,
    pageMedium,
  };
}
