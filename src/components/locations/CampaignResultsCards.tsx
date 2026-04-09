import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export interface CampaignCard {
  title: string;
  subtitle: string;
  metrics: string[];
  link: string;
}

interface CampaignResultsCardsProps {
  cards: CampaignCard[];
}

export const CampaignResultsCards = ({ cards }: CampaignResultsCardsProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-card border border-border rounded-2xl overflow-hidden"
        >
          <div className="bg-gradient-primary p-5">
            <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">
              Campaign Results
            </span>
            <h4 className="text-lg font-display font-bold text-primary-foreground mt-2 mb-1">
              {card.title}
            </h4>
            <p className="text-xs text-primary-foreground/70">{card.subtitle}</p>
          </div>
          <div className="p-5">
            <div className="space-y-3 mb-5">
              {card.metrics.map((metric, mi) => (
                <div key={mi} className="flex items-start gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/85">{metric}</span>
                </div>
              ))}
            </div>
            <Link
              to={card.link}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              View Case Studies →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
