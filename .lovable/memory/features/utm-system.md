Dynamic UTM parameter system for all CTA links site-wide.

- `src/lib/utm.ts` — UTM capture/storage utility + `buildCtaUrl()` + `CTA_URLS` base URLs
- `src/hooks/use-utm.ts` — React hook providing `buildUrl()`, `strategySessionUrl`, `freeAuditUrl`
- If visitor arrives WITH UTMs → stored in sessionStorage, preserved on all outbound links
- If visitor arrives WITHOUT UTMs → defaults: utm_source=website, utm_medium=<page-slug>, utm_campaign=<button-label>
- All 7 pages updated: Index, Contact, GEO, AEO, LocalSEO, ManagedAISEO, WebsiteDesign
- Base CTA URLs stored as constants without UTMs; UTMs appended dynamically at render time
