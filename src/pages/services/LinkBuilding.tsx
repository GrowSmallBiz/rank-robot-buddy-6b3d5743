import { Head } from "vite-react-ssg";
import { useUtm } from "@/hooks/use-utm";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";
import linkBuildingHeroBg from "@/assets/link-building-hero-bg.jpg";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import { SectionHeader } from "@/components/services/SectionHeader";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { baseContactCTA } from "@/config/contactCTA";
import { Link } from "react-router-dom";
import {
  LinkIcon,
  ArrowRight,
  Shield,
  Target,
  FileText,
  Globe,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Layers,
  Users,
  Bot,
  BarChart3,
  Search,
  Zap,
  Eye,
  AlertTriangle,
  Building2,
  Sparkles,
} from "lucide-react";

const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const SECONDARY_CTA_BASE = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page";

const campaignItems = [
  {
    icon: Search,
    title: "Backlink Gap Analysis",
    description: "We audit your site alongside your top competitors to identify exactly which link opportunities will close the authority gap fastest.",
  },
  {
    icon: Target,
    title: "Prospect Research and Vetting",
    description: "We find relevant, high-authority sites in your niche and verify that each one meets our quality standards before any outreach begins.",
  },
  {
    icon: FileText,
    title: "Personalized Outreach",
    description: "Every pitch is written for the specific site and editor we are contacting. No templates. No spray-and-pray blasts.",
  },
  {
    icon: Globe,
    title: "Content Creation for Placements",
    description: "Where a guest post or supporting asset is needed to earn the link, our writers create it — fully optimized and on-brand.",
  },
  {
    icon: Shield,
    title: "Anchor Text Strategy",
    description: "We manage your anchor text mix to build a natural, diverse profile that strengthens authority without triggering over-optimization penalties.",
  },
  {
    icon: BarChart3,
    title: "Link Monitoring and Reporting",
    description: "Every link we earn is tracked. You receive clear, plain-language reporting that shows what was placed, where, and what it is worth.",
  },
  {
    icon: AlertTriangle,
    title: "Toxic Link Identification",
    description: "We flag and help you address any harmful links in your existing profile that may be suppressing your rankings.",
  },
  {
    icon: Layers,
    title: "Ongoing Campaign Optimization",
    description: "We review performance each month and adjust targeting, outreach angles, and content strategy based on what is working.",
  },
];

const whatWeDo = [
  "Editorial placements on real, trafficked websites",
  "Outreach to relevant, niche-aligned publishers",
  "Content-driven link earning",
  "Transparent reporting on every placement",
  "Anchor text strategies built for long-term health",
  "Links that pass real authority",
];

const whatWeAvoid = [
  "Paid link schemes and link networks",
  "Generic directories with no topical relevance",
  "Automated link blasts and spun content",
  "Tactics that violate Google's Webmaster guidelines",
  "Exact-match anchor stuffing",
  "Links from penalized or deindexed domains",
];

const whyGSBItems = [
  {
    icon: Eye,
    title: "We only build links we would be comfortable putting our own name on.",
    description: "Every site we target is reviewed by a human before outreach begins. If we would not want a link from a site pointing to our own domain, we will not pursue it for yours.",
  },
  {
    icon: BarChart3,
    title: "You always know exactly what is happening.",
    description: "No black boxes. No vague \"we're working on it\" updates. You receive clear, plain-language reporting each month that shows every link placed, the domain it came from, and its authority metrics.",
  },
  {
    icon: Building2,
    title: "We are built for small and local businesses, not enterprise clients.",
    description: "Our pricing, campaign structures, and reporting are designed for businesses with real-world budgets and goals — not Fortune 500 companies with seven-figure marketing departments.",
  },
  {
    icon: Layers,
    title: "Our campaigns are coordinated, not siloed.",
    description: "Link building does not happen in isolation at GrowSmallBiz. It is integrated with your broader SEO strategy — your content, your on-page optimization, and your local presence — so every piece reinforces the others.",
  },
  {
    icon: Bot,
    title: "Agentic AI makes us faster and more precise without cutting corners.",
    description: "We use AI to surface better prospects, improve outreach quality, and monitor your link profile health — so you get more value from every dollar, without sacrificing the editorial standards that make links worth having.",
  },
];

