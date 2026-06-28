import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Wrench,
  TrendingUp, 
  MapPin, 
  Star, 
  Target, 
  Phone,
  CheckCircle2,
  ArrowRight,
  Bot,
  Search,
  Zap,
  Flame,
  Droplets,
  Plug,
  Home,
  TreePine,
  Paintbrush,
  SprayCan,
  Globe,
  MessageSquare,
  BarChart3,
  Leaf,
  Snowflake,
  Sun,
  CloudSun
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { baseContactCTA } from "@/config/contactCTA";
import { BlogSection, hvacBlogPosts } from "@/components/sections/BlogSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import homeServicesHeroImage from "@/assets/industry-homeservices-hero.webp";
import { useUtm } from "@/hooks/use-utm";

const trades = [
  { icon: Flame, name: "HVAC", link: "/home-service-contractors/marketing-for-hvac-contractors/" },
  { icon: Droplets, name: "Plumbing" },
  { icon: Plug, name: "Electrical" },
  { icon: Home, name: "Roofing" },
  { icon: Paintbrush, name: "Remodeling" },
  { icon: TreePine, name: "Tree, Lawn & Landscaping", link: "/home-service-contractors/tree-lawn-landscaping-marketing/" },
  { icon: Paintbrush, name: "Painting" },
];

const services = [
  {
    number: "1",
    title: "Local SEO & Google Map Pack",
    url: "/services/seo-agency/local-seo/",
    description: "Get in front of homeowners searching 'HVAC company near me' or 'emergency plumber [city].' We build your local authority through citation consistency, review velocity, and on-page optimization — so you rank in the Map Pack where 70% of clicks happen.",
    features: ["Google Business Profile optimization and posting", "Service-area landing pages for every city you serve", "Local citation building and consistency audit", "Multi-location and multi-service GBP management"]
  },
  {
    number: "2",
    title: "AI Search Visibility",
    url: "/services/seo-agency/ai-search-optimization/",
    description: "Search is shifting from a list of links to a decision engine. We optimize your business to be cited in ChatGPT, Gemini, Perplexity, and Google AI Overviews — so when homeowners ask AI for the best contractor near them, your business is the one it recommends.",
    features: ["AI Search Optimization across ChatGPT, Gemini, Perplexity, and Google AI Overviews", "Answer Engine Optimization (AEO) for conversational \"best near me\" queries", "Structured data and entity optimization so AI engines cite your business", "Brand mention and authority building across the sources AI trusts"]
  },
  {
    number: "3",
    title: "Google Ads & Local Services Ads (LSA)",
    url: "/services/paid-advertising/google-ads/",
    description: "Stop overpaying for clicks on keywords your competitors have bid up. We build tightly structured campaigns by service type and zip code, with negative keyword management and conversion tracking so every dollar is accountable. LSAs carry Google's Guarantee badge and charge per lead — not per click.",
    features: ["Campaign structure by trade and service type", "Zip-code-level bid management", "Google Local Services Ads setup and badge management", "Full conversion tracking to booked calls"]
  },
  {
    number: "4",
    title: "Website Design & Conversion Optimization",
    url: "/services/website-design/",
    description: "Your website is your 24/7 sales rep. We build fast, mobile-first contractor websites designed to convert — click-to-call above the fold, service-area pages, trust signals, and quote forms that turn visitors into calls.",
    features: ["Mobile-first, fast-loading design", "Click-to-call and quote form above the fold", "Trust signals: licenses, reviews, guarantees, badges", "Service-area page architecture for local SEO"]
  },
  {
    number: "5",
    title: "Reputation Management",
    url: "/services/marketing-automation-for-small-business/reviews/",
    description: "Online reviews are your word-of-mouth. We automate review requests after every completed job and monitor your reputation across Google, Yelp, and Nextdoor — so your 4.8-star rating does the selling for you.",
    features: ["Automated post-job review request sequences", "Review monitoring across Google, Yelp, Nextdoor", "Response templates and escalation protocols", "Review velocity strategy for Map Pack ranking"]
  },
  {
    number: "6",
    title: "AI Receptionist & Lead Capture",
    url: "/services/ai-receptionist/",
    description: "Never lose a lead because no one answered the phone. Our AI Receptionist handles after-hours inquiries, qualifies leads, and books appointments directly into your calendar — so you capture jobs even while you're on a job.",
    features: ["24/7 inbound call and web chat handling", "Lead qualification by service type, location, and urgency", "Direct calendar booking with homeowner confirmation", "SMS and email follow-up sequences"]
  },
  {
    number: "7",
    title: "Answer Engine Optimization (AEO)",
    url: "/services/seo-agency/aeo/",
    description: "When homeowners ask Siri, ChatGPT, or Google AI 'who's the best HVAC company in [city]?', we position your business as the answer. AEO is the next frontier of local search — early movers capture the most territory.",
    features: ["FAQ schema markup and structured data", "Conversational content targeting voice queries", "Featured snippet and AI overview optimization", "Brand mention building across authoritative sources"]
  },
  {
    number: "8",
    title: "Social Media Management",
    url: "/services/marketing-automation-for-small-business/reviews/",
    description: "Before/after project photos. Seasonal promotions. Community presence. We manage your social channels so you stay top-of-mind with past customers — your best source of repeat and referral business.",
    features: ["Before/after project content and photography direction", "Seasonal promotion campaigns", "Community engagement and local hashtag strategy", "Paid social for retargeting and lookalike audiences"]
  },
  {
    number: "9",
    title: "CRM & Lead Nurturing Automation",
    url: "/services/marketing-automation-for-small-business/",
    description: "Most contractors lose jobs not because of price — but because they followed up too late. Our CRM automation sends immediate responses, follow-up sequences, and re-engagement campaigns so no lead goes cold.",
    features: ["Immediate lead response automation (under 5 minutes)", "Multi-touch follow-up sequences via SMS, email, and call", "Past customer re-engagement campaigns", "Pipeline reporting: where every lead is in the booking cycle"]
  }
];

