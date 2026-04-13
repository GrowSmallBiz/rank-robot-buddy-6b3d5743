import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { baseContactCTA } from "@/config/contactCTA";
import type { NicheConfig } from "../NicheConfig";

const colorStyles: Record<string, { bg: string; border: string; text: string; activeBg: string }> = {
  emerald: { bg: 'rgba(16, 185, 129, 0.1)', border: 'rgba(16, 185, 129, 0.4)', text: 'rgb(52, 211, 153)', activeBg: 'rgb(16, 185, 129)' },
  rose: { bg: 'rgba(244, 63, 94, 0.1)', border: 'rgba(244, 63, 94, 0.4)', text: 'rgb(251, 113, 133)', activeBg: 'rgb(244, 63, 94)' },
  amber: { bg: 'rgba(245, 158, 11, 0.1)', border: 'rgba(245, 158, 11, 0.4)', text: 'rgb(251, 191, 36)', activeBg: 'rgb(245, 158, 11)' },
  blue: { bg: 'rgba(59, 130, 246, 0.1)', border: 'rgba(59, 130, 246, 0.4)', text: 'rgb(96, 165, 250)', activeBg: 'rgb(59, 130, 246)' },
  sky: { bg: 'rgba(14, 165, 233, 0.1)', border: 'rgba(14, 165, 233, 0.4)', text: 'rgb(56, 189, 248)', activeBg: 'rgb(14, 165, 233)' },
  violet: { bg: 'rgba(139, 92, 246, 0.1)', border: 'rgba(139, 92, 246, 0.4)', text: 'rgb(167, 139, 250)', activeBg: 'rgb(139, 92, 246)' },
};

interface FaqSectionProps {
  config: NicheConfig;
}

export const FaqSection = ({ config }: FaqSectionProps) => {
  const allFaqs = config.faqCategories.flatMap((cat) => cat.faqs);

  return (
    <section id="faq" className="py-24 lg:py-32 relative overflow-hidden scroll-mt-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
      <div className="absolute top-0 right-1/4 w-80 h-48 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-48 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-primary font-medium mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {config.faqHeadline}{" "}
            {config.faqHighlight && (
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">
                {config.faqHighlight}
              </span>
            )}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{config.faqSubheadline}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <Tabs defaultValue={config.faqCategories[0]?.id} className="w-full">
              <TabsList className="w-full flex flex-wrap justify-start gap-2 bg-transparent h-auto mb-8 p-0">
                {config.faqCategories.map((category) => {
                  const IconComponent = category.icon;
                  const colors = colorStyles[category.color] || colorStyles.emerald;
                  return (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300"
                      style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderWidth: '1px', borderStyle: 'solid', borderColor: colors.border, color: colors.text }}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="text-sm font-medium">{category.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {config.faqCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, index) => (
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
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="sticky top-24 p-8 rounded-2xl border-2 border-primary/60 bg-card/30 backdrop-blur-sm text-center shadow-[0_0_30px_rgba(255,127,80,0.15)]">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-primary via-orange-400 to-primary">
                <img src={baseContactCTA.image} alt={baseContactCTA.name} className="w-full h-full rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-4">{config.faqCtaCard.headline}</h3>
              <p className="text-muted-foreground mb-4">{config.faqCtaCard.body}</p>
              <p className="text-foreground font-medium mb-6">{config.faqCtaCard.signoff}</p>
              <div className="mb-6">
                <p className="font-cursive text-2xl text-foreground italic">{baseContactCTA.name}</p>
                <p className="text-sm text-muted-foreground">{baseContactCTA.role}</p>
              </div>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-[hsl(199_89%_48%)] to-primary text-white rounded-full border-none hover:shadow-[0_0_30px_rgba(255,127,80,0.5),0_0_60px_rgba(255,127,80,0.3)] hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="https://lp.growsmallbiz.io/digital-growth-strategy-session" target="_blank" rel="noopener noreferrer">
                  Schedule Strategy Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
    </section>
  );
};
