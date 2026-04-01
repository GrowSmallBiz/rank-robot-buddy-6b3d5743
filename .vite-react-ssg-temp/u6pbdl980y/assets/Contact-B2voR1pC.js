import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { u as useUtm, P as PageJsonLd, H as Header, B as Button, F as Footer } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { MessageSquare, Mail, Phone, MapPin, Bot, ArrowRight } from "lucide-react";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "react-router-dom";
import "@radix-ui/react-slot";
const Contact = () => {
  const { buildUrl } = useUtm();
  const [showIframe, setShowIframe] = useState(false);
  const formRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowIframe(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Contact Us | GrowSmallBiz Digital Marketing" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Get in touch with GrowSmallBiz for a free consultation. Let us help your local service business grow with AI-powered marketing and SEO strategies." })
    ] }),
    /* @__PURE__ */ jsx(
      PageJsonLd,
      {
        pageType: "ContactPage",
        name: "Contact GrowSmallBiz Digital Marketing",
        description: "Get in touch for a free marketing assessment.",
        url: "/contact/",
        breadcrumbs: [{ name: "Contact", url: "/contact/" }]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-16 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 hero-glow" }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "animate-fade-up", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium", children: [
            /* @__PURE__ */ jsx(MessageSquare, { className: "w-4 h-4" }),
            "Get In Touch"
          ] }) }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100", children: [
            "Let's ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Grow Together" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up delay-200", children: "Ready to dominate local search? Get in touch for a free consultation and learn how we can help your business grow." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-16", style: { backgroundColor: "#2d465c" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", ref: formRef, children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative rounded-2xl p-8 animate-fade-up shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]",
            style: { backgroundColor: "#191321", border: "2px solid #17a2b8" },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-display font-bold text-white mb-6", children: "Send Us a Message" }),
              showIframe ? /* @__PURE__ */ jsx(
                "iframe",
                {
                  src: "https://api.leadconnectorhq.com/widget/form/8qUn6xE0v2Jwcs63q0uV",
                  style: { width: "100%", height: "1100px", border: "none", borderRadius: "0px" },
                  id: "contact-inline-8qUn6xE0v2Jwcs63q0uV",
                  "data-layout": "{'id':'INLINE'}",
                  "data-trigger-type": "alwaysShow",
                  "data-trigger-value": "",
                  "data-activation-type": "alwaysActivated",
                  "data-activation-value": "",
                  "data-deactivation-type": "neverDeactivate",
                  "data-deactivation-value": "",
                  "data-form-name": "GrowSmallBiz Website Contact",
                  "data-height": "1126",
                  "data-layout-iframe-id": "contact-inline-8qUn6xE0v2Jwcs63q0uV",
                  "data-form-id": "8qUn6xE0v2Jwcs63q0uV",
                  title: "GrowSmallBiz Website Contact",
                  loading: "lazy"
                }
              ) : /* @__PURE__ */ jsx("div", { style: { width: "100%", height: "1100px" }, className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("p", { className: "text-white/50", children: "Loading form..." }) })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "rounded-2xl p-6 animate-fade-up shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]",
              style: { animationDelay: "0.1s", backgroundColor: "#191321", border: "2px solid #17a2b8" },
              children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-semibold text-white mb-4", children: "Contact Information" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-primary" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-white/60", children: "Email" }),
                      /* @__PURE__ */ jsx("a", { href: "mailto:contact@growsmallbiz.io", className: "text-white hover:text-primary transition-colors", children: "contact@growsmallbiz.io" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 text-primary" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-white/60", children: "Phone" }),
                      /* @__PURE__ */ jsx("a", { href: "tel:+19258863724", className: "text-white hover:text-primary transition-colors", children: "+1 (925) 886-3724" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-primary" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-white/60", children: "Office" }),
                      /* @__PURE__ */ jsxs("p", { className: "text-white", children: [
                        "52 Antelope CT.",
                        /* @__PURE__ */ jsx("br", {}),
                        "Danville, CA-94506",
                        /* @__PURE__ */ jsx("br", {}),
                        /* @__PURE__ */ jsx("span", { className: "text-white/60 text-sm", children: "(By Appointment Only)" })
                      ] })
                    ] })
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "rounded-2xl p-6 animate-fade-up shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]",
              style: { animationDelay: "0.2s", backgroundColor: "#191321", border: "2px solid #17a2b8" },
              children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-semibold text-white mb-2", children: "Quick Response Guarantee" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-white/70 mb-4", children: "Our AI Assistant will respond to your inquiry within 3–5 minutes." }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary text-sm font-medium", children: [
                  /* @__PURE__ */ jsx(Bot, { className: "w-4 h-4" }),
                  "AI-powered instant response"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "rounded-2xl p-6 animate-fade-up shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]",
              style: { animationDelay: "0.3s", backgroundColor: "#191321", border: "2px solid #17a2b8" },
              children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-semibold text-white mb-2", children: "Prefer a Free Assessment?" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-white/70 mb-4", children: "Get a comprehensive SEO audit and growth strategy for your business at no cost." }),
                /* @__PURE__ */ jsx(Button, { className: "w-full group rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: buildUrl("https://lp.growsmallbiz.io/digital-growth-strategy-session", "seo-audit-offer"), target: "_blank", rel: "noopener noreferrer", children: [
                  "Get Free Assessment",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" })
                ] }) })
              ]
            }
          )
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Contact as default
};
