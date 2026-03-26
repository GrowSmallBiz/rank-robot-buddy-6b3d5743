import { lazy, Suspense } from "react";

const PdfViewerLazy = lazy(() =>
  import("@/components/PdfViewer").then((mod) => ({ default: mod.PdfViewer }))
);

interface PdfViewerWrapperProps {
  src: string;
  className?: string;
}

export const PdfViewer = ({ src, className }: PdfViewerWrapperProps) => (
  <Suspense
    fallback={
      <div className="my-8 mx-auto max-w-4xl rounded-xl border border-border bg-muted/10 p-8 text-center text-muted-foreground text-sm">
        Loading PDF viewer…
      </div>
    }
  >
    <PdfViewerLazy src={src} className={className} />
  </Suspense>
);
