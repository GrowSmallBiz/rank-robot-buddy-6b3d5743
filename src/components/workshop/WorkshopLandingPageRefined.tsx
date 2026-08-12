import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { WorkbookMockup } from "@/components/workshop/WorkbookMockup";

import {
  Sparkles,
  Search,
  MapPin,
  MessageSquare,
  Bot,
  Compass,
  ListChecks,
  ArrowRight,
  CalendarDays,
  Clock,
  Ticket,
  Video,
  Building2,
  CheckCircle2,
  XCircle,
  Wrench,
  Store,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeader } from "@/components/services/SectionHeader";
import { FAQSection } from "@/components/sections/FAQSection";
import { baseContactCTA } from "@/config/contactCTA";
import growsmallbizLogo from "@/assets/growsmallbiz-logo.webp";

import visibilityDashboard from "@/assets/workshop-ai-visibility-dashboard.webp";
import citationsDashboard from "@/assets/workshop-ai-citations-dashboard.webp";
import shiftKeywordsImg from "@/assets/shift-keywords-to-conversations.webp";
import shiftGrowthImg from "@/assets/shift-search-growth-rate.webp";
import shiftShareImg from "@/assets/shift-share-of-search.webp";

const BASE_URL = "https://growsmallbiz.io";

export type WorkshopFormat = "online" | "in-person";

interface WorkshopLandingPageProps {
  format: WorkshopFormat;
  /** Canonical path, with trailing slash. */
  path: string;
}

/* ─── Content shared by both formats ─────────────────────────────── */

const platforms = [
  {
    icon: Search,
    name: "Google AI Overviews",
    copy: "The AI summary that now sits above the blue links — and answers the question before anyone scrolls.",
  },
  {
    icon: MessageSquare,
    name: "ChatGPT",
    copy: "People ask it for a recommendation in plain language and act on the handful of names it gives back.",
  },
  {
    icon: Sparkles,
    name: "Google Gemini",
    copy: "Pulls from your profile, your reviews, and your site to decide whether you belong in the shortlist.",
  },
  {
    icon: Compass,
    name: "Perplexity",
    copy: "An answer engine that cites its sources — so the businesses it links to get the click and the credit.",
  },
  {
    icon: Bot,
    name: "Claude",
    copy: "Increasingly used for research and shortlisting, drawing on the web content it can verify.",
  },
  {
    icon: MapPin,
    name: "Grok & Local AI Search",
    copy: "Real-time, social-fed answers plus the map-pack results that still drive most 'near me' calls.",
  },
];

const oldWay = [
  "Someone types a keyword and sees ten blue links.",
  "You compete for position — page one, then top three.",
  "Being on page one usually means being seen.",
  "Traffic arrives, and you get a chance to convince the visitor.",
  "You measure rankings, clicks, and impressions.",
];

const newWay = [
  "Someone asks a full question and gets one written answer.",
  "You compete to be mentioned inside that answer at all.",
  "There is no page two — there are three or four names.",
  "The AI does the convincing, using whatever it can find about you.",
  "You measure mentions, citations, and whether you were named.",
];

const agenda = [
  {
    icon: Search,
    title: "How AI search actually decides who to name",
    copy: "A plain-English walkthrough of where these tools get their information — your website, your Google Business Profile, your reviews, directories, and third-party mentions — and how they weigh it.",
  },
  {
    icon: ListChecks,
    title: "Check your own AI visibility live",
    copy: "You will run the same prompts we use, across multiple AI platforms, and see with your own eyes whether your business gets named for the services you sell in the area you serve.",
  },
  {
    icon: Wrench,
    title: "The signals you can fix yourself this month",
    copy: "Entity consistency, service and location clarity, review substance, structured answers on your own pages, and citation cleanup — what each one is, why AI reads it, and how to fix it without a developer.",
  },
  {
    icon: MessageSquare,
    title: "Writing pages an AI can quote",
    copy: "Why the way you format an answer matters as much as the answer itself, and how to structure a service page so an AI can lift a clean, accurate sentence about your business out of it.",
  },
  {
    icon: MapPin,
    title: "Local specifics that decide 'near me' answers",
    copy: "Service areas, categories, hours, photos, and reviews — the local layer AI leans on hardest when the question ends with 'near me'.",
  },
  {
    icon: ListChecks,
    title: "Live Q&A",
    copy: "Bring your business. We will look at real examples from the room and talk through what to do first.",
  },
];

