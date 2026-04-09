import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { GlowCard } from "@/components/ui/glow-card";
import {
  ArrowRight,
  CheckCircle2,
  Home,
  Building,
  Search,
  Users,
  TrendingUp,
  Bot,
  MessageSquare,
  Calendar,
  Star,
  Phone,
  Clock,
  Target,
  Zap,
  BarChart3,
  Database,
  RefreshCw,
  Heart,
  Shield,
  Calculator,
  Share2,
  Megaphone,
  Globe,
  XCircle,
  Gift,
  Sparkles,
  DoorOpen,
  FileBarChart
} from "lucide-react";
import { useUtm } from "@/hooks/use-utm";

// Import images for service cards
import realtorWebsiteImg from "@/assets/realtor-website.jpg";
import realtorCrmImg from "@/assets/realtor-crm.jpg";
import realtorIdxIntegrationImg from "@/assets/realtor-idx-integration.jpg";
import realtorLeadGenImg from "@/assets/realtor-lead-gen.jpg";
import realtorIdxAddonsImg from "@/assets/realtor-idx-addons.jpg";
import realtorMarketingImg from "@/assets/realtor-marketing.jpg";
import realtorReputationImg from "@/assets/realtor-reputation.jpg";
import realtorSeoImg from "@/assets/realtor-seo.jpg";
import realtorPaidAdsImg from "@/assets/realtor-paid-ads.jpg";
import realtorSocialMediaImg from "@/assets/realtor-social-media.jpg";
import realtorAiReceptionistImg from "@/assets/realtor-ai-receptionist.jpg";
import realtorConversationalAiImg from "@/assets/realtor-conversational-ai.jpg";
import realtorAiSearchVisibilityImg from "@/assets/realtor-ai-search-visibility.jpg";
import realtorMarketReportsImg from "@/assets/realtor-market-reports.jpg";
import realtorOpenHouseImg from "@/assets/realtor-open-house.jpg";
import realtorReferralTrackingImg from "@/assets/realtor-referral-tracking.jpg";
import subrataHeadshot from "@/assets/subrata-guha-headshot.jpg";

// ── Service cards organized by 5-stage funnel ──

// Stage 1 — Attract
const attractServices = [
  {
    id: "website",
    icon: Home,
    title: "Real Estate Website",
    description: "Professional IDX-integrated website that showcases listings and captures leads 24/7.",
    features: ["IDX Property Search Integration", "MLS Listing Sync", "Lead Capture Forms", "Mobile-Responsive Design", "Agent/Team Profiles", "Neighborhood Pages"],
    color: "blue",
    image: realtorWebsiteImg
  },
  {
    id: "seo",
    icon: Search,
    title: "AI SEO for Realtors",
    description: "Dominate local search results with AI-powered SEO strategies tailored for real estate.",
    features: ["Local Keyword Optimization", "Google Business Profile Management", "Content Strategy & Blog Posts", "Backlink Building", "Technical SEO Audits", "Competitor Analysis"],
    color: "teal",
    image: realtorSeoImg
  },
  {
    id: "ai-search-visibility",
    icon: Sparkles,
    title: "AI Search Visibility",
    description: "Get recommended when buyers and sellers ask ChatGPT, Google AI, Gemini, or Perplexity for realtor recommendations in your market.",
    features: ["GEO & AEO Optimization", "Brand Mention Tracking", "AI Citation Building", "Review Volume & Consistency Strategy", "Platform Authority Signals", "Competitive AI Positioning"],
    color: "violet",
    image: realtorAiSearchVisibilityImg
  },
  {
    id: "paid-ads",
    icon: BarChart3,
    title: "Paid Ads Management",
    description: "Targeted Google and Meta ads that drive qualified buyer and seller leads to your listings.",
    features: ["Google PPC Campaigns", "Meta (Facebook/Instagram) Ads", "Retargeting Campaigns", "Landing Page A/B Testing", "ROI Tracking & Reporting", "Budget Optimization"],
    color: "orange",
    image: realtorPaidAdsImg
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Organic Social Media Posts",
    description: "Consistent, engaging content that builds your brand and attracts clients organically.",
    features: ["Content Calendar Management", "Property Showcase Posts", "Market Update Graphics", "Community Engagement", "Story & Reel Creation", "Brand Voice Development"],
    color: "indigo",
    image: realtorSocialMediaImg
  }
];