const faqs = [
  {
    question: "How long does it take to see results from link building?",
    answer: "Link Building timelines depend on your starting authority, competition, industry, and the quality of opportunities available in your market. Many businesses begin seeing early authority gains within the first few months, with stronger impact building over time as relevant placements, mentions, and off-site trust signals accumulate.",
  },
  {
    question: "How many links will I get per month?",
    answer: "Volume depends on your service plan and campaign scope. More important than raw numbers is the quality and relevance of each placement. One link from a high-authority, niche-relevant site is worth more than twenty links from low-quality directories. We focus on earning the links that move rankings, not padding reports with links that do not.",
  },
  {
    question: "Will I be able to see the links you build for me?",
    answer: "Yes. Every link we place is documented in your monthly report with the domain name, URL, and authority metrics. You can verify every placement independently.",
  },
  {
    question: "Do I need to create content for link building?",
    answer: "In many cases, yes — guest posts and resource-based link earning require content. Our service includes content creation for placements, so you do not need to produce it yourself. We write everything to your brand standards and get your approval before it is submitted anywhere.",
  },
  {
    question: "What is the difference between Link Building and Authority Building?",
    answer: "Link Building focuses specifically on acquiring individual backlinks from external websites. Authority Building is a broader strategy that includes link building but also encompasses your overall domain strength, brand mentions, digital PR, content depth, and internal linking structure. Our Managed AI SEO plans include both. If you are asking specifically about which plan covers which, your account manager can walk you through the breakdown during your strategy session.",
  },
  {
    question: "Is link building safe? Can it hurt my rankings?",
    answer: "High-quality, editorial link building is safe and is exactly what Google's own guidelines encourage. The tactics that hurt rankings — paid link schemes, private blog networks, automated link blasts — are what you need to avoid. We never use those methods. Every link we build is designed to pass a Google audit.",
  },
  {
    question: "What kinds of sites will you get links from?",
    answer: "We target sites that are topically relevant to your industry, have real organic traffic, and have domain authority metrics that indicate genuine credibility. This includes industry publications, local and regional outlets, relevant blogs, business associations, and resource pages. We do not use link farms, private blog networks, or sites that exist solely to sell links.",
  },
  {
    question: "Can you build links if my site is brand new?",
    answer: "Yes, though we will be transparent that newer domains take longer to see authority gains. A fresh domain benefits from link building from day one — it establishes trust signals early and accelerates the timeline to competitive rankings. We adjust campaign pacing and targeting for newer sites to build a natural, credible profile from the start.",
  },
];

