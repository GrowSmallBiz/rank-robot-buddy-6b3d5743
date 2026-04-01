import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { G as GoogleColoredText } from "./GoogleColoredText-CAcHXaI3.js";
import { u as useUtm, P as PageJsonLd, H as Header, B as Button, c as createContactCTA, F as Footer } from "../main.mjs";
import { Search, MousePointerClick, TrendingUp, ChevronDown } from "lucide-react";
import { P as PdfViewer } from "./PdfViewerWrapper-Cy6RhGQL.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-DJSFYMaR.js";
import { useState, useRef, useEffect } from "react";
import { S as ServiceHero } from "./ServiceHero-DkZ5LbCF.js";
import { C as ConsultationFormSection } from "./ConsultationFormSection-4DCBAAjl.js";
import { P as PersonCTA } from "./PersonCTA-Bt3waad_.js";
import { FAQSection } from "./FAQSection-BO0A5ebo.js";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "react-router-dom";
import "@radix-ui/react-slot";
import "@radix-ui/react-tabs";
import "@radix-ui/react-accordion";
const heroBg = "/assets/case-studies-tree-lawn-hero-bg-CxYmZmdQ.jpg";
const summaryCards = [
  {
    title: "Landscape Design-Build Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+45.41% Organic Traffic Users",
      "+46.13% New Users",
      "+45.57% Sessions",
      "Top landscape keywords moved from beyond page one to top positions"
    ]
  },
  {
    title: "Landscaping Local SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+43.14% Impressions",
      "#1 landscape installation ashland ky",
      "#1 landscaping service russel",
      "Strong local rankings despite GBP verification roadblocks"
    ]
  },
  {
    title: "Tree & Lawn SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+25.77% Clicks",
      "+138.54% Impressions",
      "1.1 Average Map Rank",
      "+770% Phone Number Clicks"
    ]
  }
];
const P = ({ children }) => /* @__PURE__ */ jsx("p", { className: "text-foreground/85 leading-relaxed", children });
const SubHead = ({ children }) => /* @__PURE__ */ jsx("h4", { className: "text-lg font-display font-semibold text-foreground mt-8 mb-3", children });
const DetailLabel = ({ children }) => /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-primary uppercase tracking-wider mt-6 mb-2", children });
const BulletList = ({ items }) => /* @__PURE__ */ jsx("ul", { className: "space-y-2 ml-1", children: items.map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-foreground/85 text-sm leading-relaxed", children: [
  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" }),
  /* @__PURE__ */ jsx("span", { children: item })
] }, i)) });
const PdfBlock = ({ src }) => /* @__PURE__ */ jsxs("div", { className: "mt-10", children: [
  /* @__PURE__ */ jsx("h4", { className: "text-lg font-display font-semibold text-foreground mb-4", children: "View Full Case Study Report" }),
  /* @__PURE__ */ jsx(PdfViewer, { src })
] });
const TreeLawnLandscaping = () => {
  const [activeTab, setActiveTab] = useState("landscape-design-build");
  const [activeSection, setActiveSection] = useState("local-seo");
  const navRef = useRef(null);
  const { strategySessionUrl, freeAuditUrl } = useUtm();
  useEffect(() => {
    const handleScroll = () => {
      const seoSection = document.getElementById("local-seo");
      const ppcSection = document.getElementById("google-ppc");
      if (seoSection && ppcSection) {
        const ppcTop = ppcSection.getBoundingClientRect().top;
        setActiveSection(ppcTop <= 120 ? "google-ppc" : "local-seo");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollTo = (id) => {
    var _a;
    const el = document.getElementById(id);
    if (el) {
      const offset = ((_a = navRef.current) == null ? void 0 : _a.offsetHeight) || 56;
      const y = el.getBoundingClientRect().top + window.scrollY - offset - 16;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Case Studies for Tree Care, Lawn Care & Landscaping Businesses | GrowSmallBiz" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Explore documented case study results for tree care, lawn care, and landscaping businesses across Local SEO and Google PPC campaigns. Real proof from Google Business Profile visibility, organic search growth, keyword movement, paid search performance, calls, conversions, and conversion-focused lead generation strategy."
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://growsmallbiz.io/case-studies/tree-lawn-landscaping/" })
    ] }),
    /* @__PURE__ */ jsx(
      PageJsonLd,
      {
        pageType: "WebPage",
        name: "Case Studies for Tree Care, Lawn Care & Landscaping Businesses",
        description: "Explore documented case study results for tree care, lawn care, and landscaping businesses across Local SEO and Google PPC campaigns.",
        Rl: "/case-studies/tree-lawn-landscaping/",
        breadcrumbs: [
          { name: "Case Studies", url: "/case-studies/" },
          { name: "Tree Care, Lawn Care & Landscaping", url: "/case-studies/tree-lawn-landscaping/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsx(
        ServiceHero,
        {
          badge: { icon: Search, text: "Case Studies / Local SEO + Google PPC" },
          title: "Case Studies for Tree Care, Lawn Care & Landscaping Businesses",
          subtitle: "Explore documented case study results for tree care, lawn care, and landscaping businesses across Local SEO and Google PPC campaigns. This page showcases real proof drawn from Google Business Profile visibility, organic search growth, keyword movement, paid search performance, calls, conversions, and conversion-focused lead generation strategy.",
          primaryCTA: { label: "Book a Strategy Session", href: strategySessionUrl },
          secondaryCTA: { label: "Request a Website & SEO Audit", href: freeAuditUrl },
          backgroundImage: heroBg,
          overlayOpacity: 85
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: navRef,
          className: "sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-lg",
          children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 py-3", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => scrollTo("local-seo"),
                className: `px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${activeSection === "local-seo" ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"}`,
                children: [
                  /* @__PURE__ */ jsx(Search, { className: "inline-block w-4 h-4 mr-2 -mt-0.5" }),
                  "Local SEO Results"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => scrollTo("google-ppc"),
                className: `px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${activeSection === "google-ppc" ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"}`,
                children: [
                  /* @__PURE__ */ jsx(MousePointerClick, { className: "inline-block w-4 h-4 mr-2 -mt-0.5" }),
                  /* @__PURE__ */ jsx(GoogleColoredText, {}),
                  " PPC Results"
                ]
              }
            )
          ] }) })
        }
      ),
      /* @__PURE__ */ jsxs("div", { id: "local-seo", children: [
        /* @__PURE__ */ jsx("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
            /* @__PURE__ */ jsx(Search, { className: "w-4 h-4" }),
            "Local SEO Case Studies"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: [
            "Local SEO ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Case Studies" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights local SEO campaign performance for tree care, lawn care, and landscaping businesses, with a focus on Google Business Profile visibility, map rankings, organic search growth, keyword movement, calls, and conversion-focused lead generation." })
        ] }) }) }),
        /* @__PURE__ */ jsxs("section", { className: "py-16 relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 section-glow" }),
          /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto", children: summaryCards.map((card, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-primary p-5", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-primary-foreground mt-2 mb-1", children: card.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-primary-foreground/70", children: card.subtitle })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "p-5 flex-1", children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: card.metrics.map((metric, mIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground/85", children: metric })
                  ] }, mIndex)) }) })
                ]
              },
              index
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mt-12 animate-bounce", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mb-2 text-primary", children: "Scroll Down to Read Full Case Studies" }),
              /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 text-primary" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-16 relative", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-6", children: [
            "Consistent Local SEO ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Methodology" }),
            " Across Tree, Lawn & Landscaping Campaigns"
          ] }),
          /* @__PURE__ */ jsx(P, { children: "Across these campaigns, the work consistently included internal linking improvements, advanced schema markup, Google Business Profile optimization, local and niche citation building, onsite location signal improvements, content support, and local visibility enhancements designed to improve rankings, engagement, and lead generation for high-intent service businesses." })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-16 relative", style: { backgroundColor: "hsl(210 30% 12%)" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
          /* @__PURE__ */ jsxs(TabsList, { className: "w-full h-auto flex-wrap bg-card/80 backdrop-blur-sm border border-border rounded-xl p-2 mb-10", children: [
            /* @__PURE__ */ jsx(
              TabsTrigger,
              {
                value: "landscape-design-build",
                className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
                children: "Landscape Design-Build — Residential"
              }
            ),
            /* @__PURE__ */ jsx(
              TabsTrigger,
              {
                value: "landscaping-ashland",
                className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
                children: "Landscaping — Ashland, KY"
              }
            ),
            /* @__PURE__ */ jsx(
              TabsTrigger,
              {
                value: "tree-lawn-chicagoland",
                className: "flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg",
                children: "Tree & Lawn Care — Chicagoland"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(TabsContent, { value: "landscape-design-build", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Landscape Design-Build — Residential" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsx(DetailLabel, { children: "Client" }),
              /* @__PURE__ */ jsx(P, { children: "This is a landscape design company specializing in residential backyard design-build projects." }),
              /* @__PURE__ */ jsx(DetailLabel, { children: "Niche" }),
              /* @__PURE__ */ jsx(P, { children: "Design-Build Landscaping" }),
              /* @__PURE__ */ jsx(DetailLabel, { children: "Goals" }),
              /* @__PURE__ */ jsx(
                BulletList,
                {
                  items: [
                    "Push forward rankings for the site's main pages",
                    "Capture more real estate in search results",
                    "Attract higher-quality traffic more likely to convert"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(DetailLabel, { children: "Action Plan" }),
              /* @__PURE__ */ jsx(
                BulletList,
                {
                  items: [
                    "Revised the internal linking strategy to strengthen primary service pages",
                    "Added advanced Schema Markup to increase SERP visibility"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(DetailLabel, { children: "Results" }),
              /* @__PURE__ */ jsx(P, { children: "Our efforts greatly impacted the organic traffic year over year and helped contribute to new and better keyword rankings." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Organic Traffic Growth" }),
              /* @__PURE__ */ jsx(P, { children: "As shown in the case study report, organic traffic users increased by 45.41%, new users from organic traffic increased by 46.13%, and sessions from organic traffic increased by 45.57%." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Keyword Movement" }),
              /* @__PURE__ */ jsx(P, { children: "The report also shows major ranking gains, including landscape architecture moving from beyond rank 100 to rank 1, landscape construction from beyond rank 100 to rank 1, landscape maintenance from beyond rank 100 to rank 1, garden management from beyond rank 100 to rank 4, and landscape installation from beyond rank 100 to rank 6." }),
              /* @__PURE__ */ jsx(PdfBlock, { src: "/case-studies/ai-seo-landscaping-case-study-1.pdf" }),
              /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsx("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }) }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(TabsContent, { value: "landscaping-ashland", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Landscaping — Ashland, KY" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsx(DetailLabel, { children: "Summary" }),
              /* @__PURE__ */ jsx(P, { children: "Google Business Profile is an essential tool for optimizing local SEO and maximizing online presence. Even with Google Business Profile waiting to be verified and website/content approvals slowing progress, the campaign still produced meaningful improvements in visibility and keyword rankings." }),
              /* @__PURE__ */ jsx(DetailLabel, { children: "Major Roadblocks" }),
              /* @__PURE__ */ jsx(
                BulletList,
                {
                  items: [
                    "Approval of blogs and other deliverables",
                    "Access issues and verification of Google Business Profile"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(DetailLabel, { children: "Goals" }),
              /* @__PURE__ */ jsx(
                BulletList,
                {
                  items: [
                    "Improve local visibility for landscaping and installation searches",
                    "Strengthen keyword rankings across desktop and mobile",
                    "Increase impressions and improve average search position"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(SubHead, { children: "Google Analytics - GA4 KPIs" }),
              /* @__PURE__ */ jsx(P, { children: "From April to June 2023, the website recorded a total of 260 users and 256 new users." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Traffic Acquisition — April vs. May" }),
              /* @__PURE__ */ jsx(P, { children: "For organic search, engagement time per session increased by 40.63%, events per session increased by 18.56%, and engagement rate increased by 25%." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Traffic Acquisition — May vs. June" }),
              /* @__PURE__ */ jsx(P, { children: "For organic search, the number of users increased by 125%, sessions increased by 53.33%, and engaged sessions increased by 30%." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Google Search Console KPIs" }),
              /* @__PURE__ */ jsx(P, { children: "We recorded 7 total clicks and 692 total impressions during the reporting period." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Impression Growth and Average Position" }),
              /* @__PURE__ */ jsx(P, { children: "Impressions increased by 73.28% from April to May, then increased again by 43.14% from May to June. Average position improved from 43.9 in April to 39.2 in May, then to 34.4 in June." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Top Queries" }),
              /* @__PURE__ */ jsx(
                BulletList,
                {
                  items: [
                    "landscaping lawrence county",
                    "summit landscaping",
                    "summit landscapes",
                    "landscaping ashland ky",
                    "summit landscape",
                    "summit landscaping ashland ky",
                    "lawn maintenance ashland",
                    "landscaping in summit",
                    "summit lawn care",
                    "summit outdoor services"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(SubHead, { children: "Keyword Rankings" }),
              /* @__PURE__ */ jsx(
                BulletList,
                {
                  items: [
                    "landscape maintenance companies near me — organic desktop rank 3 and organic mobile rank 2",
                    "landscape installation ashland ky — organic desktop rank 1 and organic mobile rank 1",
                    "ashland landscaping — organic desktop rank 2 and organic mobile rank 2",
                    "landscaping service russel — organic desktop rank 1 and organic mobile rank 1"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(PdfBlock, { src: "/case-studies/ai-seo-landscaping-case-study-2.pdf" }),
              /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsx("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }) }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(TabsContent, { value: "tree-lawn-chicagoland", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: "Tree & Lawn Care — Chicagoland" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsx(DetailLabel, { children: "Goals" }),
              /* @__PURE__ */ jsx(
                BulletList,
                {
                  items: [
                    "Enhance Keyword Performance",
                    "Increase Engagement and Visibility"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(DetailLabel, { children: "Action Plan" }),
              /* @__PURE__ */ jsx(
                BulletList,
                {
                  items: [
                    "Extensive keyword research to find relevant keywords including competitive analysis",
                    "Optimize GMB profile from top to bottom",
                    "Built relevant niche and local citations",
                    "Optimized onsite for location signals",
                    "Post weekly on their GMB profile to increase additional signals",
                    "Evaluate the site's content silo for content strategy",
                    "Create and publish monthly blogs as supplementary content for target keywords"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(SubHead, { children: "Google Analytics — User Acquisition" }),
              /* @__PURE__ */ jsx(P, { children: "New users from organic search increased by 2.95%, and engaged sessions from new users increased by 5.3%." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Traffic Acquisition" }),
              /* @__PURE__ */ jsx(P, { children: "Users from organic search increased by 7.39%, and conversions increased by 7.14%." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Conversions (Website)" }),
              /* @__PURE__ */ jsx(P, { children: "Contact form conversions increased by 16.67%, and phone number clicks increased by 770%." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Contact Form" }),
              /* @__PURE__ */ jsx(P, { children: "Organic search contributed to 37.5% of contact form goals. Contact form conversion decreased by 3.45% during the comparison period, providing a clear area for continued optimization." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Phone Number Clicks" }),
              /* @__PURE__ */ jsx(P, { children: "Organic search contributed to 6.7% of phone number click conversions, with 5 phone call clicks coming from organic search in October - November 2023." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Google Search Console" }),
              /* @__PURE__ */ jsx(P, { children: "Total clicks increased by 25.77%, and total impressions increased by 138.54%." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Local Search Grid" }),
              /* @__PURE__ */ jsx(P, { children: "Average map rank was 1.1." }),
              /* @__PURE__ */ jsx(SubHead, { children: "Keyword Improvements" }),
              /* @__PURE__ */ jsx(
                BulletList,
                {
                  items: [
                    "tree care company increased 7 positions in organic desktop and 16 positions in organic mobile",
                    "arborist naperville area increased by 4 positions in organic desktop and 7 positions in organic mobile",
                    "tree service naperville increased by 2 positions in organic desktop and 5 positions in organic mobile",
                    "lawn and tree service increased by 15 positions in organic desktop and 4 positions in organic mobile",
                    "tree and lawn care services increased by 5 positions in organic desktop and 4 positions in organic mobile",
                    "lawn and tree care increased by 4 positions in organic desktop, 4 positions in organic mobile, and 3 positions in local finder",
                    "tree care la grange park increased by 2 positions in organic desktop, 4 positions in organic mobile, and 2 positions in local finder",
                    "tree service western springs il increased by 2 positions in organic desktop, 2 positions in organic mobile, and 3 positions in local finder"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(PdfBlock, { src: "/case-studies/ai-seo-tree-lawn-care-case-study.pdf" }),
              /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsx("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }) }) })
            ] })
          ] }) })
        ] }) }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "google-ppc", children: [
        /* @__PURE__ */ jsx("section", { className: "pt-20 pb-4 relative", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6", children: [
            /* @__PURE__ */ jsx(MousePointerClick, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx(GoogleColoredText, {}),
            " PPC Case Studies"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: [
            /* @__PURE__ */ jsx(GoogleColoredText, {}),
            " PPC ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Case Studies" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/70 text-lg max-w-2xl mx-auto", children: "This section highlights paid search campaign performance for tree care, lawn care, and landscaping businesses, with a focus on lead generation, conversion efficiency, and cost-effective growth through Google Ads." })
        ] }) }) }),
        /* @__PURE__ */ jsxs("section", { className: "py-16 relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 section-glow" }),
          /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "flex justify-center max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-gradient-primary p-5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-primary-foreground/80 uppercase tracking-wider", children: "Campaign Results" }),
                /* @__PURE__ */ jsxs("h3", { className: "text-lg font-display font-bold text-primary-foreground mt-2 mb-1", children: [
                  "Tree & Lawn ",
                  /* @__PURE__ */ jsx(GoogleColoredText, {}),
                  " PPC Growth"
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-primary-foreground/70", children: "Google Ads Lead Generation Campaign" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-5 flex-1", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Paid Ads Impact" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  "Clicks → +169.5%",
                  "Conversions → +211.5%",
                  "Conversion Rate → +16.7%",
                  "Last 90 Days → 299 Conversions"
                ].map((metric, mIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground/85", children: metric })
                ] }, mIndex)) }),
                /* @__PURE__ */ jsx("h4", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-5 mb-3", children: "Campaign Outcome" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  "Stronger campaign scale",
                  "Higher lead volume from search",
                  "217 call leads in the last 90 days",
                  "82 form leads in the last 90 days"
                ].map((outcome, oIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(TrendingUp, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground/85", children: outcome })
                ] }, oIndex)) })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mt-12 animate-bounce", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mb-2 text-primary", children: "Scroll Down to Read Full Case Studies" }),
              /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 text-primary" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-16 relative", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-10", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30", children: [
            "Tree & Lawn ",
            /* @__PURE__ */ jsx(GoogleColoredText, {}),
            " PPC Case Study"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx(DetailLabel, { children: "Synopsis" }),
            /* @__PURE__ */ jsx(P, { children: "This Google Ads case study shows how a tree and lawn care business used Search and Performance Max campaigns to generate leads at scale while adjusting budget over time based on business requirements." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Challenges" }),
            /* @__PURE__ */ jsx(P, { children: "The campaign needed to balance lead volume, cost efficiency, and budget changes over time while producing both form fills and call leads." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Objective" }),
            /* @__PURE__ */ jsx(P, { children: "Increase qualified leads from Google Ads, improve conversion efficiency, and scale paid search performance as campaign data matured." }),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Campaign Strategy" }),
            /* @__PURE__ */ jsx(SubHead, { children: "Campaign Launch" }),
            /* @__PURE__ */ jsx(P, { children: "We launched a Search campaign on September 1, 2023, followed by a Performance Max campaign on September 11, 2023." }),
            /* @__PURE__ */ jsx(SubHead, { children: "Budget Management" }),
            /* @__PURE__ */ jsx(P, { children: "The monthly budget started at $2500, was reduced to $500 by the end of November based on client requirements, was increased back to $2500 in March, and then increased to $5000 per month from April onward." }),
            /* @__PURE__ */ jsx(SubHead, { children: "All-Time Performance" }),
            /* @__PURE__ */ jsx(
              BulletList,
              {
                items: [
                  "Cost: $29,698.34",
                  "Clicks: 8,102",
                  "Conversions: 553",
                  "CPA: $53.70",
                  "Conversion rate: 6.83%",
                  "Submit Lead Form: 159",
                  "Call Leads: 394"
                ]
              }
            ),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Results" }),
            /* @__PURE__ */ jsx(SubHead, { children: "Last 30 Days" }),
            /* @__PURE__ */ jsx(
              BulletList,
              {
                items: [
                  "Cost: $4,993.52",
                  "Clicks: 579",
                  "Conversions: 111",
                  "CPA: $44.99",
                  "Conversion rate: 7.19%",
                  "Submit Lead Form: 38",
                  "Call Leads: 73"
                ]
              }
            ),
            /* @__PURE__ */ jsx(SubHead, { children: "Last 30 Days — Performance Gains" }),
            /* @__PURE__ */ jsx(
              BulletList,
              {
                items: [
                  "Clicks increased by 7.8%",
                  "The number of conversions increased by 15.6%",
                  "The CPA decreased by 9.0%"
                ]
              }
            ),
            /* @__PURE__ */ jsx(SubHead, { children: "Last 90 Days" }),
            /* @__PURE__ */ jsx(
              BulletList,
              {
                items: [
                  "Cost: $14,714.01",
                  "Clicks: 1,854",
                  "Conversions: 299",
                  "CPA: $49.21",
                  "Conversion rate: 7.21%",
                  "Submit Lead Form: 82",
                  "Call Leads: 217"
                ]
              }
            ),
            /* @__PURE__ */ jsx(SubHead, { children: "Last 90 Days — Performance Gains" }),
            /* @__PURE__ */ jsx(
              BulletList,
              {
                items: [
                  "Clicks increased by 169.5%",
                  "The number of conversions increased by 211.5%",
                  "The conversion rates increased by 16.7%"
                ]
              }
            ),
            /* @__PURE__ */ jsx(DetailLabel, { children: "Conclusion" }),
            /* @__PURE__ */ jsx(P, { children: "This case study shows how Google Ads can generate both call leads and form leads for tree and lawn care businesses while improving efficiency as campaign data accumulates and optimization continues." }),
            /* @__PURE__ */ jsx(PdfBlock, { src: "/case-studies/ppc-tree-lawn-case-study.pdf" }),
            /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, className: "rounded-full px-10", children: /* @__PURE__ */ jsx("a", { href: freeAuditUrl, target: "_blank", rel: "noopener noreferrer", children: "Request a Website & SEO Audit" }) }) })
          ] })
        ] }) }) }) })
      ] }),
      /* @__PURE__ */ jsx(
        FAQSection,
        {
          title: "Frequently Asked Questions",
          subtitle: "Answers to common questions about how GrowSmallBiz approaches Local SEO and Google PPC strategy for tree care, lawn care, and landscaping businesses.",
          faqs: [
            { question: "Can GrowSmallBiz create a similar strategy for my tree care, lawn care, or landscaping business?", answer: "Yes. Every business starts from a different baseline, market, service area, level of competition, and budget, so no two campaigns are identical. But the same strategic thinking behind these case studies can be adapted to your business. GrowSmallBiz builds tailored Local SEO and paid ads strategies around your goals, your market, and the specific opportunities available in your service area.\n\nWe conduct a complimentary audit to determine what could be realistically possible, cost and ROI before we undertake any assignment." },
            { question: "Can Local SEO really help tree care, lawn care, and landscaping businesses get more calls?", answer: "Yes. Local SEO helps service businesses improve visibility in Google Business Profile results, local map results, and organic search when homeowners are actively searching for nearby providers. That visibility can translate into more calls, direction requests, website visits, and lead form submissions." },
            { question: "Can Google PPC help tree care and landscaping businesses generate leads faster?", answer: "Yes. Google PPC can generate leads faster because it places your business in front of high-intent searchers immediately. It is especially useful for seasonal demand, competitive markets, and service lines where you want quicker lead flow while SEO builds over time." },
            { question: "How long does it take to see results from Local SEO or Google PPC?", answer: "Google PPC can start producing data and leads much faster, although performance improves as campaigns gather enough data for optimization. Local SEO usually takes longer, but it builds stronger long-term visibility, map presence, and organic lead flow." },
            { question: "What is included in your Local SEO strategy?", answer: "Our Local SEO work can include Google Business Profile optimization, local and niche citations, onsite location signal improvements, internal linking, schema enhancements, content support, keyword tracking, and ongoing efforts to improve rankings, engagement, and lead generation." },
            { question: "How much do SEO and PPC services cost?", answer: "SEO and PPC pricing can vary widely, but the lowest-cost option is rarely the one that produces the best business outcome. The real investment depends on your market, competition, service area, goals, and how much strategy, execution, tracking, and optimization are required to generate profitable growth.\n\nSome providers sell isolated tactics or generic packages. GrowSmallBiz takes a more complete approach by looking at the full picture — visibility, lead quality, conversion path, tracking, and return on investment. That means pricing is based on what your business actually needs to compete and grow, not on a one-size-fits-all template.\n\nWe begin with a complimentary audit to determine what could be realistically possible, the likely cost, and the ROI potential before we recommend any assignment." },
            { question: "Do you offer a performance guarantee?", answer: "Yes. If GrowSmallBiz does not deliver the agreed-upon performance within the agreed-upon time frame, we will continue working for free until we do. No questions asked." },
            { question: "Can you review my current marketing performance?", answer: "Yes. We can review your current visibility, traffic quality, conversion path, local rankings, and paid campaign performance to identify where stronger SEO, PPC, website improvements, or automation can create better results." }
          ],
          contactCTA: createContactCTA({
            title: "Need Better Lead Flow from Search?",
            description: "If your tree care, lawn care, or landscaping business depends on calls, form fills, and high-intent search traffic, GrowSmallBiz can help identify where Local SEO or Google PPC improvements can drive better results.",
            tagline: "Get clarity on your visibility, traffic quality, and conversion performance."
          })
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8", children: [
          "What These ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary", children: "Case Studies" }),
          " Show"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-foreground/85 leading-relaxed text-lg", children: [
          /* @__PURE__ */ jsx("p", { children: "Across tree care, lawn care, and landscaping campaigns, one pattern remains consistent — businesses that invest in structured local visibility and high-intent search strategy tend to see measurable improvements in calls, engagement, and lead flow over time." }),
          /* @__PURE__ */ jsx("p", { children: "These case studies reflect different starting points, markets, and levels of competition, but the underlying approach remains consistent: improving how a business appears, competes, and converts in search environments where customers are actively looking for services." }),
          /* @__PURE__ */ jsx("p", { children: "Whether through Local SEO, Google PPC, or a combination of both, the goal is not just visibility — it is connecting that visibility to real business outcomes." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-muted-foreground text-sm leading-relaxed", children: "If you want to understand how these approaches could apply to your business, the next step is a focused review of your current visibility, competition, and conversion path." })
      ] }) }) }),
      /* @__PURE__ */ jsx(
        PersonCTA,
        {
          title: "Let's Build Your Growth Engine",
          description: "If you want clearer strategy, stronger visibility, and better follow-up without patching together disconnected tools, start with a free strategy call.",
          buttonText: "Schedule Strategy Call",
          buttonHref: strategySessionUrl
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "text-center py-8 text-sm text-muted-foreground space-y-1 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
        /* @__PURE__ */ jsx("p", { children: "GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide" }),
        /* @__PURE__ */ jsx("p", { children: "The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI." })
      ] }),
      /* @__PURE__ */ jsx(ConsultationFormSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  TreeLawnLandscaping as default
};
