import { Head } from "vite-react-ssg";
import { useUtm } from "@/hooks/use-utm";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";
import geoHeroBg from "@/assets/geo-hero-bg.webp";
import { SectionHeader } from "@/components/services/SectionHeader";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { baseContactCTA } from "@/config/contactCTA";
import { Link } from "react-router-dom";
import {
  FileText,
  ArrowRight,
  Search,
  Layers,
  Zap,
  CheckCircle2,
  XCircle,
  Shield,
  Users,
  BarChart3,
  Target,
  Sparkles,
  Eye,
  BookOpen,
  RefreshCw,
  AlertTriangle,
  TrendingUp,
  Building2,
  Type,
  ListOrdered,
  Link2,
  Image,
  Crosshair,
  MousePointerClick,
  Hash,
} from "lucide-react";

const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const SECONDARY_CTA_BASE = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page";

const onPageServices = [
  {
    icon: Type,
    title: "Title Tags and Meta Descriptions",
    description: "Your title tag is the first thing Google reads and often the first thing a searcher sees in results. We craft title tags that include your primary keyword, reflect your service and location naturally, and are written to earn clicks — not just impressions. Meta descriptions are written to reinforce relevance and pull qualified visitors in.",
  },
  {
    icon: ListOrdered,
    title: "Header Structure (H1, H2, H3)",
    description: "Heading hierarchy is how both search engines and readers orient themselves on a page. We audit and rewrite your heading structure so your H1 communicates the primary topic with precision, your H2s organize the page logically, and your H3s add depth and semantic variety without diluting focus.",
  },
  {
    icon: Target,
    title: "Keyword-to-Page Alignment",
    description: "Every important page on your site should target a specific search intent. We map your priority keywords to the right pages, eliminate keyword cannibalization where multiple pages compete for the same term, and ensure that each page is structurally focused on winning its target search.",
  },
  {
    icon: FileText,
    title: "Service Page Optimization",
    description: "Your service pages are your highest-value conversion assets. We optimize them to clearly communicate what the service is, who it is for, how it works, what outcomes clients can expect, and what to do next. This is not filler content. It is structured copy that serves both ranking and conversion.",
  },
  {
    icon: Sparkles,
    title: "Semantic Content Improvements",
    description: "Modern search engines understand meaning, not just exact keywords. We identify and incorporate semantically related terms, entity references, and topically relevant language that signals depth of expertise and increases your relevance across a wider range of related searches.",
  },
  {
    icon: Link2,
    title: "Internal Linking",
    description: "A well-linked site helps search engines discover and understand your content hierarchy. We build intentional internal link structures that connect related pages, pass ranking authority to your most important pages, and give visitors natural navigation paths that keep them engaged and moving toward conversion.",
  },
  {
    icon: Image,
    title: "Image Optimization",
    description: "Images are often overlooked in on-page SEO. We optimize image file names, alt text, and compression to ensure your visuals contribute to relevance signals rather than slowing your page down or wasting crawl budget.",
  },
  {
    icon: Crosshair,
    title: "Search Intent Matching",
    description: "Every search query has an intent behind it — informational, navigational, or transactional. We align your page content structure with the dominant intent for each target keyword so that when someone lands on your page, it immediately answers what they came looking for.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion-Focused Page Enhancements",
    description: "Rankings mean nothing if visitors do not take action. We review your page-level CTAs, trust elements, social proof placement, and clarity of next steps — and make recommendations that improve the path from visitor to lead.",
  },
  {
    icon: Hash,
    title: "Entity Clarity",
    description: "Search engines build understanding around entities — businesses, people, places, and services. We reinforce entity signals on your pages through structured information presentation, consistent NAP references where relevant, and clear business identity signals that help Google understand exactly what your business is.",
  },
];

