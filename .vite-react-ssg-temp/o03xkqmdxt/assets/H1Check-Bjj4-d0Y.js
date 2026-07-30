import { j as jsxDEV, c as cn, F as Fragment } from "../main.mjs";
import * as React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { B as Button } from "./button-Co-CyCVS.js";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import { B as Badge } from "./badge-lx1MgBuh.js";
import { Loader2, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import "vite-react-ssg";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "react-router-dom";
import "@radix-ui/react-slot";
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxDEV(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
      },
      void 0
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }, void 0, false, {
  fileName: "/dev-server/src/components/ui/label.tsx",
  lineNumber: 13,
  columnNumber: 3
}, void 0));
Label.displayName = LabelPrimitive.Root.displayName;
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV("div", { ref, className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className), ...props }, void 0, false, {
  fileName: "/dev-server/src/components/ui/card.tsx",
  lineNumber: 6,
  columnNumber: 3
}, void 0));
Card.displayName = "Card";
const CardHeader = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props }, void 0, false, {
    fileName: "/dev-server/src/components/ui/card.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, void 0)
);
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV("h3", { ref, className: cn("text-2xl font-semibold leading-none tracking-tight", className), ...props }, void 0, false, {
    fileName: "/dev-server/src/components/ui/card.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, void 0)
);
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV("p", { ref, className: cn("text-sm text-muted-foreground", className), ...props }, void 0, false, {
    fileName: "/dev-server/src/components/ui/card.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, void 0)
);
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, false, {
    fileName: "/dev-server/src/components/ui/card.tsx",
    lineNumber: 32,
    columnNumber: 37
  }, void 0)
);
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props }, void 0, false, {
    fileName: "/dev-server/src/components/ui/card.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, void 0)
);
CardFooter.displayName = "CardFooter";
const LIVE_ORIGIN = "https://rank-robot-buddy.lovable.app";
const EXPECTED_H1S = {
  "/": "More Leads. Stronger Visibility. A System That Works While You Work.",
  "/services/paid-advertising/google-local-services-ads/": "Google Local Service Ads: Get More Calls. Pay Only for Real Leads."
};
const normalize = (s) => s.replace(/\s+/g, " ").replace(/\u00a0/g, " ").trim();
const stripTags = (html) => html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").replace(/<[^>]+>/g, "");
const extractFirstH1 = (html) => {
  const match = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  if (!match) return null;
  return normalize(stripTags(match[1]));
};
const H1Check = () => {
  const [path, setPath] = useState("/services/paid-advertising/google-local-services-ads/");
  const [expected, setExpected] = useState(
    EXPECTED_H1S["/services/paid-advertising/google-local-services-ads/"]
  );
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const handlePathChange = (value) => {
    setPath(value);
    if (EXPECTED_H1S[value]) setExpected(EXPECTED_H1S[value]);
  };
  const runCheck = async () => {
    setLoading(true);
    setResult(null);
    try {
      const cleanPath = path.startsWith("/") ? path : `/${path}`;
      const target = `${LIVE_ORIGIN}${cleanPath}`;
      const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(
        `${target}?_cb=${Date.now()}`
      )}`;
      const res = await fetch(proxy, { cache: "no-store" });
      const html = await res.text();
      const h1 = extractFirstH1(html);
      if (!h1) {
        setResult({
          status: "missing",
          httpStatus: res.status,
          expectedH1: expected,
          message: "No <h1> found in returned HTML."
        });
        return;
      }
      const matches = normalize(h1) === normalize(expected);
      setResult({
        status: matches ? "match" : "mismatch",
        httpStatus: res.status,
        fetchedH1: h1,
        expectedH1: expected
      });
    } catch (err) {
      setResult({
        status: "error",
        message: err instanceof Error ? err.message : "Unknown error"
      });
    } finally {
      setLoading(false);
    }
  };
  const StatusBadge = () => {
    if (!result) return null;
    if (result.status === "match")
      return /* @__PURE__ */ jsxDEV(Badge, { className: "bg-green-600 hover:bg-green-600 text-white gap-1", children: [
        /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-3.5 h-3.5" }, void 0, false, {
          fileName: "/dev-server/src/pages/H1Check.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, void 0),
        " Match"
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/H1Check.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, void 0);
    if (result.status === "mismatch")
      return /* @__PURE__ */ jsxDEV(Badge, { variant: "destructive", className: "gap-1", children: [
        /* @__PURE__ */ jsxDEV(XCircle, { className: "w-3.5 h-3.5" }, void 0, false, {
          fileName: "/dev-server/src/pages/H1Check.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, void 0),
        " Mismatch"
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/H1Check.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, void 0);
    return /* @__PURE__ */ jsxDEV(Badge, { variant: "secondary", className: "gap-1", children: [
      /* @__PURE__ */ jsxDEV(AlertCircle, { className: "w-3.5 h-3.5" }, void 0, false, {
        fileName: "/dev-server/src/pages/H1Check.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, void 0),
      " ",
      result.status
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/H1Check.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, void 0);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background py-12 px-4", children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Live H1 Verifier" }, void 0, false, {
        fileName: "/dev-server/src/pages/H1Check.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "noindex,nofollow" }, void 0, false, {
        fileName: "/dev-server/src/pages/H1Check.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/H1Check.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl font-bold bg-gradient-heading bg-clip-text text-transparent", children: "Live H1 Verifier" }, void 0, false, {
          fileName: "/dev-server/src/pages/H1Check.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mt-1", children: "Fetches the raw HTML of a live page and checks the first <h1>." }, void 0, false, {
          fileName: "/dev-server/src/pages/H1Check.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/H1Check.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(Card, { className: "p-6 space-y-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDEV(Label, { htmlFor: "path", children: [
            "Path on ",
            LIVE_ORIGIN
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/H1Check.tsx",
            lineNumber: 133,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            Input,
            {
              id: "path",
              value: path,
              onChange: (e) => handlePathChange(e.target.value),
              placeholder: "/services/..."
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/H1Check.tsx",
              lineNumber: 134,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/H1Check.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDEV(Label, { htmlFor: "expected", children: "Expected H1" }, void 0, false, {
            fileName: "/dev-server/src/pages/H1Check.tsx",
            lineNumber: 142,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            Input,
            {
              id: "expected",
              value: expected,
              onChange: (e) => setExpected(e.target.value)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/H1Check.tsx",
              lineNumber: 143,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/H1Check.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Button, { onClick: runCheck, disabled: loading || !path || !expected, children: loading ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV(Loader2, { className: "w-4 h-4 mr-2 animate-spin" }, void 0, false, {
            fileName: "/dev-server/src/pages/H1Check.tsx",
            lineNumber: 152,
            columnNumber: 17
          }, void 0),
          " Checking…"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/H1Check.tsx",
          lineNumber: 151,
          columnNumber: 15
        }, void 0) : "Check live H1" }, void 0, false, {
          fileName: "/dev-server/src/pages/H1Check.tsx",
          lineNumber: 149,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/H1Check.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, void 0),
      result && /* @__PURE__ */ jsxDEV(Card, { className: "p-6 space-y-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-muted-foreground", children: [
            "HTTP ",
            result.httpStatus ?? "—"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/H1Check.tsx",
            lineNumber: 163,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(StatusBadge, {}, void 0, false, {
            fileName: "/dev-server/src/pages/H1Check.tsx",
            lineNumber: 166,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/H1Check.tsx",
          lineNumber: 162,
          columnNumber: 13
        }, void 0),
        result.message && /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-destructive", children: result.message }, void 0, false, {
          fileName: "/dev-server/src/pages/H1Check.tsx",
          lineNumber: 169,
          columnNumber: 15
        }, void 0),
        result.expectedH1 && /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV(Label, { className: "text-xs uppercase text-muted-foreground", children: "Expected" }, void 0, false, {
            fileName: "/dev-server/src/pages/H1Check.tsx",
            lineNumber: 173,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground mt-1", children: result.expectedH1 }, void 0, false, {
            fileName: "/dev-server/src/pages/H1Check.tsx",
            lineNumber: 176,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/H1Check.tsx",
          lineNumber: 172,
          columnNumber: 15
        }, void 0),
        result.fetchedH1 && /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV(Label, { className: "text-xs uppercase text-muted-foreground", children: "Fetched" }, void 0, false, {
            fileName: "/dev-server/src/pages/H1Check.tsx",
            lineNumber: 181,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground mt-1", children: result.fetchedH1 }, void 0, false, {
            fileName: "/dev-server/src/pages/H1Check.tsx",
            lineNumber: 184,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/H1Check.tsx",
          lineNumber: 180,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/H1Check.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/H1Check.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/H1Check.tsx",
    lineNumber: 118,
    columnNumber: 5
  }, void 0);
};
export {
  H1Check as default
};
