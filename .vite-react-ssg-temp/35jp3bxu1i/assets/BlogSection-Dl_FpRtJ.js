import { j as jsxDEV } from "../main.mjs";
import { Link } from "react-router-dom";
import { User, Calendar, Clock, ArrowRight } from "lucide-react";
import { B as Button } from "./button-Co-CyCVS.js";
const BlogSection = ({
  posts,
  title = "Latest Insights",
  subtitle = "Expert tips and strategies to grow your business",
  showViewAll = true,
  viewAllLink = "#"
}) => {
  return /* @__PURE__ */ jsxDEV("section", { className: "py-24 relative", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 section-glow" }, void 0, false, {
      fileName: "/dev-server/src/components/sections/BlogSection.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4 bg-gradient-heading bg-clip-text text-transparent", children: title }, void 0, false, {
          fileName: "/dev-server/src/components/sections/BlogSection.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: subtitle }, void 0, false, {
          fileName: "/dev-server/src/components/sections/BlogSection.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/BlogSection.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: posts.map((post, index) => /* @__PURE__ */ jsxDEV(
        "article",
        {
          className: "bg-card border border-border rounded-2xl overflow-hidden card-hover group",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "relative h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 overflow-hidden", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("span", { className: "text-2xl font-display font-bold text-primary", children: post.category.charAt(0) }, void 0, false, {
                fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                lineNumber: 54,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                lineNumber: 53,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                lineNumber: 52,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsxDEV("span", { className: "px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full", children: post.category }, void 0, false, {
                fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                lineNumber: 60,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                lineNumber: 59,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/BlogSection.tsx",
              lineNumber: 51,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-6 space-y-4", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2", children: post.title }, void 0, false, {
                fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                lineNumber: 68,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm line-clamp-3", children: post.excerpt }, void 0, false, {
                fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                lineNumber: 71,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 text-xs text-muted-foreground pt-2", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxDEV(User, { className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                    lineNumber: 78,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { children: post.author }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                    lineNumber: 79,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                  lineNumber: 77,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxDEV(Calendar, { className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                    lineNumber: 82,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { children: post.date }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                    lineNumber: 83,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                  lineNumber: 81,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxDEV(Clock, { className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                    lineNumber: 86,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { children: post.readTime }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                    lineNumber: 87,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                  lineNumber: 85,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                lineNumber: 76,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "pt-2", children: /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all", children: [
                "Read More",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" }, void 0, false, {
                  fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                  lineNumber: 95,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                lineNumber: 93,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/components/sections/BlogSection.tsx",
                lineNumber: 92,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/BlogSection.tsx",
              lineNumber: 67,
              columnNumber: 15
            }, void 0)
          ]
        },
        index,
        true,
        {
          fileName: "/dev-server/src/components/sections/BlogSection.tsx",
          lineNumber: 46,
          columnNumber: 13
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/BlogSection.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, void 0),
      showViewAll && /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxDEV(Button, { variant: "outline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV(Link, { to: viewAllLink, children: [
        "View All Articles",
        /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
          fileName: "/dev-server/src/components/sections/BlogSection.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/BlogSection.tsx",
        lineNumber: 106,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/BlogSection.tsx",
        lineNumber: 105,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/BlogSection.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/BlogSection.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/BlogSection.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, void 0);
};
const generalBlogPosts = [
  {
    title: "The Complete Guide to AI SEO in 2025",
    excerpt: "Learn how AI is transforming search engine optimization and what your business needs to do to stay ahead of the competition.",
    category: "AI SEO",
    author: "Sarah Mitchell",
    date: "Dec 28, 2025",
    readTime: "8 min read"
  },
  {
    title: "Local SEO Strategies That Actually Work",
    excerpt: "Discover proven local SEO tactics that help small businesses dominate their market and attract more customers.",
    category: "Local SEO",
    author: "Michael Chen",
    date: "Dec 22, 2025",
    readTime: "6 min read"
  },
  {
    title: "How to Optimize Your Website for Voice Search",
    excerpt: "Voice search is growing rapidly. Here's how to ensure your business gets found when customers ask their smart devices for help.",
    category: "Voice Search",
    author: "Emily Rodriguez",
    date: "Dec 18, 2025",
    readTime: "5 min read"
  }
];
const hvacBlogPosts = [
  {
    title: "HVAC SEO: How to Rank #1 for Emergency AC Repair",
    excerpt: "Learn the strategies top HVAC companies use to capture emergency service calls and dominate local search results.",
    category: "HVAC SEO",
    author: "Subrata Guha",
    date: "Dec 28, 2025",
    readTime: "7 min read"
  },
  {
    title: "Google Business Profile Optimization for HVAC Companies",
    excerpt: "Your Google Business Profile is your digital storefront. Here's how to optimize it for maximum visibility and leads.",
    category: "Local SEO",
    author: "Subrata Guha",
    date: "Dec 22, 2025",
    readTime: "6 min read"
  },
  {
    title: "How to Get More 5-Star Reviews for Your HVAC Business",
    excerpt: "Reviews are crucial for local rankings. Discover ethical strategies to generate more positive reviews from happy customers.",
    category: "Reputation",
    author: "Subrata Guha",
    date: "Dec 18, 2025",
    readTime: "5 min read"
  }
];
export {
  BlogSection as B,
  generalBlogPosts as g,
  hvacBlogPosts as h
};