const commonMistakes = [
  "Generic or missing title tags. Pages titled \"Home,\" \"Services,\" or \"About Us\" tell Google nothing about what the page is for or who it serves.",
  "No clear H1, or an H1 that does not match the page topic. When your main heading does not reflect what the page is actually about, you are sending mixed signals to both users and algorithms.",
  "Service pages that describe the service but do not speak to the customer. Content that lists features without addressing pain points, objections, or desired outcomes fails to convert even when it ranks.",
  "One page trying to rank for too many different services. Lumping \"plumbing, electrical, and HVAC\" onto a single services page dilutes relevance and prevents any single service from ranking competitively.",
  "Thin content that does not establish topical depth. A three-paragraph service page in a competitive market is rarely enough. Search engines reward depth and comprehensiveness.",
  "No internal linking strategy. Pages that exist in isolation — not linked from or to related pages — lose authority and ranking potential that proper site architecture would pass to them.",
  "Duplicate or auto-generated meta descriptions. When every page has the same generic description, you lose click-through rate and send weak relevance signals.",
  "Images that are large, uncompressed, and have no alt text. These slow your page and miss easy relevance opportunities.",
  "Content that does not match search intent. A page targeting a transactional keyword but written like an educational blog post will not convert — and may not rank either.",
];

const processSteps = [
  {
    step: "Step 1",
    title: "Discovery and Baseline Audit",
    description: "We begin with a full audit of your current on-page SEO health: existing title tags, meta descriptions, heading structure, content quality, internal link architecture, image optimization status, and keyword alignment across your priority pages. This gives us a clear baseline and a prioritized list of opportunities.",
  },
  {
    step: "Step 2",
    title: "Keyword and Intent Mapping",
    description: "We research and confirm the primary and supporting keywords for each important page on your site. We map search intent to each page target and identify any cannibalization or alignment issues that need to be resolved before optimization begins.",
  },
  {
    step: "Step 3",
    title: "Page-Level Optimization Planning",
    description: "For each priority page, we build a specific optimization plan that covers every on-page element — from title tag to body content to CTA structure. Our Agentic AI SEO Playbooks accelerate this analysis and help surface semantic content opportunities your current pages are missing.",
  },
  {
    step: "Step 4",
    title: "Optimization Execution",
    description: "We implement the approved changes across your pages. This includes rewriting title tags and meta descriptions, restructuring headings, improving body content for semantic depth and search intent alignment, building internal links, and enhancing conversion elements. Every change is documented.",
  },
  {
    step: "Step 5",
    title: "Review and Refinement",
    description: "After implementation, we review the optimized pages against our quality standards and your business goals. We make refinements as needed and prepare the next optimization cycle.",
  },
  {
    step: "Step 6",
    title: "Ongoing Monitoring and Iteration",
    description: "On-page SEO is not a one-time project. Rankings shift, competitors adjust, and search algorithms evolve. As part of your managed program, we continuously monitor performance, identify new optimization opportunities, and execute updates that keep your pages competitive.",
  },
];

const industries = [
  {
    icon: Building2,
    title: "Home Services and Contractors",
    description: "Plumbers, HVAC companies, roofers, electricians, landscapers, and general contractors who need service and location pages that rank in competitive local markets and convert the visitors who land on them.",
  },
  {
    icon: Shield,
    title: "Healthcare and Wellness Providers",
    description: "Chiropractors, physical therapists, dentists, mental health practices, and wellness clinics that need patient-facing pages built around the search terms their ideal patients are actually using — and structured to build trust before the first appointment.",
  },
  {
    icon: Sparkles,
    title: "Med Spas and Aesthetic Practices",
    description: "Botox, filler, laser, and body contouring service pages that need to rank against both local competitors and high-authority national directories while converting high-intent visitors who are ready to book.",
  },
  {
    icon: BarChart3,
    title: "Legal and Financial Professionals",
    description: "Attorneys, CPAs, financial advisors, and insurance professionals who need service pages that communicate expertise, build immediate credibility, and match the high-intent search behavior of clients making significant decisions.",
  },
  {
    icon: Search,
    title: "Real Estate Agents and Brokers",
    description: "Agents and teams who need neighborhood, service, and location pages that rank for buyer and seller search queries and position their expertise ahead of the national portals.",
  },
];

