import type { NicheConfig } from "../NicheConfig";

import { GlowCard } from "@/components/ui/glow-card";

interface HeroExtendedSectionProps {
  config: NicheConfig;
}

export const HeroExtendedSection = ({ config }: HeroExtendedSectionProps) => {
  if (!config.heroExtended || config.heroExtended.length === 0) return null;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {config.heroExtendedHeadline && (
          <div className="text-center mb-10 animate-fade-up">
            <h2 className="section-title">
              {config.heroExtendedHighlight && config.heroExtendedHeadline?.includes(config.heroExtendedHighlight)
                ? <>
                    {config.heroExtendedHeadline.split(config.heroExtendedHighlight)[0]}
                    <span className="text-transparent bg-clip-text bg-gradient-primary italic">
                      {config.heroExtendedHighlight}
                    </span>
                    {config.heroExtendedHeadline.split(config.heroExtendedHighlight)[1]}
                  </>
                : config.heroExtendedHeadline}
            </h2>
          </div>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {config.heroExtended.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="feature-card-teal text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.headline}</h3>
                <p className="text-muted-foreground text-sm">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
