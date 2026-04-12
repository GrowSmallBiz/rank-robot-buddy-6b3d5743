import type { NicheConfig } from "../NicheConfig";
import { SectionHeader } from "@/components/services/SectionHeader";
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
          <SectionHeader
            title={config.heroExtendedHeadline}
            titleHighlight={config.heroExtendedHighlight}
            as="h2"
          />
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {config.heroExtended.map((item, i) => {
            const Icon = item.icon;
            return (
              <GlowCard key={i} className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.headline}</h3>
                <p className="text-muted-foreground text-sm">{item.body}</p>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
