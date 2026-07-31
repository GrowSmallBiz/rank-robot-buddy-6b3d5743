import type { NicheConfig } from "../NicheConfig";

import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/glow-card";
import { FileText } from "lucide-react";

interface HowItWorksSectionProps {
  config: NicheConfig;
}

export const HowItWorksSection = ({ config }: HowItWorksSectionProps) => {
  const H2 = config.flattenHeadings ? "h3" : "h2";
  const H3 = config.deepNesting ? "h4" : "h3";
  if (!config.processSteps || config.processSteps.length === 0) return null;

  return (
    <section id="how-it-works" className="py-24 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        {config.howItWorksBadge && (
          <div className="flex justify-center mb-6">
            <Badge variant="outline" className="text-primary border-primary/30 px-4 py-1.5 text-sm">
              {config.howItWorksBadge}
            </Badge>
          </div>
        )}
        {config.howItWorksHeadline && (
          <div className="text-center mb-10 animate-fade-up">
            <H2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
              {[config.howItWorksHeadline, config.howItWorksHighlight].filter(Boolean).join(" ")}
            </H2>
          </div>
        )}

        <div className="mt-16 space-y-16">
          {config.processSteps.map((step, i) => {
            const StepIcon = step.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step number + icon */}
                <div className="flex-shrink-0 flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                    <StepIcon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <span className="text-4xl font-black text-primary/20">{step.step}</span>
                </div>

                {/* Content */}
                <GlowCard className="flex-1 p-8">
                  <H3 className="text-xl font-bold text-foreground mb-3">{step.title}</H3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground font-medium">{step.deliverable}</p>
                  </div>
                </GlowCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
