import { Link } from "react-router-dom";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import servicesHeroBg from "@/assets/services-hero-bg.jpg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/services/SectionHeader";
import { FAQSection } from "@/components/sections/FAQSection";
import { PersonCTA } from "@/components/services/PersonCTA";
import { Head } from "vite-react-ssg";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
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
  Scale,
  Car,
  Briefcase,
  CheckCircle,
  Layers,
  Target,
  Handshake,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";

/* ───────── data ───────── */

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
    href: "/contact/",
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
    href: "/contact/",
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
    href: "/contact/",
    cta: "Ask About This Service",
    icon: Users,
  },
];

const systemStages = [
  {
    label: "Capture",
    color: "from-primary to-orange-400",
    items: [
      { name: "Website", desc: "Built to convert visitors into leads" },
      { name: "Managed AI SEO", desc: "Gets you found by the right people at the right moment" },
      { name: "Paid Ads", desc: "Reaches buyers actively searching for your service right now" },
    ],
  },
  {
    label: "Nurture",
    color: "from-blue-500 to-cyan-400",
    items: [
      { name: "CRM Automation", desc: "Follows up instantly, keeps leads warm between touchpoints" },
      { name: "Social Media Campaigns", desc: "Maintains brand visibility and builds trust over time" },
      { name: "LinkedIn Outreach Automation", desc: "Builds B2B relationships at scale without manual effort" },
    ],
  },
  {
    label: "Convert",
    color: "from-emerald-500 to-green-400",
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
  { title: "Legal", desc: "Personal injury, family law, estate planning, criminal defense, local practices", body: "Legal clients are often making urgent, high-stakes decisions. Showing up in search at the right moment — and following up immediately — is how practices turn online searches into consultations.", icon: Scale },
  { title: "Automotive", desc: "Auto repair, detailing, collision, tire and service centers", body: "Local automotive businesses compete on trust, convenience, and visibility. The system helps you get found first, make a strong first impression, and stay top of mind in the community you serve.", icon: Car },
  { title: "Professional & B2B Services", desc: "Financial advisors, CPAs, consultants, agencies, local professional firms", body: "For businesses that sell expertise and relationships, credibility is everything online. GrowSmallBiz builds the digital presence and outreach systems that support consistent new business development.", icon: Briefcase },
];

const whyBlocks = [
  { icon: Layers, title: "One connected strategy, not a stack of disconnected vendors.", body: "Most local businesses end up managing multiple vendors, each owning a piece of the picture. When those pieces do not connect, leads fall through the cracks and nobody is accountable for the whole result. GrowSmallBiz builds and manages the full system — so every piece is designed to work with every other piece." },
  { icon: Zap, title: "AI-powered execution at a speed and scale that changes what is possible.", body: "The tools available today let smaller businesses move faster, optimize smarter, and compete at a level that previously required significantly larger budgets and teams. GrowSmallBiz is built to take advantage of those tools — as a genuine operational advantage, not a marketing claim." },
  { icon: Target, title: "Conversion-first thinking, not just traffic and impressions.", body: "Visitors, clicks, and followers are outputs. What matters is whether those activities generate leads, bookings, and revenue. Every service GrowSmallBiz offers is evaluated through that lens — not whether it looks busy, but whether it moves the business forward." },
  { icon: Shield, title: "Built exclusively for local service businesses.", body: "GrowSmallBiz focuses specifically on local service businesses — which means the strategies, messaging frameworks, SEO systems, and CRM automations are all built around how local service businesses actually grow. There is no one-size-fits-all approach here because local service businesses do not have one-size-fits-all problems." },
  { icon: Handshake, title: "Lead capture and follow-up treated as seriously as lead generation.", body: "Getting leads is only valuable if you do something with them quickly. A meaningful percentage of local business leads are lost simply because nobody responded fast enough. The GrowSmallBiz system treats follow-up speed and consistency as core priorities — not afterthoughts." },
  { icon: TrendingUp, title: "Practical growth systems, not vanity marketing.", body: "Rankings, likes, and brand awareness matter — but only because they lead to something. GrowSmallBiz focuses on building systems that generate actual pipeline, not impressive-looking reports that do not translate to business results." },
];

const faqs = [
  { question: "What services does GrowSmallBiz offer?", answer: "GrowSmallBiz offers a connected suite of digital marketing services for local service businesses. The Core Growth System includes Website Design, Managed AI SEO, Paid Ads, and CRM Automation. Growth Acceleration Services — Social Media Campaigns, AI Lead Generation, and LinkedIn Outreach Automation — layer on top to expand visibility and build outbound momentum. Every service is designed to work together as part of a single system that captures leads, nurtures them automatically, and converts more opportunities into booked jobs." },
  { question: "Do I need all services at once?", answer: "No. Most clients start with a foundation — typically a conversion-focused website paired with CRM automation — and add services as they grow. The GrowSmallBiz system is designed to be built incrementally, so you are never paying for capability you are not ready to use. A strategy call helps identify the right starting point based on where your business is today, what your goals are, and where the biggest gaps exist." },
  { question: "What is the difference between Core Growth System and Growth Acceleration Services?", answer: "The Core Growth System covers the foundational services every local service business needs to generate leads, capture interest, and convert opportunities: website, Managed AI SEO, paid ads, and CRM automation. Growth Acceleration Services — social media campaigns, AI lead generation, and LinkedIn outreach automation — expand reach and build outbound momentum. They work best when the core foundation is already in place, which is why they are treated as the second layer rather than the starting point." },
  { question: "Which services are best for a new business?", answer: "For a business starting from scratch, the priority is a credible, conversion-focused digital presence paired with immediate lead follow-up. That typically means starting with Website Design and CRM Automation. Once the foundation is solid, adding Managed AI SEO builds long-term organic visibility and a compounding inbound channel. A strategy call will help map the right sequence based on your budget, timeline, and market." },
  { question: "Which services are best if I already have a website?", answer: "If you already have a website, the most common next priorities are visibility and lead flow. Managed AI SEO improves how well you show up in search — both traditional and AI-powered. CRM Automation ensures those leads are followed up with instantly and consistently. If you need leads faster, Paid Ads can generate immediate, high-intent traffic while Managed AI SEO builds over time. The right combination depends on where your biggest gaps are." },
  { question: "Does GrowSmallBiz work with local service businesses only?", answer: "Yes. GrowSmallBiz works exclusively with local service businesses — those that serve customers in a defined geographic market. That focus is intentional. The systems, strategies, and frameworks are all built around how local service businesses grow, which means the work is more targeted and the results are more directly applicable than what you would get from a generalist agency." },
  { question: "Can GrowSmallBiz help with lead follow-up and CRM automation?", answer: "Yes — and it is one of the areas where most local businesses have the most immediate opportunity. The CRM Automation service builds automated follow-up systems that respond to new leads instantly, send missed call text-back messages, run nurture workflows, and manage your pipeline from lead to booked appointment. Most businesses are surprised by how many leads they were losing simply due to slow or inconsistent follow-up. Getting that fixed often produces visible results quickly, regardless of what other services are in place." },
];

/* ───────── Component ───────── */

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
      <Link to={href}>
        Learn More <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </Button>
  </div>
);

