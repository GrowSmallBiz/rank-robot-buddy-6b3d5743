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
    icon: Layers,
    title: "We build systems, not disconnected campaigns.",
    description: "Many authority services are sold as batches of links, press releases, or content. GrowSmallBiz builds a structured authority system designed to strengthen rankings, trust, and long-term visibility over time.",
  },
  {
    icon: FileText,
    title: "We start with planning, not random execution.",
    description: "The most common failure in authority building is doing tactics without a strategic foundation. We build the planning layer first so content, mentions, press activity, and authority signals work together instead of creating scattered results.",
  },
  {
    icon: Target,
    title: "We understand local business economics.",
    description: "GrowSmallBiz is built for local service businesses, not enterprise marketing departments. That affects how we prioritize, how we execute, and how we build strategies that support real business growth.",
  },
  {
    icon: Bot,
    title: "We combine agentic AI efficiency with human judgment.",
    description: "We use AI to accelerate research, mapping, prioritization, and scale. We use human judgment to protect quality, strategy, credibility, and business alignment.",
  },
  {
    icon: Users,
    title: "We are managed and done-for-you.",
    description: "You do not need to coordinate vendors, manage an SEO content machine, or learn authority strategy yourself. GrowSmallBiz manages the process for you as part of the broader Managed AI SEO system.",
  },
  {
    icon: Shield,
    title: "We keep the work transparent.",
    description: "You should always understand what is being done, why it matters, and how it supports the bigger search strategy.",
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
          subtitle='<h2 class="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Most local service businesses do not have a keyword problem. They have an authority problem.</h2>Their competitors are not always better — they are simply seen as more established, more credible, and more trustworthy by search engines, AI systems, and prospective customers.<br/><br/>As one strategic pillar of our Managed AI SEO system, Authority Building is the coordinated process of making your business the obvious, trusted expert in your local market — across search results, across the broader web, and in the perception of every prospective customer who encounters your brand.<br/><br/>This is not about buying links. It is not about gaming algorithms. It is about building something real: a deep, consistent, credible presence that signals expertise, earns trust, and compounds in value over time.'
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
                  Authority in SEO is no longer measured by backlinks alone. While links still matter, modern search authority is built through multiple interconnected signals — and that makes it far more achievable for local service businesses that approach it strategically.
                </p>
                <p className="text-foreground font-semibold">Search systems evaluate authority through:</p>
                <div className="space-y-4">
                  {[
                    { label: "Topical depth", text: "Does your website demonstrate genuine expertise across the services, problems, and questions your audience cares about?" },
                    { label: "Entity clarity", text: "Is it clear who you are, what you do, where you operate, and how your business connects to your market?" },
                    { label: "Content breadth", text: "Do you cover your topic space with enough depth and range to be viewed as a reliable resource?" },
                    { label: "Brand presence", text: "Do reputable sources across the web mention, reference, or connect with your business?" },
                    { label: "Trust signals", text: "Are there consistent, credible references to your business across media, associations, press, and community platforms?" },
                    { label: "Semantic relevance", text: "Does your overall digital presence send cohesive signals about your expertise, services, locations, and market relevance?" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <p><strong className="text-foreground">{item.label}</strong> — {item.text}</p>
                    </div>
                  ))}
                </div>
                <p>
                  Authority building is not a single tactic. It is a coordinated system that strengthens how your business is understood, trusted, and surfaced across modern search environments. That coordinated system is what GrowSmallBiz builds as part of your broader Managed AI SEO strategy.
                </p>
                <p>
                  For a local roofing contractor, HVAC company, plumbing business, med spa, personal injury attorney, or real estate team, authority building is not a single tactic. It is a coordinated system that helps your business cover its topic space more deeply, reinforce brand credibility beyond your website, and build the trust signals that influence both visibility and conversion in competitive local markets.
                </p>
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
                  Local service businesses operate in one of the most competitive search environments that exists. You are not just competing against nearby providers. You are also competing against directories, marketplaces, aggregators, and established brands that already have stronger trust signals across the web.
                </p>
                <p>
                  In that environment, the businesses that win are not always the ones with the most optimized pages. They are the ones search systems have more reason to trust.
                </p>

                <p className="text-foreground font-display font-bold text-xl mt-8">Rankings are only part of the story.</p>
                <p>High authority improves every downstream metric that matters to your business.</p>

                <div className="space-y-6 mt-4">
                  <div className="rounded-2xl p-6 border-l-4 border-primary" style={{ backgroundColor: 'hsl(210 40% 16%)' }}>
                    <p className="text-foreground font-semibold mb-2">Conversion rates improve</p>
                    <p>because prospective customers who encounter your brand through trusted sources, stronger content coverage, and credible third-party references often arrive with greater confidence before they ever contact you.</p>
                  </div>
                  <div className="rounded-2xl p-6 border-l-4 border-primary" style={{ backgroundColor: 'hsl(210 40% 16%)' }}>
                    <p className="text-foreground font-semibold mb-2">AI visibility improves</p>
                    <p>because AI-assisted discovery and answer-generation systems tend to favor businesses with broader, more consistent, and more credible authority signals — not just a single well-optimized page. The stronger your authority footprint, the easier it becomes for your business to be understood, cited, and surfaced across newer search experiences as well as traditional search.</p>
                  </div>
                  <div className="rounded-2xl p-6 border-l-4 border-primary" style={{ backgroundColor: 'hsl(210 40% 16%)' }}>
                    <p className="text-foreground font-semibold mb-2">Long-term stability improves</p>
                    <p>because authority creates staying power. It is harder to displace a business with real topical depth, brand presence, and off-site trust than one relying on thin on-page optimization alone.</p>
                  </div>
                </div>

                <div className="rounded-2xl p-6 space-y-4 border-l-4 border-primary mt-4" style={{ backgroundColor: 'hsl(210 40% 16%)' }}>
                  <p className="text-foreground font-semibold">The opportunity most local businesses are missing</p>
                  <p>is that many still have only a shallow authority footprint: a website, a few citations, and some basic SEO. The deeper structure of topical coverage, brand reinforcement, and off-site trust is often missing. That is not just a weakness. It is a competitive opportunity for businesses willing to build authority systematically.</p>
                  <p className="text-foreground font-medium">GrowSmallBiz exists to close that gap efficiently, intelligently, and sustainably.</p>
                </div>
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
                  Building real authority at the scale required to move the needle in competitive local markets has historically been slow, fragmented, and resource-intensive. Many providers either charge rates that are difficult for local businesses to justify or cut corners in ways that produce shallow, inconsistent results.
                </p>
                <p>
                  GrowSmallBiz solves this by using agentic AI playbooks and AI-assisted workflows — combined with human strategy, editorial judgment, and quality control at every stage.
                </p>
                <p className="text-foreground font-semibold">Here is what that means in practice:</p>
                <div className="space-y-4">
                  {[
                    { label: "Identify topic gaps faster", text: "Our AI-assisted planning systems help map your topic territory more comprehensively and efficiently than manual research alone, surfacing authority gaps that might otherwise take weeks to uncover." },
                    { label: "Build smarter topical maps", text: "AI workflows help us organize and refine topical structures that better support how modern search systems evaluate depth, relevance, and coverage." },
                    { label: "Plan authority-supporting content more efficiently", text: "We can align supporting content, authority assets, and topical priorities faster without sacrificing strategy or editorial standards." },
                    { label: "Surface entity and reputation gaps", text: "By analyzing competitive positioning and off-site presence at scale, AI-assisted workflows help identify brand, entity, and credibility gaps that manual review can miss." },
                    { label: "Accelerate authority-asset planning", text: "Press release angles, digital PR opportunities, mention opportunities, and supporting authority assets can be prioritized faster, helping the program move with greater consistency." },
                    { label: "Maintain broader monthly coverage", text: "AI-assisted management helps keep content, press, mentions, and link opportunities aligned so the authority strategy stays coherent as it grows." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl p-4 bg-background/60 border border-border/50">
                      <Zap className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <p><strong className="text-foreground">{item.label}</strong> — {item.text}</p>
                    </div>
                  ))}
                </div>
                <p>
                  The result is an authority-building program that delivers more coverage, more consistency, and more strategic depth than a traditionally resourced program of similar cost — without sacrificing the human judgment and editorial quality that genuine authority requires.
                </p>
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
              title="Why"
              titleHighlight="GrowSmallBiz"
            />

            <div className="max-w-3xl mx-auto mb-12 animate-fade-up">
              <p className="text-muted-foreground leading-relaxed text-center">
                There is no shortage of agencies offering some version of link building, content marketing, or digital PR. What makes GrowSmallBiz different is that we do not treat authority building as an isolated tactic. We build it as part of a broader Managed AI SEO system designed specifically for local service businesses.
              </p>
            </div>

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
