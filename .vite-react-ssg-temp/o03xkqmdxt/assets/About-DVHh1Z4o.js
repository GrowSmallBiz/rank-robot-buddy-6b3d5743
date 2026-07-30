import { j as jsxDEV, F as Fragment } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { AnimatedStatsSection } from "./AnimatedStatsSection-BTCPrhtT.js";
import { Star, TrendingDown, ArrowRight, TrendingUp, Users, Award, MapPin, Bot, Target, Eye, Shield, Zap } from "lucide-react";
import { B as Button } from "./button-Co-CyCVS.js";
import { Link } from "react-router-dom";
import { B as BlogSection, g as generalBlogPosts } from "./BlogSection-Dl_FpRtJ.js";
import { ConsultationFormSection } from "./ConsultationFormSection-XatlJMLz.js";
import { WhyChooseSection } from "./WhyChooseSection-CylwFt5k.js";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { C as CardCTA } from "./CardCTA-_OitSbFr.js";
import { c as createContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { P as PageJsonLd } from "./PageJsonLd-D6BEuSgJ.js";
import { u as useUtm, C as CTA_URLS } from "./use-utm-X_toIThi.js";
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
const defaultTestimonials = [
  {
    quote: "GrowSmallBiz transformed our online presence. Our traffic doubled, and we saw a 200% increase in qualified leads within just three months. Their team truly understands our needs.",
    author: "Jamie L.",
    role: "Marketing Director",
    company: "TechStart Inc.",
    rating: 5
  },
  {
    quote: "The AI-powered approach to SEO is revolutionary. We're now ranking for keywords we never thought possible. The ROI has been exceptional.",
    author: "Marcus R.",
    role: "CEO",
    company: "Digital Commerce Co.",
    rating: 5
  },
  {
    quote: "Their technical SEO audit revealed issues we'd missed for years. After implementing their recommendations, our Core Web Vitals are now all in the green.",
    author: "Sarah K.",
    role: "Head of Digital",
    company: "Enterprise Solutions",
    rating: 5
  }
];
const TestimonialsSection = ({
  testimonials = defaultTestimonials,
  title = "What Our Clients Say",
  subtitle,
  variant = "dark"
}) => {
  const isLight = variant === "light";
  return /* @__PURE__ */ jsxDEV(
    "section",
    {
      className: `py-24 lg:py-32 relative overflow-hidden ${isLight ? "" : ""}`,
      style: isLight ? { background: "linear-gradient(180deg, hsl(30 20% 96%) 0%, hsl(35 25% 93%) 50%, hsl(30 20% 96%) 100%)" } : { background: "linear-gradient(180deg, hsl(210 45% 16%) 0%, hsl(210 50% 12%) 50%, hsl(210 45% 16%) 100%)" },
      children: [
        !isLight && /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute top-1/3 -left-32 w-64 h-64 bg-primary/8 rounded-full blur-3xl" }, void 0, false, {
            fileName: "/dev-server/src/components/sections/TestimonialsSection.tsx",
            lineNumber: 65,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-1/3 -right-32 w-64 h-64 bg-primary/8 rounded-full blur-3xl" }, void 0, false, {
            fileName: "/dev-server/src/components/sections/TestimonialsSection.tsx",
            lineNumber: 66,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/sections/TestimonialsSection.tsx",
          lineNumber: 64,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-4", children: "Testimonials" }, void 0, false, {
              fileName: "/dev-server/src/components/sections/TestimonialsSection.tsx",
              lineNumber: 72,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("h2", { className: `text-3xl md:text-4xl font-display font-bold ${isLight ? "text-slate-800" : "text-foreground"} bg-gradient-heading bg-clip-text text-transparent`, children: title }, void 0, false, {
              fileName: "/dev-server/src/components/sections/TestimonialsSection.tsx",
              lineNumber: 73,
              columnNumber: 11
            }, void 0),
            subtitle && /* @__PURE__ */ jsxDEV("p", { className: `mt-4 max-w-2xl mx-auto ${isLight ? "text-slate-600" : "text-muted-foreground"}`, children: subtitle }, void 0, false, {
              fileName: "/dev-server/src/components/sections/TestimonialsSection.tsx",
              lineNumber: 77,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/TestimonialsSection.tsx",
            lineNumber: 71,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: `backdrop-blur-sm rounded-2xl p-8 space-y-6 animate-fade-up transition-all ${isLight ? "bg-white/90 border-2 border-stone-200/70 shadow-sm hover:shadow-lg" : "hover:shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]"}`,
              style: {
                animationDelay: `${index * 0.1}s`,
                ...isLight ? {} : { border: "2px solid #17a2b8", backgroundColor: "#2d465c" }
              },
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex gap-1", children: Array.from({ length: testimonial.rating || 5 }).map((_, i) => /* @__PURE__ */ jsxDEV(Star, { className: "w-5 h-5 fill-primary text-primary" }, i, false, {
                  fileName: "/dev-server/src/components/sections/TestimonialsSection.tsx",
                  lineNumber: 98,
                  columnNumber: 19
                }, void 0)) }, void 0, false, {
                  fileName: "/dev-server/src/components/sections/TestimonialsSection.tsx",
                  lineNumber: 96,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: `leading-relaxed ${isLight ? "text-slate-700" : "text-foreground"}`, children: [
                  '"',
                  testimonial.quote,
                  '"'
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/sections/TestimonialsSection.tsx",
                  lineNumber: 103,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("p", { className: `font-semibold ${isLight ? "text-slate-800" : "text-foreground"}`, children: testimonial.author }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/TestimonialsSection.tsx",
                    lineNumber: 109,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: `text-sm ${isLight ? "text-slate-500" : "text-muted-foreground"}`, children: [
                    testimonial.role && `${testimonial.role}, `,
                    testimonial.company
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/components/sections/TestimonialsSection.tsx",
                    lineNumber: 110,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/sections/TestimonialsSection.tsx",
                  lineNumber: 108,
                  columnNumber: 15
                }, void 0)
              ]
            },
            index,
            true,
            {
              fileName: "/dev-server/src/components/sections/TestimonialsSection.tsx",
              lineNumber: 83,
              columnNumber: 13
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/components/sections/TestimonialsSection.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/sections/TestimonialsSection.tsx",
          lineNumber: 70,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/sections/TestimonialsSection.tsx",
      lineNumber: 55,
      columnNumber: 5
    },
    void 0
  );
};
const CaseStudySection = ({
  caseStudies,
  title = "Real Results, Real Businesses",
  subtitle = "See how we've helped businesses like yours achieve measurable growth",
  ctaLink = "https://lp.growsmallbiz.io/digital-growth-strategy-session",
  ctaText = "Schedule Strategy Call"
}) => {
  return /* @__PURE__ */ jsxDEV("section", { className: "py-24 relative", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 section-glow" }, void 0, false, {
      fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: title }, void 0, false, {
          fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: subtitle }, void 0, false, {
          fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto", children: caseStudies.map((study, index) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "bg-card border border-border rounded-2xl overflow-hidden card-hover",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-primary p-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Case Study" }, void 0, false, {
                  fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                  lineNumber: 60,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-primary-foreground/60", children: study.timeframe }, void 0, false, {
                  fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                  lineNumber: 63,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                lineNumber: 59,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-bold text-primary-foreground mb-1", children: study.company }, void 0, false, {
                fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                lineNumber: 67,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-primary-foreground/80", children: [
                study.location,
                " • ",
                study.industry
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                lineNumber: 70,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
              lineNumber: 58,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-6 border-b border-border", children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "The Challenge" }, void 0, false, {
                fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                lineNumber: 77,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-foreground", children: study.challenge }, void 0, false, {
                fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                lineNumber: 80,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
              lineNumber: 76,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-6 bg-muted/30", children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4", children: "Before & After Results" }, void 0, false, {
                fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                lineNumber: 87,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: study.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-muted-foreground", children: metric.label }, void 0, false, {
                  fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                  lineNumber: 93,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxDEV(TrendingDown, { className: "w-4 h-4 text-destructive" }, void 0, false, {
                      fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                      lineNumber: 96,
                      columnNumber: 27
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-muted-foreground line-through", children: metric.before }, void 0, false, {
                      fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                      lineNumber: 97,
                      columnNumber: 27
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                    lineNumber: 95,
                    columnNumber: 25
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 text-muted-foreground" }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                    lineNumber: 99,
                    columnNumber: 25
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-4 h-4 text-primary" }, void 0, false, {
                      fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                      lineNumber: 101,
                      columnNumber: 27
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-semibold text-foreground", children: metric.after }, void 0, false, {
                      fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                      lineNumber: 102,
                      columnNumber: 27
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                    lineNumber: 100,
                    columnNumber: 25
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full", children: metric.improvement }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                    lineNumber: 104,
                    columnNumber: 25
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                  lineNumber: 94,
                  columnNumber: 23
                }, void 0)
              ] }, mIndex, true, {
                fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                lineNumber: 92,
                columnNumber: 21
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                lineNumber: 90,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
              lineNumber: 86,
              columnNumber: 15
            }, void 0),
            study.quote && /* @__PURE__ */ jsxDEV("div", { className: "p-6 border-t border-border", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-foreground italic mb-3", children: [
                '"',
                study.quote,
                '"'
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                lineNumber: 116,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: [
                "— ",
                study.quoteName,
                ", ",
                study.quoteRole
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                lineNumber: 119,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
              lineNumber: 115,
              columnNumber: 17
            }, void 0),
            study.link && /* @__PURE__ */ jsxDEV("div", { className: "px-6 pb-6", children: /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: study.link,
                className: "inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline",
                children: [
                  "View Full Case Study",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                    lineNumber: 133,
                    columnNumber: 21
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
                lineNumber: 128,
                columnNumber: 19
              },
              void 0
            ) }, void 0, false, {
              fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
              lineNumber: 127,
              columnNumber: 17
            }, void 0)
          ]
        },
        index,
        true,
        {
          fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
          lineNumber: 53,
          columnNumber: 13
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "lg", asChild: true, children: ctaLink.startsWith("http") ? /* @__PURE__ */ jsxDEV("a", { href: ctaLink, target: "_blank", rel: "noopener noreferrer", children: [
        ctaText,
        /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
          fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
          lineNumber: 146,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
        lineNumber: 144,
        columnNumber: 15
      }, void 0) : /* @__PURE__ */ jsxDEV(Link, { to: ctaLink, children: [
        ctaText,
        /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
          fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
          lineNumber: 151,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
        lineNumber: 149,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
        lineNumber: 142,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/CaseStudySection.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, void 0);
};
const aboutFaqs = [
  {
    question: "What types of businesses does GrowSmallBiz work with?",
    answer: "We specialize in helping local service-based businesses including HVAC companies, dental practices, med spas, chiropractors, auto repair shops, photographers, and similar industries. Our strategies are tailored to businesses that serve local customers and want to dominate their geographic market."
  },
  {
    question: "How is GrowSmallBiz different from other digital marketing agencies?",
    answer: "We combine traditional SEO expertise with cutting-edge AI optimization (AEO & GEO), ensuring your business is visible both on Google and AI platforms like ChatGPT. Plus, we focus exclusively on local businesses, so we understand the unique challenges and opportunities you face."
  },
  {
    question: "What results can I expect and how quickly?",
    answer: "Most clients see noticeable improvements within 3-4 months, with significant results by 6 months. Typical outcomes include 2-3x increase in organic traffic, substantial growth in leads and phone calls, and improved Google rankings. Results vary based on your starting point and competition."
  },
  {
    question: "Do you require long-term contracts?",
    answer: "We offer flexible engagement options. While SEO is a long-term strategy and we recommend a minimum 6-month commitment to see meaningful results, we don't lock you into rigid multi-year contracts. Our goal is to earn your business through results, not contracts."
  },
  {
    question: "How do you measure and report success?",
    answer: "We provide transparent monthly reports showing rankings, traffic, leads, and calls. We focus on metrics that matter to your business—not just vanity metrics. You'll always know exactly what we're doing and how it's impacting your bottom line."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing is customized based on your business size, competition, and goals. We offer packages starting from comprehensive local SEO to full-service digital marketing. Schedule a free assessment to get a personalized quote for your specific situation."
  }
];
const aboutContactCTA = createContactCTA({
  title: "Have more questions about GrowSmallBiz?",
  description: "We're here to help!",
  tagline: "Let's discuss how we can help grow your business together."
});
const aboutTestimonials = [
  {
    quote: "GrowSmallBiz became an extension of our team. They understand our industry and deliver results month after month.",
    author: "Dr. Jennifer Park",
    role: "Practice Owner",
    company: "Park Family Dentistry"
  },
  {
    quote: "The transparency and communication is incredible. We always know exactly what's happening with our campaigns.",
    author: "Mike Thompson",
    role: "Owner",
    company: "Thompson HVAC Services"
  },
  {
    quote: "They don't just do SEO—they understand our business goals and help us achieve them. True partners.",
    author: "Amanda Foster",
    role: "Medical Director",
    company: "Radiance Aesthetics"
  }
];
const values = [
  {
    title: "Results-Driven",
    description: "We measure success by your growth, not vanity metrics. Every strategy is designed to drive real business outcomes.",
    icon: TrendingUp
  },
  {
    title: "Transparency First",
    description: "No black boxes or hidden tactics. We explain exactly what we do, why we do it, and how it impacts your business.",
    icon: Shield
  },
  {
    title: "Local Expertise",
    description: "We specialize in helping small and medium local businesses compete with larger competitors in their markets.",
    icon: Target
  },
  {
    title: "AI-Forward Approach",
    description: "We stay ahead of the curve, integrating AI tools and optimizing for AI platforms before they become mainstream.",
    icon: Zap
  }
];
const stats = [
  { value: "150+", label: "Local Businesses Served" },
  { value: "3.2x", label: "Average Traffic Increase" },
  { value: "85%", label: "Client Retention Rate" },
  { value: "5+", label: "Years of Experience" }
];
const aboutCaseStudies = [
  {
    company: "Premier Dental Group",
    location: "San Jose, CA",
    industry: "Dental Practice",
    challenge: "New patient flow had plateaued despite years of experience. Needed to attract more high-value cosmetic cases.",
    timeframe: "6 months",
    metrics: [
      { label: "New Patients/Month", before: "28", after: "84", improvement: "+200%" },
      { label: "Cosmetic Case Value", before: "$2,100", after: "$5,800", improvement: "+176%" },
      { label: "Google Rankings", before: "Page 3", after: "#1", improvement: "Top Spot" }
    ],
    quote: "GrowSmallBiz transformed our practice. We're now the go-to dental office in our area.",
    quoteName: "Dr. Michael Chen",
    quoteRole: "Owner, Premier Dental Group"
  },
  {
    company: "Comfort Pro HVAC",
    location: "Oakland, CA",
    industry: "HVAC Services",
    challenge: "Losing emergency calls to larger competitors. Website wasn't generating enough service requests.",
    timeframe: "5 months",
    metrics: [
      { label: "Monthly Service Calls", before: "45", after: "142", improvement: "+216%" },
      { label: "Emergency Calls", before: "8/mo", after: "38/mo", improvement: "+375%" },
      { label: "Average Ticket Value", before: "$380", after: "$620", improvement: "+63%" }
    ],
    quote: "We went from struggling to keep up with the big guys to becoming the #1 choice in our area.",
    quoteName: "Mike Thompson",
    quoteRole: "Owner, Comfort Pro HVAC"
  }
];
const About = () => {
  const { buildUrl } = useUtm();
  const strategyCallUrl = buildUrl(CTA_URLS.strategySession, "schedule-strategy-call");
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "About GrowSmallBiz | AI-Powered Marketing Agency" }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "GrowSmallBiz: AI-powered marketing for local businesses. Get more leads with AI SEO, AI optimized ads, and marketing automation. Contact us!" }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "digital marketing, SEO services, local business marketing, AI-powered marketing, lead generation strategies, online presence enhancement, GrowSmallBiz, marketing automation" }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/about/" }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      PageJsonLd,
      {
        pageType: "AboutPage",
        name: "About GrowSmallBiz Digital Marketing",
        description: "AI-powered SEO and digital marketing for local service businesses.",
        url: "/about/",
        breadcrumbs: [{ name: "About", url: "/about/" }]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 150,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "relative pt-32 pb-24 overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 hero-glow" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 161,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center space-y-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "animate-fade-up", children: /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium", children: [
            /* @__PURE__ */ jsxDEV(Users, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 167,
              columnNumber: 17
            }, void 0),
            "About GrowSmallBiz"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 166,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 165,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100 bg-gradient-heading bg-clip-text text-transparent", children: "Helping Local Service Businesses Dominate Online" }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 172,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up delay-200", children: "We're a team of SEO specialists, AI strategists, and digital marketers dedicated to helping small and medium local businesses compete and win in the digital landscape." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 176,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 164,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 163,
          columnNumber: 9
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 160,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV(AnimatedStatsSection, { stats, columns: 4 }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 185,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium", children: "Our Story" }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 192,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent", children: "Born from a Simple Belief" }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 193,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsxDEV("p", { children: [
              "GrowSmallBiz was founded on a simple belief: local businesses deserve the same caliber of digital marketing that enterprise companies enjoy, without the enterprise price tag. Explore our full ",
              /* @__PURE__ */ jsxDEV(Link, { to: "/services/", className: "text-primary hover:underline", children: "Digital Marketing Services Overview" }, void 0, false, {
                fileName: "/dev-server/src/pages/About.tsx",
                lineNumber: 200,
                columnNumber: 70
              }, void 0),
              " to see how each piece fits together."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 197,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "We saw too many local businesses struggling to compete online—not because they lacked quality products or services, but because they couldn't navigate the complex world of SEO, AI optimization, and digital advertising." }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 202,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Today, we've helped over 150 local businesses across industries like HVAC, dental, med spas, and more to establish dominant online presences. Our approach combines proven SEO strategies with cutting-edge AI optimization to ensure our clients stay ahead of the curve. Learn more about our ",
              /* @__PURE__ */ jsxDEV(Link, { to: "/services/seo-agency/", className: "text-primary hover:underline", children: "Managed AI SEO Services" }, void 0, false, {
                fileName: "/dev-server/src/pages/About.tsx",
                lineNumber: 211,
                columnNumber: 87
              }, void 0),
              " built specifically for local service brands."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 207,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 196,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 191,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "relative animate-fade-up delay-200", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-border", children: /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Award, { className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 221,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 220,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-foreground", children: "Mission" }, void 0, false, {
                fileName: "/dev-server/src/pages/About.tsx",
                lineNumber: 224,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: "What drives us every day" }, void 0, false, {
                fileName: "/dev-server/src/pages/About.tsx",
                lineNumber: 225,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 223,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 219,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground leading-relaxed", children: '"To democratize digital marketing excellence, ensuring every local business can achieve online visibility and growth regardless of size or budget."' }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 228,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 218,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 217,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 216,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 190,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 188,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-4", children: "Our Values" }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 244,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "What We Stand For" }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 245,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: [
            "Our core values guide every decision we make and every strategy we implement. Have a question about how we'd apply them to your business? ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/contact/", className: "text-primary hover:underline", children: "Contact GrowSmallBiz for Consultation" }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 249,
              columnNumber: 153
            }, void 0),
            "."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 248,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 243,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: values.map((value, index) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "bg-background border border-border rounded-xl p-6 space-y-4 card-hover animate-fade-up",
            style: { animationDelay: `${index * 0.1}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(value.icon, { className: "w-6 h-6 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/About.tsx",
                lineNumber: 261,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/About.tsx",
                lineNumber: 260,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-semibold text-foreground", children: value.title }, void 0, false, {
                fileName: "/dev-server/src/pages/About.tsx",
                lineNumber: 263,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: value.description }, void 0, false, {
                fileName: "/dev-server/src/pages/About.tsx",
                lineNumber: 266,
                columnNumber: 17
              }, void 0)
            ]
          },
          index,
          true,
          {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 255,
            columnNumber: 15
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 253,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 242,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 241,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        WhyChooseSection,
        {
          title: "Why Choose GrowSmallBiz for Local Business Growth",
          subtitle: "Built Different for Local Success",
          description: "We combine local-first strategy, AI-ready optimization, and full-funnel integration to help your business dominate your market.",
          items: [
            { title: "Local-First Strategy", description: "We understand the nuances of local search, Google Business Profile optimization, and geo-targeted campaigns that drive foot traffic and local leads.", icon: MapPin },
            { title: "AI-Ready Optimization", description: "We prepare your business for the AI era with AEO and GEO, ensuring you're visible on ChatGPT, Google AI, and other AI platforms.", icon: Bot },
            { title: "Full-Funnel Integration", description: "We don't just drive traffic—we combine SEO with retargeting and paid media strategies to maximize conversions.", icon: TrendingUp },
            { title: "Results-Driven Approach", description: "We measure success by your growth, not vanity metrics. Every strategy is designed to drive real business outcomes.", icon: Target },
            { title: "Full Transparency", description: "No black boxes or hidden tactics. We explain exactly what we do, why we do it, and how it impacts your business.", icon: Eye },
            { title: "Dedicated Support", description: "Get a dedicated Strategic Partner who champions your success, backed by a curated network of specialists.", icon: Users }
          ]
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 275,
          columnNumber: 7
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        TestimonialsSection,
        {
          testimonials: aboutTestimonials,
          title: "What Our Clients Say",
          subtitle: "Hear from the businesses we've helped grow"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 289,
          columnNumber: 7
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        CaseStudySection,
        {
          caseStudies: aboutCaseStudies,
          title: "Client Success Stories",
          subtitle: "Real results from real businesses we've helped grow",
          ctaLink: "https://lp.growsmallbiz.io/digital-growth-strategy-session",
          ctaText: "Schedule Strategy Call"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 295,
          columnNumber: 7
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        BlogSection,
        {
          posts: generalBlogPosts.slice(0, 3),
          title: "Latest Insights",
          subtitle: "Expert tips and strategies for growing your local business",
          showViewAll: true,
          viewAllLink: "/blog"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 303,
          columnNumber: 7
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          faqs: aboutFaqs,
          title: "Frequently Asked Questions",
          subtitle: "Common questions about working with GrowSmallBiz",
          contactCTA: aboutContactCTA
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 311,
          columnNumber: 7
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        CardCTA,
        {
          title: "Let's Talk About Your Business",
          description: "Schedule a free strategy call to discuss how we can help your local business grow online.",
          buttonHref: strategyCallUrl
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 318,
          columnNumber: 7
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 324,
        columnNumber: 7
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 326,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/About.tsx",
    lineNumber: 143,
    columnNumber: 5
  }, void 0);
};
export {
  About as default
};
