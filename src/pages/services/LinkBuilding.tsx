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
    description: "Every link we earn is tracked. You receive clear, plain-language reporting that shows what was placed, where it appeared, and how it supports your broader SEO visibility.",
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
    icon: Layers,
    num: "1",
    title: "Link building supports a bigger SEO system.",
    description: "We connect authority building to your content, on-page SEO, local visibility, and conversion goals so the work supports a broader growth strategy.",
  },
  {
    icon: Building2,
    num: "2",
    title: "Built for local service businesses.",
    description: "Our campaigns are designed around real local competition, real service-market search behavior, and real-world business goals — not enterprise assumptions.",
  },
  {
    icon: Bot,
    num: "3",
    title: "Agentic AI playbooks + human strategy.",
    description: "We use AI where it improves speed, pattern recognition, and monitoring, while keeping strategic judgment and quality control in human hands.",
  },
  {
    icon: BarChart3,
    num: "4",
    title: "Transparent reporting with context.",
    description: "You see what was earned, why it matters, and how it fits the bigger picture. No black-box campaigns. No vague updates.",
  },
  {
    icon: TrendingUp,
    num: "5",
    title: "Focused on business impact.",
    description: "The goal is not just more links. The goal is stronger authority that improves visibility, supports your revenue-producing pages, and contributes to long-term growth.",
  },
];

const faqs = [
  {
    question: "How long does it take to see results from link building?",
    answer: "Link building timelines depend on your starting authority, competition, industry, and the quality of opportunities available in your market. Many businesses begin seeing early authority gains within the first few months, with stronger impact building over time as relevant placements, mentions, and off-site trust signals accumulate.",
  },
  {
    question: "How many links will I get per month?",
    answer: "Volume depends on your service plan and campaign scope. More important than raw numbers is the quality and relevance of each placement. One link from a high-authority, niche-relevant site is worth more than many low-quality links that do little to support visibility. We focus on earning the links that move performance, not padding reports with links that do not.",
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
    answer: "Link building is one part of authority building. It focuses on earning relevant backlinks from external websites. Authority building is broader — it also includes the strength of your service pages, content depth, brand signals, local relevance, mentions, internal linking, and the overall trust your website earns over time. GrowSmallBiz treats link building as one component inside a broader Managed AI SEO strategy, not as a disconnected activity.",
  },
  {
    question: "Is link building safe? Can it hurt my rankings?",
    answer: "High-quality, editorial link building is safe when it is done with strong quality standards, relevance, and long-term search health in mind. The tactics that cause problems are the ones we avoid — paid schemes, private blog networks, automated spam, and manipulative anchor abuse. Our process is designed to support sustainable authority growth, not short-term shortcuts.",
  },
  {
    question: "What kinds of sites will you get links from?",
    answer: "We target sites that are topically relevant to your industry, have real organic traffic, and show signals of genuine credibility. This may include industry publications, local and regional outlets, relevant blogs, business associations, and resource pages. We do not use link farms, private blog networks, or sites that exist solely to sell links.",
  },
  {
    question: "Can you build links if my site is brand new?",
    answer: "Yes, though we will be transparent that newer domains often take longer to see authority gains. A fresh domain can still benefit from link building early because it helps establish trust signals and supports a more credible long-term growth path. We adjust campaign pacing and targeting to build a natural profile from the start.",
  },
  {
    question: "Is link building enough on its own to improve rankings?",
    answer: "Usually not by itself. Link building works best when it supports a broader SEO foundation — strong service pages, local intent targeting, technical health, trust signals, and clear conversion paths. That is why GrowSmallBiz treats link building as one part of a larger Managed AI SEO strategy.",
  },
];

