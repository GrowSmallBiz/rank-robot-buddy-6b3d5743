import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, MapPin, Search, Building, Star, FileText, Users } from "lucide-react";
import localSeoImage from "@/assets/local-seo.png";

const features = [
  {
    title: "Local Keyword Research",
    description: "Identify high-value local search terms that drive nearby customers to your business.",
    icon: Search,
  },
  {
    title: "Google Business Profile Optimization",
    description: "Maximize your GBP presence with complete optimization for local pack rankings.",
    icon: Building,
  },
  {
    title: "Local Citation & Listing Management",
    description: "Build and maintain consistent NAP citations across directories and platforms.",
    icon: FileText,
  },
  {
    title: "On-Page Local SEO Optimization",
    description: "Optimize website content with local signals, location pages, and geo-targeted keywords.",
    icon: MapPin,
  },
  {
    title: "Review & Reputation Management",
    description: "Build and manage your online reputation with strategic review acquisition and response.",
    icon: Star,
  },
  {
    title: "Local Content Creation",
    description: "Develop locally-focused content that resonates with your community and ranks for local searches.",
    icon: Users,
  },
];

const stats = [
  { value: "46%", label: "of Google searches have local intent" },
  { value: "76%", label: "of local searches visit a business within 24 hours" },
  { value: "28%", label: "of local searches result in a purchase" },
];

const LocalSEO = () => {
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
                  <MapPin className="w-4 h-4" />
                  Local SEO Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
                Dominate{" "}
                <span className="text-gradient">Local Search</span>{" "}
                Results
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-up delay-200">
                Attract nearby customers and dominate local search rankings. Our local 
                SEO services optimize your Google Business Profile, listings, and on-page 
                signals to boost local visibility, traffic, and leads.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
                <Button variant="hero" size="xl">
                  Get Started with Local SEO
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-in-right delay-200">
              <div className="relative rounded-2xl overflow-hidden glow-border">
                <img
                  src={localSeoImage}
                  alt="Local SEO map visualization with location pins"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-4xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Complete Local SEO Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to rank in local search and attract customers in your area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default LocalSEO;
