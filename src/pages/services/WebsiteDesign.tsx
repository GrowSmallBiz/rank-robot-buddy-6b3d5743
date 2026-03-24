import { Head } from "vite-react-ssg";
import { CardCTA } from "@/components/services/CardCTA";
import websiteDesignHeroBg from "@/assets/website-design-hero-bg.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/sections/FAQSection";
import { baseContactCTA } from "@/config/contactCTA";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SectionHeader } from "@/components/services/SectionHeader";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { GlowCard } from "@/components/ui/glow-card";
import {
  ArrowRight,
  Globe,
  AlertTriangle,
  Wrench,
  Smartphone,
  Zap,
  MessageSquare,
  Layout,
  Shield,
  MousePointerClick,
  Search,
  Link2,
  TrendingUp,
  Eye,
  BarChart3,
  Layers,
  Home,
  Heart,
  Sparkles,
  Scale,
  Building,
  CheckCircle2,
  Clock,
} from "lucide-react";

const CTA_URL =
  "https://lp.growsmallbiz.io/digital-growth-strategy-session?utm_source=website&utm_medium=web-design&utm_campaign=strategy-session";

const faqs = [
  {
    question: "Do you offer standalone website projects?",
    answer:
      "No. GrowSmallBiz builds websites as part of a broader digital growth engagement. That may include website strategy, AI SEO, paid search, conversion optimization, and lead capture systems. We do not take on design-only or website-only projects.",
  },
  {
    question: "What happens on the free growth strategy call?",
    answer:
      "We review your current website, look at where leads may be leaking, and talk through how your site, SEO, paid traffic, and conversion strategy work together. The goal is clarity, not pressure.",
  },
  {
    question: "Can you redesign my current website instead of building a new one?",
    answer:
      "Sometimes, yes. If the current platform and structure are workable, a strategic redesign may be the right move. If the foundation is too limited, a rebuild is often the smarter long-term decision.",
  },
  {
    question: "Is SEO included when you build a website?",
    answer:
      "Every website includes SEO-ready architecture and technical best practices. Full SEO execution is handled as part of the broader growth engagement, not as a disconnected add-on.",
  },
  {
    question: "How is this different from hiring a typical web design agency?",
    answer:
      "Most agencies deliver a finished website. We build a conversion foundation tied to lead generation, CRM capture, tracking, SEO support, and paid traffic performance.",
  },
  {
    question: "What types of businesses are the best fit?",
    answer:
      "Local service businesses where leads matter: home services, healthcare and wellness, med spas, legal and financial professionals, and real estate-related businesses.",
  },
  {
    question: "Will the website connect with CRM, forms, booking tools, and lead tracking?",
    answer:
      "Yes. That integration is part of the point. A website should not just look better — it should capture, route, and support follow-up on every lead.",
  },
  {
    question: "Why does the website need to be part of a broader growth system?",
    answer:
      "Because traffic alone doesn't create revenue. SEO, Google Ads, referrals, and visibility only work when the website converts the visit into a real next step.",
  },
];

