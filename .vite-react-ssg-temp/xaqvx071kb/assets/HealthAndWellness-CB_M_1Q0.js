import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { S as ServiceJsonLd } from "./ServiceJsonLd-62JZkfim.js";
import { H as Header, B as Button } from "./Header-Dct2bBAe.js";
import { F as Footer } from "./Footer-5rMz2U4O.js";
import { C as CardCTA } from "./CardCTA-lztA_Zrf.js";
import { Link } from "react-router-dom";
import { Heart, ArrowRight, ChevronRight, CheckCircle2, Stethoscope, Sparkles } from "lucide-react";
import { FAQSection } from "./FAQSection-Knk-AyWr.js";
import { ConsultationFormSection } from "./ConsultationFormSection-DDNhkaf7.js";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { u as useUtm } from "./use-utm-CiJKCMCk.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../main.mjs";
import "react-helmet-async";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./accordion-b6vWRJCV.js";
import "@radix-ui/react-accordion";
const healthWellnessHeroImage = "/assets/health-wellness-hero-DPFyLwNy.webp";
const dentalImage = "/assets/dental-practice-marketing-od0K0fog.webp";
const chiroImage = "/assets/chiropractic-marketing-CIKyWpXl.webp";
const medSpaImage = "/assets/med-spa-marketing-DBSHS3wd.webp";
const practiceTypes = [
  { icon: Stethoscope, name: "Dental", link: "/dental-marketing/" },
  { icon: Heart, name: "Chiropractic", link: "/chiropractic-marketing/" },
  { icon: Sparkles, name: "Med Spa", link: "/med-spa-marketing/" }
];
const challenges = [
  {
    title: "Google YMYL Standards and E-E-A-T Requirements",
    description: 'Google classifies health content as "Your Money or Your Life" (YMYL) — meaning it holds health websites to stricter quality standards than any other category. To rank well, your website must demonstrate strong Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T).'
  },
  {
    title: "HIPAA Advertising Restrictions",
    description: "HIPAA regulations prohibit the use of patient photos or identifiable testimonials in advertising without explicit written consent. This limits common promotional tactics and requires careful compliance in every campaign. Agencies that are not HIPAA-aware create legal exposure for the practices they serve."
  },
  {
    title: "The Trust-First Patient Journey",
    description: "Patients in health and wellness make highly personal decisions about their care. In the past year alone, 73% of patients reported adopting new behaviors or tools to research providers — including AI chatbots, voice search, and social media — before committing to a booking. (rater8, 2025) A single-channel strategy misses patients at every stage where they are still evaluating their options."
  },
  {
    title: "The Disproportionate Weight of Online Reviews",
    description: "",
    // Rendered with standalone stat paragraph below
    stat: "84% of patients check online reviews before choosing a healthcare provider. (rater8, 2025 — nationwide survey of 1,008 U.S. adults)",
    body: "Negative reviews impact health businesses approximately twice as much as other industries. A practice with a weak review profile loses patients to competitors at every stage of the funnel — search, click, and conversion. Reputation management is not a nice-to-have in health and wellness. It is infrastructure."
  },
  {
    title: "Elective vs. Insurance-Covered Services",
    description: "Marketing elective services — cosmetic treatments, aesthetic procedures, premium dental work — requires a fundamentally different approach than insurance-covered care. Elective decisions are driven by emotional appeal, visual proof, and social validation. Insurance-covered decisions are driven by trust, credibility, and convenience. The same campaign does not serve both."
  }
];
const painPoints = [
  "Your practice website is buried on page 2 or 3 of Google — invisible to patients actively searching for care",
  "You're spending money on advertising but can't track which campaigns actually produce new patient bookings",
  "Your phone goes unanswered after 5 PM — and every missed call is a patient who books with a competitor",
  "You have fewer than 50 Google reviews while competitors in your area have 200+",
  "Your social media presence is inconsistent, outdated, or nonexistent"
];
const practices = [
  {
    icon: Stethoscope,
    title: "Dental Practices",
    image: dentalImage,
    description: 'Dental patients research providers extensively before booking. They check Google rankings, read reviews, and compare websites before making a single phone call. The core dental growth system is Local SEO + Google Ads + Reputation Management: together, these channels drive consistent new patient acquisition through high-intent searches like "dentist near me," "teeth whitening near me," and "emergency dentist."',
    link: "/health-and-wellness-practices/dental-marketing/",
    linkText: "Explore dental practice marketing services"
  },
  {
    icon: Heart,
    title: "Chiropractic Practices",
    image: chiroImage,
    description: 'Chiropractic is a high-consideration category — patients research their condition and their provider before committing to care. Local SEO for condition-specific searches like "back pain chiropractor near me," "sports injury treatment," and "sciatica relief" captures patients at their highest point of intent. There is a significant credibility gap in chiropractic search results nationwide: well-optimized practices consistently outrank under-invested competitors and capture the bulk of local search traffic.',
    link: "/health-and-wellness-practices/marketing-for-chiropractors/",
    linkText: "Explore chiropractic marketing services"
  },
  {
    icon: Sparkles,
    title: "Med Spas & Aesthetic Clinics",
    image: medSpaImage,
    description: "Med spa clients are visual-first and social-proof-driven. Before/after results, Google reviews, and social media presence influence their decisions above almost everything else. Google Ads for high-value treatments — Botox, dermal fillers, laser treatments, body contouring — delivers measurable ROI because these are high-intent, high-value searches from clients who are ready to book. A med spa without a strong paid and organic presence is invisible at exactly the moment a client is ready to spend.",
    link: "/health-and-wellness-practices/marketing-for-med-spas/",
    linkText: "Explore med spa marketing services"
  }
];
const serviceCards = [
  {
    title: "Managed AI SEO + Website Design",
    description: "Rank at the top of Google, Google Maps, and AI-powered search when patients search for your services. Our Managed AI SEO system covers the complete stack: Technical SEO to ensure your site is crawlable and fast, On-Page SEO to optimize every page for the keywords patients use, Local SEO and Google Business Profile management to dominate the map pack, Link Building to build the domain authority that sustains rankings, AEO (Answer Engine Optimization) to position your practice as the trusted answer in voice and AI search, and GEO (Generative Engine Optimization) to get your practice cited by ChatGPT, Perplexity, and Google AI Overviews. Every element is built together with a conversion-optimized website — because SEO and site design built as one integrated system is the foundation of sustainable, long-term new patient acquisition."
  },
  {
    title: "Google Ads / PPC for Health & Wellness Practices",
    description: "Get new patients immediately with precisely targeted Google Ads campaigns built around the treatments your patients are actively searching for. We manage dental, chiropractic, and med spa campaigns around high-intent searches — from teeth whitening to spinal adjustments to Botox — with every dollar tracked to patient bookings. No wasted spend. No guesswork. Every campaign is optimized to cost per booked appointment, not cost per click."
  },
  {
    title: "Reputation Management",
    description: "84% of patients check online reviews before choosing a healthcare provider. (rater8, 2025) Patients consistently check reviews before booking any health or wellness provider. Practices with a strong review profile — volume, recency, and rating — consistently outperform those with weak ones at every stage: search rankings, click-through, and appointment conversion. We automate your Google review generation, monitor patient feedback across all platforms, and help you build the 5-star profile that converts online searchers into booked appointments. A stronger reputation lifts conversion rates from every other marketing channel — SEO, ads, and direct traffic all perform better when your review profile is strong."
  },
  {
    title: "Social Media Management",
    description: "For med spas and wellness practices especially, social media drives direct bookings by building visual proof of your results. We create and manage professional content that showcases your work, builds brand trust, and targets the clients most likely to book high-value treatments. Before/after content, treatment education, and patient social proof are your highest-converting social assets — when executed with HIPAA-compliant messaging."
  },
  {
    title: "AI Receptionist",
    description: "Patients inquire after hours. A phone that goes unanswered at 9pm is a patient who books with your competitor at 9:01pm. Our AI Receptionist captures every inquiry 24/7 — answering questions, qualifying leads, and booking appointments automatically. You never lose a new patient because no one picked up the phone."
  },
  {
    title: "Lead Nurture, Client Reactivation & Referrals",
    description: "Getting a new patient inquiry is only half the battle. Most practices lose leads because no one follows up fast enough — and lose former patients because no one reaches out at all. Our Lead Nurture system automates multi-step follow-up sequences so every inquiry gets an immediate response, a next-day check-in, and a structured path to booking — without your front desk doing it manually. Client Reactivation campaigns re-engage patients who have not returned in 6, 12, or 18 months with personalized outreach that fills appointment gaps with patients who already trust your practice. Referral automation turns your happiest patients into a consistent referral source — systematically asking for introductions at the right moment in the patient journey. Together, these three systems maximize the revenue from every patient your marketing has already attracted."
  }
];
const channelData = [
  { channel: "Google LSAs", bestFor: "Dental & Chiropractic", insight: "Captures emergency and family-oriented searches. Google Guaranteed badge drives trust and click-through." },
  { channel: "Google Ads / PPC", bestFor: "All three practice types", insight: "Fastest ROI. High-intent treatment searches. Tracked to booked appointments, not clicks." },
  { channel: "Meta Ads (Lead Forms)", bestFor: "Med Spas", insight: "Outperform landing pages for consultations. Simplified inquiry drives higher conversion rates." },
  { channel: "Local SEO", bestFor: "All three practice types", insight: "Takes 4-6 months to mature. Delivers the lowest cost-per-patient acquisition over the long term." },
  { channel: "Reputation Management", bestFor: "All three practice types", insight: "Patients check reviews before booking — non-negotiable for conversion from every channel. (rater8, 2025: 84% of patients check reviews before choosing a provider.)" },
  { channel: "Social Media", bestFor: "Med Spas primarily", insight: "Before/after visual content drives bookings. Less critical for dental and chiropractic." },
  { channel: "AEO / Voice Search", bestFor: "All three practice types", insight: "Growing channel. Positions practice as the answer in AI and voice search results." }
];
const funnelSteps = [
  {
    step: 1,
    title: "Awareness",
    description: "Local SEO and branded content ensure your practice appears prominently when patients begin their search. If you are not visible at this stage, the patient never reaches you."
  },
  {
    step: 2,
    title: "Consideration",
    description: "Google Ads and retargeting campaigns engage patients who are actively comparing their options. This is where most practices lose patients to competitors with stronger paid presence."
  },
  {
    step: 3,
    title: "Trust",
    description: "Your Google reviews, website authority, and social proof determine whether the patient picks up the phone. The trust layer is the single highest-leverage conversion factor in healthcare marketing."
  },
  {
    step: 4,
    title: "Booking",
    description: "Online scheduling, AI Receptionist, and immediate follow-up sequences eliminate friction at the final step. Every barrier removed at booking increases patient conversion rates measurably."
  }
];
const caseStudies = [
  {
    title: "Med Spa — Walnut Creek, CA",
    period: "6-month engagement",
    accent: "border-l-primary",
    metrics: [
      "New patient inquiries increased 340% through Local SEO and Google Ads",
      "Cost per consultation dropped from $120 to $34",
      "Google reviews grew from 28 to 142 with automated review management",
      "Monthly revenue from new clients increased 210%"
    ]
  },
  {
    title: "Dental Practice — Danville, CA",
    period: "4-month engagement",
    accent: "border-l-accent",
    metrics: [
      "Map Pack ranking achieved for 12 high-intent keywords within 90 days",
      "Google Ads campaign delivered 68 new patient bookings in the first quarter",
      "Website conversion rate improved from 2.1% to 8.7% after redesign",
      "After-hours AI Receptionist captured 23 additional appointments per month"
    ]
  },
  {
    title: "Chiropractic Practice — San Ramon, CA",
    period: "5-month engagement",
    accent: "border-l-primary",
    metrics: [
      "Organic traffic increased 280% targeting condition-specific keywords",
      "Google review count grew from 15 to 89 — now highest-rated chiropractor in the area",
      "Cost per new patient acquisition reduced by 62%",
      "Monthly new patient volume increased from 8 to 31"
    ]
  }
];
const credentials = [
  { label: "HIPAA-Compliant", description: "All campaigns built within healthcare advertising regulations" },
  { label: "30+ Years Experience", description: "Fortune 500 sales, marketing, and digital transformation expertise" },
  { label: "AI-Powered Research", description: "Competitive analysis mapped before any campaign launches" },
  { label: "Full-Stack System", description: "SEO, Ads, AI, Reputation — all channels working as one engine" }
];
const gettingStartedSteps = [
  {
    step: 1,
    title: "Schedule Strategy Call",
    description: "Tell us about your practice, your patient acquisition goals, and where your current marketing is falling short. No pitch. No pressure. A direct conversation about what is and is not working."
  },
  {
    step: 2,
    title: "Get Your Custom Growth Plan",
    description: "We audit your online presence, map your local competition, and build a tailored marketing plan for your specific practice type and market. You leave the call with a clear picture of your opportunity."
  },
  {
    step: 3,
    title: "Watch Your Practice Grow",
    description: "We execute across every channel — SEO, ads, website, AI automation — while you focus on delivering exceptional patient care. You see the results in your appointment book."
  }
];
const faqs = [
  {
    question: "How long does SEO take to show results for a dental practice or med spa?",
    answer: 'SEO for a health and wellness practice typically shows meaningful results in 90 to 120 days, with full competitive rankings reached in 4 to 6 months. The first visible wins are usually Google Business Profile improvements and map pack appearances for lower-competition keywords. High-intent terms like "dentist near me" or "med spa near me" in competitive markets take the full 4 to 6 month window. Paid advertising delivers results immediately while SEO builds in the background — running both together is the fastest path to consistent new patient flow.'
  },
  {
    question: "Does GrowSmallBiz handle HIPAA-compliant ad copy and marketing?",
    answer: "Yes. Every campaign GrowSmallBiz manages is built within HIPAA advertising guidelines from the first draft. HIPAA restricts the use of patient photos and identifiable testimonials in advertising without explicit written consent. Our campaigns use compliant formats — treatment-focused creative, before/after content with proper consent documentation, and audience targeting that does not use Protected Health Information (PHI). Practices working with agencies that are not HIPAA-aware face legal and reputational exposure. GrowSmallBiz has built healthcare compliance into every campaign workflow."
  },
  {
    question: "How is marketing a dental practice different from marketing a med spa?",
    answer: "Dental marketing is primarily search-intent driven — patients search for a specific treatment or emergency and book quickly. Med spa marketing is visual and consideration-driven — clients research results, read reviews, and compare providers over a longer decision window. Dental campaigns are built around Google Ads and Local SEO for high-intent searches. Med spa campaigns rely more heavily on Meta Ads with before/after creative, Google Ads for specific treatments, and social media that builds visual proof of outcomes. The channels, creative formats, and messaging strategies are fundamentally different for each practice type."
  },
  {
    question: "Which marketing channels deliver the fastest ROI for health and wellness businesses?",
    answer: "Google Ads delivers the fastest ROI for health and wellness practices — typically within the first 30 days of campaign launch. Ads capture patients actively searching for treatments right now, with every dollar tracked to booked appointments. Google Local Service Ads (LSAs) are the second-fastest for dental and chiropractic practices, as the Google Guaranteed badge drives immediate trust and call volume. Local SEO takes 4 to 6 months to mature but delivers the lowest cost-per-patient acquisition over the long term. The highest-performing practices run paid advertising immediately while building SEO in parallel."
  },
  {
    question: "Do you work with dental practices, chiropractors, and med spas outside California?",
    answer: "Yes. GrowSmallBiz serves dental practices, chiropractic clinics, and med spas across the United States. The AI-powered competitive research and patient acquisition systems we build work in any local market — the process is the same regardless of geography: map your local competition, identify keyword gaps your competitors are missing, and build a strategy calibrated to your specific practice type, service mix, and city. We have run campaigns for health and wellness practices in multiple states and apply the same full-stack methodology to every engagement."
  },
  {
    question: "What does a health and wellness marketing agency do?",
    answer: "A health and wellness marketing agency helps dental practices, chiropractic clinics, and med spas attract new patients through digital marketing. The core services are local SEO to rank on Google, Google Ads to capture high-intent searches, reputation management to build and protect the review profile that patients check before booking, and AI automation to respond to patient inquiries 24/7. The goal is a complete patient acquisition system — not individual tactics — so every channel reinforces the others and the practice fills its appointment book consistently."
  },
  {
    question: "How do I get more patients for my medical practice using digital marketing?",
    answer: "The fastest way to get more patients through digital marketing is to run Google Ads targeting the treatments your patients are actively searching for, while simultaneously building your Google Business Profile and review count for local SEO. Google Ads fills your appointment book immediately. Local SEO builds a sustainable pipeline over 4 to 6 months that costs less per patient over time. Reputation management — specifically generating a consistent flow of 5-star Google reviews — amplifies the performance of every other channel. Adding an AI Receptionist to capture after-hours inquiries closes the gap on missed calls, which is where most practices lose patients they already paid to attract."
  }
];
const HealthAndWellness = () => {
  const { strategySessionUrl, freeAuditUrl } = useUtm();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Health & Wellness Marketing Agency | GrowSmallBiz Digital Marketing" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "GrowSmallBiz helps dental practices, chiropractors, and med spas attract more patients with AI-powered local SEO, Google Ads, and reputation management. Schedule a free strategy call." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/health-and-wellness-practices/" })
    ] }),
    /* @__PURE__ */ jsx(
      ServiceJsonLd,
      {
        serviceName: "Health & Wellness Marketing Agency",
        serviceType: "Digital Marketing for Health & Wellness Practices",
        description: "AI-powered local SEO, Google Ads, reputation management, and marketing automation for dental practices, chiropractors, and med spas.",
        url: "/health-and-wellness-practices/",
        breadcrumbs: [
          { name: "Health & Wellness Practices", url: "/health-and-wellness-practices/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("section", { className: "pt-32 pb-24 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: healthWellnessHeroImage, alt: "Modern health and wellness practice interior", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background/85" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 hero-glow" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up", children: [
          /* @__PURE__ */ jsx(Heart, { className: "w-4 h-4" }),
          "Health & Wellness Practice Marketing"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100", children: [
          "Stop Losing Patients to Clinics With Worse Outcomes But ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Better Marketing" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground mb-4 animate-fade-up delay-200 max-w-2xl mx-auto", children: "Your dental practice, chiropractic office, or med spa is losing new patients to competitors with a stronger digital presence. GrowSmallBiz builds the complete patient acquisition system – local SEO, Google Ads, AI automation, and reputation management." }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground/70 mb-8 animate-fade-up delay-200", children: "Serving dental practices, chiropractic clinics, and med spas across the United States." }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3 mb-8 animate-fade-up delay-200", children: practiceTypes.map((practice, index) => /* @__PURE__ */ jsxs(Link, { to: practice.link, className: "inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-border rounded-full text-sm text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors", children: [
          /* @__PURE__ */ jsx(practice.icon, { className: "w-4 h-4 text-primary" }),
          practice.name
        ] }, index)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300", children: [
          /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategySessionUrl, children: [
            "Schedule Strategy Call",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
          ] }) }),
          /* @__PURE__ */ jsx(Button, { variant: "outline", size: "lg", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/local-seo/", children: "Learn About Local SEO" }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-primary mt-4 animate-fade-up delay-300", children: "No commitment. Free 30-minute strategy session for health and wellness practices." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-card/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: "Sound Familiar?" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "These are the challenges we hear from health and wellness practices every day." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto space-y-4", children: painPoints.map((point, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 bg-destructive/10 border border-destructive/20 rounded-xl", children: [
        /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsx("span", { className: "text-destructive text-sm font-bold", children: "✗" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground", children: point })
      ] }, index)) }),
      /* @__PURE__ */ jsxs("div", { className: "text-center mt-12", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xl font-display font-semibold text-primary mb-4", children: "Let's change that." }),
        /* @__PURE__ */ jsx(Button, { variant: "hero", asChild: true, children: /* @__PURE__ */ jsx("a", { href: strategySessionUrl, children: "Get Your Growth Strategy" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center", children: "What Is a Health & Wellness Marketing Agency?" }),
      /* @__PURE__ */ jsx("div", { className: "border-l-4 border-l-primary bg-primary/5 rounded-r-xl p-6 mb-8", children: /* @__PURE__ */ jsx("p", { className: "text-foreground font-semibold leading-relaxed", children: "GrowSmallBiz is a health and wellness marketing agency serving dental practices, chiropractic clinics, and med spas nationwide. The agency builds complete patient acquisition systems — combining local SEO, Google Ads, reputation management, AI automation, and lead nurture — so health and wellness practices attract more patients and fill their appointment books consistently." }) }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 leading-relaxed text-center", children: "A health and wellness marketing agency is a specialized digital marketing partner that helps medical and wellness practices attract new patients, build their online reputation, and grow revenue through targeted strategies. Services include local SEO, Google Ads management, reputation management, website design, and AI automation — all tailored to the healthcare and wellness environment." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed text-center", children: "These agencies serve dental practices, chiropractors, med spas, and wellness clinics that need a consistent pipeline of new patients or clients. The outcome is measurable: more new patients, filled appointment books, and trackable ROI from every marketing dollar spent." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center", children: "The Unique Challenges of Marketing Health & Wellness Businesses" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-12 text-center max-w-3xl mx-auto", children: "Health and wellness marketing faces regulatory and consumer behavior challenges that distinguish it from every other industry. Understanding these dynamics is the difference between a marketing strategy that fills your appointment book and one that produces traffic with no bookings." }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: challenges.map((challenge, index) => /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border-l-4 border-l-accent rounded-r-xl p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-foreground mb-2", children: challenge.title }),
        challenge.stat ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-semibold mb-3", children: challenge.stat }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: challenge.body })
        ] }) : /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: challenge.description })
      ] }, index)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center", children: "Health & Wellness Practices We Serve" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: practices.map((practice) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col bg-surface-elevated border-2 border-[hsl(188_78%_41%_/_0.25)] rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:border-[hsl(188_78%_41%_/_0.6)] hover:shadow-[0_0_30px_hsl(188_78%_41%_/_0.3)]", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-48 overflow-hidden", children: [
          /* @__PURE__ */ jsx("img", { src: practice.image, alt: practice.title, className: "w-full h-full object-cover", loading: "lazy" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(practice.icon, { className: "w-5 h-5 text-primary" }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-foreground", children: practice.title })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 flex-1 flex flex-col", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed flex-1", children: practice.description }),
          /* @__PURE__ */ jsxs(Link, { to: practice.link, className: "text-accent font-semibold text-sm inline-flex items-center gap-1 mt-4 hover:underline", children: [
            practice.linkText,
            " ",
            /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
          ] })
        ] })
      ] }, practice.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: "Digital Marketing Services for Health & Wellness Practices" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6 max-w-5xl mx-auto", children: serviceCards.map((service, index) => /* @__PURE__ */ jsxs("div", { className: "bg-surface-elevated border-2 border-[hsl(188_78%_41%_/_0.25)] rounded-xl p-6 hover:-translate-y-2 transition-all duration-300 hover:border-[hsl(188_78%_41%_/_0.6)] hover:shadow-[0_0_30px_hsl(188_78%_41%_/_0.3)]", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary", children: index + 1 }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-foreground", children: service.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: service.description })
      ] }, service.title)) }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsx(Button, { variant: "hero", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategySessionUrl, children: [
        "Schedule Strategy Call",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center", children: "What Works by Channel — Health & Wellness" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-10 text-center max-w-3xl mx-auto", children: "Effective marketing for health and wellness practices requires channel-specific strategies matched to how patients actually search and decide. One channel does not serve all practice types equally." }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-secondary", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left text-foreground font-bold p-4 text-sm", children: "Channel" }),
          /* @__PURE__ */ jsx("th", { className: "text-left text-foreground font-bold p-4 text-sm", children: "Best For" }),
          /* @__PURE__ */ jsx("th", { className: "text-left text-foreground font-bold p-4 text-sm", children: "Key Insight" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: channelData.map((row, index) => /* @__PURE__ */ jsxs("tr", { className: index % 2 === 0 ? "bg-card" : "bg-secondary/30", children: [
          /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-foreground text-sm", children: row.channel }),
          /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground text-sm", children: row.bestFor }),
          /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground text-sm", children: row.insight })
        ] }, index)) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-accent/5", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center", children: "The Patient Acquisition Funnel for Health Practices" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-12 text-center max-w-3xl mx-auto", children: "Every new patient moves through four stages before they are sitting in your chair. A complete marketing system touches all four — not just the top." }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-4 gap-6", children: funnelSteps.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "relative text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-accent", children: item.step }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-foreground mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: item.description }),
        index < funnelSteps.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-7 -right-3 text-accent", children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-6 h-6" }) })
      ] }, item.step)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center", children: "Results for Health & Wellness Practices" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: caseStudies.map((study, index) => /* @__PURE__ */ jsxs("div", { className: `bg-surface-elevated border-2 border-[hsl(188_78%_41%_/_0.25)] ${study.accent} border-l-4 rounded-r-xl p-6 transition-all duration-300 hover:border-[hsl(188_78%_41%_/_0.6)] hover:shadow-[0_0_30px_hsl(188_78%_41%_/_0.3)]`, children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-foreground mb-1", children: study.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm italic mb-4", children: study.period }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: study.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-accent flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-sm", children: metric })
        ] }, mIndex)) })
      ] }, index)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-card/50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center", children: "Why Health & Wellness Practices Choose GrowSmallBiz" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsx("p", { children: "GrowSmallBiz is a health and wellness marketing agency led by Subrata Guha, a practitioner with 30+ years of Fortune 500 experience in sales, marketing, and digital transformation. Unlike generalist agencies that apply the same playbook to every client, GrowSmallBiz builds each engagement around AI-driven competitive research specific to your practice type, market, and geography. The methodology was refined across dozens of health and wellness client engagements before being brought directly to practices nationwide." }),
        /* @__PURE__ */ jsx("p", { children: "Our AI-powered approach closes the local knowledge gap that stops most agencies: before we touch a single campaign, we use AI-driven competitive research to map your exact local market, identify the keyword opportunities your competitors are missing, and build a strategy calibrated to your specific practice type, service mix, and geography." }),
        /* @__PURE__ */ jsx("p", { children: "The result is a marketing system — not a collection of disconnected tactics. Every channel we run connects to every other channel: SEO builds the authority that makes your ads cheaper. Reputation management lifts conversion rates from your organic and paid traffic. The AI Receptionist captures the after-hours leads that your ads already paid for. Everything compounds." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6 max-w-3xl mx-auto", children: credentials.map((cred) => /* @__PURE__ */ jsxs("div", { className: "bg-surface-elevated border-2 border-[hsl(188_78%_41%_/_0.25)] rounded-xl p-5 text-center hover:-translate-y-1 transition-all duration-300 hover:border-[hsl(188_78%_41%_/_0.6)] hover:shadow-[0_0_30px_hsl(188_78%_41%_/_0.3)]", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-accent mb-2", children: cred.label }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: cred.description })
      ] }, cred.label)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center", children: "Getting Started Is Simple" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 max-w-5xl mx-auto", children: gettingStartedSteps.map((item) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-accent", children: item.step }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-foreground mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: item.description })
      ] }, item.step)) }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsx(Button, { variant: "hero", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategySessionUrl, children: [
        "Schedule Strategy Call",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsx(
      FAQSection,
      {
        faqs,
        title: "Frequently Asked Questions",
        subtitle: "Common questions about health and wellness marketing",
        schemaType: "FAQPage",
        contactCTA: {
          ...baseContactCTA,
          title: "Have more questions about Health & Wellness Marketing?",
          description: "We're here to help! Reach out for a personalized consultation.",
          tagline: "Let's grow your health & wellness practice together."
        }
      }
    ),
    /* @__PURE__ */ jsx(
      CardCTA,
      {
        title: "Ready to Grow Your Health & Wellness Practice?",
        description: "Your competitors are investing in digital marketing right now. Every month without a strong online presence is another month of new patients choosing a practice that ranks above you on Google. GrowSmallBiz builds the complete patient acquisition system that fills your appointment book consistently — so you can focus on delivering exceptional care while we handle your growth.",
        accentWords: ["Health & Wellness Practice"]
      }
    ),
    /* @__PURE__ */ jsx(ConsultationFormSection, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  HealthAndWellness as default
};
