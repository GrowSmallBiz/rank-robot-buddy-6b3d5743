import { Check, X } from "lucide-react";

const comparisons = [
  {
    feature: "AI-Powered Analysis",
    traditional: false,
    growsmallbiz: true,
  },
  {
    feature: "Real-time Ranking Monitoring",
    traditional: false,
    growsmallbiz: true,
  },
  {
    feature: "Answer Engine Optimization",
    traditional: false,
    growsmallbiz: true,
  },
  {
    feature: "Generative AI Visibility",
    traditional: false,
    growsmallbiz: true,
  },
  {
    feature: "Technical SEO Audits",
    traditional: true,
    growsmallbiz: true,
  },
  {
    feature: "Content Optimization",
    traditional: true,
    growsmallbiz: true,
  },
  {
    feature: "Core Web Vitals Optimization",
    traditional: "Limited",
    growsmallbiz: true,
  },
  {
    feature: "Entity & Knowledge Graph",
    traditional: false,
    growsmallbiz: true,
  },
];

export const ComparisonSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-medium mb-4">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Traditional SEO vs{" "}
            <span className="text-gradient">AI-Powered SEO</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how our AI-powered approach outperforms traditional SEO methods
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl overflow-hidden animate-fade-up delay-200">
            {/* Header */}
            <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
              <div className="p-6 font-medium text-foreground">Feature</div>
              <div className="p-6 text-center font-medium text-muted-foreground border-x border-border">
                Traditional SEO
              </div>
              <div className="p-6 text-center font-medium text-primary">
                GrowSmallBiz AI
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-3 border-b border-border last:border-b-0 hover:bg-secondary/30 transition-colors"
              >
                <div className="p-6 text-foreground">{row.feature}</div>
                <div className="p-6 flex justify-center items-center border-x border-border">
                  {row.traditional === true ? (
                    <Check className="w-5 h-5 text-muted-foreground" />
                  ) : row.traditional === false ? (
                    <X className="w-5 h-5 text-muted-foreground/50" />
                  ) : (
                    <span className="text-sm text-muted-foreground">{row.traditional}</span>
                  )}
                </div>
                <div className="p-6 flex justify-center items-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