const includedFeatures = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "More than 60% of local service business traffic comes from mobile devices. We design for the phone first — meaning your layout, navigation, click-to-call buttons, and contact forms are optimized for a visitor using their thumb, not a mouse. Desktop looks great too. But mobile is where you win or lose most of your leads, and we treat it that way from the first wireframe.",
  },
  {
    icon: Zap,
    title: "Fast Load Speed",
    description:
      "A slow website doesn't just frustrate visitors — it actively loses them. Most mobile users will abandon a page that takes more than three seconds to load. We build for performance: compressed images, clean code, minimal bloat, and hosting infrastructure that supports fast delivery. Speed is not a feature we add — it's a standard we build to.",
  },
  {
    icon: MessageSquare,
    title: "Clear Messaging and Service Clarity",
    description:
      "Within the first few seconds of arriving on your site, a visitor should know exactly what you do, who you serve, and why you're the right choice. We write the copy — or work with your existing messaging — to make that clarity immediate. No guessing. No scrolling for answers. No vague taglines that could apply to any business in your category.",
  },
  {
    icon: Layout,
    title: "Conversion-Focused Page Structure",
    description:
      "Every page on your website has a job to do. We structure each page around a defined conversion path — logical visual hierarchy, strategic placement of calls to action, friction-reducing layout choices, and page flow that guides a visitor toward contacting you without feeling pushy or cluttered.",
  },
  {
    icon: Shield,
    title: "Local Trust Signals and Proof Elements",
    description:
      "Trust is the conversion variable most websites ignore. We build it in deliberately — through real customer reviews presented prominently, verifiable credentials and certifications, licensing and insurance information, years in business, and photography and specifics that signal you're a real, established operation in your local market. A visitor who trusts you calls. A visitor who isn't sure doesn't.",
  },
  {
    icon: MousePointerClick,
    title: "Strategic Calls to Action",
    description:
      "A call to action is not just a button. It's a specific prompt, placed at the right moment in the visitor's experience, written in a way that reduces hesitation and makes the next step feel easy. We place CTAs strategically throughout your site and write them to reflect what your ideal customer actually needs to hear before they reach out.",
  },
  {
    icon: Search,
    title: "SEO-Ready Architecture",
    description:
      "Your website is the foundation your SEO strategy builds on. We build every site with clean URL structure, proper heading hierarchy, schema markup, fast load speeds, and technical fundamentals that allow search engines to crawl, understand, and rank your content. When SEO is part of your broader growth engagement, this foundation means your SEO investment works from day one — not after months of remediation.",
  },
  {
    icon: Link2,
    title: "CRM, Booking, and Lead Capture Integration",
    description:
      "A lead that doesn't get captured and routed quickly is a lead that goes cold. We integrate your website with your CRM, booking system, and lead notification workflows so that when someone fills out a form or books an appointment, the right person in your business knows immediately — and the lead is logged where your team can follow up. The website generates the lead. The integration makes sure it doesn't fall through the cracks.",
  },
];

const processSteps = [
  {
    step: "Step 1",
    title: "Strategy and Discovery",
    description:
      "Before anything is designed or written, we spend time understanding your business, your market, and your goals. We look at who your ideal customer is, what they need to see and hear before they trust you enough to reach out, and what specific actions you need your website to drive. We also look at the broader growth picture — how your website will connect to your SEO, your paid advertising, and your lead generation infrastructure.",
    deliverable:
      "Deliverable: A clear conversion strategy and sitemap that defines the structure, page hierarchy, and goals for every key page on the site.",
  },
  {
    step: "Step 2",
    title: "Structure and Copy",
    description:
      "We build the wireframes before a single color is chosen or a font is considered. This forces every layout decision to be made on the basis of conversion logic, not visual preference. Alongside the structure, we develop the copy: headlines, service descriptions, trust language, and calls to action, all written to move your specific customer toward contacting you.",
    deliverable:
      "Deliverable: Wireframes and copy for all primary pages, reviewed and approved before design begins.",
  },
  {
    step: "Step 3",
    title: "Design and Build",
    description:
      "Once strategy, structure, and copy are locked, design begins. Your site is built to reflect your brand with intention — not with generic templates adapted to fit. We build for mobile-first performance, fast load speed, and the technical standards required for clean SEO architecture. Every design decision is made in service of the conversion goal.",
    deliverable:
      "Deliverable: A fully designed, fully built website — mobile-optimized, fast-loading, and technically sound — ready for final review and launch.",
  },
  {
    step: "Step 4",
    title: "Launch and Integration",
    description:
      "Before we go live, we connect your site to the systems it needs to function as a lead generation asset: your CRM, booking platform, analytics tools, and any campaign-specific integrations tied to your paid or SEO programs. For clients in a full growth engagement, this is also when the SEO and paid traffic strategies go live on top of the new foundation.",
    deliverable:
      "Deliverable: A live, fully integrated website connected to your lead capture and marketing infrastructure — with conversion tracking in place from day one.",
  },
];

