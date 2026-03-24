/**
 * UTM Parameter Management
 * 
 * - On first visit, captures any inbound UTM params from the URL and stores in sessionStorage
 * - If no inbound UTMs, assigns defaults: utm_source=website, utm_medium=<page>, utm_campaign=<button>
 * - Provides buildCtaUrl() to append UTMs to any outbound CTA link
 */

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const STORAGE_KEY = "gsb_inbound_utms";

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

/** Capture inbound UTMs from the current URL on first page load */
export function captureInboundUtms(): UtmParams | null {
  if (typeof window === "undefined") return null;

  // Only capture once per session
  const existing = sessionStorage.getItem(STORAGE_KEY);
  if (existing) return JSON.parse(existing) as UtmParams;

  const params = new URLSearchParams(window.location.search);
  const utms: UtmParams = {};
  let hasUtm = false;

  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) {
      utms[key] = val;
      hasUtm = true;
    }
  }

  if (hasUtm) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utms));
    return utms;
  }

  return null;
}

/** Get stored inbound UTMs (if visitor arrived with them) */
export function getInboundUtms(): UtmParams | null {
  if (typeof window === "undefined") return null;
  const stored = sessionStorage.getItem(STORAGE_KEY);
  return stored ? (JSON.parse(stored) as UtmParams) : null;
}

/** Derive a page slug from the current pathname for utm_medium */
export function getPageSlug(): string {
  if (typeof window === "undefined") return "website";
  const path = window.location.pathname;
  
  // Map routes to clean slugs
  if (path === "/" || path === "") return "home";
  
  // Use last segment of path as slug
  const segments = path.replace(/\/$/, "").split("/");
  const last = segments[segments.length - 1];
  return last || "home";
}

/** Normalize a campaign label to a URL-safe slug */
function campaignSlug(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/**
 * Build a CTA URL with UTM parameters.
 * 
 * If the visitor arrived with inbound UTMs, those are preserved.
 * Otherwise, defaults are generated from the current page and button label.
 * 
 * @param baseUrl - The destination URL (without UTM params)
 * @param campaign - The button label or campaign name (e.g. "strategy-session", "Free SEO Audit")
 * @param pageMedium - Optional override for utm_medium (defaults to current page slug)
 */
export function buildCtaUrl(
  baseUrl: string,
  campaign: string,
  pageMedium?: string
): string {
  const inbound = getInboundUtms();

  const utms: UtmParams = inbound ?? {
    utm_source: "website",
    utm_medium: pageMedium ?? getPageSlug(),
    utm_campaign: campaignSlug(campaign),
  };

  // Strip any existing UTM params from the base URL
  const url = new URL(baseUrl);
  for (const key of UTM_KEYS) {
    url.searchParams.delete(key);
  }

  // Append UTMs
  for (const key of UTM_KEYS) {
    const val = utms[key];
    if (val) {
      url.searchParams.set(key, val);
    }
  }

  return url.toString();
}

/** Base URLs without UTM params */
export const CTA_URLS = {
  strategySession: "https://lp.growsmallbiz.io/digital-growth-strategy-session",
  freeAudit: "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page",
} as const;
