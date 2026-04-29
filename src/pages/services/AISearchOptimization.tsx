import { Head } from "vite-react-ssg";
import { useUtm } from "@/hooks/use-utm";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { ImageObjectJsonLd } from "@/components/seo/ImageObjectJsonLd";
import { SpeakableJsonLd } from "@/components/seo/SpeakableJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { baseContactCTA } from "@/config/contactCTA";
import { Link } from "react-router-dom";
import heroBg from "@/assets/ai-search-optimization-hero-bg.webp";
import {
  Sparkles,
  ArrowRight,
  Search,
  FileText,
  Layers,
  Cpu,
  Megaphone,
  BarChart3,
  CheckCircle2,
  Bot,
  TrendingUp,
  Zap,
  ShieldCheck,
  Target,
  Quote,
} from "lucide-react";

const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const SECONDARY_CTA_BASE = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page";

const fiveSigns = [
  "You rank well on Google but never get mentioned in ChatGPT or Perplexity. That's the most common pattern in 2026 — and it's a signal, not a coincidence. AI engines and Google use different ranking criteria.",
  "Your business name returns vague or wrong answers when typed into AI. Inconsistent citations across the web have left your \"entity\" unclear to large language models, so they hedge or pull from outdated sources.",
  "Competitors with smaller websites are showing up in AI Overviews where you used to rank. AI surfaces aren't rewarding domain authority the way Google does — they're rewarding clarity, structure, and topical depth.",
  "Your phone calls and form submissions have plateaued, even though impressions are flat or up. You're being seen, but not chosen — because the choice is increasingly being made before the click.",
  "You've never published content structured as direct answers to specific customer questions. Without question-format content and proper schema, AI engines can't extract you as a citation candidate.",
];

const comparisonRows = [
  ["Surface", "Google, Bing blue-link results", "ChatGPT, Gemini, Perplexity, AI Overviews"],
  ["Goal", "Rank well in organic results", "Be cited and quoted inside AI answers"],
  ["Primary signals", "Backlinks, on-page content, domain authority", "Entity clarity, content structure, multi-source consensus"],
  ["Content emphasis", "Long-form keyword-aligned pages", "Short direct answers + question-format chunks"],
  ["Authority sources", "Industry publications, link profile", "Reddit, LinkedIn, YouTube, plus traditional sources"],
  ["Measurement", "Rank position, organic traffic", "Citation share, AI mentions, sentiment"],
  ["Relationship", "Foundation — required for AI visibility", "Layer — built on top of traditional SEO"],
];

const shifts = [
  {
    icon: TrendingUp,
    label: "Shift 1",
    title: "Search has decoupled from clicks",
    headline: "The zero-click era is here",
    body: "Approximately 64% of Google searches now end without a click to any website. AI Overviews — Google's generative summaries that pull from multiple sources — appear above the traditional organic results on roughly 26% of all U.S. queries and continue expanding into commercial and local-intent searches. For informational and research queries, the AI summary often satisfies the user before they ever scroll to a blue link.",
  },
  {
    icon: Layers,
    label: "Shift 2",
    title: "AI engines reward different signals on top of Google ranking",
    headline: "Strong Google rankings help — but they aren't sufficient on their own",
    body: "Ranking #1 on Google is necessary but not sufficient for AI visibility. Backlinko's analysis of Ahrefs data found that pages at position 1 have a 58% chance of being cited by ChatGPT — a strong correlation that tells you traditional SEO matters more than ever. But the same study confirms 80% of LLM citations don't rank in Google's top 100. AI engines weigh different signals on top of ranking: entity clarity, multi-source consensus across third-party platforms, and content extractability. Search Engine Land's coverage of the 2026 SOCi Local Visibility Index found that fewer than half of brands leading Google local visibility also lead in AI visibility — proof that traditional SEO is the foundation, but a layer of AI-specific optimization is required on top.",
  },
  {
    icon: Target,
    label: "Shift 3",
    title: "AI-sourced leads convert at higher rates",
    headline: "When AI recommends you, buyers are already pre-qualified",
    body: "A buyer who arrives via an AI recommendation has already received third-party validation — the AI engine has effectively vouched for you in front of the customer. Backlinko reports that visitors discovered through AI answers are 4.4 times more valuable than visitors from traditional search (Semrush data). HubSpot's own AEO program data shows AI-sourced leads converting at 3 times the rate of traditional search leads. Research published in the Journal of Marketing Research on AI's impact on search optimization and conversion rates documents the same pattern across industries: AI-mediated discovery produces materially higher purchase intent than traditional channels. Gartner's hyper-local SEO research confirms the conversion uplift is most pronounced for local service categories, where AI recommendations function as trusted referrals.",
  },
  {
    icon: Zap,
    label: "Shift 4",
    title: "The window is open, and closing",
    headline: "Early movers are setting the defaults",
    body: "Most local service businesses haven't started AI Search Optimization. That is the opportunity. AI engines are still building their reference patterns for many local categories, which means the businesses being cited today are establishing the defaults for tomorrow. MIT Technology Review's research on small business adoption of AI search technologies found that adoption is bimodal: a small minority of forward-looking operators are claiming category positions, while the majority are still treating AI search as a 2027 problem. Gartner's research on the risks of delaying AI adoption documents what happens to the latter group — visibility losses compound, and recovery costs grow exponentially with each quarter of inaction. WordStream's 2026 SEO Trends report adds the practitioner side: 86% of SEO professionals have already integrated AI tools into their workflows.",
  },
];

