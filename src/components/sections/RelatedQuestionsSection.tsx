import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
 * RelatedQuestions — collapsed-by-default accordion that visually matches
 * the existing FAQSection. Renders all items as static HTML at build time
 * so AI crawlers (GPTBot, ClaudeBot, PerplexityBot) and Googlebot index
 * the answer text without JS. No display:none / visibility:hidden — uses
 * the standard Accordion expand affordance.
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
  if (!items?.length) return null;

  return (
    <section
      id={id}
      className="py-16 lg:py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)",
      }}
      aria-label={title}
    >
      <div className="absolute top-0 left-1/3 w-72 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <p className="text-primary font-medium mb-3">More from this topic</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
              {subtitle}
            </p>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
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
    </section>
  );
};
