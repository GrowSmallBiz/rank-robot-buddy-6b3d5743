import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";
import geoHeroBg from "@/assets/geo-hero-bg.jpg";
import { SectionHeader } from "@/components/services/SectionHeader";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { baseContactCTA } from "@/config/contactCTA";
import { Link } from "react-router-dom";
import {
  Globe,
  ArrowRight,
  Search,
  FileText,
  Layers,
  Zap,
  CheckCircle2,
  XCircle,
  Shield,
  Users,
  BarChart3,
  Target,
  Bot,
  Sparkles,
  Eye,
  BookOpen,
  RefreshCw,
  AlertTriangle,
  TrendingUp,
  Building2,
} from "lucide-react";

const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const SECONDARY_CTA_BASE = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page";

const geoServices = [
  {
    icon: Shield,
    title: "Entity Clarity and Business Identity Reinforcement",
    description: "We ensure AI systems can clearly identify who your business is, what you do, and where you serve — with consistent, unambiguous entity signals.",
  },
  {
    icon: FileText,
    title: "Structured Content for AI Discovery",
    description: "Content is organized and formatted so AI-powered search tools can confidently extract, interpret, and surface your business information.",
  },
  {
    icon: Globe,
    title: "Brand / Entity Reinforcement Across the Web",
    description: "We strengthen your business identity across directories, citations, and authoritative sources so AI systems see consistent, corroborating signals.",
  },
  {
    icon: BookOpen,
    title: "Citation-Worthy Content Structure",
    description: "Content built to be referenced and cited by AI systems — structured for clarity, authority, and factual confidence.",
  },
  {
    icon: Search,
    title: "AI-Readiness Audits and Gap Identification",
    description: "We audit your digital presence against AI-discovery requirements, identifying gaps that limit your visibility in generative search environments.",
  },
  {
    icon: Layers,
    title: "LLM-Friendly Content Formatting",
    description: "Content structured in formats that large language models can parse efficiently — improving your chances of being included in AI-generated answers.",
  },
  {
    icon: Sparkles,
    title: "Trust and Relevance Signal Strengthening",
    description: "We build and reinforce the trust markers, relevance signals, and authority indicators that AI systems weigh when choosing which businesses to recommend.",
  },
];

const whyGSBItems = [
  {
    icon: Target,
    title: "Built for Local Service Businesses",
    description: "GEO strategies designed specifically for local markets, service categories, and how local consumers search.",
  },
  {
    icon: Users,
    title: "Managed Execution, Not DIY Guesswork",
    description: "We manage every element of the strategy for you — no templates, no self-service portals, no guesswork.",
  },
  {
    icon: Layers,
    title: "GEO as Part of a Broader Managed AI SEO System",
    description: "GEO integrates with AEO, technical SEO, and content strategy so every pillar reinforces the others.",
  },
  {
    icon: Shield,
    title: "Entity-First Methodology",
    description: "Our approach starts with entity clarity — helping AI systems understand your business before optimizing for visibility.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting and Strategic Oversight",
    description: "Clear reporting on what's being done, what's changing, and what the next priorities are — in plain language.",
  },
];

const faqs = [
  {
    question: "What is GEO?",
    answer: "GEO, or Generative Engine Optimization, is the practice of improving how visible and understandable your business is within AI-powered search environments. It helps AI systems identify, interpret, and recommend your business more confidently.",
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
    answer: "The first step is a strategy session with the GrowSmallBiz team. We will review your current digital presence, identify your most significant AI-search visibility gaps, and outline a clear plan for how GEO — as part of our Managed AI SEO system — can strengthen your position in the markets that matter most.",
  },
];

