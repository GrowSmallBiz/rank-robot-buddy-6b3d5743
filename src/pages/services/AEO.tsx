import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { AnimatedStatsSection } from "@/components/sections/AnimatedStatsSection";
import { baseContactCTA } from "@/config/contactCTA";
import { PlatformAdvantagesSection } from "@/components/sections/PlatformAdvantages";
import { BlogSection, aeoBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { PersonCTA } from "@/components/services";
import { ArrowRight, Bot, MessageSquare, Database, Eye, HelpCircle, Settings, TrendingUp, Clock, Zap } from "lucide-react";
import aeoServiceImage from "@/assets/aeo-service.png";

const aeoStats = [
  { value: "70%", label: "AI Answer Coverage", icon: Bot },
  { value: "5x", label: "Brand Visibility Boost", icon: Eye },
  { value: "24/7", label: "AI Monitoring", icon: Clock },
  { value: "100+", label: "AI Platforms Tracked", icon: Zap },
];

const faqs: FAQItem[] = [
  {
    question: "What is Answer Engine Optimization (AEO)?",
    answer: "AEO is the practice of structuring your content, entities, and technical elements so that AI platforms like ChatGPT, Google AI Overviews, and Perplexity recognize, cite, and surface your brand as the authoritative answer to user queries."
  },
  {
    question: "Why does my business need AEO?",
    answer: "As AI-generated answers increasingly replace traditional search results, AEO ensures your brand maintains visibility, authority, and engagement within AI-driven search experiences. Without AEO, you risk becoming invisible in this new paradigm."
  },
  {
    question: "How is AEO different from traditional SEO?",
    answer: "Traditional SEO focuses on earning high rankings in search results. AEO focuses on being selected and cited by AI systems when they generate answers. Both are now essential for capturing traffic across all search modalities."
  },
  {
    question: "Which AI platforms require AEO optimization?",
    answer: "AEO is crucial for generative AI platforms including ChatGPT, Google AI Overviews, Perplexity, Microsoft Copilot, Gemini, Claude, and voice assistants that rely on large language models."
  },
  {
    question: "What specific AEO services do you provide?",
    answer: "We offer comprehensive AEO services including content optimization for AI, schema and structured data implementation, entity alignment, AI citation tracking, Q&A and snippet creation, technical AI SEO, continuous audits, and performance dashboards."
  },
  {
    question: "How do you measure AI visibility and success?",
    answer: "We track enterprise-grade metrics including AI Share of Voice (how often your brand appears in AI answers), Visibility Score (overall LLM presence), and Sentiment Analysis (tone of AI-generated references). These provide clear insight into your AI performance."
  },
  {
    question: "How quickly can I expect to see AEO results?",
    answer: "Results vary based on your site size and content depth. Continuous AEO optimization ensures your brand remains visible, cited, and authoritative as AI platforms evolve their algorithms and training data."
  },
  {
    question: "Can AEO integrate with my existing SEO strategy?",
    answer: "Yes, AEO complements traditional SEO by ensuring your high-ranking content is also optimized for AI discovery. This dual approach protects your visibility across both traditional search and AI platforms."
  },
];

const features = [
  {
    title: "AEO Content Optimization",
    description: "Transform your content to be recognized and cited by AI platforms like ChatGPT, Google AI Overview, and Perplexity.",
    icon: Bot,
  },
  {
    title: "Schema & Structured Data Implementation",
    description: "Deploy advanced schema markup that helps AI systems understand and reference your content accurately.",
    icon: Database,
  },
  {
    title: "Entity Optimization & Brand Alignment",
    description: "Strengthen your brand's digital identity so AI recognizes you as an authoritative source in your industry.",
    icon: Settings,
  },
  {
    title: "AI Citation & LLM Visibility Tracking",
    description: "Monitor how often AI platforms cite your content and track your visibility across generative models.",
    icon: Eye,
  },
  {
    title: "Q&A & Snippet Creation",
    description: "Create optimized Q&A content and snippetable answers that AI systems prefer to surface.",
    icon: HelpCircle,
  },
  {
    title: "Technical SEO for AI",
    description: "Implement technical optimizations that make your content easily accessible and interpretable by AI crawlers.",
    icon: MessageSquare,
  },
];

const platforms = [
  "ChatGPT",
  "Google AI Overview",
  "Perplexity",
  "Claude",
  "Gemini",
  "Microsoft Copilot",
];

const AEO = () => {
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
                  <Bot className="w-4 h-4" />
                  Answer Engine Optimization
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
                Get Your Brand{" "}
                <span className="text-gradient">In AI Answers First</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-up delay-200">
                Command visibility across AI ecosystems like ChatGPT, Google AI Overviews, 
                and Perplexity. Our AEO service ensures your brand becomes the canonical 
                truth for AI to cite, reference, and promote as the definitive answer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
                <Button variant="hero" size="xl">
                  Get Discovered on AI Platforms
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* AI Platforms */}
              <div className="pt-6 animate-fade-up delay-400">
                <p className="text-sm text-muted-foreground mb-3">Get cited on:</p>
                <div className="flex flex-wrap gap-3">
                  {platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-4 py-2 bg-secondary border border-border rounded-full text-sm text-foreground"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right delay-200">
              <div className="relative rounded-2xl overflow-hidden glow-border">
                <img
                  src={aeoServiceImage}
                  alt="Answer Engine Optimization AI chatbot interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is AEO Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Understanding AEO</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              What is Answer Engine Optimization?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Answer Engine Optimization (AEO) is the practice of optimizing content 
              to be surfaced, cited, and trusted by AI-powered answer engines. As more 
              users turn to AI assistants for information, being the source that AI 
              references becomes critical for brand visibility and authority.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">Our AEO Services</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Comprehensive AEO Strategy
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

      <AnimatedStatsSection stats={aeoStats} columns={4} />

      <PlatformAdvantagesSection variant="compact" serviceType="aeo" />

      <FAQSection
        faqs={faqs}
        subtitle="Learn how Answer Engine Optimization helps your brand get cited by AI."
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about AEO?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's get your brand cited by AI.",
        }}
      />

      {/* Blog Section */}
      <BlogSection 
        posts={aeoBlogPosts}
        title="AEO Insights"
        subtitle="Expert tips for optimizing your content for AI answer engines"
        showViewAll={false}
      />

      <PersonCTA
        title="Ready to Get Your Brand in AI Answers?"
        description="Let's position your brand as the authoritative source AI platforms cite and reference. Start dominating AI search results today."
        sectionClassName="py-12 bg-section-dark"
      />
      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default AEO;
