import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUtm } from "@/hooks/use-utm";
import { Button } from "@/components/ui/button";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { SpeedToLeadFlow } from "@/components/sections/SpeedToLeadFlow";
import { AiBusyMomDemo } from "@/components/sections/AiBusyMomDemo";
import { CtaBlock } from "@/components/niche-page/sections/CtaBlock";
import { baseContactCTA } from "@/config/contactCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  ArrowDown,
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
  Target,
} from "lucide-react";
import heroImage from "@/assets/mothers-day-cohort-hero.jpg";
import growsmallbizLogo from "@/assets/growsmallbiz-logo.webp";
import leakyBucket from "@/assets/leaky-bucket.webp";
import demoPreview from "@/assets/cohort/demo-website-preview.png";
import bizSalon from "@/assets/cohort/biz-salon.jpg";
import bizMedspa from "@/assets/cohort/biz-medspa.jpg";
import bizCleaning from "@/assets/cohort/biz-cleaning.jpg";
import bizTutoring from "@/assets/cohort/biz-tutoring.jpg";
import bizPetcare from "@/assets/cohort/biz-petcare.jpg";
import bizFitness from "@/assets/cohort/biz-fitness.jpg";
import chamberDanville from "@/assets/cohort/chamber-danville.webp";
import chamberSanRamon from "@/assets/cohort/chamber-sanramon.webp";
import chamberWalnutCreek from "@/assets/cohort/chamber-walnutcreek.webp";
import chamberConcord from "@/assets/cohort/chamber-concord.png";
const BUILT_FOR = [
  { img: bizSalon, label: "Hair & Beauty Salons" },
  { img: bizMedspa, label: "Med Spas & Esthetics" },
  { img: bizCleaning, label: "Home Cleaning Services" },
  { img: bizTutoring, label: "Tutoring & Learning Studios" },
  { img: bizPetcare, label: "Pet Care & Grooming" },
  { img: bizFitness, label: "Boutique Fitness & Yoga" },
];

const PAGE_PATH = "/mothers-day-mom-owned-business-cohort/";
const PAGE_URL = `https://growsmallbiz.io${PAGE_PATH}`;
const APPLICATION_FORM_URL =
  "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const PAGE_TITLE = "Complimentary Starter Website for Mom-Owned Small Businesses | Mother’s Day Offer";
const PAGE_DESC =
  "Mother’s Day Appreciation Offer extended through May 31 for 5 mom-owned local service businesses. Complimentary Starter Website ($2,500 value), Client Growth System Setup reduced to $1,000, plus special Mother’s Day pricing that will not be repeated.";

const PRIMARY_CTA_LABEL = "Apply for One of the 5 Spots →";
const SECONDARY_CTA_LABEL = "See the Offer Breakdown";

