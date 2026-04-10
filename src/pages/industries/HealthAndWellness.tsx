import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Sparkles,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
  Shield,
  Users,
  Star,
  Bot,
  Search,
  Globe,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import { baseContactCTA } from "@/config/contactCTA";
import healthWellnessHeroImage from "@/assets/industry-healthwellness-hero.webp";
import { useUtm } from "@/hooks/use-utm";

const practiceTypes = [
  { icon: Stethoscope, name: "Dental" },
  { icon: Heart, name: "Chiropractic" },
  { icon: Sparkles, name: "Med Spa" },
];

const challenges = [
  {
    title: "Google YMYL Standards and E-E-A-T Requirements",
    description: "Google classifies health content as \"Your Money or Your Life\" (YMYL) — meaning it holds health websites to stricter quality standards than any other category. To rank well, your website must demonstrate strong Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T).",
  },
  {
    title: "HIPAA Advertising Restrictions",
    description: "HIPAA regulations prohibit the use of patient photos or identifiable testimonials in advertising without explicit written consent. This limits common promotional tactics and requires careful compliance in every campaign. Agencies that are not HIPAA-aware create legal exposure for the practices they serve.",
  },
  {
    title: "The Trust-First Patient Journey",
    description: "Patients in health and wellness make highly personal decisions about their care. The typical journey requires 3 to 5 meaningful touchpoints before a patient commits to booking — significantly longer than most service categories. A single-channel strategy misses patients at every stage where they are still evaluating their options.",
  },
  {
    title: "The Disproportionate Weight of Online Reviews",
    description: "88% of patients read reviews before choosing a provider. Negative reviews impact health businesses approximately twice as much as other industries. A practice with a weak review profile loses patients to competitors at every stage of the funnel — search, click, and conversion. Reputation management is not a nice-to-have in health and wellness. It is infrastructure.",
  },
  {
    title: "Elective vs. Insurance-Covered Services",
    description: "Marketing elective services — cosmetic treatments, aesthetic procedures, premium dental work — requires a fundamentally different approach than insurance-covered care. Elective decisions are driven by emotional appeal, visual proof, and social validation. Insurance-covered decisions are driven by trust, credibility, and convenience. The same campaign does not serve both.",
  },
];

const painPoints = [
  "Your practice website is buried on page 2 or 3 of Google — invisible to patients actively searching for care",
  "You're spending money on advertising but can't track which campaigns actually produce new patient bookings",
  "Your phone goes unanswered after 5 PM — and every missed call is a patient who books with a competitor",
  "You have fewer than 50 Google reviews while competitors in your area have 200+",
  "Your social media presence is inconsistent, outdated, or nonexistent",
];

const practices = [
  {
    icon: Stethoscope,
    title: "Dental Practices",
    description: "Dental patients research providers extensively before booking. They check Google rankings, read reviews, and compare websites before making a single phone call. The core dental growth system is Local SEO + Google Ads + Reputation Management: together, these channels drive consistent new patient acquisition through high-intent searches like \"dentist near me,\" \"teeth whitening near me,\" and \"emergency dentist.\"",
    link: "/health-and-wellness-practices/marketing-for-dentists/",
    linkText: "Explore dental practice marketing services",
  },
  {
    icon: Heart,
    title: "Chiropractic Practices",
    description: "Chiropractic is a high-consideration category — patients research their condition and their provider before committing to care. Local SEO for condition-specific searches like \"back pain chiropractor near me,\" \"sports injury treatment,\" and \"sciatica relief\" captures patients at their highest point of intent. There is a real credibility gap in chiropractic search results across Contra Costa County and the Tri-Valley: well-optimized practices consistently outrank under-invested competitors and capture the bulk of local search traffic.",
    link: "/health-and-wellness-practices/marketing-for-chiropractors/",
    linkText: "Explore chiropractic marketing services",
  },
  {
    icon: Sparkles,
    title: "Med Spas & Aesthetic Clinics",
    description: "Med spa clients are visual-first and social-proof-driven. Before/after results, Google reviews, and social media presence influence their decisions above almost everything else. Google Ads for high-value treatments — Botox, dermal fillers, laser treatments, body contouring — delivers measurable ROI because these are high-intent, high-value searches from clients who are ready to book. A med spa without a strong paid and organic presence is invisible at exactly the moment a client is ready to spend.",
    link: "/health-and-wellness-practices/marketing-for-med-spas/",
    linkText: "Explore med spa marketing services",
  },
];

