import { Zap, Brain, Gauge, Eye, MapPin, Rocket, Clock, CheckCircle } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface PlatformFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

// Full features for homepage section
export const platformFeatures: PlatformFeature[] = [
  {
    title: "AI-Powered Automation",
    description: "Our intelligent platform handles repetitive SEO tasks automatically—fixing technical issues, optimizing content, and building links—while you focus on running your business. You stay in control with approval workflows for every major change.",
    icon: Zap,
  },
  {
    title: "Smart Business Intelligence",
    description: "Our AI learns everything about your industry, competitors, and customers. It builds a comprehensive understanding of your business to create content and optimizations that resonate with your specific audience.",
    icon: Brain,
  },
  {
    title: "Faster Search Engine Discovery",
    description: "Get found by Google faster with our proprietary technology that accelerates how quickly search engines discover and index your new content—often reducing wait times from weeks to days.",
    icon: Gauge,
  },
  {
    title: "Rapid Content Distribution",
    description: "Your optimized content spreads across the web through our network of authority sites, building backlinks and brand mentions that traditional agencies take months to achieve.",
    icon: Rocket,
  },
  {
    title: "AI Visibility Tracking",
    description: "Monitor how your business appears in AI-powered search tools like ChatGPT, Gemini, and Perplexity. We track when and how AI platforms recommend your services to potential customers.",
    icon: Eye,
  },
  {
    title: "Local Business Profile Mastery",
    description: "Dominate Google Maps and local search with automated profile optimization, review management, and local citation building across hundreds of directories—all managed from one platform.",
    icon: MapPin,
  },
];

// Compact features for service pages - mapped by relevance
export const servicePlatformFeatures = {
  technical: [
    {
      title: "Automated Issue Detection & Fixes",
      description: "Our AI continuously monitors your site for technical problems and can fix common issues automatically—with your approval before any changes go live.",
      icon: Zap,
    },
    {
      title: "Faster Google Discovery",
      description: "Our technology accelerates how quickly Google finds and indexes your pages, getting your fixes reflected in search results faster.",
      icon: Gauge,
    },
  ],
  onpage: [
    {
      title: "Smart Content Optimization",
      description: "AI-powered analysis identifies exactly what your pages need to rank higher, with automated implementation and approval workflows.",
      icon: Brain,
    },
    {
      title: "Continuous Improvement",
      description: "Our platform automatically monitors and refines your on-page elements as search algorithms and competitor strategies evolve.",
      icon: Zap,
    },
  ],
  aeo: [
    {
      title: "AI Visibility Tracking",
      description: "See exactly when and how AI platforms like ChatGPT and Gemini recommend your business to potential customers.",
      icon: Eye,
    },
    {
      title: "Smart Content Structuring",
      description: "Our AI automatically formats your content to be understood and cited by AI search assistants.",
      icon: Brain,
    },
  ],
  geo: [
    {
      title: "Entity Intelligence",
      description: "Our platform builds and strengthens your brand's digital identity so AI systems recognize you as an authority in your field.",
      icon: Brain,
    },
    {
      title: "AI Citation Monitoring",
      description: "Track when AI platforms mention and recommend your business, with detailed analytics on your AI visibility performance.",
      icon: Eye,
    },
  ],
  local: [
    {
      title: "Local Profile Automation",
      description: "Manage your Google Business Profile and 200+ local directories from one dashboard with AI-powered optimization suggestions.",
      icon: MapPin,
    },
    {
      title: "Review Management at Scale",
      description: "Automated review monitoring, response suggestions, and reputation tracking across all platforms.",
      icon: CheckCircle,
    },
  ],
  linkbuilding: [
    {
      title: "Accelerated Authority Building",
      description: "Our network and AI-powered outreach secure high-quality backlinks faster than traditional manual approaches.",
      icon: Rocket,
    },
    {
      title: "Smart Opportunity Detection",
      description: "AI continuously identifies new link building opportunities based on your industry, competitors, and content.",
      icon: Brain,
    },
  ],
};

interface PlatformAdvantagesSectionProps {
  variant?: "full" | "compact";
  serviceType?: keyof typeof servicePlatformFeatures;
}

export const PlatformAdvantagesSection = ({
  variant = "full",
  serviceType,
}: PlatformAdvantagesSectionProps) => {
  const features = variant === "full" 
    ? platformFeatures 
    : serviceType 
      ? servicePlatformFeatures[serviceType] 
      : [];

  if (features.length === 0) return null;

  if (variant === "compact") {
    return (
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 animate-fade-up">
            <p className="text-primary font-medium mb-2">Powered by AI</p>
            <h3 className="text-2xl font-display font-bold text-foreground">
              Why We Deliver Results Faster
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 bg-background border border-border rounded-xl p-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Full version for homepage
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
          <p className="text-primary font-medium mb-4">Our AI-First Advantage</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 bg-gradient-heading bg-clip-text text-transparent">
            Why GrowSmallBiz Delivers SEO Results 10x Faster
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Traditional SEO agencies rely on manual processes that take months to show results. 
            Our AI-powered platform automates the tedious work while you maintain full control 
            over every decision. The result? Faster rankings, more leads, and a competitive 
            advantage your competitors can't match.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 space-y-4 card-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Differentiators */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-border rounded-2xl p-8 md:p-12 max-w-5xl mx-auto animate-fade-up">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display font-bold text-foreground mb-2">You Stay in Control</h4>
              <p className="text-sm text-muted-foreground">
                AI handles the work, but you approve every major change before it goes live
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display font-bold text-foreground mb-2">Results in Weeks, Not Months</h4>
              <p className="text-sm text-muted-foreground">
                Automation accelerates every step of the SEO process
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display font-bold text-foreground mb-2">Continuous Optimization</h4>
              <p className="text-sm text-muted-foreground">
                AI monitors and improves your SEO 24/7, not just during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformAdvantagesSection;