const sectionNav = [
  { id: "value", label: "The Offer" },
  { id: "built-for", label: "Built For" },
  { id: "problem", label: "Lead Leaks" },
  { id: "leaky-bucket", label: "The Fix" },
  { id: "system", label: "The System" },
  { id: "different", label: "Why Different" },
  { id: "roi", label: "ROI" },
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
}) => {
  const isAnchor = href.startsWith("#");
  return (
    <Button
      asChild
      size="lg"
      className={`bg-gradient-to-r from-[hsl(22_88%_65%)] via-[hsl(280_30%_60%)] to-[hsl(200_70%_60%)] text-[hsl(220_40%_15%)] font-bold hover:brightness-110 shadow-[0_10px_30px_-8px_hsl(22_85%_55%/0.45)] border-0 transition-all ${
        full ? "w-full" : ""
      } ${className}`}
    >
      <a href={href} {...(!isAnchor ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {label} <ArrowRight className="w-5 h-5 ml-2" />
      </a>
    </Button>
  );
};

const MothersDayCohort = () => {
  const { buildUrl } = useUtm();
  const ctaUrl = buildUrl(APPLICATION_FORM_URL, "mothers-day-cohort");
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [demoOpen, setDemoOpen] = useState(false);

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
    { label: "Essentials Plan", value: "$97/month" },
    { label: "Growth Plan", value: "$197/month" },
  ];


  const roiCards = [
    {
      icon: PhoneMissed,
      title: "One Missed Call Becomes a Booked Client",
      body: "If one missed call turns into a paying customer instead of going to voicemail, the system starts justifying itself.",
    },
    {
      icon: Globe,
      title: "One After-Hours Visitor Takes Action",
      body: "People browse after dinner, on weekends, and between appointments. AI Livechat and booking tools help your website keep working when you are unavailable.",
    },
    {
      icon: Mail,
      title: "One Cold Lead Gets Recovered",
      body: "Automated follow-up can bring back leads who asked once, got distracted, and would have otherwise gone cold.",
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
      q: "What qualifies as a mom-owned business?",
      a: "For this offer, mom-owned means the business is owned or co-owned by a mother who is actively involved in running the business.",
    },
    {
      q: "What types of businesses are a good fit?",
      a: "This offer is best for local service businesses such as beauty and wellness providers, med spas, massage therapists, home service providers, consultants, coaches, photographers, event services, pet care businesses, tutoring studios, boutique fitness businesses, and similar client-based businesses.",
    },
    {
      q: "Is the Starter Website really complimentary?",
      a: "Yes, the Starter Website is complimentary as part of this limited Mother’s Day Appreciation Offer. It is valued at $2,500 and is included only when you enroll in either the Essentials Special or Growth Special annual plan.",
    },
    {
      q: "Is this available without an annual plan?",
      a: "No. The complimentary Starter Website is not available as a standalone website-only offer. It is included with annual enrollment in Essentials Special or Growth Special.",
    },
    {
      q: "What is included in the Client Growth System Setup?",
      a: "The Client Growth System Setup includes CRM setup, lead capture, pipeline setup, email and SMS follow-up, phone and calendar integration, review request automation, and hands-on launch support.",
    },
    {
      q: "What does the $1,000 setup cover?",
      a: "The $1,000 setup is not a website design fee. It covers the configuration of the system behind your website so your leads, conversations, follow-up, reviews, and booking tools work together.",
    },
    {
      q: "When does billing start?",
      a: "Your annual plan begins when your website goes live. The Client Growth System Setup payment is required to reserve your spot and begin onboarding.",
    },
    {
      q: "What happens after this campaign closes?",
      a: "Once the 5 spots are filled or the campaign closes, this Mother’s Day Appreciation Offer will no longer be available. This exact deal will not be repeated.",
    },
    {
      q: "What happens after the first year?",
      a: "After the first year, you can continue with the appropriate GrowSmallBiz plan based on your business needs and current pricing at that time.",
    },
    {
      q: "Do I pay before the website is built?",
      a: "After your application is reviewed and your business is confirmed as a fit, you will receive the payment link to reserve your spot. Work begins after payment and onboarding are completed.",
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
            href="#apply-form"
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
            {/* Eyebrow */}
            <div className="max-w-5xl mx-auto text-center mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/50 text-primary text-xs md:text-sm font-bold uppercase tracking-wider shadow-[0_0_20px_hsl(22_85%_60%/0.2)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                  Mother&rsquo;s Day Appreciation Offer &middot; Limited to 5 Mom-Owned Businesses
                </span>
              </div>
            </div>

            {/* H1 + H2 */}
            <div className="max-w-5xl mx-auto text-center mb-5">
              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] font-display font-bold leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                  Get a Complimentary Starter Small Business Website
                </span>
              </h1>
              <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-display font-semibold leading-[1.2] tracking-tight">
                <span className="bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                  a System That Helps You Win Clients Without Living on Your Phone
                </span>
              </h2>
            </div>

            {/* Subhead */}
            <div className="max-w-4xl mx-auto text-center mb-4">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                For 5 mom-owned local service businesses, GrowSmallBiz is including a complimentary Starter Website valued at $2,500, reducing Client Growth System Setup by $500, and offering annual-only appreciation pricing that will not be repeated.
              </p>
            </div>

            {/* Supporting line */}
            <div className="max-w-3xl mx-auto text-center mb-6">
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                Your website, CRM, AI Livechat, missed-call text-back, follow-up automation, reviews, and booking tools work together &mdash; so your business can respond while you are with clients, with family, or finally taking a break.
              </p>
            </div>

            {/* Deadline badge */}
            <div className="max-w-5xl mx-auto text-center mb-10 md:mb-14">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary/15 border-2 border-primary text-primary font-bold text-sm md:text-base shadow-[0_0_30px_hsl(22_85%_60%/0.25)]">
                <Clock className="w-4 h-4 md:w-5 md:h-5" />
                <span className="uppercase tracking-wide bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                  Extended Through May 31, 2026
                </span>
                <span className="hidden sm:inline opacity-70">&middot;</span>
                <span className="uppercase tracking-wide bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                  or Until 5 Spots Are Filled
                </span>
              </div>
            </div>

            {/* Two-column: bullets + image */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1 min-w-0">
                {/* Offer bullets */}
                <ul className="space-y-3">
                  {[
                    "Complimentary Starter Website valued at $2,500",
                    "$500 off Client Growth System Setup",
                    "Annual-only appreciation pricing",
                    "AI Livechat, missed-call text-back, CRM, reviews, and booking tools",
                    "Limited to 5 selected mom-owned businesses",
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

            {/* CTAs (centered below grid) */}
            <div className="max-w-3xl mx-auto mt-10 md:mt-12 text-center">
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center mb-4">
                <PrimaryCTA
                  href="#apply-form"
                  label="Apply for One of the 5 Spots"
                  className="w-full sm:w-auto whitespace-normal text-center leading-tight h-auto py-3"
                />
                <Button asChild size="lg" variant="outline" className="border-border w-full sm:w-auto">
                  <a href="#value">{SECONDARY_CTA_LABEL}</a>
                </Button>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground text-center leading-relaxed">
                The complimentary Starter Website is included only with Essentials Special or Growth Special annual enrollment. It is not available as a standalone website-only offer.
              </p>
            </div>
          </div>
        </section>

        {/* Chamber trust badges */}
        <section aria-label="Proud Chamber of Commerce member" className="bg-white py-6 md:py-8 border-y border-black/5">
          <div className="container mx-auto px-4">
            <p className="text-center text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-5">
              GrowSmallBiz is Proud Member Of
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
              {[
                { src: chamberDanville, alt: "Danville Area Chamber of Commerce" },
                { src: chamberSanRamon, alt: "San Ramon Chamber of Commerce" },
                { src: chamberWalnutCreek, alt: "Walnut Creek Chamber of Commerce" },
                { src: chamberConcord, alt: "Greater Concord Chamber of Commerce" },
              ].map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:-translate-y-0.5"
                />
              ))}
            </div>
          </div>
        </section>

        {/* 1. PRICING / VALUE STACK */}
        <section
          id="value"
          className="py-20 scroll-mt-20 relative overflow-hidden bg-[linear-gradient(180deg,hsl(35_60%_95%)_0%,hsl(20_55%_92%)_100%)]"
        >
          <div className="absolute -top-20 right-10 w-72 h-72 rounded-full bg-[hsl(350_70%_80%/0.22)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 left-10 w-72 h-72 rounded-full bg-[hsl(280_50%_82%/0.2)] blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            {/* Header */}
            <div className="text-center mb-8 max-w-4xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[hsl(22_90%_60%)] via-[hsl(350_70%_60%)] to-[hsl(188_78%_45%)] bg-clip-text text-transparent">
                Mother’s Day Appreciation Offer · Limited to 5 Businesses
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 leading-[1.1]">
                <span className="text-[hsl(210_55%_14%)]">A Real Business Growth Deal for </span>
                <span className="bg-gradient-to-r from-[hsl(22_90%_58%)] via-[hsl(350_75%_62%)] to-[hsl(188_78%_48%)] bg-clip-text text-transparent">
                  Mom-Owned Businesses
                </span>
              </h2>
              <p className="text-[hsl(210_30%_25%)] text-base md:text-lg leading-relaxed">
                This is not standard GrowSmallBiz pricing. This is a limited annual-only appreciation offer created for 5 mom-owned local service businesses.
              </p>
            </div>

            {/* Why this is still open — directly under subhead */}
            <div className="max-w-4xl mx-auto mb-10 rounded-2xl border border-[hsl(22_85%_60%/0.35)] bg-white/75 backdrop-blur-sm p-5 md:p-6 shadow-[0_15px_40px_-20px_hsl(20_60%_40%/0.3)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2 bg-gradient-to-r from-[hsl(22_90%_60%)] via-[hsl(350_70%_60%)] to-[hsl(188_78%_45%)] bg-clip-text text-transparent">
                Why this is still open
              </p>
              <p className="text-sm md:text-base text-[hsl(210_30%_22%)] leading-relaxed">
                Mother’s Day is one day. Running a business while being a mom is every day. We extended this appreciation offer through May 31 for 5 mom-owned local service businesses.
              </p>
            </div>

            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[hsl(22_85%_50%)] text-white text-sm md:text-base font-bold shadow-[0_15px_40px_-10px_hsl(20_60%_40%/0.45)] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> Annual Enrollment Only
              </div>
            </div>

            {/* Top comparison cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-6xl mx-auto">
              <div className="rounded-3xl border border-[hsl(30_55%_82%)] bg-white/70 backdrop-blur-sm p-7 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[hsl(210_25%_45%)] mb-4">
                  Standard GrowSmallBiz Annual Value
                </p>
                <ul className="divide-y divide-[hsl(30_45%_85%)]">
                  {[
                    { label: "Starter Website", value: "$2,500" },
                    { label: "Client Growth System Setup", value: "$1,500" },
                    { label: "Essentials Annual Plan", value: "$2,970/year" },
                    { label: "Growth Annual Plan", value: "$4,970/year" },
                  ].map((row) => (
                    <li key={row.label} className="flex items-center justify-between py-3 text-[hsl(210_30%_25%)]">
                      <span className="text-sm md:text-base">{row.label}</span>
                      <span className="text-sm md:text-base line-through opacity-70">{row.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative rounded-3xl border-2 border-[hsl(22_85%_60%)] bg-white shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.4)] p-7 md:p-8 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-[linear-gradient(90deg,hsl(22_85%_60%),hsl(350_70%_72%),hsl(280_55%_72%))]" />
                <p className="text-xs font-semibold uppercase tracking-wider mb-4 mt-2 bg-gradient-to-r from-[hsl(22_90%_60%)] via-[hsl(350_70%_60%)] to-[hsl(188_78%_45%)] bg-clip-text text-transparent">
                  Mother’s Day Appreciation Offer
                </p>
                <ul className="divide-y divide-[hsl(30_45%_85%)]">
                  {[
                    { label: "Starter Website", value: "Complimentary" },
                    { label: "Client Growth System Setup", value: "$1,000" },
                    { label: "Essentials Special", value: "$970/year" },
                    { label: "Growth Special", value: "$1,970/year" },
                  ].map((row) => (
                    <li key={row.label} className="flex items-center justify-between gap-3 py-3 text-[hsl(210_55%_14%)]">
                      <span className="text-sm md:text-base font-medium">{row.label}</span>
                      <span className="text-sm md:text-base font-bold text-[hsl(22_85%_42%)] text-right">{row.value}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs md:text-sm text-[hsl(210_30%_30%)] italic">
                  Annual-only special pricing. Equivalent to $97/month for Essentials and $197/month for Growth, with 2 months included.
                </p>
              </div>
            </div>

            {/* Plan cards */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              {[
                {
                  title: "Essentials Special",
                  annual: "$970",
                  monthlyEq: "$97/month",
                  calloutHeadline: "Less Than One Nice Dinner Out Each Month",
                  calloutBody:
                    "For less than one dinner out each month, your business gets a website, CRM, unified inbox, review automation, and follow-up foundation working behind the scenes.",
                  firstYearAmount: "$1,970",
                  savingsTotal: "$5,000",
                  savingsRows: [
                    "$2,500 Starter Website included",
                    "$500 setup savings",
                    "$2,000 annual plan savings",
                  ],
                  bestFor:
                    "Best for mom-owned businesses that want a professional website, CRM, reviews, unified inbox, and follow-up foundation in place.",
                  highlight: false,
                },
                {
                  title: "Growth Special",
                  annual: "$1,970",
                  monthlyEq: "$197/month",
                  calloutHeadline: "About the Cost of One Spa Visit Each Month",
                  calloutBody:
                    "For about the cost of one spa visit each month, your business gets AI-powered response tools that help answer questions, capture leads, follow up, and book appointments — even when you are with a client, with your family, or finally taking a break.",
                  firstYearAmount: "$2,970",
                  savingsTotal: "$6,000",
                  savingsRows: [
                    "$2,500 Starter Website included",
                    "$500 setup savings",
                    "$3,000 annual plan savings",
                  ],
                  bestFor:
                    "Best for mom-owned businesses that want AI-powered response, missed-call text-back, AI Livechat, faster lead handling, and after-hours support.",
                  highlight: true,
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className={`relative rounded-3xl p-7 md:p-9 border flex flex-col ${
                    c.highlight
                      ? "border-2 border-[hsl(22_85%_60%)] bg-[linear-gradient(135deg,hsl(22_85%_60%/0.10),hsl(350_75%_80%/0.10))] shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.45)] md:scale-[1.02]"
                      : "border-[hsl(30_55%_82%)] bg-white/85"
                  }`}
                >
                  {c.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg whitespace-nowrap">
                      MOST POPULAR
                    </div>
                  )}

                  {/* 1. Plan name */}
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-[hsl(210_55%_12%)] mb-4">
                    {c.title}
                  </h3>

                  {/* 2. Annual price */}
                  <div className="mb-2">
                    <span className="text-5xl md:text-6xl font-display font-black text-[hsl(22_85%_42%)] leading-none">
                      {c.annual}
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-[hsl(22_85%_42%)] ml-1">/year</span>
                  </div>

                  {/* 3. Monthly equivalent badge */}
                  <div className="mt-2 inline-flex self-start items-center px-3 py-1 rounded-full bg-[hsl(210_55%_14%/0.06)] border border-[hsl(210_55%_14%/0.12)] text-xs md:text-sm font-semibold text-[hsl(210_45%_25%)]">
                    Equivalent to {c.monthlyEq} with 2 months included
                  </div>

                  {/* 4. Put That in Perspective */}
                  <div className="relative mt-5 rounded-2xl overflow-hidden border-2 border-[hsl(22_85%_60%/0.5)] bg-[linear-gradient(135deg,hsl(30_85%_92%)_0%,hsl(350_75%_94%)_50%,hsl(22_85%_92%)_100%)] shadow-[0_15px_40px_-15px_hsl(20_60%_40%/0.3)]">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[linear-gradient(180deg,hsl(22_85%_55%),hsl(350_70%_60%))]" />
                    <div className="relative p-5 md:p-6 pl-6 md:pl-7">
                      <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold text-[hsl(22_85%_38%)] mb-2">
                        Put That in Perspective
                      </p>
                      <h4 className="text-xl md:text-2xl font-display font-bold text-[hsl(210_55%_12%)] mb-2 leading-tight">
                        {c.calloutHeadline}
                      </h4>
                      <p className="text-sm md:text-base text-[hsl(210_30%_22%)] leading-relaxed">
                        {c.calloutBody}
                      </p>
                    </div>
                  </div>

                  {/* 5. First-Year Investment block */}
                  <div className="mt-5 rounded-2xl border-2 border-[hsl(210_55%_14%)] bg-[hsl(210_55%_14%)] text-white p-5 md:p-6">
                    <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold text-white/70 mb-2">
                      First-Year Investment
                    </p>
                    <p className="text-3xl md:text-4xl font-display font-black leading-none">
                      {c.firstYearAmount}
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-white/80">
                      Includes setup + annual plan
                    </p>
                  </div>

                  {/* 6. Total first-year savings */}
                  <div className="mt-5 rounded-2xl bg-white/85 border border-[hsl(30_55%_85%)] p-5">
                    <p className="text-2xl md:text-3xl font-display font-bold text-[hsl(210_55%_12%)]">
                      {c.savingsTotal}{" "}
                      <span className="text-sm md:text-base font-medium text-[hsl(210_25%_40%)]">
                        in total first-year savings
                      </span>
                    </p>
                    <ul className="mt-3 space-y-2">
                      {c.savingsRows.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-[hsl(210_30%_25%)]">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-[hsl(22_85%_50%)] shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 7. Best for */}
                  <p className="mt-5 text-sm md:text-base text-[hsl(210_30%_25%)] leading-relaxed">
                    <span className="font-semibold text-[hsl(210_55%_14%)]">Best for: </span>
                    {c.bestFor}
                  </p>

                  {/* 8. CTA inside each card */}
                  <div className="mt-auto pt-6">
                    <PrimaryCTA href="#apply-form" label="Apply for One of the 5 Spots →" full />
                  </div>
                </div>
              ))}
            </div>

            {/* Clarification blocks */}
            <div className="mt-10 grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
              <p className="rounded-2xl border border-[hsl(30_55%_85%)] bg-white/70 p-5 text-sm md:text-base text-[hsl(210_30%_25%)] leading-relaxed">
                The Complimentary Starter Website is included only when you enroll in either the Essentials Special or Growth Special annual plan. It is not available as a standalone website-only offer.
              </p>
              <p className="rounded-2xl border border-[hsl(30_55%_85%)] bg-white/70 p-5 text-sm md:text-base text-[hsl(210_30%_25%)] leading-relaxed">
                The $1,000 Client Growth System Setup covers the configuration of the system behind your website — CRM, lead capture, pipeline setup, email and SMS follow-up, phone and calendar integration, review request automation, and hands-on launch support.
              </p>
            </div>

            <p className="text-center text-sm md:text-base mt-8 text-[hsl(210_30%_25%)] italic max-w-3xl mx-auto">
              This Mother’s Day Appreciation Offer is limited to 5 selected mom-owned businesses and will not be repeated after this campaign closes.
            </p>

            <div className="flex justify-center mt-8">
              <PrimaryCTA href="#apply-form" label="Apply for One of the 5 Spots →" />
            </div>

            {/* Tax footnote */}
            <p className="text-center text-xs md:text-sm mt-6 text-[hsl(210_25%_40%)] max-w-2xl mx-auto">
              Your investment may qualify as a business expense. Please consult your tax advisor.
            </p>
          </div>
        </section>

        {/* 1b. WHAT ONBOARDING SETUP INCLUDES (moved to follow pricing) */}
        <section id="setup" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card p-7 md:p-8">
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-2 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                What the Onboarding Setup Includes
              </h2>
              <p className="text-sm text-muted-foreground mb-5">
                The one-time setup fee covers system configuration — not website design. Your Complimentary Starter Website is included separately.
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

        {/* 2. WHY WE EXTENDED — replaced by inline callout in pricing section */}

        {/* 3. MADE FOR MOM-OWNED SERVICE BUSINESSES LIKE YOURS */}
        <section id="built-for" className="py-16 md:py-20 relative scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Built For Mom-Owned Local Service Businesses
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Made for Mom-Owned Service Businesses Like Yours
              </h2>
              <p className="text-muted-foreground">
                If you run a local service business and juggle it alongside motherhood, this offer was designed with you in mind.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {BUILT_FOR.map((biz) => (
                <div
                  key={biz.label}
                  className="rounded-2xl overflow-hidden border border-border bg-card group hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={biz.img}
                      alt={biz.label}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-base md:text-lg font-semibold text-foreground">{biz.label}</h3>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto">
              Not on the list? If you run a mom-owned local service business, this is still for you.
            </p>
            <p className="text-center text-sm italic text-foreground/80 mt-2 max-w-xl mx-auto">
              Mom of humans, pets, or plants? You qualify. 🌿🐾
            </p>
          </div>
        </section>

        {/* 4. WHY LEADS SLIP THROUGH THE CRACKS */}
        <section id="problem" className="relative overflow-hidden py-20 md:py-24 scroll-mt-20 bg-[linear-gradient(180deg,hsl(210_55%_8%)_0%,hsl(210_50%_11%)_100%)]">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[hsl(22_85%_60%/0.10)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[hsl(280_60%_70%/0.08)] blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                The Problem
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-5 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Why Leads Slip Through the Cracks for Small Businesses
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                You are great at what you do — and you are also the mom, the operator, and the front desk. The family priorities you cannot ignore are exactly when your business is quietly leaking revenue.
              </p>
            </div>

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
                  <div key={row.causeTitle} className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-5 items-stretch">
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
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{row.causeBody}</p>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>

                    <div className="flex gap-3 p-4 md:p-5 rounded-xl border-2 border-primary/40 bg-primary/10 shadow-[0_0_18px_hsl(22_85%_60%/0.12)]">
                      <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                        <LeakIcon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-1">
                          Revenue leak
                        </p>
                        <p className="text-sm md:text-base font-semibold text-foreground leading-snug">{row.leak}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-12 max-w-3xl mx-auto text-center text-base md:text-lg text-muted-foreground leading-relaxed">
              Each one of these is a leak. Together, they cost{" "}
              <span className="text-foreground font-semibold">thousands every month</span>{" "}
              — and most mom-owned businesses don't even realize it.
            </p>
          </div>
        </section>

        {/* LEAKY BUCKET FIX SECTION */}
        <section id="leaky-bucket" className="relative overflow-hidden py-20 md:py-24 scroll-mt-20 bg-[linear-gradient(180deg,hsl(210_50%_11%)_0%,hsl(210_55%_8%)_100%)]">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[hsl(22_85%_60%/0.10)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[hsl(280_60%_70%/0.08)] blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                What You Get
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-5 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                How GrowSmallBiz Helps Your Small Business Stop Losing Leads
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                One connected system — built inside your own account — that captures enquiries, follows up instantly, books calls, and tracks everything. Here's what's included:
              </p>
            </div>

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
                  <p className="mt-4 flex items-center justify-center gap-2 text-center font-display font-semibold text-base md:text-lg bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                    We Fix Your Leaky Bucket
                    <ArrowRight aria-hidden="true" className="hidden lg:inline w-5 h-5 shrink-0 text-[hsl(22_90%_72%)]" />
                    <ArrowDown aria-hidden="true" className="lg:hidden w-5 h-5 shrink-0 text-[hsl(22_90%_72%)]" />
                  </p>
                </div>
              </div>

              {/* The Fix — Minimum AI Package */}
              <div className="order-2 min-w-0">
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
                          <ItemIcon className="w-[18px] h-[18px] text-primary" />
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
        </section>

        {/* 5. SPEED-TO-LEAD ANIMATION */}
        <section className="py-20 scroll-mt-20 bg-background-alt">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Speed-to-Lead
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Follow-Up Call/Email/SMS in Minutes
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                The moment someone submits a form, the system takes over — so the lead is never sitting in a tab waiting for you.
              </p>
            </div>

            <SpeedToLeadFlow />
          </div>
        </section>

        {/* 6. AI WHILE WITH A CLIENT — Voice + Chat in parallel */}
        <section className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                AI That Works While You Work
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                While You’re With a Client, AI Answers Every Call and Chat
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                You can’t pause a massage to grab the phone or reply to a website visitor. Your Voice AI and Website Live Chat handle both — answering questions, qualifying leads, and booking appointments — so no opportunity slips by while you’re in session.
              </p>
            </div>

            <AiBusyMomDemo />
          </div>
        </section>

        {/* 7. WHAT LEAD AUTOMATION HANDLES — visual system map */}
        <section id="automation" className="py-20 scroll-mt-20 bg-background-alt relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                One Connected System
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                What Lead Automation Handles
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                Lead Automation System Included With Your Annual Plan — every piece works together so nothing slips through.
              </p>
            </div>

            <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { icon: Smartphone, label: "Missed-call text-back" },
                { icon: PhoneCall, label: "AI Voice Receptionist" },
                { icon: Bot, label: "AI Livechat" },
                { icon: Mail, label: "Lead form follow-up" },
                { icon: MessageSquare, label: "Email & SMS nurture" },
                { icon: Calendar, label: "Calendar scheduling" },
                { icon: Star, label: "Review requests" },
                { icon: Database, label: "CRM pipeline tracking" },
                { icon: CreditCard, label: "Payment acceptance (when applicable)" },
              ].map((node) => (
                <div
                  key={node.label}
                  className="rounded-2xl border-2 border-[hsl(188_78%_50%_/_0.4)] bg-[hsl(210_45%_18%)] p-5 text-center hover:border-[hsl(188_78%_60%_/_0.8)] hover:shadow-[0_0_30px_hsl(188_78%_45%_/_0.35)] transition-all"
                >
                  <div className="mx-auto w-12 h-12 rounded-xl bg-[hsl(188_78%_41%_/_0.2)] border border-[hsl(188_78%_55%_/_0.4)] flex items-center justify-center mb-3">
                    <node.icon className="w-6 h-6 text-[hsl(188_78%_70%)]" />
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-tight">{node.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. DEMO WEBSITE PREVIEW */}
        <section className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
              See It Live
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
              Preview a Sample Starter Website
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
              See an example of the kind of professional, mobile-friendly service-business website GrowSmallBiz can build as part of this offer.
            </p>
            <div className="mb-8 max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border shadow-[0_30px_80px_-30px_hsl(22_85%_55%/0.35)]">
              <img
                src={demoPreview}
                alt="Sample starter website preview — Lumière Medical Spa demo"
                width={1920}
                height={1006}
                loading="lazy"
                className="w-full h-auto block"
              />
            </div>
            <Button
              size="lg"
              onClick={() => setDemoOpen(true)}
              className="bg-gradient-to-r from-[hsl(22_88%_65%)] via-[hsl(280_30%_60%)] to-[hsl(200_70%_60%)] text-[hsl(220_40%_15%)] font-bold hover:brightness-110 shadow-[0_10px_30px_-8px_hsl(22_85%_55%/0.45)] border-0"
            >
              Preview Demo Website <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-xs text-muted-foreground mt-5 max-w-2xl mx-auto italic">
              Sample website shown for demonstration purposes. Final website is customized for your business, services, and brand.
            </p>
          </div>
        </section>

        {/* 9. REVIEWS + VIDEOS */}
        <section
          id="system"
          className="py-20 scroll-mt-20 relative overflow-hidden bg-[linear-gradient(180deg,hsl(35_55%_94%)_0%,hsl(20_50%_92%)_100%)]"
        >
          <div className="absolute -top-20 right-10 w-72 h-72 rounded-full bg-[hsl(350_70%_80%/0.22)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 left-10 w-72 h-72 rounded-full bg-[hsl(280_50%_82%/0.2)] blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            {/* Heading */}
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 text-[hsl(210_55%_14%)]">
                See It In Action
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                <span className="text-[hsl(210_55%_14%)]">
                  See the System Behind Your
                </span>
                <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-[hsl(22_90%_68%)] via-[hsl(350_75%_72%)] to-[hsl(188_78%_52%)] bg-clip-text text-transparent">
                  Complimentary Starter Website
                </span>
              </h2>
              <p className="text-[hsl(210_30%_25%)] text-base md:text-lg leading-relaxed">
                Your website is only the front door. GrowSmallBiz also sets up the connected system behind it — lead capture, CRM, follow-up automation, reviews, and AI-powered response tools.
              </p>
            </div>

            {/* Content frame */}
            <div className="rounded-3xl border border-[hsl(30_45%_78%)] bg-white/40 backdrop-blur-sm shadow-[0_20px_60px_-20px_hsl(20_50%_30%/0.18)] p-4 md:p-8">
              <div className="mb-12">
                <h3 className="text-xl md:text-2xl font-display font-bold text-center text-[hsl(210_55%_14%)] mb-6">
                  Recent Google Reviews
                </h3>
                <div className="max-w-4xl mx-auto rounded-2xl border border-[hsl(30_45%_82%)] bg-white shadow-[0_12px_40px_-12px_hsl(20_50%_30%/0.15)] p-3 md:p-6 overflow-hidden">
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
                      className="rounded-2xl border border-[hsl(30_45%_82%)] bg-white shadow-[0_12px_40px_-12px_hsl(20_50%_30%/0.15)] overflow-hidden flex flex-col"
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
                        <h4 className="font-display font-bold text-lg text-[hsl(210_55%_14%)] mb-2">{v.title}</h4>
                        <p className="text-sm text-[hsl(210_30%_30%)] leading-relaxed">{v.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. WHAT MAKES THIS DIFFERENT */}
        <section id="different" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Compare
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Why This Is Not Just Another Website Offer
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
                    "A website alone does not follow up with leads.",
                    "A contact form alone does not organize opportunities.",
                    "A phone number alone does not prevent missed calls.",
                    "A happy customer alone does not guarantee a review.",
                    "A CRM alone does not help unless it is set up properly.",
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
            <p className="mt-10 max-w-2xl mx-auto text-center text-base md:text-lg text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">One connected system.</span>{" "}
              Set up for you. Ready to work the day it goes live.
            </p>
          </div>
        </section>

        {/* 11. ROI / PAYS FOR ITSELF */}
        <section
          id="roi"
          className="py-24 md:py-28 scroll-mt-20 relative overflow-hidden bg-[linear-gradient(180deg,hsl(35_55%_94%)_0%,hsl(20_50%_92%)_100%)]"
        >
          <div className="absolute -top-24 right-10 w-80 h-80 rounded-full bg-[hsl(22_85%_70%/0.18)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-10 w-80 h-80 rounded-full bg-[hsl(350_70%_80%/0.18)] blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] mb-4 text-[hsl(210_55%_14%)]">
                Return on Investment
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 leading-tight text-[hsl(210_55%_14%)]">
                One or Two Extra Clients Can{" "}
                <span className="bg-gradient-to-r from-[hsl(22_90%_58%)] via-[hsl(350_75%_62%)] to-[hsl(188_78%_48%)] bg-clip-text text-transparent">
                  Change the Math
                </span>
              </h2>
              <p className="text-[hsl(210_30%_25%)] text-base md:text-lg leading-relaxed">
                For many local service businesses, one additional booked client can offset a meaningful part of the annual investment. The goal is simple: capture more opportunities, respond faster, and reduce the number of leads that quietly disappear.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {roiCards.map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[hsl(30_55%_82%)] bg-white p-8 md:p-9 shadow-[0_20px_60px_-25px_hsl(20_60%_40%/0.25)] flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[hsl(22_85%_60%/0.12)] border border-[hsl(22_85%_60%/0.3)] flex items-center justify-center mb-5">
                    <c.icon className="w-7 h-7 text-[hsl(22_85%_45%)]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-[hsl(210_55%_14%)] mb-3 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-[hsl(210_30%_28%)] text-base leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-10 bg-[linear-gradient(135deg,hsl(210_55%_14%)_0%,hsl(210_50%_18%)_100%)] border border-[hsl(22_85%_60%/0.4)] shadow-[0_30px_80px_-30px_hsl(210_60%_10%/0.5)] text-center">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 leading-snug bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_60%)] bg-clip-text text-transparent">
                The real value is not just more leads. It is fewer lost opportunities.
              </h3>
              <p className="text-base md:text-lg text-[hsl(0_0%_92%)] leading-relaxed max-w-3xl mx-auto">
                When your website, CRM, AI Livechat, missed-call text-back, follow-up, reviews, and booking tools work together, your business has a better chance of turning interest into action.
              </p>
            </div>

            <p className="text-sm text-[hsl(210_25%_35%)] text-center mt-8 max-w-3xl mx-auto leading-relaxed">
              Results vary by business, offer, pricing, responsiveness, and market demand. GrowSmallBiz does not guarantee a specific number of clients or revenue.
            </p>
          </div>
        </section>

        {/* 13. ABOUT GROWSMALLBIZ */}
        <section id="about" className="py-20 scroll-mt-20 bg-background-alt">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                About GrowSmallBiz
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                Built by a Local Agency That Understands Small Business Growth Systems
              </h2>
            </div>
            <div className="rounded-3xl border border-border bg-card p-7 md:p-10 space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                GrowSmallBiz is a Danville-based digital marketing agency built for local service businesses that want more than a website.
              </p>
              <p>
                We help small businesses connect the pieces that usually stay disconnected — website, CRM, lead capture, follow-up automation, reviews, AI Livechat, missed-call text-back, booking, and customer communication.
              </p>
              <p>
                The goal is simple: help local business owners capture more opportunities, respond faster, save time, and turn more inquiries into booked clients.
              </p>
            </div>

            {/* Founder card — photo left, bio right (no CTA buttons) */}
            <div className="mt-8">
              <div
                className="relative rounded-2xl p-8 md:p-10 transition-all duration-300 group"
                style={{
                  backgroundColor: 'hsl(215 40% 13%)',
                  border: '1px solid hsla(25, 90%, 55%, 0.5)',
                  boxShadow: '0 0 50px -10px hsla(25, 90%, 55%, 0.25)',
                }}
              >
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="flex-shrink-0 text-center">
                    <div className="relative inline-block">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-orange-400 to-primary" />
                      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                        <img
                          src={baseContactCTA.image}
                          alt={baseContactCTA.name}
                          width={160}
                          height={160}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h4 className="mt-5 text-lg font-display font-semibold text-foreground">{baseContactCTA.name}</h4>
                    <p className="text-sm text-muted-foreground">{baseContactCTA.role}</p>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 bg-gradient-heading bg-clip-text text-transparent">
                      Meet the Founder
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Founded by Subrata Guha after 30+ years in enterprise technology and marketing systems, GrowSmallBiz brings practical growth infrastructure to small businesses without enterprise complexity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 14. GUARANTEE */}
        <section id="guarantee" className="py-16 md:py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto rounded-2xl border-2 border-primary/60 bg-card p-8 md:p-10 text-center shadow-[0_0_40px_hsl(22_85%_55%/0.25)]">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/15 border border-primary/40 mb-5">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display font-black uppercase tracking-tight text-3xl md:text-5xl mb-4 bg-gradient-to-r from-[hsl(22_90%_60%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent">
                30 Days Money Back Guarantee
              </h2>
              <p className="text-base md:text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
                If you're <strong>not satisfied for any reason</strong> within the first 30 days, we'll refund your money — <strong>no questions asked.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* 15. FAQ */}
        <section
          id="faq"
          className="py-24 md:py-28 scroll-mt-20 relative overflow-hidden bg-[linear-gradient(180deg,hsl(35_55%_94%)_0%,hsl(20_50%_92%)_100%)]"
        >
          <div className="absolute -top-20 left-10 w-72 h-72 rounded-full bg-[hsl(350_70%_80%/0.22)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 right-10 w-72 h-72 rounded-full bg-[hsl(280_50%_82%/0.22)] blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] mb-4 text-[hsl(210_55%_14%)]">
                FAQ
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight text-[hsl(210_55%_14%)]">
                Questions Before{" "}
                <span className="bg-gradient-to-r from-[hsl(22_90%_58%)] via-[hsl(350_75%_62%)] to-[hsl(188_78%_48%)] bg-clip-text text-transparent">
                  You Apply
                </span>
              </h2>
              <p className="text-[hsl(210_30%_25%)] text-base md:text-lg leading-relaxed">
                A few important details about the offer, the website, the setup, and what happens after you apply.
              </p>
            </div>

            <div className="rounded-3xl border border-[hsl(30_55%_82%)] bg-white/85 backdrop-blur-sm shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.25)] p-4 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={f.q}
                    value={`item-${i}`}
                    className="border-[hsl(30_45%_82%)] last:border-b-0"
                  >
                    <AccordionTrigger className="text-left font-display font-semibold text-base md:text-lg text-[hsl(210_55%_14%)] hover:text-[hsl(22_85%_45%)] py-6 px-2 md:px-3">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(210_30%_28%)] px-2 md:px-3 pb-6 leading-relaxed text-base">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="max-w-3xl mx-auto mt-10 rounded-2xl border border-[hsl(22_85%_60%/0.35)] bg-white/75 backdrop-blur-sm p-6 md:p-7 text-center">
              <p className="text-[hsl(210_30%_22%)] text-base md:text-lg leading-relaxed">
                <strong className="text-[hsl(210_55%_14%)]">Still have questions?</strong> Apply first. If your business looks like a fit, we’ll review the details with you before you commit.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <PrimaryCTA href="#apply-form" label="Apply for One of the 5 Spots →" />
            </div>
          </div>
        </section>

        {/* 16. FINAL CTA */}
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
              5 Spots. This Offer Will Not Be Repeated.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you are a mom-owned local service business and you are ready for a professional website, faster follow-up, fewer missed opportunities, and more time back in your day, apply for one of the 5 spots in this Mother’s Day Appreciation Offer.
            </p>

            <div className="rounded-2xl border border-[hsl(22_85%_60%/0.25)] bg-card/70 backdrop-blur p-6 md:p-8 mb-8 text-left shadow-2xl">
              <ul className="space-y-2.5 text-sm">
                {[
                  "Complimentary Starter Website — $2,500 value (annual enrollment only)",
                  "Lead Automation System Included With Your Annual Plan",
                  "Client Growth System Setup reduced to $1,000",
                  "Essentials Special: $1,164/year ($97/month equivalent)",
                  "Growth Special: $2,364/year ($197/month equivalent)",
                  "Extended through May 31, 2026 — or until 5 spots are filled",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center mb-4">
              <PrimaryCTA href="#apply-form" label="Apply for One of the 5 Spots →" />
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              No credit card required. If your business is a fit, we’ll review the offer, confirm the right plan, and send the payment link to reserve your spot.
            </p>
            <p className="text-xs text-muted-foreground italic mt-3">
              Once these 5 spots are filled, this Mother’s Day Appreciation Offer will close.
            </p>
          </div>
        </section>

        {/* DEMO WEBSITE MODAL */}
        {demoOpen && (
          <div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 md:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Sample Starter Website Preview"
            onClick={() => setDemoOpen(false)}
          >
            <div
              className="relative w-full max-w-6xl h-[90vh] bg-background rounded-2xl overflow-hidden border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 inset-x-0 h-12 bg-card border-b border-border flex items-center justify-between px-4 z-10">
                <p className="text-sm font-semibold text-foreground truncate">
                  Sample Starter Website Preview · medspa-demo.growsmallbiz.io
                </p>
                <button
                  type="button"
                  onClick={() => setDemoOpen(false)}
                  className="text-sm font-bold text-muted-foreground hover:text-foreground px-3 py-1 rounded hover:bg-background"
                  aria-label="Close preview"
                >
                  ✕ Close
                </button>
              </div>
              <iframe
                src="https://medspa-demo.growsmallbiz.io/"
                title="Sample Starter Website Preview"
                className="absolute inset-0 w-full h-full pt-12"
                loading="lazy"
              />
            </div>
          </div>
        )}

      </main>

      <div id="apply-form">
        <ConsultationFormSection
        headingOverride="Apply for One of the 5 Spots"
        eyebrowOverride="No Credit Card Required"
        descriptionOverride="Apply for one of the 5 spots in this Mother’s Day Appreciation Offer. If your business is a fit, we’ll review the offer, confirm the right plan, and send the payment link to reserve your spot."
        formUrlOverride="https://api.leadconnectorhq.com/widget/form/hFTESAZxuks4QvC0lcrp"
        iframeHeight="1301px"
        iframeBorderRadius="3px"
        formNameOverride="GrowSmallBiz SaaS Demo Form - Mothers Day"
        dataHeightOverride="1301"
        utmCampaign="mothers-day-cohort"
        sectionClassName="bg-[linear-gradient(135deg,hsl(210_55%_8%)_0%,hsl(210_50%_12%)_55%,hsl(20_45%_18%)_100%)]"
        headingGradientClass="bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)]"
        cardBorderColor="hsl(22 85% 60% / 0.6)"
        cardGlowClass="shadow-[0_0_30px_hsl(22_85%_60%/0.35),0_0_60px_hsl(22_85%_60%/0.2)]"
        heroOverlay
      />

      {/* OUR OTHER SERVICES */}
      <section
        className="py-16 md:py-20 relative overflow-hidden bg-[linear-gradient(180deg,hsl(28_55%_96%)_0%,hsl(20_50%_94%)_100%)]"
        aria-labelledby="other-services-heading"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-[hsl(22_85%_45%)] font-semibold uppercase tracking-wider text-sm mb-3">
              Our Other Services
            </p>
            <h2
              id="other-services-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-4 text-[hsl(210_55%_15%)]"
            >
              Website &amp; Marketing Automation Are the{" "}
              <span className="bg-gradient-to-r from-[hsl(22_90%_55%)] via-[hsl(350_75%_60%)] to-[hsl(188_78%_42%)] bg-clip-text text-transparent">
                Foundation
              </span>
            </h2>
            <p className="text-base text-[hsl(210_30%_30%)] leading-relaxed">
              Your Mother's Day offer covers the foundation — website, marketing automation, and AI receptionist. When you're ready to dominate your local market, we also handle the full suite of AI SEO, local search, and paid advertising.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Globe,
                title: "Website Design",
                desc: "Conversion-focused websites built for speed, SEO, and lead capture.",
                included: true,
              },
              {
                icon: Database,
                title: "Marketing Automation",
                desc: "CRM, missed-call text-back, follow-up workflows, reviews, and booking.",
                included: true,
              },
              {
                icon: Bot,
                title: "AI Receptionist",
                desc: "AI voice and chat agents that answer, qualify, and book leads 24/7.",
                included: true,
              },
              {
                icon: Sparkles,
                title: "Managed AI SEO",
                desc: "Full-service SEO program built for the AI search era.",
              },
              {
                icon: TrendingUp,
                title: "AI Search Optimization",
                desc: "Get cited inside ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
              },
              {
                icon: MessageSquare,
                title: "Answer Engine Optimization (AEO)",
                desc: "Structured content that answers buyer questions and earns featured placements.",
              },
              {
                icon: Zap,
                title: "Generative Engine Optimization (GEO)",
                desc: "Get your business surfaced inside generative AI answers.",
              },
              {
                icon: Users,
                title: "Local SEO",
                desc: "Rank in the Google Map Pack and win nearby high-intent customers.",
              },
              {
                icon: ShieldCheck,
                title: "Authority Building",
                desc: "Brand signals, mentions, and trust that search engines and AI models reward.",
              },
              {
                icon: Star,
                title: "Link Building",
                desc: "Editorial, relevant backlinks that strengthen domain authority.",
              },
              {
                icon: CheckCircle2,
                title: "Technical SEO",
                desc: "Site speed, crawlability, indexing, schema, and Core Web Vitals.",
              },
              {
                icon: Mail,
                title: "On-Page SEO",
                desc: "Keyword-mapped pages and on-page optimization that moves rankings.",
              },
              {
                icon: Target,
                title: "AI Lead Generation",
                desc: "AI-powered prospecting and lead capture across multiple channels.",
              },
              {
                icon: PhoneCall,
                title: "Google Local Services Ads",
                desc: "Google Guaranteed leads at the top of search — pay per qualified contact.",
              },
              {
                icon: Smartphone,
                title: "Google Ads & Facebook Ads",
                desc: "Search and social campaigns built for local service businesses.",
              },
            ].map(({ icon: Icon, title, desc, included }) => (
              <div
                key={title}
                className={`group relative rounded-xl p-4 border transition-all duration-300 hover:-translate-y-1 ${
                  included
                    ? "bg-gradient-to-br from-[hsl(22_90%_96%)] to-[hsl(350_75%_97%)] border-[hsl(22_85%_60%/0.55)] shadow-[0_6px_24px_-10px_hsl(22_85%_50%/0.35)] hover:shadow-[0_14px_40px_-12px_hsl(22_85%_50%/0.45)]"
                    : "bg-white border-[hsl(20_30%_88%)] shadow-[0_4px_20px_-8px_hsl(22_60%_50%/0.15)] hover:shadow-[0_12px_40px_-12px_hsl(22_85%_50%/0.35)] hover:border-[hsl(22_85%_60%/0.5)]"
                }`}
              >
                {included && (
                  <span className="absolute -top-2 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-[hsl(22_85%_55%)] to-[hsl(350_75%_60%)] text-white text-[10px] font-bold uppercase tracking-wide shadow-sm">
                    <CheckCircle2 className="w-3 h-3" /> Included
                  </span>
                )}
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[hsl(22_90%_92%)] to-[hsl(350_75%_94%)] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[hsl(22_85%_45%)]" />
                  </div>
                  <h3 className="text-base font-bold text-[hsl(210_55%_15%)] leading-tight">
                    {title}
                  </h3>
                </div>
                <p className="text-sm text-[hsl(210_25%_35%)] leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <CtaBlock
            headline="Ready to Dominate Your Local Market?"
            subtext="Your website and automation are just the beginning. Let's build the full growth engine."
            strategySessionUrl="#apply-form"
            showPhoneButton={false}
          />
        </div>
      </section>

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
                  <a href="#apply-form" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Apply for a Spot
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
          href="#apply-form"
          className="flex items-center justify-center gap-2 w-[calc(100%-4.5rem)] px-4 py-3 rounded-md bg-gradient-to-r from-[hsl(22_88%_65%)] via-[hsl(280_30%_60%)] to-[hsl(200_70%_60%)] text-[hsl(220_40%_15%)] font-bold shadow-[0_10px_30px_-8px_hsl(22_85%_55%/0.45)] text-sm"
        >
          {PRIMARY_CTA_LABEL} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default MothersDayCohort;
