import { useEffect, useId, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/components/seo/FaqJsonLd";

interface RelatedQuestionsSectionProps {
  /** Section heading. Default: "Related Questions". */
  title?: string;
  /** Optional short subheading. */
  subtitle?: string;
  items: FaqItem[];
  /** Optional id for in-page anchoring. */
  id?: string;
}

/**
 * RelatedQuestions — the entire section is collapsed by default behind a
 * single toggle button. The accordion list is always rendered to the DOM
 * (toggled via the `hidden` attribute, never unmounted) so AI crawlers
 * (GPTBot, ClaudeBot, PerplexityBot) and Googlebot index every answer in
 * the pre-rendered HTML.
 *
 * Accessibility:
 * - Native <button> => Enter/Space toggle for free.
 * - aria-expanded reflects the live open state.
 * - aria-controls links the toggle to the panel by id.
 * - The panel uses the `hidden` attribute when collapsed, removing it
 *   (and every nested AccordionTrigger) from the tab order — no hidden
 *   focus traps.
 * - The panel is a labelled region (role="region" + aria-labelledby).
 * - Escape closes the panel and restores focus to the toggle.
 * - Visible focus ring on the toggle (focus-visible).
 *
 * Schema is NOT emitted by this component; pair it with <FaqJsonLd /> on
 * the host page so the FAQPage JSON-LD covers BOTH the visible FAQs and
 * these related questions in a single mainEntity array.
 */
export const RelatedQuestionsSection = ({
  title = "Related Questions",
  subtitle,
  items,
  id,
}: RelatedQuestionsSectionProps) => {
  const [open, setOpen] = useState(false);
  const reactId = useId();
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  if (!items?.length) return null;

  const baseId = id ?? `related-questions-${reactId.replace(/:/g, "")}`;
  const panelId = `${baseId}-panel`;
  const headingId = `${baseId}-heading`;

  // Escape closes the panel and returns focus to the toggle so keyboard
  // users never get stranded inside the expanded region.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <section
      id={id}
      className="py-16 lg:py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)",
      }}
      aria-labelledby={headingId}
    >
      <div className="absolute top-0 left-1/3 w-72 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className={cn(
              "w-full flex items-center justify-between gap-4 px-6 py-5 rounded-xl bg-black border text-left transition-all",
              "hover:shadow-[0_0_60px_rgba(255,127,80,0.5)]",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            )}
            style={{ borderColor: "#ff7f50ff" }}
          >
            <div>
              <p className="text-primary font-medium text-sm mb-1">
                More from this topic
              </p>
              <h2
                id={headingId}
                className="text-xl md:text-2xl font-display font-bold text-foreground"
              >
                {title}{" "}
                <span className="text-muted-foreground font-normal text-base">
                  ({items.length})
                </span>
              </h2>
              {subtitle && (
                <p className="text-muted-foreground text-sm mt-2">{subtitle}</p>
              )}
            </div>
            <ChevronDown
              className={cn(
                "h-6 w-6 shrink-0 text-primary transition-transform duration-300",
                open && "rotate-180",
              )}
              aria-hidden="true"
            />
            <span className="sr-only">
              {open ? "Collapse related questions" : "Expand related questions"}
            </span>
          </button>

          {/*
            Always rendered in the DOM (no conditional unmount) so the
            pre-rendered HTML contains every Q&A for AI/search crawlers.
            The `hidden` attribute removes it from the tab order and
            accessibility tree when collapsed — preventing hidden focus
            traps on the nested AccordionTriggers.
          */}
          <div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            hidden={!open}
            className="mt-4"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`related-${index}`}
                  className="bg-black border rounded-xl px-6 transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.5)] data-[state=open]:shadow-[0_0_60px_rgba(255,127,80,0.5)]"
                  style={{ borderColor: "#ff7f50ff" }}
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary font-medium py-4 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