const Services = () => {
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
        Rl="/services/"
        breadcrumbs={[{ name: "Services", url: "/services/" }]}
      />
      <Header />
      <main id="main-content">
      {/* ─── SECTION 1: HERO ─── */}
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
              AI-Powered Growth System for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Local Service Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-4 animate-fade-up max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: "0.1s" }}>
              One connected system — websites, Managed AI SEO, paid ads, CRM automation, and growth campaigns — built to help local service businesses capture more leads, nurture them automatically, and convert more opportunities into booked jobs.
            </p>
            <div className="flex justify-center pt-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact/">
                  Schedule Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.25s" }}>
              Built for local service businesses that need more than disconnected tools and one-off tactics.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: SERVICE ARCHITECTURE ─── */}
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
            {/* Core */}
            <div className="bg-card border-2 border-primary/40 rounded-2xl p-8 animate-fade-up">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Core Growth System</h3>
              <p className="text-muted-foreground leading-relaxed">
                The foundational services every local business needs to get found online, capture leads, and convert interest into action.
              </p>
            </div>
            {/* Acceleration */}
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

          {/* Capture – Nurture – Convert */}
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

      {/* ─── SECTION 3: CORE GROWTH SYSTEM ─── */}
      <section className="py-24 lg:py-32 relative" style={{ background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }}>
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

      {/* ─── SECTION 4: HOW THE SYSTEM WORKS ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="The Framework"
            title="How the System Works"
            description="GrowSmallBiz does not sell isolated tactics. Every service is part of a connected system designed to move prospects through the full growth journey."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {systemStages.map((stage, si) => (
              <div key={stage.label} className="bg-card border border-border rounded-2xl overflow-hidden animate-fade-up" style={{ animationDelay: `${si * 0.1}s` }}>
                <div className={`h-2 bg-gradient-to-r ${stage.color}`} />
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-6">{stage.label}</h3>
                  <ul className="space-y-5">
                    {stage.items.map((item, ii) => (
                      <li key={ii}>
                        <p className="font-semibold text-foreground text-sm">{item.name}</p>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              The system works better when the pieces are connected. Great Managed AI SEO loses its value if leads land on a page that does not convert. A strong website means nothing if there is no follow-up. When each element is built to work with the others, results compound.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact/">
                Schedule Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: GROWTH ACCELERATION SERVICES ─── */}
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
                    <Link to="/contact/">
                      {s.cta} <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: GROWTH SYSTEM PACKAGES ─── */}
      <section className="py-24 lg:py-32">
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
                  <Link to="/contact/">
                    Schedule Strategy Call <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground max-w-3xl mx-auto">
            Growth Acceleration Services — social media, AI lead generation, and LinkedIn outreach automation — can be layered on based on your goals, industry, and sales process.
          </p>
        </div>
      </section>

      {/* ─── SECTION 7: INDUSTRIES ─── */}
      <section className="py-24 lg:py-32 relative" style={{ background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }}>
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

      {/* ─── SECTION 8: WHY GROWSMALLBIZ ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Why Us"
            title="Why Businesses Choose"
            titleHighlight="GrowSmallBiz"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {whyBlocks.map((block, i) => (
              <div key={i} className="flex gap-5 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <block.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{block.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{block.body}</p>
                </div>
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

      {/* ─── SECTION 9: FAQ ─── */}
      <FAQSection title="Frequently Asked Questions" faqs={faqs} />

      {/* ─── SECTION 10: CONSULTATION FORM ─── */}
      <ConsultationFormSection />
      </main>
      <Footer />
    </>
  );
};

export default Services;
