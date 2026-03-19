import { ArrowRight, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CaseStudy {
  company: string;
  location: string;
  industry: string;
  challenge: string;
  timeframe: string;
  metrics: {
    label: string;
    before: string;
    after: string;
    improvement: string;
  }[];
  quote?: string;
  quoteName?: string;
  quoteRole?: string;
}

interface CaseStudySectionProps {
  caseStudies: CaseStudy[];
  title?: string;
  subtitle?: string;
  ctaLink?: string;
  ctaText?: string;
}

export const CaseStudySection = ({
  caseStudies,
  title = "Real Results, Real Businesses",
  subtitle = "See how we've helped businesses like yours achieve measurable growth",
  ctaLink = "/free-assessment",
  ctaText = "Get Results Like These"
}: CaseStudySectionProps) => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 section-glow" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden card-hover"
            >
              {/* Header */}
              <div className="bg-gradient-primary p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">
                    Case Study
                  </span>
                  <span className="text-xs text-primary-foreground/60">
                    {study.timeframe}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-primary-foreground mb-1">
                  {study.company}
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  {study.location} • {study.industry}
                </p>
              </div>

              {/* Challenge */}
              <div className="p-6 border-b border-border">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  The Challenge
                </h4>
                <p className="text-foreground">
                  {study.challenge}
                </p>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-muted/30">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Before & After Results
                </h4>
                <div className="space-y-4">
                  {study.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{metric.label}</span>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <TrendingDown className="w-4 h-4 text-destructive" />
                          <span className="text-sm text-muted-foreground line-through">{metric.before}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold text-foreground">{metric.after}</span>
                        </div>
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {metric.improvement}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              {study.quote && (
                <div className="p-6 border-t border-border">
                  <p className="text-foreground italic mb-3">
                    "{study.quote}"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    — {study.quoteName}, {study.quoteRole}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to={ctaLink}>
              {ctaText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
