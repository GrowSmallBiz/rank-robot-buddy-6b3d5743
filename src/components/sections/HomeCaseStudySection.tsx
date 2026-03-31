import { ArrowRight, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface MetricItem {
  label: string;
  value: string;
  isPositive?: boolean;
}

interface ResultGroup {
  title: string;
  metrics: MetricItem[];
}

interface OverallItem {
  text: string;
}

interface CampaignCard {
  title: string;
  subtitle: string;
  challenge: string;
  resultGroups: ResultGroup[];
  overallImpact: OverallItem[];
}

const campaigns: CampaignCard[] = [
  {
    title: "HVAC Growth",
    subtitle: "PPC + AI SEO Campaign",
    challenge: "Needed more qualified leads, lower acquisition costs, and stronger local visibility.",
    resultGroups: [
      {
        title: "Paid Ads Impact",
        metrics: [
          { label: "CTR", value: "+50.23%", isPositive: true },
          { label: "Conversions", value: "+83%", isPositive: true },
          { label: "CPA", value: "-41%", isPositive: true },
        ],
      },
      {
        title: "AI SEO Impact",
        metrics: [
          { label: "Phone Calls", value: "+1395%", isPositive: true },
          { label: "GBP Website Actions", value: "+520%", isPositive: true },
          { label: "Search Impressions", value: "+91.47%", isPositive: true },
        ],
      },
    ],
    overallImpact: [
      { text: "More qualified inbound leads" },
      { text: "Stronger local search visibility" },
      { text: "Lower acquisition costs" },
    ],
  },
  {
    title: "Roofing Growth",
    subtitle: "PPC + AI SEO Campaign",
    challenge: "Needed stronger lead flow from paid ads and better organic visibility in a competitive home service market.",
    resultGroups: [
      {
        title: "Paid Ads Impact",
        metrics: [
          { label: "Conversions", value: "+93.3%", isPositive: true },
          { label: "Cost Per Conversion", value: "-48.9%", isPositive: true },
          { label: "Conversion Rate", value: "+123.4%", isPositive: true },
        ],
      },
      {
        title: "AI SEO Impact",
        metrics: [
          { label: "Organic Conversions", value: "+26%", isPositive: true },
          { label: "Searches", value: "+76%", isPositive: true },
          { label: "GBP Views", value: "+127%", isPositive: true },
        ],
      },
    ],
    overallImpact: [
      { text: "Increased lead volume" },
      { text: "Improved campaign efficiency" },
      { text: "Better organic visibility" },
    ],
  },
  {
    title: "Home Remodeling Growth",
    subtitle: "SEO + Lead Growth Campaign",
    challenge: "Needed better search visibility, more conversion actions, and stronger local market presence.",
    resultGroups: [
      {
        title: "Paid / Lead Growth Impact",
        metrics: [
          { label: "Total Conversions", value: "+183.33%", isPositive: true },
          { label: "Phone Calls", value: "+29.41%", isPositive: true },
          { label: "Cost Per Lead", value: "-28.07%", isPositive: true },
        ],
      },
      {
        title: "AI SEO Impact",
        metrics: [
          { label: "Goal Completions", value: "+366.67%", isPositive: true },
          { label: "Website Clicks", value: "+382.11%", isPositive: true },
          { label: "Organic Traffic", value: "+393.3%", isPositive: true },
        ],
      },
    ],
    overallImpact: [
      { text: "More qualified inquiries" },
      { text: "Stronger organic engagement" },
      { text: "More conversion opportunities" },
    ],
  },
];

export const HomeCaseStudySection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 section-glow" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Real Results Across Home Service Campaigns
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            See how paid ads and AI SEO work together to generate more leads, improve local visibility, and lower acquisition costs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-primary p-6">
                <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">
                  Campaign Results
                </span>
                <h3 className="text-xl font-display font-bold text-primary-foreground mt-2 mb-1">
                  {campaign.title}
                </h3>
                <p className="text-sm text-primary-foreground/70">
                  {campaign.subtitle}
                </p>
              </div>

              {/* Challenge */}
              <div className="p-5 border-b border-border">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  The Challenge
                </h4>
                <p className="text-sm text-foreground leading-relaxed">
                  {campaign.challenge}
                </p>
              </div>

              {/* Result Groups */}
              <div className="flex-1">
                {campaign.resultGroups.map((group, gIndex) => (
                  <div
                    key={gIndex}
                    className="p-5 border-b border-border"
                  >
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {group.title}
                    </h4>
                    <div className="space-y-2.5">
                      {group.metrics.map((metric, mIndex) => (
                        <div key={mIndex} className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{metric.label}</span>
                          <span
                            className={`text-sm font-bold px-2.5 py-0.5 rounded-full ${
                              metric.value.startsWith("-")
                                ? "text-emerald-400 bg-emerald-400/10"
                                : "text-primary bg-primary/10"
                            }`}
                          >
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Overall Impact */}
                <div className="p-5">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Overall Impact
                  </h4>
                  <div className="space-y-2">
                    {campaign.overallImpact.map((item, iIndex) => (
                      <div key={iIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-sm text-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact/">
              See How We Can Grow Your Business
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
