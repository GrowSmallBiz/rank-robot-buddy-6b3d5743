import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { S as ServiceJsonLd } from "./ServiceJsonLd-62JZkfim.js";
import { H as Header, B as Button } from "./Header-Dct2bBAe.js";
import { F as Footer } from "./Footer-5rMz2U4O.js";
import { ConsultationFormSection } from "./ConsultationFormSection-DDNhkaf7.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-9cq_VkaS.js";
import { G as GlowCard } from "./glow-card-DLstjNul.js";
import { C as Carousel, a as CarouselContent, b as CarouselItem, c as CarouselPrevious, d as CarouselNext } from "./carousel-Ck0YRfGi.js";
import { Building, ArrowRight, Zap, Home, Database, Globe, CheckCircle2, XCircle, Search, MapPin, BarChart3, Map, MessageSquare, Star, ExternalLink, Clock, RefreshCw, Target, Calculator, Megaphone, Phone, Bot, Share2, Calendar, Shield } from "lucide-react";
import { u as useUtm } from "./use-utm-CiJKCMCk.js";
import { s as subrataHeadshot, r as realtorWebsiteImg, d as realtorLeadGenImg, e as realtorIdxAddonsImg, j as realtorCrmImg, h as realtorIdxIntegrationImg, i as realtorMarketingImg, k as realtorReputationImg, f as realtorAiReceptionistImg, g as realtorConversationalAiImg, a as realtorSeoImg, b as realtorPaidAdsImg, c as realtorSocialMediaImg } from "./subrata-guha-headshot-CtoC2oVw.js";
import "react-router-dom";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../main.mjs";
import "react-helmet-async";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tabs";
import "embla-carousel-react";
const idxSearchTool = "/assets/idx-search-tool-DA7yIfoq.webp";
const idxGoogleMap = "/assets/idx-google-map-hJes8S1V.webp";
const idxPlunkValuation = "/assets/idx-plunk-valuation-D3rwMdZz.webp";
const idxStylesColors = "/assets/idx-styles-colors-DSgK3BCX.webp";
const idxCountsWidget = "/assets/idx-counts-widget-CnrCW2cO.webp";
const idxTemplateResults = "/assets/idx-template-results-DClBAOkA.webp";
const idxTemplateRoster = "/assets/idx-template-roster-COl58o0K.webp";
const idxTemplateSearch = "/assets/idx-template-search-DVL7cZ9N.webp";
const idxTemplateDetails = "/assets/idx-template-details-DzUN07Bz.webp";
const idxTemplateMap = "/assets/idx-template-map-BLaqZvws.webp";
const painPoints = [
  {
    icon: Clock,
    title: "Missed Leads & Slow Response",
    description: "Potential buyers and sellers slip away when you can't respond instantly to inquiries."
  },
  {
    icon: Database,
    title: "Scattered Lead Information",
    description: "Contact info, property preferences, and follow-up notes spread across multiple systems."
  },
  {
    icon: Search,
    title: "Poor Online Visibility",
    description: "Struggling to rank for local real estate searches while competitors dominate."
  },
  {
    icon: RefreshCw,
    title: "Manual Follow-up Fatigue",
    description: "Spending hours on repetitive tasks instead of closing deals and showing properties."
  }
];
const websiteServices = [
  {
    id: "website",
    icon: Home,
    title: "Real Estate Website",
    description: "Professional IDX-integrated website that showcases listings and captures leads 24/7.",
    features: [
      "IDX Property Search Integration",
      "MLS Listing Sync",
      "Lead Capture Forms",
      "Mobile-Responsive Design",
      "Agent/Team Profiles",
      "Neighborhood Pages"
    ],
    color: "blue",
    image: realtorWebsiteImg
  },
  {
    id: "lead-gen",
    icon: Target,
    title: "Lead Generation Tools",
    description: "Capture buyer and seller leads with high-converting funnels and landing pages.",
    features: [
      "Property Valuation Pages",
      "Buyer/Seller Lead Funnels",
      "Social Media Ad Integration",
      "Landing Page Builder",
      "QR Code Property Flyers",
      "Open House Sign-in Forms"
    ],
    color: "green",
    image: realtorLeadGenImg
  },
  {
    id: "idx-addons",
    icon: Calculator,
    title: "IDX Add-ons & Enhancements",
    description: "Powerful tools to enhance your property search and keep visitors engaged.",
    features: [
      "Mortgage Calculator Widget",
      "School District Maps",
      "Sold Data Display",
      "Market Statistics",
      "Saved Search Alerts",
      "Zestimate Lookup"
    ],
    color: "amber",
    image: realtorIdxAddonsImg
  }
];
const crmServices = [
  {
    id: "crm",
    icon: Database,
    title: "Realtor AI Growth System",
    description: "All-in-one CRM with automated follow-ups, pipeline management, and AI conversations.",
    features: [
      "Smart Lead Routing",
      "Automated Follow-ups (SMS, Email, Voicemail)",
      "Pipeline Management",
      "Appointment Scheduling",
      "AI-Powered Conversations",
      "Missed Call Text-Back"
    ],
    color: "violet",
    image: realtorCrmImg
  },
  {
    id: "idx-integration",
    icon: RefreshCw,
    title: "IDX + CRM Integration",
    description: "Seamless data flow from property searches directly into your CRM for intelligent follow-up.",
    features: [
      "Real-time Lead Sync",
      "Saved Search Tracking",
      "Property Activity Alerts",
      "Custom Field Mapping",
      "Unified Dashboard",
      "Automated Workflow Triggers"
    ],
    color: "cyan",
    image: realtorIdxIntegrationImg
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing Automation",
    description: "Set-and-forget campaigns that nurture leads and keep you top-of-mind.",
    features: [
      "Drip Email Campaigns",
      "Birthday/Anniversary Reminders",
      "Market Update Newsletters",
      "Listing Alert Notifications",
      "Review Request Automation",
      "Social Media Scheduling"
    ],
    color: "pink",
    image: realtorMarketingImg
  },
  {
    id: "reputation",
    icon: Star,
    title: "Reputation & Reviews",
    description: "Build a 5-star online reputation that attracts referrals and builds trust.",
    features: [
      "Google Review Management",
      "Testimonial Collection",
      "Review Response Automation",
      "Rating Widgets for Website"
    ],
    color: "emerald",
    image: realtorReputationImg
  },
  {
    id: "ai-receptionist",
    icon: Phone,
    title: "AI Receptionist",
    description: "Never miss a call again. AI answers, qualifies leads, and books appointments 24/7.",
    features: [
      "24/7 Call Answering",
      "Lead Qualification",
      "Appointment Scheduling",
      "Call Transcription & Summaries",
      "CRM Integration",
      "Missed Call Text-Back"
    ],
    color: "violet",
    image: realtorAiReceptionistImg
  },
  {
    id: "conversational-ai",
    icon: Bot,
    title: "Conversational AI",
    description: "Intelligent chatbots that engage visitors, answer property questions, and capture leads.",
    features: [
      "Website Chat Widget",
      "Property Q&A Automation",
      "Lead Capture & Routing",
      "Multi-language Support",
      "SMS & Messenger Integration",
      "Handoff to Human Agent"
    ],
    color: "cyan",
    image: realtorConversationalAiImg
  }
];
const visibilityServices = [
  {
    id: "seo",
    icon: Search,
    title: "AI SEO Optimization",
    description: "Dominate local search results with AI-powered SEO strategies tailored for real estate.",
    features: [
      "Local Keyword Optimization",
      "Google Business Profile Management",
      "Content Strategy & Blog Posts",
      "Backlink Building",
      "Technical SEO Audits",
      "Competitor Analysis"
    ],
    color: "teal",
    image: realtorSeoImg
  },
  {
    id: "paid-ads",
    icon: BarChart3,
    title: "Paid Ads Management",
    description: "Targeted Google and Meta ads that drive qualified buyer and seller leads to your listings.",
    features: [
      "Google PPC Campaigns",
      "Meta (Facebook/Instagram) Ads",
      "Retargeting Campaigns",
      "Landing Page A/B Testing",
      "ROI Tracking & Reporting",
      "Budget Optimization"
    ],
    color: "orange",
    image: realtorPaidAdsImg
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Organic Social Media Posts",
    description: "Consistent, engaging content that builds your brand and attracts clients organically.",
    features: [
      "Content Calendar Management",
      "Property Showcase Posts",
      "Market Update Graphics",
      "Community Engagement",
      "Story & Reel Creation",
      "Brand Voice Development"
    ],
    color: "indigo",
    image: realtorSocialMediaImg
  }
];
const colorConfig = {
  blue: { bg: "bg-blue-500", bgLight: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30" },
  violet: { bg: "bg-violet-500", bgLight: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/30" },
  cyan: { bg: "bg-cyan-500", bgLight: "bg-cyan-500/10", text: "text-cyan-500", border: "border-cyan-500/30" },
  green: { bg: "bg-green-500", bgLight: "bg-green-500/10", text: "text-green-500", border: "border-green-500/30" },
  amber: { bg: "bg-amber-500", bgLight: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/30" },
  pink: { bg: "bg-pink-500", bgLight: "bg-pink-500/10", text: "text-pink-500", border: "border-pink-500/30" },
  emerald: { bg: "bg-emerald-500", bgLight: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/30" },
  teal: { bg: "bg-teal-500", bgLight: "bg-teal-500/10", text: "text-teal-500", border: "border-teal-500/30" },
  orange: { bg: "bg-orange-500", bgLight: "bg-orange-500/10", text: "text-orange-500", border: "border-orange-500/30" },
  indigo: { bg: "bg-indigo-500", bgLight: "bg-indigo-500/10", text: "text-indigo-500", border: "border-indigo-500/30" }
};
const funnelStages = [
  {
    stage: "Attract",
    icon: Globe,
    description: "Drive qualified traffic with IDX-powered website and local SEO",
    tactics: ["Property Search Website", "Local SEO & Google Business", "Social Media Ads", "Open House Marketing"]
  },
  {
    stage: "Capture",
    icon: Target,
    description: "Convert visitors into leads with high-value offers",
    tactics: ["Home Valuation Tool", "Buyer/Seller Funnels", "Lead Capture Forms", "QR Code Flyers"]
  },
  {
    stage: "Nurture",
    icon: MessageSquare,
    description: "Automated follow-up keeps you top-of-mind",
    tactics: ["Drip Email Campaigns", "SMS Follow-ups", "Saved Search Alerts", "Market Updates"]
  },
  {
    stage: "Convert",
    icon: Calendar,
    description: "Book appointments and close deals faster",
    tactics: ["AI Appointment Booking", "Pipeline Management", "Contract Automation", "Transaction Coordination"]
  }
];
const successStories = [
  { name: "Conde Real Estate & Mortgage", url: "https://conde-realestate.com/", type: "Office", description: "Full-service real estate and mortgage company" },
  { name: "Elvin Rivera", url: "https://elvinrivera360.com/", type: "Agent", description: "360° real estate services" },
  { name: "Tania Gardère MacLeod", url: "https://itstheperfectspot.com/", type: "Agent", description: "Find your perfect spot" },
  { name: "Salvador Salinas", url: "https://salsalinashomes.com/", type: "Agent", description: "Your trusted home expert" },
  { name: "Allen Grealish", url: "https://allensellsamity.com/", type: "Agent", description: "Local market specialist" },
  { name: "Kroetch Property Group", url: "https://kroetchpropertygroup.com/", type: "Team", description: "Professional real estate team" }
];
const faqCategories = [
  {
    id: "idx",
    label: "IDX & Website",
    icon: Home,
    color: "blue",
    faqs: [
      { question: "What is IDX and why do I need it?", answer: "IDX (Internet Data Exchange) allows you to display MLS listings directly on your website. This keeps visitors on your site longer, captures leads when they search for properties, and establishes you as a local market expert." },
      { question: "Can I use IDX with my existing website?", answer: "Yes! Our IDX integration service connects to any existing website platform. We ensure your IDX pages match your website's branding with the same colors, fonts, header, and footer." },
      { question: "How long does website setup take?", answer: "A new real estate website with full IDX integration is typically ready in 1-2 business days. This includes property search, MLS sync, lead capture forms, and mobile optimization." },
      { question: "What MLS boards are supported?", answer: "We support all major MLS boards across the United States through IDX Broker integration. During setup, we'll connect your specific MLS for seamless listing display." }
    ]
  },
  {
    id: "crm",
    label: "CRM & Automation",
    icon: Database,
    color: "violet",
    faqs: [
      { question: "How does the CRM integrate with IDX?", answer: "When a visitor saves a search, favorites a property, or submits an inquiry on your IDX website, their information automatically flows into your CRM. You can see their search preferences, viewed properties, and activity history—all in one dashboard." },
      { question: "What automations are included?", answer: "Pre-built workflows include: new lead welcome sequences, saved search notifications, property viewing follow-ups, anniversary/birthday reminders, review requests, and dormant lead re-engagement campaigns." },
      { question: "Can I customize the automated messages?", answer: "Absolutely! All email, SMS, and voicemail templates are fully customizable. You can adjust timing, messaging, and triggers to match your personal brand and communication style." },
      { question: "Does it work for teams and offices?", answer: "Yes! The system supports lead routing to multiple agents, team pipelines, office-wide reporting, and individual agent performance tracking. Each agent can have their own sub-account." }
    ]
  },
  {
    id: "leads",
    label: "Lead Generation",
    icon: Target,
    color: "emerald",
    faqs: [
      { question: "How do home valuation pages work?", answer: "Visitors enter their property address to get an instant estimate. This captures seller leads who are curious about their home's value. Their info goes directly to your CRM for follow-up." },
      { question: "What's included in buyer/seller funnels?", answer: "High-converting landing pages with lead magnets like 'First-Time Buyer Guide' or 'Home Selling Checklist.' These pages are optimized for Facebook and Google ads to maximize lead capture." },
      { question: "How do QR code flyers help?", answer: "Generate QR codes for each listing that link to detailed property pages. Use them on yard signs, open house materials, and print marketing. Scan tracking shows which properties generate the most interest." },
      { question: "Can I run Facebook and Google ads?", answer: "Yes! The system includes landing page builders optimized for paid advertising. We can also manage your ad campaigns as part of our marketing services." }
    ]
  },
  {
    id: "support",
    label: "Support & Setup",
    icon: Shield,
    color: "amber",
    faqs: [
      { question: "What support is included?", answer: "Live support for all platform tools, step-by-step setup guides for agents and offices, video tutorials, and access to our knowledge base. Premium plans include priority support and dedicated onboarding." },
      { question: "Do I need technical skills?", answer: "No! The system is designed for busy realtors, not tech experts. We handle the technical setup, and the day-to-day interface is user-friendly with drag-and-drop builders and one-click actions." },
      { question: "What if I already have a CRM?", answer: "We can often integrate with your existing tools or help you migrate data. Most clients find our all-in-one system simplifies their workflow by replacing multiple separate subscriptions." },
      { question: "Is there a contract or commitment?", answer: "We offer flexible monthly plans with no long-term contracts required. You can scale up or down based on your needs, and we're confident you'll see value quickly." }
    ]
  }
];
const testimonials = [
  { quote: "The IDX integration with my CRM changed everything. I can see exactly what properties my leads are interested in and follow up at the perfect time.", author: "Jennifer M.", role: "Broker/Owner", company: "Coastal Realty Group", rating: 5 },
  { quote: "I used to spend hours on follow-up emails. Now the automation handles it while I focus on showings and closings. My response time went from hours to seconds.", author: "Marcus T.", role: "Realtor", company: "RE/MAX Elite", rating: 5 },
  { quote: "The home valuation landing page generates 15-20 seller leads per month. Best investment I've made for my business.", author: "Sarah K.", role: "Team Lead", company: "Premier Properties", rating: 5 }
];
const ServiceCard = ({ service }) => {
  const colors = colorConfig[service.color];
  return /* @__PURE__ */ jsxs(GlowCard, { className: `overflow-hidden animate-fade-up group ${colors.border}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-44 overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: service.image, alt: service.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: `absolute bottom-4 left-4 w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center shadow-lg`, children: /* @__PURE__ */ jsx(service.icon, { className: "w-6 h-6 text-white" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-foreground mb-3", children: service.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-5", children: service.description }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
        service.features.slice(0, 4).map((feature, j) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: `w-4 h-4 ${colors.text} shrink-0 mt-0.5` }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: feature })
        ] }, j)),
        service.features.length > 4 && /* @__PURE__ */ jsxs("li", { className: "text-sm text-muted-foreground/70 pl-6", children: [
          "+",
          service.features.length - 4,
          " more features"
        ] })
      ] })
    ] })
  ] });
};
const RealtorMarketing = () => {
  const { strategySessionUrl } = useUtm();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Real Estate Marketing Solutions | GrowSmallBiz" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Grow your real estate business with IDX-integrated websites, AI-powered CRM, automated follow-ups, and lead generation tools. Built for realtors and brokers." }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, nofollow" })
    ] }),
    /* @__PURE__ */ jsx(
      ServiceJsonLd,
      {
        serviceName: "Real Estate Marketing Solutions",
        serviceType: "Digital Marketing for Realtors",
        description: "IDX-integrated websites, AI-powered CRM, automated follow-ups, and lead generation for realtors.",
        url: "/professional-services/marketing-for-realtors/",
        breadcrumbs: [
          { name: "Professional Services", url: "/professional-services/" },
          { name: "Realtor Marketing", url: "/professional-services/marketing-for-realtors/" }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "pt-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "relative py-24 lg:py-32 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-violet-900/20" }),
        /* @__PURE__ */ jsx("div", { className: "hero-glow absolute inset-0" }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up", children: [
            /* @__PURE__ */ jsx(Building, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsx("span", { className: "text-primary text-sm font-medium", children: "For Real Estate Professionals" })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up", style: { animationDelay: "0.1s" }, children: [
            "Grow Your Real Estate Business with",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "AI-Powered Marketing" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up", style: { animationDelay: "0.2s" }, children: "IDX-integrated websites, automated follow-ups, and intelligent lead nurturing—all in one platform designed for realtors and brokers." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up", style: { animationDelay: "0.3s" }, children: [
            /* @__PURE__ */ jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategySessionUrl, children: [
              "Schedule Strategy Session",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
            ] }) }),
            /* @__PURE__ */ jsx(Button, { variant: "outline", size: "xl", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "#services", children: "Explore Solutions" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up", style: { animationDelay: "0.4s" }, children: [
            { value: "500+", label: "Realtors Served" },
            { value: "3x", label: "Lead Response Speed" },
            { value: "47%", label: "More Closings" },
            { value: "24/7", label: "Lead Capture" }
          ].map((stat, i) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl font-display font-bold text-primary", children: stat.value }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-1", children: stat.label })
          ] }, i)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-card/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: "Sound Familiar?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "These challenges hold back even the most talented real estate professionals" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: painPoints.map((point, i) => /* @__PURE__ */ jsxs("div", { className: "bg-background border border-destructive/30 rounded-2xl p-6 hover:border-destructive/50 transition-all animate-fade-up", style: { animationDelay: `${i * 0.1}s` }, children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(point.icon, { className: "w-6 h-6 text-destructive" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground mb-2", children: point.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: point.description })
        ] }, i)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "services", className: "py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4", children: [
            /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsx("span", { className: "text-primary text-sm font-medium", children: "Complete Solution" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4", children: [
            "Everything You Need to",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Dominate Your Real Estate Market" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "From property search websites to automated nurturing—we've got every stage of your client journey covered" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Home, { className: "w-5 h-5 text-blue-500" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-foreground", children: "Website" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: websiteServices.map((service) => /* @__PURE__ */ jsx(ServiceCard, { service }, service.id)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Database, { className: "w-5 h-5 text-violet-500" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-foreground", children: "CRM & Marketing Automation" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-8 pl-[52px]", children: [
            /* @__PURE__ */ jsx("span", { className: "text-violet-500 font-semibold", children: "Buyers & Sellers Funnels" }),
            " — Automated lead nurturing paths designed specifically for buyer and seller journeys, from first inquiry to closing and beyond."
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: crmServices.map((service) => /* @__PURE__ */ jsx(ServiceCard, { service }, service.id)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Globe, { className: "w-5 h-5 text-teal-500" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-foreground", children: "Online Visibility" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: visibilityServices.map((service) => /* @__PURE__ */ jsx(ServiceCard, { service }, service.id)) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 lg:py-32 bg-card/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4", children: [
            /* @__PURE__ */ jsx(Home, { className: "w-4 h-4 text-blue-500" }),
            /* @__PURE__ */ jsx("span", { className: "text-blue-500 text-sm font-medium", children: "IDX Integration" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4", children: [
            "Your IDX Website, ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Supercharged" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Everything you need to turn your real estate website into a lead generation machine" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: [
            "What Is ",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "IDXAddons" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground max-w-3xl mx-auto mb-12", children: [
            "IDXAddons is our platform for IDX Broker users, offering ",
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "75+ tools" }),
            " to enhance real estate websites. It includes customizable widgets, search features, and mobile-friendly IDX layouts compatible with WordPress, Wix, Squarespace, Duda, and more."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-24", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-8 animate-fade-up", children: [
            /* @__PURE__ */ jsxs("h4", { className: "text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-primary" }),
              "Requirements"
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: ["Active IDX Broker account (or willingness to sign up)", "Our team as your developer partner", "MLS approval completed (for live data)"].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-muted-foreground", children: [
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-primary shrink-0 mt-1" }),
              /* @__PURE__ */ jsx("span", { children: item })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-8 animate-fade-up", style: { animationDelay: "0.1s" }, children: [
            /* @__PURE__ */ jsxs("h4", { className: "text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-emerald-500" }),
              "What's Included"
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: ["Priority Email Support", "Access to 75+ free widgets and tools", "Access to 60+ premium layouts for IDX Broker", "CRM workflows and connection tools", "WordPress Pro plugins & Themes"].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-muted-foreground", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-emerald-500 shrink-0 mt-1" }),
              /* @__PURE__ */ jsx("span", { children: item })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-8 animate-fade-up", style: { animationDelay: "0.2s" }, children: [
            /* @__PURE__ */ jsxs("h4", { className: "text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(XCircle, { className: "w-5 h-5 text-rose-500" }),
              "What's Not Included"
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: ["Support for non-IDX questions", "IDX Broker subscription fees", "Domain and hosting fees", "Free website or addon editions"].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-muted-foreground", children: [
              /* @__PURE__ */ jsx(XCircle, { className: "w-4 h-4 text-rose-500 shrink-0 mt-1" }),
              /* @__PURE__ */ jsx("span", { children: item })
            ] }, i)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center mb-24", children: [
          /* @__PURE__ */ jsx("div", { className: "order-2 lg:order-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-primary/30 rounded-2xl p-8 shadow-lg", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Database, { className: "w-6 h-6 text-primary" }),
              "Manage Your IDX Leads Inside Your CRM"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Unlock a new level of efficiency with our exclusive LeadConnector Dashboard. Access all IDX Broker data directly inside your CRM dashboard." }),
            /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: ["Monitor lead activity in real-time", "View saved properties and searches", "Save time switching between platforms", "Track IDX activity for better follow-up", "Quickly filter and search leads", "See leads search preferences", "Easy agent and team access", "Stay organized in one place"].map((feature, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-primary shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground", children: feature })
            ] }, i)) })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "order-1 lg:order-2", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-cyan-500/30 rounded-2xl p-8 shadow-lg", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Home, { className: "w-6 h-6 text-cyan-500" }),
              "Zillow Lookup Right Inside Your CRM"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Get Zestimates instantly inside your CRM. Access Zillow property data without leaving your dashboard — fast, simple, and built for agents." }),
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
              { icon: Search, text: "Instant Zestimate lookups" },
              { icon: MapPin, text: "Property details at a glance" },
              { icon: BarChart3, text: "Market value estimates" },
              { icon: Zap, text: "No platform switching required" }
            ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(item.icon, { className: "w-5 h-5 text-cyan-500" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-foreground", children: item.text })
            ] }, i)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-24", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: "Featured Addons" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Discover our most popular tools to enhance your IDX experience." })
          ] }),
          /* @__PURE__ */ jsxs(Carousel, { opts: { align: "start", loop: true }, className: "w-full", children: [
            /* @__PURE__ */ jsx(CarouselContent, { className: "-ml-4", children: [
              { title: "Plunk Home Valuation Widget", description: "Let visitors instantly estimate property values with real-time data.", image: idxPlunkValuation, isFree: true },
              { title: "IDX Styles & Colors", description: "Easily update the colors and styles of your IDX Broker pages to match your branding — no coding needed.", image: idxStylesColors, isFree: true },
              { title: "Counts Widget", description: "Show total active listings by city, zip, or other criteria. Perfect for dynamic market pages.", image: idxCountsWidget, isFree: true },
              { title: "Search Tool", description: "Add a fast, mobile-friendly property search bar to any page — complete with price, beds, and more filters.", image: idxSearchTool, isFree: true },
              { title: "Google Map Widget", description: "Display active listings on an interactive map. Fully customizable.", image: idxGoogleMap, isFree: true }
            ].map((addon, i) => /* @__PURE__ */ jsx(CarouselItem, { className: "pl-4 md:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsxs("div", { className: "group bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative h-56 overflow-hidden bg-muted", children: [
                /* @__PURE__ */ jsx("img", { src: addon.image, alt: addon.title, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" }),
                addon.isFree && /* @__PURE__ */ jsx("span", { className: "absolute top-4 right-4 px-4 py-1.5 text-sm font-semibold rounded-full bg-emerald-500 text-white shadow-lg", children: "Free" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors", children: addon.title }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: addon.description })
              ] })
            ] }) }, i)) }),
            /* @__PURE__ */ jsx(CarouselPrevious, { className: "hidden md:flex -left-4" }),
            /* @__PURE__ */ jsx(CarouselNext, { className: "hidden md:flex -right-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-24", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: "Premium IDX Layouts" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Stunning real estate layouts to enhance your IDX Broker website." })
          ] }),
          /* @__PURE__ */ jsxs(Carousel, { opts: { align: "start", loop: true }, className: "w-full", children: [
            /* @__PURE__ */ jsx(CarouselContent, { className: "-ml-4", children: [
              { title: "Results Pages", count: "+30 Layouts", description: "Fast, mobile-ready grids and lists that make it easy to browse listings and view key info at a glance.", image: idxTemplateResults },
              { title: "Roster Pages", count: "+5 Layouts", description: "Display agents or offices with photos, bios, and contact links. Easy to customize and perfect for building trust.", image: idxTemplateRoster },
              { title: "Search Pages", count: "+25 Layouts", description: "Clean, responsive search forms with multiple layout options to filter by location, price, beds, baths, and more.", image: idxTemplateSearch },
              { title: "Details Pages", count: "+20 Layouts", description: "Showcase listings with grids, slideshows, sticky CTAs, and more. Multiple layouts designed to highlight properties and drive leads.", image: idxTemplateDetails },
              { title: "Map Search Pages", count: "+14 Layouts", description: "Interactive layouts with live maps and listing data for a better browsing experience by area or neighborhood.", image: idxTemplateMap }
            ].map((layout, i) => /* @__PURE__ */ jsx(CarouselItem, { className: "pl-4 md:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsxs("div", { className: "group bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative h-56 overflow-hidden bg-muted", children: [
                /* @__PURE__ */ jsx("img", { src: layout.image, alt: layout.title, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" }),
                /* @__PURE__ */ jsx("span", { className: "absolute top-4 right-4 px-4 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground shadow-lg", children: layout.count })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors", children: layout.title }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: layout.description })
              ] })
            ] }) }, i)) }),
            /* @__PURE__ */ jsx(CarouselPrevious, { className: "hidden md:flex -left-4" }),
            /* @__PURE__ */ jsx(CarouselNext, { className: "hidden md:flex -right-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: "Pro Addons" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Take your real estate website to the next level with these premium tools." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
            { title: "Condos Widget", description: "Displays condos information, showcasing the main details in an attractive widget.", icon: Building, color: "blue" },
            { title: "Data Graph Widget Pro", description: "Add comprehensive charts with IDX data to keep visitors engaged.", icon: BarChart3, color: "violet" },
            { title: "Google Map Widget Pro", description: "Create and customize different maps with filters for featured listings.", icon: Map, color: "emerald" },
            { title: "Text Alerts (Daily Updates)", description: "Send daily SMS to leads when property prices change or new listings match.", icon: MessageSquare, color: "amber" }
          ].map((addon, i) => {
            const colors = colorConfig[addon.color];
            return /* @__PURE__ */ jsxs("div", { className: `bg-card border ${colors.border} rounded-2xl p-6 text-center animate-fade-up hover:shadow-xl transition-all duration-300`, style: { animationDelay: `${i * 0.1}s` }, children: [
              /* @__PURE__ */ jsx("div", { className: `w-16 h-16 rounded-2xl ${colors.bgLight} flex items-center justify-center mx-auto mb-5`, children: /* @__PURE__ */ jsx(addon.icon, { className: `w-8 h-8 ${colors.text}` }) }),
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-display font-bold text-foreground mb-3", children: addon.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-5", children: addon.description }),
              /* @__PURE__ */ jsx("span", { className: `inline-flex px-4 py-2 text-sm font-medium rounded-full ${colors.bgLight} ${colors.text}`, children: "Premium Feature" })
            ] }, i);
          }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-20 text-center", children: /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "group text-lg px-8 py-6", children: /* @__PURE__ */ jsxs("a", { href: strategySessionUrl, children: [
          "Schedule Your IDX Integration Demo",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 lg:py-32 bg-card/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: [
            "Your Client Journey, ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Automated" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "From first click to closing day, every touchpoint is optimized for conversion" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: funnelStages.map((stage, i) => /* @__PURE__ */ jsxs(GlowCard, { className: "relative p-6 animate-fade-up", style: { animationDelay: `${i * 0.15}s` }, children: [
          i < funnelStages.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" }),
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(stage.icon, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-primary font-medium mb-2", children: [
            "Stage ",
            i + 1
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-foreground mb-2", children: stage.stage }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: stage.description }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: stage.tactics.map((tactic, j) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary" }),
            tactic
          ] }, j)) })
        ] }, i)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 lg:py-32 bg-card/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4", children: [
            /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-emerald-500" }),
            /* @__PURE__ */ jsx("span", { className: "text-emerald-500 text-sm font-medium", children: "Success Stories" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: [
            "Real Estate Professionals",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-emerald-500", children: "Thriving" }),
            " with Our Platform"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "See live examples of agents and offices using IDX + CRM integration to grow their business" })
        ] }),
        /* @__PURE__ */ jsxs(Carousel, { opts: { align: "start", loop: true }, className: "w-full max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsx(CarouselContent, { className: "-ml-4", children: successStories.map((story, i) => /* @__PURE__ */ jsx(CarouselItem, { className: "pl-4 md:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsxs("a", { href: story.url, target: "_blank", rel: "noopener noreferrer", className: "block bg-card border-2 border-emerald-500/30 rounded-2xl p-6 h-full hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(255,127,80,0.3)] transition-all group", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-medium", children: story.type }),
              /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4 text-muted-foreground group-hover:text-emerald-500 transition-colors" })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-bold text-foreground mb-2 group-hover:text-emerald-500 transition-colors", children: story.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: story.description }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-emerald-500", children: [
              /* @__PURE__ */ jsx(Globe, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { className: "truncate", children: story.url.replace("https://", "") })
            ] })
          ] }) }, i)) }),
          /* @__PURE__ */ jsx(CarouselPrevious, { className: "hidden md:flex -left-12" }),
          /* @__PURE__ */ jsx(CarouselNext, { className: "hidden md:flex -right-12" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: "What Realtors Are Saying" }) }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 max-w-5xl mx-auto", children: testimonials.map((testimonial, i) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-primary/30 rounded-2xl p-6 animate-fade-up hover:border-primary/50 transition-all", style: { animationDelay: `${i * 0.1}s` }, children: [
          /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-4", children: [...Array(testimonial.rating)].map((_, j) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-primary text-primary" }, j)) }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-6 italic", children: [
            '"',
            testimonial.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground", children: testimonial.author }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: testimonial.role }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-primary", children: testimonial.company })
          ] })
        ] }, i)) })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "py-24 lg:py-32 relative overflow-hidden", style: { background: "linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)" }, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-1/4 w-80 h-48 bg-primary/5 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/4 w-80 h-48 bg-primary/5 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-4", children: "FAQ" }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4", children: "Frequently Asked Questions" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Everything you need to know about our real estate marketing solutions" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12 items-start max-w-6xl mx-auto", children: [
            /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "idx", className: "w-full", children: [
              /* @__PURE__ */ jsx(TabsList, { className: "grid w-full grid-cols-2 lg:grid-cols-4 mb-8 h-auto gap-2 bg-transparent", children: faqCategories.map((category) => {
                const colorStyles = {
                  blue: { bg: "#3b82f6", border: "rgba(59, 130, 246, 0.3)", bgLight: "rgba(59, 130, 246, 0.1)" },
                  violet: { bg: "#8b5cf6", border: "rgba(139, 92, 246, 0.3)", bgLight: "rgba(139, 92, 246, 0.1)" },
                  emerald: { bg: "#10b981", border: "rgba(16, 185, 129, 0.3)", bgLight: "rgba(16, 185, 129, 0.1)" },
                  amber: { bg: "#f59e0b", border: "rgba(245, 158, 11, 0.3)", bgLight: "rgba(245, 158, 11, 0.1)" }
                };
                const colors = colorStyles[category.color];
                return /* @__PURE__ */ jsxs(
                  TabsTrigger,
                  {
                    value: category.id,
                    className: "group flex items-center gap-2 px-4 py-3 rounded-xl border transition-all data-[state=active]:text-white hover:bg-opacity-10",
                    style: { borderColor: colors.border },
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "w-7 h-7 rounded-lg flex items-center justify-center transition-all group-data-[state=active]:bg-white/20", style: { backgroundColor: colors.bgLight }, children: /* @__PURE__ */ jsx(category.icon, { className: "w-4 h-4 transition-all group-data-[state=active]:text-white", style: { color: colors.bg } }) }),
                      /* @__PURE__ */ jsx("span", { className: "hidden sm:inline font-medium transition-all group-data-[state=active]:text-white", style: { color: colors.bg }, children: category.label }),
                      /* @__PURE__ */ jsx("style", { children: `
                            [data-state="active"][value="${category.id}"] {
                              background-color: ${colors.bg} !important;
                              border-color: ${colors.bg} !important;
                            }
                            [data-state="active"][value="${category.id}"] span,
                            [data-state="active"][value="${category.id}"] svg {
                              color: white !important;
                            }
                          ` })
                    ]
                  },
                  category.id
                );
              }) }),
              faqCategories.map((category) => /* @__PURE__ */ jsx(TabsContent, { value: category.id, className: "space-y-4", children: category.faqs.map((faq, i) => /* @__PURE__ */ jsxs("div", { className: "bg-black border rounded-xl p-6 hover:shadow-[0_0_60px_rgba(255,127,80,0.3)] transition-all", style: { borderColor: "#ff7f50ff" }, children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: faq.question }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: faq.answer })
              ] }, i)) }, category.id))
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "lg:col-span-1 animate-fade-up", style: { animationDelay: "0.2s" }, children: /* @__PURE__ */ jsxs("div", { className: "sticky top-24 p-8 rounded-2xl border-2 border-primary/60 bg-card/30 backdrop-blur-sm text-center shadow-[0_0_30px_rgba(255,127,80,0.15)]", children: [
              /* @__PURE__ */ jsx("div", { className: "w-24 h-24 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-primary via-orange-400 to-primary", children: /* @__PURE__ */ jsx("img", { src: subrataHeadshot, alt: "Subrata Guha", className: "w-full h-full rounded-full object-cover" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-foreground mb-4", children: "Have more questions about our Real Estate Marketing Solution?" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Get a personalized demo of our IDX website, CRM integration, and marketing automation platform." }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium mb-6", children: "Let's build your lead generation machine." }),
              /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsx("p", { className: "font-cursive text-2xl text-foreground italic", children: "Subrata Guha" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Founder, GrowSmallBiz" })
              ] }),
              /* @__PURE__ */ jsx(Button, { size: "lg", className: "w-full bg-gradient-to-r from-[hsl(199_89%_48%)] to-primary text-white rounded-full border-none hover:shadow-[0_0_30px_rgba(255,127,80,0.5),0_0_60px_rgba(255,127,80,0.3)] hover:scale-105 transition-all duration-300", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategySessionUrl, children: [
                "Schedule a Demo",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
              ] }) })
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "py-24 lg:py-32 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-violet-500/10" }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "bg-card/80 backdrop-blur-sm border-2 border-primary/50 rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/70 group", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg group-hover:border-primary/50 transition-all duration-300", children: /* @__PURE__ */ jsx("img", { src: subrataHeadshot, alt: "Subrata Guha", className: "w-full h-full object-cover" }) }),
            /* @__PURE__ */ jsx("h4", { className: "mt-4 text-lg font-display font-semibold text-foreground", children: "Subrata Guha" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Founder, GrowSmallBiz" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center md:text-left", children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4", children: [
              "Ready to Transform Your",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Real Estate Business" }),
              "?"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground mb-6", children: "Schedule a free strategy session and discover how our platform can help you generate more leads, close more deals, and grow your business." }),
            /* @__PURE__ */ jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: strategySessionUrl, children: [
              "Schedule Strategy Session",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
            ] }) })
          ] })
        ] }) }) }) })
      ] }),
      /* @__PURE__ */ jsx(ConsultationFormSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  RealtorMarketing as default
};
