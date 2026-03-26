import { Head } from "vite-react-ssg";
import { useUtm } from "@/hooks/use-utm";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SectionHeader } from "@/components/services/SectionHeader";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { baseContactCTA } from "@/config/contactCTA";
import { Link } from "react-router-dom";
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
} from "lucide-react";

const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const SECONDARY_CTA_BASE = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page";

const geoIncludes = [
  {
    icon: Shield,
    title: "Entity Clarity and Business Identity Reinforcement",
    description: "We strengthen the consistency of your business identity across your website and third-party profiles so search systems can connect your business name, services, service areas, and credibility signals more confidently.",
  },
  {
    icon: FileText,
    title: "Structured Content for Search and AI Readability",
    description: "We organize core service and location information in ways that are easier for search engines and AI-assisted systems to interpret, summarize, and reference.",
  },
  {
    icon: Globe,
    title: "Citation Consistency and Local Signal Alignment",
    description: "We identify gaps and inconsistencies across relevant directories and data sources that weaken trust in your business information.",
  },
  {
    icon: Sparkles,
    title: "Trust and Authority Signal Development",
    description: "We strengthen the digital proof that supports your credibility, including reviews, supporting mentions, service detail depth, and content signals that help your business look more established.",
  },
  {
    icon: Search,
    title: "AI-Readiness and Visibility Review",
    description: "We assess how clearly your business appears across modern search environments and identify where weak structure or missing context may limit visibility.",
  },
  {
    icon: RefreshCw,
    title: "GEO Recommendations Integrated with Broader SEO",
    description: "We align GEO work with the rest of your Managed AI SEO strategy so technical SEO, local SEO, authority building, and conversion-focused content support one another.",
  },
];

const whyGeoMatters = [
  {
    icon: Target,
    title: "Get Considered Earlier",
    description: "When search systems can clearly understand your services, locations, and credibility, your business has a better chance of being surfaced earlier in the buying journey.",
  },
  {
    icon: Shield,
    title: "Build Trust Before the First Click",
    description: "Strong GEO supports the same signals people use to judge credibility: accurate service information, clear answers, consistent citations, strong reviews, and a reliable web presence.",
  },
  {
    icon: Search,
    title: "Reduce Visibility Gaps",
    description: "Many local businesses do strong work offline but send mixed signals online. GEO helps close that gap so your digital presence better reflects the quality of your business.",
  },
  {
    icon: CheckCircle2,
    title: "Support Calls, Leads, and Booked Jobs",
    description: "The goal is not abstract visibility. The goal is stronger discoverability that contributes to more qualified inquiries and more opportunities to win work.",
  },
];

const whyGSBItems = [
  {
    icon: Target,
    title: "Local Service Business Focus",
    description: "We work in local service categories where entity clarity, service-area relevance, citations, reviews, and authority signals directly affect who gets discovered and trusted.",
  },
  {
    icon: Users,
    title: "Done-for-You Managed Execution",
    description: "GrowSmallBiz manages the audit, prioritization, implementation, content direction, monitoring, and ongoing refinement so business owners are not left trying to interpret a fast-moving discipline on their own.",
  },
  {
    icon: Layers,
    title: "Entity-First Methodology",
    description: "Our methodology starts with clear business identity, consistent signals, and structured credibility across the web. That creates stronger foundations for both traditional search visibility and AI-assisted discovery.",
  },
  {
    icon: Building2,
    title: "Integrated SEO System",
    description: "GEO work is tied to the larger system — technical SEO, local SEO, authority building, reputation signals, and conversion-focused web experience — so each improvement reinforces the others.",
  },
];

