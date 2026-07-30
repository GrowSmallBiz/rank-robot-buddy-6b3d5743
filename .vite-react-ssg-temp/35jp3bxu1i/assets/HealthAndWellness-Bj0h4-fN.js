import { j as jsxDEV, F as Fragment } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { S as ServiceJsonLd } from "./ServiceJsonLd-BLh2oIn0.js";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { B as Button } from "./button-Co-CyCVS.js";
import { C as CardCTA } from "./CardCTA-DT9NPaz7.js";
import { Link } from "react-router-dom";
import { Heart, ArrowRight, ChevronRight, CheckCircle2, Stethoscope, Sparkles } from "lucide-react";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { ConsultationFormSection } from "./ConsultationFormSection-CuyJMyK1.js";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import "react";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./growsmallbiz-logo-bLUzBkSC.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./accordion-TqW6W-yi.js";
import "@radix-ui/react-accordion";
const healthWellnessHeroImage = "/assets/health-wellness-hero-DPFyLwNy.webp";
const dentalImage = "/assets/dental-practice-marketing-od0K0fog.webp";
const chiroImage = "/assets/chiropractic-marketing-CIKyWpXl.webp";
const medSpaImage = "/assets/med-spa-marketing-DBSHS3wd.webp";
const practiceTypes = [
  { icon: Stethoscope, name: "Dental", link: "/dental-marketing/" },
  { icon: Heart, name: "Chiropractic", link: "/health-and-wellness-practices/marketing-for-chiropractors/" },
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
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Marketing for Health & Wellness Practices | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 250,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Attract more patients with GrowSmallBiz AI-powered marketing for dental, chiropractic, and med spa practices. Serving nationwide. Contact us." }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 251,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "digital marketing for health practices, SEO for wellness businesses, patient acquisition strategies, reputation management for dental practices, Google Ads for chiropractors, local SEO for med spas, marketing solutions for healthcare, GrowSmallBiz services" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 252,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/health-and-wellness-practices/" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 253,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "AI-Driven Growth for Local Service Businesses | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 254,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 249,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ServiceJsonLd,
      {
        serviceName: "Health & Wellness Marketing Agency",
        serviceType: "Digital Marketing for Health & Wellness Practices",
        description: "AI-powered local SEO, Google Ads, reputation management, and marketing automation for dental practices, chiropractors, and med spas.",
        url: "/health-and-wellness-practices/",
        breadcrumbs: [
          { name: "Health & Wellness Practices", url: "/health-and-wellness-practices/" }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 256,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 266,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "pt-32 pb-24 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxDEV("img", { src: healthWellnessHeroImage, alt: "Modern health and wellness practice interior featuring treatment chair, waiting area with plants, and kitchenette, emphasizing patient comfort and professional environment.", className: "w-full h-full object-cover" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 271,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-background/85" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 272,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 270,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 hero-glow" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 274,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 275,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 276,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV(Heart, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 280,
            columnNumber: 15
          }, void 0),
          "Health & Wellness Practice Marketing"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 279,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100 bg-gradient-heading bg-clip-text text-transparent", children: "Stop Losing Patients: AI Marketing for Dental, Chiropractic & Med Spas" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 283,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-muted-foreground mb-4 animate-fade-up delay-200 max-w-2xl mx-auto", children: "Your dental practice, chiropractic office, or med spa is losing new patients to competitors with a stronger digital presence. GrowSmallBiz builds the complete patient acquisition system – local SEO, Google Ads, AI automation, and reputation management." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 286,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground/70 mb-8 animate-fade-up delay-200", children: "Serving dental practices, chiropractic clinics, and med spas across the United States." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 289,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-3 mb-8 animate-fade-up delay-200", children: practiceTypes.map((practice, index) => /* @__PURE__ */ jsxDEV(Link, { to: practice.link, className: "inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-border rounded-full text-sm text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors", children: [
          /* @__PURE__ */ jsxDEV(practice.icon, { className: "w-4 h-4 text-primary" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 297,
            columnNumber: 19
          }, void 0),
          practice.name
        ] }, index, true, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 296,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 294,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300", children: [
          /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: strategySessionUrl, children: [
            "Schedule Strategy Call",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
              lineNumber: 307,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 305,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 304,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(Button, { variant: "outline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/local-seo/", children: "Learn About Local SEO" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 311,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 310,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 303,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-primary mt-4 animate-fade-up delay-300", children: "No commitment. Free 30-minute strategy session for health and wellness practices." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 316,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 278,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 277,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 269,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-card/50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center mb-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Common Marketing Challenges for Health & Wellness Practices" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 325,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: "These are the challenges we hear from health and wellness practices every day." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 328,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 324,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl mx-auto space-y-4", children: painPoints.map((point, index) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4 p-4 bg-destructive/10 border border-destructive/20 rounded-xl", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxDEV("span", { className: "text-destructive text-sm font-bold", children: "✗" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 334,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 333,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-foreground", children: point }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 336,
          columnNumber: 17
        }, void 0)
      ] }, index, true, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 332,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 330,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-12", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl font-display font-semibold text-primary mb-4", children: "Let's change that." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 341,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(Button, { variant: "hero", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: strategySessionUrl, children: "Get Your Growth Strategy" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 343,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 342,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 340,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 323,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 322,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center bg-gradient-heading bg-clip-text text-transparent", children: "What Is a Health & Wellness Marketing Agency?" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 353,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "border-l-4 border-l-primary bg-primary/5 rounded-r-xl p-6 mb-8", children: /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-semibold leading-relaxed", children: "GrowSmallBiz is a health and wellness marketing agency serving dental practices, chiropractic clinics, and med spas nationwide. The agency builds complete patient acquisition systems — combining local SEO, Google Ads, reputation management, AI automation, and lead nurture — so health and wellness practices attract more patients and fill their appointment books consistently." }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 359,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 358,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mb-6 leading-relaxed text-center", children: "A health and wellness marketing agency is a specialized digital marketing partner that helps medical and wellness practices attract new patients, build their online reputation, and grow revenue through targeted strategies. Services include local SEO, Google Ads management, reputation management, website design, and AI automation — all tailored to the healthcare and wellness environment." }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 364,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed text-center", children: "These agencies serve dental practices, chiropractors, med spas, and wellness clinics that need a consistent pipeline of new patients or clients. The outcome is measurable: more new patients, filled appointment books, and trackable ROI from every marketing dollar spent." }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 367,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 352,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 351,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 350,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center bg-gradient-heading bg-clip-text text-transparent", children: "The Unique Challenges of Marketing Health & Wellness Businesses" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 378,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mb-12 text-center max-w-3xl mx-auto", children: "Health and wellness marketing faces regulatory and consumer behavior challenges that distinguish it from every other industry. Understanding these dynamics is the difference between a marketing strategy that fills your appointment book and one that produces traffic with no bookings." }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 381,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: challenges.map((challenge, index) => /* @__PURE__ */ jsxDEV("div", { className: "bg-accent/5 border-l-4 border-l-accent rounded-r-xl p-6", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-foreground mb-2", children: challenge.title }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 387,
          columnNumber: 19
        }, void 0),
        challenge.stat ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-semibold mb-3", children: challenge.stat }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 390,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: challenge.body }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 391,
            columnNumber: 23
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 389,
          columnNumber: 21
        }, void 0) : /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: challenge.description }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 394,
          columnNumber: 21
        }, void 0)
      ] }, index, true, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 386,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 384,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 377,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 376,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 375,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center bg-gradient-heading bg-clip-text text-transparent", children: "Health & Wellness Practices We Serve" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 406,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: practices.map((practice) => /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col bg-surface-elevated border-2 border-[hsl(188_78%_41%_/_0.25)] rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:border-[hsl(188_78%_41%_/_0.6)] hover:shadow-[0_0_30px_hsl(188_78%_41%_/_0.3)]", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative h-48 overflow-hidden", children: [
          /* @__PURE__ */ jsxDEV("img", { src: practice.image, alt: practice.title, className: "w-full h-full object-cover", loading: "lazy" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 413,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 414,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-4 left-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(practice.icon, { className: "w-5 h-5 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
              lineNumber: 416,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-foreground", children: practice.title }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
              lineNumber: 417,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 415,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 412,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "p-6 flex-1 flex flex-col", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm leading-relaxed flex-1", children: practice.description }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 421,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(Link, { to: practice.link, className: "text-accent font-semibold text-sm inline-flex items-center gap-1 mt-4 hover:underline", children: [
            practice.linkText,
            " ",
            /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
              lineNumber: 423,
              columnNumber: 41
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 422,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 420,
          columnNumber: 17
        }, void 0)
      ] }, practice.title, true, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 411,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 409,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 405,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 404,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center mb-12", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Digital Marketing Services for Health & Wellness Practices" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 436,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 435,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 max-w-5xl mx-auto", children: serviceCards.map((service, index) => /* @__PURE__ */ jsxDEV("div", { className: "bg-surface-elevated border-2 border-[hsl(188_78%_41%_/_0.25)] rounded-xl p-6 hover:-translate-y-2 transition-all duration-300 hover:border-[hsl(188_78%_41%_/_0.6)] hover:shadow-[0_0_30px_hsl(188_78%_41%_/_0.3)]", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary", children: index + 1 }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 444,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-foreground", children: service.title }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 445,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 443,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm leading-relaxed", children: service.description }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 447,
          columnNumber: 17
        }, void 0)
      ] }, service.title, true, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 442,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 440,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxDEV(Button, { variant: "hero", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: strategySessionUrl, children: [
        "Schedule Strategy Call",
        /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-4 h-4" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 455,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 453,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 452,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 451,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 434,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 433,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center bg-gradient-heading bg-clip-text text-transparent", children: "What Works by Channel — Health & Wellness" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 466,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mb-10 text-center max-w-3xl mx-auto", children: "Effective marketing for health and wellness practices requires channel-specific strategies matched to how patients actually search and decide. One channel does not serve all practice types equally." }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 469,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV("table", { className: "w-full border-collapse", children: [
        /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { className: "bg-secondary", children: [
          /* @__PURE__ */ jsxDEV("th", { className: "text-left text-foreground font-bold p-4 text-sm", children: "Channel" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 476,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("th", { className: "text-left text-foreground font-bold p-4 text-sm", children: "Best For" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 477,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("th", { className: "text-left text-foreground font-bold p-4 text-sm", children: "Key Insight" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 478,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 475,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 474,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("tbody", { children: channelData.map((row, index) => /* @__PURE__ */ jsxDEV("tr", { className: index % 2 === 0 ? "bg-card" : "bg-secondary/30", children: [
          /* @__PURE__ */ jsxDEV("td", { className: "p-4 font-bold text-foreground text-sm", children: row.channel }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 484,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("td", { className: "p-4 text-muted-foreground text-sm", children: row.bestFor }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 485,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("td", { className: "p-4 text-muted-foreground text-sm", children: row.insight }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 486,
            columnNumber: 23
          }, void 0)
        ] }, index, true, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 483,
          columnNumber: 21
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 481,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 473,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 472,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 465,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 464,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 463,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-accent/5", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center bg-gradient-heading bg-clip-text text-transparent", children: "The Patient Acquisition Funnel for Health Practices" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 500,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mb-12 text-center max-w-3xl mx-auto", children: "Every new patient moves through four stages before they are sitting in your chair. A complete marketing system touches all four — not just the top." }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 503,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-4 gap-6", children: funnelSteps.map((item, index) => /* @__PURE__ */ jsxDEV("div", { className: "relative text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxDEV("span", { className: "text-2xl font-bold text-accent", children: item.step }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 510,
          columnNumber: 21
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 509,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-foreground mb-2", children: item.title }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 512,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm leading-relaxed", children: item.description }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 513,
          columnNumber: 19
        }, void 0),
        index < funnelSteps.length - 1 && /* @__PURE__ */ jsxDEV("div", { className: "hidden md:block absolute top-7 -right-3 text-accent", children: /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-6 h-6" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 516,
          columnNumber: 23
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 515,
          columnNumber: 21
        }, void 0)
      ] }, item.step, true, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 508,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 506,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 499,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 498,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 497,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center bg-gradient-heading bg-clip-text text-transparent", children: "Results for Health & Wellness Practices" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 530,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: caseStudies.map((study, index) => /* @__PURE__ */ jsxDEV("div", { className: `bg-surface-elevated border-2 border-[hsl(188_78%_41%_/_0.25)] ${study.accent} border-l-4 rounded-r-xl p-6 transition-all duration-300 hover:border-[hsl(188_78%_41%_/_0.6)] hover:shadow-[0_0_30px_hsl(188_78%_41%_/_0.3)]`, children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-foreground mb-1", children: study.title }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 536,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm italic mb-4", children: study.period }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 537,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: study.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4 text-accent flex-shrink-0 mt-0.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 541,
            columnNumber: 25
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-muted-foreground text-sm", children: metric }, void 0, false, {
            fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
            lineNumber: 542,
            columnNumber: 25
          }, void 0)
        ] }, mIndex, true, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 540,
          columnNumber: 23
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 538,
          columnNumber: 19
        }, void 0)
      ] }, index, true, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 535,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 533,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 529,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 528,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 527,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-card/50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center bg-gradient-heading bg-clip-text text-transparent", children: "Why Health & Wellness Practices Choose GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 557,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz is a health and wellness marketing agency led by Subrata Guha, a practitioner with 30+ years of Fortune 500 experience in sales, marketing, and digital transformation. Unlike generalist agencies that apply the same playbook to every client, GrowSmallBiz builds each engagement around AI-driven competitive research specific to your practice type, market, and geography. The methodology was refined across dozens of health and wellness client engagements before being brought directly to practices nationwide." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 561,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Our AI-powered approach closes the local knowledge gap that stops most agencies: before we touch a single campaign, we use AI-driven competitive research to map your exact local market, identify the keyword opportunities your competitors are missing, and build a strategy calibrated to your specific practice type, service mix, and geography." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 564,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "The result is a marketing system — not a collection of disconnected tactics. Every channel we run connects to every other channel: SEO builds the authority that makes your ads cheaper. Reputation management lifts conversion rates from your organic and paid traffic. The AI Receptionist captures the after-hours leads that your ads already paid for. Everything compounds." }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 567,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 560,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-6 max-w-3xl mx-auto", children: credentials.map((cred) => /* @__PURE__ */ jsxDEV("div", { className: "bg-surface-elevated border-2 border-[hsl(188_78%_41%_/_0.25)] rounded-xl p-5 text-center hover:-translate-y-1 transition-all duration-300 hover:border-[hsl(188_78%_41%_/_0.6)] hover:shadow-[0_0_30px_hsl(188_78%_41%_/_0.3)]", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-xl font-bold text-accent mb-2", children: cred.label }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 574,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm", children: cred.description }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 575,
          columnNumber: 19
        }, void 0)
      ] }, cred.label, true, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 573,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 571,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 556,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 555,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 554,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center bg-gradient-heading bg-clip-text text-transparent", children: "Getting Started Is Simple" }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 586,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-8 max-w-5xl mx-auto", children: gettingStartedSteps.map((item) => /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxDEV("span", { className: "text-xl font-bold text-accent", children: item.step }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 593,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 592,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-foreground mb-2", children: item.title }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 595,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm leading-relaxed", children: item.description }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 596,
          columnNumber: 17
        }, void 0)
      ] }, item.step, true, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 591,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 589,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxDEV(Button, { variant: "hero", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: strategySessionUrl, children: [
        "Schedule Strategy Call",
        /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-4 h-4" }, void 0, false, {
          fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
          lineNumber: 604,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 602,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 601,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 600,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 585,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 584,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
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
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 612,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      CardCTA,
      {
        title: "Ready to Grow Your Health & Wellness Practice?",
        description: "Your competitors are investing in digital marketing right now. Every month without a strong online presence is another month of new patients choosing a practice that ranks above you on Google. GrowSmallBiz builds the complete patient acquisition system that fills your appointment book consistently — so you can focus on delivering exceptional care while we handle your growth.",
        accentWords: ["Health & Wellness Practice"]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
        lineNumber: 625,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 631,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
      lineNumber: 632,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/industries/HealthAndWellness.tsx",
    lineNumber: 248,
    columnNumber: 5
  }, void 0);
};
export {
  HealthAndWellness as default
};
