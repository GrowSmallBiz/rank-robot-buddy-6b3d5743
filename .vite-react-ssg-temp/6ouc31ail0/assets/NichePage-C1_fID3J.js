import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { S as ServiceJsonLd } from "./ServiceJsonLd-62JZkfim.js";
import { B as Button, H as Header } from "./Header-Dct2bBAe.js";
import { F as Footer } from "./Footer-5rMz2U4O.js";
import { ConsultationFormSection } from "./ConsultationFormSection-DDNhkaf7.js";
import { C as CardCTA } from "./CardCTA-lztA_Zrf.js";
import { ArrowRight, Phone, ArrowDown, CheckCircle2, Target, FileText, UserCheck, Trophy, MapPin, Bot, Search, Clock, RefreshCw, Instagram, Facebook, Globe, Heart, CalendarCheck, Linkedin, X, CheckCircle, MessageSquare, UserPlus, Mail, Zap, Star, Check, XCircle } from "lucide-react";
import { u as useUtm } from "./use-utm-CiJKCMCk.js";
import { G as GlowCard } from "./glow-card-DLstjNul.js";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { S as SectionHeader } from "./SectionHeader-m0RetmVk.js";
import { C as Carousel, a as CarouselContent, b as CarouselItem, c as CarouselPrevious, d as CarouselNext } from "./carousel-Ck0YRfGi.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-9cq_VkaS.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-b6vWRJCV.js";
const HeroSection = ({ config, strategySessionUrl }) => {
  const BadgeIcon = config.badgeIcon;
  return /* @__PURE__ */ jsxs("section", { className: "pt-32 pb-24 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: config.heroImage,
          alt: config.h1Line1,
          width: 1920,
          height: 1080,
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background/85" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 hero-glow" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up", children: [
        /* @__PURE__ */ jsx(BadgeIcon, { className: "w-4 h-4" }),
        config.badgeText
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100", children: [
        config.h1Line1,
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: config.h1Highlight }),
        config.h1Line2 && /* @__PURE__ */ jsxs(Fragment, { children: [
          " ",
          config.h1Line2
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground mb-8 animate-fade-up delay-200 max-w-2xl mx-auto", children: config.heroSubheadline }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300", children: [
        /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategySessionUrl, children: [
          config.primaryCtaLabel,
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
        ] }) }),
        /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: "tel:+19258863724", children: [
          /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 mr-2" }),
          " Call +1 (925) 886-3724"
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-primary font-medium mt-4 animate-fade-up delay-300", children: "No commitment. No pressure. Just a clear path forward for your business." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up delay-400", children: config.statsBar.map((stat, i) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl font-display font-bold text-primary", children: stat.value }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-1", children: stat.label })
      ] }, i)) })
    ] }) })
  ] });
};
const HeroExtendedSection = ({ config }) => {
  var _a;
  if (!config.heroExtended || config.heroExtended.length === 0) return null;
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    config.heroExtendedHeadline && /* @__PURE__ */ jsx("div", { className: "text-center mb-10 animate-fade-up", children: /* @__PURE__ */ jsx("h2", { className: "section-title", children: config.heroExtendedHighlight && ((_a = config.heroExtendedHeadline) == null ? void 0 : _a.includes(config.heroExtendedHighlight)) ? /* @__PURE__ */ jsxs(Fragment, { children: [
      config.heroExtendedHeadline.split(config.heroExtendedHighlight)[0],
      /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: config.heroExtendedHighlight }),
      config.heroExtendedHeadline.split(config.heroExtendedHighlight)[1]
    ] }) : config.heroExtendedHeadline }) }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12", children: config.heroExtended.map((item, i) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsxs("div", { className: "feature-card-teal text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Icon, { className: "w-7 h-7 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-foreground mb-2", children: item.headline }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: item.body })
      ] }, i);
    }) })
  ] }) });
};
const GeminiIcon = ({ className = "", size = 24 }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    className,
    children: [
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "geminiGradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#4285F4" }),
        /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#9B72CB" }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#D96570" })
      ] }) }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z",
          fill: "url(#geminiGradient)"
        }
      )
    ]
  }
);
const ChatGPTIcon = ({ className = "", size = 24 }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    className,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M22.2819 9.8211C22.5844 8.89526 22.6485 7.90593 22.4677 6.94736C22.2869 5.98879 21.8676 5.09425 21.2518 4.34865C20.4198 3.34015 19.2714 2.63997 17.9914 2.36203C16.7114 2.08408 15.3737 2.24467 14.1964 2.8177C13.5242 2.21975 12.7099 1.79872 11.8303 1.59408C10.9507 1.38944 10.0336 1.40792 9.16299 1.64781C8.29242 1.88771 7.49596 2.34119 6.84756 2.96619C6.19916 3.59119 5.71912 4.36747 5.44929 5.22649C4.46824 5.42652 3.55694 5.87141 2.80096 6.52049C2.04497 7.16956 1.46991 7.99902 1.12986 8.93072C0.744679 10.0017 0.684476 11.1642 0.957083 12.2694C1.22969 13.3746 1.82259 14.3727 2.66229 15.1406C2.35979 16.0665 2.29571 17.0558 2.47651 18.0144C2.6573 18.973 3.07661 19.8675 3.69241 20.6131C4.52477 21.6209 5.67316 22.3203 6.95302 22.5975C8.23287 22.8746 9.57037 22.7133 10.7471 22.1397C11.4195 22.7386 12.2344 23.1601 13.1147 23.3647C13.9949 23.5692 14.9127 23.5501 15.7836 23.3092C16.6545 23.0683 17.4508 22.6136 18.0988 21.9873C18.7468 21.361 19.2261 20.5834 19.4949 19.7233C20.4759 19.5233 21.3872 19.0784 22.1432 18.4293C22.8992 17.7803 23.4742 16.9508 23.8143 16.0191C24.1995 14.9481 24.2597 13.7856 23.9871 12.6804C23.7145 11.5752 23.1216 10.5771 22.2819 9.80949V9.8211Z",
          fill: "#10A37F"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M10.4374 18.7503V14.0625L6.37451 11.7188V15.0469C6.37451 15.2344 6.46826 15.4219 6.60889 15.5156L10.4374 18.7503Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M12 11.2969L16.0629 8.95312L12 6.60938L7.93701 8.95312L12 11.2969Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M12.5627 14.0625V18.7503L16.3912 15.5156C16.5318 15.4219 16.6256 15.2344 16.6256 15.0469V11.7188L12.5627 14.0625Z",
          fill: "white"
        }
      )
    ]
  }
);
const PerplexityIcon = ({ className = "", size = 24 }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    className,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M12 2L12 8M12 16V22M12 12L6 6M12 12L18 6M12 12L6 18M12 12L18 18",
          stroke: "#20B2AA",
          strokeWidth: "2",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3", fill: "#20B2AA" })
    ]
  }
);
const GrokIcon = ({ className = "", size = 24 }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    className,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M4 4L11 12L4 20",
          stroke: "currentColor",
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M13 12L20 4",
          stroke: "currentColor",
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M13 12L20 20",
          stroke: "currentColor",
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
const CopilotIcon = ({ className = "", size = 24 }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    className,
    children: [
      /* @__PURE__ */ jsxs("defs", { children: [
        /* @__PURE__ */ jsxs("linearGradient", { id: "copilotGradient1", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
          /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#05B3F0" }),
          /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#7B83EB" })
        ] }),
        /* @__PURE__ */ jsxs("linearGradient", { id: "copilotGradient2", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
          /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#7B83EB" }),
          /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#05B3F0" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M12 3C7.02944 3 3 7.02944 3 12C3 14.5 4 16.5 5.5 18L12 12V3Z",
          fill: "url(#copilotGradient1)"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M12 3C16.9706 3 21 7.02944 21 12C21 14.5 20 16.5 18.5 18L12 12V3Z",
          fill: "url(#copilotGradient2)"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M5.5 18C7 19.5 9.5 21 12 21C14.5 21 17 19.5 18.5 18L12 12L5.5 18Z",
          fill: "#05B3F0"
        }
      )
    ]
  }
);
const GoogleAIIcon = ({ className = "", size = 24 }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    className,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z",
          fill: "#FFC107"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z",
          fill: "#FF3D00"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.0011 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z",
          fill: "#4CAF50"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z",
          fill: "#1976D2"
        }
      )
    ]
  }
);
const aiPlatforms = [
  { name: "ChatGPT", icon: ChatGPTIcon },
  { name: "Gemini", icon: GeminiIcon },
  { name: "Perplexity", icon: PerplexityIcon },
  { name: "Grok", icon: GrokIcon },
  { name: "Copilot", icon: CopilotIcon },
  { name: "Google AI", icon: GoogleAIIcon }
];
const PainPointsSection = ({ config }) => {
  return /* @__PURE__ */ jsxs("section", { id: "solutions", className: "py-24 relative bg-slate-800/40 scroll-mt-24", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4", children: [
          config.painPointsHeadline,
          " ",
          config.painPointsHighlight && /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: config.painPointsHighlight })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: config.painPointsSubheadline })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16", children: config.painPoints.map((challenge, i) => {
        const Icon = challenge.icon;
        return /* @__PURE__ */ jsxs(GlowCard, { className: "overflow-hidden group hover:border-red-500/40 transition-all duration-300", children: [
          challenge.hasImage && challenge.image ? /* @__PURE__ */ jsxs("div", { className: "relative h-40 overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: challenge.image,
                alt: challenge.title,
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 left-4", children: /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center backdrop-blur-sm", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-red-400" }) }) })
          ] }) : challenge.showAILogos ? /* @__PURE__ */ jsxs("div", { className: "relative h-40 bg-gradient-to-br from-violet-500/10 via-blue-500/10 to-cyan-500/10 flex items-center justify-center p-4", children: [
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3", children: aiPlatforms.map((platform) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/50", children: /* @__PURE__ */ jsx(platform.icon, { className: "w-6 h-6" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] text-muted-foreground", children: platform.name })
            ] }, platform.name)) }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 left-4", children: /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center backdrop-blur-sm", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-violet-400" }) }) })
          ] }) : null,
          /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-foreground mb-2", children: challenge.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: challenge.description })
          ] })
        ] }, i);
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative py-8", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-primary to-primary/50" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-primary flex items-center justify-center shadow-lg shadow-primary/30 mb-4", children: /* @__PURE__ */ jsx(ArrowDown, { className: "w-6 h-6 text-white animate-bounce" }) }),
          /* @__PURE__ */ jsxs("div", { className: "bg-card/90 backdrop-blur-sm border border-primary/30 rounded-2xl px-8 py-4 text-center max-w-xl shadow-xl", children: [
            /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-foreground mb-1", children: config.transitionText.includes("There's a better way") ? /* @__PURE__ */ jsxs(Fragment, { children: [
              "Sound familiar? ",
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "There's a better way." })
            ] }) : config.transitionText }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: config.transitionSubtext })
          ] })
        ] })
      ] })
    ] })
  ] });
};
const IndustryStatsSection = ({ data }) => {
  if (!data) return null;
  const { headline, headlineHighlight, subheadline, items } = data;
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "industry-stats",
      className: "py-20 md:py-28 bg-[hsl(var(--card))]",
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-white", children: [
          headline,
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: headlineHighlight })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground max-w-3xl mx-auto mb-16 text-lg", children: subheadline }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10", children: items.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", children: [
          /* @__PURE__ */ jsx("span", { className: "block text-5xl md:text-6xl lg:text-7xl font-bold text-primary", children: item.value }),
          /* @__PURE__ */ jsx("p", { className: "text-white text-base md:text-lg leading-snug", children: item.label }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: item.sourceUrl,
              target: "_blank",
              rel: "noopener",
              className: "inline-block text-sm text-muted-foreground hover:text-primary transition-colors",
              children: [
                "Source: ",
                item.source
              ]
            }
          )
        ] }, index)) })
      ] })
    }
  );
};
const predictableMarketingSystem = "/assets/predictable-marketing-system-BpnLl6Zb.webp";
const SystemDiagramSection = ({ config }) => {
  return /* @__PURE__ */ jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4", children: "🎯 The Complete Picture" }),
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4", children: [
        "See How It All ",
        /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: "Works Together" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: config.systemDiagramBody })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative p-6 md:p-10 rounded-2xl overflow-hidden",
        style: {
          border: "2px solid rgba(255, 127, 80, 0.4)",
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          boxShadow: "0 0 40px rgba(255, 127, 80, 0.15), 0 0 80px rgba(255, 127, 80, 0.1)"
        },
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" }),
          /* @__PURE__ */ jsx("div", { className: "relative z-10 flex justify-center", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: predictableMarketingSystem,
              alt: "Predictable Marketing System showing the complete client acquisition and retention funnel",
              width: 900,
              height: 600,
              className: "w-full max-w-5xl rounded-xl shadow-2xl shadow-primary/10"
            }
          ) })
        ]
      }
    )
  ] }) });
};
const CtaBlock = ({ headline, subtext, strategySessionUrl }) => {
  return /* @__PURE__ */ jsx("section", { className: "pt-8 pb-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "bg-card/80 backdrop-blur-sm border-2 border-primary/50 rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/70 group", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg group-hover:border-primary/50 transition-all duration-300", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: baseContactCTA.image,
          alt: baseContactCTA.name,
          width: 80,
          height: 80,
          className: "w-full h-full object-cover"
        }
      ) }),
      /* @__PURE__ */ jsx("h4", { className: "mt-4 text-lg font-display font-semibold text-foreground", children: baseContactCTA.name }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: baseContactCTA.role })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center md:text-left", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4", children: headline }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground mb-6", children: subtext }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center md:justify-start", children: [
        /* @__PURE__ */ jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategySessionUrl, children: [
          "Schedule Strategy Call",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
        ] }) }),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "lg",
            variant: "outline",
            asChild: true,
            className: "border-muted-foreground/30 hover:bg-muted/50 transition-all duration-300",
            children: /* @__PURE__ */ jsxs("a", { href: "tel:+19258863724", className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
              "Call +1 (925) 886-3724"
            ] })
          }
        )
      ] })
    ] })
  ] }) }) }) }) });
};
const OnThisPageNav = ({ config }) => {
  return /* @__PURE__ */ jsx("section", { id: "page-index", className: "py-16 bg-gradient-to-b from-stone-50 to-stone-100/80 border-y border-stone-200/60", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsx("p", { className: "text-primary font-medium text-sm uppercase tracking-wider mb-2", children: "Quick Navigation" }),
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl md:text-3xl font-display font-bold text-slate-800", children: [
        "On This ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Page" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto", children: config.onThisPageItems.map((item) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: `#${item.id}`,
        className: "group flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-stone-200/70 shadow-sm hover:border-primary/50 hover:bg-white hover:shadow-md transition-all duration-300",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl", children: item.icon }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-slate-700 group-hover:text-primary transition-colors", children: item.label })
        ]
      },
      item.id
    )) })
  ] }) });
};
const WebsiteDesignSection = ({ config, strategySessionUrl }) => {
  return /* @__PURE__ */ jsx("section", { id: "website-design", className: "py-24 bg-background scroll-mt-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-primary font-medium text-sm uppercase tracking-wider mb-2", children: config.websiteDesignBadge }),
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-display font-bold text-foreground", children: [
        config.websiteDesignHeadline,
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: config.websiteDesignHighlight })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-3 max-w-3xl mx-auto", children: config.websiteDesignSubheadline })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 items-center mb-12", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: config.websiteDesignImage,
          alt: `${config.websiteDesignBadge} example`,
          width: 600,
          height: 400,
          className: "rounded-2xl shadow-2xl w-full"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xl font-display font-bold text-foreground mb-4", children: config.websiteDesignFeatureHeadline }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: config.websiteDesignFeatureBody }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: config.websiteDesignBullets.map((feature, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: feature })
        ] }, i)) })
      ] })
    ] })
  ] }) });
};
const defaultSpokes = [
  "Implants & Restorative",
  "Cosmetic Dentistry",
  "Emergency Dental",
  "Family & Pediatric",
  "Invisalign & Ortho",
  "Preventive Care",
  "Oral Health Education"
];
const TopicMapVisual = ({ centerLine1, centerLine2, spokes: customSpokes }) => {
  const spokes = customSpokes || defaultSpokes;
  const cx = 300;
  const cy = 200;
  const hubRx = 110;
  const hubRy = 36;
  const spokeRadius = 160;
  const spokePositions = spokes.map((label, i) => {
    const angle = i / spokes.length * 2 * Math.PI - Math.PI / 2;
    return {
      label,
      x: cx + spokeRadius * Math.cos(angle),
      y: cy + spokeRadius * Math.sin(angle)
    };
  });
  return /* @__PURE__ */ jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 600 400",
      className: "w-full max-w-3xl mx-auto",
      style: { minWidth: 480 },
      children: [
        spokePositions.map((sp, i) => /* @__PURE__ */ jsx(
          "line",
          {
            x1: cx,
            y1: cy,
            x2: sp.x,
            y2: sp.y,
            stroke: "hsl(174 60% 40%)",
            strokeWidth: "1.5",
            strokeOpacity: "0.45"
          },
          i
        )),
        /* @__PURE__ */ jsx("ellipse", { cx, cy, rx: hubRx, ry: hubRy, fill: "hsl(16 85% 55%)" }),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: cx,
            y: cy - 6,
            textAnchor: "middle",
            fill: "white",
            fontWeight: "700",
            fontSize: "11",
            fontFamily: "inherit",
            children: centerLine1 || "Dental Practice"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: cx,
            y: cy + 10,
            textAnchor: "middle",
            fill: "white",
            fontWeight: "700",
            fontSize: "11",
            fontFamily: "inherit",
            children: centerLine2 || "Authority"
          }
        ),
        spokePositions.map((sp, i) => {
          const w = 120;
          const h = 32;
          return /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx(
              "rect",
              {
                x: sp.x - w / 2,
                y: sp.y - h / 2,
                width: w,
                height: h,
                rx: 8,
                fill: "hsl(210 50% 10%)",
                stroke: "hsl(174 60% 40%)",
                strokeWidth: "1.5"
              }
            ),
            /* @__PURE__ */ jsx(
              "text",
              {
                x: sp.x,
                y: sp.y + 4,
                textAnchor: "middle",
                fill: "white",
                fontSize: "9.5",
                fontWeight: "500",
                fontFamily: "inherit",
                children: sp.label
              }
            )
          ] }, i);
        })
      ]
    }
  ) });
};
const scores = [
  { label: "Content Hierarchy", value: 94, color: "hsl(142 71% 45%)" },
  { label: "Factuality", value: 96, color: "hsl(142 71% 45%)" },
  { label: "Information Gain", value: 88, color: "hsl(174 60% 45%)" },
  { label: "Authority", value: 86, color: "hsl(174 60% 45%)" },
  { label: "Accuracy", value: 95, color: "hsl(142 71% 45%)" },
  { label: "Content Format", value: 92, color: "hsl(142 71% 45%)" }
];
const overallScore = 91;
const ContentScoreDashboard = ({ label, caption }) => {
  const r = 60;
  const cx = 80;
  const cy = 80;
  const startAngle = -210;
  const endAngle = 30;
  const totalAngle = endAngle - startAngle;
  const filledAngle = overallScore / 100 * totalAngle;
  const toRad = (deg) => deg * Math.PI / 180;
  const arcPoint = (angle) => ({
    x: cx + r * Math.cos(toRad(angle)),
    y: cy + r * Math.sin(toRad(angle))
  });
  const bgStart = arcPoint(startAngle);
  const bgEnd = arcPoint(endAngle);
  const fillEnd = arcPoint(startAngle + filledAngle);
  const largeArcBg = 1;
  const largeArcFill = 1;
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border-2 border-[hsl(188_78%_41%_/_0.25)] bg-[hsl(210_50%_8%)] p-6 md:p-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mb-8", children: [
      /* @__PURE__ */ jsxs("svg", { width: "160", height: "120", viewBox: "0 0 160 120", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: `M ${bgStart.x} ${bgStart.y} A ${r} ${r} 0 ${largeArcBg} 1 ${bgEnd.x} ${bgEnd.y}`,
            fill: "none",
            stroke: "hsl(210 30% 20%)",
            strokeWidth: "10",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: `M ${bgStart.x} ${bgStart.y} A ${r} ${r} 0 ${largeArcFill} 1 ${fillEnd.x} ${fillEnd.y}`,
            fill: "none",
            stroke: "hsl(142 71% 45%)",
            strokeWidth: "10",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: cx,
            y: cy - 2,
            textAnchor: "middle",
            fill: "white",
            fontWeight: "800",
            fontSize: "28",
            fontFamily: "inherit",
            children: overallScore
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: cx,
            y: cy + 14,
            textAnchor: "middle",
            fill: "hsl(210 20% 60%)",
            fontSize: "11",
            fontFamily: "inherit",
            children: "/ 100"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground mt-1", children: label || "Dental Content Quality Score" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: scores.map((score) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "rounded-xl border border-[hsl(188_78%_41%_/_0.2)] bg-[hsl(210_45%_12%)] p-4",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-foreground", children: score.label }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm font-bold", style: { color: score.color }, children: [
              score.value,
              "/100"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-2 rounded-full bg-[hsl(210_30%_20%)]", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "h-2 rounded-full transition-all",
              style: {
                width: `${score.value}%`,
                backgroundColor: score.color
              }
            }
          ) })
        ]
      },
      score.label
    )) }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-6 text-center leading-relaxed", children: caption || "Sample score for a GrowSmallBiz-managed dental content article. All content must pass minimum thresholds across all six dimensions before publication." })
  ] });
};
const SeoSection = ({ config, strategySessionUrl }) => {
  const keywordCategories = Object.entries(config.seoKeywordCategories);
  return /* @__PURE__ */ jsxs("section", { id: "seo", className: "py-24 relative bg-background-alt scroll-mt-24", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-16 p-8 md:p-12 bg-gradient-to-br from-primary/20 via-purple-500/10 to-blue-500/10 rounded-3xl border border-primary/30 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-5", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4", children: "⚡ The Search Landscape is Changing" }),
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-6 leading-tight", children: [
            config.aiSearchCalloutHeadline,
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: config.aiSearchCalloutHighlight })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto", children: config.aiSearchCalloutBody }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: config.aiSearchStats.map((stat, i) => /* @__PURE__ */ jsxs("div", { className: "p-4 bg-[hsl(210_45%_14%)] backdrop-blur-sm rounded-xl border border-[hsl(188_78%_41%_/_0.25)]", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-primary mb-1", children: stat.value }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: stat.label })
          ] }, i)) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategySessionUrl, className: "inline-flex items-center gap-2", children: [
              "Schedule Strategy Call",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
            ] }) }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", children: [
              "If you want more booked patients, you need to rank on Google ",
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "and" }),
              " show up in AI search."
            ] })
          ] })
        ] })
      ] }),
      config.conversationalAiQueries && config.conversationalAiQueries.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-16 max-w-4xl mx-auto rounded-2xl border border-white/10 bg-[hsl(210_50%_10%)] p-8 md:p-10", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl md:text-2xl font-display font-bold text-foreground mb-4", children: [
          "Patients Are ",
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-primary bg-clip-text text-transparent italic", children: "Already Asking AI" }),
          " These Questions About Your Practice"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mb-6", children: "Before opening Google, patients are typing questions like these into ChatGPT, Gemini, and Perplexity:" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: config.conversationalAiQueries.map((query, i) => /* @__PURE__ */ jsx("div", { className: "border-l-[3px] border-l-primary bg-[hsl(210_40%_18%)] rounded-lg px-4 py-2.5", children: /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm md:text-[15px]", children: query }) }, i)) }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mt-6", children: "If your practice isn't showing up in these AI-generated answers, you're invisible to a growing segment of patients before they ever open Google. We change that." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-16 max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8", children: [
          config.seoEditorialHeadline,
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: config.seoEditorialHighlight })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-foreground/90 leading-relaxed", children: [
          config.seoEditorialBody.map((paragraph, i) => /* @__PURE__ */ jsx("p", { className: i === 0 ? "font-semibold text-foreground" : "text-muted-foreground", children: paragraph }, i)),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/80 border-l-2 border-primary pl-4 mt-6", children: config.seoEditorialPullQuote })
        ] })
      ] }),
      config.aeoEntityBlock && config.aeoEntityBlock.length > 0 && /* @__PURE__ */ jsx("div", { className: "mb-16 max-w-5xl mx-auto grid md:grid-cols-3 gap-4", children: config.aeoEntityBlock.map((card, i) => /* @__PURE__ */ jsxs("div", { className: "bg-[hsl(210_40%_18%)] border border-white/[0.08] rounded-xl p-6", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block px-2.5 py-1 bg-[hsl(174_60%_40%)] text-white text-[11px] font-semibold uppercase rounded-[10px] mb-3", children: card.badge }),
        /* @__PURE__ */ jsx("h4", { className: "text-[15px] font-semibold text-foreground mb-2", children: card.title }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 text-[13px] leading-relaxed", children: card.body })
      ] }, i)) }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium text-sm uppercase tracking-wider mb-2", children: config.seoBadge }),
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-display font-bold text-foreground", children: [
          config.seoHeadline,
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: config.seoHighlight })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-3 max-w-3xl mx-auto", children: config.seoSubheadline })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-12 p-8 bg-gradient-to-br from-primary/10 via-emerald-500/5 to-teal-500/10 rounded-2xl border-2 border-primary/30 shadow-lg shadow-primary/5", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-5", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-2", children: "📚 Quick Navigation" }),
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-display font-bold text-foreground", children: "Jump to SEO Topic" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3", children: [
          { id: "seo-keywords", label: "Keyword Research", icon: "🔑" },
          { id: "seo-competitors", label: "Competitor Analysis", icon: "🎯" },
          { id: "seo-content", label: "Content Strategy", icon: "📝" },
          { id: "seo-local", label: "Local SEO & GBP", icon: "📍" },
          { id: "seo-ai-visibility", label: "AI Visibility", icon: "🤖" }
        ].map((item) => /* @__PURE__ */ jsxs(
          "a",
          {
            href: `#${item.id}`,
            className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background/80 border border-border hover:border-primary hover:bg-primary/10 hover:shadow-md hover:shadow-primary/10 transition-all duration-300 text-sm font-medium group",
            children: [
              /* @__PURE__ */ jsx("span", { children: item.icon }),
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground group-hover:text-primary transition-colors", children: item.label })
            ]
          },
          item.id
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "seo-keywords", className: "mb-12 scroll-mt-24", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Target, { className: "w-5 h-5 text-primary" }),
          "We Target Keywords Your Ideal Clients Search"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: keywordCategories.map(([key, cat]) => {
          const CatIcon = cat.icon;
          return /* @__PURE__ */ jsxs(GlowCard, { className: "overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "relative h-32 bg-muted", children: /* @__PURE__ */ jsx("img", { src: cat.image, alt: cat.label, className: "w-full h-full object-cover" }) }),
            /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsx(CatIcon, { className: "w-5 h-5 text-primary" }),
                /* @__PURE__ */ jsx("h5", { className: "font-bold text-foreground", children: cat.label })
              ] }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-1.5 mb-3", children: cat.keywords.map((kw, i) => /* @__PURE__ */ jsxs("li", { className: "text-sm text-muted-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5 text-primary shrink-0" }),
                kw
              ] }, i)) }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground border-t border-border pt-2", children: [
                /* @__PURE__ */ jsx("strong", { children: "Competitors:" }),
                " ",
                cat.competitors
              ] })
            ] })
          ] }, key);
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "seo-competitors", className: "mb-12 scroll-mt-24", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Target, { className: "w-5 h-5 text-primary" }),
          "We Analyze & Outrank Your Competitors"
        ] }),
        /* @__PURE__ */ jsx(GlowCard, { className: "p-6", children: /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: (config.seoCompetitorBullets || [
          { bold: "Competitor keyword gap analysis", desc: "we identify which dental implant, cosmetic, and emergency dental terms your top competitors rank for that you don't" },
          { bold: "Backlink profile comparison", desc: "we find authoritative health and dental publications linking to competitors and target the same sources" },
          { bold: "Content gap identification", desc: "we find the service and location pages driving competitor traffic that you're missing" },
          { bold: "Local pack positioning tactics", desc: "we analyze competitor GBP profiles, review velocity, and citation consistency to build a plan to outrank them in the Map Pack" }
        ]).map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxs("span", { className: "text-foreground", children: [
            /* @__PURE__ */ jsx("strong", { children: item.bold }),
            " — ",
            item.desc
          ] })
        ] }, i)) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "seo-content", className: "mb-12 scroll-mt-24", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 text-primary" }),
          "We Create Content That Ranks & Converts"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-xl bg-card border-l-4 border-l-[hsl(var(--accent))] border border-border", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-display font-bold text-foreground mb-3", children: config.seoContentAuthorityStatement || "We Don't Publish Bulk AI Blogs. We Build Dental Authority." }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Most agencies use ChatGPT to generate hundreds of generic articles and hit publish. We don't. Every piece of content we create is produced by a highly trained AI content system built specifically for your business, your service area, and your target keywords — then reviewed and approved by a human expert before it goes live. The difference isn't just quality. It's whether the content actually builds your ranking authority or just adds noise." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-display font-bold text-foreground mb-3", children: "We Build Topical Maps That Cover Your Entire Market" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 leading-relaxed", children: config.seoTopicalMapBody || "A topical map ensures Google sees your site as a complete authority on dental care — not just a collection of random pages. We identify every topic cluster your ideal patients search across all treatment categories, then systematically build the content that covers it." }),
            /* @__PURE__ */ jsx(TopicMapVisual, { centerLine1: config.topicMapCenterLine1, centerLine2: config.topicMapCenterLine2, spokes: config.topicMapSpokes })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-display font-bold text-foreground mb-3", children: "Every Article Scored Across Six Quality Dimensions Before Publishing" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 leading-relaxed", children: "Before any content goes live on your site, it is measured against six independent quality dimensions. Our goal is not to pass a content score — it is to build genuine digital authority that earns rankings and AI search citations in your market." }),
            /* @__PURE__ */ jsx(ContentScoreDashboard, { label: config.contentScoreLabel, caption: config.contentScoreCaption })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "feature-card-teal space-y-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(FileText, { className: "w-6 h-6 text-primary" }) }),
              /* @__PURE__ */ jsx("h5", { className: "font-display font-semibold text-foreground", children: "AI-Trained on Your Business" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: "Content is generated by an AI model trained on your specific services, service area, pricing structure, and competitive positioning — not a generic prompt." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "feature-card-teal space-y-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(UserCheck, { className: "w-6 h-6 text-primary" }) }),
              /* @__PURE__ */ jsx("h5", { className: "font-display font-semibold text-foreground", children: "Human Review Before Every Publish" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: "Every article is reviewed by a human expert for accuracy, brand voice, and local relevance. Nothing goes live that has not passed both AI scoring and human approval." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "feature-card-teal space-y-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Trophy, { className: "w-6 h-6 text-primary" }) }),
              /* @__PURE__ */ jsx("h5", { className: "font-display font-semibold text-foreground", children: "Built to Rank and Be Cited by AI" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: config.seoContentThirdCardBody || "Content is structured for Google rankings and AI citation — so when a patient asks ChatGPT, Perplexity, or Google AI which dental practice to call, your practice is the answer." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "seo-local", className: "mb-12 scroll-mt-24", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-primary" }),
          "We Optimize Your Local SEO & Google Business Profile"
        ] }),
        /* @__PURE__ */ jsx(GlowCard, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h5", { className: "font-bold text-foreground mb-3", children: "GBP Optimization" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
              "Full Google Business Profile audit and optimization",
              "Category selection, service area setup, and photo optimization",
              "Weekly GBP posting cadence for Map Pack signals",
              "GBP heatmap tracking — visualize your local search presence across your service area"
            ].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-primary shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: item })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h5", { className: "font-bold text-foreground mb-3", children: "Citation & Local Authority" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
              "Local citation building across 50+ directories",
              "NAP consistency audit and cleanup",
              "GBP + social post automation",
              "Monthly local search performance reporting"
            ].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-primary shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: item })
            ] }, i)) })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "seo-ai-visibility", className: "mb-12 scroll-mt-24", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Bot, { className: "w-6 h-6 text-primary" }),
          config.seoAiVisibilityHeading || "We Get Your Dental Practice Recommended by AI Search Engines"
        ] }),
        /* @__PURE__ */ jsxs(GlowCard, { className: "p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-2", children: config.seoAiVisibilityBody1 || "GrowSmallBiz tracks how AI platforms recommend your dental practice across 6 major AI search engines — including ChatGPT, Gemini, Perplexity, Grok, Copilot, and Google AI Mode." }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: config.seoAiVisibilityBody2 || "When a patient asks an AI assistant 'what's the best dentist for implants near me?' or 'which cosmetic dentist has the best reviews in [city]?' — we make sure your practice is the answer." }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
            "LLM visibility score tracking across 6 AI platforms — updated monthly",
            "Sentiment monitoring — how AI engines describe your practice to potential patients",
            "Citation share tracking — which queries your practice appears in vs. competitors"
          ].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-primary shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: item })
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center pt-8 border-t border-border/50", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#seo",
          className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 text-sm group",
          children: [
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 rotate-[-90deg] group-hover:-translate-y-1 transition-transform" }),
            "Back to SEO Navigation"
          ]
        }
      ) })
    ] })
  ] });
};
const colorConfig$2 = {
  pink: { bg: "bg-pink-500", bgLight: "bg-pink-500/10", text: "text-pink-500", border: "border-pink-500/30" },
  rose: { bg: "bg-rose-500", bgLight: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/30" },
  blue: { bg: "bg-blue-500", bgLight: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30" },
  violet: { bg: "bg-violet-500", bgLight: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/30" },
  amber: { bg: "bg-amber-500", bgLight: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/30" },
  emerald: { bg: "bg-emerald-500", bgLight: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/30" },
  cyan: { bg: "bg-cyan-500", bgLight: "bg-cyan-500/10", text: "text-cyan-500", border: "border-cyan-500/30" },
  teal: { bg: "bg-teal-500", bgLight: "bg-teal-500/10", text: "text-teal-500", border: "border-teal-500/30" }
};
const PaidMediaSection = ({ config, strategySessionUrl }) => {
  return /* @__PURE__ */ jsx("section", { id: "paid-media", className: "py-24 bg-background-alt scroll-mt-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        subtitle: "Paid Media",
        title: config.paidMediaHeadline,
        titleHighlight: config.paidMediaHighlight,
        description: config.paidMediaSubheadline
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground mb-6 text-center", children: "Ad Creatives We Design for Your Genre" }),
      /* @__PURE__ */ jsx("div", { className: "relative px-12", children: /* @__PURE__ */ jsxs(Carousel, { opts: { align: "start", loop: true }, className: "w-full", children: [
        /* @__PURE__ */ jsx(CarouselContent, { className: "-ml-4", children: config.adCreatives.map((creative) => /* @__PURE__ */ jsx(CarouselItem, { className: "pl-4 md:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsxs(GlowCard, { className: "overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: creative.image,
              alt: `${creative.genre} ad creative example`,
              className: "w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-card", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground text-lg", children: creative.genre }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-3", children: creative.description }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: creative.platforms.map((platform, i) => /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full", children: platform }, i)) })
          ] })
        ] }) }, creative.id)) }),
        /* @__PURE__ */ jsx(CarouselPrevious, { className: "left-0" }),
        /* @__PURE__ */ jsx(CarouselNext, { className: "right-0" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent rounded-2xl border border-amber-500/20 p-6 mb-12", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Target, { className: "w-5 h-5 text-amber-500" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground mb-2", children: "Why Primary & Secondary Ad Platforms?" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Budget allocation matters." }),
          " Primary platforms have the highest ROI for your genre—allocate 70-80% of your ad spend here. Secondary platforms are for testing, seasonal campaigns, or retargeting. Starting with $500-1,000/month? Focus exclusively on primary platforms until you've optimized those results."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-foreground text-center mb-6", children: "Where We Run Your Ads — Platform Strategy by Genre" }),
      /* @__PURE__ */ jsx("div", { className: "bg-[hsl(210_45%_18%)] border-2 border-[hsl(188_78%_41%_/_0.3)] rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(23,162,184,0.15)]", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b-2 border-[hsl(188_78%_41%_/_0.3)] bg-[hsl(210_45%_14%)]", children: [
          /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-left text-sm font-bold text-foreground", children: "Genre" }),
          /* @__PURE__ */ jsxs("th", { className: "px-6 py-4 text-left text-sm font-bold text-primary", children: [
            "Primary Platforms",
            /* @__PURE__ */ jsx("span", { className: "block text-xs font-normal text-muted-foreground mt-0.5", children: "70-80% of budget" })
          ] }),
          /* @__PURE__ */ jsxs("th", { className: "px-6 py-4 text-left text-sm font-bold text-muted-foreground", children: [
            "Secondary Platforms",
            /* @__PURE__ */ jsx("span", { className: "block text-xs font-normal text-muted-foreground mt-0.5", children: "Testing & retargeting" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-[hsl(188_78%_41%_/_0.15)]", children: config.paidMediaByGenre.map((genre, i) => {
          const colors = colorConfig$2[genre.color] || colorConfig$2.blue;
          const GenreIcon = genre.icon;
          return /* @__PURE__ */ jsxs("tr", { className: "hover:bg-muted/20 transition-colors", children: [
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center shrink-0`, children: /* @__PURE__ */ jsx(GenreIcon, { className: "w-4 h-4 text-white" }) }),
              /* @__PURE__ */ jsx("span", { className: `font-semibold ${colors.text} text-sm`, children: genre.genre })
            ] }) }),
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: genre.primary.map((platform, j) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: `w-4 h-4 ${colors.text} shrink-0 mt-0.5` }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground text-sm", children: platform.name }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: platform.reason })
              ] })
            ] }, j)) }) }),
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: genre.secondary.map((platform, j) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-4 h-4 rounded-full border border-muted-foreground/50 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium text-muted-foreground text-sm", children: platform.name }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground/70", children: platform.reason })
              ] })
            ] }, j)) }) })
          ] }, i);
        }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsxs(GlowCard, { className: "p-8 bg-gradient-to-br from-blue-950/60 via-slate-900/80 to-blue-950/60 border-blue-500/20", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Target, { className: "w-7 h-7 text-blue-400" }) }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-foreground mb-2", children: config.metaAdSetupHeadline }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: config.metaAdSetupSubheadline })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground text-lg", children: "What We Set Up for You" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: (config.paidMediaSetupBullets || ["Google Ads account setup and campaign structure", "Keyword research for dental search terms — general dentistry, cosmetic, implants, and emergency", "Google Local Services Ads (LSA) setup and Google Guarantee verification", "Conversion tracking from click to call to booked appointment", "Seasonal campaign calendar with pre-peak budget ramps", "Service-specific landing page optimization", "Ad creative copywriting for emergency and seasonal intent", "Monthly performance reporting and optimization"]).map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-blue-500 shrink-0 mt-1" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm", children: item })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground text-lg", children: "Landing Page Included" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Every ad campaign includes a custom landing page designed to convert clicks into booked appointments." }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: ["Conversion Landing Page", "Thank You Page", "Development & Layout Only", "Copy Pulled From Existing Site"].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-primary shrink-0 mt-1" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm", children: item })
          ] }, i)) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[hsl(210_45%_18%)] border-2 border-[hsl(188_78%_41%_/_0.25)] rounded-2xl p-8", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground mb-6 text-center", children: "We Set Up Tracking & Retargeting for You" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: config.trackingRetargetingEssentials.map((item, i) => {
        const ItemIcon = item.icon;
        return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(ItemIcon, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground mb-1", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.description })
          ] })
        ] }, i);
      }) })
    ] })
  ] }) });
};
const RetargetingSection = ({ config }) => {
  return /* @__PURE__ */ jsxs("section", { className: "py-24 relative bg-gradient-to-b from-background to-slate-800/40 scroll-mt-24", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-center mb-4", children: [
        config.retargetingHeadline,
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: config.retargetingHighlight })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-display font-medium text-muted-foreground text-center mb-12", children: config.retargetingSubheadline }),
      /* @__PURE__ */ jsxs("div", { className: "relative animate-fade-up", style: { animationDelay: "0.2s", animationFillMode: "both" }, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-primary to-emerald-500 rounded-2xl blur-md opacity-20 animate-pulse", style: { animationDuration: "3s" } }),
        /* @__PURE__ */ jsxs("div", { className: "relative bg-card border border-primary/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-xs font-semibold shadow-lg shadow-primary/25", children: "AI SEO + Retargeting Meta/Google Ads" }),
          /* @__PURE__ */ jsxs("div", { className: "relative pt-4 pb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-primary to-emerald-500 rounded-full" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative text-center group", children: [
                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(Search, { className: "w-7 h-7 md:w-8 md:h-8 text-blue-500" }) }),
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground text-sm mb-0.5", children: "They Find You" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-tight", children: config.retargetingStep1Desc || "Search for a dentist, like what they see" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "md:hidden flex justify-center py-1", children: /* @__PURE__ */ jsx(ArrowDown, { className: "w-5 h-5 text-muted-foreground/50" }) }),
              /* @__PURE__ */ jsxs("div", { className: "relative text-center group", children: [
                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-500/20 border-2 border-slate-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(Clock, { className: "w-7 h-7 md:w-8 md:h-8 text-slate-400" }) }),
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground text-sm mb-0.5", children: "Life Happens" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-tight", children: "They leave, get busy, and the moment passes" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "md:hidden flex justify-center py-1", children: /* @__PURE__ */ jsx(ArrowDown, { className: "w-5 h-5 text-muted-foreground/50" }) }),
              /* @__PURE__ */ jsxs("div", { className: "relative text-center group", children: [
                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 md:w-20 md:h-20 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(RefreshCw, { className: "w-7 h-7 md:w-8 md:h-8 text-purple-500" }) }),
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground text-sm mb-0.5", children: "Your Work Reappears" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-tight", children: "Gentle reminders on Instagram, Facebook, Google" }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-1.5 mt-1.5", children: [
                  /* @__PURE__ */ jsx(Instagram, { className: "w-3.5 h-3.5 text-pink-500" }),
                  /* @__PURE__ */ jsx(Facebook, { className: "w-3.5 h-3.5 text-blue-500" }),
                  /* @__PURE__ */ jsx(Globe, { className: "w-3.5 h-3.5 text-emerald-500" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "md:hidden flex justify-center py-1", children: /* @__PURE__ */ jsx(ArrowDown, { className: "w-5 h-5 text-muted-foreground/50" }) }),
              /* @__PURE__ */ jsxs("div", { className: "relative text-center group", children: [
                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(Heart, { className: "w-7 h-7 md:w-8 md:h-8 text-primary" }) }),
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground text-sm mb-0.5", children: "Trust Builds" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-tight", children: "Familiarity turns into confidence over time" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "md:hidden flex justify-center py-1", children: /* @__PURE__ */ jsx(ArrowDown, { className: "w-5 h-5 text-muted-foreground/50" }) }),
              /* @__PURE__ */ jsxs("div", { className: "relative text-center group", children: [
                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 md:w-20 md:h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(CalendarCheck, { className: "w-7 h-7 md:w-8 md:h-8 text-emerald-500" }) }),
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground text-sm mb-0.5", children: "They Book" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-tight", children: "When ready, your name feels familiar — not random" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-5" }),
          /* @__PURE__ */ jsxs("p", { className: "text-lg md:text-xl font-display leading-relaxed text-center mb-5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-foreground font-semibold", children: config.retargetingDisplayLine || "SEO helps your dental practice show up" }),
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: config.retargetingDisplaySubline || "when someone is actively looking." }),
            /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "But " }),
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500 font-bold italic", children: "retargeting is what keeps the connection alive." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mb-5" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-center mb-6", children: config.retargetingBody.map((paragraph, i) => /* @__PURE__ */ jsx("p", { children: paragraph }, i)) }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://lp.growsmallbiz.io/digital-growth-strategy-session",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-primary/25",
              children: [
                "Schedule Strategy Call",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          ) })
        ] })
      ] })
    ] }) })
  ] });
};
const colorConfig$1 = {
  pink: { bg: "bg-pink-500", bgLight: "bg-pink-500/10", text: "text-pink-500", border: "border-pink-500/30" },
  rose: { bg: "bg-rose-500", bgLight: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/30" },
  blue: { bg: "bg-blue-500", bgLight: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30" }
};
const SocialMediaSection = ({ config }) => {
  return /* @__PURE__ */ jsxs("section", { id: "social-media", className: "py-24 relative bg-background-alt scroll-mt-24", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          subtitle: "Organic Social",
          title: config.socialMediaHeadline,
          titleHighlight: config.socialMediaHighlight,
          description: config.socialMediaSubheadline
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 p-6 mb-12", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Target, { className: "w-5 h-5 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground mb-2", children: "Why Primary & Secondary Platforms?" }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Focus beats scatter." }),
            " Primary platforms are where your ideal clients actively search for your genre—invest 80% of your time here. Secondary platforms offer supplemental reach or work well for specific campaigns, but spreading too thin dilutes your impact. Master 2 platforms before expanding."
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground mb-6 text-center", children: "Where We Focus Your Social Presence — By Genre" }),
      /* @__PURE__ */ jsx(GlowCard, { className: "p-6 overflow-x-auto mb-16 border-[hsl(188_78%_41%_/_0.35)]", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[800px]", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b-2 border-[hsl(188_78%_41%_/_0.3)]", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-semibold text-foreground", children: "Genre" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-semibold text-foreground", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { children: "Primary Platforms" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground font-normal", children: "— Focus 80%" })
          ] }) }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-semibold text-foreground", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { children: "Secondary Platforms" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground font-normal", children: "— Test/Campaigns" })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: config.socialMediaByGenre.map((genre, i) => {
          const colors = colorConfig$1[genre.color] || colorConfig$1.blue;
          return /* @__PURE__ */ jsxs("tr", { className: "border-b border-[hsl(188_78%_41%_/_0.15)] last:border-0", children: [
            /* @__PURE__ */ jsx("td", { className: `py-4 px-4 font-semibold ${colors.text} whitespace-nowrap`, children: genre.genre }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-4", children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: genre.primary.map((platform, j) => {
              const PlatformIcon = platform.icon;
              return /* @__PURE__ */ jsxs("div", { className: `p-3 rounded-lg border ${colors.border} ${colors.bgLight}`, children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsx(PlatformIcon, { className: `w-4 h-4 ${colors.text}` }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground text-sm", children: platform.name }),
                  /* @__PURE__ */ jsx("span", { className: `text-[10px] px-1.5 py-0.5 rounded-full ${colors.bg} text-white`, children: "Priority" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: platform.strategy })
              ] }, j);
            }) }) }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-4", children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: genre.secondary.map((platform, j) => {
              const PlatformIcon = platform.icon;
              return /* @__PURE__ */ jsxs("div", { className: "p-3 bg-muted/30 rounded-lg border border-border/50", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsx(PlatformIcon, { className: "w-4 h-4 text-muted-foreground" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground text-sm", children: platform.name })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: platform.strategy })
              ] }, j);
            }) }) })
          ] }, i);
        }) })
      ] }) }),
      config.linkedInOutreachEnabled && config.linkedInOutreach && /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent rounded-2xl border-2 border-blue-500/30 p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center", children: /* @__PURE__ */ jsx(Linkedin, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground", children: config.linkedInOutreach.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: config.linkedInOutreach.subtitle })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: config.linkedInOutreach.description }),
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground mb-3", children: "How It Works" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: config.linkedInOutreach.benefits.map((benefit, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-blue-500 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: benefit })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground mb-3", children: "Expected Results" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4", children: config.linkedInOutreach.stats.map((stat, i) => /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-blue-500/10 rounded-xl border border-blue-500/30", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-400", children: stat.value }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-1", children: stat.label })
            ] }, i)) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 pt-6 border-t border-blue-500/30", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground italic", children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Marketing is a numbers game:" }),
          " You need workflow-driven automated processes to send connection requests at scale without violating LinkedIn's policies."
        ] }) })
      ] })
    ] })
  ] });
};
const aiGrowthSystemFunnel = "/assets/ai-growth-system-funnel-Bg2vlMo-.webp";
const emailSmsWorkflowDiagram = "/assets/email-sms-workflow-diagram-VMfGJO9N.webp";
const colorConfig = {
  pink: { bg: "bg-pink-500", bgLight: "bg-pink-500/10", text: "text-pink-500", border: "border-pink-500/30", gradient: "from-pink-500 to-pink-600", steps: ["bg-pink-500", "bg-pink-500/85", "bg-pink-500/70", "bg-pink-500/55", "bg-pink-500/45", "bg-pink-500/35", "bg-pink-500/25"] },
  rose: { bg: "bg-rose-500", bgLight: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/30", gradient: "from-rose-500 to-rose-600", steps: ["bg-rose-500", "bg-rose-500/85", "bg-rose-500/70", "bg-rose-500/55", "bg-rose-500/45", "bg-rose-500/35", "bg-rose-500/25"] },
  blue: { bg: "bg-blue-500", bgLight: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30", gradient: "from-blue-500 to-blue-600", steps: ["bg-blue-500", "bg-blue-500/85", "bg-blue-500/70", "bg-blue-500/55", "bg-blue-500/45", "bg-blue-500/35", "bg-blue-500/25"] },
  violet: { bg: "bg-violet-500", bgLight: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/30", gradient: "from-violet-500 to-violet-600", steps: ["bg-violet-500", "bg-violet-500/85", "bg-violet-500/70", "bg-violet-500/55", "bg-violet-500/45", "bg-violet-500/35", "bg-violet-500/25"] },
  amber: { bg: "bg-amber-500", bgLight: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/30", gradient: "from-amber-500 to-amber-600", steps: ["bg-amber-500", "bg-amber-500/85", "bg-amber-500/70", "bg-amber-500/55", "bg-amber-500/45", "bg-amber-500/35", "bg-amber-500/25"] },
  emerald: { bg: "bg-emerald-500", bgLight: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/30", gradient: "from-emerald-500 to-emerald-600", steps: ["bg-emerald-500", "bg-emerald-500/85", "bg-emerald-500/70", "bg-emerald-500/55", "bg-emerald-500/45", "bg-emerald-500/35", "bg-emerald-500/25"] }
};
const AiGrowthSystemSection = ({ config }) => {
  const widthClasses = ["w-full", "w-[94%]", "w-[88%]", "w-[82%]", "w-[76%]", "w-[70%]", "w-[64%]"];
  return /* @__PURE__ */ jsx("section", { id: "client-growth", className: "py-24 bg-gradient-to-b from-[#0a1628] to-background scroll-mt-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4", children: [
        /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: config.growthSystemHighlight }),
        " ",
        config.growthSystemHeadline
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: config.growthSystemSubheadline })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-20", children: /* @__PURE__ */ jsxs("div", { className: "p-8 md:p-12 rounded-2xl shadow-[0_0_30px_rgba(255,127,80,0.6),0_0_60px_rgba(255,127,80,0.4)]", style: { border: "2px solid rgb(255, 127, 80)", backgroundColor: "rgba(25, 19, 33, 0.95)", backgroundImage: "linear-gradient(to bottom right, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.9))" }, children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground text-center mb-4 relative z-10", children: [
        "Stop Juggling ",
        /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Hundreds of Disconnected Tools" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg md:text-xl text-muted-foreground text-center mb-10 relative z-10", children: [
        "All the tools you need in one platform without having to ",
        /* @__PURE__ */ jsx("span", { className: "text-primary font-semibold italic", children: '"duct-tape"' }),
        " multiple platforms together!"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "relative flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-lg", children: [
          /* @__PURE__ */ jsx("img", { src: aiGrowthSystemFunnel, alt: "Marketing funnel stages", width: 800, height: 600, className: "w-full rounded-2xl shadow-2xl shadow-primary/20" }),
          ["Awareness", "Capture", "Nurture", "Close"].map((label, idx) => {
            const tops = ["2%", "28%", "55%", "78%"];
            const bgs = ["bg-blue-600/90", "bg-slate-700/90", "bg-indigo-600/90", "bg-emerald-600/90"];
            return /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 -translate-x-1/2", style: { top: tops[idx] }, children: /* @__PURE__ */ jsx("span", { className: `px-3 py-1 ${bgs[idx]} text-white text-xs md:text-sm font-bold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-sm`, children: label }) }, label);
          })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: config.growthSystemDisconnectedToolsBody || "Most dental practices use separate tools for new patient capture, appointment booking, recall management, and follow-up. These tools don't talk to each other — leads fall through the cracks." }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[hsl(210_45%_14%)] border border-[hsl(188_78%_41%_/_0.2)] rounded-xl p-5", children: [
            /* @__PURE__ */ jsx("p", { className: "text-foreground font-semibold mb-3", children: "The All-in-One Difference:" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4 text-red-500" }) }),
                /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Without a system:" }),
                  " Leads get lost, responses delayed, follow-ups forgotten"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-emerald-500" }) }),
                /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "With AI Growth System:" }),
                  " Every lead captured instantly, automated nurturing, seamless booking"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
            { label: "Attract", color: "bg-blue-500", desc: "Draw in ideal clients through SEO, paid ads, AI search visibility, social media, and reputation management." },
            { label: "Nurture", color: "bg-purple-500", desc: "Automatically follow up with leads via email sequences, SMS, AI receptionist, and chat." },
            { label: "Convert & Retain", color: "bg-primary", desc: "Book jobs seamlessly, collect payments, gather reviews, and trigger re-engagement campaigns." }
          ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: `w-3 h-3 rounded-full ${item.color} mt-2 shrink-0` }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground text-lg", children: item.label }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.desc })
            ] })
          ] }, i)) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mb-20", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-foreground mb-8 text-center", children: [
        "The 5 Stages of Your ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Client Journey" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-16 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-primary via-emerald-500 to-amber-500 rounded-full" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4", children: config.clientJourneyStages.map((stage, i) => {
          const StageIcon = stage.icon;
          const borderColors = { blue: "border-blue-500/30 hover:border-blue-500/60", purple: "border-purple-500/30 hover:border-purple-500/60", primary: "border-primary/30 hover:border-primary/60", emerald: "border-emerald-500/30 hover:border-emerald-500/60", amber: "border-amber-500/30 hover:border-amber-500/60" };
          const bgColors = { blue: "bg-blue-500", purple: "bg-purple-500", primary: "bg-primary", emerald: "bg-emerald-500", amber: "bg-amber-500" };
          const textColors = { blue: "text-blue-400", purple: "text-purple-400", primary: "text-primary", emerald: "text-emerald-400", amber: "text-amber-400" };
          return /* @__PURE__ */ jsxs("div", { className: `relative bg-[hsl(210_45%_18%)] border-2 ${borderColors[stage.color] || "border-[hsl(188_78%_41%_/_0.25)]"} rounded-2xl p-6 transition-all hover:-translate-y-2 group`, children: [
            /* @__PURE__ */ jsx("div", { className: `w-14 h-14 rounded-full ${bgColors[stage.color] || "bg-primary"} flex items-center justify-center mb-4 mx-auto lg:mx-0 group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ jsx(StageIcon, { className: "w-7 h-7 text-white" }) }),
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-foreground mb-2 text-center lg:text-left", children: stage.stage }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: stage.description }),
            /* @__PURE__ */ jsx("div", { className: "mt-3 pt-3 border-t border-border", children: /* @__PURE__ */ jsxs("p", { className: `text-xs ${textColors[stage.color] || "text-primary"} italic`, children: [
              "Goal: ",
              stage.goal
            ] }) })
          ] }, i);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4", children: "📚 Why This Matters" }),
        /* @__PURE__ */ jsxs("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-4", children: [
          "Why Marketing Needs to be on ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Autopilot" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "The difference between struggling and thriving isn't talent—it's systems." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs(GlowCard, { className: "p-8 border-red-500/30 bg-gradient-to-b from-red-500/5 to-transparent", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Clock, { className: "w-7 h-7 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-foreground", children: "Speed-to-Lead" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-red-400", children: "The 5-Minute Rule" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground leading-relaxed", children: /* @__PURE__ */ jsx("span", { className: "font-bold text-red-400", children: '"Responding within 5 minutes makes you 100x more likely to connect compared to 30 minutes."' }) }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-2 italic", children: "— InsideSales.com Lead Response Study" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-foreground mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-emerald-500", children: "✅" }),
              " The Solution:"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsx("span", { className: "text-emerald-400 font-medium", children: "AI Receptionist" }),
              " auto-responds within seconds—24/7."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(GlowCard, { className: "p-8 border-purple-500/30 bg-gradient-to-b from-purple-500/5 to-transparent", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-purple-500 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(MessageSquare, { className: "w-7 h-7 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-foreground", children: "Lead Nurturing" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-400", children: "Why One Email Isn't Enough" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 mb-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground leading-relaxed", children: /* @__PURE__ */ jsx("span", { className: "font-bold text-purple-400", children: '"80% of sales require 5+ follow-ups, yet 44% give up after just one contact."' }) }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-2 italic", children: "— HubSpot Sales Research" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-foreground mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-emerald-500", children: "✅" }),
              " The Solution:"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsx("span", { className: "text-emerald-400 font-medium", children: "Automated email sequences" }),
              " that send 5-7 strategic touchpoints."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(GlowCard, { className: "p-8 border-amber-500/30 bg-gradient-to-b from-amber-500/5 to-transparent", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(UserPlus, { className: "w-7 h-7 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-foreground", children: "Past Client Gold" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-amber-400", children: "Your Hidden Revenue Source" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground leading-relaxed", children: /* @__PURE__ */ jsx("span", { className: "font-bold text-amber-400", children: '"Acquiring a new customer costs 5-25x more than retaining an existing one."' }) }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-2 italic", children: "— Harvard Business Review" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-foreground mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-emerald-500", children: "✅" }),
              " The Solution:"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsx("span", { className: "text-emerald-400 font-medium", children: "Automated re-engagement campaigns" }),
              "—anniversary reminders, milestone triggers, referral incentives."
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-16 mt-16", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-10 text-center", children: [
        "We Build ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: config.emailSequenceTitle }),
        " ",
        config.emailSequenceHighlight
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 items-center mb-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-purple-500/20 to-primary/20 rounded-3xl blur-xl" }),
          /* @__PURE__ */ jsx("img", { src: emailSmsWorkflowDiagram, alt: "Email and SMS automation workflow diagram", width: 800, height: 500, className: "relative rounded-2xl border border-border/50 shadow-2xl w-full" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 -right-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg", children: "5-Day Automation" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: config.emailNurturePoints.map((point, i) => {
          const PointIcon = point.icon;
          return /* @__PURE__ */ jsxs(GlowCard, { className: "p-5 flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(PointIcon, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground mb-1", children: point.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: point.description })
            ] })
          ] }, i);
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10", children: [
        /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-muted-foreground uppercase tracking-wider mb-3", children: "Sample Automation" }),
        /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-foreground mb-6 text-center", children: [
          "5-Day Email & SMS Automation: ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Inquiry to Close" })
        ] }),
        /* @__PURE__ */ jsxs(GlowCard, { className: "p-6 border-purple-500/30 bg-gradient-to-b from-purple-500/5 to-transparent", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6 pb-4 border-b border-border/50", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center", children: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-white" }) }),
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center", children: /* @__PURE__ */ jsx(MessageSquare, { className: "w-5 h-5 text-white" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", children: "Inquiry Nurture Workflow" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Email + SMS automation triggered on new inquiry" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "ml-auto", children: /* @__PURE__ */ jsx("span", { className: "px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full font-medium", children: "Active" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
            { day: "0", label: "Immediate", channels: "Email + SMS", title: "Welcome & Availability Check", desc: "Thank them for reaching out, confirm receipt, ask about their service needs and timeline" },
            { day: "1", label: "Day 1", channels: "Email", title: "Service Overview + Social Proof", desc: "Share relevant service information and 2-3 Google review testimonials from past patients" },
            { day: "2", label: "Day 2", channels: "SMS", title: "Quick Check-in", desc: '"Did you get a chance to review the information I sent? Happy to answer any questions about your treatment options."' },
            { day: "3", label: "Day 3", channels: "Email", title: "FAQ + What to Expect", desc: "Address common questions about the process, timeline, and what to expect from the consultation" },
            { day: "5", label: "Day 5", channels: "Email + SMS", title: "Limited Availability + Final CTA", desc: "Seasonal availability notice, schedule filling up, easy booking link" }
          ].map((step, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ jsx("div", { className: `w-10 h-10 rounded-full ${i === 0 ? "bg-emerald-500" : "bg-purple-500"} flex items-center justify-center text-white font-bold text-sm`, children: step.day }),
              i < 4 && /* @__PURE__ */ jsx("div", { className: "w-0.5 h-8 bg-border/50 mt-2" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 bg-[hsl(210_45%_14%)] rounded-lg p-4 border border-[hsl(188_78%_41%_/_0.15)]", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsx("span", { className: `text-xs font-medium ${i === 0 ? "text-emerald-400" : "text-purple-400"} uppercase tracking-wider`, children: step.label }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: step.channels })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground text-sm", children: step.title }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: step.desc })
            ] })
          ] }, i)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-4 border-t border-border/50 flex flex-wrap items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsx(Zap, { className: "w-3 h-3 text-purple-400" }),
              /* @__PURE__ */ jsx("span", { children: "5 Emails | 2 SMS | 5-Day Sequence | Avg. 34% Booking Rate" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium", children: "Fully Automated" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-foreground mb-6 text-center", children: [
        "Automated ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Appointment Windows" }),
        " — Arrive Ready, Never Miss a Job"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: config.noShowResearchCitations.map((citation, i) => /* @__PURE__ */ jsxs(GlowCard, { className: "p-4 text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs text-primary font-medium uppercase tracking-wider", children: citation.label }),
        /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-foreground my-2", children: citation.stat }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
          citation.source,
          citation.publication ? ` — ${citation.publication}` : "",
          citation.year ? ` (${citation.year})` : ""
        ] })
      ] }, i)) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: config.sessionReminderWorkflows.map((workflow, i) => {
        const WorkflowIcon = workflow.icon;
        const colors = colorConfig[workflow.color] || colorConfig.emerald;
        return /* @__PURE__ */ jsxs(GlowCard, { className: `p-6 ${colors.border}`, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`, children: /* @__PURE__ */ jsx(WorkflowIcon, { className: "w-6 h-6 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground", children: workflow.sessionType }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: workflow.description })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: workflow.reminders.map((reminder, j) => /* @__PURE__ */ jsxs("div", { className: "bg-[hsl(210_45%_14%)] rounded-lg p-3 border border-[hsl(188_78%_41%_/_0.15)]", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ jsx("span", { className: `text-xs font-medium ${colors.text}`, children: reminder.timing }),
              /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: reminder.channels.map((ch, k) => /* @__PURE__ */ jsx("span", { className: "text-[10px] px-1.5 py-0.5 bg-muted rounded-full text-muted-foreground", children: ch }, k)) })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: reminder.content })
          ] }, j)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-3 border-t border-border/50 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "Expected no-show reduction:" }),
            /* @__PURE__ */ jsx("span", { className: `text-sm font-bold ${colors.text}`, children: workflow.expectedReduction })
          ] })
        ] }, i);
      }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-border/50 pt-16 mb-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-muted-foreground uppercase tracking-wider mb-2", children: "See It In Action" }),
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-display font-bold text-foreground text-center mb-4", children: [
        "Marketing Campaigns ",
        /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: config.marketingCampaignsHighlight || "We Build for Your Dental Practice" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground max-w-2xl mx-auto", children: "Real offers paired with automated funnels—tailored to each specialty" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-12 mb-16", children: config.marketingCampaigns.map((campaign, i) => {
      const colors = colorConfig[campaign.color] || colorConfig.blue;
      const CampaignIcon = campaign.icon;
      return /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-6 animate-fade-up", style: { animationDelay: `${i * 0.15}s` }, children: [
        /* @__PURE__ */ jsxs(GlowCard, { className: `overflow-hidden ${colors.border}`, children: [
          /* @__PURE__ */ jsx("div", { className: `${colors.bgLight} px-6 py-4 border-b border-border/30`, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: `w-10 h-10 rounded-full ${colors.bg} flex items-center justify-center`, children: /* @__PURE__ */ jsx(CampaignIcon, { className: "w-5 h-5 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: `text-xs font-medium ${colors.text} uppercase tracking-wider`, children: campaign.genre }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Sample Campaign Offer" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-foreground mb-1", children: campaign.offer.headline }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: campaign.offer.tagline }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: `text-4xl font-bold ${colors.text}`, children: campaign.offer.price }),
              /* @__PURE__ */ jsx("span", { className: "text-lg text-muted-foreground line-through", children: campaign.offer.originalPrice }),
              /* @__PURE__ */ jsx("span", { className: `text-sm font-medium px-2 py-1 rounded-full ${colors.bgLight} ${colors.text}`, children: campaign.offer.savings })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground mb-2", children: "What's Included:" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-1.5", children: campaign.offer.includes.map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsx(CheckCircle, { className: `w-4 h-4 ${colors.text} flex-shrink-0` }),
                item
              ] }, idx)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-border/50", children: [
              /* @__PURE__ */ jsxs("p", { className: `text-sm ${colors.text} font-medium mb-3`, children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 inline mr-1" }),
                campaign.offer.urgency
              ] }),
              /* @__PURE__ */ jsx("button", { className: `w-full py-3 rounded-lg font-semibold text-white transition-all hover:scale-[1.02] ${colors.bg}`, children: campaign.offer.cta })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(GlowCard, { className: `${colors.border}`, children: [
          /* @__PURE__ */ jsx("div", { className: `${colors.bgLight} px-6 py-4 border-b border-border/30`, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground", children: "Automated Marketing Funnel" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "How this campaign converts leads" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5", children: campaign.topPlatforms.slice(0, 3).map((platform, pIdx) => /* @__PURE__ */ jsx("span", { className: `text-xs px-2 py-1 ${colors.bgLight} ${colors.text} rounded-full border ${colors.border}`, children: platform }, pIdx)) })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("div", { className: "space-y-2", children: campaign.funnel.map((step, stepIndex) => {
              var _a;
              return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ jsxs("div", { className: `${widthClasses[stepIndex] || "w-[60%]"} ${((_a = colors.steps) == null ? void 0 : _a[stepIndex]) || colors.bg} py-2.5 px-4 rounded-lg text-center text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02]`, children: [
                  /* @__PURE__ */ jsxs("span", { className: "opacity-60 mr-2", children: [
                    stepIndex + 1,
                    "."
                  ] }),
                  step
                ] }),
                stepIndex < campaign.funnel.length - 1 && /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-xs my-1", children: "↓" })
              ] }, stepIndex);
            }) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-4 border-t border-border/50 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsx(Zap, { className: `w-3 h-3 ${colors.text}` }),
                /* @__PURE__ */ jsx("span", { children: "Fully automated workflow" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: `text-xs ${colors.text} italic`, children: campaign.seasonality })
            ] })
          ] })
        ] })
      ] }, i);
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-foreground mb-6 text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Seasonal Campaigns" }),
        " ",
        config.seasonalCampaignsHeading || "We Automate for Your Dental Practice"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-2xl border-2 border-[hsl(188_78%_41%_/_0.25)] bg-[hsl(210_45%_18%)]", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b-2 border-[hsl(188_78%_41%_/_0.3)]", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 text-sm font-semibold text-muted-foreground", children: "Campaign" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 text-sm font-semibold text-muted-foreground", children: "Timing" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 text-sm font-semibold text-muted-foreground", children: "Offer" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 text-sm font-semibold text-muted-foreground", children: "Channels" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: config.seasonalCampaigns.map((campaign, i) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-[hsl(188_78%_41%_/_0.15)] hover:bg-[hsl(210_45%_14%)] transition-colors", children: [
          /* @__PURE__ */ jsx("td", { className: "py-4 px-4 font-medium text-foreground", children: campaign.campaign }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-4 text-sm text-muted-foreground", children: campaign.timing }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-4 text-sm text-muted-foreground", children: campaign.offer }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: campaign.channels.map((channel, j) => /* @__PURE__ */ jsx("span", { className: "px-2 py-1 bg-primary/10 text-primary text-xs rounded-full", children: channel }, j)) }) })
        ] }, i)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `grid gap-6 ${config.pastClientWorkflows.length === 2 ? "md:grid-cols-2 max-w-3xl mx-auto" : "md:grid-cols-3"}`, children: config.pastClientWorkflows.map((workflow, i) => {
      const WIcon = workflow.icon;
      return /* @__PURE__ */ jsxs(GlowCard, { className: "p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(WIcon, { className: "w-6 h-6 text-amber-500" }) }),
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground mb-2", children: workflow.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: workflow.description })
      ] }, i);
    }) })
  ] }) });
};
const ReputationSection = ({ config }) => {
  return /* @__PURE__ */ jsxs("section", { id: "reputation", className: "py-24 relative bg-background-alt scroll-mt-24", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-yellow-500/5" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          subtitle: "Growth Tools",
          title: config.reputationHeadline,
          titleHighlight: config.reputationHighlight,
          description: config.reputationSubheadline,
          as: "h3"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsxs(GlowCard, { className: "p-8 border-emerald-500/30", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center", children: /* @__PURE__ */ jsx(Star, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-foreground", children: config.reputationInnerH3 || "We Handle Your Dental Practice Reputation" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: config.reputationBullets.map((benefit, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-emerald-500 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: benefit })
          ] }, i)) }) }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[hsl(210_45%_14%)] border border-[hsl(188_78%_41%_/_0.25)] rounded-xl p-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground mb-4", children: "Smart Review Request Flow" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: config.reviewFlowSteps.map((step, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold shrink-0", children: step.step }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-foreground", children: step.title }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: step.description })
              ] })
            ] }, i)) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: config.giftAndReferralPrograms.map((program, i) => {
        const ProgramIcon = program.icon;
        return /* @__PURE__ */ jsxs(GlowCard, { className: "p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(ProgramIcon, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-foreground mb-2", children: program.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: program.description }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: program.features.map((feature, j) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-primary shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: feature })
          ] }, j)) })
        ] }, i);
      }) })
    ] })
  ] });
};
const AiVoiceChatSection = ({ config }) => {
  const hasExtended = config.aiReceptionistComparison && config.aiReceptionistComparison.length > 0;
  if (!hasExtended) {
    return /* @__PURE__ */ jsx("section", { id: "ai-communication", className: "py-24 bg-background scroll-mt-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          subtitle: "AI-Powered",
          title: config.aiVoiceChatSectionHeadline,
          titleHighlight: config.aiVoiceChatHighlight,
          description: config.aiVoiceChatSubheadline,
          as: "h3"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: config.aiFeatures.map((feature, i) => {
        const FeatureIcon = feature.icon;
        return /* @__PURE__ */ jsxs(GlowCard, { className: "p-8 border-border", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-xl bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsx(FeatureIcon, { className: "w-7 h-7 text-white" }) }),
            /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-foreground", children: feature.title })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: feature.description }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: feature.features.map((f, j) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-primary shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: f })
          ] }, j)) })
        ] }, i);
      }) })
    ] }) });
  }
  return /* @__PURE__ */ jsx("section", { id: "ai-communication", className: "py-24 bg-background scroll-mt-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        subtitle: "AI-Powered",
        title: config.aiVoiceChatSectionHeadline,
        titleHighlight: config.aiVoiceChatHighlight,
        description: config.aiVoiceChatSubheadline,
        as: "h3"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground", children: config.aiReceptionistComparisonH3 }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4 max-w-4xl mx-auto", children: config.aiReceptionistComparisonBody })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[640px] border-collapse rounded-xl overflow-hidden border border-border", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "p-4 text-left font-bold text-destructive bg-destructive/5 border-b-2 border-destructive/20", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }),
            "Human Receptionist"
          ] }) }),
          /* @__PURE__ */ jsx("th", { className: "p-4 text-left font-bold text-primary bg-primary/5 border-b-2 border-primary/20", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "w-5 h-5" }),
            "GrowSmallBiz AI Receptionist"
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: config.aiReceptionistComparison.map((row, i) => /* @__PURE__ */ jsxs(
          "tr",
          {
            className: `border-b border-border/50 transition-colors hover:bg-muted/30 ${i % 2 === 0 ? "bg-card/30" : "bg-card/60"}`,
            children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground border-r border-border/30", children: row.human }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-foreground font-medium", children: row.ai })
            ]
          },
          i
        )) })
      ] }) }),
      config.aiReceptionistHighlightText && /* @__PURE__ */ jsxs("div", { className: "mt-8 rounded-xl border-2 border-orange-500/30 bg-orange-500/5 p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(Zap, { className: "w-5 h-5 text-orange-500" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground leading-relaxed", children: config.aiReceptionistHighlightText })
      ] })
    ] }),
    config.aiVoiceFeatureBullets && /* @__PURE__ */ jsxs("div", { className: "mt-20 grid lg:grid-cols-2 gap-10 items-start", children: [
      /* @__PURE__ */ jsx("div", { className: "order-1 lg:order-1", children: config.aiReceptionistImage && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: config.aiReceptionistImage,
            alt: "AI Receptionist handling multiple simultaneous calls",
            className: "rounded-xl border border-border w-full",
            loading: "lazy",
            width: 1024,
            height: 768
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-3 text-center italic", children: "One AI system. Unlimited simultaneous callers. Zero missed leads." })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "order-2 lg:order-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsx(Phone, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-foreground", children: "24/7 AI Voice Receptionist" })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: config.aiVoiceFeatureBullets.map((bullet, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: bullet })
        ] }, i)) })
      ] })
    ] }),
    config.aiChatFeatureBullets && /* @__PURE__ */ jsxs("div", { className: "mt-20 grid lg:grid-cols-2 gap-10 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "order-2 lg:order-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center", children: /* @__PURE__ */ jsx(MessageSquare, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-foreground", children: "Website Live AI Chat — Always Capturing" })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: config.aiChatFeatureBullets.map((bullet, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-cyan-500 shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: bullet })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "order-1 lg:order-2", children: config.aiChatImage && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: config.aiChatImage,
            alt: "Website live AI chat capturing leads 24/7",
            className: "rounded-xl border border-border w-full",
            loading: "lazy",
            width: 1024,
            height: 768
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-3 text-center italic", children: "Every website visitor engaged. Every lead captured. No staffing required." })
      ] }) })
    ] })
  ] }) });
};
const WhyChooseUsSection = ({ config }) => {
  return /* @__PURE__ */ jsx("div", { id: "why-choose", className: "scroll-mt-24", children: /* @__PURE__ */ jsxs("section", { className: "py-24 relative overflow-hidden border-t bg-card/80 border-primary/10", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center mb-16 animate-fade-up", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: config.whyChooseUsSubtitle }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold mb-6 text-foreground", children: [
          config.whyChooseUsHeadline,
          " ",
          config.whyChooseUsHighlight && /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: config.whyChooseUsHighlight })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: config.whyChooseUsBody })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: config.whyChooseUsCards.map((card, index) => {
        const Icon = card.icon;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "feature-card-teal space-y-4 animate-fade-up",
            style: { animationDelay: `${index * 0.1}s` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-foreground", children: card.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: card.description })
            ]
          },
          index
        );
      }) })
    ] })
  ] }) });
};
const HowItWorksSection = ({ config }) => {
  if (!config.processSteps || config.processSteps.length === 0) return null;
  return /* @__PURE__ */ jsx("section", { id: "how-it-works", className: "py-24 bg-background scroll-mt-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    config.howItWorksBadge && /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-primary border-primary/30 px-4 py-1.5 text-sm", children: config.howItWorksBadge }) }),
    config.howItWorksHeadline && /* @__PURE__ */ jsx("div", { className: "text-center mb-10 animate-fade-up", children: /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
      config.howItWorksHeadline,
      " ",
      config.howItWorksHighlight && /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: config.howItWorksHighlight })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 space-y-16", children: config.processSteps.map((step, i) => {
      const StepIcon = step.icon;
      const isEven = i % 2 === 0;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `flex flex-col md:flex-row items-center gap-8 ${!isEven ? "md:flex-row-reverse" : ""}`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 flex flex-col items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx(StepIcon, { className: "w-10 h-10 text-primary-foreground" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-4xl font-black text-primary/20", children: step.step })
            ] }),
            /* @__PURE__ */ jsxs(GlowCard, { className: "flex-1 p-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground mb-3", children: step.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: step.description }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10", children: [
                /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground font-medium", children: step.deliverable })
              ] })
            ] })
          ]
        },
        i
      );
    }) })
  ] }) });
};
const WhoThisIsForSection = ({ config }) => {
  if (!config.strongFitItems || config.strongFitItems.length === 0) return null;
  return /* @__PURE__ */ jsx("section", { id: "who-this-is-for", className: "py-24 bg-muted/30 scroll-mt-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    config.whoThisIsForBadge && /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-primary border-primary/30 px-4 py-1.5 text-sm", children: config.whoThisIsForBadge }) }),
    config.whoThisIsForHeadline && /* @__PURE__ */ jsx("div", { className: "text-center mb-10 animate-fade-up", children: /* @__PURE__ */ jsxs("h2", { className: "section-title", children: [
      config.whoThisIsForHeadline,
      " ",
      config.whoThisIsForHighlight && /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: config.whoThisIsForHighlight })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 mt-12", children: [
      /* @__PURE__ */ jsxs(GlowCard, { className: "p-8 border-green-500/20", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-foreground mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-green-500" }),
          config.strongFitLabel || "Strong Fit"
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: config.strongFitItems.map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-green-500 shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: item })
        ] }, i)) })
      ] }),
      config.notFitItems && config.notFitItems.length > 0 && /* @__PURE__ */ jsxs(GlowCard, { className: "p-8 border-red-500/20", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-foreground mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(XCircle, { className: "w-6 h-6 text-red-500" }),
          config.notFitLabel || "Not the Right Fit"
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: config.notFitItems.map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(XCircle, { className: "w-5 h-5 text-red-500 shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: item })
        ] }, i)) })
      ] })
    ] })
  ] }) });
};
const CaseStudyLinksSection = ({ links }) => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: [
        "Client ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Results" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-lg text-muted-foreground max-w-2xl mx-auto", children: "See the real data behind our strategies" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `grid gap-6 max-w-4xl mx-auto ${links.length === 1 ? "md:grid-cols-1 max-w-xl" : "md:grid-cols-2"}`, children: links.map((link) => {
      const Icon = link.icon;
      return /* @__PURE__ */ jsxs(
        "a",
        {
          href: link.url,
          className: "group flex items-start gap-4 rounded-2xl border-2 border-[hsl(188_78%_41%_/_0.25)] bg-[hsl(210_45%_18%)] p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[hsl(188_78%_41%_/_0.5)] hover:-translate-y-1",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground group-hover:text-primary transition-colors", children: link.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground line-clamp-2", children: link.description }),
              /* @__PURE__ */ jsxs("span", { className: "mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary", children: [
                "View Case Study",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
              ] })
            ] })
          ]
        },
        link.url
      );
    }) })
  ] }) });
};
const RealResultsSection = ({ config }) => {
  if (!config.realResults || config.realResults.length === 0) return null;
  return /* @__PURE__ */ jsx("section", { id: "real-results", className: "py-24 bg-background scroll-mt-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        subtitle: "Proven Results",
        title: config.realResultsHeadline || "Real Results",
        titleHighlight: config.realResultsHighlight,
        description: config.realResultsSubheadline,
        as: "h2"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8 mt-12", children: config.realResults.map((card, i) => /* @__PURE__ */ jsxs(GlowCard, { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-primary to-primary/70 p-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary-foreground/70 text-sm font-medium uppercase tracking-wider mb-1", children: card.campaignType }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-primary-foreground", children: card.headline }),
        /* @__PURE__ */ jsx("p", { className: "text-primary-foreground/60 text-sm mt-1", children: card.period })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 mb-6", children: card.metrics.map((metric, j) => /* @__PURE__ */ jsxs("div", { className: "text-center p-3 rounded-lg bg-[hsl(210_45%_14%)] border border-[hsl(188_78%_41%_/_0.2)]", children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-black text-primary", children: metric.value }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: metric.label })
        ] }, j)) }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: card.bodyCopy }),
        card.caseStudyUrl && /* @__PURE__ */ jsxs(
          "a",
          {
            href: card.caseStudyUrl,
            className: "inline-flex items-center gap-2 mt-4 text-primary font-medium hover:underline group",
            children: [
              "Read Full Case Study",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
            ]
          }
        )
      ] })
    ] }, i)) })
  ] }) });
};
const CampaignResultsCardsSection = ({ config }) => {
  if (!config.campaignResultsCards || config.campaignResultsCards.length === 0) return null;
  return /* @__PURE__ */ jsx("section", { id: "campaign-results", className: "py-24 bg-muted/30 scroll-mt-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        title: config.campaignResultsCardsHeadline || "Campaign Results",
        as: "h2"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12", children: config.campaignResultsCards.map((card, i) => /* @__PURE__ */ jsxs(GlowCard, { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-primary to-primary/70 p-5", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-primary-foreground", children: card.title }),
        /* @__PURE__ */ jsx("p", { className: "text-primary-foreground/60 text-sm mt-1", children: card.channel })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: card.metrics.map((metric, j) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-primary shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm", children: metric })
        ] }, j)) }),
        card.highlight && /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-2 p-2 rounded-lg bg-primary/5 border border-primary/10", children: [
          /* @__PURE__ */ jsx(Trophy, { className: "w-5 h-5 text-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-primary", children: card.highlight })
        ] })
      ] })
    ] }, i)) })
  ] }) });
};
const CoreServicesSection = ({ config }) => {
  if (!config.coreServices || config.coreServices.length === 0) return null;
  return /* @__PURE__ */ jsx("section", { id: "core-services", className: "py-24 bg-background scroll-mt-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        title: config.coreServicesHeadline || "Our Services",
        titleHighlight: config.coreServicesHighlight,
        description: config.coreServicesSubheadline,
        as: "h2"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12", children: config.coreServices.map((service, i) => {
      const Icon = service.icon;
      const content = /* @__PURE__ */ jsxs("div", { className: "feature-card-teal group hover:border-primary/30 transition-colors h-full flex flex-col", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-foreground mb-2", children: service.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-3 flex-grow", children: service.whatWeDo }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-primary", children: service.impact }),
        service.url && /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all", children: [
          "Learn More ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] });
      return service.url ? /* @__PURE__ */ jsx("a", { href: service.url, className: "block h-full", children: content }, i) : /* @__PURE__ */ jsx("div", { className: "h-full", children: content }, i);
    }) })
  ] }) });
};
const colorMap = {
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", icon: "text-emerald-500" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", icon: "text-blue-500" },
  orange: { bg: "bg-primary/10", border: "border-primary/30", text: "text-primary", icon: "text-primary" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", icon: "text-purple-500" }
};
const StagedApproachSection = ({ config }) => {
  if (!config.stagedApproachStages || config.stagedApproachStages.length === 0) return null;
  return /* @__PURE__ */ jsx("section", { id: "staged-approach", className: "py-24 bg-background-alt scroll-mt-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    config.stagedApproachBadge && /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "border-primary/40 text-primary px-4 py-1.5 text-sm font-semibold tracking-wide", children: config.stagedApproachBadge }) }),
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        title: config.stagedApproachHeadline || "Our Staged Approach",
        titleHighlight: config.stagedApproachHighlight,
        description: config.stagedApproachSubheadline,
        as: "h2"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 mt-12", children: config.stagedApproachStages.map((stage, i) => {
      const Icon = stage.icon;
      const colors = colorMap[stage.color] || colorMap.orange;
      return /* @__PURE__ */ jsxs(GlowCard, { className: "p-8 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: `inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} ${colors.border} border mb-6`, children: [
          /* @__PURE__ */ jsx("span", { className: `text-xs font-bold ${colors.text}`, children: stage.stage }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "•" }),
          /* @__PURE__ */ jsx("span", { className: `text-xs font-semibold ${colors.text}`, children: stage.label })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-5`, children: /* @__PURE__ */ jsx(Icon, { className: `w-7 h-7 ${colors.icon}` }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground font-medium mb-4", children: stage.timeline }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 mb-6", children: stage.services.map((service, j) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: `w-4 h-4 mt-0.5 shrink-0 ${colors.icon}` }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground", children: service })
        ] }, j)) }),
        /* @__PURE__ */ jsxs("div", { className: `mt-auto pt-4 border-t ${colors.border}`, children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider mb-1", children: "Unlocks" }),
          /* @__PURE__ */ jsx("p", { className: `text-sm font-semibold ${colors.text}`, children: stage.unlocks })
        ] })
      ] }, i);
    }) })
  ] }) });
};
const laneColorMap = {
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", icon: "text-emerald-500" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", icon: "text-blue-500" },
  orange: { bg: "bg-primary/10", border: "border-primary/30", icon: "text-primary" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", icon: "text-purple-500" },
  amber: { bg: "bg-amber-500/10", border: "border-amber-500/30", icon: "text-amber-500" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", icon: "text-cyan-500" }
};
const FourLaneSearchSection = ({ config }) => {
  if (!config.fourLaneLanes || config.fourLaneLanes.length === 0) return null;
  const hasComparison = config.searchComparisonPanels && config.searchComparisonPanels.length > 0;
  return /* @__PURE__ */ jsx("section", { id: "four-lane-search", className: "py-24 bg-muted/30 scroll-mt-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    config.fourLaneBadge && /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "border-primary/40 text-primary px-4 py-1.5 text-sm font-semibold tracking-wide", children: config.fourLaneBadge }) }),
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        title: config.fourLaneHeadline || "Four-Lane Search Dominance",
        titleHighlight: config.fourLaneHighlight,
        description: config.fourLaneSubheadline,
        as: "h2"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12", children: config.fourLaneLanes.map((lane, i) => {
      const Icon = lane.icon;
      const colors = laneColorMap[lane.color] || laneColorMap.blue;
      return /* @__PURE__ */ jsxs(GlowCard, { className: "p-6", children: [
        /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`, children: /* @__PURE__ */ jsx(Icon, { className: `w-6 h-6 ${colors.icon}` }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-foreground mb-1", children: lane.lane }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-primary mb-2", children: lane.headline }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: lane.description }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: lane.howWeDoIt.map((item, j) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: `w-4 h-4 mt-0.5 shrink-0 ${colors.icon}` }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-foreground", children: item })
        ] }, j)) })
      ] }, i);
    }) }),
    hasComparison && /* @__PURE__ */ jsxs("div", { className: "mt-16", children: [
      config.searchComparisonTitle && /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-foreground", children: config.searchComparisonTitle }),
        config.searchComparisonSubtitle && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-2", children: config.searchComparisonSubtitle })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6 max-w-5xl mx-auto", children: config.searchComparisonPanels.map((panel, i) => {
        const isTraditional = panel.type === "traditional";
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "rounded-2xl border-2 border-[hsl(188_78%_41%_/_0.25)] bg-[hsl(210_45%_18%)] overflow-hidden",
            children: [
              /* @__PURE__ */ jsx("div", { className: `px-6 py-4 border-b border-border/50 ${isTraditional ? "bg-muted/50" : "bg-primary/5"}`, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                isTraditional ? /* @__PURE__ */ jsx(Search, { className: "w-5 h-5 text-muted-foreground" }) : /* @__PURE__ */ jsx(MessageSquare, { className: "w-5 h-5 text-primary" }),
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: panel.label })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "px-6 py-3 bg-muted/30 border-b border-border/30", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border/50", children: [
                /* @__PURE__ */ jsx(Search, { className: "w-4 h-4 text-muted-foreground" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground italic", children: panel.query })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "px-6 py-5 space-y-3", children: panel.items.map((item, j) => /* @__PURE__ */ jsx("div", { className: `flex items-start gap-3 ${isTraditional ? "" : ""}`, children: isTraditional ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-muted-foreground/40 mt-2 shrink-0" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground", children: item })
              ] }) : /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground leading-relaxed", children: item }) }, j)) }),
              /* @__PURE__ */ jsx("div", { className: "px-6 py-3 border-t border-border/30 bg-muted/20", children: /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground italic", children: panel.caption }) })
            ]
          },
          i
        );
      }) })
    ] })
  ] }) });
};
const colorStyles = {
  emerald: { bg: "rgba(16, 185, 129, 0.1)", border: "rgba(16, 185, 129, 0.4)", text: "rgb(52, 211, 153)", activeBg: "rgb(16, 185, 129)" },
  rose: { bg: "rgba(244, 63, 94, 0.1)", border: "rgba(244, 63, 94, 0.4)", text: "rgb(251, 113, 133)", activeBg: "rgb(244, 63, 94)" },
  amber: { bg: "rgba(245, 158, 11, 0.1)", border: "rgba(245, 158, 11, 0.4)", text: "rgb(251, 191, 36)", activeBg: "rgb(245, 158, 11)" },
  blue: { bg: "rgba(59, 130, 246, 0.1)", border: "rgba(59, 130, 246, 0.4)", text: "rgb(96, 165, 250)", activeBg: "rgb(59, 130, 246)" },
  sky: { bg: "rgba(14, 165, 233, 0.1)", border: "rgba(14, 165, 233, 0.4)", text: "rgb(56, 189, 248)", activeBg: "rgb(14, 165, 233)" },
  violet: { bg: "rgba(139, 92, 246, 0.1)", border: "rgba(139, 92, 246, 0.4)", text: "rgb(167, 139, 250)", activeBg: "rgb(139, 92, 246)" }
};
const FaqSection = ({ config }) => {
  var _a;
  const allFaqs = config.faqCategories.flatMap((cat) => cat.faqs);
  return /* @__PURE__ */ jsxs("section", { id: "faq", className: "py-24 lg:py-32 relative overflow-hidden scroll-mt-24", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-1/4 w-80 h-48 bg-primary/5 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/4 w-80 h-48 bg-primary/5 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 animate-fade-up", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: "FAQ" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: [
          config.faqHeadline,
          " ",
          config.faqHighlight && /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: config.faqHighlight })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: config.faqSubheadline })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: (_a = config.faqCategories[0]) == null ? void 0 : _a.id, className: "w-full", children: [
          /* @__PURE__ */ jsx(TabsList, { className: "w-full flex flex-wrap justify-start gap-2 bg-transparent h-auto mb-8 p-0", children: config.faqCategories.map((category) => {
            const IconComponent = category.icon;
            const colors = colorStyles[category.color] || colorStyles.emerald;
            return /* @__PURE__ */ jsxs(
              TabsTrigger,
              {
                value: category.id,
                className: "flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300",
                style: { backgroundColor: "rgba(0, 0, 0, 0.3)", borderWidth: "1px", borderStyle: "solid", borderColor: colors.border, color: colors.text },
                children: [
                  /* @__PURE__ */ jsx(IconComponent, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: category.label })
                ]
              },
              category.id
            );
          }) }),
          config.faqCategories.map((category) => /* @__PURE__ */ jsx(TabsContent, { value: category.id, className: "mt-0", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: category.faqs.map((faq, index) => /* @__PURE__ */ jsxs(
            AccordionItem,
            {
              value: `item-${index}`,
              className: "bg-black border rounded-xl px-6 transition-all animate-fade-up hover:shadow-[0_0_60px_rgba(255,127,80,0.5)] data-[state=open]:shadow-[0_0_60px_rgba(255,127,80,0.5)]",
              style: { animationDelay: `${index * 0.05}s`, borderColor: "#ff7f50ff" },
              children: [
                /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left text-foreground hover:text-primary font-medium py-5 hover:no-underline", children: faq.question }),
                /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground pb-5 leading-relaxed", children: faq.answer })
              ]
            },
            index
          )) }) }, category.id))
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-1 animate-fade-up", style: { animationDelay: "0.2s" }, children: /* @__PURE__ */ jsxs("div", { className: "sticky top-24 p-8 rounded-2xl border-2 border-primary/60 bg-card/30 backdrop-blur-sm text-center shadow-[0_0_30px_rgba(255,127,80,0.15)]", children: [
          /* @__PURE__ */ jsx("div", { className: "w-24 h-24 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-primary via-orange-400 to-primary", children: /* @__PURE__ */ jsx("img", { src: baseContactCTA.image, alt: baseContactCTA.name, className: "w-full h-full rounded-full object-cover" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-foreground mb-4", children: config.faqCtaCard.headline }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: config.faqCtaCard.body }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium mb-6", children: config.faqCtaCard.signoff }),
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("p", { className: "font-cursive text-2xl text-foreground italic", children: baseContactCTA.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: baseContactCTA.role })
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "lg",
              className: "w-full bg-gradient-to-r from-[hsl(199_89%_48%)] to-primary text-white rounded-full border-none hover:shadow-[0_0_30px_rgba(255,127,80,0.5),0_0_60px_rgba(255,127,80,0.3)] hover:scale-105 transition-all duration-300",
              asChild: true,
              children: /* @__PURE__ */ jsxs("a", { href: "https://lp.growsmallbiz.io/digital-growth-strategy-session", target: "_blank", rel: "noopener noreferrer", children: [
                "Schedule Strategy Call",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
              ] })
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer }
            }))
          })
        }
      }
    )
  ] });
};
const MidPageCtaSlot = ({
  config,
  position,
  strategySessionUrl
}) => {
  if (!config.midPageCta || config.midPageCta.position !== position) return null;
  return /* @__PURE__ */ jsx(
    CardCTA,
    {
      title: config.midPageCta.headline,
      description: config.midPageCta.subtext,
      buttonText: config.midPageCta.primaryLabel,
      buttonHref: strategySessionUrl,
      accentWords: [],
      sectionClassName: "py-16"
    }
  );
};
const NichePage = ({ config }) => {
  const { strategySessionUrl } = useUtm();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: config.pageTitle }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: config.metaDescription })
    ] }),
    /* @__PURE__ */ jsx(
      ServiceJsonLd,
      {
        serviceName: config.serviceName,
        serviceType: config.serviceType,
        description: config.serviceDescription,
        url: config.canonicalUrl,
        breadcrumbs: config.breadcrumbs,
        offerCatalog: config.offerCatalog
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(HeroSection, { config, strategySessionUrl }),
    /* @__PURE__ */ jsx(HeroExtendedSection, { config }),
    /* @__PURE__ */ jsx(PainPointsSection, { config }),
    /* @__PURE__ */ jsx(IndustryStatsSection, { data: config.industryStats }),
    /* @__PURE__ */ jsx(SystemDiagramSection, { config }),
    /* @__PURE__ */ jsx(
      CtaBlock,
      {
        headline: config.ctaAfterPainPoints.headline,
        subtext: config.ctaAfterPainPoints.subtext,
        strategySessionUrl
      }
    ),
    /* @__PURE__ */ jsx(OnThisPageNav, { config }),
    /* @__PURE__ */ jsx(CoreServicesSection, { config }),
    /* @__PURE__ */ jsx(StagedApproachSection, { config }),
    /* @__PURE__ */ jsx(WebsiteDesignSection, { config, strategySessionUrl }),
    /* @__PURE__ */ jsx(SeoSection, { config, strategySessionUrl }),
    /* @__PURE__ */ jsx(FourLaneSearchSection, { config }),
    /* @__PURE__ */ jsx(
      CardCTA,
      {
        title: config.ctaAfterSeo.headline,
        description: config.ctaAfterSeo.subtext,
        buttonText: "Schedule Strategy Call",
        buttonHref: strategySessionUrl,
        accentWords: ["Free", "SEO Visibility Audit"],
        sectionClassName: "py-16"
      }
    ),
    /* @__PURE__ */ jsx(PaidMediaSection, { config, strategySessionUrl }),
    /* @__PURE__ */ jsx(RetargetingSection, { config }),
    /* @__PURE__ */ jsx(SocialMediaSection, { config }),
    /* @__PURE__ */ jsx(AiGrowthSystemSection, { config }),
    /* @__PURE__ */ jsx(ReputationSection, { config }),
    /* @__PURE__ */ jsx(AiVoiceChatSection, { config }),
    /* @__PURE__ */ jsx(
      CardCTA,
      {
        title: config.ctaAfterGrowthSystem.headline,
        description: config.ctaAfterGrowthSystem.subtext,
        buttonText: "Schedule Strategy Call",
        buttonHref: strategySessionUrl,
        accentWords: config.stickyCtaConfig.accentWords,
        sectionClassName: "py-16"
      }
    ),
    /* @__PURE__ */ jsx(MidPageCtaSlot, { config, position: "afterServices", strategySessionUrl }),
    /* @__PURE__ */ jsx(WhyChooseUsSection, { config }),
    /* @__PURE__ */ jsx(HowItWorksSection, { config }),
    /* @__PURE__ */ jsx(MidPageCtaSlot, { config, position: "afterHowItWorks", strategySessionUrl }),
    /* @__PURE__ */ jsx(WhoThisIsForSection, { config }),
    /* @__PURE__ */ jsx(MidPageCtaSlot, { config, position: "afterWhoThisIsFor", strategySessionUrl }),
    config.caseStudyLinks && config.caseStudyLinks.length > 0 && /* @__PURE__ */ jsx(CaseStudyLinksSection, { links: config.caseStudyLinks }),
    /* @__PURE__ */ jsx(RealResultsSection, { config }),
    /* @__PURE__ */ jsx(CampaignResultsCardsSection, { config }),
    /* @__PURE__ */ jsx(FaqSection, { config }),
    /* @__PURE__ */ jsx(ConsultationFormSection, {}),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-background border-t border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: "#",
        onClick: (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group",
        children: [
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 rotate-[-90deg] group-hover:-translate-y-1 transition-transform" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Back to Top" })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  NichePage as N
};
