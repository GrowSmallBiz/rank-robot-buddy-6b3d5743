import { useEffect, useState } from "react";
import { Head } from "vite-react-ssg";

const DownloadBrandingDocx = () => {
  const [status, setStatus] = useState<"generating" | "done" | "error">("generating");

  useEffect(() => {
    const generate = async () => {
      try {
        const { Document, Packer, Paragraph, TextRun, HeadingLevel, TableRow, TableCell, Table, WidthType, BorderStyle } = await import("docx");
        const { saveAs } = await import("file-saver");
        const res = await fetch("/branding-guidelines.md");
        if (!res.ok) throw new Error("Failed to fetch markdown");
        const md = await res.text();
        const lines = md.split("\n");
        const children: any[] = [];

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
            if (line.replace(/[|\s-]/g, "").length === 0) continue;
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
        setStatus("done");
      } catch (e) {
        console.error("Docx generation failed:", e);
        setStatus("error");
      }
    };
    generate();
  }, []);

  return (
    <>
      <Head>
        <title>Download Branding Guidelines | GrowSmallBiz</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          {status === "generating" && (
            <>
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-xl text-foreground font-display font-semibold">Generating your document…</p>
              <p className="text-muted-foreground">The download will start automatically.</p>
            </>
          )}
          {status === "done" && (
            <>
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary text-2xl">✓</span>
              </div>
              <p className="text-xl text-foreground font-display font-semibold">Download started!</p>
              <p className="text-muted-foreground">Check your downloads folder for the file.</p>
              <a href="/branding-guidelines" className="text-primary hover:underline text-sm">← View branding guidelines</a>
            </>
          )}
          {status === "error" && (
            <>
              <p className="text-xl text-destructive font-display font-semibold">Something went wrong</p>
              <button onClick={() => window.location.reload()} className="text-primary hover:underline text-sm">Try again</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DownloadBrandingDocx;
