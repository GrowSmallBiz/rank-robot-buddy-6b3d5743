import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GoogleColoredText } from "@/components/GoogleColoredText";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Search,
  ChevronDown,
  MousePointerClick,
} from "lucide-react";
import { PdfViewer } from "@/components/PdfViewerWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState, useEffect, useRef } from "react";
import { useUtm } from "@/hooks/use-utm";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA, PersonCTA } from "@/components/services";
import { FAQSection } from "@/components/sections/FAQSection";
import { createContactCTA } from "@/config/contactCTA";
import heroBg from "@/assets/case-studies-roofers-hero-bg.jpg";

/* ─── Summary Proof Cards ─── */
const seoSummaryCards = [
  {
    title: "Roofing Restoration Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+26% Organic Conversions",
      "+76% GBP Searches",
      "+127% GBP Views",
      "90+ Spot Keyword Gains",
    ],
  },
  {
    title: "Roofing SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+16.45% New Organic Users",
      "+15.38% Users from Organic Search",
      "+200% GBP Messages",
      "+34 Flat Roofing Gain",
    ],
  },
  {
    title: "Roofing Content SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      'Roof Replacements Reached #1',
      "Atlanta Roofing +46",
      "Roof Repair Services +41",
      "Roof Installation +34",
    ],
  },
];

const ppcSummaryCards = [
  {
    title: "Roofing Google PPC Growth",
    subtitle: "Google Ads Campaign",
    metrics: [
      "+93.3% Conversions",
      "+123.4% Conversion Rate",
      "-48.9% Cost / Conversion",
      "+17.7% Clicks",
    ],
    supportLine: "Improved conversion efficiency and stronger year-over-year paid search performance",
  },
  {
    title: "Multi-City Roofing Google PPC Growth",
    subtitle: "Google Ads Campaign",
    metrics: [
      "+62.2% Conversions",
      "+45.7% Conversion Rate",
      "-36.1% CPA",
      "+11.4% Clicks",
    ],
    supportLine: "Improved lead volume and cost efficiency across multiple roofing markets",
  },
];

/* ─── Typography helpers ─── */
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-foreground/85 leading-relaxed">{children}</p>
);

const SubHead = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-lg font-display font-semibold text-foreground mt-8 mb-3">
    {children}
  </h4>
);

