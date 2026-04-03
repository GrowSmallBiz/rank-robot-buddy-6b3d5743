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
  Search,
  ShieldCheck,
  Eye,
  Zap,
  MapPin,
  TrendingUp,
  BarChart3,
  Phone,
  RefreshCw,
  CheckCircle2,
  Monitor,
  Settings,
  Users,
  Star,
  Wrench,
  Stethoscope,
  Home,
  Scale,
  Car,
  Camera,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/services/SectionHeader";

const faqs: FAQItem[] = [
  {
    question: "How much should a local business spend on Google Ads?",
    answer: "The right budget depends on your market, your industry, and your goals. For most local service businesses, we recommend starting with a minimum of $500–$1,500/month in ad spend. We will give you a realistic projection of what that budget can generate for your specific market during your free strategy session.",
  },
  {
    question: "How long does it take to see results from Google Ads?",
    answer: "Unlike SEO, Google Ads can generate leads within days of launch. Most of our clients see qualified inbound leads within the first 1–2 weeks of a campaign going live. The first 60–90 days are a learning period where we optimize aggressively to lower your cost per lead and increase conversion rates.",
  },
  {
    question: "What is the difference between Google Ads and Google Local Service Ads?",
    answer: "Google Ads (PPC) charges you per click, regardless of whether that click converts. Google Local Service Ads charge you per qualified lead — meaning you only pay when a potential customer actually calls or messages your business. Many of our clients benefit from running both simultaneously for maximum coverage.",
  },
  {
    question: "Do I need a new website to run Google Ads?",
    answer: "Not necessarily, but your website's landing pages need to be conversion-optimized to get the most out of your ad spend. We audit your existing site during onboarding and will recommend improvements — or build dedicated landing pages — if needed to maximize your campaign performance.",
  },
  {
    question: "Can you manage Google Ads for my business even if I am not in the Bay Area?",
    answer: "Yes. While GrowSmallBiz is Bay Area-based in Danville, CA, we work with local service businesses nationwide. Our strategies are always tailored to your specific local market, regardless of geography.",
  },
  {
    question: "How is GrowSmallBiz different from other PPC agencies?",
    answer: "We specialize exclusively in local service businesses, integrate paid ads into a broader marketing ecosystem, provide a performance guarantee, and assign every client a dedicated Account Relationship Manager.",
  },
  {
    question: "What do I need to get started?",
    answer: "Just your time for a free strategy session. We will review your current situation, define your goals, and outline exactly what a campaign for your business would look like — with no obligation to move forward.",
  },
];

