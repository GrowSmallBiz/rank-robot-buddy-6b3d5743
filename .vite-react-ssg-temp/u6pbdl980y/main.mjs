import { Head, ViteReactSSG } from "vite-react-ssg";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useEffect, useMemo, useState, lazy as lazy$1, Suspense } from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X, ChevronDown, ChevronRight, Menu, MapPin, Facebook, Youtube, Instagram, Linkedin, Twitter, Zap, ArrowRight, XCircle, CheckCircle2, Brain, Wrench, TrendingUp, Settings, BarChart3, Award, Layers, LayoutDashboard, Target, Heart, Users, PhoneCall, ClipboardCheck, Rocket } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";
import { Toaster as Toaster$2 } from "sonner";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { useLocation, Link, Outlet } from "react-router-dom";
import { Slot } from "@radix-ui/react-slot";
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(ToastPrimitives.Root, { ref, className: cn(toastVariants({ variant }), className), ...props });
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Title, { ref, className: cn("text-sm font-semibold", className), ...props }));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Description, { ref, className: cn("text-sm opacity-90", className), ...props }));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster$1() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$2,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
const STORAGE_KEY = "gsb_inbound_utms";
function captureInboundUtms() {
  if (typeof window === "undefined") return null;
  const existing = sessionStorage.getItem(STORAGE_KEY);
  if (existing) return JSON.parse(existing);
  const params = new URLSearchParams(window.location.search);
  const utms = {};
  let hasUtm = false;
  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) {
      utms[key] = val;
      hasUtm = true;
    }
  }
  if (hasUtm) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utms));
    return utms;
  }
  return null;
}
function getInboundUtms() {
  if (typeof window === "undefined") return null;
  const stored = sessionStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
}
function getPageSlug() {
  if (typeof window === "undefined") return "website";
  const path = window.location.pathname;
  if (path === "/" || path === "") return "home";
  const segments = path.replace(/\/$/, "").split("/");
  const last = segments[segments.length - 1];
  return last || "home";
}
function campaignSlug(label) {
  return label.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}
