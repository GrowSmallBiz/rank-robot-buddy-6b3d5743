#!/usr/bin/env node
/**
 * Pre-rendered HTML integrity check.
 *
 * Philosophy: SEO content-quality issues (title length, missing canonical,
 * alt text, etc.) MUST NOT fail the build. They are surfaced as warnings
 * for editorial follow-up. The build only fails on genuine integrity
 * problems that break the deploy itself:
 *
 *  ERRORS (fail build):
 *   - dist/ missing
 *   - required artifacts missing/empty (sitemap.xml, robots.txt, llms.txt, llms-full.txt)
 *   - zero index.html files in dist/
 *   - rendered body text empty (SSG produced a blank shell)
 *
 *  WARNINGS (logged, non-blocking):
 *   - missing/short/long <title>
 *   - missing/short/long meta description
 *   - missing canonical / viewport / lang
 *   - <h1> count != 1
 *   - <img> missing or empty alt
 */

const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, '..', 'dist');

// Pages excluded from soft SEO warnings (utility / non-SEO routes).
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

  // ── Hard integrity check: body must contain real rendered content ──
  // (catches SSG producing an empty SPA shell — a true build failure)
  if (!isSoft) {
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    const bodyText = bodyMatch
      ? bodyMatch[1]
          .replace(/<script[\s\S]*?<\/script>/gi, '')
          .replace(/<style[\s\S]*?<\/style>/gi, '')
          .replace(/<[^>]+>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
      : '';
    if (bodyText.length < 500) {
      err(`rendered body text too short (${bodyText.length} chars) — possible empty SSG output`);
    }
  }

  // ── Soft SEO-quality checks (warnings only, never block build) ──

  if (!/<html[^>]+\blang\s*=\s*["'][^"']+["']/i.test(html)) {
    warn('missing <html lang="...">');
  }

  const title = pick(html, /<title[^>]*>([^<]*)<\/title>/i);
  if (!title) warn('missing <title>');
  else if (title.length < 10) warn(`title short (${title.length}): "${title}"`);
  else if (title.length > 70) warn(`title > 70 chars (${title.length}): "${title}"`);

  const desc = pick(
    html,
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i,
  );
  if (!desc) warn('missing meta description');
  else if (desc.length < 50) warn(`meta description short (${desc.length})`);
  else if (desc.length > 200) warn(`meta description > 200 chars (${desc.length})`);

  if (!/<link[^>]+rel=["']canonical["'][^>]+href=["'][^"']+["']/i.test(html)) {
    warn('missing canonical link');
  }

  if (!/<meta[^>]+name=["']viewport["']/i.test(html)) {
    warn('missing meta viewport');
  }

  if (!isSoft) {
    const h1s = (html.match(/<h1\b[^>]*>/gi) || []).length;
    if (h1s === 0) warn('no <h1> found');
    else if (h1s > 1) warn(`${h1s} <h1> tags found (expected 1)`);
  }

  const imgTags = html.match(/<img\b[^>]*>/gi) || [];
  for (const tag of imgTags) {
    const altMatch = tag.match(/\balt\s*=\s*["']([^"']*)["']/i);
    if (!altMatch) {
      warn(`<img> missing alt attribute: ${tag.slice(0, 120)}`);
    } else if (altMatch[1].trim() === '') {
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

  // Required build artifacts (hard errors — these break the deploy)
  checkArtifact('llms.txt', 500);
  checkArtifact('llms-full.txt', 5000);
  checkArtifact('sitemap.xml', 500);
  checkArtifact('robots.txt', 50);

  const files = walk(DIST);
  if (files.length === 0) errors.push('no index.html files found in dist/');

  files.forEach(checkHtml);

  console.log(`   Checked ${files.length} HTML files.`);

  if (warnings.length) {
    console.log(`\n⚠️  ${warnings.length} SEO warning(s) (non-blocking):`);
    warnings.slice(0, 30).forEach((w) => console.log('  - ' + w));
    if (warnings.length > 30) console.log(`  ... +${warnings.length - 30} more`);
  }

  if (errors.length) {
    console.error(`\n❌ ${errors.length} build integrity error(s):`);
    errors.slice(0, 50).forEach((e) => console.error('  - ' + e));
    if (errors.length > 50) console.error(`  ... +${errors.length - 50} more`);
    console.error('\nBuild integrity check FAILED.');
    process.exit(1);
  }

  console.log(`\n✅ Pre-render integrity check passed (${files.length} pages).`);
}

main();