const afterLaunchItems = [
  {
    icon: TrendingUp,
    title: "More Consistent Lead Flow",
    description:
      "When your website is built to convert — not just to exist — you stop depending on luck, referral timing, or ad spend surges to generate inquiries. Visitors who arrive from any channel have a clear, trust-building experience that gives them a reason to reach out. The result is leads that come in more predictably, from more sources, more consistently than a passive site ever produces.",
  },
  {
    icon: Eye,
    title: "A Credible First Impression That Closes Faster",
    description:
      "Your website is often the first detailed interaction a prospect has with your business. When it communicates clearly, looks professionally done, and establishes trust through real proof — reviews, credentials, specifics — the prospect arrives at the conversation already sold on the idea of working with you. That shortens the sales cycle. It also means fewer tire-kickers and more contacts who are ready to move.",
  },
  {
    icon: BarChart3,
    title: "Better Returns on Every Other Marketing Channel",
    description:
      "A stronger website makes every other marketing investment more efficient. Your Google Ads cost per lead drops because the traffic you're paying for actually converts. Your SEO rankings start producing revenue instead of just visits. Your referrals close faster. The same budget, directed at a high-converting website, produces a meaningfully different return.",
  },
  {
    icon: Link2,
    title: "Leads That Don't Fall Through the Cracks",
    description:
      "When your site is integrated with your CRM and lead notification systems, every inquiry is logged, every form submission triggers follow-up, and no lead sits unattended because someone didn't check their email in time. The website generates the opportunity. The integration protects it.",
  },
  {
    icon: Layers,
    title: "Visibility Into What's Working",
    description:
      "With proper analytics and conversion tracking in place from launch day, you stop guessing about what's driving results. You can see which pages are converting, where visitors are dropping off, which traffic sources are producing leads versus just visits, and what's happening to your paid traffic after the click.",
  },
  {
    icon: Wrench,
    title: "A Foundation That Supports Real Growth",
    description:
      "A high-converting website isn't a destination — it's a starting point. Once the conversion foundation is solid, every growth initiative you layer on top — AI-driven SEO, Google Ads, reputation building, market expansion — works better because it has something strong to land on. This is the model behind the Digital Dominance Method: build the foundation right, then build on it.",
  },
];

const industries = [
  {
    icon: Home,
    title: "Home Services and Contractors",
    description:
      "Roofing, HVAC, plumbing, electrical, landscaping, remodeling — businesses where the job ticket is high, the competition is local, and the customer needs to trust you before they hand over access to their home. We build sites that establish credibility fast: licensed and insured signals front and center, real customer reviews from recognizable neighborhoods, clear service areas, and calls to action written for a homeowner who has three contractors open in different tabs and needs a reason to choose you.",
  },
  {
    icon: Heart,
    title: "Healthcare and Wellness Practices",
    description:
      "Primary care, dental, chiropractic, physical therapy, mental health — practices where the decision is personal, trust is everything, and patients are often anxious before they've made the call. We build sites that reduce friction and build reassurance: clear descriptions of what to expect, provider credentials with context, easy appointment booking, and messaging calibrated for a patient who needs to feel confident they're in the right place.",
  },
  {
    icon: Sparkles,
    title: "Med Spas and Aesthetic Practices",
    description:
      "In aesthetics, the website is often the first and most important impression of what the experience will feel like. Prospective patients are evaluating your taste, your expertise, and your results before they ever contact you. We build sites that reflect the quality of the experience you deliver — visually elevated, trust-rich with real results and credentials, and structured around the specific services that drive the most revenue for your practice.",
  },
  {
    icon: Scale,
    title: "Legal and Financial Professionals",
    description:
      "Attorneys, CPAs, financial advisors, and consultants operate in categories where credibility is the entire sale. We build sites that communicate authority without arrogance: clear practice areas or service descriptions, credentials and experience presented substantively, social proof that speaks to outcomes, and consultation requests that feel like a professional process from the first click.",
  },
  {
    icon: Building,
    title: "Real Estate Agents & Brokers",
    description:
      "Real estate professionals compete in one of the most crowded local search categories online — and most agents' websites look nearly identical. We build sites that give buyers and sellers a clear reason to choose you specifically: strong personal branding, neighborhood and market expertise positioned prominently, listings integration where applicable, and lead capture built around the way real estate clients actually search — often on mobile, often late at night, and often comparing multiple agents before making contact.",
  },
];

