import { Link } from "react-router-dom";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import servicesHeroBg from "@/assets/services-hero-bg.webp";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/services/SectionHeader";
import { FAQSection } from "@/components/sections/FAQSection";
import { PersonCTA } from "@/components/services/PersonCTA";
import { Head } from "vite-react-ssg";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { baseContactCTA } from "@/config/contactCTA";
import { useUtm } from "@/hooks/use-utm";
import {
  ArrowRight,
  Globe,
  Search,
  BarChart3,
  Bot,
  Megaphone,
  Sparkles,
  Users,
  Building2,
  Stethoscope,
  Briefcase,
  CheckCircle,
  Layers,
  Target,
  Handshake,
  Zap,
  Shield,
  TrendingUp,
  Wrench,
  MessageCircle,
  Star,
  Phone,
  Rocket,
  ChevronRight,
} from "lucide-react";

/* ───────── data ───────── */

const heroStats = [
  { number: "3–6 mo", description: "To reach top Google rankings for local service searches" },
  { number: "5 min", description: "AI response speed to every new lead inquiry" },
  { number: "24/7", description: "AI Receptionist coverage for after-hours lead capture" },
  { number: "3", description: "Industries — home services, health & wellness, professional" },
];

const proofMetrics = [
  { metric: "+1,395%", label: "Phone calls from local search", attribution: "HVAC Contractor — AI SEO Campaign" },
  { metric: "-64.6%", label: "Cost per acquisition", attribution: "Dental Practice — Google Ads Campaign" },
  { metric: "+552.7%", label: "Website users year over year", attribution: "Med Spa — Local SEO Campaign" },
];

const conversationalQueries = [
  "What's the best digital marketing agency for local service businesses?",
  "How do I get more leads for my HVAC company without spending more on ads?",
  "What does a local SEO agency actually do for a service business?",
  "How do I set up automated follow-up for leads that don't book right away?",
  "Which marketing services should a local contractor start with?",
  "How do I know if my Google Ads are actually generating booked jobs?",
  "What's the difference between SEO and paid ads for a local service business?",
];

const entityCards = [
  {
    badge: "WHAT IS IT",
    title: "What is GrowSmallBiz?",
    body: "GrowSmallBiz is an AI-powered digital marketing agency that builds complete client acquisition systems for local service businesses. It combines website design, managed AI SEO, paid advertising, CRM automation, and AI-powered lead follow-up into one connected growth system — so local business owners can capture more leads, respond faster, and convert more inquiries into booked jobs without managing a stack of disconnected tools.",
  },
  {
    badge: "WHO IT SERVES",
    title: "Who does GrowSmallBiz serve?",
    body: "GrowSmallBiz works exclusively with local service businesses — including home service contractors (HVAC, plumbing, roofing, electrical, landscaping), health and wellness practices (chiropractors, med spas, dental practices), and professional service firms (photographers, real estate agents). The system is designed for business owners who need consistent lead flow but don't have time to manage their own marketing.",
  },
  {
    badge: "WHAT WE DO",
    title: "What does GrowSmallBiz do?",
    body: "GrowSmallBiz builds and manages digital marketing systems that attract qualified leads through search, capture and follow up with them automatically, and convert more of them into booked appointments and jobs. Services include conversion-focused website design, AI-powered SEO for Google and AI search platforms, Google and Meta paid advertising, CRM automation, and AI receptionist and chat — all designed to work together as one connected system.",
  },
];

const navTiles = [
  { icon: Globe, label: "Core Services", anchor: "#core-services" },
  { icon: Search, label: "How It Works", anchor: "#how-it-works" },
  { icon: BarChart3, label: "Growth Packages", anchor: "#growth-packages" },
  { icon: Users, label: "Who We Serve", anchor: "#who-we-serve" },
  { icon: Shield, label: "Why GrowSmallBiz", anchor: "#why-growsmallbiz" },
  { icon: Star, label: "Client Results", anchor: "#client-results" },
  { icon: MessageCircle, label: "FAQs", anchor: "#faqs" },
  { icon: Phone, label: "Get a Consultation", anchor: "#consultation" },
  { icon: Rocket, label: "Schedule Strategy Call", anchor: "external" },
];