// Stage 2 — Capture
const captureServices = [
  {
    id: "lead-gen",
    icon: Target,
    title: "Lead Generation Tools",
    description: "Capture buyer and seller leads with high-converting funnels and landing pages.",
    features: ["Property Valuation Pages", "Buyer/Seller Lead Funnels", "Seller CMA Reports", "Social Media Ad Integration", "Landing Page Builder", "QR Code Property Flyers", "Open House Sign-in Forms"],
    color: "green",
    image: realtorLeadGenImg
  },
  {
    id: "idx-addons",
    icon: Calculator,
    title: "IDX Add-ons & Enhancements",
    description: "Powerful tools to enhance your property search and keep visitors engaged.",
    features: ["Mortgage Calculator Widget", "School District Maps", "Sold Data Display", "Market Statistics", "Saved Search Alerts", "Zestimate Lookup"],
    color: "amber",
    image: realtorIdxAddonsImg
  },
  {
    id: "ai-receptionist",
    icon: Phone,
    title: "AI Receptionist",
    description: "Never miss a call again. AI answers, qualifies leads, and books appointments 24/7.",
    features: ["24/7 Call Answering", "Lead Qualification", "Voice AI for Buyer Property Inquiries", "Appointment Scheduling", "Call Transcription & Summaries", "CRM Integration", "Missed Call Text-Back"],
    color: "violet",
    image: realtorAiReceptionistImg
  },
  {
    id: "conversational-ai",
    icon: Bot,
    title: "Conversational AI",
    description: "Intelligent chatbots that engage visitors, answer property questions, and capture leads.",
    features: ["Website Chat Widget", "Property Q&A Automation", "Lead Capture & Routing", "Multi-language Support", "SMS & Messenger Integration", "Handoff to Human Agent"],
    color: "cyan",
    image: realtorConversationalAiImg
  }
];

// Stage 3 — Nurture
const nurtureServices = [
  {
    id: "idx-integration",
    icon: RefreshCw,
    title: "IDX + CRM Integration",
    description: "Seamless data flow from property searches directly into your CRM for intelligent follow-up.",
    features: ["Real-time Lead Sync", "Saved Search Tracking", "White-Label Property Update Emails", "SMS Property Match Alerts", "Property Activity Alerts", "Custom Field Mapping", "Unified Dashboard", "Automated Workflow Triggers"],
    color: "cyan",
    image: realtorIdxIntegrationImg
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing Automation",
    description: "Set-and-forget campaigns that nurture leads and keep you top-of-mind.",
    features: ["Drip Email Campaigns", "Birthday/Anniversary Reminders", "Market Update Newsletters", "Listing Alert Notifications", "Review Request Automation", "Social Media Scheduling"],
    color: "pink",
    image: realtorMarketingImg
  },
  {
    id: "crm",
    icon: Database,
    title: "Realtor AI Growth System",
    description: "All-in-one CRM with automated follow-ups, pipeline management, and AI conversations.",
    features: ["Smart Lead Routing", "Automated Follow-ups (SMS, Email, Voicemail)", "Pipeline Management", "Appointment Scheduling", "AI-Powered Conversations", "Missed Call Text-Back"],
    color: "violet",
    image: realtorCrmImg
  }
];

// Stage 4 — Close
const closeServices = [
  {
    id: "open-house",
    icon: DoorOpen,
    title: "Open House Prospect Capture",
    description: "Digital sign-in routes every open house visitor into your nurture system automatically. No paper sign-in sheets that never get followed up.",
    features: ["Digital Open House Sign-in", "Auto CRM Entry & Tagging", "Instant Follow-up Sequence", "GHL Workflow Integration", "Visitor Analytics Dashboard", "Multi-Property Event Tracking"],
    color: "green",
    image: realtorOpenHouseImg
  },
  {
    id: "reputation",
    icon: Star,
    title: "Reputation & Reviews",
    description: "Systematic review collection after every closing, AI-powered responses to Google reviews, and a reputation that converts browsers into booked consultations.",
    features: ["Google Review Management", "Testimonial Collection", "Review Response Automation", "Rating Widgets for Website"],
    color: "emerald",
    image: realtorReputationImg
  }
];

