import { Helmet } from "react-helmet";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SectionHeader } from "@/components/services/SectionHeader";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { GlowCard } from "@/components/ui/glow-card";
import { Button } from "@/components/ui/button";
import { baseContactCTA } from "@/config/contactCTA";
import { Link } from "react-router-dom";
import aiSeoHeroBg from "@/assets/ai-seo-hero-bg.jpg";
import {
  Bot,
  ArrowRight,
  Code,
  FileText,
  MapPin,
  BookOpen,
  MessageCircleQuestion,
  Globe,
  Link2,
  BarChart3,
  Zap,
  Target,
  RefreshCw,
  Layers,
  CheckCircle2,
  Home,
  Heart,
  Sparkles,
  Scale,
  Building,
  ClipboardList,
  Search,
  Settings,
  Rocket,
  LineChart,
  CalendarDays,
  Shield,
  Users,
  Eye,
  Puzzle,
} from "lucide-react";

const PRIMARY_CTA_URL = "https://lp.growsmallbiz.io/digital-growth-strategy-session?utm_source=website&utm_medium=managed-ai-seo&utm_campaign=strategy-session";
const SECONDARY_CTA_URL = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page?utm_source=website&utm_medium=managed-ai-seo&utm_campaign=free-seo-audit";

const pillars = [
  {
    icon: Code,
    title: "Technical SEO",
    description: "If your website's foundation is broken, nothing else in your SEO program will perform. Technical SEO is the infrastructure layer — ensuring search engines can properly access, crawl, index, and understand your site. GrowSmallBiz conducts ongoing technical audits using AI-assisted tools to identify and resolve issues before they suppress your rankings.",
    covers: ["Site health audits", "Crawlability", "Indexation", "Page speed / Core Web Vitals", "Schema markup", "Internal site structure", "Technical issue cleanup", "Mobile usability", "Canonicalization and duplicate-content controls"],
    link: "/services/technical-seo",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    description: "On-page SEO is how your website communicates relevance to both search engines and real people. GrowSmallBiz optimizes your pages for keyword alignment, search intent, and conversion — improving how they are structured, how they communicate value, and how they guide visitors toward action.",
    covers: ["Title tags", "Meta descriptions", "Header structure", "Keyword-to-page alignment", "Service page optimization", "Internal linking", "Image optimization", "Semantic content improvements", "Conversion-focused page enhancements"],
    link: "/services/on-page-seo",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description: "For local service businesses, local SEO is the most direct path to new customers. GrowSmallBiz manages the full local SEO ecosystem: your Google Business Profile, local citations, service area pages, and the trust signals that establish your business as the credible, established provider in your market.",
    covers: ["Google Business Profile optimization", "Citation building", "Citation cleanup / NAP consistency", "Local landing pages", "Local relevance optimization", "Service area optimization", "Local trust signals", "Review signal support"],
    link: "/services/local-seo",
  },
  {
    icon: BookOpen,
    title: "Topical Authority",
    description: "Google rewards websites that demonstrate genuine depth and expertise in their subject area. GrowSmallBiz develops and executes a topical authority strategy that positions your website as the definitive local resource in your category.",
    covers: ["Topic cluster planning", "Service topic expansion", "Supporting content strategy", "FAQ content strategy", "Entity/topic coverage", "Blog/topic ecosystem planning", "Content depth and breadth for authority", "Content mapping around buyer intent"],
  },
  {
    icon: MessageCircleQuestion,
    title: "AEO (Answer Engine Optimization)",
    description: "Search behavior has shifted. People ask questions and expect direct answers — in featured snippets, in People Also Ask results, and increasingly through AI-assisted search interfaces. GrowSmallBiz structures your content to be surfaced as the answer.",
    covers: ["FAQ optimization", "Question-and-answer content structure", "Featured snippet targeting", "Direct-answer formatting", "Semantic answer blocks", "Structured response formatting", "Content optimized for answer engines and AI assistants"],
    link: "/services/aeo",
  },
  {
    icon: Globe,
    title: "GEO / AI-Search Visibility",
    description: "AI-driven search is no longer a future consideration — it is here. Generative Engine Optimization (GEO) is the discipline of ensuring your business is visible and credible within AI-driven search environments. GrowSmallBiz structures your content, entities, and online presence so AI search systems can accurately identify what you do, where you operate, and why you are a trusted choice.",
    covers: ["AI-search readiness", "Entity clarity", "Structured content for AI discovery", "Brand/entity reinforcement", "Citation-worthy content structure", "Content formatting for LLM discovery", "Visibility across emerging AI-driven search environments"],
    link: "/services/geo",
  },
  {
    icon: Link2,
    title: "Authority Building, Link Building, Press Releases & Brand Mentions",
    description: "Your rankings reflect how the broader internet perceives your authority. GrowSmallBiz builds off-site authority through a deliberate, quality-first approach — earning links and mentions from local sources, niche-relevant directories, industry associations, chambers of commerce, and digital PR.",
    covers: ["Backlink strategy", "Link acquisition", "Local authority links", "Niche-relevant links", "Partner / association / chamber links", "Brand mentions", "Digital PR", "Press release strategy", "Press release distribution support", "Off-site authority signals"],
    link: "/services/link-building",
  },
  {
    icon: BarChart3,
    title: "Monthly Optimization & Reporting",
    description: "SEO without visibility into what is actually happening is not a service — it is a black box. Every month, GrowSmallBiz delivers a clear, actionable performance review covering your rankings, local visibility, page-level improvements, and strategic recommendations for the period ahead.",
    covers: ["Monthly performance reviews", "Ranking and visibility tracking", "Local visibility monitoring", "Page-level optimization updates", "Ongoing technical adjustments", "Ongoing content refinement", "Strategic recommendations", "Reporting dashboards / summaries"],
  },
];

