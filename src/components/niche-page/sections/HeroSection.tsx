import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { NicheConfig } from "../NicheConfig";

interface HeroSectionProps {
  config: NicheConfig;
  strategySessionUrl: string;
}

export const HeroSection = ({ config, strategySessionUrl }: HeroSectionProps) => {
  const BadgeIcon = config.badgeIcon;

  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={config.heroImage}
          alt={config.h1Line1}
          width={1920} height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
            <BadgeIcon className="w-4 h-4" />
            {config.badgeText}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
            {config.h1Line1}{" "}
            <span className="text-gradient">{config.h1Highlight}</span>
            {config.h1Line2 && <>{" "}{config.h1Line2}</>}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-200 max-w-2xl mx-auto">
            {config.heroSubheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Button variant="hero" size="lg" asChild>
              <a href={strategySessionUrl}>
                {config.primaryCtaLabel}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={config.secondaryCtaAnchor}>
                {config.secondaryCtaLabel}
              </a>
            </Button>
          </div>
          <p className="text-sm text-primary font-medium mt-4 animate-fade-up delay-300">
            No commitment. No pressure. Just a clear path forward for your business.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up delay-400">
            {config.statsBar.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
