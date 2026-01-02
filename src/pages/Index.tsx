import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, Bot, Search, Globe, MapPin, Link2, BarChart3 } from "lucide-react";

import heroImage from "@/assets/hero-seo-analytics.png";
import technicalSeoImage from "@/assets/technical-seo.png";
import onPageSeoImage from "@/assets/on-page-seo.png";
import aeoServiceImage from "@/assets/aeo-service.png";
import geoServiceImage from "@/assets/geo-service.png";
import localSeoImage from "@/assets/local-seo.png";
import linkBuildingImage from "@/assets/link-building.png";

const services = [
  {
    title: "Technical SEO Audits",
    description: "Beyond audits. We fix what's broken, optimize what's slow, and unlock higher rankings with clean, crawlable sites.",
    features: [
      "Full Website Audit — Crawl errors, redirects, duplicates uncovered",
      "Speed & Core Web Vitals — Load times under 2s guaranteed",
      "XML Sitemaps & Schema Markup",
      "Mobile UX & Navigation Optimization",
      "Architecture & Indexation Strategy",
    ],
    href: "/services/technical-seo",
    image: technicalSeoImage,
    icon: BarChart3,
  },
  {
    title: "On-Page SEO",
    description: "Maximize your site's impact with strategic on-page optimization that boosts visibility and drives conversions.",
    features: [
      "Audit & Competitor Gap Analysis",
      "Keyword & Topic Mapping",
      "Pages & Content Optimization",
      "Technical Fixes & Markup",
      "Internal Linking Strategy",
    ],
    href: "/services/on-page-seo",
    image: onPageSeoImage,
    icon: Search,
  },
  {
    title: "Answer Engine Optimization (AEO)",
    description: "Command visibility across AI ecosystems. Ensure your brand becomes the canonical truth for AI to cite.",
    features: [
      "AEO Content Optimization",
      "Schema & Structured Data Implementation",
      "Entity Optimization & Brand Alignment",
      "AI Citation & LLM Visibility Tracking",
      "Q&A & Snippet Creation",
    ],
    href: "/services/aeo",
    image: aeoServiceImage,
    icon: Bot,
  },
  {
    title: "Generative Engine Optimization (GEO)",
    description: "Position your brand as the trusted source AI platforms cite, reference, and elevate above competitors.",
    features: [
      "Entity & Knowledge Graph Optimization",
      "AI-Friendly Content Structuring",
      "Advanced Schema Implementation",
      "Semantic & Contextual Enrichment",
      "E-E-A-T & Digital Authority Development",
    ],
    href: "/services/geo",
    image: geoServiceImage,
    icon: Globe,
  },
  {
    title: "Local SEO Services",
    description: "Dominate local search and attract nearby customers with optimized profiles and local signals.",
    features: [
      "Local Keyword Research",
      "Google Business Profile Optimization",
      "Local Citation & Listing Management",
      "Review & Reputation Management",
      "Local Content Creation",
    ],
    href: "/services/local-seo",
    image: localSeoImage,
    icon: MapPin,
  },
  {
    title: "Link Building Service",
    description: "Scale your brand's visibility with enterprise-grade link building and authoritative backlinks.",
    features: [
      "Backlink Audits & Link Detox",
      "High-Quality Link Building",
      "Digital PR & Media Outreach",
      "Thought Leadership & Guest Posting",
      "Performance Tracking & Reporting",
    ],
    href: "/services/link-building",
    image: linkBuildingImage,
    icon: Link2,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  <Bot className="w-4 h-4" />
                  AI-Powered SEO Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
                Managed AI SEO Services for{" "}
                <span className="text-gradient">Full-Funnel Visibility</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-up delay-200">
                Rank higher, get cited, and be surfaced across AI platforms. 
                Enterprise AI SEO that unites technical SEO, AEO, and GEO to make 
                your brand the authoritative answer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
                <Button variant="hero" size="xl">
                  Start Your AI SEO Strategy
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroOutline" size="xl">
                  View Our Services
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-border animate-fade-up delay-400">
                <p className="text-sm text-muted-foreground mb-4">Trusted by growing businesses</p>
                <div className="flex flex-wrap gap-6 items-center opacity-60">
                  <span className="text-lg font-semibold text-foreground">TechCorp</span>
                  <span className="text-lg font-semibold text-foreground">StartupXYZ</span>
                  <span className="text-lg font-semibold text-foreground">GrowthCo</span>
                  <span className="text-lg font-semibold text-foreground">ScaleUp</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-slide-in-right delay-200">
              <div className="relative rounded-2xl overflow-hidden glow-border">
                <img
                  src={heroImage}
                  alt="AI SEO Analytics Dashboard showing growth metrics and data visualization"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-2xl animate-float">
                <p className="text-2xl font-display font-bold text-gradient">+247%</p>
                <p className="text-sm text-muted-foreground">Avg. Traffic Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* What is AI SEO Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">What is AI SEO?</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              The Future of Search Visibility
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AI SEO combines traditional SEO, Answer Engine Optimization (AEO), and 
              Generative Engine Optimization (GEO) to ensure your content ranks and 
              is cited across AI platforms like ChatGPT, Gemini, and Claude. We prepare 
              your content, entities, and structured data so AI systems interpret and 
              trust your brand as an authoritative source.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Unified Visibility",
                desc: "Rank in search engines and appear in AI-generated answers",
                icon: Globe,
              },
              {
                title: "Entity Optimization",
                desc: "Get your brand clearly recognized and cited by LLMs",
                icon: Bot,
              },
              {
                title: "Content Structuring",
                desc: "Transform content into AI-friendly formats and snippets",
                icon: Search,
              },
              {
                title: "AI Monitoring",
                desc: "Track citations and generative model performance",
                icon: BarChart3,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 space-y-4 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-card" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Comprehensive AI SEO Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From technical audits to AI visibility optimization, we cover every aspect 
              of modern search engine optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.href}
                title={service.title}
                description={service.description}
                features={service.features}
                href={service.href}
                image={service.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
