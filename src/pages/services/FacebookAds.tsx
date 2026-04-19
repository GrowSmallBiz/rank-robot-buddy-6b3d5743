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
  Eye,
  Zap,
  TrendingUp,
  BarChart3,
  Phone,
  CheckCircle2,
  Users,
  Star,
  Image,
  RefreshCw,
  MousePointerClick,
  Settings,
  FileText,
  Layers,
  Home,
  Stethoscope,
  Wrench,
  Camera,
  Briefcase,
  Sparkles,
  Building2,
  Utensils,
  Video,
  Clock,
  LayoutGrid,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/services/SectionHeader";

const faqs: FAQItem[] = [
  {
    question: "How much should I spend on Facebook Ads as a local business?",
    answer: "The right budget depends on your market, your service, your competition, and your growth goals. As a general benchmark, most local service businesses generating meaningful results are spending between $500 and $2,000 per month in ad spend, separate from management fees. During your strategy session, we'll recommend a realistic budget based on your specific market and goals.",
  },
  {
    question: "How long does it take to see results from Facebook Ads?",
    answer: "Most of our clients begin seeing leads within the first two to four weeks of launching a properly structured campaign. The first month is typically a data-gathering and optimization phase where we identify the highest-performing audiences and creatives. Results improve consistently through months two and three as we refine targeting and creative based on real performance data. This is why our performance guarantee exists — if we haven't generated leads within the agreed timeframe, we keep working until we do.",
  },
  {
    question: "What's the difference between boosting posts and running Facebook Ads?",
    answer: "Boosting posts is a simplified advertising feature designed for reach and engagement — it prioritizes impressions and likes. Managed Facebook Ad campaigns are built around specific business objectives: lead generation, website conversions, or calls. A boosted post is a shortcut. A properly structured campaign is a lead generation system. Most local businesses who feel like \"Facebook Ads don't work\" have only ever boosted posts.",
  },
  {
    question: "Do you manage Instagram Ads as well as Facebook Ads?",
    answer: "Yes. Facebook and Instagram advertising are managed through the same Meta Ads Manager platform, and we manage campaigns across both platforms simultaneously. We optimize placement, format, and creative for each platform independently to maximize performance on both.",
  },
  {
    question: "What's the difference between Meta Ads and Facebook Ads?",
    answer: "\"Meta Ads\" is the current brand name covering all advertising across Facebook, Instagram, Messenger, and Meta Audience Network. \"Facebook Ads\" is the legacy term. They refer to the same advertising platform — now called Meta Ads Manager.",
  },
  {
    question: "Do I need a Facebook Business Page and Meta Business Suite account before we start?",
    answer: "Yes. You'll need an active Facebook Business Page and a Meta Business Manager account. If you don't have these set up, we walk you through the setup process during onboarding. We also configure your Facebook Pixel on your website as part of the initial campaign setup.",
  },
  {
    question: "Will I have visibility into my campaign performance?",
    answer: "Yes, completely. You'll receive monthly performance reports with all key metrics explained in plain English. You'll always know exactly how your budget is being spent, what your cost per lead is, how many leads were generated, and what we're doing to improve results.",
  },
  {
    question: "How does Meta Ads compare to Google Ads for lead generation?",
    answer: "Meta Ads and Google Ads serve different funnel stages. Meta averages $27.66 CPL (WordStream, 2025) at lower intent — it reaches people who aren't yet searching. Google Search Ads average $70.11 CPL at higher intent — it captures people actively looking. Most of our clients run both; the channel mix depends on vertical and stage of business.",
  },
  {
    question: "What ad creative do I need to provide?",
    answer: "We handle all ad copy, headlines, and CTA development. For creative assets (photos, video), we work with what you have, source stock where appropriate, or develop custom creative briefs for your own production. Med spa and photography verticals typically need original visual assets; most other verticals can start with a mix of existing and stock.",
  },
  {
    question: "Can you take over campaigns that another agency or I was already running?",
    answer: "Absolutely. We take over underperforming accounts regularly. We start with a full audit of your existing campaign structure, audience settings, creative performance, and conversion tracking configuration. Then we restructure what's broken and build on what's working. Transitioning management to GrowSmallBiz typically results in improved performance within the first 30 to 60 days.",
  },
  {
    question: "What's your contract structure?",
    answer: "Month-to-month. No long-term contracts. If we're not delivering, you shouldn't be locked in.",
  },
];

