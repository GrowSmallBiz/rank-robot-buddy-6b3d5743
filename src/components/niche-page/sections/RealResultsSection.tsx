import type { NicheConfig } from "../NicheConfig";
import { SectionHeader } from "@/components/services/SectionHeader";
import { GlowCard } from "@/components/ui/glow-card";
import { ArrowRight } from "lucide-react";

interface RealResultsSectionProps {
  config: NicheConfig;
}

export const RealResultsSection = ({ config }: RealResultsSectionProps) => {
  if (!config.realResults || config.realResults.length === 0) return null;

  return (
    <section id="real-results" className="py-24 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Proven Results"
          title={config.realResultsHeadline || "Real Results"}
          description={config.realResultsSubheadline}
          as="h2"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {config.realResults.map((card, i) => (
            <GlowCard key={i} className="overflow-hidden">
              {/* Gradient header */}
              <div className="bg-gradient-to-r from-primary to-primary/70 p-6">
                <p className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider mb-1">
                  {card.campaignType}
                </p>
                <h3 className="text-xl font-bold text-primary-foreground">{card.headline}</h3>
                <p className="text-primary-foreground/60 text-sm mt-1">{card.period}</p>
              </div>

              {/* Metrics grid */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {card.metrics.map((metric, j) => (
                    <div key={j} className="text-center p-3 rounded-lg bg-[hsl(210_45%_14%)] border border-[hsl(188_78%_41%_/_0.2)]">
                      <p className="text-2xl font-black text-primary">{metric.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Body copy */}
                <p className="text-muted-foreground text-sm leading-relaxed">{card.bodyCopy}</p>

                {/* Case study link */}
                {card.caseStudyUrl && (
                  <a
                    href={card.caseStudyUrl}
                    className="inline-flex items-center gap-2 mt-4 text-primary font-medium hover:underline group"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
