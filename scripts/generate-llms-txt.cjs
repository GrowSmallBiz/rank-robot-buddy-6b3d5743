/**
 * Auto-generates public/llms.txt (index file) from the routes defined in src/App.tsx.
 * Run: node scripts/generate-llms-txt.cjs
 * Called automatically during build via package.json "build" script.
 *
 * NOTE: llms-full.txt contains rich curated content and must be updated manually.
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

const uniqueRoutes = ['/', ...new Set(routes)];

// Filter out shortcut aliases
const serviceAliases = ['/service', '/paid-ads', '/website-design', '/managed-ai-seo'];
const filteredRoutes = uniqueRoutes.filter(r => !serviceAliases.includes(r));

// Categorize routes
const primaryPages = filteredRoutes.filter(r =>
  ['/', '/about', '/contact'].includes(r)
);
const servicePages = filteredRoutes.filter(r =>
  r.startsWith('/services')
);
const legalPages = filteredRoutes.filter(r =>
  ['/privacy-policy', '/terms-of-service'].includes(r)
);

// Route to readable name
function routeToName(route) {
  if (route === '/') return 'Home';
  const slug = route.split('/').pop();
  return slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
    .replace('Ai', 'AI')
    .replace('Seo', 'SEO')
    .replace('Aeo', 'AEO')
    .replace('Geo', 'GEO');
}

let output = `# GrowSmallBiz Digital Marketing

> AI-powered digital marketing for local service businesses. We provide integrated website design, SEO, paid media, social media, AI receptionist, CRM, and lead nurturing services.

Canonical: ${BASE_URL}/

## Read this first
- Full machine-readable content: ${BASE_URL}/llms-full.txt
- XML sitemap: ${BASE_URL}/sitemap.xml

## Primary Pages
`;

for (const route of primaryPages.sort()) {
  output += `- ${routeToName(route)}: ${BASE_URL}${route}\n`;
}

output += `\n## Services\n`;
for (const route of servicePages.sort()) {
  output += `- ${routeToName(route)}: ${BASE_URL}${route}\n`;
}

if (legalPages.length) {
  output += `\n## Legal\n`;
  for (const route of legalPages.sort()) {
    output += `- ${routeToName(route)}: ${BASE_URL}${route}\n`;
  }
}

const outPath = path.resolve(__dirname, '../public/llms.txt');
fs.writeFileSync(outPath, output, 'utf-8');
console.log(`✅ Generated llms.txt with ${filteredRoutes.length} routes`);