const FacebookAds = () => {
  const { buildUrl, pageMedium } = useUtm();
  const strategyUrl = buildUrl(CTA_URLS.strategySession, "strategy-session");
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Facebook Ads Management for Local Businesses — GrowSmallBiz</title>
        <meta name="description" content="Stop wasting ad spend on clicks that never convert. GrowSmallBiz manages your Facebook & Instagram Ads with precision targeting, conversion-focused creative, and full-funnel tracking — so every dollar drives real leads for your local business." />
        <link rel="canonical" href="https://growsmallbiz.io/services/paid-advertising/facebook-ads/" />
      </Head>
      <ServiceJsonLd
        serviceName="Facebook Ads Management"
        serviceType="Facebook Ads Management"
        description="Facebook & Instagram Ads management for local service businesses. Precision targeting, conversion-focused creative, full-funnel tracking, and retargeting."
        url="/services/paid-advertising/facebook-ads/"
        breadcrumbs={[
          { name: "Services", url: "/services/" },
          { name: "Facebook Ads Management", url: "/services/paid-advertising/facebook-ads/" },
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
                <Users className="w-4 h-4" />
                Facebook & Instagram Ads
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up">
              Facebook & Instagram Ads That Fill Your Calendar —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Not Just Your Feed
              </span>
            </h1>
            <p className="text-base md:text-lg italic text-muted-foreground/80 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.05s" }}>
              Facebook & Instagram Ads management for small businesses that need qualified leads, not impressions.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Most small businesses waste thousands on Facebook and Instagram Ads chasing likes and impressions. You need leads. We build, manage, and optimize Meta ad campaigns that turn your ad spend into booked appointments, service calls, and paying customers.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.15s" }}>
              We don't run 'social media campaigns.' We build precision paid social systems for local service businesses — with audience targeting, scroll-stopping creative, pixel-based conversion tracking, structured retargeting funnels, and weekly active optimization.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
              If you've tried running Facebook Ads on your own — or handed them off to an agency that sent you vanity metrics instead of phone calls — you already know the problem. Targeting without strategy, creative without direction, and campaigns running on autopilot with no one watching the results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.25s" }}>
              <Button variant="hero" size="xl" asChild>
                <a href={strategyUrl} target="_blank" rel="noopener noreferrer">
                  Schedule Strategy Session
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
          <p className="text-sm text-muted-foreground text-center mb-8">Trusted by Local Service Businesses Across the Bay Area and Nationwide</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "30+", label: "Years Fortune 500 sales & marketing leadership" },
              { value: "5", label: "Local service industries served" },
              { value: "Weekly", label: "Active campaign optimization" },
              { value: "100%", label: "Done-for-you management" },
            ].map((stat, i) => (
              <div key={i} className="text-center animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <p className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Why Most Facebook Ad Campaigns Fail"
              titleHighlight="Small Businesses"
              description="Facebook and Instagram have over 3 billion combined monthly active users. The audience is there. The targeting tools are there. So why are so many local businesses still burning through budgets with nothing to show for it?"
            />
            <div className="space-y-6 mt-12">
              {[
                { title: "You're paying for the wrong outcomes.", desc: "Boosting posts for likes and reach is not advertising — it's brand awareness spending without brand-awareness budgets. If your campaigns aren't structured around lead generation and conversion goals, you're funding Meta's revenue, not yours." },
                { title: "Your targeting is too broad — or too narrow.", desc: "Generic interest targeting reaches people who will never call you. Hyper-local targeting without the right audience signals means you're guessing. Without a data-driven audience strategy built around your actual customer profile, your budget disappears into impressions that convert to nothing." },
                { title: "You have no retargeting system.", desc: "Most people who see your ad for the first time won't book immediately. Without a structured retargeting funnel — using Meta Pixel data, website visitors, and custom audiences — you're letting warm leads go cold every single day." },
                { title: "Your creative doesn't speak to your customer.", desc: "A blurry stock photo and a generic caption don't stop the scroll. Local service businesses need ad creative that addresses the specific pain points of their ideal customer, with a clear message and a compelling reason to act now." },
                { title: "There's no one watching the numbers.", desc: "Facebook Ads require continuous optimization. Audience fatigue, creative burnout, budget pacing, and bidding strategy all need active management. Set-it-and-forget-it campaigns are money drains." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <h4 className="text-base font-display font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEAKY BUCKET CALLOUT */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-2xl border-2 border-primary/60 bg-card/50 backdrop-blur-sm p-8 md:p-12 shadow-[0_0_30px_rgba(255,127,80,0.15)] animate-fade-up">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              Fixing the leaky bucket: where most of your future customers actually live
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Only a small fraction of people who visit your website take action on their first visit. Most leave without calling, filling out the form, or booking. That isn't a website problem — it's a follow-up problem. It's the leaky bucket every local business has.
              </p>
              <p>
                Meta's retargeting capabilities are built to fix exactly that. Your Meta Pixel captures every website visitor. We build custom audiences from those visitors, from people who engaged with your ads, from people who watched your video content but didn't book. Then we run sequential retargeting campaigns that keep your business on top of their mind — until they're ready to take action.
              </p>
              <p>
                Most of our clients' best-performing campaigns aren't prospecting. They're retargeting. The leads are already in your funnel. Retargeting is how you actually convert them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS — 5 outcome cards */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="What You Actually Get When GrowSmallBiz Manages Your"
              titleHighlight="Facebook & Instagram Ads"
              description="We don't just run ads. We build a full-funnel paid social system designed to generate consistent, qualified leads for your local service business — every single month."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                { icon: Target, title: "Qualified leads, not vanity metrics", desc: "Every campaign is structured around one goal: generating real business outcomes. Phone calls, form fills, booked appointments, and service requests — not likes, shares, or impressions." },
                { icon: Users, title: "Precision audience targeting", desc: "Custom audiences built from your ideal customer profile (location, demographics, behaviors, life events), layered with lookalike audiences built from your existing client list to scale what's already working." },
                { icon: Image, title: "Scroll-stopping ad creative", desc: "Three to four ad creatives per campaign, written for your service, your market, and your customer's pain points. Primary copy, headlines, CTAs, and visual direction — all A/B tested to identify the combinations that drive the lowest cost per lead." },
                { icon: RefreshCw, title: "Full-funnel retargeting", desc: "Meta Pixel setup, retargeting audiences built from website visitors and video viewers, and sequential retargeting campaigns that nurture prospects from first touch to booked appointment." },
                { icon: FileText, title: "Transparent monthly reporting", desc: "No cryptic dashboards, no vanity slides. Clear monthly reports: cost per lead, lead volume, click-through rate, reach, frequency, and ROAS. Plus a summary of optimizations made and the plan for the following month." },
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

      {/* WHAT'S INCLUDED — deliverables checklist */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="What's Included in Every"
              titleHighlight="Engagement"
              description="A structured scope of work — applied consistently across every Meta Ads engagement we manage."
            />
            <ul className="mt-12 space-y-3">
              {[
                "Full campaign strategy and account architecture — business goals, service area, competitive landscape, and ideal customer profile",
                "Meta Business Manager and Meta Ads Manager setup and access configuration",
                "Meta Pixel installation and Conversions API integration — server-side event tracking for iOS 14.5+ attribution",
                "Custom audience creation — website visitors, video viewers, customer list uploads, and engagement audiences",
                "Lookalike audience generation — 1%, 3%, and 5% tiers based on best-fit source audiences",
                "Campaign structure design — awareness, consideration, and conversion layering",
                "Ad creative development — three to four ad variants per campaign (primary copy, headline, CTA, visual direction)",
                "Systematic A/B testing — creative, audience, placement, and bidding strategy",
                "Conversion event configuration — form fills, phone calls, and booking completions",
                "Advantage+ campaign deployment where the data supports it",
                "Retargeting funnel architecture — sequential creative tuned by audience temperature",
                "Weekly performance monitoring and active optimization — bid adjustments, creative refreshes, budget pacing",
                "Monthly reporting with plain-English analysis of performance, optimizations made, and next-30-day plan",
                "Lead follow-up integration with your CRM or notification system — speed to lead is one of the biggest drivers of conversion",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 animate-fade-up" style={{ animationDelay: `${i * 0.03}s` }}>
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* META ADS COST */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="What Facebook & Instagram Ads Actually Cost for"
              titleHighlight="Small Businesses"
            />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mt-6">
              Meta advertising is generally the lowest cost-per-lead paid channel available to small businesses — substantially cheaper than Google Search Ads. The tradeoff is lead intent: Meta is a demand-generation channel, not a demand-capture channel. Prospects arrive earlier in the buying process.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-10">
              {[
                { value: "$27.66", label: "Meta Leads CPL — industry avg" },
                { value: "$1.92", label: "Meta Leads CPC — industry avg" },
                { value: "$0.70", label: "Meta traffic CPC — industry avg" },
                { value: "+21%", label: "Meta Leads CPL YoY 2025" },
              ].map((stat, i) => (
                <div key={i} className="text-center bg-background border border-border rounded-xl p-6 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <p className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mt-10">
              Meta's 2025 CPL is roughly 2.5× lower than Google Ads at $70.11. The +21% year-over-year cost increase reflects rising ad competition — which is why campaign strategy, creative quality, and active optimization matter more every year. Paying less per lead requires doing the work the generalists skip.
            </p>
            <p className="text-xs italic text-muted-foreground/70 max-w-3xl mx-auto text-center mt-4">
              Industry benchmarks: WordStream by LocaliQ 2025 Facebook Ads Benchmarks and 2025 Google Ads Benchmarks (1,000+ campaigns analyzed per report). Your specific CPL depends on your vertical, service area, creative quality, and funnel maturity.
            </p>
          </div>
        </div>
      </section>

      {/* META vs GOOGLE COMPARISON */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="Meta Ads vs Google Ads for Small Businesses:"
              titleHighlight="Where Each Channel Wins"
              description="The two channels aren't substitutes — they work differently and win on different metrics. Most of our clients run both. Here's the honest breakdown."
            />
            <div className="mt-12 overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm md:text-base">
                <thead className="bg-card">
                  <tr>
                    <th className="text-left p-4 font-display font-semibold text-foreground border-b border-border">Dimension</th>
                    <th className="text-left p-4 font-display font-semibold text-foreground border-b border-border">Meta Ads (Facebook & Instagram)</th>
                    <th className="text-left p-4 font-display font-semibold text-foreground border-b border-border">Google Search Ads</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ["Primary function", "Demand generation", "Demand capture"],
                    ["Audience intent", "Low–moderate (scrolling, open to discovery)", "High (actively searching, commercial intent)"],
                    ["Avg CPL", "$27.66¹", "$70.11²"],
                    ["Avg CPC", "$1.92 leads · $0.70 traffic¹", "$5.26²"],
                    ["Best for", "Visual / lifestyle services, retargeting, brand-building", "High-intent local search, urgent-need services"],
                    ["Strongest verticals", "Med spa, photography, restaurants, real estate", "HVAC, plumbing, dental, chiropractic, “near me” services"],
                    ["Lead quality", "Cheaper, earlier in funnel", "More expensive, further in funnel"],
                    ["Complementary role", "Nurtures, retargets, builds brand", "Captures active searchers, drives phone/form leads"],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-card/30" : "bg-transparent"}>
                      <td className="p-4 font-medium text-foreground border-b border-border align-top">{row[0]}</td>
                      <td className="p-4 border-b border-border align-top leading-relaxed">{row[1]}</td>
                      <td className="p-4 border-b border-border align-top leading-relaxed">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs italic text-muted-foreground/70 mt-4">
              ¹ WordStream by LocaliQ 2025 Facebook Ads Benchmarks. ² WordStream by LocaliQ 2025 Google Ads Benchmarks.
            </p>
            <div className="mt-8 max-w-3xl mx-auto rounded-xl border-l-4 border-primary bg-card/50 p-6 animate-fade-up">
              <h4 className="text-lg font-display font-bold text-foreground mb-2">We manage both.</h4>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Most local service businesses get their best ROI by running Meta and{" "}
                <Link to="/services/paid-advertising/google-ads/" className="text-primary underline hover:text-primary/80">Google</Link>{" "}
                Ads together — Google captures the 'I need a dentist today' searches; Meta reaches the other 10× who haven't started searching yet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="how-it-works" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="How We Manage Your Meta Ads:"
              titleHighlight="From Strategy to Results"
            />
            <div className="space-y-6 mt-12">
              {[
                { title: "Discovery & Strategy Session", desc: "We start with a deep-dive strategy session to understand your business, your target customer, your service area, and your growth goals. We audit your existing ad account (if you have one), review your competitors' ad activity using Meta Ad Library, and identify the biggest opportunities in your market. This session defines everything that follows." },
                { title: "Audience Build & Campaign Architecture", desc: "Based on your strategy session, we build your core audience segments — custom, interest-based, and lookalike — and structure your campaign architecture around your specific conversion goal. We configure your Meta Business Manager, Meta Pixel, and Conversions API integration at this stage." },
                { title: "Ad Creative Development & A/B Testing Setup", desc: "We develop three to four ad creatives with full copywriting, headlines, and visual direction across image, carousel, and Reels formats. Each creative is built to speak directly to your ideal customer's situation and motivate a specific action. We set up systematic A/B testing so every creative is evaluated on real performance data." },
                { title: "Campaign Launch & Conversion Tracking Verification", desc: "We launch your campaigns and run a full conversion tracking verification to confirm that every lead, form fill, and phone call is being recorded accurately through both the Meta Pixel and Conversions API. No assumptions — we verify the data before scaling any budget." },
                { title: "Weekly Monitoring & Active Optimization", desc: "Every week, we review performance across all active ad sets. We adjust bids, refresh underperforming creative, expand winning audiences, and reallocate budget toward the highest-performing combinations. Your campaign is always improving." },
                { title: "Monthly Reporting & Strategy Review", desc: "At the end of each month, you receive a clear performance report with all key metrics and a plain-English explanation of results. We review what worked, what we're changing, and what the plan is for the next 30 days." },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary">{i + 1}</span>
                    </div>
                    {i < 5 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-6">
                    <h4 className="text-base font-display font-semibold text-foreground mb-2">Step {i + 1}: {step.title}</h4>
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
              title="Facebook Ads Management for"
              titleHighlight="Local Service Industries"
            />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mt-6">
              Meta Ads don't perform the same way for every vertical. Visual and consideration-stage services benefit most from Meta as a primary channel. Other verticals use Meta as a complementary channel alongside Google Ads. We set your strategy based on what your vertical actually needs.
            </p>

            {/* Subsection A: Primary Fit */}
            <div className="mt-14">
              <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-6 text-center md:text-left">
                Primary Fit — Meta as the lead-generation channel
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Sparkles, title: "Med Spas & Aesthetic Services", desc: "Visual results drive demand. Before/after creative (FDA/FTC-compliant framing: reduce, minimize, improve — never eliminate or guarantee), Instagram-forward Reels, and consultation-focused lead forms. Med spa clients often see Meta deliver more leads than Google at a lower CPL." },
                  { icon: Camera, title: "Photographers & Creative Professionals", desc: "Visual-first advertising for a visual-first service. Portfolio-driven Reels, engagement retargeting, and consultation funnels designed to book sessions and weddings." },
                  { icon: Utensils, title: "Restaurants", desc: "Local awareness, event promotion, reservation drives, and daily-special campaigns. Meta's local targeting combined with mouth-watering creative moves covers when Google Ads can't reach people who haven't decided where to eat yet." },
                  { icon: Building2, title: "Real Estate Brokers & Agents", desc: "Buyer and seller lead generation through video walkthroughs, market update Reels, and neighborhood-targeted lead magnets. Meta captures the 'just starting to look' buyer Google can't reach." },
                ].map((ind, i) => (
                  <div key={i} className="feature-card-teal rounded-xl p-6 space-y-3 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <ind.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-base font-display font-semibold text-foreground">{ind.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Subsection B: Complementary Channel */}
            <div className="mt-14">
              <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-6 text-center md:text-left">
                Complementary Channel — Meta alongside Google Ads
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Home, title: "HVAC & Home Services", desc: "Google Ads captures 'AC repair near me' urgent-need searches; Meta reaches homeowners during off-season for maintenance agreements, replacement planning, and brand building." },
                  { icon: Star, title: "Dental Practices", desc: "Google Ads captures active patient searches; Meta builds practice awareness, retargets website visitors, and promotes cosmetic services (Invisalign, whitening) where the consideration cycle is longer." },
                  { icon: Stethoscope, title: "Chiropractic Care", desc: "Google Ads captures 'back pain relief' searches; Meta reaches people earlier — before they've decided chiropractic is the answer — with educational content and patient stories." },
                  { icon: Briefcase, title: "Other Local Professional Services", desc: "CPAs, attorneys, financial advisors, consultants. If you serve a local market and need a consistent pipeline of qualified leads, we can build and manage campaigns that deliver them." },
                ].map((ind, i) => (
                  <div key={i} className="feature-card-teal rounded-xl p-6 space-y-3 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <ind.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-base font-display font-semibold text-foreground">{ind.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM ISN'T AN ADD-ON */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="Instagram Isn't an Add-On."
              titleHighlight="It's Half the Opportunity."
            />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mt-6">
              Most agencies run Facebook-first campaigns and auto-place them on Instagram as an afterthought. For visual service businesses, that's backwards. Instagram's format library is different, the audience behavior is different, and the creative requirements are different.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: Video, title: "Reels for awareness", desc: "Short-form vertical video is where discovery happens on Instagram in 2026. Reels campaigns reach audiences outside your existing following and are often the cheapest way to build top-of-funnel awareness for visual verticals." },
                { icon: Clock, title: "Stories for retargeting", desc: "Full-screen, time-limited, high-engagement. Stories placements work best for warm audiences — retargeting website visitors, video viewers, and custom audiences with time-sensitive offers." },
                { icon: LayoutGrid, title: "Feed for consideration", desc: "High-resolution static and carousel formats for before/afters, portfolio work, testimonials (where available), and educational content. The feed is where prospects evaluate you." },
              ].map((card, i) => (
                <div key={i} className="bg-background border border-border rounded-xl p-6 space-y-3 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-base font-display font-semibold text-foreground">{card.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-base md:text-lg text-foreground leading-relaxed text-center max-w-3xl mx-auto mt-12">
              We build creative for all three formats natively — not cropped from Facebook feed ads — and configure campaign structure to optimize each placement on its own performance data.
            </p>
          </div>
        </div>
      </section>

      {/* WHY GROWSMALLBIZ */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Why Small Businesses Choose GrowSmallBiz for"
              titleHighlight="Meta Ads Management"
              className="mb-12"
            />
            <div className="space-y-6">
              {[
                { title: "We specialize in local service businesses — period", desc: "We don't manage ad campaigns for e-commerce brands, SaaS companies, or national retailers. Our entire agency is built around one type of client: local service businesses. That specialization means we understand your customer, your competitive landscape, and your growth levers in a way a generalist agency never will.", featured: false },
                { title: "30+ years of real business experience", desc: "GrowSmallBiz was founded by Subrata Guha — a 30+ year veteran of Fortune 500 sales, marketing, supply chain, and digital transformation. He didn't build this agency to learn on your budget. The strategic thinking, business judgment, and marketing frameworks we apply come from decades of real-world business leadership.", featured: false },
                { title: "Full-funnel, not just ads", desc: "Anyone can run an ad. We build the entire system: audience targeting, ad creative, Meta Pixel setup, Conversions API integration, conversion tracking, retargeting sequences, and lead follow-up integration. Your ads are connected to your business — not just running in isolation.", featured: false },
                { title: "AI-powered campaign management", desc: "We use AI-powered tools to enhance audience analysis, creative optimization, and performance monitoring. That means faster decisions, smarter targeting, and more efficient use of your budget — at every stage of your campaign.", featured: false },
                { title: "Integrated with your broader marketing system", desc: "Your Meta Ads don't operate in a silo. We integrate your paid social campaigns with your SEO strategy, website conversion rate, reputation management, and CRM — so every channel amplifies the others and every lead is captured and nurtured.", featured: false },
                { title: "The Performance Guarantee", desc: "If we don't generate leads within the agreed timeframe and scope, we keep working at no additional management fee — you only cover the ad spend — until we do. Timeframe and lead-volume thresholds are defined during your strategy session and documented in your service agreement.", featured: true },
              ].map((item, i) => (
                <div
                  key={i}
                  className={
                    item.featured
                      ? "bg-card border-l-4 border-primary border-y border-r border-border rounded-xl p-6 animate-fade-up shadow-[0_0_30px_rgba(255,127,80,0.15)]"
                      : "bg-card border border-border rounded-xl p-6 animate-fade-up"
                  }
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <h4 className="text-base font-display font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY — Single centered card (3-Tier Funnel Methodology) */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="Real Results From Our"
              titleHighlight="Meta Ads Campaigns"
              description="A measurable outcome from a Facebook lead generation campaign we managed — structured around a three-tier funnel with active optimization."
            />
            <div className="max-w-3xl mx-auto mt-12 animate-fade-up">
              <div className="rounded-2xl overflow-hidden border border-border shadow-[0_0_40px_rgba(255,127,80,0.12)]">
                {/* Gradient header band */}
                <div className="bg-gradient-to-r from-primary to-primary/70 p-8">
                  <p className="text-primary-foreground/80 text-xs font-semibold uppercase tracking-wider mb-2">
                    Campaign Results — Facebook Lead Generation
                  </p>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">
                    3-Tier Funnel Methodology
                  </h3>
                  <p className="text-primary-foreground/70 italic text-sm mt-2">22-day campaign window</p>
                </div>

                {/* Body — dark navy */}
                <div className="bg-[hsl(210_50%_8%)] p-8 md:p-10 space-y-6">
                  <div>
                    <p className="text-[hsl(188_78%_55%)] uppercase text-xs font-bold tracking-wider mb-2">
                      Challenge
                    </p>
                    <p className="text-foreground leading-relaxed">
                      Client needed high-quality leads at efficient CPL, with disciplined budget allocation across awareness, consideration, and conversion stages.
                    </p>
                  </div>

                  <div>
                    <p className="text-[hsl(188_78%_55%)] uppercase text-xs font-bold tracking-wider mb-2">
                      Strategy
                    </p>
                    <p className="text-foreground leading-relaxed">
                      Three-tiered funnel architecture — TOFU broad-reach awareness, MOFU retargeting of site visitors and ad engagers, BOFU high-intent conversion push. Continuous ad creative testing, dynamic bid and budget adjustments, and audience segmentation across demographics, interests, and behavior.
                    </p>
                  </div>

                  {/* Metric grid 2×2 */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    {[
                      { value: "$2.67", label: "Final Cost Per Lead" },
                      { value: "−30%", label: "CPL Reduction" },
                      { value: "50", label: "Qualified Leads" },
                      { value: "$191", label: "Total Ad Spend" },
                    ].map((m, i) => (
                      <div
                        key={i}
                        className="bg-[hsl(210_45%_14%)] border border-[hsl(188_78%_41%_/_0.2)] rounded-lg p-5 text-center"
                      >
                        <p className="text-3xl md:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                          {m.value}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-center text-sm italic text-muted-foreground mt-6">
                Industry benchmark for Meta Leads campaigns in 2025: $27.66 CPL (WordStream by LocaliQ). Our campaign achieved $2.67 — more than 10× below benchmark.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MID-CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Ready to Stop Wasting Ad Spend and Start"
              titleHighlight="Generating Real Leads?"
            />
            <p className="text-muted-foreground leading-relaxed text-center mt-6 mb-8">
              Your competitors are already running Facebook and Instagram Ads in your market. The question isn't whether to advertise on social media — it's whether your campaigns are built to win. Schedule a free strategy session and we'll show you exactly what a properly structured Facebook Ads campaign looks like for your business.
            </p>
            <div className="bg-background border border-border rounded-xl p-6 mb-8">
              <h4 className="text-base font-display font-semibold text-foreground mb-4">What you'll get in the session:</h4>
              <ul className="space-y-3">
                {[
                  "A review of your current Facebook Ads account (or a blank-slate plan if you're starting fresh)",
                  "An analysis of your top local competitors' ad activity",
                  "A recommended campaign structure, targeting approach, and creative direction",
                  "A realistic projection of what a properly managed campaign can deliver for your business",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">No contracts. No pressure. Just strategy.</p>
              <Button variant="hero" size="xl" asChild>
                <a href={strategyUrl} target="_blank" rel="noopener noreferrer">
                  Schedule Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="FAQs: Your Questions Answered: Facebook & Instagram Ads for Small Businesses"
        subtitle="Common questions about our Meta Ads management for local service businesses."
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Meta Ads?",
          description: "We're here to help you build a Meta Ads campaign that drives real leads.",
          tagline: "Let's turn your social ad spend into booked appointments.",
          buttonText: "Schedule Strategy Session",
        }}
      />

      {/* FOOTER CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Your Local Market Is Active on Facebook and Instagram Right Now.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Are You Showing Up?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The question is whether your business is showing up — and whether the campaigns driving that visibility are built to convert. GrowSmallBiz manages Facebook and Instagram Ads exclusively for local service businesses. We know your customer, we know your market, and we know how to build campaigns that turn ad spend into revenue.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Schedule your free strategy session today. There's no obligation, no contract pitch, and no fluff — just a direct conversation about what your Meta Ads should be doing for your business and how we'll get you there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href={strategyUrl} target="_blank" rel="noopener noreferrer">
                  Schedule Strategy Session
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

export default FacebookAds;
