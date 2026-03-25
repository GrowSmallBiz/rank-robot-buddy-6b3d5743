/**
 * Auto-generates public/sitemap.xml from the routes defined in src/App.tsx.
 * Run: node scripts/generate-sitemap.cjs
 * Called automatically during build via package.json "build" script.
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://growsmallbiz.io';

const appFile = fs.readFileSync(path.resolve(__dirname, '../src/App.tsx'), 'utf-8');

// Extract all path strings from route definitions
const pathRegex = /path:\s*["']([^"'*]+)["']/g;
const routes = [];
let match;

while ((match = pathRegex.exec(appFile)) !== null) {
  const route = match[1];
  if (route && route !== '404') {
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
  if (route.startsWith('/services/') && !route.includes('/managed-ai-seo/')) return '0.8';
  if (route === '/services/managed-ai-seo') return '0.8';
  if (route.startsWith('/services/managed-ai-seo/')) return '0.7';
  if (['/privacy-policy', '/terms-of-service'].includes(route)) return '0.4';
  return '0.6';
}

// Filter out shortcut/alias routes (top-level duplicates of nested service pages)
const serviceAliases = ['/service', '/paid-ads', '/website-design', '/managed-ai-seo'];
const filteredRoutes = uniqueRoutes.filter(r => !serviceAliases.includes(r));

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const route of filteredRoutes.sort()) {
  const loc = route === '/' ? BASE_URL + '/' : BASE_URL + route + '/';
  xml += `  <url><loc>${loc}</loc><priority>${getPriority(route)}</priority></url>\n`;
}

// Static assets
xml += `  <url><loc>${BASE_URL}/llms.txt</loc><priority>0.6</priority></url>\n`;
xml += `  <url><loc>${BASE_URL}/llms-full.txt</loc><priority>0.6</priority></url>\n`;

xml += `</urlset>\n`;

const outPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf-8');
console.log(`✅ Generated sitemap.xml with ${filteredRoutes.length} routes`);