const LinkBuilding = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");
  const SECONDARY_CTA_URL = buildUrl(SECONDARY_CTA_BASE, "free-seo-audit");

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Link Building for Local Service Businesses | GrowSmallBiz</title>
        <meta name="description" content="High-authority backlinks are still one of the strongest signals Google uses to rank pages. GrowSmallBiz earns real, editorially placed links from relevant sites for local service businesses." />
        <link rel="canonical" href="https://growsmallbiz.io/services/managed-ai-seo/link-building/" />
      </Head>

      <ServiceJsonLd
        serviceName="Link Building for Local Service Businesses"
        serviceType="Link Building SEO"
        description="GrowSmallBiz's managed link-building service earns real, editorially placed links from relevant sites — so you rank higher, attract more qualified traffic, and grow your local authority."
        url="/services/managed-ai-seo/link-building"
        breadcrumbs={[
          { name: "Services", url: "/services" },
          { name: "Managed AI SEO", url: "/services/managed-ai-seo" },
          { name: "Link Building", url: "/services/managed-ai-seo/link-building" },
        ]}
      />

      <Header />

      <main>
        {/* SECTION 1 — HERO */}
        <ServiceHero
          badge={{ icon: LinkIcon, text: "Link Building for Local Service Businesses" }}
          title={<>Build the Backlink Profile Your Competitors{" "}<br className="hidden md:inline" />Wish They </>}
          titleHighlight="Had"
          subtitle="High-authority backlinks are still one of the strongest signals Google uses to rank pages. GrowSmallBiz's managed link-building service earns you real, editorially placed links from relevant sites — so you rank higher, attract more qualified traffic, and grow your local authority without lifting a finger."
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
          backgroundImage={linkBuildingHeroBg}
          overlayOpacity={50}
        />

        {/* SECTION 2 — WHY LINK BUILDING STILL MATTERS */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE FUNDAMENTALS</p>
                <h2 className="section-title">
                  Backlinks Remain One of Google's Strongest{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Ranking Signals</span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  Despite every algorithm update, the research is consistent: pages with strong backlink profiles outrank pages without them. A link from a credible, relevant site tells Google your content is trustworthy and worth surfacing to searchers.
                </p>
                <p>
                  For small and local businesses, that signal is even more valuable. You are not competing with national brands on ad spend. You are competing on authority — and backlinks are how you build it.
                </p>

                <p className="text-xl md:text-2xl font-display font-bold text-foreground text-center pt-4">
                  Three reasons link building still moves the needle:
                </p>
              </div>

              <div className="space-y-0 max-w-3xl mx-auto mt-10">
                {[
                  {
                    icon: TrendingUp,
                    num: "01",
                    title: "Authority transfers directly.",
                    desc: "When a respected site links to yours, a portion of that site's authority flows to your page. Google uses this signal to determine how much trust to place in your content relative to competing pages.",
                  },
                  {
                    icon: Search,
                    num: "02",
                    title: "Rankings follow authority.",
                    desc: "Higher authority pages rank higher, more consistently, for more queries — including the local and service-based searches your customers are running right now.",
                  },
                  {
                    icon: Sparkles,
                    num: "03",
                    title: "Authority compounds over time.",
                    desc: "Unlike paid traffic that stops the moment you stop paying, a strong backlink profile keeps working. Every high-quality link you earn today continues to support your rankings for months and years ahead.",
                  },
                ].map((step, i) => (
                  <div key={i}>
                    <div className="animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50" style={{ animationDelay: `${i * 0.1}s` }}>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3">
                        <span className="text-primary font-mono text-lg mt-0.5">{step.num}</span>
                        <step.icon className="w-6 h-6 text-primary mt-1 shrink-0" />
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed pl-16">{step.desc}</p>
                    </div>
                    {i < 2 && <div className="border-b border-primary/10 mx-8" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHAT GROWSMALLBIZ INCLUDES IN LINK BUILDING */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <p className="section-subtitle">COMPLETE CAMPAIGN</p>
              <h2 className="section-title">
                Everything You Need for a Complete{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Link-Building Campaign</span>
              </h2>
              <p className="section-description mt-4">Link building is not a single tactic. It is a coordinated set of activities that, when executed together, build the kind of backlink profile that sustains long-term rankings. Our managed service covers all of it.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {campaignItems.map((item, index) => (
                <GlowCard
                  key={index}
                  className="p-6 animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
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

        {/* SECTION 4 — QUALITY vs SPAMMY COMPARISON */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">QUALITY MATTERS</p>
                <h2 className="section-title">
                  There Are Two Ways to Build Backlinks.{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Only One of Them Works.</span>
                </h2>
                <p className="section-description mt-4">The link-building industry has a reputation problem because a lot of agencies still sell tactics that Google has explicitly penalized for over a decade. It is important to understand the difference.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* What We Do */}
                <div className="rounded-2xl p-8 border border-primary/30 animate-fade-up" style={{ backgroundColor: 'hsl(210 40% 16%)' }}>
                  <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    What We Do
                  </h3>
                  <ul className="space-y-4">
                    {whatWeDo.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What We Avoid */}
                <div className="rounded-2xl p-8 border border-destructive/30 animate-fade-up" style={{ backgroundColor: 'hsl(210 40% 16%)', animationDelay: '0.1s' }}>
                  <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                    <XCircle className="w-6 h-6 text-destructive shrink-0" />
                    What We Avoid
                  </h3>
                  <ul className="space-y-4">
                    {whatWeAvoid.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl p-6 border-l-4 border-primary mt-8 animate-fade-up" style={{ backgroundColor: 'hsl(210 40% 16%)', animationDelay: '0.2s' }}>
                <p className="text-foreground leading-relaxed">
                  Spammy links do not just fail to help — they can actively suppress your rankings or trigger a manual penalty. Every tactic we use is designed to withstand algorithm updates and audits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — AGENTIC AI */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">OUR APPROACH</p>
                <h2 className="section-title">
                  How GrowSmallBiz Uses{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Agentic AI</span>
                  {" "}to Strengthen Link Building
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  AI does not replace the human judgment and relationship-building that great link acquisition requires. What it does is make every part of the process sharper, faster, and more consistently executed. Here is how agentic AI works inside our campaigns.
                </p>
              </div>

              <div className="space-y-0 max-w-3xl mx-auto mt-10">
                {[
                  {
                    icon: Search,
                    title: "Smarter prospect identification.",
                    desc: "Our AI analyzes thousands of potential linking domains against your niche, your competitors' backlink profiles, and current authority metrics — surfacing the highest-value targets faster than any manual process. You get a vetted, prioritized prospect list from day one.",
                  },
                  {
                    icon: Users,
                    title: "Outreach that sounds like a person, because it is.",
                    desc: "AI helps our team draft personalized outreach at scale — but every message is reviewed, refined, and sent by a human. The result is outreach that reads naturally, references the target site specifically, and earns higher reply rates.",
                  },
                  {
                    icon: Shield,
                    title: "Anchor text and profile health monitoring.",
                    desc: "Our AI continuously monitors your growing link profile for anchor text distribution, link velocity, and domain diversity — flagging anything that could signal an unnatural pattern before it becomes a problem.",
                  },
                  {
                    icon: BarChart3,
                    title: "Reporting that is actually readable.",
                    desc: "Instead of raw data exports, our AI synthesizes your campaign results into plain-language summaries that tell you what was earned, what it means for your rankings, and what is coming next.",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50" style={{ animationDelay: `${i * 0.1}s` }}>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3">
                        <item.icon className="w-6 h-6 text-primary mt-1 shrink-0" />
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed pl-9">{item.desc}</p>
                    </div>
                    {i < 3 && <div className="border-b border-primary/10 mx-8" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — WHY LINK BUILDING MATTERS FOR LOCAL SERVICE BUSINESSES */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE STAKES</p>
                <h2 className="section-title">
                  Local Rankings Are Won on Authority — and Authority Comes from{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Links</span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  If you run a local service business — HVAC, landscaping, law, dental, home services, or anything in between — your customers are searching with phrases like "best [service] near me" or "[service] in [city]." The businesses that appear at the top of those results did not get there by accident.
                </p>
                <p>
                  Local rankings depend on three interconnected factors: your Google Business Profile, your on-page optimization, and your off-page authority. Most businesses invest in the first two and ignore the third. That is a significant missed opportunity.
                </p>

                <p className="text-xl md:text-2xl font-display font-bold text-foreground text-center pt-4">
                  Why local businesses see outsized returns from link building:
                </p>
              </div>

              <div className="mt-10 max-w-3xl mx-auto">
                <ul className="space-y-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                  {[
                    { bold: "Your competitors are underinvesting.", text: "Most local businesses do not run active link-building campaigns. A modest but consistent effort puts you ahead of the majority of your market." },
                    { bold: "Local relevance amplifies authority.", text: "A link from a local business association, regional publication, or city-based directory carries extra weight for local search because it signals geographic relevance to Google." },
                    { bold: "It protects your rankings long term.", text: "Algorithm updates frequently shuffle businesses that rank on content alone. A strong backlink profile provides a buffer that keeps you stable when others drop." },
                    { bold: "It supports every other part of your SEO.", text: "Better domain authority means your new pages rank faster, your existing content holds position longer, and your local map pack visibility improves." },
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-2xl p-6 border-l-4 border-primary" style={{ backgroundColor: 'hsl(210 40% 16%)' }}>
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/90">
                        <strong className="text-foreground">{point.bold}</strong>{" "}{point.text}
                      </span>
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
              title="Why Small and Local Businesses Choose GrowSmallBiz for"
              titleHighlight="Link Building"
            />
            <p className="text-center text-muted-foreground max-w-3xl mx-auto -mt-10 mb-12 animate-fade-up">
              There is no shortage of agencies promising to build your backlinks. Most of them either sell you volume without quality, lock you into black-box campaigns you cannot see, or charge enterprise prices for work that should cost a fraction of that. GrowSmallBiz was built to be different.
            </p>

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

            <div className="text-center mt-8 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <Link to="/services/managed-ai-seo" className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1">
                ← Back to Managed AI SEO Overview
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8 — FAQ */}
        <FAQSection
          title="Frequently Asked Questions About Link Building"
          faqs={faqs}
          schemaType="FAQPage"
          contactCTA={{
            ...baseContactCTA,
            title: "Have questions about link building?",
            description: "We're here to help you understand how link building fits your business.",
            tagline: "Let's build your authority together.",
          }}
        />

        {/* SECTION 9 — FINAL CTA */}
        <section id="final-cta" className="py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <p className="text-primary font-medium mb-4">THE NEXT STEP</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                Ready to Build the Backlink Profile That Puts You{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Ahead?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Your competitors are not standing still. Every month without a consistent link-building strategy is a month they are widening the authority gap. GrowSmallBiz makes it easy to close that gap — with a fully managed campaign, transparent reporting, and a team that treats your rankings like their own.
              </p>
              <p className="text-base text-muted-foreground mb-10 max-w-3xl mx-auto">
                There is no obligation and no pressure. Start with a conversation.
              </p>
            </div>

            <CardCTA
              title="Let's Build Your Authority with Quality Links"
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

export default LinkBuilding;