const forWho = [
  {
    icon: Store,
    title: "Local service business owners",
    points: [
      "Home services, health and wellness practices, and professional service firms",
      "You rely on being found by people nearby who need you today",
      "You have a website and a Google Business Profile, but no idea what AI says about you",
      "You want to understand the shift before you spend money on it",
    ],
  },
  {
    icon: Wrench,
    title: "DIY marketers and in-house SEOs",
    points: [
      "You already manage your own SEO, content, or listings",
      "You know traditional SEO but have not adapted it for answer engines",
      "You want the checks and the fixes, not a pitch",
      "You would rather do the work yourself with the right roadmap",
    ],
  },
];

const faqs = [
  {
    question: "Is the workshop really free?",
    answer:
      "Yes. There is no cost to attend and no purchase required. It is an educational session about how AI search works and what you can do about it.",
  },
  {
    question: "Who should attend?",
    answer:
      "Local service business owners, DIY marketers, and in-house SEOs who own the outcome of their own marketing and want to understand how AI platforms decide which businesses to recommend.",
  },
  {
    question: "Do I need any technical or SEO background?",
    answer:
      "No. Everything is explained in plain language. If you can edit your website and log in to your Google Business Profile, you can act on everything covered.",
  },
  {
    question: "Will the session be recorded?",
    answer:
      "The live walkthrough and Q&A are best experienced live, and the takeaway playbook is only sent to people who attend through to the end.",
  },
  {
    question: "Do I get anything to take away?",
    answer:
      "Yes. Everyone who stays to the end receives the AI Visibility Playbook — a digital, step-by-step guide covering the same checks and fixes we walk through together, so you can repeat them on your own schedule.",
  },
  {
    question: "Is this a sales pitch in disguise?",
    answer:
      "No. The session is built to teach. You will leave able to check your own AI visibility and fix the most common gaps yourself. If you later want help implementing it, GrowSmallBiz does that work — but nothing in the workshop depends on hiring anyone.",
  },
  {
    question: "What is AI visibility, in one sentence?",
    answer:
      "AI visibility is whether AI assistants and AI-powered search results mention, recommend, and cite your business when someone asks a question your business could answer.",
  },
  {
    question: "How is this different from regular SEO?",
    answer:
      "Traditional SEO competes for a ranked position in a list of links. AI visibility competes to be included in a single written answer that names only a few businesses. The underlying signals overlap, but what you optimise for — and how you measure it — is different.",
  },
  {
    question: "Which AI platforms are covered?",
    answer:
      "Google AI Overviews, Google Gemini, ChatGPT, Perplexity, Claude, and Grok, plus the local map results that AI answers frequently draw from.",
  },
];

const speakerBadges = [
  "AI Search Optimization",
  "Local SEO",
  "Digital Transformation",
  "AI Visibility",
];

/** Small eyebrow used to carry the narrative from one section to the next. */
const StoryStep = ({ step, label }: { step: string; label: string }) => (
  <div className="mb-8 flex items-center justify-center gap-3">
    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-xs font-bold text-primary">
      {step}
    </span>
    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
      {label}
    </span>
  </div>
);

/** Subtle connective sentence between major sections. */
const SectionTransition = ({ text }: { text: string }) => (
  <p className="mx-auto mb-8 max-w-3xl text-center text-sm italic text-muted-foreground">
    {text}
  </p>
);

