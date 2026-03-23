import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { AnimatedStatsSection } from "@/components/sections/AnimatedStatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { baseContactCTA } from "@/config/contactCTA";
import { PlatformAdvantagesSection } from "@/components/sections/PlatformAdvantages";
import { BlogSection, geoBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import { ArrowRight, Globe, Network, Code, Sparkles, Award, Brain, TrendingUp, Eye, Clock, Zap } from "lucide-react";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";

const geoTestimonials = [
  {
    quote: "ChatGPT now recommends our law firm for personal injury cases in our city. This is the future of discovery and we're ahead of it.",
    author: "Robert Martinez",
    role: "Managing Partner",
    company: "Martinez Legal Group",
  },
  {
    quote: "We're getting cited by AI assistants as the go-to source for luxury home renovations. GEO has been a game-changer.",
    author: "Jennifer Walsh",
    role: "CEO",
    company: "Elite Home Remodeling",
  },
  {
    quote: "Our entity visibility in AI platforms went from 0 to being cited in 60% of relevant queries. Incredible ROI.",
    author: "Dr. Michael Kim",
    role: "Practice Owner",
    company: "Kim Dermatology",
  },
];

import geoServiceImage from "@/assets/geo-service.png";

const geoStats = [
  { value: "60%", label: "AI Citation Rate", icon: Brain },
  { value: "4x", label: "Entity Visibility Growth", icon: TrendingUp },
  { value: "100%", label: "Knowledge Graph Coverage", icon: Network },
  { value: "90", label: "Days to Impact", icon: Clock },
];

const faqs: FAQItem[] = [
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer: "GEO is the practice of optimizing your content, entities, and technical signals so AI platforms like ChatGPT, Gemini, and Claude can recognize, reference, and surface your brand as an authoritative answer source."
  },
  {
    question: "Why is GEO important for my business?",
    answer: "As AI-generated responses increasingly replace traditional search clicks, GEO ensures your brand remains visible, properly cited, and trusted across generative AI platforms. Without GEO, your content may never appear in AI-generated answers."
  },
  {
    question: "How does GEO differ from traditional SEO?",
    answer: "Traditional SEO focuses on rankings in search engine results pages. GEO focuses on AI citations, entity recognition, and generative discovery—capturing new sources of visibility that didn't exist before large language models."
  },
  {
    question: "Which AI platforms benefit from GEO?",
    answer: "GEO optimization matters for all major generative AI platforms including ChatGPT, Gemini, Claude, Microsoft Copilot, Perplexity, and other LLM-powered tools and assistants."
  },
  {
    question: "What GEO services do you offer?",
    answer: "Our GEO services include entity optimization, AI-friendly content structuring, advanced schema implementation, E-E-A-T enhancement, AI citation tracking, semantic enrichment, continuous audits, and performance dashboards."
  },
  {
    question: "How is GEO ROI measured?",
    answer: "We track AI citations, entity visibility, platform-specific references, Share of Voice, Visibility Score, Sentiment analysis, rankings, and search volume to provide enterprise-grade metrics that executives can trust."
  },
  {
    question: "Can GEO work for multi-location or global businesses?",
    answer: "Yes. Our GEO workflows scale across multiple domains, brands, regions, and languages, ensuring consistent entity optimization and AI visibility across all your markets."
  },
  {
    question: "How does GEO support content marketing and PR?",
    answer: "By ensuring your brand and content entities are properly structured, authoritative, and easily cited, GEO amplifies the impact of your PR campaigns and content marketing investments."
  },
];

const features = [
  {
    title: "Entity & Knowledge Graph Optimization",
    description: "Build and strengthen your brand's presence in knowledge graphs to increase AI recognition and citations.",
    icon: Network,
  },
  {
    title: "AI-Friendly Content Structuring",
    description: "Transform content into formats that generative AI models prefer to surface and reference in their outputs.",
    icon: Code,
  },
  {
    title: "Advanced Schema Implementation",
    description: "Deploy sophisticated schema markup that communicates complex entity relationships to AI systems.",
    icon: Brain,
  },
  {
    title: "Semantic & Contextual Enrichment",
    description: "Enhance content with semantic signals that help AI understand context and meaning more accurately.",
    icon: Sparkles,
  },
  {
    title: "E-E-A-T & Digital Authority Development",
    description: "Build Experience, Expertise, Authoritativeness, and Trustworthiness signals that AI systems recognize.",
    icon: Award,
  },
  {
    title: "LLM Training Data Optimization",
    description: "Position your content to be included in future AI training datasets for long-term visibility.",
    icon: Globe,
  },
];