const processSteps = [
  { title: "Discovery and Onboarding", text: "A structured strategy session covers your business, service area, competitive landscape, and growth goals. This is a working session, not a sales call — it establishes the foundation for everything that follows." },
  { title: "AI-Assisted SEO Audit", text: "Before any optimization begins, we conduct a comprehensive audit across all eight pillars: technical health, on-page performance, local SEO standing, content gaps, backlink profile, and AI-search readiness. You know exactly where you stand before we start a single task." },
  { title: "Strategy and Roadmap", text: "We develop a prioritized roadmap specific to your business — what we are working on, in what order, and why. Clear focus on the highest-impact activities in your market, sequenced for compounding results." },
  { title: "Execution", text: "We implement — and AI-powered workflows mean we move faster and cover more ground than traditional SEO execution allows. Technical fixes are identified and resolved quickly. Content plans are built and executed. Cross-pillar optimization decisions are made in real time. The result is broader monthly coverage with no pillar left unattended." },
  { title: "Ongoing Optimization", text: "As rankings improve, new opportunities emerge. As search engines update, adjustments are required. GrowSmallBiz monitors your program continuously and makes optimization decisions in real time — so you are never standing still while competitors move." },
  { title: "Monthly Review and Reporting", text: "Each month, you receive a clear performance summary: what moved, what was completed, what is planned next, and where your program stands against its goals. Written for a business owner, not an SEO analyst." },
];

const whyAIPowered = [
  { icon: Zap, title: "Speed of execution", description: "Traditional SEO relies on manual audits, slow content pipelines, and sequential task execution. GrowSmallBiz's AI-powered workflows compress that timeline significantly. Technical issues are identified and resolved in days, not weeks. Content plans are built and validated rapidly. The result: more implementation, more iteration, and faster compounding results." },
  { icon: Layers, title: "Breadth of coverage", description: "All eight SEO pillars are actively maintained every month — not selectively, not one at a time." },
  { icon: RefreshCw, title: "Consistency", description: "AI-assisted workflows eliminate the gap-and-burst pattern that prevents most local SEO programs from compounding over time." },
  { icon: Target, title: "Smarter targeting", description: "AI-driven research surfaces keyword opportunities, competitor gaps, and content angles genuinely relevant to your specific service area and buyer intent." },
  { icon: Settings, title: "Adaptability", description: "Search is evolving across traditional results, answer engines, and AI-driven discovery. This system keeps your program current across all of it." },
];