const seasonalCards = [
  {
    season: "Spring",
    months: "March–May",
    hook: "AC Tune-Up Season",
    description: "Focus on preventive maintenance campaigns targeting homeowners searching 'AC tune-up near me' before summer heat arrives. Run Google Ads at 60–70% of peak budget — this is the lowest cost-per-lead window of the year.",
    accentColor: "#16A34A",
    icon: Leaf,
  },
  {
    season: "Summer",
    months: "June–August",
    hook: "Emergency Cooling Demand",
    description: "Ramp Google Ads to full budget. Emergency keywords convert at 3–5× the rate of informational keywords. Ensure 24/7 call coverage — an AI Receptionist that captures a 10 PM emergency call pays for months of service in one job. If you're not in the Map Pack top 3 when temperatures spike, you're handing calls to competitors.",
    accentColor: "#EA580C",
    icon: Sun,
  },
  {
    season: "Fall",
    months: "September–November",
    hook: "Heating System Prep",
    description: "Shift messaging to heating maintenance and furnace inspections. Homeowners who schedule a fall tune-up become loyal repeat customers. Retargeting past customers drives the highest close rates of the year during this window.",
    accentColor: "#D97706",
    icon: CloudSun,
  },
  {
    season: "Winter",
    months: "December–February",
    hook: "Emergency Heating and Pipe Calls",
    description: "Emergency heating repair and frozen pipe calls spike during cold snaps. These are your highest-ticket, fastest-close jobs. Response speed wins: contractors who respond within 5 minutes close 80% more leads than those who call back in an hour.",
    accentColor: "#2563EB",
    icon: Snowflake,
  },
];