const pillars = [
  {
    icon: Search,
    num: "01",
    title: "AI Search Audit",
    subtitle: "Where you stand today, in plain numbers",
    body: "Every engagement starts with our AI Optimization Audit — a fixed-fee, low-friction starting point that doubles as your standalone first project with us. We run your business name, your services, and your competitor set across ChatGPT, Gemini, Perplexity, and Google AI Overviews. We document mention frequency, citation accuracy, sentiment, and competitive share-of-voice. You receive a baseline that's measurable — not opinions, evidence — along with a 90-day prioritized roadmap of the highest-leverage moves. Many clients start with the audit alone and decide whether to engage the full done-for-you service after they see what's in it.",
  },
  {
    icon: FileText,
    num: "02",
    title: "Content framework re-architecture",
    subtitle: "Content that AI can actually extract",
    body: "AI engines extract specific passages, not entire pages. We restructure your service pages, FAQ pages, and blog content using the principles AI engines reward — principles that align with Harvard Business Review's research on generative AI content strategies for business growth, which documents the same content-structure shifts now baked into how LLMs select and synthesize sources:",
    bullets: [
      "<strong>50–70 word direct answers</strong> at the top of every page, written in plain language and structured to be quotable as a complete unit",
      "<strong>Two-to-three-sentence paragraphs</strong> for high \"token yield\" — the amount of structured information a model can extract from a single chunk",
      "<strong>Question-format headlines</strong> that mirror how customers actually ask AI engines for help",
      "<strong>Original statistics and data</strong> with attribution, because AI engines reward content that adds new information rather than recycling existing material",
      "<strong>Author bios with verifiable credentials</strong> — a critical signal for E-E-A-T evaluation by both Google and AI systems",
      "<strong>Content freshness cycles</strong> that update key pages quarterly, since AI engines downweight content older than 12 months for time-sensitive categories",
    ],
  },
  {
    icon: Bot,
    num: "03",
    title: "Entity optimization",
    subtitle: "Make sure AI knows who you are",
    body: "An entity, in AI search terms, is a real-world thing the model can identify and associate with facts — your business, your founder, each of your services, the cities you serve. We build a deeply nested schema architecture (Organization → Service → Person → Place → Offer → Review) so AI engines can map your business cleanly. We tie your entities to authoritative external references through sameAs declarations where appropriate, and we audit and correct citation inconsistencies across the web that confuse AI models.",
  },
  {
    icon: Cpu,
    num: "04",
    title: "Technical AI-readiness",
    subtitle: "Make sure AI can actually read your site",
    body: "AI agents bounce off poorly built pages. According to Search Engine Land's reporting on 2025 ChatGPT crawler behavior, 46% of ChatGPT bot visits begin in plain HTML reading mode — no images, no CSS, no JavaScript — and 63% of those agents leave the page immediately when they encounter slow loads, JavaScript-rendered content, or HTTP errors. Voice-search optimization sits in the same technical layer — Moz's research on voice search and AI SEO trends documents how voice queries (which now route primarily through AI assistants) require the same structural clarity AI extractors demand. We audit and fix:",
    bullets: [
      "<strong>Crawler access</strong> in <code>robots.txt</code> for AI bots: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot",
      "<strong>Server-side rendering</strong> of critical answer content so it appears in initial HTML",
      "<strong>Page speed</strong> and Interaction to Next Paint (<strong>INP</strong>) — the new Core Web Vital that AI agents measure with limited rendering budgets",
      "<strong>Mobile usability</strong> and Core Web Vitals across the site",
      "<strong>Schema deployment</strong> for Organization, LocalBusiness, Service, Person, FAQ, Review, and Offer types",
      "<strong>Voice-search compatibility</strong> through natural-language content patterns that match how prospects actually ask AI assistants for help",
    ],
  },
  {
    icon: Megaphone,
    num: "05",
    title: "Authority & brand mention building",
    subtitle: "AI engines reward multi-source consensus",
    body: "AI engines don't trust a website that only talks about itself. They look for consensus across the web — the pattern of independent sources mentioning your business in connection with your services and your geography. We build that pattern through:",
    bullets: [
      "<strong>Unlinked brand mention placements</strong> on category-relevant publications and industry sites",
      "<strong>Reputation management</strong> on Google Business Profile, Yelp, and industry-specific review platforms — AI engines treat reviews as a trust filter, not a ranking signal",
      "<strong>Strategic presence on Reddit, Quora, YouTube, and LinkedIn</strong> — the four platforms most heavily cited by ChatGPT, Perplexity, and AI Overviews in 2026",
      "<strong>Local PR placements</strong> that establish topical authority for your geography",
      "<strong>Sentiment monitoring</strong> across the web so we catch and respond to issues before they shape AI consensus",
    ],
  },
  {
    icon: BarChart3,
    num: "06",
    title: "Monthly reporting & iteration",
    subtitle: "Citations tracked, score trended, strategy adjusted",
    body: "You receive monthly reports tracking your AI visibility across each major engine, your citation share-of-voice against competitors, the specific content updates and authority signals deployed in the previous sprint, and the priorities for the next 30 days. No black box, no \"trust the process\" — every metric is in your dashboard.",
  },
];

