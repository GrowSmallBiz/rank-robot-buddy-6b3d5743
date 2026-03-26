import { Head } from "vite-react-ssg";
import { useUtm } from "@/hooks/use-utm";
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
import geoHeroBg from "@/assets/geo-hero-bg.jpg";
import {
  Globe,
  ArrowRight,
  Shield,
  FileText,
  Search,
  Layers,
  Sparkles,
  RefreshCw,
  Target,
  Users,
  Building2,
  CheckCircle2,
  BookOpen,
  Eye,
  Award,
  ClipboardCheck,
  Code2,
  AlertTriangle,
} from "lucide-react";

const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const SECONDARY_CTA_BASE = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page";

const geoIncludes = [
  {
    icon: Shield,
    title: "Entity Clarity and Business Identity Reinforcement",
    paragraphs: [
      "AI systems need to know exactly who you are. Your business name, location, service categories, and industry context must be consistent and unambiguous across every place your business appears online.",
      "GrowSmallBiz audits and strengthens your entity signals — ensuring that AI discovery tools can confidently associate your business with the right service categories, geographic areas, and credibility markers. This foundational work makes every other element of GEO more effective.",
    ],
  },
  {
    icon: FileText,
    title: "Structured Content for AI Discovery",
    paragraphs: [
      "AI systems do not read web pages the way a human does. They scan for well-organized information that clearly answers specific questions about your business, services, service area, and credentials.",
      "GrowSmallBiz structures your service pages, location pages, and supporting content so that AI tools can parse, extract, and reference them accurately. This includes proper heading hierarchy, clear service-to-location mapping, and content that answers the specific questions AI systems are trained to surface.",
    ],
  },
  {
    icon: BookOpen,
    title: "Citation-Worthy Content Presentation",
    paragraphs: [
      "AI-generated answers cite sources. For your business to appear in those answers, your content needs to be factual, specific, clearly written, and well-organized — presented to the standard that AI systems treat as citation-worthy.",
      "This is not about keyword-stuffed copy. It is about producing genuinely useful, business-specific content that AI tools can reference with confidence.",
    ],
  },
  {
    icon: Sparkles,
    title: "Trust and Authority Signal Development",
    paragraphs: [
      "AI systems evaluate credibility before surfacing a business in a generated answer. They look at citation consistency and volume, review quality and responses, the authority of sites referencing your business, and the overall coherence of your digital presence.",
      "GrowSmallBiz manages the trust signals AI systems use to evaluate credibility — from citation cleanup and review strategy to brand consistency across channels.",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "AI-Readiness Audit",
    paragraphs: [
      "Before building your GEO strategy, GrowSmallBiz conducts a structured assessment of your current AI-search visibility — reviewing entity signals, citation consistency, content structure, and technical SEO foundations. The audit identifies the highest-impact gaps and informs a clear, prioritized action plan.",
    ],
  },
  {
    icon: Code2,
    title: "Content Formatting for LLM Discovery",
    paragraphs: [
      "Large language models powering tools like Google AI Overviews extract and synthesize information from structured, well-presented sources. GrowSmallBiz applies specific formatting methodologies to your service descriptions, FAQs, and supporting content — improving their suitability for LLM-based discovery without sacrificing readability for the human visitors who land on your pages.",
    ],
  },
];

const whyGeoMatters = [
  {
    icon: Eye,
    title: "Get Considered Earlier",
    description: "When search systems can clearly understand your services, locations, and credibility, your business has a better chance of being surfaced earlier in the buying journey.",
  },
  {
    icon: Award,
    title: "Build Trust Before the First Click",
    description: "Strong GEO supports the same signals people use to judge credibility: accurate service information, clear answers, consistent citations, strong reviews, and a reliable web presence.",
  },
  {
    icon: AlertTriangle,
    title: "Reduce Visibility Gaps",
    description: "Many local businesses do strong work offline but send mixed signals online. GEO helps close that gap so your digital presence better reflects the quality of your business.",
  },
  {
    icon: Target,
    title: "Support Calls, Leads, and Booked Jobs",
    description: "The goal is not abstract visibility. The goal is stronger discoverability that contributes to more qualified inquiries and more opportunities to win work.",
  },
];

const whyGSBItems = [
  {
    icon: Target,
    title: "We Specialize in Local Service Businesses",
    description: "GEO is not generic. The entity signals, citation environment, and trust markers that matter for a med spa in the Bay Area are different from those that matter for a national e-commerce brand. Our GEO methodology is tuned specifically for the environments where your customers are searching and the signals that AI systems use to evaluate local service relevance.",
  },
  {
    icon: Users,
    title: "Done-for-You Managed Execution",
    description: "You are running a business. You should not have to become an expert in generative AI, entity graphs, and content structure methodology.\n\nGrowSmallBiz manages every element of your GEO strategy — audit, planning, implementation, content, citations, monitoring, and refinement — so that you stay visible in AI-driven environments without adding another job to your plate.",
  },
  {
    icon: Layers,
    title: "Entity-First Methodology",
    description: "Most SEO work starts with keywords. GrowSmallBiz's methodology starts with entity — the clear, consistent, authoritative representation of your business across the web. When AI systems can confidently identify who you are, what you do, and why you are credible, rankings, citations, and recommendations follow more naturally and hold longer.",
  },
  {
    icon: Building2,
    title: "GEO as Part of a Complete AI SEO System",
    description: "GEO is one pillar of GrowSmallBiz's broader Managed AI SEO system. Our system integrates technical SEO, local authority building, AI-powered content strategy, reputation management, and conversion-focused web presence — all working together rather than in isolation.\n\nWhen you work with GrowSmallBiz, GEO is not a standalone tactic. It is part of a cohesive strategy designed to grow your visibility, credibility, and client base across every relevant discovery environment.",
  },
];

const faqs = [
  {
    question: "What is GEO?",
    answer: "GEO stands for Generative Engine Optimization. It is the set of practices that make your business easier for AI-powered search tools — like Google AI Overviews, conversational search assistants, and generative discovery engines — to identify, understand, and surface in generated answers.\n\nWhere traditional SEO focuses on ranking in search result pages, GEO focuses on making your business visible and citation-worthy in AI-driven discovery environments where consumers increasingly research and compare local service providers.",
  },
  {
    question: "Is GEO the same as SEO?",
    answer: "No, but they work best together. Traditional SEO helps your business rank on search engine results pages. GEO extends that visibility into AI-powered environments where the mechanics of discovery are fundamentally different. At GrowSmallBiz, GEO is one element of a broader Managed AI SEO system — not a replacement for foundational SEO, but an expansion of your presence into the growing portion of search that is now AI-mediated.",
  },
  {
    question: "How does GEO help local businesses specifically?",
    answer: "Local service businesses are frequently recommended — or not — by AI-powered tools when consumers search for local providers. AI systems use entity signals, citation consistency, structured content, and trust markers to decide which businesses to surface. GEO strengthens all of those signals for your specific business, service categories, and geographic market — making it more likely that your business is the one AI systems identify and recommend when your ideal customers are searching.",
  },
  {
    question: "What does GrowSmallBiz do differently?",
    answer: "GrowSmallBiz brings specialized local focus, managed execution, and an entity-first methodology to GEO. Our approach is built for the specific AI-search signals that matter in local service markets — not adapted from enterprise SEO playbooks. We manage every element of the strategy for you and integrate GEO into a broader AI SEO system so that every pillar of your digital presence reinforces the others.",
  },
  {
    question: "How long does it take to see results from GEO?",
    answer: "GEO timelines depend on your starting authority, competitive landscape, content quality, and how clearly your business is already structured for AI-driven discovery. Many businesses begin to see early movement within the first few months, with stronger visibility gains building over six to twelve months as trust signals, entity clarity, and supporting content improve.",
  },
  {
    question: "Does GEO replace my current SEO?",
    answer: "No. GEO extends your search visibility — it does not replace foundational SEO. Strong traditional SEO signals — technical health, local authority, quality content, and relevant links — also support AI-search visibility. At GrowSmallBiz, GEO and traditional SEO run in parallel and reinforce each other, giving your business the strongest possible presence across both environments.",
  },
  {
    question: "How do I get started?",
    answer: "The first step is a strategy session with the GrowSmallBiz team. We will review your current digital presence, identify your most significant AI-search visibility gaps, and outline a clear plan for how GEO — as part of our Managed AI SEO system — can strengthen your position in the markets that matter most.\n\nNot ready for a full conversation yet? Start with our Free SEO Audit to see where you stand today.",
  },
];

const GEO = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");
  const SECONDARY_CTA_URL = buildUrl(SECONDARY_CTA_BASE, "free-seo-audit");

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Managed GEO Services for Local Service Businesses | GrowSmallBiz</title>
        <meta name="description" content="GrowSmallBiz helps local service businesses become easier for AI systems to identify, understand, and surface — through managed GEO built for the new reality of search." />
        <link rel="canonical" href="https://growsmallbiz.io/services/managed-ai-seo/geo/" />
      </Head>

      <ServiceJsonLd
        serviceName="Managed GEO Services"
        serviceType="Generative Engine Optimization"
        description="Managed GEO services for local service businesses. Become easier for AI systems to identify, understand, and surface through managed GEO built for the new reality of search."
        url="/services/managed-ai-seo/geo"
        breadcrumbs={[
          { name: "Services", url: "/services" },
          { name: "Managed AI SEO", url: "/services/managed-ai-seo" },
          { name: "GEO", url: "/services/managed-ai-seo/geo" },
        ]}
      />

      <Header />

      <main>
        {/* SECTION 1 — HERO */}
        <ServiceHero
          badge={{ icon: Globe, text: "Managed AI SEO" }}
          title={<>Managed GEO Services for Local{" "}<br className="hidden md:inline" /></>}
          titleHighlight="Service Businesses"
          subtitle="Get Found Where Your Next Customer Is Already Searching"
          description="Search behavior is shifting. More consumers are turning to AI-powered tools — Google AI Overviews, conversational search assistants, generative discovery engines — to find, compare, and choose local service providers. If your business is not visible in those environments, competitors who are will take the work."
          note="GrowSmallBiz helps local service businesses become easier for AI systems to identify, understand, and surface — through a managed methodology built for the new reality of search."
          primaryCTA={{
            label: "Schedule Strategy Session",
            href: PRIMARY_CTA_URL,
            variant: "hero",
            external: true,
          }}
          secondaryCTA={{
            label: "Get Your Free SEO Audit",
            href: SECONDARY_CTA_URL,
            variant: "heroOutline",
            external: true,
          }}
          backgroundImage={geoHeroBg}
          overlayOpacity={82}
        />

        {/* SECTION 2 — WHAT IS GEO AND WHY IT MATTERS */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE FOUNDATION</p>
                <h2 className="section-title">
                  What Is{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Generative Engine Optimization</span>
                  {" "}— and Why Should You Care?
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  Generative Engine Optimization (GEO) is the practice of making your business easier for AI-powered search systems to recognize, interpret, and recommend.
                </p>
                <p>
                  Traditional search engines rank web pages based on links, keywords, and on-page signals. AI-powered discovery tools work differently. They pull information from across the web, synthesize it, and generate answers — often without sending users to a list of links at all. The businesses that appear in those generated answers are there because their digital presence is structured in a way that AI systems can confidently read and cite.
                </p>
                <p>
                  For a local service business, that distinction matters enormously.
                </p>
                <p>
                  When AI systems answer questions like "Who is the best HVAC company near me?" or "Which plumber in Danville offers same-day service?", they rely on businesses with clear entity signals, consistent citations, structured content, and credible authority markers. If your business lacks those signals, AI tools will simply recommend someone else — often a competitor who is not better, just better structured for AI discovery.
                </p>
                <p>
                  GEO is how GrowSmallBiz closes that gap.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — HOW AI SEARCH IS CHANGING LOCAL DISCOVERY */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE SHIFT</p>
                <h2 className="section-title">
                   The AI Search Shift Is Already Happening — What It Means for{" "}
                   <span className="text-transparent bg-clip-text bg-gradient-primary italic">Your Business</span>
                </h2>
              </div>

              <div className="space-y-8 max-w-3xl mx-auto animate-fade-up">
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">From Search Results Pages to AI-Generated Answers</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Showing up in search used to mean ranking on page one of Google. That still matters — but it is no longer the complete picture.
                    </p>
                    <p>
                      Google's AI Overviews now appear at the very top of results for millions of queries, delivering synthesized answers drawn from authoritative, well-structured sources. Many users see the AI-generated answer and never scroll to the organic results below it. Conversational search tools and generative discovery engines are being used by real consumers to research local businesses and get recommendations — without visiting a traditional results page at all.
                    </p>
                    <p>
                      The question is no longer just "Do you rank on Google?" It is "Do AI systems know who you are, what you do, where you serve, and why you are credible?"
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">What Happens to Businesses That Are Not Visible to AI</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      If your business has unclear entity signals, inconsistent citations, or content that AI systems cannot confidently interpret, the result is predictable:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Your competitors are mentioned in AI-generated answers. You are not.",
                        "AI-assisted searches in your category return other businesses by name. Yours is absent.",
                        "Prospective customers using AI discovery tools never encounter your business.",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-background/60">
                          <AlertTriangle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <p className="text-foreground/90">{item}</p>
                        </div>
                      ))}
                    </div>
                    <p>
                      Ignoring AI-search visibility is not maintaining the status quo. It is falling behind at a moment when the gap between AI-visible and AI-invisible businesses is widening.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">GEO Is an Opportunity You Can Act on Now</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The businesses that build strong GEO foundations today will hold a meaningful advantage as AI-driven discovery grows. GrowSmallBiz has built a managed methodology specifically for local service businesses to capture that advantage — systematically, and without disrupting what is already working in traditional search.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHAT GROWSMALLBIZ INCLUDES UNDER GEO */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <p className="section-subtitle">WHAT WE BUILD</p>
              <h2 className="section-title">
                What GrowSmallBiz's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">GEO Optimization Methodology</span>
                {" "}Includes
              </h2>
              <p className="section-description mt-4">
                GEO at GrowSmallBiz is a coordinated set of actions that work together to make your business easier for AI systems to find, understand, and recommend. Every component is managed as part of your ongoing AI SEO engagement.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {geoIncludes.map((item, index) => (
                <GlowCard
                  key={index}
                  className="p-6 animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <div className="space-y-3">
                    {item.paragraphs.map((p, i) => (
                      <p key={i} className="text-sm text-muted-foreground leading-relaxed">{p}</p>
                    ))}
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — AI-POWERED WORKFLOWS + HUMAN STRATEGY */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE EXECUTION</p>
                <h2 className="section-title">
                  Managed GEO — Expert Strategy Backed by{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Agentic AI SEO Playbook</span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  GEO is not a one-time setup. It is an ongoing discipline that requires consistent refinement as AI search systems evolve, your competitive landscape shifts, and new signals emerge that affect how AI tools interpret your business.
                </p>
                <p>
                  GrowSmallBiz delivers GEO as a fully managed service — so you are not left navigating a complex and rapidly changing discipline on your own.
                </p>
                <p>
                  Our approach pairs AI-powered research and analysis with experienced human strategic oversight. We use advanced tools to analyze how your business appears across AI-driven environments, identify content gaps, surface citation opportunities, and track entity signal consistency. Our team interprets that intelligence and translates it into a prioritized execution plan specific to your business and local market.
                </p>
                <p>
                  Every action is informed by data and reviewed by an experienced strategist — not generated by automation and left unreviewed. That human layer matters because AI-search optimization is still an emerging discipline, and the nuances of how different systems interpret and surface local service businesses require judgment alongside tooling.
                </p>
                <p>
                  GrowSmallBiz founder Subrata Guha brings more than 30 years of Fortune 500 experience in marketing, sales, and digital transformation to this work — shaping an approach that is strategic, systematic, and grounded in real business outcomes.
                </p>

                <div className="rounded-2xl p-6 space-y-4 border-l-4 border-primary" style={{ backgroundColor: 'hsl(210 40% 16%)' }}>
                  <p className="text-foreground leading-relaxed">
                    What you get is a partner who understands both the technical requirements of AI-search visibility and the practical realities of running a local service business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <CardCTA
          title="Ready to Strengthen Your AI-Search Visibility?"
          description="Schedule a strategy session to learn how managed GEO fits into your growth plan."
          buttonText="Schedule Strategy Session"
          buttonHref={PRIMARY_CTA_URL}
          sectionClassName="py-16"
        />

        {/* SECTION 6 — WHY GEO MATTERS FOR LOCAL SERVICE BUSINESSES */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <p className="section-subtitle">WHY IT MATTERS</p>
              <h2 className="section-title">
                Why GEO Matters for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Local Service Businesses</span>
              </h2>
              <p className="section-description mt-4">
                For local service businesses, visibility is not just about traffic. It is about being included in the consideration set when someone nearby needs help.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {whyGeoMatters.map((item, i) => (
                <GlowCard
                  key={i}
                  className="p-6 animate-fade-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — WHY GROWSMALLBIZ FOR GEO */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">OUR DIFFERENCE</p>
                <h2 className="section-title">
                  Why Local Service Businesses Choose GrowSmallBiz for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">GEO</span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  There are general marketing agencies, SEO-focused firms, and AI tools that promise to automate everything. GrowSmallBiz is none of those things.
                </p>
                <p>
                  We are a specialized, managed AI SEO agency built exclusively for local service businesses — and that focus matters when it comes to GEO.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto mt-10">
              {whyGSBItems.map((item, i) => (
                <GlowCard
                  key={i}
                  className="p-6 animate-fade-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  {item.description.split("\n\n").map((p, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground leading-relaxed mb-2 last:mb-0">{p}</p>
                  ))}
                </GlowCard>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-10 italic max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Founded by a marketing strategist with a background in Fortune 500 brand building and local service growth.
            </p>

            <div className="text-center mt-8 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <Link to="/services/managed-ai-seo" className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1">
                ← Back to Managed AI SEO Overview
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8 — FAQ */}
        <FAQSection
          title="Frequently Asked Questions About GEO and AI-Search Visibility"
          faqs={faqs.map(f => ({
            question: f.question,
            answer: f.answer,
          }))}
          schemaType="FAQPage"
          contactCTA={{
            ...baseContactCTA,
            title: "Have questions about GEO?",
            description: "We're here to help you understand how GEO fits your business.",
            tagline: "Let's strengthen your visibility together.",
          }}
        />

        {/* SECTION 9 — FINAL CTA */}
        <section id="final-cta" className="py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <p className="text-primary font-medium mb-4">THE NEXT STEP</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                Your Customers Are Already Using AI to Find Local Businesses.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Is Yours Easy to Find?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                AI-assisted discovery is not a trend to monitor from a distance. It is happening now, and the businesses building strong GEO foundations today will hold a compounding advantage over those that wait.
              </p>
              <p className="text-base text-muted-foreground mb-10 max-w-3xl mx-auto">
                Whether you are just beginning to explore what GEO means for your business or you already know you need to close an AI-visibility gap, the next step is the same: a conversation with a strategist who specializes in local service businesses and knows exactly how to make yours more visible in the AI-driven environments where your next client is searching.
              </p>
            </div>

            <CardCTA
              title="Let's Strengthen Your GEO Visibility"
              description="Schedule your free strategy session or get a no-obligation SEO audit to see where you stand."
              buttonText="Schedule Strategy Session"
              buttonHref={PRIMARY_CTA_URL}
              sectionClassName="pt-0 pb-0"
            />

            <div className="flex justify-center mt-6 animate-fade-up">
              <Button variant="heroOutline" size="lg" asChild>
                <a href={SECONDARY_CTA_URL} target="_blank" rel="noopener noreferrer">
                  Get Your Free SEO Audit
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6 text-center max-w-2xl mx-auto">
              Not ready for a full session? Start with a free analysis of your current SEO and AI-search visibility.
            </p>

            <div className="text-center mt-12 text-sm text-muted-foreground space-y-1 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <p>GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide</p>
              <p>The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI.</p>
            </div>
          </div>
        </section>

        {/* CONSULTATION FORM */}
        <ConsultationFormSection />
      </main>

      <Footer />
    </div>
  );
};

export default GEO;