const spokeCards = [
  {
    trade: "HVAC Contractors",
    description: "High-season domination strategy. Seasonal Google Ads ramp-ups timed to weather patterns, Map Pack authority for emergency cooling and heating calls, and Google LSA badge management to own the top position year-round.",
    ctaText: "HVAC Contractor Marketing",
    link: "/home-service-contractors/marketing-for-hvac-contractors/",
    icon: Flame,
  },
  {
    trade: "Plumbing Companies",
    description: "Emergency-first, relationship-second approach. Dual campaigns for emergency calls (burst pipe, backed-up drain) and planned jobs (water heater replacement, remodel) — both require different messaging and different bid strategies.",
    ctaText: "Plumbing Company Marketing",
    link: "#",
    icon: Droplets,
  },
  {
    trade: "Electrical Contractors",
    description: "Trust and compliance-led strategy. Homeowners want licensed, bonded, and reviewed electricians — and Google factors that into local rankings. For commercial expansion, we build B2B targeting that reaches property managers directly.",
    ctaText: "Electrical Contractor Marketing",
    link: "#",
    icon: Plug,
  },
  {
    trade: "Roofing Companies",
    description: "Storm-response and project-volume strategy. Capture storm-damage leads immediately after weather events, build organic authority for planned projects, and maximize close rate with before/after photo campaigns.",
    ctaText: "Roofing Company Marketing",
    link: "#",
    icon: Home,
  },
  {
    trade: "Tree Care, Lawn Care & Landscaping",
    description: "Seasonal campaign structure across spring cleanup, summer maintenance, fall leaf removal, and winter storm prep. Local Map Pack visibility for 'tree service near me' and 'lawn care [city].'",
    ctaText: "Tree Care & Landscaping Marketing",
    link: "#",
    icon: TreePine,
  },
  {
    trade: "Home Remodeling",
    description: "Longer-cycle strategy for kitchen, bathroom, and whole-home remodeling. Leads take 3–6 months to close. We build retargeting campaigns and nurture sequences that keep your business top-of-mind through the full decision window.",
    ctaText: "Home Remodeling Marketing",
    link: "#",
    icon: Paintbrush,
  },
  {
    trade: "Cleaning Services",
    description: "Recurring revenue model. A new cleaning client is worth $2,400–$4,800/year in recurring bookings. We build campaigns that attract quality homeowners and CRM sequences that convert first-time bookings into monthly recurring accounts.",
    ctaText: "Cleaning Services Marketing",
    link: "#",
    icon: SprayCan,
  },
];

const painPoints = [
  "Losing jobs to competitors who rank higher on Google",
  "Paying too much for leads from HomeAdvisor, Angi, or Thumbtack",
  "Emergency calls going to competitors because they show up first",
  "No system to follow up with leads — they call someone else",
  "Wasting money on ads without tracking which ones actually work"
];

const results = [
  { metric: "312%", label: "Average organic traffic increase" },
  { metric: "47", label: "New reviews per month avg" },
  { metric: "$23", label: "Average cost per lead" },
  { metric: "4.2x", label: "Average ROAS" }
];

const aiReceptionistBullets = [
  "After-hours and weekend emergency calls",
  "Web chat and SMS lead capture",
  "Lead qualification by service type, location, and urgency",
  "Appointment scheduling directly into your calendar",
  "Immediate confirmation texts to the homeowner",
  "Follow-up sequences for leads that don't book on first contact",
];