const whyGSBItems = [
  {
    icon: Target,
    title: "Built for Local Service Businesses",
    description: "We understand how service pages, location relevance, trust signals, and conversion paths work in local markets.",
  },
  {
    icon: Zap,
    title: "Agentic AI SEO Playbooks with Human Strategy",
    description: "Our systems help us move faster and cover more ground, while human oversight keeps the work accurate, useful, and aligned with business goals.",
  },
  {
    icon: Layers,
    title: "Holistic SEO Thinking",
    description: "On-page SEO is important, but it performs best when it supports a broader system that includes technical SEO, local SEO, authority building, and conversion-focused website strategy.",
  },
  {
    icon: Eye,
    title: "Execution with Transparency",
    description: "You should know what is being improved, why it matters, and how the work supports your visibility and lead generation goals.",
  },
];

const faqs = [
  {
    question: "What exactly is on-page SEO?",
    answer: "On-page SEO refers to all the optimizations made directly on the pages of your website to improve their relevance, structure, and visibility in search engine results. This includes title tags, meta descriptions, heading structure, content quality, internal linking, image optimization, and keyword alignment — among other elements. It is everything that happens on the page itself, as opposed to off-page factors like backlinks.",
  },
  {
    question: "How is on-page SEO different from technical SEO?",
    answer: "Technical SEO focuses on the infrastructure of your site — crawlability, site speed, indexability, schema markup, and server-side issues. On-page SEO focuses on the content and structure of individual pages. Both matter, but they address different layers of your search performance. GrowSmallBiz addresses both as part of a managed program, but on-page and technical SEO are distinct disciplines with distinct deliverables.",
  },
  {
    question: "What is an Agentic AI SEO Playbook?",
    answer: "An Agentic AI SEO Playbook is a structured SEO workflow where specialized AI agents are trained to handle specific parts of the work — such as page analysis, keyword and intent mapping, semantic gap detection, internal linking opportunities, content structure recommendations, and optimization planning.\n\nInstead of relying on one generic AI prompt, the work is broken into defined tasks performed by well-trained agents inside a coordinated system. Each agent is focused on a specific role, which makes the process faster, more consistent, and more thorough across service pages and location pages.\n\nAt GrowSmallBiz, these Agentic AI SEO Playbooks do not operate without oversight. Human strategists review, refine, and approve the recommendations before implementation. That means you get the speed and pattern-recognition benefits of AI, with human judgment still in the loop to protect accuracy, business relevance, brand fit, and conversion quality.\n\nIn practical terms, it is not \"AI doing SEO by itself.\" It is a human-guided SEO execution system that uses trained AI agents to help complete the work more efficiently and more intelligently.",
  },
  {
    question: "How long does it take to see results from on-page SEO?",
    answer: "Results vary depending on your starting baseline, the competitiveness of your market, and how many pages need optimization. In many cases, pages that were poorly optimized or missing basic signals can show meaningful ranking improvements within four to eight weeks after changes are implemented and indexed. A comprehensive on-page program produces compounding improvements over time.",
  },
  {
    question: "Do I need to be involved in the optimization process?",
    answer: "Our managed program is designed to require minimal time from you. We conduct the audit, develop the strategy, implement the changes, and report on progress. We will ask for your input on business-specific details — services you offer, markets you serve, unique differentiators — but the SEO work is handled entirely by our team.",
  },
  {
    question: "Will you rewrite all my website content?",
    answer: "Not necessarily. On-page SEO often involves targeted improvements to existing content rather than full rewrites. In some cases, particularly with thin or poorly structured service pages, more substantial content development is warranted. We will be transparent with you about what is needed and why before any significant content changes are made.",
  },
  {
    question: "Can on-page SEO help with conversions, or is it only about rankings?",
    answer: "Both. On-page SEO improves the signals that help search engines rank your pages, but it also improves page structure, clarity, and persuasive elements that directly impact whether a visitor becomes a lead. Stronger heading structure, cleaner service page copy, better CTA placement, and trust signal alignment all contribute to conversion rate alongside ranking performance.",
  },
  {
    question: "What happens if I already had SEO work done on my site before?",
    answer: "Previous SEO work does not disqualify you — it becomes part of our baseline assessment. We audit what was done, evaluate its current effectiveness, identify what is still working, and determine what needs to be updated or corrected. Many businesses we work with have had prior SEO that was either incomplete, outdated, or not aligned with current search standards.",
  },
  {
    question: "Is on-page SEO a one-time project or an ongoing service?",
    answer: "For meaningful, sustained results, on-page SEO requires ongoing attention. Search algorithms evolve, competitors optimize their pages, and new services or markets may require new page optimization. As part of GrowSmallBiz's managed program, on-page SEO is a continuous process — not a one-time deliverable that is finished and forgotten.",
  },
];