const whyItems = [
  {
    title: "Three decades of search strategy, applied to your local market",
    body: "GrowSmallBiz founder Subrata Guha spent 30+ years leading Sales, Marketing, Supply Chain, and digital transformation work for Fortune 500 brands. AI search is the third major shift in search he has navigated — after the rise of Google in the early 2000s and the mobile-first transition in the 2010s. The pattern is consistent every time: early movers compound. He built GrowSmallBiz specifically to bring enterprise-grade search strategy to local service businesses, on terms and at a price that fit how those businesses actually operate.",
  },
  {
    title: "Built specifically for local service businesses",
    body: "We are not a generalist agency. Our entire system is built around five customer profiles: home service contractors, health and wellness practices, real estate professionals, restaurants, and photographers. Every framework, audit template, content pattern, and reporting structure is calibrated to how those businesses actually win — not adapted from B2B SaaS playbooks that don't translate.",
  },
  {
    title: "One connected system, not a pile of tools",
    body: "AI Search Optimization runs alongside our other SEO Agency disciplines (Local SEO, Technical SEO, Authority Building, On-Page SEO, Link Building) and our broader service lines — Conversion-Focused Website Design, Paid Advertising, Marketing Automation, and our AI Receptionist & Conversational AI suite. One strategist owns your account, and every channel feeds the same lead flow.",
  },
  {
    title: "No long-term contracts",
    body: "You're not getting a junior account manager running templates. You're getting enterprise-grade strategy applied directly to your local market, on a month-to-month engagement. We earn the relationship every month.",
  },
];

const baselineRows = [
  ["ChatGPT visibility", "0%", "Business never appeared in \"best HVAC near me\" prompts"],
  ["Gemini visibility", "12%", "Appeared inconsistently, often with wrong service area"],
  ["Perplexity visibility", "4%", "Cited only once in 25 test prompts"],
  ["Google local 3-pack", "Position 4–6", "Consistent in core service area but missing emergency-intent queries"],
  ["AI-attributed traffic", "Unmeasured", "No tracking infrastructure in place"],
];

const resultRows = [
  ["ChatGPT visibility", "38%", "Strongest on emergency-intent prompts (22% on general HVAC)"],
  ["Gemini visibility", "67%", "Now consistently top-3 in local queries"],
  ["Perplexity visibility", "41%", "Citation accuracy verified at 100%"],
  ["Google local 3-pack", "Position 1–2", "Emergency keywords now ranking in pack"],
  ["AI-attributed lead share", "14%", "Of new lead volume; conversion rate 2.1× organic average"],
];

