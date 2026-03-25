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
import techSeoHeroBg from "@/assets/technical-seo-hero-bg.jpg";
import {
  Wrench,
  ArrowRight,
  Search,
  FileText,
  Layers,
  Zap,
  CheckCircle2,
  Shield,
  Users,
  BarChart3,
  Target,
  Bot,
  RefreshCw,
  AlertTriangle,
  Settings,
  MonitorCheck,
  Network,
  Clock,
  Cog,
  ScanSearch,
  Code,
  Link2,
  Tag,
  Gauge,
  Copy,
  ArrowRightLeft,
  FileCheck,
  ShieldCheck,
  Eye,
  TrendingUp,
} from "lucide-react";

const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const SECONDARY_CTA_BASE = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page";

const technicalServices = [
  { icon: ScanSearch, title: "Crawlability Diagnostics", description: "Crawlability diagnostics and issue detection" },
  { icon: FileCheck, title: "Indexation Analysis", description: "Indexation analysis and page discovery review" },
  { icon: FileText, title: "Sitemap & Robots.txt", description: "XML sitemap and robots.txt review" },
  { icon: Network, title: "Page Architecture", description: "Core page architecture and internal linking evaluation" },
  { icon: Code, title: "Schema Markup", description: "Schema markup review and implementation support" },
  { icon: Gauge, title: "Page Speed", description: "Page speed and performance issue monitoring" },
  { icon: Copy, title: "Canonicalization", description: "Duplicate content and canonicalization review" },
  { icon: ArrowRightLeft, title: "Redirect Cleanup", description: "Redirect review and technical cleanup" },
  { icon: Tag, title: "On-Page Structure", description: "Title tag, meta description, and heading structure checks" },
  { icon: ShieldCheck, title: "Trust Signals", description: "Trust-related on-page signal reviews" },
  { icon: RefreshCw, title: "Ongoing Monitoring", description: "Ongoing technical monitoring and prioritization" },
];

const processSteps = [
  {
    step: "Step 1",
    description: "We assess the current technical condition of the site and identify the highest-impact issues affecting crawlability, indexation, structure, and performance.",
  },
  {
    step: "Step 2",
    description: "We prioritize issues based on likely business impact, SEO value, implementation complexity, and dependency order.",
  },
  {
    step: "Step 3",
    description: "We validate the recommended actions through strategist review and determine what should be fixed, improved, monitored, or deferred.",
  },
  {
    step: "Step 4",
    description: "We implement or coordinate approved technical improvements as part of the broader SEO system.",
  },
  {
    step: "Step 5",
    description: "We continue monitoring the site so new issues are detected, prioritized, and handled before they quietly suppress performance over time.",
  },
];

const faqs = [
  {
    question: "What is technical SEO?",
    answer: "Technical SEO focuses on the behind-the-scenes website factors that affect how search engines crawl, index, interpret, and process your site. It includes items like crawlability, indexation, schema markup, internal linking structure, site performance, redirects, and page-level technical signals.",
  },
  {
    question: "Does technical SEO help rankings?",
    answer: "Technical SEO helps create the conditions that allow rankings to improve more effectively. It does not replace content, authority, or local relevance, but it strengthens the technical foundation that helps those other SEO components perform.",
  },
  {
    question: "Is technical SEO a one-time fix?",
    answer: "No. Some issues can be corrected once, but technical SEO should be monitored continuously because websites change over time. New pages, edits, plugins, redesigns, tracking scripts, and content changes can all introduce new technical problems.",
  },
  {
    question: "What is schema markup?",
    answer: "Schema markup is structured data that helps search engines and machine systems better interpret your business details, services, locations, reviews, and other entities on the page. It does not directly boost rankings by itself, but it can support richer search result treatments, improve clarity, and reduce ambiguity in how your pages are understood.",
  },
  {
    question: "Why does Google still matter if people are using AI search tools?",
    answer: "Google still matters because Google's AI experiences are built into Search, not separate from it. The same foundational SEO best practices still apply to AI Overviews and AI Mode, which means crawlability, indexation, internal linking, page experience, textual clarity, and valid structured data still matter directly. In practical terms, if your pages are not technically sound, they are less likely to perform well in either traditional search or newer AI-assisted search experiences. AI-assisted discovery is broader than Google, but Google remains one of the most important technical gateways to visibility.",
  },
  {
    question: "Is technical SEO included in GrowSmallBiz's Managed AI SEO program?",
    answer: "Yes. Technical SEO is handled as part of GrowSmallBiz's broader Managed AI SEO system, where foundational site health, content performance, authority signals, and ongoing optimization work together.",
  },
];