const coreServices = [
  {
    title: "Website Design",
    body: "Your website is not a brochure — it is the hub of your entire marketing system. A well-built site does one job above everything else: turn visitors into leads. GrowSmallBiz designs conversion-focused websites built specifically for local service businesses, with clear calls to action, mobile-first layouts, and trust signals that make it easy for the right people to contact you. Every design decision is made with lead capture in mind, not aesthetics for its own sake.",
    bullets: [
      "Conversion-focused layout built to generate calls and form submissions",
      "Mobile-optimized design that works for customers searching on the go",
      "Trust-building structure that positions your business credibly from the first visit",
    ],
    href: "/services/website-design/",
    icon: Globe,
  },
  {
    title: "Managed AI SEO",
    body: "Showing up when someone searches for your service is one of the most valuable things your marketing can do. GrowSmallBiz manages a comprehensive, AI-powered SEO system covering technical health, local visibility, on-page optimization, and authority-building content — all maintained on an ongoing basis so rankings improve over time. The system is also built for emerging AI search formats including AEO and GEO, ensuring your business stays visible as how people search continues to evolve.",
    bullets: [
      "Local SEO that gets your business found in the markets you serve",
      "Ongoing technical and on-page optimization across your full site",
      "Content and authority strategy built for both traditional and AI-powered search",
    ],
    href: "/services/seo-agency/",
    icon: Search,
  },
  {
    title: "Paid Ads",
    body: "When you need leads now — not six months from now — paid advertising is the fastest way to put your business in front of people actively looking for what you offer. GrowSmallBiz manages Google Ads campaigns built around high-intent search traffic, with full conversion tracking, landing page alignment, and ongoing optimization to make sure your budget is working as hard as possible. Paid ads do not replace organic growth — they accelerate it while your longer-term systems build momentum.",
    bullets: [
      "High-intent Google Ads campaigns that reach buyers ready to act",
      "Conversion tracking and landing page alignment that turns clicks into leads",
      "Ongoing optimization focused on cost-per-lead and return on ad spend",
    ],
    href: "/services/paid-advertising/",
    icon: BarChart3,
  },
  {
    title: "CRM Automation",
    body: "Getting a lead is only half the battle. What happens in the minutes after someone fills out a form or misses a call often determines whether you win or lose that job. GrowSmallBiz builds automated follow-up systems — including instant missed call text-back, lead nurture workflows, and pipeline visibility — so no opportunity goes cold because of slow or inconsistent follow-up. The result is a system that works around the clock to keep leads engaged and move them toward booking.",
    bullets: [
      "Instant automated follow-up so no lead goes unanswered",
      "Missed call text-back and nurture workflows that keep prospects warm",
      "Pipeline visibility and booking automation that streamlines conversion",
    ],
    href: "https://lp.growsmallbiz.io/digital-growth-strategy-session",
    icon: Bot,
  },
];

const accelerationServices = [
  {
    title: "Social Media Campaigns",
    body: "Consistency is what turns social media from a time drain into a trust-building asset. GrowSmallBiz manages social media campaigns that keep your brand showing up regularly in the channels where your customers and community spend time. The goal is not vanity metrics — it is steady brand presence that supports your overall digital footprint and keeps you top of mind when someone is ready to make a decision.",
    bullets: [
      "Regular, on-brand content that builds visibility without demanding your time",
      "Social presence that reinforces trust across your full digital footprint",
      "Community-facing campaigns designed for the markets you actually serve",
    ],
    href: "https://lp.growsmallbiz.io/digital-growth-strategy-session",
    cta: "Learn More",
    icon: Megaphone,
  },
  {
    title: "AI Lead Generation",
    body: "Finding new prospects is one of the hardest parts of growing a service business. GrowSmallBiz uses AI-assisted lead discovery to identify new opportunities — surfacing potential clients who match your ideal profile so your outbound efforts start with better data. This service is particularly useful for businesses expanding into new service lines, geographies, or customer segments without adding significant manual prospecting overhead.",
    bullets: [
      "AI-assisted prospect discovery targeted to your ideal client profile",
      "Scalable list-building that fuels outbound and campaign efforts",
      "Designed to create new top-of-funnel volume alongside inbound growth",
    ],
    cta: "Ask About This Service",
    icon: Sparkles,
  },
  {
    title: "LinkedIn Outreach Automation",
    body: "For local service businesses that serve other businesses — professional services, consulting, B2B contractors — LinkedIn is one of the most direct paths to decision-makers. GrowSmallBiz builds automated LinkedIn outreach systems that connect with the right people consistently, at scale, without requiring hours of manual engagement each week. The result is a steady stream of new B2B conversations that would otherwise never happen.",
    bullets: [
      "Automated outreach sequences that connect with decision-makers consistently",
      "Personalized messaging built around your offer and target audience",
      "Scalable B2B prospecting without the manual time investment",
    ],
    href: "https://lp.growsmallbiz.io/digital-growth-strategy-session",
    cta: "Ask About This Service",
    icon: Users,
  },
];