const LinkBuilding = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");
  const SECONDARY_CTA_URL = buildUrl(SECONDARY_CTA_BASE, "free-seo-audit");

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Link Building Services for Local Businesses | GrowSmallBiz</title>
        <meta name="description" content="High-authority backlinks are still one of the strongest signals Google uses to rank pages. GrowSmallBiz earns real, editorially placed links from relevant sites for local service businesses." />
        <link rel="canonical" href="https://growsmallbiz.io/services/seo-agency/link-building/" />
      </Head>

      <ServiceJsonLd
        serviceName="Link Building for Local Service Businesses"
        serviceType="Link Building SEO"
        description="GrowSmallBiz's managed link-building service earns real, editorially placed links from relevant sites — so you rank higher, attract more qualified traffic, and grow your local authority."
        url="/services/seo-agency/link-building/"
        breadcrumbs={[
          { name: "Services", url: "/services/" },
          { name: "Managed AI SEO", url: "/services/seo-agency/" },
          { name: "Link Building", url: "/services/seo-agency/link-building/" },
        ]}
      />

      <Header />

      <main id="main-content">
        {/* SECTION 1 — HERO */}
        <ServiceHero
          badge={{ icon: LinkIcon, text: "Link Building for Local Service Businesses" }}
          title={<>Build the Backlink Profile Your Competitors{" "}<br className="hidden md:inline" />Wish They </>}
          titleHighlight="Had"
          subtitle="Build the Backlink Profile That Helps Local Service Businesses Rank, Get Discovered, and Earn Trust<br /><br />Link building is one part of a stronger SEO system. GrowSmallBiz helps local service businesses earn relevant, editorially placed links that strengthen local authority, support visibility across search ecosystems, and reinforce the pages that drive leads, calls, and booked jobs."
          primaryCTA={{
            label: "Schedule Strategy Call",
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
          overlayOpacity={90}
        />

        {/* SECTION 2 — WHY LINK BUILDING STILL MATTERS */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE FUNDAMENTALS</p>
                <h2 className="section-title">
                  Why Link Building Still Matters Inside a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Holistic SEO Strategy</span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  Links still matter because authority still matters. But for local service businesses, links work best when they reinforce a broader SEO system — strong service pages, local intent targeting, topical authority, trust signals, and conversion-ready site structure. The goal is not just to get links. The goal is to strengthen the credibility behind the pages that help your business rank, get discovered, and grow.
                </p>

                <p className="text-xl md:text-2xl font-display font-bold text-foreground text-center pt-4">
                  Three reasons link building still matters:
                </p>
              </div>

              <div className="space-y-0 max-w-3xl mx-auto mt-10">
                {[
                  {
                    icon: TrendingUp,
                    num: "01",
                    title: "Authority strengthens visibility.",
                    desc: "Relevant backlinks remain one of the clearest external trust signals search systems can evaluate. When credible, relevant websites reference your business, they strengthen the authority behind your domain and the pages you want surfaced.",
                  },
                  {
                    icon: Search,
                    num: "02",
                    title: "Strong authority helps good pages perform better.",
                    desc: "Links work best when they support well-optimized service pages, location pages, and supporting content. They do not replace good SEO foundations, but they can make strong pages more competitive and more durable.",
                  },
                  {
                    icon: Sparkles,
                    num: "03",
                    title: "The value compounds over time.",
                    desc: "Unlike paid traffic that disappears the moment spend stops, authority can continue supporting search visibility long after the placement is earned. The right links keep contributing to your broader SEO performance over time.",
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
                What GrowSmallBiz Includes in Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Link Building Campaign</span>
              </h2>
              <p className="section-description mt-4">Link building is not treated here as a disconnected tactic. It supports the broader Managed AI SEO strategy by strengthening the authority behind your service pages, location pages, and supporting content. Our campaign includes the research, outreach, content support, profile monitoring, and ongoing optimization needed to make link acquisition contribute to broader visibility and business growth.</p>
            </div>

            <p className="text-center text-lg font-display font-semibold text-foreground mb-10 animate-fade-up">
              What is included in your campaign:
            </p>

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

            <p className="text-center text-sm text-muted-foreground mt-10 italic max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
              Note: Specific deliverable volumes and campaign scope are defined in your service plan. Contact us to discuss what is right for your business.
            </p>
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
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Agentic AI Playbooks</span>
                  {" "}+ Human Strategy
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  We use agentic AI to improve research, prioritization, monitoring, and reporting — while human strategy stays in control of quality thresholds, outreach judgment, brand alignment, and business relevance.
                </p>
                <p>
                  That means faster research, smarter decisions, cleaner execution, and reporting that helps you understand not just what was done, but why it matters.
                </p>
              </div>

              <div className="space-y-0 max-w-3xl mx-auto mt-10">
                {[
                  {
                    icon: Search,
                    title: "Faster prospect discovery, better prioritization.",
                    desc: "Our agentic AI playbooks help analyze large sets of potential linking domains against your niche, competitors, and authority indicators so we can identify stronger opportunities faster.",
                  },
                  {
                    icon: Users,
                    title: "Human-reviewed outreach, not AI spam.",
                    desc: "AI can support drafting and pattern recognition, but every outreach message is reviewed, refined, and guided by a human. That keeps the communication more relevant, more natural, and more aligned with your brand.",
                  },
                  {
                    icon: Shield,
                    title: "Profile monitoring that protects long-term growth.",
                    desc: "We use AI-assisted monitoring to track anchor text distribution, link velocity, and domain diversity so unnatural patterns can be flagged early and long-term authority growth stays healthier.",
                  },
                  {
                    icon: BarChart3,
                    title: "Reporting tied to strategy, visibility, and business impact.",
                    desc: "Instead of overwhelming you with raw exports, we use AI-supported analysis to turn campaign activity into reporting that is clearer, more strategic, and easier to act on.",
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
                <p className="section-subtitle">LOCAL IMPACT</p>
                <h2 className="section-title">
                  Why Local Service Businesses Benefit From{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Link Building</span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  Local service businesses rarely need more SEO activity for the sake of activity. They need stronger visibility where real buyers search, stronger trust behind their service pages, and a better chance of outranking competitors who stop at the basics.
                </p>
                <p>
                  That is where link building helps. As part of a broader SEO system, it can strengthen the authority behind your service pages and location pages, reinforce local relevance, support long-term ranking stability, and make the rest of your SEO work harder.
                </p>

                <p className="text-xl md:text-2xl font-display font-bold text-foreground text-center pt-4">
                  For local service businesses, the upside is practical:
                </p>
              </div>

              <div className="mt-10 max-w-3xl mx-auto">
                <ul className="space-y-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                  {[
                    { bold: "Stronger authority in competitive local markets.", text: "Many local businesses invest in basic on-page SEO and Google Business Profile work, but far fewer invest consistently in authority building. That creates opportunity for businesses that do." },
                    { bold: "More support for service pages and city pages.", text: "Relevant backlinks can strengthen the credibility behind the pages that target your core services and locations, helping those pages compete more effectively." },
                    { bold: "Better long-term visibility durability.", text: "Businesses that rely only on thin content or surface-level optimization are often more vulnerable to fluctuations. Stronger authority creates a more durable foundation." },
                    { bold: "Stronger support for broader SEO performance.", text: "Link building helps more than one page. When done well, it supports your wider content ecosystem, strengthens overall trust, and reinforces the broader visibility strategy." },
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
              title="Why Local Service Businesses Choose GrowSmallBiz"
            />
            <p className="text-center text-muted-foreground max-w-3xl mx-auto -mt-10 mb-12 animate-fade-up">
              We are not trying to be a bulk link vendor. We are building authority as part of a broader Managed AI SEO strategy designed to help local service businesses rank, get discovered, and convert more of the right traffic.
            </p>

            <p className="text-center text-lg font-display font-semibold text-foreground mb-10 animate-fade-up">
              What makes our approach different:
            </p>

            <div className="space-y-0 max-w-3xl mx-auto">
              {whyGSBItems.map((item, i) => (
                <div key={i}>
                  <div
                    className="animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3">
                      <span className="text-primary font-mono text-lg mt-0.5">{item.num}.</span>
                      <item.icon className="w-6 h-6 text-primary mt-1 shrink-0" />
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed pl-16">{item.description}</p>
                  </div>
                  {i < whyGSBItems.length - 1 && <div className="border-b border-primary/10 mx-8" />}
                </div>
              ))}
            </div>

            <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: "0.45s" }}>
              <Link to="/services/seo-agency/" className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1">
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
              buttonText="Schedule Strategy Call"
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