const faqs = [
  {
    question: "What is AI Search Optimization?",
    answer: "AI Search Optimization is the practice of structuring your website, content, and digital footprint so generative AI engines — ChatGPT, Gemini, Perplexity, and Google's AI Overviews — recommend, cite, and quote your business when prospects ask category questions. It combines two disciplines: <a href=\"/services/seo-agency/aeo/\">Answer Engine Optimization (AEO)</a> and <a href=\"/services/seo-agency/geo/\">Generative Engine Optimization (GEO)</a>.",
  },
  {
    question: "How is AI Search Optimization different from traditional SEO?",
    answer: "Traditional SEO optimizes your website to rank in Google and Bing search results. AI Search Optimization optimizes your business to be cited and quoted inside AI-generated answers — a different surface with different ranking signals. Backlinko reports that 80% of pages cited by ChatGPT, Perplexity, and Copilot don't rank in Google's top 100. The two disciplines complement each other but require distinct optimization.",
  },
  {
    question: "How is AI Search Optimization different from \"AI SEO\"?",
    answer: "We use \"AI SEO\" to describe how we deliver search services — using AI agentic playbooks to accelerate execution across every SEO discipline. AI Search Optimization describes what surface we're optimizing for — the AI engines themselves. AI Search Optimization is one service inside our broader AI SEO offering, alongside Local SEO, Technical SEO, Authority Building, On-Page SEO, and Link Building.",
  },
  {
    question: "How long before I see results from AI Search Optimization?",
    answer: "Most clients see initial citation appearances in ChatGPT and Perplexity within 60 to 90 days, and meaningful share-of-voice growth within 4 to 6 months. <a href=\"/services/seo-agency/aeo/\">AEO</a> results — featured snippets, voice answers, AI Overview citations — tend to appear faster than <a href=\"/services/seo-agency/geo/\">GEO</a> results, because AEO ranking criteria overlap more with traditional SEO signals you may already have working in your favor.",
  },
  {
    question: "Will AI Search Optimization replace my Google SEO efforts?",
    answer: "No — and it shouldn't. Traditional SEO is the foundation AI Search Optimization builds on, not a discipline being replaced. Backlinko's 2026 data shows pages ranking #1 on Google have a 58% chance of being cited by ChatGPT — strong rankings make AI visibility easier, not redundant. WordStream reports traditional search still drives roughly 34 times the traffic of AI search engines. Run AI Search Optimization alongside Local SEO, Technical SEO, and On-Page SEO for full coverage.",
  },
  {
    question: "Do I need to write all-new content, or can existing pages be optimized?",
    answer: "Most clients start with a re-architecture of existing pages — restructuring service pages, FAQs, and blog content for AI extractability — and then layer in a steady cadence of new question-format content. According to HubSpot's 2026 small business GEO guide, you don't need a full content overhaul. You need to re-shape what's already working.",
  },
  {
    question: "Which AI engines do you optimize for?",
    answer: "ChatGPT (the largest, with over 900 million weekly users as of April 2026), Google AI Overviews and AI Mode, Gemini, Perplexity, and Microsoft Copilot. We track all five in your monthly reporting and adjust optimization weight based on your category — different industries see different platform mixes.",
  },
  {
    question: "How do you measure AI Search Optimization results?",
    answer: "We track citation frequency across each major AI engine, sentiment of the mentions, citation share-of-voice against your top three competitors, and AI-attributed referral traffic to your website. You also receive a monthly visibility score so progress is unambiguous. Every metric appears in your dashboard with month-over-month trending.",
  },
  {
    question: "Is AI search big enough to bother with for a local service business?",
    answer: "Increasingly, yes. AI Overviews now appear on roughly 26% of U.S. Google searches and continue expanding into commercial and local intent queries. ChatGPT alone serves 900 million weekly users. HubSpot reports that 42% of CRM software buyers use AI search as part of their evaluation process. Local categories are following the same adoption curve, just slightly behind B2B technology.",
  },
  {
    question: "Does AI search replace clicks, or generate them?",
    answer: "Both, depending on query type. Informational queries are increasingly resolved on the AI surface itself — meaning fewer raw clicks but the clicks that do happen are higher-intent. Backlinko reports that visitors discovered through AI answers are 4.4 times more valuable than visitors from traditional search, because they arrive pre-qualified by the AI's recommendation.",
  },
  {
    question: "How much does AI Search Optimization cost?",
    answer: "Pricing depends on the size of your service area, the competitiveness of your category, and the scope of execution required. Most engagements run between $1,500 and $4,500 per month and operate on month-to-month terms with no long-term contracts. The lowest-friction starting point is the AI Optimization Audit — a fixed-fee project that gives you the data to decide whether to engage the full service.",
  },
  {
    question: "Can I start with just an audit?",
    answer: "Yes — and we recommend it. Our AI Optimization Audit is a fixed-fee engagement that surfaces exactly where your business stands across the major AI engines, identifies your highest-leverage gaps, and gives you a 90-day prioritized roadmap. It is the productized entry point for working with us. Most clients start here before deciding whether to engage the full done-for-you service. The audit stands on its own.",
  },
];