const systemSteps = [
  {
    number: 1,
    title: "Capture",
    tag: "Get Found & Generate Leads",
    items: [
      { name: "Website", desc: "Built to convert visitors into leads" },
      { name: "Managed AI SEO", desc: "Gets you found by the right people at the right moment" },
      { name: "Paid Ads", desc: "Reaches buyers actively searching for your service right now" },
    ],
  },
  {
    number: 2,
    title: "Nurture",
    tag: "Follow Up Automatically",
    items: [
      { name: "CRM Automation", desc: "Follows up instantly, keeps leads warm between touchpoints" },
      { name: "Social Media Campaigns", desc: "Maintains brand visibility and builds trust over time" },
      { name: "LinkedIn Outreach Automation", desc: "Builds B2B relationships at scale without manual effort" },
    ],
  },
  {
    number: 3,
    title: "Convert",
    tag: "Turn Leads Into Booked Jobs",
    items: [
      { name: "CRM Automation", desc: "Automates booking workflows and manages your pipeline" },
      { name: "AI Lead Generation", desc: "Identifies and surfaces new opportunities before competitors do" },
      { name: "Conversion-focused follow-up systems", desc: "Structured sequences that guide prospects to a decision" },
    ],
  },
];

const packages = [
  {
    title: "Starter Growth System",
    bestFor: "Businesses building their digital foundation",
    includes: "Website + CRM Automation",
    body: "A professional, conversion-focused website gives your business a credible home base online — and pairing it with CRM automation means every lead that comes in gets followed up with immediately. This combination is built for businesses that need a solid starting point: show up, capture interest, and respond before the competition does.",
  },
  {
    title: "Visibility & Lead Flow",
    bestFor: "Businesses that need to be found and followed up with consistently",
    includes: "Website + Managed AI SEO + CRM Automation",
    body: "This combination connects visibility with capture and follow-up into one working system. Managed AI SEO builds your presence in search over time, your website converts that traffic into leads, and CRM automation makes sure those leads are followed up with immediately and consistently. For local businesses serious about growing through organic search, this is the core stack.",
    popular: true,
  },
  {
    title: "Full Client Acquisition System",
    bestFor: "Businesses ready to drive aggressive, consistent lead generation",
    includes: "Website + Managed AI SEO + Paid Ads + CRM Automation",
    body: "This is the complete inbound growth engine. Paid ads drive immediate, high-intent traffic while Managed AI SEO builds long-term visibility — and both feed into a website designed to convert and a CRM system that follows up automatically. Businesses running this full system have a consistent, predictable flow of new leads working across multiple channels at once.",
  },
];

const industries = [
  { title: "Home Services", desc: "HVAC, plumbing, roofing, electrical, landscaping, pest control, general contracting", body: "Homeowners searching online for local service providers need to find you fast and trust you quickly. The GrowSmallBiz system is built to make that happen — from search visibility to instant lead follow-up.", icon: Building2 },
  { title: "Healthcare & Wellness", desc: "Dental practices, chiropractic, physical therapy, primary care, wellness clinics", body: "Patients are searching for providers they trust in their local area. A strong website, consistent online presence, and fast follow-up make the difference between a new appointment and a missed opportunity.", icon: Stethoscope },
  { title: "Professional & B2B Services", desc: "Financial advisors, CPAs, consultants, agencies, local professional firms", body: "For businesses that sell expertise and relationships, credibility is everything online. GrowSmallBiz builds the digital presence and outreach systems that support consistent new business development.", icon: Briefcase },
];

