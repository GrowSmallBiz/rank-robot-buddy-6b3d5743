import type { NicheConfig } from "../NicheConfig";
import { SectionHeader } from "@/components/services/SectionHeader";
import { GlowCard } from "@/components/ui/glow-card";
import { ArrowRight, Trophy } from "lucide-react";

interface CampaignResultsCardsSectionProps {
  config: NicheConfig;
}

export const CampaignResultsCardsSection = ({ config }: CampaignResultsCardsSectionProps) => {
  if (!config.campaignResultsCards || config.campaignResultsCards.length === 0) return null;

  return (
    <section id="campaign-results" className="py-24 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={config.campaignResultsCardsHeadline || "Campaign Results"}
          as="h2"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {config.campaignResultsCards.map((card, i) => (
            <GlowCard key={i} className="overflow-hidden">
              {/* Gradient header */}
              <div className="bg-gradient-to-r from-primary to-primary/70 p-5">
                <h3 className="text-lg font-bold text-primary-foreground">{card.title}</h3>
                <p className="text-primary-foreground/60 text-sm mt-1">{card.channel}</p>
              </div>

              {/* Metrics */}
              <div className="p-5">
                <ul className="space-y-3">
                  {card.metrics.map((metric, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-foreground text-sm">{metric}</span>
                    </li>
                  ))}
                </ul>

                {/* Optional highlight badge */}
                {card.highlight && (
                  <div className="mt-4 flex items-center gap-2 p-2 rounded-lg bg-primary/5 border border-primary/10">
                    <Trophy className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold text-primary">{card.highlight}</span>
                  </div>
                )}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
