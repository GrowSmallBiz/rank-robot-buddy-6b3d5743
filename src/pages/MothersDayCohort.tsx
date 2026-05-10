import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
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
} from "lucide-react";
import heroImage from "@/assets/mothers-day-cohort-hero.jpg";

const PAGE_PATH = "/mothers-day-mom-owned-business-cohort/";
const PAGE_URL = `https://growsmallbiz.io${PAGE_PATH}`;
const APPLICATION_FORM_URL =
  "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const PAGE_TITLE = "Mother’s Day Mom-Owned Business Cohort | GrowSmallBiz";
const PAGE_DESC =
  "Apply for GrowSmallBiz’s Mother’s Day cohort for mom-owned local service businesses. Website build included, plus CRM, lead capture, follow-up automation, reviews, and AI-powered response tools.";


const PRIMARY_CTA_LABEL = "Apply for One of the 5 Spots";
const SECONDARY_CTA_LABEL = "See What’s Included";

const sectionNav = [
  { id: "offer", label: "The Offer" },
  { id: "pricing", label: "Pricing" },
  { id: "leads", label: "Stop Losing Leads" },
  { id: "guarantee", label: "Guarantee" },
  { id: "fit", label: "Who It’s For" },
  { id: "how", label: "How It Works" },
  { id: "faq", label: "FAQ" },
  { id: "apply", label: "Apply" },
];

const PrimaryCTA = ({
  href,
  className = "",
  full = false,
}: {
  href: string;
  className?: string;
  full?: boolean;
}) => (
  <Button
    asChild
    size="lg"
    className={`bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg ${
      full ? "w-full" : ""
    } ${className}`}
  >
    <a href={href} target="_blank" rel="noopener noreferrer">
      {PRIMARY_CTA_LABEL} <ArrowRight className="w-5 h-5 ml-2" />
    </a>
  </Button>
);

