import { j as jsxDEV, c as cn } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { S as ServiceJsonLd } from "./ServiceJsonLd-BLh2oIn0.js";
import { H as Header } from "./Header-DmWea8pt.js";
import { F as Footer } from "./Footer-C67l1NbO.js";
import { B as Button } from "./button-Co-CyCVS.js";
import { FAQSection } from "./FAQSection-nzzIZwy_.js";
import { AnimatedStatCard } from "./AnimatedStatsSection-BTCPrhtT.js";
import * as React from "react";
import { useState, useMemo } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { Calculator, RotateCcw, Wallet, PiggyBank, TrendingUp, Phone, Info, PhoneOff, PhoneIncoming, Bot, ArrowRight, CheckCircle, Users, Zap, MessageSquare, Globe, Headphones, Smartphone, Facebook, Instagram, MapPin, Building2, Clock, Calendar, Shield, Wrench, Stethoscope, Scale, Home } from "lucide-react";
import { u as useUtm } from "./use-utm-X_toIThi.js";
import { ConsultationFormSection } from "./ConsultationFormSection-XatlJMLz.js";
import { WhyChooseSection } from "./WhyChooseSection-CylwFt5k.js";
import { b as baseContactCTA } from "./contactCTA-DlNQ95Kc.js";
import { C as CardCTA } from "./CardCTA-_OitSbFr.js";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "react-router-dom";
import "./growsmallbiz-logo-bLUzBkSC.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./accordion-TqW6W-yi.js";
import "@radix-ui/react-accordion";
const Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  SliderPrimitive.Root,
  {
    ref,
    className: cn("relative flex w-full touch-none select-none items-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV(SliderPrimitive.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ jsxDEV(SliderPrimitive.Range, { className: "absolute h-full bg-primary" }, void 0, false, {
        fileName: "/dev-server/src/components/ui/slider.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/ui/slider.tsx",
        lineNumber: 15,
        columnNumber: 5
      }, void 0),
      /* @__PURE__ */ jsxDEV(SliderPrimitive.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" }, void 0, false, {
        fileName: "/dev-server/src/components/ui/slider.tsx",
        lineNumber: 18,
        columnNumber: 5
      }, void 0)
    ]
  },
  void 0,
  true,
  {
    fileName: "/dev-server/src/components/ui/slider.tsx",
    lineNumber: 10,
    columnNumber: 3
  },
  void 0
));
Slider.displayName = SliderPrimitive.Root.displayName;
const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsxDEV(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/ui/switch.tsx",
        lineNumber: 18,
        columnNumber: 5
      },
      void 0
    )
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/switch.tsx",
    lineNumber: 10,
    columnNumber: 3
  },
  void 0
));
Switch.displayName = SwitchPrimitives.Root.displayName;
const PRIMARY_CTA_URL$1 = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const HUMAN_RECOVERY_OF_MISSED = 0.5;
const AI_RECOVERY_OF_MISSED = 0.95;
const fmtMoney = (n) => n.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});
const MoneyCard = ({
  title,
  subtitle,
  monthly,
  annual,
  monthlyLabel = "Per month",
  annualLabel = "Per year",
  variant,
  icon: Icon
}) => {
  const styles = {
    cost: {
      border: "border-amber-500/30",
      bg: "bg-amber-500/5",
      accent: "text-amber-400",
      iconBg: "bg-amber-500/15 text-amber-400",
      sign: "−"
    },
    savings: {
      border: "border-emerald-500/40",
      bg: "bg-emerald-500/5",
      accent: "text-emerald-400",
      iconBg: "bg-emerald-500/15 text-emerald-400",
      sign: "+"
    }
  }[variant];
  return /* @__PURE__ */ jsxDEV("div", { className: `relative rounded-2xl border ${styles.border} ${styles.bg} p-6 flex flex-col h-full`, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-5", children: [
      /* @__PURE__ */ jsxDEV("div", { className: `w-10 h-10 rounded-lg flex items-center justify-center ${styles.iconBg}`, children: /* @__PURE__ */ jsxDEV(Icon, { className: "w-5 h-5" }, void 0, false, {
        fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "text-base font-semibold text-white leading-tight", children: title }, void 0, false, {
          fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-400", children: subtitle }, void 0, false, {
          fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "flex-1 space-y-4", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs uppercase tracking-wider text-slate-500 mb-1", children: monthlyLabel }, void 0, false, {
          fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: `text-3xl md:text-4xl font-display font-bold ${styles.accent} leading-none`, children: [
          styles.sign,
          fmtMoney(monthly),
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-slate-400 font-normal ml-1", children: "/mo" }, void 0, false, {
            fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "pt-3 border-t border-white/10", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs uppercase tracking-wider text-slate-500 mb-1", children: annualLabel }, void 0, false, {
          fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: `text-2xl md:text-3xl font-display font-bold ${styles.accent} leading-none`, children: [
          styles.sign,
          fmtMoney(annual),
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-slate-400 font-normal ml-1", children: "/yr" }, void 0, false, {
            fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
            lineNumber: 86,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, void 0);
};
const SavingsCalculatorSection = () => {
  const { buildUrl } = useUtm();
  const DEFAULTS = {
    missedCallsPerMonth: 60,
    avgValue: 500,
    conversionRate: 25,
    hasHuman: false,
    humanCost: 3500,
    aiCost: 399
  };
  const [missedCallsPerMonth, setMissedCallsPerMonth] = useState(DEFAULTS.missedCallsPerMonth);
  const [avgValue, setAvgValue] = useState(DEFAULTS.avgValue);
  const [conversionRate, setConversionRate] = useState(DEFAULTS.conversionRate);
  const [hasHuman, setHasHuman] = useState(DEFAULTS.hasHuman);
  const [humanCost, setHumanCost] = useState(DEFAULTS.humanCost);
  const [aiCost, setAiCost] = useState(DEFAULTS.aiCost);
  const resetToDefaults = () => {
    setMissedCallsPerMonth(DEFAULTS.missedCallsPerMonth);
    setAvgValue(DEFAULTS.avgValue);
    setConversionRate(DEFAULTS.conversionRate);
    setHasHuman(DEFAULTS.hasHuman);
    setHumanCost(DEFAULTS.humanCost);
    setAiCost(DEFAULTS.aiCost);
  };
  const results = useMemo(() => {
    const lostLeadsCurrent = missedCallsPerMonth * (conversionRate / 100);
    const revenueAtRisk = lostLeadsCurrent * avgValue;
    let baselineCost = 0;
    let baselineMissed = missedCallsPerMonth;
    let baselineRevenueLost = revenueAtRisk;
    if (hasHuman) {
      baselineCost = humanCost;
      baselineMissed = missedCallsPerMonth * (1 - HUMAN_RECOVERY_OF_MISSED);
      baselineRevenueLost = revenueAtRisk * (1 - HUMAN_RECOVERY_OF_MISSED);
    }
    const aiMissed = missedCallsPerMonth * (1 - AI_RECOVERY_OF_MISSED);
    const aiRevenueLost = revenueAtRisk * (1 - AI_RECOVERY_OF_MISSED);
    const baselineNet = -(baselineRevenueLost + baselineCost);
    const aiNet = -(aiRevenueLost + aiCost);
    const aiAdvantage = aiNet - baselineNet;
    return {
      revenueAtRisk,
      baselineCost,
      baselineMissed,
      baselineRevenueLost,
      baselineNet,
      aiMissed,
      aiRevenueLost,
      aiNet,
      aiAdvantage
    };
  }, [missedCallsPerMonth, avgValue, conversionRate, hasHuman, humanCost, aiCost]);
  const ctaUrl = buildUrl(PRIMARY_CTA_URL$1, "savings-calculator");
  return /* @__PURE__ */ jsxDEV("div", { className: "mt-16 max-w-6xl mx-auto animate-fade-up", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-8", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-bold bg-gradient-heading bg-clip-text text-transparent", children: "Is an AI Receptionist Right for Your Small Business?" }, void 0, false, {
      fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
      lineNumber: 169,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
      lineNumber: 168,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-[#0f1f33]/80 border border-primary/20 rounded-3xl p-6 md:p-10 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsxDEV(Calculator, { className: "w-5 h-5 text-primary" }, void 0, false, {
          fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
          lineNumber: 175,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium text-sm uppercase tracking-wider", children: "Interactive Calculator" }, void 0, false, {
          fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
          lineNumber: 176,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
        lineNumber: 174,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-display font-bold text-center text-white mb-2", children: "Calculate Your Missed-Revenue Opportunity" }, void 0, false, {
        fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-center text-slate-400 mb-10 max-w-2xl mx-auto", children: "Drag the sliders to match your business. The math updates in real time." }, void 0, false, {
        fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-8 lg:gap-12", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-7", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between gap-4 -mb-3", children: [
            /* @__PURE__ */ jsxDEV("h4", { className: "text-base md:text-lg font-display font-semibold text-primary", children: "Adjust the sliders to match your business scenario" }, void 0, false, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 189,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "sm",
                onClick: resetToDefaults,
                className: "text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 h-8 px-2.5 text-xs",
                children: [
                  /* @__PURE__ */ jsxDEV(RotateCcw, { className: "w-3.5 h-3.5 mr-1.5" }, void 0, false, {
                    fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                    lineNumber: 199,
                    columnNumber: 17
                  }, void 0),
                  "Reset to defaults"
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 192,
                columnNumber: 15
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
            lineNumber: 188,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-baseline mb-3", children: [
              /* @__PURE__ */ jsxDEV("label", { className: "text-sm font-medium text-white", children: "Missed calls per month" }, void 0, false, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 206,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-display font-bold text-primary", children: missedCallsPerMonth }, void 0, false, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 207,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 205,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              Slider,
              {
                value: [missedCallsPerMonth],
                onValueChange: (v) => setMissedCallsPerMonth(v[0]),
                min: 5,
                max: 500,
                step: 5,
                "aria-label": "Missed calls per month"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 209,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-500 mt-2 leading-relaxed", children: "Most owners underestimate this. Industry research shows 40–60% of inbound calls go unanswered. No exact number? Estimate ~30% of your total monthly call volume." }, void 0, false, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 217,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
            lineNumber: 204,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-baseline mb-3", children: [
              /* @__PURE__ */ jsxDEV("label", { className: "text-sm font-medium text-white", children: "Average value per booked customer" }, void 0, false, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 225,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-display font-bold text-primary", children: fmtMoney(avgValue) }, void 0, false, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 226,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 224,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              Slider,
              {
                value: [avgValue],
                onValueChange: (v) => setAvgValue(v[0]),
                min: 50,
                max: 5e3,
                step: 25,
                "aria-label": "Average value per booked customer"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 228,
                columnNumber: 15
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
            lineNumber: 223,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-baseline mb-3", children: [
              /* @__PURE__ */ jsxDEV("label", { className: "text-sm font-medium text-white", children: "Lead-to-customer conversion rate" }, void 0, false, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 241,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-display font-bold text-primary", children: [
                conversionRate,
                "%"
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 242,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 240,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              Slider,
              {
                value: [conversionRate],
                onValueChange: (v) => setConversionRate(v[0]),
                min: 1,
                max: 60,
                step: 1,
                "aria-label": "Lead-to-customer conversion rate"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 244,
                columnNumber: 15
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
            lineNumber: 239,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-baseline mb-3", children: [
              /* @__PURE__ */ jsxDEV("label", { className: "text-sm font-medium text-white", children: "AI Receptionist cost / month" }, void 0, false, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 257,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-display font-bold text-primary", children: fmtMoney(aiCost) }, void 0, false, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 258,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 256,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              Slider,
              {
                value: [aiCost],
                onValueChange: (v) => setAiCost(v[0]),
                min: 299,
                max: 499,
                step: 10,
                "aria-label": "AI Receptionist monthly cost"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 260,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-500 mt-1", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-amber-400/90 font-medium", children: "Illustrative only" }, void 0, false, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 269,
                columnNumber: 17
              }, void 0),
              " — typical plan range. Actual cost varies by implementation, call volume, and integrations."
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 268,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-500 mt-2 leading-relaxed", children: [
              "Note: AI answers ~95% of missed calls 24/7, but recovered callers still convert at ",
              /* @__PURE__ */ jsxDEV("strong", { className: "text-slate-300", children: [
                "your normal ",
                conversionRate,
                "% rate"
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 272,
                columnNumber: 100
              }, void 0),
              " set above — not 100%. The math already factors this in."
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 271,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
            lineNumber: 255,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "border-t border-white/10 pt-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("label", { htmlFor: "has-human", className: "text-sm font-medium text-white", children: "I currently employ a human receptionist" }, void 0, false, {
                  fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                  lineNumber: 280,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-500 mt-0.5", children: "Adjusts the baseline comparison" }, void 0, false, {
                  fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                  lineNumber: 283,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 279,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV(Switch, { id: "has-human", checked: hasHuman, onCheckedChange: setHasHuman }, void 0, false, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 285,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 278,
              columnNumber: 15
            }, void 0),
            hasHuman && /* @__PURE__ */ jsxDEV("div", { className: "mt-4 animate-fade-up", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-baseline mb-3", children: [
                /* @__PURE__ */ jsxDEV("label", { className: "text-sm font-medium text-white", children: "Human receptionist cost / month" }, void 0, false, {
                  fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                  lineNumber: 291,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-display font-bold text-primary", children: fmtMoney(humanCost) }, void 0, false, {
                  fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                  lineNumber: 292,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 290,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                Slider,
                {
                  value: [humanCost],
                  onValueChange: (v) => setHumanCost(v[0]),
                  min: 2500,
                  max: 6e3,
                  step: 100,
                  "aria-label": "Human receptionist monthly cost"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                  lineNumber: 294,
                  columnNumber: 19
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-500 mt-1", children: "Fully-loaded: wages + payroll tax + benefits. One FT receptionist, ~40 hrs/week. A human still misses ~50% of currently-missed calls (after-hours, lunch, sick days, simultaneous calls)." }, void 0, false, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 302,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 289,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
            lineNumber: 277,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
          lineNumber: 187,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-5", "aria-live": "polite", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxDEV(
              MoneyCard,
              {
                title: "Extra cost of AI Receptionist",
                subtitle: hasHuman ? "On top of your current receptionist" : "New monthly investment",
                monthly: Math.max(0, aiCost - results.baselineCost),
                annual: Math.max(0, (aiCost - results.baselineCost) * 12),
                variant: "cost",
                icon: Wallet
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 314,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              MoneyCard,
              {
                title: "Revenue you recover",
                subtitle: hasHuman ? "Calls your human still misses" : "Calls that go to voicemail today",
                monthly: Math.max(0, results.baselineRevenueLost - results.aiRevenueLost),
                annual: Math.max(0, (results.baselineRevenueLost - results.aiRevenueLost) * 12),
                variant: "savings",
                icon: PiggyBank
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 322,
                columnNumber: 15
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
            lineNumber: 313,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "text-center bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/30 rounded-2xl p-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-2 text-slate-300 text-sm mb-3", children: [
              /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 335,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { children: [
                "Net gain ",
                hasHuman ? "vs. your current setup" : "with AI Receptionist"
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 336,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 334,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-5xl md:text-6xl font-display font-bold bg-gradient-heading bg-clip-text text-transparent leading-none", children: [
              results.aiAdvantage * 12 >= 0 ? "+" : "",
              fmtMoney(results.aiAdvantage * 12),
              /* @__PURE__ */ jsxDEV("span", { className: "text-2xl text-slate-400 font-normal", children: "/yr" }, void 0, false, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 340,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 338,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-400 mt-3", children: [
              "≈ ",
              /* @__PURE__ */ jsxDEV("span", { className: "text-white font-semibold", children: [
                results.aiAdvantage >= 0 ? "+" : "",
                fmtMoney(results.aiAdvantage),
                "/month"
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 343,
                columnNumber: 19
              }, void 0),
              " in your pocket"
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 342,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
            lineNumber: 333,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-3 pt-2", children: [
            /* @__PURE__ */ jsxDEV(Button, { size: "lg", asChild: true, className: "flex-1", children: /* @__PURE__ */ jsxDEV("a", { href: ctaUrl, target: "_blank", rel: "noopener noreferrer", children: "Get this for my business" }, void 0, false, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 350,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 349,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(Button, { variant: "outline", size: "lg", asChild: true, className: "flex-1", children: /* @__PURE__ */ jsxDEV("a", { href: "tel:+19258863724", children: [
              /* @__PURE__ */ jsxDEV(Phone, { className: "w-4 h-4 mr-2" }, void 0, false, {
                fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
                lineNumber: 356,
                columnNumber: 19
              }, void 0),
              " Call (925) 886-3724"
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 355,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 354,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
            lineNumber: 348,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-center text-slate-500", children: "No credit card. Free strategy call." }, void 0, false, {
            fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
            lineNumber: 360,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
          lineNumber: 311,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-10 pt-6 border-t border-white/10", children: /* @__PURE__ */ jsxDEV("details", { className: "group", children: [
        /* @__PURE__ */ jsxDEV("summary", { className: "flex items-center gap-2 text-sm text-slate-400 hover:text-white cursor-pointer list-none", children: [
          /* @__PURE__ */ jsxDEV(Info, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
            lineNumber: 368,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "underline decoration-dotted underline-offset-4", children: "Methodology & sources" }, void 0, false, {
            fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
            lineNumber: 369,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
          lineNumber: 367,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-4 text-xs text-slate-400 space-y-2 leading-relaxed", children: [
          /* @__PURE__ */ jsxDEV("p", { children: [
            /* @__PURE__ */ jsxDEV("strong", { className: "text-slate-300", children: "Recovery vs. conversion:" }, void 0, false, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 375,
              columnNumber: 17
            }, void 0),
            ' "Recovery" means the call is ',
            /* @__PURE__ */ jsxDEV("em", { children: "answered" }, void 0, false, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 375,
              columnNumber: 115
            }, void 0),
            ". AI answers ~95% of currently-missed calls; a single FT human recovers ~50% (still misses after-hours, lunch, sick days, simultaneous calls). Answered callers then convert to paying customers at ",
            /* @__PURE__ */ jsxDEV("em", { children: "your normal lead-to-customer rate" }, void 0, false, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 375,
              columnNumber: 328
            }, void 0),
            " (the slider above) — not 100%. Revenue numbers are calculated as ",
            /* @__PURE__ */ jsxDEV("code", { className: "text-slate-300", children: "missed calls × recovery rate × conversion rate × avg customer value" }, void 0, false, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 375,
              columnNumber: 436
            }, void 0),
            "."
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
            lineNumber: 374,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: [
            /* @__PURE__ */ jsxDEV("strong", { className: "text-slate-300", children: "Why instant answer matters:" }, void 0, false, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 378,
              columnNumber: 17
            }, void 0),
            " Harvard Business Review research shows responding to inbound leads within 5 minutes makes you 21× more likely to qualify them."
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
            lineNumber: 377,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: [
            /* @__PURE__ */ jsxDEV("strong", { className: "text-slate-300", children: "Phone calls drive purchases:" }, void 0, false, {
              fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
              lineNumber: 381,
              columnNumber: 17
            }, void 0),
            " Phone calls influence over $1 trillion in U.S. consumer spending annually (BIA/Kelsey), and 60% of customers prefer to call small businesses about purchases (Google/Ipsos)."
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
            lineNumber: 380,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-slate-500 italic", children: "Estimates only — actual results vary by industry, lead quality, and operational factors. Not a guarantee." }, void 0, false, {
            fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
            lineNumber: 383,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
          lineNumber: 373,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
        lineNumber: 366,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
        lineNumber: 365,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
      lineNumber: 173,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/SavingsCalculatorSection.tsx",
    lineNumber: 167,
    columnNumber: 5
  }, void 0);
};
const INDUSTRIES = [
  {
    industry: "Home Services",
    unanswered: 27,
    phoneLeads: 47,
    conversion: 29,
    accent: "from-orange-400 to-orange-600",
    surface: "bg-orange-500/5",
    border: "border-orange-500/30"
  },
  {
    industry: "Dental",
    unanswered: 27,
    phoneLeads: 37,
    conversion: 26,
    accent: "from-cyan-400 to-cyan-600",
    surface: "bg-cyan-500/5",
    border: "border-cyan-500/30"
  },
  {
    industry: "Auto Dealerships",
    unanswered: 21,
    phoneLeads: 37,
    conversion: 33,
    accent: "from-amber-400 to-amber-600",
    surface: "bg-amber-500/5",
    border: "border-amber-500/30"
  },
  {
    industry: "Auto Service Centers",
    unanswered: 20,
    phoneLeads: 39,
    conversion: 51,
    accent: "from-violet-400 to-violet-600",
    surface: "bg-violet-500/5",
    border: "border-violet-500/30"
  },
  {
    industry: "Physical Therapy",
    unanswered: 28,
    phoneLeads: 26,
    conversion: 39,
    accent: "from-rose-400 to-rose-600",
    surface: "bg-rose-500/5",
    border: "border-rose-500/30"
  },
  {
    industry: "Senior Living",
    unanswered: 37,
    phoneLeads: 17,
    conversion: 38,
    accent: "from-emerald-400 to-emerald-600",
    surface: "bg-emerald-500/5",
    border: "border-emerald-500/30"
  }
];
const StatRow = ({
  icon: Icon,
  label,
  value
}) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between py-2 border-t border-white/5 first:border-t-0", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wide", children: [
    /* @__PURE__ */ jsxDEV(Icon, { className: "w-3.5 h-3.5" }, void 0, false, {
      fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("span", { children: label }, void 0, false, {
      fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV("span", { className: "text-xl font-display font-bold text-white tabular-nums", children: [
    value,
    "%"
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
  lineNumber: 84,
  columnNumber: 3
}, void 0);
const IndustryCallBenchmarksSection = () => {
  return /* @__PURE__ */ jsxDEV("section", { className: "relative py-20 bg-[#0a1628] overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(249,115,22,0.08),_transparent_50%)]" }, void 0, false, {
      fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-14 max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "font-medium mb-4 text-primary", children: "Industry Benchmarks" }, void 0, false, {
          fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "The Numbers Don't Lie — Your Industry Is Bleeding Calls" }, void 0, false, {
          fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-300 leading-relaxed", children: [
          "Real benchmarks from millions of analyzed calls across 6 industries.",
          " ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-white font-semibold", children: "1 in 4 calls go unanswered" }, void 0, false, {
            fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
            lineNumber: 108,
            columnNumber: 13
          }, void 0),
          " — every single one is a customer your competitor will gladly take."
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-4 mb-12 max-w-5xl mx-auto", children: [
        { value: "27%", label: "Avg. unanswered call rate", sub: "across all industries" },
        { value: "37%", label: "Of inbound calls are leads", sub: "high-intent buyers" },
        { value: "<3%", label: "Of voicemails get a callback", sub: "lost forever" }
      ].map((m) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "text-center bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl px-6 py-7",
          children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-5xl md:text-6xl font-display font-extrabold bg-gradient-to-br from-primary to-orange-300 bg-clip-text text-transparent leading-none", children: m.value }, void 0, false, {
              fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
              lineNumber: 123,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-white font-semibold mt-3 text-sm", children: m.label }, void 0, false, {
              fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
              lineNumber: 126,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-slate-500 text-xs mt-1", children: m.sub }, void 0, false, {
              fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
              lineNumber: 127,
              columnNumber: 15
            }, void 0)
          ]
        },
        m.label,
        true,
        {
          fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
          lineNumber: 119,
          columnNumber: 13
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto", children: INDUSTRIES.map((ind, i) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: `relative rounded-2xl border ${ind.border} ${ind.surface} backdrop-blur-sm p-6 hover:scale-[1.02] transition-transform duration-300 animate-fade-up`,
          style: { animationDelay: `${i * 60}ms` },
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-5", children: /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-display font-bold text-white", children: ind.industry }, void 0, false, {
              fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
              lineNumber: 142,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
              lineNumber: 141,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "mb-5", children: [
              /* @__PURE__ */ jsxDEV(
                "p",
                {
                  className: `text-6xl md:text-7xl font-display font-extrabold bg-gradient-to-br ${ind.accent} bg-clip-text text-transparent leading-none tabular-nums`,
                  children: [
                    ind.unanswered,
                    "%"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
                  lineNumber: 147,
                  columnNumber: 17
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs uppercase tracking-wider text-slate-400 mt-2 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxDEV(PhoneOff, { className: "w-3.5 h-3.5" }, void 0, false, {
                  fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
                  lineNumber: 153,
                  columnNumber: 19
                }, void 0),
                "Calls go unanswered"
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
                lineNumber: 152,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
              lineNumber: 146,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxDEV(StatRow, { icon: PhoneIncoming, label: "Phone leads", value: ind.phoneLeads }, void 0, false, {
                fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
                lineNumber: 160,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV(StatRow, { icon: TrendingUp, label: "Lead conversion", value: ind.conversion }, void 0, false, {
                fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
                lineNumber: 161,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
              lineNumber: 159,
              columnNumber: 15
            }, void 0)
          ]
        },
        ind.industry,
        true,
        {
          fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
          lineNumber: 135,
          columnNumber: 13
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-center text-xs text-slate-500 mt-10", children: "Source: Invoca Call Conversion Industry Benchmarks — analysis of millions of inbound calls across 6 verticals." }, void 0, false, {
        fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/IndustryCallBenchmarksSection.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, void 0);
};
const heroImage = "/assets/ai-receptionist-hero-B3O7xdql.webp";
const PAGE_PATH = "/services/ai-receptionist-and-conversational-ai/";
const PAGE_URL = `https://growsmallbiz.io${PAGE_PATH}`;
const PRIMARY_CTA_URL = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const AIReceptionist = () => {
  const features = [
    {
      icon: Phone,
      title: "24/7 Inbound Call Handling",
      description: "AI answers every call naturally, manages after-hours inquiries, and provides accurate business information around the clock."
    },
    {
      icon: Users,
      title: "Intelligent Lead Qualification",
      description: "Automatically gathers caller information, assesses needs and budget, determines qualification level, and prioritizes leads."
    },
    {
      icon: Calendar,
      title: "Automated Appointment Booking",
      description: "Books appointments directly into your calendar based on real-time availability with Google Calendar integration."
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel Conversations",
      description: "Handles SMS, Facebook, Instagram, website chat, and Google Business Profile messages from one unified platform."
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Triggers automated follow-up sequences, sends SMS confirmations and reminders, and updates contact details across systems."
    },
    {
      icon: Shield,
      title: "CRM Integration",
      description: "Automatically collects and updates contact information, saves call details and conversation history, eliminating manual data entry."
    }
  ];
  const stats = [
    {
      value: "$1T",
      label: "In U.S. Consumer Spending Influenced By Phone Calls",
      subtext: "Source: BIA/Kelsey"
    },
    {
      value: "21x",
      label: "More Likely To Qualify Leads When You Respond In 5 Minutes",
      subtext: "Source: Harvard Business Review"
    },
    {
      value: "60%",
      label: "Of Customers Prefer To Call Small Businesses About Purchases",
      subtext: "Source: Google / Ipsos"
    },
    {
      value: "$1,200",
      label: "Average Lost Revenue Per Missed Call (Home Services)",
      subtext: "Source: Invoca"
    }
  ];
  const industries = [
    { icon: Wrench, name: "HVAC Contractors", benefit: "Capture after-hours service calls worth $500-2,000 each" },
    { icon: Stethoscope, name: "Dental Offices", benefit: "Manage appointment requests and emergency consultations" },
    { icon: Scale, name: "Law Firms", benefit: "Qualify potential clients and schedule consultations" },
    { icon: Home, name: "Real Estate Agents", benefit: "Never miss buyer inquiries with automatic lead scoring" },
    { icon: Building2, name: "Med Spas", benefit: "Handle consultation requests and treatment questions 24/7" },
    { icon: Headphones, name: "Service Businesses", benefit: "Capture every lead, every call, every opportunity" }
  ];
  const faqs = [
    {
      question: "What is AI Receptionist & Conversational AI and how does it work?",
      answer: "AI Receptionist & Conversational AI is a comprehensive business automation solution that combines voice AI (for phone calls) and chat AI (for digital channels). It handles customer interactions across SMS, Facebook, Instagram, website chat, and phone calls—all managed through a single platform. GrowSmallBiz provides complete setup, training, and ongoing support."
    },
    {
      question: "How quickly can I start capturing more leads?",
      answer: "GrowSmallBiz's technical team handles complete setup in 5 business days after your onboarding session. We configure your AI Receptionist with existing phone numbers, connect all digital channels, train both systems on your business information, and test everything before going live. No technical work required from you."
    },
    {
      question: "Does it work with my existing business systems?",
      answer: "Yes! AI Receptionist integrates seamlessly with popular business management platforms and CRM systems. We configure the AI to work with your existing workflows, calendars, and automations. Phone calls and conversations trigger established follow-up sequences, appointment bookings sync with your calendar, and all customer data flows into your current processes."
    },
    {
      question: "How does the AI Receptionist handle business calls?",
      answer: "Your AI Receptionist uses advanced speech recognition to answer calls naturally, collect customer information, and perform actions like booking appointments, sending payment links, or transferring urgent calls to human staff. It works with your existing business phone system and integrates with your CRM."
    },
    {
      question: "Can I use my existing phone numbers?",
      answer: "Yes, you can assign any available phone number in your account to the AI agent, provided it isn't already configured for other specialized functions like IVR. GrowSmallBiz will configure your existing business phone numbers to work seamlessly with your AI Receptionist."
    },
    {
      question: "What channels does Conversational AI support?",
      answer: "Conversational AI works across SMS, Facebook messages, Instagram DMs, website live chat, and Google Business Profile messages. You can choose which channels to activate and select between Suggestive mode (AI provides response suggestions) or Auto-Pilot mode (AI responds automatically). All conversations sync with your CRM."
    },
    {
      question: "What happens when the AI can't handle a customer inquiry?",
      answer: "AI Receptionist can transfer calls to human agents when needed, and Conversational AI can escalate complex issues through your workflows. You receive complete conversation history, so you're fully informed when taking over. AI successfully handles 80-85% of routine inquiries while maintaining 95% customer satisfaction rates."
    },
    {
      question: "Is this worth the investment for a small business?",
      answer: "Absolutely. Most small businesses miss 47% of incoming calls, with each missed call representing $300-3,000 in lost revenue depending on your industry. AI Receptionist typically pays for itself within the first month by capturing just 3-5 additional customers you would have otherwise lost. Plus, you save $30,000-50,000 annually compared to hiring additional staff."
    },
    {
      question: "Will AI make my business seem impersonal?",
      answer: "Not at all! AI Receptionist actually enhances your professional image by ensuring you never miss the critical 5-minute response window. Many website visitors browse between 7-11 PM when they're free. While competitors are closed, your AI provides immediate answers, shares business information, and books appointments even at 2 AM."
    },
    {
      question: "What if the AI gives wrong information to customers?",
      answer: "GrowSmallBiz extensively trains your AI on your specific business information, services, and pricing before going live. We test all responses thoroughly and program the AI to say 'Let me connect you with a team member' for any questions it's unsure about. You can review and update the AI's knowledge base anytime."
    }
  ];
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "AI Receptionist & Conversational AI 24/7 | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 173,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "description",
          content: "AI Receptionist answers every call 24/7. Conversational AI handles SMS, Facebook, Instagram & website chat. Capture every lead—never miss one."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 174,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "keywords",
          content: "AI receptionist, virtual receptionist, conversational AI, AI chat, 24/7 answering service, automated phone system, lead capture, appointment booking, business automation"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 178,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: PAGE_URL }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "AI Receptionist & Conversational AI 24/7 | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 183,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          property: "og:description",
          content: "AI Receptionist answers every call 24/7. Conversational AI handles SMS, Facebook, Instagram & website chat. Capture every lead."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 184,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 188,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: PAGE_URL }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: `https://growsmallbiz.io${heroImage}` }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 190,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image:width", content: "1920" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 191,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image:height", content: "1080" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 192,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 193,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: "AI Receptionist & Conversational AI 24/7 | GrowSmallBiz" }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 194,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "twitter:description",
          content: "AI Receptionist answers every call 24/7. Conversational AI handles SMS, Facebook, Instagram & website chat."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 195,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: `https://growsmallbiz.io${heroImage}` }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 199,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
      lineNumber: 172,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      ServiceJsonLd,
      {
        serviceName: "AI Receptionist & Conversational AI",
        serviceType: "AI Customer Service Automation",
        description: "24/7 AI-powered phone answering, SMS, and chat automation for lead capture and appointment booking.",
        url: PAGE_PATH,
        breadcrumbs: [
          { name: "Services", url: "/services/" },
          { name: "AI Receptionist & Conversational AI", url: PAGE_PATH }
        ],
        offerCatalog: {
          name: "AI Receptionist & Conversational AI",
          items: [
            {
              name: "AI Virtual Receptionist",
              description: "24/7 phone answering with natural conversation, lead qualification, and appointment booking."
            },
            {
              name: "Conversational AI",
              description: "Multi-channel chat automation across SMS, Facebook, Instagram, website chat, and Google Business Profile."
            }
          ]
        },
        useEntityGraph: true,
        hasFaqPage: true
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 202,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
      lineNumber: 230,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", className: "pt-20", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "relative py-24 lg:py-32 overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: heroImage,
            alt: "AI Receptionist and Conversational AI handling 24/7 calls and chats for small businesses",
            width: 1920,
            height: 1080,
            fetchPriority: "high",
            decoding: "async",
            className: "w-full h-full object-cover"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 236,
            columnNumber: 13
          },
          void 0
        ) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 235,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-background/85" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 246,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-fade-up", children: [
            /* @__PURE__ */ jsxDEV(Bot, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 250,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium", children: "AI Client Growth System" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 251,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 249,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-up leading-tight bg-gradient-heading bg-clip-text text-transparent", children: "AI Receptionist and Conversational AI That Works 24/7 - The Best Solution for Speed to Lead" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 254,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "p",
            {
              className: "text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up",
              style: { animationDelay: "0.1s" },
              children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "AI Receptionist" }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                  lineNumber: 260,
                  columnNumber: 17
                }, void 0),
                " handles every call.",
                " ",
                /* @__PURE__ */ jsxDEV("strong", { children: "Conversational AI" }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                  lineNumber: 261,
                  columnNumber: 17
                }, void 0),
                " manages SMS, Facebook, Instagram & website chat."
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 256,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "p",
            {
              className: "text-lg text-muted-foreground mb-8 animate-fade-up",
              style: { animationDelay: "0.15s" },
              children: "Your competitors capture leads while you're busy. Stop losing customers to faster responses."
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 264,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up",
              style: { animationDelay: "0.2s" },
              children: [
                /* @__PURE__ */ jsxDEV(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: PRIMARY_CTA_URL, target: "_blank", rel: "noopener noreferrer", children: [
                  "Schedule Strategy Call",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5 ml-2" }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                    lineNumber: 278,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                  lineNumber: 276,
                  columnNumber: 19
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                  lineNumber: 275,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV(Button, { variant: "outline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxDEV("a", { href: "tel:+19258863724", children: [
                  /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5 mr-2" }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                    lineNumber: 283,
                    columnNumber: 21
                  }, void 0),
                  " Call +1 (925) 886-3724"
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                  lineNumber: 282,
                  columnNumber: 19
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                  lineNumber: 281,
                  columnNumber: 17
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 271,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "p",
            {
              className: "mt-6 text-sm text-muted-foreground animate-fade-up",
              style: { animationDelay: "0.25s" },
              children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "White Glove Service:" }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                  lineNumber: 292,
                  columnNumber: 17
                }, void 0),
                " Setup, training, and 24×7 support included"
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 288,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 248,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 247,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 234,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "relative py-20 bg-[#1a2a3a]", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "font-medium mb-4 text-primary", children: "The Hidden Cost of Missed Opportunities" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 302,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "What Missed Calls Are Really Costing You" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 303,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-slate-400 max-w-2xl mx-auto", children: "The research is clear — every unanswered call is revenue walking out the door" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 306,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 301,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: stats.map((stat, index) => /* @__PURE__ */ jsxDEV(AnimatedStatCard, { stat, index, variant: "card" }, index, false, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 313,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 311,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(SavingsCalculatorSection, {}, void 0, false, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 317,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 300,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 299,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(IndustryCallBenchmarksSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 322,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4", children: [
            /* @__PURE__ */ jsxDEV(Phone, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 330,
              columnNumber: 19
            }, void 0),
            "AI Virtual Receptionist"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 329,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-heading bg-clip-text text-transparent", children: "Never Miss Another Call, Ever Again" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 333,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground mb-6", children: "Your AI Receptionist handles every call with natural conversation, qualifies leads automatically, books appointments directly into your calendar, and captures all customer data in your CRM—while you focus on serving existing customers." }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 336,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
            "Answers inbound calls 24/7 with natural conversation",
            "Qualifies leads and prioritizes automatically",
            "Books appointments with real-time calendar integration",
            "Transfers to human agents when complex issues arise",
            "Sends SMS confirmations and follow-ups",
            "Integrates with your existing CRM and workflows"
          ].map((item, index) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 352,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-foreground", children: item }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 353,
              columnNumber: 23
            }, void 0)
          ] }, index, true, {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 351,
            columnNumber: 21
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 342,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 328,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "bg-card border border-primary/30 rounded-2xl p-8 animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.35)]",
            style: { animationDelay: "0.1s" },
            children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-semibold text-foreground mb-6", children: "Call Actions During Every Interaction" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                lineNumber: 363,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                { icon: Users, label: "Update Contact Fields" },
                { icon: Zap, label: "Trigger Workflows" },
                { icon: Phone, label: "Transfer Calls" },
                { icon: MessageSquare, label: "Send SMS Messages" },
                { icon: Globe, label: "API Integration" },
                { icon: Headphones, label: "Natural Language Processing" }
              ].map((action, index) => /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: "flex items-center gap-3 p-3 bg-secondary/50 rounded-lg",
                  children: [
                    /* @__PURE__ */ jsxDEV(action.icon, { className: "w-5 h-5 text-primary" }, void 0, false, {
                      fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                      lineNumber: 379,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground", children: action.label }, void 0, false, {
                      fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                      lineNumber: 380,
                      columnNumber: 23
                    }, void 0)
                  ]
                },
                index,
                true,
                {
                  fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                  lineNumber: 375,
                  columnNumber: 21
                },
                void 0
              )) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                lineNumber: 366,
                columnNumber: 17
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 359,
            columnNumber: 15
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 327,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 326,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 325,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "relative py-20", style: { background: "linear-gradient(180deg, #0a1628 0%, #0f172a 50%, #0a1628 100%)" }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 opacity-30", style: { background: "radial-gradient(ellipse at center, #17a2b820 0%, transparent 70%)" } }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 391,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "order-2 lg:order-1 backdrop-blur-sm rounded-2xl p-8 animate-fade-up transition-all hover:shadow-[0_0_40px_#17a2b880,0_0_80px_#17a2b840]",
              style: { border: "2px solid #17a2b8", backgroundColor: "#050a10", boxShadow: "0 0 30px #17a2b830" },
              children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-semibold text-foreground mb-6", children: "Unified Multi-Channel Platform" }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                  lineNumber: 398,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
                  { channel: "SMS", desc: "Instant text message responses and follow-ups", bgColor: "#0d2818", borderColor: "#22c55e", iconColor: "#22c55e", Icon: Smartphone },
                  { channel: "Website Live Chat", desc: "Engage visitors the moment they arrive", bgColor: "#0d1f2d", borderColor: "#17a2b8", iconColor: "#17a2b8", Icon: Globe },
                  { channel: "Facebook", desc: "Respond to Messenger inquiries automatically", bgColor: "#0d1a33", borderColor: "#1877f2", iconColor: "#1877f2", Icon: Facebook },
                  { channel: "Instagram", desc: "Handle DMs and convert followers to customers", bgColor: "#2d0d1f", borderColor: "#e1306c", iconColor: "#e1306c", Icon: Instagram },
                  { channel: "Google Business Profile", desc: "Manage profile messages seamlessly", bgColor: "#0f1419", borderColor: "", iconColor: "#4285f4", Icon: MapPin, isGoogle: true }
                ].map((item, index) => /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: `flex items-start gap-4 p-4 rounded-lg transition-all hover:scale-[1.02] ${item.isGoogle ? "relative overflow-hidden" : ""}`,
                    style: {
                      background: item.isGoogle ? "linear-gradient(135deg, rgba(66,133,244,0.12), rgba(234,67,53,0.12), rgba(251,188,5,0.12), rgba(52,168,83,0.12))" : item.bgColor,
                      border: item.isGoogle ? "none" : `1px solid ${item.borderColor}`,
                      boxShadow: item.isGoogle ? "0 0 20px rgba(66,133,244,0.2), 0 0 20px rgba(234,67,53,0.1), 0 0 20px rgba(52,168,83,0.1)" : `0 0 20px ${item.borderColor}40`
                    },
                    children: [
                      item.isGoogle && /* @__PURE__ */ jsxDEV(
                        "div",
                        {
                          className: "absolute inset-0 rounded-lg pointer-events-none animate-gradient-rotate",
                          style: {
                            background: "linear-gradient(90deg, #4285f4, #ea4335, #fbbc05, #34a853, #4285f4)",
                            backgroundSize: "300% 100%",
                            padding: "1px",
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude"
                          }
                        },
                        void 0,
                        false,
                        {
                          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                          lineNumber: 417,
                          columnNumber: 25
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "div",
                        {
                          className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                          style: {
                            background: item.isGoogle ? "linear-gradient(135deg, rgba(66,133,244,0.3), rgba(234,67,53,0.3), rgba(251,188,5,0.3), rgba(52,168,83,0.3))" : `${item.iconColor}20`
                          },
                          children: /* @__PURE__ */ jsxDEV(item.Icon, { className: "w-5 h-5", style: { color: item.iconColor } }, void 0, false, {
                            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                            lineNumber: 437,
                            columnNumber: 25
                          }, void 0)
                        },
                        void 0,
                        false,
                        {
                          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                          lineNumber: 429,
                          columnNumber: 23
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV("div", { children: [
                        /* @__PURE__ */ jsxDEV("p", { className: "font-medium text-foreground", children: item.channel }, void 0, false, {
                          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                          lineNumber: 440,
                          columnNumber: 25
                        }, void 0),
                        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: item.desc }, void 0, false, {
                          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                          lineNumber: 441,
                          columnNumber: 25
                        }, void 0)
                      ] }, void 0, true, {
                        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                        lineNumber: 439,
                        columnNumber: 23
                      }, void 0)
                    ]
                  },
                  index,
                  true,
                  {
                    fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                    lineNumber: 407,
                    columnNumber: 21
                  },
                  void 0
                )) }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                  lineNumber: 399,
                  columnNumber: 17
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 394,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "order-1 lg:order-2 animate-fade-up", style: { animationDelay: "0.1s" }, children: [
            /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4", children: [
              /* @__PURE__ */ jsxDEV(MessageSquare, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                lineNumber: 450,
                columnNumber: 19
              }, void 0),
              "Conversational AI"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 449,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-heading bg-clip-text text-transparent", children: "Turn Every Digital Interaction Into Revenue" }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 453,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground mb-6", children: "Capture and convert every website visitor, social media lead, and text message inquiry into booked appointments—automatically. Handle unlimited conversations across all digital channels while your AI qualifies leads and nurtures prospects through your sales funnel." }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 456,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
              "All channels managed from one unified inbox",
              "Suggestive mode or full Auto-Pilot mode available",
              "Automated lead capture and qualification",
              "Calendar integration for instant booking",
              "Complete conversation history synced to CRM"
            ].map((item, index) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                lineNumber: 471,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "text-foreground", children: item }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                lineNumber: 472,
                columnNumber: 23
              }, void 0)
            ] }, index, true, {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 470,
              columnNumber: 21
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 462,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 448,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 393,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 392,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 390,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "relative py-20 bg-background border-y border-border/40", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-4", children: "Complete Capabilities" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 485,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Everything You Need for 24/7 Customer Coverage" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 486,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 484,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: features.map((feature, index) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "bg-card border border-border rounded-2xl p-6 animate-fade-up transition-all hover:border-primary/40 hover:shadow-[0_0_40px_rgba(255,127,80,0.15)]",
            style: { animationDelay: `${index * 0.1}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV(feature.icon, { className: "w-6 h-6 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                lineNumber: 499,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                lineNumber: 498,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-semibold text-foreground mb-3", children: feature.title }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                lineNumber: 501,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: feature.description }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                lineNumber: 502,
                columnNumber: 19
              }, void 0)
            ]
          },
          index,
          true,
          {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 493,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 491,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 483,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 482,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "relative py-20 bg-card/40 border-t border-border/40", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Why Everyone Wins With AI" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 513,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 512,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "bg-background border border-primary/30 rounded-2xl p-8 animate-fade-up", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-semibold text-foreground mb-6 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(Building2, { className: "w-6 h-6 text-primary" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                lineNumber: 521,
                columnNumber: 19
              }, void 0),
              "Why Your Business Will Love It"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 520,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: [
              "Never sleeps, never calls sick, no vacations",
              "No salary, benefits, or HR drama",
              "Works 24/7 without breaks or complaints",
              "Perfect attendance – 365 days a year",
              "Scales to handle unlimited volume"
            ].map((item, index) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                lineNumber: 533,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "text-muted-foreground", children: item }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                lineNumber: 534,
                columnNumber: 23
              }, void 0)
            ] }, index, true, {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 532,
              columnNumber: 21
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 524,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 519,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "bg-background border border-primary/30 rounded-2xl p-8 animate-fade-up",
              style: { animationDelay: "0.1s" },
              children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-semibold text-foreground mb-6 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV(Users, { className: "w-6 h-6 text-primary" }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                    lineNumber: 545,
                    columnNumber: 19
                  }, void 0),
                  "Why Your Customers Will Love It"
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                  lineNumber: 544,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: [
                  "Instant answers day, night, weekends, holidays",
                  "Never hear voicemail or 'please hold' again",
                  "Same perfect service every single time",
                  "Every customer gets VIP treatment",
                  "Seamless handoff to humans when needed"
                ].map((item, index) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                    lineNumber: 557,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-muted-foreground", children: item }, void 0, false, {
                    fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                    lineNumber: 558,
                    columnNumber: 23
                  }, void 0)
                ] }, index, true, {
                  fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                  lineNumber: 556,
                  columnNumber: 21
                }, void 0)) }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                  lineNumber: 548,
                  columnNumber: 17
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
              lineNumber: 540,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 518,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 511,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 510,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "relative py-20 bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-primary font-medium mb-4", children: "Industry Applications" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 571,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-heading bg-clip-text text-transparent", children: "Built for Service-Based Businesses" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 572,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Any business where timing and responsiveness directly impact revenue" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 575,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 570,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: industries.map((industry, index) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "bg-card border border-border rounded-xl p-6 animate-fade-up transition-all hover:border-primary/40",
            style: { animationDelay: `${index * 0.1}s` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 mb-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(industry.icon, { className: "w-6 h-6 text-primary" }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                  lineNumber: 589,
                  columnNumber: 23
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                  lineNumber: 588,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold text-foreground", children: industry.name }, void 0, false, {
                  fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                  lineNumber: 591,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                lineNumber: 587,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: industry.benefit }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                lineNumber: 593,
                columnNumber: 19
              }, void 0)
            ]
          },
          index,
          true,
          {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 582,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 580,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 569,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 568,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "relative py-20 bg-card/40 border-y border-border/40", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center animate-fade-up", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4", children: [
          /* @__PURE__ */ jsxDEV(Clock, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 605,
            columnNumber: 17
          }, void 0),
          "Done-For-You Service"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 604,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-heading bg-clip-text text-transparent", children: "White Glove Setup & Support" }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 608,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground mb-8", children: "GrowSmallBiz handles everything. Zero technical work required from you." }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 611,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left", children: [
          "Configure AI with your existing phone numbers",
          "Connect all digital channels seamlessly",
          "Upload your business info and train AI systems",
          "Set up calendar integration and booking flows",
          "Create custom call routing and transfer protocols",
          "Provide ongoing optimization and 24/7 support"
        ].map((item, index) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "flex items-start gap-3 bg-background border border-primary/20 rounded-lg p-4",
            children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                lineNumber: 628,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "text-foreground", children: item }, void 0, false, {
                fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
                lineNumber: 629,
                columnNumber: 21
              }, void 0)
            ]
          },
          index,
          true,
          {
            fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
            lineNumber: 624,
            columnNumber: 19
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 615,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 603,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 602,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 601,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        WhyChooseSection,
        {
          title: "Why Choose GrowSmallBiz for AI Receptionist",
          subtitle: "Your AI Communication Partner",
          description: "Our AI Receptionist answers every call, books appointments, and qualifies leads 24/7—so you never miss an opportunity to grow your business.",
          items: [
            { title: "24/7 Call Handling", description: "AI answers every call naturally, even after hours, holidays, and weekends—never miss a lead.", icon: Phone },
            { title: "Multi-Channel Coverage", description: "Handle calls, texts, web chat, Facebook, Instagram, and Google Business messages from one platform.", icon: MessageSquare },
            { title: "Natural Conversations", description: "AI engages callers in human-like conversations that feel personal and professional.", icon: Bot },
            { title: "Calendar Integration", description: "Appointments booked directly into your calendar based on real-time availability.", icon: Calendar },
            { title: "CRM Sync", description: "Every conversation and contact automatically saved to your CRM—zero manual data entry.", icon: Shield },
            { title: "White Glove Setup", description: "We configure everything for you—AI training, integrations, workflows—you just start receiving leads.", icon: Clock }
          ]
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 637,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        FAQSection,
        {
          title: "Frequently Asked Questions",
          subtitle: "Everything you need to know about AI Receptionist & Conversational AI",
          faqs,
          schemaId: `${PAGE_URL}#faqpage`,
          contactCTA: {
            ...baseContactCTA,
            title: "Have more questions about AI Receptionist?",
            description: "We're here to help! Reach out for a personalized walkthrough.",
            tagline: "Let's automate your customer service together."
          }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 652,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        CardCTA,
        {
          title: "Ready to Capture Every Lead, Every Call?",
          description: "Your AI starts working 24/7 within days. Complete phone and digital coverage from day one.",
          buttonText: "Schedule Strategy Call",
          buttonHref: PRIMARY_CTA_URL
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
          lineNumber: 666,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(ConsultationFormSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
        lineNumber: 673,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
      lineNumber: 232,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
      lineNumber: 676,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/services/AIReceptionist.tsx",
    lineNumber: 171,
    columnNumber: 5
  }, void 0);
};
export {
  AIReceptionist as default
};
