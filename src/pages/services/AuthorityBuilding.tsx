import { Head } from "vite-react-ssg";
import { useUtm } from "@/hooks/use-utm";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";
import authorityHeroBg from "@/assets/authority-building-hero-bg.jpg";
import { SectionHeader } from "@/components/services/SectionHeader";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { baseContactCTA } from "@/config/contactCTA";
import { Link } from "react-router-dom";
import {
  Shield,
  ArrowRight,
  FileText,
  Layers,
  Zap,
  CheckCircle2,
  Target,
  Bot,
  Sparkles,
  BookOpen,
  TrendingUp,
  Building2,
  Globe,
  Users,
  BarChart3,
  Network,
  Newspaper,
  Award,
  Map,
  BrainCircuit,
  LinkIcon,
} from "lucide-react";

const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const SECONDARY_CTA_BASE = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page";

const authorityServices = [
  {
    icon: BrainCircuit,
    title: "DKN-Driven Authority Planning",
    description: "Map the full universe of topics, subtopics, entities, and questions that define your category before any content or off-site work begins.",
  },
  {
    icon: Map,
    title: "Topical Maps and Topic Clustering",
    description: "Organize core topics, supporting topics, and subtopics into a coherent framework that guides content creation and reveals authority-building opportunities.",
  },
  {
    icon: BookOpen,
    title: "Topical Authority Blog Strategy",
    description: "A strategic content program designed to expand coverage, reinforce entity associations, support core pages, and demonstrate genuine expertise at scale.",
  },
  {
    icon: Layers,
    title: "Authority-Supporting Content Ecosystems",
    description: "Build interconnected content assets that reinforce each other and create a cohesive knowledge architecture search engines and AI systems can trust.",
  },
  {
    icon: Newspaper,
    title: "Press Release Strategy and Distribution",
    description: "Premium national press release distribution and selective local and regional targeting to strengthen brand presence and digital authority signals.",
  },
  {
    icon: Globe,
    title: "Brand Mentions and Digital Authority Signals",
    description: "Strengthen your brand's credibility and entity clarity across the web through strategic mentions, associations, and trust-building references.",
  },
  {
    icon: LinkIcon,
    title: "Authority Link Opportunities",
    description: "Selective, legitimate link opportunities through press coverage, expert placements, partner mentions, and editorial citations that reinforce authority.",
  },
];

const whyGSBItems = [
  {
    icon: Target,
    title: "Built for Local Service Businesses",
    description: "Authority strategies designed specifically for local markets, service categories, and how local consumers and AI systems evaluate trust.",
  },
  {
    icon: Layers,
    title: "Broader Than Link Building",
    description: "We address every dimension of search authority — topical depth, entity clarity, brand presence, and trust signals — not just backlinks.",
  },
  {
    icon: FileText,
    title: "Planning Before Execution",
    description: "Every strategy starts with DKN-driven planning and topical mapping before any content or off-site work begins.",
  },
  {
    icon: Bot,
    title: "Agentic AI Efficiency with Human Judgment",
    description: "AI-powered workflows accelerate planning and gap analysis while human oversight ensures editorial quality and brand credibility.",
  },
  {
    icon: Users,
    title: "Fully Managed, Done-for-You Execution",
    description: "We manage the full authority-building process — from strategy through content creation, press distribution, and placement management.",
  },
  {
    icon: Shield,
    title: "Part of a Broader Managed AI SEO System",
    description: "Authority Building integrates with AEO, GEO, Local SEO, and technical SEO so every pillar reinforces the others.",
  },
];

