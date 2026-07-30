import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { NicheConfig } from "../NicheConfig";

interface WebsiteDesignSectionProps {
  config: NicheConfig;
  strategySessionUrl: string;
}

export const WebsiteDesignSection = ({ config, strategySessionUrl }: WebsiteDesignSectionProps) => {
  return (
    <section id="website-design" className="py-24 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">{config.websiteDesignBadge}</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
            {config.websiteDesignHeadline} {config.websiteDesignHighlight}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">{config.websiteDesignSubheadline}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <img
              src={config.websiteDesignImage}
              alt={config.websiteDesignImageAlt ?? `${config.websiteDesignBadge} example`}
              width={600} height={400}
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-foreground mb-4">
              {config.websiteDesignFeatureHeadline}
            </h3>
            <p className="text-muted-foreground mb-6">{config.websiteDesignFeatureBody}</p>
            <ul className="space-y-3">
              {config.websiteDesignBullets.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
