import { GlowCard } from "@/components/ui/glow-card";
import { CheckCircle2, X, Check, Zap, Phone, MessageSquare } from "lucide-react";
import { SectionHeader } from "@/components/services/SectionHeader";
import type { NicheConfig } from "../NicheConfig";

interface ComparisonRow {
  human: string;
  ai: string;
}

interface AiVoiceChatSectionProps {
  config: NicheConfig;
}

export const AiVoiceChatSection = ({ config }: AiVoiceChatSectionProps) => {
  const hasExtended = config.aiReceptionistComparison && config.aiReceptionistComparison.length > 0;

  if (!hasExtended) {
    // Fallback: original card layout for other niches
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
              return (
                <GlowCard key={i} className="p-8 border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                      <FeatureIcon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">{feature.title}</h4>
                  </div>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
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
  }

  // Extended layout for tree-lawn-landscaping
  return (
    <section id="ai-communication" className="py-24 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          subtitle="AI-Powered"
          title={config.aiVoiceChatSectionHeadline}
          titleHighlight={config.aiVoiceChatHighlight}
          description={config.aiVoiceChatSubheadline}
          as="h3"
        />

        {/* BLOCK 1 — Comparison Table */}
        <div className="mt-16 space-y-6">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              {config.aiReceptionistComparisonH3}
            </h3>
            <p className="text-muted-foreground mt-4 max-w-4xl mx-auto">
              {config.aiReceptionistComparisonBody}
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse rounded-xl overflow-hidden border border-border">
              <thead>
                <tr>
                  <th className="p-4 text-left font-bold text-destructive bg-destructive/5 border-b-2 border-destructive/20">
                    <span className="flex items-center gap-2">
                      <X className="w-5 h-5" />
                      Human Receptionist
                    </span>
                  </th>
                  <th className="p-4 text-left font-bold text-primary bg-primary/5 border-b-2 border-primary/20">
                    <span className="flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      GrowSmallBiz AI Receptionist
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {config.aiReceptionistComparison!.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-border/50 transition-colors hover:bg-muted/30 ${
                      i % 2 === 0 ? "bg-card/30" : "bg-card/60"
                    }`}
                  >
                    <td className="p-4 text-muted-foreground border-r border-border/30">
                      {row.human}
                    </td>
                    <td className="p-4 text-foreground font-medium">
                      {row.ai}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Highlight Box */}
          {config.aiReceptionistHighlightText && (
            <div className="mt-8 rounded-xl border-2 border-orange-500/30 bg-orange-500/5 p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Zap className="w-5 h-5 text-orange-500" />
              </div>
              <p className="text-foreground leading-relaxed">
                {config.aiReceptionistHighlightText}
              </p>
            </div>
          )}
        </div>

        {/* BLOCK 2 — AI Receptionist Features (image left, features right) */}
        {config.aiVoiceFeatureBullets && (
          <div className="mt-20 grid lg:grid-cols-2 gap-10 items-start">
            <div className="order-1 lg:order-1">
              {config.aiReceptionistImage && (
                <div>
                  <img
                    src={config.aiReceptionistImage}
                    alt="AI Receptionist handling multiple simultaneous calls"
                    className="rounded-xl border border-border w-full"
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                  <p className="text-sm text-muted-foreground mt-3 text-center italic">
                    One AI system. Unlimited simultaneous callers. Zero missed leads.
                  </p>
                </div>
              )}
            </div>
            <div className="order-2 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">
                  24/7 AI Voice Receptionist
                </h3>
              </div>
              <ul className="space-y-4">
                {config.aiVoiceFeatureBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* BLOCK 3 — Website Live Chat Features (features left, image right) */}
        {config.aiChatFeatureBullets && (
          <div className="mt-20 grid lg:grid-cols-2 gap-10 items-start">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">
                  Website Live AI Chat — Always Capturing
                </h3>
              </div>
              <ul className="space-y-4">
                {config.aiChatFeatureBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                    <span className="text-foreground">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              {config.aiChatImage && (
                <div>
                  <img
                    src={config.aiChatImage}
                    alt="Website live AI chat capturing leads 24/7"
                    className="rounded-xl border border-border w-full"
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                  <p className="text-sm text-muted-foreground mt-3 text-center italic">
                    Every website visitor engaged. Every lead captured. No staffing required.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