function buildCtaUrl(baseUrl, campaign, pageMedium) {
  const inbound = getInboundUtms();
  const utms = inbound ?? {
    utm_source: "website",
    utm_medium: pageMedium ?? getPageSlug(),
    utm_campaign: campaignSlug(campaign)
  };
  const url = new URL(baseUrl);
  for (const key of UTM_KEYS) {
    url.searchParams.delete(key);
  }
  for (const key of UTM_KEYS) {
    const val = utms[key];
    if (val) {
      url.searchParams.set(key, val);
    }
  }
  return url.toString();
}
const CTA_URLS = {
  strategySession: "https://lp.growsmallbiz.io/digital-growth-strategy-session",
  freeAudit: "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page"
};
function useUtm() {
  const location = useLocation();
  useEffect(() => {
    captureInboundUtms();
  }, []);
  const pageMedium = useMemo(() => {
    const path = location.pathname;
    if (path === "/" || path === "") return "home";
    const segments = path.replace(/\/$/, "").split("/");
    return segments[segments.length - 1] || "home";
  }, [location.pathname]);
  const buildUrl = (baseUrl, campaign) => buildCtaUrl(baseUrl, campaign, pageMedium);
  const strategySessionUrl = buildCtaUrl(
    CTA_URLS.strategySession,
    "strategy-session",
    pageMedium
  );
  const freeAuditUrl = buildCtaUrl(
    CTA_URLS.freeAudit,
    "free-seo-audit",
    pageMedium
  );
  return {
    buildUrl,
    strategySessionUrl,
    freeAuditUrl,
    pageMedium
  };
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent text-foreground hover:bg-secondary hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-primary to-[hsl(199_89%_48%)] text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5",
        heroOutline: "border-2 border-primary/50 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary",
        glow: "bg-primary text-primary-foreground shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50 animate-glow-pulse"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const growsmallbizLogo = "data:image/webp;base64,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";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isSeoSubOpen, setIsSeoSubOpen] = useState(false);
  const [isAdsSubOpen, setIsAdsSubOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCaseStudiesOpen, setMobileCaseStudiesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [mobileSeoSubOpen, setMobileSeoSubOpen] = useState(false);
  const [mobileAdsSubOpen, setMobileAdsSubOpen] = useState(false);
  const location = useLocation();
  const isServiceActive = location.pathname.startsWith("/services") || location.pathname === "/website-design";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "#main-content",
        className: "sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:ring-2 focus:ring-primary",
        children: "Skip to main content"
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border", children: [
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-20", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center gap-3", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: growsmallbizLogo,
            alt: "GrowSmallBiz Digital Marketing",
            className: "h-16 w-auto",
            width: 64,
            height: 64
          }
        ) }),
        /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex items-center gap-6", "aria-label": "Main navigation", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/",
              className: `text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/" ? "text-primary" : "text-muted-foreground"}`,
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative group",
              onMouseEnter: () => setIsServicesOpen(true),
              onMouseLeave: () => setIsServicesOpen(false),
              children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    className: `flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${isServiceActive ? "text-primary" : "text-muted-foreground"}`,
                    "aria-expanded": isServicesOpen,
                    "aria-haspopup": "true",
                    children: [
                      "Services",
                      /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 transition-transform group-hover:rotate-180" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`,
                    children: [
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: "/services/",
                          className: "block px-4 py-3 rounded-lg text-sm font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border-b border-border mb-2",
                          children: "Service Overview"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: "/services/website-design/",
                          className: "block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                          children: "Website That Converts"
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "relative group/seo",
                          onMouseEnter: () => setIsSeoSubOpen(true),
                          onMouseLeave: () => setIsSeoSubOpen(false),
                          children: [
                            /* @__PURE__ */ jsxs(
                              "button",
                              {
                                className: "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                                children: [
                                  "Managed AI SEO Services",
                                  /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxs(
                              "div",
                              {
                                className: `absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isSeoSubOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`,
                                children: [
                                  /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/", className: "block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors", children: "Overview" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/aeo/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Answer Engine Optimization (AEO)" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/geo/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Generative Engine Optimization (GEO)" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/local-seo/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Local SEO" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/authority-building/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Authority Building" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/link-building/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Link Building" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/technical-seo/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Technical SEO" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/on-page-seo/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "On-Page SEO" })
                                ]
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "relative group/ads",
                          onMouseEnter: () => setIsAdsSubOpen(true),
                          onMouseLeave: () => setIsAdsSubOpen(false),
                          children: [
                            /* @__PURE__ */ jsxs(
                              "button",
                              {
                                className: "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                                children: [
                                  "Paid Advertising",
                                  /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxs(
                              "div",
                              {
                                className: `absolute left-full top-0 ml-1 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-200 ${isAdsSubOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`,
                                children: [
                                  /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/", className: "block px-4 py-2.5 rounded-lg text-sm text-primary hover:bg-secondary transition-colors", children: "Paid Advertising Overview" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/google-ads/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Google PPC Ads" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/google-local-services-ads/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Google Local Service Ads" }),
                                  /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/facebook-ads/", className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors", children: "Meta & Facebook Ads" })
                                ]
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: "/services/marketing-automation-for-small-business/",
                          className: "block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                          children: "Marketing Automation"
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative group",
              onMouseEnter: () => setIsCaseStudiesOpen(true),
              onMouseLeave: () => setIsCaseStudiesOpen(false),
              children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    className: `flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${location.pathname.startsWith("/case-studies") ? "text-primary" : "text-muted-foreground"}`,
                    children: [
                      "Case Studies",
                      /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 transition-transform group-hover:rotate-180" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${isCaseStudiesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`,
                    children: [
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: "/case-studies/local-seo-service/hvac-plumbing-electrical/",
                          className: "block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                          children: "HVAC, Plumbing & Electrical — Local SEO"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: "/case-studies/google-ads-for-small-businesses/hvac-plumbing-electrical/",
                          className: "block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                          children: "HVAC, Plumbing & Electrical — Google Ads"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: "/case-studies/roofers/",
                          className: "block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                          children: "Roofers"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: "/case-studies/tree-lawn-landscaping/",
                          className: "block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                          children: "Tree Care, Lawn Care & Landscaping"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: "/case-studies/home-remodeling/",
                          className: "block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                          children: "Home Remodeling"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: "/case-studies/cleaning-services/",
                          className: "block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                          children: "Cleaning Services"
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative group",
              onMouseEnter: () => setIsLocationsOpen(true),
              onMouseLeave: () => setIsLocationsOpen(false),
              children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    className: `flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${location.pathname.startsWith("/locations") ? "text-primary" : "text-muted-foreground"}`,
                    children: [
                      "Locations",
                      /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 transition-transform group-hover:rotate-180" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl p-2 transition-all duration-300 ${isLocationsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`,
                    children: /* @__PURE__ */ jsx(
                      Link,
                      {
                        to: "/locations/locations-we-serve/",
                        className: "block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                        children: "Locations We Serve"
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/about/",
              className: `text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/about" ? "text-primary" : "text-muted-foreground"}`,
              children: "About"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact/",
              className: `text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/contact/" || location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"}`,
              children: "Contact"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "tel:+19258863724",
            className: "flex flex-col items-center justify-center px-5 py-2 border-2 border-foreground/80 rounded-lg hover:bg-foreground/10 transition-colors",
            children: [
              /* @__PURE__ */ jsxs("span", { className: "text-sm text-foreground font-semibold tracking-wide uppercase", children: [
                "Call Now ",
                /* @__PURE__ */ jsx("span", { className: "text-xs", children: "24x7" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-foreground text-lg font-bold", children: "+1 (925) 886-3724" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsOpen(!isOpen),
            className: "lg:hidden p-2 text-foreground",
            "aria-label": isOpen ? "Close menu" : "Open menu",
            "aria-expanded": isOpen,
            children: isOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`,
          role: "navigation",
          "aria-label": "Mobile navigation",
          children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-6 space-y-4", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/",
                onClick: () => setIsOpen(false),
                className: "block text-foreground font-medium",
                children: "Home"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setMobileServicesOpen(!mobileServicesOpen),
                  className: "flex items-center justify-between w-full text-foreground font-medium",
                  children: [
                    "Services",
                    /* @__PURE__ */ jsx(ChevronDown, { className: `w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}` })
                  ]
                }
              ),
              mobileServicesOpen && /* @__PURE__ */ jsxs("div", { className: "pl-4 space-y-2", children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/services/",
                    onClick: () => setIsOpen(false),
                    className: "block py-2 text-primary font-medium",
                    children: "Service Overview"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/services/website-design/",
                    onClick: () => setIsOpen(false),
                    className: "block py-2 text-muted-foreground hover:text-primary",
                    children: "Website That Converts"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: () => setMobileSeoSubOpen(!mobileSeoSubOpen),
                      className: "flex items-center justify-between w-full py-2 text-muted-foreground hover:text-primary",
                      children: [
                        "Managed AI SEO Services",
                        /* @__PURE__ */ jsx(ChevronDown, { className: `w-3.5 h-3.5 transition-transform duration-200 ${mobileSeoSubOpen ? "rotate-180" : ""}` })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: `overflow-hidden transition-all duration-200 ${mobileSeoSubOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`, children: [
                    /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-primary hover:text-primary", children: "Overview" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/aeo/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Answer Engine Optimization (AEO)" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/geo/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Generative Engine Optimization (GEO)" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/local-seo/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Local SEO" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/authority-building/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Authority Building" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/link-building/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Link Building" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/technical-seo/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Technical SEO" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/seo-agency/on-page-seo/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "On-Page SEO" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: () => setMobileAdsSubOpen(!mobileAdsSubOpen),
                      className: "flex items-center justify-between w-full py-2 text-muted-foreground hover:text-primary",
                      children: [
                        "Paid Advertising",
                        /* @__PURE__ */ jsx(ChevronDown, { className: `w-3.5 h-3.5 transition-transform duration-200 ${mobileAdsSubOpen ? "rotate-180" : ""}` })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: `overflow-hidden transition-all duration-200 ${mobileAdsSubOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`, children: [
                    /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-primary hover:text-primary", children: "Paid Advertising Overview" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/google-ads/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Google PPC Ads" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/google-local-services-ads/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Google Local Service Ads" }),
                    /* @__PURE__ */ jsx(Link, { to: "/services/paid-advertising/facebook-ads/", onClick: () => setIsOpen(false), className: "block py-2 pl-4 text-sm text-muted-foreground hover:text-primary", children: "Meta & Facebook Ads" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/services/marketing-automation-for-small-business/",
                    onClick: () => setIsOpen(false),
                    className: "block py-2 text-muted-foreground hover:text-primary",
                    children: "Marketing Automation"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setMobileCaseStudiesOpen(!mobileCaseStudiesOpen),
                  className: "flex items-center justify-between w-full text-foreground font-medium",
                  children: [
                    "Case Studies",
                    /* @__PURE__ */ jsx(ChevronDown, { className: `w-4 h-4 transition-transform ${mobileCaseStudiesOpen ? "rotate-180" : ""}` })
                  ]
                }
              ),
              mobileCaseStudiesOpen && /* @__PURE__ */ jsxs("div", { className: "pl-4 space-y-2", children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/case-studies/local-seo-service/hvac-plumbing-electrical/",
                    onClick: () => setIsOpen(false),
                    className: "block py-2 text-muted-foreground hover:text-primary",
                    children: "HVAC, Plumbing & Electrical — Local SEO"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/case-studies/google-ads-for-small-businesses/hvac-plumbing-electrical/",
                    onClick: () => setIsOpen(false),
                    className: "block py-2 text-muted-foreground hover:text-primary",
                    children: "HVAC, Plumbing & Electrical — Google Ads"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/case-studies/roofers/",
                    onClick: () => setIsOpen(false),
                    className: "block py-2 text-muted-foreground hover:text-primary",
                    children: "Roofers"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/case-studies/tree-lawn-landscaping/",
                    onClick: () => setIsOpen(false),
                    className: "block py-2 text-muted-foreground hover:text-primary",
                    children: "Tree Care, Lawn Care & Landscaping"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/case-studies/home-remodeling/",
                    onClick: () => setIsOpen(false),
                    className: "block py-2 text-muted-foreground hover:text-primary",
                    children: "Home Remodeling"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/case-studies/cleaning-services/",
                    onClick: () => setIsOpen(false),
                    className: "block py-2 text-muted-foreground hover:text-primary",
                    children: "Cleaning Services"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setMobileLocationsOpen(!mobileLocationsOpen),
                  className: "flex items-center justify-between w-full text-foreground font-medium",
                  children: [
                    "Locations",
                    /* @__PURE__ */ jsx(ChevronDown, { className: `w-4 h-4 transition-transform ${mobileLocationsOpen ? "rotate-180" : ""}` })
                  ]
                }
              ),
              mobileLocationsOpen && /* @__PURE__ */ jsx("div", { className: "pl-4 space-y-2", children: /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/locations/locations-we-serve/",
                  onClick: () => setIsOpen(false),
                  className: "block py-2 text-muted-foreground hover:text-primary",
                  children: "Locations We Serve"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/about/",
                onClick: () => setIsOpen(false),
                className: "block text-foreground font-medium",
                children: "About"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/contact/",
                onClick: () => setIsOpen(false),
                className: "block text-foreground font-medium",
                children: "Contact"
              }
            ),
            /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", className: "w-full mt-4", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/contact/", onClick: () => setIsOpen(false), children: "Get Free Audit" }) })
          ] })
        }
      )
    ] })
  ] });
};
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "bg-card border-t border-border", role: "contentinfo", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: growsmallbizLogo,
              alt: "GrowSmallBiz Digital Marketing",
              className: "h-12 w-auto",
              width: 48,
              height: 48
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-bold font-display text-foreground", children: "GrowSmallBiz Digital Marketing" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "GrowSmallBiz helps local service businesses attract more qualified leads, improve conversions, and streamline follow-up through websites, SEO, paid ads, CRM systems, automation, and AI-powered customer communication." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-foreground mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "About Us" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "All Services" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact/", className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-foreground mb-4", children: "Get in Touch" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: "contact@growsmallbiz.io" }),
          /* @__PURE__ */ jsx("li", { children: "+1 (925) 886-3724" }),
          /* @__PURE__ */ jsx("li", { className: "pt-4", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("a", { href: "https://maps.app.goo.gl/oSLNhYTJwXn4ixuX8", target: "_blank", rel: "noopener noreferrer", "aria-label": "Google Business Profile", className: "transition-colors", style: { color: "#4285F4" }, children: /* @__PURE__ */ jsx(MapPin, { size: 20 }) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/growsmallbizDM/", target: "_blank", rel: "noopener noreferrer", "aria-label": "Facebook", className: "transition-colors", style: { color: "#1877F2" }, children: /* @__PURE__ */ jsx(Facebook, { size: 20 }) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/@GrowSmallBizDM", target: "_blank", rel: "noopener noreferrer", "aria-label": "YouTube", className: "transition-colors", style: { color: "#FF0000" }, children: /* @__PURE__ */ jsx(Youtube, { size: 20 }) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/growsmallbiz.io/", target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", className: "transition-colors", style: { color: "#E4405F" }, children: /* @__PURE__ */ jsx(Instagram, { size: 20 }) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/company/growsmallbiz-dm/", target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn", className: "transition-colors", style: { color: "#0A66C2" }, children: /* @__PURE__ */ jsx(Linkedin, { size: 20 }) }),
            /* @__PURE__ */ jsx("a", { href: "https://x.com/GrowSmallBizDM", target: "_blank", rel: "noopener noreferrer", "aria-label": "Twitter / X", className: "transition-colors", style: { color: "#1DA1F2" }, children: /* @__PURE__ */ jsx(Twitter, { size: 20 }) })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "© 2026 GrowSmallBiz Digital Marketing. All rights reserved." }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-6 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsx(Link, { to: "/privacy-policy/", className: "hover:text-primary transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx(Link, { to: "/terms-of-service/", className: "hover:text-primary transition-colors", children: "Terms of Service" })
      ] })
    ] })
  ] }) });
};
const subrataHeadshot = "/assets/subrata-guha-headshot-sm-BQ5mTN7z.jpg";
const baseContactCTA = {
  name: "Subrata Guha",
  role: "Founder, GrowSmallBiz",
  buttonText: "Book A Meeting",
  buttonHref: "/contact/",
  image: subrataHeadshot
};
const createContactCTA = (dynamicFields) => ({
  ...baseContactCTA,
  ...dynamicFields
});
const createServiceContactCTA = (serviceName, customTagline) => ({
  ...baseContactCTA,
  title: `Have more questions about ${serviceName}?`,
  description: "We're here to help!",
  tagline: customTagline
});
const BASE_URL = "https://growsmallbiz.io";
const PageJsonLd = ({
  pageType,
  name,
  description,
  url,
  breadcrumbs
}) => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": pageType,
    name,
    description,
    url: `${BASE_URL}${url}${url.endsWith("/") ? "" : "/"}`,
    publisher: {
      "@type": "Organization",
      name: "GrowSmallBiz Digital Marketing",
      url: BASE_URL
    }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.name,
        item: `${BASE_URL}${crumb.url}${crumb.url.endsWith("/") ? "" : "/"}`
      }))
    ]
  };
  return /* @__PURE__ */ jsxs(Head, { children: [
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(pageSchema) }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) })
  ] });
};
const TestimonialsSection = lazy$1(() => import("./assets/TestimonialsSection-RF2TwlRV.js").then((m) => ({ default: m.TestimonialsSection })));
const FAQSection = lazy$1(() => import("./assets/FAQSection-BO0A5ebo.js").then((m) => ({ default: m.FAQSection })));
const AnimatedStatsSection = lazy$1(() => import("./assets/AnimatedStatsSection-DCypE1b8.js").then((m) => ({ default: m.AnimatedStatsSection })));
const CardCTA = lazy$1(() => import("./assets/index-BEWzl7Fg.js").then((m) => ({ default: m.CardCTA })));
const WhyChooseSection = lazy$1(() => import("./assets/WhyChooseSection-DuLCr5_6.js").then((m) => ({ default: m.WhyChooseSection })));
const HomeCaseStudySection = lazy$1(() => import("./assets/HomeCaseStudySection-BFlxtFa6.js").then((m) => ({ default: m.HomeCaseStudySection })));
const homepageStats = [
  { value: "1", label: "Connected System", icon: Layers },
  { value: "AI", label: "Powered at Every Stage", icon: Brain },
  { value: "DFY", label: "Done-for-You Execution", icon: Wrench },
  { value: "1", label: "Multi-Channel Dashboard", icon: LayoutDashboard }
];
const coreServices = [
  {
    title: "Capture",
    description: "Get found, build trust quickly, and turn visitors into inquiries.",
    features: [
      "Website Design",
      "Managed AI SEO",
      "Google & Meta Ads"
    ],
    icon: Target
  },
  {
    title: "Nurture",
    description: "Keep leads engaged with automated follow-up so interest does not go cold.",
    features: [
      "CRM & Marketing Automation",
      "Automated Email & SMS Follow-Up",
      "Missed-Call Capture / AI Follow-Up"
    ],
    icon: Heart
  },
  {
    title: "Convert",
    description: "Move more leads into booked calls, appointments, and sales opportunities.",
    features: [
      "Pipeline Management",
      "Booking / Appointment Flows",
      "AI Lead Handling"
    ],
    icon: TrendingUp
  },
  {
    title: "Retain",
    description: "Strengthen loyalty, trust, and repeat business with better post-conversion systems.",
    features: [
      "Review Request Workflows",
      "Review Response Workflows",
      "Ongoing Customer Follow-Up"
    ],
    icon: Users
  }
];
const homepageFAQs = [
  {
    question: "What types of businesses do you work with?",
    answer: "We work primarily with local service businesses, including home services, healthcare, legal, accounting, and other businesses that rely on visibility, trust, and fast lead follow-up."
  },
  {
    question: "Do I need every service at once?",
    answer: "No. We focus first on the areas most likely to create impact, then build from there as your growth system matures."
  },
  {
    question: "How soon can we get started?",
    answer: "We can usually begin with a strategy call and initial review quickly, then prioritize the right next steps based on your goals and current setup."
  },
  {
    question: "How long does it take to see results?",
    answer: "Timelines vary by service. Paid ads and follow-up improvements can create results faster, while SEO and long-term visibility strategies build over time."
  },
  {
    question: "Is this done-for-you or do I have to manage it myself?",
    answer: "GrowSmallBiz is designed as a done-for-you service. We handle the strategy, setup, execution, and optimization so you do not have to juggle the marketing systems yourself."
  },
  {
    question: "How do you use AI in the system?",
    answer: "We use AI-powered systems across the client acquisition process, including search visibility support, follow-up automation, AI lead handling, and faster response workflows."
  },
  {
    question: "Will I be able to see what is working?",
    answer: "Yes. We provide a clear multi-channel performance dashboard so you can track how your visibility, leads, follow-up, and conversion activity are performing."
  },
  {
    question: "Is marketing performance guaranteed?",
    answer: "No marketing channel performs perfectly all the time. That is why we track performance closely, recalibrate strategy when needed, and keep improving the system based on real data."
  },
  {
    question: "Do you offer any kind of performance guarantee?",
    answer: "Yes. If we do not generate leads within a pre-agreed timeframe and scope, we continue working at no additional management fee until results are delivered."
  }
];
const howItWorksSteps = [
  {
    title: "Strategy Call",
    description: "We learn about your goals, marketing gaps, and where better systems can create the biggest impact.",
    icon: PhoneCall
  },
  {
    title: "Review & Analysis",
    description: "We evaluate your website, local visibility, reviews, follow-up systems, and competitive landscape.",
    icon: ClipboardCheck
  },
  {
    title: "Build & Launch",
    description: "We implement the right mix of website improvements, SEO, ads, automation, and AI lead handling.",
    icon: Rocket
  },
  {
    title: "Optimize & Grow",
    description: "As data comes in, we improve what is working and refine what is not.",
    icon: Settings
  }
];
const Index = () => {
  const { strategySessionUrl } = useUtm();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "AI Digital Marketing for Local Businesses | GrowSmallBiz" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Get more qualified local leads with a smarter marketing system. Websites, SEO, paid ads, CRM automation, and AI-powered follow-up working together for local service businesses." })
    ] }),
    /* @__PURE__ */ jsx(
      PageJsonLd,
      {
        pageType: "WebPage",
        name: "GrowSmallBiz | AI-Powered Digital Marketing for Local Service Businesses",
        description: "Get more qualified local leads with a smarter marketing system. Websites, SEO, paid ads, CRM automation, and AI-powered follow-up for local service businesses.",
        url: "/",
        breadcrumbs: []
      }
    ),
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "GrowSmallBiz Digital Marketing",
      "url": "https://growsmallbiz.io",
      "telephone": "+1-925-886-3724",
      "description": "AI-powered SEO and digital marketing agency specializing in local service businesses.",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "sameAs": []
    }) }) }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-24 overflow-hidden", children: [
        /* @__PURE__ */ jsxs("picture", { children: [
          /* @__PURE__ */ jsx("source", { media: "(max-width: 768px)", srcSet: "/images/homepage-hero-bg-mobile.webp" }),
          /* @__PURE__ */ jsx("source", { media: "(min-width: 769px)", srcSet: "/images/homepage-hero-bg.webp" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/homepage-hero-bg.webp",
              alt: "",
              role: "presentation",
              fetchPriority: "high",
              loading: "eager",
              width: 1920,
              height: 1080,
              className: "absolute inset-0 w-full h-full object-cover"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background/85" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl hidden md:block" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl hidden md:block" }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center space-y-8", children: [
          /* @__PURE__ */ jsx("div", { className: "animate-fade-up-safe", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium", children: [
            /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4" }),
            "AI-Powered Growth System for Local Service Businesses"
          ] }) }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up-safe delay-100", children: [
            "More Leads. Stronger Visibility.",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "A System That Works While You Work." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-muted-foreground font-medium animate-fade-up-safe delay-200", children: "GrowSmallBiz helps local service businesses attract qualified leads, show up in local search, follow up faster, and convert more opportunities with one connected, AI-powered growth system." }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up-safe delay-300", children: "We handle your website, SEO, paid ads, CRM automation, and AI-powered follow-up so you can spend less time managing marketing and more time focusing on your business, your clients, and your family." }),
          /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground/80 italic max-w-3xl mx-auto animate-fade-up-safe", style: { animationDelay: "0.35s" }, children: "When performance needs improvement, we review the data, recalibrate the strategy, and keep optimizing the system." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-safe delay-400", children: [
            /* @__PURE__ */ jsx("a", { href: strategySessionUrl, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxs(Button, { variant: "hero", size: "xl", children: [
              "Get Free Strategy Call",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
            ] }) }),
            /* @__PURE__ */ jsx(Link, { to: "#services", children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", children: "Explore Services" }) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground animate-fade-up-safe", style: { animationDelay: "0.5s" }, children: "Built for home services, healthcare, legal, accounting, and other local service businesses." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "py-24 bg-card/80 relative overflow-hidden border-t border-primary/10 cv-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl hidden md:block" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl hidden md:block" }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center mb-16 animate-fade-up", children: [
            /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: "From Fragmented to Focused" }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6", children: "Most Local Businesses Are Losing Leads They Never Knew They Had" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "The problem is usually not effort. It is the gap between the tools and tactics you are already using." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-background/80 border border-ghl-icon rounded-2xl p-8 animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.3)]", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(XCircle, { className: "w-6 h-6 text-destructive" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-foreground", children: "The Fragmented Approach" })
              ] }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: [
                "Separate tools and platforms that do not work together.",
                "Leads slipping through the cracks because follow-up is delayed or inconsistent.",
                "Weak local visibility when nearby customers are actively searching.",
                "Unclear tracking that makes it hard to know what is driving revenue.",
                "Feast-or-famine lead flow instead of steady growth."
              ].map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-muted-foreground", children: [
                /* @__PURE__ */ jsx(XCircle, { className: "w-5 h-5 text-destructive/60 shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
              ] }, index)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-background/80 border-2 border-primary/30 rounded-2xl p-8 relative animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.5)]", style: { animationDelay: "0.1s" }, children: [
              /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full", children: "Our Solution" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-primary" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-foreground", children: "A Connected Growth System" })
              ] }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: [
                "Website, SEO, ads, reviews, and follow-up all support one conversion path.",
                "Faster response times with automation and AI-powered lead handling.",
                "Stronger local visibility and trust before the first conversation happens.",
                "Clearer attribution so you can see what is working.",
                "More predictable growth because the system is working together."
              ].map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-foreground", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
              ] }, index)) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "section-dark cv-auto", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: "How It Works" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6", children: [
            "A Clear Path from Strategy to",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Results" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "You do not need everything at once. We focus on the priorities most likely to create meaningful impact first." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", children: howItWorksSteps.map((step, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-background/80 border border-ghl-icon rounded-xl p-6 text-center space-y-4 animate-fade-up transition-all hover:shadow-[0_0_60px_rgba(255,127,80,0.5)]",
            style: { animationDelay: `${index * 0.1}s` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(step.icon, { className: "w-8 h-8 text-primary" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-foreground text-lg", children: step.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: step.description })
            ]
          },
          index
        )) }),
        /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto text-center", children: /* @__PURE__ */ jsx("a", { href: strategySessionUrl, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxs(Button, { variant: "hero", size: "lg", className: "animate-fade-up", children: [
          "Get Free Strategy Call",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { id: "services", className: "py-24 bg-card/80 relative overflow-hidden border-t border-primary/10 cv-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center mb-16 animate-fade-up", children: [
            /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: "Core Services" }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-6", children: [
              "A Connected Growth System for",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Local Service Businesses" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "GrowSmallBiz combines AI-powered systems and done-for-you services to help you capture leads, nurture them automatically, convert more of them into booked jobs, and retain more customers — without forcing you to manage a stack of disconnected tools yourself." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: coreServices.map((service, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "backdrop-blur-sm rounded-2xl p-6 space-y-4 animate-fade-up relative transition-all hover:shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]",
              style: { animationDelay: `${index * 0.05}s`, border: "2px solid #17a2b8ff", backgroundColor: "#2d465cff" },
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-ghl-icon/20 flex items-center justify-center", children: /* @__PURE__ */ jsx(service.icon, { className: "w-6 h-6 text-ghl-icon" }) }),
                /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-foreground text-xl", children: service.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: service.description }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: service.features.map((feature, featureIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-ghl-icon shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { children: feature })
                ] }, featureIndex)) })
              ]
            },
            index
          )) }),
          /* @__PURE__ */ jsx("div", { className: "text-center mt-12 animate-fade-up", children: /* @__PURE__ */ jsx(Link, { to: "/services/", children: /* @__PURE__ */ jsxs(Button, { variant: "heroOutline", size: "lg", children: [
            "Explore All Services",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Suspense, { fallback: null, children: [
        /* @__PURE__ */ jsx(
          CardCTA,
          {
            title: "Ready to Build a Smarter Growth System?",
            description: "Book a free strategy call to see how our done-for-you, AI-powered growth system can take marketing and follow-up off your plate, so you can focus more on running your business and spending time where it matters most. We also provide a clear dashboard view of performance and continuously recalibrate the strategy when results need improvement.",
            buttonText: "Get Free Strategy Call",
            buttonHref: strategySessionUrl
          }
        ),
        /* @__PURE__ */ jsx(
          WhyChooseSection,
          {
            title: "Why Local Service Businesses Choose GrowSmallBiz",
            subtitle: "Why GrowSmallBiz",
            description: "GrowSmallBiz is built around one idea: local businesses grow faster when AI-powered systems, done-for-you execution, adaptive strategy, and clear reporting all work together as one connected client acquisition engine.",
            items: [
              {
                title: "AI at Every Stage",
                description: "We use AI-powered systems across visibility, follow-up, lead handling, and conversion support.",
                icon: Brain
              },
              {
                title: "Done-for-You Execution",
                description: "We do the heavy lifting so you do not have to manage websites, SEO, ads, and automation yourself.",
                icon: Wrench
              },
              {
                title: "Built for Local Growth",
                description: "The messaging, channels, and conversion flow are designed for local service business growth.",
                icon: TrendingUp
              },
              {
                title: "Adaptive Strategy",
                description: "When a channel or campaign is not performing as expected, we review the data and recalibrate the strategy.",
                icon: Settings
              },
              {
                title: "Multi-Channel Dashboard",
                description: "See lead generation and performance across SEO, ads, follow-up, and conversion activity in one place.",
                icon: BarChart3
              },
              {
                title: "Performance Commitment",
                description: "We stand behind our work with a performance guarantee. If we do not generate leads within a pre-agreed timeframe and scope, we continue working at no additional management fee until results are delivered.",
                icon: Award
              }
            ]
          }
        ),
        /* @__PURE__ */ jsx(AnimatedStatsSection, { stats: homepageStats, columns: 4 }),
        /* @__PURE__ */ jsx(
          TestimonialsSection,
          {
            title: "What Our Clients Say",
            subtitle: "Real feedback from business owners who wanted better visibility, better systems, and better follow-up."
          }
        ),
        /* @__PURE__ */ jsx(HomeCaseStudySection, {}),
        /* @__PURE__ */ jsx(
          FAQSection,
          {
            title: "Frequently Asked Questions",
            subtitle: "Answers to common questions local service business owners ask before getting started.",
            faqs: homepageFAQs,
            contactCTA: {
              ...baseContactCTA,
              title: "Have more questions?",
              description: "We're here to help. Reach out to us for a personalized consultation.",
              tagline: "Let's grow your business together."
            }
          }
        ),
        /* @__PURE__ */ jsx(
          CardCTA,
          {
            title: "Let's Build Your Growth Engine",
            description: "If you want AI-powered client acquisition systems, done-for-you execution, adaptive strategy, and a clear multi-channel dashboard without patching together disconnected tools, start with a free strategy call.",
            buttonText: "Get Free Strategy Call",
            buttonHref: strategySessionUrl
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const AppLayout = () => /* @__PURE__ */ jsxs(TooltipProvider, { children: [
  /* @__PURE__ */ jsx(Toaster$1, {}),
  /* @__PURE__ */ jsx(Toaster, {}),
  /* @__PURE__ */ jsx(Outlet, {})
] });
const lazy = (importFn) => async () => {
  const mod = await importFn();
  return { Component: mod.default };
};
const routes = [
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: Index },
      { path: "about", lazy: lazy(() => import("./assets/About-QM4VOJlJ.js")) },
      { path: "services", lazy: lazy(() => import("./assets/Services-CqoTySlU.js")) },
      { path: "service", lazy: lazy(() => import("./assets/Services-CqoTySlU.js")) },
      { path: "services/paid-advertising", lazy: lazy(() => import("./assets/PaidMedia-1e1vrghl.js")) },
      { path: "services/paid-advertising/google-ads", lazy: lazy(() => import("./assets/GoogleAds-D-WJFMw5.js")) },
      { path: "services/paid-advertising/google-local-services-ads", lazy: lazy(() => import("./assets/LSA-Db7mnemW.js")) },
      { path: "services/paid-advertising/facebook-ads", lazy: lazy(() => import("./assets/FacebookAds-B41rUMKH.js")) },
      { path: "services/website-design", lazy: lazy(() => import("./assets/WebsiteDesign-GziT0n-4.js")) },
      { path: "services/seo-agency", lazy: lazy(() => import("./assets/ManagedAISEO-DSm52U3I.js")) },
      { path: "services/seo-agency/aeo", lazy: lazy(() => import("./assets/AEO-DohEpG7I.js")) },
      { path: "services/seo-agency/geo", lazy: lazy(() => import("./assets/GEO-DVq7AHJX.js")) },
      { path: "services/seo-agency/local-seo", lazy: lazy(() => import("./assets/LocalSEO-Cg0X9Pyo.js")) },
      { path: "services/seo-agency/authority-building", lazy: lazy(() => import("./assets/AuthorityBuilding-DPxn_-ZM.js")) },
      { path: "services/seo-agency/link-building", lazy: lazy(() => import("./assets/LinkBuilding-eBMNDWuM.js")) },
      { path: "services/seo-agency/technical-seo", lazy: lazy(() => import("./assets/TechnicalSEO-C08EdQvS.js")) },
      { path: "services/seo-agency/on-page-seo", lazy: lazy(() => import("./assets/OnPageSEO-Cdn24Mny.js")) },
      { path: "services/paid-ads", lazy: lazy(() => import("./assets/PaidMedia-1e1vrghl.js")) },
      { path: "services/marketing-automation-for-small-business", lazy: lazy(() => import("./assets/MarketingAutomation-2Cl-sywS.js")) },
      { path: "services/marketing-automation-for-small-business/universal-inbox", lazy: lazy(() => import("./assets/UniversalInbox-B2aqLUDb.js")) },
      { path: "services/marketing-automation-for-small-business/workflow-automations", lazy: lazy(() => import("./assets/WorkflowAutomations-CZB7g72i.js")) },
      { path: "services/marketing-automation-for-small-business/website-builder", lazy: lazy(() => import("./assets/WebsiteBuilder-Cwqk9hpC.js")) },
      { path: "services/marketing-automation-for-small-business/email-sms-marketing", lazy: lazy(() => import("./assets/EmailSmsMarketing-C1aF4SMe.js")) },
      { path: "services/marketing-automation-for-small-business/integrated-payments", lazy: lazy(() => import("./assets/IntegratedPayments-CmTA_TT0.js")) },
      { path: "services/marketing-automation-for-small-business/social-media-planner", lazy: lazy(() => import("./assets/SocialMediaPlanner-C_DWJyHb.js")) },
      { path: "services/marketing-automation-for-small-business/calendar-scheduling", lazy: lazy(() => import("./assets/CalendarScheduling-lqqBc0Sj.js")) },
      { path: "services/marketing-automation-for-small-business/sales-tracker", lazy: lazy(() => import("./assets/SalesTracker-CLG2WRqG.js")) },
      { path: "services/marketing-automation-for-small-business/forms-surveys", lazy: lazy(() => import("./assets/FormsSurveys-D5psyI4q.js")) },
      { path: "services/marketing-automation-for-small-business/reviews", lazy: lazy(() => import("./assets/Reviews-DMyFQ8Q1.js")) },
      { path: "services/marketing-automation-for-small-business/call-tracking", lazy: lazy(() => import("./assets/CallTracking-Bi3uBH2p.js")) },
      { path: "services/marketing-automation-for-small-business/crm", lazy: lazy(() => import("./assets/Crm-3isvytQk.js")) },
      { path: "services/marketing-automation-for-small-business/sales-funnels", lazy: lazy(() => import("./assets/SalesFunnels-DnCza2AQ.js")) },
      { path: "services/marketing-automation-for-small-business/memberships", lazy: lazy(() => import("./assets/Memberships-BI3yIAui.js")) },
      { path: "services/marketing-automation-for-small-business/webchat", lazy: lazy(() => import("./assets/Webchat-ClxBKgik.js")) },
      { path: "services/marketing-automation-for-small-business/generate-leads", lazy: lazy(() => import("./assets/GenerateLeads-vofccXYh.js")) },
      { path: "locations/locations-we-serve", lazy: lazy(() => import("./assets/LocationsWeServe-DpQYZzXg.js")) },
      { path: "case-studies/local-seo-service/hvac-plumbing-electrical", lazy: lazy(() => import("./assets/HvacPlumbingElectrical-C4AbaAg0.js")) },
      { path: "case-studies/google-ads-for-small-businesses/hvac-plumbing-electrical", lazy: lazy(() => import("./assets/HvacPlumbingElectrical-DV6N6jwn.js")) },
      { path: "case-studies/roofers", lazy: lazy(() => import("./assets/Roofers-D9bQusy-.js")) },
      { path: "case-studies/tree-lawn-landscaping", lazy: lazy(() => import("./assets/TreeLawnLandscaping-BiAYFZo7.js")) },
      { path: "case-studies/home-remodeling", lazy: lazy(() => import("./assets/HomeRemodeling-CIHmVTKL.js")) },
      { path: "case-studies/cleaning-services", lazy: lazy(() => import("./assets/CleaningServices-iyu8bVOm.js")) },
      { path: "contact", lazy: lazy(() => import("./assets/Contact-B2voR1pC.js")) },
      { path: "privacy-policy", lazy: lazy(() => import("./assets/PrivacyPolicy-DHvbtSpC.js")) },
      { path: "terms-of-service", lazy: lazy(() => import("./assets/TermsOfService-bl6zjpFm.js")) },
      { path: "404", lazy: lazy(() => import("./assets/NotFound-Dxwzltco.js")) },
      { path: "*", lazy: lazy(() => import("./assets/NotFound-Dxwzltco.js")) }
    ]
  }
];
const createRoot = ViteReactSSG({ routes });
export {
  Button as B,
  CTA_URLS as C,
  Footer as F,
  Header as H,
  PageJsonLd as P,
  cn as a,
  baseContactCTA as b,
  createContactCTA as c,
  createRoot,
  createServiceContactCTA as d,
  buildCtaUrl as e,
  useUtm as u
};