const DetailLabel = ({ children }: { children: React.ReactNode }) => (
  <h5 className="text-sm font-semibold text-primary uppercase tracking-wider mt-6 mb-2">
    {children}
  </h5>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 ml-1">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2 text-foreground/85 text-sm leading-relaxed">
        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

/* ─── PDF Viewer Block ─── */
const PdfBlock = ({ src, title }: { src: string; title?: string }) => (
  <div className="mt-10">
    <h4 className="text-lg font-display font-semibold text-foreground mb-4">
      {title || "View Full Case Study Report"}
    </h4>
    <PdfViewer src={src} />
  </div>
);

/* ═══════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════ */

const Roofers = () => {
  const [activeTab, setActiveTab] = useState("roofing-florida");
  const [activePpcTab, setActivePpcTab] = useState("ppc-roofing-1");
  const [activeSection, setActiveSection] = useState("local-seo");
  const navRef = useRef<HTMLDivElement>(null);
  const { strategySessionUrl, freeAuditUrl } = useUtm();

  useEffect(() => {
    const handleScroll = () => {
      const seoSection = document.getElementById("local-seo");
      const ppcSection = document.getElementById("google-ppc");
      if (seoSection && ppcSection) {
        const ppcTop = ppcSection.getBoundingClientRect().top;
        setActiveSection(ppcTop <= 120 ? "google-ppc" : "local-seo");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = navRef.current?.offsetHeight || 56;
      const y = el.getBoundingClientRect().top + window.scrollY - offset - 16;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Real Results for Roofing Contractors — Not Projections | GrowSmallBiz</title>
        <meta
          name="description"
          content="Explore documented case study results for roofing businesses across Local SEO and PPC campaigns. Real proof from Google Business Profile visibility, organic search growth, keyword movement, paid search performance, calls, conversions, and conversion-focused lead generation strategy."
        />
        <link rel="canonical" href="https://growsmallbiz.io/home-service-contractors/marketing-for-roofers/roofing-seo-case-study/" />
      </Head>
      <PageJsonLd
        pageType="WebPage"
        name="Real Results for Roofing Contractors — Not Projections"
        description="Explore documented case study results for roofing businesses across Local SEO and PPC campaigns."
        url="/home-service-contractors/marketing-for-roofers/roofing-seo-case-study/"
        breadcrumbs={[
          { name: "Case Studies", url: "/home-service-contractors/" },
          { name: "Roofers", url: "/home-service-contractors/marketing-for-roofers/roofing-seo-case-study/" },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* ═══ SECTION 1: HERO ═══ */}
        <ServiceHero
          badge={{ icon: Search, text: "Case Studies / Local SEO + PPC" }}
          title="Real Results for Roofing Contractors — Not Projections"
          subtitle="Explore documented case study results for roofing businesses across Local SEO and PPC campaigns. This page showcases real proof drawn from Google Business Profile visibility, organic search growth, keyword movement, paid search performance, calls, conversions, and conversion-focused lead generation strategy."
          primaryCTA={{ label: "Schedule Strategy Call", href: strategySessionUrl }}
          secondaryCTA={{ label: "Request a Website & SEO Audit", href: freeAuditUrl }}
          backgroundImage={heroBg}
          overlayOpacity={85}
        />

        {/* ═══ STICKY JUMP NAV ═══ */}
        <div
          ref={navRef}
          className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 py-3">
              <button
                onClick={() => scrollTo("local-seo")}
                className={`px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${
                  activeSection === "local-seo"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"
                }`}
              >
                <Search className="inline-block w-4 h-4 mr-2 -mt-0.5" />
                Local SEO Results
              </button>
              <button
                onClick={() => scrollTo("google-ppc")}
                className={`px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${
                  activeSection === "google-ppc"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"
                }`}
              >
                <MousePointerClick className="inline-block w-4 h-4 mr-2 -mt-0.5" />
                <GoogleColoredText /> PPC Results
              </button>
            </div>
          </div>
        </div>

        {/* ═══ LOCAL SEO SECTION ═══ */}
        <div id="local-seo">

        {/* ═══ LOCAL SEO SECTION HEADING ═══ */}
        <section className="pt-20 pb-4 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <Search className="w-4 h-4" />
                Local SEO Case Studies
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Local SEO <span className="text-transparent bg-clip-text bg-gradient-primary">Case Studies</span>
              </h2>
              <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                This section highlights local SEO campaign performance for roofing businesses, with a focus on Google Business Profile visibility, map rankings, organic search growth, keyword movement, calls, and conversion-focused lead generation.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 2: SUMMARY PROOF CARDS ═══ */}
        <section className="py-16 relative">
          <div className="absolute inset-0 section-glow" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {seoSummaryCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col"
                >
                  <div className="bg-gradient-primary p-5">
                    <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">
                      Campaign Results
                    </span>
                    <h3 className="text-lg font-display font-bold text-primary-foreground mt-2 mb-1">
                      {card.title}
                    </h3>
                    <p className="text-xs text-primary-foreground/70">{card.subtitle}</p>
                  </div>
                  <div className="p-5 flex-1">
                    <div className="space-y-3">
                      {card.metrics.map((metric, mIndex) => (
                        <div key={mIndex} className="flex items-start gap-2">
                          <TrendingUp className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/85">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Down Prompt */}
            <div className="flex flex-col items-center mt-12 animate-bounce">
              <p className="text-sm font-semibold mb-2 text-primary">Scroll Down to Read Full Case Studies</p>
              <ChevronDown className="w-5 h-5 text-primary" />
            </div>
          </div>
        </section>

        {/* ═══ SECTION 3: METHODOLOGY ═══ */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                Consistent Local SEO <span className="text-transparent bg-clip-text bg-gradient-primary">Methodology</span> Across Roofing Campaigns
              </h2>
              <P>
                Across these campaigns, the work consistently included on-page optimization, localized content creation, service page expansion, homepage optimization, local visibility improvements, and keyword growth efforts designed to improve rankings, engagement, and lead generation for high-intent roofing searches.
              </P>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 4: TABBED CASE STUDIES ═══ */}
        <section className="py-16 relative" style={{ backgroundColor: 'hsl(210 30% 12%)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="w-full h-auto flex-wrap bg-card/80 backdrop-blur-sm border border-border rounded-xl p-2 mb-10">
                  <TabsTrigger
                    value="roofing-florida"
                    className="flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                  >
                    Roofing Restoration — Florida
                  </TabsTrigger>
                  <TabsTrigger
                    value="roofing-bellevue"
                    className="flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                  >
                    Roofing SEO Growth — Greater Seattle
                  </TabsTrigger>
                  <TabsTrigger
                    value="roofing-atlanta"
                    className="flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                  >
                    Roofing Content SEO — Atlanta
                  </TabsTrigger>
                </TabsList>

                {/* ── TAB 1: Roofing Restoration — Florida ── */}
                <TabsContent value="roofing-florida">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                      Roofing Restoration — Florida
                    </h3>
                    <div className="space-y-6">
                      <DetailLabel>Goals</DetailLabel>
                      <BulletList
                        items={[
                          "Increase organic traffic and leads",
                          "Improve visibility across service areas",
                          "Generate more profitable commercial roofing opportunities",
                        ]}
                      />

                      <DetailLabel>Action Plan</DetailLabel>
                      <BulletList
                        items={[
                          "Optimize on-page elements",
                          "Create optimized localized content",
                          "Strengthen local presence in target service areas",
                          "Improve visibility for high-intent roofing and restoration searches",
                        ]}
                      />

                      <SubHead>Performance Highlights</SubHead>
                      <P>
                        This roofing, renovation, and hail restoration company came in with the goal of increasing organic traffic and lead flow. Over a 6 month period, the campaign improved organic conversions by 26% while also producing significant gains in Google Business Profile visibility.
                      </P>
                      <BulletList
                        items={[
                          "Organic conversions increased by 26% over 6 months",
                          "Google Business Profile searches increased by 76%",
                          "Google Business Profile views increased by 127%",
                          "Many conversions were tied to larger commercial roofing projects, which aligned with the client's growth goals",
                        ]}
                      />

                      <SubHead>Keyword Highlights</SubHead>
                      <P>
                        The campaign also produced strong keyword movement, including major jumps for high-intent roofing and restoration searches.
                      </P>
                      <BulletList
                        items={[
                          "High-volume roofing keywords moved up by 90+ positions",
                          '"roofing installation" showed major ranking gains',
                          '"roof tarping" showed major ranking gains',
                          '"hail damage roof" showed major ranking gains',
                          '"siding installation" also improved significantly',
                        ]}
                      />

                      <PdfBlock src="/case-studies/ai-seo-roofing-restoration-case-study.pdf" />
                      <div className="mt-8 flex justify-center">
                        <Button variant="heroOutline" size="xl" asChild className="rounded-full px-10">
                          <a href={freeAuditUrl} target="_blank" rel="noopener noreferrer">
                            Request a Website &amp; SEO Audit
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* ── TAB 2: Roofing SEO Growth — Greater Seattle ── */}
                <TabsContent value="roofing-bellevue">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                      Roofing SEO Growth — Greater Seattle
                    </h3>
                    <div className="space-y-6">
                      <DetailLabel>Goals</DetailLabel>
                      <BulletList
                        items={[
                          "Improve search visibility through organic methods",
                          "Increase qualified organic traffic and engagement",
                          "Improve Google Business Profile activity and local keyword movement",
                        ]}
                      />

                      <DetailLabel>Action Plan</DetailLabel>
                      <BulletList
                        items={[
                          "Improve organic visibility across roofing service terms",
                          "Support Google Business Profile performance",
                          "Track keyword movement across multiple target locations",
                          "Improve performance for both commercial and residential roofing terms",
                        ]}
                      />

                      <SubHead>Google Analytics</SubHead>
                      <P>
                        The client started the SEO campaign in August 2023. Comparing August–November 2023 against April–July 2023, the campaign showed positive movement in both user acquisition and traffic acquisition from organic search.
                      </P>
                      <BulletList
                        items={[
                          "New users from organic search increased by 16.45%",
                          "Engaged sessions from organic search increased by 6.54%",
                          "Users from organic search increased by 15.38%",
                          "Sessions increased by 7.44%",
                          "Engaged sessions increased by 9.57%",
                          "Events increased by 11.06%",
                        ]}
                      />

                      <SubHead>Google Search Console</SubHead>
                      <P>
                        Search Console data also showed gradual improvement in visibility and ranking position.
                      </P>
                      <BulletList
                        items={[
                          "Clicks improved by 2.73%",
                          "Average position improved from 48.3 to 44.2",
                        ]}
                      />

                      <SubHead>Google Business Profile</SubHead>
                      <P>
                        The Google Business Profile showed mixed but useful signals, including stronger direction requests and a sharp rise in messages.
                      </P>
                      <BulletList
                        items={[
                          "Direction requests increased by 5.4%",
                          "Messages increased by 200%",
                          "Calls decreased by 1.1%, showing that local conversion performance still had room to improve",
                        ]}
                      />

                      <SubHead>Keyword Highlights</SubHead>
                      <P>
                        Tracked keyword improvements were recorded across Bellevue, Kent, and Seattle.
                      </P>
                      <BulletList
                        items={[
                          'Bellevue: "flat roofing" increased by 30 positions',
                          'Bellevue: "commercial roofing" increased by 26 positions',
                          'Kent: "flat roofing" increased by 34 positions',
                          'Kent: "commercial roofing" increased by 12 positions',
                          'Seattle: "commercial roofing" increased by 26 positions',
                          'Seattle: "commercial roofing contractor" increased by 21 positions',
                          'Seattle: "roofing company" increased by 16 positions',
                          'Seattle: "residential roofing company" increased by 6 positions',
                        ]}
                      />

                      <PdfBlock src="/case-studies/ai-seo-roofing-case-study-3.pdf" />
                      <div className="mt-8 flex justify-center">
                        <Button variant="heroOutline" size="xl" asChild className="rounded-full px-10">
                          <a href={freeAuditUrl} target="_blank" rel="noopener noreferrer">
                            Request a Website &amp; SEO Audit
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* ── TAB 3: Roofing Content SEO — Atlanta ── */}
                <TabsContent value="roofing-atlanta">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                      Roofing Content SEO — Atlanta
                    </h3>
                    <div className="space-y-6">
                      <DetailLabel>Goals</DetailLabel>
                      <BulletList
                        items={[
                          "Increase traffic through content and service page expansion",
                          "Improve homepage search performance",
                          "Generate new keyword rankings for high-intent roofing terms",
                        ]}
                      />

                      <DetailLabel>Action Plan</DetailLabel>
                      <BulletList
                        items={[
                          "Develop content on the website",
                          "Build out service pages",
                          "Optimize the homepage for search visibility",
                          "Strengthen topic relevance around roofing, repair, and replacement queries",
                        ]}
                      />

                      <SubHead>Results</SubHead>
                      <P>
                        This campaign focused on content development and service page expansion for a roofing company centered on professional roofing, roof replacement, inspection, and design. The work contributed to stronger traffic trends and new keyword rankings.
                      </P>

                      <SubHead>Keyword Highlights</SubHead>
                      <BulletList
                        items={[
                          '"roof replacements" reached rank #1',
                          '"atlanta roofing" improved by 46 positions',
                          '"roof repair services" improved by 41 positions',
                          '"roof repair services near me" improved by 38 positions',
                          '"roof installation" improved by 34 positions',
                          '"roofing companies in atlanta" improved by 25 positions',
                        ]}
                      />

                      <PdfBlock src="/case-studies/ai-seo-roofing-case-study-2.pdf" />
                      <div className="mt-8 flex justify-center">
                        <Button variant="heroOutline" size="xl" asChild className="rounded-full px-10">
                          <a href={freeAuditUrl} target="_blank" rel="noopener noreferrer">
                            Request a Website &amp; SEO Audit
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        </div>{/* end #local-seo */}

        {/* ═══ GOOGLE PPC SECTION ═══ */}
        <div id="google-ppc">
          {/* ═══ PPC SECTION HEADING ═══ */}
          <section className="pt-20 pb-4 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                  <MousePointerClick className="w-4 h-4" />
                  <GoogleColoredText /> PPC Case Studies
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  <GoogleColoredText /> PPC <span className="text-transparent bg-clip-text bg-gradient-primary">Case Studies</span>
                </h2>
                <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                  This section highlights paid search campaign performance for roofing businesses, with a focus on lead generation, conversion efficiency, and cost-effective growth through Google Ads.
                </p>
              </div>
            </div>
          </section>

          {/* ═══ PPC SUMMARY PROOF CARDS ═══ */}
          <section className="py-16 relative">
            <div className="absolute inset-0 section-glow" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {ppcSummaryCards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col"
                  >
                    <div className="bg-gradient-primary p-5">
                      <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">
                        Campaign Results
                      </span>
                      <h3 className="text-lg font-display font-bold text-primary-foreground mt-2 mb-1">
                        {card.title.includes("Google") ? (
                          <>{card.title.split("Google")[0]}<GoogleColoredText /> {card.title.split("Google")[1].trimStart()}</>
                        ) : card.title}
                      </h3>
                      <p className="text-xs text-primary-foreground/70">{card.subtitle}</p>
                    </div>
                    <div className="p-5 flex-1">
                      <div className="space-y-3">
                        {card.metrics.map((metric, mIndex) => (
                          <div key={mIndex} className="flex items-start gap-2">
                            <TrendingUp className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground/85">{metric}</span>
                          </div>
                        ))}
                      </div>
                      {card.supportLine && (
                        <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border">
                          {card.supportLine}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Down Prompt */}
              <div className="flex flex-col items-center mt-12 animate-bounce">
                <p className="text-sm font-semibold mb-2 text-primary">Scroll Down to Read Full Case Studies</p>
                <ChevronDown className="w-5 h-5 text-primary" />
              </div>
            </div>
          </section>

          {/* ═══ PPC TABBED CASE STUDIES ═══ */}
          <section className="py-16 relative" style={{ backgroundColor: 'hsl(210 30% 12%)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Tabs value={activePpcTab} onValueChange={setActivePpcTab} className="w-full">
                  <TabsList className="w-full h-auto flex-wrap bg-card/80 backdrop-blur-sm border border-border rounded-xl p-2 mb-10">
                    <TabsTrigger
                      value="ppc-roofing-1"
                      className="flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                    >
                      Roofing <GoogleColoredText /> PPC — Efficiency Gains
                    </TabsTrigger>
                    <TabsTrigger
                      value="ppc-roofing-2"
                      className="flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                    >
                      Multi-City Roofing <GoogleColoredText /> PPC — Florida
                    </TabsTrigger>
                  </TabsList>

                  {/* ── PPC TAB 1 ── */}
                  <TabsContent value="ppc-roofing-1">
                    <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                        Roofing <GoogleColoredText /> PPC Case Study — Monthly + Year-over-Year Efficiency Gains
                      </h3>
                      <div className="space-y-6">
                        <DetailLabel>Synopsis</DetailLabel>
                        <P>
                          This Google Ads case study focused on improving conversion efficiency for a roofing campaign. The reporting compared September 2023 against August 2023, while also reviewing June–September 2023 against the same period in the previous year.
                        </P>

                        <DetailLabel>Challenges</DetailLabel>
                        <BulletList
                          items={[
                            "Increase conversions without increasing wasted spend",
                            "Improve conversion rate",
                            "Reduce cost per conversion",
                            "Show stronger year-over-year paid search performance",
                          ]}
                        />

                        <DetailLabel>Objective</DetailLabel>
                        <P>
                          Improve lead generation efficiency from Google Ads while creating measurable gains in conversion volume and conversion rate.
                        </P>

                        <DetailLabel>Campaign Strategy</DetailLabel>
                        <BulletList
                          items={[
                            "Manage and optimize Google Ads campaign performance",
                            "Review month-over-month trend data",
                            "Review year-over-year trend data",
                            "Focus optimization on conversion efficiency",
                          ]}
                        />

                        <DetailLabel>Results</DetailLabel>
                        <BulletList
                          items={[
                            "September vs August 2023: total cost decreased by 1.3%",
                            "September vs August 2023: total conversions increased by 93.3%",
                            "September vs August 2023: cost per conversion decreased by 48.9%",
                            "September vs August 2023: conversion rate increased by 123.4%",
                            "June–September 2023 vs same period last year: clicks increased by 17.7%",
                            "June–September 2023 vs same period last year: conversions increased by 61.7%",
                            "June–September 2023 vs same period last year: conversion rate increased by 37.3%",
                            "June–September 2023 vs same period last year: cost per conversion decreased by 1.5%",
                          ]}
                        />

                        <DetailLabel>Conclusion</DetailLabel>
                        <P>
                          This case study shows how disciplined Google Ads optimization can improve roofing lead generation efficiency, not just volume. The strongest takeaway here is the improvement in conversion rate and cost per conversion while maintaining meaningful paid search activity.
                        </P>

                        <PdfBlock src="/case-studies/ppc-roofing-case-study-2.pdf" title="View Full PPC Case Study Report" />
                        <div className="mt-8 flex justify-center">
                          <Button variant="heroOutline" size="xl" asChild className="rounded-full px-10">
                            <a href={freeAuditUrl} target="_blank" rel="noopener noreferrer">
                              Request a Website &amp; SEO Audit
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* ── PPC TAB 2 ── */}
                  <TabsContent value="ppc-roofing-2">
                    <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                        Multi-City Roofing <GoogleColoredText /> PPC Case Study — Florida Markets
                      </h3>
                      <div className="space-y-6">
                        <DetailLabel>Synopsis</DetailLabel>
                        <P>
                          This roofing Google Ads campaign launched multiple campaign types and market-specific structures to generate leads across several Florida service areas. The account included search campaigns, a smart campaign, and a performance max campaign.
                        </P>

                        <DetailLabel>Challenges</DetailLabel>
                        <BulletList
                          items={[
                            "Generate leads across multiple service areas",
                            "Improve conversion efficiency across different campaign structures",
                            "Lower CPA while increasing conversions",
                            "Maintain performance across both search and broader campaign formats",
                          ]}
                        />

                        <DetailLabel>Objective</DetailLabel>
                        <P>
                          Drive more roofing leads at stronger conversion rates and lower acquisition cost across multiple targeted markets.
                        </P>

                        <DetailLabel>Campaign Strategy</DetailLabel>
                        <BulletList
                          items={[
                            "Launch four search campaigns",
                            "Run one smart campaign",
                            "Run one performance max campaign",
                            "Use geo-targeted structures including West Palm Beach, Martin / St Lucie, and Lakeland",
                            "Optimize campaign efficiency over time using comparative monthly reporting",
                          ]}
                        />

                        <DetailLabel>Results</DetailLabel>
                        <BulletList
                          items={[
                            "June 2024 vs May 2024: clicks increased by 11.4%",
                            "June 2024 vs May 2024: conversions increased by 62.2%",
                            "June 2024 vs May 2024: conversion rate increased by 45.7%",
                            "June 2024 vs May 2024: CPA reduced by 36.1%",
                            "May 2024 vs previous month: clicks increased by 12.5%",
                            "May 2024 vs previous month: conversions increased by 36.1%",
                            "May 2024 vs previous month: conversion rate increased by 21.0%",
                            "May 2024 vs previous month: CPA reduced by 17.7%",
                            "All-time performance included 152 conversions in West Palm Beach and 258 conversions in Martin / St Lucie",
                            "Campaign overview showed 2.77K clicks, 445 conversions, $92.76 cost per conversion, and a 16.04% conversion rate",
                          ]}
                        />

                        <DetailLabel>Conclusion</DetailLabel>
                        <P>
                          This multi-market roofing PPC campaign demonstrates how a structured Google Ads setup can improve conversion volume and efficiency over time. The reporting also shows the value of location-specific campaign organization when a roofing business is trying to scale lead generation across multiple cities.
                        </P>

                        <PdfBlock src="/case-studies/ppc-roofing-case-study.pdf" title="View Full PPC Case Study Report" />
                        <div className="mt-8 flex justify-center">
                          <Button variant="heroOutline" size="xl" asChild className="rounded-full px-10">
                            <a href={freeAuditUrl} target="_blank" rel="noopener noreferrer">
                              Request a Website &amp; SEO Audit
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>
        </div>{/* end #google-ppc */}

        {/* ═══ FAQ SECTION ═══ */}
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about how GrowSmallBiz approaches Local SEO and PPC strategy for roofing businesses."
          faqs={[
            { question: "Can GrowSmallBiz create a similar strategy for my roofing business?", answer: "Yes. Every business starts from a different baseline, market, service area, level of competition, and budget, so no two campaigns are identical. But the same strategic thinking behind these case studies can be adapted to your business. GrowSmallBiz builds tailored Local SEO and paid ads strategies around your goals, your market, and the specific opportunities available in your service area.\n\nWe conduct a complimentary audit to determine what could be realistically possible, cost and ROI before we undertake any assignment." },
            { question: "Can Local SEO really help roofing businesses get more calls and estimate requests?", answer: "Yes. Roofing is a high-intent search category. When your company appears more often in Google Business Profile results, localized organic search results, and service-area searches, you improve the chance of earning calls, form submissions, and estimate requests from people already looking for roofing help." },
            { question: "Can PPC help roofing businesses generate leads faster?", answer: "Yes. Google Ads can put a roofing company in front of prospects quickly, especially for urgent searches tied to roof repair, roof replacement, storm damage, leaks, and commercial roofing needs. PPC often works best when paired with strong landing pages and conversion tracking." },
            { question: "How long does it take to see results from Local SEO or PPC?", answer: "PPC can begin generating data and leads quickly once campaigns go live, while Local SEO typically builds over time. The exact timeline depends on market competition, starting visibility, budget, website quality, service-area coverage, and conversion readiness." },
            { question: "What is included in your Local SEO strategy for roofers?", answer: "The strategy may include Google Business Profile optimization, local visibility improvements, onsite optimization, localized content, service page expansion, citation support, keyword tracking, and conversion-focused recommendations tied to how roofing buyers actually search." },
            { question: "How much do SEO and PPC services cost?", answer: "SEO and PPC pricing can vary widely, but the lowest-cost option is rarely the one that produces the best business outcome. The real investment depends on your market, competition, service area, goals, and how much strategy, execution, tracking, and optimization are required to generate profitable growth.\n\nSome providers sell isolated tactics or generic packages. GrowSmallBiz takes a more complete approach by looking at the full picture — visibility, lead quality, conversion path, tracking, and return on investment. That means pricing is based on what your business actually needs to compete and grow, not on a one-size-fits-all template.\n\nWe begin with a complimentary audit to determine what could be realistically possible, the likely cost, and the ROI potential before we recommend any assignment." },
            { question: "Do you offer a performance guarantee?", answer: "Yes. If GrowSmallBiz does not deliver the agreed-upon performance within the agreed-upon time frame, we will continue working for free until we do. No questions asked." },
            { question: "Can you review my current marketing performance?", answer: "Yes. GrowSmallBiz can review your current Local SEO visibility, Google Ads performance, website conversion path, and competitive positioning to identify where lead generation is being lost and where the biggest opportunities exist." },
          ]}
          contactCTA={createContactCTA({
            title: "Need Better Lead Flow from Search?",
            description: "If your roofing business depends on calls, form fills, estimate requests, and high-intent search traffic, GrowSmallBiz can help identify where Local SEO or PPC improvements can drive better results.",
            tagline: "Get clarity on your visibility, traffic quality, and conversion performance.",
          })}
        />

        {/* ═══ CONCLUSION SECTION ═══ */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                What These <span className="text-transparent bg-clip-text bg-gradient-primary">Case Studies</span> Show
              </h2>
              <div className="space-y-6 text-foreground/85 leading-relaxed text-lg">
                <p>
                  Across roofing campaigns, one pattern remains consistent — businesses that invest in structured local visibility and high-intent search strategy tend to see measurable improvements in calls, engagement, rankings, and lead flow over time.
                </p>
                <p>
                  These case studies reflect different markets, service mixes, and competitive environments, but the underlying pattern is the same: stronger visibility, better keyword positioning, and more efficient lead generation can compound into meaningful business growth.
                </p>
                <p>
                  Whether through Local SEO, PPC, or a combination of both, the goal is not just visibility — it is connecting that visibility to real business outcomes.
                </p>
              </div>

              <p className="mt-8 text-muted-foreground text-sm leading-relaxed">
                If you want to understand how these approaches could apply to your roofing business, the next step is a focused review of your current visibility, competition, and conversion path.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ PERSON CTA ═══ */}
        <PersonCTA
          title="Let's Build Your Growth Engine"
          description="If you want clearer strategy, stronger visibility, and better follow-up without patching together disconnected tools, start with a free strategy call."
          buttonText="Schedule Strategy Call"
          buttonHref={strategySessionUrl}
        />

        <div className="text-center py-8 text-sm text-muted-foreground space-y-1 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <p>GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide</p>
          <p>The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI.</p>
        </div>

        {/* ═══ CONSULTATION FORM ═══ */}
        <ConsultationFormSection />
      </main>
      <Footer />
    </>
  );
};

export default Roofers;