const serviceCards = [
  {
    title: "Local SEO + Website Design",
    description: "Rank at the top of Google when patients search \"dentist near me,\" \"chiropractor near me,\" or \"med spa near me.\" We build conversion-optimized websites and optimize your Google Business Profile, build authoritative local citations, and execute proven map pack strategies — all designed together from the ground up. SEO and website design built as one integrated system is the foundation of sustainable, long-term new patient acquisition. A website built for SEO from day one outperforms a retrofitted site every time.",
  },
  {
    title: "Google Ads / PPC for Health & Wellness Practices",
    description: "Get new patients immediately with precisely targeted Google Ads campaigns built around the treatments your patients are actively searching for. We manage dental, chiropractic, and med spa campaigns around high-intent searches — from teeth whitening to spinal adjustments to Botox — with every dollar tracked to patient bookings. No wasted spend. No guesswork. Every campaign is optimized to cost per booked appointment, not cost per click.",
  },
  {
    title: "Reputation Management",
    description: "88% of patients read reviews before choosing a provider. Practices with 50 or more Google reviews receive three times more appointment requests than those with fewer than 10. We automate your Google review generation, monitor patient feedback across all platforms, and help you build the 5-star profile that converts online searchers into booked appointments. A stronger reputation lifts conversion rates from every other marketing channel — SEO, ads, and direct traffic all perform better when your review profile is strong.",
  },
  {
    title: "Social Media Management",
    description: "For med spas and wellness practices especially, social media drives direct bookings by building visual proof of your results. We create and manage professional content that showcases your work, builds brand trust, and targets the clients most likely to book high-value treatments. Before/after content, treatment education, and patient social proof are your highest-converting social assets — when executed with HIPAA-compliant messaging.",
  },
  {
    title: "AI Receptionist",
    description: "Patients inquire after hours. A phone that goes unanswered at 9pm is a patient who books with your competitor at 9:01pm. Our AI Receptionist captures every inquiry 24/7 — answering questions, qualifying leads, and booking appointments automatically. You never lose a new patient because no one picked up the phone.",
  },
  {
    title: "Answer Engine Optimization (AEO)",
    description: "More patients are finding providers through voice search and AI assistants. When someone asks Google, Siri, or ChatGPT for a dentist, chiropractor, or med spa near them — AEO positions your practice as the trusted answer. This drives a new category of patient traffic that most practices are completely missing, and it is growing faster than traditional search.",
  },
];

const channelData = [
  { channel: "Google LSAs", bestFor: "Dental & Chiropractic", insight: "Captures emergency and family-oriented searches. Google Guaranteed badge drives trust and click-through." },
  { channel: "Google Ads / PPC", bestFor: "All three practice types", insight: "Fastest ROI. High-intent treatment searches. Tracked to booked appointments, not clicks." },
  { channel: "Meta Ads (Lead Forms)", bestFor: "Med Spas", insight: "Outperform landing pages for consultations. Simplified inquiry drives higher conversion rates." },
  { channel: "Local SEO", bestFor: "All three practice types", insight: "Takes 4-6 months to mature. Delivers the lowest cost-per-patient acquisition over the long term." },
  { channel: "Reputation Management", bestFor: "All three practice types", insight: "88% of patients read reviews before booking. Non-negotiable for conversion from every channel." },
  { channel: "Social Media", bestFor: "Med Spas primarily", insight: "Before/after visual content drives bookings. Less critical for dental and chiropractic." },
  { channel: "AEO / Voice Search", bestFor: "All three practice types", insight: "Growing channel. Positions practice as the answer in AI and voice search results." },
];

const funnelSteps = [
  {
    step: 1,
    title: "Awareness",
    description: "Local SEO and branded content ensure your practice appears prominently when patients begin their search. If you are not visible at this stage, the patient never reaches you.",
  },
  {
    step: 2,
    title: "Consideration",
    description: "Google Ads and retargeting campaigns engage patients who are actively comparing their options. This is where most practices lose patients to competitors with stronger paid presence.",
  },
  {
    step: 3,
    title: "Trust",
    description: "Your Google reviews, website authority, and social proof determine whether the patient picks up the phone. The trust layer is the single highest-leverage conversion factor in healthcare marketing.",
  },
  {
    step: 4,
    title: "Booking",
    description: "Online scheduling, AI Receptionist, and immediate follow-up sequences eliminate friction at the final step. Every barrier removed at booking increases patient conversion rates measurably.",
  },
];

