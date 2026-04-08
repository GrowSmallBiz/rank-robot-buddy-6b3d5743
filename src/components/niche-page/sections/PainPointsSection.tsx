import { ArrowDown } from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";
import { GeminiIcon, ChatGPTIcon, PerplexityIcon, GrokIcon, CopilotIcon, GoogleAIIcon } from "@/components/icons/AIplatformIcons";
import type { NicheConfig } from "../NicheConfig";

const aiPlatforms = [
  { name: "ChatGPT", icon: ChatGPTIcon },
  { name: "Gemini", icon: GeminiIcon },
  { name: "Perplexity", icon: PerplexityIcon },
  { name: "Grok", icon: GrokIcon },
  { name: "Copilot", icon: CopilotIcon },
  { name: "Google AI", icon: GoogleAIIcon },
];

interface PainPointsSectionProps {
  config: NicheConfig;
}

export const PainPointsSection = ({ config }: PainPointsSectionProps) => {
  return (
    <section id="solutions" className="py-24 relative bg-slate-800/40 scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            {config.painPointsHeadline}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {config.painPointsSubheadline}
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {config.painPoints.map((challenge, i) => {
            const Icon = challenge.icon;
            return (
              <GlowCard key={i} className="overflow-hidden group hover:border-red-500/40 transition-all duration-300">
                {/* Image or AI Logos */}
                {challenge.hasImage && challenge.image ? (
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={challenge.image}
                      alt={challenge.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center backdrop-blur-sm">
                        <Icon className="w-5 h-5 text-red-400" />
                      </div>
                    </div>
                  </div>
                ) : challenge.showAILogos ? (
                  <div className="relative h-40 bg-gradient-to-br from-violet-500/10 via-blue-500/10 to-cyan-500/10 flex items-center justify-center p-4">
                    <div className="grid grid-cols-3 gap-3">
                      {aiPlatforms.map((platform) => (
                        <div key={platform.name} className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded-lg bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/50">
                            <platform.icon className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] text-muted-foreground">{platform.name}</span>
                        </div>
                      ))}
                    </div>
                    <div className="absolute bottom-3 left-4">
                      <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center backdrop-blur-sm">
                        <Icon className="w-5 h-5 text-violet-400" />
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Text Content */}
                <div className="p-5">
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{challenge.description}</p>
                </div>
              </GlowCard>
            );
          })}
        </div>

        {/* Transition */}
        <div className="relative py-8">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-primary to-primary/50" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-primary flex items-center justify-center shadow-lg shadow-primary/30 mb-4">
              <ArrowDown className="w-6 h-6 text-white animate-bounce" />
            </div>
            <div className="bg-card/90 backdrop-blur-sm border border-primary/30 rounded-2xl px-8 py-4 text-center max-w-xl shadow-xl">
              <p className="text-lg font-semibold text-foreground mb-1">
                {config.transitionText.includes("There's a better way") ? (
                  <>Sound familiar? <span className="text-primary">There's a better way.</span></>
                ) : (
                  config.transitionText
                )}
              </p>
              <p className="text-sm text-muted-foreground">{config.transitionSubtext}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