const faqs = [
  {
    question: "What is GEO?",
    answer: "GEO is the practice of making your business easier for modern search systems to understand, trust, and reference in AI-assisted discovery experiences. At GrowSmallBiz, GEO is not treated as a separate gimmick. It is part of a broader Managed AI SEO approach that strengthens entity clarity, structured content, citations, and trust signals across the web.",
  },
  {
    question: "Is GEO the same as SEO?",
    answer: "No. GEO and traditional SEO are closely related, but they are not identical. Traditional SEO helps your business compete in search results. GEO helps your business become easier to interpret and surface in AI-assisted answers and modern discovery environments. The strongest approach is to run them together, because the same foundational signals often support both.",
  },
  {
    question: "Does GEO replace local SEO?",
    answer: "No. GEO should strengthen your existing SEO, not replace it. Technical health, local relevance, structured service pages, reviews, citations, and authority-building still matter. GEO builds on those foundations so your business is better positioned across both traditional search and AI-assisted discovery.",
  },
  {
    question: "What is an Agentic AI SEO Playbook?",
    answer: "An Agentic AI SEO Playbook is a structured workflow where specialized AI agents help with research, auditing, pattern analysis, and monitoring while a human strategist reviews findings, sets priorities, and guides execution. It combines efficiency with human judgment.",
  },
  {
    question: "What kinds of businesses is this for?",
    answer: "This service is built for local service businesses that rely on being discovered, trusted, and contacted by nearby prospects. That includes businesses where service-area clarity, reviews, citations, authority, and local relevance influence who gets shortlisted.",
  },
  {
    question: "How long does it take to see results from GEO?",
    answer: "GEO is cumulative. Early improvements may begin within the first few months, especially when entity signals, structure, or citation consistency are weak today. Stronger gains usually build over time as supporting content, reviews, authority signals, and broader SEO foundations improve.",
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
        <meta name="description" content="GrowSmallBiz helps local service businesses become easier for search systems to understand, trust, and surface through managed GEO built inside a broader Managed AI SEO strategy." />
        <link rel="canonical" href="https://growsmallbiz.io/services/managed-ai-seo/geo/" />
      </Head>

      <ServiceJsonLd
        serviceName="Managed GEO Services"
        serviceType="Generative Engine Optimization"
        description="Managed GEO services for local service businesses. Become easier for search systems to understand, trust, and surface through managed GEO built inside a broader Managed AI SEO strategy."
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
          subtitle="Modern search discovery no longer starts and ends in one place. Your next customer may begin in Google, Maps, directories, review platforms, or an AI-assisted search experience. GrowSmallBiz helps local service businesses become easier for search systems to understand, trust, and surface through managed GEO built inside a broader Managed AI SEO strategy."
          preCtaContent={
            <div className="flex flex-wrap gap-3 justify-center mb-2">
              {["Entity Clarity", "Structured Content", "Citation Consistency", "Trust Signals"].map((point, i) => (
                <span key={i} className="text-sm text-foreground/70 font-medium">
                  {i > 0 && <span className="mr-3 text-primary">•</span>}
                  {point}
                </span>
              ))}
            </div>
          }
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
          overlayOpacity={85}
        />

        {/* SECTION 2 — WHAT GEO MEANS */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                title="What GEO Means in a Modern SEO Strategy"
              />

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  GEO helps modern search systems and AI-assisted discovery tools understand who your business is, what services you provide, where you work, and why you are a credible choice.
                </p>
                <p>
                  It does not replace SEO fundamentals. It builds on them. Strong technical SEO, local relevance, structured content, citation consistency, review signals, and clear service-area information make it easier for both traditional search engines and AI-assisted systems to surface your business with confidence.
                </p>
                <p>
                  For local service businesses, that matters because prospects often decide who to contact before they ever browse multiple pages of results. If your digital presence is unclear, inconsistent, or weakly structured, another business gets the recommendation, the shortlist position, or the first call.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — SEARCH DISCOVERY */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                title="Search Discovery Has More Than One Front Door Now"
              />

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  Ranking well in Google still matters. But it is no longer the only way local service businesses get discovered.
                </p>
                <p>
                  A prospect may encounter your business through organic search, map results, directory listings, review platforms, or an AI-assisted answer before they ever visit your website. Across all of those environments, the same question is being asked: is this business clearly understood, locally relevant, and credible enough to recommend?
                </p>
                <p>
                  When those signals are weak, your business can be overlooked even if you do excellent work offline. When those signals are clear and consistent, your business is more likely to be surfaced, trusted, and considered earlier in the buying journey.
                </p>
                <p>
                  That is why GrowSmallBiz treats GEO as part of a broader Managed AI SEO strategy. The goal is not to chase every new interface. The goal is to make your business easier to interpret and trust wherever discovery starts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHAT GROWSMALLBIZ INCLUDES */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="What GrowSmallBiz Includes Under GEO"
              description="GrowSmallBiz delivers GEO as part of a broader Managed AI SEO system for local service businesses. The work is focused on improving clarity, consistency, trust, and discoverability across modern search environments."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {geoIncludes.map((service, index) => (
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

        {/* SECTION 5 — AGENTIC AI SEO PLAYBOOK */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                title="Managed GEO — Expert Strategy Backed by Agentic AI SEO Playbook"
              />

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  GEO is not a one-time setup, and it should not run on autopilot.
                </p>
                <p>
                  GrowSmallBiz uses agentic AI SEO playbooks to audit entity consistency, identify content gaps, review citation patterns, surface authority-building opportunities, and monitor how your business appears across modern search environments. Then human strategy decides what matters most, what to prioritize first, and how GEO work should support your broader SEO and lead-generation goals.
                </p>
                <p>
                  That combination matters. Automation helps accelerate research, pattern detection, and monitoring. Human oversight keeps the work tied to buyer intent, competitive realities, local service business context, and business impact. You are not getting generic AI output. You are getting managed execution guided by strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — WHY GEO MATTERS */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Why GEO Matters for Local Service Businesses"
              description="For local service businesses, visibility is not just about traffic. It is about being included in the consideration set when someone nearby needs help."
            />

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

        {/* SECTION 7 — WHY GROWSMALLBIZ */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Why Local Service Businesses Choose GrowSmallBiz for GEO"
              description="GrowSmallBiz does not sell GEO as a disconnected tactic. We deliver it as part of a managed AI SEO system built for local service businesses that need better visibility, stronger credibility, and real lead-generation outcomes."
            />

            <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </GlowCard>
              ))}
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
            description: "We're here to help you understand how GEO fits your business.",
            tagline: "Let's strengthen your visibility together.",
          }}
        />

        {/* SECTION 9 — FINAL CTA */}
        <section id="final-cta" className="py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                Strengthen Your Visibility Across{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Modern Search</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                Whether a prospect starts in Google, Maps, a directory, a review platform, or an AI-assisted search experience, your business should be easy to understand, easy to trust, and easy to contact.
              </p>
              <p className="text-base text-muted-foreground mb-10 max-w-3xl mx-auto">
                GrowSmallBiz helps local service businesses close visibility gaps through managed GEO as part of a broader AI SEO system — with agentic AI SEO playbooks, human strategy, and done-for-you execution built around real business impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href={PRIMARY_CTA_URL} target="_blank" rel="noopener noreferrer">
                    Schedule Strategy Session
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href={SECONDARY_CTA_URL} target="_blank" rel="noopener noreferrer">
                    Get Your Free SEO Audit
                  </a>
                </Button>
              </div>
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
