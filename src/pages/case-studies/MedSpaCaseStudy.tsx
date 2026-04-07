import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GoogleColoredText } from "@/components/GoogleColoredText";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { Button } from "@/components/ui/button";
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
import medSpaHero from "@/assets/case-study-medspa-hero.jpg";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { PersonCTA } from "@/components/services";
import { FAQSection } from "@/components/sections/FAQSection";
import { createContactCTA } from "@/config/contactCTA";
import { Link } from "react-router-dom";

/* ─── Typography helpers ─── */
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-foreground/85 leading-relaxed">{children}</p>
);
const SubHead = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-lg font-display font-semibold text-foreground mt-8 mb-3">{children}</h4>
);
const DetailLabel = ({ children }: { children: React.ReactNode }) => (
  <h5 className="text-sm font-semibold text-primary uppercase tracking-wider mt-6 mb-2">{children}</h5>
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
const PdfBlock = ({ src, title }: { src: string; title?: string }) => (
  <div className="mt-10">
    <h4 className="text-lg font-display font-semibold text-foreground mb-4">{title || "View Full Case Study Report"}</h4>
    <PdfViewer src={src} />
  </div>
);

/* ─── Summary Cards ─── */
const seoSummaryCards = [
  {
    title: "Med Spa AI SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: ["+252% Search Impressions (GSC)", "+78% Organic Users", "+66.76% Total Clicks (GSC)"],
  },
  {
    title: "Med Spa Local SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: ["+552.7% Users YOY", "+75.9% Phone Calls (GBP)", "#1 Rankings — Laser Skin Treatment"],
  },
];

const ppcSummaryCards = [
  {
    title: "Med Spa PPC Growth",
    subtitle: "Google Ads Campaign",
    metrics: ["$16.39 All-Time Cost Per Lead", "2,577 Total Conversions", "15.59% Conversion Rate"],
  },
  {
    title: "Recent Performance Gains",
    subtitle: "Google Ads Campaign (Last 30 Days)",
    metrics: ["+48.8% Conversions vs Prior Period", "-31.1% CPA vs Prior Period", "+68.3% Conversion Rate vs Prior Period"],
  },
];

const MedSpaCaseStudy = () => {
  const [activeTab, setActiveTab] = useState("medspa-socal");
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
        <title>Med Spa Marketing Case Studies | GrowSmallBiz Digital Marketing</title>
        <meta name="description" content="Documented AI SEO and Google Ads results for med spa clients — organic traffic growth, keyword rankings, Google Business Profile performance, cost-per-lead, and conversion metrics." />
        <link rel="canonical" href="https://growsmallbiz.io/health-and-wellness-practices/med-spa-marketing/case-study/" />
      </Head>
      <PageJsonLd
        pageType="WebPage"
        name="Med Spa Marketing Case Studies"
        description="Documented AI SEO and Google Ads results for med spa clients."
        url="/health-and-wellness-practices/med-spa-marketing/case-study/"
        breadcrumbs={[
          { name: "Health & Wellness", url: "/health-and-wellness-practices/" },
          { name: "Med Spa Marketing", url: "/health-and-wellness-practices/med-spa-marketing/" },
          { name: "Case Studies", url: "/health-and-wellness-practices/med-spa-marketing/case-study/" },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <ServiceHero
          badge={{ icon: Search, text: "Case Studies / Local SEO + PPC" }}
          title="Med Spa Marketing Case Studies"
          subtitle="Explore documented campaign results for med spa clients across AI SEO and Google Ads. This page showcases real proof drawn from Google Analytics, Google Search Console, Google Business Profile data, and Google Ads account performance."
          primaryCTA={{ label: "Schedule Strategy Call", href: strategySessionUrl }}
          secondaryCTA={{ label: "Request a Website & SEO Audit", href: freeAuditUrl }}
          backgroundImage={medSpaHero}
          overlayOpacity={85}
        />

        {/* STICKY NAV */}
        <div ref={navRef} className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 py-3">
              <button onClick={() => scrollTo("local-seo")} className={`px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${activeSection === "local-seo" ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"}`}>
                <Search className="inline-block w-4 h-4 mr-2 -mt-0.5" />Local SEO Results
              </button>
              <button onClick={() => scrollTo("google-ppc")} className={`px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${activeSection === "google-ppc" ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"}`}>
                <MousePointerClick className="inline-block w-4 h-4 mr-2 -mt-0.5" /><GoogleColoredText /> PPC Results
              </button>
            </div>
          </div>
        </div>

        {/* ═══ LOCAL SEO SECTION ═══ */}
        <div id="local-seo">
          <section className="pt-20 pb-4 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                  <Search className="w-4 h-4" />Local SEO Case Studies
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Local SEO <span className="text-transparent bg-clip-text bg-gradient-primary">Case Studies</span>
                </h2>
                <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                  This section highlights AI SEO campaign performance for med spa clients, with a focus on Google Business Profile visibility, organic search growth, keyword movement, and lead generation.
                </p>
              </div>
            </div>
          </section>

          {/* SEO SUMMARY CARDS */}
          <section className="py-16 relative">
            <div className="absolute inset-0 section-glow" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {seoSummaryCards.map((card, index) => (
                  <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col">
                    <div className="bg-gradient-primary p-5">
                      <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">Campaign Results</span>
                      <h3 className="text-lg font-display font-bold text-primary-foreground mt-2 mb-1">{card.title}</h3>
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
              <div className="flex flex-col items-center mt-12 animate-bounce">
                <p className="text-sm font-semibold mb-2 text-primary">Scroll Down to Read Full Case Studies</p>
                <ChevronDown className="w-5 h-5 text-primary" />
              </div>
            </div>
          </section>

          {/* METHODOLOGY */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Consistent Local SEO <span className="text-transparent bg-clip-text bg-gradient-primary">Methodology</span> Across Med Spa Campaigns
                </h2>
                <P>
                  Across these campaigns, the work consistently included Google Business Profile optimization, localized content creation, technical SEO improvements, on-page optimization, and citation building — designed to improve rankings, GBP visibility, and engagement for high-intent med spa searches.
                </P>
              </div>
            </div>
          </section>

          {/* SEO TABBED CASE STUDIES */}
          <section className="py-16 relative" style={{ backgroundColor: 'hsl(210 30% 12%)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="w-full h-auto flex-wrap bg-card/80 backdrop-blur-sm border border-border rounded-xl p-2 mb-10">
                    <TabsTrigger value="medspa-socal" className="flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg">
                      Med Spa AI SEO — Pleasanton, CA
                    </TabsTrigger>
                    <TabsTrigger value="medspa-sangabriel" className="flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg">
                      Med Spa Local SEO — San Gabriel, CA
                    </TabsTrigger>
                  </TabsList>

                  {/* TAB 1: Pleasanton, CA */}
                  <TabsContent value="medspa-socal">
                    <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                        Med Spa AI SEO — Pleasanton, CA
                      </h3>
                      <div className="space-y-6">
                        <DetailLabel>Goals</DetailLabel>
                        <BulletList items={[
                          "Enhance keyword performance",
                          "Increase engagement and visibility",
                          "20–40% increase in conversions and goal completions",
                        ]} />

                        <DetailLabel>Action Plan</DetailLabel>
                        <BulletList items={[
                          "Keyword identification and tracking setup",
                          "Page title, meta description, and H1 optimization across top 10 pages",
                          "Google Business Profile optimization and GMB posting",
                          "Monthly content creation and technical SEO audits",
                          "Citation building",
                        ]} />

                        <SubHead>Performance Highlights</SubHead>
                        <P>This med spa client in Pleasanton, CA experienced significant organic search growth over a 9-month AI SEO campaign (January 2023 – September 2023).</P>

                        <DetailLabel>Key Metrics</DetailLabel>
                        <BulletList items={[
                          "Organic users increased by 78.06%",
                          "Organic new users increased by 79.77%",
                          "Organic sessions increased by 63.21%",
                          "Total clicks (GSC) improved by 66.76%",
                          "Total impressions (GSC) improved by 252%",
                          "Average position improved from 31.8 to 25.5",
                          "GBP total views: 19,880 (12 months)",
                          "GBP interactions: 4,710 (3,200 website clicks | 924 directions | 583 calls)",
                          "GBP interactions YOY: +2.7%",
                          "Direction requests YOY: +11.7%",
                          "Website clicks YOY: +6.6%",
                        ]} />

                        <PdfBlock src="/case-studies/A-SEO-Med-Spa-Case-Study-Pleasanton-CA.pdf" />
                        <div className="mt-8 flex justify-center">
                          <Button variant="heroOutline" size="xl" asChild className="rounded-full px-10">
                            <a href={freeAuditUrl} target="_blank" rel="noopener noreferrer">Request a Website &amp; SEO Audit</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* TAB 2: San Gabriel */}
                  <TabsContent value="medspa-sangabriel">
                    <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                        Med Spa Local SEO — San Gabriel, CA
                      </h3>
                      <div className="space-y-6">
                        <DetailLabel>Goals</DetailLabel>
                        <BulletList items={[
                          "Increase local foot traffic to high-end med spa",
                          "Generate organic leads to the clinic",
                        ]} />

                        <DetailLabel>Action Plan</DetailLabel>
                        <BulletList items={[
                          "Local GBP work — posting, optimization, citations",
                          "Onsite content production",
                          "Technical SEO — product schema, foundational work",
                          "Conversion Rate Optimization",
                        ]} />

                        <SubHead>Performance Highlights</SubHead>
                        <P>This high-end med spa in San Gabriel, CA achieved exceptional year-over-year growth after 6–9 months of consistent AI SEO.</P>

                        <DetailLabel>Key Metrics</DetailLabel>
                        <BulletList items={[
                          "Users: 6,024 (+552.7% YOY)",
                          "Sessions: 6,924 (+584.2% YOY)",
                          "Phone calls (GBP): 190 (+75.9% YOY)",
                          "Website visits (GBP): 224 (+6.7% YOY)",
                          "Direction requests (GBP): 302 (+64.1% YOY)",
                        ]} />

                        <SubHead>Keyword Rankings (San Gabriel, CA)</SubHead>
                        <BulletList items={[
                          "skin laser for acne scars → #1 (started >100)",
                          "laser skin treatment → #1 (started >100, SV: 14,800)",
                          "skincare treatment for acne scars → #1 (started >100)",
                          "hair removal laser for men → #2 (started >100, SV: 9,900)",
                          "skin treatment → #3 (started >100, SV: 14,800)",
                          "skincare → #8 (started #28, SV: 1,000,000)",
                          "hair removal → #6 (started #10, SV: 90,500)",
                        ]} />

                        <PdfBlock src="/case-studies/AI-SEO-Med-Spa-Case-Study-San-Gabriel-CA.pdf" />
                        <div className="mt-8 flex justify-center">
                          <Button variant="heroOutline" size="xl" asChild className="rounded-full px-10">
                            <a href={freeAuditUrl} target="_blank" rel="noopener noreferrer">Request a Website &amp; SEO Audit</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>
        </div>

        {/* ═══ GOOGLE PPC SECTION ═══ */}
        <div id="google-ppc">
          <section className="pt-20 pb-4 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                  <MousePointerClick className="w-4 h-4" /><GoogleColoredText /> PPC Case Studies
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  <GoogleColoredText /> PPC <span className="text-transparent bg-clip-text bg-gradient-primary">Case Studies</span>
                </h2>
                <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                  This section highlights Google Ads campaign performance for a med spa client, with a focus on lead generation efficiency, conversion volume, and cost-per-lead optimization.
                </p>
              </div>
            </div>
          </section>

          {/* PPC SUMMARY CARDS */}
          <section className="py-16 relative">
            <div className="absolute inset-0 section-glow" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {ppcSummaryCards.map((card, index) => (
                  <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col">
                    <div className="bg-gradient-primary p-5">
                      <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">Campaign Results</span>
                      <h3 className="text-lg font-display font-bold text-primary-foreground mt-2 mb-1">{card.title}</h3>
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
              <div className="flex flex-col items-center mt-12 animate-bounce">
                <p className="text-sm font-semibold mb-2 text-primary">Scroll Down to Read Full Case Study</p>
                <ChevronDown className="w-5 h-5 text-primary" />
              </div>
            </div>
          </section>

          {/* PPC TABBED CASE STUDY */}
          <section className="py-16 relative" style={{ backgroundColor: 'hsl(210 30% 12%)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                    Med Spa <GoogleColoredText /> Ads — San Ramon, CA
                  </h3>
                  <div className="space-y-6">
                    <DetailLabel>Goals</DetailLabel>
                    <BulletList items={[
                      "Generate inbound call leads at lowest possible cost",
                      "Increase conversion volume and conversion rate",
                      "Optimize ad spend efficiency across multiple service lines",
                    ]} />

                    <DetailLabel>Campaign Strategy</DetailLabel>
                    <BulletList items={[
                      "4 campaigns running: 3 Search + 1 Display",
                      "Services: general med spa + hormone/thyroid/weight loss + injectables",
                      "Daily budgets: $5–$27 per campaign",
                      "All conversions tracked as inbound call leads",
                    ]} />

                    <SubHead>All-Time Performance</SubHead>
                    <BulletList items={[
                      "Total spend: $42,224.51",
                      "Total clicks: 16,526",
                      "Total conversions: 2,577 (all call leads)",
                      "CPA: $16.39",
                      "Conversion rate: 15.59%",
                    ]} />

                    <SubHead>Last 30 Days</SubHead>
                    <BulletList items={[
                      "Spend: $2,015.35",
                      "Conversions: 119 (+48.8%)",
                      "CPA: $16.94 (-31.1%)",
                      "CVR: 17.95% (+68.3%)",
                    ]} />

                    <PdfBlock src="/case-studies/PPC_Med_Spa_-_Case_Study-San_Ramon-CA.pdf" title="View Full PPC Case Study Report" />
                    <div className="mt-8 flex justify-center">
                      <Button variant="heroOutline" size="xl" asChild className="rounded-full px-10">
                        <a href={freeAuditUrl} target="_blank" rel="noopener noreferrer">Request a Website &amp; SEO Audit</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ */}
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about med spa marketing case studies and strategy."
          faqs={[
            { question: "Can GrowSmallBiz create a similar strategy for my med spa?", answer: "Yes. Every med spa starts from a different baseline, market, and competitive environment. The same strategic approach behind these case studies can be adapted to your practice. We conduct a complimentary audit to determine what could be realistically possible, cost and ROI before we undertake any assignment." },
            { question: "How long does it take to see results from AI SEO?", answer: "Most med spa clients see measurable improvement in Google Business Profile visibility within 60 to 90 days. Significant organic traffic growth typically develops over 4 to 6 months." },
            { question: "How much do SEO and PPC services cost?", answer: "Pricing depends on your market, competition, service area, goals, and how much strategy, execution, tracking, and optimization are required to generate profitable growth. We begin with a complimentary audit to determine what could be realistically possible, the likely cost, and the ROI potential before we recommend any assignment." },
            { question: "Do you offer a performance guarantee?", answer: "Yes. If GrowSmallBiz does not deliver the agreed-upon performance within the agreed-upon time frame, we will continue working for free until we do. No questions asked." },
          ]}
          contactCTA={createContactCTA({
            title: "Need Better Lead Flow for Your Med Spa?",
            description: "GrowSmallBiz can help identify where AI SEO or Google Ads improvements can drive more consultations and treatment bookings.",
            tagline: "Get clarity on your visibility, traffic quality, and conversion performance.",
          })}
        />

        {/* CONCLUSION */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                What These <span className="text-transparent bg-clip-text bg-gradient-primary">Case Studies</span> Show
              </h2>
              <div className="space-y-6 text-foreground/85 leading-relaxed text-lg">
                <p>Across med spa campaigns, the pattern is consistent — practices that invest in structured local visibility and high-intent search strategy see measurable improvements in consultations, calls, and treatment bookings over time.</p>
                <p>Whether through AI SEO, Google Ads, or a combination of both, the goal is connecting visibility to real business outcomes — filled treatment rooms and predictable revenue.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PERSON CTA */}
        <PersonCTA
          title="Ready to Fill Your Treatment Rooms?"
          description="Schedule a strategy call to see how AI SEO, Google Ads, and GBP management can grow your med spa patient base."
          buttonText="Schedule Strategy Call"
          buttonHref={strategySessionUrl}
        />

        <div className="text-center py-8 text-sm text-muted-foreground space-y-1 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <p>GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide</p>
          <p>The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI.</p>
        </div>

        <ConsultationFormSection />
      </main>
      <Footer />
    </>
  );
};

export default MedSpaCaseStudy;
