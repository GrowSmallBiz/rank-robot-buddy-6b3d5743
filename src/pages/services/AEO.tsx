import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SectionHeader } from "@/components/services/SectionHeader";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { baseContactCTA } from "@/config/contactCTA";
import { Link } from "react-router-dom";
import {
  Bot,
  ArrowRight,
  MessageCircleQuestion,
  Target,
  Search,
  FileText,
  Layers,
  Zap,
  CheckCircle2,
  Home,
  Heart,
  Scale,
  Dumbbell,
  Eye,
  Shield,
  Users,
  BarChart3,
  RefreshCw,
  Globe,
  Sparkles,
  BookOpen,
  ExternalLink,
} from "lucide-react";

const PRIMARY_CTA_URL = "https://lp.growsmallbiz.io/digital-growth-strategy-session?utm_source=website&utm_medium=aeo&utm_campaign=strategy-session";
const SECONDARY_CTA_URL = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page?utm_source=website&utm_medium=aeo&utm_campaign=free-seo-audit";

const aeoServices = [
  {
    icon: Search,
    title: "Service-Specific Question Mapping",
    description: "We research and map the real questions your prospects are asking — organized by service, intent, and buying stage.",
  },
  {
    icon: FileText,
    title: "Direct-Answer Content Formatting",
    description: "Content is structured so search engines can extract clear, concise answers directly from your pages.",
  },
  {
    icon: MessageCircleQuestion,
    title: "FAQ Optimization & Placement",
    description: "Strategic FAQ sections built with proper schema markup and positioned for maximum search visibility.",
  },
  {
    icon: Layers,
    title: "Semantic Answer Blocks",
    description: "Structured content blocks that connect related questions, topics, and entities to strengthen topical depth.",
  },
  {
    icon: Target,
    title: "Intent-Based Answer Creation",
    description: "Each answer is crafted around a specific user intent — informational, comparative, or transactional — to match how people search.",
  },
  {
    icon: Eye,
    title: "Featured Snippet Targeting",
    description: "Content formatted and optimized to earn featured snippet placements for high-value queries in your service area.",
  },
  {
    icon: Globe,
    title: "Structured Response Formatting",
    description: "Answers follow structured formatting patterns that search engines and AI systems prefer when surfacing direct results.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Question Coverage Expansion",
    description: "Continuous identification of new questions emerging in your market, keeping your answer coverage current and competitive.",
  },
];

const useCases = [
  {
    icon: Home,
    title: "Home Services",
    description: "Answering urgent service questions — costs, timelines, availability — before the customer picks up the phone.",
  },
  {
    icon: Heart,
    title: "Med Spas & Aesthetic Practices",
    description: "Answering treatment, pricing, and expectation-based questions that drive consultation bookings.",
  },
  {
    icon: Scale,
    title: "Legal & Financial Professionals",
    description: "Answering trust-sensitive informational questions that establish credibility before the first conversation.",
  },
  {
    icon: Dumbbell,
    title: "Fitness, Wellness & Healthcare",
    description: "Answering service, condition, and appointment-related questions that reduce friction and build confidence.",
  },
];

const whyGSBItems = [
  {
    icon: Target,
    title: "Built for Local Service Businesses",
    description: "AEO strategies designed specifically for how local customers search and make decisions.",
  },
  {
    icon: Layers,
    title: "Part of a Broader Managed AI SEO System",
    description: "AEO is integrated into a complete SEO program — not an isolated tactic.",
  },
  {
    icon: Bot,
    title: "AI-Powered Execution with Strategic Oversight",
    description: "AI handles scale and speed. Strategy and quality control stay human.",
  },
  {
    icon: BarChart3,
    title: "Clear Reporting & Practical Execution",
    description: "You see what's being done, what's working, and what's next — in plain language.",
  },
  {
    icon: Sparkles,
    title: "Built for Visibility, Trust & Conversion",
    description: "Not just rankings — answer-focused visibility that builds buyer confidence and drives action.",
  },
];

const faqs = [
  {
    question: "What is AEO?",
    answer: "AEO stands for Answer Engine Optimization. It is the practice of structuring content so search engines and AI-assisted search experiences can surface your business as the direct answer to relevant questions.",
  },
  {
    question: "How is AEO different from traditional SEO?",
    answer: "Traditional SEO focuses on helping pages rank. AEO focuses on helping your content become the answer surfaced in featured snippets, People Also Ask, and other answer-driven search formats. The two work together.",
  },
  {
    question: "How long does it take to see results from AEO?",
    answer: "AEO timelines depend on your starting content quality, site authority, competition, and how quickly search engines crawl and test your updated content. Many businesses begin to see early movement in answer-oriented visibility within the first few months, with stronger gains building over time as content depth and authority improve.",
  },
  {
    question: "Is AEO only for AI search?",
    answer: "No. AEO also supports visibility in featured snippets, People Also Ask, and other direct-answer search formats. It helps across both traditional search and newer AI-assisted search environments.",
  },
  {
    question: "What is the difference between AEO and GEO?",
    answer: "AEO focuses on becoming the answer to specific questions. GEO focuses more broadly on improving visibility in generative and AI-driven search environments. AEO is one important part of a broader AI SEO strategy.",
  },
  {
    question: "Do I need a lot of blog content for AEO?",
    answer: "Not necessarily. What matters most is having the right questions answered clearly and structurally across your service pages, support pages, FAQs, and broader content ecosystem.",
  },
  {
    question: "Does AEO help conversion too?",
    answer: "Yes. When your content answers real pre-sale questions clearly, prospects arrive better informed and with stronger intent, which can improve lead quality and conversion readiness.",
  },
];

