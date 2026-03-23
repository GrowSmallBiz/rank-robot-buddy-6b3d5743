import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { baseContactCTA } from "@/config/contactCTA";
import {
  ArrowRight,
  Target,
  Search,
  ShieldCheck,
  Users,
  RefreshCw,
  LayoutTemplate,
  PenTool,
  BarChart3,
  Phone,
  Link2,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Eye,
  Zap,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/services/SectionHeader";

const faqs: FAQItem[] = [
  {
    question: "How much should I budget for paid ads?",
    answer: "Most local service businesses see strong results starting at $1,500–$3,000/month in ad spend. Your ideal budget depends on your market, competition, average job value, and growth goals. We help you determine the right starting point during your strategy call and scale from there based on performance data."
  },
  {
    question: "How long before I see results?",
    answer: "Paid ads can generate leads within days of launch. However, campaigns improve significantly over the first 30–60 days as we gather conversion data, refine targeting, and optimize bids. Most clients see their strongest performance after 60–90 days of continuous optimization."
  },
  {
    question: "Do I need a new landing page?",
    answer: "Not always, but often yes. If your current website isn't built for conversion — clear offer, single call-to-action, fast load time, mobile-friendly — we'll recommend a focused landing page. Better post-click experience is one of the fastest ways to improve campaign ROI."
  },
  {
    question: "Can you take over campaigns I'm already running?",
    answer: "Absolutely. We regularly audit and take over existing Google Ads and Meta accounts. We'll review your current setup, identify what's working and what's not, and restructure campaigns for better performance without losing historical data."
  },
  {
    question: "What platforms do you manage?",
    answer: "We manage Google Ads (Search, Display, Performance Max), Google Local Service Ads, Meta Ads (Facebook and Instagram), and retargeting campaigns. We choose the right mix based on your industry, audience, and goals — not a one-size-fits-all template."
  },
  {
    question: "Do you handle ad creative?",
    answer: "Yes. We handle ad copywriting, headline testing, offer development, and creative direction. For Meta campaigns, we also guide or produce image and video creative tailored to local service audiences."
  },
  {
    question: "How is reporting structured?",
    answer: "You receive clear, plain-English reports focused on what matters: leads generated, cost per lead, conversion rates, and campaign recommendations. No vanity metrics. We also provide real-time dashboard access so you can check performance anytime."
  },
  {
    question: "Can I run ads if my reviews are not strong yet?",
    answer: "Yes, but reviews matter — especially for Local Service Ads and local trust signals. We can help you build a review generation strategy alongside your campaigns so your reputation supports your ad visibility."
  },
  {
    question: "How do you reduce junk leads and unqualified inquiries?",
    answer: "We use negative keyword lists, geographic targeting, qualifying ad copy, audience exclusions, and landing page clarity to filter out low-quality traffic before it becomes a lead. Ongoing optimization continuously reduces waste as we learn what converts for your business."
  },
  {
    question: "Is paid advertising the right fit for my business?",
    answer: "Paid ads work best for local service businesses with meaningful customer value — HVAC, roofing, legal, dental, med spa, and similar industries. If you have strong unit economics and want predictable lead flow with clear tracking, paid advertising is likely a strong fit. We'll help you evaluate during a strategy call."
  },
];

const adChannels = [
  {
    icon: Search,
    title: "Google Ads Management",
    description: "Capture high-intent demand when people are actively searching for your service.",
  },
  {
    icon: ShieldCheck,
    title: "Local Service Ads Management",
    description: "Show up in Google's high-visibility local placement with setup, verification, budget guidance, and ongoing optimization.",
  },
  {
    icon: Users,
    title: "Meta Ads Management",
    description: "Reach local audiences across Facebook and Instagram for awareness, lead generation, and remarketing.",
  },
  {
    icon: RefreshCw,
    title: "Retargeting Campaigns",
    description: "Stay visible to warm prospects who visited but did not contact you the first time.",
  },
];

const conversionSystems = [
  {
    icon: LayoutTemplate,
    title: "Landing Page Strategy",
    description: "Improve the page experience after the click so more visitors turn into leads.",
  },
  {
    icon: PenTool,
    title: "Ad Creative & Copywriting",
    description: "Sharper messaging, offer clarity, and creative direction built around local conversion.",
  },
  {
    icon: BarChart3,
    title: "Campaign Reporting & Optimization",
    description: "Ongoing testing, budget refinement, and plain-English reporting focused on lead performance.",
  },
  {
    icon: Phone,
    title: "Conversion Tracking & Call Tracking",
    description: "Track calls, form fills, and lead actions back to the campaigns that generated them.",
  },
  {
    icon: Link2,
    title: "CRM + Follow-Up Automation Integration",
    description: "Connect your campaigns to lead capture, nurture, and response systems so warm leads do not go cold.",
  },
];

const processSteps = [
  { label: "Attract", description: "Google Search, LSA, Meta, and retargeting bring the right people into your pipeline.", icon: Eye },
  { label: "Capture", description: "Clicks land on a focused page with one clear action: call, form, or booking.", icon: Target },
  { label: "Track", description: "Calls, forms, and lead actions are tied back to the source that generated them.", icon: BarChart3 },
  { label: "Follow Up", description: "CRM workflows, SMS, and email sequences help warm leads move faster.", icon: Zap },
  { label: "Convert", description: "Better visibility, better response, and better infrastructure produce stronger lead quality.", icon: TrendingUp },
];

const failureReasons = [
  "Broad targeting",
  "Weak or generic landing pages",
  "No clear offer",
  "No call tracking or attribution",
  "No retargeting",
  "Slow or inconsistent lead follow-up",
];

const PaidMedia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Paid Advertising for Local Service Businesses | GrowSmallBiz</title>
        <meta name="description" content="Stop paying for clicks. Start generating qualified leads with full-funnel paid ad systems for local service businesses. Google Ads, LSA, Meta Ads, retargeting, and conversion tracking." />
      </Head>
      <ServiceJsonLd
        serviceName="Paid Advertising"
        serviceType="Paid Advertising"
        description="Full-funnel paid ad systems for local service businesses including Google Ads, Local Service Ads, Meta Ads, retargeting, and conversion tracking."
        url="/paid-ads"
        breadcrumbs={[
          { name: "Services", url: "/services" },
          { name: "Paid Advertising", url: "/paid-ads" },
        ]}
      />
      <Header />

      {/* SECTION 1 — HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Target className="w-4 h-4" />
                Paid Advertising
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up">
              Stop Paying for Clicks.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Start Generating Qualified Leads.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
              We build full-funnel paid ad systems for local service businesses — combining campaign strategy, landing pages, call tracking, CRM follow-up, and retargeting so your ad spend turns into qualified leads you can actually track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book Your Free Ad Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">
                  Review My Current Campaigns
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE REAL PROBLEM */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                Most Local Ad Campaigns Don't Have a Traffic Problem.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary">
                  They Have a System Problem.
                </span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mb-12 animate-fade-up" style={{ animationDelay: "0.05s" }}>
              Paid ads should be one of the fastest ways to generate demand — but many local businesses still end up frustrated. The issue usually is not the platform. It is the missing system behind it.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              {[
                { icon: LayoutTemplate, text: "Weak landing pages" },
                { icon: Phone, text: "No call tracking" },
                { icon: Zap, text: "Poor follow-up" },
                { icon: BarChart3, text: "Limited ROI visibility" },
              ].map((item, i) => (
                <div key={i} className="bg-background border border-border rounded-xl p-6 text-center space-y-3">
                  <div className="w-10 h-10 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center mt-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              GrowSmallBiz builds paid ads as part of a conversion system, not as a standalone traffic tactic.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHO THIS IS FOR */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Built for Local Service Businesses That Need"
              titleHighlight="Better Leads, Not Just More Clicks"
              className="mb-12"
            />

            <div className="space-y-4 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              {[
                "You have a meaningful customer value per job, case, patient, or project",
                "You want more qualified calls, form leads, and booked appointments",
                "You have tried paid ads before but lacked clear ROI visibility",
                "You need better tracking, better follow-up, and fewer wasted clicks",
                "You want campaigns managed by people who understand local service conversion",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 bg-muted/50 border border-border rounded-xl p-4 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              <XCircle className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Not ideal fit:</span> This is not the right fit for businesses looking for the cheapest possible ad management without landing page, tracking, or follow-up infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICES WE OFFER */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                A Complete Paid Advertising System — Not Just Ad Setup
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every engagement includes both channel management and the performance infrastructure that makes campaigns convert.
              </p>
            </div>

            {/* Row 1 — Ad Channels */}
            <div className="mb-12">
              <h3 className="text-lg font-display font-semibold text-primary mb-6 animate-fade-up">Ad Channels</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {adChannels.map((card, i) => (
                  <div key={i} className="bg-background border border-border rounded-xl p-6 space-y-3 animate-fade-up flex flex-col" style={{ animationDelay: `${i * 0.05}s` }}>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-sm font-display font-semibold text-foreground">{card.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 — Conversion & Performance Systems */}
            <div>
              <h3 className="text-lg font-display font-semibold text-primary mb-6 animate-fade-up">Conversion & Performance Systems</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {conversionSystems.map((card, i) => (
                  <div key={i} className="bg-background border border-border rounded-xl p-6 space-y-3 animate-fade-up flex flex-col" style={{ animationDelay: `${i * 0.05}s` }}>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-sm font-display font-semibold text-foreground">{card.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW THE CHANNELS WORK TOGETHER */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                How Paid Traffic Becomes Booked Jobs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {processSteps.map((step, i) => (
                <div key={i} className="text-center space-y-3 animate-fade-up relative" style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-xs font-bold text-primary uppercase tracking-wider">Step {i + 1}</div>
                  <h4 className="text-base font-display font-semibold text-foreground">{step.label}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 -right-2 text-border">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHY MOST LOCAL PAID ADS FAIL */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                It's Not the Budget. It's the System.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {failureReasons.map((reason, i) => (
                <div key={i} className="flex items-center gap-3 bg-background border border-border rounded-xl p-4 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <AlertTriangle className="w-4 h-4 text-primary shrink-0" />
                  <p className="text-sm text-foreground">{reason}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground animate-fade-up">
              Each of these is fixable when campaigns are built with the right structure from day one.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — REAL RESULTS */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Real Results Across Local Service Campaigns
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These examples show what happens when paid ads are paired with better structure, sharper targeting, and stronger conversion systems.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mt-12">
              {/* HVAC */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col animate-fade-up">
                <div className="p-1.5">
                  <div className="bg-primary/10 rounded-xl px-5 py-4">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">HVAC</p>
                    <h3 className="text-lg font-display font-semibold text-foreground">Stronger Visibility, Lower CPA</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Challenge</p>
                    <p className="text-sm text-foreground">Needed stronger visibility, more qualified leads, and lower acquisition costs in a competitive local market.</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Strategy</p>
                    <p className="text-sm text-foreground">Refined keyword targeting, stronger ad copy, geographic focus, ad extensions, and ongoing optimization.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {[
                      { value: "+83%", label: "Conversions" },
                      { value: "-41%", label: "CPA" },
                      { value: "+50.23%", label: "CTR" },
                      { value: "+56.3%", label: "Conversion Rate" },
                    ].map((m, i) => (
                      <div key={i} className="bg-background rounded-lg p-3 text-center">
                        <p className="text-lg font-display font-bold text-primary">{m.value}</p>
                        <p className="text-xs text-muted-foreground">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Roofing */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="p-1.5">
                  <div className="bg-primary/10 rounded-xl px-5 py-4">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Roofing</p>
                    <h3 className="text-lg font-display font-semibold text-foreground">Better Estimates, Better Efficiency</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Challenge</p>
                    <p className="text-sm text-foreground">Needed stronger estimate flow and better efficiency from existing ad spend.</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Strategy</p>
                    <p className="text-sm text-foreground">Improved campaign structure, tighter optimization, and continuous performance refinement.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {[
                      { value: "+93.3%", label: "Conversions" },
                      { value: "-48.9%", label: "Cost/Conversion" },
                      { value: "+123.4%", label: "Conversion Rate" },
                    ].map((m, i) => (
                      <div key={i} className="bg-background rounded-lg p-3 text-center">
                        <p className="text-lg font-display font-bold text-primary">{m.value}</p>
                        <p className="text-xs text-muted-foreground">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Med Spa */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="p-1.5">
                  <div className="bg-primary/10 rounded-xl px-5 py-4">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Med Spa</p>
                    <h3 className="text-lg font-display font-semibold text-foreground">Long-Term Growth, Efficient CPA</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Challenge</p>
                    <p className="text-sm text-foreground">The goal was long-term lead growth at a stable and efficient cost per acquisition.</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Strategy</p>
                    <p className="text-sm text-foreground">Multi-campaign Google Ads structure across Search and Display with ongoing optimization.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {[
                      { value: "2,577", label: "Total Conversions" },
                      { value: "$16.39", label: "All-Time CPA" },
                      { value: "+48.8%", label: "30-Day Conversions" },
                      { value: "-31.1%", label: "30-Day CPA" },
                    ].map((m, i) => (
                      <div key={i} className="bg-background rounded-lg p-3 text-center">
                        <p className="text-lg font-display font-bold text-primary">{m.value}</p>
                        <p className="text-xs text-muted-foreground">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — SEO + RETARGETING */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Visibility Gets You Seen. Trust Gets You Chosen.
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Paid ads create immediate visibility, but many buyers do not act on the first visit. SEO helps your business show up organically as prospects continue researching. Retargeting keeps you visible after they leave.
                  </p>
                  <p>
                    Repeated exposure builds familiarity. Familiarity builds trust. Trust improves conversion. That is why the strongest campaigns are not built on traffic alone — they are built on multiple touchpoints working together.
                  </p>
                </div>
              </div>
              <div className="space-y-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                {[
                  { icon: Search, label: "SEO builds organic trust over time" },
                  { icon: Target, label: "Paid ads capture high-intent demand now" },
                  { icon: RefreshCw, label: "Retargeting keeps you top-of-mind" },
                  { icon: TrendingUp, label: "Multiple touchpoints increase conversion" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-background border border-border rounded-xl p-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm text-foreground font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — WHY GROWSMALLBIZ */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Why Local Businesses Choose GrowSmallBiz for Paid Ads
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: MapPin, title: "Built for local service businesses" },
                { icon: TrendingUp, title: "Full-funnel thinking, not isolated ad buying" },
                { icon: BarChart3, title: "Tracking and transparency from click to lead" },
                { icon: Link2, title: "Campaigns connected to follow-up and CRM systems" },
                { icon: Target, title: "Practical strategy with ongoing optimization" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
      <FAQSection
        faqs={faqs}
        subtitle="Common questions about our paid advertising services"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Paid Ads?",
          description: "We're here to help you build a paid advertising system that actually works.",
          tagline: "Let's turn your ad spend into qualified leads.",
        }}
      />

      {/* SECTION 11 — FINAL CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Ready to Run Ads That Actually Generate Leads?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stop guessing. Stop wasting budget. Start building a paid advertising system that turns visibility into qualified leads, better follow-up, and clearer ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book Your Free Ad Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">
                  Review My Current Campaigns
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaidMedia;
