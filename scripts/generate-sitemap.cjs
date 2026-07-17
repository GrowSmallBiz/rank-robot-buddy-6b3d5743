/**
 * Auto-generates public/sitemap.xml from the routes defined in src/App.tsx.
 * Run: node scripts/generate-sitemap.cjs
 * Called automatically during build via package.json "build" script.
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://rank-robot-buddy.lovable.app';

const appFile = fs.readFileSync(path.resolve(__dirname, '../src/App.tsx'), 'utf-8');

// Extract only lazy-loaded routes (content pages), NOT Component-based redirect routes
// Lazy routes look like: { path: "...", lazy: lazy(() => import(...)) }
// Redirect routes look like: { path: "...", Component: () => <Redirect ... /> }
const lazyPathRegex = /path:\s*["']([^"'*]+)["']\s*,\s*lazy:/g;
const routes = [];
let match;

while ((match = lazyPathRegex.exec(appFile)) !== null) {
  const route = match[1];
  if (route && route !== '404' && route !== 'h1-check') {
    routes.push('/' + route.replace(/^\//, ''));
  }
}

// Deduplicate and ensure home is included
const uniqueRoutes = [...new Set(['/', ...routes])];

// Priority rules
function getPriority(route) {
  if (route === '/') return '1.0';
  if (route === '/services') return '0.9';
  if (['/about', '/contact'].includes(route)) return '0.8';
  if (route.startsWith('/services/') && !route.includes('/seo-agency/')) return '0.8';
  if (route === '/services/seo-agency') return '0.8';
  if (route.startsWith('/services/seo-agency/')) return '0.7';
  if (['/privacy-policy', '/terms-of-service'].includes(route)) return '0.4';
  return '0.6';
}

// Filter out shortcut/alias routes that duplicate nested service pages
const serviceAliases = ['/service', '/services/paid-ads', '/website-design', '/seo-agency', '/seo-agency/aeo', '/seo-agency/geo', '/seo-agency/local-seo', '/seo-agency/authority-building', '/seo-agency/link-building', '/seo-agency/technical-seo', '/seo-agency/on-page-seo'];

// Also filter out test/draft pages that should not be indexed
const excludedPages = ['/privacy-policy', '/terms-of-service'];

const filteredRoutes = uniqueRoutes.filter(r =>
  !serviceAliases.includes(r) && !excludedPages.includes(r)
);

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const route of filteredRoutes.sort()) {
  const loc = route === '/' ? BASE_URL + '/' : BASE_URL + route + '/';
  xml += `  <url><loc>${loc}</loc><priority>${getPriority(route)}</priority></url>\n`;
}


xml += `</urlset>\n`;

const outPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf-8');
console.log(`✅ Generated sitemap.xml with ${filteredRoutes.length} routes (redirect routes excluded)`);
