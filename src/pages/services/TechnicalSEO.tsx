import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, Check, Zap, Shield, Gauge, Code, Smartphone, Globe } from "lucide-react";
import technicalSeoImage from "@/assets/technical-seo.png";

const features = [
  {
    title: "Full Website Audit",
    description: "Crawl errors, redirects, duplicates — everything uncovered. We leave no stone unturned in identifying technical issues holding back your rankings.",
    icon: Shield,
  },
  {
    title: "Speed & Core Web Vitals",
    description: "Load times under 2 seconds on mobile, guaranteed. We optimize every element for lightning-fast performance that Google rewards.",
    icon: Gauge,
  },
  {
    title: "XML Sitemaps & Schema",
    description: "Structured data that Google actually reads and understands. Proper implementation ensures your content gets indexed correctly.",
    icon: Code,
  },
  {
    title: "Mobile UX & Navigation",
    description: "Fast, intuitive, revenue-driving mobile experience. We ensure your site performs flawlessly across all devices.",
    icon: Smartphone,
  },
  {
    title: "Architecture & Indexation",
    description: "Optimize site structure and scale SEO impact. Clean architecture helps search engines crawl and understand your content.",
    icon: Globe,
  },
  {
    title: "Performance Monitoring",
    description: "Real-time tracking of technical health metrics. Stay ahead of issues before they impact your rankings.",
    icon: Zap,
  },
];

const benefits = [
  "Comprehensive crawl analysis identifying all technical issues",
  "Core Web Vitals optimization for better user experience",
  "Mobile-first indexing compliance",
  "Schema markup implementation for rich snippets",
  "Site speed optimization and caching strategies",
  "Security audit and HTTPS implementation",
  "Duplicate content resolution",
  "URL structure optimization",
];

const TechnicalSEO = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  Technical SEO Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
                Beyond Audits.{" "}
                <span className="text-gradient">Technical SEO That Performs.</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-up delay-200">
                We go beyond audits. We fix what's broken, optimize what's slow, 
                and unlock higher rankings with clean, crawlable, Core Web Vitals–ready sites.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
                <Button variant="hero" size="xl">
                  Get Your Technical SEO Audit
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground animate-fade-up delay-400">
                Actionable insights. No fluff. No obligation.
              </p>
            </div>

            <div className="relative animate-slide-in-right delay-200">
              <div className="relative rounded-2xl overflow-hidden glow-border">
                <img
                  src={technicalSeoImage}
                  alt="Technical SEO optimization dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Precision Tools</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Flawless Technical SEO
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Track every detail of your site's health in real time — from speed to 
              crawlability — and keep your SEO performance flawless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-secondary/50 border border-border rounded-xl p-8 space-y-4 card-hover animate-fade-up"
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <p className="text-primary font-medium">Why Technical SEO Matters</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Build a Foundation for{" "}
                <span className="text-gradient">Sustainable Growth</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Technical SEO is the backbone of your online presence. Without a 
                solid technical foundation, even the best content won't rank. 
                Our comprehensive approach ensures search engines can efficiently 
                crawl, index, and rank your pages.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 animate-fade-up delay-200">
              <h3 className="font-display font-semibold text-foreground mb-6">
                What's Included
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Real Results, Real Impact
            </h2>
            <p className="text-muted-foreground">See the transformation our clients experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: "98%", label: "E-commerce traffic increase within months" },
              { value: "113%", label: "Conversion rate lift post speed optimization" },
              { value: "10x", label: "Organic sessions after architecture overhaul" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-secondary/50 border border-border rounded-xl animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default TechnicalSEO;
