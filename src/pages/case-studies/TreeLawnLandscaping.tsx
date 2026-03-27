import { Head } from "vite-react-ssg";
import { GoogleColoredText } from "@/components/GoogleColoredText";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
import heroBg from "@/assets/case-studies-hvac-hero-bg.jpg";

/* ─── Summary Proof Cards ─── */
const summaryCards = [
  {
    title: "Landscape Design-Build Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+45.41% Organic Traffic Users",
      "+46.13% New Users",
      "+45.57% Sessions",
      "Top landscape keywords moved from beyond page one to top positions",
    ],
  },
  {
    title: "Landscaping Local SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+43.14% Impressions",
      "#1 landscape installation ashland ky",
      "#1 landscaping service russel",
      "Strong local rankings despite GBP verification roadblocks",
    ],
  },
  {
    title: "Tree & Lawn SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+25.77% Clicks",
      "+138.54% Impressions",
      "1.1 Average Map Rank",
      "+770% Phone Number Clicks",
    ],
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
const PdfBlock = ({ src }: { src: string }) => (
  <div className="mt-10">
    <h4 className="text-lg font-display font-semibold text-foreground mb-4">
      View Full Case Study Report
    </h4>
    <PdfViewer src={src} />
  </div>
);

/* ═══════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════ */

const TreeLawnLandscaping = () => {
  const [activeTab, setActiveTab] = useState("landscape-design-build");
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
        <title>Case Studies for Tree Care, Lawn Care & Landscaping Businesses | GrowSmallBiz</title>
        <meta
          name="description"
          content="Explore documented case study results for tree care, lawn care, and landscaping businesses across Local SEO and Google PPC campaigns. Real proof from Google Business Profile visibility, organic search growth, keyword movement, paid search performance, calls, conversions, and conversion-focused lead generation strategy."
        />
        <link rel="canonical" href="https://growsmallbiz.io/case-studies/tree-lawn-landscaping" />
      </Head>
      <PageJsonLd
        pageType="WebPage"
        name="Case Studies for Tree Care, Lawn Care & Landscaping Businesses"
        description="Explore documented case study results for tree care, lawn care, and landscaping businesses across Local SEO and Google PPC campaigns."
        url="/case-studies/tree-lawn-landscaping"
        breadcrumbs={[
          { name: "Case Studies", url: "/case-studies" },
          { name: "Tree Care, Lawn Care & Landscaping", url: "/case-studies/tree-lawn-landscaping" },
        ]}
      />
      <Header />
      <main>
        {/* ═══ SECTION 1: HERO ═══ */}
        <ServiceHero
          badge={{ icon: Search, text: "Case Studies / Local SEO + Google PPC" }}
          title="Case Studies for Tree Care, Lawn Care & Landscaping Businesses"
          subtitle="Explore documented case study results for tree care, lawn care, and landscaping businesses across Local SEO and Google PPC campaigns. This page showcases real proof drawn from Google Business Profile visibility, organic search growth, keyword movement, paid search performance, calls, conversions, and conversion-focused lead generation strategy."
          primaryCTA={{ label: "Book a Strategy Session", href: strategySessionUrl }}
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
                This section highlights local SEO campaign performance for tree care, lawn care, and landscaping businesses, with a focus on Google Business Profile visibility, map rankings, organic search growth, keyword movement, calls, and conversion-focused lead generation.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 2: SUMMARY PROOF CARDS ═══ */}
        <section className="py-16 relative">
          <div className="absolute inset-0 section-glow" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {summaryCards.map((card, index) => (
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
                Consistent Local SEO <span className="text-transparent bg-clip-text bg-gradient-primary">Methodology</span> Across Tree, Lawn & Landscaping Campaigns
              </h2>
              <P>
                Across these campaigns, the work consistently included internal linking improvements, advanced schema markup, Google Business Profile optimization, local and niche citation building, onsite location signal improvements, content support, and local visibility enhancements designed to improve rankings, engagement, and lead generation for high-intent service businesses.
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
                    value="landscape-design-build"
                    className="flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                  >
                    Landscape Design-Build — Residential
                  </TabsTrigger>
                  <TabsTrigger
                    value="landscaping-ashland"
                    className="flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                  >
                    Landscaping — Ashland, KY
                  </TabsTrigger>
                  <TabsTrigger
                    value="tree-lawn-chicagoland"
                    className="flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                  >
                    Tree & Lawn Care — Chicagoland
                  </TabsTrigger>
                </TabsList>

                {/* ── TAB 1: Landscape Design-Build — Residential ── */}
                <TabsContent value="landscape-design-build">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                      Landscape Design-Build — Residential
                    </h3>
                    <div className="space-y-6">
                      <DetailLabel>Client</DetailLabel>
                      <P>
                        This is a landscape design company specializing in residential backyard design-build projects.
                      </P>

                      <DetailLabel>Niche</DetailLabel>
                      <P>Design-Build Landscaping</P>

                      <DetailLabel>Goals</DetailLabel>
                      <BulletList
                        items={[
                          "Push forward rankings for the site's main pages",
                          "Capture more real estate in search results",
                          "Attract higher-quality traffic more likely to convert",
                        ]}
                      />

                      <DetailLabel>Action Plan</DetailLabel>
                      <BulletList
                        items={[
                          "Revised the internal linking strategy to strengthen primary service pages",
                          "Added advanced Schema Markup to increase SERP visibility",
                        ]}
                      />

                      <DetailLabel>Results</DetailLabel>
                      <P>
                        Our efforts greatly impacted the organic traffic year over year and helped contribute to new and better keyword rankings.
                      </P>

                      <SubHead>Organic Traffic Growth</SubHead>
                      <P>
                        As shown in the case study report, organic traffic users increased by 45.41%, new users from organic traffic increased by 46.13%, and sessions from organic traffic increased by 45.57%.
                      </P>

                      <SubHead>Keyword Movement</SubHead>
                      <P>
                        The report also shows major ranking gains, including landscape architecture moving from beyond rank 100 to rank 1, landscape construction from beyond rank 100 to rank 1, landscape maintenance from beyond rank 100 to rank 1, garden management from beyond rank 100 to rank 4, and landscape installation from beyond rank 100 to rank 6.
                      </P>

                      <PdfBlock src="/case-studies/ai-seo-landscaping-case-study-1.pdf" />
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

                {/* ── TAB 2: Landscaping — Ashland, KY ── */}
                <TabsContent value="landscaping-ashland">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                      Landscaping — Ashland, KY
                    </h3>
                    <div className="space-y-6">
                      <DetailLabel>Summary</DetailLabel>
                      <P>
                        Google Business Profile is an essential tool for optimizing local SEO and maximizing online presence. Even with Google Business Profile waiting to be verified and website/content approvals slowing progress, the campaign still produced meaningful improvements in visibility and keyword rankings.
                      </P>

                      <DetailLabel>Major Roadblocks</DetailLabel>
                      <BulletList
                        items={[
                          "Approval of blogs and other deliverables",
                          "Access issues and verification of Google Business Profile",
                        ]}
                      />

                      <DetailLabel>Goals</DetailLabel>
                      <BulletList
                        items={[
                          "Improve local visibility for landscaping and installation searches",
                          "Strengthen keyword rankings across desktop and mobile",
                          "Increase impressions and improve average search position",
                        ]}
                      />

                      <SubHead>Google Analytics - GA4 KPIs</SubHead>
                      <P>
                        From April to June 2023, the website recorded a total of 260 users and 256 new users.
                      </P>

                      <SubHead>Traffic Acquisition — April vs. May</SubHead>
                      <P>
                        For organic search, engagement time per session increased by 40.63%, events per session increased by 18.56%, and engagement rate increased by 25%.
                      </P>

                      <SubHead>Traffic Acquisition — May vs. June</SubHead>
                      <P>
                        For organic search, the number of users increased by 125%, sessions increased by 53.33%, and engaged sessions increased by 30%.
                      </P>

                      <SubHead>Google Search Console KPIs</SubHead>
                      <P>
                        We recorded 7 total clicks and 692 total impressions during the reporting period.
                      </P>

                      <SubHead>Impression Growth and Average Position</SubHead>
                      <P>
                        Impressions increased by 73.28% from April to May, then increased again by 43.14% from May to June. Average position improved from 43.9 in April to 39.2 in May, then to 34.4 in June.
                      </P>

                      <SubHead>Top Queries</SubHead>
                      <BulletList
                        items={[
                          "landscaping lawrence county",
                          "summit landscaping",
                          "summit landscapes",
                          "landscaping ashland ky",
                          "summit landscape",
                          "summit landscaping ashland ky",
                          "lawn maintenance ashland",
                          "landscaping in summit",
                          "summit lawn care",
                          "summit outdoor services",
                        ]}
                      />

                      <SubHead>Keyword Rankings</SubHead>
                      <BulletList
                        items={[
                          "landscape maintenance companies near me — organic desktop rank 3 and organic mobile rank 2",
                          "landscape installation ashland ky — organic desktop rank 1 and organic mobile rank 1",
                          "ashland landscaping — organic desktop rank 2 and organic mobile rank 2",
                          "landscaping service russel — organic desktop rank 1 and organic mobile rank 1",
                        ]}
                      />

                      <PdfBlock src="/case-studies/ai-seo-landscaping-case-study-2.pdf" />
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

                {/* ── TAB 3: Tree & Lawn Care — Chicagoland ── */}
                <TabsContent value="tree-lawn-chicagoland">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                      Tree & Lawn Care — Chicagoland
                    </h3>
                    <div className="space-y-6">
                      <DetailLabel>Goals</DetailLabel>
                      <BulletList
                        items={[
                          "Enhance Keyword Performance",
                          "Increase Engagement and Visibility",
                        ]}
                      />

                      <DetailLabel>Action Plan</DetailLabel>
                      <BulletList
                        items={[
                          "Extensive keyword research to find relevant keywords including competitive analysis",
                          "Optimize GMB profile from top to bottom",
                          "Built relevant niche and local citations",
                          "Optimized onsite for location signals",
                          "Post weekly on their GMB profile to increase additional signals",
                          "Evaluate the site's content silo for content strategy",
                          "Create and publish monthly blogs as supplementary content for target keywords",
                        ]}
                      />

                      <SubHead>Google Analytics — User Acquisition</SubHead>
                      <P>
                        New users from organic search increased by 2.95%, and engaged sessions from new users increased by 5.3%.
                      </P>

                      <SubHead>Traffic Acquisition</SubHead>
                      <P>
                        Users from organic search increased by 7.39%, and conversions increased by 7.14%.
                      </P>

                      <SubHead>Conversions (Website)</SubHead>
                      <P>
                        Contact form conversions increased by 16.67%, and phone number clicks increased by 770%.
                      </P>

                      <SubHead>Contact Form</SubHead>
                      <P>
                        Organic search contributed to 37.5% of contact form goals. Contact form conversion decreased by 3.45% during the comparison period, providing a clear area for continued optimization.
                      </P>

                      <SubHead>Phone Number Clicks</SubHead>
                      <P>
                        Organic search contributed to 6.7% of phone number click conversions, with 5 phone call clicks coming from organic search in October - November 2023.
                      </P>

                      <SubHead>Google Search Console</SubHead>
                      <P>
                        Total clicks increased by 25.77%, and total impressions increased by 138.54%.
                      </P>

                      <SubHead>Local Search Grid</SubHead>
                      <P>
                        Average map rank was 1.1.
                      </P>

                      <SubHead>Keyword Improvements</SubHead>
                      <BulletList
                        items={[
                          "tree care company increased 7 positions in organic desktop and 16 positions in organic mobile",
                          "arborist naperville area increased by 4 positions in organic desktop and 7 positions in organic mobile",
                          "tree service naperville increased by 2 positions in organic desktop and 5 positions in organic mobile",
                          "lawn and tree service increased by 15 positions in organic desktop and 4 positions in organic mobile",
                          "tree and lawn care services increased by 5 positions in organic desktop and 4 positions in organic mobile",
                          "lawn and tree care increased by 4 positions in organic desktop, 4 positions in organic mobile, and 3 positions in local finder",
                          "tree care la grange park increased by 2 positions in organic desktop, 4 positions in organic mobile, and 2 positions in local finder",
                          "tree service western springs il increased by 2 positions in organic desktop, 2 positions in organic mobile, and 3 positions in local finder",
                        ]}
                      />

                      <PdfBlock src="/case-studies/ai-seo-tree-lawn-care-case-study.pdf" />
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
                  This section highlights paid search campaign performance for tree care, lawn care, and landscaping businesses, with a focus on lead generation, conversion efficiency, and cost-effective growth through Google Ads.
                </p>
              </div>
            </div>
          </section>

          {/* ═══ PPC SUMMARY PROOF CARD ═══ */}
          <section className="py-16 relative">
            <div className="absolute inset-0 section-glow" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="flex justify-center max-w-5xl mx-auto">
                <div className="bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col">
                  <div className="bg-gradient-primary p-5">
                    <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">
                      Campaign Results
                    </span>
                    <h3 className="text-lg font-display font-bold text-primary-foreground mt-2 mb-1">
                      Tree & Lawn <GoogleColoredText /> PPC Growth
                    </h3>
                    <p className="text-xs text-primary-foreground/70">Google Ads Lead Generation Campaign</p>
                  </div>
                  <div className="p-5 flex-1">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Paid Ads Impact</h4>
                    <div className="space-y-3">
                      {[
                        "Clicks → +169.5%",
                        "Conversions → +211.5%",
                        "Conversion Rate → +16.7%",
                        "Last 90 Days → 299 Conversions",
                      ].map((metric, mIndex) => (
                        <div key={mIndex} className="flex items-start gap-2">
                          <TrendingUp className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/85">{metric}</span>
                        </div>
                      ))}
                    </div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-5 mb-3">Campaign Outcome</h4>
                    <div className="space-y-3">
                      {[
                        "Stronger campaign scale",
                        "Higher lead volume from search",
                        "217 call leads in the last 90 days",
                        "82 form leads in the last 90 days",
                      ].map((outcome, oIndex) => (
                        <div key={oIndex} className="flex items-start gap-2">
                          <TrendingUp className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/85">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll Down Prompt */}
              <div className="flex flex-col items-center mt-12 animate-bounce">
                <p className="text-sm font-semibold mb-2 text-primary">Scroll Down to Read Full Case Studies</p>
                <ChevronDown className="w-5 h-5 text-primary" />
              </div>
            </div>
          </section>

          {/* ═══ PPC CASE STUDY DETAIL ═══ */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                    Tree & Lawn <GoogleColoredText /> PPC Case Study
                  </h3>
                  <div className="space-y-6">
                    <DetailLabel>Synopsis</DetailLabel>
                    <P>
                      This Google Ads case study shows how a tree and lawn care business used Search and Performance Max campaigns to generate leads at scale while adjusting budget over time based on business requirements.
                    </P>

                    <DetailLabel>Challenges</DetailLabel>
                    <P>
                      The campaign needed to balance lead volume, cost efficiency, and budget changes over time while producing both form fills and call leads.
                    </P>

                    <DetailLabel>Objective</DetailLabel>
                    <P>
                      Increase qualified leads from Google Ads, improve conversion efficiency, and scale paid search performance as campaign data matured.
                    </P>

                    <DetailLabel>Campaign Strategy</DetailLabel>

                    <SubHead>Campaign Launch</SubHead>
                    <P>
                      We launched a Search campaign on September 1, 2023, followed by a Performance Max campaign on September 11, 2023.
                    </P>

                    <SubHead>Budget Management</SubHead>
                    <P>
                      The monthly budget started at $2500, was reduced to $500 by the end of November based on client requirements, was increased back to $2500 in March, and then increased to $5000 per month from April onward.
                    </P>

                    <SubHead>All-Time Performance</SubHead>
                    <BulletList
                      items={[
                        "Cost: $29,698.34",
                        "Clicks: 8,102",
                        "Conversions: 553",
                        "CPA: $53.70",
                        "Conversion rate: 6.83%",
                        "Submit Lead Form: 159",
                        "Call Leads: 394",
                      ]}
                    />

                    <DetailLabel>Results</DetailLabel>

                    <SubHead>Last 30 Days</SubHead>
                    <BulletList
                      items={[
                        "Cost: $4,993.52",
                        "Clicks: 579",
                        "Conversions: 111",
                        "CPA: $44.99",
                        "Conversion rate: 7.19%",
                        "Submit Lead Form: 38",
                        "Call Leads: 73",
                      ]}
                    />

                    <SubHead>Last 30 Days — Performance Gains</SubHead>
                    <BulletList
                      items={[
                        "Clicks increased by 7.8%",
                        "The number of conversions increased by 15.6%",
                        "The CPA decreased by 9.0%",
                      ]}
                    />

                    <SubHead>Last 90 Days</SubHead>
                    <BulletList
                      items={[
                        "Cost: $14,714.01",
                        "Clicks: 1,854",
                        "Conversions: 299",
                        "CPA: $49.21",
                        "Conversion rate: 7.21%",
                        "Submit Lead Form: 82",
                        "Call Leads: 217",
                      ]}
                    />

                    <SubHead>Last 90 Days — Performance Gains</SubHead>
                    <BulletList
                      items={[
                        "Clicks increased by 169.5%",
                        "The number of conversions increased by 211.5%",
                        "The conversion rates increased by 16.7%",
                      ]}
                    />

                    <DetailLabel>Conclusion</DetailLabel>
                    <P>
                      This case study shows how Google Ads can generate both call leads and form leads for tree and lawn care businesses while improving efficiency as campaign data accumulates and optimization continues.
                    </P>

                    <PdfBlock src="/case-studies/ppc-tree-lawn-case-study.pdf" />

                    {/* CTA under PDF viewer */}
                    <div className="mt-8 flex justify-center">
                      <Button variant="heroOutline" size="xl" asChild className="rounded-full px-10">
                        <a href={freeAuditUrl} target="_blank" rel="noopener noreferrer">
                          Request a Website &amp; SEO Audit
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>{/* end #google-ppc */}

        {/* ═══ FAQ SECTION ═══ */}
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about how GrowSmallBiz approaches Local SEO and Google PPC strategy for tree care, lawn care, and landscaping businesses."
          faqs={[
            { question: "Can GrowSmallBiz create a similar strategy for my business?", answer: "Yes. Every business starts from a different baseline, market, service area, level of competition, and budget, so no two campaigns are identical. But the same strategic thinking behind these case studies can be adapted to your business. GrowSmallBiz builds tailored Local SEO and paid ads strategies around your goals, your market, and the specific opportunities available in your service area." },
            { question: "Can Local SEO really help tree care, lawn care, and landscaping businesses get more calls?", answer: "Yes. Local SEO helps service businesses improve visibility in Google Business Profile results, local map results, and organic search when homeowners are actively searching for nearby providers. That visibility can translate into more calls, direction requests, website visits, and lead form submissions." },
            { question: "Can Google PPC help tree care and landscaping businesses generate leads faster?", answer: "Yes. Google PPC can generate leads faster because it places your business in front of high-intent searchers immediately. It is especially useful for seasonal demand, competitive markets, and service lines where you want quicker lead flow while SEO builds over time." },
            { question: "How long does it take to see results from Local SEO or Google PPC?", answer: "Google PPC can start producing data and leads much faster, although performance improves as campaigns gather enough data for optimization. Local SEO usually takes longer, but it builds stronger long-term visibility, map presence, and organic lead flow." },
            { question: "What is included in your Local SEO strategy?", answer: "Our Local SEO work can include Google Business Profile optimization, local and niche citations, onsite location signal improvements, internal linking, schema enhancements, content support, keyword tracking, and ongoing efforts to improve rankings, engagement, and lead generation." },
            { question: "Can you review my current marketing performance?", answer: "Yes. We can review your current visibility, traffic quality, conversion path, local rankings, and paid campaign performance to identify where stronger SEO, PPC, website improvements, or automation can create better results." },
          ]}
          contactCTA={createContactCTA({
            title: "Need Better Lead Flow from Search?",
            description: "If your tree care, lawn care, or landscaping business depends on calls, form fills, and high-intent search traffic, GrowSmallBiz can help identify where Local SEO or Google PPC improvements can drive better results.",
            tagline: "Get clarity on your visibility, traffic quality, and conversion performance.",
          })}
        />

        {/* ═══ DISCLOSURE ═══ */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-muted-foreground text-center italic">
                These campaigns were executed in a white-label fulfillment capacity prior to the launch of GrowSmallBiz.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ CONCLUSION SECTION ═══ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                What These <span className="text-transparent bg-clip-text bg-gradient-primary">Case Studies</span> Show
              </h2>
              <div className="space-y-6 text-foreground/85 leading-relaxed text-lg">
                <p>
                  Across tree care, lawn care, and landscaping campaigns, one pattern remains consistent — businesses that invest in structured local visibility and high-intent search strategy tend to see measurable improvements in calls, engagement, and lead flow over time.
                </p>
                <p>
                  These case studies reflect different starting points, markets, and levels of competition, but the underlying approach remains consistent: improving how a business appears, competes, and converts in search environments where customers are actively looking for services.
                </p>
                <p>
                  Whether through Local SEO, Google PPC, or a combination of both, the goal is not just visibility — it is connecting that visibility to real business outcomes.
                </p>
              </div>

              <p className="mt-8 text-muted-foreground text-sm leading-relaxed">
                If you want to understand how these approaches could apply to your business, the next step is a focused review of your current visibility, competition, and conversion path.
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

export default TreeLawnLandscaping;
