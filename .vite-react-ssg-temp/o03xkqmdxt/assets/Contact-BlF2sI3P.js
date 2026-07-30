import { j as jsxDEV } from "../main.mjs";
import { useState, useRef, useEffect } from "react";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { Head } from "vite-react-ssg";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { B as Button } from "./button-Co-CyCVS.js";
import { MessageSquare, Mail, Phone, MapPin, Bot, ArrowRight } from "lucide-react";
import { P as PageJsonLd } from "./PageJsonLd-D6BEuSgJ.js";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "react-router-dom";
import "./growsmallbiz-logo-bLUzBkSC.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
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
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Contact Us | GrowSmallBiz Digital Marketing" }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "GrowSmallBiz helps local businesses grow with AI-powered marketing. Get a free consultation and boost your SEO. Schedule strategy call!" }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "digital marketing, SEO strategies, local service businesses, AI-powered marketing, free consultation, contact GrowSmallBiz, marketing assessment, business growth services" }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://growsmallbiz.io/contact/" }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Contact.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      PageJsonLd,
      {
        pageType: "ContactPage",
        name: "Contact GrowSmallBiz Digital Marketing",
        description: "Get in touch for a free marketing assessment.",
        url: "/contact/",
        breadcrumbs: [{ name: "Contact", url: "/contact/" }]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 45,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Contact.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "relative pt-32 pb-16 overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 hero-glow" }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center space-y-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "animate-fade-up", children: /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium", children: [
            /* @__PURE__ */ jsxDEV(MessageSquare, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 62,
              columnNumber: 17
            }, void 0),
            "Get In Touch"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 61,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100 bg-gradient-heading bg-clip-text text-transparent", children: "Contact GrowSmallBiz for Your Free AI-Powered Local SEO Consultation" }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up delay-200", children: "Ready to dominate local search? Get in touch for a free consultation and learn how we can help your business grow." }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 58,
          columnNumber: 9
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 55,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16", style: { backgroundColor: "#2d465c" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-3", ref: formRef, children: /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "relative rounded-2xl p-8 animate-fade-up shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]",
            style: { backgroundColor: "#191321", border: "2px solid #17a2b8" },
            children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-display font-bold text-white mb-6 bg-gradient-heading bg-clip-text text-transparent", children: "Contact GrowSmallBiz for a Digital Growth Strategy Session" }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 89,
                columnNumber: 17
              }, void 0),
              showIframe ? /* @__PURE__ */ jsxDEV(
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
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 94,
                  columnNumber: 19
                },
                void 0
              ) : /* @__PURE__ */ jsxDEV("div", { style: { width: "100%", height: "1100px" }, className: "flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-white/50", children: "Loading form..." }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 114,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 113,
                columnNumber: 19
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 85,
            columnNumber: 15
          },
          void 0
        ) }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-2 space-y-6", children: [
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "rounded-2xl p-6 animate-fade-up shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]",
              style: { animationDelay: "0.1s", backgroundColor: "#191321", border: "2px solid #17a2b8" },
              children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-semibold text-white mb-4", children: "Contact Information" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 126,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV(Mail, { className: "w-5 h-5 text-primary" }, void 0, false, {
                      fileName: "/dev-server/src/pages/Contact.tsx",
                      lineNumber: 132,
                      columnNumber: 23
                    }, void 0) }, void 0, false, {
                      fileName: "/dev-server/src/pages/Contact.tsx",
                      lineNumber: 131,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-white/60", children: "Email" }, void 0, false, {
                        fileName: "/dev-server/src/pages/Contact.tsx",
                        lineNumber: 135,
                        columnNumber: 23
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("a", { href: "mailto:contact@growsmallbiz.io", className: "text-white hover:text-primary transition-colors", children: "contact@growsmallbiz.io" }, void 0, false, {
                        fileName: "/dev-server/src/pages/Contact.tsx",
                        lineNumber: 136,
                        columnNumber: 23
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/pages/Contact.tsx",
                      lineNumber: 134,
                      columnNumber: 21
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/Contact.tsx",
                    lineNumber: 130,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5 text-primary" }, void 0, false, {
                      fileName: "/dev-server/src/pages/Contact.tsx",
                      lineNumber: 144,
                      columnNumber: 23
                    }, void 0) }, void 0, false, {
                      fileName: "/dev-server/src/pages/Contact.tsx",
                      lineNumber: 143,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-white/60", children: "Phone" }, void 0, false, {
                        fileName: "/dev-server/src/pages/Contact.tsx",
                        lineNumber: 147,
                        columnNumber: 23
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("a", { href: "tel:+19258863724", className: "text-white hover:text-primary transition-colors", children: "+1 (925) 886-3724" }, void 0, false, {
                        fileName: "/dev-server/src/pages/Contact.tsx",
                        lineNumber: 148,
                        columnNumber: 23
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/pages/Contact.tsx",
                      lineNumber: 146,
                      columnNumber: 21
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/Contact.tsx",
                    lineNumber: 142,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV(MapPin, { className: "w-5 h-5 text-primary" }, void 0, false, {
                      fileName: "/dev-server/src/pages/Contact.tsx",
                      lineNumber: 156,
                      columnNumber: 23
                    }, void 0) }, void 0, false, {
                      fileName: "/dev-server/src/pages/Contact.tsx",
                      lineNumber: 155,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-white/60", children: "Office" }, void 0, false, {
                        fileName: "/dev-server/src/pages/Contact.tsx",
                        lineNumber: 159,
                        columnNumber: 23
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-white", children: [
                        "52 Antelope CT.",
                        /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                          fileName: "/dev-server/src/pages/Contact.tsx",
                          lineNumber: 161,
                          columnNumber: 40
                        }, void 0),
                        "Danville, CA-94506",
                        /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                          fileName: "/dev-server/src/pages/Contact.tsx",
                          lineNumber: 162,
                          columnNumber: 43
                        }, void 0),
                        /* @__PURE__ */ jsxDEV("span", { className: "text-white/60 text-sm", children: "(By Appointment Only)" }, void 0, false, {
                          fileName: "/dev-server/src/pages/Contact.tsx",
                          lineNumber: 163,
                          columnNumber: 25
                        }, void 0)
                      ] }, void 0, true, {
                        fileName: "/dev-server/src/pages/Contact.tsx",
                        lineNumber: 160,
                        columnNumber: 23
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/pages/Contact.tsx",
                      lineNumber: 158,
                      columnNumber: 21
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/Contact.tsx",
                    lineNumber: 154,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 129,
                  columnNumber: 17
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 122,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "rounded-2xl p-6 animate-fade-up shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]",
              style: { animationDelay: "0.2s", backgroundColor: "#191321", border: "2px solid #17a2b8" },
              children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-semibold text-white mb-2", children: "Quick Response Guarantee" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 175,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-white/70 mb-4", children: "Our AI Assistant will respond to your inquiry within 3–5 minutes." }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 178,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-primary text-sm font-medium", children: [
                  /* @__PURE__ */ jsxDEV(Bot, { className: "w-4 h-4" }, void 0, false, {
                    fileName: "/dev-server/src/pages/Contact.tsx",
                    lineNumber: 182,
                    columnNumber: 19
                  }, void 0),
                  "AI-powered instant response"
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 181,
                  columnNumber: 17
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 171,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "rounded-2xl p-6 animate-fade-up shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]",
              style: { animationDelay: "0.3s", backgroundColor: "#191321", border: "2px solid #17a2b8" },
              children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-semibold text-white mb-2", children: "Prefer a Free Assessment?" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 192,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-white/70 mb-4", children: "Get a comprehensive SEO audit and growth strategy for your business at no cost." }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 195,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV(Button, { className: "w-full group rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: buildUrl("https://lp.growsmallbiz.io/digital-growth-strategy-session", "seo-audit-offer"), target: "_blank", rel: "noopener noreferrer", children: [
                  "Get Free Assessment",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" }, void 0, false, {
                    fileName: "/dev-server/src/pages/Contact.tsx",
                    lineNumber: 202,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 200,
                  columnNumber: 19
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 199,
                  columnNumber: 17
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 188,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 80,
        columnNumber: 7
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Contact.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Contact.tsx",
      lineNumber: 211,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Contact.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, void 0);
};
export {
  Contact as default
};