/** Graphics for the customer-behavior shift section. */
const shiftCards = [
  {
    title: "From Keywords to Conversations",
    image: shiftKeywordsImg,
    alt: "Comparison of keyword search yesterday versus conversational AI questions today",
    width: 1200,
    height: 800,
    caption:
      "Customers are increasingly asking complete questions instead of searching with keywords.",
    source: "",
  },
  {
    title: "AI Search Is Growing Faster Than Traditional Search",
    image: shiftGrowthImg,
    alt: "Bar chart of year-over-year growth rates across search and AI platforms",
    width: 1200,
    height: 617,
    caption:
      "AI-powered search platforms are growing significantly faster than traditional search, making early adoption an important competitive advantage.",
    source: "Sources: Similarweb • Datos • SparkToro • Company Reports",
  },
  {
    title: "Google Still Dominates Search",
    image: shiftShareImg,
    alt: "Bar chart of search share across Google, YouTube, Bing and AI platforms",
    width: 1200,
    height: 620,
    caption:
      "Google remains the primary source of search traffic today while AI search continues to grow rapidly. Businesses should prepare for both.",
    source: "Sources: Similarweb • Datos • SparkToro • Company Reports",
  },
];



/* ─── Component ──────────────────────────────────────────────────── */

export const WorkshopLandingPageRefined = ({
  format,
  path,
}: WorkshopLandingPageProps) => {
  const isOnline = format === "online";

  const title = isOnline
    ? "Free AI Visibility Workshop (Online) | Get Named by ChatGPT & Google AI"
    : "Free AI Visibility Workshop (In Person) | Get Named by ChatGPT & Google AI";

  const description = isOnline
    ? "Free 90-minute online workshop for local businesses and DIY marketers: learn how ChatGPT, Gemini, Perplexity, Claude, Grok, and Google AI decide which businesses to name."
    : "Free 90-minute in-person workshop for local businesses and DIY marketers: learn how ChatGPT, Gemini, Perplexity, Claude, Grok, and Google AI decide which businesses to name.";

  const canonical = `${BASE_URL}${path}`;

  const detailChips = [
    { icon: CalendarDays, label: "Date", value: "To be announced" },
    { icon: Clock, label: "Time", value: "To be announced" },
    isOnline
      ? { icon: Video, label: "Format", value: "Live online • 90 minutes" }
      : { icon: Building2, label: "Format", value: "Live in person • 90 minutes" },
    { icon: Ticket, label: "Cost", value: "Free" },
    { icon: Users, label: "Seats", value: "Limited" },
  ];


  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    name: isOnline
      ? "AI Visibility Workshop — Online"
      : "AI Visibility Workshop — In Person",
    description,
    url: canonical,
    eventAttendanceMode: isOnline
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    isAccessibleForFree: true,
    inLanguage: "en-US",
    organizer: {
      "@type": "Organization",
      name: "GrowSmallBiz Digital Marketing",
      url: `${BASE_URL}/`,
    },
    performer: {
      "@type": "Person",
      name: "Subrata Guha",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Workshops",
        item: `${BASE_URL}/workshops/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: isOnline
          ? "AI Visibility Workshop — Online"
          : "AI Visibility Workshop — In Person",
        item: canonical,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${BASE_URL}/images/ai-visibility-workshop-og.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free AI Visibility Workshop — get named by ChatGPT, Gemini and Google AI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${BASE_URL}/images/ai-visibility-workshop-og.jpg`} />
        <meta name="twitter:image:alt" content="Free AI Visibility Workshop — get named by ChatGPT, Gemini and Google AI" />
        <script type="application/ld+json">{JSON.stringify(eventSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Head>

      {/* ── Minimal, distraction-free header ── */}
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link
            to="/"
            className="flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="GrowSmallBiz home"
          >
            <img
              src={growsmallbizLogo}
              alt="GrowSmallBiz Digital Marketing"
              width={180}
              height={48}
              className="h-12 w-auto"
            />
          </Link>
          <Button
            variant="hero"
            size="lg"
            className="min-h-11 transition-transform duration-300 hover:scale-[1.03]"
            asChild
          >
            <a href="#register">Reserve My Free Seat</a>
          </Button>
        </div>
      </header>

      <main id="main-content">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-8 pb-10 md:pt-20 md:pb-16">
          <div className="absolute inset-0">
            <img
              src={visibilityDashboard}
              alt=""
              aria-hidden="true"
              width={1920}
              height={1179}
              fetchPriority="high"
              className="h-full w-full object-cover opacity-25 blur-[3px]"
            />
            <img
              src={citationsDashboard}
              alt=""
              aria-hidden="true"
              width={1920}
              height={1096}
              loading="lazy"
              className="absolute right-0 top-1/2 hidden h-3/5 w-2/5 -translate-y-1/2 object-cover opacity-20 blur-[3px] mix-blend-screen lg:block"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          </div>
          <div className="pointer-events-none absolute inset-0 hero-glow" />
          <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[hsl(188_78%_41%_/_0.15)] blur-3xl" />

          <div className="container relative z-10 mx-auto px-4">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
              <div className="animate-fade-up text-center lg:max-w-[36rem] lg:text-left">
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground/80">
                  Customers are increasingly asking AI which local business to hire.
                </p>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Sparkles className="h-4 w-4" />
                  Free 90-Minute AI Visibility Workshop {isOnline ? "· Online" : "· In Person"}
                </span>

                <h1 className="mt-6 md:mt-8 font-display text-4xl font-bold leading-[1.08] md:text-5xl xl:text-6xl">
                  <span className="block bg-gradient-heading bg-clip-text text-transparent">Is Your Business Ready to Be Recommended by AI?</span>
                </h1>

                <p className="mx-auto mt-6 md:mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground lg:mx-0">
                  Learn how to accurately measure your AI visibility, understand why AI
                  recommends some businesses over others, and leave with a practical action
                  plan you can implement immediately.
                </p>


                <div className="mt-8 md:mt-12 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <Button
                    variant="hero"
                    size="xl"
                    className="transition-transform duration-300 hover:scale-[1.03]"
                    asChild
                  >
                    <a href="#register">
                      Reserve My Free Seat
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="xl" asChild>
                    <a href="#workshop-takeaways">See What's Covered</a>
                  </Button>
                </div>

                <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-2 lg:justify-start">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/50 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                    <Bot className="h-4 w-4 text-primary/80" />
                    Supports all major AI platforms
                  </span>
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">
                  Designed for Local Service Businesses
                </p>
              </div>

              {/* RIGHT COLUMN — single hero visual: the workbook */}
              <div className="relative mx-auto w-full max-w-lg animate-fade-up lg:mx-0 lg:mt-10 lg:justify-self-end">
                <WorkbookMockup />
              </div>

            </div>
          </div>
        </section>

        {/* ── Workshop information strip ── */}
        <section className="border-y border-border/60 bg-card/30">
          <div className="container mx-auto px-4">
            <dl className="grid grid-cols-2 divide-border/50 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
              {detailChips.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 px-4 py-3">
                  <Icon className="h-4 w-4 shrink-0 text-primary/80" />
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="text-sm font-medium text-foreground/90">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── The way customers find local businesses is changing ── */}
        <section className="py-14 md:py-24">
          <div className="container mx-auto px-4">
            <SectionHeader
              className="mx-auto max-w-4xl"
              subtitle="Why AI Visibility Matters"
              title="AI Is Changing How Customers Choose Local Businesses"
              description="Customers are increasingly using AI to research, compare, and choose local businesses. These three trends explain why AI Visibility is becoming an important part of modern digital marketing."
            />

            <div className="mx-auto grid max-w-[86rem] items-stretch gap-6 md:grid-cols-[1.25fr_1fr_1fr]">
              {shiftCards.map((card) => (
                <div
                  key={card.title}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card/60 p-5"
                >
                  <h3 className="mb-3 min-h-[3.5rem] font-display text-xl font-semibold leading-snug text-foreground">
                    {card.title}
                  </h3>
                  <div className="rounded-xl border border-border/60 bg-background p-2">
                    <img
                      src={card.image}
                      alt={card.alt}
                      width={card.width}
                      height={card.height}
                      loading="lazy"
                      className="w-full rounded-lg object-contain mix-blend-screen"
                    />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{card.caption}</p>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-3xl text-center text-[11px] leading-snug text-muted-foreground/60">
              Sources: Similarweb • Datos • SparkToro • Company Reports (2025–2026)
            </p>

          </div>
        </section>



        {/* ── Credibility strip ── */}
        <section className="border-y border-border/60 bg-card/40 py-8">
          <div className="container mx-auto px-4">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <img
                src={baseContactCTA.image}
                alt={`${baseContactCTA.name}, workshop host`}
                width={80}
                height={80}
                loading="lazy"
                className="h-20 w-20 shrink-0 rounded-full border-2 border-primary/40 object-cover"
              />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Presented by
                </p>
                <p className="mt-1 font-display text-xl font-bold text-foreground">
                  {baseContactCTA.name}
                </p>
                <p className="text-sm text-muted-foreground">{baseContactCTA.role}</p>
                <ul className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
                  {speakerBadges.map((badge) => (
                    <li
                      key={badge}
                      className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {badge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── What is AI visibility ── */}
        <section className="bg-background-alt py-14 md:py-28">
          <div className="container mx-auto px-4">
            <SectionTransition text="If customer search behavior is changing, what does that mean for your business?" />
            <StoryStep step="1" label="Customers Are Searching Differently" />
            <SectionHeader
              subtitle="The New Front Door"
              title="What Is AI Visibility?"
              description="AI visibility is whether AI assistants and AI-powered search results mention, recommend, and cite your business when someone asks a question your business could answer. It is not a ranking position. It is whether your name appears in the answer at all."
            />

            {/* Ask → Answer visual */}
            <div className="mx-auto mb-10 md:mb-16 mt-4 grid max-w-5xl items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
              <div className="flex flex-col justify-center rounded-2xl border border-border bg-card/70 p-8 md:p-10">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  They ask
                </p>
                <p className="font-mono text-xl leading-relaxed text-foreground md:text-2xl">
                  "Who's the best <span className="text-[hsl(188_78%_55%)]">[plumber]</span> near me?"
                </p>
              </div>

              <div className="mx-auto flex h-12 w-12 items-center justify-center self-center rounded-full border border-primary/40 bg-primary/10">
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>

              <div className="flex flex-col justify-center rounded-2xl border border-primary/50 bg-card/80 p-8 shadow-lg shadow-primary/10 md:p-10">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  AI answers
                </p>
                <p className="text-xl leading-relaxed text-foreground md:text-2xl">
                  "You're in great hands with{" "}
                  <span className="rounded bg-primary/20 px-1.5 py-0.5 font-semibold text-primary">
                    your business
                  </span>{" "}
                  — 5-star rated and trusted nearby."
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-4xl">
              <GlowCard className="p-9 md:p-12">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  A homeowner used to type{" "}
                  <span className="text-foreground">"plumber Walnut Creek"</span> and scan a
                  list of links. Today they type or say:
                </p>
                <p className="my-8 border-l-4 border-primary bg-primary/5 py-4 pl-6 pr-4 text-2xl font-display font-semibold leading-snug text-foreground md:text-3xl">
                  "Who's the best plumber near me, and who should I actually call first?"
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  They get back a short, confident answer with two or three business names
                  and a reason for each. There is no page two. Either the AI knows enough
                  about your business to name you — or, as far as that customer is
                  concerned, you do not exist.
                </p>
              </GlowCard>
            </div>
          </div>
        </section>

        {/* ── Old vs new ── */}
        <section className="py-14 md:py-28">
          <div className="container mx-auto px-4">
            <SectionTransition text="To understand AI recommendations, it's important to understand how AI search differs from traditional search." />
            <StoryStep step="2" label="AI Gives One Answer, Not Ten Links" />
            <SectionHeader
              subtitle="The Shift"
              title="Ten Blue Links vs. One Written Answer"
              description="Nothing about search broke. The interface changed — and with it, what it takes to get found."
            />

            <div className="mx-auto grid max-w-5xl items-stretch gap-8 md:grid-cols-2">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card/60 p-9 transition-colors duration-300 hover:border-border">
                <h3 className="mb-7 font-display text-2xl font-bold text-muted-foreground">
                  How search used to work
                </h3>
                <ul className="space-y-5">
                  {oldWay.map((item) => (
                    <li key={item} className="flex gap-3">
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                      <span className="leading-relaxed text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex h-full flex-col rounded-2xl border-2 border-primary/50 bg-card/80 p-9 shadow-lg shadow-primary/10 transition-colors duration-300 hover:border-primary/70">
                <h3 className="mb-7 font-display text-2xl font-bold text-foreground">
                  How search works now
                </h3>
                <ul className="space-y-5">
                  {newWay.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="leading-relaxed text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Six platforms ── */}
        <section className="bg-background-alt py-14 md:py-28">
          <div className="container mx-auto px-4">
            <SectionTransition text="Customers don't rely on just one AI platform." />
            <StoryStep step="3" label="Why AI Recommendations Matter" />
            <SectionHeader
              subtitle="Six Front Doors"
              title="Six Places People Ask. One Question Every Day."
              description="Each of these platforms builds its answer from a slightly different mix of sources. The workshop covers what each one reads — and what it means for a local business."
            />

            <div className="grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
              {platforms.map(({ icon: Icon, name, copy }) => (
                <GlowCard key={name} className="flex h-full flex-col p-8">
                  <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/15">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                    {name}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">{copy}</p>
                </GlowCard>
              ))}
            </div>

            <p className="mx-auto mt-8 md:mt-12 max-w-3xl text-center text-xl font-display font-semibold leading-relaxed text-foreground">
              Six places. One question every day. The workshop is about making sure your
              business is the answer.
            </p>
          </div>
        </section>

        {/* ── Workshop Takeaways (summary card) ── */}
        <section id="workshop-takeaways" className="py-14 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-2xl border border-primary/30 bg-card/70 p-8 shadow-2xl shadow-primary/10 backdrop-blur-md md:p-10">
              <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-foreground">
                <ListChecks className="h-6 w-6 text-primary" />
                Workshop Takeaways
              </h2>
              <p className="mt-3 text-base font-medium text-muted-foreground">
                By the end of the workshop, you'll understand:
              </p>
              <ul className="mt-8 grid gap-5 md:grid-cols-2">
                {[
                  {
                    t: "Understand AI Visibility",
                    d: "What AI Visibility is, why it matters, and how AI is changing the way customers discover and choose local businesses.",
                  },
                  {
                    t: "Understand How AI Chooses Businesses",
                    d: "How leading AI platforms evaluate information and why some businesses are recommended more consistently than others.",
                  },
                  {
                    t: "Know How to Assess Your AI Visibility",
                    d: "How to determine whether your business is showing up in relevant AI recommendations and what those results can—and cannot—tell you.",
                  },
                  {
                    t: "Know What to Do Next",
                    d: "The key signals that influence AI recommendations and the logical steps you can take to improve your AI Visibility over time.",
                  },
                ].map(({ t, d }) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-base leading-relaxed text-foreground/90">
                      <span className="font-semibold text-foreground">{t}.</span>{" "}
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Agenda ── */}
        <section id="what-you-learn" className="pb-14 md:pb-28">
          <div className="container mx-auto px-4">
            <StoryStep step="4" label="How AI Chooses Businesses" />
            <SectionHeader
              subtitle="The Agenda"
              title="What You'll Learn in 90 Minutes"
              description="No slideware theory. You will leave able to check your own AI visibility and fix the gaps yourself."
            />

            <div className="mx-auto grid max-w-5xl items-stretch gap-7 md:grid-cols-2">
              {agenda.map(({ icon: Icon, title: t, copy }) => (
                <div
                  key={t}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                >
                  <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/15">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                    {t}
                  </h3>
                  <p className="max-w-prose leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Host / speaker (compact conference-profile layout) ── */}
        <section className="bg-background-alt py-10 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-3xl border-2 border-primary/50 bg-card/80 px-6 py-8 shadow-xl md:px-10 md:py-10">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">

                  {/* LEFT COLUMN — photo, expertise badges, workshop highlights */}
                  <div className="shrink-0 text-center md:w-[36%]">
                    <div className="mx-auto h-36 w-36 overflow-hidden rounded-full border-4 border-primary/30 shadow-lg md:h-44 md:w-44">
                      <img
                        src={baseContactCTA.image}
                        alt={`${baseContactCTA.name}, workshop host`}
                        width={176}
                        height={176}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <ul className="mt-4 flex flex-wrap justify-center gap-1.5">
                      {["AI Search Optimization", "Local SEO", "AI Visibility", "Digital Marketing"].map(
                        (badge) => (
                          <li
                            key={badge}
                            className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-0.5 text-[11px] font-medium text-primary"
                          >
                            {badge}
                          </li>
                        )
                      )}
                    </ul>

                    {/* Workshop highlights — uses the empty space below badges */}
                    <div className="mt-5 rounded-xl border border-border/70 bg-background/40 px-4 py-4 text-left">
                      <p className="mb-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Why Attend This Workshop?
                      </p>
                      <ul className="space-y-1.5">
                        {["Practical Frameworks", "Live Demonstrations", "Real Business Examples", "Interactive Q&A"].map(
                          (item) => (
                            <li key={item} className="flex items-center gap-2 text-xs text-foreground/80">
                              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary/80" />
                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* RIGHT COLUMN — name, executive profile, credential highlights */}
                  <div className="text-center md:flex-1 md:text-left">
                    <p className="section-subtitle">Your Host</p>
                    <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                      {baseContactCTA.name}, {baseContactCTA.role}
                    </h2>
                    <p className="mt-4 max-w-md mx-auto text-[15px] leading-[1.7] text-muted-foreground md:mx-0">
                      Founder of GrowSmallBiz, a Bay Area digital marketing practice serving
                      local service businesses. Subrata specializes in AI search
                      optimization and local SEO, helping owners get named consistently by
                      ChatGPT, Gemini, and Google AI. His sessions are hands-on and
                      practical — show the evidence, explain the mechanics in plain language,
                      then hand over the steps. Hosted in partnership with local chambers of
                      commerce.
                    </p>

                    {/* Credential highlights */}
                    <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
                      {[
                        { stat: "20+", label: "Years Technology Leadership" },
                        { stat: "AI Search", label: "Optimization" },
                        { stat: "Local SEO", label: "Strategist" },
                        { stat: "Hands-On", label: "Workshop" },
                      ].map((c) => (
                        <div
                          key={c.label}
                          className="rounded-xl border border-border/60 bg-background/40 px-3 py-2.5 text-center"
                        >
                          <p className="text-sm font-bold text-primary">{c.stat}</p>
                          <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{c.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* ── Outcomes ── */}
        <section className="bg-background-alt py-14 md:py-28">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Outcomes"
              title="After This Workshop You'll Be Able To"
              description="Not an agenda — the practical outcomes you walk away with."
            />
            <div className="mx-auto grid max-w-5xl items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Evaluate your business's AI visibility across today's leading AI platforms",
                "Understand why AI recommends some businesses more consistently than others",
                "Identify your biggest AI visibility gaps",
                "Prioritize practical improvements that can increase AI recommendations",
                "Build a personalized AI Visibility Action Plan",
              ].map((item) => (
                <div
                  key={item}
                  className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="leading-relaxed text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who this is for ── */}
        <section className="py-14 md:py-28">
          <div className="container mx-auto px-4">
            <StoryStep step="5" label="Who Should Attend" />
            <SectionHeader
              subtitle="Who Should Attend"
              title="Built for Local Businesses and DIY Marketers"
              description="If you own the outcome of your own marketing, this session is for you."
            />

            <div className="mx-auto grid max-w-5xl items-stretch gap-10 md:grid-cols-2">
              {forWho.map(({ icon: Icon, title: t, points }) => (
                <GlowCard key={t} className="flex h-full flex-col p-9 md:p-10">
                  <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/15">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-5 font-display text-2xl font-bold text-foreground">
                    {t}
                  </h3>
                  <ul className="space-y-4">
                    {points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="leading-relaxed text-muted-foreground">{p}</span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* ── Registration (GHL form goes here) ── */}
        <section id="register" className="relative overflow-hidden py-14 md:py-28">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="container relative z-10 mx-auto px-4">
            <StoryStep step="6" label="Register" />
            <SectionHeader
              subtitle="Reserve Your Seat"
              title="Register for the Free AI Visibility Workshop"
              description={
                isOnline
                  ? "Sign up below and we'll send the joining link and the calendar invite. No cost, no obligation."
                  : "Sign up below and we'll send the venue details and the calendar invite. No cost, no obligation."
              }
            />

            <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
              <div>
                {/*
                  GHL SIGN-UP FORM GOES HERE.
                  Replace the placeholder block below with the GoHighLevel iframe embed.
                  Per project convention, cross-origin GHL iframes require a fixed height.
                */}
                <div
                  className="flex flex-col items-center justify-center rounded-3xl border-2 border-primary/60 bg-card/70 p-10 text-center shadow-2xl shadow-primary/20 backdrop-blur-sm"
                  style={{ minHeight: "480px" }}
                >
                  <Sparkles className="mb-4 h-12 w-12 text-primary" />
                  <p className="font-display text-2xl font-bold text-foreground">
                    Registration form coming soon
                  </p>
                  <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                    Seats for the next session open shortly. In the meantime, call{" "}
                    <a
                      href="tel:+19258863724"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      +1 (925) 886-3724
                    </a>{" "}
                    to be added to the invite list.
                  </p>
                  <Button
                    variant="hero"
                    size="xl"
                    className="mt-8 min-h-11 transition-transform duration-300 hover:scale-[1.03]"
                    asChild
                  >
                    <a href="tel:+19258863724">
                      Reserve My Free Seat
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>

                <p className="mt-6 text-center text-sm text-muted-foreground">
                  No sales pitch. Practical education. Live Q&amp;A. The AI Visibility
                  Workshop Playbook will be provided exclusively to attendees who
                  stay through the end of the live workshop.
                </p>
                <p className="mt-3 text-center text-sm text-muted-foreground">
                  No commitment. No pressure. Just a straight explanation of how AI search
                  works and what to do about it.
                </p>
              </div>

              <div className="flex justify-center lg:pt-4">
                <WorkbookMockup />
              </div>
            </div>

          </div>
        </section>

        {/* ── FAQ ── */}
        <FAQSection
          title="Workshop Questions, Answered"
          subtitle="Everything people ask before they register."
          faqs={faqs}
          defaultOpenFirst
          accordionClassName="!space-y-5 [&_[data-state]]:leading-relaxed"
        />
      </main>

      {/* ── Minimal footer ── */}
      <footer className="border-t border-border bg-card py-10">
        <div className="container mx-auto px-4 text-center">
          <img
            src={growsmallbizLogo}
            alt="GrowSmallBiz Digital Marketing"
            width={160}
            height={44}
            loading="lazy"
            className="mx-auto h-11 w-auto"
          />
          <p className="mt-4 text-sm text-muted-foreground">
            AI visibility education for local businesses in the Greater Bay Area.
          </p>
          <nav
            aria-label="Footer"
            className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm"
          >
            <Link
              to="/privacy-policy/"
              className="text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service/"
              className="text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              Terms of Service
            </Link>
            <a
              href="mailto:contact@growsmallbiz.io"
              className="text-primary underline-offset-4 hover:underline"
            >
              contact@growsmallbiz.io
            </a>
            <a
              href="tel:+19258863724"
              className="text-primary underline-offset-4 hover:underline"
            >
              +1 (925) 886-3724
            </a>
          </nav>
          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} GrowSmallBiz Digital Marketing. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WorkshopLandingPageRefined;
