import { Link } from "react-router-dom";
import {
  Search, Clock, RefreshCw, Heart, CalendarCheck, ArrowDown, ArrowRight,
  Instagram, Facebook, Globe
} from "lucide-react";
import type { NicheConfig } from "../NicheConfig";

interface RetargetingSectionProps {
  config: NicheConfig;
}

export const RetargetingSection = ({ config }: RetargetingSectionProps) => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-background to-slate-800/40 scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-center mb-4">
            {config.retargetingHeadline}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary italic">{config.retargetingHighlight}</span>
          </h2>

          <h3 className="text-xl md:text-2xl font-display font-medium text-muted-foreground text-center mb-12">
            {config.retargetingSubheadline}
          </h3>

          {/* FIXED 5-step journey */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-primary to-emerald-500 rounded-2xl blur-md opacity-20 animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="relative bg-card border border-primary/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-xs font-semibold shadow-lg shadow-primary/25">
                AI SEO + Retargeting Meta/Google Ads
              </div>

              <div className="relative pt-4 pb-6">
                <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-primary to-emerald-500 rounded-full" />
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-2">
                  {/* Step 1 */}
                  <div className="relative text-center group">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Search className="w-7 h-7 md:w-8 md:h-8 text-blue-500" />
                    </div>
                    <h4 className="font-bold text-foreground text-sm mb-0.5">They Find You</h4>
                    <p className="text-xs text-muted-foreground leading-tight">{config.retargetingStep1Desc || "Search for a dentist, like what they see"}</p>
                  </div>
                  <div className="md:hidden flex justify-center py-1"><ArrowDown className="w-5 h-5 text-muted-foreground/50" /></div>
                  {/* Step 2 */}
                  <div className="relative text-center group">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-500/20 border-2 border-slate-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Clock className="w-7 h-7 md:w-8 md:h-8 text-slate-400" />
                    </div>
                    <h4 className="font-bold text-foreground text-sm mb-0.5">Life Happens</h4>
                    <p className="text-xs text-muted-foreground leading-tight">They leave, get busy, and the moment passes</p>
                  </div>
                  <div className="md:hidden flex justify-center py-1"><ArrowDown className="w-5 h-5 text-muted-foreground/50" /></div>
                  {/* Step 3 */}
                  <div className="relative text-center group">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <RefreshCw className="w-7 h-7 md:w-8 md:h-8 text-purple-500" />
                    </div>
                    <h4 className="font-bold text-foreground text-sm mb-0.5">Your Work Reappears</h4>
                    <p className="text-xs text-muted-foreground leading-tight">Gentle reminders on Instagram, Facebook, Google</p>
                    <div className="flex justify-center gap-1.5 mt-1.5">
                      <Instagram className="w-3.5 h-3.5 text-pink-500" />
                      <Facebook className="w-3.5 h-3.5 text-blue-500" />
                      <Globe className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                  </div>
                  <div className="md:hidden flex justify-center py-1"><ArrowDown className="w-5 h-5 text-muted-foreground/50" /></div>
                  {/* Step 4 */}
                  <div className="relative text-center group">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Heart className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground text-sm mb-0.5">Trust Builds</h4>
                    <p className="text-xs text-muted-foreground leading-tight">Familiarity turns into confidence over time</p>
                  </div>
                  <div className="md:hidden flex justify-center py-1"><ArrowDown className="w-5 h-5 text-muted-foreground/50" /></div>
                  {/* Step 5 */}
                  <div className="relative text-center group">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <CalendarCheck className="w-7 h-7 md:w-8 md:h-8 text-emerald-500" />
                    </div>
                    <h4 className="font-bold text-foreground text-sm mb-0.5">They Book</h4>
                    <p className="text-xs text-muted-foreground leading-tight">When ready, your name feels familiar — not random</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-5" />

              <p className="text-lg md:text-xl font-display leading-relaxed text-center mb-5">
                <span className="text-foreground font-semibold">{config.retargetingDisplayLine || "SEO helps your dental practice show up"}</span>{" "}
                <span className="text-muted-foreground">{config.retargetingDisplaySubline || "when someone is actively looking."}</span>
                <br className="hidden md:block" />
                <span className="text-muted-foreground">But </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500 font-bold italic">retargeting is what keeps the connection alive.</span>
              </p>

              <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mb-5" />

              <div className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-center mb-6">
                {config.retargetingBody.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="flex justify-center">
                <a
                  href="https://lp.growsmallbiz.io/digital-growth-strategy-session"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-primary/25"
                >
                  Schedule Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
