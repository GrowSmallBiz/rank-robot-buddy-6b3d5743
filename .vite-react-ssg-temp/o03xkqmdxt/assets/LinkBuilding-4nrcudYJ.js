import { j as jsxDEV } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { S as ServiceJsonLd } from "./ServiceJsonLd-BLh2oIn0.js";
import { I as ImageObjectJsonLd } from "./ImageObjectJsonLd-BM8krSlV.js";
import { S as SpeakableJsonLd } from "./SpeakableJsonLd-C5xMee6c.js";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { S as ServiceHero } from "./ServiceHero-DKih7SuP.js";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { ConsultationFormSection } from "./ConsultationFormSection-XatlJMLz.js";
import { S as SectionHeader } from "./SectionHeader-BzL5eqYC.js";
import { LinkIcon, TrendingUp, Search, Sparkles, CheckCircle2, XCircle, Users, Shield, BarChart3, Target, FileText, Globe, AlertTriangle, Layers, Building2, Bot } from "lucide-react";
import { B as Button } from "./button-Co-CyCVS.js";
import { Link } from "react-router-dom";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { C as CardCTA } from "./CardCTA-_OitSbFr.js";
import "react";
import { G as GlowCard } from "./glow-card-2Rtno8B6.js";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "./growsmallbiz-logo-bLUzBkSC.js";
import "./accordion-TqW6W-yi.js";
import "@radix-ui/react-accordion";
import "@radix-ui/react-slot";
import "class-variance-authority";
const linkBuildingHeroBg = "/assets/link-building-hero-bg-D9jGtmVd.webp";
const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const SECONDARY_CTA_BASE = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page";
const campaignItems = [
  {
    icon: Search,
    title: "Backlink Gap Analysis",
    description: "We audit your site alongside your top competitors to identify exactly which link opportunities will close the authority gap fastest."
  },
  {
    icon: Target,
    title: "Prospect Research and Vetting",
    description: "We find relevant, high-authority sites in your niche and verify that each one meets our quality standards before any outreach begins."
  },
  {
    icon: FileText,
    title: "Personalized Outreach",
    description: "Every pitch is written for the specific site and editor we are contacting. No templates. No spray-and-pray blasts."
  },
  {
    icon: Globe,
    title: "Content Creation for Placements",
    description: "Where a guest post or supporting asset is needed to earn the link, our writers create it — fully optimized and on-brand."
  },
  {
    icon: Shield,
    title: "Anchor Text Strategy",
    description: "We manage your anchor text mix to build a natural, diverse profile that strengthens authority without triggering over-optimization penalties."
  },
  {
    icon: BarChart3,
    title: "Link Monitoring and Reporting",
    description: "Every link we earn is tracked. You receive clear, plain-language reporting that shows what was placed, where it appeared, and how it supports your broader SEO visibility."
  },
  {
    icon: AlertTriangle,
    title: "Toxic Link Identification",
    description: "We flag and help you address any harmful links in your existing profile that may be suppressing your rankings."
  },
  {
    icon: Layers,
    title: "Ongoing Campaign Optimization",
    description: "We review performance each month and adjust targeting, outreach angles, and content strategy based on what is working."
  }
];
const whatWeDo = [
  "Editorial placements on real, trafficked websites",
  "Outreach to relevant, niche-aligned publishers",
  "Content-driven link earning",
  "Transparent reporting on every placement",
  "Anchor text strategies built for long-term health",
  "Links that pass real authority"
];
const whatWeAvoid = [
  "Paid link schemes and link networks",
  "Generic directories with no topical relevance",
  "Automated link blasts and spun content",
  "Tactics that violate Google's Webmaster guidelines",
  "Exact-match anchor stuffing",
  "Links from penalized or deindexed domains"
];
const whyGSBItems = [
  {
    icon: Layers,
    num: "1",
    title: "Link building supports a bigger SEO system.",
    description: "We connect authority building to your content, on-page SEO, local visibility, and conversion goals so the work supports a broader growth strategy."
  },
  {
    icon: Building2,
    num: "2",
    title: "Built for local service businesses.",
    description: "Our campaigns are designed around real local competition, real service-market search behavior, and real-world business goals — not enterprise assumptions."
  },
  {
    icon: Bot,
    num: "3",
    title: "Agentic AI playbooks + human strategy.",
    description: "We use AI where it improves speed, pattern recognition, and monitoring, while keeping strategic judgment and quality control in human hands."
  },
  {
    icon: BarChart3,
    num: "4",
    title: "Transparent reporting with context.",
    description: "You see what was earned, why it matters, and how it fits the bigger picture. No black-box campaigns. No vague updates."
  },
  {
    icon: TrendingUp,
    num: "5",
    title: "Focused on business impact.",
    description: "The goal is not just more links. The goal is stronger authority that improves visibility, supports your revenue-producing pages, and contributes to long-term growth."
  }
];
const faqs = [
  {
    question: "How long does it take to see results from link building?",
    answer: "Link building timelines depend on your starting authority, competition, industry, and the quality of opportunities available in your market. Many businesses begin seeing early authority gains within the first few months, with stronger impact building over time as relevant placements, mentions, and off-site trust signals accumulate."
  },
  {
    question: "How many links will I get per month?",
    answer: "Volume depends on your service plan and campaign scope. More important than raw numbers is the quality and relevance of each placement. One link from a high-authority, niche-relevant site is worth more than many low-quality links that do little to support visibility. We focus on earning the links that move performance, not padding reports with links that do not."
  },
  {
    question: "Will I be able to see the links you build for me?",
    answer: "Yes. Every link we place is documented in your monthly report with the domain name, URL, and authority metrics. You can verify every placement independently."
  },
  {
    question: "Do I need to create content for link building?",
    answer: "In many cases, yes — guest posts and resource-based link earning require content. Our service includes content creation for placements, so you do not need to produce it yourself. We write everything to your brand standards and get your approval before it is submitted anywhere."
  },
  {
    question: "What is the difference between Link Building and Authority Building?",
    answer: "Link building is one part of authority building. It focuses on earning relevant backlinks from external websites. Authority building is broader — it also includes the strength of your service pages, content depth, brand signals, local relevance, mentions, internal linking, and the overall trust your website earns over time. GrowSmallBiz treats link building as one component inside a broader Managed AI SEO strategy, not as a disconnected activity."
  },
  {
    question: "Is link building safe? Can it hurt my rankings?",
    answer: "High-quality, editorial link building is safe when it is done with strong quality standards, relevance, and long-term search health in mind. The tactics that cause problems are the ones we avoid — paid schemes, private blog networks, automated spam, and manipulative anchor abuse. Our process is designed to support sustainable authority growth, not short-term shortcuts."
  },
  {
    question: "What kinds of sites will you get links from?",
    answer: "We target sites that are topically relevant to your industry, have real organic traffic, and show signals of genuine credibility. This may include industry publications, local and regional outlets, relevant blogs, business associations, and resource pages. We do not use link farms, private blog networks, or sites that exist solely to sell links."
  },
  {
    question: "Can you build links if my site is brand new?",
    answer: "Yes, though we will be transparent that newer domains often take longer to see authority gains. A fresh domain can still benefit from link building early because it helps establish trust signals and supports a more credible long-term growth path. We adjust campaign pacing and targeting to build a natural profile from the start."
  },
  {
    question: "Is link building enough on its own to improve rankings?",
    answer: "Usually not by itself. Link building works best when it supports a broader SEO foundation — strong service pages, local intent targeting, technical health, trust signals, and clear conversion paths. That is why GrowSmallBiz treats link building as one part of a larger Managed AI SEO strategy."
  }
];
const LinkBuilding = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");
  const SECONDARY_CTA_URL = buildUrl(SECONDARY_CTA_BASE, "free-seo-audit");
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Link Building Services for Local Businesses | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 184,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "GrowSmallBiz provides premium link building services from relevant sites for local businesses. Strongest signals Google uses to rank pages." }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "link building, local SEO, SEO services, high-quality backlinks, digital marketing agency, authority building, personalized outreach, SEO strategy" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/services/seo-agency/link-building/" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 187,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "SEO Link Building For Service Business Growth | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 188,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
      lineNumber: 183,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ServiceJsonLd,
      {
        serviceName: "Link Building for Local Service Businesses",
        serviceType: "Link Building SEO",
        description: "GrowSmallBiz's managed link-building service earns real, editorially placed links from relevant sites — so you rank higher, attract more qualified traffic, and grow your local authority.",
        url: "/services/seo-agency/link-building/",
        breadcrumbs: [
          { name: "Services", url: "/services/" },
          { name: "Managed AI SEO", url: "/services/seo-agency/" },
          { name: "Link Building", url: "/services/seo-agency/link-building/" }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 191,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      ImageObjectJsonLd,
      {
        pageUrl: "/services/seo-agency/link-building/",
        images: [
          {
            url: linkBuildingHeroBg,
            caption: "Editorial Link Building service for local businesses",
            description: "Hero illustration for GrowSmallBiz's Link Building service — earning relevant, editorial backlinks from credible publications and niche-aligned sites that strengthen domain authority and local search visibility.",
            width: 1920,
            height: 1080
          }
        ]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 203,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(SpeakableJsonLd, { pageUrl: "/services/seo-agency/link-building/" }, void 0, false, {
      fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
      lineNumber: 216,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
      lineNumber: 218,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV(
        ServiceHero,
        {
          badge: { icon: LinkIcon, text: "Link Building for Local Service Businesses" },
          title: "Build the Backlink Profile Your Competitors Wish They",
          titleHighlight: "Had",
          subtitle: "Build the Backlink Profile That Helps Local Service Businesses Rank, Get Discovered, and Earn Trust<br /><br />Link building is one part of a stronger SEO system. GrowSmallBiz helps local service businesses earn relevant, editorially placed links that strengthen local authority, support visibility across search ecosystems, and reinforce the pages that drive leads, calls, and booked jobs.",
          primaryCTA: {
            label: "Schedule Strategy Call",
            href: PRIMARY_CTA_URL,
            variant: "hero",
            external: true
          },
          secondaryCTA: {
            label: "Free SEO Audit",
            href: SECONDARY_CTA_URL,
            variant: "heroOutline",
            external: true
          },
          backgroundImage: linkBuildingHeroBg,
          overlayOpacity: 90
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 222,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "THE FUNDAMENTALS" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 248,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Why Link Building Still Matters Inside a Holistic SEO Strategy" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 249,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 247,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Links still matter because authority still matters. But for local service businesses, links work best when they reinforce a broader SEO system — strong service pages, local intent targeting, topical authority, trust signals, and conversion-ready site structure. The goal is not just to get links. The goal is to strengthen the credibility behind the pages that help your business rank, get discovered, and grow." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 255,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xl md:text-2xl font-display font-bold text-foreground text-center pt-4", children: "Three reasons link building still matters:" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 259,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 254,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-0 max-w-3xl mx-auto mt-10", children: [
          {
            icon: TrendingUp,
            num: "01",
            title: "Authority strengthens visibility.",
            desc: "Relevant backlinks remain one of the clearest external trust signals search systems can evaluate. When credible, relevant websites reference your business, they strengthen the authority behind your domain and the pages you want surfaced."
          },
          {
            icon: Search,
            num: "02",
            title: "Strong authority helps good pages perform better.",
            desc: "Links work best when they support well-optimized service pages, location pages, and supporting content. They do not replace good SEO foundations, but they can make strong pages more competitive and more durable."
          },
          {
            icon: Sparkles,
            num: "03",
            title: "The value compounds over time.",
            desc: "Unlike paid traffic that disappears the moment spend stops, authority can continue supporting search visibility long after the placement is earned. The right links keep contributing to your broader SEO performance over time."
          }
        ].map((step, i) => /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50", style: { animationDelay: `${i * 0.1}s` }, children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-primary font-mono text-lg mt-0.5", children: step.num }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
                lineNumber: 288,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV(step.icon, { className: "w-6 h-6 text-primary mt-1 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
                lineNumber: 289,
                columnNumber: 25
              }, void 0),
              step.title
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
              lineNumber: 287,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed pl-16", children: step.desc }, void 0, false, {
              fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
              lineNumber: 292,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 286,
            columnNumber: 21
          }, void 0),
          i < 2 && /* @__PURE__ */ jsxDEV("div", { className: "border-b border-primary/10 mx-8" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 294,
            columnNumber: 31
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 285,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 264,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 246,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 245,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 244,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "COMPLETE CAMPAIGN" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 306,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "What GrowSmallBiz Includes in Your Link Building Campaign" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 307,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-4", children: "Link building is not treated here as a disconnected tactic. It supports the broader Managed AI SEO strategy by strengthening the authority behind your service pages, location pages, and supporting content. Our campaign includes the research, outreach, content support, profile monitoring, and ongoing optimization needed to make link acquisition contribute to broader visibility and business growth." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 310,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 305,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-lg font-display font-semibold text-foreground mb-10 animate-fade-up", children: "What is included in your campaign:" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 313,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto", children: campaignItems.map((item, index) => /* @__PURE__ */ jsxDEV(
          GlowCard,
          {
            className: "p-6 animate-fade-up",
            style: { animationDelay: `${index * 0.05}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV(item.icon, { className: "w-5 h-5 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
                lineNumber: 325,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
                lineNumber: 324,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-semibold text-foreground mb-2", children: item.title }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
                lineNumber: 327,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.description }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
                lineNumber: 328,
                columnNumber: 19
              }, void 0)
            ]
          },
          index,
          true,
          {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 319,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 317,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-sm text-muted-foreground mt-10 italic max-w-3xl mx-auto animate-fade-up", style: { animationDelay: "0.4s" }, children: "Note: Specific deliverable volumes and campaign scope are defined in your service plan. Contact us to discuss what is right for your business." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 333,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 304,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 303,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "QUALITY MATTERS" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 344,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "There Are Two Ways to Build Backlinks. Only One of Them Works." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 345,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-4", children: "The link-building industry has a reputation problem because a lot of agencies still sell tactics that Google has explicitly penalized for over a decade. It is important to understand the difference." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 348,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 343,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl p-8 border border-primary/30 animate-fade-up", style: { backgroundColor: "hsl(210 40% 16%)" }, children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-foreground mb-6 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-6 h-6 text-primary shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
                lineNumber: 355,
                columnNumber: 21
              }, void 0),
              "What We Do"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
              lineNumber: 354,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4", children: whatWeDo.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
                lineNumber: 361,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "text-muted-foreground text-sm", children: item }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
                lineNumber: 362,
                columnNumber: 25
              }, void 0)
            ] }, i, true, {
              fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
              lineNumber: 360,
              columnNumber: 23
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
              lineNumber: 358,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 353,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl p-8 border border-destructive/30 animate-fade-up", style: { backgroundColor: "hsl(210 40% 16%)", animationDelay: "0.1s" }, children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-foreground mb-6 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV(XCircle, { className: "w-6 h-6 text-destructive shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
                lineNumber: 371,
                columnNumber: 21
              }, void 0),
              "What We Avoid"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
              lineNumber: 370,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4", children: whatWeAvoid.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV(XCircle, { className: "w-4 h-4 text-destructive mt-0.5 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
                lineNumber: 377,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "text-muted-foreground text-sm", children: item }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
                lineNumber: 378,
                columnNumber: 25
              }, void 0)
            ] }, i, true, {
              fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
              lineNumber: 376,
              columnNumber: 23
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
              lineNumber: 374,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 369,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 351,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl p-6 border-l-4 border-primary mt-8 animate-fade-up", style: { backgroundColor: "hsl(210 40% 16%)", animationDelay: "0.2s" }, children: /* @__PURE__ */ jsxDEV("p", { className: "text-foreground leading-relaxed", children: "Spammy links do not just fail to help — they can actively suppress your rankings or trigger a manual penalty. Every tactic we use is designed to withstand algorithm updates and audits." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 386,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 385,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 342,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 341,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 340,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "OUR APPROACH" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 399,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "How GrowSmallBiz Uses Agentic AI Playbooks + Human Strategy" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 400,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 398,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "We use agentic AI to improve research, prioritization, monitoring, and reporting — while human strategy stays in control of quality thresholds, outreach judgment, brand alignment, and business relevance." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 406,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "That means faster research, smarter decisions, cleaner execution, and reporting that helps you understand not just what was done, but why it matters." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 409,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 405,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-0 max-w-3xl mx-auto mt-10", children: [
          {
            icon: Search,
            title: "Faster prospect discovery, better prioritization.",
            desc: "Our agentic AI playbooks help analyze large sets of potential linking domains against your niche, competitors, and authority indicators so we can identify stronger opportunities faster."
          },
          {
            icon: Users,
            title: "Human-reviewed outreach, not AI spam.",
            desc: "AI can support drafting and pattern recognition, but every outreach message is reviewed, refined, and guided by a human. That keeps the communication more relevant, more natural, and more aligned with your brand."
          },
          {
            icon: Shield,
            title: "Profile monitoring that protects long-term growth.",
            desc: "We use AI-assisted monitoring to track anchor text distribution, link velocity, and domain diversity so unnatural patterns can be flagged early and long-term authority growth stays healthier."
          },
          {
            icon: BarChart3,
            title: "Reporting tied to strategy, visibility, and business impact.",
            desc: "Instead of overwhelming you with raw exports, we use AI-supported analysis to turn campaign activity into reporting that is clearer, more strategic, and easier to act on."
          }
        ].map((item, i) => /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50", style: { animationDelay: `${i * 0.1}s` }, children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV(item.icon, { className: "w-6 h-6 text-primary mt-1 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
                lineNumber: 440,
                columnNumber: 25
              }, void 0),
              item.title
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
              lineNumber: 439,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed pl-9", children: item.desc }, void 0, false, {
              fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
              lineNumber: 443,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 438,
            columnNumber: 21
          }, void 0),
          i < 3 && /* @__PURE__ */ jsxDEV("div", { className: "border-b border-primary/10 mx-8" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 445,
            columnNumber: 31
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 437,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 414,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 397,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 396,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 395,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: "LOCAL IMPACT" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 458,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "section-title bg-gradient-heading bg-clip-text text-transparent", children: "Why Local Service Businesses Benefit From Link Building" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 459,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 457,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Local service businesses rarely need more SEO activity for the sake of activity. They need stronger visibility where real buyers search, stronger trust behind their service pages, and a better chance of outranking competitors who stop at the basics." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 465,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "That is where link building helps. As part of a broader SEO system, it can strengthen the authority behind your service pages and location pages, reinforce local relevance, support long-term ranking stability, and make the rest of your SEO work harder." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 468,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xl md:text-2xl font-display font-bold text-foreground text-center pt-4", children: "For local service businesses, the upside is practical:" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 472,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 464,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-10 max-w-3xl mx-auto", children: /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4 animate-fade-up", style: { animationDelay: "0.1s" }, children: [
          { bold: "Stronger authority in competitive local markets.", text: "Many local businesses invest in basic on-page SEO and Google Business Profile work, but far fewer invest consistently in authority building. That creates opportunity for businesses that do." },
          { bold: "More support for service pages and city pages.", text: "Relevant backlinks can strengthen the credibility behind the pages that target your core services and locations, helping those pages compete more effectively." },
          { bold: "Better long-term visibility durability.", text: "Businesses that rely only on thin content or surface-level optimization are often more vulnerable to fluctuations. Stronger authority creates a more durable foundation." },
          { bold: "Stronger support for broader SEO performance.", text: "Link building helps more than one page. When done well, it supports your wider content ecosystem, strengthens overall trust, and reinforces the broader visibility strategy." }
        ].map((point, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 rounded-2xl p-6 border-l-4 border-primary", style: { backgroundColor: "hsl(210 40% 16%)" }, children: [
          /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 486,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-foreground/90", children: [
            /* @__PURE__ */ jsxDEV("strong", { className: "text-foreground", children: point.bold }, void 0, false, {
              fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
              lineNumber: 488,
              columnNumber: 25
            }, void 0),
            " ",
            point.text
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 487,
            columnNumber: 23
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 485,
          columnNumber: 21
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 478,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 477,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 456,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 455,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 454,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeader,
          {
            subtitle: "OUR DIFFERENCE",
            title: "Why Local Service Businesses Choose GrowSmallBiz"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 501,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-muted-foreground max-w-3xl mx-auto -mt-10 mb-12 animate-fade-up", children: "We are not trying to be a bulk link vendor. We are building authority as part of a broader Managed AI SEO strategy designed to help local service businesses rank, get discovered, and convert more of the right traffic." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 505,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-lg font-display font-semibold text-foreground mb-10 animate-fade-up", children: "What makes our approach different:" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 509,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-0 max-w-3xl mx-auto", children: whyGSBItems.map((item, i) => /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50",
              style: { animationDelay: `${i * 0.08}s` },
              children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-primary font-mono text-lg mt-0.5", children: [
                    item.num,
                    "."
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
                    lineNumber: 521,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(item.icon, { className: "w-6 h-6 text-primary mt-1 shrink-0" }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
                    lineNumber: 522,
                    columnNumber: 23
                  }, void 0),
                  item.title
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
                  lineNumber: 520,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed pl-16", children: item.description }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
                  lineNumber: 525,
                  columnNumber: 21
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
              lineNumber: 516,
              columnNumber: 19
            },
            void 0
          ),
          i < whyGSBItems.length - 1 && /* @__PURE__ */ jsxDEV("div", { className: "border-b border-primary/10 mx-8" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 527,
            columnNumber: 50
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 515,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 513,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-12 animate-fade-up", style: { animationDelay: "0.45s" }, children: /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/", className: "text-primary hover:underline text-sm font-medium inline-flex items-center gap-1", children: "← Back to Managed AI SEO Overview" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 533,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 532,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 500,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 499,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          title: "Frequently Asked Questions About Link Building",
          faqs,
          schemaType: "FAQPage",
          contactCTA: {
            ...baseContactCTA,
            title: "Have questions about link building?",
            description: "We're here to help you understand how link building fits your business.",
            tagline: "Let's build your authority together."
          }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 541,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { id: "final-cta", className: "py-20 lg:py-28", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-4", children: "THE NEXT STEP" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 557,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight bg-gradient-heading bg-clip-text text-transparent", children: "Ready to Build the Backlink Profile That Puts You Ahead?" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 558,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground mb-8 max-w-3xl mx-auto", children: "Your competitors are not standing still. Every month without a consistent link-building strategy is a month they are widening the authority gap. GrowSmallBiz makes it easy to close that gap — with a fully managed campaign, transparent reporting, and a team that treats your rankings like their own." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 561,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-base text-muted-foreground mb-10 max-w-3xl mx-auto", children: "There is no obligation and no pressure. Start with a conversation." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 564,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 556,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          CardCTA,
          {
            title: "Let's Build Your Authority with Quality Links",
            description: "Schedule your free strategy session or get a no-obligation SEO audit to see where you stand.",
            buttonText: "Schedule Strategy Call",
            buttonHref: PRIMARY_CTA_URL,
            sectionClassName: "pt-0 pb-0"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 569,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mt-6 animate-fade-up", children: /* @__PURE__ */ jsxDEV(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: SECONDARY_CTA_URL, target: "_blank", rel: "noopener noreferrer", children: "Free SEO Audit" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 579,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 578,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 577,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-12 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
          /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 586,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
            lineNumber: 587,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
          lineNumber: 585,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 555,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 554,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, { headingOverride: "Schedule a Free AI SEO & Link Building Strategy Session" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
        lineNumber: 593,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
      lineNumber: 220,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
      lineNumber: 596,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/services/LinkBuilding.tsx",
    lineNumber: 182,
    columnNumber: 5
  }, void 0);
};
export {
  LinkBuilding as default
};
