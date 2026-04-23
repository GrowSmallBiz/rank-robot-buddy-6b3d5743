import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { User, Calendar, Clock, ArrowRight } from "lucide-react";
import { B as Button } from "./Header-Dct2bBAe.js";
const BlogSection = ({
  posts,
  title = "Latest Insights",
  subtitle = "Expert tips and strategies to grow your business",
  showViewAll = true,
  viewAllLink = "#"
}) => {
  return /* @__PURE__ */ jsxs("section", { className: "py-24 relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 section-glow" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: subtitle })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: posts.map((post, index) => /* @__PURE__ */ jsxs(
        "article",
        {
          className: "bg-card border border-border rounded-2xl overflow-hidden card-hover group",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 overflow-hidden", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-display font-bold text-primary", children: post.category.charAt(0) }) }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full", children: post.category }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2", children: post.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm line-clamp-3", children: post.excerpt }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground pt-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(User, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsx("span", { children: post.author })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsx("span", { children: post.date })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsx("span", { children: post.readTime })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all", children: [
                "Read More",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" })
              ] }) })
            ] })
          ]
        },
        index
      )) }),
      showViewAll && /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: viewAllLink, children: [
        "View All Articles",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
      ] }) }) })
    ] })
  ] });
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