const faqs = [
  {
    question: "How long does it take to see results from contractor digital marketing?",
    answer: "Google Ads and Local Services Ads typically produce booked calls within 2–4 weeks of launch. Local SEO and Map Pack rankings build over 3–6 months as your domain authority, citation consistency, and review count accumulate. Most clients see measurable improvement in lead quality and cost-per-lead within the first 60 days — even before organic rankings fully develop."
  },
  {
    question: "What is the best marketing strategy for HVAC companies?",
    answer: "HVAC marketing performs best when it layers three channels: Google Local Services Ads for immediate lead volume, seasonal Google Ads campaigns timed to weather patterns, and local SEO for long-term Map Pack authority. Review velocity — maintaining a 4.7+ rating with consistent new reviews — is the single most underrated ranking factor in HVAC local search."
  },
  {
    question: "How do I stop relying on HomeAdvisor and Angi for leads?",
    answer: "The shift from lead aggregators to owned marketing follows a proven sequence: first, optimize your Google Business Profile and build review velocity (8–12 weeks); second, launch Google Local Services Ads targeting emergency and high-intent keywords (weeks 2–4); third, build service-area landing pages that rank organically (months 3–6). Most contractors reduce cost-per-lead by 50–70% within six months and eliminate aggregator dependence within 12 months."
  },
  {
    question: "Are Google Local Services Ads worth it for home service contractors?",
    answer: "Yes — LSAs are the highest-converting paid channel for most trades. They appear above standard Google Ads, carry Google's Guarantee badge which dramatically increases click trust, and charge per lead rather than per click. For HVAC, plumbing, and electrical, LSAs typically deliver a cost-per-lead 30–50% lower than standard Google Ads for the same service keywords."
  },
  {
    question: "Do you work with solo contractors or only larger companies?",
    answer: "We specialize in independent contractors and small service companies with 1–20 employees. Our entire model is built to deliver enterprise-quality marketing without the enterprise price tag. We don't take $50,000/month enterprise accounts — our focus is contractors who want a full lead generation system that's actually affordable."
  },
  {
    question: "Can you help contractors who serve multiple cities or counties?",
    answer: "Yes — multi-area SEO and service-area page strategy is core to what we do. We build individual service-area landing pages for each city you serve, manage your Google Business Profile for multi-area operations, and structure your ad campaigns geographically so budget is concentrated in your highest-margin service areas. We also run campaigns for contractors operating in multiple states."
  }
];

const seoCampaignResults = [
  {
    title: "HVAC & Plumbing Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+1,395.2% Phone Calls",
      "+520% GMB Website Actions",
      "Significant improvement for top service keywords",
      "Core plumbing + location map pack rankings",
    ],
    link: "/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/",
  },
  {
    title: "Roofing Restoration Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+26% Organic Conversions",
      "+76% GBP Searches",
      "+127% GBP Views",
      "90+ Spot Keyword Gains",
    ],
    link: "/home-service-contractors/marketing-for-roofers/roofing-marketing-case-study/",
  },
  {
    title: "Tree & Lawn SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+25.77% Clicks",
      "+138.54% Impressions",
      "1.1 Average Map Rank",
      "+770% Phone Number Clicks",
    ],
    link: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/",
  },
  {
    title: "Home Remodeling Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+366.67% Goal Completions",
      "+382.11% Website Clicks",
      "+375.10% Impressions",
      "+15% GBP Calls",
    ],
    link: "/home-service-contractors/marketing-for-home-remodelers/home-remodeling-marketing-case-study/",
  },
  {
    title: "Cleaning Service SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+261.20% Clicks",
      "+868.02% Impressions",
      "+114.8% GBP Calls",
      "+119.3% GBP Website Clicks",
    ],
    link: "/home-service-contractors/marketing-for-cleaning-services/cleaning-marketing-case-study/",
  },
];

