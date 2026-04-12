import type { NicheConfig } from "../NicheConfig";
import { SectionHeader } from "@/components/services/SectionHeader";
import { GlowCard } from "@/components/ui/glow-card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Search, MessageSquare } from "lucide-react";

interface FourLaneSearchSectionProps {
  config: NicheConfig;
}

const laneColorMap: Record<string, { bg: string; border: string; icon: string }> = {
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", icon: "text-emerald-500" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", icon: "text-blue-500" },
  orange: { bg: "bg-primary/10", border: "border-primary/30", icon: "text-primary" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", icon: "text-purple-500" },
  amber: { bg: "bg-amber-500/10", border: "border-amber-500/30", icon: "text-amber-500" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", icon: "text-cyan-500" },
};

export const FourLaneSearchSection = ({ config }: FourLaneSearchSectionProps) => {
  if (!config.fourLaneLanes || config.fourLaneLanes.length === 0) return null;

  const hasComparison = config.searchComparisonPanels && config.searchComparisonPanels.length > 0;

  return (
    <section id="four-lane-search" className="py-24 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        {config.fourLaneBadge && (
          <div className="flex justify-center mb-6">
            <Badge variant="outline" className="border-primary/40 text-primary px-4 py-1.5 text-sm font-semibold tracking-wide">
              {config.fourLaneBadge}
            </Badge>
          </div>
        )}

        <SectionHeader
          title={config.fourLaneHeadline || "Four-Lane Search Dominance"}
          titleHighlight={config.fourLaneHighlight}
          description={config.fourLaneSubheadline}
          as="h2"
        />

        {/* Lane cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {config.fourLaneLanes.map((lane, i) => {
            const Icon = lane.icon;
            const colors = laneColorMap[lane.color] || laneColorMap.blue;

            return (
              <GlowCard key={i} className="p-6">
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{lane.lane}</h3>
                <p className="text-sm font-medium text-primary mb-2">{lane.headline}</p>
                <p className="text-sm text-muted-foreground mb-4">{lane.description}</p>
                <ul className="space-y-2">
                  {lane.howWeDoIt.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${colors.icon}`} />
                      <span className="text-xs text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            );
          })}
        </div>

        {/* Search comparison visual */}
        {hasComparison && (
          <div className="mt-16">
            {config.searchComparisonTitle && (
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground">{config.searchComparisonTitle}</h3>
                {config.searchComparisonSubtitle && (
                  <p className="text-muted-foreground mt-2">{config.searchComparisonSubtitle}</p>
                )}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {config.searchComparisonPanels!.map((panel, i) => {
                const isTraditional = panel.type === "traditional";

                return (
                  <div
                    key={i}
                    className="rounded-2xl border-2 border-border/50 bg-card overflow-hidden"
                  >
                    {/* Panel header */}
                    <div className={`px-6 py-4 border-b border-border/50 ${isTraditional ? "bg-muted/50" : "bg-primary/5"}`}>
                      <div className="flex items-center gap-3">
                        {isTraditional ? (
                          <Search className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <MessageSquare className="w-5 h-5 text-primary" />
                        )}
                        <span className="font-semibold text-foreground">{panel.label}</span>
                      </div>
                    </div>

                    {/* Search query bar */}
                    <div className="px-6 py-3 bg-muted/30 border-b border-border/30">
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border/50">
                        <Search className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground italic">{panel.query}</span>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="px-6 py-5 space-y-3">
                      {panel.items.map((item, j) => (
                        <div key={j} className={`flex items-start gap-3 ${isTraditional ? "" : ""}`}>
                          {isTraditional ? (
                            <>
                              <div className="w-2 h-2 rounded-full bg-muted-foreground/40 mt-2 shrink-0" />
                              <p className="text-sm text-foreground">{item}</p>
                            </>
                          ) : (
                            <p className="text-sm text-foreground leading-relaxed">{item}</p>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Caption */}
                    <div className="px-6 py-3 border-t border-border/30 bg-muted/20">
                      <p className="text-xs text-muted-foreground italic">{panel.caption}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
