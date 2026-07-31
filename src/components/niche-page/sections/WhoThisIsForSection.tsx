import type { NicheConfig } from "../NicheConfig";

import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/glow-card";
import { CheckCircle2, XCircle } from "lucide-react";

interface WhoThisIsForSectionProps {
  config: NicheConfig;
}

export const WhoThisIsForSection = ({ config }: WhoThisIsForSectionProps) => {
  const H2 = config.flattenHeadings ? "h3" : "h2";
  const H3 = config.deepNesting ? "h4" : "h3";
  if (!config.strongFitItems || config.strongFitItems.length === 0) return null;

  return (
    <section id="who-this-is-for" className="py-24 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        {config.whoThisIsForBadge && (
          <div className="flex justify-center mb-6">
            <Badge variant="outline" className="text-primary border-primary/30 px-4 py-1.5 text-sm">
              {config.whoThisIsForBadge}
            </Badge>
          </div>
        )}
        {config.whoThisIsForHeadline && (
          <div className="text-center mb-10 animate-fade-up">
            <H2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
              {[config.whoThisIsForHeadline, config.whoThisIsForHighlight].filter(Boolean).join(" ")}
            </H2>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Strong Fit */}
          <GlowCard className="p-8 border-green-500/20">
            <H3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              {config.strongFitLabel || "Strong Fit"}
            </H3>
            <ul className="space-y-4">
              {config.strongFitItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </GlowCard>

          {/* Not a Fit */}
          {config.notFitItems && config.notFitItems.length > 0 && (
            <GlowCard className="p-8 border-red-500/20">
              <H3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-500" />
                {config.notFitLabel || "Not the Right Fit"}
              </H3>
              <ul className="space-y-4">
                {config.notFitItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>
          )}
        </div>
      </div>
    </section>
  );
};