const ppcCampaignResults = [
  {
    title: "HVAC Google PPC Growth",
    subtitle: "Google Ads Lead Generation Campaign",
    metrics: [
      "+50.23% CTR",
      "+83% Conversions",
      "+56.3% Conversion Rate",
      "-41% Cost Per Acquisition",
    ],
    link: "/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/",
  },
  {
    title: "Roofing Google PPC Growth",
    subtitle: "Google Ads Campaign",
    metrics: [
      "+93.3% Conversions",
      "+123.4% Conversion Rate",
      "-48.9% Cost Per Conversion",
      "+17.7% Clicks",
    ],
    link: "/home-service-contractors/marketing-for-roofers/roofing-marketing-case-study/",
  },
  {
    title: "Tree & Lawn Google PPC Growth",
    subtitle: "Google Ads Lead Generation Campaign",
    metrics: [
      "+169.5% Clicks",
      "+211.5% Conversions",
      "+16.7% Conversion Rate",
      "299 Conversions — Last 90 Days",
    ],
    link: "/home-service-contractors/tree-lawn-landscaping-marketing/landscaping-marketing-case-study/",
  },
];
const HomeServices = () => {
  const { strategySessionUrl, freeAuditUrl } = useUtm();

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>AI Powered Marketing for Home Service Contractors | GrowSmallBiz</title>
        <meta name="description" content="GrowSmallBiz: Digital marketing for home service contractors. Get more leads with local SEO and AI Optimized Google Ads. Serving the US." />
        <meta name="keywords" content="home service marketing, local SEO for contractors, Google Ads management, reputation management services, lead generation strategies, digital marketing for home services, AI automation in marketing, contractor marketing solutions" />
        <link rel="canonical" href="https://growsmallbiz.io/home-service-contractors/" />
        <meta property="og:title" content="AI-Driven Growth for Local Service Businesses | GrowSmallBiz" />
      </Head>
      <ServiceJsonLd
        serviceName="Home Service Contractor Marketing Agency"
        serviceType="Digital Marketing for Home Services"
        description="Local SEO, Google Ads, AI lead capture, and CRM automation for HVAC, plumbing, electrical, roofing, and home service contractors."
        url="/home-service-contractors/"
        breadcrumbs={[
          { name: "Home Service Contractors", url: "/home-service-contractors/" },
        ]}
      />
      
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={homeServicesHeroImage} alt="Home service contractor at work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Wrench className="w-4 h-4" />
              Home Service Contractor Marketing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100 bg-gradient-heading bg-clip-text text-transparent">
              Stop Renting Leads. Start Owning Your Pipeline
            </h1>
            <p className="text-xl text-muted-foreground mb-4 animate-fade-up delay-200 max-w-2xl mx-auto">
              Replace expensive HomeAdvisor and Angi leads with your own lead generation engine. Local SEO, Google Ads, AI automation, and reputation management built for home service contractors.
            </p>
            <p className="text-sm text-muted-foreground/70 mb-8 animate-fade-up delay-200">
              Serving home service contractors across the United States — with deep expertise in the Bay Area, California, and Western markets.
            </p>

            {/* Trades we serve */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-up delay-200">
              {trades.map((trade, index) => {
                const pill = (
                  <span key={index} className={`inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-border rounded-full text-sm text-muted-foreground ${trade.link ? "hover:border-primary/40 hover:text-foreground transition-colors cursor-pointer" : ""}`}>
                    <trade.icon className="w-4 h-4 text-primary" />
                    {trade.name}
                  </span>
                );
                return trade.link ? (
                  <Link key={index} to={trade.link}>{pill}</Link>
                ) : pill;
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Button variant="hero" size="lg" asChild>
                <a href={strategySessionUrl}>
                  Schedule Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services/seo-agency/local-seo/">
                  Learn About Local SEO
                </Link>
              </Button>
            </div>
            <p className="text-sm text-primary mt-4 animate-fade-up delay-300">No commitment. No pressure. Just a clear path forward for your business.</p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent">
  The Biggest Marketing Challenges for Home Service Contractors
</h2>
            <p className="text-muted-foreground">These are the challenges we hear from home service contractors every day.</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-destructive/10 border border-destructive/20 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-destructive text-sm font-bold">✗</span>
                </div>
                <p className="text-foreground">{point}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl font-display font-semibold text-primary mb-4">Let's change that.</p>
            <Button variant="hero" asChild>
              <a href={strategySessionUrl}>Get Your Growth Strategy</a>
            </Button>
          </div>
        </div>
      </section>

      {/* What Is a Home Services Marketing Agency? */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 bg-gradient-heading bg-clip-text text-transparent">
  What Is a Home Services Marketing Agency?
</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A home services marketing agency specializes in digital lead generation for contractors, tradespeople, and residential service companies. Unlike general marketing firms, a home services marketing agency understands the full booking cycle — from local search intent and Google Local Services Ads to reputation management and CRM follow-up. The goal isn't traffic. It's more booked jobs at a lower cost-per-acquisition.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Home service marketing requires a specialist because the buying cycle is different from retail or B2B. A homeowner with a broken AC or a burst pipe doesn't browse and compare — they search, scan the top 3 results, and call. That 90-second window is where your marketing either works or doesn't. GrowSmallBiz builds complete lead generation systems for home service contractors — combining local SEO, paid ads, AI automation, and reputation management into one integrated engine that fills your schedule with the right jobs at the right margins.
            </p>
          </div>
        </div>
      </section>

      {/* Seasonal Marketing Playbook */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent">
  The Seasonal Marketing Playbook for Home Service Contractors
</h2>
            <p className="text-muted-foreground">
              Most contractors run the same marketing year-round. The ones who dominate adjust their budget, messaging, and channels to match when homeowners actually need their services. Here's how the calendar works.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {seasonalCards.map((card) => (
              <div key={card.season} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="h-1.5" style={{ backgroundColor: card.accentColor }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <card.icon className="w-6 h-6" style={{ color: card.accentColor }} />
                    <div>
                      <h3 className="text-lg font-display font-bold text-foreground">{card.season} <span className="text-sm font-normal text-muted-foreground">({card.months})</span></h3>
                      <p className="text-sm font-semibold" style={{ color: card.accentColor }}>{card.hook}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-10 border-l-4 border-accent/50 bg-card/50 rounded-r-xl p-6">
            <p className="text-muted-foreground italic">"We used to go dark on ads every January. GrowSmallBiz showed us that's exactly when our competitors back off — and when emergency heating calls are worth the most per job."</p>
            <p className="text-sm text-muted-foreground/70 mt-2">— [Client Name, HVAC Owner] — PLACEHOLDER, replace before launch</p>
          </div>
        </div>
      </section>

      {/* Services — 8 cards */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent">
  Our Home Service Marketing Solutions
</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to own your leads — not rent them. We deploy the channels that drive calls, form fills, and booked appointments, not vanity metrics.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.number}
                to={service.url}
                className="group block bg-card border border-border rounded-2xl p-8 card-hover hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-2xl font-bold text-accent">{service.number}.</span>
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 text-sm">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Specialized Marketing for Every Trade — Spoke Links */}
      <section className="py-20" style={{ backgroundColor: 'hsl(var(--card))' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent">
  Specialized Digital Marketing for Every Trade
</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Home service marketing isn't one-size-fits-all. We've built trade-specific strategies that match how your customers search, compare, and hire.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {spokeCards.map((card) => (
              <div key={card.trade} className="bg-card border border-border rounded-xl p-6 border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <card.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-display font-bold text-foreground">{card.trade}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{card.description}</p>
                {card.link !== "#" ? (
                  <Link to={card.link} className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:underline">
                    → {card.ctaText}
                  </Link>
                ) : (
                  <span className="text-muted-foreground/50 font-semibold text-sm inline-flex items-center gap-1">
                    → {card.ctaText} <span className="text-xs">(Coming Soon)</span>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent">
  Real Results for Real Contractors
</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Average results from our home service clients.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{result.metric}</div>
                <p className="text-muted-foreground">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Receptionist Spotlight */}
      <section className="py-20 bg-[hsl(213,60%,15%)]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 bg-gradient-heading bg-clip-text text-transparent">
  Never Lose a Lead Because No One Answered
</h2>
              <p className="text-white/80 mb-4 leading-relaxed">
                Home service contractors lose more jobs to missed calls than to price competition. A homeowner with a burst pipe or a broken AC at 10 PM calls two contractors. The first one to answer gets the job.
              </p>
              <p className="text-white/80 mb-8 leading-relaxed">
                Our AI Receptionist handles every inbound call, web chat, and form fill — 24 hours a day, 7 days a week. It qualifies the lead, books the appointment directly into your calendar, and sends the homeowner an immediate confirmation text. By the time you start your morning, the job is already on the schedule.
              </p>
              <h3 className="text-lg font-display font-bold text-white mb-4">What the AI Receptionist Handles</h3>
              <ul className="space-y-3 mb-8">
                {aiReceptionistBullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{bullet}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-accent hover:bg-accent/90 text-white" asChild>
                <Link to="/services/marketing-automation-for-small-business/">
                  Learn About AI Receptionist
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="lg:col-span-2 flex items-center">
              <div className="bg-accent/90 rounded-2xl p-8">
                <p className="text-white italic text-lg leading-relaxed mb-4">
                  "They set up the AI Receptionist for our plumbing company and we booked 3 jobs the first weekend from after-hours calls we were missing. That alone paid for six months of service."
                </p>
                <p className="text-white/80 font-semibold text-sm">
                  — [Client Name, Plumbing Company Owner, East Bay]
                </p>
                <p className="text-white/60 text-xs mt-1">PLACEHOLDER: Replace with verified client name before launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Home Service Contractors Choose GrowSmallBiz — Narrative */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 bg-gradient-heading bg-clip-text text-transparent">
  Why Home Service Contractors Choose GrowSmallBiz
</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We don't work with e-commerce brands, SaaS companies, or enterprise clients. Every client we serve is a local service business — which means our keyword strategies, ad structures, landing page architecture, and automation workflows are all built for how contractors actually get jobs. Not adapted. Built.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We're local where it matters. Our team is based in Danville, California, in the heart of the Bay Area. We understand the California contractor market — the density, the competition, the seasonal patterns, and the licensing signals that affect local search rankings. We also run campaigns for contractors across the United States in every major metro.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We're accountable to booked jobs, not impressions. Every campaign ties back to phone calls, form fills, and scheduled appointments. You'll see exactly what your marketing investment is generating — in plain language, not agency-speak about reach, engagement, or brand lift.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We run the whole system. Local SEO, Google Ads, AI Receptionist, reputation management, and CRM — fully integrated into one lead engine. No juggling four vendors who don't talk to each other. No gaps between your ad spend and your lead follow-up.
            </p>
          </div>
        </div>
      </section>

      {/* Home Service Success Stories — Campaign Result Cards */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent">
              Home Service Success Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how we've helped contractors build predictable lead pipelines
            </p>
          </div>

          {/* Aggregate Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{result.metric}</div>
                <p className="text-muted-foreground">{result.label}</p>
              </div>
            ))}
          </div>

          {/* Local SEO Campaign Results */}
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
            Local SEO Campaign Results
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {seoCampaignResults.map((campaign, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col"
              >
                <div className="bg-gradient-primary p-6">
                  <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">
                    Campaign Results
                  </span>
                  <h3 className="text-xl font-display font-bold text-primary-foreground mt-2 mb-1">
                    {campaign.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70">
                    {campaign.subtitle}
                  </p>
                </div>
                <div className="p-6 flex-1">
                  <div className="space-y-3">
                    {campaign.metrics.map((metric, mIndex) => (
                      <div key={mIndex} className="flex items-start gap-3">
                        <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Link
                    to={campaign.link}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    View Case Studies
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Google Ads Campaign Results */}
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 mt-16 text-center">
            Google Ads Campaign Results
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ppcCampaignResults.map((campaign, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col"
              >
                <div className="bg-gradient-primary p-6">
                  <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">
                    Campaign Results
                  </span>
                  <h3 className="text-xl font-display font-bold text-primary-foreground mt-2 mb-1">
                    {campaign.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70">
                    {campaign.subtitle}
                  </p>
                </div>
                <div className="p-6 flex-1">
                  <div className="space-y-3">
                    {campaign.metrics.map((metric, mIndex) => (
                      <div key={mIndex} className="flex items-start gap-3">
                        <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Link
                    to={campaign.link}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    View Case Studies
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <a href={strategySessionUrl}>
                Get Results Like These
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection 
        faqs={faqs}
        title="Home Service Marketing FAQs"
        subtitle="Common questions from home service contractors"
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Home Service Marketing?",
          description: "We're here to help! Reach out to us for a personalized consultation.",
          tagline: "Let's grow your home service business together.",
        }}
      />

      <BlogSection 
        posts={hvacBlogPosts}
        title="Home Service Marketing Insights"
        subtitle="Tips and strategies to grow your contracting business"
      />

      <CardCTA
        title="Ready to Own Your Lead Pipeline?"
        description="Get a free strategy session and discover how to replace expensive third-party leads with your own lead generation engine."
      />

      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default HomeServices;
