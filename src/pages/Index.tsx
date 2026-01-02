import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ArrowRight, Bot, Search, Globe, MapPin, Link2, BarChart3, TrendingUp, DollarSign, Clock, Shield, CheckCircle2, XCircle } from "lucide-react";

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

      {/* Why Invest in AI SEO Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Why Invest in AI SEO?</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Your Competitors Are Already Being Found.<br />
              <span className="text-gradient">Are You?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For HVAC contractors, med spas, dental practices, chiropractors, and auto repair shops, 
              visibility is everything. When homeowners need emergency repairs or patients search for 
              treatments, they turn to Google—and increasingly, to AI assistants. If your business 
              isn't appearing in both, you're losing high-value customers to competitors who are.
            </p>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                title: "24/7 Lead Generation",
                desc: "Unlike ads that stop when your budget runs out, SEO works around the clock. Your website attracts qualified leads while you focus on running your business.",
                icon: Clock,
              },
              {
                title: "Higher Trust, Higher Tickets",
                desc: "Organic search results command 70% more trust than paid ads. For high-ticket services like HVAC systems or cosmetic procedures, trust directly translates to revenue.",
                icon: Shield,
              },
              {
                title: "Compounding Returns",
                desc: "Every dollar invested in SEO builds lasting authority. Unlike paid ads that disappear instantly, your rankings compound over time—delivering returns for years.",
                icon: TrendingUp,
              },
              {
                title: "AI-Ready Visibility",
                desc: "Patients and homeowners increasingly ask AI for recommendations. Position your practice as the answer AI platforms cite when they search for services like yours.",
                icon: Bot,
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-6 space-y-4 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* SEO vs Paid Ads Comparison */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                SEO vs. Paid Ads: The Numbers Don't Lie
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                For local service businesses, the choice is clear. While paid ads have their place, 
                SEO delivers superior long-term ROI and positions your business for sustainable growth.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* SEO Column */}
              <div className="bg-background border-2 border-primary/30 rounded-2xl p-8 relative animate-fade-up">
                <div className="absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Recommended
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-foreground">SEO & AI SEO</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    "5.3x higher ROI than paid advertising",
                    "Leads cost 61% less than paid channels",
                    "Results compound—rankings build authority over time",
                    "70% of users skip ads, trusting organic results",
                    "Captures AI-generated recommendations",
                    "Works 24/7 without ongoing ad spend",
                    "Builds lasting brand authority and trust",
                    "Higher conversion rates (14.6% vs 1.7% for outbound)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Paid Ads Column */}
              <div className="bg-secondary/30 border border-border rounded-2xl p-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-foreground">Paid Advertising</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    "Traffic stops the moment you stop paying",
                    "Rising costs—home service CPCs up 40% yearly",
                    "Ad fatigue reduces effectiveness over time",
                    "No lasting equity—zero value when ads stop",
                    "Invisible to AI-powered search assistants",
                    "Requires constant budget and management",
                    "Lower trust factor with potential customers",
                    "Competitors can outbid you at any time",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <XCircle className="w-5 h-5 text-muted-foreground/60 shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-border rounded-2xl p-8 text-center animate-fade-up">
              <h4 className="text-xl font-display font-bold text-foreground mb-3">
                The Bottom Line for Local Service Businesses
              </h4>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
                Whether you run a dental practice, med spa, HVAC company, or auto repair shop, your customers 
                are searching online before they call. <strong className="text-foreground">93% of online experiences begin with a search engine.</strong> 
                {" "}With AI platforms like ChatGPT and Gemini now influencing purchase decisions, businesses that invest in 
                both traditional SEO and AI visibility will dominate their local markets—while competitors 
                continue burning budget on ads that disappear overnight.
              </p>
              <Button variant="hero" size="xl">
                Get Your Free AI SEO Assessment
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
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

      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Questions About AI SEO"
        subtitle="Get answers to common questions about our AI-powered SEO services and how they can transform your digital presence."
        faqs={[
          {
            question: "What is AI SEO and how does it differ from traditional SEO?",
            answer: "AI SEO integrates traditional search optimization with Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO). While traditional SEO focuses on ranking in search results, AI SEO ensures your brand is recognized, cited, and recommended by AI platforms like ChatGPT, Gemini, Perplexity, and Claude. It combines technical excellence with entity optimization and structured data to make your content the authoritative source AI systems trust."
          },
          {
            question: "Why do businesses need AI SEO services now?",
            answer: "With the rapid adoption of AI-powered search and assistants, users increasingly get answers directly from AI without clicking through to websites. Businesses that don't optimize for AI visibility risk becoming invisible to a growing segment of their audience. AI SEO ensures your brand remains discoverable and recommended across both traditional search engines and emerging AI platforms."
          },
          {
            question: "What results can I expect from your AI SEO services?",
            answer: "Our clients typically see significant improvements in organic traffic, AI citations, and brand visibility within 3-6 months. Results include higher search rankings, increased appearances in AI-generated answers, improved featured snippet capture, and stronger entity recognition by major AI platforms. We provide detailed reporting on both traditional SEO metrics and AI visibility indicators."
          },
          {
            question: "How do you measure success in AI SEO?",
            answer: "We track a comprehensive set of metrics including traditional SEO KPIs (rankings, traffic, conversions) plus AI-specific indicators like citation frequency in AI responses, entity recognition accuracy, featured snippet ownership, and visibility across AI platforms. Our proprietary monitoring tools track how often and how accurately AI systems reference your brand."
          },
          {
            question: "What's included in your managed AI SEO service?",
            answer: "Our full-service offering includes technical SEO audits and fixes, on-page optimization, content strategy and creation, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), local SEO, link building, and ongoing performance monitoring. We handle everything from schema implementation to entity optimization, ensuring comprehensive visibility across all search and AI touchpoints."
          },
          {
            question: "How long does it take to see results from AI SEO?",
            answer: "Initial improvements in technical health and indexation typically appear within 4-6 weeks. Meaningful ranking improvements and increased AI citations usually develop over 3-6 months. Full optimization and authority building is an ongoing process, with compounding benefits as your entity recognition and content authority strengthen over time."
          },
          {
            question: "Do you work with businesses of all sizes?",
            answer: "Yes, our AI SEO services are designed to scale. We work with growing small businesses, mid-market companies, and enterprises. Our approach is tailored to each client's specific goals, competitive landscape, and resources. Whether you're looking to establish local visibility or dominate a global market, we customize our strategy accordingly."
          },
          {
            question: "How is your approach different from other SEO agencies?",
            answer: "We're pioneers in the AI SEO space, combining deep technical expertise with cutting-edge understanding of how AI systems discover and cite content. While most agencies still focus solely on traditional rankings, we optimize for the full spectrum of search visibility—including AI platforms that are rapidly becoming primary information sources. Our unified approach ensures you're not just ranking, but being actively recommended by AI."
          }
        ]}
      />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