const industries = [
  { icon: Home, title: "Home Services & Contractors", description: "Homeowners search locally before they call — and your visibility in that moment determines whether the lead goes to you or a competitor. Managed AI SEO ensures you appear in Google's local pack, in Maps, and in organic results for the specific services you offer." },
  { icon: Heart, title: "Healthcare & Wellness", description: "Patients research extensively before booking, and a strong search presence builds credibility before you have spoken to a single prospective patient. Managed AI SEO ensures your practice appears for the conditions, services, and locations you serve." },
  { icon: Sparkles, title: "Med Spas & Aesthetic Practices", description: "The aesthetic market is highly competitive, and local search visibility often determines which practice a new client chooses. Managed AI SEO positions your practice for high-intent local searches while GEO and AEO strategies extend visibility into AI-driven discovery environments." },
  { icon: Scale, title: "Legal & Financial Professionals", description: "Attorneys, financial advisors, and CPAs compete for high-value relationships where credibility is everything. A structured, authoritative SEO program signals expertise to prospective clients before they make first contact." },
  { icon: Building, title: "Real Estate Agents & Brokers", description: "Buyers and sellers research extensively before choosing an agent. Managed AI SEO builds your local search presence across the neighborhoods and transaction types you specialize in — attracting motivated clients already in the market." },
];

const caseStudies = [
  { industry: "HVAC / Home Services", challenge: "Near-zero organic visibility in a competitive metro market; relying entirely on paid ads with no organic fallback.", strategy: "Full 8-pillar buildout: technical audit and cleanup, Google Business Profile optimization, service area page development, citation consolidation, and ongoing local authority building.", outcome: "Placeholder — replace with verified ranking improvements, traffic growth, lead volume changes, and timeline." },
  { industry: "Roofing / Home Remodeling", challenge: "Inconsistent NAP citations, weak topical authority, no presence in Google's local pack for primary service keywords.", strategy: "Citation cleanup, local landing page development for service areas, topical authority content build, and link acquisition from local and industry sources.", outcome: "Placeholder — replace with verified local pack rankings, organic traffic lift, lead quality changes, and timeline." },
  { industry: "Dental / Med Spa / Local Professional Service", challenge: "New practice location with no established domain authority, competing against well-established local providers.", strategy: "Structured onboarding audit, prioritized technical and on-page foundation work, AEO content strategy, GBP optimization, and authority building through local and niche-relevant sources.", outcome: "Placeholder — replace with verified ranking timeline, patient/client inquiry growth, and visibility benchmarks." },
];

const whyGSBItems = [
  { icon: Target, title: "Built for Local Service Businesses", description: "We do not serve e-commerce brands, SaaS companies, or national retailers. Every service and process in our system is designed for local service businesses competing in defined geographic markets." },
  { icon: Layers, title: "A Complete 8-Pillar System", description: "Most agencies lead with what they do well and quietly neglect the rest. GrowSmallBiz manages all eight pillars simultaneously — so nothing goes unaddressed and every component reinforces the others." },
  { icon: Bot, title: "Strategic Execution, Not Just Software", description: "AI-assisted tools allow us to move faster and cover more ground. Experienced strategists make the judgment calls that require local market knowledge and business context. You get efficiency and accountability — not a self-serve dashboard." },
  { icon: Eye, title: "Transparent Reporting, Every Month", description: "You will never wonder what we are working on or whether it is working. Monthly performance reviews give you a clear view of what moved, what was completed, and what is planned — written for a business owner, not an analyst." },
  { icon: Puzzle, title: "Integrated with the Digital Dominance Method", description: "Managed AI SEO works in coordination with your broader marketing channels through the GrowSmallBiz Digital Dominance Method — not in isolation from them." },
  { icon: Shield, title: "Engagement Built on Performance", description: "We earn your business every month. The engagement begins with a 3-month commitment to build a proper foundation, then continues month-to-month — because the relationship should be built on performance and trust, not obligation." },
];