const faqs = [
  {
    question: "What is the difference between Authority Building and Link Building?",
    answer: "Link building is one tactic inside a broader authority strategy. Authority Building, as GrowSmallBiz defines it, is the full coordinated system of topical coverage, entity clarity, brand presence, press releases, digital PR, brand mentions, and selective link opportunities that collectively signal expertise and trust.",
  },
  {
    question: "How long does it take to see results from Authority Building?",
    answer: "Authority Building timelines depend on your starting authority, competition, topic depth, existing content ecosystem, and how much supporting trust infrastructure is already in place. Many businesses begin seeing meaningful progress within the first few months, with stronger gains building over time as authority signals, topical coverage, and brand reinforcement compound.",
  },
  {
    question: "Do I need a large website to benefit from Authority Building?",
    answer: "No. Businesses with smaller or thinner digital footprints often benefit significantly because they have more authority gaps to close and more room for visible improvement.",
  },
  {
    question: "Does Authority Building replace on-page SEO or Local SEO?",
    answer: "No. Authority Building is one pillar of the broader Managed AI SEO system, and it works best alongside strong on-page optimization and Local SEO. Authority makes everything else more powerful.",
  },
  {
    question: "What kinds of press release placements does GrowSmallBiz pursue?",
    answer: "GrowSmallBiz uses premium national press release channels and, where relevant, selective local and regional placements based on your industry, geography, and strategic goals.",
  },
  {
    question: "Are the links generated through Authority Building safe and sustainable?",
    answer: "Yes. GrowSmallBiz pursues links through legitimate methods such as press coverage, expert placements, partner and association mentions, and editorial citations. We do not buy links or use tactics that violate search engine guidelines.",
  },
  {
    question: "How does the topical authority blog strategy work?",
    answer: "It is a structured execution of the topical map built for your business. Every article is selected because it fills a specific coverage gap, supports a topic cluster, or answers a relevant audience question inside the broader authority architecture.",
  },
  {
    question: "What is a DKN and why does it matter?",
    answer: "DKN stands for Domain Knowledge Network. It is GrowSmallBiz's framework for mapping the full universe of topics, subtopics, entities, questions, and associations relevant to your business and market. It ensures the authority strategy is comprehensive and purposeful from the start.",
  },
  {
    question: "Can Authority Building help with AI-generated search results and answer engines?",
    answer: "Yes. AI-powered search systems and answer engines favor sources with broad topic coverage, entity clarity, consistent brand presence, and trusted references. The same signals that build authority in traditional search also improve visibility and credibility in AI-assisted search environments.",
  },
  {
    question: "What does done-for-you mean in practice?",
    answer: "GrowSmallBiz handles the full authority-building process — from DKN development and topical mapping through content creation, press release writing and distribution, digital PR support, and off-site placement management. You stay informed, but you do not have to manage the process yourself.",
  },
];

