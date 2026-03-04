import { Helmet } from "react-helmet";
import { Document, Packer, Paragraph, TextRun, HeadingLevel, TableRow, TableCell, Table, WidthType, BorderStyle, AlignmentType } from "docx";
import { saveAs } from "file-saver";

const generateDocx = async () => {
  const res = await fetch("/branding-guidelines.md");
  const md = await res.text();
  const lines = md.split("\n");
  const children: Paragraph[] = [];

  let inCodeBlock = false;
  let codeLines: string[] = [];
  let inTable = false;
  let tableRows: string[][] = [];

  const flushTable = () => {
    if (tableRows.length > 0) {
      try {
        const cols = tableRows[0].length;
        const table = new Table({
          rows: tableRows.map((row, ri) =>
            new TableRow({
              children: row.map(cell =>
                new TableCell({
                  children: [new Paragraph({ children: [new TextRun({ text: cell.trim(), bold: ri === 0, size: 18, font: "Calibri" })] })],
                  width: { size: Math.floor(9000 / cols), type: WidthType.DXA },
                  borders: { top: { style: BorderStyle.SINGLE, size: 1 }, bottom: { style: BorderStyle.SINGLE, size: 1 }, left: { style: BorderStyle.SINGLE, size: 1 }, right: { style: BorderStyle.SINGLE, size: 1 } },
                })
              ),
            })
          ),
        });
        children.push(new Paragraph({}));
        children.push(table as any);
        children.push(new Paragraph({}));
      } catch { /* skip malformed tables */ }
      tableRows = [];
    }
    inTable = false;
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        children.push(new Paragraph({
          children: [new TextRun({ text: codeLines.join("\n"), font: "Courier New", size: 18 })],
          spacing: { before: 100, after: 100 },
        }));
        codeLines = [];
      }
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) { codeLines.push(line); continue; }

    if (line.startsWith("|") && line.includes("|")) {
      if (line.replace(/[|\s-]/g, "").length === 0) continue; // separator row
      const cells = line.split("|").filter((_, i, a) => i > 0 && i < a.length - 1);
      tableRows.push(cells);
      inTable = true;
      continue;
    } else if (inTable) {
      flushTable();
    }

    if (line.startsWith("# ")) {
      children.push(new Paragraph({ text: line.replace("# ", ""), heading: HeadingLevel.HEADING_1, spacing: { before: 400, after: 200 } }));
    } else if (line.startsWith("## ")) {
      children.push(new Paragraph({ text: line.replace("## ", ""), heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 150 } }));
    } else if (line.startsWith("### ")) {
      children.push(new Paragraph({ text: line.replace("### ", ""), heading: HeadingLevel.HEADING_3, spacing: { before: 200, after: 100 } }));
    } else if (line.startsWith("- [ ] ")) {
      children.push(new Paragraph({ children: [new TextRun({ text: "☐ " + line.replace("- [ ] ", ""), size: 22, font: "Calibri" })], spacing: { before: 40 } }));
    } else if (line.startsWith("- **") || line.startsWith("- ")) {
      const cleaned = line.replace(/^- /, "");
      const parts = cleaned.split(/(\*\*[^*]+\*\*)/g);
      children.push(new Paragraph({
        children: parts.map(p => p.startsWith("**") ? new TextRun({ text: p.replace(/\*\*/g, ""), bold: true, size: 22, font: "Calibri" }) : new TextRun({ text: p, size: 22, font: "Calibri" })),
        spacing: { before: 40 },
        indent: { left: 360 },
      }));
    } else if (line.startsWith("> ")) {
      children.push(new Paragraph({ children: [new TextRun({ text: line.replace("> ", ""), italics: true, size: 22, font: "Calibri", color: "666666" })], spacing: { before: 100, after: 100 } }));
    } else if (line === "---") {
      children.push(new Paragraph({ children: [new TextRun({ text: "─".repeat(60), color: "CCCCCC", size: 16 })], spacing: { before: 200, after: 200 } }));
    } else if (line.trim()) {
      const parts = line.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
      children.push(new Paragraph({
        children: parts.map(p => {
          if (p.startsWith("**")) return new TextRun({ text: p.replace(/\*\*/g, ""), bold: true, size: 22, font: "Calibri" });
          if (p.startsWith("`")) return new TextRun({ text: p.replace(/`/g, ""), font: "Courier New", size: 20 });
          return new TextRun({ text: p, size: 22, font: "Calibri" });
        }),
        spacing: { before: 60, after: 60 },
      }));
    }
  }
  flushTable();

  const doc = new Document({
    sections: [{ children }],
    styles: { default: { heading1: { run: { size: 36, bold: true, font: "Calibri", color: "E8723A" } }, heading2: { run: { size: 28, bold: true, font: "Calibri" } }, heading3: { run: { size: 24, bold: true, font: "Calibri", color: "333333" } } } },
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, "GrowSmallBiz-Branding-Guidelines.docx");
};

const BrandingGuidelines = () => {
  return (
    <>
      <Helmet>
        <title>GrowSmallBiz — Branding & UX Guidelines</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Print-friendly styles */}
      <style>{`
        @media print {
          body { background: white !important; color: black !important; }
          .brand-guide { background: white !important; color: #1a1a1a !important; }
          .brand-guide h1, .brand-guide h2, .brand-guide h3 { color: #1a1a1a !important; }
          .brand-guide table { border-collapse: collapse; }
          .brand-guide td, .brand-guide th { border: 1px solid #ccc !important; padding: 6px 10px !important; }
          .brand-guide .color-swatch { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="brand-guide min-h-screen bg-white text-gray-900 font-sans">
        {/* Top bar */}
        <div className="no-print sticky top-0 z-50 bg-gray-900 text-white px-6 py-3 flex items-center justify-between text-sm">
          <span className="font-semibold">GrowSmallBiz — Branding Guidelines</span>
          <div className="flex gap-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-1.5 bg-orange-500 hover:bg-orange-600 rounded-lg font-medium transition-colors"
            >
              Print / Save as PDF
            </button>
            <button
              onClick={generateDocx}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
            >
              Download .docx
            </button>
            <a
              href="/branding-guidelines.md"
              download
              className="px-4 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors"
            >
              Download .md
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

          {/* Title */}
          <header className="text-center space-y-4 pb-8 border-b-2 border-gray-200">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              GrowSmallBiz — Complete Branding & UX Guidelines
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Use this document to replicate the GrowSmallBiz website design system on any new project.
            </p>
          </header>

          {/* Table of Contents */}
          <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-2">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Table of Contents</h2>
            <ol className="grid md:grid-cols-2 gap-1 text-sm text-gray-600 list-decimal list-inside">
              {[
                "Global Design Philosophy", "Color Palette", "Typography", "Buttons",
                "Section-by-Section UX Specifications", "Animation System", "Card System",
                "Icon System", "Gradient System", "Section Header Pattern",
                "Spacing & Layout Conventions", "Responsive Breakpoints", "SEO Patterns",
                "Homepage Section Order", "Replication Checklist"
              ].map((item, i) => (
                <li key={i} className="hover:text-orange-600 cursor-default py-0.5">{item}</li>
              ))}
            </ol>
          </nav>

          {/* 1. Global Design Philosophy */}
          <Section num={1} title="Global Design Philosophy">
            <SpecList items={[
              { label: "Theme", value: "Dark-mode-first, professional agency aesthetic" },
              { label: "Tone", value: "Confident, authoritative, results-driven — speaks as a marketing agency executing for clients" },
              { label: "Mood", value: "Premium tech meets warm approachability — dark navy backgrounds with warm coral/orange accents" },
              { label: "Layout", value: "Centered container (max 1400px), generous vertical padding (96px / 128px on sections)" },
              { label: "Border radius", value: "Default 12px, cards use 16px (rounded-2xl)" },
            ]} />
          </Section>

          {/* 2. Color Palette */}
          <Section num={2} title="Color Palette">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Primary Colors (HSL format for CSS variables)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Token</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">HSL Value</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Preview</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { token: "--background", hsl: "210 50% 12%", hex: "#152233", usage: "Page background — dark navy" },
                    { token: "--foreground", hsl: "210 20% 98%", hex: "#F8FAFB", usage: "Primary text — near-white" },
                    { token: "--card", hsl: "210 45% 16%", hex: "#1A2D42", usage: "Card / elevated surface" },
                    { token: "--primary", hsl: "18 85% 60%", hex: "#E8723A", usage: "Primary action color — warm coral/orange" },
                    { token: "--primary-foreground", hsl: "210 50% 12%", hex: "#152233", usage: "Text on primary buttons" },
                    { token: "--secondary", hsl: "210 40% 20%", hex: "#1F3347", usage: "Secondary backgrounds" },
                    { token: "--muted", hsl: "210 35% 22%", hex: "#243A4F", usage: "Subtle backgrounds" },
                    { token: "--muted-foreground", hsl: "210 20% 70%", hex: "#A3B1BF", usage: "Secondary text" },
                    { token: "--destructive", hsl: "0 84% 60%", hex: "#EF4444", usage: "Error / negative state" },
                    { token: "--border", hsl: "210 35% 22%", hex: "#243A4F", usage: "Default border color" },
                  ].map((c) => (
                    <tr key={c.token}>
                      <td className="px-4 py-2 font-mono text-xs text-gray-700">{c.token}</td>
                      <td className="px-4 py-2 font-mono text-xs text-gray-600">{c.hsl}</td>
                      <td className="px-4 py-2">
                        <div className="color-swatch flex items-center gap-2">
                          <span className="w-8 h-8 rounded-md border border-gray-300 inline-block" style={{ backgroundColor: c.hex }} />
                          <span className="text-xs text-gray-500">{c.hex}</span>
                        </div>
                      </td>
                      <td className="px-4 py-2 text-gray-600">{c.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">Accent & Glow Colors</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Token</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Preview</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { token: "--glow-primary", hex: "#E8723A", usage: "Orange glow on hover effects" },
                    { token: "--glow-accent", hex: "#17a2b8", usage: "Teal/cyan glow accent" },
                    { token: "--ghl-card-border", hex: "#17a2b8", usage: "Teal card borders" },
                    { token: "--ghl-icon", hex: "#FF7F50", usage: "Icon container orange" },
                  ].map((c) => (
                    <tr key={c.token}>
                      <td className="px-4 py-2 font-mono text-xs text-gray-700">{c.token}</td>
                      <td className="px-4 py-2">
                        <div className="color-swatch flex items-center gap-2">
                          <span className="w-8 h-8 rounded-md border border-gray-300 inline-block" style={{ backgroundColor: c.hex }} />
                          <span className="text-xs text-gray-500">{c.hex}</span>
                        </div>
                      </td>
                      <td className="px-4 py-2 text-gray-600">{c.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">Key Hardcoded Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { hex: "#FC8253", label: "Stat value orange" },
                { hex: "#17a2b8", label: "Teal accent" },
                { hex: "#2d465c", label: "Teal card bg" },
                { hex: "#191321", label: "Form inner bg" },
                { hex: "#2d465c", label: "Form outer bg" },
              ].map((c) => (
                <div key={c.label} className="text-center space-y-1.5">
                  <div className="color-swatch w-full h-16 rounded-lg border border-gray-200" style={{ backgroundColor: c.hex }} />
                  <p className="text-xs text-gray-500">{c.hex}</p>
                  <p className="text-xs font-medium text-gray-700">{c.label}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* 3. Typography */}
          <Section num={3} title="Typography">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Font Stack</h3>
            <SpecList items={[
              { label: "Body text", value: "Poppins (weights 300–900) — Tailwind: font-sans" },
              { label: "Headings / Display", value: "Montserrat (weights 400–800) — Tailwind: font-display" },
            ]} />

            <CodeBlock label="Google Fonts Import" code={`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700;800&display=swap');`} />

            <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">Type Scale</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Element</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Size</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Font</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { el: "H1 (Hero)", size: "36px → 48px → 60px", font: "Montserrat", weight: "700 (Bold)" },
                    { el: "H2 (Section)", size: "30px → 36px", font: "Montserrat", weight: "700" },
                    { el: "H3 (Card)", size: "20px or 24px", font: "Montserrat", weight: "600 (Semibold)" },
                    { el: "Body large", size: "20px → 24px", font: "Poppins", weight: "500 (Medium)" },
                    { el: "Body", size: "18px", font: "Poppins", weight: "400 (Regular)" },
                    { el: "Body small", size: "14px", font: "Poppins", weight: "400" },
                    { el: "Label / Meta", size: "12px", font: "Poppins", weight: "500" },
                    { el: "Stat values", size: "36px → 48px", font: "Montserrat", weight: "700 — colored #FC8253" },
                  ].map((t) => (
                    <tr key={t.el}>
                      <td className="px-4 py-2 font-medium text-gray-800">{t.el}</td>
                      <td className="px-4 py-2 font-mono text-xs text-gray-600">{t.size}</td>
                      <td className="px-4 py-2 text-gray-600">{t.font}</td>
                      <td className="px-4 py-2 text-gray-600">{t.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">Text Color Classes</h3>
            <SpecList items={[
              { label: "Primary text", value: "text-foreground (near-white)" },
              { label: "Secondary text", value: "text-muted-foreground (blue-gray)" },
              { label: "Accent text", value: "text-primary (coral/orange)" },
              { label: "Gradient text", value: ".text-gradient class — linear-gradient from orange to blue, applied via bg-clip-text" },
            ]} />
          </Section>

          {/* 4. Buttons */}
          <Section num={4} title="Buttons">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Variants</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Variant</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Style</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { v: "default", s: "Solid primary background, dark text", u: "Standard actions" },
                    { v: "hero", s: "Gradient from-primary to blue, with shadow", u: "Primary CTAs in hero sections" },
                    { v: "heroOutline", s: "2px primary/50 border, transparent bg", u: "Secondary CTAs in hero sections" },
                    { v: "outline", s: "1px border, transparent background", u: "Tertiary actions, 'Learn More'" },
                    { v: "ghost", s: "No background, hover shows secondary", u: "Navigation items" },
                    { v: "glow", s: "Solid primary with animated glow pulse", u: "Attention-grabbing actions" },
                  ].map((b) => (
                    <tr key={b.v}>
                      <td className="px-4 py-2 font-mono text-xs font-medium text-orange-700">{b.v}</td>
                      <td className="px-4 py-2 text-gray-600">{b.s}</td>
                      <td className="px-4 py-2 text-gray-600">{b.u}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">Sizes</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Size</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Height</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Padding</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Text</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { s: "sm", h: "36px", p: "12px horizontal", t: "14px" },
                    { s: "default", h: "40px", p: "16px horizontal", t: "14px" },
                    { s: "lg", h: "48px", p: "32px horizontal", t: "16px" },
                    { s: "xl", h: "56px", p: "40px horizontal", t: "18px" },
                  ].map((sz) => (
                    <tr key={sz.s}>
                      <td className="px-4 py-2 font-mono text-xs font-medium text-orange-700">{sz.s}</td>
                      <td className="px-4 py-2 text-gray-600">{sz.h}</td>
                      <td className="px-4 py-2 text-gray-600">{sz.p}</td>
                      <td className="px-4 py-2 text-gray-600">{sz.t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">CTA Button Gradient Pattern</h3>
            <CodeBlock label="CSS" code={`background: linear-gradient(90deg, hsl(25 90% 55%) 0%, hsl(35 85% 60%) 35%, hsl(199 80% 55%) 100%);\nbox-shadow: 0 12px 35px -8px hsla(25, 90%, 50%, 0.6);\nborder-radius: 9999px;`} />
          </Section>

          {/* 5. Section-by-Section UX */}
          <Section num={5} title="Section-by-Section UX Specifications">

            <SubSection num="5.1" title="Header (Fixed Navigation)">
              <SpecList items={[
                { label: "Position", value: "Fixed top, z-index 50" },
                { label: "Background", value: "Background color at 80% opacity with extra-large backdrop blur" },
                { label: "Border", value: "Bottom border using the default border color" },
                { label: "Height", value: "80px" },
                { label: "Logo", value: "Image logo, 48px tall" },
                { label: "Nav links", value: "14px, medium weight, muted color. Active state: primary orange" },
                { label: "Dropdowns", value: "Card background, rounded corners (12px), large shadow, appear on hover with fade + slide animation" },
                { label: "CTA (desktop)", value: "Phone number button with primary orange background, shows 'Call Now & Schedule Today' + phone number" },
                { label: "Mobile", value: "Hamburger menu, full-width dropdown below header, collapsible accordion sub-menus" },
              ]} />
            </SubSection>

            <SubSection num="5.2" title="Hero Section">
              <SpecList items={[
                { label: "Padding", value: "128px top (accounts for fixed header), 96px bottom" },
                { label: "Background", value: "Full-bleed background image with 85% opacity dark overlay" },
                { label: "Decorative elements", value: "Two blurred circles (320×320px, primary color at 10% opacity, 48px blur) positioned top-right and bottom-left" },
                { label: "Badge / Pill", value: "Inline flex with icon, rounded full, primary color at 10% background with 20% border, 14px font" },
                { label: "H1", value: "36px → 48px → 60px, Montserrat Bold, near-white, tight leading" },
                { label: "Highlight text", value: "Gradient text class — gradient from orange to blue using background-clip" },
                { label: "Subheadline", value: "20px → 24px, muted color, medium weight" },
                { label: "Body", value: "18px, muted color, relaxed line height, max-width 768px, centered" },
                { label: "CTA buttons", value: "Flex row on desktop, column on mobile, 16px gap. Primary: hero gradient variant, XL size with arrow. Secondary: heroOutline variant, XL size" },
                { label: "Animation", value: "Staggered fade-up animation with 100ms–400ms delays" },
              ]} />
            </SubSection>

            <SubSection num="5.3" title="Comparison Section (Fragmented vs Integrated)">
              <SpecList items={[
                { label: "Background", value: "Card color at 80% opacity, with top border in primary at 10% opacity" },
                { label: "Overlay", value: "Gradient from card/50% to transparent at 50% opacity" },
                { label: "Decorative", value: "Two blurred circles (384×384px) in primary and accent at 5% opacity" },
                { label: "Header", value: "Centered, orange subtitle text + bold H2" },
                { label: "Layout", value: "2-column grid on large screens, 32px gap, max-width 1024px centered" },
                { label: "Card style", value: "Background at 80% opacity, orange icon border, 16px rounded, 32px padding" },
                { label: "Hover effect", value: "60px orange glow shadow" },
                { label: "'Our Solution' card", value: "2px primary border at 30% + floating badge (absolute positioned, -16px top, primary background, rounded full)" },
                { label: "List items — negative", value: "X circle icon in destructive/red at 60% opacity" },
                { label: "List items — positive", value: "Check circle icon in primary orange" },
              ]} />
            </SubSection>

            <SubSection num="5.4" title="Growth Steps Section (Digital Dominance Method)">
              <SpecList items={[
                { label: "Background", value: "Triple gradient: very dark navy → standard navy → very dark navy (vertical)" },
                { label: "Header", value: "Orange subtitle + H2 with gradient highlight text" },
                { label: "Grid", value: "2 columns on medium, 4 columns on large, 24px gap" },
                { label: "Cards", value: "Background at 80%, orange icon border, 12px rounded, 24px padding, centered text" },
                { label: "Hover effect", value: "60px orange glow shadow" },
                { label: "Icon container", value: "64×64px, 16px rounded, primary at 10% background, icon in primary color" },
                { label: "Title", value: "Montserrat semibold, 18px, near-white" },
                { label: "Description", value: "14px, muted foreground color" },
                { label: "Below cards", value: "Italic testimonial quote + hero CTA button" },
              ]} />
            </SubSection>

            <SubSection num="5.5" title="Services Grid Section">
              <SpecList items={[
                { label: "Background", value: "Card at 80% with top border (primary at 10%) + gradient overlay" },
                { label: "Grid", value: "2 columns on medium, 3 columns on large, 32px gap" },
                { label: "Card border", value: "2px solid teal (#17a2b8)" },
                { label: "Card background", value: "Teal-navy (#2d465c) with backdrop blur" },
                { label: "Card shape", value: "16px rounded corners, 24px padding" },
                { label: "Hover effect", value: "Teal glow: 30px + 60px combined shadow" },
                { label: "Icon container", value: "48×48px, 12px rounded, orange-icon at 20% background" },
                { label: "Feature list", value: "Check circle icon in orange-icon color + 14px muted text" },
                { label: "Button", value: "Outline variant, teal border at 50%, full width" },
                { label: "'Coming Soon' badge", value: "Absolute positioned, -12px top, muted background, 12px font, rounded full" },
              ]} />
            </SubSection>

            <SubSection num="5.6" title="Card CTA (Mid-page Call-to-Action)">
              <SpecList items={[
                { label: "Layout", value: "Full-width section with centered max-width 1024px card" },
                { label: "Card background", value: "Dark navy (HSL 215 40% 13%)" },
                { label: "Card border", value: "1px solid orange at 50% opacity" },
                { label: "Card shadow", value: "50px spread orange glow at 25% opacity" },
                { label: "Card padding", value: "32px → 48px → 56px (responsive)" },
                { label: "Inside layout", value: "Flex column on mobile, row on desktop, 40px → 56px gap" },
                { label: "Left side", value: "Circular photo (144px → 160px) with gray gradient ring + name/role below" },
                { label: "Right side", value: "H2 title (can have gradient accent words) + description + two buttons" },
                { label: "Primary button", value: "Gradient orange → gold → blue, fully rounded, strong shadow" },
                { label: "Secondary button", value: "Outline with phone icon, fully rounded" },
              ]} />
            </SubSection>

            <SubSection num="5.7" title="Why Choose Section">
              <SpecList items={[
                { label: "Background", value: "Card at 80% with top border (primary at 10%)" },
                { label: "Light variant", value: "Available with stone-50/stone-100 backgrounds for alternate pages" },
                { label: "Header", value: "Orange subtitle + bold H2 + description paragraph" },
                { label: "Grid", value: "2 columns on medium, 3 columns on large, 24px gap" },
                { label: "Cards", value: "12px rounded, 24px padding, background at 80%, orange icon border" },
                { label: "Hover effect", value: "60px orange glow shadow" },
                { label: "Icon container", value: "48×48px, 12px rounded, primary at 10% background" },
                { label: "Title", value: "Montserrat semibold, near-white" },
                { label: "Description", value: "14px, relaxed leading, muted foreground" },
              ]} />
            </SubSection>

            <SubSection num="5.8" title="Animated Stats Section">
              <SpecList items={[
                { label: "Background", value: "Triple gradient: very dark navy → slightly lighter → very dark navy" },
                { label: "Decorative", value: "Two blurred circles at top-left and bottom-right" },
                { label: "Padding", value: "80px vertical" },
                { label: "Grid", value: "2 columns, 4 on large screens, 32px → 48px gap" },
                { label: "Animation", value: "Intersection Observer triggers count-up animation on scroll (2 second duration, ease-out-quart easing)" },
                { label: "Icon container", value: "56×56px, 12px rounded, stat orange at 15% background with 30% border" },
                { label: "Hover glow", value: "25px shadow in stat orange at 40% + darker background" },
                { label: "Stat value", value: "36px → 48px, Montserrat Bold, colored #FC8253" },
                { label: "Label", value: "14px, slate-400 color, medium weight" },
                { label: "Card variant", value: "Background at 80%, teal border, 16px rounded, 24px padding, centered, hover orange glow" },
              ]} />
            </SubSection>

            <SubSection num="5.9" title="Testimonials Section">
              <SpecList items={[
                { label: "Background", value: "Gradient: slightly lighter navy → standard navy → slightly lighter navy" },
                { label: "Light variant", value: "Available with warm stone tones for alternate pages" },
                { label: "Decorative", value: "Two offset blurred circles" },
                { label: "Header", value: "'Testimonials' label in primary color + bold H2" },
                { label: "Grid", value: "2 columns on medium, 3 on large, 32px gap" },
                { label: "Card border", value: "2px solid teal (#17a2b8)" },
                { label: "Card background", value: "Teal-navy (#2d465c) with backdrop blur" },
                { label: "Card shape", value: "16px rounded, 32px padding" },
                { label: "Hover effect", value: "Teal glow: 30px + 60px combined shadow" },
                { label: "Content order", value: "Star rating (filled primary stars) → quote text → author name + role/company" },
              ]} />
            </SubSection>

            <SubSection num="5.10" title="Case Study Section">
              <SpecList items={[
                { label: "Background", value: "Default with section-glow radial gradient overlay" },
                { label: "Grid", value: "2 columns on large, 32px gap, max-width 1152px centered" },
                { label: "Card header bar", value: "Primary gradient (orange → blue) with company name, location, industry, timeframe" },
                { label: "Challenge section", value: "24px padding, bottom border" },
                { label: "Metrics section", value: "24px padding, muted background at 30%" },
                { label: "Before/after indicators", value: "TrendingDown icon (red) → Arrow → TrendingUp icon (orange)" },
                { label: "Improvement badge", value: "12px font, bold, primary color, primary at 10% background, rounded full" },
                { label: "CTA button below", value: "Hero variant, large size" },
              ]} />
            </SubSection>

            <SubSection num="5.11" title="Blog Section">
              <SpecList items={[
                { label: "Background", value: "Default with section-glow radial gradient overlay" },
                { label: "Grid", value: "2 columns on medium, 3 on large, 32px gap" },
                { label: "Card", value: "Card background, default border, 16px rounded, overflow hidden, group hover behavior" },
                { label: "Image area", value: "192px tall, gradient from primary/20% via accent/10% to primary/5%" },
                { label: "Category badge", value: "Primary at 90%, 12px font, rounded full, positioned top-left" },
                { label: "Content padding", value: "24px" },
                { label: "Title", value: "20px, Montserrat Semibold, changes to primary on group hover" },
                { label: "Meta row", value: "Author + Date + Read time with small icons" },
                { label: "'Read More' link", value: "Animated arrow slides right on hover" },
              ]} />
            </SubSection>

            <SubSection num="5.12" title="FAQ Section">
              <SpecList items={[
                { label: "Background", value: "Triple gradient same as stats section" },
                { label: "Layout", value: "2-column with CTA sidebar (1:3 ratio) or full-width if no sidebar" },
                { label: "Accordion container", value: "Black background, border with orange (#FF7F50) border color, 12px rounded, 24px horizontal padding" },
                { label: "Hover & open state", value: "60px orange glow shadow" },
                { label: "Trigger text", value: "Near-white, hover turns primary, medium weight, 20px vertical padding, no underline on hover" },
                { label: "Content text", value: "Muted foreground, 20px bottom padding, relaxed line height" },
                { label: "Contact CTA sidebar", value: "Sticky positioned (96px from top), 32px padding, 16px rounded, 2px primary border at 60%, card at 30% background with backdrop blur" },
                { label: "Sidebar avatar", value: "Circular with gradient border ring" },
                { label: "Sidebar CTA button", value: "Gradient from blue to primary orange, fully rounded" },
              ]} />
            </SubSection>

            <SubSection num="5.13" title="Consultation Form Section">
              <SpecList items={[
                { label: "Outer background", value: "Teal-navy (#2d465c)" },
                { label: "Form card", value: "16px rounded, 2px teal (#17a2b8) border, teal glow shadow" },
                { label: "Inner background", value: "Deep purple-black (#191321)" },
                { label: "Title", value: "30px → 36px → 48px, extra bold (900), white, uppercase, tight tracking" },
                { label: "Accent word", value: "Coral/accent color" },
                { label: "Labels", value: "18px, bold, white. Required asterisks in accent color" },
                { label: "Input fields", value: "White at 10% background, white at 30% border, 8px rounded, white text, placeholder at 50% opacity" },
                { label: "Focus state", value: "1px primary ring, primary border color" },
                { label: "Submit button", value: "Full width, fully rounded, gradient from primary to accent, 24px vertical padding, 18px bold text" },
              ]} />
            </SubSection>

            <SubSection num="5.14" title="Footer">
              <SpecList items={[
                { label: "Background", value: "Card color with top border using default border color" },
                { label: "Layout", value: "4-column grid on large (1 col mobile, 2 col medium), 48px gap" },
                { label: "Logo block", value: "Gradient icon square + brand name text" },
                { label: "Link columns", value: "14px, muted foreground, hover turns primary orange" },
                { label: "Bottom bar", value: "Top border, copyright text + Privacy / Terms links" },
                { label: "Padding", value: "64px vertical for content, 48px top margin + 32px top padding for bottom bar" },
              ]} />
            </SubSection>
          </Section>

          {/* 6. Animation System */}
          <Section num={6} title="Animation System">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Entry Animations</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Class</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Effect</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { c: "animate-fade-up", e: "Fade in + slide up (30px → 0)", d: "0.6s ease-out" },
                    { c: "animate-fade-in", e: "Opacity 0 → 1", d: "0.8s ease-out" },
                    { c: "animate-slide-in-left", e: "Fade + slide from left (−40px → 0)", d: "0.6s ease-out" },
                    { c: "animate-slide-in-right", e: "Fade + slide from right (40px → 0)", d: "0.6s ease-out" },
                  ].map((a) => (
                    <tr key={a.c}>
                      <td className="px-4 py-2 font-mono text-xs text-orange-700">{a.c}</td>
                      <td className="px-4 py-2 text-gray-600">{a.e}</td>
                      <td className="px-4 py-2 text-gray-600">{a.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">Stagger Delays</h3>
            <p className="text-sm text-gray-600">Use 100ms through 600ms delays (in 100ms increments) or inline animation-delay for list items (typically index × 0.1 seconds).</p>

            <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">Hover Animations</h3>
            <SpecList items={[
              { label: "Card lift", value: "Translate Y by −8px on hover" },
              { label: "Orange glow", value: "60px box-shadow in orange (#FF7F50) at 50% opacity" },
              { label: "Teal glow", value: "30px + 60px combined box-shadow in teal (#17a2b8)" },
              { label: "Scale up", value: "Scale to 1.05× on hover" },
              { label: "Glow pulse", value: "3-second infinite box-shadow pulse animation" },
            ]} />

            <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">Scroll-triggered</h3>
            <p className="text-sm text-gray-600">Count-up stats use Intersection Observer at 0.3 threshold, triggering a 2-second number animation with ease-out-quart easing.</p>
          </Section>

          {/* 7. Card System */}
          <Section num={7} title="Card System">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Card Variants</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Variant</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Border</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Background</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Hover</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { v: "Orange-bordered", b: "1px solid #FF7F50", bg: "Background at 80%", h: "60px orange glow" },
                    { v: "Teal-bordered", b: "2px solid #17a2b8", bg: "Teal-navy (#2d465c)", h: "30px + 60px teal glow" },
                    { v: "Standard", b: "Default border color", bg: "Card color", h: "Primary border + subtle shadow" },
                    { v: "GlowCard", b: "2px border at 50%", bg: "Card color", h: "Primary glow + lift" },
                    { v: "Animated border", b: "Rotating gradient (orange + teal)", bg: "Card color", h: "Teal glow + lift" },
                  ].map((c) => (
                    <tr key={c.v}>
                      <td className="px-4 py-2 font-medium text-gray-800">{c.v}</td>
                      <td className="px-4 py-2 text-gray-600">{c.b}</td>
                      <td className="px-4 py-2 text-gray-600">{c.bg}</td>
                      <td className="px-4 py-2 text-gray-600">{c.h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">Card Padding</h3>
            <SpecList items={[
              { label: "Standard", value: "24px or 32px" },
              { label: "Large CTA cards", value: "32px → 48px → 56px (responsive)" },
            ]} />
          </Section>

          {/* 8. Icon System */}
          <Section num={8} title="Icon System">
            <SpecList items={[
              { label: "Library", value: "Lucide React" },
              { label: "Size in cards", value: "24×24px" },
              { label: "Size in stat icons", value: "24×24px (inside 56×56px container)" },
              { label: "Size in growth steps", value: "32×32px (inside 64×64px container)" },
            ]} />
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Icon Container Patterns</h3>
            <SpecList items={[
              { label: "Small", value: "48×48px, 12px rounded, primary at 10% background → icon in primary color" },
              { label: "Large", value: "64×64px, 16px rounded, primary at 10% background → icon in primary color" },
              { label: "GHL style", value: "48×48px, 12px rounded, orange-icon at 20% background → icon in orange-icon color" },
              { label: "Stat", value: "56×56px, 12px rounded, stat orange at 15% background with 30% border" },
            ]} />
          </Section>

          {/* 9. Gradient System */}
          <Section num={9} title="Gradient System">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Name</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Description</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { n: "Primary gradient", d: "135° from primary orange to bright blue", u: "Buttons, case study headers" },
                    { n: "Text gradient", d: "Same as primary, applied via background-clip text", u: "Highlight words in headings" },
                    { n: "CTA button gradient", d: "90° from orange → gold → blue", u: "Primary CTA buttons" },
                    { n: "Section dark gradient", d: "Vertical: very dark → standard → very dark navy", u: "Dark section backgrounds" },
                    { n: "Hero glow", d: "Radial ellipse, primary at 15% fading to transparent", u: "Subtle hero glow" },
                    { n: "Section glow", d: "Radial ellipse, primary at 8% fading to transparent", u: "Subtle section glow" },
                  ].map((g) => (
                    <tr key={g.n}>
                      <td className="px-4 py-2 font-medium text-gray-800">{g.n}</td>
                      <td className="px-4 py-2 text-gray-600">{g.d}</td>
                      <td className="px-4 py-2 text-gray-600">{g.u}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* 10. Section Header Pattern */}
          <Section num={10} title="Section Header Pattern">
            <p className="text-sm text-gray-600 mb-4">Every section follows a consistent header pattern:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono bg-orange-100 text-orange-700 px-2 py-0.5 rounded">1</span>
                <div><span className="font-semibold text-gray-800">Subtitle</span> <span className="text-gray-500">— Primary color, medium weight, 16px bottom margin (optional)</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono bg-orange-100 text-orange-700 px-2 py-0.5 rounded">2</span>
                <div><span className="font-semibold text-gray-800">H2 Title</span> <span className="text-gray-500">— 30px → 36px, Montserrat Bold, near-white, 24px bottom margin. May include gradient-highlighted words.</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono bg-orange-100 text-orange-700 px-2 py-0.5 rounded">3</span>
                <div><span className="font-semibold text-gray-800">Description</span> <span className="text-gray-500">— Muted foreground, max-width 640px centered (optional)</span></div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">Container: max-width 896px, centered, 64px bottom margin, fade-up animation.</p>
          </Section>

          {/* 11. Spacing & Layout */}
          <Section num={11} title="Spacing & Layout Conventions">
            <SpecList items={[
              { label: "Section vertical padding", value: "96px or 96px / 128px (responsive)" },
              { label: "Container", value: "Centered, max-width 1400px, 16px horizontal padding" },
              { label: "Section header bottom margin", value: "64px" },
              { label: "Card grid gap", value: "24px or 32px" },
              { label: "Inside card spacing", value: "16px or 24px vertical" },
              { label: "List item spacing", value: "8px to 16px vertical" },
            ]} />
          </Section>

          {/* 12. Responsive Breakpoints */}
          <Section num={12} title="Responsive Breakpoints">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Breakpoint</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Width</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Common Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { b: "Default (mobile)", w: "Below 768px", u: "Single column, stacked layout" },
                    { b: "Medium", w: "768px and up", u: "2-column grids, side-by-side CTAs" },
                    { b: "Large", w: "1024px and up", u: "3–4 column grids, desktop nav visible" },
                    { b: "2XL", w: "1400px", u: "Container max-width" },
                  ].map((bp) => (
                    <tr key={bp.b}>
                      <td className="px-4 py-2 font-medium text-gray-800">{bp.b}</td>
                      <td className="px-4 py-2 font-mono text-xs text-gray-600">{bp.w}</td>
                      <td className="px-4 py-2 text-gray-600">{bp.u}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* 13. SEO Patterns */}
          <Section num={13} title="SEO Patterns">
            <SpecList items={[
              { label: "Page titles & meta", value: "React Helmet for per-page <title> and <meta description>" },
              { label: "Structured data", value: "JSON-LD schemas — FAQ schema auto-generated from FAQ data, LocalBusiness schema on homepage" },
              { label: "Heading hierarchy", value: "Single H1 per page, H2 for sections, H3 for cards" },
              { label: "Semantic HTML", value: "Use <section>, <article> (blog), <nav>, <header>, <footer>" },
              { label: "Image alt text", value: "Descriptive alt attribute on all images" },
            ]} />
          </Section>

          {/* 14. Homepage Section Order */}
          <Section num={14} title="Homepage Section Order">
            <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
              {[
                "Header (fixed)", "Hero Section", "Comparison Section (Fragmented vs Integrated)",
                "Growth Steps (Digital Dominance Method)", "Services Grid", "Mid-page Card CTA",
                "Why Choose Section", "Animated Stats", "Testimonials", "Case Studies",
                "Blog Section", "FAQ Section", "Final Card CTA", "Consultation Form", "Footer"
              ].map((s) => (
                <li key={s} className="py-1">{s}</li>
              ))}
            </ol>
          </Section>

          {/* 15. Replication Checklist */}
          <Section num={15} title="Replication Checklist">
            <p className="text-sm text-gray-600 mb-4">To replicate this design on a new project, complete these steps:</p>
            <ul className="space-y-2.5 text-sm text-gray-700">
              {[
                "Install: Tailwind CSS, tailwindcss-animate, class-variance-authority, Lucide React, Radix UI primitives",
                "Set up CSS variables with all HSL color tokens listed in the Color Palette section",
                "Configure Tailwind with font families, extended colors mapping to CSS variables, custom keyframes and animations",
                "Import Poppins + Montserrat from Google Fonts",
                "Create button component with hero, heroOutline, outline, and glow variants",
                "Build reusable section components: SectionHeader, AnimatedStatsSection, FAQSection, TestimonialsSection, BlogSection, CaseStudySection, CardCTA, ConsultationFormSection",
                "Use dark-mode-first theming (all colors via CSS variables)",
                "Apply staggered fade-up animations on all card grids",
                "Use teal-bordered cards for service/feature grids, orange-bordered for stat/step cards",
                "Implement Intersection Observer count-up for stat values",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded border-2 border-gray-300 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Footer */}
          <footer className="pt-12 border-t border-gray-200 text-center text-sm text-gray-400">
            <p>GrowSmallBiz — Branding & UX Guidelines • {new Date().getFullYear()}</p>
            <p className="mt-1">This document is intended for internal use and agency partners.</p>
          </footer>
        </div>
      </div>
    </>
  );
};

/* Helper components */

const Section = ({ num, title, children }: { num: number; title: string; children: React.ReactNode }) => (
  <section className="space-y-5">
    <div className="flex items-baseline gap-3">
      <span className="text-xs font-bold text-white bg-gray-900 w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0">{num}</span>
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
    </div>
    {children}
  </section>
);

const SubSection = ({ num, title, children }: { num: string; title: string; children: React.ReactNode }) => (
  <div className="space-y-3 pt-4 first:pt-0">
    <h3 className="text-lg font-semibold text-gray-800">
      <span className="text-orange-600 font-mono mr-2">{num}</span>{title}
    </h3>
    {children}
  </div>
);

const SpecList = ({ items }: { items: { label: string; value: string }[] }) => (
  <div className="space-y-2">
    {items.map((item) => (
      <div key={item.label} className="flex flex-col sm:flex-row sm:gap-3 text-sm py-1.5 border-b border-gray-100 last:border-0">
        <span className="font-semibold text-gray-800 sm:w-48 flex-shrink-0">{item.label}</span>
        <span className="text-gray-600">{item.value}</span>
      </div>
    ))}
  </div>
);

const CodeBlock = ({ label, code }: { label: string; code: string }) => (
  <div className="mt-4">
    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</span>
    <pre className="mt-1 bg-gray-900 text-gray-100 text-xs rounded-lg p-4 overflow-x-auto whitespace-pre-wrap font-mono">{code}</pre>
  </div>
);

export default BrandingGuidelines;
