import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUtm } from "@/hooks/use-utm";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Globe,
  Database,
  MessageSquare,
  Bot,
  Star,
  PhoneCall,
  Smartphone,
  Inbox,
  ShieldCheck,
  Gift,
  Sparkles,
  Clock,
  Heart,
  Users,
  Calendar,
  CreditCard,
  TrendingUp,
  Mail,
  Zap,
  PhoneMissed,
} from "lucide-react";
import heroImage from "@/assets/mothers-day-cohort-hero.jpg";
import growsmallbizLogo from "@/assets/growsmallbiz-logo.webp";
import leakyBucket from "@/assets/leaky-bucket.webp";

const PAGE_PATH = "/mothers-day-mom-owned-business-cohort/";
const PAGE_URL = `https://growsmallbiz.io${PAGE_PATH}`;
const APPLICATION_FORM_URL =
  "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const PAGE_TITLE = "Mother’s Day Appreciation Offer | GrowSmallBiz";
const PAGE_DESC =
  "Mother’s Day Appreciation Offer extended through May 31 for 5 mom-owned local service businesses. Complimentary Starter Website ($2,500 value), Client Growth System Setup reduced to $1,000, plus special Mother’s Day pricing that will not be repeated.";

const PRIMARY_CTA_LABEL = "Claim Your Spot — First Come, First Served";
const SECONDARY_CTA_LABEL = "See the Offer Breakdown";

const sectionNav = [
  { id: "value", label: "The Offer" },
  { id: "presence", label: "Time Back" },
  { id: "roi", label: "ROI" },
  { id: "pricing", label: "Pricing" },
  { id: "automation", label: "What's Automated" },
  { id: "system", label: "The System" },
  { id: "different", label: "Why Different" },
  { id: "apply", label: "Apply" },
];

const PrimaryCTA = ({
  href,
  className = "",
  full = false,
  label = PRIMARY_CTA_LABEL,
}: {
  href: string;
  className?: string;
  full?: boolean;
  label?: string;
}) => (
  <Button
    asChild
    size="lg"
    className={`bg-gradient-to-r from-[hsl(22_88%_65%)] via-[hsl(280_30%_60%)] to-[hsl(200_70%_60%)] text-[hsl(220_40%_15%)] font-bold hover:brightness-110 shadow-[0_10px_30px_-8px_hsl(22_85%_55%/0.45)] border-0 transition-all ${
      full ? "w-full" : ""
    } ${className}`}
  >
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label} <ArrowRight className="w-5 h-5 ml-2" />
    </a>
  </Button>
);