const problemBullets = [
  "It loads slowly — especially on mobile — and visitors leave before seeing anything",
  "It's unclear within the first few seconds what you do, who you serve, or why you're the right choice",
  "There's no natural next step — no strong call to action, no clear path to contact",
  "There's nothing that builds trust: no reviews, no credentials, no tangible proof",
  "It isn't connected to your CRM, booking system, or anything that captures and routes leads",
  "Mobile is an afterthought — and more than 60% of your visitors are on a phone",
];

const WebsiteDesign = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Head>
        <title>Website Design for Local Businesses | GrowSmallBiz</title>
        <meta
          name="description"
          content="GrowSmallBiz builds conversion-focused websites for local service businesses — designed to turn visitors into calls, bookings, and leads. Schedule a free strategy call."
        />
        <link rel="canonical" href="https://growsmallbiz.io/services/website-design" />
      </Head>

      <ServiceJsonLd
        serviceName="Website Design for Local Service Businesses"
        serviceType="Website Design"
        description="Conversion-focused website design for local service businesses — built to turn visitors into calls, bookings, and leads."
        url="/services/website-design"
        breadcrumbs={[
          { name: "Services", url: "/services/managed-ai-seo" },
          { name: "Website Design", url: "/services/website-design" },
        ]}
      />

      {/* SECTION 1 — HERO */}
      <ServiceHero
        badge={{ icon: Globe, text: "WEBSITE THAT CONVERTS" }}
        title={<>Websites Built to Turn Visitors Into <span className="text-transparent bg-clip-text bg-gradient-primary">Calls, Bookings,</span> and <span className="text-transparent bg-clip-text bg-gradient-primary">Leads.</span></>}
        subtitle="Most local service business websites look the part. The problem is they were built to impress — not to convert.<br/><br/>GrowSmallBiz designs and builds websites engineered around a single outcome: turning visitors into calls, bookings, and quote requests.<br/><br/>And for our clients, the website is never the end of the conversation — it's the beginning."
        primaryCTA={{
          label: "Schedule Strategy Call",
          href: CTA_URL,
          external: true,
        }}
        secondaryCTA={{
          label: "Explore All Services",
          href: "/services/managed-ai-seo",
          variant: "heroOutline",
        }}
        backgroundImage={websiteDesignHeroBg}
        overlayOpacity={88}
      />

      {/* Hero extended body copy */}
      <section className="py-16 lg:py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Lead statement */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 animate-fade-up">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    When a potential customer lands on your site, you have roughly eight seconds before they decide whether to stay or leave. If your phone number isn't obvious, your services aren't immediately clear, and there's no compelling reason to reach out — they're gone. And they're calling someone else.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0 mt-1">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Your website is not a brochure. It's your highest-leverage sales asset. It works around the clock, and within seconds of someone arriving, it either builds confidence or quietly loses them.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0 mt-1">
                    <Wrench className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    At GrowSmallBiz, we build websites specifically for local service businesses — contractors, healthcare practices, med spas, professional services — where every lead represents real revenue. We start with strategy, not templates. Every layout decision, every line of copy, and every call to action is designed to move a visitor toward contacting you.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0 mt-1">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    But a high-converting website doesn't operate in isolation. It's the conversion foundation of a broader digital growth system — the hub that makes your SEO investment produce actual leads, your paid traffic convert instead of bounce, and your referrals close faster. That's the conversation we start on our free growth strategy call.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="THE PROBLEM"
            title="Most Local Business Websites Were Built to Exist —"
            titleHighlight="Not to Convert"
            description="There's a difference between a website that looks good and a website that works. Most local businesses have the first kind."
          />

          <div className="max-w-5xl mx-auto animate-fade-up">
            {/* Two-column narrative */}
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 mb-12">
              <div className="lg:col-span-3 space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Here's how most local business websites get built: a developer creates something visually clean, the owner approves it, and it goes live. Nobody asks whether the page structure guides visitors toward a decision. Nobody asks whether trust is being established quickly enough — or whether a prospect on a mobile phone at 9pm can find a phone number in under three seconds.
                </p>
                <p>
                  The result is a site that sits there — looking fine, doing nothing.
                </p>
                <p>
                  This is not a minor issue. Every visitor who lands on your site and leaves without contacting you is a missed opportunity. And when you're running Google Ads, investing in SEO, or counting on referrals to drive traffic, a website that doesn't convert is quietly draining every dollar you spend on marketing.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-6 lg:p-8 h-full">
                  <p className="font-semibold text-foreground mb-4 text-lg">Here's what a non-converting website typically looks like:</p>
                  <ul className="space-y-3">
                    {problemBullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Closing callout */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 lg:p-8 text-center">
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                A website that doesn't convert isn't a neutral investment. It's an active liability — costing you leads, bookings, and revenue every day it stays the way it is. And it's undermining every other marketing channel you're running at the same time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE BUILD */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="WHAT WE BUILD"
            title="We Don't Build Websites. We Build the Conversion Foundation Your Entire Growth Strategy"
            titleHighlight="Runs On."
            description="Every site we deliver is purpose-built around one question: what do you need a visitor to do — and what does it take to make that easy? The answer to that question shapes your website. And your website shapes everything else."
          />

          <div className="max-w-5xl mx-auto animate-fade-up">
            {/* Staggered two-column narrative */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              <GlowCard className="p-8" glowOnHover liftOnHover={false}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <Search className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Strategy First</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Before we touch a design or write a line of copy, we do strategy. We look at your business, your market, your ideal customer, and the specific action you need your website to drive — whether that's a phone call, a form submission, a booking, or a quote request. Every decision after that is made in service of that outcome.
                </p>
              </GlowCard>

              <GlowCard className="p-8" glowOnHover liftOnHover={false}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <MousePointerClick className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Built for Real People</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  That means your website isn't built around what looks attractive to a designer. It's built around what moves a real person — someone who found you on Google or clicked your ad — to trust you quickly, understand your value clearly, and take the next step without friction.
                </p>
              </GlowCard>

              <GlowCard className="p-8" glowOnHover liftOnHover={false}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Clarity at Every Level</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  In practice, that looks like this: your homepage communicates exactly what you do and who you serve within seconds of arrival. Your services are described in terms of outcomes, not just tasks. Your credibility is established through proof — real reviews, verifiable credentials, and specifics that matter to a buyer in your market. Your calls to action are clear, well-placed, and written to reduce hesitation. And your site performs just as well on a phone as it does on a desktop.
                </p>
              </GlowCard>

              <GlowCard className="p-8" glowOnHover liftOnHover={false}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <Link2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Connected From Day One</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Your website is also built from day one to integrate with the rest of your marketing — connecting to your CRM, booking system, and tracking tools. It's the conversion hub of the Digital Dominance Method, designed to work alongside your SEO, paid advertising, and lead generation efforts — not as a standalone project handed off and forgotten.
                </p>
              </GlowCard>
            </div>

            {/* Callout boxes */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="rounded-2xl border-2 border-primary/30 bg-card/50 backdrop-blur-sm p-8 animate-fade-up">
                <h3 className="text-xl font-bold text-foreground mb-4">A note on how we work:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  GrowSmallBiz builds websites as part of a broader digital growth engagement. We don't take on design-only or website-only projects. The reason is straightforward: a high-converting website, built in isolation from your SEO strategy, your paid traffic, and your lead generation infrastructure, is a foundation with nothing built on top of it. Our clients get the website and the growth system it's designed to support. If you're looking for that kind of partnership — not just a new site — the strategy call is the right place to start.
                </p>
              </div>

              <div className="rounded-2xl border-2 border-primary/30 bg-card/50 backdrop-blur-sm p-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-xl font-bold text-foreground mb-4">Why GrowSmallBiz:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Most web design agencies hand you a finished site and move on. GrowSmallBiz works exclusively with local service businesses — which means we're not learning your industry on your dime. We know what makes a roofing lead different from a med spa inquiry. We know what trust signals matter to a patient choosing a specialist versus a homeowner vetting a contractor. That specificity is what separates a website that looks right from one that actually performs — and it's built into every engagement we take on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT'S INCLUDED */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="WHAT'S INCLUDED"
            title="What's Built Into Every Website"
            titleHighlight="We Deliver"
            description={`These aren't add-ons or upgrade tiers. Every site we build includes the full conversion architecture — because a website missing any of these elements has a hole in it. And because every site we deliver is designed to function as the foundation of a larger growth system, the bar for what \u201Ccomplete\u201D means is set accordingly.`}
          />

          <div className="grid md:grid-cols-2 gap-8">
            {includedFeatures.map((feature, index) => (
              <GlowCard key={index} className="p-8 animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-up">
            <Button variant="hero" size="lg" asChild>
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
                Schedule Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY THIS MATTERS */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="WHY THIS MATTERS"
            title="Every Marketing Dollar You Spend Eventually Lands on"
            titleHighlight="Your Website"
            description="Google Ads, SEO, referrals, social media — however a prospect finds you, what happens when they arrive on your website determines whether they become a customer."
          />

          <div className="max-w-5xl mx-auto animate-fade-up">
            {/* Opening narrative — two-column */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Think through the path a new customer takes before they contact you. Maybe they searched for a service in your area and found you on Google. Maybe a neighbor mentioned your name. Maybe they clicked your ad. In almost every case, the next thing they do is visit your website. That visit is the moment. And it's almost entirely within your control.
                </p>
                <p>
                  If your site communicates clearly — here's who we are, here's what we do, here's why we're the right choice, here's how to reach us — a meaningful percentage of those visitors will contact you. If it doesn't, they'll hesitate. And hesitation almost always ends the same way: a closed tab and a competitor's number getting dialed instead.
                </p>
              </div>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  This is why your website isn't just one marketing asset among many — it's the conversion layer that your entire growth strategy runs through. Every channel feeds it. Every dollar you spend on visibility, traffic, and reach either pays off or gets wasted based on what happens when a prospect arrives.
                </p>
                <p>
                  A strong website makes your Google Ads more profitable — because the traffic you're paying for actually converts. It makes your SEO investment produce real leads instead of just rankings. It makes your referrals close faster, because the prospect arrives informed and leaves ready to book. It gives your social media a destination worth sending people to.
                </p>
              </div>
            </div>

            {/* Contrast callouts */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 lg:p-8">
                <p className="text-muted-foreground leading-relaxed">
                  A weak website does the opposite to all of it. It doesn't just underperform on its own — it degrades every other marketing investment you're making at the same time.
                </p>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 lg:p-8">
                <p className="text-muted-foreground leading-relaxed">
                  This is why, at GrowSmallBiz, the website is always the first piece of the conversation — and why we build it as the foundation of a full growth system, not as a standalone deliverable. When the hub is strong, everything connected to it performs better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — HOW IT WORKS */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="HOW IT WORKS"
            title="From Strategy to Launch: What the Process"
            titleHighlight="Looks Like"
            description="Every project follows the same four-phase process — because the order matters. Strategy before design. Structure before aesthetics. Launch into a connected system, not into a vacuum."
          />

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2" />

            <div className="space-y-16">
              {processSteps.map((step, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className="relative animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Dot on the center line */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary z-10" />

                    {/* Horizontal connector from dot to card */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-px bg-primary/30 ${isLeft ? 'right-[calc(50%+0.375rem)] w-[calc(2rem-0.375rem)]' : 'left-[calc(50%+0.375rem)] w-[calc(2rem-0.375rem)]'}`} />

                    <div className={`md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <div className="bg-card/50 border border-border rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(255,127,80,0.15)] transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold text-primary-foreground">{index + 1}</span>
                          </div>
                          <span className="text-sm font-semibold text-primary">{step.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                        <p className="text-sm font-medium text-primary/80 italic">{step.deliverable}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-up">
            <Button variant="hero" size="lg" asChild>
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
                Schedule Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">View Industries We Serve</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 7 — AFTER LAUNCH */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="AFTER LAUNCH"
            title="What Changes After Your New Website"
            titleHighlight="Goes Live"
            description="A high-converting website doesn't just perform better in isolation. It raises the performance ceiling on every other part of your marketing."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {afterLaunchItems.map((item, index) => (
              <GlowCard key={index} className="p-8 animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — WHO THIS IS FOR */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="WHO THIS IS FOR"
            title="Built for Local Service Businesses Where Every Lead"
            titleHighlight="Matters"
            description="We work exclusively with local service businesses — which means every framework we apply, every trust signal we build in, and every conversion decision we make is based on what actually moves customers in your category. Not generic best practices. Specific, earned knowledge of what works in your market."
          />

          <div className="space-y-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-card/50 border border-border rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(255,127,80,0.15)] hover:border-primary/30 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{industry.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — FAQ */}
      <FAQSection
        title="Common Questions About Our Website Strategy"
        subtitle="These are the questions most business owners ask once they realize the issue is not just design — it is how the website fits into the broader growth system."
        faqs={faqs}
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have questions about website strategy?",
          description: "We're here to help. Let's talk about how a conversion-focused website fits into your growth plan.",
          tagline: "The conversation starts here.",
        }}
      />

      {/* SECTION 10 — FINAL CTA */}
      <section className="py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <p className="text-primary font-medium mb-4">READY TO TALK STRATEGY?</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
              If Your Website Isn't Generating Leads, That's a Solvable Problem — and It's Usually Just the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Beginning.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Many local businesses have been sitting on underperforming websites for years — not because there's no solution, but because no one showed them what a strategically built site looks like, what it can do, or how it fits into a growth strategy that actually compounds over time.
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6">
                <p className="text-xl font-semibold text-foreground">That's what the free growth strategy call is for.</p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  In 30 minutes, we'll look at your current website, identify the specific gaps that are costing you leads, and walk you through what a conversion-focused rebuild would look like for your business. We'll also look at the bigger picture: how your website connects to your SEO, your paid traffic, and your lead generation system — and where the highest-leverage opportunities are in your specific market.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  This isn't a website consultation. It's a growth strategy conversation. The website is almost always where it starts — because without a strong conversion foundation, nothing else performs the way it should. But the call covers the full picture: website, AI SEO, paid search, conversion strategy, and what a complete digital growth system looks like for a business like yours.
                </p>
                <p className="text-lg font-medium text-foreground border-l-4 border-primary pl-4">
                  No pitch deck. No pressure. No obligation. Just clarity on where you are, where you could be, and what it would take to get there.
                </p>
              </div>
            </div>
          </div>

          <CardCTA
            title="Let's Build Your Growth Engine"
            description="If you want clearer strategy, stronger visibility, and better follow-up without patching together disconnected tools, start with a free strategy call."
            buttonText="Schedule Strategy Call"
            buttonHref={CTA_URL}
            sectionClassName="pt-12 pb-0"
          />

          <div className="text-center mt-12 text-sm text-muted-foreground space-y-1 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <p>GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide</p>
            <p>The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI.</p>
          </div>
        </div>
      </section>

      <ConsultationFormSection />
      <Footer />
    </div>
  );
};

export default WebsiteDesign;
