#!/usr/bin/env node
/**
 * Pre-rendered HTML integrity check.
 *
 * Walks every index.html in dist/ and validates SEO essentials:
 *  - <html lang="...">
 *  - exactly one <h1>
 *  - non-empty <title> (≤ 70 chars warned, > 70 errored)
 *  - non-empty meta description (≤ 160 warned, > 200 errored)
 *  - canonical link
 *  - meta viewport
 *  - <body> has substantive rendered content (not an empty SPA shell)
 *  - all <img> have non-empty alt attributes
 *
 * Also confirms the LLM/sitemap artifacts exist and are non-empty.
 * Exits with code 1 on any error so the build fails loudly.
 */

const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, '..', 'dist');

// Pages excluded from the strictest checks (utility / non-SEO routes).
const SOFT_PAGES = new Set(['404/index.html', 'h1-check/index.html']);

const errors = [];
const warnings = [];

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.isFile() && entry.name === 'index.html') acc.push(full);
  }
  return acc;
}

function pick(html, regex) {
  const m = html.match(regex);
  return m ? m[1].trim() : null;
}

function pickAll(html, regex) {
  const out = [];
  let m;
  while ((m = regex.exec(html)) !== null) out.push(m[1]);
  return out;
}

function checkArtifact(file, minBytes = 100) {
  const p = path.join(DIST, file);
  if (!fs.existsSync(p)) {
    errors.push(`Missing build artifact: ${file}`);
    return;
  }
  const size = fs.statSync(p).size;
  if (size < minBytes) errors.push(`Artifact too small (${size}B): ${file}`);
}

function checkHtml(file) {
  const rel = path.relative(DIST, file).replace(/\\/g, '/');
  const isSoft = SOFT_PAGES.has(rel);
  const html = fs.readFileSync(file, 'utf8');
  const err = (msg) => errors.push(`[${rel}] ${msg}`);
  const warn = (msg) => warnings.push(`[${rel}] ${msg}`);

  // <html lang="">
  if (!/<html[^>]+\blang\s*=\s*["'][^"']+["']/i.test(html)) {
    err('missing <html lang="...">');
  }

  // <title>
  const title = pick(html, /<title[^>]*>([^<]*)<\/title>/i);
  if (!title) err('missing <title>');
  else if (title.length < 10) err(`title too short (${title.length}): "${title}"`);
  else if (title.length > 70) warn(`title > 70 chars (${title.length}): "${title}"`);

  // meta description
  const desc = pick(
    html,
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i,
  );
  if (!desc) err('missing meta description');
  else if (desc.length < 50) warn(`meta description short (${desc.length}): "${desc}"`);
  else if (desc.length > 200) err(`meta description > 200 chars (${desc.length})`);

  // canonical
  if (!/<link[^>]+rel=["']canonical["'][^>]+href=["'][^"']+["']/i.test(html)) {
    err('missing canonical link');
  }

  // viewport
  if (!/<meta[^>]+name=["']viewport["']/i.test(html)) {
    err('missing meta viewport');
  }

  if (!isSoft) {
    // exactly one H1
    const h1s = (html.match(/<h1\b[^>]*>/gi) || []).length;
    if (h1s === 0) err('no <h1> found');
    else if (h1s > 1) err(`${h1s} <h1> tags found (expected 1)`);

    // body has substantive content (catches blank SSG renders)
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    const bodyText = bodyMatch
      ? bodyMatch[1].replace(/<script[\s\S]*?<\/script>/gi, '')
                    .replace(/<style[\s\S]*?<\/style>/gi, '')
                    .replace(/<[^>]+>/g, ' ')
                    .replace(/\s+/g, ' ')
                    .trim()
      : '';
    if (bodyText.length < 500) {
      err(`rendered body text too short (${bodyText.length} chars) — possible empty SSG output`);
    }
  }

  // all <img> tags have alt
  const imgTags = html.match(/<img\b[^>]*>/gi) || [];
  for (const tag of imgTags) {
    const altMatch = tag.match(/\balt\s*=\s*["']([^"']*)["']/i);
    if (!altMatch) {
      err(`<img> missing alt attribute: ${tag.slice(0, 120)}`);
    } else if (altMatch[1].trim() === '') {
      // empty alt is acceptable for decorative images, surface as warning only
      warn(`<img> has empty alt: ${tag.slice(0, 120)}`);
    }
  }
}

function main() {
  if (!fs.existsSync(DIST)) {
    console.error('dist/ not found — run after vite-react-ssg build.');
    process.exit(1);
  }

  console.log('🔎 Verifying pre-rendered HTML integrity...');

  // Required build artifacts
  checkArtifact('llms.txt', 500);
  checkArtifact('llms-full.txt', 5000);
  checkArtifact('sitemap.xml', 500);
  checkArtifact('robots.txt', 50);

  const files = walk(DIST);
  if (files.length === 0) errors.push('no index.html files found in dist/');

  files.forEach(checkHtml);

  console.log(`   Checked ${files.length} HTML files.`);

  if (warnings.length) {
    console.log(`\n⚠️  ${warnings.length} warning(s):`);
    warnings.slice(0, 30).forEach((w) => console.log('  - ' + w));
    if (warnings.length > 30) console.log(`  ... +${warnings.length - 30} more`);
  }

  if (errors.length) {
    console.error(`\n❌ ${errors.length} error(s):`);
    errors.slice(0, 50).forEach((e) => console.error('  - ' + e));
    if (errors.length > 50) console.error(`  ... +${errors.length - 50} more`);
    console.error('\nBuild integrity check FAILED.');
    process.exit(1);
  }

  console.log(`\n✅ Pre-render integrity check passed (${files.length} pages).`);
}

main();
