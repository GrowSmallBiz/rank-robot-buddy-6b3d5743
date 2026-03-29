import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { PersonCTA } from "@/components/services/PersonCTA";
import { baseContactCTA } from "@/config/contactCTA";
import { useUtm } from "@/hooks/use-utm";
import { CTA_URLS } from "@/lib/utm";
import {
  ArrowRight,
  Target,
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
  Clock,
  MessageSquare,
  Megaphone,
  MousePointerClick,
  Home,
  Heart,
  Scale,
  Car,
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
  {
    question: "What's the difference between pay-per-click and pay-per-lead?",
    answer: "Pay-per-click means you pay when someone clicks your ad. This usually gives you more control over keywords, landing pages, messaging, and conversion tracking. Pay-per-lead means you pay when a lead comes through, which is commonly associated with Local Service Ads. The right model depends on your business category, service area, lead quality, and how well your campaigns are being tracked and managed."
  },
  {
    question: "Which ad platform is usually the best fit for my business?",
    answer: "It depends on how your customers search and how quickly they are ready to act. Google Search Ads are usually best for high-intent demand. Local Service Ads can work well for eligible service categories that want direct calls and leads. Meta Ads are useful for awareness, offer promotion, and retargeting. In many cases, the strongest results come from using the right combination rather than relying on one platform alone."
  },
];

const adChannelsPrimary = [
  {
    title: "Google PPC Ads Management",
    description: "Capture high-intent demand when people are actively searching for your service.",
    href: "/services/google-ads-for-small-businesses",
    brandLogo: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
    borderColor: "#4285F4",
  },
  {
    title: "Google Local Service Ads Management",
    description: "Show up in Google's high-visibility local placement with setup, verification, budget guidance, and ongoing optimization.",
    href: "/services/google-local-services-ads-management",
    brandLogo: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
        <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="#34A853" opacity="0.2"/>
        <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" fill="#34A853"/>
      </svg>
    ),
    borderColor: "#34A853",
  },
  {
    title: "Facebook & Instagram Ads Management",
    description: "Reach local audiences across Facebook and Instagram for awareness, lead generation, and remarketing.",
    href: "/services/facebook-ads-management-services",
    brandLogo: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
        <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z" fill="#1877F2"/>
        <path d="M16.671 15.47L17.203 12h-3.328V9.75c0-.95.465-1.875 1.956-1.875h1.513V4.922s-1.374-.234-2.686-.234c-2.741 0-4.533 1.661-4.533 4.668V12H7.078v3.47h3.047v8.385a12.09 12.09 0 0 0 3.75 0V15.47h2.796z" fill="white"/>
      </svg>
    ),
    borderColor: "#1877F2",
  },
];

