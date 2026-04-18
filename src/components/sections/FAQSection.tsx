import { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface FAQItem {
  question: string;
  /**
   * Answer text. When the string contains HTML markup (e.g. <strong>, <a>),
   * it will be rendered via dangerouslySetInnerHTML AND used byte-for-byte
   * as the JSON-LD acceptedAnswer text — preserving rendered/schema parity
   * for FAQPage rich results.
   */
  answer: string;
}

// Detect whether an answer contains HTML markup that must be rendered as such.
const isHtmlAnswer = (s: string) => /<\/?(strong|em|a|br|b|i|code)\b/i.test(s);

export interface ContactCTA {
  title: string;
  description: string;
  tagline: string;
  name: string;
  role: string;
  buttonText: string;
  buttonHref: string;
  image?: string;
}

interface FAQSectionProps {
  title?: ReactNode;
  subtitle?: string;
  faqs: FAQItem[];
  schemaType?: string;
  contactCTA?: ContactCTA;
  /** Optional stable @id URI for the FAQPage entity (e.g. for entity-graph cross-referencing). */
  schemaId?: string;
}

export const FAQSection = ({ 
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
  schemaType = "FAQPage",
  contactCTA,
  schemaId,
}: FAQSectionProps) => {
  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    ...(schemaId && { "@id": schemaId }),
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
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
      {/* Subtle glow effects */}
      <div className="absolute top-0 right-1/4 w-80 h-48 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-48 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Centered Section Header */}
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

        <div className={`${contactCTA ? 'grid grid-cols-1 lg:grid-cols-3 gap-12 items-start' : 'max-w-4xl mx-auto'}`}>
          {/* FAQ Column */}
          <div className={contactCTA ? 'lg:col-span-2' : ''}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-black border rounded-xl px-6 transition-all animate-fade-up hover:shadow-[0_0_60px_rgba(255,127,80,0.5)] data-[state=open]:shadow-[0_0_60px_rgba(255,127,80,0.5)]"
                  style={{ animationDelay: `${index * 0.05}s`, borderColor: '#ff7f50ff' }}
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary font-medium py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed [&_strong]:text-foreground [&_strong]:font-semibold [&_a]:text-primary [&_a]:underline [&_a:hover]:text-primary/80">
                    {isHtmlAnswer(faq.answer) ? (
                      <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    ) : (
                      faq.answer
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact CTA Card */}
          {contactCTA && (
            <div className="lg:col-span-1 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="sticky top-24 p-8 rounded-2xl border-2 border-primary/60 bg-card/30 backdrop-blur-sm text-center shadow-[0_0_30px_rgba(255,127,80,0.15)]">
                {/* Avatar with gradient border */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-primary via-orange-400 to-primary">
                  {contactCTA.image ? (
                    <img 
                      src={contactCTA.image} 
                      alt={contactCTA.name}
                      width={80} height={80}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <span className="text-3xl font-display font-bold text-primary">
                        {contactCTA.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  {contactCTA.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {contactCTA.description}
                </p>
                
                <p className="text-foreground font-medium mb-6">
                  {contactCTA.tagline}
                </p>

                {/* Signature */}
                <div className="mb-6">
                  <p className="font-cursive text-2xl text-foreground italic">{contactCTA.name}</p>
                  <p className="text-sm text-muted-foreground">{contactCTA.role}</p>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-[hsl(199_89%_48%)] to-primary text-white rounded-full border-none hover:shadow-[0_0_30px_rgba(255,127,80,0.5),0_0_60px_rgba(255,127,80,0.3)] hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to={contactCTA.buttonHref}>
                    {contactCTA.buttonText}
                    <ArrowUpRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
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