// Stage 5 — Retain & Grow
const retainServices = [
  {
    id: "referral-tracking",
    icon: Gift,
    title: "Referral Tracking & Rewards",
    description: "Track who sends referrals, reward them automatically, and build a referral engine that generates warm pre-sold leads without cold outreach.",
    features: ["Referral Source Tracking", "Automated Reward Triggers", "Past Client Referral Campaigns", "Referral Pipeline Reporting", "Custom Reward Tiers", "Attribution Analytics"],
    color: "orange",
    image: realtorReferralTrackingImg
  },
  {
    id: "market-reports",
    icon: FileBarChart,
    title: "Automated Market Reports",
    description: "Every past client and active lead receives a branded monthly market report automatically — keeping your name in front of your entire database without any manual work.",
    features: ["Branded Monthly Market Reports", "Past Client Re-engagement", "Market Trend & Price Alerts", "Automated Distribution to Full Database", "Neighborhood-Specific Data", "Year-over-Year Comparisons"],
    color: "teal",
    image: realtorMarketReportsImg
  }
];

const stageGroups = [
  { stage: 1, label: "Stage 1 — Attract", services: attractServices, layout: "3+2" as const },
  { stage: 2, label: "Stage 2 — Capture", services: captureServices, layout: "2x2" as const },
  { stage: 3, label: "Stage 3 — Nurture", services: nurtureServices, layout: "3" as const },
  { stage: 4, label: "Stage 4 — Close", services: closeServices, layout: "2" as const },
  { stage: 5, label: "Stage 5 — Retain & Grow", services: retainServices, layout: "2" as const },
];