const GoogleAds = () => {
  const { buildUrl, pageMedium } = useUtm();
  const strategyUrl = buildUrl(CTA_URLS.strategySession, "strategy-session");
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Google Ads for Local Businesses | Local PPC Management | GrowSmallBiz</title>
        <meta name="description" content="Stop paying for clicks that go nowhere. GrowSmallBiz builds and manages Google Ads campaigns for local service businesses — so every dollar you spend works harder to fill your calendar, your phone line, and your revenue goals." />
        <link rel="canonical" href="https://growsmallbiz.io/services/paid-advertising/google-ads/" />
      </Head>
      <ServiceJsonLd
        serviceName="Google Ads for Local Businesses"
        serviceType="Google Ads Management"
        description="Google Ads campaigns built and managed specifically for local service businesses. High-intent keyword targeting, conversion tracking, and ongoing optimization."
        url="/services/paid-advertising/google-ads/"
        breadcrumbs={[
          { name: "Services", url: "/services/" },
          { name: "Google Ads for Local Businesses", url: "/services/paid-advertising/google-ads/" },
        ]}
      />
      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Target className="w-4 h-4" />
                Google Ads Management
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up">
              Google Ads for Local Businesses That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Actually Bring in Customers
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Stop paying for clicks that go nowhere. GrowSmallBiz builds and manages Google Ads campaigns for local service businesses — so every dollar you spend works harder to fill your calendar, your phone line, and your revenue goals.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.15s" }}>
              Most local businesses run Google Ads and get disappointed. The ads run, the budget drains, and the phone stays quiet. That is not a Google problem — it is a strategy problem.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
              At GrowSmallBiz, we specialize exclusively in local service businesses. We build campaigns that target the right customers in your area, at the right moment, with the right message — and we track every lead back to its source so you always know what is working.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.25s" }}>
              <Button variant="hero" size="xl" asChild>
                <a href={strategyUrl} target="_blank" rel="noopener noreferrer">
                  Get Your Free Ad Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#how-it-works">
                  See How It Works
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeader title="Proven Results for" titleHighlight="Local Service Businesses" className="mb-12" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "324%", label: "Average Increase in Consultations" },
              { value: "$127K", label: "Average Monthly Revenue Growth" },
              { value: "67", label: "First-Page Keywords Achieved" },
              { value: "4.9 stars", label: "Average Google Rating Achieved" },
            ].map((stat, i) => (
              <div key={i} className="text-center animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <p className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-8">
            Results from GrowSmallBiz client campaigns across HVAC, Med Spa, Home Services, Dental, and more.
          </p>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Why Most Local Businesses"
              titleHighlight="Lose Money on Google Ads"
              description="Running Google Ads without a local-focused strategy is one of the fastest ways to burn through a marketing budget. Here is what we see every day from businesses that come to us after trying it on their own or with a generic agency:"
            />
            <div className="space-y-4 mt-8">
              {[
                "Broad targeting that shows your ads to people outside your service area",
                "Generic ad copy that does not speak to what local customers actually care about",
                "No conversion tracking so you can never tell which clicks turned into calls or bookings",
                "Set it and forget it campaign management — no ongoing optimization, no testing",
                "Wasted spend on irrelevant keywords that attract tire-kickers instead of ready-to-buy customers",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <Zap className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center mt-8 animate-fade-up">
              The good news: every one of these problems is fixable with the right local PPC strategy.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="What You Get When Google Ads Are Done Right for"
              titleHighlight="Your Local Business"
              description="When your Google Ads campaign is built and managed specifically for your local market, the results speak for themselves."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                { icon: Eye, title: "Instant Visibility in Your Local Market", desc: "Unlike SEO, paid search puts you at the top of Google results immediately — right when your ideal customer is searching for the exact service you provide. Whether someone is searching \"HVAC repair near me\" or \"med spa Botox Danville CA,\" a properly built campaign gets you seen first." },
                { icon: Target, title: "Leads, Not Just Clicks", desc: "Traffic is meaningless without conversion. We build campaigns with conversion-focused landing pages, optimized calls-to-action, and proper tracking so you attract people who are ready to call, book, or buy — not just browse." },
                { icon: MapPin, title: "Precision Targeting for Your Service Area", desc: "We configure your campaigns to reach customers specifically within your service radius — whether that is a single city, a metro area, or multiple zip codes. No wasted spend on people you can never serve." },
                { icon: BarChart3, title: "Full Transparency on Every Dollar Spent", desc: "You will always know what you are spending, what it is generating, and what your cost-per-lead looks like. No mystery metrics, no vanity reporting — just the numbers that matter to your business." },
                { icon: RefreshCw, title: "Campaigns That Improve Over Time", desc: "We do not set up your ads and walk away. Every campaign is continuously monitored, tested, and refined — adjusting bids, refining audiences, and rotating ad copy to push your cost per acquisition lower every month." },
              ].map((card, i) => (
                <div key={i} className="bg-background border border-border rounded-xl p-6 space-y-3 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-sm font-display font-semibold text-foreground">{card.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="Our Google Ads Services for"
              titleHighlight="Local Businesses"
              description="We offer a complete suite of Google advertising solutions built for local service businesses."
            />
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              {[
                {
                  icon: Search, title: "Google Search Ads (Pay-Per-Click)",
                  desc: "The most direct form of local advertising. We build search campaigns targeting high-intent keywords — the terms your customers type when they are ready to hire someone. We handle keyword research, ad copywriting, bid strategy, and ongoing A/B testing to maximize your return.",
                  bullets: ["High-intent, locally targeted keyword research", "Compelling ad copy written to drive calls and form fills", "Smart bidding strategies aligned to your revenue goals", "Negative keyword management to eliminate wasted spend", "Continuous performance monitoring and optimization"],
                },
                {
                  icon: ShieldCheck, title: "Google Local Service Ads (LSA) Management",
                  desc: "Google Local Service Ads appear above traditional pay-per-click results and charge only for qualified leads — calls and messages from real potential customers. For eligible local service businesses, LSAs are among the highest-ROI ad products available.",
                  bullets: ["Account setup, verification, and Google Guarantee badge management", "Profile optimization to maximize your visibility and lead volume", "Lead quality review and dispute management", "Budget management to control your cost per lead", "Integration with your broader Google Ads strategy"],
                },
                {
                  icon: RefreshCw, title: "Google Display and Retargeting Ads",
                  desc: "Not every potential customer converts on the first visit. Retargeting campaigns keep your business in front of people who have already shown interest — at a fraction of the cost of acquiring a new click.",
                  bullets: ["Custom audience creation based on website visitors and engagement", "Retargeting sequences designed to re-engage and convert", "Display campaigns for brand awareness in your local market", "Cross-device targeting across desktop and mobile"],
                },
                {
                  icon: BarChart3, title: "Conversion Tracking and Analytics Setup",
                  desc: "Every campaign we manage includes proper conversion tracking from day one. We connect your Google Ads account to call tracking, form submissions, and booking confirmations so you have a complete picture of your ad performance.",
                  bullets: ["Google Analytics 4 and Google Ads integration", "Call tracking and call recording setup", "Form fill and booking conversion tracking", "Monthly performance reports with actionable insights"],
                },
              ].map((svc, i) => (
                <div key={i} className="feature-card-teal rounded-xl p-6 space-y-4 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svc.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-base font-display font-semibold text-foreground">{svc.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                  <ul className="space-y-2">
                    {svc.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="how-it-works" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="From Strategy to Leads in"
              titleHighlight="Weeks, Not Months"
            />
            <div className="space-y-6 mt-12">
              {[
                { title: "Discovery and Business Analysis", desc: "We start with a deep-dive consultation to understand your business, your service area, your competitive landscape, and your revenue goals. We audit your existing digital assets — website, current ads if any, Google Business Profile — to identify opportunities and gaps before we build anything." },
                { title: "Strategic Campaign Planning", desc: "Based on our analysis, we develop a tailored Google Ads strategy — selecting campaign types, defining targeting parameters, establishing budget allocation, and mapping out the keyword universe we will go after. You review and approve the plan before any dollar is spent." },
                { title: "Campaign Build and Launch", desc: "Our team builds your campaigns from the ground up — writing ad copy, configuring targeting, setting up conversion tracking, and connecting all reporting. We typically launch paid advertising campaigns within 2–3 weeks of onboarding, once tracking and conversion systems are fully in place." },
                { title: "Optimization and Scaling", desc: "Once live, we monitor performance daily and run systematic optimization cycles — testing ad variations, refining bids, pruning underperforming keywords, and reallocating budget to what is working. You receive monthly performance reviews with full transparency into results and next steps." },
                { title: "Ongoing Partnership", desc: "Your assigned Account Relationship Manager is your dedicated point of contact. We hold monthly strategy meetings to review performance, discuss market changes, and plan for continued growth. As your results compound, we help you scale your investment strategically." },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary">{i + 1}</span>
                    </div>
                    {i < 4 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-6">
                    <h4 className="text-base font-display font-semibold text-foreground mb-2">Step {i + 1} — {step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="Google Ads Management for These"
              titleHighlight="Local Service Industries"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Home, title: "HVAC and Home Services" },
                { icon: Stethoscope, title: "Med Spas and Aesthetic Practices" },
                { icon: Star, title: "Dental Practices" },
                { icon: Wrench, title: "General Contractors" },
                { icon: Scale, title: "Legal Services" },
                { icon: Car, title: "Auto Repair Shops" },
                { icon: Users, title: "Realtors" },
                { icon: Camera, title: "Photographers" },
              ].map((ind, i) => (
                <div key={i} className="feature-card-teal rounded-xl p-5 text-center space-y-3 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="w-10 h-10 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                    <ind.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-display font-semibold text-foreground">{ind.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY GROWSMALLBIZ */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Why Local Businesses Choose GrowSmallBiz Over"
              titleHighlight="Generic Agencies"
              className="mb-12"
            />
            <div className="space-y-6">
              {[
                { title: "We Only Work With Local Service Businesses", desc: "We do not manage ads for national brands, SaaS companies, or e-commerce stores. Our entire focus is local service businesses like yours. That specialization means we know your customer's search behavior, your competitive landscape, and what ad strategies actually move the needle for businesses in your category." },
                { title: "An Integrated Marketing Ecosystem — Not Just Ads", desc: "Paid ads work best when they are part of a coordinated system. We connect your Google Ads campaigns with your website, SEO, reputation management, and AI-powered lead handling — so leads do not just arrive, they convert." },
                { title: "A Performance Guarantee", desc: "We stand behind our work. If GrowSmallBiz does not generate leads within a pre-agreed timeframe and scope, we continue managing your campaigns at no additional management fee until results are delivered." },
                { title: "Led by a 30+ Year Marketing Veteran", desc: "GrowSmallBiz was founded by Subrata Guha, a 30+ year veteran of Fortune 500 Sales, Marketing, Supply Chain, and Digital Transformation." },
                { title: "Transparent Reporting — Always", desc: "You will never wonder what your money is doing. Every client gets a multi-channel dashboard with real-time visibility into leads, spend, and performance — and a dedicated Account Manager who walks you through the numbers every month." },
              ].map((item, i) => (
                <div key={i} className="bg-background border border-border rounded-xl p-6 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <h4 className="text-base font-display font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES PLACEHOLDER */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="Real Results Across"
              titleHighlight="Local Google Ads Campaigns"
              description="Case studies coming soon — showcasing measurable results from our Google Ads management for local service businesses."
            />
            <div className="grid lg:grid-cols-3 gap-8 mt-12">
              {["HVAC Company", "Roofing Contractor", "Med Spa"].map((name, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-8 text-center animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{name}</h3>
                  <p className="text-sm text-muted-foreground">Case study coming soon</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <PersonCTA
        title="Ready to Turn Google Searches Into Paying Customers?"
        description="Every day you are not running optimized Google Ads, your competitors are collecting the leads you should be getting. Let us change that. Book your free Google Ads strategy session with GrowSmallBiz. We will audit your current situation, identify your biggest opportunities, and show you exactly what a local PPC campaign would look like for your business — at no cost and no obligation."
        buttonText="Schedule Strategy Call"
        buttonHref={strategyUrl}
        sectionClassName="py-24"
      />

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="Frequently Asked Questions About Google Ads for Local Businesses"
        subtitle="Common questions about our Google Ads management services"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Google Ads?",
          description: "We're here to help you build a Google Ads campaign that actually works.",
          tagline: "Let's turn your ad spend into qualified leads.",
        }}
      />

      {/* FOOTER CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Your Local Competitors Are Already Running Google Ads.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Are You?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Do not let them win the top spot on every search in your market. GrowSmallBiz builds and manages Google Ads campaigns that put local service businesses front and center — exactly when customers are ready to hire.
            </p>
            <p className="text-sm text-muted-foreground">No contracts. No fluff. Just leads.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href={strategyUrl} target="_blank" rel="noopener noreferrer">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+19258863724">
                  <Phone className="w-5 h-5 mr-2" />
                  +1 (925) 886-3724
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationFormSection utmCampaign="consultation-form" utmMedium={pageMedium} />
      <Footer />
    </div>
  );
};

export default GoogleAds;