const GEO = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Generative Engine Optimization (GEO) Services | GrowSmallBiz</title>
        <meta name="description" content="Optimize your brand for AI-generated search results. Our GEO services ensure visibility across ChatGPT, Perplexity, Google SGE, and other generative platforms." />
      </Head>
      <ServiceJsonLd
        serviceName="Generative Engine Optimization (GEO)"
        serviceType="Generative Engine Optimization"
        description="Get your brand cited in ChatGPT, Gemini, Perplexity, and AI-powered search results."
        url="/services/geo"
        breadcrumbs={[
          { name: "Services", url: "/services/managed-ai-seo" },
          { name: "GEO", url: "/services/geo" },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  <Globe className="w-4 h-4" />
                  Generative Engine Optimization
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
                Shape the Answers{" "}
                <span className="text-gradient">AI Delivers</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-up delay-200">
                Claim your spot in the AI answer box. Our GEO service positions your 
                brand as the trusted source AI platforms cite, reference, and elevate 
                above competitors in generative responses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
                <Button variant="hero" size="xl">
                  Get Cited By AI Chatbots
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-in-right delay-200">
              <div className="relative rounded-2xl overflow-hidden glow-border">
                <img
                  src={geoServiceImage}
                  alt="Generative Engine Optimization knowledge graph visualization"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is GEO Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Understanding GEO</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              What is Generative Engine Optimization?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Generative Engine Optimization (GEO) focuses on optimizing your digital 
              presence for large language models (LLMs) and generative AI systems. 
              Unlike traditional SEO, GEO ensures your brand is recognized, referenced, 
              and recommended when AI generates responses to user queries.
            </p>
          </div>

          {/* GEO vs SEO */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-secondary/50 border border-border rounded-xl p-8 animate-fade-up delay-100">
              <h3 className="font-display font-semibold text-foreground mb-4">Traditional SEO</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Optimizes for search engine crawlers</li>
                <li>• Focuses on keyword rankings</li>
                <li>• Targets SERP positions</li>
                <li>• Measures clicks and traffic</li>
              </ul>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 animate-fade-up delay-200">
              <h3 className="font-display font-semibold text-primary mb-4">Generative Engine Optimization</h3>
              <ul className="space-y-3 text-foreground">
                <li>• Optimizes for AI understanding</li>
                <li>• Focuses on entity recognition</li>
                <li>• Targets AI citations & mentions</li>
                <li>• Measures AI visibility & authority</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Our GEO Services</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Future-Proof Your Brand for AI
            </h2>
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

      <WhyChooseSection 
        title="Why Choose GrowSmallBiz for Generative Engine Optimization"
        subtitle="Your Generative AI Partner"
        description="We optimize your brand's digital presence for AI platforms like ChatGPT, Gemini, and Claude—ensuring you're cited and recommended in AI-generated answers."
        items={[
          { title: "AI-First Expertise", description: "We specialize in the new frontier of search—optimizing for large language models and generative AI platforms.", icon: Brain },
          { title: "Entity Optimization", description: "We strengthen your brand's digital identity so AI systems recognize you as an authoritative source.", icon: Network },
          { title: "Citation Tracking", description: "We monitor how often AI platforms cite your content and track your visibility across generative models.", icon: Eye },
          { title: "E-E-A-T Enhancement", description: "We boost your Experience, Expertise, Authority, and Trust signals that AI platforms use for recommendations.", icon: Award },
          { title: "Semantic Enrichment", description: "We structure your content semantically so AI can accurately understand and reference your expertise.", icon: Globe },
          { title: "Future-Proof Strategy", description: "Stay ahead as AI evolves with continuous optimization and platform-specific strategies.", icon: TrendingUp },
        ]}
      />

      <AnimatedStatsSection stats={geoStats} columns={4} />

      <TestimonialsSection 
        testimonials={geoTestimonials}
        title="GEO Success Stories"
        subtitle="See how businesses are winning in AI-powered search"
      />

      <CaseStudySection
        caseStudies={[
          {
            company: "Martinez Family Law",
            location: "Austin, TX",
            industry: "Legal Services",
            challenge: "Not appearing in AI-generated search results despite strong traditional SEO.",
            timeframe: "4 months",
            metrics: [
              { label: "AI Platform Citations", before: "0", after: "34", improvement: "+34" },
              { label: "ChatGPT Mentions", before: "Never", after: "Frequent", improvement: "Cited" },
              { label: "AI-Referred Leads", before: "0/mo", after: "18/mo", improvement: "+18" },
            ],
          },
          {
            company: "TechFlow Solutions",
            location: "Seattle, WA",
            industry: "B2B SaaS",
            challenge: "Competitors being recommended by AI while brand was invisible.",
            timeframe: "5 months",
            metrics: [
              { label: "Knowledge Graph Presence", before: "None", after: "Established", improvement: "Present" },
              { label: "LLM Brand Mentions", before: "2%", after: "47%", improvement: "+2,250%" },
              { label: "Organic Demo Requests", before: "15/mo", after: "62/mo", improvement: "+313%" },
            ],
          },
        ]}
        title="GEO Case Studies"
        subtitle="How businesses are dominating AI-powered search"
      />

      <PlatformAdvantagesSection variant="compact" serviceType="geo" />

      <FAQSection
        faqs={faqs}
        subtitle="Everything you need to know about Generative Engine Optimization."
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about GEO?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's optimize for AI engines together.",
        }}
      />

      {/* Blog Section */}
      <BlogSection 
        posts={geoBlogPosts}
        title="GEO Insights"
        subtitle="Expert tips for optimizing your content for generative AI"
        showViewAll={false}
      />

      <CardCTA
        title="Ready to Shape the Answers AI Delivers?"
        description="Position your brand as the trusted source AI platforms cite and recommend. Future-proof your visibility in generative search."
      />
      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default GEO;
