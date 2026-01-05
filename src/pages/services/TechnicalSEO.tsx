import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { AnimatedStatsSection } from "@/components/sections/AnimatedStatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { baseContactCTA } from "@/config/contactCTA";
import { PlatformAdvantagesSection } from "@/components/sections/PlatformAdvantages";
import { BlogSection, technicalSeoBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { PersonCTA } from "@/components/services";
import { ArrowRight, Check, Zap, Shield, Gauge, Code, Smartphone, Globe, Clock, TrendingUp } from "lucide-react";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";

const technicalSeoTestimonials = [
  {
    quote: "Our Core Web Vitals went from red to green in 3 weeks. Page load time dropped from 8 seconds to under 2. Traffic increased 156%.",
    author: "James Rodriguez",
    role: "CTO",
    company: "TechFlow Solutions",
  },
  {
    quote: "They found indexing issues we'd missed for years. After the technical audit, our organic traffic jumped 89% in just 2 months.",
    author: "Amanda Foster",
    role: "Marketing Director",
    company: "Enterprise Software Inc.",
  },
  {
    quote: "Our site speed improvements alone brought in an extra $50K/month in conversions. Technical SEO is no longer optional.",
    author: "David Park",
    role: "E-commerce Director",
    company: "Luxury Home Goods",
  },
];

import technicalSeoImage from "@/assets/technical-seo.png";

const technicalSeoStats = [
  { value: "2s", label: "Target Load Time", icon: Gauge },
  { value: "90+", label: "Core Web Vitals Score", icon: TrendingUp },
  { value: "100%", label: "Mobile Optimized", icon: Smartphone },
  { value: "24hr", label: "Issue Response Time", icon: Clock },
];

const faqs: FAQItem[] = [
  {
    question: "What does technical SEO include?",
    answer: "Technical SEO encompasses a wide range of backend optimizations that affect your website's search performance. This includes meta tag optimization, site architecture improvements, redirect management, URL structure refinement, image optimization, structured data implementation, content security policies, internal linking strategies, JavaScript rendering, hreflang tags for international sites, and caching configurations."
  },
  {
    question: "Why is technical SEO critical for my website?",
    answer: "Google incorporates page experience and Core Web Vitals as ranking signals in its algorithm. A poorly performing website can significantly undermine your entire marketing strategy. We strongly recommend ensuring your site meets Google's performance standards to maximize organic traffic potential. Beyond rankings, technical SEO improvements also enhance conversion rates and user satisfaction."
  },
  {
    question: "How do you determine which technical fixes I need?",
    answer: "Our team conducts a comprehensive website audit to identify all backend issues affecting your site's performance. Your dedicated account manager will review the audit findings with you and recommend specific optimizations based on priority and impact. If you already know your problem areas, you can request targeted technical SEO services directly."
  },
  {
    question: "What if I need services beyond what's listed here?",
    answer: "Contact our team to discuss custom pricing options and specialized technical SEO services tailored to your specific needs. We can also schedule a consultation to explore exactly what your website requires."
  },
  {
    question: "Can technical SEO be combined with other SEO services?",
    answer: "Absolutely. Our managed SEO campaigns are ideal for businesses seeking a comprehensive approach. We integrate technical SEO with link building, content creation, and other optimization strategies to help you achieve your complete SEO objectives."
  },
  {
    question: "Do you offer additional SEO services?",
    answer: "Yes, we're a full-service SEO agency providing link building, content creation, on-page optimization, local SEO, and more. Share your needs with us, and we'll connect you with the right specialist for your project."
  },
];

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

      <WhyChooseSection 
        title="Your Technical SEO Partner"
        description="We fix the hidden issues that hold your site back—speed, indexing, Core Web Vitals, and more—so your content can rank where it deserves."
        items={[
          { title: "Deep Technical Audits", description: "We uncover every crawl error, redirect chain, duplicate page, and indexing issue holding your site back.", icon: Shield },
          { title: "Speed Optimization Experts", description: "We guarantee sub-2-second load times on mobile with proven Core Web Vitals optimization strategies.", icon: Gauge },
          { title: "Mobile-First Approach", description: "Every fix we implement is optimized for Google's mobile-first indexing to maximize your rankings.", icon: Smartphone },
          { title: "Schema & Structured Data", description: "We implement advanced schema markup that helps search engines understand and feature your content.", icon: Code },
          { title: "Transparent Reporting", description: "See exactly what we fixed and how it improved your site performance with clear, actionable reports.", icon: TrendingUp },
          { title: "Fast Issue Response", description: "Critical issues get addressed within 24 hours to minimize any impact on your search visibility.", icon: Clock },
        ]}
      />

      <AnimatedStatsSection 
        stats={[
          { value: "98%", label: "E-commerce Traffic Increase", icon: TrendingUp },
          { value: "113%", label: "Conversion Rate Lift", icon: Gauge },
          { value: "10x", label: "Organic Sessions Growth", icon: Zap },
          { value: "2s", label: "Target Page Load Time", icon: Clock },
        ]} 
        columns={4}
        title="Real Results, Real Impact"
        description="See the transformation our clients experience"
      />

      <TestimonialsSection 
        testimonials={technicalSeoTestimonials}
        title="Technical SEO Success Stories"
        subtitle="See how businesses transformed their site performance and rankings"
      />

      <PlatformAdvantagesSection variant="compact" serviceType="technical" />

      <FAQSection
        faqs={faqs}
        subtitle="Get answers to common questions about technical SEO services."
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Technical SEO?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's fix your technical SEO together.",
        }}
      />

      {/* Blog Section */}
      <BlogSection 
        posts={technicalSeoBlogPosts}
        title="Technical SEO Insights"
        subtitle="Expert tips to improve your website's technical foundation"
        showViewAll={false}
      />

      <PersonCTA
        title="Ready for Technical SEO That Performs?"
        description="We fix what's broken, optimize what's slow, and unlock higher rankings with Core Web Vitals-ready sites."
        sectionClassName="py-12 bg-section-dark"
      />
      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default TechnicalSEO;