const MothersDayCohort = () => {
  const { buildUrl } = useUtm();
  const ctaUrl = buildUrl(APPLICATION_FORM_URL, "mothers-day-cohort");

  const offerWebsite = [
    "5-page professional website: Home, About, Services, Contact, plus 1 custom page",
    "Mobile-friendly and desktop-friendly layout",
    "SEO, AI search, and local visibility foundation from day one",
    "Lead capture connected to your inbox and CRM",
    "Google Business Profile setup or cleanup",
    "Hosting and security included",
    "Typical launch target: about 14 days after onboarding materials are complete",
  ];

  const offerSetup = [
    { icon: Sparkles, text: "Brand and business discovery" },
    { icon: Database, text: "CRM setup so every inquiry can be tracked" },
    { icon: Globe, text: "Lead forms connected to your pipeline" },
    { icon: MessageSquare, text: "Email and SMS follow-up automation" },
    { icon: PhoneCall, text: "Phone, calendar, and Google integration" },
    { icon: Star, text: "Review request automation" },
    { icon: Bot, text: "AI assistant trained on your business information" },
    { icon: ShieldCheck, text: "Hands-on launch support" },
  ];

  const starterIncludes = [
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

  const realLifeBullets = [
    "Respond faster when someone reaches out",
    "Capture leads even when you are unavailable",
    "Follow up automatically instead of relying on memory",
    "Request reviews consistently",
    "Keep conversations, contacts, and opportunities organized",
  ];

  const leadCards = [
    {
      icon: PhoneCall,
      title: "Missed Calls Become Lost Customers",
      body: "If someone calls and no one answers, they may move to the next business. With the Growth plan, your AI Voice Receptionist can answer, gather information, and help keep the lead from disappearing.",
    },
    {
      icon: Smartphone,
      title: "Missed Calls Get Instant Text Replies",
      body: "When a call is missed, an automated text can respond right away. That small speed-to-lead advantage can make a major difference in whether a prospect continues the conversation.",
    },
    {
      icon: Globe,
      title: "Your Website Works After Hours",
      body: "Your website should not simply explain what you do. It should help capture leads, answer common questions, and guide visitors toward taking action.",
    },
    {
      icon: Star,
      title: "Reviews Are Requested Automatically",
      body: "A strong reputation helps future customers trust you faster. Automated review requests make it easier to turn happy customers into public proof.",
    },
    {
      icon: Inbox,
      title: "Everything Stays in One Place",
      body: "Website leads, calls, chats, forms, and follow-ups are easier to manage when they feed into one connected system instead of living across disconnected tools.",
    },
  ];

  const goodFit = [
    "A mom-owned local service business",
    "Already operating for at least 6 months",
    "Ready for a more professional online presence",
    "Losing leads because of missed calls, slow follow-up, or scattered tools",
    "Interested in a system, not just a website",
    "Comfortable with a 12-month growth program",
  ];

  const notFit = [
    "Pre-revenue or still validating your business idea",
    "Looking only for a one-time website project",
    "Not ready to respond to new leads",
    "Not comfortable with a 12-month commitment",
    "Looking for the cheapest possible website",
  ];

  const differentBullets = [
    "A website alone does not follow up with leads",
    "A contact form alone does not organize opportunities",
    "A phone number alone does not prevent missed calls",
    "A happy customer alone does not guarantee a review",
    "A CRM alone does not help unless it is set up properly",
  ];

  const steps = [
    "Apply online in 2–3 minutes",
    "Schedule a short discovery call",
    "Confirm fit and choose your plan",
    "Complete onboarding",
    "Website launches in about 14 days after required materials are complete",
    "Your client growth system goes live",
  ];

  const faqs = [
    {
      q: "What qualifies as mom-owned?",
      a: "For this cohort, mom-owned means the business is owned or co-owned by a mother who is actively involved in running the business.",
    },
    {
      q: "What types of businesses are a good fit?",
      a: "This offer is best for local service businesses such as wellness providers, beauty businesses, home service providers, consultants, coaches, professional services, photographers, event services, and similar client-based businesses.",
    },
    {
      q: "What is included in onboarding?",
      a: "Onboarding includes discovery, CRM setup, lead capture setup, follow-up automation, review automation, phone/calendar/Google integration, AI assistant setup, and hands-on launch support.",
    },
    {
      q: "What is not included?",
      a: "This cohort does not include custom software development, complex e-commerce builds, advanced membership portals, paid ads management, ongoing SEO content creation, or unlimited custom pages. Those can be discussed separately if needed.",
    },
    {
      q: "Who owns the website?",
      a: "You own your website content and business assets. Hosting, CRM, automation, and AI tools are provided through the GrowSmallBiz program while your subscription is active.",
    },
    {
      q: "Can I cancel?",
      a: "This is a 12-month growth program. The onboarding guarantee protects the first 30 days of the onboarding experience, but the program is designed for businesses ready to commit to building a stronger marketing foundation over time.",
    },
    {
      q: "When does billing start?",
      a: "Your monthly or annual subscription begins when your website goes live, not before.",
    },
    {
      q: "What happens after 12 months?",
      a: "After 12 months, you can continue on a monthly plan, upgrade your system, add marketing services, or discuss the best next step based on your business goals.",
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
    name: "Mother’s Day Mom-Owned Business Cohort",
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

  // Soft Mother's Day accent palette (campaign-only, page-scoped)
  const softGrad =
    "bg-[linear-gradient(135deg,rgba(255,232,222,0.18)_0%,rgba(244,225,240,0.14)_50%,rgba(231,225,245,0.18)_100%)]";

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

      {/* Minimal campaign top bar — brand + section anchors only, NO main nav */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-display font-semibold text-foreground text-sm md:text-base">
              GrowSmallBiz · Mother’s Day Cohort
            </span>
          </div>
          <nav
            aria-label="On this page"
            className="hidden lg:flex items-center gap-5 text-sm text-muted-foreground"
          >
            {sectionNav.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="hover:text-primary transition-colors"
              >
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
            Apply <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      <main id="main-content">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,hsl(210_55%_8%)_0%,hsl(210_50%_12%)_55%,hsl(20_45%_18%)_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,210,190,0.16),transparent_55%)] pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[hsl(18_85%_65%/0.18)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[hsl(280_60%_70%/0.14)] blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 py-14 lg:py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(350_70%_85%/0.15)] border border-[hsl(350_70%_75%/0.35)] text-foreground/90 text-xs md:text-sm font-medium mb-5">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  Mother’s Day Cohort · 5 Spots for Mom-Owned Local Service Businesses
                </div>

                <h1 className="text-[1.875rem] md:text-[2.375rem] lg:text-5xl font-display font-bold leading-[1.15] tracking-tight mb-6">
                  Get a Professional Website —{" "}
                  <span className="bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(280_55%_82%)] bg-clip-text text-transparent">
                    and the Follow-Up System
                  </span>{" "}
                  That Helps Turn Inquiries Into Clients
                </h1>

                <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                  In honor of Mother’s Day, GrowSmallBiz is opening 5 onboarding
                  spots for mom-owned local service businesses. Your website
                  build is included, and we set up the system behind it — lead
                  capture, CRM, follow-up automation, reviews, and AI-powered
                  response tools — so more opportunities turn into real
                  conversations and paying clients.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8">
                  <PrimaryCTA href={ctaUrl} />
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-border"
                  >
                    <a href="#offer">{SECONDARY_CTA_LABEL}</a>
                  </Button>
                </div>

                <ul className="grid sm:grid-cols-3 gap-3 text-sm">
                  {[
                    "Capture website, phone, and message leads in one place",
                    "Respond faster with automation and AI-assisted follow-up",
                    "Turn happy customers into more 5-star reviews",
                  ].map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs text-muted-foreground">
                  Danville-Based · Chamber Member · Built for Local Service
                  Businesses · 30-Day Onboarding Guarantee
                </p>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-[linear-gradient(135deg,hsl(22_85%_68%/0.35),hsl(350_75%_80%/0.28),hsl(280_55%_80%/0.28))] blur-2xl pointer-events-none" />
                <div className="absolute -top-3 -left-3 z-20 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-xl">
                  5 Spots
                </div>
                <div className="absolute -bottom-3 -right-3 z-20 px-4 py-2 rounded-full bg-[hsl(40_70%_96%)] text-[hsl(210_55%_12%)] text-sm font-semibold shadow-xl border border-[hsl(30_60%_80%)]">
                  Applications Close May 31, 2026
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
              </div>
            </div>
          </div>
        </section>

        {/* WHY THIS OFFER EXISTS */}
        <section className="py-20 relative overflow-hidden bg-[linear-gradient(180deg,hsl(35_60%_95%)_0%,hsl(20_55%_92%)_100%)]">
          <div className="absolute -top-20 right-10 w-72 h-72 rounded-full bg-[hsl(350_70%_80%/0.28)] blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-[hsl(280_50%_82%/0.25)] blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-[hsl(20_85%_55%/0.4)] to-transparent pointer-events-none hidden md:block" />
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[hsl(20_85%_42%)] mb-3">A Note From GrowSmallBiz</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[hsl(210_55%_12%)]">
                Why This Offer Exists
              </h2>
            </div>
            <div className="rounded-3xl border border-[hsl(30_55%_82%)] bg-white/75 backdrop-blur-sm shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.25)] p-8 md:p-12 space-y-5 text-lg text-[hsl(210_30%_22%)] leading-relaxed">
              <p>
                Mom-owned businesses are already doing the hard part: earning
                trust, serving clients, building relationships, and keeping the
                business moving while life keeps moving too.
              </p>
              <blockquote className="relative pl-6 py-3 my-2 text-[hsl(210_55%_14%)] text-xl md:text-2xl font-display italic before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 before:rounded-full before:bg-[linear-gradient(180deg,hsl(20_85%_60%),hsl(350_70%_70%),hsl(280_55%_72%))]">
                The problem is usually not effort. It is the system around the
                business.
              </blockquote>
              <p>
                A website may look nice but fail to capture leads. Calls may
                come in while you are with a client, driving, or handling
                family responsibilities. Review requests get forgotten.
                Follow-up depends on memory. Messages arrive from different
                places and get lost.
              </p>
              <p className="text-[hsl(210_55%_14%)] font-medium">That is why this Mother’s Day cohort exists.</p>
              <p>
                GrowSmallBiz is reserving 5 onboarding spots for mom-owned
                local service businesses that want a stronger online presence
                and a better way to handle leads — without trying to become
                their own marketing department.
              </p>
              <p>
                If you are ready to grow with a more organized system behind
                your business, this offer was built for you.
              </p>
            </div>
          </div>
        </section>

        {/* THE CORE OFFER */}
        <section id="offer" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
                The Core Offer
              </h2>
              <p className="text-muted-foreground">
                Two things, set up together, working as one system.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Website */}
              <div className="relative rounded-2xl border border-border bg-card p-8 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-[linear-gradient(90deg,hsl(22_85%_60%),hsl(350_70%_72%),hsl(280_55%_72%))]" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(22_85%_60%/0.15)] border border-[hsl(22_85%_60%/0.3)] flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold">
                    Website Build Included — No Separate Design Fee
                  </h3>
                </div>
                <p className="text-muted-foreground mb-5">
                  We build your website for you using an AI-assisted,
                  human-reviewed workflow, so you do not have to manage design,
                  tech, layout, hosting, or setup.
                </p>
                <p className="font-semibold mb-3">Included with your program:</p>
                <ul className="space-y-2 mb-6">
                  {offerWebsite.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg bg-[hsl(35_50%_92%/0.08)] border border-[hsl(30_55%_70%/0.18)] p-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Why the website build is included:
                  </span>{" "}
                  We use an efficient AI-assisted build process to reduce the
                  cost of website production, so the focus can shift to what
                  actually grows the business: capturing leads, following up
                  faster, earning reviews, and tracking opportunities.
                </div>
              </div>

              {/* Setup */}
              <div className="relative rounded-2xl border border-border bg-card p-8 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-[linear-gradient(90deg,hsl(280_55%_72%),hsl(350_70%_72%),hsl(22_85%_60%))]" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(280_55%_70%/0.15)] border border-[hsl(280_55%_70%/0.3)] flex items-center justify-center">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold">
                    Client Growth System Setup — $1,000 Cohort Onboarding
                  </h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  Standard onboarding is <span className="line-through">$1,500</span>. For this Mother’s Day cohort,
                  onboarding is reduced to <span className="font-bold text-foreground">$1,000</span>.
                </p>
                <p className="text-muted-foreground mb-5">
                  This is where we configure the system behind your website so
                  new inquiries are easier to capture, track, follow up with,
                  and convert.
                </p>
                <p className="font-semibold mb-3">Your setup includes:</p>
                <ul className="space-y-2.5 mb-6">
                  {offerSetup.map((s) => (
                    <li key={s.text} className="flex items-start gap-3 text-sm">
                      <s.icon className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <span>{s.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bonus */}
            <div className="max-w-4xl mx-auto mt-8">
              <div className="rounded-2xl p-6 md:p-8 border border-[hsl(350_70%_75%/0.4)] bg-[linear-gradient(135deg,hsl(350_80%_92%/0.12),hsl(30_80%_88%/0.12))]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(350_70%_75%/0.25)] flex items-center justify-center shrink-0">
                    <Gift className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold mb-3">
                      Mother’s Day Annual Bonus
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      For businesses that choose the annual option, GrowSmallBiz
                      will also include:
                    </p>
                    <ul className="space-y-1.5 mb-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                        <span>$100 spa gift certificate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                        <span>No blackout dates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                        <span>Sent with a handwritten note</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground italic">
                      A small thank-you for the work you do inside your
                      business and outside of it.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <PrimaryCTA href={ctaUrl} />
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-20 bg-background-alt scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                Choose Your Program
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
                Two Ways to Run Your Business Online
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the level of support that fits how you want your leads
                handled.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Starter */}
              <div className="rounded-2xl border border-border bg-card p-8 flex flex-col">
                <h3 className="text-2xl font-display font-bold mb-1">Starter</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">$197</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  For businesses that want a professional website, organized
                  lead capture, and a strong foundation — while still handling
                  most conversations manually.
                </p>
                <p className="font-semibold mb-3">Includes:</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {starterIncludes.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mb-5">
                  <span className="font-semibold text-foreground">
                    Best for:
                  </span>{" "}
                  Businesses that want to look professional, stay organized, and
                  start collecting reviews consistently.
                </p>
                <PrimaryCTA href={ctaUrl} full />
              </div>

              {/* Growth */}
              <div className="relative lg:-my-2 rounded-2xl border-2 border-primary bg-card p-8 flex flex-col shadow-[0_30px_70px_-20px_hsl(22_85%_50%/0.45)] ring-1 ring-[hsl(22_85%_60%/0.3)]">
                <div className="absolute -inset-px rounded-2xl bg-[linear-gradient(135deg,hsl(22_85%_60%/0.18),transparent_60%)] pointer-events-none" />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide shadow-lg">
                  MOST POPULAR
                </div>
                <div className="relative">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-2xl font-display font-bold">Growth</h3>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-primary px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30">Recommended</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold">$297</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    For businesses that want more automation and faster response
                    when leads call, message, or visit the website.
                  </p>
                  <p className="font-semibold mb-3">Everything in Starter, plus:</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {growthExtras.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <Sparkles className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                        <span className="font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mb-5">
                    <span className="font-semibold text-foreground">
                      Best for:
                    </span>{" "}
                    Businesses that miss calls, receive after-hours inquiries, or
                    want leads handled faster without hiring a full-time
                    receptionist.
                  </p>
                  <PrimaryCTA href={ctaUrl} full />
                </div>
              </div>
            </div>

            {/* What this means in real life */}
            <div className="max-w-4xl mx-auto mt-12 rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl md:text-2xl font-display font-bold mb-4">
                What This Means in Real Life
              </h3>
              <p className="text-muted-foreground mb-4">
                You do not need more scattered tools. You need fewer missed
                opportunities.
              </p>
              <p className="font-semibold mb-3">
                With the right system in place, your business can:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 mb-4">
                {realLifeBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground italic">
                For many local service businesses, just 1–2 additional clients
                per month can cover the monthly subscription.
              </p>
            </div>

            {/* Investment Details */}
            <div className="max-w-4xl mx-auto mt-8 rounded-2xl border border-border bg-background p-8">
              <h3 className="text-xl md:text-2xl font-display font-bold mb-5">
                Investment Details
              </h3>
              <dl className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-foreground">
                    Cohort onboarding:
                  </dt>
                  <dd className="text-muted-foreground">
                    $1,000 <span className="line-through">Normally $1,500</span>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">
                    Program length:
                  </dt>
                  <dd className="text-muted-foreground">
                    12-month growth program
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">
                    Monthly options:
                  </dt>
                  <dd className="text-muted-foreground">
                    Starter: $197/month · Growth: $297/month
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">
                    Annual options:
                  </dt>
                  <dd className="text-muted-foreground">
                    Starter: $1,970/year · Growth: $2,970/year
                  </dd>
                </div>
              </dl>
              <p className="mt-5 text-sm">
                <span className="font-semibold">
                  Annual plans include the Mother’s Day spa bonus.
                </span>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Billing note:
                </span>{" "}
                Your monthly or annual subscription begins when your website
                goes live — not before.
              </p>
            </div>
          </div>
        </section>

        {/* STOP LOSING LEADS */}
        <section id="leads" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Stop Losing Leads You Already Earned
              </h2>
              <p className="text-muted-foreground">
                Your business may already be getting opportunities. The issue is
                that many of those opportunities disappear before they become
                paying clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {leadCards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GUARANTEE */}
        <section
          id="guarantee"
          className="py-20 scroll-mt-20 relative overflow-hidden bg-[linear-gradient(180deg,hsl(35_55%_94%)_0%,hsl(30_50%_90%)_100%)]"
        >
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[hsl(22_85%_70%/0.2)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[hsl(280_50%_82%/0.2)] blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            <div className="relative rounded-3xl border border-[hsl(30_55%_75%)] bg-white/85 backdrop-blur-sm p-8 md:p-12 text-center shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.3)]">
              <div className="absolute top-0 inset-x-0 h-1.5 rounded-t-3xl bg-[linear-gradient(90deg,hsl(22_85%_60%),hsl(350_70%_72%),hsl(280_55%_72%))]" />
              <div className="relative w-20 h-20 mx-auto mb-5">
                <div className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,hsl(22_85%_60%/0.25),hsl(350_70%_75%/0.25))] blur-md" />
                <div className="relative w-20 h-20 rounded-full bg-white border border-[hsl(30_55%_80%)] flex items-center justify-center shadow-md">
                  <ShieldCheck className="w-9 h-9 text-[hsl(22_85%_50%)]" />
                </div>
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[hsl(22_85%_42%)] mb-2">
                30-Day Onboarding Guarantee
              </p>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-[hsl(210_55%_12%)]">
                Your Onboarding Is Protected
              </h2>
              <p className="text-[hsl(210_30%_25%)] mb-3">
                If your website is not delivered, or if you are not satisfied
                with the onboarding experience within the first 30 days, your
                onboarding fee will be refunded.
              </p>
              <p className="text-sm text-[hsl(210_25%_40%)]">
                This guarantee is designed to remove risk while keeping the
                program focused on serious business owners who are ready to
                launch.
              </p>
              <div className="mt-7 flex justify-center">
                <PrimaryCTA href={ctaUrl} />
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section id="fit" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Who This Is For
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-primary/40 bg-card p-8">
                <h3 className="text-xl font-display font-bold mb-5">
                  This Is a Good Fit If You Are:
                </h3>
                <ul className="space-y-3">
                  {goodFit.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-background-alt p-8">
                <h3 className="text-xl font-display font-bold mb-5">
                  This Is Not the Right Fit If You Are:
                </h3>
                <ul className="space-y-3">
                  {notFit.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <XCircle className="w-5 h-5 mt-0.5 text-muted-foreground shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-20 bg-background-alt">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
              About GrowSmallBiz
            </h2>
            <div className="relative rounded-2xl border border-border bg-card p-8 md:p-10 overflow-hidden shadow-xl">
              <div className="absolute top-0 inset-x-0 h-1 bg-[linear-gradient(90deg,hsl(22_85%_60%),hsl(350_70%_72%),hsl(280_55%_72%))]" />
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[hsl(22_85%_60%/0.08)] blur-3xl pointer-events-none" />
              <div className="relative flex flex-col sm:flex-row items-start gap-5 mb-6">
                <div className="relative shrink-0">
                  <div className="absolute -inset-1 rounded-full bg-[linear-gradient(135deg,hsl(22_85%_60%),hsl(350_70%_72%),hsl(280_55%_72%))] blur-sm opacity-70" />
                  <div className="relative w-16 h-16 rounded-full bg-card border-2 border-[hsl(22_85%_60%/0.5)] flex items-center justify-center">
                    <span className="text-xl font-display font-bold text-primary">
                      SG
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-display font-bold text-lg">Subrata Guha</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Founder · Danville, CA
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-primary px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30">Danville-Based</span>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-foreground px-2 py-0.5 rounded-full bg-[hsl(280_55%_72%/0.15)] border border-[hsl(280_55%_72%/0.35)]">Chamber Member</span>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-foreground px-2 py-0.5 rounded-full bg-[hsl(350_70%_72%/0.15)] border border-[hsl(350_70%_72%/0.35)]">30+ Years Experience</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground relative">
                <p>
                  GrowSmallBiz is a Danville-based digital marketing agency
                  built for local service businesses.
                </p>
                <p>
                  Founded by Subrata Guha after 30+ years in enterprise
                  marketing and technology, GrowSmallBiz brings practical
                  marketing systems to small businesses without enterprise
                  complexity.
                </p>
                <p>
                  The focus is simple: help local businesses capture more leads,
                  respond faster, follow up consistently, build stronger
                  reputations, and turn more opportunities into customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT MAKES THIS DIFFERENT */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
                What Makes This Different
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8 items-stretch">
              <div className="relative rounded-2xl border border-dashed border-border bg-background-alt p-8 opacity-90">
                <div className="absolute top-4 right-4">
                  <XCircle className="w-5 h-5 text-muted-foreground/60" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Most website offers
                </p>
                <p className="text-2xl font-display font-bold text-muted-foreground/90 mb-5">
                  Give you a website.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground/80">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-muted-foreground/60" />Just a website</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-muted-foreground/60" />No CRM</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-muted-foreground/60" />No follow-up automation</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-muted-foreground/60" />No AI response tools</li>
                </ul>
              </div>
              <div className="relative rounded-2xl border-2 border-primary bg-card p-8 shadow-[0_30px_70px_-20px_hsl(22_85%_50%/0.4)] overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-[linear-gradient(90deg,hsl(22_85%_60%),hsl(350_70%_72%),hsl(280_55%_72%))]" />
                <div className="absolute top-4 right-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                  This program
                </p>
                <p className="text-2xl font-display font-bold mb-5">
                  Gives you the system behind the website.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />Website + CRM</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />Lead capture & follow-up automation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />Review automation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />AI-powered response tools</li>
                </ul>
              </div>
            </div>
            <ul className="space-y-3 max-w-3xl mx-auto">
              {differentBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 mt-0.5 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-center mt-8 text-muted-foreground max-w-3xl mx-auto">
              GrowSmallBiz combines the website, CRM, automation, review system,
              and AI-powered response tools into one connected setup for local
              service businesses.
            </p>
            <p className="text-center mt-3 font-semibold">
              Built for business owners — not marketing teams.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="py-20 bg-background-alt scroll-mt-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              How It Works
            </h2>
            <ol className="space-y-4">
              {steps.map((s, i) => (
                <li
                  key={s}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    {i + 1}
                  </div>
                  <p className="pt-1.5">{s}</p>
                </li>
              ))}
            </ol>
            <p className="text-center mt-6 text-sm text-muted-foreground italic">
              Spots are filled first-paid after the discovery call.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 scroll-mt-20 relative overflow-hidden bg-[linear-gradient(180deg,hsl(35_55%_94%)_0%,hsl(20_50%_92%)_100%)]">
          <div className="absolute -top-20 left-10 w-72 h-72 rounded-full bg-[hsl(350_70%_80%/0.22)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 right-10 w-72 h-72 rounded-full bg-[hsl(280_50%_82%/0.22)] blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[hsl(22_85%_42%)] mb-3">Common Questions</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[hsl(210_55%_12%)]">
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

        {/* FINAL CTA */}
        <section
          id="apply"
          className="relative py-20 scroll-mt-20 overflow-hidden bg-[linear-gradient(135deg,hsl(210_50%_10%),hsl(210_55%_14%))]"
        >
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[hsl(350_70%_70%/0.10)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[hsl(280_60%_70%/0.10)] blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 max-w-3xl relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-semibold mb-5">
              <Clock className="w-4 h-4" />5 Spots. Applications Close May 31, 2026.
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-5 text-foreground">
              Apply for One of the 5 Mother’s Day Cohort Spots
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you are ready to build a stronger online presence and a better
              follow-up system behind your business, apply for one of the 5
              Mother’s Day cohort spots.
            </p>

            <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 md:p-8 mb-8 text-left">
              <p className="font-semibold mb-4 text-center">
                What happens next:
              </p>
              <ol className="space-y-2.5 text-sm">
                {[
                  "Complete the quick application",
                  "Schedule a discovery call",
                  "Confirm fit",
                  "Choose your plan",
                  "Begin onboarding",
                ].map((s, i) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
              <p className="text-center text-sm text-muted-foreground mt-4 italic">
                No pressure. No obligation.
              </p>
            </div>

            <div className="flex justify-center mb-4">
              <PrimaryCTA href={ctaUrl} />
            </div>
            <p className="text-xs text-muted-foreground">
              Spots are filled first-paid after the discovery call.
            </p>
          </div>
        </section>
      </main>

      {/* MINIMAL FOOTER */}
      <footer className="bg-card border-t border-border" role="contentinfo">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} GrowSmallBiz. All rights reserved.</p>
            <nav aria-label="Legal" className="flex items-center gap-6">
              <Link to="/terms-of-service/" className="hover:text-primary transition-colors">
                Terms &amp; Conditions
              </Link>
              <Link to="/privacy-policy/" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-background/95 backdrop-blur border-t border-border">
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-md bg-primary text-primary-foreground font-semibold shadow-lg"
        >
          {PRIMARY_CTA_LABEL} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default MothersDayCohort;