const faqs = [
  { question: "What is Managed AI SEO?", answer: "Managed AI SEO is a fully managed SEO service in which GrowSmallBiz handles your entire program — strategy, implementation, content, technical maintenance, local optimization, authority building, and reporting — using AI-assisted tools and workflows. You do not manage vendors, learn SEO tools, or supervise execution. We own it." },
  { question: "How is this different from traditional SEO?", answer: "Traditional SEO is typically project-based, manual, and focused on a narrow set of tactics. Managed AI SEO is continuous, AI-assisted, and comprehensive — covering all eight pillars simultaneously. The AI layer surfaces and acts on opportunities faster. The managed layer means you have a team running the system, not a consultant sending monthly recommendations." },
  { question: "How long does it take to see results?", answer: "SEO is a long-term channel. Most local service businesses see measurable movement in rankings and local visibility within three to six months, with more substantial results building from six to twelve months onward. The timeline depends on your starting point, competitive landscape, and scope of work. We set realistic expectations from day one." },
  { question: "What is the commitment structure?", answer: "The engagement begins with a 3-month initial commitment. This ensures enough time to complete the foundational audit, build the strategy, and execute the early implementation work that produces lasting results. After the initial 3 months, the engagement continues on a month-to-month basis. Additional details about engagement options are discussed on the strategy call." },
  { question: "Do I need to be involved day-to-day?", answer: "No — that is the point of a managed service. You are involved in the initial onboarding and strategy session, you review your monthly performance summary, and you make decisions about your business direction. The SEO program runs without requiring your ongoing attention." },
  { question: "Can you work with my existing website?", answer: "In most cases, yes. We begin with a thorough audit and work within your current platform where possible. If we identify structural or technical limitations that significantly constrain SEO performance, we will flag them clearly and discuss options. A full rebuild is not a prerequisite for getting started." },
  { question: "How do you report results?", answer: "Each month you receive a performance summary covering keyword rankings, local visibility, traffic trends, the specific work completed, and strategic recommendations for the upcoming period. Reports are written to be understood by a business owner, not an SEO analyst." },
  { question: "Does SEO work with paid advertising?", answer: "Yes — and they work better together. Paid ads deliver immediate visibility while SEO builds sustained organic presence. Over time, strong organic rankings reduce dependence on paid traffic and lower your overall cost per lead." },
  { question: "What makes your approach different from a standard SEO agency?", answer: "Three things: specialization, completeness, and integration. We specialize exclusively in local service businesses. We manage all eight pillars of SEO simultaneously. And the program is integrated with your broader marketing channels through the Digital Dominance Method — so everything works together rather than in silos." },
];

