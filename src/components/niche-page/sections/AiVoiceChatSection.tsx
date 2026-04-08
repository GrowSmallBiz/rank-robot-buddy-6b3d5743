import { GlowCard } from "@/components/ui/glow-card";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/services/SectionHeader";
import type { NicheConfig } from "../NicheConfig";

const colorConfig: Record<string, any> = {
  violet: { bg: "bg-violet-500", text: "text-violet-500", border: "border-violet-500/30" },
  cyan: { bg: "bg-cyan-500", text: "text-cyan-500", border: "border-cyan-500/30" },
};

interface AiVoiceChatSectionProps {
  config: NicheConfig;
}

export const AiVoiceChatSection = ({ config }: AiVoiceChatSectionProps) => {
  return (
    <section id="ai-communication" className="py-24 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="AI-Powered"
          title={config.aiVoiceChatSectionHeadline}
          titleHighlight={config.aiVoiceChatHighlight}
          description={config.aiVoiceChatSubheadline}
          as="h3"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {config.aiFeatures.map((feature, i) => {
            const FeatureIcon = feature.icon;
            const colors = colorConfig[feature.color] || colorConfig.violet;
            return (
              <GlowCard key={i} className={`p-8 ${colors.border}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center`}>
                    <FeatureIcon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">{feature.title}</h4>
                </div>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-5 h-5 ${colors.text} shrink-0`} />
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
