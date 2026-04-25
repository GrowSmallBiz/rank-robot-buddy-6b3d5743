import type { NicheConfig } from "@/components/niche-page/NicheConfig";
import {
  Camera, TrendingUp, MapPin, Star, Users, Target, Calendar,
  Bot, Image, Heart, Clock, MessageSquare, Phone,
  Gift, Repeat, Share2, Search, Globe, Zap, Database, BarChart3,
  Eye, FileSearch, FileText, MousePointerClick, Megaphone, RefreshCw,
  Linkedin, Instagram, Facebook, Video, Sparkles, Shield, DollarSign,
  UserPlus, Mic, Focus, Aperture, Images, Mail, CalendarCheck
} from "lucide-react";

import photographerHeroImage from "@/assets/industry-photographer-hero.webp";
import portfolioPhotographerWebsite from "@/assets/portfolio-photographer-website.webp";
import challengeEmptyCalendar from "@/assets/challenge-empty-calendar.webp";
import challengeReferralHandoff from "@/assets/challenge-referral-handoff.webp";
import challengeGoogleRankings from "@/assets/challenge-google-ranking-female.webp";
import challengePriceWar from "@/assets/challenge-price-war-female.webp";
import signalSocialBurnout from "@/assets/social-media-burnout-female.webp";

import adCreativeFamilyOutdoor from "@/assets/ad-creative-family-outdoor-cta.webp";
import adCreativeMaternity from "@/assets/ad-creative-maternity-newborn.webp";
import adCreativeSeniorFashion from "@/assets/ad-creative-senior-fashion-cta.webp";
import adCreativeWeddingCta from "@/assets/ad-creative-wedding-cta.webp";
import adCreativeHeadshotMale from "@/assets/ad-creative-headshot-female.webp";
import adCreativePortraitStudio from "@/assets/ad-creative-portrait-family-studio.webp";
import adCreativeWeddingClean from "@/assets/ad-creative-wedding-clean.webp";
import adCreativeHeadshotPro from "@/assets/ad-creative-headshot-professional.webp";

