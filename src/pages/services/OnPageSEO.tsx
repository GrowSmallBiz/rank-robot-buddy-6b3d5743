import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { AnimatedStatsSection } from "@/components/sections/AnimatedStatsSection";
import { baseContactCTA } from "@/config/contactCTA";
import { PlatformAdvantagesSection } from "@/components/sections/PlatformAdvantages";
import { BlogSection, onPageSeoBlogPosts } from "@/components/sections/BlogSection";
import { PersonCTA } from "@/components/services";
import { ArrowRight, Check, FileText, Target, Link2, Code, Search, TrendingUp, Eye, Clock } from "lucide-react";
import onPageSeoImage from "@/assets/on-page-seo.png";

const onPageSeoStats = [
  { value: "40%", label: "Avg. Traffic Increase", icon: TrendingUp },
  { value: "2x", label: "Click-Through Rate Boost", icon: Eye },
  { value: "90", label: "Days to See Results", icon: Clock },
  { value: "100+", label: "Pages Optimized Monthly", icon: FileText },
];

const faqs: FAQItem[] = [
  {
    question: "What exactly is on-page SEO?",
    answer: "On-page SEO involves optimizing elements within your web pages—including content, titles, meta descriptions, headings, and HTML markup—to improve search visibility and user engagement at scale."
  },
  {
    question: "Why should I invest in on-page SEO?",
    answer: "On-page SEO ensures search engines can properly understand and index your content while providing users with the best possible experience. Even exceptional content will underperform without proper optimization techniques applied."
  },
  {
    question: "How does on-page SEO differ from technical SEO?",
    answer: "On-page SEO concentrates on content and individual page elements. Technical SEO addresses site-wide performance factors like loading speed, crawlability, security protocols, and server configurations."
  },
  {
    question: "What types of schema markup do you implement?",
    answer: "We deploy various schema types including Article, FAQ, Product, Local Business, Breadcrumb, Review, and other structured data formats appropriate for your specific pages and business model."
  },
  {
    question: "How do you handle duplicate content issues?",
    answer: "We perform thorough duplicate content audits, implement canonical tags correctly, set up proper redirects, and consolidate content where needed to preserve and maximize your site's authority."
  },
  {
    question: "What metrics do you track to measure success?",
    answer: "We monitor keyword rankings, organic traffic, click-through rates, time on page, bounce rates, and conversions. Monthly reports include a prioritized 90-day roadmap with observed impact and strategic recommendations."
  },
  {
    question: "Can on-page SEO work alongside link building?",
    answer: "Absolutely. Well-optimized pages create a strong foundation that link building efforts can amplify, resulting in more powerful and sustainable ranking improvements."
  },
];

const features = [
  {
    title: "Audit & Competitor Gap Analysis",
    description: "Deep-dive analysis of your current content performance and competitor strategies to identify high-impact opportunities.",
    icon: Search,
  },
  {
    title: "Keyword & Topic Mapping",
    description: "Strategic keyword research and topic clustering that aligns with user intent and business objectives.",
    icon: Target,
  },
  {
    title: "Pages & Content Optimization",
    description: "Comprehensive optimization of titles, meta descriptions, headers, and body content for maximum search visibility.",
    icon: FileText,
  },
  {
    title: "Technical Fixes & Markup",
    description: "Implementation of structured data, canonical tags, and technical on-page elements that boost rankings.",
    icon: Code,
  },
  {
    title: "Internal Linking Strategy",
    description: "Strategic internal link architecture that distributes page authority and improves crawlability.",
    icon: Link2,
  },
];

const process = [
  {
    step: "01",
    title: "Content Audit",
    description: "We analyze every page on your site to identify optimization opportunities and content gaps.",
  },
  {
    step: "02",
    title: "Keyword Research",
    description: "Deep keyword analysis to find high-value terms your audience is actively searching for.",
  },
  {
    step: "03",
    title: "Optimization Plan",
    description: "Custom roadmap prioritizing quick wins and long-term strategic improvements.",
  },
  {
    step: "04",
    title: "Implementation",
    description: "Expert execution of on-page optimizations across your entire website.",
  },
  {
    step: "05",
    title: "Performance Tracking",
    description: "Ongoing monitoring and refinement to maximize ranking improvements.",
  },
];

const OnPageSEO = () => {
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
                  <FileText className="w-4 h-4" />
                  On-Page SEO Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
                On-Page SEO Engineered for{" "}
                <span className="text-gradient">Business Growth</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-up delay-200">
                Maximize your site's impact with strategic on-page optimization. 
                We enhance content and page structure at scale to boost visibility, 
                improve user experience, and drive more conversions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
                <Button variant="hero" size="xl">
                  Optimize Your On-Page SEO
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-in-right delay-200">
              <div className="relative rounded-2xl overflow-hidden glow-border">
                <img
                  src={onPageSeoImage}
                  alt="On-page SEO content optimization visualization"
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
            <p className="text-primary font-medium mb-4">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Strategic On-Page Optimization
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every element on your page matters. We optimize comprehensively 
              to ensure maximum search engine visibility and user engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="ghl-card rounded-xl p-8 space-y-4 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="ghl-icon">
                  <feature.icon className="w-6 h-6 text-white" />
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

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              How We Optimize Your Pages
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 mb-8 last:mb-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground font-display">
                      {item.step}
                    </span>
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedStatsSection stats={onPageSeoStats} columns={4} />

      <PlatformAdvantagesSection variant="compact" serviceType="onpage" />

      <FAQSection
        faqs={faqs}
        subtitle="Common questions about our on-page SEO services and approach."
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about On-Page SEO?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's optimize your content together.",
        }}
      />

      {/* Blog Section */}
      <BlogSection 
        posts={onPageSeoBlogPosts}
        title="On-Page SEO Insights"
        subtitle="Expert tips to optimize your content for search engines"
        showViewAll={false}
      />

      <PersonCTA
        title="Ready to Maximize Your Content's Impact?"
        description="Strategic on-page optimization that boosts visibility, improves user experience, and drives more conversions."
        sectionClassName="py-12 bg-section-dark"
      />
      <Footer />
    </div>
  );
};

export default OnPageSEO;
