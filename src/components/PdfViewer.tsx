import { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Set worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
  src: string;
  className?: string;
}

export const PdfViewer = ({ src, className = "" }: PdfViewerProps) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  }, []);

  const goToPrev = () => setPageNumber((p) => Math.max(1, p - 1));
  const goToNext = () => setPageNumber((p) => Math.min(numPages, p + 1));
  const zoomIn = () => setScale((s) => Math.min(2.5, s + 0.2));
  const zoomOut = () => setScale((s) => Math.max(0.6, s - 0.2));

  return (
    <div
      className={`my-8 mx-auto max-w-4xl rounded-xl border border-border bg-muted/10 overflow-hidden ${className}`}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Controls */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-card/50">
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrev}
            disabled={pageNumber <= 1}
            className="h-8 w-8"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm text-muted-foreground px-2">
            {pageNumber} / {numPages || "—"}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            disabled={pageNumber >= numPages}
            className="h-8 w-8"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={zoomOut} className="h-8 w-8">
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-xs text-muted-foreground w-12 text-center">
            {Math.round(scale * 100)}%
          </span>
          <Button variant="ghost" size="icon" onClick={zoomIn} className="h-8 w-8">
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* PDF Render */}
      <div className="overflow-auto max-h-[700px] flex justify-center p-4 select-none">
        <Document
          file={src}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center h-48 text-muted-foreground text-sm">
              Loading PDF…
            </div>
          }
          error={
            <div className="flex items-center justify-center h-48 text-destructive text-sm">
              Failed to load PDF
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </div>
  );
};