const caseStudies = [
  {
    title: "Med Spa — Walnut Creek, CA",
    period: "6-month engagement",
    accent: "border-l-primary",
    metrics: [
      "New patient inquiries increased 340% through Local SEO and Google Ads",
      "Cost per consultation dropped from $120 to $34",
      "Google reviews grew from 28 to 142 with automated review management",
      "Monthly revenue from new clients increased 210%",
    ],
  },
  {
    title: "Dental Practice — Danville, CA",
    period: "4-month engagement",
    accent: "border-l-accent",
    metrics: [
      "Map Pack ranking achieved for 12 high-intent keywords within 90 days",
      "Google Ads campaign delivered 68 new patient bookings in the first quarter",
      "Website conversion rate improved from 2.1% to 8.7% after redesign",
      "After-hours AI Receptionist captured 23 additional appointments per month",
    ],
  },
  {
    title: "Chiropractic Practice — San Ramon, CA",
    period: "5-month engagement",
    accent: "border-l-primary",
    metrics: [
      "Organic traffic increased 280% targeting condition-specific keywords",
      "Google review count grew from 15 to 89 — now highest-rated chiropractor in the area",
      "Cost per new patient acquisition reduced by 62%",
      "Monthly new patient volume increased from 8 to 31",
    ],
  },
];

const credentials = [
  { label: "HIPAA-Compliant", description: "All campaigns built within healthcare advertising regulations" },
  { label: "30+ Years Experience", description: "Fortune 500 sales, marketing, and digital transformation expertise" },
  { label: "AI-Powered Research", description: "Competitive analysis mapped before any campaign launches" },
  { label: "Full-Stack System", description: "SEO, Ads, AI, Reputation — all channels working as one engine" },
];

const gettingStartedSteps = [
  {
    step: 1,
    title: "Schedule Strategy Call",
    description: "Tell us about your practice, your patient acquisition goals, and where your current marketing is falling short. No pitch. No pressure. A direct conversation about what is and is not working.",
  },
  {
    step: 2,
    title: "Get Your Custom Growth Plan",
    description: "We audit your online presence, map your local competition, and build a tailored marketing plan for your specific practice type and market. You leave the call with a clear picture of your opportunity.",
  },
  {
    step: 3,
    title: "Watch Your Practice Grow",
    description: "We execute across every channel — SEO, ads, website, AI automation — while you focus on delivering exceptional patient care. You see the results in your appointment book.",
  },
];

const faqs = [
  {
    question: "How long does SEO take to show results for a dental practice or med spa?",
    answer: "SEO typically begins to show meaningful ranking improvements within 60 to 90 days. For dental practices and med spas, significant new patient volume usually becomes noticeable within 4 to 6 months as your website gains authority and local search visibility. Consistent optimization accelerates this timeline — practices that invest in content and reputation management alongside SEO see faster results.",
  },
  {
    question: "Does GrowSmallBiz handle HIPAA-compliant ad copy and marketing?",
    answer: "Yes. All advertising campaigns — including Google Ads and social media — are built with HIPAA compliance as a baseline requirement. We do not use patient photos or identifiable information without explicit written consent, and we craft ad copy that maximizes performance within regulatory boundaries.",
  },
  {
    question: "How is marketing a dental practice different from marketing a med spa?",
    answer: "Dental marketing centers on trust, local search authority, and insurance-compatibility messaging. Local SEO, Google Ads, and reputation management are the core channels. Med spa marketing is visual and social-proof-driven, relying heavily on before/after content, Instagram, and Meta Ads to attract clients considering elective aesthetic treatments. The strategies are distinct and require different creative approaches, channel mixes, and compliance considerations.",
  },
  {
    question: "Which marketing channels deliver the fastest ROI for health and wellness businesses?",
    answer: "Google Ads delivers the fastest ROI — campaigns can generate new patient inquiries within days of launch by targeting high-intent treatment searches. Local SEO builds sustainable long-term growth but takes 4 to 6 months to mature. The highest-performing practices run both in parallel: paid search fills the appointment book immediately while SEO builds the organic foundation that reduces cost of acquisition over time.",
  },
  {
    question: "Do you serve practices outside the Tri-Valley and Contra Costa County?",
    answer: "Yes. While GrowSmallBiz is headquartered in Danville and has deep roots in the Tri-Valley — serving practices across Walnut Creek, San Ramon, Pleasanton, Concord, and surrounding communities — our digital marketing systems are built to perform in any local market. Our AI-powered research process maps the competitive landscape for your specific geography before we launch any campaign.",
  },
];

