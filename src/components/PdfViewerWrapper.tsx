import { useState, useEffect, createElement } from "react";

interface PdfViewerWrapperProps {
  src: string;
  className?: string;
}

export const PdfViewer = ({ src, className }: PdfViewerWrapperProps) => {
  const [Component, setComponent] = useState<React.ComponentType<{ src: string; className?: string }> | null>(null);

  useEffect(() => {
    // Only import in the browser — never during SSG/SSR
    import("@/components/PdfViewer").then((mod) => {
      setComponent(() => mod.PdfViewer);
    });
  }, []);

  if (!Component) {
    return (
      <div className="my-8 mx-auto max-w-4xl rounded-xl border border-border bg-muted/10 p-8 text-center text-muted-foreground text-sm">
        Loading PDF viewer…
      </div>
    );
  }

  return createElement(Component, { src, className });
};
