import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  schemaType?: string;
}

export const FAQSection = ({ 
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
  schemaType = "FAQPage"
}: FAQSectionProps) => {
  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-primary font-medium mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary/50 border border-border rounded-xl px-6 data-[state=open]:bg-secondary/70 transition-colors animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary font-medium py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
};