const whyCards = [
  { icon: Layers, title: "One connected strategy, not a stack of disconnected vendors.", body: "Every service is designed to work with every other. No gaps, no finger-pointing between vendors, no leads falling through the cracks." },
  { icon: Zap, title: "AI-powered execution at a speed and scale that changes what is possible.", body: "GrowSmallBiz uses AI across visibility, follow-up, lead handling, and conversion — as operational infrastructure, not a marketing claim." },
  { icon: Target, title: "Conversion-first thinking, not just traffic and impressions.", body: "Every service is evaluated by whether it generates leads, bookings, and revenue — not whether it looks busy." },
  { icon: Shield, title: "Built exclusively for local service businesses.", body: "The strategies, messaging, and automation systems are built around how local service businesses actually generate and convert leads." },
  { icon: Handshake, title: "Lead capture and follow-up treated as seriously as lead generation.", body: "Speed of response determines whether you win or lose the lead. The system ensures no inquiry waits more than 5 minutes for a response." },
  { icon: TrendingUp, title: "Practical growth systems, not vanity marketing.", body: "Rankings and impressions matter only because they lead to something. GrowSmallBiz builds systems that generate actual pipeline." },
];

const faqs = [
  { question: "What services does GrowSmallBiz offer?", answer: "GrowSmallBiz offers a complete digital marketing system for local service businesses, organized into two groups. The Core Growth System includes website design, managed AI SEO, paid advertising (Google and Meta), and CRM marketing automation. Growth Acceleration Services include social media campaigns, AI lead generation, and LinkedIn outreach automation for B2B-adjacent service businesses.\n\nEach service is designed to work as part of a connected system — not as a standalone tactic. The website converts the traffic that SEO and ads bring in. CRM automation follows up with every lead the website captures. Every piece feeds the same conversion path.\n\nThe right combination depends on where your business currently stands. A new business with no digital presence starts with a different foundation than an established business that needs more lead flow." },
  { question: "Do I need all services at once?", answer: "No — most businesses start with two or three services and expand as results build. The most common starting combination is Website Design plus Managed AI SEO plus CRM Automation — which connects visibility, conversion, and follow-up in one foundation.\n\nIf you need leads faster than organic SEO allows, adding Paid Ads alongside SEO creates both immediate traffic and long-term organic momentum simultaneously.\n\nThe strategy call is designed to identify which combination creates the most impact for your specific situation — not to sell you more than you need." },
  { question: "What is the difference between Core Growth System and Growth Acceleration Services?", answer: "The Core Growth System is the foundation every local service business needs to get found online, capture leads, and follow up consistently. It includes website design, SEO, paid advertising, and CRM automation — the services that directly generate and convert new business opportunities.\n\nGrowth Acceleration Services layer on top of a working core system to expand reach and create more top-of-funnel volume. Social media campaigns build brand visibility. AI lead generation surfaces new prospecting opportunities. LinkedIn outreach automation is for businesses that sell to other businesses.\n\nThe simplest way to think about it: Core Growth System generates and captures leads. Growth Acceleration Services feed more people into that system." },
  { question: "Which services are best for a new business?", answer: "For a business starting from scratch, the most important first step is a conversion-focused website paired with CRM automation. A professional website establishes credibility and gives every marketing channel a place to send traffic. CRM automation ensures every lead gets followed up with immediately.\n\nOnce the foundation is in place, Managed AI SEO builds organic visibility over 3–6 months. If you need leads before SEO develops momentum, Google Ads or Google Local Services Ads create immediate traffic from day one.\n\nThe Starter Growth System package is designed specifically for this stage: website plus CRM automation as the foundation, with SEO and ads added as the business grows." },
  { question: "Which services are best if I already have a website?", answer: "If your website exists but is not generating consistent leads, the issue is usually one of three things: low traffic, poor conversion, or slow follow-up.\n\nLow traffic means your site is not visible enough in search results — Managed AI SEO or Paid Ads addresses this. Poor conversion means visitors arrive but do not contact you — a conversion audit and website improvements fix this. Slow follow-up means leads come in but go cold — CRM automation with AI receptionist integration addresses this.\n\nMost established businesses with an existing website benefit most from Managed AI SEO plus CRM Automation — building the organic visibility they are missing while ensuring every lead gets an immediate, automated response." },
  { question: "Does GrowSmallBiz work with local service businesses only?", answer: "Yes — GrowSmallBiz focuses exclusively on local service businesses. This means businesses that serve customers in a defined geographic area and rely on phone calls, form submissions, and appointments to generate revenue.\n\nThis includes home service contractors (HVAC, plumbing, electrical, roofing, landscaping, cleaning, remodeling), health and wellness practices (chiropractic, med spa, dental), and professional services (photographers, real estate agents).\n\nThis specialization matters because local service business marketing requires a fundamentally different approach than e-commerce or SaaS. The conversion path, search intent, follow-up cadence, and local visibility requirements are all distinct — and GrowSmallBiz systems are built specifically for that context." },
  { question: "Can GrowSmallBiz help with lead follow-up and CRM automation?", answer: "Yes — CRM and marketing automation is one of the four core services in the GrowSmallBiz system. The automation layer handles immediate lead response, multi-step follow-up sequences across email and SMS, missed-call text-back, appointment scheduling, review request workflows, and reactivation campaigns for lapsed customers.\n\nThe AI Receptionist component handles after-hours inquiries — answering calls, qualifying leads, and booking appointments before your team arrives in the morning.\n\nSpeed of response is the single biggest driver of lead conversion for local service businesses. The automation system ensures no lead waits more than five minutes for a response, regardless of when they reach out." },
  { question: "How does AI SEO differ from regular SEO for local businesses?", answer: "Traditional SEO focuses on Google rankings through keyword optimization, backlinks, and technical improvements. AI SEO is built for the current search landscape, where ChatGPT, Gemini, Perplexity, and other AI platforms are actively recommending local businesses alongside traditional Google results.\n\nFor local service businesses, this means optimizing for AI citation eligibility — the structured content, entity definitions, and reputation signals that AI engines use to decide which businesses to recommend when someone asks \"what's the best HVAC company near me\" or \"which chiropractor handles auto accident cases in [city].\"\n\nGrowSmallBiz tracks citation share across 6 AI platforms monthly alongside traditional ranking metrics, so visibility across the full search landscape is measured and improved together." },
  { question: "How long does it take to see results from digital marketing?", answer: "Timeline depends on which services are active. Paid ads — Google PPC, Google LSA, and Meta ads — generate traffic and leads within days of launching, with results improving as campaigns optimize over the first 30–60 days.\n\nManaged AI SEO builds momentum over 3–6 months for local and long-tail search terms. Competitive terms may take 6–12 months to reach top positions. The trade-off is that SEO compounds over time — unlike paid ads, which stop generating traffic the moment the budget stops.\n\nCRM automation delivers impact immediately upon setup. The first missed call that gets texted back within 60 seconds, the first lead that receives a nurture sequence instead of going cold, the first review request that goes out automatically — these often produce the fastest visible revenue impact regardless of channel." },
  { question: "What makes GrowSmallBiz different from other local marketing agencies?", answer: "Three things distinguish GrowSmallBiz. First, it builds systems rather than running campaigns — every service works as part of a connected acquisition engine, not a standalone tactic with no accountability for the full result. Second, it works exclusively with local service businesses, which means strategies and automation are built around how local service businesses actually generate and convert leads — not adapted from enterprise or e-commerce templates. Third, AI is integrated at every stage: AI-powered SEO for both traditional and AI search platforms, AI receptionist for 24/7 lead capture, AI content systems for consistent quality, and AI-assisted lead generation — as operational infrastructure, not a marketing claim.\n\nThe 30+ years of Fortune 500 experience behind the strategy means every engagement is approached with enterprise-level rigor applied specifically to local business scale and budget." },
];

