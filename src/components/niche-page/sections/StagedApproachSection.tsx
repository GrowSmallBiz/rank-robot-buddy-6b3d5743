import type { NicheConfig } from "../NicheConfig";
import { SectionHeader } from "@/components/services/SectionHeader";
import { GlowCard } from "@/components/ui/glow-card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

interface StagedApproachSectionProps {
  config: NicheConfig;
}

const colorMap: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", icon: "text-emerald-500" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", icon: "text-blue-500" },
  orange: { bg: "bg-primary/10", border: "border-primary/30", text: "text-primary", icon: "text-primary" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", icon: "text-purple-500" },
};

export const StagedApproachSection = ({ config }: StagedApproachSectionProps) => {
  if (!config.stagedApproachStages || config.stagedApproachStages.length === 0) return null;

  return (
    <section id="staged-approach" className="py-24 bg-background-alt scroll-mt-24">
      <div className="container mx-auto px-4">
        {config.stagedApproachBadge && (
          <div className="flex justify-center mb-6">
            <Badge variant="outline" className="border-primary/40 text-primary px-4 py-1.5 text-sm font-semibold tracking-wide">
              {config.stagedApproachBadge}
            </Badge>
          </div>
        )}

        <SectionHeader
          title={config.stagedApproachHeadline || "Our Staged Approach"}
          titleHighlight={config.stagedApproachHighlight}
          description={config.stagedApproachSubheadline}
          as="h2"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {config.stagedApproachStages.map((stage, i) => {
            const Icon = stage.icon;
            const colors = colorMap[stage.color] || colorMap.orange;

            return (
              <GlowCard key={i} className="p-8 relative overflow-hidden">
                {/* Stage number badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} ${colors.border} border mb-6`}>
                  <span className={`text-xs font-bold ${colors.text}`}>{stage.stage}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className={`text-xs font-semibold ${colors.text}`}>{stage.label}</span>
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>

                {/* Timeline */}
                <p className="text-sm text-muted-foreground font-medium mb-4">{stage.timeline}</p>

                {/* Services list */}
                <ul className="space-y-2 mb-6">
                  {stage.services.map((service, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${colors.icon}`} />
                      <span className="text-sm text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>

                {/* Unlocks */}
                <div className={`mt-auto pt-4 border-t ${colors.border}`}>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Unlocks</p>
                  <p className={`text-sm font-semibold ${colors.text}`}>{stage.unlocks}</p>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
