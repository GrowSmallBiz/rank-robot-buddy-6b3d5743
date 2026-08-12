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
  Download,
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
    question: "Is this a sales pitch in disguise?",
    answer:
      "No. The session is built to teach. You will leave able to check your own AI visibility and fix the most common gaps yourself. If you later want help implementing it, GrowSmallBiz does that work — but nothing in the workshop depends on hiring anyone.",
  },
  {
    question: "Do I need any technical or SEO background?",
    answer:
      "No. Everything is explained in plain language. If you can edit your website and log in to your Google Business Profile, you can act on everything covered.",
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
  {
    question: "Do I get anything to take away?",
    answer:
      "Yes. Everyone who stays to the end receives the AI Visibility Playbook — a digital, step-by-step guide covering the same checks and fixes we walk through together, so you can repeat them on your own schedule.",
  },
  {
    question: "Will the session be recorded?",
    answer:
      "The live walkthrough and Q&A are best experienced live, and the takeaway playbook is only sent to people who attend through to the end.",
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
    { icon: Ticket, label: "Admission", value: "Free" },
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
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(eventSchema)}</script>
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
        <section className="relative overflow-hidden py-28 md:py-36">
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
            <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
              <div className="animate-fade-up text-center lg:max-w-[36rem] lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Sparkles className="h-4 w-4" />
                  Free 90-Minute AI Visibility Workshop {isOnline ? "· Online" : "· In Person"}
                </span>

                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.08] md:text-5xl xl:text-6xl">
                  <span className="block text-foreground">Is Your Business Ready</span>
                  <span className="block bg-gradient-to-r from-primary via-primary to-[hsl(188_78%_48%)] bg-clip-text text-transparent">
                    to Be Recommended by AI?
                  </span>
                </h1>

                <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
                  Learn how to accurately measure your business's AI visibility, understand
                  why AI recommends some businesses over others, and leave with a practical
                  action plan to improve your chances of being recommended consistently
                  across today's leading AI platforms.
                </p>

                <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
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
                    <a href="#what-youll-learn">See What's Covered</a>
                  </Button>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-2 lg:justify-start">
                  {["ChatGPT", "Gemini", "Claude", "Google AI", "Perplexity", "Grok"].map(
                    (chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-border/70 bg-card/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm"
                      >
                        {chip}
                      </span>
                    ),
                  )}
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">
                  Built for Local Service Businesses
                </p>
              </div>

              {/* RIGHT COLUMN — single hero visual: the workbook */}
              <div className="relative mx-auto w-full max-w-md animate-fade-up lg:mx-0 lg:justify-self-end">
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
                <div key={label} className="flex items-center gap-3 px-4 py-4">
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

        {/* ── What you'll learn (moved out of the hero) ── */}
        <section id="what-youll-learn" className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-2xl border border-primary/30 bg-card/70 p-8 shadow-2xl shadow-primary/10 backdrop-blur-md md:p-10">
              <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-foreground">
                <ListChecks className="h-6 w-6 text-primary" />
                What You'll Learn
              </h2>
              <ul className="mt-8 grid gap-5 md:grid-cols-2">
                {[
                  "What AI visibility is and why it now matters for local service businesses",
                  "How ChatGPT, Gemini, Perplexity, Claude, Grok & Google AI Overviews choose which businesses to recommend",
                  "How to audit your current visibility across all six major AI platforms",
                  "The content and signals that make AI platforms cite and recommend you",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-base leading-relaxed text-foreground/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
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
        <section className="bg-background-alt py-24 md:py-28">
          <div className="container mx-auto px-4">
            <StoryStep step="1" label="Customers Are Searching Differently" />
            <SectionHeader
              subtitle="The New Front Door"
              title="What Is AI Visibility?"
              description="AI visibility is whether AI assistants and AI-powered search results mention, recommend, and cite your business when someone asks a question your business could answer. It is not a ranking position. It is whether your name appears in the answer at all."
            />

            {/* Ask → Answer visual */}
            <div className="mx-auto mb-16 mt-4 grid max-w-5xl items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
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
        <section className="py-24 md:py-28">
          <div className="container mx-auto px-4">
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
        <section className="bg-background-alt py-24 md:py-28">
          <div className="container mx-auto px-4">
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

            <p className="mx-auto mt-12 max-w-3xl text-center text-xl font-display font-semibold leading-relaxed text-foreground">
              Six places. One question every day. The workshop is about making sure your
              business is the answer.
            </p>
          </div>
        </section>

        {/* ── What you'll learn ── */}
        <section id="what-you-learn" className="py-24 md:py-28">
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

        {/* ── Takeaway playbook ── */}
        <section className="bg-background-alt py-24 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="relative overflow-hidden rounded-3xl border-2 border-primary bg-gradient-to-br from-primary/15 via-card/90 to-[hsl(188_78%_41%_/_0.12)] p-10 shadow-2xl shadow-primary/20 md:p-14">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
                <div className="relative z-10 flex flex-col items-center gap-10 md:flex-row">
                  <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/40">
                    <Download className="h-16 w-16 text-primary-foreground" />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="section-subtitle">Stay to the End</p>
                    <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                      Take Home the AI Visibility Playbook
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                      Every attendee who stays through to the end of the session receives
                      the AI Visibility Playbook in digital format — the same step-by-step
                      checks and fixes we walk through together, written out so you can
                      work through them on your own schedule. It is free, and it is yours
                      to keep.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Who this is for ── */}
        <section className="py-24 md:py-28">
          <div className="container mx-auto px-4">
            <StoryStep step="5" label="What You'll Learn" />
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

        {/* ── Host ── */}
        <section className="bg-background-alt py-24 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-3xl border-2 border-primary/50 bg-card/80 p-9 shadow-xl md:p-14">
                <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
                  <div className="shrink-0 text-center">
                    <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-primary/30 shadow-lg md:h-52 md:w-52">
                      <img
                        src={baseContactCTA.image}
                        alt={`${baseContactCTA.name}, workshop host`}
                        width={208}
                        height={208}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <ul className="mt-5 flex flex-wrap justify-center gap-2">
                      {["AI Search Optimization", "Local SEO", "AI Visibility", "Digital Marketing"].map(
                        (badge) => (
                          <li
                            key={badge}
                            className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {badge}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="section-subtitle">Your Host</p>
                    <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                      {baseContactCTA.name}, {baseContactCTA.role}
                    </h2>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                      Subrata leads GrowSmallBiz, a Bay Area digital marketing practice that
                      works with local service businesses on local SEO, AI search
                      optimization, and marketing automation. He runs these sessions the
                      same way he works with clients: show the evidence first, explain the
                      mechanics in plain language, then hand over the steps.
                    </p>
                    <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                      Sessions are hosted in partnership with local chambers of commerce.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Registration (GHL form goes here) ── */}
        <section id="register" className="relative overflow-hidden py-24 md:py-28">
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

            <div className="mx-auto max-w-3xl">
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
                No commitment. No pressure. Just a straight explanation of how AI search
                works and what to do about it.
              </p>
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
      <footer className="border-t border-border bg-card py-12">
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
          <p className="mt-2 text-sm">
            <a
              href="tel:+19258863724"
              className="text-primary underline-offset-4 hover:underline"
            >
              +1 (925) 886-3724
            </a>
          </p>
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
