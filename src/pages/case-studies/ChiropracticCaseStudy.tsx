import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Search,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { PdfViewer } from "@/components/PdfViewerWrapper";
import { useState, useEffect, useRef } from "react";
import { useUtm } from "@/hooks/use-utm";
import { ServiceHero } from "@/components/services/ServiceHero";
import chiroHero from "@/assets/case-study-chiro-hero.jpg";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { PersonCTA } from "@/components/services";
import { FAQSection } from "@/components/sections/FAQSection";
import { createContactCTA } from "@/config/contactCTA";

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
  { metric: "+138.8%", label: "Users — Organic Search (GA4)" },
  { metric: "+32.99%", label: "Total Clicks (Google Search Console)" },
  { metric: "#1", label: "Emergency Chiropractic Care (Desktop + Mobile)" },
];

const gbpSummaryCards = [
  { metric: "1,694", label: "Total GBP Interactions (Mar–Jun 2023)" },
  { metric: "+1.1%", label: "Profile Interactions YOY" },
  { metric: "+33.4%", label: "GBP Website Visits YOY" },
];

const ChiropracticCaseStudy = () => {
  const [activeSection, setActiveSection] = useState("ai-seo");
  const navRef = useRef<HTMLDivElement>(null);
  const { strategySessionUrl, freeAuditUrl } = useUtm();

  useEffect(() => {
    const handleScroll = () => {
      const seoSection = document.getElementById("ai-seo");
      const gbpSection = document.getElementById("gbp-results");
      if (seoSection && gbpSection) {
        const gbpTop = gbpSection.getBoundingClientRect().top;
        setActiveSection(gbpTop <= 120 ? "gbp-results" : "ai-seo");
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
        <title>Real Results for Chiropractic Practices — Not Projections | GrowSmallBiz Digital Marketing</title>
        <meta name="description" content="Documented AI SEO results for a chiropractic practice — organic traffic growth, keyword rankings, Google Search Console data, and Google Business Profile performance over 5 months." />
        <link rel="canonical" href="https://growsmallbiz.io/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-seo-case-study/" />
      </Head>
      <ArticleJsonLd
        headline="Real Results for Chiropractic Practices — Not Projections"
        description="Documented AI SEO results for a chiropractic practice."
        url="/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-seo-case-study/"
        datePublished="2025-01-15"
        breadcrumbs={[
          { name: "Health & Wellness", url: "/health-and-wellness-practices/" },
          { name: "Chiropractic Marketing", url: "/health-and-wellness-practices/marketing-for-chiropractors/" },
          { name: "Case Study", url: "/health-and-wellness-practices/marketing-for-chiropractors/chiropractic-seo-case-study/" },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <ServiceHero
          badge={{ icon: Search, text: "Case Studies / Local SEO + GBP" }}
          title="Real Results for Chiropractic Practices — Not Projections"
          subtitle="Explore documented AI SEO results for a chiropractic practice across Google Analytics, Google Search Console, and Google Business Profile. 5-month campaign with verified data across all three measurement sources."
          primaryCTA={{ label: "Schedule Strategy Call", href: strategySessionUrl }}
          secondaryCTA={{ label: "Request a Website & SEO Audit", href: freeAuditUrl }}
          backgroundImage={chiroHero}
          overlayOpacity={85}
        />

        {/* STICKY NAV */}
        <div ref={navRef} className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 py-3">
              <button onClick={() => scrollTo("ai-seo")} className={`px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${activeSection === "ai-seo" ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"}`}>
                <Search className="inline-block w-4 h-4 mr-2 -mt-0.5" />AI SEO + GSC Results
              </button>
              <button onClick={() => scrollTo("gbp-results")} className={`px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-300 ${activeSection === "gbp-results" ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"}`}>
                <MapPin className="inline-block w-4 h-4 mr-2 -mt-0.5" />Google Business Profile Results
              </button>
            </div>
          </div>
        </div>

        {/* ═══ AI SEO + GSC SECTION ═══ */}
        <div id="ai-seo">
          <section className="pt-20 pb-4 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                  <Search className="w-4 h-4" />Local SEO Case Studies
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  AI SEO + Search Console <span className="text-transparent bg-clip-text bg-gradient-primary">Case Studies</span>
                </h2>
                <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                  This section highlights organic search campaign performance for a chiropractic practice, combining Google Analytics traffic data and Google Search Console click and impression metrics from a 5-month AI SEO campaign.
                </p>
              </div>
            </div>
          </section>

          {/* SEO SUMMARY CARDS */}
          <section className="py-16 relative">
            <div className="absolute inset-0 section-glow" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {seoSummaryCards.map((card, index) => (
                  <div key={index} className="text-center p-6 bg-card border border-border rounded-2xl card-hover">
                    <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{card.metric}</div>
                    <p className="text-foreground font-medium">{card.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center mt-12 animate-bounce">
                <p className="text-sm font-semibold mb-2 text-primary">Scroll Down to Read Full Case Study</p>
                <ChevronDown className="w-5 h-5 text-primary" />
              </div>
            </div>
          </section>

          {/* CAMPAIGN DETAILS */}
          <section className="py-16 relative" style={{ backgroundColor: 'hsl(210 30% 12%)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                    Chiropractic AI SEO — Tracy, CA
                  </h3>
                  <div className="space-y-6">
                    <DetailLabel>Campaign Summary</DetailLabel>
                    <P>Month 1 onboarding: keyword identification and tracking, page title/meta/H1 optimization, Google Business Profile setup, and technical SEO foundation. Months 2–5: ongoing content creation, citation building, GBP posting, and performance monitoring.</P>

                    <DetailLabel>Goals</DetailLabel>
                    <BulletList items={[
                      "Increase organic search visibility and traffic",
                      "Improve Google Search Console click and impression performance",
                      "Achieve top rankings for high-intent chiropractic searches",
                    ]} />

                    <SubHead>Google Analytics Results (5-Month Campaign)</SubHead>
                    <BulletList items={[
                      "Users from organic search: +138.8%",
                      "New users from organic search: +136.7%",
                      "Sessions from organic search: +120.5%",
                    ]} />

                    <SubHead>Google Search Console Results</SubHead>
                    <BulletList items={[
                      "Total clicks: +32.99%",
                      "Total impressions: +18.2%",
                      "Average CTR improvement noted",
                    ]} />

                    <SubHead>Keyword Rankings</SubHead>
                    <BulletList items={[
                      '"emergency chiropractic care" → #1 (Desktop + Mobile)',
                      '"chiropractor near me" — significant improvement',
                      '"back pain chiropractor" — first page achieved',
                    ]} />

                    <PdfBlock src="/case-studies/AI-SEO-Chiropractic-Case-Study-Tracy-CA.pdf" />
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

        {/* ═══ GBP SECTION ═══ */}
        <div id="gbp-results">
          <section className="pt-20 pb-4 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                  <MapPin className="w-4 h-4" />Google Business Profile Results
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Google Business Profile <span className="text-transparent bg-clip-text bg-gradient-primary">Performance</span>
                </h2>
                <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                  GBP performance data from March 2023 – June 2023, compared against March 2022 – June 2022.
                </p>
              </div>
            </div>
          </section>

          {/* GBP SUMMARY CARDS */}
          <section className="py-16 relative">
            <div className="absolute inset-0 section-glow" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {gbpSummaryCards.map((card, index) => (
                  <div key={index} className="text-center p-6 bg-card border border-border rounded-2xl card-hover">
                    <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{card.metric}</div>
                    <p className="text-foreground font-medium">{card.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* GBP DETAILS */}
          <section className="py-16 relative" style={{ backgroundColor: 'hsl(210 30% 12%)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                    GBP Metrics (March–June 2023 vs March–June 2022)
                  </h3>
                  <div className="space-y-6">
                    <BulletList items={[
                      "Business profile interactions: 1,694 total (+1.1% YOY)",
                      "GBP website visits: 399 clicks (+33.4% YOY)",
                      "Calls from Business Profile: 905 (-1.8% YOY)",
                    ]} />

                    <div className="p-4 bg-muted/30 border border-border rounded-xl mt-6">
                      <P>
                        <strong>Note about GBP calls:</strong> The calls metric showed a slight decrease (-1.8% YOY) during this period. The team was actively improving GBP posts, optimizing the listing, and building citations to improve this metric.
                      </P>
                    </div>

                    <PdfBlock src="/case-studies/AI-SEO-Chiropractic-Case-Study-Tracy-CA.pdf" title="View Full Case Study Report" />
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
          subtitle="Answers to common questions about chiropractic marketing case studies and strategy."
          faqs={[
            { question: "Can GrowSmallBiz create a similar strategy for my chiropractic practice?", answer: "Yes. Every practice starts from a different baseline. The same strategic approach behind this case study can be adapted to your chiropractic business. We conduct a complimentary audit to determine what could be realistically possible, cost and ROI before we undertake any assignment." },
            { question: "How long does it take to see results from AI SEO?", answer: "Most chiropractic clients see measurable improvement in Google Business Profile visibility within 60 to 90 days. Significant organic traffic growth typically develops over 4 to 6 months." },
            { question: "Do you offer a performance guarantee?", answer: "Yes. If GrowSmallBiz does not deliver the agreed-upon performance within the agreed-upon time frame, we will continue working for free until we do. No questions asked." },
          ]}
          contactCTA={createContactCTA({
            title: "Need Better Lead Flow for Your Chiropractic Practice?",
            description: "GrowSmallBiz can help identify where AI SEO and GBP improvements can drive more patient bookings.",
            tagline: "Get clarity on your visibility, traffic quality, and conversion performance.",
          })}
        />

        {/* CONCLUSION */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                Ready to Build Your <span className="text-transparent bg-clip-text bg-gradient-primary">Chiropractic Practice</span>?
              </h2>
              <div className="space-y-6 text-foreground/85 leading-relaxed text-lg">
                <p>Schedule a strategy call to see how AI SEO, Google Ads, and GBP management can grow your chiropractic patient base.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PERSON CTA */}
        <PersonCTA
          title="Let's Build Your Growth Engine"
          description="If you want clearer strategy, stronger visibility, and more patient bookings, start with a free strategy call."
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

export default ChiropracticCaseStudy;