const MothersDayCohort = () => {
  const { buildUrl } = useUtm();
  const ctaUrl = buildUrl(APPLICATION_FORM_URL, "mothers-day-cohort");
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  // Inject Google Reviews widget script client-side to avoid SSR/hydration mismatch
  useEffect(() => {
    const SRC = "https://reputationhub.site/reputation/assets/review-widget.js";
    if (document.querySelector(`script[src="${SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const heroBadges = [
    "Complimentary Starter Website — $2,500 Value",
    "$500 off Client Growth System Setup",
    "Mother’s Day Pricing Will Not Be Repeated",
    "First Come, First Served — Only 5 Spots",
  ];

  const standardValues = [
    { label: "Starter Website", value: "$2,500" },
    { label: "Client Growth System Setup", value: "$1,500" },
    { label: "Essentials Plan", value: "$297/month" },
    { label: "Growth Plan", value: "$497/month" },
  ];

  const cohortValues = [
    { label: "Starter Website", value: "Complimentary" },
    { label: "Client Growth System Setup", value: "$1,000" },
    { label: "Essentials Plan", value: "$197/month" },
    { label: "Growth Plan", value: "$297/month" },
  ];

  const presenceCards = [
    {
      icon: Heart,
      title: "While You’re With a Client",
      body:
        "AI-powered response tools can help answer questions, capture lead information, and keep the conversation moving while you stay focused on the person in front of you.",
    },
    {
      icon: Users,
      title: "While You’re With Your Family",
      body:
        "Missed-call text-back, AI Livechat, and automated follow-up help reduce the pressure to constantly check your phone.",
    },
    {
      icon: Globe,
      title: "After Dinner, When Buyers Are Browsing",
      body:
        "Many people research services at night. Your website can answer questions, guide visitors, collect information, and help them take the next step.",
    },
    {
      icon: Calendar,
      title: "When Someone Is Ready to Book",
      body:
        "Calendar and payment connections can help prospects schedule, confirm, and pay without waiting for a manual reply.",
    },
  ];

  const roiCards = [
    {
      icon: PhoneMissed,
      body: "If one missed call becomes a booked client, the system starts paying for itself.",
    },
    {
      icon: Globe,
      body: "If one after-hours website visitor books instead of leaving, that can cover a large part of the monthly cost.",
    },
    {
      icon: Mail,
      body: "If automated follow-up brings back one lead who would have gone cold, the system has already done its job.",
    },
  ];

  const setupIncludes = [
    { icon: Sparkles, text: "Brand and business discovery" },
    { icon: Database, text: "CRM setup so every inquiry can be tracked" },
    { icon: Globe, text: "Lead forms connected to your pipeline" },
    { icon: MessageSquare, text: "Email and SMS follow-up automation" },
    { icon: PhoneCall, text: "Phone and calendar integration" },
    { icon: Star, text: "Review request automation" },
    { icon: ShieldCheck, text: "Hands-on launch support" },
  ];

  const integrations: { name: string; color: string }[] = [
    { name: "Google Calendar", color: "#4285F4" },
    { name: "Google account connection", color: "#EA4335" },
    { name: "Google Business Profile", color: "#34A853" },
    { name: "Google Lead Ads", color: "#FBBC05" },
    { name: "Facebook & Instagram", color: "#E1306C" },
    { name: "LinkedIn lead forms", color: "#0A66C2" },
    { name: "TikTok messaging or lead ads", color: "#25F4EE" },
    { name: "WhatsApp", color: "#25D366" },
    { name: "Stripe, PayPal, Square, or other payment providers", color: "#635BFF" },
    { name: "QuickBooks", color: "#2CA01C" },
    { name: "Slack", color: "#ECB22E" },
    { name: "Canva", color: "#00C4CC" },
    { name: "ClickUp", color: "#7B68EE" },
    { name: "Fathom", color: "#9333EA" },
  ];

  const essentialsIncludes = [
    "Complimentary Starter Website — $2,500 value",
    "Website hosting and security",
    "Google Business Profile setup or cleanup",
    "Review automation",
    "Unified inbox",
    "CRM system",
    "Mobile app access",
    "Monthly reporting",
  ];

  const growthExtras = [
    "24/7 AI Voice Receptionist",
    "AI website chat",
    "Missed-call text-back",
    "Automated follow-up conversations",
  ];

  const automationCards = [
    { icon: Smartphone, title: "Missed-Call Text-Back System", desc: "Automatically text back missed calls so no lead slips away.", quote: "Never lose a customer because you missed a call again." },
    { icon: PhoneCall, title: "AI Voice Receptionist", desc: "Answers every call 24/7, books appointments, and captures lead details.", quote: "Your business sounds open even when you're with the kids." },
    { icon: Bot, title: "AI Livechat on Your Website", desc: "Engages visitors instantly and turns clicks into conversations.", quote: "Talk to every visitor — without lifting a finger." },
    { icon: Mail, title: "Lead Form Follow-Up", desc: "Replies within seconds, when buying intent is highest.", quote: "Speed-to-lead wins the job." },
    { icon: MessageSquare, title: "Email & SMS Nurture", desc: "Stays in front of leads until they're ready to book.", quote: "Turn maybes into yeses, automatically." },
    { icon: Calendar, title: "Calendar Scheduling", desc: "Lets clients self-book without the back-and-forth.", quote: "No more phone tag — just booked appointments." },
    { icon: Clock, title: "Appointment Reminders", desc: "Cuts no-shows with automated text and email reminders.", quote: "Fewer no-shows. More revenue." },
    { icon: Star, title: "Review Requests", desc: "Asks happy clients for reviews on autopilot to build trust.", quote: "Build a 5-star reputation while you sleep." },
    { icon: Inbox, title: "Unified Inbox", desc: "All calls, texts, emails, and DMs in one place.", quote: "Stop juggling apps. See every message in one view." },
    { icon: Database, title: "CRM Pipeline Tracking", desc: "See every lead's stage so nothing slips through the cracks.", quote: "Know exactly who to follow up with next." },
    { icon: CreditCard, title: "Payment Acceptance", desc: "Collect deposits and payments without extra tools.", quote: "Get paid faster — right inside the system." },
  ];

  const automationFlow = [
    "New lead captured",
    "Auto text sent",
    "Question answered by AI",
    "Appointment booked",
    "Review requested",
    "Payment received",
  ];

  const faqs = [
    {
      q: "What qualifies as mom-owned?",
      a: "For this offer, mom-owned means the business is owned or co-owned by a mother who is actively involved in running the business.",
    },
    {
      q: "What types of businesses are a good fit?",
      a: "This offer is best for local service businesses such as wellness providers, beauty businesses, home service providers, consultants, coaches, professional services, photographers, event services, and similar client-based businesses.",
    },
    {
      q: "What is included in the Client Growth System Setup?",
      a: "Brand and business discovery, CRM setup, lead capture, follow-up automation, phone and calendar integration, review automation, and hands-on launch support. Core integrations are configured based on what your business actually uses.",
    },
    {
      q: "Is the website really complimentary?",
      a: "Yes. The Starter Website (a $2,500 value) is included for the 5 selected mom-owned businesses in this Mother’s Day Appreciation Offer. The $1,000 fee is for Client Growth System Setup — not the website.",
    },
    {
      q: "When does billing start?",
      a: "Your monthly or annual subscription begins when your website goes live, not before.",
    },
    {
      q: "Can I choose annual?",
      a: "Yes. Annual options are available and include the Mother’s Day spa bonus. Essentials Plan: $1,970/year. Growth Plan: $2,970/year. That’s 2 months free at the Mother’s Day rate.",
    },
    {
      q: "What happens after this campaign closes?",
      a: "Once the 5 spots are filled, this Mother’s Day Appreciation Offer will not be repeated. Standard GrowSmallBiz pricing will apply afterward.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const offerJsonLd = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Mother’s Day Appreciation Offer",
    description: PAGE_DESC,
    url: PAGE_URL,
    availability: "https://schema.org/LimitedAvailability",
    inventoryLevel: { "@type": "QuantitativeValue", value: 5 },
    validThrough: "2026-05-31",
    seller: {
      "@type": "Organization",
      name: "GrowSmallBiz",
      url: "https://growsmallbiz.io",
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`https://growsmallbiz.io${heroImage}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <script type="application/ld+json">{JSON.stringify(offerJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Head>

      {/* Minimal campaign top bar */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 min-w-0">
            <img
              src={growsmallbizLogo}
              alt="GrowSmallBiz logo"
              width={36}
              height={36}
              className="h-9 w-auto shrink-0"
            />
            <span className="font-display font-semibold text-foreground text-sm md:text-base truncate">
              GrowSmallBiz · Mother’s Day Appreciation Offer
            </span>
          </Link>
          <nav
            aria-label="On this page"
            className="hidden lg:flex items-center gap-5 text-sm text-muted-foreground"
          >
            {sectionNav.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="hover:text-primary transition-colors">
                {s.label}
              </a>
            ))}
          </nav>
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Claim Spot <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      <main id="main-content" className="pb-28 md:pb-24">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,hsl(210_55%_8%)_0%,hsl(210_50%_12%)_55%,hsl(20_45%_18%)_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,210,190,0.16),transparent_55%)] pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[hsl(18_85%_65%/0.18)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[hsl(280_60%_70%/0.14)] blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-10">
            {/* Full-width header block */}
            <div className="max-w-5xl mx-auto text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/50 text-primary text-xs md:text-sm font-bold uppercase tracking-wider mb-5 shadow-[0_0_20px_hsl(22_85%_60%/0.2)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                  Complimentary Starter Website For Mom-Owned Businesses
                </span>
              </div>

              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] font-display font-bold leading-[1.1] tracking-tight mb-5 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Get a Complimentary Starter Small Business Website
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-semibold leading-snug max-w-4xl mx-auto bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Plus the System That Helps Turn Inquiries Into Booked Clients
              </h2>

              {/* Prominent deadline */}
              <div className="mt-7 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-primary/15 border-2 border-primary text-primary font-bold text-sm md:text-base shadow-[0_0_30px_hsl(22_85%_60%/0.25)]">
                <Clock className="w-4 h-4 md:w-5 md:h-5" />
                <span className="uppercase tracking-wide bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                  Extended Through May 31, 2026
                </span>
                <span className="hidden sm:inline opacity-70">·</span>
                <span className="bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">or Until 5 Spots Are Filled</span>
              </div>
            </div>

            {/* Two-column: bullets/CTAs + image */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1 min-w-0">
                <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Mother’s Day may be over, but mom-owned businesses deserve more than one day of recognition. For 5 local service businesses owned by moms, GrowSmallBiz is including:
                </p>

                <ul className="space-y-2.5 mb-7">
                  {[
                    "A complimentary Starter Website valued at $2,500",
                    "$500 off Client Growth System Setup",
                    "Done For You Implementation Service",
                    "Guided Onboarding & Training",
                    "24x7 Technical Support via Chat",
                  ].map((text) => (
                    <li
                      key={text}
                      className="flex items-start gap-3 px-4 py-3 rounded-lg bg-primary/15 border-2 border-primary/60 shadow-[0_0_18px_hsl(22_85%_60%/0.18)]"
                    >
                      <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                      <span className="text-sm md:text-base text-foreground font-semibold">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm md:text-base text-muted-foreground mb-7 leading-relaxed">
                  We set up the website and the system behind it — CRM, lead capture, follow-up automation, reviews, AI Livechat, and AI-powered response tools — so more opportunities turn into real conversations, booked appointments, and paying clients.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:justify-center">
                  <PrimaryCTA href={ctaUrl} className="w-full sm:w-auto whitespace-normal text-center leading-tight h-auto py-3" />
                  <Button asChild size="lg" variant="outline" className="border-border w-full sm:w-auto">
                    <a href="#value">{SECONDARY_CTA_LABEL}</a>
                  </Button>
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="absolute -inset-4 rounded-[2rem] bg-[linear-gradient(135deg,hsl(22_85%_68%/0.35),hsl(350_75%_80%/0.28),hsl(280_55%_80%/0.28))] blur-2xl pointer-events-none" />
                <div className="absolute -top-3 -left-3 z-20 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-xl">
                  5 Spots
                </div>
                <div className="relative rounded-3xl overflow-hidden border border-[hsl(30_60%_80%/0.35)] shadow-2xl bg-card">
                  <img
                    src={heroImage}
                    alt="Mom-owned local service business owner with website, calls, chat, reviews, and CRM dashboard cards floating around her"
                    width={1536}
                    height={1024}
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-auto"
                  />
                </div>
                {/* Floating system overlays */}
                <div className="hidden md:flex absolute -left-6 top-1/4 z-20 items-center gap-2 px-3 py-2 rounded-xl bg-white text-[hsl(210_55%_12%)] text-xs font-semibold shadow-xl border border-[hsl(30_60%_80%)]">
                  <Calendar className="w-4 h-4 text-primary" /> Appointment booked
                </div>
                <div className="hidden md:flex absolute -right-4 bottom-8 z-20 items-center gap-2 px-3 py-2 rounded-xl bg-white text-[hsl(210_55%_12%)] text-xs font-semibold shadow-xl border border-[hsl(30_60%_80%)]">
                  <Star className="w-4 h-4 text-primary" /> New 5-star review
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="relative overflow-hidden py-20 md:py-24 scroll-mt-20 bg-[linear-gradient(180deg,hsl(210_55%_8%)_0%,hsl(210_50%_11%)_100%)]">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[hsl(22_85%_60%/0.10)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[hsl(280_60%_70%/0.08)] blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                The Problem
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-5 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Why Leads Slip Through the Cracks for Mom-Owned Businesses
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                You are great at what you do — and you are also the mom, the operator, and the front desk. The family priorities you cannot ignore are exactly when your business is quietly leaking revenue.
              </p>
            </div>

            {/* Cause → Consequence pairs */}
            <div className="space-y-4 md:space-y-5">
              {[
                {
                  causeIcon: PhoneCall,
                  causeTitle: "School pickup, doctor visits, sick days",
                  causeBody: "You can't answer the phone in the middle of carpool or a pediatrician waiting room.",
                  leakIcon: PhoneMissed,
                  leak: "Missed calls go to voicemail — and voicemails don't get returned fast enough.",
                },
                {
                  causeIcon: Heart,
                  causeTitle: "Cooking dinner, helping with homework",
                  causeBody: "Evenings belong to your kids — not to refreshing your inbox.",
                  leakIcon: Clock,
                  leak: "Inquiries sit in an inbox for hours (or days) before someone responds.",
                },
                {
                  causeIcon: Users,
                  causeTitle: "Bedtime routine while buyers browse at night",
                  causeBody: "Your best prospects research after 8pm — exactly when you are off the clock.",
                  leakIcon: MessageSquare,
                  leak: "Your website has no live chat — visitors leave without a trace.",
                },
                {
                  causeIcon: Calendar,
                  causeTitle: "Weekend family time, no bandwidth to chase",
                  causeBody: "Saturdays are for soccer games, not for chasing leads who didn't book.",
                  leakIcon: Mail,
                  leak: "No system to follow up with leads who didn't book the first time.",
                },
                {
                  causeIcon: Smartphone,
                  causeTitle: "Juggling clients and kids — no time to ask",
                  causeBody: "By the time the day ends, asking for a review is the last thing on your mind.",
                  leakIcon: Star,
                  leak: "Happy clients aren't being asked for reviews or referrals in a repeatable way.",
                },
                {
                  causeIcon: Sparkles,
                  causeTitle: "Running on intuition — no time to analyze",
                  causeBody: "You feel where leads come from, but you have never had time to actually measure it.",
                  leakIcon: TrendingUp,
                  leak: "No dashboard showing where your leads come from, what converts, and what doesn't.",
                },
              ].map((row) => {
                const CauseIcon = row.causeIcon;
                const LeakIcon = row.leakIcon;
                return (
                  <div
                    key={row.causeTitle}
                    className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-5 items-stretch"
                  >
                    {/* Cause */}
                    <div className="flex gap-3 p-4 md:p-5 rounded-xl border border-[hsl(280_50%_75%/0.25)] bg-[hsl(280_40%_18%/0.35)]">
                      <div className="w-10 h-10 shrink-0 rounded-lg bg-[hsl(280_60%_70%/0.15)] border border-[hsl(280_60%_70%/0.35)] flex items-center justify-center">
                        <CauseIcon className="w-5 h-5 text-[hsl(280_70%_82%)]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[hsl(280_60%_78%)] mb-1">
                          Mom-life moment
                        </p>
                        <h3 className="text-sm md:text-base font-display font-semibold text-foreground leading-snug mb-1">
                          {row.causeTitle}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {row.causeBody}
                        </p>
                      </div>
                    </div>

                    {/* Connector */}
                    <div className="hidden md:flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>

                    {/* Consequence */}
                    <div className="flex gap-3 p-4 md:p-5 rounded-xl border-2 border-primary/40 bg-primary/10 shadow-[0_0_18px_hsl(22_85%_60%/0.12)]">
                      <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                        <LeakIcon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-1">
                          Revenue leak
                        </p>
                        <p className="text-sm md:text-base font-semibold text-foreground leading-snug">
                          {row.leak}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Closer + Fix block */}
            <div className="mt-14 md:mt-16">
              <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-14 items-center">
                {/* Leaky bucket image */}
                <div className="relative order-1">
                  <div className="absolute -inset-6 rounded-[2rem] bg-[linear-gradient(135deg,hsl(22_85%_60%/0.18),hsl(188_78%_45%/0.18))] blur-3xl pointer-events-none" />
                  <div className="relative rounded-2xl overflow-hidden border border-primary/25 bg-card/40 p-4 md:p-6">
                    <img
                      src={leakyBucket}
                      alt="Leaky bucket illustration showing local business leads spilling out through gaps in disconnected marketing tools"
                      width={800}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* The Fix — Minimum AI Package */}
                <div className="order-2 min-w-0">
                  <p className="font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                    What You Get
                  </p>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold leading-tight mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                    We Help You Fix Your Leaky Bucket
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                    One connected system — built inside your own account — that captures enquiries, follows up instantly, books calls, and tracks everything. Here's what's included:
                  </p>

                  <ul className="space-y-3">
                    {[
                      {
                        icon: PhoneCall,
                        title: "AI Voice (Missed Call Handling)",
                        body: "When you miss a call, AI picks up. It answers common questions, qualifies the caller, and books appointments — so you never lose a lead to voicemail again.",
                      },
                      {
                        icon: MessageSquare,
                        title: "Missed Call SMS Text Back",
                        body: "If a call goes unanswered, the system instantly texts the caller back. Most people reply to a text faster than they listen to a voicemail.",
                      },
                      {
                        icon: Globe,
                        title: "AI Website / Landing Page + Opt-in",
                        body: "A high-converting one-page website designed to capture leads. Built to load fast, look professional, and drive action.",
                      },
                      {
                        icon: Bot,
                        title: "AI Webchat",
                        body: "A chat widget on your website that engages visitors in real time, answers questions, and captures contact details — even when you're not online.",
                      },
                      {
                        icon: Database,
                        title: "CRM Setup (Basic)",
                        body: "Your leads, conversations, and pipeline — all in one place. No more spreadsheets or scattered notes.",
                      },
                      {
                        icon: Star,
                        title: "Reviews System",
                        body: "Automatically requests reviews from happy clients and follows up if they haven't left one. A repeatable process, not a one-off ask.",
                      },
                      {
                        icon: Users,
                        title: "Referrals System",
                        body: "Prompts satisfied clients to refer others, with automated follow-up. Turns word of mouth into a system.",
                      },
                      {
                        icon: TrendingUp,
                        title: "KPI Dashboard & Tracking",
                        body: "See where your leads come from, what converts, and what needs attention. One screen. Real-time data.",
                      },
                    ].map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <li key={item.title} className="flex gap-3">
                          <div className="w-9 h-9 shrink-0 rounded-lg bg-primary/15 border border-primary/40 flex items-center justify-center">
                            <ItemIcon className="w-4.5 h-4.5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm md:text-base font-display font-bold text-foreground leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-0.5">
                              {item.body}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <p className="mt-12 max-w-3xl mx-auto text-center text-base md:text-lg text-muted-foreground leading-relaxed">
                Each one of these is a leak. Together, they cost{" "}
                <span className="text-foreground font-semibold">thousands every month</span>{" "}
                — and most mom-owned businesses don't even realize it.
              </p>
            </div>
          </div>
        </section>

        <section id="presence" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-5 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Stop Choosing Between Being Present and Being Responsive
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-3">
                You should not have to answer texts while giving a massage, step out of a client session to return a missed call, or skip your daughter’s basketball game because someone might reach out after hours.
              </p>
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                The right system lets your business keep responding even when you are with a client, with your family, at dinner, or finally taking a break.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {presenceCards.map((c) => (
                <div
                  key={c.title}
                  className="relative rounded-2xl border border-border bg-card p-7 overflow-hidden"
                >
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-[linear-gradient(90deg,hsl(22_85%_60%),hsl(350_70%_72%),hsl(280_55%_72%))]" />
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                      <c.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg md:text-xl mb-2">
                        {c.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {c.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="automation"
          className="py-20 scroll-mt-20 bg-background-alt relative overflow-hidden"
        >
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                What Gets Automated for You
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                This is where the system starts saving time — not just generating leads.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {automationCards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border-2 border-[hsl(188_78%_50%_/_0.5)] bg-[hsl(210_45%_18%)] p-6 hover:border-[hsl(188_78%_60%_/_0.8)] hover:shadow-[0_0_30px_hsl(188_78%_45%_/_0.35)] transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[hsl(188_78%_41%_/_0.2)] border border-[hsl(188_78%_55%_/_0.4)] flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-[hsl(188_78%_70%)]" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground leading-tight">{c.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{c.desc}</p>
                  <p className="text-sm italic text-primary leading-relaxed">"{c.quote}"</p>
                </div>
              ))}
            </div>

            {/* Automation flow */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-5 text-center bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Automation Flow
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {automationFlow.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="px-4 py-2.5 rounded-xl bg-background border border-primary/30 text-sm font-medium shadow-sm">
                      <Zap className="w-3.5 h-3.5 inline-block mr-2 text-primary" />
                      {step}
                    </div>
                    {i < automationFlow.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:inline" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="system"
          className="py-20 scroll-mt-20 relative overflow-hidden bg-[linear-gradient(180deg,hsl(35_55%_94%)_0%,hsl(20_50%_92%)_100%)]"
        >
          <div className="absolute -top-20 right-10 w-72 h-72 rounded-full bg-[hsl(350_70%_80%/0.22)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 left-10 w-72 h-72 rounded-full bg-[hsl(280_50%_82%/0.2)] blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                See the System Behind Your Website
              </h2>
              <p className="text-[hsl(210_30%_25%)] text-base md:text-lg leading-relaxed">
                Your website is only the front door. GrowSmallBiz also sets up the connected system behind it — lead capture, CRM, follow-up automation, reviews, and AI-powered response tools.
              </p>
            </div>

            {/* Google Reviews */}
            <div className="mb-14">
              <h3 className="text-xl md:text-2xl font-display font-bold text-center text-[hsl(210_55%_14%)] mb-6">
                Recent Google Reviews
              </h3>
              <div className="max-w-4xl mx-auto rounded-3xl border border-[hsl(30_55%_82%)] bg-white/85 backdrop-blur-sm shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.25)] p-3 md:p-6 overflow-hidden">
                <iframe
                  className="lc_reviews_widget w-full block"
                  src="https://reputationhub.site/reputation/widgets/review_widget/4KL47iKeJZ2Ee05j7FBh"
                  frameBorder={0}
                  scrolling="no"
                  style={{ minWidth: "100%", width: "100%" }}
                  title="Recent Google Reviews"
                />
              </div>
            </div>

            {/* Videos */}
            <div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-center text-[hsl(210_55%_14%)] mb-6">
                Watch How the System Works
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {[
                  {
                    title: "Client Growth System Overview",
                    sub: "See how the system helps organize leads, conversations, follow-up, reviews, and customer communication in one place.",
                    src: "https://www.youtube-nocookie.com/embed/rJ289MZ0ugU",
                  },
                  {
                    title: "AI Employee Demo",
                    sub: "See how AI-powered response tools can help answer questions, capture information, and support faster follow-up.",
                    src: "https://www.youtube-nocookie.com/embed/IkA8jPWgHxk",
                  },
                ].map((v) => (
                  <div
                    key={v.src}
                    className="rounded-3xl border border-[hsl(30_55%_82%)] bg-white/85 backdrop-blur-sm shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.25)] overflow-hidden flex flex-col"
                  >
                    <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                      <iframe
                        src={v.src}
                        title={v.title}
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                        frameBorder={0}
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="font-display font-bold text-lg text-[hsl(210_55%_14%)] mb-2">
                        {v.title}
                      </h4>
                      <p className="text-sm text-[hsl(210_30%_30%)] leading-relaxed">{v.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="different" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                What Makes This Different
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-10 items-stretch">
              <div className="relative rounded-2xl border border-dashed border-border bg-background-alt p-8 opacity-90">
                <div className="absolute top-4 right-4">
                  <XCircle className="w-5 h-5 text-muted-foreground/60" />
                </div>
                <p className="text-lg md:text-xl font-display font-bold text-muted-foreground mb-5">
                  Most basic website offers:
                </p>
                <ul className="space-y-2.5 text-sm text-muted-foreground/90">
                  {[
                    "Just a website",
                    "No CRM setup",
                    "No follow-up automation",
                    "No AI response tools",
                    "No review automation",
                    "No connected lead tracking",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 mt-0.5 text-muted-foreground/60 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-2xl border-2 border-primary bg-card p-8 shadow-[0_30px_70px_-20px_hsl(22_85%_50%/0.4)] overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-[linear-gradient(90deg,hsl(22_85%_60%),hsl(350_70%_72%),hsl(280_55%_72%))]" />
                <div className="absolute top-4 right-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="text-lg md:text-xl font-display font-bold mb-5">This program:</p>
                <ul className="space-y-2.5 text-sm">
                  {[
                    "Website + CRM",
                    "Lead capture + follow-up automation",
                    "Review automation",
                    "AI-powered response tools",
                    "Unified inbox",
                    "Connected client growth system",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="max-w-3xl mx-auto space-y-3 text-muted-foreground">
              <p>A website alone does not follow up with leads.</p>
              <p>A contact form alone does not organize opportunities.</p>
              <p>A phone number alone does not prevent missed calls.</p>
              <p>A happy customer alone does not guarantee a review.</p>
              <p>A CRM alone does not help unless it is set up properly.</p>
              <p className="pt-2 text-foreground">
                GrowSmallBiz combines the website, CRM, automation, review system, and AI-powered response tools into one connected setup for local service businesses.
              </p>
              <p className="font-semibold text-foreground">
                Built for business owners — not marketing teams.
              </p>
            </div>
          </div>
        </section>

        <section
          id="roi"
          className="py-20 scroll-mt-20 relative overflow-hidden bg-[linear-gradient(180deg,hsl(35_55%_94%)_0%,hsl(20_50%_92%)_100%)]"
        >
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Why This Can Pay for Itself Quickly
              </h2>
              <p className="text-[hsl(210_30%_25%)] text-base md:text-lg">
                For many local service businesses, one or two additional booked clients per month can cover the monthly subscription.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {roiCards.map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[hsl(30_55%_82%)] bg-white/85 backdrop-blur-sm p-7 text-center shadow-[0_20px_60px_-30px_hsl(20_60%_40%/0.25)]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[hsl(22_85%_60%/0.12)] border border-[hsl(22_85%_60%/0.3)] flex items-center justify-center mx-auto mb-4">
                    <c.icon className="w-7 h-7 text-[hsl(22_85%_45%)]" />
                  </div>
                  <p className="text-[hsl(210_30%_22%)] text-base leading-relaxed">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs text-[hsl(210_25%_40%)] text-center mt-8 max-w-3xl mx-auto">
              Results vary by business, offer, pricing, responsiveness, and market demand. GrowSmallBiz does not guarantee a specific number of clients or revenue.
            </p>
          </div>
        </section>

        <section
          id="value"
          className="py-20 scroll-mt-20 relative overflow-hidden bg-[linear-gradient(180deg,hsl(35_60%_95%)_0%,hsl(20_55%_92%)_100%)]"
        >
          <div className="absolute -top-20 right-10 w-72 h-72 rounded-full bg-[hsl(350_70%_80%/0.22)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 left-10 w-72 h-72 rounded-full bg-[hsl(280_50%_82%/0.2)] blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Mother’s Day Appreciation Offer · Limited to 5 Businesses
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                A Real Mother’s Day Business Growth Deal
              </h2>
              <p className="text-[hsl(210_30%_25%)] text-base md:text-lg leading-relaxed">
                This is not standard GrowSmallBiz pricing. This is a limited Mother’s Day offer created for 5 mom-owned local service businesses.
              </p>
            </div>

            {/* Comparison table */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* Standard */}
              <div className="rounded-3xl border border-[hsl(30_55%_82%)] bg-white/70 backdrop-blur-sm p-7 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[hsl(210_25%_45%)] mb-4">
                  Standard Value
                </p>
                <ul className="divide-y divide-[hsl(30_45%_85%)]">
                  {standardValues.map((row) => (
                    <li
                      key={row.label}
                      className="flex items-center justify-between py-3 text-[hsl(210_30%_25%)]"
                    >
                      <span className="text-sm md:text-base">{row.label}</span>
                      <span className="text-sm md:text-base line-through opacity-70">
                        {row.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cohort */}
              <div className="relative rounded-3xl border-2 border-[hsl(22_85%_60%)] bg-white shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.4)] p-7 md:p-8 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-[linear-gradient(90deg,hsl(22_85%_60%),hsl(350_70%_72%),hsl(280_55%_72%))]" />
                <div className="absolute -top-2 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg">
                  MOTHER’S DAY PRICING
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                  Mother’s Day Appreciation Offer
                </p>
                <ul className="divide-y divide-[hsl(30_45%_85%)]">
                  {cohortValues.map((row) => (
                    <li
                      key={row.label}
                      className="flex items-center justify-between py-3 text-[hsl(210_55%_14%)]"
                    >
                      <span className="text-sm md:text-base font-medium">{row.label}</span>
                      <span className="text-sm md:text-base font-bold text-[hsl(22_85%_42%)]">
                        {row.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Value callouts */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Essentials Plan — Total Savings",
                  total: "$4,200",
                  rows: [
                    "$2,500 Starter Website included",
                    "$500 setup savings",
                    "$1,200 subscription savings over 12 months",
                  ],
                },
                {
                  title: "Growth Plan — Total Savings",
                  total: "$5,400",
                  rows: [
                    "$2,500 Starter Website included",
                    "$500 setup savings",
                    "$2,400 subscription savings over 12 months",
                  ],
                  highlight: true,
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className={`relative rounded-3xl p-7 md:p-8 border ${
                    c.highlight
                      ? "border-[hsl(22_85%_60%)] bg-[linear-gradient(135deg,hsl(22_85%_60%/0.08),hsl(350_75%_80%/0.08))] shadow-[0_20px_60px_-30px_hsl(20_60%_40%/0.4)]"
                      : "border-[hsl(30_55%_82%)] bg-white/80"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                    {c.title}
                  </p>
                  <p className="text-3xl md:text-4xl font-display font-bold text-[hsl(210_55%_12%)] mb-1">
                    {c.total}{" "}
                    <span className="text-base md:text-lg font-medium text-[hsl(210_25%_40%)]">
                      in total savings over 12 months
                    </span>
                  </p>
                  <ul className="mt-4 space-y-2">
                    {c.rows.map((r) => (
                      <li
                        key={r}
                        className="flex items-start gap-2 text-sm text-[hsl(210_30%_25%)]"
                      >
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-[hsl(22_85%_50%)] shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-center text-sm md:text-base mt-8 text-[hsl(210_30%_25%)] italic">
              This Mother’s Day pricing is only available to the 5 selected mom-owned businesses in this Mother’s Day Appreciation Offer and will not be repeated after this campaign closes.
            </p>

            <div className="flex justify-center mt-8">
              <PrimaryCTA href={ctaUrl} />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-[hsl(22_85%_60%/0.08)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-[hsl(350_70%_72%/0.08)] blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            <div className="text-center mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Extended Through May 31, 2026 — or Until 5 Spots Are Filled
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Why We Extended This Offer
              </h2>
            </div>
            <div className="rounded-3xl border border-border bg-card/70 backdrop-blur p-7 md:p-10 space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p className="text-foreground font-medium">
                Mother’s Day is one day. Running a business while being a mom is every day.
              </p>
              <p>
                Many mom-owned businesses are built in the margins — between client appointments, school schedules, family commitments, late-night planning, and constant follow-up.
              </p>
              <p className="text-foreground">
                That is why this offer stays open through May 31.
              </p>
              <p>
                This is a limited appreciation offer for 5 mom-owned local service businesses that want a professional website, faster follow-up, better lead tracking, and more time back in their day.
              </p>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Choose the Plan That Fits Your Business
              </h2>
              <p className="text-muted-foreground">
                Both plans include your complimentary Starter Website and discounted Client Growth System Setup. Choose how much automation you want behind your business.
              </p>
            </div>

            {/* Billing toggle */}
            <div className="flex justify-center mb-10">
              <div
                role="radiogroup"
                aria-label="Billing cycle"
                className="inline-flex items-center gap-1 p-1 rounded-full border border-border bg-card/60 backdrop-blur"
              >
                {(["monthly", "annual"] as const).map((option) => {
                  const selected = billing === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setBilling(option)}
                      className={`relative px-5 md:px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                        selected
                          ? "bg-primary text-primary-foreground shadow"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {option === "monthly" ? "Monthly" : "Annual"}
                      {option === "annual" && (
                        <span
                          className={`ml-2 text-[10px] uppercase tracking-wide font-bold ${
                            selected ? "text-primary-foreground/90" : "text-primary"
                          }`}
                        >
                          2 mo free
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {(() => {
              const isAnnual = billing === "annual";
              const essPrice = isAnnual ? "$1,970" : "$197";
              const essRegular = isAnnual ? "$2,970/year" : "$297/month";
              const growPrice = isAnnual ? "$2,970" : "$297";
              const growRegular = isAnnual ? "$4,970/year" : "$497/month";
              const period = isAnnual ? "/year" : "/month";
              return (
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {/* Essentials Plan */}
                  <div
                    className="rounded-2xl border-2 border-[hsl(199_89%_48%/0.5)] p-8 flex flex-col"
                    style={{ background: "linear-gradient(180deg, hsl(210 45% 13%) 0%, hsl(210 50% 9%) 100%)" }}
                  >
                    <div className="text-center mb-2">
                      <h3 className="text-3xl font-display font-bold text-foreground">Essentials Plan</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        For mom-owned businesses that want the website, CRM, reviews, unified inbox, and follow-up foundation in place.
                      </p>
                    </div>
                    <div className="text-center my-6">
                      <span className="text-5xl md:text-6xl font-display font-bold text-primary">{essPrice}</span>
                      <span className="text-muted-foreground text-lg">{period}</span>
                      <p className="mt-3 text-lg md:text-xl text-muted-foreground">
                        Normally{" "}
                        <span className="line-through text-red-500 font-bold text-xl md:text-2xl">{essRegular}</span>
                      </p>
                      <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/15 border border-green-500/40 text-green-400 text-sm font-bold">
                        💰 Save {isAnnual ? "$1,000" : "$1,200"}/year
                      </div>
                    </div>
                    <p className="font-semibold text-foreground mb-3">Includes:</p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {essentialsIncludes.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                          <span className="text-foreground">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-muted-foreground mb-5">
                      <span className="font-semibold text-foreground">Best for:</span>{" "}
                      Businesses that want to look professional, stay organized, and start capturing and following up with leads more consistently.
                    </p>
                    <PrimaryCTA href={ctaUrl} full />
                  </div>

                  {/* Growth Plan */}
                  <div
                    className="relative rounded-2xl border-2 border-primary p-8 flex flex-col shadow-[0_30px_70px_-20px_hsl(22_85%_50%/0.45)]"
                    style={{ background: "linear-gradient(180deg, hsl(210 45% 13%) 0%, hsl(210 50% 9%) 100%)" }}
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide shadow-lg">
                      Most Popular
                    </div>
                    <div className="text-center mb-2">
                      <h3 className="text-3xl font-display font-bold text-foreground">Growth Plan</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        For mom-owned businesses that want faster response, AI-powered lead handling, and more automation.
                      </p>
                    </div>
                    <div className="text-center my-6">
                      <span className="text-5xl md:text-6xl font-display font-bold text-primary">{growPrice}</span>
                      <span className="text-muted-foreground text-lg">{period}</span>
                      <p className="mt-3 text-lg md:text-xl text-muted-foreground">
                        Normally{" "}
                        <span className="line-through text-red-500 font-bold text-xl md:text-2xl">{growRegular}</span>
                      </p>
                      {isAnnual && (
                        <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/15 border border-green-500/40 text-green-400 text-sm font-bold">
                          💰 Save $2,000/year
                        </div>
                      )}
                    </div>
                    <p className="font-semibold text-foreground mb-3">Everything in Essentials, plus:</p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {growthExtras.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm">
                          <Sparkles className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                          <span className="text-foreground font-medium">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-muted-foreground mb-5">
                      <span className="font-semibold text-foreground">Best for:</span>{" "}
                      Businesses that miss calls, receive after-hours inquiries, or want leads handled faster without hiring a receptionist.
                    </p>
                    <PrimaryCTA href={ctaUrl} full />
                  </div>
                </div>
              );
            })()}

            {/* Investment Details */}
            <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-background-alt p-7">
                <h3 className="font-display font-bold text-lg mb-4">Investment Details</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    "Complimentary Starter Website — $2,500 value",
                    "Client Growth System Setup — $1,000 (normally $1,500)",
                    "12-month growth program",
                    "Essentials Plan: $197/month",
                    "Growth Plan: $297/month",
                    "Subscription begins when your website goes live",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border-2 border-[hsl(350_70%_75%/0.6)] bg-[linear-gradient(135deg,hsl(350_80%_92%/0.15),hsl(30_80%_88%/0.15))] p-7">
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="w-6 h-6 text-primary" />
                  <h3 className="font-display font-bold text-lg">Annual Option</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {[
                    "Essentials Plan: $1,970/year",
                    "Growth Plan: $2,970/year",
                    "Includes 2 months free at the Mother’s Day rate",
                    "Includes Mother’s Day spa bonus",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Setup includes / integrations */}
            <div className="max-w-5xl mx-auto mt-10 rounded-2xl border border-border bg-card p-7 md:p-8">
              <h3 className="font-display font-bold text-xl md:text-2xl mb-2">
                What the Onboarding Setup Includes
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                The one-time setup fee covers system configuration — not website design. Your Starter Website is included separately.
              </p>
              <ul className="grid md:grid-cols-2 gap-3 mb-7">
                {setupIncludes.map((s) => (
                  <li key={s.text} className="flex items-start gap-3 text-sm">
                    <s.icon className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>{s.text}</span>
                  </li>
                ))}
              </ul>

              <p className="font-semibold mb-3 text-base">Core integrations may include:</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {integrations.map((i) => (
                  <span
                    key={i.name}
                    className="text-sm font-semibold px-3.5 py-2 rounded-full bg-background border-2 transition-all hover:scale-105"
                    style={{
                      borderColor: `${i.color}80`,
                      color: i.color,
                      boxShadow: `0 0 12px ${i.color}33`,
                    }}
                  >
                    {i.name}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground italic">
                Core integrations are configured based on what your business actually uses.
              </p>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="py-20 scroll-mt-20 relative overflow-hidden bg-[linear-gradient(180deg,hsl(35_55%_94%)_0%,hsl(20_50%_92%)_100%)]"
        >
          <div className="absolute -top-20 left-10 w-72 h-72 rounded-full bg-[hsl(350_70%_80%/0.22)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 right-10 w-72 h-72 rounded-full bg-[hsl(280_50%_82%/0.22)] blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="rounded-3xl border border-[hsl(30_55%_82%)] bg-white/80 backdrop-blur-sm shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.25)] p-4 md:p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={f.q}
                    value={`item-${i}`}
                    className="border-[hsl(30_45%_82%)] last:border-b-0"
                  >
                    <AccordionTrigger className="text-left font-display font-semibold text-base md:text-lg text-[hsl(210_55%_14%)] hover:text-[hsl(22_85%_45%)] py-5 px-2">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(210_30%_28%)] px-2 pb-5 leading-relaxed">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section
          id="apply"
          className="relative py-20 scroll-mt-20 overflow-hidden bg-[linear-gradient(135deg,hsl(210_55%_10%)_0%,hsl(210_50%_14%)_50%,hsl(20_50%_20%)_100%)]"
        >
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[hsl(22_85%_60%/0.18)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[hsl(280_60%_70%/0.14)] blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 max-w-3xl relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[linear-gradient(135deg,hsl(22_85%_60%/0.2),hsl(350_70%_72%/0.2))] border border-[hsl(22_85%_60%/0.5)] text-foreground text-sm md:text-base font-bold mb-6 shadow-[0_0_30px_hsl(22_85%_50%/0.25)]">
              <Clock className="w-4 h-4 text-primary" />
              <span className="bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Extended Through May 31, 2026 — or Until 5 Spots Are Filled
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-5 leading-tight bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
              5 Spots. This Deal Will Not Be Repeated.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you are a mom-owned local service business and you are ready for a professional website, faster follow-up, fewer missed opportunities, and more time back in your day, apply for one of the 5 spots in this Mother’s Day Appreciation Offer.
            </p>

            <div className="rounded-2xl border border-[hsl(22_85%_60%/0.25)] bg-card/70 backdrop-blur p-6 md:p-8 mb-8 text-left shadow-2xl">
              <ul className="space-y-2.5 text-sm">
                {[
                  "Complimentary Starter Website — $2,500 value",
                  "Client Growth System Setup reduced to $1,000",
                  "Essentials Plan: $197/month",
                  "Growth Plan: $297/month",
                  "Extended through May 31, 2026 — or until 5 spots are filled",
                  "Spots are filled first-paid after the discovery call",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center mb-4">
              <PrimaryCTA href={ctaUrl} />
            </div>
            <p className="text-xs text-muted-foreground italic">
              Once these 5 spots are filled, this Mother’s Day Appreciation Offer will close.
            </p>
          </div>
        </section>

      </main>

      {/* MINIMAL FOOTER */}
      <footer className="bg-card border-t border-border" role="contentinfo">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src={growsmallbizLogo}
                  alt="GrowSmallBiz logo"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
                <span className="text-lg font-bold font-display text-foreground">
                  GrowSmallBiz
                </span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Mother’s Day Appreciation Offer for 5 mom-owned local service businesses.
              </p>
            </div>

            {/* On this page */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4 border-b-2 border-primary/40 pb-2 inline-block">
                On This Page
              </h4>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                {sectionNav.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal / Company */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4 border-b-2 border-primary/40 pb-2 inline-block">
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Claim Your Spot
                  </a>
                </li>
                <li>
                  <Link to="/terms-of-service/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} GrowSmallBiz. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-background/95 backdrop-blur border-t border-border">
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-[calc(100%-4.5rem)] px-4 py-3 rounded-md bg-gradient-to-r from-[hsl(22_88%_65%)] via-[hsl(280_30%_60%)] to-[hsl(200_70%_60%)] text-[hsl(220_40%_15%)] font-bold shadow-[0_10px_30px_-8px_hsl(22_85%_55%/0.45)] text-sm"
        >
          {PRIMARY_CTA_LABEL} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default MothersDayCohort;