const AISearchOptimization = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");
  const SECONDARY_CTA_URL = buildUrl(SECONDARY_CTA_BASE, "free-seo-audit");

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>AI Search Optimization Services for Local Businesses</title>
        <meta
          name="description"
          content="Get cited in ChatGPT, Gemini, Perplexity & Google AI Overviews. Done-for-you AI Search Optimization (AEO + GEO) for local service businesses. Free audit available."
        />
        <meta
          name="keywords"
          content="AI search optimization, AI SEO services, AEO and GEO, get cited in ChatGPT, AI search visibility"
        />
        <link rel="canonical" href="https://growsmallbiz.io/services/seo-agency/ai-search-optimization/" />
        <meta property="og:title" content="AI Search Optimization for Local Service Businesses | GrowSmallBiz" />
        <meta
          property="og:description"
          content="Be the answer when customers ask AI for the best business in your area. AEO + GEO services delivered by a 30-year Fortune 500 search strategist."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://growsmallbiz.io/services/seo-agency/ai-search-optimization/" />
        <meta property="og:image:alt" content="AI Search Optimization services for local service businesses — GrowSmallBiz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Subrata Guha" />
      </Head>

      <ServiceJsonLd
        serviceName="AI Search Optimization"
        serviceType="AI Search Optimization"
        description="Done-for-you AI Search Optimization for local service businesses. Combines Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) so your business gets cited in ChatGPT, Gemini, Perplexity, and Google AI Overviews."
        url="/services/seo-agency/ai-search-optimization/"
        breadcrumbs={[
          { name: "Services", url: "/services/" },
          { name: "Managed AI SEO", url: "/services/seo-agency/" },
          { name: "AI Search Optimization", url: "/services/seo-agency/ai-search-optimization/" },
        ]}
        useEntityGraph={true}
        hasFaqPage={true}
        offerCatalog={{
          name: "AI Search Optimization Services",
          items: [
            {
              name: "Answer Engine Optimization (AEO)",
              description:
                "Structures your content as direct, extractable answers so AI assistants quote your business when prospects ask category questions.",
              url: "https://growsmallbiz.io/services/seo-agency/aeo/",
              category: "AI Search Optimization",
            },
            {
              name: "Generative Engine Optimization (GEO)",
              description:
                "Earns citations and brand mentions across the AI ecosystem so ChatGPT and Perplexity use your business as a source when synthesizing answers.",
              url: "https://growsmallbiz.io/services/seo-agency/geo/",
              category: "AI Search Optimization",
            },
          ],
        }}
      />

      <ImageObjectJsonLd
        pageUrl="/services/seo-agency/ai-search-optimization/"
        images={[
          {
            url: heroBg,
            caption: "AI Search Optimization for local service businesses",
            description:
              "Hero illustration for GrowSmallBiz's AI Search Optimization sub-hub — combining Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) so local service businesses get cited in ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
            width: 1920,
            height: 1024,
          },
        ]}
      />

      <SpeakableJsonLd pageUrl="/services/seo-agency/ai-search-optimization/" />

      <Header />

      <main id="main-content">
        {/* SECTION 1 — HERO */}
        <ServiceHero
          badge={{ icon: Sparkles, text: "Managed AI SEO — AI Search Optimization" }}
          title="AI Search Optimization for Small Businesses"
          subtitle="<strong>Be the Local Business AI Recommends When Customers Ask.</strong>"
          description="AI Search Optimization gets your local service business cited in ChatGPT, Gemini, Perplexity, and Google's AI Overviews — the new front door for high-intent customers. We combine Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) into one done-for-you system, built on a 30-year Fortune 500 search foundation, priced for the way local service businesses actually run."
          primaryCTA={{
            label: "Get Your AI Optimization Audit",
            href: PRIMARY_CTA_URL,
            variant: "hero",
            external: true,
          }}
          note="30+ Years of Fortune 500 Search Strategy • Built for Local Service Businesses • AEO + GEO Under One Strategy • No Long-Term Contracts"
          backgroundImage={heroBg}
          overlayOpacity={82}
        />

        {/* SECTION 2 — SOUND FAMILIAR (PAIN POINTS) */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <p className="section-subtitle">Sound Familiar?</p>
                <h2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
                  When Did You Last Ask ChatGPT About Your Business?
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 text-center animate-fade-up">
                If you ran a search right now in ChatGPT, Gemini, or Perplexity for "best [your service] in [your city]" — would your business appear? For most local service businesses, the answer is no. AI search engines are recommending a tiny fraction of available local businesses, and the gap between Google rankings and AI visibility is widening every quarter.
              </p>

              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-6 text-center animate-fade-up">
                Five Signs Your Business Is Invisible to AI Search
              </h3>

              <div className="space-y-4 max-w-3xl mx-auto">
                {fiveSigns.map((sign, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-2xl p-6 bg-background/60 border border-border/50 animate-fade-up"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <span className="text-primary font-bold text-lg shrink-0">{i + 1}.</span>
                    <p className="text-muted-foreground leading-relaxed">{sign}</p>
                  </div>
                ))}
              </div>

              <div
                className="mt-12 max-w-3xl mx-auto rounded-2xl p-6 border-l-4 border-primary animate-fade-up"
                style={{ backgroundColor: "hsl(210 40% 16%)" }}
              >
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                  The Numbers Behind the Pattern
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A January 2026 study of nearly 350,000 multi-location business profiles found that ChatGPT recommended just 1.2% of locations, Gemini 11%, and Perplexity 7.4% — compared to Google's local 3-pack inclusion rate of 35.9% (SearchEngineLand reporting on the SOCi 2026 Local Visibility Index). AI visibility is three to thirty times harder to earn than ranking well on Google.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHAT IS AI SEARCH OPTIMIZATION? */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <p className="section-subtitle">The Definition</p>
                <h2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
                  What Is AI Search Optimization?
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-16 text-center animate-fade-up">
                AI Search Optimization is the practice of structuring your website, content, and digital footprint so AI engines like ChatGPT, Gemini, Perplexity, and Google's AI Overviews recommend, cite, and quote your business when prospects ask category questions. It combines two disciplines — Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) — built around how generative AI systems interpret user intent and select sources, as documented by Nielsen Norman Group's user-intent research.
              </p>

              <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-8 animate-fade-up">
                The two pillars inside AI Search Optimization
              </h3>

              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
                <GlowCard className="p-8 animate-fade-up">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-foreground mb-3">
                    Answer Engine Optimization (AEO)
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    AEO structures your content to be the direct answer to a question. When a homeowner asks ChatGPT "what's the best HVAC company near me," AEO determines whether the model has clean, structured information about your business available to retrieve, evaluate, and quote. AEO covers question-format content, schema markup, FAQ structures, voice search compatibility, and content chunking — the mechanics of how AI engines extract specific answers from web content.
                  </p>
                  <Link
                    to="/services/seo-agency/aeo/"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Explore AEO services <ArrowRight className="w-4 h-4" />
                  </Link>
                </GlowCard>

                <GlowCard className="p-8 animate-fade-up" style={{ animationDelay: "0.05s" }}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-foreground mb-3">
                    Generative Engine Optimization (GEO)
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    GEO ensures your business appears in synthesized AI answers — the multi-paragraph responses ChatGPT and Perplexity generate when a user asks a comparison or recommendation question. GEO addresses the broader citation ecosystem: how your brand is mentioned across third-party platforms (Reddit, YouTube, LinkedIn, industry publications), how authoritative your content is judged to be, and how often AI engines select you as one of the sources used to compose the answer.
                  </p>
                  <Link
                    to="/services/seo-agency/geo/"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Explore GEO services <ArrowRight className="w-4 h-4" />
                  </Link>
                </GlowCard>
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-8 animate-fade-up">
                How AI Search Optimization works alongside your traditional SEO foundation
              </h3>

              <div className="space-y-5 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  Traditional SEO is not dead. It is the foundation AI Search Optimization builds on. Strong rankings on Google and Bing remain necessary for two reasons: they continue to drive the majority of traffic for almost every local service business, and they correlate directly with AI visibility. Backlinko's 2026 analysis of Ahrefs data found that pages ranking #1 on Google have a 58% chance of being cited by ChatGPT — 3.5 times higher than pages ranking outside the top 20. Google's AI Overviews show the strongest correlation with traditional rankings of any AI surface.
                </p>
                <p>
                  The two disciplines complement each other. AI Search Optimization layers on top — addressing the entity clarity, content extractability, and multi-source consensus signals that AI engines weigh in addition to traditional ranking. Research from Nielsen Norman Group on user intent in AI search confirms the same conclusion practitioners are reaching independently: AI engines reward content that has already earned traditional search authority, then re-evaluate it against a new layer of structural and citation signals.
                </p>
                <p>
                  This is why we deliver AI Search Optimization as a distinct service inside our broader{" "}
                  <Link to="/services/seo-agency/" className="text-primary hover:underline">
                    SEO Agency umbrella
                  </Link>{" "}
                  — alongside (not instead of){" "}
                  <Link to="/services/seo-agency/local-seo/" className="text-primary hover:underline">
                    Local SEO
                  </Link>
                  ,{" "}
                  <Link to="/services/seo-agency/technical-seo/" className="text-primary hover:underline">
                    Technical SEO
                  </Link>
                  ,{" "}
                  <Link to="/services/seo-agency/on-page-seo/" className="text-primary hover:underline">
                    On-Page SEO
                  </Link>
                  ,{" "}
                  <Link to="/services/seo-agency/authority-building/" className="text-primary hover:underline">
                    Authority Building
                  </Link>
                  , and{" "}
                  <Link to="/services/seo-agency/link-building/" className="text-primary hover:underline">
                    Link Building
                  </Link>
                  . Most clients run AI Search Optimization in parallel with at least one traditional SEO discipline.
                </p>
              </div>

              {/* Comparison table */}
              <div className="mt-16 max-w-5xl mx-auto animate-fade-up">
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-6 text-center">
                  How the disciplines complement each other
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-background/60">
                        <th className="text-left p-4 font-semibold text-foreground">Dimension</th>
                        <th className="text-left p-4 font-semibold text-foreground">Traditional SEO</th>
                        <th className="text-left p-4 font-semibold text-primary">AI Search Optimization</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, i) => (
                        <tr
                          key={i}
                          className={i % 2 === 0 ? "bg-background/30" : "bg-background/60"}
                        >
                          <td className="p-4 font-medium text-foreground">{row[0]}</td>
                          <td className="p-4 text-muted-foreground">{row[1]}</td>
                          <td className="p-4 text-muted-foreground">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHY THIS MATTERS NOW (4 SHIFTS) */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <p className="section-subtitle">Why This Matters Now</p>
                <h2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
                  Why AI Search Optimization Is Non-Negotiable in 2026
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 text-center animate-fade-up">
                AI search has crossed from "emerging trend" to primary discovery channel for an increasing share of category queries. McKinsey Global Institute's research on AI and customer engagement documents the speed of this shift across industries. Three converging forces make AI Search Optimization a 2026 priority for every local service business that wants to protect lead flow over the next 24 months — and a fourth that closes the early-mover window faster than most owners realize.
              </p>

              <div className="space-y-6 max-w-3xl mx-auto">
                {shifts.map((shift, i) => {
                  const Icon = shift.icon;
                  return (
                    <div
                      key={i}
                      className="rounded-2xl p-8 bg-background/60 border border-border/50 animate-fade-up"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                            {shift.label}
                          </p>
                          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">
                            {shift.title}
                          </h3>
                          <p className="font-semibold text-foreground mb-3">{shift.headline}</p>
                          <p className="text-muted-foreground leading-relaxed">{shift.body}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className="mt-12 max-w-3xl mx-auto rounded-2xl p-6 border-l-4 border-primary animate-fade-up"
                style={{ backgroundColor: "hsl(210 40% 16%)" }}
              >
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                  The Historical Parallel
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  AI search in 2026 is where Google search was around 2008. The brands that planted their flag early dominated the next decade of organic traffic. The brands that waited for the channel to "prove itself" spent the next decade paying agencies to win back the ground they could have held for free.
                </p>
              </div>

              <div className="mt-10 text-center animate-fade-up">
                <p className="text-foreground mb-4">
                  Find out exactly where you stand in AI search.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href={PRIMARY_CTA_URL} target="_blank" rel="noopener noreferrer">
                    Get your AI Optimization Audit <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — THE GROWSMALLBIZ SYSTEM (6 PILLARS) */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <p className="section-subtitle">The GrowSmallBiz System</p>
                <h2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
                  What's Included in Our AI Search Optimization Service
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-16 text-center animate-fade-up">
                Our AI Search Optimization service combines AEO and GEO into a single integrated program built on six operational pillars: AI Search Audit, Content Framework Re-Architecture, Entity Optimization, Technical AI-Readiness, Authority & Brand Mention Building, and Monthly Reporting. We execute every layer for you — from the baseline audit through monthly reporting on citations across ChatGPT, Gemini, Perplexity, and Google AI Overviews.
              </p>

              <div className="space-y-6 max-w-4xl mx-auto">
                {pillars.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={i}
                      className="rounded-2xl p-8 bg-background/60 border border-border/50 animate-fade-up"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-bold text-primary mb-1">PILLAR {p.num}</p>
                          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1">
                            {p.title}
                          </h3>
                          <p className="text-sm font-medium text-foreground/80 italic mb-4">
                            {p.subtitle}
                          </p>
                          <p className="text-muted-foreground leading-relaxed mb-4">{p.body}</p>
                          {p.bullets && (
                            <ul className="space-y-2">
                              {p.bullets.map((b, bi) => (
                                <li key={bi} className="flex items-start gap-3">
                                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                                  <span
                                    className="text-sm text-muted-foreground leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: b }}
                                  />
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — TWO SUB-SERVICE CARDS */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-up">
              <p className="section-subtitle">The Two Disciplines</p>
              <h2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
                The Two Disciplines Inside AI Search Optimization
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <GlowCard className="p-10 animate-fade-up">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Search className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Answer Engine Optimization (AEO)
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The discipline of structuring your content as direct, extractable answers — so when a customer asks an AI assistant a specific question about your category, the model retrieves and quotes your content. AEO covers question-format content, schema, FAQ optimization, voice search, and content chunking.
                </p>
                <Button variant="hero" asChild>
                  <Link to="/services/seo-agency/aeo/">
                    Explore AEO Services <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </GlowCard>

              <GlowCard className="p-10 animate-fade-up" style={{ animationDelay: "0.08s" }}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Generative Engine Optimization (GEO)
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The discipline of earning citations and brand mentions across the AI ecosystem — so when ChatGPT and Perplexity synthesize answers, your business is one of the sources used to compose the response. GEO covers third-party authority, content gain, multi-platform presence, and citation network building.
                </p>
                <Button variant="hero" asChild>
                  <Link to="/services/seo-agency/geo/">
                    Explore GEO Services <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </GlowCard>
            </div>
          </div>
        </section>

        {/* SECTION 7 — REAL RESULTS (HVAC CASE STUDY) */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <p className="section-subtitle">Real Results</p>
                <h2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
                  What AI Search Optimization Looks Like in Practice
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 text-center animate-fade-up">
                We measure success in three connected dimensions: AI citation share across the major engines, traditional search visibility on Google, and lead-to-call conversion. The case below reflects a current client engagement and aligns with industry benchmarks documented across Search Engine Journal's 2023–2024 case study coverage of AI SEO programs. Client name is withheld per white-label agency agreement; all metrics are from real client data.
              </p>

              <div className="rounded-2xl p-8 bg-background/60 border border-border/50 animate-fade-up">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                  Case Study — HVAC Contractor
                </p>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">Engagement type</h3>
                <p className="text-muted-foreground mb-8">
                  AI Search Optimization (AEO + GEO) layered on top of an existing local SEO program.
                </p>

                <h4 className="text-lg font-display font-bold text-foreground mb-4">
                  Starting baseline (Month 0)
                </h4>
                <div className="overflow-x-auto rounded-xl border border-border mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-background/40">
                        <th className="text-left p-3 font-semibold text-foreground">Metric</th>
                        <th className="text-left p-3 font-semibold text-foreground">Baseline</th>
                        <th className="text-left p-3 font-semibold text-foreground">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {baselineRows.map((r, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-background/20" : "bg-background/40"}>
                          <td className="p-3 font-medium text-foreground">{r[0]}</td>
                          <td className="p-3 text-muted-foreground">{r[1]}</td>
                          <td className="p-3 text-muted-foreground">{r[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h4 className="text-lg font-display font-bold text-foreground mb-4">After 6 months</h4>
                <div className="overflow-x-auto rounded-xl border border-primary/30">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="text-left p-3 font-semibold text-foreground">Metric</th>
                        <th className="text-left p-3 font-semibold text-primary">Result</th>
                        <th className="text-left p-3 font-semibold text-foreground">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {resultRows.map((r, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-background/20" : "bg-background/40"}>
                          <td className="p-3 font-medium text-foreground">{r[0]}</td>
                          <td className="p-3 font-semibold text-primary">{r[1]}</td>
                          <td className="p-3 text-muted-foreground">{r[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 text-xs text-muted-foreground italic">
                  <ShieldCheck className="w-4 h-4 inline mr-1 text-primary" />
                  <strong>White-label attribution:</strong> Client name withheld per agency agreement. All metrics are from real client engagement. This is the only case study published on this page; additional case studies live on the AEO and GEO child pages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — WHY GROWSMALLBIZ */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <p className="section-subtitle">Why GrowSmallBiz</p>
                <h2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
                  Why Local Service Businesses Choose GrowSmallBiz
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {whyItems.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-6 bg-background/60 border border-border/50 animate-fade-up"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <h3 className="text-lg font-display font-bold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-8">{item.body}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10 animate-fade-up">
                <Link
                  to="/services/seo-agency/"
                  className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
                >
                  ← Back to Managed AI SEO Overview
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 — FAQ */}
        <FAQSection
          title="Frequently Asked Questions About AI Search Optimization"
          faqs={faqs}
          schemaType="FAQPage"
          schemaId="https://growsmallbiz.io/services/seo-agency/ai-search-optimization/#faqpage"
          contactCTA={{
            ...baseContactCTA,
            title: "Have questions about AI Search Optimization?",
            description:
              "We're here to help you understand how AEO and GEO work together for your business.",
            tagline: "Let's get your business cited where buyers are now asking.",
          }}
        />

        {/* SECTION 11 — CLOSING CTA */}
        <section
          id="final-cta"
          className="py-20 lg:py-28"
          style={{
            background:
              "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <p className="text-primary font-medium mb-4">Ready to Be the Answer?</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight bg-gradient-heading bg-clip-text text-transparent">
                Be the Answer When Customers Ask AI
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
                The businesses being cited in ChatGPT, Gemini, and Perplexity today are setting the defaults for the next decade. The window for early movers is open — but it isn't staying that way. Get your AI Optimization Audit. We'll show you exactly where your business stands in AI search today, what your top three competitors are doing differently, and the 90-day roadmap of the highest-leverage moves you can make.
              </p>
            </div>

            <CardCTA
              title="Get Your AI Optimization Audit"
              description="Schedule your free strategy session to see where you stand in ChatGPT, Gemini, Perplexity, and Google AI Overviews."
              buttonText="Get Your AI Optimization Audit"
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

            <p className="text-sm text-muted-foreground mt-6 text-center max-w-2xl mx-auto">
              AI Search Optimization is delivered as part of the GrowSmallBiz Managed AI SEO system, alongside Local SEO, Technical SEO, On-Page SEO, Authority Building, and Link Building.
            </p>

            <div
              className="text-center mt-12 text-sm text-muted-foreground space-y-1 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <p>
                GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses
                Nationwide
              </p>
              <p>The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI.</p>
            </div>
          </div>
        </section>

        {/* SECTION 12 — CONSULTATION FORM (LOCKED BLOCK) */}
        <ConsultationFormSection />
      </main>

      <Footer />
    </div>
  );
};

export default AISearchOptimization;