const GEO = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");
  const SECONDARY_CTA_URL = buildUrl(SECONDARY_CTA_BASE, "free-seo-audit");
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>GEO — Generative Engine Optimization for Local Businesses | GrowSmallBiz</title>
        <meta name="description" content="GrowSmallBiz helps local service businesses become visible in AI-powered search. GEO makes your business easier for AI systems to find, understand, and recommend." />
        <link rel="canonical" href="https://growsmallbiz.io/services/managed-ai-seo/geo" />
      </Head>

      <ServiceJsonLd
        serviceName="Generative Engine Optimization (GEO)"
        serviceType="Generative Engine Optimization"
        description="GEO services for local service businesses. Make your business visible in AI-powered search environments including Google AI Overviews, conversational search, and generative discovery engines."
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
          badge={{ icon: Globe, text: "Generative Engine Optimization (GEO) for Local Service Businesses" }}
          title={<>If AI Search Can't Understand Your Business,{" "}<br className="hidden md:inline" />It Won't </>}
          titleHighlight="Recommend It"
          subtitle="GrowSmallBiz helps local service businesses strengthen entity clarity, trust signals, and AI-search visibility so they are easier for AI systems to identify, interpret, and surface."
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
          backgroundImage={geoHeroBg}
          overlayOpacity={50}
        />

        {/* SECTION 2 — WHAT GEO IS AND WHY IT MATTERS */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE FUNDAMENTALS</p>
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

                {/* Callout card for the key questions */}
                <div className="rounded-2xl p-6 space-y-4 border-l-4 border-primary" style={{ backgroundColor: 'hsl(210 40% 16%)' }}>
                  <p className="text-foreground leading-relaxed">
                    When AI systems answer questions like <strong>"Who is the best HVAC company near me?"</strong> or <strong>"Which plumber in Danville offers same-day service?"</strong>, they rely on businesses with clear entity signals, consistent citations, structured content, and credible authority markers. If your business lacks those signals, AI tools will simply recommend someone else — often a competitor who is not better, just better structured for AI discovery.
                  </p>
                </div>

                {/* Pull-quote closing line */}
                <p className="text-xl md:text-2xl font-display font-bold text-foreground text-center pt-4">
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
                  The Shift Is{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Already Happening</span>
                  {" "}— Here Is What It Means for Your Business
                </h2>
              </div>

              <div className="space-y-0 max-w-3xl mx-auto">
                {/* Sub-block 1 */}
                <div className="animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3">
                    <Search className="w-6 h-6 text-primary mt-1 shrink-0" />
                    From Search Results Pages to AI-Generated Answers
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed pl-9">
                    <p>
                      Showing up in search used to mean ranking on page one of Google. That still matters — but it is no longer the complete picture.
                    </p>
                    <p>
                      Google's AI Overviews now appear at the very top of results for millions of queries, delivering synthesized answers drawn from authoritative, well-structured sources. Many users see the AI-generated answer and never scroll to the organic results below it. Conversational search tools and generative discovery engines are being used by real consumers to research local businesses and get recommendations — without visiting a traditional results page at all.
                    </p>
                    <p>
                      The question is no longer just <strong className="text-foreground">"Do you rank on Google?"</strong> It is <strong className="text-foreground">"Do AI systems know who you are, what you do, where you serve, and why you are credible?"</strong>
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-b border-primary/10 mx-8" />

                {/* Sub-block 2 */}
                <div className="animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50" style={{ animationDelay: "0.1s" }}>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-primary mt-1 shrink-0" />
                    What Happens to Businesses That Are Not Visible to AI
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed pl-9">
                    <p>
                      If your business has unclear entity signals, inconsistent citations, or content that AI systems cannot confidently interpret, the result is predictable:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Your competitors are mentioned in AI-generated answers. You are not.",
                        "AI-assisted searches in your category return other businesses by name. Yours is absent.",
                        "Prospective customers using AI discovery tools never encounter your business.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <XCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      Ignoring AI-search visibility is not maintaining the status quo. It is <strong className="text-foreground">falling behind</strong> at a moment when the gap between AI-visible and AI-invisible businesses is widening.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-b border-primary/10 mx-8" />

                {/* Sub-block 3 */}
                <div className="animate-fade-up p-8" style={{ animationDelay: "0.2s" }}>
                  <div className="rounded-2xl p-6 space-y-4 border-l-4 border-primary" style={{ backgroundColor: 'hsl(210 40% 16%)' }}>
                    <h3 className="text-xl font-display font-bold text-foreground flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                      GEO Is an Opportunity You Can Act on Now
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The businesses that build strong GEO foundations today will hold a meaningful advantage as AI-driven discovery grows. GrowSmallBiz has built a managed methodology specifically for local service businesses to capture that advantage — systematically, and without disrupting what is already working in traditional search.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHAT GROWSMALLBIZ INCLUDES UNDER GEO */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <p className="section-subtitle">OUR GEO METHODOLOGY</p>
              <h2 className="section-title">
                What GrowSmallBiz's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">GEO Methodology</span>
                {" "}Includes
              </h2>
              <p className="section-description mt-4">GEO at GrowSmallBiz is a coordinated set of actions that work together to make your business easier for AI systems to find, understand, and recommend. Every component is managed as part of your ongoing AI SEO engagement.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {geoServices.map((service, index) => (
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
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">OUR APPROACH</p>
                <h2 className="section-title">
                  How GrowSmallBiz Uses{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Agentic AI</span>
                  {" "}to Accelerate GEO
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  GEO requires more than occasional adjustments. It demands continuous monitoring, faster discovery of content and entity gaps, and the ability to improve multiple trust and visibility signals at the same time.
                </p>
                <p>
                  GrowSmallBiz combines <strong className="text-foreground">AI-powered workflows with strategic human oversight</strong> to move faster and cover more ground than manual execution alone. We identify AI-search visibility gaps earlier, prioritize improvements more intelligently, and implement changes more consistently across the signals that influence how AI systems interpret your business.
                </p>
                <p>
                  That means better speed, better coverage, and a more adaptive approach as AI-driven discovery continues to evolve.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
                {[
                  "Entity Auditing",
                  "Citation Monitoring",
                  "Content Structuring",
                  "Signal Reinforcement",
                  "Gap Identification",
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
          title="Ready to Make Your Business Visible in AI Search?"
          description="Schedule a strategy session to learn how GEO fits into your growth plan."
          buttonText="Schedule Strategy Session"
          buttonHref={PRIMARY_CTA_URL}
          sectionClassName="py-16"
        />

        {/* SECTION 6 — WHY GEO MATTERS FOR LOCAL SERVICE BUSINESSES */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE STAKES</p>
                <h2 className="section-title">
                  Why{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">GEO Matters</span>
                  {" "}for Local Service Businesses
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  Local service businesses are especially exposed to shifts in search behavior because consumers increasingly use AI-powered tools to compare providers, ask service-specific questions, and narrow their options before they ever click through to a website.
                </p>
                <p>
                  If your business is not structured in a way AI systems can understand and trust, you may be excluded from those recommendations entirely. That affects visibility, credibility, and the shortlist customers build before making contact.
                </p>
                <p>
                  GEO helps local businesses become more discoverable in those environments — not by replacing traditional SEO, but by <strong className="text-foreground">extending visibility into the AI-mediated part of modern search</strong>.
                </p>
              </div>

              <div className="mt-10 max-w-3xl mx-auto">
                <ul className="space-y-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                  {[
                    "Be found earlier in the decision journey",
                    "Strengthen credibility before the click",
                    "Reduce the risk of losing visibility to better-structured competitors",
                    "Extend search presence into AI-driven discovery environments",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — WHY GROWSMALLBIZ */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="OUR DIFFERENCE"
              title="Why GrowSmallBiz for"
              titleHighlight="GEO"
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
            title: "Have questions about GEO?",
            description: "We're here to help you understand how generative engine optimization fits your business.",
            tagline: "Let's build your AI-search visibility together.",
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
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                AI-assisted discovery is not a trend to monitor from a distance. It is happening now, and the businesses building strong GEO foundations today will hold a compounding advantage over those that wait.
              </p>
              <p className="text-base text-muted-foreground mb-10 max-w-3xl mx-auto">
                Whether you are just beginning to explore what GEO means for your business or you already know you need to close an AI-visibility gap, the next step is the same: a conversation with a strategist who specializes in local service businesses and knows exactly how to make yours more visible in the AI-driven environments where your next client is searching.
              </p>
            </div>

            <CardCTA
              title="Let's Build Your AI-Search Visibility"
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

export default GEO;
