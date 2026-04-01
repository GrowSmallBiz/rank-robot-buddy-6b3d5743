import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Star } from "lucide-react";
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
export {
  TestimonialsSection
};
