import { GlowCard } from "@/components/ui/glow-card";
import { CheckCircle2, Star } from "lucide-react";
import { SectionHeader } from "@/components/services/SectionHeader";
import type { NicheConfig } from "../NicheConfig";

interface ReputationSectionProps {
  config: NicheConfig;
}

export const ReputationSection = ({ config }: ReputationSectionProps) => {
  return (
    <section id="reputation" className="py-24 relative bg-slate-800/40 scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-yellow-500/5" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          subtitle="Growth Tools"
          title={config.reputationHeadline}
          titleHighlight={config.reputationHighlight}
          description={config.reputationSubheadline}
          as="h3"
        />

        {/* Reputation Management */}
        <div className="mb-16">
          <GlowCard className="p-8 border-emerald-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground">We Handle Your Studio's Reputation Management</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  {config.reputationBullets.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted/50 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-4">Smart Review Request Flow</h4>
                <div className="space-y-3">
                  {config.reviewFlowSteps.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold shrink-0">{step.step}</div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{step.title}</div>
                        <div className="text-xs text-muted-foreground">{step.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlowCard>
        </div>

        {/* Gift Cards & Referrals */}
        <div className="grid md:grid-cols-3 gap-8">
          {config.giftAndReferralPrograms.map((program, i) => {
            const ProgramIcon = program.icon;
            return (
              <GlowCard key={i} className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <ProgramIcon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{program.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
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
