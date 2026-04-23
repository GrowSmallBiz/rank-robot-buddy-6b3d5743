import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { B as Button, H as Header } from "./Header-Dct2bBAe.js";
import { F as Footer } from "./Footer-5rMz2U4O.js";
import { AnimatedStatsSection } from "./AnimatedStatsSection-DCypE1b8.js";
import { Star, TrendingDown, ArrowRight, TrendingUp, Users, Award, MapPin, Bot, Target, Eye, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { B as BlogSection, g as generalBlogPosts } from "./BlogSection-2z1DP-xZ.js";
import { ConsultationFormSection } from "./ConsultationFormSection-DDNhkaf7.js";
import { WhyChooseSection } from "./WhyChooseSection-DuLCr5_6.js";
import { FAQSection } from "./FAQSection-Knk-AyWr.js";
import { C as CardCTA } from "./CardCTA-lztA_Zrf.js";
import { c as createContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { P as PageJsonLd } from "./PageJsonLd-DPKTdsi3.js";
import { u as useUtm, C as CTA_URLS } from "./use-utm-CiJKCMCk.js";
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
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: `py-24 lg:py-32 relative overflow-hidden ${isLight ? "" : ""}`,
      style: isLight ? { background: "linear-gradient(180deg, hsl(30 20% 96%) 0%, hsl(35 25% 93%) 50%, hsl(30 20% 96%) 100%)" } : { background: "linear-gradient(180deg, hsl(210 45% 16%) 0%, hsl(210 50% 12%) 50%, hsl(210 45% 16%) 100%)" },
      children: [
        !isLight && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/3 -left-32 w-64 h-64 bg-primary/8 rounded-full blur-3xl" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/3 -right-32 w-64 h-64 bg-primary/8 rounded-full blur-3xl" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
            /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: "Testimonials" }),
            /* @__PURE__ */ jsx("h2", { className: `text-3xl md:text-4xl font-display font-bold ${isLight ? "text-slate-800" : "text-foreground"}`, children: title }),
            subtitle && /* @__PURE__ */ jsx("p", { className: `mt-4 max-w-2xl mx-auto ${isLight ? "text-slate-600" : "text-muted-foreground"}`, children: subtitle })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: `backdrop-blur-sm rounded-2xl p-8 space-y-6 animate-fade-up transition-all ${isLight ? "bg-white/90 border-2 border-stone-200/70 shadow-sm hover:shadow-lg" : "hover:shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]"}`,
              style: {
                animationDelay: `${index * 0.1}s`,
                ...isLight ? {} : { border: "2px solid #17a2b8", backgroundColor: "#2d465c" }
              },
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: Array.from({ length: testimonial.rating || 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 fill-primary text-primary" }, i)) }),
                /* @__PURE__ */ jsxs("p", { className: `leading-relaxed ${isLight ? "text-slate-700" : "text-foreground"}`, children: [
                  '"',
                  testimonial.quote,
                  '"'
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: `font-semibold ${isLight ? "text-slate-800" : "text-foreground"}`, children: testimonial.author }),
                  /* @__PURE__ */ jsxs("p", { className: `text-sm ${isLight ? "text-slate-500" : "text-muted-foreground"}`, children: [
                    testimonial.role && `${testimonial.role}, `,
                    testimonial.company
                  ] })
                ] })
              ]
            },
            index
          )) })
        ] })
      ]
    }
  );
};
const CaseStudySection = ({
  caseStudies,
  title = "Real Results, Real Businesses",
  subtitle = "See how we've helped businesses like yours achieve measurable growth",
  ctaLink = "https://lp.growsmallbiz.io/digital-growth-strategy-session",
  ctaText = "Schedule Strategy Call"
}) => {
  return /* @__PURE__ */ jsxs("section", { className: "py-24 relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 section-glow" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: subtitle })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto", children: caseStudies.map((study, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-2xl overflow-hidden card-hover",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-gradient-primary p-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Case Study" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-primary-foreground/60", children: study.timeframe })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-primary-foreground mb-1", children: study.company }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-primary-foreground/80", children: [
                study.location,
                " • ",
                study.industry
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 border-b border-border", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "The Challenge" }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground", children: study.challenge })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 bg-muted/30", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4", children: "Before & After Results" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-4", children: study.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: metric.label }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(TrendingDown, { className: "w-4 h-4 text-destructive" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground line-through", children: metric.before })
                  ] }),
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-muted-foreground" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4 text-primary" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-foreground", children: metric.after })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full", children: metric.improvement })
                ] })
              ] }, mIndex)) })
            ] }),
            study.quote && /* @__PURE__ */ jsxs("div", { className: "p-6 border-t border-border", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-foreground italic mb-3", children: [
                '"',
                study.quote,
                '"'
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
                "— ",
                study.quoteName,
                ", ",
                study.quoteRole
              ] })
            ] }),
            study.link && /* @__PURE__ */ jsx("div", { className: "px-6 pb-6", children: /* @__PURE__ */ jsxs(
              Link,
              {
                to: study.link,
                className: "inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline",
                children: [
                  "View Full Case Study",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            ) })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: ctaLink.startsWith("http") ? /* @__PURE__ */ jsxs("a", { href: ctaLink, target: "_blank", rel: "noopener noreferrer", children: [
        ctaText,
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
      ] }) : /* @__PURE__ */ jsxs(Link, { to: ctaLink, children: [
        ctaText,
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
      ] }) }) })
    ] })
  ] });
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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "About GrowSmallBiz | AI-Powered Marketing Agency" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Learn about GrowSmallBiz — a digital marketing agency helping local service businesses grow with AI-powered SEO, automation, and lead generation strategies." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/about/" })
    ] }),
    /* @__PURE__ */ jsx(
      PageJsonLd,
      {
        pageType: "AboutPage",
        name: "About GrowSmallBiz Digital Marketing",
        description: "AI-powered SEO and digital marketing for local service businesses.",
        url: "/about/",
        breadcrumbs: [{ name: "About", url: "/about/" }]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-24 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 hero-glow" }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center space-y-8", children: [
          /* @__PURE__ */ jsx("div", { className: "animate-fade-up", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium", children: [
            /* @__PURE__ */ jsx(Users, { className: "w-4 h-4" }),
            "About GrowSmallBiz"
          ] }) }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100", children: [
            "Helping Local Service Businesses",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Dominate Online" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up delay-200", children: "We're a team of SEO specialists, AI strategists, and digital marketers dedicated to helping small and medium local businesses compete and win in the digital landscape." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(AnimatedStatsSection, { stats, columns: 4 }),
      /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium", children: "Our Story" }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: "Born from a Simple Belief" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsx("p", { children: "GrowSmallBiz was founded on a simple belief: local businesses deserve the same caliber of digital marketing that enterprise companies enjoy, without the enterprise price tag." }),
            /* @__PURE__ */ jsx("p", { children: "We saw too many local businesses struggling to compete online—not because they lacked quality products or services, but because they couldn't navigate the complex world of SEO, AI optimization, and digital advertising." }),
            /* @__PURE__ */ jsx("p", { children: "Today, we've helped over 150 local businesses across industries like HVAC, dental, med spas, and more to establish dominant online presences. Our approach combines proven SEO strategies with cutting-edge AI optimization to ensure our clients stay ahead of the curve." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative animate-fade-up delay-200", children: /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-border", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsx(Award, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", children: "Mission" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "What drives us every day" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground leading-relaxed", children: '"To democratize digital marketing excellence, ensuring every local business can achieve online visibility and growth regardless of size or budget."' })
        ] }) }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-card", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: "Our Values" }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: "What We Stand For" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Our core values guide every decision we make and every strategy we implement." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: values.map((value, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-background border border-border rounded-xl p-6 space-y-4 card-hover animate-fade-up",
            style: { animationDelay: `${index * 0.1}s` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(value.icon, { className: "w-6 h-6 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-semibold text-foreground", children: value.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: value.description })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx(
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
        }
      ),
      /* @__PURE__ */ jsx(
        TestimonialsSection,
        {
          testimonials: aboutTestimonials,
          title: "What Our Clients Say",
          subtitle: "Hear from the businesses we've helped grow"
        }
      ),
      /* @__PURE__ */ jsx(
        CaseStudySection,
        {
          caseStudies: aboutCaseStudies,
          title: "Client Success Stories",
          subtitle: "Real results from real businesses we've helped grow",
          ctaLink: "https://lp.growsmallbiz.io/digital-growth-strategy-session",
          ctaText: "Schedule Strategy Call"
        }
      ),
      /* @__PURE__ */ jsx(
        BlogSection,
        {
          posts: generalBlogPosts.slice(0, 3),
          title: "Latest Insights",
          subtitle: "Expert tips and strategies for growing your local business",
          showViewAll: true,
          viewAllLink: "/blog"
        }
      ),
      /* @__PURE__ */ jsx(
        FAQSection,
        {
          faqs: aboutFaqs,
          title: "Frequently Asked Questions",
          subtitle: "Common questions about working with GrowSmallBiz",
          contactCTA: aboutContactCTA
        }
      ),
      /* @__PURE__ */ jsx(
        CardCTA,
        {
          title: "Let's Talk About Your Business",
          description: "Schedule a free strategy call to discuss how we can help your local business grow online.",
          buttonHref: strategyCallUrl
        }
      ),
      /* @__PURE__ */ jsx(ConsultationFormSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  About as default
};