// Color configurations
const colorConfig: Record<string, { bg: string; bgLight: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-500", bgLight: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30" },
  violet: { bg: "bg-violet-500", bgLight: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/30" },
  cyan: { bg: "bg-cyan-500", bgLight: "bg-cyan-500/10", text: "text-cyan-500", border: "border-cyan-500/30" },
  green: { bg: "bg-green-500", bgLight: "bg-green-500/10", text: "text-green-500", border: "border-green-500/30" },
  amber: { bg: "bg-amber-500", bgLight: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/30" },
  pink: { bg: "bg-pink-500", bgLight: "bg-pink-500/10", text: "text-pink-500", border: "border-pink-500/30" },
  emerald: { bg: "bg-emerald-500", bgLight: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/30" },
  teal: { bg: "bg-teal-500", bgLight: "bg-teal-500/10", text: "text-teal-500", border: "border-teal-500/30" },
  orange: { bg: "bg-orange-500", bgLight: "bg-orange-500/10", text: "text-orange-500", border: "border-orange-500/30" },
  indigo: { bg: "bg-indigo-500", bgLight: "bg-indigo-500/10", text: "text-indigo-500", border: "border-indigo-500/30" }
};

// How It Works - Funnel Stages (Change 7)
const funnelStages = [
  {
    stage: "Attract",
    icon: Globe,
    description: "Drive qualified traffic with IDX-powered website and local SEO",
    tactics: ["Property Search Website", "Local SEO & Google Business", "Social Media Ads", "Open House Marketing"]
  },
  {
    stage: "Capture",
    icon: Target,
    description: "Convert visitors into leads with high-value offers",
    tactics: ["Home Valuation Tool", "Buyer/Seller Funnels", "Lead Capture Forms", "QR Code Flyers"]
  },
  {
    stage: "Nurture",
    icon: MessageSquare,
    description: "Automated follow-up keeps you top-of-mind",
    tactics: ["Drip Email Campaigns", "SMS Follow-ups", "Saved Search Alerts", "Market Updates"]
  },
  {
    stage: "Close",
    icon: Calendar,
    description: "Book appointments and close deals faster",
    tactics: ["AI Appointment Booking", "Pipeline Management", "Contract Automation", "Transaction Coordination"]
  },
  {
    stage: "Retain & Grow",
    icon: Gift,
    description: "Turn every closed deal into the next three",
    tactics: ["Referral Tracking & Rewards System", "Automated Monthly Market Reports to Past Clients", "Past Client Re-engagement Sequences", "Every Closed Deal Becomes a Referral Asset"]
  }
];

// FAQ data (Change 10)
const realtorFaqs = [
  {
    question: "What are real estate marketing services and how can they help me as an independent realtor?",
    answer: "Real estate marketing services give you a complete system to attract, capture, nurture, and close leads — without paying Zillow or depending on broker referrals. The goal is to build a pipeline you own permanently, where leads come to you directly and stay in your database regardless of which brokerage you work with."
  },
  {
    question: "Can I actually compete with Zillow using SEO?",
    answer: "Not on broad terms like \"homes for sale in Dallas\" — Zillow wins those. But there's an entire category of high-intent searches Zillow can never rank for: your name, your neighborhood specialization, hyper-local searches, and trust searches like \"top rated realtor in [city] with reviews.\" Those searches are yours to win — and we build your presence around exactly those terms."
  },
  {
    question: "How does SEO for realtors compound over time?",
    answer: "Every month your content, reviews, and local citations build on each other. Unlike Zillow where pausing your subscription makes your pipeline disappear overnight, SEO builds equity that belongs to you. Cost per lead drops over time while pipeline strength increases. It's an asset, not a rental."
  },
  {
    question: "Why is an end-to-end system better than using separate vendors?",
    answer: "Separate vendors create gaps — your ads drive traffic but your website doesn't capture it, your CRM doesn't talk to your IDX, your follow-up is manual while competitors respond in seconds. One integrated system means every stage works together: attract, capture, nurture, close, retain. No gaps, no finger-pointing between vendors."
  },
  {
    question: "How does AI follow-up help me close more deals?",
    answer: "Responding within 5 minutes increases conversion by 9x. Our AI responds to every new inquiry instantly — qualifying the prospect and booking the appointment even at 2am on weekends. The meeting is on your calendar before you check your phone."
  }
];

// Helper to render a service card
const ServiceCard = ({ service }: { service: { id: string; icon: React.ElementType; title: string; description: string; features: string[]; color: string; image: string } }) => {
  const colors = colorConfig[service.color];
  return (
    <GlowCard className={`overflow-hidden animate-fade-up group ${colors.border}`}>
      <div className="relative h-44 overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
        <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center shadow-lg`}>
          <service.icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
        <p className="text-muted-foreground text-sm mb-5">{service.description}</p>
        <ul className="space-y-2">
          {service.features.slice(0, 4).map((feature, j) => (
            <li key={j} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className={`w-4 h-4 ${colors.text} shrink-0 mt-0.5`} />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
          {service.features.length > 4 && (
            <li className="text-sm text-muted-foreground/70 pl-6">+{service.features.length - 4} more features</li>
          )}
        </ul>
      </div>
    </GlowCard>
  );
};

const RealtorMarketing = () => {
  const { strategySessionUrl } = useUtm();

  return (
    <>
      <Head>
        <title>Real Estate Marketing Solutions | GrowSmallBiz</title>
        <meta name="description" content="Grow your real estate business with IDX-integrated websites, AI-powered CRM, automated follow-ups, and lead generation tools. Built for realtors and brokers." />
        <link rel="canonical" href="https://growsmallbiz.io/professional-services/marketing-for-realtors/" />
      </Head>

      <ServiceJsonLd
        serviceName="Real Estate Marketing Solutions"
        serviceType="Digital Marketing for Realtors"
        description="IDX-integrated websites, AI-powered CRM, automated follow-ups, and lead generation for realtors."
        url="/professional-services/marketing-for-realtors"
        breadcrumbs={[
          { name: "Professional Services", url: "/professional-services" },
          { name: "Realtor Marketing", url: "/professional-services/marketing-for-realtors" },
        ]}
      />
      <Header />

      <main className="pt-20">
        {/* ═══ CHANGE 1 — HERO ═══ */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-violet-900/20" />
          <div className="hero-glow absolute inset-0" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
                <Building className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">For Independent Residential Realtors</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Stop Renting Leads from Zillow.{" "}
                <span className="text-gradient">Start Owning Them.</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
                GrowSmallBiz gives independent residential realtors a complete end-to-end marketing system — attract prospects, capture their information, nurture them until they're ready, and close them into clients. Not disconnected tools. One system. Built for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <Button variant="hero" size="xl" asChild>
                  <a href={strategySessionUrl}>
                    Schedule Strategy Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="#how-it-works">
                    See How It Works
                  </a>
                </Button>
              </div>

              <p className="text-sm text-primary font-medium mt-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                No long-term contracts. No per-lead fees. No Zillow.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                {[
                  { value: "100%", label: "Lead Exclusivity" },
                  { value: "5-Stage", label: "End-to-End System" },
                  { value: "9x", label: "Higher Conversion Within 5 Min Response" },
                  { value: "24/7", label: "AI Lead Capture" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CHANGE 2 — SOUND FAMILIAR ═══ */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Sound Familiar?</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-5 mb-12">
              {[
                "You're writing a check to Zillow every month for leads shared with four other agents simultaneously",
                "The moment you pause Zillow your pipeline disappears overnight",
                "Your broker keeps the client relationships when you leave",
                "You've spent years building someone else's pipeline — not your own",
                "Buyers are searching for homes on Zillow instead of your website",
                "Sellers check their home value on Zillow before they ever contact you",
                "You miss inquiries after hours because no one is available to respond instantly"
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xl font-semibold text-foreground mb-6">
                None of that is a lead problem. It's a <span className="text-primary">brand ownership problem</span>. We fix it.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href={strategySessionUrl}>
                  Schedule Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ═══ CHANGE 3 — DEPENDENCY TRAP + COMPARISON TABLE ═══ */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4">
            {/* Part 1 — The Dependency Trap */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">
                The Lead Dependency Trap Is Costing You More Than You Think
              </h2>
              <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
                <p>
                  Most independent realtors get leads one of three ways: broker referrals — pre-filtered, shared, and stripped of commission before they reach you. Zillow and Realtor.com — you pay $500–$1,500/month for leads shared with 4 other agents simultaneously. Cold prospecting — you trade time for every single opportunity.
                </p>
                <p>
                  Here's the truth: <strong className="text-foreground">none of those belong to you.</strong>
                </p>
                <p>
                  The moment you stop paying Zillow, the leads stop. The moment you leave your brokerage, the relationships stay behind. At $1,000/month, Zillow leads cost you $12,000/year — shared with multiple agents at once. You're not buying leads. You're renting a spot in a bidding war.
                </p>
              </div>
            </div>

            {/* Part 2 — Comparison Table */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
                Zillow Premier Agent vs. GrowSmallBiz
              </h3>

              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="bg-card border border-white/10 rounded-lg overflow-hidden animate-fade-up min-w-[540px]">
                  {/* Header */}
                  <div className="grid grid-cols-3 border-b-2 border-teal-400/60" style={{ backgroundColor: '#0A1E3D' }}>
                    <div className="px-5 py-4" />
                    <div className="px-5 py-4 text-center font-bold text-white border-x border-white/6" style={{ backgroundColor: '#0A1E3D' }}>Zillow Premier Agent</div>
                    <div className="px-5 py-4 text-center font-bold text-teal-400" style={{ backgroundColor: '#0A1E3D' }}>GrowSmallBiz</div>
                  </div>
                  {/* Rows */}
                  {[
                    ["Lead exclusivity", "❌ Shared with 3–5 agents", "✅ 100% yours"],
                    ["Monthly cost", "❌ $500–$1,500+/mo forever", "✅ Investment that compounds"],
                    ["Lead ownership", "❌ Zillow's database", "✅ Your database, always"],
                    ["Lead quality", "❌ Unverified, early funnel", "✅ Inbound, high intent"],
                    ["Brand on the lead", "❌ Zillow's brand", "✅ Your name, your brand"],
                    ["Follow-up speed", "❌ Manual — you vs. 4 others", "✅ AI responds in seconds"],
                    ["Automated nurturing", "❌ None", "✅ Market reports + alerts"],
                    ["CRM included", "❌ No", "✅ Yes, built in"],
                    ["SEO value built", "❌ Zero", "✅ Grows every month"],
                    ["If you pause/cancel", "❌ Pipeline disappears instantly", "✅ Your assets stay with you"],
                    ["Portability", "❌ Leads stay with Zillow", "✅ Everything goes with you"],
                  ].map(([feature, zillow, gsb], i) => (
                    <div key={i} className={`grid grid-cols-3 border-b border-white/6 last:border-b-0 hover:transition-colors duration-150`} style={{ backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.06)' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(43,163,160,0.08)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.06)'}>
                      <div className="px-5 py-3.5 text-white font-semibold text-sm" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>{feature}</div>
                      <div className="px-5 py-3.5 text-sm text-muted-foreground border-x border-white/6">{zillow}</div>
                      <div className="px-5 py-3.5 text-sm text-foreground">{gsb}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-center mt-8 text-xl font-bold text-primary">
                Zillow works for Zillow. GrowSmallBiz works for you.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ SECTION A — BROKER DEPENDENCY ═══ */}
        <section className="py-24 lg:py-32 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10 text-center">
                The Problem With Broker Leads Nobody Talks About
              </h2>

              <div className="space-y-6 mb-10">
                {[
                  { bold: "They're not exclusive.", rest: " Same lead, multiple agents. First to call wins — that's not a system, that's a race." },
                  { bold: "They're pre-filtered.", rest: " Top producers get first access. You get what's left." },
                  { bold: "They arrive cold.", rest: " No context, no qualification. A name and a phone number." },
                  { bold: "The relationship belongs to the brokerage.", rest: " When you leave, those clients stay behind." },
                  { bold: "Your brand stays invisible.", rest: " Clients know your broker's name first — not yours." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-muted-foreground"><strong className="text-foreground">{item.bold}</strong>{item.rest}</p>
                  </div>
                ))}
              </div>

              <p className="text-center text-lg font-bold text-foreground mb-16">
                The broker lead model was designed to benefit the brokerage. Not the agent.
              </p>
            </div>

            {/* Broker Dependency vs. GrowSmallBiz Table */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
                Broker Dependency vs. Building With GrowSmallBiz
              </h3>

              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="bg-card border border-white/10 rounded-lg overflow-hidden animate-fade-up min-w-[540px]">
                  <div className="grid grid-cols-3 border-b-2 border-teal-400/60" style={{ backgroundColor: '#0A1E3D' }}>
                    <div className="px-5 py-4" />
                    <div className="px-5 py-4 text-center font-bold text-white border-x border-white/6" style={{ backgroundColor: '#0A1E3D' }}>Broker Dependency</div>
                    <div className="px-5 py-4 text-center font-bold text-teal-400" style={{ backgroundColor: '#0A1E3D' }}>GrowSmallBiz</div>
                  </div>
                  {[
                    ["Lead quality", "❌ Cold, unqualified, pre-screened", "✅ Inbound, motivated, intent-driven"],
                    ["Lead exclusivity", "❌ Distributed across the office", "✅ Direct to you only"],
                    ["Brand visibility", "❌ Broker's name first", "✅ Your name, your presence"],
                    ["Online identity", "❌ Tied to broker's website", "✅ Your own domain and profile"],
                    ["When you change firms", "❌ Start from zero", "✅ Take everything with you"],
                    ["Lead nurturing", "❌ Manual, falls through cracks", "✅ Automated 24/7"],
                    ["Market reports", "❌ Broker sends those", "✅ Your name on every one"],
                    ["Long-term equity", "❌ Built for the brokerage", "✅ Built for you"],
                    ["Referrals", "❌ Stay with the brokerage when you leave", "✅ Follow you permanently"],
                  ].map(([feature, broker, gsb], i) => (
                    <div key={i} className={`grid grid-cols-3 border-b border-white/6 last:border-b-0 hover:transition-colors duration-150`} style={{ backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.06)' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(43,163,160,0.08)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.06)'}>
                      <div className="px-5 py-3.5 text-white font-semibold text-sm" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>{feature}</div>
                      <div className="px-5 py-3.5 text-sm text-muted-foreground border-x border-white/6">{broker}</div>
                      <div className="px-5 py-3.5 text-sm text-foreground">{gsb}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-center mt-8 text-xl font-bold text-primary">
                Every lead you close through your broker builds their equity — not yours.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ SECTION B — WHY MOST AGENCIES FAIL ═══ */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
                Why Most Real Estate Marketing Services Fail
              </h2>

              <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
                <p>
                  Most marketing agencies sell realtors pieces of a solution. One vendor builds your website. Another manages your ads. A third sends emails. None of them talk to each other. None of them know what happens after the lead clicks.
                </p>
                <p className="text-xl font-bold text-primary">
                  Traffic is not the goal. Closed deals are the goal.
                </p>
                <p>
                  <strong className="text-foreground">Most marketing stops at the click.</strong> GrowSmallBiz builds what comes next — <strong className="text-teal-400">one connected system, one team, one goal: more closed deals.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CHANGE 4 — SERVICE CARDS BY FUNNEL STAGE ═══ */}
        <section id="services" className="py-24 lg:py-32 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Complete Solution</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Everything You Need to{" "}
                <span className="text-gradient">Dominate Your Real Estate Market</span>
              </h2>
            </div>
            {/* Change 4B — buyer/seller line */}
            <p className="text-muted-foreground max-w-3xl mx-auto text-center mb-16">
              Whether you work with buyers, sellers, or both — every stage of this system is built to attract, capture, nurture, close, and grow your real estate business.
            </p>

            {stageGroups.map((group, idx) => (
              <div key={idx} className="mb-16 last:mb-0">
                <div className="flex justify-center mb-8">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500/10 border border-teal-500/30">
                    <span className="text-teal-400 text-sm font-semibold tracking-wide">{group.label}</span>
                  </div>
                </div>

                {group.layout === "3+2" ? (
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {group.services.slice(0, 3).map((service) => <ServiceCard key={service.id} service={service} />)}
                    </div>
                    <div className="flex justify-center">
                      <div className="grid md:grid-cols-2 gap-8 w-full lg:max-w-[calc(66.666%+1rem)]">
                        {group.services.slice(3).map((service) => <ServiceCard key={service.id} service={service} />)}
                      </div>
                    </div>
                  </div>
                ) : group.layout === "2x2" ? (
                  <div className="space-y-8">
                    <div className="flex justify-center">
                      <div className="grid md:grid-cols-2 gap-8 w-full lg:max-w-[calc(66.666%+1rem)]">
                        {group.services.slice(0, 2).map((service) => <ServiceCard key={service.id} service={service} />)}
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="grid md:grid-cols-2 gap-8 w-full lg:max-w-[calc(66.666%+1rem)]">
                        {group.services.slice(2).map((service) => <ServiceCard key={service.id} service={service} />)}
                      </div>
                    </div>
                  </div>
                ) : group.layout === "3" ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {group.services.map((service) => <ServiceCard key={service.id} service={service} />)}
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <div className="grid md:grid-cols-2 gap-8 w-full lg:max-w-[calc(66.666%+1rem)]">
                      {group.services.map((service) => <ServiceCard key={service.id} service={service} />)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ═══ CHANGE 5 — IDX deep-dive REMOVED ═══ */}

        {/* ═══ CHANGE 6 — AI SEARCH VISIBILITY ═══ */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 text-center">
                Show Up When Buyers Ask <span className="text-gradient">ChatGPT or Google AI</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
                The next generation of home buyers isn't just Googling — they're asking AI. Here's a search happening right now: <em>"Who is the best realtor in [city] for first-time home buyers?"</em> — typed not into Google, but into ChatGPT, Gemini, or Perplexity. Most realtors have no idea their AI visibility even exists. Most competing agencies aren't addressing it at all.
              </p>

              <div className="bg-card border border-border rounded-2xl overflow-hidden animate-fade-up">
                <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                  <div className="p-5 font-bold text-foreground">AI Platform</div>
                  <div className="p-5 font-bold text-foreground border-x border-border">What Buyers Ask</div>
                  <div className="p-5 font-bold text-foreground">Who Gets Recommended</div>
                </div>
                {[
                  ["ChatGPT", '"Best realtor for first-time buyers in [city]"', "Agents with strong brand presence & authoritative content"],
                  ["Google AI Mode", '"Who are the top-rated realtors near me?"', "Agents with optimized GBP, reviews & local signals"],
                  ["Perplexity", '"Which realtors specialize in [neighborhood]?"', "Agents with neighborhood-specific content & citations"],
                  ["Gemini", '"Trusted realtor in [city] with 5-star reviews"', "Agents with consistent reviews across platforms"],
                ].map(([platform, query, rec], i) => (
                  <div key={i} className="grid grid-cols-3 border-b border-border last:border-b-0 hover:bg-secondary/20 transition-colors">
                    <div className="p-4 font-semibold text-primary text-sm">{platform}</div>
                    <div className="p-4 text-sm text-muted-foreground italic border-x border-border">{query}</div>
                    <div className="p-4 text-sm text-foreground">{rec}</div>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground text-lg mt-8 text-center max-w-3xl mx-auto">
                While your competitors are invisible in AI search, your name appears when motivated buyers and sellers ask AI assistants for realtor recommendations in your market. <strong className="text-foreground">The agents who establish AI visibility now will own this channel before it becomes competitive.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* ═══ CHANGE 7 — CLIENT JOURNEY (with anchor, "Close", and Stage 5) ═══ */}
        <section id="how-it-works" className="py-24 lg:py-32 bg-card/50 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Your Client Journey, <span className="text-gradient">Automated</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">From first click to closing day, every touchpoint is optimized for conversion</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {funnelStages.map((stage, i) => (
                <GlowCard key={i} className="relative p-6 animate-fade-up" style={{ animationDelay: `${i * 0.12}s` }}>
                  {i < funnelStages.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                  )}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <stage.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm text-primary font-medium mb-2">Stage {i + 1}</div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">{stage.stage}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{stage.description}</p>
                  <ul className="space-y-2">
                    {stage.tactics.map((tactic, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {tactic}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CHANGE 8 — Success Stories + Testimonials REMOVED ═══ */}

        {/* ═══ CHANGE 9A — "Can I Actually Compete With Zillow on Google?" ═══ */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 text-center">
                Can I Actually Compete With Zillow on Google?
              </h2>
              <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-4">
                The honest truth: You cannot beat Zillow on broad search terms. "Homes for sale in Dallas" — Zillow wins. But here's what they can never own:
              </p>
              <h3 className="text-2xl font-display font-bold text-foreground text-center mb-8">
                Searches Zillow <span className="text-primary">Can't Touch</span>
              </h3>

              <div className="bg-card border border-border rounded-2xl overflow-hidden animate-fade-up">
                <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                  <div className="p-5 font-bold text-foreground">Search Type</div>
                  <div className="p-5 font-bold text-foreground border-x border-border">Example</div>
                  <div className="p-5 font-bold text-foreground">Who Wins</div>
                </div>
                {[
                  ["Your name", '"Sarah Johnson realtor Austin"', "✅ You — always"],
                  ["Neighborhood expert", '"best realtor in Barton Hills Austin"', "✅ You — with the right SEO"],
                  ["Hyper-local intent", '"realtor for first-time buyers in [zip]"', "✅ You — Zillow doesn't specialize"],
                  ["Niche-specific", '"luxury condo specialist downtown Chicago"', "✅ You — Zillow is generic"],
                  ["Local pack \"near me\"", "Map pack results", "✅ You — via Google Business Profile"],
                  ["Trust searches", '"top rated realtor [city] reviews"', "✅ You — with reputation management"],
                  ["AI assistant queries", '"best realtor near me" in ChatGPT/Gemini', "✅ You — with AI visibility optimization"],
                ].map(([type, example, winner], i) => (
                  <div key={i} className="grid grid-cols-3 border-b border-border last:border-b-0 hover:bg-secondary/20 transition-colors">
                    <div className="p-4 text-sm font-medium text-foreground">{type}</div>
                    <div className="p-4 text-sm text-muted-foreground italic border-x border-border">{example}</div>
                    <div className="p-4 text-sm text-primary font-medium">{winner}</div>
                  </div>
                ))}
              </div>

              <p className="text-center mt-8 text-lg font-bold text-foreground">
                Zillow is a marketplace, not a person. They can't rank for searches that look for a specific agent, neighborhood specialist, or trusted local name.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ CHANGE 9B — "We Know You've Been Burned Before" ═══ */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10 text-center">
                We Know You've Been <span className="text-primary">Burned Before</span>
              </h2>
              <div className="space-y-6">
                {[
                  { bold: "No vanity metrics.", rest: " Leads, calls, and booked appointments — not impressions." },
                  { bold: "No long-term lock-in.", rest: " We earn your business every month." },
                  { bold: "No fragmented vendors.", rest: " One system, one team, one accountability." },
                  { bold: "Built for solo agents and small teams.", rest: " Not brokerages. Not franchises. You." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <p className="text-lg text-foreground">
                      <strong>{item.bold}</strong>{item.rest}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CHANGE 10 — FAQ Section (accordion, new Qs, sidebar CTA) ═══ */}
        <FAQSection
          faqs={realtorFaqs}
          contactCTA={{
            title: "Have more questions about owning your realtor pipeline?",
            description: "Tell us your market, current lead sources, and goals. We'll build you a custom end-to-end roadmap — free, no obligation.",
            tagline: "Let's build your lead generation machine.",
            name: "Subrata Guha",
            role: "Founder, GrowSmallBiz",
            buttonText: "Schedule Strategy Call",
            buttonHref: strategySessionUrl,
            image: subrataHeadshot
          }}
        />

        {/* ═══ CHANGE 11 — CLOSING CTA ═══ */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-violet-500/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/80 backdrop-blur-sm border-2 border-primary/50 rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/70 group">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0 text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg group-hover:border-primary/50 transition-all duration-300">
                      <img src={subrataHeadshot} alt="Subrata Guha" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="mt-4 text-lg font-display font-semibold text-foreground">Subrata Guha</h4>
                    <p className="text-sm text-muted-foreground">Founder, GrowSmallBiz</p>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                      Ready to <span className="text-gradient">Own Your Pipeline</span>?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-6">
                      No long-term contracts. No per-lead fees. No Zillow. No fragmented vendors.
                    </p>
                    <p className="text-xl text-muted-foreground mb-8">
                      Tell us your market, your goals, and your current lead sources. We'll build you a custom end-to-end roadmap — free, no obligation.
                    </p>
                    <Button variant="hero" size="xl" asChild>
                      <a href={strategySessionUrl}>
                        Schedule Strategy Call
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </a>
                    </Button>
                    <p className="mt-4 text-muted-foreground">
                      Or call us directly:{" "}
                      <a href="tel:+19258863724" className="text-primary font-medium hover:underline">
                        +1 (925) 886-3724
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form — unchanged */}
        <ConsultationFormSection />
      </main>

      <Footer />
    </>
  );
};

export default RealtorMarketing;