const OnPageSEO = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");
  const SECONDARY_CTA_URL = buildUrl(SECONDARY_CTA_BASE, "free-seo-audit");

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>On-Page SEO Services for Local Businesses | GrowSmallBiz</title>
        <meta name="description" content="Managed on-page SEO execution for local service businesses. GrowSmallBiz optimizes title tags, headings, content, internal links, and page structure to improve rankings and conversions." />
        <link rel="canonical" href="https://growsmallbiz.io/services/seo-agency/on-page-seo/" />
      </Head>

      <ServiceJsonLd
        serviceName="On-Page SEO"
        serviceType="On-Page Search Engine Optimization"
        description="Managed on-page SEO execution for local service businesses. Optimize title tags, headings, content structure, internal linking, and conversion elements across service and location pages."
        url="/services/seo-agency/on-page-seo/"
        breadcrumbs={[
          { name: "Services", url: "/services/" },
          { name: "Managed AI SEO", url: "/services/seo-agency/" },
          { name: "On-Page SEO", url: "/services/seo-agency/on-page-seo/" },
        ]}
      />

      <Header />

      <main id="main-content">
        {/* SECTION 1 — HERO */}
        <ServiceHero
          badge={{ icon: FileText, text: "On-Page SEO for Local Service Businesses" }}
          title={<>On-Page SEO That Makes All Money Pages Easier to Rank — and Easier to{" "}</>}
          titleHighlight="Choose"
          subtitle="Your website may already have the right services. But if your key pages do not clearly communicate what you do, where you do it, and why a prospect should trust you, they can underperform in search and lose leads after the click."
          description="GrowSmallBiz uses Agentic AI SEO Playbooks with expert human oversight to strengthen the on-page signals that influence rankings, improve clarity for potential customers, and build a stronger foundation for both traditional search visibility and AI-assisted discovery. This is managed, ongoing execution for local service businesses — not a one-time audit with recommendations left for you to implement."
          primaryCTA={{
            label: "Schedule Strategy Call",
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
          overlayOpacity={50}
        />

        {/* SECTION 2 — WHY ON-PAGE SEO MATTERS */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">WHY IT MATTERS</p>
                <h2 className="section-title">
                  Having a Website Is Not the Same as Having Pages That{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Rank, Get Understood, and Convert</span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  Most local service businesses already have a website. Far fewer have pages that are strategically structured to attract the right search traffic, communicate clear relevance, and turn that traffic into calls, forms, and booked jobs.
                </p>
                <p>
                  That gap is on-page SEO.
                </p>
                <p>
                  When someone searches on Google for "emergency HVAC repair in Austin," "plumber near me," or "Botox med spa near me," and when they ask ChatGPT things like "Who offers emergency HVAC repair in Austin?" or "What's the best med spa near me for Botox?" your page needs to send strong, consistent relevance signals.
                </p>

                <div className="rounded-2xl p-6 space-y-4 border-l-4 border-primary" style={{ backgroundColor: 'hsl(210 40% 16%)' }}>
                  <p className="text-foreground leading-relaxed">
                    Google evaluates whether your page is giving those signals through:
                  </p>
                  <ul className="space-y-2 text-foreground/90">
                    {["Title tags", "Heading structure", "Semantic context", "Internal linking", "Content depth", "Overall page clarity"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  Those same signals also help your business content become easier to interpret across broader search systems and AI-assisted discovery experiences.
                </p>
                <p>
                  At the same time, the people who land on your pages are making split-second judgments. Is this business credible? Do they serve my area? Do they offer exactly what I need? Is the next step obvious? If the page feels vague, generic, or poorly aligned with the search, the opportunity is lost.
                </p>
                <p className="text-xl md:text-2xl font-display font-bold text-foreground text-center pt-4">
                  On-page SEO closes both gaps at once. It helps your pages communicate clearly to search engines while also helping real people feel confident enough to contact you. Inside GrowSmallBiz's Managed AI SEO system, that stronger on-page foundation makes every other SEO investment more effective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHAT GROWSMALLBIZ IMPROVES */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <p className="section-subtitle">OUR ON-PAGE SEO METHODOLOGY</p>
              <h2 className="section-title">
                Managed On-Page SEO Execution Across{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Every Important Page</span>
              </h2>
              <p className="section-description mt-4">On-page SEO is not just adding a keyword to a title tag and calling it done. It is a systematic, multi-element optimization of the pages that matter most to your growth — your service pages, location pages, and homepage.</p>
              <p className="text-muted-foreground mt-2">Here is what GrowSmallBiz optimizes as part of your managed program.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {onPageServices.map((service, index) => (
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

        {/* SECTION 4 — COMMON MISTAKES */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">COMMON ISSUES</p>
                <h2 className="section-title">
                  The On-Page Problems Silently{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Suppressing Your Search Rankings</span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  Most local business websites have not been touched since they were built. And most were never optimized for search to begin with — they were built to look good, not to rank. These are the on-page issues we see most consistently, and they quietly cost businesses rankings and leads every single month.
                </p>

                <div className="space-y-0">
                  {commonMistakes.map((mistake, i) => (
                    <div key={i}>
                      <div className="flex items-start gap-3 rounded-2xl p-6 bg-background/60 border border-border/50">
                        <XCircle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                        <span className="text-foreground/90">{mistake}</span>
                      </div>
                      {i < commonMistakes.length - 1 && (
                        <div className="border-b border-primary/10 mx-8" />
                      )}
                    </div>
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-display font-bold text-foreground text-center pt-4">
                  None of these are unusual. They are the default state of most local business websites. The good news is that every one of them is fixable, and fixing them produces measurable results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — AGENTIC AI SEO PLAYBOOKS */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">OUR APPROACH</p>
                <h2 className="section-title">
                  Faster, More Precise Optimization Across{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Service and Location Pages</span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  Traditional on-page SEO is slow. Manually auditing pages, researching keywords, refining copy, building internal link maps, and tracking implementation across service pages and location pages takes significant time — time most business owners do not have, and time many agencies bill expensively.
                </p>
                <p>
                  GrowSmallBiz uses Agentic AI SEO Playbooks to accelerate that work without reducing it to generic automation. Our system helps surface optimization gaps faster, process more page-level signals, and support more consistent execution across the pages that matter most to your business.
                </p>
              </div>

              <div className="space-y-0 max-w-3xl mx-auto mt-10">
                {[
                  {
                    icon: Zap,
                    title: "Faster analysis and execution cycles.",
                    description: "We can identify issues and opportunities more quickly, which helps shorten the time between audit, decision, and implementation.",
                  },
                  {
                    icon: Layers,
                    title: "Broader optimization coverage.",
                    description: "More of your important service pages and location pages get meaningful attention instead of only a few headline pages.",
                  },
                  {
                    icon: BarChart3,
                    title: "Better-informed recommendations.",
                    description: "We use live search data, SERP analysis, and semantic modeling to guide optimization decisions based on what is actually relevant in your market.",
                  },
                  {
                    icon: Users,
                    title: "Human review before implementation.",
                    description: "Agentic AI SEO Playbooks accelerate the research and structuring process. Human strategists review, refine, and approve the work so recommendations stay commercially grounded, brand-appropriate, and aligned with your goals.",
                  },
                ].map((item, i) => (
                  <div key={i} className="animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50" style={{ animationDelay: `${i * 0.1}s` }}>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3">
                      <item.icon className="w-6 h-6 text-primary mt-1 shrink-0" />
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed pl-9">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="max-w-3xl mx-auto mt-8 animate-fade-up">
                <div className="rounded-2xl p-6 space-y-4 border-l-4 border-primary" style={{ backgroundColor: 'hsl(210 40% 16%)' }}>
                  <p className="text-muted-foreground leading-relaxed">
                    The result is a stronger on-page SEO workflow: faster than manual-only execution, more consistent than ad hoc freelancer work, and better suited to building durable visibility across both search rankings and modern discovery environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <CardCTA
          title="Ready to Strengthen Your On-Page SEO?"
          description="Schedule a strategy session to learn how managed on-page optimization fits into your growth plan."
          buttonText="Schedule Strategy Call"
          buttonHref={PRIMARY_CTA_URL}
          sectionClassName="py-16"
        />

        {/* SECTION 6 — PROCESS */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE PROCESS</p>
                <h2 className="section-title">
                  Your On-Page SEO Execution,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Step by Step</span>
                </h2>
              </div>

              <div className="space-y-0 max-w-3xl mx-auto">
                {processSteps.map((item, i) => (
                  <div key={i}>
                    <div className="animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50" style={{ animationDelay: `${i * 0.05}s` }}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1">{item.step}</span>
                      </div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="border-b border-primary/10 mx-8" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — WHO THIS IS FOR */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <p className="section-subtitle">INDUSTRY RELEVANCE</p>
              <h2 className="section-title">
                Built for Local Service Businesses{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">That Need to Win on Search</span>
              </h2>
              <p className="section-description mt-4">
                On-page SEO delivers the greatest impact for businesses where search visibility translates directly to phone calls, form fills, appointment bookings, and revenue. If your customers search for what you offer before they buy, this service is built for you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {industries.map((item, i) => (
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

            <p className="text-center text-muted-foreground mt-10 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
              If your business fits any of these categories and you are not showing up consistently on the first page for your most valuable service searches, on-page SEO is likely one of the key gaps holding you back.
            </p>
          </div>
        </section>

        {/* SECTION 8 — WHY GROWSMALLBIZ */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">OUR DIFFERENCE</p>
                <h2 className="section-title">
                  Why GrowSmallBiz for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">On-Page SEO</span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  Most businesses do not need another SEO report. They need the right pages improved, the right issues fixed, and the work executed consistently over time.
                </p>
                <p>
                  That is how GrowSmallBiz operates. We are a managed SEO partner for local service businesses, not a strategy-only consultant handing over recommendations for someone else to implement.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto mt-10">
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

              <p className="text-center text-muted-foreground mt-10 italic max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.25s" }}>
                In other words, GrowSmallBiz helps local service businesses turn on-page SEO into a practical growth asset — not just a checklist item.
              </p>

              {/* Internal link back to parent */}
              <div className="text-center mt-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <Link to="/services/seo-agency/" className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1">
                  ← Back to Managed AI SEO Overview
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 — FAQ */}
        <FAQSection
          title="On-Page SEO Questions, Answered"
          faqs={faqs}
          schemaType="FAQPage"
          contactCTA={{
            ...baseContactCTA,
            title: "Have questions about on-page SEO?",
            description: "We're here to help you understand how managed on-page optimization fits your business.",
            tagline: "Let's strengthen your pages together.",
          }}
        />

        {/* SECTION 10 — FINAL CTA */}
        <section id="final-cta" className="py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <p className="text-primary font-medium mb-4">THE NEXT STEP</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                Your Most Important Pages Should Be Driving More Rankings, More Trust, and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">More Leads</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                If your key service pages and location pages are unclear, under-optimized, or poorly aligned with search intent, they can hold back both your rankings and your conversion rate. That means lost visibility, lost clicks, and lost business.
              </p>
              <p className="text-base text-muted-foreground mb-4 max-w-3xl mx-auto">
                On-page SEO helps turn your existing website into a stronger growth asset by improving page clarity, relevance, structure, and conversion readiness. It also strengthens the foundation that supports your broader SEO performance over time.
              </p>
              <p className="text-base text-muted-foreground mb-10 max-w-3xl mx-auto">
                GrowSmallBiz can audit your current pages, identify the gaps that are limiting performance, and implement a managed on-page optimization plan built around measurable business impact.
              </p>
              <p className="text-foreground font-medium mb-6">
                Start with a free audit and see where your most important pages stand now.
              </p>
            </div>

            <CardCTA
              title="Let's Strengthen Your On-Page SEO"
              description="Schedule your free strategy session or get a no-obligation SEO audit to see where you stand."
              buttonText="Schedule Strategy Call"
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

export default OnPageSEO;