/* ───────── Components ───────── */

const ServiceCardLarge = ({
  title,
  body,
  bullets,
  href,
  icon: Icon,
  index,
}: {
  title: string;
  body: string;
  bullets: string[];
  href: string;
  icon: any;
  index: number;
}) => (
  <div
    className="bg-card border border-border rounded-2xl p-8 flex flex-col card-hover animate-fade-up"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="flex items-center gap-4 mb-5">
      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">{title}</h3>
    </div>
    <p className="text-muted-foreground leading-relaxed mb-6">{body}</p>
    <ul className="space-y-3 mb-8 flex-1">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
          <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          {b}
        </li>
      ))}
    </ul>
    <Button variant="outline" size="lg" asChild className="w-fit">
      {href.startsWith('http') ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          Learn More <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      ) : (
        <Link to={href}>
          Learn More <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      )}
    </Button>
  </div>
);

const Services = () => {
  const { strategySessionUrl } = useUtm();

  const handleNavClick = (anchor: string) => {
    if (anchor === "external") {
      window.open(strategySessionUrl, "_blank", "noopener,noreferrer");
      return;
    }
    const el = document.querySelector(anchor);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Our Services | AI Marketing Solutions | GrowSmallBiz</title>
        <meta name="description" content="One connected system — websites, Managed AI SEO, paid ads, CRM automation, and growth campaigns — built to help local service businesses capture more leads and convert more opportunities." />
        <link rel="canonical" href="https://growsmallbiz.io/services/" />
      </Head>
      <PageJsonLd
        pageType="WebPage"
        name="Services - GrowSmallBiz"
        description="AI-Powered Growth System for Local Service Businesses"
        url="/services/"
        breadcrumbs={[{ name: "Services", url: "/services/" }]}
      />
      <Header />
      <main id="main-content">
      {/* ─── HERO ─── */}
      <section className="hero-section">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${servicesHeroBg})` }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "hsl(var(--background) / 0.85)" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="service-badge mb-6 animate-fade-up">
              <Layers className="w-4 h-4" />
              <span>Full-Service Growth System</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up leading-tight">
              AI-Powered Digital Marketing Services for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Local Service Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-4 animate-fade-up max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: "0.1s" }}>
              One connected system — websites, Managed AI SEO, paid ads, CRM automation, and growth campaigns — built to help local service businesses capture more leads, nurture them automatically, and convert more opportunities into booked jobs.
            </p>
            <div className="flex justify-center pt-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" asChild>
                <a href={strategySessionUrl} target="_blank" rel="noopener noreferrer">
                  Schedule Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* Prompt 2: 4-Card Stat Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 animate-fade-up" style={{ animationDelay: "0.25s" }}>
              {heroStats.map((stat, i) => (
                <div key={i} className="rounded-xl p-5" style={{ backgroundColor: "#0F2545" }}>
                  <p className="text-2xl md:text-3xl font-display font-bold text-primary mb-1">{stat.number}</p>
                  <p className="text-sm text-foreground">{stat.description}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Built for local service businesses that need more than disconnected tools and one-off tactics.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PROOF STRIP (Prompt 3) ─── */}
      <section className="py-8" style={{ backgroundColor: "#0F2545" }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {proofMetrics.map((item, i) => (
              <div key={i} className="text-center py-6 md:py-0 md:px-8">
                <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">{item.metric}</p>
                <p className="text-sm text-foreground mb-1">{item.label}</p>
                <p className="text-xs" style={{ color: "#94A3B8" }}>{item.attribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GEO CONVERSATIONAL QUERIES (Prompt 4) ─── */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-xl p-8 md:p-10" style={{ backgroundColor: "#0F2545", border: "1px solid rgba(255,255,255,0.1)" }}>
            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">
              Local Business Owners Are Already Asking AI These Questions
            </h3>
            <p className="text-sm text-foreground mb-6">
              Before opening Google, local business owners are typing questions like these into ChatGPT, Gemini, and Perplexity:
            </p>
            <div className="space-y-2">
              {conversationalQueries.map((q, i) => (
                <div key={i} className="rounded-lg py-2.5 px-4 text-sm text-foreground" style={{ backgroundColor: "#1B3A5C", borderLeft: "3px solid #F4803A" }}>
                  {q}
                </div>
              ))}
            </div>
            <p className="text-base text-foreground mt-6">
              If GrowSmallBiz isn't showing up as the answer to these questions, you're invisible to a growing segment of local business owners before they ever open Google. We change that.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SERVICE ARCHITECTURE ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="How It's Built"
            title="One Connected System."
            titleHighlight="Not Seven Separate Tools."
            description="Most local service businesses end up with a patchwork of vendors — a web developer here, an SEO agency there, a CRM no one really uses. The result: a fragmented digital presence, dropped leads, and no clear picture of what is actually working."
          />

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-muted-foreground text-center leading-relaxed text-lg">
              GrowSmallBiz is built differently. Every service is designed to work together as part of a single, connected growth system. Services are organized into two groups:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-card border-2 border-primary/40 rounded-2xl p-8 animate-fade-up">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Core Growth System</h3>
              <p className="text-muted-foreground leading-relaxed">
                The foundational services every local business needs to get found online, capture leads, and convert interest into action.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Growth Acceleration Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                Additional visibility, outreach, and campaign services that expand reach and create more opportunities — layered on once the core foundation is solid.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground mb-6">Everything we build serves one of three stages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Capture", "Nurture", "Convert"].map((stage) => (
                <span key={stage} className="px-6 py-3 rounded-full bg-secondary border border-border text-foreground font-display font-semibold text-lg">
                  {stage}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE GROWTH SYSTEM ─── */}
      <section id="core-services" className="py-24 lg:py-32 relative" style={{ background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }}>
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Primary Services"
            title="Core Growth System"
            description="These are the foundational systems GrowSmallBiz uses to help local businesses generate demand, capture leads, and convert opportunities more consistently. Whether you are starting from scratch or strengthening an existing digital presence, these four services form the backbone of a working growth system."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coreServices.map((s, i) => (
              <ServiceCardLarge key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── AEO ENTITY BLOCK (Prompt 5) ─── */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {entityCards.map((card, i) => (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "#1B3A5C", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider text-white mb-3" style={{ backgroundColor: "#2BA3A0", fontSize: "11px" }}>
                  {card.badge}
                </span>
                <h4 className="text-base font-display font-semibold text-foreground mb-2">{card.title}</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ON THIS PAGE NAV (Prompt 6) ─── */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">QUICK NAVIGATION</p>
            <h3 className="text-xl font-display font-bold text-foreground mb-8">On This Page</h3>
            <div className="grid grid-cols-3 gap-3 max-w-3xl mx-auto">
              {navTiles.map((tile, i) => (
                <button
                  key={i}
                  onClick={() => handleNavClick(tile.anchor)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors text-left"
                >
                  <tile.icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground font-medium">{tile.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW THE SYSTEM WORKS (Prompt 7 — Step Flow) ─── */}
      <section id="how-it-works" className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="The Framework"
            title="How the System Works"
            description="GrowSmallBiz does not sell isolated tactics. Every service is part of a connected system designed to move prospects through the full growth journey."
          />
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-0 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary via-muted-foreground/30 to-primary" />

              {systemSteps.map((step, si) => (
                <div key={step.title} className="relative flex flex-col items-center text-center px-6 animate-fade-up" style={{ animationDelay: `${si * 0.15}s` }}>
                  {/* Numbered circle */}
                  <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#F4803A" }}>
                    <span className="text-2xl font-display font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">{step.title}</h3>
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ backgroundColor: "rgba(244,128,58,0.15)", color: "#F4803A" }}>
                    {step.tag}
                  </span>
                  <ul className="space-y-4 text-left w-full">
                    {step.items.map((item, ii) => (
                      <li key={ii}>
                        <p className="font-semibold text-foreground text-sm">{item.name}</p>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              The system works better when the pieces are connected. Great Managed AI SEO loses its value if leads land on a page that does not convert. A strong website means nothing if there is no follow-up. When each element is built to work with the others, results compound.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href={strategySessionUrl} target="_blank" rel="noopener noreferrer">
                Schedule Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── GROWTH ACCELERATION SERVICES ─── */}
      <section className="py-24 lg:py-32 relative" style={{ background: "linear-gradient(180deg, hsl(210 50% 10%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 10%) 100%)" }}>
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Expand Your Reach"
            title="Growth Acceleration Services"
            description="Once the core foundation is in place, these services help expand visibility, build outbound momentum, and create more top-of-funnel opportunities. They are designed to layer on top of the Core Growth System — not replace it."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {accelerationServices.map((s, i) => (
              <div
                key={s.title}
                className="bg-card border border-border rounded-2xl p-8 flex flex-col animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.body}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {s.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="default" asChild className="w-fit">
                  {s.href ? (
                    <Link to={s.href}>
                      {s.cta} <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  ) : (
                    <a href={strategySessionUrl} target="_blank" rel="noopener noreferrer">
                      {s.cta} <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GROWTH SYSTEM PACKAGES ─── */}
      <section id="growth-packages" className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Growth Systems"
            title="Growth Systems Built"
            titleHighlight="Around Your Business"
            description="GrowSmallBiz builds growth systems around your business goals — not one-size-fits-all packages. Here is how most local service businesses start and scale."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {packages.map((pkg, i) => (
              <div
                key={pkg.title}
                className={`relative bg-card rounded-2xl p-8 flex flex-col animate-fade-up ${
                  pkg.popular ? "border-2 border-primary/50 shadow-[0_0_40px_rgba(255,127,80,0.15)]" : "border border-border"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{pkg.title}</h3>
                <p className="text-xs text-primary font-medium uppercase tracking-wide mb-1">Best for:</p>
                <p className="text-sm text-muted-foreground mb-3">{pkg.bestFor}</p>
                <p className="text-xs text-primary font-medium uppercase tracking-wide mb-1">Includes:</p>
                <p className="text-sm text-foreground font-semibold mb-5">{pkg.includes}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">{pkg.body}</p>
                <Button variant={pkg.popular ? "hero" : "outline"} size="lg" asChild className="w-full">
                  <a href={strategySessionUrl} target="_blank" rel="noopener noreferrer">
                    Schedule Strategy Call <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground max-w-3xl mx-auto">
            Growth Acceleration Services — social media, AI lead generation, and LinkedIn outreach automation — can be layered on based on your goals, industry, and sales process.
          </p>
        </div>
      </section>

      {/* ─── MID-PAGE SUBRATA CTA (Prompt 8) ─── */}
      <PersonCTA
        title="Ready to See Which Growth System Is Right for Your Business?"
        description="Book a free strategy call. We'll review your current marketing gaps and identify the highest-impact starting point for your specific business."
        buttonHref={strategySessionUrl}
        buttonText="Schedule Strategy Call"
      />

      {/* ─── INDUSTRIES ─── */}
      <section id="who-we-serve" className="py-24 lg:py-32 relative" style={{ background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }}>
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Who We Serve"
            title="Built for"
            titleHighlight="Local Service Businesses"
            description="GrowSmallBiz works exclusively with local service businesses. If you serve customers in a defined geographic market, this system is built for you."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((ind, i) => (
              <div
                key={ind.title}
                className="bg-card border border-border rounded-2xl p-6 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <ind.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-1">{ind.title}</h3>
                <p className="text-xs text-primary font-medium mb-3">{ind.desc}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{ind.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY GROWSMALLBIZ (Prompt 9 — Icon Card Grid) ─── */}
      <section id="why-growsmallbiz" className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Why Us"
            title="Why Businesses Choose"
            titleHighlight="GrowSmallBiz"
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {whyCards.map((card, i) => (
              <div key={i} className="rounded-xl p-6 animate-fade-up" style={{ backgroundColor: "#1B3A5C", borderRadius: "12px", animationDelay: `${i * 0.08}s` }}>
                <card.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-[15px] font-display font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-[13px] text-foreground/80 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground italic leading-relaxed">
              GrowSmallBiz was founded by a marketing strategist with a background in Fortune 500 brand building and local service growth. That experience shapes how every engagement is structured — with the kind of strategic rigor and accountability that local service businesses rarely get from typical marketing vendors.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ (Prompts 10 & 11) ─── */}
      <div id="faqs">
        <FAQSection
          title="Frequently Asked Questions"
          faqs={faqs}
          contactCTA={{
            ...baseContactCTA,
            title: "Have more questions about growing your local service business?",
            description: "Get a personalized review of your current marketing setup and a clear recommendation for where to start. No obligation.",
            tagline: "— Subrata Guha, Founder, GrowSmallBiz",
          }}
        />
      </div>

      {/* ─── CONSULTATION FORM ─── */}
      <div id="consultation">
        <ConsultationFormSection />
      </div>
      </main>
      <Footer />
    </>
  );
};

export default Services;