const AEO = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>AEO — Answer Engine Optimization for Local Businesses | GrowSmallBiz</title>
        <meta name="description" content="GrowSmallBiz helps local service businesses become the answer in search. AEO structures your content for featured snippets, People Also Ask, and AI-assisted search visibility." />
        <link rel="canonical" href="https://growsmallbiz.io/services/managed-ai-seo/aeo" />
      </Head>

      <ServiceJsonLd
        serviceName="Answer Engine Optimization (AEO)"
        serviceType="Answer Engine Optimization"
        description="AEO services for local service businesses. Structure your content to become the answer in featured snippets, People Also Ask, and AI-assisted search."
        url="/services/managed-ai-seo/aeo"
        breadcrumbs={[
          { name: "Services", url: "/services" },
          { name: "Managed AI SEO", url: "/services/managed-ai-seo" },
          { name: "AEO", url: "/services/managed-ai-seo/aeo" },
        ]}
      />

      <Header />

      <main>
        {/* SECTION 1 — HERO */}
        <ServiceHero
          badge={{ icon: MessageCircleQuestion, text: "Answer Engine Optimization" }}
          title="Become the Answer."
          titleHighlight="Not Just Another Search Result."
          subtitle="Search behavior is changing. People are no longer just typing keywords — they are asking direct questions and expecting immediate answers. GrowSmallBiz helps local service businesses structure their content to show up in featured snippets, People Also Ask results, and AI-assisted search experiences so your business becomes the answer buyers see first."
          primaryCTA={{
            label: "Schedule Strategy Session",
            href: PRIMARY_CTA_URL,
            variant: "hero",
            external: true,
          }}
          secondaryCTA={{
            label: "Free SEO Audit",
            href: SECONDARY_CTA_URL,
            variant: "heroOutline",
            external: true,
          }}
        />

        {/* SECTION 2 — WHAT IS AEO */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                subtitle="THE SHIFT"
                title="What Is AEO — and Why Does It Matter for"
                titleHighlight="Local Service Businesses?"
              />

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  AEO stands for <strong className="text-foreground">Answer Engine Optimization</strong>. It is the process of structuring your content so search engines and AI-assisted search experiences can easily identify, interpret, and surface your content as the direct answer to a user's question.
                </p>
                <p>
                  Traditional SEO helps your pages rank. <strong className="text-foreground">AEO helps your business get surfaced as the answer.</strong>
                </p>
                <p>
                  For local service businesses, this matters because buyers increasingly begin their research by asking highly specific questions — about costs, services, timelines, qualifications, locations, and what to expect. If your content is not structured to answer those questions clearly, search engines may source answers from competitors instead.
                </p>
                <p>
                  GrowSmallBiz helps local businesses adapt to this shift by building answer-focused content structures that support visibility, trust, and better-qualified traffic.
                </p>
              </div>

              {/* Cited insights */}
              <div className="mt-12 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">Industry Insights</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Google's Year in Search 2025 reported that searches for "Tell me about…" rose <strong className="text-foreground">70% year over year</strong>.{" "}
                        <a href="https://blog.google/products-and-platforms/products/search/year-in-search-2025/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                          Source <ExternalLink className="w-3 h-3" />
                        </a>
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Google's Year in Search 2025 also reported that searches beginning with "How do I…" reached an all-time high with a <strong className="text-foreground">25% increase</strong>.{" "}
                        <a href="https://blog.google/products-and-platforms/products/search/year-in-search-2025/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                          Source <ExternalLink className="w-3 h-3" />
                        </a>
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Backlinko industry research found that featured snippets can materially improve visibility and click-through opportunity for qualifying queries.{" "}
                        <a href="https://backlinko.com/google-ctr-stats" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                          Source <ExternalLink className="w-3 h-3" />
                        </a>
                      </p>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground/60 italic">
                    Sources reflect publicly available industry research and Google-published information available at the time of publication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — HOW SEARCH IS CHANGING */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                subtitle="THE OPPORTUNITY"
                title="Search Is Becoming More"
                titleHighlight="Answer-Driven"
              />

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  People increasingly search in question form and expect clear, immediate answers before deciding which business to contact. Search engines now highlight featured snippets, People Also Ask results, AI-generated summaries, and direct-answer formats that reduce friction for the user.
                </p>
                <p>
                  That shift creates a new opportunity for local service businesses. If your content is structured around real customer questions and clear answer formatting, your business can earn visibility earlier in the decision process — before a prospect even clicks through to compare providers in depth.
                </p>
                <p>
                  For local businesses, that means <strong className="text-foreground">stronger visibility, better trust signals, and more qualified visitors</strong> arriving on your site with clearer intent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHAT GSB INCLUDES IN AEO */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="OUR AEO FRAMEWORK"
              title="What GrowSmallBiz Includes in"
              titleHighlight="AEO"
              description="AEO is not just writing FAQs. It is a structured content system built to help search engines and AI-driven interfaces understand exactly what your business answers, who it serves, and when your content is the right result to surface."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {aeoServices.map((service, index) => (
                <GlowCard
                  key={index}
                  className="p-6 animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — AI-POWERED EXECUTION */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                subtitle="OUR APPROACH"
                title="Why GrowSmallBiz Uses AI-Powered Workflows for"
                titleHighlight="AEO"
              />

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  AEO requires speed, scale, and precision. Local businesses need more than a few manually written FAQ sections — they need a system that continuously identifies new customer questions, maps them to real intent, and turns them into content structures search engines can use.
                </p>
                <p>
                  GrowSmallBiz combines <strong className="text-foreground">AI-powered workflows with strategic human oversight</strong> to move faster and cover more ground. This allows us to identify question opportunities more efficiently, structure content more consistently, and expand answer coverage without relying on slow, manual execution alone.
                </p>
                <p>
                  The result is a more scalable answer-focused SEO process that keeps pace with how search behavior is changing.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
                {[
                  "Question Discovery",
                  "Intent Mapping",
                  "Content Structuring",
                  "Schema Implementation",
                  "Performance Monitoring",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2">
                    <Zap className="w-3.5 h-3.5 text-primary" />
                    <span className="text-sm font-medium text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <CardCTA
          title="Ready to Structure Your Content for Answer Visibility?"
          description="Schedule a strategy session to learn how AEO fits into your growth plan."
          buttonText="Schedule Strategy Session"
          buttonHref={PRIMARY_CTA_URL}
          sectionClassName="py-16"
        />

        {/* SECTION 6 — USE CASES */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="WHO IT'S FOR"
              title="How AEO Helps Local Service Businesses"
              titleHighlight="Get Found Earlier"
            />

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {useCases.map((uc, index) => (
                <div
                  key={index}
                  className="bg-card border-2 border-border rounded-2xl p-6 animate-fade-up hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,127,80,0.15)]"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <uc.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — WHY GROWSMALLBIZ */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="OUR DIFFERENCE"
              title="Why GrowSmallBiz for"
              titleHighlight="AEO"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyGSBItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-background border border-border rounded-xl p-5 animate-fade-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-10 italic max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Founded by a marketing strategist with a background in Fortune 500 brand building and local service growth.
            </p>

            {/* Internal link back to parent */}
            <div className="text-center mt-8 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <Link to="/services/managed-ai-seo" className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1">
                ← Back to Managed AI SEO Overview
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8 — FAQ */}
        <FAQSection
          title="Frequently Asked Questions"
          faqs={faqs}
          schemaType="FAQPage"
          contactCTA={{
            ...baseContactCTA,
            title: "Have questions about AEO?",
            description: "We're here to help you understand how answer engine optimization fits your business.",
            tagline: "Let's build your answer visibility together.",
          }}
        />

        {/* SECTION 9 — FINAL CTA */}
        <section className="py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <p className="text-primary font-medium mb-4">READY TO BECOME THE ANSWER?</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                Ready to Become the Answer in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Search?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                If your prospects are asking questions before they contact a provider, your content needs to be ready with clear answers. GrowSmallBiz helps local service businesses build answer-focused visibility that supports trust, qualified traffic, and conversion.
              </p>
            </div>

            <CardCTA
              title="Let's Build Your Answer Visibility"
              description="Schedule your free strategy session or get a no-obligation SEO audit to see where you stand."
              buttonText="Schedule Strategy Session"
              buttonHref={PRIMARY_CTA_URL}
              sectionClassName="pt-0 pb-0"
            />

            <div className="flex justify-center mt-6 animate-fade-up">
              <Button variant="heroOutline" size="lg" asChild>
                <a href={SECONDARY_CTA_URL} target="_blank" rel="noopener noreferrer">
                  Free SEO Audit
                </a>
              </Button>
            </div>

            <div className="text-center mt-12 text-sm text-muted-foreground space-y-1 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <p>GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide</p>
              <p>The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI.</p>
            </div>
          </div>
        </section>

        {/* SECTION 10 — CONSULTATION FORM */}
        <ConsultationFormSection />
      </main>

      <Footer />
    </div>
  );
};

export default AEO;
