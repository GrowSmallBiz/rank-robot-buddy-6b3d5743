import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
const CLICK_KEYS = ["google_click_id", "facebook_click_id"];
const STORAGE_KEY = "gsb_inbound_utms";
function captureInboundUtms() {
  if (typeof window === "undefined") return null;
  const existing = sessionStorage.getItem(STORAGE_KEY);
  if (existing) return JSON.parse(existing);
  const params = new URLSearchParams(window.location.search);
  const utms = {};
  let hasUtm = false;
  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) {
      utms[key] = val;
      hasUtm = true;
    }
  }
  const gclid = params.get("gclid");
  if (gclid) {
    utms.google_click_id = gclid;
    hasUtm = true;
  }
  const fbclid = params.get("fbclid");
  if (fbclid) {
    utms.facebook_click_id = fbclid;
    hasUtm = true;
  }
  if (hasUtm) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utms));
    return utms;
  }
  return null;
}
function getInboundUtms() {
  if (typeof window === "undefined") return null;
  const stored = sessionStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
}
function getPageSlug() {
  if (typeof window === "undefined") return "website";
  const path = window.location.pathname;
  if (path === "/" || path === "") return "home";
  const segments = path.replace(/\/$/, "").split("/");
  const last = segments[segments.length - 1];
  return last || "home";
}
function campaignSlug(label) {
  return label.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}
function buildCtaUrl(baseUrl, campaign, pageMedium) {
  const inbound = getInboundUtms();
  const utms = inbound ?? {
    utm_source: "website",
    utm_medium: pageMedium ?? getPageSlug(),
    utm_campaign: campaignSlug(campaign)
  };
  const url = new URL(baseUrl);
  for (const key of UTM_KEYS) {
    url.searchParams.delete(key);
  }
  for (const key of CLICK_KEYS) {
    url.searchParams.delete(key);
  }
  for (const key of UTM_KEYS) {
    const val = utms[key];
    if (val) {
      url.searchParams.set(key, val);
    }
  }
  for (const key of CLICK_KEYS) {
    const val = utms[key];
    if (val) {
      url.searchParams.set(key, val);
    }
  }
  return url.toString();
}
const CTA_URLS = {
  strategySession: "https://lp.growsmallbiz.io/digital-growth-strategy-session",
  freeAudit: "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page"
};
function useUtm() {
  const location = useLocation();
  useEffect(() => {
    captureInboundUtms();
  }, []);
  const pageMedium = useMemo(() => {
    const path = location.pathname;
    if (path === "/" || path === "") return "home";
    const segments = path.replace(/\/$/, "").split("/");
    return segments[segments.length - 1] || "home";
  }, [location.pathname]);
  const buildUrl = (baseUrl, campaign) => buildCtaUrl(baseUrl, campaign, pageMedium);
  const strategySessionUrl = buildCtaUrl(
    CTA_URLS.strategySession,
    "strategy-session",
    pageMedium
  );
  const freeAuditUrl = buildCtaUrl(
    CTA_URLS.freeAudit,
    "free-seo-audit",
    pageMedium
  );
  return {
    buildUrl,
    strategySessionUrl,
    freeAuditUrl,
    pageMedium
  };
}
export {
  CTA_URLS as C,
  buildCtaUrl as b,
  useUtm as u
};