export const photographersConfig: NicheConfig = {
  // ── Page Meta ──
  pageTitle: "Photography Marketing & SEO Services | GrowSmallBiz",
  metaDescription: "GrowSmallBiz: Photography marketing solutions. Website design, AI SEO, and paid ads to fill your photography bookings. Schedule Strategy Session!",
  metaKeywords: "photography marketing, photographer SEO, website design for photographers, client engagement strategies, marketing solutions for photographers, paid advertising for photography, CRM for photographers, booking automation",
  canonicalUrl: "/professional-services/marketing-for-photographers/",
  serviceName: "Photography Marketing & SEO",
  serviceType: "Digital Marketing for Photographers",
  serviceDescription: "Complete marketing system for photographers including website design, AI SEO, CRM, and automation.",
  breadcrumbs: [
    { name: "Professional Services", url: "/professional-services/" },
    { name: "Photographers Marketing", url: "/professional-services/marketing-for-photographers/" },
  ],

  // ── Hero ──
  heroImage: photographerHeroImage,
  heroImageAlt: "Photographer capturing a romantic moment between a bride and groom in a sunlit field, showcasing wedding photography expertise.",
  badgeText: "Photography Marketing & Growth System",
  badgeIcon: Camera,
  h1Line1: "Photography Marketing That Fills Your Calendar with",
  h1Highlight: "Dream Clients",
  h1Line2: "",
  heroSubheadline: "Stop relying solely on referrals. Build a predictable booking pipeline with AI-powered marketing designed for photographers.",
  primaryCtaLabel: "Schedule Strategy Call",
  secondaryCtaLabel: "Explore Solutions",
  secondaryCtaAnchor: "#solutions",
  statsBar: [
    { value: "3-6mo", label: "To see SEO results" },
    { value: "15-25%", label: "Improved booking rate" },
    { value: "2-4x", label: "Inquiry increase with paid ads" },
    { value: "40%", label: "Time saved with automation" },
  ],

  // ── Pain Points ──
  painPointsHeadline: "Photography Studio Marketing Challenges",
  painPointsSubheadline: "Even the most talented photography studios struggle to fill their calendars. If any of these resonate, it's time for a digital growth strategy.",
  painPoints: [
    { icon: Calendar, title: "Empty Calendar Syndrome", description: "Feast-or-famine cycle where some months are packed while others have empty slots and zero inquiries.", image: challengeEmptyCalendar, hasImage: true, showAILogos: false },
    { icon: Users, title: "Referral Dependency", description: "Word-of-mouth is great—until it slows down. No control over your growth means unpredictable income.", image: challengeReferralHandoff, hasImage: true, showAILogos: false },
    { icon: Search, title: "Google Ranks Shoot & Burn Photographers Above You", description: "Your stunning portfolio sits unseen while photographers with inferior work dominate search results.", image: challengeGoogleRankings, hasImage: true, showAILogos: false },
    { icon: Bot, title: "AI Search Is Not Recommending Your Studio", description: "ChatGPT, Gemini, and Perplexity are answering 'best photographer near me'—but they're not mentioning you.", hasImage: false, showAILogos: true },
    { icon: Instagram, title: "Social Media Posts Not Paying The Bills", description: "Likes are coming, but not paying the bills. Hours spent posting with minimal bookings—exhausting effort for little return.", image: signalSocialBurnout, hasImage: true, showAILogos: false },
    { icon: DollarSign, title: "Your Studio Racing to the Bottom on Price", description: "Competing on price instead of artistry—attracting bargain hunters who undervalue your work and squeeze your margins.", image: challengePriceWar, hasImage: true, showAILogos: false },
  ],
  transitionText: "Sound familiar? There's a better way.",
  transitionSubtext: "Instead of juggling disconnected tools, imagine one integrated system handling it all.",

  // ── System Diagram ──
  systemDiagramHeadline: "See How It All Works Together",
  systemDiagramBody: "A predictable marketing system that attracts new clients, nurtures leads automatically, and turns one-time sessions into lifelong relationships—all working in perfect harmony.",

  // ── CTAs ──
  ctaAfterPainPoints: {
    headline: "Ready to Stop the Feast-or-Famine Cycle?",
    subtext: "Let's build your predictable photography booking pipeline.",
    primaryLabel: "Schedule Strategy Call",
    secondaryLabel: "Call Us",
  },
  ctaAfterSeo: {
    headline: "See Where You Rank — Free SEO Visibility Audit",
    subtext: "Find out exactly where your photography studio appears in local search results. Get a detailed report showing your rankings, competitors, and quick wins to climb higher.",
    primaryLabel: "Schedule Strategy Call",
    secondaryLabel: "",
  },
  ctaAfterGrowthSystem: {
    headline: "See Photography Studios's AI Client Growth System in Action",
    subtext: "Watch how automated follow-ups, smart scheduling, and AI-powered nurturing can transform your photography studio. Book a personalized demo.",
    primaryLabel: "Schedule Strategy Call",
    secondaryLabel: "",
  },

  // ── On This Page ──
  onThisPageItems: [
    { id: "website-design", label: "Website Design", icon: "🌐" },
    { id: "seo", label: "AI SEO", icon: "🔍" },
    { id: "paid-media", label: "Paid Media", icon: "📣" },
    { id: "social-media", label: "Social Media", icon: "📱" },
    { id: "client-growth", label: "Growth Funnels", icon: "📈" },
    { id: "reputation", label: "Reputation", icon: "⭐" },
    { id: "ai-communication", label: "AI Voice & Chat", icon: "🤖" },
    { id: "why-choose", label: "Why Choose Us", icon: "✅" },
    { id: "faq", label: "FAQs", icon: "❓" },
  ],

  // ── Website Design ──
  websiteDesignBadge: "Professional Photography Websites",
  websiteDesignHeadline: "Photography Website Design",
  websiteDesignHighlight: "That Books Clients",
  websiteDesignSubheadline: "Custom portfolio websites built to showcase your work beautifully and convert visitors into paying clients",
  websiteDesignImage: portfolioPhotographerWebsite,
  websiteDesignImageAlt: "Computer monitor displaying a photographer's portfolio website featuring wedding photography images, including couples in formal attire, showcasing various poses and settings, emphasizing marketing solutions for photographers.",
  websiteDesignFeatureHeadline: "Portfolio Websites That Convert Visitors Into Booked Clients",
  websiteDesignFeatureBody: "We build fast, beautiful portfolio sites designed specifically for photographers. Every element is optimized to showcase your work and guide potential clients toward booking.",
  websiteDesignBullets: [
    "Mobile-responsive portfolio galleries",
    "Fast-loading image optimization",
    "Session booking integration",
    "Investment/pricing guide pages (optional)",
    "Client testimonial displays",
    "Blog for SEO content",
    "Contact forms with session type selection",
    "Social media integration",
  ],
  aiSearchCalloutHeadline: "Ranking on Google Still Matters.",
  aiSearchCalloutHighlight: "But AI Search is Becoming the New Decision-Maker.",
  aiSearchCalloutBody: "Couples planning weddings and families searching for photographers are asking AI who to hire first—and it's not always the photographer ranking #1 on Google. Your competitor may already be showing up in AI search, even if you aren't.",
  aiSearchStats: [
    { value: "40%+", label: "of consumers now use AI for local service recommendations" },
    { value: "6 Platforms", label: "AI platforms we track for your visibility" },
    { value: "24/7", label: "continuous monitoring & sentiment tracking" },
  ],

  // ── SEO ──
  seoBadge: "Photography SEO Services",
  seoHeadline: "AI-Powered SEO for",
  seoHighlight: "Photography Studios",
  seoSubheadline: "Comprehensive search engine optimization strategy designed for photography studios—from local portrait studios to destination wedding photographers",
  seoEditorialHeadline: "Why Photography SEO Works",
  seoEditorialHighlight: "Differently",
  seoEditorialBody: [
    "Photography is a considered purchase — with moments of urgency.",
    "Unlike services where someone searches and calls immediately, photography clients take time. They browse portfolios, compare styles, read reviews, follow on social, and wait for the right moment — a milestone, a season, or a life event.",
    "Some services, like professional headshots for job changes or media appearances, can be time-sensitive — which is why immediate visibility still matters.",
    "Because of this, search volume for photography is naturally lower than emergency or transactional services. People don't search often — but when they do, intent is high. The goal of SEO here isn't mass traffic. It's being the studio they recognize, trust, and remember when they're ready to book.",
  ],
  seoEditorialPullQuote: "That's why our approach combines Google + AI search visibility with retargeting and follow-up — so your studio stays top-of-mind long after the first visit.",
  seoKeywordCategories: {
    portrait: {
      label: "Portrait Photography", icon: Users, image: adCreativePortraitStudio,
      keywords: ["family photographer [city]", "newborn photographer near me", "maternity photography [city]", "senior portraits [city]"],
      competitors: "Local portrait studios, mini-session photographers",
    },
    wedding: {
      label: "Wedding Photography", icon: Heart, image: adCreativeWeddingClean,
      keywords: ["wedding photographer [city]", "elopement photographer [city]", "engagement photos [city]", "[venue name] wedding photographer"],
      competitors: "Established wedding photographers, The Knot listings",
    },
    headshot: {
      label: "Headshot & Branding", icon: Sparkles, image: adCreativeHeadshotPro,
      keywords: ["professional headshot photographer [city]", "corporate headshots [city]", "personal branding photographer", "business portraits [city]"],
      competitors: "Studio headshot services, LinkedIn photo specialists",
    },
  },

  // ── Paid Media ──
  paidMediaHeadline: "We Run High-Converting Ads for",
  paidMediaHighlight: "Photographers",
  paidMediaSubheadline: "Strategic ad platform recommendations by photography genre",
  adCreatives: [
    { id: "family", genre: "Family Portraits", image: adCreativeFamilyOutdoor, platforms: ["Facebook", "Instagram"], description: "High-end outdoor family portraits with golden hour lighting" },
    { id: "maternity", genre: "Maternity & Newborn", image: adCreativeMaternity, platforms: ["Instagram", "Pinterest"], description: "Tender, soft imagery targeting expecting mothers" },
    { id: "senior", genre: "High School Seniors", image: adCreativeSeniorFashion, platforms: ["Facebook", "Instagram", "TikTok"], description: "Full-body fashion poses with trendy urban vibes" },
    { id: "wedding", genre: "Wedding Photography", image: adCreativeWeddingCta, platforms: ["Pinterest", "Instagram", "The Knot"], description: "Romantic golden hour moments for engaged couples" },
    { id: "branding", genre: "Headshots & Branding", image: adCreativeHeadshotMale, platforms: ["LinkedIn", "Facebook"], description: "Executive headshots for business professionals" },
  ],
  paidMediaByGenre: [
    {
      genre: "Portrait Photographers", icon: Users,
      primary: [
        { name: "Meta (FB/IG)", reason: "Visual platform perfect for showcasing portrait work to local parents and families" },
        { name: "Google PPC", reason: "Capture high-intent 'photographer near me' searches—highest conversion intent" },
      ],
      secondary: [
        { name: "Pinterest Ads", reason: "Inspiration-driven; great for 'what to wear' guides and mini-session promos" },
        { name: "YouTube Ads", reason: "Behind-the-scenes content builds trust; good for session previews" },
      ],
      color: "pink",
    },
    {
      genre: "Wedding Photographers", icon: Heart,
      primary: [
        { name: "Pinterest Ads", reason: "Wedding planning platform—brides actively searching for inspiration (highest ROI)" },
        { name: "Meta (FB/IG)", reason: "Target engaged couples with visual wedding portfolio ads" },
      ],
      secondary: [
        { name: "Google PPC", reason: "Target 'wedding photographer [city]' and venue-specific searches" },
        { name: "The Knot/Zola", reason: "Wedding-specific platforms where couples actively browse photographers" },
      ],
      color: "rose",
    },
    {
      genre: "Branding Photographers", icon: Sparkles,
      primary: [
        { name: "LinkedIn Ads", reason: "Target entrepreneurs, coaches, and business owners directly—best B2B targeting" },
        { name: "Google PPC", reason: "Capture 'professional headshot' and 'branding photographer' searches" },
      ],
      secondary: [
        { name: "Meta (FB/IG)", reason: "Reach personal brand builders via interest-based targeting; lower CPM but less precise" },
        { name: "YouTube Ads", reason: "Showcase transformation stories and behind-the-scenes of branding sessions" },
      ],
      color: "blue",
    },
  ],
  metaAdSetupHeadline: "How We Help Photographers with Meta Ad Setup",
  metaAdSetupSubheadline: "Reach your ideal clients where they scroll most. We build scroll-stopping campaigns on Facebook and Instagram that turn engagement into booked sessions.",
  trackingRetargetingEssentials: [
    { title: "Facebook Pixel + Retargeting", description: "Track visitors, build retargeting audiences, and show ads to people who viewed your portfolio but didn't inquire.", icon: Facebook },
    { title: "Lookalike Audiences", description: "Upload your client list—let Facebook/Google find similar people in your area who match your ideal client.", icon: Users },
    { title: "Google Analytics & GTM", description: "Track your full customer journey, see which pages drive inquiries, and manage all tracking codes centrally.", icon: BarChart3 },
  ],

  // ── Retargeting ──
  retargetingHeadline: "Be Found Once.",
  retargetingHighlight: "Remembered Until They're Ready.",
  retargetingSubheadline: "SEO brings them in. Retargeting brings them back.",
  retargetingBody: [
    "Your images naturally reappear across their feeds — not as pushy ads, but as gentle reminders of the work they already liked.",
    "This approach lets your work stay visible without constant posting, chasing trends, or selling yourself every day. Your photography continues the conversation quietly in the background, until the timing feels right for them.",
  ],

  // ── Social Media ──
  socialMediaHeadline: "We Build Your Social Media",
  socialMediaHighlight: "Strategy",
  socialMediaSubheadline: "Platform-specific strategies for each photography genre",
  socialMediaByGenre: [
    {
      genre: "Portrait Photographers",
      primary: [
        { name: "Instagram", icon: Instagram, strategy: "Before/after reveals, behind-the-scenes stories, client testimonials in Reels" },
        { name: "Facebook", icon: Facebook, strategy: "Local community groups, parent groups, mini-session announcements" },
      ],
      secondary: [
        { name: "Pinterest", icon: Image, strategy: "What to wear guides, location inspiration, session type boards" },
        { name: "TikTok", icon: Video, strategy: "Day-in-the-life content, session reveals, trending sounds with family moments" },
      ],
      color: "pink",
    },
    {
      genre: "Wedding Photographers",
      primary: [
        { name: "Instagram", icon: Instagram, strategy: "Full wedding galleries in carousels, Reels of ceremony moments, vendor collaborations" },
        { name: "Pinterest", icon: Image, strategy: "Real wedding boards, venue-specific pins, wedding planning content" },
      ],
      secondary: [
        { name: "TikTok", icon: Video, strategy: "Wedding day clips, photographer POV content, trending audio with wedding footage" },
        { name: "Facebook", icon: Facebook, strategy: "Local wedding planning groups, venue community pages, vendor networking" },
      ],
      color: "rose",
    },
    {
      genre: "Branding Photographers",
      primary: [
        { name: "LinkedIn", icon: Linkedin, strategy: "Thought leadership content, client success stories, business tips for personal branding" },
        { name: "Instagram", icon: Instagram, strategy: "Professional transformation reveals, tips for looking good on camera, brand story content" },
      ],
      secondary: [
        { name: "Facebook", icon: Facebook, strategy: "Local business owner groups, entrepreneur communities, targeted ads to small business pages" },
        { name: "YouTube", icon: Video, strategy: "Behind-the-scenes of branding sessions, tips for looking good on camera, client interviews" },
      ],
      color: "blue",
    },
  ],
  linkedInOutreachEnabled: true,
  linkedInOutreach: {
    title: "LinkedIn Outreach Automation for Headshot Photographers",
    subtitle: "Marketing is a numbers game—here's how to scale your outreach",
    description: "For headshot and personal branding photographers, LinkedIn is a goldmine. But manually sending connection requests doesn't scale. You need a workflow-driven automated process.",
    benefits: [
      "Send 100+ personalized connection requests per week (within LinkedIn's limits)",
      "Auto-follow-up sequences after connections accept",
      "Target by job title, industry, company size, and location",
      "Track response rates and optimize messaging",
      "Warm up cold prospects before pitching services",
    ],
    stats: [
      { value: "100+", label: "Connections/week" },
      { value: "25%", label: "Avg acceptance rate" },
      { value: "8-12%", label: "Response rate" },
    ],
  },

  // ── AI Growth System ──
  growthSystemHeadline: "for Photography Studios",
  growthSystemHighlight: "AI Client Growth System",
  growthSystemSubheadline: "Stop chasing leads manually. Build an automated system that attracts, nurtures, converts, and retains clients—while you focus on your craft.",
  clientJourneyStages: [
    { stage: "Awareness", icon: Eye, description: "Strangers discover your brand through Google searches, social media, AI recommendations, and paid ads.", goal: "Get discovered by your ideal clients", color: "blue" },
    { stage: "Prospect", icon: Target, description: "Interested visitors land on your website. They're browsing your portfolio, checking pricing, reading reviews.", goal: "Build trust and stand out", color: "purple" },
    { stage: "Lead", icon: Mail, description: "They've submitted an inquiry form or called your studio. Speed and nurturing determine if they book or ghost.", goal: "Respond fast & nurture to booking", color: "primary" },
    { stage: "Customer", icon: Camera, description: "They booked and paid. Session complete. Happy client. But most photographers stop here.", goal: "Deliver & collect reviews", color: "emerald" },
    { stage: "Retain & Grow", icon: Repeat, description: "Repeat bookings, referrals, upsells. Your past clients are your lowest-cost, highest-value source of revenue.", goal: "Turn one client into lifetime value", color: "amber" },
  ],
  emailNurturePoints: [
    { title: "Stay Top-of-Mind", description: "Most photography purchases aren't impulse decisions. Email keeps you visible during their consideration period.", icon: Eye },
    { title: "Build Trust Over Time", description: "Share your work, personality, and expertise. By the time they're ready to book, they already feel like they know you.", icon: Heart },
    { title: "Automate Follow-ups", description: "Set it once and let automated sequences nurture leads while you focus on shooting and editing.", icon: RefreshCw },
  ],
  emailSequenceTitle: "5-Day Email & SMS Automation:",
  emailSequenceHighlight: "Inquiry to Close",
  noShowResearchCitations: [
    { stat: "15-30% of appointments are missed industry-wide", source: "Service Industry Research", publication: "Healthcare & appointment-based businesses (PMC)", year: "2016", label: "The Problem" },
    { stat: "98% of text messages are opened", source: "Industry Research", publication: "Mobile Marketing Association", year: "2023", label: "Why SMS Works" },
    { stat: "SMS reminders reduce no-shows by 38%", source: "Imperial College London", publication: "BMC Ophthalmology", year: "2008", label: "The Result" },
    { stat: "Reminder systems reduce lost-to-follow-up by 60%", source: "Cochrane Reviews", publication: "Systematic Review Meta-Analysis", year: "2016", label: "Long-Term Impact" },
  ],
  sessionReminderWorkflows: [
    {
      sessionType: "Consultation Session", icon: Focus, color: "emerald",
      description: "Pre-meeting reminder sequence for discovery calls and consultations",
      noShowImpact: "Missed consultations waste your prep time and delay their booking decision",
      reminders: [
        { timing: "3 days before", channels: ["email"], content: "Confirmation + what to prepare (vision board, outfit ideas, questions)" },
        { timing: "1 day before", channels: ["email", "sms"], content: "Meeting link/directions + reminder to have decision-makers present" },
        { timing: "2 hours before", channels: ["sms"], content: "Quick reminder with click-to-join link or address" },
      ],
      expectedReduction: "Up to 38%",
    },
    {
      sessionType: "Portrait Session", icon: Aperture, color: "violet",
      description: "Pre-session reminder sequence for photo sessions",
      noShowImpact: "No-shows mean lost revenue, wasted location reservations, and scheduling gaps",
      reminders: [
        { timing: "5 days before", channels: ["email"], content: "What to wear guide, location details, session timeline" },
        { timing: "2 days before", channels: ["email", "sms"], content: "Weather backup plan, parking info, prep checklist" },
        { timing: "Morning of", channels: ["sms"], content: "\"See you at [time]!\" with location pin and contact number" },
      ],
      expectedReduction: "Up to 38%",
    },
    {
      sessionType: "Ordering Session (IPS)", icon: Images, color: "amber",
      description: "Pre-sales meeting reminder for in-person ordering appointments",
      noShowImpact: "Missed IPS = delayed revenue, gallery expiration issues, decision fatigue",
      reminders: [
        { timing: "3 days before", channels: ["email"], content: "Preview gallery teaser, what to expect, bring decision-makers" },
        { timing: "1 day before", channels: ["email", "sms"], content: "Appointment value reminder + wall space measurement prompt" },
        { timing: "2 hours before", channels: ["sms"], content: "Excited to show you your images! See you soon at [location]" },
      ],
      expectedReduction: "Up to 38%",
    },
  ],
  marketingCampaigns: [
    {
      genre: "Portrait Photography", icon: Users, color: "pink",
      offer: {
        headline: "Mother's Day Mini Marathon", tagline: "[Event Date] — Celebrate the most important woman in your life",
        price: "$249", originalPrice: "$750", savings: "Save $501",
        includes: ["30-minute portrait session", "Hair & Makeup included", "1 digitally edited image", "Additional images available for purchase"],
        urgency: "One Day Only Event", cta: "Claim This Offer",
      },
      funnel: ["Meta Ad → Mother's Day Gift Guide", "Landing Page → Session Details", "Lead Magnet → What to Wear Guide", "Email Nurture → Portfolio Showcase", "Booking → Calendar Link", "Reminder → Session Prep Tips", "Post-Session → Ordering Session & Upsell"],
      topPlatforms: ["Meta (FB/IG)", "Pinterest", "Email"],
      seasonality: "Peak: Fall & Spring, Mother's Day",
    },
    {
      genre: "Wedding Photography", icon: Heart, color: "rose",
      offer: {
        headline: "$500 Off Engagement Session", tagline: "When You Book Your Wedding Package",
        price: "FREE", originalPrice: "$500 Value", savings: "Included with wedding booking",
        includes: ["1-hour engagement session", "25+ edited images", "Location of your choice", "Use for save-the-dates"],
        urgency: "Limited 2026 dates available", cta: "Check Availability",
      },
      funnel: ["Pinterest Pin → Real Wedding Gallery", "Blog Post → Venue-Specific SEO", "Inquiry Form → Detailed Questionnaire", "Consultation → Video Call Booking", "Proposal → Custom Package Builder", "Contract → Secure Deposit", "Nurture → Wedding Day Timeline"],
      topPlatforms: ["Pinterest", "Instagram", "The Knot", "Google SEO"],
      seasonality: "Peak: Engagement season (Nov-Feb)",
    },
    {
      genre: "Headshot Photography", icon: Sparkles, color: "blue",
      offer: {
        headline: "$149 Express Headshot Special", tagline: "Professional Headshots in 20 Minutes",
        price: "$149", originalPrice: "$299", savings: "50% Off",
        includes: ["1 retouched image", "Facial expression coaching", "Same day guided ordering session", "Same day delivery"],
        urgency: "This month only", cta: "Book Your Session",
      },
      funnel: ["LinkedIn Outreach → Value-First Post", "Lead Magnet → Brand Photo Checklist", "Email Sequence → Transformation Stories", "Discovery Call → Needs Assessment", "Proposal → ROI Presentation", "Booking → Pre-Session Questionnaire", "Upsell → Full Brand Package"],
      topPlatforms: ["LinkedIn", "Google PPC", "Email"],
      seasonality: "Year-round with Q1 surge",
    },
  ],
  seasonalCampaigns: [
    { campaign: "Mother's Day Special", timing: "Launch 4-6 weeks before", offer: "Gift cards for mom + mini-session packages", channels: ["Email to past clients", "Social media ads", "Website popup"] },
    { campaign: "Valentine's Couples Sessions", timing: "Launch 3-4 weeks before", offer: "Romantic couples mini-sessions", channels: ["Instagram Reels", "Email to engagement clients", "Google ads"] },
    { campaign: "Fall Family Sessions", timing: "Launch mid-August", offer: "Fall foliage family portraits for holiday cards", channels: ["Email blast", "Facebook local groups", "Pinterest ads"] },
    { campaign: "Back-to-School Senior Rush", timing: "July announcement", offer: "Senior portrait packages before school starts", channels: ["Instagram to parents", "High school partnerships", "TikTok"] },
    { campaign: "Holiday Mini-Sessions", timing: "October announcement", offer: "Quick holiday-themed sessions", channels: ["Email to client list", "Facebook events", "Referral incentive"] },
  ],
  pastClientWorkflows: [
    { title: "Annual Check-in", description: "Automated email 11 months after their session to offer an anniversary or updated session.", icon: Calendar },
    { title: "Milestone Triggers", description: "For newborn clients, auto-send 6-month and 1-year session reminders based on baby's birthday.", icon: Sparkles },
    { title: "Re-engagement Campaign", description: "Haven't heard from a client in 2+ years? Send a 'We miss you' offer with a special return discount.", icon: Heart },
  ],

  // ── Reputation ──
  reputationHeadline: "We Set Up Your Reputation,",
  reputationHighlight: "Referrals & Gift Cards",
  reputationSubheadline: "Turn happy photography clients into your studio's best marketing channel",
  reputationBullets: [
    "5-star reviews build instant trust with potential clients",
    "Google reviews directly impact your local search ranking",
    "Automated review requests sent after every session",
    "Monitor all platforms: Google, Facebook, Yelp, The Knot",
    "Respond to reviews quickly to show engagement",
  ],
  reviewFlowSteps: [
    { step: "1", title: "Session Complete", description: "Client receives gallery delivery" },
    { step: "2", title: "Happiness Check", description: "Automated email: 'How was your experience?'" },
    { step: "3", title: "If Positive", description: "Send Google review request link" },
    { step: "4", title: "Review Submitted", description: "Thank-you email + small gift/discount for next session" },
    { step: "5", title: "If Neutral/Negative", description: "Private feedback form to resolve before going public" },
  ],
  giftCardUseCases: "baby showers, graduations, and Mother's Day",
  giftAndReferralPrograms: [
    { title: "Gift Card Sales", description: "Sell gift cards year-round, especially before holidays. Perfect for baby showers, graduations, and Mother's Day.", icon: Gift, features: ["Online gift card store", "Custom denominations", "Automated delivery", "Usage tracking"] },
    { title: "Referral Tracking", description: "Know exactly who referred each new client. Track referral sources automatically in your CRM.", icon: UserPlus, features: ["Unique referral links", "Referral source tagging", "Thank-you automation", "Reward tracking"] },
    { title: "Referral Rewards", description: "Incentivize referrals with credits, prints, or session discounts. Automate reward delivery.", icon: DollarSign, features: ["Automatic reward triggers", "Credit bank system", "Thank-you emails", "Referral leaderboard"] },
  ],

  // ── AI Voice & Chat ──
  aiVoiceChatSectionHeadline: "We Power Your 24/7 Studio",
  aiVoiceChatHighlight: "Booking & Communication",
  aiVoiceChatSubheadline: "Never miss a photography booking—AI handles studio inquiries around the clock",
  aiFeatures: [
    {
      title: "24/7 Voice AI Receptionist",
      description: "Never miss a booking call again. AI answers inquiries, checks your calendar availability, and books appointments even at 2am.",
      icon: Phone,
      features: ["Answers calls in your brand voice", "Checks calendar availability in real-time", "Books consultations and sessions", "Sends confirmation texts/emails", "Transfers urgent calls to you"],
      color: "violet",
    },
    {
      title: "Conversational AI Chat",
      description: "Intelligent chatbot that engages website visitors, answers FAQs about your services, and captures leads across all channels.",
      icon: MessageSquare,
      features: ["Website live chat widget", "SMS two-way conversations", "Facebook Messenger integration", "Instagram DM automation", "Lead qualification & capture"],
      color: "cyan",
    },
  ],

  // ── Why Choose Us ──
  whyChooseUsHeadline: "Why Choose GrowSmallBiz for Photography Marketing",
  whyChooseUsSubtitle: "Your Photography Marketing Partner",
  whyChooseUsBody: "We specialize in helping photographers get found by ideal clients, showcase their work effectively, and build a sustainable booking pipeline.",
  whyChooseUsCards: [
    { title: "Photography Experts", description: "We focus on photographers—weddings, portraits, commercial, and events. We know your industry.", icon: Camera },
    { title: "Portfolio Optimization", description: "Showcase your best work in a way that both clients and search engines love.", icon: Image },
    { title: "Visual-First Marketing", description: "Leverage Instagram, Pinterest, and visual platforms to attract your ideal clients.", icon: Star },
    { title: "Local SEO for Creatives", description: "Rank for photography searches in your city and surrounding areas.", icon: MapPin },
    { title: "AI Search Ready", description: "Get recommended when couples ask AI for the best wedding photographer in your city.", icon: Bot },
    { title: "Booking Growth", description: "Our photography clients typically see 2-3x more inquiries within the first season.", icon: TrendingUp },
  ],

  // ── FAQ ──
  faqHeadline: "Photographer Marketing FAQs",
  faqSubheadline: "Common questions organized by service",
  faqCategories: [
    {
      id: "ai-seo", label: "AI SEO", icon: Search, color: "emerald",
      faqs: [
        { question: "How long does it take to see more photography bookings from SEO?", answer: "Most photographers see increased website traffic within 2-3 months and booking inquiries within 3-4 months. Wedding photography keywords often take longer due to competition but deliver high-value clients once ranking." },
        { question: "Can you help me rank for specific photography niches like newborn or boudoir?", answer: "Absolutely! We create dedicated landing pages for each specialty you offer and target clients actively searching for those specific services in your area." },
        { question: "How does AI improve my SEO strategy?", answer: "Our AI analyzes competitor rankings, identifies content gaps, and optimizes your pages for both Google and AI search platforms like ChatGPT and Perplexity—ensuring you're visible wherever clients search." },
        { question: "What's the difference between local SEO and regular SEO for photographers?", answer: "Local SEO focuses on ranking in Google Maps and 'near me' searches—critical for photographers since clients search locally. We optimize your Google Business Profile, build local citations, and target geo-specific keywords." },
        { question: "How do you optimize my photography website for AI search engines?", answer: "We structure your content to be easily understood by AI platforms like ChatGPT, Perplexity, and Google SGE. This includes schema markup, conversational content, and ensuring your expertise is clearly communicated." },
        { question: "Will SEO work if I'm in a competitive photography market?", answer: "Yes, but strategy matters. We identify less competitive long-tail keywords first (like 'intimate elopement photographer Colorado mountains') while building authority to compete for broader terms." },
        { question: "How important are blog posts for photography SEO?", answer: "Very important! Blog content targeting questions like 'what to wear for engagement photos' attracts clients early in their journey and builds topical authority that boosts all your pages." },
        { question: "Do you help with image SEO and alt tags?", answer: "Absolutely. We optimize all images with descriptive file names, alt text, and proper compression—helping your portfolio images rank in Google Image search where many clients discover photographers." },
        { question: "Can you help me rank for wedding venue-specific searches?", answer: "Yes! We create dedicated pages for venues you've shot at (e.g., 'Wedding Photographer at The Grand Ballroom'). These rank well and attract couples already booked at those venues." },
        { question: "How do you track and report on SEO progress?", answer: "You'll receive monthly reports showing keyword rankings, organic traffic, inquiry sources, and booking conversions. We also provide a live dashboard so you can check progress anytime." },
      ],
    },
    {
      id: "paid-media", label: "Paid Media", icon: Megaphone, color: "rose",
      faqs: [
        { question: "What's the minimum budget needed for photography ads?", answer: "We recommend starting with $500-1,000/month for local targeting. This allows enough data collection to optimize campaigns while generating immediate inquiries for sessions." },
        { question: "Which platforms work best for photographers?", answer: "Meta (Facebook/Instagram) excels for visual portfolios and lifestyle photography. Google Ads captures high-intent searches like 'wedding photographer near me.' We often recommend both for maximum reach." },
        { question: "How quickly will I see results from paid ads?", answer: "Unlike SEO, paid ads generate immediate visibility. Most photographers see their first inquiries within the first week, with campaigns fully optimized within 30-60 days." },
        { question: "What types of photography ads convert best?", answer: "Carousel ads showcasing your best work, video testimonials from happy clients, and 'behind the scenes' content perform exceptionally well. We also use retargeting to reach visitors who didn't book." },
        { question: "How do you target the right clients with Facebook/Instagram ads?", answer: "We use interest targeting (recently engaged, new parents, business owners), lookalike audiences from your past clients, and geographic targeting to reach your ideal clients in your service area." },
        { question: "Should I run ads during my slow season?", answer: "Absolutely! Slow season ads often have lower competition and costs. Plus, many clients book months ahead—so winter ads can fill your spring/summer calendar at a discount." },
        { question: "Do you create the ad images and copy for me?", answer: "Yes! Our team creates scroll-stopping ad creatives using your portfolio, writes compelling copy, and designs landing pages optimized for conversions—you just approve and we launch." },
        { question: "How do Google Ads work for photographers?", answer: "We target high-intent keywords like 'wedding photographer [your city]' so your ad appears when someone is actively searching. These leads are often ready to book, making them highly valuable." },
        { question: "Can you help with Pinterest advertising for photographers?", answer: "Yes! Pinterest is excellent for wedding and lifestyle photographers. Pins have long lifespans and target users actively planning events and saving inspiration." },
        { question: "How do you measure the ROI of my ad spend?", answer: "We track every inquiry back to its source, so you'll know exactly how many bookings came from ads. Most photographers see 3-5x return on their ad investment within the first few months." },
      ],
    },
    {
      id: "marketing-automation", label: "Marketing Automation", icon: RefreshCw, color: "amber",
      faqs: [
        { question: "How does the CRM integrate with my booking workflow?", answer: "Our CRM connects with your booking calendar to automatically capture inquiries, send follow-up sequences, and track where each client is in your pipeline—from initial inquiry to final gallery delivery." },
        { question: "How do seasonal campaigns work with email automation?", answer: "We pre-build campaign sequences for major opportunities (Mother's Day, fall minis, etc.) that automatically deploy at the right time. Past clients get priority access; warm leads get compelling offers." },
        { question: "Can I automate my client follow-ups without sounding robotic?", answer: "Yes! We craft personalized email sequences that match your brand voice. Dynamic fields insert client names, session types, and dates—making each message feel personally written." },
        { question: "What happens when a new inquiry comes in?", answer: "They instantly receive a personalized welcome email with your pricing guide or booking info. Simultaneously, you get notified and the lead enters a nurture sequence until they book or you mark them closed." },
        { question: "Can automation help me get more repeat clients?", answer: "Absolutely! We set up anniversary reminders, milestone sequences (baby's first year, annual headshot updates), and re-engagement campaigns that bring past clients back automatically." },
        { question: "How do you automate review collection?", answer: "After gallery delivery, clients receive a timed sequence requesting reviews on Google, Facebook, or The Knot—with direct links and gentle reminders that maximize response rates." },
        { question: "Can I see what's happening in my pipeline at a glance?", answer: "Yes! The CRM dashboard shows all leads by stage: new inquiry, responded, proposal sent, booked, completed. You'll never lose track of a potential client again." },
        { question: "How does text message automation work?", answer: "We integrate SMS for time-sensitive messages: session reminders, weather updates, and quick follow-ups. Texts have 98% open rates—perfect for reducing no-shows and speeding up responses." },
        { question: "Can I automate my mini session booking process?", answer: "Yes! We create dedicated landing pages with time slot selection, automated confirmations, reminder sequences, and post-session gallery delivery—handling hundreds of bookings without manual work." },
        { question: "What integrations does the CRM support?", answer: "We integrate with popular tools like Calendly, HoneyBook, Dubsado, Mailchimp, QuickBooks, and most photography gallery platforms—creating a seamless workflow across all your tools." },
      ],
    },
    {
      id: "ai-receptionist", label: "AI Receptionist", icon: Bot, color: "sky",
      faqs: [
        { question: "Can the AI really book appointments on its own?", answer: "Yes! The AI integrates with your calendar to check availability and book consultations or sessions in real-time. Clients receive instant confirmation while you continue shooting." },
        { question: "What if a client asks something the AI can't answer?", answer: "The AI gracefully handles edge cases by collecting the client's question and contact info, then notifying you. For urgent matters, it can transfer the call directly to you." },
        { question: "Does the AI sound robotic on the phone?", answer: "No—modern voice AI sounds remarkably natural. We customize the tone, pacing, and personality to match your brand. Most callers don't realize they're speaking with AI." },
        { question: "Can the AI handle multiple inquiries at once?", answer: "Absolutely! Unlike a human receptionist, AI can handle unlimited simultaneous calls, chats, and messages—ensuring no lead waits or goes unanswered." },
        { question: "What channels does the AI chat work on?", answer: "We deploy across your website (live chat widget), SMS, Facebook Messenger, Instagram DMs, and Google Business Messages—covering every channel clients use to reach you." },
        { question: "How does the AI qualify leads before they reach me?", answer: "We program qualification questions (budget, date, event type) so you only spend time on serious inquiries. Tire-kickers get helpful info; hot leads get fast-tracked to you." },
        { question: "Does the AI integrate with my existing calendar?", answer: "Yes! We connect with Google Calendar, Calendly, HoneyBook, Dubsado, and most scheduling tools—so bookings automatically appear and double-booking is impossible." },
        { question: "What's the setup process for the AI receptionist?", answer: "We handle everything: scripting responses, training on your services, integrating with your calendar, and testing thoroughly. You're up and running within 1-2 weeks with minimal effort on your part." },
      ],
    },
    {
      id: "linkedin-outreach", label: "LinkedIn Outreach", icon: Linkedin, color: "violet",
      faqs: [
        { question: "What's included in the LinkedIn outreach automation for headshot photographers?", answer: "We set up automated connection sequences targeting your ideal clients by job title and industry, personalized messaging templates, and follow-up drips—all within LinkedIn's terms of service to protect your account." },
        { question: "How do you target the right people for my headshot business?", answer: "We build custom filters based on job titles (CEOs, realtors, executives), industries, company sizes, and locations—ensuring your outreach reaches decision-makers who need professional headshots." },
        { question: "What response rates can I expect from LinkedIn outreach?", answer: "Most headshot photographers see 15-25% connection acceptance rates and 5-10% positive response rates. With our optimized messaging, many close 3-8 new clients per month from LinkedIn alone." },
        { question: "Is LinkedIn outreach only for headshot photographers?", answer: "While headshot photographers see the best results, commercial photographers, brand photographers, and those targeting businesses (corporate events, team photos) also benefit significantly." },
        { question: "Will my LinkedIn account get flagged or banned?", answer: "No—we stay well within LinkedIn's daily limits and use behavior patterns that mimic natural usage. We've never had a client's account restricted using our methods." },
        { question: "How personalized are the outreach messages?", answer: "Very! We use dynamic fields for name, company, job title, and even recent activity. Messages feel personally written, not mass-blasted—which is why response rates are high." },
        { question: "Can you help me create a LinkedIn profile that converts?", answer: "Absolutely! We optimize your headline, about section, featured content, and portfolio to position you as the go-to photographer for your target market." },
        { question: "How do you track which connections become clients?", answer: "We tag and track every connection through the sales process. You'll see exactly how many connections converted to conversations, consultations, and booked sessions." },
        { question: "Can I target specific companies I want to work with?", answer: "Yes! We can create campaigns targeting employees at specific companies you'd love as clients—perfect for landing corporate contracts or breaking into new industries." },
        { question: "How long until I see results from LinkedIn outreach?", answer: "Most photographers see their first qualified responses within 1-2 weeks. Consistent campaigns typically yield 3-8 booked sessions per month within the first 60 days." },
      ],
    },
  ],
  faqCtaCard: {
    headline: "Have more questions about our Photography Marketing Solution?",
    body: "Get a personalized demo of our SEO, website, and marketing automation platform.",
    signoff: "Let's build your booking machine.",
  },

  // ── Contact ──
  contactSectionHeadline: "Ready to Grow Your Photography Business?",
  contactSectionBody: "Schedule a strategy call to discuss your marketing goals.",

  // ── Sticky CTA ──
  stickyCtaConfig: {
    title: "Ready for Photography Marketing That Fills Your Calendar?",
    description: "Let's discuss a custom photography marketing strategy to attract dream clients and book more sessions consistently.",
    buttonText: "Get Your Custom Growth Strategy",
    accentWords: ["Fills", "Your", "Calendar"],
    showAfterScroll: 800,
  },
};