const adChannelsSecondary = [
  {
    title: "Retargeting Campaigns",
    description: "Stay visible to warm prospects who visited but did not contact you the first time.",
    brandLogo: <RefreshCw className="w-6 h-6 text-primary" />,
    borderColor: "",
  },
  {
    title: "TikTok Ads Management",
    description: "Tap into short-form video audiences with targeted local campaigns on one of the fastest-growing platforms.",
    comingSoon: true,
    brandLogo: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.86a8.28 8.28 0 0 0 4.85 1.56V6.97a4.84 4.84 0 0 1-1.09-.28z" fill="#000000"/>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.86a8.28 8.28 0 0 0 4.85 1.56V6.97a4.84 4.84 0 0 1-1.09-.28z" fill="#25F4EE" opacity="0.5" transform="translate(-0.5, -0.5)"/>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.86a8.28 8.28 0 0 0 4.85 1.56V6.97a4.84 4.84 0 0 1-1.09-.28z" fill="#FE2C55" opacity="0.5" transform="translate(0.5, 0.5)"/>
      </svg>
    ),
  },
  {
    title: "Bing PPC Ads Management",
    description: "Extend your reach to Microsoft Search audiences with lower competition and cost-per-click opportunities.",
    comingSoon: true,
    brandLogo: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
        <path d="M3 3v18l5.5-3.15V6.35L13 8.25v8l-4.5 2.6L3 21" fill="#00897B"/>
        <path d="M8.5 6.35l5 2.4 4.5-1.6v7.7l-4.5 3.3-5-2.9v-8.9" fill="#00ACC1"/>
        <path d="M13 8.25l5-1.4v7.7l-5 3.7V8.25z" fill="#26C6DA" opacity="0.7"/>
      </svg>
    ),
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
  const { buildUrl, pageMedium } = useUtm();
  const strategyUrl = buildUrl(CTA_URLS.strategySession, "strategy-session");
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Paid Advertising for Local Service Businesses | GrowSmallBiz</title>
        <meta name="description" content="Stop paying for clicks. Start generating qualified leads with full-funnel paid ad systems for local service businesses. Google Ads, LSA, Meta Ads, retargeting, and conversion tracking." />
        <link rel="canonical" href="https://growsmallbiz.io/services/paid-advertising-services/" />
      </Head>
      <ServiceJsonLd
        serviceName="Paid Advertising"
        serviceType="Paid Advertising"
        description="Full-funnel paid ad systems for local service businesses including Google Ads, Local Service Ads, Meta Ads, retargeting, and conversion tracking."
        url="/services/paid-advertising-services"
        breadcrumbs={[
          { name: "Services", url: "/services" },
          { name: "Paid Advertising", url: "/services/paid-advertising-services" },
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
                <a href={strategyUrl} target="_blank" rel="noopener noreferrer">
                  Schedule Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+19258863724">
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 (925) 886-3724
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AD PLATFORMS SCROLLING BAR */}
      <section className="py-4 overflow-hidden bg-white">
        <div className="container mx-auto px-4 mb-4">
          <p className="text-center text-sm font-medium text-muted-foreground tracking-wide uppercase">
            Platforms We Manage
          </p>
        </div>
        <div className="relative w-full">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          <div className="py-4">
            <div className="flex animate-marquee gap-16 items-center">
              {[...Array(2)].flatMap((_, dupeIdx) => [
                { name: "Google Ads", logo: (
                  <svg key={`google-${dupeIdx}`} className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path d="M12 11.5v4.5h6.47c-.27 1.4-1.06 2.58-2.25 3.38l3.63 2.82c2.12-1.96 3.35-4.84 3.35-8.26 0-.8-.07-1.56-.21-2.3H12v-.14z" fill="#4285F4"/>
                    <path d="M5.27 14.27l-.82.63-2.9 2.26C3.73 20.65 7.6 23 12 23c3.24 0 5.95-1.07 7.85-2.9l-3.63-2.82c-1.05.7-2.4 1.12-4.22 1.12-3.24 0-5.98-2.19-6.96-5.13h-.77z" fill="#34A853"/>
                    <path d="M1.55 6.84C.56 8.79 0 10.83 0 13s.56 4.21 1.55 6.16l3.72-2.89A7.96 7.96 0 014.64 13c0-.84.16-1.64.43-2.39L1.55 6.84z" fill="#FBBC05"/>
                    <path d="M12 4.84c1.83 0 3.47.63 4.76 1.86L20.27 3.2C18.1 1.22 15.24 0 12 0 7.6 0 3.73 2.35 1.55 5.84l3.72 2.89C6.25 5.69 8.76 4.84 12 4.84z" fill="#EA4335"/>
                  </svg>
                )},
                { name: "Google LSA", logo: (
                  <svg key={`lsa-${dupeIdx}`} className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11" stroke="#34A853" strokeWidth="2" fill="none"/>
                    <path d="M12 6a4 4 0 014 4c0 3-4 7-4 7s-4-4-4-7a4 4 0 014-4z" fill="#34A853"/>
                    <circle cx="12" cy="10" r="1.5" fill="white"/>
                  </svg>
                )},
                { name: "Facebook Ads", logo: (
                  <svg key={`fb-${dupeIdx}`} className="w-8 h-8" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.017 1.793-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                )},
                { name: "Instagram Ads", logo: (
                  <svg key={`ig-${dupeIdx}`} className="w-8 h-8" viewBox="0 0 24 24">
                    <defs>
                      <radialGradient id={`ig-grad-${dupeIdx}`} cx="30%" cy="107%" r="150%">
                        <stop offset="0%" stopColor="#fdf497"/>
                        <stop offset="5%" stopColor="#fdf497"/>
                        <stop offset="45%" stopColor="#fd5949"/>
                        <stop offset="60%" stopColor="#d6249f"/>
                        <stop offset="90%" stopColor="#285AEB"/>
                      </radialGradient>
                    </defs>
                    <rect width="24" height="24" rx="6" fill={`url(#ig-grad-${dupeIdx})`}/>
                    <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.5" fill="none"/>
                    <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
                  </svg>
                )},
                { name: "TikTok Ads", logo: (
                  <svg key={`tt-${dupeIdx}`} className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="6" fill="#010101"/>
                    <path d="M16.5 4.5c-.2-1-.8-2-2-2.5v6.5c0 2.5-2 4.5-4.5 4.5S5.5 11 5.5 8.5 7.5 4 10 4v2.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V4h2c0 1.7 1.3 3 3 3v2.5c-1.5 0-2.8-.5-3.5-1.5v5c0 3-2.5 5.5-5.5 5.5S2.5 16 2.5 13 5 7.5 8 7.5" fill="#25F4EE"/>
                    <path d="M17.5 4.5c-.2-1-.8-2-2-2.5v6.5c0 2.5-2 4.5-4.5 4.5S6.5 11 6.5 8.5 8.5 4 11 4v2.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V4h2c0 1.7 1.3 3 3 3v2.5c-1.5 0-2.8-.5-3.5-1.5v5c0 3-2.5 5.5-5.5 5.5S3.5 16 3.5 13 6 7.5 9 7.5" fill="#FE2C55"/>
                  </svg>
                )},
                { name: "Bing Ads", logo: (
                  <svg key={`bing-${dupeIdx}`} className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path d="M4 2l4.5 1.6v14.8l6-3.5-4-1.8L8.5 7.5 18 11v5.5L10.5 21 4 17.5V2z" fill="#008373"/>
                  </svg>
                )},
              ])}
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

      {/* NEW SECTION — WHY LOCAL SERVICE BUSINESSES INVEST IN PAID ADS */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="Why Local Service Businesses Invest in"
              titleHighlight="Paid Ads"
              description="Paid ads are not the only way to grow, but they are often the fastest way to create visibility when timing matters. SEO builds momentum over time. Referrals are valuable, but unpredictable. Organic social can support awareness, but it does not always create immediate demand. Paid ads help local businesses show up when people are actively searching, comparing, or ready to take action."
            />

            {/* 4 Comparison Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { icon: Clock, title: "SEO Builds Over Time", body: "SEO is essential for long-term visibility, but it usually takes time to build rankings, authority, and traffic. Paid ads can help create demand while SEO gains momentum." },
                { icon: MessageSquare, title: "Referrals Are Valuable, But Unpredictable", body: "Word-of-mouth leads can be strong, but they are hard to scale consistently. Paid ads give you more control over timing, targeting, and lead flow." },
                { icon: Megaphone, title: "Organic Social Builds Awareness", body: "Social media helps people notice your brand, but not every local business owner has time to create content consistently. Paid campaigns help put the right offer in front of the right audience faster." },
                { icon: MousePointerClick, title: "Paid Ads Create Faster Market Visibility", body: "When campaigns are built correctly, paid ads help you test offers, target service areas, control budgets, and generate qualified calls or leads with much more predictability." },
              ].map((card, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 space-y-3 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-sm font-display font-semibold text-foreground">{card.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>

            {/* 2 Educational Sub-Blocks */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="bg-card border border-border rounded-xl p-6 animate-fade-up">
                <h4 className="text-base font-display font-semibold text-foreground mb-3">How Google PPC Works</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Google Search Ads help you appear when people are actively searching for services like yours. You bid on relevant keywords, control where your ads appear, and send traffic to focused pages built to convert. This is usually the strongest fit when demand already exists and you want to capture it quickly.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 animate-fade-up" style={{ animationDelay: "0.05s" }}>
                <h4 className="text-base font-display font-semibold text-foreground mb-3">How Meta Retargeting Works</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Most visitors do not contact a business the first time they land on a website. Meta retargeting helps you stay visible on Facebook and Instagram after they leave. That repeated exposure builds familiarity, supports trust, and brings warm prospects back when they are ready to act.
                </p>
              </div>
            </div>

            {/* PPC vs PPL Comparison */}
            <div className="mb-16">
              <h4 className="text-lg font-display font-semibold text-foreground text-center mb-6 animate-fade-up">Pay-Per-Click vs Pay-Per-Lead</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6 animate-fade-up">
                  <h5 className="text-sm font-display font-semibold text-foreground mb-3">Pay-Per-Click</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    With PPC, you pay for the click and control the landing page, targeting, messaging, and conversion path. This usually gives you more flexibility and better optimization potential when the campaign structure is strong.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 animate-fade-up" style={{ animationDelay: "0.05s" }}>
                  <h5 className="text-sm font-display font-semibold text-foreground mb-3">Pay-Per-Lead</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    With pay-per-lead, you pay when a lead comes through rather than for every click. This model is most commonly associated with Local Service Ads. For eligible businesses, it can work well when lead quality is strong and the category is a good fit.
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-6 max-w-3xl mx-auto animate-fade-up">
                For many local service businesses, the best approach is not choosing only one model. It is choosing the right mix based on your niche, service area, urgency of demand, and how your leads are tracked and followed up.
              </p>
            </div>

            {/* Best Fit by Business Type */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Home, title: "Home Services", body: "Best fit: Google Search Ads, Local Service Ads when eligible, and retargeting." },
                { icon: Heart, title: "Health & Wellness", body: "Best fit: Google Search Ads, Meta Ads, and retargeting for repeat exposure and nurturing." },
                { icon: Scale, title: "Legal", body: "Best fit: Google Search Ads, Local Service Ads when eligible, and retargeting." },
                { icon: Car, title: "Automotive / Repair", body: "Best fit: Google Search Ads and retargeting, with Meta used when offer-driven promotion makes sense." },
              ].map((card, i) => (
                <div key={i} className="bg-primary/5 border border-primary/20 rounded-xl p-5 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <card.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h5 className="text-sm font-display font-semibold text-foreground mb-1">{card.title}</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHO THIS IS FOR */}
      <section className="py-24 bg-card">
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
            <SectionHeader
              title="A Complete Paid Advertising System —"
              titleHighlight="Not Just Ad Setup"
              description="Every engagement includes both channel management and the performance infrastructure that makes campaigns convert."
            />

            {/* Row 1 — Primary Ad Channels (with links) */}
            <div className="mb-8">
              <h3 className="text-lg font-display font-semibold text-primary mb-6 animate-fade-up">Ad Channels We Manage</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {adChannelsPrimary.map((card, i) => (
                  <div key={i} className="bg-background border border-border rounded-xl p-6 space-y-4 animate-fade-up flex flex-col" style={{ animationDelay: `${i * 0.05}s`, borderTopColor: card.borderColor, borderTopWidth: '3px' }}>
                    <div className="flex items-center gap-3">
                      {card.brandLogo}
                      <h4 className="text-sm font-display font-semibold text-foreground">{card.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">{card.description}</p>
                    <Button variant="outline" size="sm" asChild className="w-fit">
                      <Link to={card.href}>
                        Explore Service <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 — Secondary Ad Channels (retargeting + coming soon) */}
            <div className="mb-12">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {adChannelsSecondary.map((card, i) => (
                  <div key={i} className="bg-background border border-border rounded-xl p-6 space-y-4 animate-fade-up flex flex-col relative overflow-hidden" style={{ animationDelay: `${(i + 3) * 0.05}s` }}>
                    {'comingSoon' in card && card.comingSoon && (
                      <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        Coming Soon
                      </span>
                    )}
                    <div className="flex items-center gap-3">
                      {card.brandLogo}
                      <h4 className="text-sm font-display font-semibold text-foreground">{card.title}</h4>
                    </div>
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
            <SectionHeader
              title="How Paid Traffic Becomes"
              titleHighlight="Booked Jobs"
            />

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
            <SectionHeader
              title="It's Not the Budget."
              titleHighlight="It's the System."
              className="mb-12"
            />

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
            <SectionHeader
              title="Real Results Across"
              titleHighlight="Local Service Campaigns"
              description="These examples show what happens when paid ads are paired with better structure, sharper targeting, and stronger conversion systems."
              className="mb-6"
            />

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
                <SectionHeader
                  title="Visibility Gets You Seen."
                  titleHighlight="Trust Gets You Chosen."
                  centered={false}
                  className="mb-6"
                />
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
                  { icon: Eye, label: "SEO builds organic trust over time" },
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
            <SectionHeader
              title="Why Local Businesses Choose GrowSmallBiz for"
              titleHighlight="Paid Ads"
              className="mb-12"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: MapPin, title: "Built for local service businesses" },
                { icon: TrendingUp, title: "Full-funnel thinking, not isolated ad buying" },
                { icon: BarChart3, title: "Tracking and transparency from click to lead" },
                { icon: Link2, title: "Campaigns connected to follow-up and CRM systems" },
                { icon: Target, title: "Practical strategy with ongoing optimization" },
                { icon: RefreshCw, title: "Retargeting strategy to recapture warm visitors and increase conversions" },
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
      <PersonCTA
        title="Ready to Run Ads That Actually Generate Leads?"
        description="Stop guessing. Stop wasting budget. Start building a paid advertising system that turns visibility into qualified leads, better follow-up, and clearer ROI."
        buttonText="Schedule Strategy Session"
        buttonHref={strategyUrl}
        sectionClassName="py-24"
      />

      {/* CONSULTATION FORM */}
      <ConsultationFormSection utmCampaign="consultation-form" utmMedium={pageMedium} />

      <Footer />
    </div>
  );
};

export default PaidMedia;
