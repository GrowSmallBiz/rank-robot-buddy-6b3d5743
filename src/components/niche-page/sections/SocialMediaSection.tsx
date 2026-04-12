import { GlowCard } from "@/components/ui/glow-card";
import { CheckCircle2, Linkedin, Target } from "lucide-react";
import { SectionHeader } from "@/components/services/SectionHeader";
import type { NicheConfig } from "../NicheConfig";

const colorConfig: Record<string, any> = {
  pink: { bg: "bg-pink-500", bgLight: "bg-pink-500/10", text: "text-pink-500", border: "border-pink-500/30" },
  rose: { bg: "bg-rose-500", bgLight: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/30" },
  blue: { bg: "bg-blue-500", bgLight: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30" },
};

interface SocialMediaSectionProps {
  config: NicheConfig;
}

export const SocialMediaSection = ({ config }: SocialMediaSectionProps) => {
  return (
    <section id="social-media" className="py-24 relative bg-background-alt scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          subtitle="Organic Social"
          title={config.socialMediaHeadline}
          titleHighlight={config.socialMediaHighlight}
          description={config.socialMediaSubheadline}
        />

        {/* Educational Note */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Why Primary & Secondary Platforms?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Focus beats scatter.</strong> Primary platforms are where your ideal clients actively search for your genre—invest 80% of your time here.
                Secondary platforms offer supplemental reach or work well for specific campaigns, but spreading too thin dilutes your impact.
                Master 2 platforms before expanding.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Strategy Table */}
        <h3 className="text-xl font-bold text-foreground mb-6 text-center">
          Where We Focus Your Social Presence — By Genre
        </h3>
        <GlowCard className="p-6 overflow-x-auto mb-16">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Genre</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">
                  <div className="flex items-center gap-2">
                    <span>Primary Platforms</span>
                    <span className="text-xs text-muted-foreground font-normal">— Focus 80%</span>
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">
                  <div className="flex items-center gap-2">
                    <span>Secondary Platforms</span>
                    <span className="text-xs text-muted-foreground font-normal">— Test/Campaigns</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {config.socialMediaByGenre.map((genre, i) => {
                const colors = colorConfig[genre.color] || colorConfig.blue;
                return (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className={`py-4 px-4 font-semibold ${colors.text} whitespace-nowrap`}>{genre.genre}</td>
                    <td className="py-4 px-4">
                      <div className="space-y-3">
                        {genre.primary.map((platform, j) => {
                          const PlatformIcon = platform.icon;
                          return (
                            <div key={j} className={`p-3 rounded-lg border ${colors.border} ${colors.bgLight}`}>
                              <div className="flex items-center gap-2 mb-1">
                                <PlatformIcon className={`w-4 h-4 ${colors.text}`} />
                                <span className="font-medium text-foreground text-sm">{platform.name}</span>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${colors.bg} text-white`}>Priority</span>
                              </div>
                              <p className="text-xs text-muted-foreground">{platform.strategy}</p>
                            </div>
                          );
                        })}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-3">
                        {genre.secondary.map((platform, j) => {
                          const PlatformIcon = platform.icon;
                          return (
                            <div key={j} className="p-3 bg-muted/30 rounded-lg border border-border/50">
                              <div className="flex items-center gap-2 mb-1">
                                <PlatformIcon className="w-4 h-4 text-muted-foreground" />
                                <span className="font-medium text-foreground text-sm">{platform.name}</span>
                              </div>
                              <p className="text-xs text-muted-foreground">{platform.strategy}</p>
                            </div>
                          );
                        })}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </GlowCard>

        {/* LinkedIn Outreach (optional) */}
        {config.linkedInOutreachEnabled && config.linkedInOutreach && (
          <div className="bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent rounded-2xl border-2 border-blue-500/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{config.linkedInOutreach.title}</h3>
                <p className="text-sm text-muted-foreground">{config.linkedInOutreach.subtitle}</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">{config.linkedInOutreach.description}</p>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">How It Works</h4>
                <ul className="space-y-2">
                  {config.linkedInOutreach.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Expected Results</h4>
                <div className="grid grid-cols-3 gap-4">
                  {config.linkedInOutreach.stats.map((stat, i) => (
                    <div key={i} className="text-center p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
                      <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-blue-500/30">
              <p className="text-sm text-muted-foreground italic">
                <strong className="text-foreground">Marketing is a numbers game:</strong> You need workflow-driven
                automated processes to send connection requests at scale without violating LinkedIn's policies.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