const AuthorityBuilding = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");
  const SECONDARY_CTA_URL = buildUrl(SECONDARY_CTA_BASE, "free-seo-audit");

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Authority Building for Local Service Businesses | GrowSmallBiz</title>
        <meta name="description" content="GrowSmallBiz builds search authority for local service businesses through DKN planning, topical maps, authority blogs, press releases, brand mentions, and digital trust signals." />
        <link rel="canonical" href="https://growsmallbiz.io/services/managed-ai-seo/authority-building/" />
      </Head>

      <ServiceJsonLd
        serviceName="Authority Building for Local Service Businesses"
        serviceType="Authority Building SEO"
        description="Systematic authority building for local service businesses through DKN-driven planning, topical maps, authority blogs, press releases, brand mentions, and digital trust signals."
        url="/services/managed-ai-seo/authority-building"
        breadcrumbs={[
          { name: "Services", url: "/services" },
          { name: "Managed AI SEO", url: "/services/managed-ai-seo" },
          { name: "Authority Building", url: "/services/managed-ai-seo/authority-building" },
        ]}
      />

      <Header />

      <main>
        {/* SECTION 1 — HERO */}
        <ServiceHero
          badge={{ icon: Shield, text: "Authority Building for Local Service Businesses" }}
          title={<>Build the Authority That Turns Search Visibility Into{" "}<br className="hidden md:inline" /></>}
          titleHighlight="Market Trust"
          subtitle="Most local service businesses do not have a keyword problem. They have an authority problem. Their competitors are not always better — they are simply seen as more established, more credible, and more trustworthy by search engines, AI systems, and prospective customers.<br/><br/>GrowSmallBiz helps local service businesses build that authority systematically through DKN-driven planning, topical maps, topical authority blogs, press releases, brand mentions, and broader digital trust signals — all managed for you as part of a long-term AI SEO system."
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
          backgroundImage={authorityHeroBg}
          overlayOpacity={60}
        />

        {/* SECTION 2 — WHAT AUTHORITY BUILDING MEANS IN MODERN SEO */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE FUNDAMENTALS</p>
                <h2 className="section-title">
                  What Authority Building Means in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Modern SEO</span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  Authority in SEO is no longer measured by backlinks alone. Modern search authority is built across multiple interconnected signals: topical depth, entity clarity, content breadth, brand presence, trust signals, and semantic relevance.
                </p>
                <p>
                  For local service businesses, that means becoming the business that search engines, AI systems, and prospective customers all view as the established expert in the market — not because of one tactic, but because of a coordinated authority system.
                </p>

                <div className="rounded-2xl p-6 space-y-4 border-l-4 border-primary" style={{ backgroundColor: 'hsl(210 40% 16%)' }}>
                  <p className="text-foreground leading-relaxed">
                    <strong>GrowSmallBiz builds that system for you.</strong> We map the full territory of your category, create the content architecture, strengthen off-site signals, and manage every component so your authority compounds over time — not through random tactics, but through strategic, interconnected execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHY AUTHORITY MATTERS */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE STAKES</p>
                <h2 className="section-title">
                  Why Authority Matters for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Rankings, Trust, and Conversion</span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  In competitive local markets, the businesses that win are not always the ones with the most optimized pages. They are the ones search engines and AI systems have learned to trust.
                </p>
                <p>
                  Authority improves more than rankings. It improves how your brand is perceived before a prospect ever contacts you. It increases the chance that AI systems and search engines surface your business in the first place. And it helps visitors arrive with greater confidence because they have already seen signals of expertise, credibility, and consistency around your brand.
                </p>
              </div>

              <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {[
                  { icon: TrendingUp, title: "Higher Rankings", text: "Authority signals directly influence how search engines rank your pages against competitors." },
                  { icon: Award, title: "Stronger Trust", text: "Prospects arrive with greater confidence when they see consistent expertise signals across the web." },
                  { icon: Sparkles, title: "AI Visibility", text: "AI systems and answer engines favor sources with broad topic coverage and trusted references." },
                  { icon: BarChart3, title: "Better Conversion", text: "Authority-driven traffic converts better because visitors already perceive your business as credible." },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-6 border-l-4 border-primary animate-fade-up"
                    style={{ backgroundColor: 'hsl(210 40% 16%)', animationDelay: `${i * 0.05}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHAT GROWSMALLBIZ INCLUDES */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <p className="section-subtitle">OUR AUTHORITY METHODOLOGY</p>
              <h2 className="section-title">
                What GrowSmallBiz Includes Under{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Authority Building</span>
              </h2>
              <p className="section-description mt-4">Authority Building at GrowSmallBiz is a multi-layer service, not a single deliverable. It addresses every major dimension of search authority for local service businesses.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {authorityServices.map((service, index) => (
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

        {/* SECTION 5 — DKN, TOPICAL MAPS, AND TOPICAL AUTHORITY BLOGS */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE FOUNDATION</p>
                <h2 className="section-title">
                  How DKN, Topical Maps, and Topical Authority Blogs Support{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Authority Growth</span>
                </h2>
              </div>

              <div className="space-y-0 max-w-3xl mx-auto">
                {/* Sub-block 1 */}
                <div className="animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3">
                    <BrainCircuit className="w-6 h-6 text-primary mt-1 shrink-0" />
                    DKN-Driven Authority Planning
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed pl-9">
                    <p>
                      Every authority strategy begins with GrowSmallBiz's Domain Knowledge Network (DKN) planning process. Before content is created or off-site placements are pursued, we map the full territory of topics, subtopics, entities, and questions that define your category and market. This creates the structural foundation for every authority-building action that follows.
                    </p>
                  </div>
                </div>

                <div className="border-b border-primary/10 mx-8" />

                {/* Sub-block 2 */}
                <div className="animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50" style={{ animationDelay: "0.1s" }}>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3">
                    <Map className="w-6 h-6 text-primary mt-1 shrink-0" />
                    Topical Maps and Topic Clustering
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed pl-9">
                    <p>
                      Once the topic territory is mapped, GrowSmallBiz builds a topical map that organizes core topics, supporting topics, and related subtopics into a coherent framework. This helps guide content creation and reveals the clusters where meaningful authority can be built.
                    </p>
                  </div>
                </div>

                <div className="border-b border-primary/10 mx-8" />

                {/* Sub-block 3 */}
                <div className="animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50" style={{ animationDelay: "0.2s" }}>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3">
                    <BookOpen className="w-6 h-6 text-primary mt-1 shrink-0" />
                    Topical Authority Blog Strategy
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed pl-9">
                    <p>
                      A topical authority blog is not a generic publishing calendar. It is a strategic content program designed to expand coverage, reinforce entity associations, support core pages through internal linking, and demonstrate genuine expertise at scale. Every article serves a purpose inside the broader authority architecture.
                    </p>
                  </div>
                </div>

                <div className="border-b border-primary/10 mx-8" />

                {/* Callout */}
                <div className="animate-fade-up p-8" style={{ animationDelay: "0.3s" }}>
                  <div className="rounded-2xl p-6 space-y-4 border-l-4 border-primary" style={{ backgroundColor: 'hsl(210 40% 16%)' }}>
                    <h3 className="text-xl font-display font-bold text-foreground flex items-start gap-3">
                      <Network className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                      Authority Is Architectural
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      These three pillars — DKN planning, topical mapping, and authority blogging — form the structural foundation of every authority strategy. Without this architecture, off-site efforts like press releases and brand mentions lack the on-site depth to be fully effective.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — PRESS RELEASES, BRAND MENTIONS, AND DIGITAL AUTHORITY SIGNALS */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">OFF-SITE REINFORCEMENT</p>
                <h2 className="section-title">
                  How Press Releases, Brand Mentions, and Digital Authority Signals{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Reinforce Authority</span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  Authority is strengthened when your business is referenced, mentioned, and associated with credible sources beyond your own website.
                </p>
                <p>
                  GrowSmallBiz manages:
                </p>
              </div>

              <div className="mt-8 max-w-3xl mx-auto">
                <ul className="space-y-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                  {[
                    "Press release strategy and distribution through premium national channels",
                    "Selective local and regional press targeting where relevant",
                    "Expert commentary opportunities",
                    "Editorial mentions",
                    "Community and association references",
                    "Broader digital authority signals that reinforce your brand's credibility and entity clarity across the web",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.15s" }}>
                <div className="rounded-2xl p-6 space-y-4 border-l-4 border-primary" style={{ backgroundColor: 'hsl(210 40% 16%)' }}>
                  <p className="text-muted-foreground leading-relaxed">
                    These off-site signals work best when supported by the on-site authority architecture described above. Together, they create a comprehensive trust profile that search engines and AI systems recognize and reward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — AGENTIC AI */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">OUR APPROACH</p>
                <h2 className="section-title">
                  How GrowSmallBiz Uses{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Agentic AI</span>
                  {" "}to Accelerate Authority Building
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  Authority Building requires broad topic coverage, strategic planning, and steady execution across multiple signals at once. GrowSmallBiz uses agentic AI workflows plus strategic human oversight to identify topic gaps faster, build smarter topical maps, plan authority-supporting content more efficiently, surface entity and reputation gaps earlier, and accelerate authority-asset planning across the system.
                </p>
                <p>
                  This lets us move faster and cover more ground than slow manual execution alone — while still applying human judgment where editorial quality, market understanding, and brand credibility matter most.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
                {[
                  "Topic Gap Analysis",
                  "Topical Map Building",
                  "Content Planning",
                  "Entity Gap Detection",
                  "Authority Signal Monitoring",
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
          title="Ready to Build Real Search Authority?"
          description="Schedule a strategy session to learn how Authority Building fits into your growth plan."
          buttonText="Schedule Strategy Session"
          buttonHref={PRIMARY_CTA_URL}
          sectionClassName="py-16"
        />

        {/* SECTION 8 — WHY GROWSMALLBIZ */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="OUR DIFFERENCE"
              title="Why GrowSmallBiz for"
              titleHighlight="Authority Building"
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

            <div className="text-center mt-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                GrowSmallBiz does not treat authority as a batch of tactics. We build systems — structured, strategic, and designed to compound over time. We start with planning, not random execution. And we manage the full process for local service businesses that need real expertise signals in competitive markets.
              </p>
            </div>

            {/* Internal link back to parent */}
            <div className="text-center mt-8 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <Link to="/services/managed-ai-seo" className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1">
                ← Back to Managed AI SEO Overview
              </Link>
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
            title: "Have questions about Authority Building?",
            description: "We're here to help you understand how authority building fits your business.",
            tagline: "Let's build your search authority together.",
          }}
        />

        {/* SECTION 10 — FINAL CTA */}
        <section id="final-cta" className="py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <p className="text-primary font-medium mb-4">THE NEXT STEP</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                Build Authority That Lasts.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Start Today.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Search engines do not rank businesses they do not trust. AI systems do not recommend brands they cannot verify. Prospective customers do not choose providers they are not confident in.
              </p>
              <p className="text-base text-muted-foreground mb-10 max-w-3xl mx-auto">
                Authority is not a luxury. It is the foundation of sustainable search visibility, lead generation, and market credibility. GrowSmallBiz builds that authority for you — systematically, intelligently, and without requiring you to become an SEO expert.
              </p>
            </div>

            <CardCTA
              title="Let's Build Your Search Authority"
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

        {/* SECTION 11 — CONSULTATION FORM */}
        <ConsultationFormSection />
      </main>

      <Footer />
    </div>
  );
};

export default AuthorityBuilding;
