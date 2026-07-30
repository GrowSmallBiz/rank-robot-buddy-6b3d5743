import { j as jsxDEV, F as Fragment } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { B as Button } from "./button-Co-CyCVS.js";
import { CheckCircle2, ArrowRight, Zap, Globe, Database, Smartphone, Mail, Calendar, Clock, Sparkles, PhoneCall, Bot, Phone, Star, PhoneMissed, Heart, Users, MessageSquare, TrendingUp, ArrowDown, CreditCard, XCircle, ShieldCheck, Target } from "lucide-react";
import { C as CardCTA } from "./CardCTA-_OitSbFr.js";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-TqW6W-yi.js";
import { g as growsmallbizLogo } from "./growsmallbiz-logo-bLUzBkSC.js";
import { a as chamberDanville, b as chamberSanRamon, c as chamberWalnutCreek, d as chamberConcord } from "./chamber-concord-NuRKgzfU.js";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-accordion";
const STEPS = [
  {
    icon: Globe,
    label: "Step 1",
    title: "Website Form Submitted",
    body: "Visitor fills out the form on your site."
  },
  {
    icon: Database,
    label: "Step 2",
    title: "Contact Created in CRM",
    body: "The lead is added, tagged, and routed automatically.",
    chips: ["Tagged", "Routed"]
  },
  {
    icon: Smartphone,
    label: "Step 3",
    title: "Owner Alert on Your Phone",
    body: "You get an instant notification so you never miss a hot lead.",
    chips: ["Push", "SMS"]
  },
  {
    icon: Mail,
    label: "Step 4",
    title: "Email + SMS Sent to Visitor",
    body: "An instant reply with your calendar link lands in their inbox and on their phone.",
    chips: ["Email", "SMS", "Calendar Link"]
  },
  {
    icon: Calendar,
    label: "Step 5",
    title: "Visitor Books the Consultation",
    body: "They pick a time on your calendar — the appointment is confirmed automatically.",
    chips: ["Booked", "Confirmed"]
  },
  {
    icon: Clock,
    label: "Step 6",
    title: "Appointment Reminders Sent Automatically",
    body: "Email & SMS reminders go out 24 hours, 1 hour, and 15 minutes before — so they actually show up.",
    chips: ["24 hr before", "1 hr before", "15 min before"]
  }
];
const SpeedToLeadFlow = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const containerRef = useRef(null);
  const inViewRef = useRef(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setInterval(() => {
      if (!inViewRef.current) return;
      setActive((a) => (a + 1) % STEPS.length);
    }, 2200);
    return () => clearInterval(id);
  }, [reduced, paused]);
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref: containerRef,
      className: "relative rounded-3xl border border-border bg-card p-5 md:p-8 overflow-hidden",
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "md:hidden space-y-3", children: STEPS.map((step, i) => {
          const isActive = i === active;
          const isDone = i < active;
          const Icon = step.icon;
          return /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: `rounded-2xl border p-4 transition-all duration-500 ${isActive ? "border-primary bg-primary/5 shadow-[0_0_30px_-5px_hsl(22_85%_55%/0.55)] scale-[1.01]" : "border-border bg-background/60"}`,
              children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: `w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${isActive ? "bg-primary/20 border border-primary/50 animate-pulse" : isDone ? "bg-primary/10 border border-primary/30" : "bg-muted border border-border"}`,
                    children: isDone ? /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-primary" }, void 0, false, {
                      fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                      lineNumber: 137,
                      columnNumber: 21
                    }, void 0) : /* @__PURE__ */ jsxDEV(Icon, { className: `w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground"}` }, void 0, false, {
                      fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                      lineNumber: 139,
                      columnNumber: 21
                    }, void 0)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                    lineNumber: 127,
                    columnNumber: 17
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] font-bold uppercase tracking-widest text-primary mb-0.5", children: step.label }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                    lineNumber: 143,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("h3", { className: "font-display font-bold text-foreground text-base mb-1", children: step.title }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                    lineNumber: 146,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground leading-relaxed", children: step.body }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                    lineNumber: 147,
                    columnNumber: 19
                  }, void 0),
                  step.chips && isActive && /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-1.5 mt-2", children: step.chips.map((c, ci) => /* @__PURE__ */ jsxDEV(
                    "span",
                    {
                      className: "text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/15 border border-primary/40 text-primary animate-fade-in",
                      style: { animationDelay: `${ci * 100}ms` },
                      children: c
                    },
                    c,
                    false,
                    {
                      fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                      lineNumber: 151,
                      columnNumber: 25
                    },
                    void 0
                  )) }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                    lineNumber: 149,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                  lineNumber: 142,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                lineNumber: 126,
                columnNumber: 15
              }, void 0)
            },
            step.title,
            false,
            {
              fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
              lineNumber: 118,
              columnNumber: 13
            },
            void 0
          );
        }) }, void 0, false, {
          fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
          lineNumber: 112,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "hidden md:block", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-6 gap-3 relative", children: STEPS.map((step, i) => {
            const isActive = i === active;
            const isDone = i < active;
            const Icon = step.icon;
            return /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
              /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: `h-full rounded-2xl border-2 p-4 text-center transition-all duration-500 ${isActive ? "border-primary bg-primary/5 shadow-[0_15px_40px_-10px_hsl(22_85%_55%/0.6)] -translate-y-1" : isDone ? "border-primary/30 bg-background/70" : "border-border bg-background/40 opacity-70"}`,
                  children: [
                    /* @__PURE__ */ jsxDEV(
                      "div",
                      {
                        className: `mx-auto w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all ${isActive ? "bg-primary/20 border border-primary/50 animate-pulse" : isDone ? "bg-primary/10 border border-primary/30" : "bg-muted border border-border"}`,
                        children: isDone ? /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-6 h-6 text-primary" }, void 0, false, {
                          fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                          lineNumber: 196,
                          columnNumber: 23
                        }, void 0) : /* @__PURE__ */ jsxDEV(Icon, { className: `w-6 h-6 ${isActive ? "text-primary" : "text-muted-foreground"}` }, void 0, false, {
                          fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                          lineNumber: 198,
                          columnNumber: 23
                        }, void 0)
                      },
                      void 0,
                      false,
                      {
                        fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                        lineNumber: 186,
                        columnNumber: 19
                      },
                      void 0
                    ),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] font-bold uppercase tracking-widest text-primary mb-1", children: step.label }, void 0, false, {
                      fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                      lineNumber: 201,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("h3", { className: "font-display font-bold text-foreground text-sm mb-1.5 leading-snug", children: step.title }, void 0, false, {
                      fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                      lineNumber: 204,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground leading-relaxed", children: step.body }, void 0, false, {
                      fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                      lineNumber: 207,
                      columnNumber: 19
                    }, void 0),
                    step.chips && /* @__PURE__ */ jsxDEV(
                      "div",
                      {
                        className: `flex flex-wrap justify-center gap-1 mt-2 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`,
                        children: step.chips.map((c, ci) => /* @__PURE__ */ jsxDEV(
                          "span",
                          {
                            className: "text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-primary/15 border border-primary/40 text-primary",
                            style: {
                              animation: isActive ? `fade-in 0.4s ease-out ${ci * 120}ms both` : void 0
                            },
                            children: c
                          },
                          c,
                          false,
                          {
                            fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                            lineNumber: 215,
                            columnNumber: 25
                          },
                          void 0
                        ))
                      },
                      void 0,
                      false,
                      {
                        fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                        lineNumber: 209,
                        columnNumber: 21
                      },
                      void 0
                    )
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                  lineNumber: 177,
                  columnNumber: 17
                },
                void 0
              ),
              i < STEPS.length - 1 && /* @__PURE__ */ jsxDEV("div", { className: "absolute top-1/2 -right-2 -translate-y-1/2 z-10", children: /* @__PURE__ */ jsxDEV(
                ArrowRight,
                {
                  className: `w-4 h-4 transition-colors ${i < active ? "text-primary" : "text-muted-foreground/40"}`
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                  lineNumber: 230,
                  columnNumber: 21
                },
                void 0
              ) }, void 0, false, {
                fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
                lineNumber: 229,
                columnNumber: 19
              }, void 0)
            ] }, step.title, true, {
              fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
              lineNumber: 176,
              columnNumber: 15
            }, void 0);
          }) }, void 0, false, {
            fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
            lineNumber: 170,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 h-1 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-500",
              style: { width: `${(active + 1) / STEPS.length * 100}%` }
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
              lineNumber: 244,
              columnNumber: 11
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
            lineNumber: 243,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
          lineNumber: 169,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxDEV("p", { className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border-2 border-primary/40 text-foreground font-semibold text-sm", children: [
          /* @__PURE__ */ jsxDEV(Zap, { className: "w-4 h-4 text-primary" }, void 0, false, {
            fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
            lineNumber: 253,
            columnNumber: 11
          }, void 0),
          "No copying. No chasing. No forgetting."
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
          lineNumber: 252,
          columnNumber: 9
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
          lineNumber: 251,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/sections/SpeedToLeadFlow.tsx",
      lineNumber: 104,
      columnNumber: 5
    },
    void 0
  );
};
const therapistImage = "/assets/therapist-in-session-DfqZ9Apc.webp";
const CHAT_SCRIPT = [
  { from: "user", text: "Do you offer prenatal massage?" },
  { from: "ai", text: "Yes! 60 and 90-minute prenatal sessions available. Want me to book one?" },
  { from: "user", text: "Saturday afternoon if possible" },
  { from: "ai", text: "Booking link sent. 2pm Saturday is open — tap to confirm." }
];
const TYPING_MS = 850;
const READ_MS = 1500;
const HOLD_MS = 3500;
const initialPanel = { visible: 0, typing: null, done: false };
const AiBusyMomDemo = () => {
  const [chat, setChat] = useState(initialPanel);
  const [reduced, setReduced] = useState(false);
  const containerRef = useRef(null);
  const inViewRef = useRef(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = (e) => setReduced(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (reduced) {
      setChat({ visible: CHAT_SCRIPT.length, typing: null, done: true });
      return;
    }
    let cancelled = false;
    const timeouts = [];
    const wait = (ms) => new Promise((resolve) => {
      const id = window.setTimeout(resolve, ms);
      timeouts.push(id);
    });
    const waitForView = async () => {
      while (!inViewRef.current && !cancelled) await wait(300);
    };
    const playPanel = async (script, setter, offsetMs) => {
      for (let i = 0; i < script.length; i++) {
        if (cancelled) return;
        setter((p) => ({ ...p, typing: script[i].from }));
        await wait(TYPING_MS);
        if (cancelled) return;
        setter({ visible: i + 1, typing: null, done: false });
        await wait(READ_MS);
      }
      if (cancelled) return;
      setter((p) => ({ ...p, done: true }));
    };
    const run = async () => {
      while (!cancelled) {
        setChat(initialPanel);
        await waitForView();
        await wait(400);
        await playPanel(CHAT_SCRIPT, setChat);
        if (cancelled) return;
        await wait(HOLD_MS);
      }
    };
    run();
    return () => {
      cancelled = true;
      timeouts.forEach((id) => clearTimeout(id));
    };
  }, [reduced]);
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        ref: containerRef,
        className: "grid lg:grid-cols-[1fr_1.1fr_1fr] gap-5 md:gap-6 items-stretch",
        children: [
          /* @__PURE__ */ jsxDEV(VoiceCallPanel, {}, void 0, false, {
            fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
            lineNumber: 113,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV(TherapistCard, {}, void 0, false, {
            fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
            lineNumber: 114,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV(ChatPanel, { state: chat }, void 0, false, {
            fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
            lineNumber: 115,
            columnNumber: 9
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
        lineNumber: 109,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("h3", { className: "mt-10 text-center text-xl md:text-2xl font-display font-semibold text-foreground max-w-2xl mx-auto flex items-center justify-center gap-2.5", children: [
      /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-5 h-5 text-primary shrink-0" }, void 0, false, {
        fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, void 0),
      "Your hands never left your client. Your calendar filled itself."
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
    lineNumber: 108,
    columnNumber: 5
  }, void 0);
};
const CALLERS = [
  { name: "Sarah", initial: "S", gender: "female" },
  { name: "Mike", initial: "M", gender: "male" },
  { name: "Jen", initial: "J", gender: "female" }
];
const VoiceCallPanel = () => {
  const [activeIdx, setActiveIdx] = useState(null);
  const [connectedMask, setConnectedMask] = useState(0);
  const [reduced, setReduced] = useState(false);
  const containerRef = useRef(null);
  const inViewRef = useRef(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = (e) => setReduced(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (reduced) {
      setConnectedMask(7);
      setActiveIdx(null);
      return;
    }
    let cancelled = false;
    const timeouts = [];
    const wait = (ms) => new Promise((resolve) => {
      const id = window.setTimeout(resolve, ms);
      timeouts.push(id);
    });
    const waitForView = async () => {
      while (!inViewRef.current && !cancelled) await wait(300);
    };
    const run = async () => {
      while (!cancelled) {
        setActiveIdx(null);
        setConnectedMask(0);
        await waitForView();
        await wait(500);
        for (let i = 0; i < CALLERS.length; i++) {
          if (cancelled) return;
          setActiveIdx(i);
          await wait(1600);
          if (cancelled) return;
          setConnectedMask((m) => m | 1 << i);
          await wait(500);
        }
        setActiveIdx(null);
        if (cancelled) return;
        await wait(3200);
      }
    };
    run();
    return () => {
      cancelled = true;
      timeouts.forEach((id) => clearTimeout(id));
    };
  }, [reduced]);
  const allConnected = connectedMask === 7;
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref: containerRef,
      className: "rounded-3xl border border-border bg-card p-5 md:p-6 shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.25)] flex flex-col",
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 pb-4 border-b border-border mb-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(PhoneCall, { className: "w-5 h-5 text-primary" }, void 0, false, {
            fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
            lineNumber: 217,
            columnNumber: 11
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
            lineNumber: 216,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-foreground text-sm", children: "AI Voice Receptionist" }, void 0, false, {
              fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
              lineNumber: 220,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" }, void 0, false, {
                fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
                lineNumber: 222,
                columnNumber: 13
              }, void 0),
              allConnected ? "All calls connected" : "Answering calls..."
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
              lineNumber: 221,
              columnNumber: 11
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
            lineNumber: 219,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] uppercase tracking-wider font-semibold text-primary/80 bg-primary/10 px-2 py-1 rounded-md", children: "Phone" }, void 0, false, {
            fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
            lineNumber: 226,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
          lineNumber: 215,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center flex-1 min-h-[280px]", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "relative mb-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 rounded-2xl bg-primary/20 border-2 border-primary/40 flex items-center justify-center shadow-lg shadow-primary/20", children: /* @__PURE__ */ jsxDEV(Bot, { className: "w-8 h-8 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
              lineNumber: 235,
              columnNumber: 13
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
              lineNumber: 234,
              columnNumber: 11
            }, void 0),
            allConnected && /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 rounded-2xl border-2 border-primary/30 animate-[ping_1.5s_ease-out_infinite]" }, void 0, false, {
                fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
                lineNumber: 239,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute -inset-3 rounded-2xl border border-primary/20 animate-[ping_1.5s_ease-out_infinite_0.4s]" }, void 0, false, {
                fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
                lineNumber: 240,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
              lineNumber: 238,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
            lineNumber: 233,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "w-full space-y-2.5", children: CALLERS.map((caller, i) => {
            const isActive = activeIdx === i;
            const isConnected = (connectedMask & 1 << i) !== 0;
            return /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: `flex items-center gap-3 rounded-xl px-3 py-2 border transition-all duration-500 ${isConnected ? "border-primary/40 bg-primary/5" : isActive ? "border-border bg-muted/30" : "border-transparent bg-transparent"}`,
                children: [
                  /* @__PURE__ */ jsxDEV(
                    "div",
                    {
                      className: `w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors duration-500 ${caller.gender === "female" ? "bg-[hsl(350_75%_82%_/_0.18)] text-[hsl(350_75%_82%)] border border-[hsl(350_75%_82%_/_0.35)]" : "bg-[hsl(199_89%_48%_/_0.18)] text-[hsl(199_89%_48%)] border border-[hsl(199_89%_48%_/_0.35)]"}`,
                      children: caller.initial
                    },
                    void 0,
                    false,
                    {
                      fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
                      lineNumber: 263,
                      columnNumber: 17
                    },
                    void 0
                  ),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium text-foreground truncate flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxDEV(
                        Smartphone,
                        {
                          className: `w-3.5 h-3.5 shrink-0 ${caller.gender === "female" ? "text-[hsl(350_75%_72%)]" : "text-[hsl(199_89%_58%)]"}`
                        },
                        void 0,
                        false,
                        {
                          fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
                          lineNumber: 276,
                          columnNumber: 21
                        },
                        void 0
                      ),
                      caller.name
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
                      lineNumber: 275,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] text-muted-foreground", children: isConnected ? "Appointment booked" : isActive ? "Speaking with AI..." : "Waiting..." }, void 0, false, {
                      fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
                      lineNumber: 285,
                      columnNumber: 19
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
                    lineNumber: 274,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-end gap-[3px] h-5", children: [0, 1, 2, 3, 4].map((bar) => /* @__PURE__ */ jsxDEV(
                    "div",
                    {
                      className: `w-[3px] rounded-full ${isActive || isConnected ? "bg-primary/70 animate-bounce" : "bg-muted-foreground/20"}`,
                      style: {
                        height: bar % 2 === 0 ? "60%" : "40%",
                        animationDelay: `${bar * 120}ms`
                      }
                    },
                    bar,
                    false,
                    {
                      fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
                      lineNumber: 293,
                      columnNumber: 21
                    },
                    void 0
                  )) }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
                    lineNumber: 291,
                    columnNumber: 17
                  }, void 0),
                  isConnected && /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-primary shrink-0 animate-fade-in" }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
                    lineNumber: 310,
                    columnNumber: 19
                  }, void 0)
                ]
              },
              caller.name,
              true,
              {
                fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
                lineNumber: 252,
                columnNumber: 15
              },
              void 0
            );
          }) }, void 0, false, {
            fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
            lineNumber: 246,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-auto pt-3 border-t border-border w-full", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-semibold text-primary flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV(Phone, { className: "w-3.5 h-3.5" }, void 0, false, {
                fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
                lineNumber: 321,
                columnNumber: 15
              }, void 0),
              allConnected ? "3 calls answered simultaneously" : "Handling calls..."
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
              lineNumber: 320,
              columnNumber: 13
            }, void 0),
            allConnected && /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] text-muted-foreground", children: "2 booked • 0 missed" }, void 0, false, {
              fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
              lineNumber: 325,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
            lineNumber: 319,
            columnNumber: 11
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
            lineNumber: 318,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
          lineNumber: 232,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
      lineNumber: 211,
      columnNumber: 5
    },
    void 0
  );
};
const TherapistCard = () => /* @__PURE__ */ jsxDEV("div", { className: "relative rounded-3xl overflow-hidden border border-border bg-card shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.25)] min-h-[360px]", children: [
  /* @__PURE__ */ jsxDEV(
    "img",
    {
      src: therapistImage,
      alt: "Massage therapist with a client during a session",
      className: "absolute inset-0 w-full h-full object-cover",
      loading: "lazy",
      width: 1024,
      height: 1024
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
      lineNumber: 338,
      columnNumber: 5
    },
    void 0
  ),
  /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" }, void 0, false, {
    fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
    lineNumber: 346,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "absolute top-4 left-4 right-4 flex items-center justify-between gap-2", children: /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 px-3 py-1.5 text-xs font-semibold text-white", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "relative flex w-2 h-2", children: [
      /* @__PURE__ */ jsxDEV("span", { className: "absolute inset-0 rounded-full bg-red-400 animate-ping opacity-70" }, void 0, false, {
        fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
        lineNumber: 352,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("span", { className: "relative inline-flex w-2 h-2 rounded-full bg-red-500" }, void 0, false, {
        fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
        lineNumber: 353,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
      lineNumber: 351,
      columnNumber: 9
    }, void 0),
    "In session — Do not disturb"
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
    lineNumber: 350,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
    lineNumber: 349,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 left-0 right-0 p-5 md:p-6", children: [
    /* @__PURE__ */ jsxDEV("p", { className: "text-white font-display font-semibold text-lg md:text-xl leading-tight", children: "She’s with a client right now." }, void 0, false, {
      fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
      lineNumber: 360,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("p", { className: "text-white/80 text-sm mt-1.5", children: "Her phone is silenced. Her hands are full. Her business doesn’t miss a beat — because AI is answering on both sides." }, void 0, false, {
      fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
      lineNumber: 363,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
    lineNumber: 359,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
  lineNumber: 337,
  columnNumber: 3
}, void 0);
const ChatPanel = ({ state }) => {
  const scrollRef = useRef(null);
  useEffect(() => {
    const sc = scrollRef.current;
    if (sc) sc.scrollTo({ top: sc.scrollHeight, behavior: "smooth" });
  }, [state.visible, state.typing, state.done]);
  return /* @__PURE__ */ jsxDEV("div", { className: "rounded-3xl border border-border bg-card p-5 md:p-6 shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.25)] flex flex-col", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 pb-4 border-b border-border mb-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Bot, { className: "w-5 h-5 text-cyan-400" }, void 0, false, {
        fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
        lineNumber: 383,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
        lineNumber: 382,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-foreground text-sm", children: "Website Live Chat" }, void 0, false, {
          fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
          lineNumber: 386,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" }, void 0, false, {
            fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
            lineNumber: 388,
            columnNumber: 13
          }, void 0),
          " Online now"
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
          lineNumber: 387,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
        lineNumber: 385,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] uppercase tracking-wider font-semibold text-cyan-400/90 bg-cyan-500/10 px-2 py-1 rounded-md", children: "Website" }, void 0, false, {
        fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
        lineNumber: 391,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
      lineNumber: 381,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        ref: scrollRef,
        className: "space-y-3 text-sm min-h-[300px] md:min-h-[340px] max-h-[400px] overflow-hidden flex-1",
        children: [
          CHAT_SCRIPT.slice(0, state.visible).map((m, i) => /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: `flex ${m.from === "user" ? "justify-end" : "justify-start"} animate-fade-in`,
              children: /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: `max-w-[80%] rounded-2xl px-4 py-2.5 text-[13px] leading-snug ${m.from === "user" ? "rounded-tr-sm bg-primary text-primary-foreground" : "rounded-tl-sm bg-muted text-foreground"}`,
                  children: m.text
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
                  lineNumber: 405,
                  columnNumber: 13
                },
                void 0
              )
            },
            i,
            false,
            {
              fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
              lineNumber: 401,
              columnNumber: 11
            },
            void 0
          )),
          state.typing && /* @__PURE__ */ jsxDEV(TypingBubble, { side: state.typing === "user" ? "right" : "left", tone: "chat" }, void 0, false, {
            fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
            lineNumber: 418,
            columnNumber: 11
          }, void 0),
          state.done && /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center gap-2.5 pt-2 animate-fade-in", children: [
            /* @__PURE__ */ jsxDEV(Badge, { icon: CheckCircle2, text: "Lead captured" }, void 0, false, {
              fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
              lineNumber: 423,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV(Badge, { icon: Calendar, text: "Booking link sent" }, void 0, false, {
              fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
              lineNumber: 424,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
            lineNumber: 422,
            columnNumber: 11
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
        lineNumber: 396,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
    lineNumber: 380,
    columnNumber: 5
  }, void 0);
};
const TypingBubble = ({
  side,
  tone
}) => {
  const base = tone === "voice" ? side === "right" ? "rounded-tr-sm bg-muted/80 text-foreground border border-border" : "rounded-tl-sm bg-primary/15 text-foreground border border-primary/30" : side === "right" ? "rounded-tr-sm bg-primary/70 text-primary-foreground" : "rounded-tl-sm bg-muted text-foreground";
  return /* @__PURE__ */ jsxDEV("div", { className: `flex ${side === "right" ? "justify-end" : "justify-start"} animate-fade-in`, children: /* @__PURE__ */ jsxDEV("div", { className: `rounded-2xl px-4 py-3 ${base}`, "aria-label": "Typing", children: /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-end gap-1", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-[bounce_1s_infinite] [animation-delay:0ms]" }, void 0, false, {
      fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
      lineNumber: 454,
      columnNumber: 11
    }, void 0),
    /* @__PURE__ */ jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-[bounce_1s_infinite] [animation-delay:150ms]" }, void 0, false, {
      fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
      lineNumber: 455,
      columnNumber: 11
    }, void 0),
    /* @__PURE__ */ jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-[bounce_1s_infinite] [animation-delay:300ms]" }, void 0, false, {
      fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
      lineNumber: 456,
      columnNumber: 11
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
    lineNumber: 453,
    columnNumber: 9
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
    lineNumber: 452,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
    lineNumber: 451,
    columnNumber: 5
  }, void 0);
};
const Badge = ({
  icon: Icon,
  text
}) => /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full", children: [
  /* @__PURE__ */ jsxDEV(Icon, { className: "w-3.5 h-3.5" }, void 0, false, {
    fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
    lineNumber: 471,
    columnNumber: 5
  }, void 0),
  " ",
  text
] }, void 0, true, {
  fileName: "/dev-server/src/components/sections/AiBusyMomDemo.tsx",
  lineNumber: 470,
  columnNumber: 3
}, void 0);
const heroImage = "/assets/mothers-day-cohort-hero-CXukggs6.jpg";
const leakyBucket = "/assets/leaky-bucket-wz7LsAAV.webp";
const demoPreview = "/assets/demo-website-preview-Bl0Cj1uB.png";
const bizSalon = "/assets/biz-salon-XsCixJcE.jpg";
const bizMedspa = "/assets/biz-medspa-WEqD-dYq.jpg";
const bizCleaning = "/assets/biz-cleaning-BjGDlors.jpg";
const bizTutoring = "/assets/biz-tutoring-DDDRHzIU.jpg";
const bizPetcare = "/assets/biz-petcare-D6fErd61.jpg";
const bizFitness = "/assets/biz-fitness-tZCbk-iN.jpg";
const BUILT_FOR = [
  { img: bizSalon, label: "Hair & Beauty Salons" },
  { img: bizMedspa, label: "Med Spas & Esthetics" },
  { img: bizCleaning, label: "Home Cleaning Services" },
  { img: bizTutoring, label: "Tutoring & Learning Studios" },
  { img: bizPetcare, label: "Pet Care & Grooming" },
  { img: bizFitness, label: "Boutique Fitness & Yoga" }
];
const PAGE_PATH = "/specials/mothers-day/";
const PAGE_URL = `https://growsmallbiz.io${PAGE_PATH}`;
const APPLICATION_FORM_URL = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const PAGE_TITLE = "Mother’s Day Offer: Free Starter Website for Mom-Owned Businesses";
const PAGE_DESC = "Mother’s Day Appreciation Offer through May 31 for 5 mom-owned local service businesses: complimentary Starter Website ($2,500 value) plus reduced Client Growth System setup.";
const PRIMARY_CTA_LABEL = "Apply for One of the 5 Spots →";
const SECONDARY_CTA_LABEL = "See the Offer Breakdown";
const sectionNav = [
  { id: "value", label: "The Offer" },
  { id: "built-for", label: "Built For" },
  { id: "problem", label: "Lead Leaks" },
  { id: "leaky-bucket", label: "The Fix" },
  { id: "system", label: "The System" },
  { id: "different", label: "Why Different" },
  { id: "roi", label: "ROI" },
  { id: "apply", label: "Apply" }
];
const PrimaryCTA = ({
  href,
  className = "",
  full = false,
  label = PRIMARY_CTA_LABEL
}) => {
  const isAnchor = href.startsWith("#");
  return /* @__PURE__ */ jsxDEV(
    Button,
    {
      asChild: true,
      size: "lg",
      className: `bg-gradient-to-r from-[hsl(22_88%_65%)] via-[hsl(280_30%_60%)] to-[hsl(200_70%_60%)] text-[hsl(220_40%_15%)] font-bold hover:brightness-110 shadow-[0_10px_30px_-8px_hsl(22_85%_55%/0.45)] border-0 transition-all ${full ? "w-full" : ""} ${className}`,
      children: /* @__PURE__ */ jsxDEV("a", { href, ...!isAnchor ? { target: "_blank", rel: "noopener noreferrer" } : {}, children: [
        label,
        " ",
        /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5 ml-2" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 109,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 108,
        columnNumber: 7
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
      lineNumber: 101,
      columnNumber: 5
    },
    void 0
  );
};
const MothersDayCohort = () => {
  const { buildUrl, strategySessionUrl } = useUtm();
  buildUrl(APPLICATION_FORM_URL, "mothers-day-cohort");
  useState("monthly");
  const [demoOpen, setDemoOpen] = useState(false);
  const [formInView, setFormInView] = useState(false);
  useEffect(() => {
    const el = document.getElementById("apply-form");
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setFormInView(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px", threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const SRC = "https://reputationhub.site/reputation/assets/review-widget.js";
    if (document.querySelector(`script[src="${SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);
  const roiCards = [
    {
      icon: PhoneMissed,
      title: "One Missed Call Becomes a Booked Client",
      body: "If one missed call turns into a paying customer instead of going to voicemail, the system starts justifying itself."
    },
    {
      icon: Globe,
      title: "One After-Hours Visitor Takes Action",
      body: "People browse after dinner, on weekends, and between appointments. AI Livechat and booking tools help your website keep working when you are unavailable."
    },
    {
      icon: Mail,
      title: "One Cold Lead Gets Recovered",
      body: "Automated follow-up can bring back leads who asked once, got distracted, and would have otherwise gone cold."
    }
  ];
  const setupIncludes = [
    { icon: Sparkles, text: "Brand and business discovery" },
    { icon: Database, text: "CRM setup so every inquiry can be tracked" },
    { icon: Globe, text: "Lead forms connected to your pipeline" },
    { icon: MessageSquare, text: "Email and SMS follow-up automation" },
    { icon: PhoneCall, text: "Phone and calendar integration" },
    { icon: Star, text: "Review request automation" },
    { icon: ShieldCheck, text: "Hands-on launch support" }
  ];
  const integrations = [
    { name: "Google Calendar", color: "#4285F4" },
    { name: "Google account connection", color: "#EA4335" },
    { name: "Google Business Profile", color: "#34A853" },
    { name: "Google Lead Ads", color: "#FBBC05" },
    { name: "Facebook & Instagram", color: "#E1306C" },
    { name: "LinkedIn lead forms", color: "#0A66C2" },
    { name: "TikTok messaging or lead ads", color: "#25F4EE" },
    { name: "WhatsApp", color: "#25D366" },
    { name: "Stripe, PayPal, Square, or other payment providers", color: "#635BFF" },
    { name: "QuickBooks", color: "#2CA01C" },
    { name: "Slack", color: "#ECB22E" },
    { name: "Canva", color: "#00C4CC" },
    { name: "ClickUp", color: "#7B68EE" },
    { name: "Fathom", color: "#9333EA" }
  ];
  const faqs = [
    {
      q: "What qualifies as a mom-owned business?",
      a: "For this offer, mom-owned means the business is owned or co-owned by a mother who is actively involved in running the business."
    },
    {
      q: "What types of businesses are a good fit?",
      a: "This offer is best for local service businesses such as beauty and wellness providers, med spas, massage therapists, home service providers, consultants, coaches, photographers, event services, pet care businesses, tutoring studios, boutique fitness businesses, and similar client-based businesses."
    },
    {
      q: "Is the Starter Website really complimentary?",
      a: "Yes, the Starter Website is complimentary as part of this limited Mother’s Day Appreciation Offer. It is valued at $2,500 and is included only when you enroll in either the Essentials Special or Growth Special annual plan."
    },
    {
      q: "Is this available without an annual plan?",
      a: "No. The complimentary Starter Website is not available as a standalone website-only offer. It is included with annual enrollment in Essentials Special or Growth Special."
    },
    {
      q: "What is included in the Client Growth System Setup?",
      a: "The Client Growth System Setup includes CRM setup, lead capture, pipeline setup, email and SMS follow-up, phone and calendar integration, review request automation, and hands-on launch support."
    },
    {
      q: "What does the $1,000 setup cover?",
      a: "The $1,000 setup is not a website design fee. It covers the configuration of the system behind your website so your leads, conversations, follow-up, reviews, and booking tools work together."
    },
    {
      q: "When does billing start?",
      a: "Your annual plan begins when your website goes live. The Client Growth System Setup payment is required to reserve your spot and begin onboarding."
    },
    {
      q: "What happens after this campaign closes?",
      a: "Once the 5 spots are filled or the campaign closes, this Mother’s Day Appreciation Offer will no longer be available. This exact deal will not be repeated."
    },
    {
      q: "What happens after the first year?",
      a: "After the first year, you can continue with the appropriate GrowSmallBiz plan based on your business needs and current pricing at that time."
    },
    {
      q: "Do I pay before the website is built?",
      a: "After your application is reviewed and your business is confirmed as a fit, you will receive the payment link to reserve your spot. Work begins after payment and onboarding are completed."
    }
  ];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };
  const offerJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mother’s Day Appreciation Offer — Starter Website + Client Growth System",
    description: PAGE_DESC,
    url: PAGE_URL,
    serviceType: "Local small business website and marketing automation",
    areaServed: { "@type": "Country", name: "United States" },
    provider: {
      "@type": "Organization",
      name: "GrowSmallBiz",
      url: "https://growsmallbiz.io",
      logo: "https://growsmallbiz.io/images/growsmallbiz-logo.webp"
    },
    offers: {
      "@type": "Offer",
      name: "Mother’s Day Appreciation Offer",
      description: PAGE_DESC,
      url: PAGE_URL,
      availability: "https://schema.org/LimitedAvailability",
      inventoryLevel: { "@type": "QuantitativeValue", value: 5 },
      validThrough: "2026-05-31",
      priceCurrency: "USD",
      price: "1000",
      category: "Promotion",
      eligibleRegion: { "@type": "Country", name: "United States" },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1000",
        priceCurrency: "USD"
      },
      seller: {
        "@type": "Organization",
        name: "GrowSmallBiz",
        url: "https://growsmallbiz.io"
      }
    }
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://growsmallbiz.io/" },
      { "@type": "ListItem", position: 2, name: "Specials", item: "https://growsmallbiz.io/specials/" },
      { "@type": "ListItem", position: 3, name: "Mother’s Day Offer", item: PAGE_URL }
    ]
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: PAGE_TITLE }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 358,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: PAGE_DESC }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 359,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: PAGE_URL }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 360,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index,follow,max-image-preview:large" }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 361,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: PAGE_TITLE }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 362,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: PAGE_DESC }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 363,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 364,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: PAGE_URL }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 365,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: `https://growsmallbiz.io${heroImage}` }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 366,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 367,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 368,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: PAGE_TITLE }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 369,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: PAGE_DESC }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 370,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: `https://growsmallbiz.io${heroImage}` }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 371,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(offerJsonLd) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 372,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(faqJsonLd) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 373,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 374,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
      lineNumber: 357,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("header", { className: "sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 h-14 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "flex items-center gap-2 min-w-0", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: growsmallbizLogo,
            alt: "GrowSmallBiz logo",
            width: 36,
            height: 36,
            className: "h-9 w-auto shrink-0"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 381,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("span", { className: "font-display font-semibold text-foreground text-sm md:text-base truncate", children: "GrowSmallBiz · Mother’s Day Appreciation Offer" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 388,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 380,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "nav",
        {
          "aria-label": "On this page",
          className: "hidden lg:flex items-center gap-5 text-sm text-muted-foreground",
          children: sectionNav.map((s) => /* @__PURE__ */ jsxDEV("a", { href: `#${s.id}`, className: "hover:text-primary transition-colors", children: s.label }, s.id, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 397,
            columnNumber: 15
          }, void 0))
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 392,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: "#apply-form",
          className: "hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors",
          children: [
            "Claim Spot ",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 406,
              columnNumber: 24
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 402,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
      lineNumber: 379,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
      lineNumber: 378,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", className: "pb-28 md:pb-24", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "relative overflow-hidden bg-[linear-gradient(135deg,hsl(210_55%_8%)_0%,hsl(210_50%_12%)_55%,hsl(20_45%_18%)_100%)]", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,210,190,0.16),transparent_55%)] pointer-events-none" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 414,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[hsl(18_85%_65%/0.18)] blur-3xl pointer-events-none" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 415,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[hsl(280_60%_70%/0.14)] blur-3xl pointer-events-none" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 416,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto text-center mb-5", children: /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/50 text-primary text-xs md:text-sm font-bold uppercase tracking-wider shadow-[0_0_20px_hsl(22_85%_60%/0.2)]", children: [
            /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 421,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "Mother’s Day Appreciation Offer · Limited to 5 Mom-Owned Businesses" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 422,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 420,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 419,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto text-center mb-5", children: [
            /* @__PURE__ */ jsxDEV("h1", { className: "text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] font-display font-bold leading-[1.1] tracking-tight", children: /* @__PURE__ */ jsxDEV("span", { className: "bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "Get a Complimentary Starter Small Business Website" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 431,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 430,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("h2", { className: "mt-3 text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-display font-semibold leading-[1.2] tracking-tight", children: /* @__PURE__ */ jsxDEV("span", { className: "bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "a System That Helps You Win Clients Without Living on Your Phone" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 436,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 435,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-sm md:text-base font-semibold text-foreground/90 tracking-wide uppercase", children: "Built for moms who mean business." }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 440,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 429,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center mb-4", children: /* @__PURE__ */ jsxDEV("p", { className: "text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed", children: "For 5 mom-owned local service businesses, GrowSmallBiz is including a complimentary Starter Website valued at $2,500, reducing Client Growth System Setup by $500, and offering annual-only appreciation pricing that will not be repeated." }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 447,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 446,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center mb-6", children: /* @__PURE__ */ jsxDEV("p", { className: "text-sm sm:text-base text-foreground/80 leading-relaxed", children: "Your website, CRM, AI Livechat, missed-call text-back, follow-up automation, reviews, and booking tools work together — so your business can respond while you are with clients, with family, or finally taking a break." }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 454,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 453,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto text-center mb-10 md:mb-14", children: /* @__PURE__ */ jsxDEV("div", { className: "inline-flex flex-wrap items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary/15 border-2 border-primary text-primary font-bold text-sm md:text-base shadow-[0_0_30px_hsl(22_85%_60%/0.25)]", children: [
            /* @__PURE__ */ jsxDEV(Clock, { className: "w-4 h-4 md:w-5 md:h-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 462,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "uppercase tracking-wide bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "Extended Through May 31, 2026" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 463,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "hidden sm:inline opacity-70", children: "·" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 466,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "uppercase tracking-wide bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "or Until 5 Spots Are Filled" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 467,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 461,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 460,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "order-2 lg:order-1 min-w-0", children: /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: [
              "Complimentary Starter Website valued at $2,500",
              "$500 off Client Growth System Setup",
              "Annual-only appreciation pricing",
              "AI Livechat, missed-call text-back, CRM, reviews, and booking tools",
              "Limited to 5 selected mom-owned businesses"
            ].map((text) => /* @__PURE__ */ jsxDEV(
              "li",
              {
                className: "flex items-start gap-3 px-4 py-3 rounded-lg bg-primary/15 border-2 border-primary/60 shadow-[0_0_18px_hsl(22_85%_60%/0.18)]",
                children: [
                  /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 mt-0.5 shrink-0 text-primary" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 489,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-sm md:text-base text-foreground font-semibold", children: text }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 490,
                    columnNumber: 23
                  }, void 0)
                ]
              },
              text,
              true,
              {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 485,
                columnNumber: 21
              },
              void 0
            )) }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 477,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 475,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "relative order-1 lg:order-2", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "absolute -inset-4 rounded-[2rem] bg-[linear-gradient(135deg,hsl(22_85%_68%/0.35),hsl(350_75%_80%/0.28),hsl(280_55%_80%/0.28))] blur-2xl pointer-events-none" }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 499,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-3 -left-3 z-20 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-xl", children: "5 Spots" }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 500,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "relative rounded-3xl overflow-hidden border border-[hsl(30_60%_80%/0.35)] shadow-2xl bg-card", children: /* @__PURE__ */ jsxDEV(
                "img",
                {
                  src: heroImage,
                  alt: "Mom-owned local service business owner with website, calls, chat, reviews, and CRM dashboard cards floating around her",
                  width: 1536,
                  height: 1024,
                  fetchPriority: "high",
                  decoding: "async",
                  className: "w-full h-auto"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 504,
                  columnNumber: 19
                },
                void 0
              ) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 503,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "hidden md:flex absolute -left-6 top-1/4 z-20 items-center gap-2 px-3 py-2 rounded-xl bg-white text-[hsl(210_55%_12%)] text-xs font-semibold shadow-xl border border-[hsl(30_60%_80%)]", children: [
                /* @__PURE__ */ jsxDEV(Calendar, { className: "w-4 h-4 text-primary" }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 516,
                  columnNumber: 19
                }, void 0),
                " Appointment booked"
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 515,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "hidden md:flex absolute -right-4 bottom-8 z-20 items-center gap-2 px-3 py-2 rounded-xl bg-white text-[hsl(210_55%_12%)] text-xs font-semibold shadow-xl border border-[hsl(30_60%_80%)]", children: [
                /* @__PURE__ */ jsxDEV(Star, { className: "w-4 h-4 text-primary" }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 519,
                  columnNumber: 19
                }, void 0),
                " New 5-star review"
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 518,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 498,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 474,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto mt-10 md:mt-12 text-center", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row flex-wrap gap-3 justify-center mb-4", children: [
              /* @__PURE__ */ jsxDEV(
                PrimaryCTA,
                {
                  href: "#apply-form",
                  label: "Apply for One of the 5 Spots",
                  className: "w-full sm:w-auto whitespace-normal text-center leading-tight h-auto py-3"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 527,
                  columnNumber: 17
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(Button, { asChild: true, size: "lg", variant: "outline", className: "border-border w-full sm:w-auto", children: /* @__PURE__ */ jsxDEV("a", { href: "#value", children: SECONDARY_CTA_LABEL }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 533,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 532,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 526,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs sm:text-sm text-muted-foreground text-center leading-relaxed", children: "The complimentary Starter Website is included only with Essentials Special or Growth Special annual enrollment. It is not available as a standalone website-only offer." }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 536,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 525,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 417,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 413,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { "aria-label": "Proud Chamber of Commerce member", className: "bg-white py-6 md:py-8 border-y border-black/5", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-5", children: "GrowSmallBiz is Proud Member Of" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 546,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14", children: [
          { src: chamberDanville, alt: "Danville Area Chamber of Commerce" },
          { src: chamberSanRamon, alt: "San Ramon Chamber of Commerce" },
          { src: chamberWalnutCreek, alt: "Walnut Creek Chamber of Commerce" },
          { src: chamberConcord, alt: "Greater Concord Chamber of Commerce" }
        ].map((logo) => /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: logo.src,
            alt: logo.alt,
            loading: "lazy",
            className: "h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:-translate-y-0.5"
          },
          logo.alt,
          false,
          {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 556,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 549,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 545,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 544,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-10 md:py-12 bg-background border-b border-border/40", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6", children: "This limited offer includes" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 572,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          "Complimentary Starter Website — $2,500 value",
          "$500 off Client Growth System Setup",
          "Annual-only Mom Appreciation Pricing",
          "30 Days Money Back Guarantee",
          "Limited to 5 mom-owned businesses"
        ].map((item) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 text-foreground/90", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 584,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm md:text-base leading-snug", children: item }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 585,
            columnNumber: 21
          }, void 0)
        ] }, item, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 583,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 575,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-sm font-bold uppercase tracking-[0.2em] text-primary mt-6", children: "This Offer Will Not Be Repeated in 2026" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 589,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 571,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 570,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 569,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "built-for", className: "py-16 md:py-20 relative scroll-mt-20", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10 max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "Built For Mom-Owned Local Service Businesses" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 600,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "Made for Mom-Owned Service Businesses Like Yours" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 603,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: "If you run a local service business and juggle it alongside motherhood, this offer was designed with you in mind." }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 606,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 599,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: BUILT_FOR.map((biz) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "rounded-2xl overflow-hidden border border-border bg-card group hover:border-primary/50 transition-colors",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "aspect-[4/3] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxDEV(
                "img",
                {
                  src: biz.img,
                  alt: biz.label,
                  width: 1024,
                  height: 768,
                  loading: "lazy",
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 617,
                  columnNumber: 21
                },
                void 0
              ) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 616,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "p-5 text-center", children: /* @__PURE__ */ jsxDEV("h3", { className: "text-base md:text-lg font-semibold text-foreground", children: biz.label }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 627,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 626,
                columnNumber: 19
              }, void 0)
            ]
          },
          biz.label,
          true,
          {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 612,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 610,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto", children: "Not on the list? If you run a mom-owned local service business, this is still for you." }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 632,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-sm italic text-foreground/80 mt-2 max-w-xl mx-auto", children: "Mom of humans, pets, or plants? You qualify. 🌿🐾" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 635,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 598,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 597,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "problem", className: "relative overflow-hidden py-20 md:py-24 scroll-mt-20 bg-[linear-gradient(180deg,hsl(210_55%_8%)_0%,hsl(210_50%_11%)_100%)]", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[hsl(22_85%_60%/0.10)] blur-3xl pointer-events-none" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 643,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[hsl(280_60%_70%/0.08)] blur-3xl pointer-events-none" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 644,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 max-w-6xl relative z-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-12", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "The Problem" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 648,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-5 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "Why Leads Slip Through the Cracks for Small Businesses" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 651,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-muted-foreground leading-relaxed", children: "You are great at what you do — and you are also the mom, the operator, and the front desk. The family priorities you cannot ignore are exactly when your business is quietly leaking revenue." }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 654,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 647,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 md:space-y-5", children: [
            {
              causeIcon: PhoneCall,
              causeTitle: "School pickup, doctor visits, sick days",
              causeBody: "You can't answer the phone in the middle of carpool or a pediatrician waiting room.",
              leakIcon: PhoneMissed,
              leak: "Missed calls go to voicemail — and voicemails don't get returned fast enough."
            },
            {
              causeIcon: Heart,
              causeTitle: "Cooking dinner, helping with homework",
              causeBody: "Evenings belong to your kids — not to refreshing your inbox.",
              leakIcon: Clock,
              leak: "Inquiries sit in an inbox for hours (or days) before someone responds."
            },
            {
              causeIcon: Users,
              causeTitle: "Bedtime routine while buyers browse at night",
              causeBody: "Your best prospects research after 8pm — exactly when you are off the clock.",
              leakIcon: MessageSquare,
              leak: "Your website has no live chat — visitors leave without a trace."
            },
            {
              causeIcon: Calendar,
              causeTitle: "Weekend family time, no bandwidth to chase",
              causeBody: "Saturdays are for soccer games, not for chasing leads who didn't book.",
              leakIcon: Mail,
              leak: "No system to follow up with leads who didn't book the first time."
            },
            {
              causeIcon: Smartphone,
              causeTitle: "Juggling clients and kids — no time to ask",
              causeBody: "By the time the day ends, asking for a review is the last thing on your mind.",
              leakIcon: Star,
              leak: "Happy clients aren't being asked for reviews or referrals in a repeatable way."
            },
            {
              causeIcon: Sparkles,
              causeTitle: "Running on intuition — no time to analyze",
              causeBody: "You feel where leads come from, but you have never had time to actually measure it.",
              leakIcon: TrendingUp,
              leak: "No dashboard showing where your leads come from, what converts, and what doesn't."
            }
          ].map((row) => {
            const CauseIcon = row.causeIcon;
            const LeakIcon = row.leakIcon;
            return /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-5 items-stretch", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3 p-4 md:p-5 rounded-xl border border-[hsl(280_50%_75%/0.25)] bg-[hsl(280_40%_18%/0.35)]", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 shrink-0 rounded-lg bg-[hsl(280_60%_70%/0.15)] border border-[hsl(280_60%_70%/0.35)] flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(CauseIcon, { className: "w-5 h-5 text-[hsl(280_70%_82%)]" }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 710,
                  columnNumber: 25
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 709,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] md:text-xs font-bold uppercase tracking-widest text-[hsl(280_60%_78%)] mb-1", children: "Mom-life moment" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 713,
                    columnNumber: 25
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-sm md:text-base font-display font-semibold text-foreground leading-snug mb-1", children: row.causeTitle }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 716,
                    columnNumber: 25
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs md:text-sm text-muted-foreground leading-relaxed", children: row.causeBody }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 719,
                    columnNumber: 25
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 712,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 708,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "hidden md:flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "w-9 h-9 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 725,
                columnNumber: 25
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 724,
                columnNumber: 23
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 723,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3 p-4 md:p-5 rounded-xl border-2 border-primary/40 bg-primary/10 shadow-[0_0_18px_hsl(22_85%_60%/0.12)]", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 shrink-0 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(LeakIcon, { className: "w-5 h-5 text-primary" }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 731,
                  columnNumber: 25
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 730,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-1", children: "Revenue leak" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 734,
                    columnNumber: 25
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm md:text-base font-semibold text-foreground leading-snug", children: row.leak }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 737,
                    columnNumber: 25
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 733,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 729,
                columnNumber: 21
              }, void 0)
            ] }, row.causeTitle, true, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 707,
              columnNumber: 19
            }, void 0);
          }) }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 659,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "mt-12 max-w-3xl mx-auto text-center text-base md:text-lg text-muted-foreground leading-relaxed", children: [
            "Each one of these is a leak. Together, they cost",
            " ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-foreground font-semibold", children: "thousands every month" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 747,
              columnNumber: 15
            }, void 0),
            " ",
            "— and most mom-owned businesses don't even realize it."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 745,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 646,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 642,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "leaky-bucket", className: "relative overflow-hidden py-20 md:py-24 scroll-mt-20 bg-[linear-gradient(180deg,hsl(210_50%_11%)_0%,hsl(210_55%_8%)_100%)]", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[hsl(22_85%_60%/0.10)] blur-3xl pointer-events-none" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 755,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[hsl(280_60%_70%/0.08)] blur-3xl pointer-events-none" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 756,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 max-w-6xl relative z-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-12", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "What You Get" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 760,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-5 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "How GrowSmallBiz Helps Your Small Business Stop Losing Leads" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 763,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-muted-foreground leading-relaxed", children: "One connected system — built inside your own account — that captures enquiries, follows up instantly, books calls, and tracks everything. Here's what's included:" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 766,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 759,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-14 items-center", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "relative order-1", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "absolute -inset-6 rounded-[2rem] bg-[linear-gradient(135deg,hsl(22_85%_60%/0.18),hsl(188_78%_45%/0.18))] blur-3xl pointer-events-none" }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 774,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "relative rounded-2xl overflow-hidden border border-primary/25 bg-card/40 p-4 md:p-6", children: [
                /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: leakyBucket,
                    alt: "Leaky bucket illustration showing local business leads spilling out through gaps in disconnected marketing tools",
                    width: 800,
                    height: 800,
                    loading: "lazy",
                    decoding: "async",
                    className: "w-full h-auto"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 776,
                    columnNumber: 19
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("p", { className: "mt-4 flex items-center justify-center gap-2 text-center font-display font-semibold text-base md:text-lg bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: [
                  "We Fix Your Leaky Bucket",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { "aria-hidden": "true", className: "hidden lg:inline w-5 h-5 shrink-0 text-[hsl(22_90%_72%)]" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 787,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(ArrowDown, { "aria-hidden": "true", className: "lg:hidden w-5 h-5 shrink-0 text-[hsl(22_90%_72%)]" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 788,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 785,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 775,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 773,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "order-2 min-w-0", children: /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: [
              {
                icon: PhoneCall,
                title: "AI Voice (Missed Call Handling)",
                body: "When you miss a call, AI picks up. It answers common questions, qualifies the caller, and books appointments — so you never lose a lead to voicemail again."
              },
              {
                icon: MessageSquare,
                title: "Missed Call SMS Text Back",
                body: "If a call goes unanswered, the system instantly texts the caller back. Most people reply to a text faster than they listen to a voicemail."
              },
              {
                icon: Globe,
                title: "AI Website / Landing Page + Opt-in",
                body: "A high-converting one-page website designed to capture leads. Built to load fast, look professional, and drive action."
              },
              {
                icon: Bot,
                title: "AI Webchat",
                body: "A chat widget on your website that engages visitors in real time, answers questions, and captures contact details — even when you're not online."
              },
              {
                icon: Database,
                title: "CRM Setup (Basic)",
                body: "Your leads, conversations, and pipeline — all in one place. No more spreadsheets or scattered notes."
              },
              {
                icon: Star,
                title: "Reviews System",
                body: "Automatically requests reviews from happy clients and follows up if they haven't left one. A repeatable process, not a one-off ask."
              },
              {
                icon: Users,
                title: "Referrals System",
                body: "Prompts satisfied clients to refer others, with automated follow-up. Turns word of mouth into a system."
              },
              {
                icon: TrendingUp,
                title: "KPI Dashboard & Tracking",
                body: "See where your leads come from, what converts, and what needs attention. One screen. Real-time data."
              }
            ].map((item) => {
              const ItemIcon = item.icon;
              return /* @__PURE__ */ jsxDEV("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-9 h-9 shrink-0 rounded-lg bg-primary/15 border border-primary/40 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(ItemIcon, { className: "w-[18px] h-[18px] text-primary" }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 842,
                  columnNumber: 27
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 841,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxDEV("h4", { className: "text-sm md:text-base font-display font-bold text-foreground leading-snug", children: item.title }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 845,
                    columnNumber: 27
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs md:text-sm text-muted-foreground leading-relaxed mt-0.5", children: item.body }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 848,
                    columnNumber: 27
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 844,
                  columnNumber: 25
                }, void 0)
              ] }, item.title, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 840,
                columnNumber: 23
              }, void 0);
            }) }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 795,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 794,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 771,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "mt-12 max-w-3xl mx-auto text-center text-base md:text-lg text-muted-foreground leading-relaxed", children: [
            "Each one of these is a leak. Together, they cost",
            " ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-foreground font-semibold", children: "thousands every month" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 861,
              columnNumber: 15
            }, void 0),
            " ",
            "— and most mom-owned businesses don't even realize it."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 859,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 758,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 754,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 scroll-mt-20 bg-background-alt", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12 max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "Speed-to-Lead" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 871,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "Follow-Up Call/Email/SMS in Minutes" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 874,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-base md:text-lg", children: "The moment someone submits a form, the system takes over — so the lead is never sitting in a tab waiting for you." }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 877,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 870,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(SpeedToLeadFlow, {}, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 882,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 869,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 868,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 scroll-mt-20", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 max-w-7xl", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12 max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "AI That Works While You Work" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 890,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "While You’re With a Client, AI Answers Every Call and Chat" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 893,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-base md:text-lg", children: "You can’t pause a massage to grab the phone or reply to a website visitor. Your Voice AI and Website Live Chat handle both — answering questions, qualifying leads, and booking appointments — so no opportunity slips by while you’re in session." }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 896,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 889,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(AiBusyMomDemo, {}, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 901,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 888,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 887,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "automation", className: "py-20 scroll-mt-20 bg-background-alt relative overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 max-w-6xl", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12 max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "One Connected System" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 909,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "What Lead Automation Handles" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 912,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-base md:text-lg", children: "Lead Automation System Included With Your Annual Plan — every piece works together so nothing slips through." }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 915,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 908,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: [
          { icon: Smartphone, label: "Missed-call text-back" },
          { icon: PhoneCall, label: "AI Voice Receptionist" },
          { icon: Bot, label: "AI Livechat" },
          { icon: Mail, label: "Lead form follow-up" },
          { icon: MessageSquare, label: "Email & SMS nurture" },
          { icon: Calendar, label: "Calendar scheduling" },
          { icon: Star, label: "Review requests" },
          { icon: Database, label: "CRM pipeline tracking" },
          { icon: CreditCard, label: "Payment acceptance (when applicable)" }
        ].map((node) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "rounded-2xl border-2 border-[hsl(188_78%_50%_/_0.4)] bg-[hsl(210_45%_18%)] p-5 text-center hover:border-[hsl(188_78%_60%_/_0.8)] hover:shadow-[0_0_30px_hsl(188_78%_45%_/_0.35)] transition-all",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "mx-auto w-12 h-12 rounded-xl bg-[hsl(188_78%_41%_/_0.2)] border border-[hsl(188_78%_55%_/_0.4)] flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxDEV(node.icon, { className: "w-6 h-6 text-[hsl(188_78%_70%)]" }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 937,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 936,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold text-foreground leading-tight", children: node.label }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 939,
                columnNumber: 19
              }, void 0)
            ]
          },
          node.label,
          true,
          {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 932,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 920,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 907,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 906,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 scroll-mt-20", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 max-w-4xl text-center", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "See It Live" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 949,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "Preview a Sample Starter Website" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 952,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8", children: "See an example of the kind of professional, mobile-friendly service-business website GrowSmallBiz can build as part of this offer." }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 955,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mb-8 max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border shadow-[0_30px_80px_-30px_hsl(22_85%_55%/0.35)]", children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: demoPreview,
            alt: "Sample starter website preview — Lumière Medical Spa demo",
            width: 1920,
            height: 1006,
            loading: "lazy",
            className: "w-full h-auto block"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 959,
            columnNumber: 15
          },
          void 0
        ) }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 958,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            size: "lg",
            onClick: () => setDemoOpen(true),
            className: "bg-gradient-to-r from-[hsl(22_88%_65%)] via-[hsl(280_30%_60%)] to-[hsl(200_70%_60%)] text-[hsl(220_40%_15%)] font-bold hover:brightness-110 shadow-[0_10px_30px_-8px_hsl(22_85%_55%/0.45)] border-0",
            children: [
              "Preview Demo Website ",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5 ml-2" }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 973,
                columnNumber: 36
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 968,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground mt-5 max-w-2xl mx-auto italic", children: "Sample website shown for demonstration purposes. Final website is customized for your business, services, and brand." }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 975,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 948,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 947,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "section",
        {
          id: "system",
          className: "py-20 scroll-mt-20 relative overflow-hidden bg-[linear-gradient(180deg,hsl(35_55%_94%)_0%,hsl(20_50%_92%)_100%)]",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-20 right-10 w-72 h-72 rounded-full bg-[hsl(350_70%_80%/0.22)] blur-3xl pointer-events-none" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 986,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-20 left-10 w-72 h-72 rounded-full bg-[hsl(280_50%_82%/0.2)] blur-3xl pointer-events-none" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 987,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 max-w-6xl relative z-10", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10 max-w-3xl mx-auto", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] mb-3 text-[hsl(210_55%_14%)]", children: "See It In Action" }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 991,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold mb-4", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[hsl(210_55%_14%)]", children: "See the System Behind Your" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 995,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("br", { className: "hidden md:block" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 998,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "bg-gradient-to-r from-[hsl(22_90%_68%)] via-[hsl(350_75%_72%)] to-[hsl(188_78%_52%)] bg-clip-text text-transparent", children: "Complimentary Starter Website" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 999,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 994,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-[hsl(210_30%_25%)] text-base md:text-lg leading-relaxed", children: "Your website is only the front door. GrowSmallBiz also sets up the connected system behind it — lead capture, CRM, follow-up automation, reviews, and AI-powered response tools." }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1003,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 990,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "rounded-3xl border border-[hsl(30_45%_78%)] bg-white/40 backdrop-blur-sm shadow-[0_20px_60px_-20px_hsl(20_50%_30%/0.18)] p-4 md:p-8", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "mb-12", children: [
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-bold text-center text-[hsl(210_55%_14%)] mb-6", children: "Recent Google Reviews" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1011,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto rounded-2xl border border-[hsl(30_45%_82%)] bg-white shadow-[0_12px_40px_-12px_hsl(20_50%_30%/0.15)] p-3 md:p-6 overflow-hidden", children: /* @__PURE__ */ jsxDEV(
                    "iframe",
                    {
                      className: "lc_reviews_widget w-full block",
                      src: "https://reputationhub.site/reputation/widgets/review_widget/4KL47iKeJZ2Ee05j7FBh",
                      frameBorder: 0,
                      scrolling: "no",
                      style: { minWidth: "100%", width: "100%" },
                      title: "Recent Google Reviews"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1015,
                      columnNumber: 19
                    },
                    void 0
                  ) }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1014,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1010,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-bold text-center text-[hsl(210_55%_14%)] mb-6", children: "Watch How the System Works" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1027,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 max-w-5xl mx-auto", children: [
                    {
                      title: "Client Growth System Overview",
                      sub: "See how the system helps organize leads, conversations, follow-up, reviews, and customer communication in one place.",
                      src: "https://www.youtube-nocookie.com/embed/rJ289MZ0ugU"
                    },
                    {
                      title: "AI Employee Demo",
                      sub: "See how AI-powered response tools can help answer questions, capture information, and support faster follow-up.",
                      src: "https://www.youtube-nocookie.com/embed/IkA8jPWgHxk"
                    }
                  ].map((v) => /* @__PURE__ */ jsxDEV(
                    "div",
                    {
                      className: "rounded-2xl border border-[hsl(30_45%_82%)] bg-white shadow-[0_12px_40px_-12px_hsl(20_50%_30%/0.15)] overflow-hidden flex flex-col",
                      children: [
                        /* @__PURE__ */ jsxDEV("div", { className: "relative w-full", style: { aspectRatio: "16 / 9" }, children: /* @__PURE__ */ jsxDEV(
                          "iframe",
                          {
                            src: v.src,
                            title: v.title,
                            loading: "lazy",
                            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: true,
                            className: "absolute inset-0 w-full h-full",
                            frameBorder: 0
                          },
                          void 0,
                          false,
                          {
                            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                            lineNumber: 1048,
                            columnNumber: 25
                          },
                          void 0
                        ) }, void 0, false, {
                          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                          lineNumber: 1047,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDEV("div", { className: "p-6", children: [
                          /* @__PURE__ */ jsxDEV("h4", { className: "font-display font-bold text-lg text-[hsl(210_55%_14%)] mb-2", children: v.title }, void 0, false, {
                            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                            lineNumber: 1059,
                            columnNumber: 25
                          }, void 0),
                          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-[hsl(210_30%_30%)] leading-relaxed", children: v.sub }, void 0, false, {
                            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                            lineNumber: 1060,
                            columnNumber: 25
                          }, void 0)
                        ] }, void 0, true, {
                          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                          lineNumber: 1058,
                          columnNumber: 23
                        }, void 0)
                      ]
                    },
                    v.src,
                    true,
                    {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1043,
                      columnNumber: 21
                    },
                    void 0
                  )) }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1030,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1026,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1009,
                columnNumber: 13
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 988,
              columnNumber: 11
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 982,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "section",
        {
          id: "value",
          className: "py-20 scroll-mt-20 relative overflow-hidden bg-[linear-gradient(180deg,hsl(35_60%_95%)_0%,hsl(20_55%_92%)_100%)]",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-20 right-10 w-72 h-72 rounded-full bg-[hsl(350_70%_80%/0.22)] blur-3xl pointer-events-none" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1075,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-20 left-10 w-72 h-72 rounded-full bg-[hsl(280_50%_82%/0.2)] blur-3xl pointer-events-none" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1076,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 max-w-7xl relative z-10", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-8 max-w-4xl mx-auto", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[hsl(22_90%_60%)] via-[hsl(350_70%_60%)] to-[hsl(188_78%_45%)] bg-clip-text text-transparent", children: "Mother’s Day Appreciation Offer · Limited to 5 Businesses" }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1081,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 leading-[1.1]", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[hsl(210_55%_14%)]", children: "A Real Business Growth Deal for " }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1085,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "bg-gradient-to-r from-[hsl(22_90%_58%)] via-[hsl(350_75%_62%)] to-[hsl(188_78%_48%)] bg-clip-text text-transparent", children: "Mom-Owned Businesses" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1086,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1084,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-[hsl(210_30%_25%)] text-base md:text-lg leading-relaxed", children: "This is not standard GrowSmallBiz pricing. This is a limited annual-only appreciation offer created for 5 mom-owned local service businesses." }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1090,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1080,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto mb-10 rounded-2xl border border-[hsl(22_85%_60%/0.35)] bg-white/75 backdrop-blur-sm p-5 md:p-6 shadow-[0_15px_40px_-20px_hsl(20_60%_40%/0.3)]", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] mb-2 bg-gradient-to-r from-[hsl(22_90%_60%)] via-[hsl(350_70%_60%)] to-[hsl(188_78%_45%)] bg-clip-text text-transparent", children: "Why this is still open" }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1097,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm md:text-base text-[hsl(210_30%_22%)] leading-relaxed", children: "Mother’s Day is one day. Running a business while being a mom is every day. We extended this appreciation offer through May 31 for 5 mom-owned local service businesses." }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1100,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1096,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mb-10", children: /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[hsl(22_85%_50%)] text-white text-sm md:text-base font-bold shadow-[0_15px_40px_-10px_hsl(20_60%_40%/0.45)] uppercase tracking-wider", children: [
                /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1107,
                  columnNumber: 17
                }, void 0),
                " Two Plans to Choose From"
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1106,
                columnNumber: 15
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1105,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 mb-12 max-w-6xl mx-auto", children: [
                {
                  title: "Essentials",
                  subtitle: "So no lead slips through the cracks — even when you're juggling everything else",
                  highlight: false,
                  features: [
                    { title: "Missed Call Text Back", desc: "If you miss a call, an instant text is sent automatically — no lead slips away" },
                    { title: "Reputation Management", desc: "Automated review requests and AI replies to Google Reviews" },
                    { title: "Calendars & Appointment Scheduling", desc: "Integrated with Google, Outlook and Apple Calendar" },
                    { title: "Unified Inbox", desc: "Email, SMS and Social Media communication in one place" },
                    { title: "Email & SMS Marketing", desc: "Nurture leads and send appointment reminders automatically — fewer no-shows, fuller calendar" }
                  ],
                  footer: /* @__PURE__ */ jsxDEV(Fragment, { children: "Plus many more advanced features — all included in one flat subscription fee." }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1126,
                    columnNumber: 21
                  }, void 0)
                },
                {
                  title: "Growth",
                  subtitle: "Scale Conversations with AI",
                  highlight: true,
                  features: [
                    "Everything in Essentials +",
                    "AI Receptionist",
                    "Website AI Livechat",
                    "Conversational AI across SMS & Social Media Channels"
                  ],
                  footer: /* @__PURE__ */ jsxDEV(Fragment, { children: [
                    "Best for moms who want AI to",
                    " ",
                    /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-[hsl(22_85%_42%)]", children: "answer, qualify, and book" }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1144,
                      columnNumber: 23
                    }, void 0),
                    " ",
                    "— even when you're with a client, with family, or finally taking a break."
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1142,
                    columnNumber: 21
                  }, void 0)
                }
              ].map((c) => /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: `relative rounded-3xl p-7 md:p-8 border flex flex-col ${c.highlight ? "border-2 border-[hsl(22_85%_60%)] bg-[linear-gradient(135deg,hsl(22_85%_60%/0.08),hsl(350_75%_80%/0.10))] shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.4)]" : "border-[hsl(30_55%_82%)] bg-white"}`,
                  children: [
                    c.highlight && /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[hsl(22_85%_50%)] text-white text-xs font-bold shadow-lg whitespace-nowrap uppercase tracking-wider", children: "Most Popular" }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1159,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl md:text-4xl font-display font-bold text-[hsl(210_55%_12%)] mb-1", children: c.title }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1163,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("p", { className: "italic text-[hsl(210_30%_30%)] mb-5", children: c.subtitle }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1166,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: c.features.map((f, i) => {
                      const isHeading = typeof f === "string" && /^everything in/i.test(f);
                      const isObject = typeof f === "object" && f !== null && "title" in f;
                      return /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 mt-0.5 text-[hsl(22_85%_50%)] shrink-0" }, void 0, false, {
                          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                          lineNumber: 1173,
                          columnNumber: 27
                        }, void 0),
                        /* @__PURE__ */ jsxDEV("span", { className: isHeading ? "text-[hsl(210_55%_12%)] font-bold" : "text-[hsl(210_30%_22%)]", children: isObject ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
                          /* @__PURE__ */ jsxDEV("span", { className: "font-semibold", children: f.title }, void 0, false, {
                            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                            lineNumber: 1177,
                            columnNumber: 33
                          }, void 0),
                          f.desc && /* @__PURE__ */ jsxDEV("span", { className: "block text-sm text-[hsl(210_30%_35%)] mt-0.5", children: f.desc }, void 0, false, {
                            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                            lineNumber: 1179,
                            columnNumber: 35
                          }, void 0)
                        ] }, void 0, true, {
                          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                          lineNumber: 1176,
                          columnNumber: 31
                        }, void 0) : f }, void 0, false, {
                          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                          lineNumber: 1174,
                          columnNumber: 27
                        }, void 0)
                      ] }, isObject ? f.title : f, true, {
                        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                        lineNumber: 1172,
                        columnNumber: 25
                      }, void 0);
                    }) }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1167,
                      columnNumber: 19
                    }, void 0),
                    c.footer && /* @__PURE__ */ jsxDEV("div", { className: "mt-6 pt-5 border-t border-[hsl(22_85%_60%/0.3)]", children: /* @__PURE__ */ jsxDEV("p", { className: "italic text-[hsl(210_30%_25%)] leading-relaxed", children: c.footer }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1192,
                      columnNumber: 23
                    }, void 0) }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1191,
                      columnNumber: 21
                    }, void 0)
                  ]
                },
                c.title,
                true,
                {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1150,
                  columnNumber: 17
                },
                void 0
              )) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1112,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 mb-12 max-w-6xl mx-auto", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "rounded-3xl border border-[hsl(30_55%_82%)] bg-white/70 backdrop-blur-sm p-7 md:p-8", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-wider text-[hsl(210_25%_45%)] mb-4", children: "Standard GrowSmallBiz Annual Value" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1202,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("ul", { className: "divide-y divide-[hsl(30_45%_85%)]", children: [
                    { label: "Starter Website", value: "$2,500" },
                    { label: "Client Growth System Setup", value: "$1,500" },
                    { label: "Essentials Annual Plan", value: "$2,970/year" },
                    { label: "Growth Annual Plan", value: "$4,970/year" }
                  ].map((row) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-center justify-between py-3 text-[hsl(210_30%_25%)]", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-sm md:text-base", children: row.label }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1213,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-sm md:text-base line-through opacity-70", children: row.value }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1214,
                      columnNumber: 23
                    }, void 0)
                  ] }, row.label, true, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1212,
                    columnNumber: 21
                  }, void 0)) }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1205,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1201,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "relative rounded-3xl border-2 border-[hsl(22_85%_60%)] bg-white shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.4)] p-7 md:p-8 overflow-hidden", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 inset-x-0 h-1.5 bg-[linear-gradient(90deg,hsl(22_85%_60%),hsl(350_70%_72%),hsl(280_55%_72%))]" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1221,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-wider mb-4 mt-2 bg-gradient-to-r from-[hsl(22_90%_60%)] via-[hsl(350_70%_60%)] to-[hsl(188_78%_45%)] bg-clip-text text-transparent", children: "Mother’s Day Appreciation Offer" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1222,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("ul", { className: "divide-y divide-[hsl(30_45%_85%)]", children: [
                    { label: "Starter Website", value: "Complimentary" },
                    { label: "Client Growth System Setup", value: "$1,000" },
                    { label: "Essentials Special", value: "$970/year" },
                    { label: "Growth Special", value: "$1,970/year" }
                  ].map((row) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-center justify-between gap-3 py-3 text-[hsl(210_55%_14%)]", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-sm md:text-base font-medium", children: row.label }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1233,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-sm md:text-base font-bold text-[hsl(22_85%_42%)] text-right", children: row.value }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1234,
                      columnNumber: 23
                    }, void 0)
                  ] }, row.label, true, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1232,
                    columnNumber: 21
                  }, void 0)) }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1225,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "mt-4 text-xs md:text-sm text-[hsl(210_30%_30%)] italic", children: "Annual-only special pricing. Equivalent to $97/month for Essentials and $197/month for Growth, with 2 months included." }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1238,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1220,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1200,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch", children: [
                {
                  title: "Essentials Special",
                  annual: "$970",
                  monthlyEq: "$97/month",
                  calloutHeadline: "Less Than One Nice Dinner Out Each Month",
                  calloutBody: "For less than one dinner out each month, your business gets a website, CRM, unified inbox, review automation, and follow-up foundation working behind the scenes.",
                  firstYearAmount: "$1,970",
                  savingsTotal: "$5,000",
                  savingsRows: [
                    "$2,500 Starter Website included",
                    "$500 setup savings",
                    "$2,000 annual plan savings"
                  ],
                  bestFor: "Best for mom-owned businesses that want a professional website, CRM, reviews, unified inbox, and follow-up foundation in place.",
                  highlight: false
                },
                {
                  title: "Growth Special",
                  annual: "$1,970",
                  monthlyEq: "$197/month",
                  calloutHeadline: "About the Cost of One Spa Visit Each Month",
                  calloutBody: "For about the cost of one spa visit each month, your business gets AI-powered response tools that help answer questions, capture leads, follow up, and book appointments — even when you are with a client, with your family, or finally taking a break.",
                  firstYearAmount: "$2,970",
                  savingsTotal: "$6,000",
                  savingsRows: [
                    "$2,500 Starter Website included",
                    "$500 setup savings",
                    "$3,000 annual plan savings"
                  ],
                  bestFor: "Best for mom-owned businesses that want AI-powered response, missed-call text-back, AI Livechat, faster lead handling, and after-hours support.",
                  highlight: true
                }
              ].map((c) => /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: `relative rounded-3xl p-7 md:p-9 border flex flex-col ${c.highlight ? "border-2 border-[hsl(22_85%_60%)] bg-[linear-gradient(135deg,hsl(22_85%_60%/0.10),hsl(350_75%_80%/0.10))] shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.45)] md:scale-[1.02]" : "border-[hsl(30_55%_82%)] bg-white/85"}`,
                  children: [
                    c.highlight && /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg whitespace-nowrap", children: "MOST POPULAR" }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1293,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-[hsl(210_55%_12%)] mb-4", children: c.title }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1299,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("div", { className: "mb-2", children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "text-5xl md:text-6xl font-display font-black text-[hsl(22_85%_42%)] leading-none", children: c.annual }, void 0, false, {
                        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                        lineNumber: 1305,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("span", { className: "text-xl md:text-2xl font-bold text-[hsl(22_85%_42%)] ml-1", children: "/year" }, void 0, false, {
                        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                        lineNumber: 1308,
                        columnNumber: 21
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1304,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("div", { className: "mt-2 inline-flex self-start items-center px-3 py-1 rounded-full bg-[hsl(210_55%_14%/0.06)] border border-[hsl(210_55%_14%/0.12)] text-xs md:text-sm font-semibold text-[hsl(210_45%_25%)]", children: [
                      "Equivalent to ",
                      c.monthlyEq,
                      " with 2 months included"
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1312,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("div", { className: "relative mt-5 rounded-2xl overflow-hidden border-2 border-[hsl(22_85%_60%/0.5)] bg-[linear-gradient(135deg,hsl(30_85%_92%)_0%,hsl(350_75%_94%)_50%,hsl(22_85%_92%)_100%)] shadow-[0_15px_40px_-15px_hsl(20_60%_40%/0.3)]", children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-[linear-gradient(180deg,hsl(22_85%_55%),hsl(350_70%_60%))]" }, void 0, false, {
                        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                        lineNumber: 1318,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("div", { className: "relative p-5 md:p-6 pl-6 md:pl-7", children: [
                        /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold text-[hsl(22_85%_38%)] mb-2", children: "Put That in Perspective" }, void 0, false, {
                          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                          lineNumber: 1320,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDEV("h4", { className: "text-xl md:text-2xl font-display font-bold text-[hsl(210_55%_12%)] mb-2 leading-tight", children: c.calloutHeadline }, void 0, false, {
                          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                          lineNumber: 1323,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDEV("p", { className: "text-sm md:text-base text-[hsl(210_30%_22%)] leading-relaxed", children: c.calloutBody }, void 0, false, {
                          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                          lineNumber: 1326,
                          columnNumber: 23
                        }, void 0)
                      ] }, void 0, true, {
                        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                        lineNumber: 1319,
                        columnNumber: 21
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1317,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("div", { className: "mt-5 rounded-2xl border-2 border-[hsl(210_55%_14%)] bg-[hsl(210_55%_14%)] text-white p-5 md:p-6", children: [
                      /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold text-white/70 mb-2", children: "First-Year Investment" }, void 0, false, {
                        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                        lineNumber: 1334,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-3xl md:text-4xl font-display font-black leading-none", children: c.firstYearAmount }, void 0, false, {
                        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                        lineNumber: 1337,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-xs md:text-sm text-white/80", children: "Includes setup + annual plan" }, void 0, false, {
                        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                        lineNumber: 1340,
                        columnNumber: 21
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1333,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("div", { className: "mt-5 rounded-2xl bg-white/85 border border-[hsl(30_55%_85%)] p-5", children: [
                      /* @__PURE__ */ jsxDEV("p", { className: "text-2xl md:text-3xl font-display font-bold text-[hsl(210_55%_12%)]", children: [
                        c.savingsTotal,
                        " ",
                        /* @__PURE__ */ jsxDEV("span", { className: "text-sm md:text-base font-medium text-[hsl(210_25%_40%)]", children: "in total first-year savings" }, void 0, false, {
                          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                          lineNumber: 1349,
                          columnNumber: 23
                        }, void 0)
                      ] }, void 0, true, {
                        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                        lineNumber: 1347,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("ul", { className: "mt-3 space-y-2", children: c.savingsRows.map((r) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-sm text-[hsl(210_30%_25%)]", children: [
                        /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4 mt-0.5 text-[hsl(22_85%_50%)] shrink-0" }, void 0, false, {
                          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                          lineNumber: 1356,
                          columnNumber: 27
                        }, void 0),
                        /* @__PURE__ */ jsxDEV("span", { children: r }, void 0, false, {
                          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                          lineNumber: 1357,
                          columnNumber: 27
                        }, void 0)
                      ] }, r, true, {
                        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                        lineNumber: 1355,
                        columnNumber: 25
                      }, void 0)) }, void 0, false, {
                        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                        lineNumber: 1353,
                        columnNumber: 21
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1346,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("p", { className: "mt-5 text-sm md:text-base text-[hsl(210_30%_25%)] leading-relaxed", children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-[hsl(210_55%_14%)]", children: "Best for: " }, void 0, false, {
                        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                        lineNumber: 1365,
                        columnNumber: 21
                      }, void 0),
                      c.bestFor
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1364,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ jsxDEV(PrimaryCTA, { href: "#apply-form", label: "Apply for One of the 5 Spots →", full: true }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1371,
                      columnNumber: 21
                    }, void 0) }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1370,
                      columnNumber: 19
                    }, void 0)
                  ]
                },
                c.title,
                true,
                {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1284,
                  columnNumber: 17
                },
                void 0
              )) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1245,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-10 grid md:grid-cols-2 gap-4 max-w-6xl mx-auto", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "rounded-2xl border border-[hsl(30_55%_85%)] bg-white/70 p-5 text-sm md:text-base text-[hsl(210_30%_25%)] leading-relaxed", children: "The Complimentary Starter Website is included only when you enroll in either the Essentials Special or Growth Special annual plan. It is not available as a standalone website-only offer." }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1379,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "rounded-2xl border border-[hsl(30_55%_85%)] bg-white/70 p-5 text-sm md:text-base text-[hsl(210_30%_25%)] leading-relaxed", children: "The $1,000 Client Growth System Setup covers the configuration of the system behind your website — CRM, lead capture, pipeline setup, email and SMS follow-up, phone and calendar integration, review request automation, and hands-on launch support." }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1382,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1378,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-center text-sm md:text-base mt-8 text-[hsl(210_30%_25%)] italic max-w-3xl mx-auto", children: "This Mother’s Day Appreciation Offer is limited to 5 selected mom-owned businesses and will not be repeated after this campaign closes." }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1387,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mt-8", children: /* @__PURE__ */ jsxDEV(PrimaryCTA, { href: "#apply-form", label: "Apply for One of the 5 Spots →" }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1392,
                columnNumber: 15
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1391,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-center text-xs md:text-sm mt-6 text-[hsl(210_25%_40%)] max-w-2xl mx-auto", children: "Your investment may qualify as a business expense. Please consult your tax advisor." }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1396,
                columnNumber: 13
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1078,
              columnNumber: 11
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1071,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { id: "setup", className: "py-20 scroll-mt-20", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto rounded-2xl border border-border bg-card p-7 md:p-8", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display font-bold text-2xl md:text-3xl mb-2 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "What the Onboarding Setup Includes" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1406,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground mb-5", children: "The one-time setup fee covers system configuration — not website design. Your Complimentary Starter Website is included separately." }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1409,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "grid md:grid-cols-2 gap-3 mb-7", children: setupIncludes.map((s) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 text-sm", children: [
          /* @__PURE__ */ jsxDEV(s.icon, { className: "w-4 h-4 mt-0.5 text-primary shrink-0" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1415,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { children: s.text }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1416,
            columnNumber: 21
          }, void 0)
        ] }, s.text, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1414,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1412,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "font-semibold mb-3 text-base", children: "Core integrations may include:" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1421,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-2 mb-3", children: integrations.map((i) => /* @__PURE__ */ jsxDEV(
          "span",
          {
            className: "text-sm font-semibold px-3.5 py-2 rounded-full bg-background border-2 transition-all hover:scale-105",
            style: {
              borderColor: `${i.color}80`,
              color: i.color,
              boxShadow: `0 0 12px ${i.color}33`
            },
            children: i.name
          },
          i.name,
          false,
          {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1424,
            columnNumber: 19
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1422,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground italic", children: "Core integrations are configured based on what your business actually uses." }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1437,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1405,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1404,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1403,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "different", className: "py-20 scroll-mt-20", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 max-w-5xl", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "Compare" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1447,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "Why This Is Not Just Another Website Offer" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1450,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1446,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 mb-10 items-stretch", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "relative rounded-2xl border border-dashed border-border bg-background-alt p-8 opacity-90", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ jsxDEV(XCircle, { className: "w-5 h-5 text-muted-foreground/60" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1458,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1457,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl font-display font-bold text-muted-foreground mb-5", children: "Most basic website offers:" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1460,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2.5 text-sm text-muted-foreground/90", children: [
              "A website alone does not follow up with leads.",
              "A contact form alone does not organize opportunities.",
              "A phone number alone does not prevent missed calls.",
              "A happy customer alone does not guarantee a review.",
              "A CRM alone does not help unless it is set up properly."
            ].map((b) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxDEV(XCircle, { className: "w-4 h-4 mt-0.5 text-muted-foreground/60 shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1472,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { children: b }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1473,
                columnNumber: 23
              }, void 0)
            ] }, b, true, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1471,
              columnNumber: 21
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1463,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1456,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "relative rounded-2xl border-2 border-primary bg-card p-8 shadow-[0_30px_70px_-20px_hsl(22_85%_50%/0.4)] overflow-hidden", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 inset-x-0 h-1 bg-[linear-gradient(90deg,hsl(22_85%_60%),hsl(350_70%_72%),hsl(280_55%_72%))]" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1479,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1481,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1480,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl font-display font-bold mb-5", children: "This program:" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1483,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2.5 text-sm", children: [
              "Website + CRM",
              "Lead capture + follow-up automation",
              "Review automation",
              "AI-powered response tools",
              "Unified inbox",
              "Connected client growth system"
            ].map((b) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4 mt-0.5 text-primary shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1494,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { children: b }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1495,
                columnNumber: 23
              }, void 0)
            ] }, b, true, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1493,
              columnNumber: 21
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1484,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1478,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1455,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-10 max-w-2xl mx-auto text-center text-base md:text-lg text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-foreground font-semibold", children: "One connected system." }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1502,
            columnNumber: 15
          }, void 0),
          " ",
          "Set up for you. Ready to work the day it goes live."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1501,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1445,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1444,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "section",
        {
          id: "roi",
          className: "py-24 md:py-28 scroll-mt-20 relative overflow-hidden bg-[linear-gradient(180deg,hsl(35_55%_94%)_0%,hsl(20_50%_92%)_100%)]",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-24 right-10 w-80 h-80 rounded-full bg-[hsl(22_85%_70%/0.18)] blur-3xl pointer-events-none" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1513,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-24 left-10 w-80 h-80 rounded-full bg-[hsl(350_70%_80%/0.18)] blur-3xl pointer-events-none" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1514,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 max-w-7xl relative z-10", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-14 max-w-3xl mx-auto", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-[0.22em] mb-4 text-[hsl(210_55%_14%)]", children: "Return on Investment" }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1517,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 leading-tight text-[hsl(210_55%_14%)]", children: [
                  "One or Two Extra Clients Can",
                  " ",
                  /* @__PURE__ */ jsxDEV("span", { className: "bg-gradient-to-r from-[hsl(22_90%_58%)] via-[hsl(350_75%_62%)] to-[hsl(188_78%_48%)] bg-clip-text text-transparent", children: "Change the Math" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1522,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1520,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-[hsl(210_30%_25%)] text-base md:text-lg leading-relaxed", children: "For many local service businesses, one additional booked client can offset a meaningful part of the annual investment. The goal is simple: capture more opportunities, respond faster, and reduce the number of leads that quietly disappear." }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1526,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1516,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 lg:gap-8 mb-12", children: roiCards.map((c, i) => /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: "rounded-2xl border border-[hsl(30_55%_82%)] bg-white p-8 md:p-9 shadow-[0_20px_60px_-25px_hsl(20_60%_40%/0.25)] flex flex-col",
                  children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 rounded-2xl bg-[hsl(22_85%_60%/0.12)] border border-[hsl(22_85%_60%/0.3)] flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxDEV(c.icon, { className: "w-7 h-7 text-[hsl(22_85%_45%)]" }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1538,
                      columnNumber: 21
                    }, void 0) }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1537,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-bold text-[hsl(210_55%_14%)] mb-3 leading-snug", children: c.title }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1540,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-[hsl(210_30%_28%)] text-base leading-relaxed", children: c.body }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1543,
                      columnNumber: 19
                    }, void 0)
                  ]
                },
                i,
                true,
                {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1533,
                  columnNumber: 17
                },
                void 0
              )) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1531,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto rounded-3xl p-8 md:p-10 bg-[linear-gradient(135deg,hsl(210_55%_14%)_0%,hsl(210_50%_18%)_100%)] border border-[hsl(22_85%_60%/0.4)] shadow-[0_30px_80px_-30px_hsl(210_60%_10%/0.5)] text-center", children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold mb-4 leading-snug bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_60%)] bg-clip-text text-transparent", children: "The real value is not just more leads. It is fewer lost opportunities." }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1549,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-[hsl(0_0%_92%)] leading-relaxed max-w-3xl mx-auto", children: "When your website, CRM, AI Livechat, missed-call text-back, follow-up, reviews, and booking tools work together, your business has a better chance of turning interest into action." }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1552,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1548,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-[hsl(210_25%_35%)] text-center mt-8 max-w-3xl mx-auto leading-relaxed", children: "Results vary by business, offer, pricing, responsiveness, and market demand. GrowSmallBiz does not guarantee a specific number of clients or revenue." }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1557,
                columnNumber: 13
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1515,
              columnNumber: 11
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1509,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { id: "about", className: "py-20 scroll-mt-20 bg-background-alt", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "About GrowSmallBiz" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1567,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "Built by a Local Agency That Understands Small Business Growth Systems" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1570,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1566,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "rounded-3xl border border-border bg-card p-7 md:p-10 space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "GrowSmallBiz is a Danville-based digital marketing agency built for local service businesses that want more than a website." }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1575,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "We help small businesses connect the pieces that usually stay disconnected — website, CRM, lead capture, follow-up automation, reviews, AI Livechat, missed-call text-back, booking, and customer communication." }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1578,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "The goal is simple: help local business owners capture more opportunities, respond faster, save time, and turn more inquiries into booked clients." }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1581,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1574,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-8", children: /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "relative rounded-2xl p-8 md:p-10 transition-all duration-300 group",
            style: {
              backgroundColor: "hsl(215 40% 13%)",
              border: "1px solid hsla(25, 90%, 55%, 0.5)",
              boxShadow: "0 0 50px -10px hsla(25, 90%, 55%, 0.25)"
            },
            children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row items-center gap-8 md:gap-12", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 text-center", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "relative inline-block", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-orange-400 to-primary" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1599,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxDEV(
                    "img",
                    {
                      src: baseContactCTA.image,
                      alt: baseContactCTA.name,
                      width: 160,
                      height: 160,
                      loading: "lazy",
                      className: "w-full h-full object-cover"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1601,
                      columnNumber: 25
                    },
                    void 0
                  ) }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1600,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1598,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("h4", { className: "mt-5 text-lg font-display font-semibold text-foreground", children: baseContactCTA.name }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1611,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: baseContactCTA.role }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1612,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1597,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "flex-1 text-center md:text-left", children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Meet the Founder" }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1615,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-muted-foreground leading-relaxed", children: "Founded by Subrata Guha after 30+ years in enterprise technology and marketing systems, GrowSmallBiz brings practical growth infrastructure to small businesses without enterprise complexity." }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1618,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1614,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1596,
              columnNumber: 17
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1588,
            columnNumber: 15
          },
          void 0
        ) }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1587,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1565,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1564,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "guarantee", className: "py-16 md:py-20 scroll-mt-20", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto rounded-2xl border-2 border-primary/60 bg-card p-8 md:p-10 text-center shadow-[0_0_40px_hsl(22_85%_55%/0.25)]", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/15 border border-primary/40 mb-5", children: /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "w-7 h-7 text-primary" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1633,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1632,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display font-black uppercase tracking-tight text-3xl md:text-5xl mb-4 bg-gradient-to-r from-[hsl(22_90%_60%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "30 Days Money Back Guarantee" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1635,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-foreground max-w-2xl mx-auto leading-relaxed", children: [
          "If you're ",
          /* @__PURE__ */ jsxDEV("strong", { children: "not satisfied for any reason" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1639,
            columnNumber: 27
          }, void 0),
          " within the first 30 days, we'll refund your money — ",
          /* @__PURE__ */ jsxDEV("strong", { children: "no questions asked." }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1639,
            columnNumber: 125
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1638,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1631,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1630,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1629,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "section",
        {
          id: "faq",
          className: "py-24 md:py-28 scroll-mt-20 relative overflow-hidden bg-[linear-gradient(180deg,hsl(35_55%_94%)_0%,hsl(20_50%_92%)_100%)]",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-20 left-10 w-72 h-72 rounded-full bg-[hsl(350_70%_80%/0.22)] blur-3xl pointer-events-none" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1650,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-20 right-10 w-72 h-72 rounded-full bg-[hsl(280_50%_82%/0.22)] blur-3xl pointer-events-none" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1651,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 max-w-5xl relative z-10", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10 max-w-3xl mx-auto", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-[0.22em] mb-4 text-[hsl(210_55%_14%)]", children: "FAQ" }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1654,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-bold mb-4 leading-tight text-[hsl(210_55%_14%)]", children: [
                  "Questions Before",
                  " ",
                  /* @__PURE__ */ jsxDEV("span", { className: "bg-gradient-to-r from-[hsl(22_90%_58%)] via-[hsl(350_75%_62%)] to-[hsl(188_78%_48%)] bg-clip-text text-transparent", children: "You Apply" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1659,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1657,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-[hsl(210_30%_25%)] text-base md:text-lg leading-relaxed", children: "A few important details about the offer, the website, the setup, and what happens after you apply." }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1663,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1653,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "rounded-3xl border border-[hsl(30_55%_82%)] bg-white/85 backdrop-blur-sm shadow-[0_30px_80px_-30px_hsl(20_60%_40%/0.25)] p-4 md:p-8", children: /* @__PURE__ */ jsxDEV(Accordion, { type: "single", collapsible: true, className: "w-full", children: faqs.map((f, i) => /* @__PURE__ */ jsxDEV(
                AccordionItem,
                {
                  value: `item-${i}`,
                  className: "border-[hsl(30_45%_82%)] last:border-b-0",
                  children: [
                    /* @__PURE__ */ jsxDEV(AccordionTrigger, { className: "text-left font-display font-semibold text-base md:text-lg text-[hsl(210_55%_14%)] hover:text-[hsl(22_85%_45%)] py-6 px-2 md:px-3", children: f.q }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1676,
                      columnNumber: 21
                    }, void 0),
                    /* @__PURE__ */ jsxDEV(AccordionContent, { className: "text-[hsl(210_30%_28%)] px-2 md:px-3 pb-6 leading-relaxed text-base", children: f.a }, void 0, false, {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1679,
                      columnNumber: 21
                    }, void 0)
                  ]
                },
                f.q,
                true,
                {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1671,
                  columnNumber: 19
                },
                void 0
              )) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1669,
                columnNumber: 15
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1668,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto mt-10 rounded-2xl border border-[hsl(22_85%_60%/0.35)] bg-white/75 backdrop-blur-sm p-6 md:p-7 text-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-[hsl(210_30%_22%)] text-base md:text-lg leading-relaxed", children: [
                /* @__PURE__ */ jsxDEV("strong", { className: "text-[hsl(210_55%_14%)]", children: "Still have questions?" }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1689,
                  columnNumber: 17
                }, void 0),
                " Apply first. If your business looks like a fit, we’ll review the details with you before you commit."
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1688,
                columnNumber: 15
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1687,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxDEV(PrimaryCTA, { href: "#apply-form", label: "Apply for One of the 5 Spots →" }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1694,
                columnNumber: 15
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1693,
                columnNumber: 13
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1652,
              columnNumber: 11
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1646,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "section",
        {
          id: "apply",
          className: "relative py-20 scroll-mt-20 overflow-hidden bg-[linear-gradient(135deg,hsl(210_55%_10%)_0%,hsl(210_50%_14%)_50%,hsl(20_50%_20%)_100%)]",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[hsl(22_85%_60%/0.18)] blur-3xl pointer-events-none" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1704,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[hsl(280_60%_70%/0.14)] blur-3xl pointer-events-none" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1705,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 max-w-3xl relative z-10 text-center", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[linear-gradient(135deg,hsl(22_85%_60%/0.2),hsl(350_70%_72%/0.2))] border border-[hsl(22_85%_60%/0.5)] text-foreground text-sm md:text-base font-bold mb-6 shadow-[0_0_30px_hsl(22_85%_50%/0.25)]", children: [
                /* @__PURE__ */ jsxDEV(Clock, { className: "w-4 h-4 text-primary" }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1708,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "Extended Through May 31, 2026 — or Until 5 Spots Are Filled" }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1709,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1707,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-5 leading-tight bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)] bg-clip-text text-transparent", children: "5 Spots. This Offer Will Not Be Repeated." }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1713,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground mb-8", children: "If you are a mom-owned local service business and you are ready for a professional website, faster follow-up, fewer missed opportunities, and more time back in your day, apply for one of the 5 spots in this Mother’s Day Appreciation Offer." }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1716,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl border border-[hsl(22_85%_60%/0.25)] bg-card/70 backdrop-blur p-6 md:p-8 mb-8 text-left shadow-2xl", children: /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2.5 text-sm", children: [
                "Complimentary Starter Website — $2,500 value (annual enrollment only)",
                "Lead Automation System Included With Your Annual Plan",
                "Client Growth System Setup reduced to $1,000",
                "Essentials Special: $970/year ($97/month equivalent)",
                "Growth Special: $1,970/year ($197/month equivalent)",
                "Annual plan includes 2 months free — pay for 10 months, get 12 months",
                "Extended through May 31, 2026 — or until 5 spots are filled"
              ].map((s) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1732,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { children: s }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1733,
                  columnNumber: 21
                }, void 0)
              ] }, s, true, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1731,
                columnNumber: 19
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1721,
                columnNumber: 15
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1720,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxDEV(PrimaryCTA, { href: "#apply-form", label: "Apply for One of the 5 Spots →" }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1740,
                columnNumber: 15
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1739,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: "No credit card required. If your business is a fit, we’ll review the offer, confirm the right plan, and send the payment link to reserve your spot." }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1742,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground italic mt-3", children: "Once these 5 spots are filled, this Mother’s Day Appreciation Offer will close." }, void 0, false, {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1745,
                columnNumber: 13
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1706,
              columnNumber: 11
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1700,
          columnNumber: 9
        },
        void 0
      ),
      demoOpen && /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 md:p-6",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": "Sample Starter Website Preview",
          onClick: () => setDemoOpen(false),
          children: /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "relative w-full max-w-6xl h-[90vh] bg-background rounded-2xl overflow-hidden border border-border shadow-2xl",
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 inset-x-0 h-12 bg-card border-b border-border flex items-center justify-between px-4 z-10", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold text-foreground truncate", children: "Sample Starter Website Preview · medspa-demo.growsmallbiz.io" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1765,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      type: "button",
                      onClick: () => setDemoOpen(false),
                      className: "text-sm font-bold text-muted-foreground hover:text-foreground px-3 py-1 rounded hover:bg-background",
                      "aria-label": "Close preview",
                      children: "✕ Close"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                      lineNumber: 1768,
                      columnNumber: 17
                    },
                    void 0
                  )
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1764,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV(
                  "iframe",
                  {
                    src: "https://medspa-demo.growsmallbiz.io/",
                    title: "Sample Starter Website Preview",
                    className: "absolute inset-0 w-full h-full pt-12",
                    loading: "lazy"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1777,
                    columnNumber: 15
                  },
                  void 0
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1760,
              columnNumber: 13
            },
            void 0
          )
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1753,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
      lineNumber: 411,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { id: "apply-form", children: /* @__PURE__ */ jsxDEV("section", { className: "py-16 md:py-24 relative overflow-hidden bg-[linear-gradient(135deg,hsl(210_55%_8%)_0%,hsl(210_50%_12%)_55%,hsl(20_45%_18%)_100%)]", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,210,190,0.16),transparent_55%)] pointer-events-none" }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1791,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[hsl(18_85%_65%/0.18)] blur-3xl pointer-events-none" }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1792,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[hsl(280_60%_70%/0.14)] blur-3xl pointer-events-none" }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1793,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto relative rounded-2xl shadow-[0_0_30px_hsl(22_85%_60%/0.35),0_0_60px_hsl(22_85%_60%/0.2)]", style: { border: "2px solid hsl(22 85% 60% / 0.6)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "relative rounded-2xl p-8", style: { backgroundColor: "#191321" }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-3 text-sm", children: "No Credit Card Required To Apply" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1798,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(22_90%_72%)] via-[hsl(350_75%_82%)] to-[hsl(188_78%_55%)]", children: "Apply for One of the 5 Spots" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1799,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-white/80 text-lg", children: "Apply for one of the 5 spots in this Mother’s Day Appreciation Offer. If your business is a fit, we’ll review the offer, confirm the right plan, and send the payment link to reserve your spot." }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1802,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1797,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "iframe",
          {
            src: buildUrl("https://api.leadconnectorhq.com/widget/survey/FGhQ2ZPenaK8C06xPnTa", "mothers-day-survey"),
            style: { border: "none", width: "100%", minHeight: "1000px", height: "1000px" },
            scrolling: "no",
            id: "FGhQ2ZPenaK8C06xPnTa",
            title: "survey"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1807,
            columnNumber: 17
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("script", { src: "https://link.msgsndr.com/js/form_embed.js" }, void 0, false, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1814,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1796,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1795,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1794,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
      lineNumber: 1790,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
      lineNumber: 1789,
      columnNumber: 13
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "section",
      {
        className: "py-16 md:py-20 relative overflow-hidden bg-[linear-gradient(180deg,hsl(28_55%_96%)_0%,hsl(20_50%_94%)_100%)]",
        "aria-labelledby": "other-services-heading",
        children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center mb-10", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-[hsl(22_85%_45%)] font-semibold uppercase tracking-wider text-sm mb-3", children: "Our Complete Local Dominance Services" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1828,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              "h2",
              {
                id: "other-services-heading",
                className: "text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-4 text-[hsl(210_55%_15%)]",
                children: [
                  "Website & Marketing Automation Are the",
                  " ",
                  /* @__PURE__ */ jsxDEV("span", { className: "bg-gradient-to-r from-[hsl(22_90%_55%)] via-[hsl(350_75%_60%)] to-[hsl(188_78%_42%)] bg-clip-text text-transparent", children: "Foundation" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1836,
                    columnNumber: 15
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1831,
                columnNumber: 13
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("p", { className: "text-base text-[hsl(210_30%_30%)] leading-relaxed", children: "Your Mother's Day offer covers the foundation — website, marketing automation, and AI receptionist. When you're ready to dominate your local market, we also handle the full suite of AI SEO, local search, and paid advertising." }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1840,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1827,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: [
            {
              icon: Globe,
              title: "Website Design",
              desc: "Conversion-focused websites built for speed, SEO, and lead capture.",
              included: true
            },
            {
              icon: Database,
              title: "Marketing Automation",
              desc: "CRM, missed-call text-back, follow-up workflows, reviews, and booking.",
              included: true
            },
            {
              icon: Bot,
              title: "AI Receptionist",
              desc: "AI voice and chat agents that answer, qualify, and book leads 24/7.",
              included: true,
              growthOnly: true
            },
            {
              icon: Sparkles,
              title: "Managed AI SEO",
              desc: "Full-service SEO program built for the AI search era."
            },
            {
              icon: TrendingUp,
              title: "AI Search Optimization",
              desc: "Get cited inside ChatGPT, Perplexity, Gemini, and Google AI Overviews."
            },
            {
              icon: MessageSquare,
              title: "Answer Engine Optimization (AEO)",
              desc: "Structured content that answers buyer questions and earns featured placements."
            },
            {
              icon: Zap,
              title: "Generative Engine Optimization (GEO)",
              desc: "Get your business surfaced inside generative AI answers."
            },
            {
              icon: Users,
              title: "Local SEO",
              desc: "Rank in the Google Map Pack and win nearby high-intent customers."
            },
            {
              icon: ShieldCheck,
              title: "Authority Building",
              desc: "Brand signals, mentions, and trust that search engines and AI models reward."
            },
            {
              icon: Star,
              title: "Link Building",
              desc: "Editorial, relevant backlinks that strengthen domain authority."
            },
            {
              icon: CheckCircle2,
              title: "Technical SEO",
              desc: "Site speed, crawlability, indexing, schema, and Core Web Vitals."
            },
            {
              icon: Mail,
              title: "On-Page SEO",
              desc: "Keyword-mapped pages and on-page optimization that moves rankings."
            },
            {
              icon: Target,
              title: "AI Lead Generation",
              desc: "AI-powered prospecting and lead capture across multiple channels."
            },
            {
              icon: PhoneCall,
              title: "Google Local Services Ads",
              desc: "Google Guaranteed leads at the top of search — pay per qualified contact."
            },
            {
              icon: Smartphone,
              title: "Google Ads & Facebook Ads",
              desc: "Search and social campaigns built for local service businesses."
            }
          ].map(({ icon: Icon, title, desc, included, growthOnly }) => /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: `group relative rounded-xl p-4 border transition-all duration-300 hover:-translate-y-1 ${included ? "bg-gradient-to-br from-[hsl(22_90%_96%)] to-[hsl(350_75%_97%)] border-[hsl(22_85%_60%/0.55)] shadow-[0_6px_24px_-10px_hsl(22_85%_50%/0.35)] hover:shadow-[0_14px_40px_-12px_hsl(22_85%_50%/0.45)]" : "bg-white border-[hsl(20_30%_88%)] shadow-[0_4px_20px_-8px_hsl(22_60%_50%/0.15)] hover:shadow-[0_12px_40px_-12px_hsl(22_85%_50%/0.35)] hover:border-[hsl(22_85%_60%/0.5)]"}`,
              children: [
                included && /* @__PURE__ */ jsxDEV("span", { className: "absolute -top-2 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-[hsl(22_85%_55%)] to-[hsl(350_75%_60%)] text-white text-[10px] font-bold uppercase tracking-wide shadow-sm", children: [
                  /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-3 h-3" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1937,
                    columnNumber: 21
                  }, void 0),
                  " ",
                  growthOnly ? "Growth Plan Only" : "Included"
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1936,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2.5 mb-2", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "w-9 h-9 rounded-lg bg-gradient-to-br from-[hsl(22_90%_92%)] to-[hsl(350_75%_94%)] flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV(Icon, { className: "w-4 h-4 text-[hsl(22_85%_45%)]" }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1942,
                    columnNumber: 21
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1941,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-bold text-[hsl(210_55%_15%)] leading-tight", children: title }, void 0, false, {
                    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                    lineNumber: 1944,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1940,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-[hsl(210_25%_35%)] leading-relaxed", children: desc }, void 0, false, {
                  fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                  lineNumber: 1948,
                  columnNumber: 17
                }, void 0)
              ]
            },
            title,
            true,
            {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1927,
              columnNumber: 15
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1845,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1826,
          columnNumber: 9
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1822,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      CardCTA,
      {
        title: "Ready to Dominate Your Local Market?",
        description: "Your website and automation are just the beginning. Let's build the full growth engine.",
        buttonText: "Schedule Strategy Call",
        buttonHref: strategySessionUrl,
        accentWords: ["Dominate Your Local Market"],
        sectionClassName: "py-16 md:py-20",
        showPhoneButton: false
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1957,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("footer", { className: "bg-card border-t border-border", role: "contentinfo", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-10 mb-10", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: growsmallbizLogo,
                alt: "GrowSmallBiz logo",
                width: 48,
                height: 48,
                className: "h-12 w-auto"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
                lineNumber: 1974,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-bold font-display text-foreground", children: "GrowSmallBiz" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1981,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1973,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Mother’s Day Appreciation Offer for 5 mom-owned local service businesses." }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1985,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1972,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "font-display font-semibold text-foreground mb-4 border-b-2 border-primary/40 pb-2 inline-block", children: "On This Page" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1992,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("ul", { className: "grid grid-cols-2 gap-y-2 gap-x-4", children: sectionNav.map((s) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: `#${s.id}`,
              className: "text-sm text-muted-foreground hover:text-primary transition-colors",
              children: s.label
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 1998,
              columnNumber: 21
            },
            void 0
          ) }, s.id, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1997,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 1995,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 1991,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "font-display font-semibold text-foreground mb-4 border-b-2 border-primary/40 pb-2 inline-block", children: "Company" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 2011,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#apply-form", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "Apply for a Spot" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 2016,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 2015,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/terms-of-service/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "Terms & Conditions" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 2021,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 2020,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/privacy-policy/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "Privacy Policy" }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 2026,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
              lineNumber: 2025,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 2014,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
          lineNumber: 2010,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 1970,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "pt-6 border-t border-border text-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " GrowSmallBiz. All rights reserved."
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 2035,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 2034,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
      lineNumber: 1969,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
      lineNumber: 1968,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: `md:hidden fixed bottom-0 inset-x-0 z-40 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-background/95 backdrop-blur border-t border-border transition-opacity duration-200 ${formInView ? "opacity-0 pointer-events-none" : "opacity-100"}`, children: /* @__PURE__ */ jsxDEV(
      "a",
      {
        href: "#apply-form",
        className: "flex items-center justify-center gap-2 w-[calc(100%-4.5rem)] px-4 py-3 rounded-md bg-gradient-to-r from-[hsl(22_88%_65%)] via-[hsl(280_30%_60%)] to-[hsl(200_70%_60%)] text-[hsl(220_40%_15%)] font-bold shadow-[0_10px_30px_-8px_hsl(22_85%_55%/0.45)] text-sm",
        children: [
          PRIMARY_CTA_LABEL,
          " ",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
            lineNumber: 2048,
            columnNumber: 31
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
        lineNumber: 2044,
        columnNumber: 9
      },
      void 0
    ) }, void 0, false, {
      fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
      lineNumber: 2043,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/MothersDayCohort.tsx",
    lineNumber: 356,
    columnNumber: 5
  }, void 0);
};
export {
  MothersDayCohort as default
};
