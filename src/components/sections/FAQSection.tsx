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
  answer: string;
}

export interface ContactCTA {
  title: string;
  description: string;
  tagline: string;
  name: string;
  role: string;
  buttonText: string;
  buttonHref: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  schemaType?: string;
  contactCTA?: ContactCTA;
}

export const FAQSection = ({ 
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
  schemaType = "FAQPage",
  contactCTA
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
    <section className="py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className={`${contactCTA ? 'grid grid-cols-1 lg:grid-cols-3 gap-12' : 'max-w-4xl mx-auto'}`}>
          {/* FAQ Column */}
          <div className={contactCTA ? 'lg:col-span-2' : ''}>
            <div className="text-center lg:text-left mb-12 animate-fade-up">
              <p className="text-primary font-medium mb-4">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                {title}
              </h2>
              {subtitle && (
                <p className="text-muted-foreground max-w-2xl">
                  {subtitle}
                </p>
              )}
            </div>

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
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact CTA Card */}
          {contactCTA && (
            <div className="lg:col-span-1 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="sticky top-24 p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm text-center">
                {/* Avatar with gradient border */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-primary via-orange-400 to-primary">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="text-3xl font-display font-bold text-primary">
                      {contactCTA.name.charAt(0)}
                    </span>
                  </div>
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
                  className="w-full bg-gradient-to-r from-primary to-orange-400 hover:from-primary/90 hover:to-orange-400/90 text-primary-foreground"
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