const TechnicalSEO = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");
  const SECONDARY_CTA_URL = buildUrl(SECONDARY_CTA_BASE, "free-seo-audit");

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Technical SEO for Local Service Businesses | GrowSmallBiz</title>
        <meta name="description" content="GrowSmallBiz provides managed technical SEO for local service businesses. Crawlability, indexation, schema, site speed, and ongoing monitoring powered by Agentic AI Playbooks." />
        <link rel="canonical" href="https://growsmallbiz.io/services/managed-ai-seo/technical-seo/" />
      </Head>

      <ServiceJsonLd
        serviceName="Technical SEO for Local Service Businesses"
        serviceType="Technical SEO"
        description="Managed technical SEO services for local service businesses. Crawlability diagnostics, indexation analysis, schema markup, site speed optimization, and ongoing monitoring powered by Agentic AI Playbooks."
        url="/services/managed-ai-seo/technical-seo"
        breadcrumbs={[
          { name: "Services", url: "/services" },
          { name: "Managed AI SEO", url: "/services/managed-ai-seo" },
          { name: "Technical SEO", url: "/services/managed-ai-seo/technical-seo" },
        ]}
      />

      <Header />

      <main>
        {/* SECTION 1 — HERO */}
        <ServiceHero
          badge={{ icon: Wrench, text: "Technical SEO for Local Service Businesses" }}
          title={<>Technical SEO That Helps Your Website Rank in as Little as{" "}</>}
          titleHighlight="3 Months"
          subtitle="Traditional SEO often slows down because technical issues sit undetected for weeks or months. GrowSmallBiz uses Agentic AI Playbooks — an integrated framework where several specialized AI agents perform technical SEO tasks continuously — to detect issues faster, prioritize what matters, and accelerate implementation. When technical SEO is handled alongside the other core SEO pillars through a systematic strategy, businesses can often gain traction faster than with a slower, manual process."
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
          backgroundImage={techSeoHeroBg}
          overlayOpacity={50}
        />

        {/* SECTION 2 — WHY TECHNICAL SEO STILL MATTERS */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE FOUNDATION</p>
                <h2 className="section-title">
                  Why{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Technical SEO</span>
                  {" "}Still Matters
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <p>
                  Technical SEO is the foundation that helps every other SEO effort perform the way it should. If search engines cannot properly crawl your site, understand your page structure, access important content, interpret key business information, or move efficiently through your internal architecture, rankings can stall even when the rest of the strategy is strong.
                </p>
                <p>
                  For local service businesses, technical weaknesses often go unnoticed for long periods. A site may look fine on the surface while deeper problems limit visibility behind the scenes. Pages may not be indexed correctly. Important service content may be hard to discover. Schema may be missing or invalid. Internal links may be weak. Site performance may create friction for both users and search engines.
                </p>

                <div className="rounded-2xl p-6 space-y-4 border-l-4 border-primary" style={{ backgroundColor: 'hsl(210 40% 16%)' }}>
                  <p className="text-foreground leading-relaxed">
                    Technical SEO matters because it improves the conditions required for stronger visibility. It supports crawlability, indexation, speed, structural clarity, and machine-readable understanding — all of which influence how effectively search engines can process and trust your site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHAT GROWSMALLBIZ HANDLES UNDER TECHNICAL SEO */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <p className="section-subtitle">THE SCOPE</p>
              <h2 className="section-title">
                What GrowSmallBiz Handles Under{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Technical SEO</span>
              </h2>
              <p className="section-description mt-4">
                Technical SEO is more than a one-time cleanup. GrowSmallBiz manages the technical foundation that helps your website support stronger rankings, cleaner crawl paths, better search understanding, and a more stable base for long-term SEO performance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {technicalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <GlowCard
                    key={index}
                    className="p-6 animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </GlowCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4 — COMMON TECHNICAL SEO PROBLEMS */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE PROBLEMS</p>
                <h2 className="section-title">
                  Common Technical SEO Problems That{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Hold Sites Back</span>
                </h2>
              </div>

              <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <p className="text-lg text-foreground font-semibold">
                  Many websites do not have an "SEO content problem" first. They have a technical foundation problem.
                </p>

                <div className="space-y-4">
                  {[
                    "Important service pages may exist on the site but are not being properly discovered, crawled, or indexed, so they generate little or no organic visibility.",
                    "Internal links may be weak or inconsistent, making it harder for authority and context to flow through the site.",
                    "Schema markup may be missing, incomplete, invalid, or poorly matched to the business and page type.",
                    "Page titles, meta descriptions, headings, or page structure may send mixed signals about what the page is actually about.",
                    "Core performance issues may create unnecessary friction for users and reduce overall site competitiveness.",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/20">
                      <AlertTriangle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-display font-bold text-foreground text-center pt-4">
                  When these problems stack up, the site underperforms relative to its actual potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — AGENTIC AI PLAYBOOKS */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE EXECUTION</p>
                <h2 className="section-title">
                  How GrowSmallBiz Executes Technical SEO Faster With{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Agentic AI Playbooks</span>
                </h2>
                <p className="text-lg text-foreground font-semibold mt-6">
                  Agentic AI Playbooks. Faster Detection. Smarter Prioritization. Human-Guided Execution.
                </p>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <p>
                  Traditional technical SEO relies on a practitioner manually running tools, interpreting reports, and working through a list of issues over weeks or months. The problem is not effort — it is capacity. A human analyst can only review so many signals at once, and the volume of technical data a modern website generates exceeds what manual workflows can keep up with efficiently.
                </p>

                <p className="text-lg text-foreground font-semibold">
                  GrowSmallBiz uses Agentic AI Playbooks to change that equation.
                </p>

                <p>
                  Instead of relying on one generic automation layer, several specialized AI agents perform distinct technical SEO tasks within an integrated framework. These agents continuously monitor site health, detect emerging issues, evaluate patterns across multiple signal types, prioritize fixes by likely impact, and support faster execution across repeatable technical tasks. This creates a more systematic process than isolated manual audits or disconnected software tools.
                </p>

                <p>
                  Our system continuously monitors your site's technical health across dozens of signal categories simultaneously. Instead of waiting for a scheduled audit, issues are surfaced as they emerge. Instead of manually triaging a list, the playbook framework prioritizes issues by their likely impact on rankings, crawl efficiency, indexation, and user experience — so the most consequential problems are addressed first.
                </p>

                <p>
                  Agentic AI Playbooks reduce audit latency from months to minutes. Instead of waiting for slow, periodic manual reviews, GrowSmallBiz can detect technical issues quickly across title tags, meta descriptions, heading structure, schema markup, crawlability, internal linking, semantic coverage, and trust-related on-page signals. Many approved fixes can then be prioritized and implemented far faster than a traditional manual workflow. That shorter detection-to-resolution cycle can materially accelerate SEO progress.
                </p>

                <div className="rounded-2xl p-6 space-y-4 border-l-4 border-primary" style={{ backgroundColor: 'hsl(210 40% 16%)' }}>
                  <p className="text-foreground leading-relaxed">
                    This is not unsupervised software making blind changes. Every technical finding is reviewed by an experienced strategist who confirms priority, validates the recommended resolution, and oversees implementation. The agentic AI layer provides speed, scale, and pattern detection. The human layer provides judgment, context, and quality control.
                  </p>
                </div>

                <p>
                  The result is a technical SEO practice that operates at a pace and monitoring depth that manual-only execution often struggles to match consistently. And when the other core SEO pillars are also being executed systematically, businesses can often reach meaningful traction faster than they would under a fragmented, slower-moving process.
                </p>
              </div>

              {/* Pill tags — matching GEO pattern */}
              <div className="mt-12 flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
                {[
                  "Crawl Monitoring",
                  "Index Management",
                  "Schema Validation",
                  "Speed Optimization",
                  "Signal Prioritization",
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
          title="Ready to Fix Your Technical Foundation?"
          description="Schedule a strategy session to learn how technical SEO fits into your growth plan."
          buttonText="Schedule Strategy Session"
          buttonHref={PRIMARY_CTA_URL}
          sectionClassName="py-16"
        />

        {/* SECTION 6 — HOW THE TECHNICAL SEO PROCESS WORKS */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE PROCESS</p>
                <h2 className="section-title">
                  How the{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Technical SEO Process</span>
                  {" "}Works
                </h2>
                <p className="section-description mt-4">
                  GrowSmallBiz approaches technical SEO as an ongoing managed process, not a one-time task list.
                </p>
              </div>

              <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6 p-6 rounded-2xl border border-border/50 bg-card/20 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/30 shrink-0">
                      <span className="text-primary font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-primary font-semibold mb-1">{step.step}</p>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                This process helps technical SEO stay active, accountable, and aligned with the larger SEO strategy instead of becoming a one-time project that goes stale.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7 — WHO THIS IS FOR */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <p className="section-subtitle">WHO IT'S FOR</p>
                <h2 className="section-title">
                  Who This Is{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">For</span>
                </h2>
              </div>

              <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="p-6 rounded-2xl border border-border/50 bg-background/60 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <Target className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      This service is relevant for local service businesses that rely on search visibility to generate calls, inquiries, consultations, and booked jobs — especially when the site has grown over time, gone through redesigns, added service pages, expanded location targeting, or accumulated technical inconsistencies that were never fully addressed.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-background/60 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      It is also relevant for agencies with solid SEO knowledge but limited bandwidth who want a partner that can execute technical SEO with real depth, systematic monitoring, and a credible operational framework.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — WHY TECHNICAL SEO WORKS BETTER INSIDE A MANAGED SEO SYSTEM */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <p className="section-subtitle">THE BIGGER PICTURE</p>
                <h2 className="section-title">
                  Why Technical SEO Works Better Inside a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Managed SEO System</span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <p className="text-lg text-foreground font-semibold">
                  Technical SEO works best when it is connected to the rest of the SEO strategy.
                </p>
                <p>
                  A technically improved website still needs strong content, clear service-page targeting, local relevance, authority development, and consistent strategic direction. Technical cleanup alone does not create full SEO momentum. It removes friction, strengthens the foundation, and helps the rest of the system perform more effectively.
                </p>
                <p>
                  That is why GrowSmallBiz treats technical SEO as one part of a broader Managed AI SEO approach rather than an isolated service activity.
                </p>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-10 italic max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Founded by a marketing strategist with a background in Fortune 500 brand building and local service growth.
              </p>

              {/* Internal link back to parent */}
              <div className="text-center mt-8 animate-fade-up" style={{ animationDelay: "0.25s" }}>
                <Link to="/services/managed-ai-seo" className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1">
                  ← Back to Managed AI SEO Overview
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 — FAQ */}
        <FAQSection
          title="Frequently Asked Questions"
          faqs={faqs}
          schemaType="FAQPage"
          contactCTA={{
            ...baseContactCTA,
            title: "Have questions about Technical SEO?",
            description: "We're here to help you understand how technical SEO fits into your broader strategy.",
            tagline: "Let's strengthen your technical foundation together.",
          }}
        />

        {/* SECTION 10 — FINAL CTA */}
        <section id="final-cta" className="py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <p className="text-primary font-medium mb-4">THE NEXT STEP</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                Fix the Technical Issues That Quietly{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Suppress Rankings</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                If your site has technical weaknesses, the rest of your SEO strategy has to work harder than it should. GrowSmallBiz helps local service businesses build a stronger technical foundation, reduce hidden performance bottlenecks, and support faster SEO progress through a managed, systematic approach.
              </p>
            </div>

            <CardCTA
              title="Let's Fix Your Technical Foundation"
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

export default TechnicalSEO;
