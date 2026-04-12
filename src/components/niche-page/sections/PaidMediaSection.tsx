import { GlowCard } from "@/components/ui/glow-card";
import { CheckCircle2, Target } from "lucide-react";
import { SectionHeader } from "@/components/services/SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { NicheConfig } from "../NicheConfig";

const colorConfig: Record<string, any> = {
  pink: { bg: "bg-pink-500", bgLight: "bg-pink-500/10", text: "text-pink-500", border: "border-pink-500/30" },
  rose: { bg: "bg-rose-500", bgLight: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/30" },
  blue: { bg: "bg-blue-500", bgLight: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30" },
  violet: { bg: "bg-violet-500", bgLight: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/30" },
  amber: { bg: "bg-amber-500", bgLight: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/30" },
  emerald: { bg: "bg-emerald-500", bgLight: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/30" },
  cyan: { bg: "bg-cyan-500", bgLight: "bg-cyan-500/10", text: "text-cyan-500", border: "border-cyan-500/30" },
  teal: { bg: "bg-teal-500", bgLight: "bg-teal-500/10", text: "text-teal-500", border: "border-teal-500/30" },
};

interface PaidMediaSectionProps {
  config: NicheConfig;
  strategySessionUrl: string;
}

export const PaidMediaSection = ({ config, strategySessionUrl }: PaidMediaSectionProps) => {
  return (
    <section id="paid-media" className="py-24 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Paid Media"
          title={config.paidMediaHeadline}
          titleHighlight={config.paidMediaHighlight}
          description={config.paidMediaSubheadline}
        />

        {/* Ad Creatives Carousel */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Ad Creatives We Design for Your Genre
          </h3>
          <div className="relative px-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {config.adCreatives.map((creative) => (
                  <CarouselItem key={creative.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <GlowCard className="overflow-hidden">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={creative.image}
                          alt={`${creative.genre} ad creative example`}
                          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-4 bg-card">
                        <h4 className="font-bold text-foreground text-lg">{creative.genre}</h4>
                        <p className="text-muted-foreground text-sm mb-3">{creative.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {creative.platforms.map((platform, i) => (
                            <span key={i} className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">{platform}</span>
                          ))}
                        </div>
                      </div>
                    </GlowCard>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>

        {/* Educational Note */}
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent rounded-2xl border border-amber-500/20 p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Why Primary & Secondary Ad Platforms?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Budget allocation matters.</strong> Primary platforms have the highest ROI for your genre—allocate 70-80% of your ad spend here.
                Secondary platforms are for testing, seasonal campaigns, or retargeting. Starting with $500-1,000/month? Focus exclusively on primary platforms until you've optimized those results.
              </p>
            </div>
          </div>
        </div>

        {/* Platform Recommendations Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-6">Where We Run Your Ads — Platform Strategy by Genre</h3>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Genre</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-primary">
                      Primary Platforms
                      <span className="block text-xs font-normal text-muted-foreground mt-0.5">70-80% of budget</span>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-muted-foreground">
                      Secondary Platforms
                      <span className="block text-xs font-normal text-muted-foreground mt-0.5">Testing & retargeting</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {config.paidMediaByGenre.map((genre, i) => {
                    const colors = colorConfig[genre.color] || colorConfig.blue;
                    const GenreIcon = genre.icon;
                    return (
                      <tr key={i} className="hover:bg-muted/20 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center shrink-0`}>
                              <GenreIcon className="w-4 h-4 text-white" />
                            </div>
                            <span className={`font-semibold ${colors.text} text-sm`}>{genre.genre}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-2">
                            {genre.primary.map((platform, j) => (
                              <div key={j} className="flex items-start gap-2">
                                <CheckCircle2 className={`w-4 h-4 ${colors.text} shrink-0 mt-0.5`} />
                                <div>
                                  <span className="font-medium text-foreground text-sm">{platform.name}</span>
                                  <p className="text-xs text-muted-foreground">{platform.reason}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-2">
                            {genre.secondary.map((platform, j) => (
                              <div key={j} className="flex items-start gap-2">
                                <div className="w-4 h-4 rounded-full border border-muted-foreground/50 shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-medium text-muted-foreground text-sm">{platform.name}</span>
                                  <p className="text-xs text-muted-foreground/70">{platform.reason}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Meta Ad Setup */}
        <div className="mb-16">
          <GlowCard className="p-8 bg-gradient-to-br from-blue-950/60 via-slate-900/80 to-blue-950/60 border-blue-500/20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Target className="w-7 h-7 text-blue-400" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">{config.metaAdSetupHeadline}</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">{config.metaAdSetupSubheadline}</p>
              </div>
            </div>
            {/* FIXED Meta ad setup content */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-foreground text-lg">What We Set Up for You</h4>
                <ul className="space-y-2">
                  {["Google Ads account setup and campaign structure", "Keyword research for tree service and lawn care search terms", "Google Local Services Ads (LSA) setup and Google Guarantee verification", "Conversion tracking from click to call to booked job", "Seasonal campaign calendar with pre-peak budget ramps", "Service-specific landing page optimization", "Ad creative copywriting for emergency and seasonal intent", "Monthly performance reporting and optimization"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-foreground text-lg">Landing Page Included</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Every ad campaign includes a custom landing page designed to convert clicks into booked jobs.
                </p>
                <ul className="space-y-2">
                  {["Conversion Landing Page", "Thank You Page", "Development & Layout Only", "Copy Pulled From Existing Site"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlowCard>
        </div>

        {/* Tracking & Retargeting */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            We Set Up Tracking & Retargeting for You
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {config.trackingRetargetingEssentials.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <ItemIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