const ManagedAISEO = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Managed AI SEO for Local Service Businesses | GrowSmallBiz</title>
        <meta name="description" content="The complete Managed AI SEO system for local service businesses. GrowSmallBiz runs your entire SEO program — technical, local, content, AEO, GEO, link building, and reporting — so you can focus on running your business." />
        <link rel="canonical" href="https://growsmallbiz.io/services/managed-ai-seo" />
      </Helmet>

      <ServiceJsonLd
        serviceName="Managed AI SEO for Local Service Businesses"
        serviceType="Managed SEO"
        description="The complete Managed AI SEO system for local service businesses — covering technical SEO, on-page, local SEO, topical authority, AEO, GEO, link building, and monthly reporting."
        url="/services/managed-ai-seo"
        breadcrumbs={[
          { name: "Services", url: "/services/managed-ai-seo" },
        ]}
      />
      <Header />

      <main className="min-h-screen bg-background pt-20">
        {/* SECTION 1 — HERO */}
        <section className="relative overflow-hidden py-16 lg:py-24">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${aiSeoHeroBg})` }}
          />
          <div className="absolute inset-0 bg-background/85" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 animate-fade-up">
                <Bot className="w-4 h-4" />
                <span className="text-sm font-medium">Managed AI SEO</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-foreground leading-tight animate-fade-up">
                The Complete Managed AI SEO System for{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Local Service Businesses
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Most local service businesses are invisible online — not because they do bad work, but because their SEO is incomplete, inconsistent, or simply not running. Managed AI SEO changes that. GrowSmallBiz runs your entire SEO program for you — from technical site health and local visibility to content authority, answer engine optimization, and link building — using an AI-powered system built specifically for local service businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <Button variant="hero" size="lg" asChild>
                  <a href={PRIMARY_CTA_URL} target="_blank" rel="noopener noreferrer">
                    Schedule Strategy Session
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href={SECONDARY_CTA_URL} target="_blank" rel="noopener noreferrer">
                    Free SEO Audit
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — WHAT IS MANAGED AI SEO? */}
        <section className="py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="THE SERVICE"
              title="What Is Managed AI SEO — and Why Does It"
              titleHighlight="Matter Now?"
            />

            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 animate-fade-up">
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Traditional SEO was a project. You hired someone to optimize a few pages, build some links, maybe write some blog posts — and hoped it held. That model no longer works in a search environment that changes faster than any single consultant can manually track.
                  </p>
                  <p>
                    Managed AI SEO is a different model: an ongoing, fully managed service in which AI-assisted tools and strategic human oversight work together to continuously audit, optimize, and expand your search presence — across every layer that matters.
                  </p>
                </div>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    For local service businesses, that means your website, Google Business Profile, service pages, content, local citations, and off-site authority are all being monitored and improved on an ongoing basis — not just when something breaks.
                  </p>
                  <p>
                    GrowSmallBiz owns strategy, implementation, optimization, and reporting. You get a clear, consistent picture of what is working and where you are growing — without becoming an SEO expert.
                  </p>
                  <p className="font-medium text-foreground">
                    The result is a search presence that compounds month over month, building lasting visibility and a reliable flow of qualified local leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — THE 8-PILLAR MANAGED AI SEO SYSTEM */}
        <section className="py-20 lg:py-28 bg-card" id="pillars">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="THE SYSTEM"
              title="The 8-Pillar Managed AI SEO"
              titleHighlight="System"
              description="Effective SEO for local service businesses is not a single tactic — it is a coordinated system. Most agencies focus on one or two things and neglect the rest. GrowSmallBiz manages all eight pillars simultaneously, ensuring every component reinforces the others."
            />
            <p className="text-center text-muted-foreground max-w-3xl mx-auto -mt-10 mb-16">
              Each pillar below links to a dedicated service page where you can go deeper. Together, they form an integrated system built to deliver lasting local search authority and a consistent flow of qualified leads.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {pillars.map((pillar, index) => (
                <GlowCard key={index} className="p-8 animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                      <pillar.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{pillar.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{pillar.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {pillar.covers.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {pillar.link && (
                    <Link to={pillar.link} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHO THIS IS FOR */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="IS IT RIGHT FOR YOU?"
              title="Is Managed AI SEO Right for"
              titleHighlight="Your Business?"
              description="Managed AI SEO is built for local service businesses where each new customer — a booked appointment, a signed contract, a completed project — represents meaningful revenue and justifies a real investment in sustainable growth."
            />

            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 animate-fade-up">
              {/* Strong fit */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground">Strong Fit</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "You operate a local service business competing in a defined geographic market",
                    "Each new client, patient, case, or project represents significant revenue",
                    "You have little to no organic traffic, or your local SEO presence is inconsistent",
                    "You have tried SEO before but never experienced a systematic, fully managed approach",
                    "You want your marketing running without requiring your daily involvement",
                    "You are building a long-term growth channel, not chasing a short-term traffic spike",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not the right fit */}
              <div className="rounded-2xl border border-border bg-card/50 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <Users className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground">Not the Right Fit</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  You are a national e-commerce brand, a startup without an established service area, a business seeking one-time consulting only, or a business where per-transaction margin does not support an ongoing SEO investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — HOW IT WORKS */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="HOW IT WORKS"
              title="What Working with GrowSmallBiz on Managed AI SEO"
              titleHighlight="Actually Looks Like"
            />

            <div className="relative max-w-5xl mx-auto">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2" />

              <div className="space-y-16">
                {processSteps.map((step, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <div key={index} className="relative animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary z-10" />
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-px bg-primary/30 ${isLeft ? 'right-[calc(50%+0.375rem)] w-[calc(2rem-0.375rem)]' : 'left-[calc(50%+0.375rem)] w-[calc(2rem-0.375rem)]'}`} />

                      <div className={`md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                        <div className="bg-card/50 border border-border rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(255,127,80,0.15)] transition-all duration-300">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                              <span className="text-sm font-bold text-primary-foreground">{index + 1}</span>
                            </div>
                            <span className="text-sm font-semibold text-primary">Step {index + 1}</span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — WHY AI-POWERED SEO */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-2">THE AI ADVANTAGE</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
                Why AI-Powered SEO Outperforms Traditional Manual SEO for{" "}
                <span className="text-primary">Local Service Businesses</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Manual SEO is slow to implement, difficult to scale, and typically concentrated in one or two areas while the rest goes unaddressed. For local service businesses in competitive markets, that incomplete coverage is a direct liability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyAIPowered.map((item, index) => (
                <div
                  key={index}
                  className="bg-background/80 border border-border rounded-xl p-6 space-y-4 animate-fade-up hover:shadow-[0_0_60px_rgba(255,127,80,0.5)] transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — INDUSTRIES WE SERVE */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="INDUSTRIES"
              title="Managed AI SEO for Local Service Businesses Across"
              titleHighlight="Key Industries"
            />

            <div className="space-y-6 max-w-4xl mx-auto">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-card/50 border border-border rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(255,127,80,0.15)] hover:border-primary/30 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                      <industry.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{industry.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8 — RESULTS IN ACTION */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="PROOF"
              title="Results in"
              titleHighlight="Action"
            />
            <p className="text-center text-sm text-muted-foreground -mt-10 mb-12 italic">
              Case study placeholders shown below. Verified client results will be inserted before final public launch.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((cs, index) => (
                <div key={index} className="bg-card border-2 border-border rounded-2xl overflow-hidden animate-fade-up hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,127,80,0.3)]" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="h-1 bg-gradient-to-r from-primary to-accent" />
                  <div className="p-8 space-y-5">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">{cs.industry}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Challenge</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Strategy</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cs.strategy}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Outcome</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed italic">{cs.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9 — WHY GROWSMALLBIZ */}
        <WhyChooseSection
          title="Why GrowSmallBiz — and Not a Generalist SEO Agency"
          subtitle="OUR DIFFERENCE"
          description="Founded by a marketing strategist with a background in Fortune 500 brand building and local service growth."
          items={whyGSBItems}
        />

        {/* SECTION 10 — FAQ */}
        <FAQSection
          title="Frequently Asked Questions"
          faqs={faqs}
          schemaType="FAQPage"
          contactCTA={{
            ...baseContactCTA,
            title: "Have questions about Managed AI SEO?",
            description: "We're here to help. Let's talk about how a managed SEO program fits your business.",
            tagline: "Let's build your search presence together.",
          }}
        />

        {/* SECTION 11 — FINAL CTA */}
        <section className="py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <p className="text-primary font-medium mb-4">READY TO GROW?</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                Ready to Build a Search Presence That Actually{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Grows Your Business?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                If you depend on a consistent flow of qualified local leads, you need more than a website and hope. You need a managed, AI-powered SEO system that works every month — building visibility, authority, and trust in your market over time.
              </p>
              <p className="text-muted-foreground mb-10 max-w-3xl mx-auto">
                Your strategy session includes a review of your current SEO standing, a look at your local competitive landscape, and a clear picture of what a Managed AI SEO program could produce for your business. No obligation. No pressure. A direct, honest conversation about where you are and what is possible.
              </p>
            </div>

            <CardCTA
              title="Let's Build Your SEO Growth Engine"
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

        {/* SECTION 12 — CONSULTATION FORM */}
        <ConsultationFormSection />
      </main>

      <Footer />
    </div>
  );
};

export default ManagedAISEO;