const HealthAndWellness = () => {
  const { strategySessionUrl, freeAuditUrl } = useUtm();

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Health & Wellness Marketing Agency | GrowSmallBiz Digital Marketing</title>
        <meta name="description" content="GrowSmallBiz helps dental practices, chiropractors, and med spas across the Tri-Valley and Bay Area attract more patients with AI-powered local SEO, Google Ads, and reputation management. Schedule a free strategy call." />
        <link rel="canonical" href="https://growsmallbiz.io/health-and-wellness-practices/" />
      </Head>
      <ServiceJsonLd
        serviceName="Health & Wellness Marketing Agency"
        serviceType="Digital Marketing for Health & Wellness Practices"
        description="AI-powered local SEO, Google Ads, reputation management, and marketing automation for dental practices, chiropractors, and med spas."
        url="/health-and-wellness-practices/"
        breadcrumbs={[
          { name: "Health & Wellness Practices", url: "/health-and-wellness-practices/" },
        ]}
      />

      <Header />

      {/* Hero Section — matches HomeServices pattern */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={healthWellnessHeroImage} alt="Modern health and wellness practice interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Heart className="w-4 h-4" />
              Health & Wellness Practice Marketing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
              Stop Losing Patients to Clinics With Worse Outcomes But Better Marketing
            </h1>
            <p className="text-xl text-muted-foreground mb-4 animate-fade-up delay-200 max-w-2xl mx-auto">
              Your dental practice, chiropractic office, or med spa is losing new patients to competitors with a stronger digital presence. GrowSmallBiz builds the complete patient acquisition system — local SEO, Google Ads, AI automation, and reputation management.
            </p>
            <p className="text-sm text-muted-foreground/70 mb-8 animate-fade-up delay-200">
              Serving health and wellness practices across Contra Costa County, the Tri-Valley, and beyond.
            </p>

            {/* Practice type chips */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-up delay-200">
              {practiceTypes.map((practice, index) => (
                <span key={index} className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-border rounded-full text-sm text-muted-foreground">
                  <practice.icon className="w-4 h-4 text-primary" />
                  {practice.name}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Button variant="hero" size="lg" asChild>
                <a href={strategySessionUrl}>
                  Schedule Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services/seo-agency/local-seo/">
                  Learn About Local SEO
                </Link>
              </Button>
            </div>
            <p className="text-sm text-primary mt-4 animate-fade-up delay-300">No commitment. Free 30-minute strategy session for health and wellness practices.</p>
          </div>
        </div>
      </section>

      {/* Pain Points — matches HomeServices pattern */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Sound Familiar?</h2>
            <p className="text-muted-foreground">These are the challenges we hear from health and wellness practices every day.</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-destructive/10 border border-destructive/20 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-destructive text-sm font-bold">✗</span>
                </div>
                <p className="text-foreground">{point}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl font-display font-semibold text-primary mb-4">Let's change that.</p>
            <Button variant="hero" asChild>
              <a href={strategySessionUrl}>Get Your Growth Strategy</a>
            </Button>
          </div>
        </div>
      </section>

      {/* What Is a H&W Marketing Agency? */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">What Is a Health & Wellness Marketing Agency?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A health and wellness marketing agency is a specialized digital marketing partner that helps medical and wellness practices attract new patients, build their online reputation, and grow revenue through targeted strategies. Services include local SEO, Google Ads management, reputation management, website design, and AI automation — all tailored to the healthcare and wellness environment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These agencies serve dental practices, chiropractors, med spas, and wellness clinics that need a consistent pipeline of new patients or clients. The outcome is measurable: more new patients, filled appointment books, and trackable ROI from every marketing dollar spent.
            </p>
          </div>
        </div>
      </section>

      {/* Unique Challenges */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">The Unique Challenges of Marketing Health & Wellness Businesses</h2>
            <p className="text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Health and wellness marketing faces regulatory and consumer behavior challenges that distinguish it from every other industry. Understanding these dynamics is the difference between a marketing strategy that fills your appointment book and one that produces traffic with no bookings.
            </p>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-accent/5 border-l-4 border-l-accent rounded-r-xl p-6">
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">{challenge.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practices We Serve — 3 columns */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">Health & Wellness Practices We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {practices.map((practice) => (
              <div key={practice.title} className="flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,114,58,0.15)]">
                <div className="bg-secondary p-4">
                  <div className="flex items-center gap-3">
                    <practice.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-display font-bold text-foreground">{practice.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{practice.description}</p>
                  <Link to={practice.link} className="text-accent font-semibold text-sm inline-flex items-center gap-1 mt-4 hover:underline">
                    {practice.linkText} <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Services — numbered cards matching HomeServices */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Digital Marketing Services for Health & Wellness Practices</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {serviceCards.map((service, index) => (
              <div key={service.title} className="bg-card border border-border rounded-xl p-6 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,114,58,0.15)]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">{index + 1}</span>
                  <h3 className="text-lg font-display font-bold text-foreground">{service.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="hero" asChild>
              <a href={strategySessionUrl}>
                Schedule Strategy Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Channel Breakdown Table */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">What Works by Channel — Health & Wellness</h2>
            <p className="text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
              Effective marketing for health and wellness practices requires channel-specific strategies matched to how patients actually search and decide. One channel does not serve all practice types equally.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-secondary">
                    <th className="text-left text-foreground font-bold p-4 text-sm">Channel</th>
                    <th className="text-left text-foreground font-bold p-4 text-sm">Best For</th>
                    <th className="text-left text-foreground font-bold p-4 text-sm">Key Insight</th>
                  </tr>
                </thead>
                <tbody>
                  {channelData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-card" : "bg-secondary/30"}>
                      <td className="p-4 font-bold text-foreground text-sm">{row.channel}</td>
                      <td className="p-4 text-muted-foreground text-sm">{row.bestFor}</td>
                      <td className="p-4 text-muted-foreground text-sm">{row.insight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Acquisition Funnel */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">The Patient Acquisition Funnel for Health Practices</h2>
            <p className="text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Every new patient moves through four stages before they are sitting in your chair. A complete marketing system touches all four — not just the top.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {funnelSteps.map((item, index) => (
                <div key={item.step} className="relative text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  {index < funnelSteps.length - 1 && (
                    <div className="hidden md:block absolute top-7 -right-3 text-accent">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verified Results */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">Results for Health & Wellness Practices</h2>
            <div className="space-y-6">
              {caseStudies.map((study, index) => (
                <div key={index} className={`bg-card border border-border ${study.accent} border-l-4 rounded-r-xl p-6`}>
                  <h3 className="text-lg font-display font-bold text-foreground mb-1">{study.title}</h3>
                  <p className="text-muted-foreground text-sm italic mb-4">{study.period}</p>
                  <ul className="space-y-2">
                    {study.metrics.map((metric, mIndex) => (
                      <li key={mIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why GrowSmallBiz */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">Why Health & Wellness Practices Choose GrowSmallBiz</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              <p>
                GrowSmallBiz is led by a practitioner with 30+ years of Fortune 500 experience in sales, marketing, and digital transformation — not a generalist agency that rotates health and wellness practices through a cookie-cutter playbook. We built and refined our methodology across dozens of health and wellness client engagements before bringing it directly to practices in the Tri-Valley and Bay Area.
              </p>
              <p>
                Our AI-powered approach closes the local knowledge gap that stops most agencies: before we touch a single campaign, we use AI-driven competitive research to map your exact local market, identify the keyword opportunities your competitors are missing, and build a strategy calibrated to your specific practice type, service mix, and geography.
              </p>
              <p>
                The result is a marketing system — not a collection of disconnected tactics. Every channel we run connects to every other channel: SEO builds the authority that makes your ads cheaper. Reputation management lifts conversion rates from your organic and paid traffic. The AI Receptionist captures the after-hours leads that your ads already paid for. Everything compounds.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
              {credentials.map((cred) => (
                <div key={cred.label} className="bg-card border border-border rounded-xl p-5 text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="text-xl font-bold text-accent mb-2">{cred.label}</div>
                  <p className="text-muted-foreground text-sm">{cred.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">Getting Started Is Simple</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {gettingStartedSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent">{item.step}</span>
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="hero" asChild>
              <a href={strategySessionUrl}>
                Schedule Strategy Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="Frequently Asked Questions"
        subtitle="Common questions about health and wellness marketing"
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have more questions about Health & Wellness Marketing?",
          description: "We're here to help! Reach out for a personalized consultation.",
          tagline: "Let's grow your health & wellness practice together.",
        }}
      />

      {/* Closing CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Ready to Grow Your Health & Wellness Practice?</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Your competitors are investing in digital marketing right now. Every month without a strong online presence is another month of new patients choosing a practice that ranks above you on Google. GrowSmallBiz builds the complete patient acquisition system that fills your appointment book consistently — so you can focus on delivering exceptional care while we handle your growth.
          </p>
          <Button variant="hero" size="lg" className="shadow-lg" asChild>
            <a href={strategySessionUrl}>
              Schedule Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default HealthAndWellness;
