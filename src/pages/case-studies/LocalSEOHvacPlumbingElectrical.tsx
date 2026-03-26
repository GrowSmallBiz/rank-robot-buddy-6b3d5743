import { Head } from "vite-react-ssg";
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
import { ServiceHero } from "@/components/services/ServiceHero";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services";
import heroBg from "@/assets/case-studies-hvac-hero-bg.jpg";

/* ─── Summary Proof Cards ─── */
const summaryCards = [
  {
    title: "HVAC Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+30.23% Clicks",
      "+91.47% Impressions",
      "+58.7% GBP Direction Requests",
      "Strong local finder keyword gains",
    ],
  },
  {
    title: "HVAC & Plumbing Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+1395.2% Phone Calls",
      "+520% GMB Website Actions",
      "Significant improvement for top service keywords",
      "Core plumbing + location map pack rankings",
    ],
  },
  {
    title: "Electrical SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+485.11% New Organic Users",
      "+447.06% Users from Organic Search",
      "+252.69% Sessions from Organic Search",
      "+725% Key Events",
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

/* ─── Micro CTA Row ─── */
const MicroCTA = () => (
  <div className="mt-10 flex flex-wrap items-center gap-4">
    <Button variant="hero" size="lg" asChild>
      <Link to="/contact">
        Book a Strategy Session
        <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </Button>
    <Link
      to="/contact"
      className="text-sm text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
    >
      Request a Website & SEO Audit
    </Link>
  </div>
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

const LocalSEOHvacPlumbingElectrical = () => {
  const [activeTab, setActiveTab] = useState("hvac-sacramento");
  const [activeSection, setActiveSection] = useState("local-seo");
  const navRef = useRef<HTMLDivElement>(null);

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
        <title>Case Studies for HVAC, Plumbing & Electrical Businesses | GrowSmallBiz</title>
        <meta
          name="description"
          content="Explore documented case study results for HVAC, plumbing, and electrical businesses across Local SEO and PPC campaigns. Real proof from Google Business Profile visibility, organic search growth, keyword movement, paid search performance, calls, conversions, and conversion-focused lead generation strategy."
        />
        <link rel="canonical" href="https://growsmallbiz.io/case-studies/hvac-plumbing-electrical" />
      </Head>
      <PageJsonLd
        pageType="WebPage"
        name="Case Studies for HVAC, Plumbing & Electrical Businesses"
        description="Explore documented case study results for HVAC, plumbing, and electrical businesses across Local SEO and PPC campaigns."
        url="/case-studies/hvac-plumbing-electrical"
        breadcrumbs={[
          { name: "Case Studies", url: "/case-studies" },
          { name: "HVAC, Plumbing & Electrical", url: "/case-studies/hvac-plumbing-electrical" },
        ]}
      />
      <Header />
      <main>
        {/* ═══ SECTION 1: HERO ═══ */}
        <ServiceHero
          badge={{ icon: Search, text: "Case Studies / Local SEO + PPC" }}
          title="Case Studies for HVAC, Plumbing & Electrical Businesses"
          subtitle="Explore documented case study results for HVAC, plumbing, and electrical businesses across Local SEO and PPC campaigns. This page showcases real proof drawn from Google Business Profile visibility, organic search growth, keyword movement, paid search performance, calls, conversions, and conversion-focused lead generation strategy."
          primaryCTA={{ label: "Book a Strategy Session", href: "/contact" }}
          secondaryCTA={{ label: "Request a Website & SEO Audit", href: "/contact" }}
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
                Google PPC Results
              </button>
            </div>
          </div>
        </div>

        {/* ═══ LOCAL SEO SECTION ═══ */}
        <div id="local-seo">

        {/* ═══ SECTION 2: SUMMARY PROOF CARDS ═══ */}
        <section className="py-20 relative">
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
            <div className="flex flex-col items-center mt-12 text-muted-foreground animate-bounce">
              <p className="text-sm font-medium mb-2">Scroll Down to Read Full Case Studies</p>
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </section>

        {/* ═══ SECTION 3: METHODOLOGY ═══ */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                Consistent Local SEO Methodology Across Trades Campaigns
              </h2>
              <P>
                Across these campaigns, the work consistently included extensive keyword research, Google Business Profile optimization, local and niche citation building, onsite location signal improvements, content support, and local visibility enhancements designed to improve rankings, engagement, and lead generation for high-intent service businesses.
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
                    value="hvac-sacramento"
                    className="flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                  >
                    HVAC — Sacramento
                  </TabsTrigger>
                  <TabsTrigger
                    value="hvac-plumbing-fairbanks"
                    className="flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                  >
                    HVAC & Plumbing — Fairbanks
                  </TabsTrigger>
                  <TabsTrigger
                    value="electrical-oahu"
                    className="flex-1 min-w-[180px] py-3 text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                  >
                    Electrical — Oahu
                  </TabsTrigger>
                </TabsList>

                {/* ── TAB 1: HVAC — Sacramento ── */}
                <TabsContent value="hvac-sacramento">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                      HVAC — Sacramento
                    </h3>
                    <div className="space-y-6">
                      <DetailLabel>Goals</DetailLabel>
                      <BulletList
                        items={[
                          "Enhance Keyword Performance",
                          "Increase Engagement and Visibility",
                          "20-40% Lead Generation (combo of both GBP calls + onsite conversions (forms/calls depending on the tracking setup)",
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

                      <P>
                        We have used Ahrefs, a trusted third-party tool, to check a website's organic traffic performance. As seen, we have seen an increase in average organic traffic, average organic traffic value, and organic pages in April - July. In August, we saw a decline. This decline can be attributed to the recent August 2023 Core Update. To recover, we encourage updating pages with helpful content to improve the user experience on the website.
                      </P>

                      <SubHead>Google Search Console</SubHead>
                      <P>
                        Here is the website's Google Sarch Console metrics. In June - November 2023, total clicks increased by 30.23% and total impressions by 91.47%. The average position also improved from 42.6 to 38.7.
                      </P>

                      <SubHead>Google Business Profile</SubHead>

                      <DetailLabel>GBP Profile Interactions</DetailLabel>
                      <P>
                        In July - November 2023, Google Business Profile interactions increased by 5.5% as compared to interactions in July - November 2022.
                      </P>

                      <DetailLabel>GBP Calls</DetailLabel>
                      <P>
                        In July - November 2023, Google Business Profile calls increased by 4.8% as compared to calls in July - November 2022.
                      </P>

                      <DetailLabel>GBP Direction Requests</DetailLabel>
                      <P>
                        In July - November 2023, Google Business Profile direction requests increased by 58.7% as compared to direction requests in July - November 2022.
                      </P>

                      <SubHead>Keyword</SubHead>

                      <DetailLabel>Tracked Keyword</DetailLabel>
                      <P>
                        Here are the improvements to the keywords we track. As seen, we had the following keyword position increase:
                      </P>
                      <BulletList
                        items={[
                          "ac maintenance services increased by 21 positions in the local finder",
                          "ac installation service increased by 18 positions in the local finder",
                          "ac maintenance near me increased by 18 positions in local finder",
                          "ac service maintenance increased by 12 positions in local finder",
                          "ac repair services sacramento increased by 1 positions in local finder",
                        ]}
                      />

                      <DetailLabel>LSI Keyword</DetailLabel>
                      <P>
                        Additionally, here are the LSI keywords the website gained in addition to the ones we track. LSI (latent semantic indexing) keywords are words or phrases that are conceptually related to a target keyword.
                      </P>

                      <PdfBlock src="/case-studies/hvac-sacramento-case-study.pdf" />
                      <MicroCTA />
                    </div>
                  </div>
                </TabsContent>

                {/* ── TAB 2: HVAC & Plumbing — Fairbanks ── */}
                <TabsContent value="hvac-plumbing-fairbanks">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                      HVAC & Plumbing — Fairbanks
                    </h3>
                    <div className="space-y-6">
                      <DetailLabel>Synopsis</DetailLabel>
                      <P>
                        This HVAC & Plumbing company was in dire need of leads when they came to us in May of 2021. In this industry, most leads are coming from GMB phone calls or Google Ads. We were brought on to improve their GMB visibility and lead generation.
                      </P>

                      <DetailLabel>Goal</DetailLabel>
                      <P>Qualified Leads & Conversions</P>

                      <DetailLabel>Action Plan</DetailLabel>
                      <BulletList
                        items={[
                          "Extensive keyword research to find relevant keywords including competitive analysis",
                          "Optimize GMB profile from top to bottom",
                          "Built relevant niche and local citations",
                          "Optimized onsite for location signals",
                          "Posted weekly on their GMB profile to increase additional signals",
                        ]}
                      />

                      <DetailLabel>Outcome</DetailLabel>
                      <BulletList
                        items={[
                          "Significant improvement for top service keywords",
                          "Core plumbing + location map pack rankings",
                          "1395.2% increase in phone calls",
                          "520% increase in GMB actions to the website",
                        ]}
                      />

                      <PdfBlock src="/case-studies/hvac-plumbing-fairbanks-case-study.pdf" />
                      <MicroCTA />
                    </div>
                  </div>
                </TabsContent>

                {/* ── TAB 3: Electrical — Oahu ── */}
                <TabsContent value="electrical-oahu">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                      Electrical — Oahu
                    </h3>
                    <div className="space-y-6">
                      <DetailLabel>Goal</DetailLabel>
                      <BulletList
                        items={[
                          "Enhance Keyword Performance",
                          "Increase Engagement and Visibility",
                          "20-40% increase in conversions/goal completions",
                        ]}
                      />

                      <DetailLabel>Action Plan</DetailLabel>
                      <BulletList
                        items={[
                          "Extensive keyword research to find relevant keyword s including competitive analysis",
                          "Optimize GMB profile from top to bottom",
                          "Built relevant niche and local citations",
                          "Optimized onsite for location signals",
                          "Post weekly on their GMB profile to increase additional signals",
                          "Evaluate the site's content silo for content strategy",
                          "Create and publish monthly blogs as supplementary content for target keywords",
                        ]}
                      />

                      <SubHead>Google Analytics</SubHead>

                      <DetailLabel>User Acquisition</DetailLabel>
                      <P>Date Range: December 2023–July 2024</P>
                      <P>
                        Here are the user acquisition metrics for the client's website. As seen, organic search is the channel that brings the highest number of new users to the website. Out of 711 new users, organic search contributed 45.29% of the total new users. 44.02% of new users' engaged sessions also came from organic search.
                      </P>

                      <DetailLabel>COMPARISON</DetailLabel>
                      <P>Date Range: December 2023–March 2024 vs. April 2024–July 2024</P>
                      <P>
                        If we compare how our strategy improved, we can see an improvement in user acquisition metrics. Below is a comparison of the first half of the campaign vs. the second half of the campaign (December 2023–March 2024 vs. April 2024–July 2024). As seen, new users from organic search increased by 485.11%, and new users' engaged sessions from organic search increased by 218.97%.
                      </P>

                      <SubHead>Traffic Acquisition</SubHead>
                      <P>Date Range: December 2023–July 2024</P>
                      <P>
                        Here are the traffic acquisition metrics for the client's website. Similar to the user acquisition metrics, organic search is the channel that brings the highest number of users and sessions to the website. Out of 711 users and 901 sessions, organic search contributed 46.13% of the total users and 46.84% of the total sessions. Additionally, organic search also contributed to 47.10% of engaged sessions. 43.09% of the total events and 53.62% of the total key events also came from organic search.
                      </P>

                      <DetailLabel>COMPARISON</DetailLabel>
                      <P>Date Range: December 2023–March 2024 vs. April 2024–July 2024</P>
                      <P>
                        If we compare how our strategy improved, we can see an improvement in traffic acquisition metrics. Below is a comparison of the first half of the campaign versus the second half of the campaign (December 2023–March 2024 vs. April 2024–July 2024). As seen, users from organic search increased by 447.06%, sessions from organic search increased by 252.69%, and engaged sessions from organic search increased by 226.23%. Additionally, event counts improved by 851.94% and key events improved by 725%.
                      </P>

                      <SubHead>Google Search Console</SubHead>

                      <DetailLabel>Clicks, Impressions, CTR and Position</DetailLabel>
                      <P>Date Range: December 2023–July 2024</P>
                      <P>
                        Here are the Google Search Console metrics for the client's website. In December 2023–July 2024, the website recorded 240 total clicks, 4.86K total impressions, 4.9% average click-through rates and 23.1 average positions.
                      </P>

                      <DetailLabel>COMPARISON</DetailLabel>
                      <P>Date Range: December 2023–March 2024 vs. April 2024–July 2024</P>
                      <P>
                        If we compare how our strategy improved, we can see an improvement in the metrics measured in the Google Search Console. Below is a comparison of the first half of the campaign versus the second half of the campaign (December 2023–March 2024 vs. April 2024–July 2024). As seen, total clicks on the website increased by 63.73% from 91 to 149. Impressions of the website also increased by 185.71%, from 1.26K to 3.6K total impressions.
                      </P>

                      <SubHead>Keywords</SubHead>
                      <P>
                        Here is the average Google position from December 2023–July 2024. We have seen an increase in March.
                      </P>

                      <DetailLabel>Organic Desktop Results (Tracked Keywords)</DetailLabel>
                      <P>
                        Here are some recent improvements to the keywords we track. For organic desktop, we saw an increase in the following keywords:
                      </P>
                      <BulletList
                        items={[
                          "fan installation oahu increased by 5 positions on organic desktop",
                          "house fan installation oahu increased by 4 positions on organic desktop",
                          "light fixture installer oahu increased by 1 position on organic desktop",
                          "electrical service upgrades oahu increased by 1 position on organic desktop",
                          "electrical service upgrade oahu increased by 1 position on organic desktop",
                          "ceiling fan installation oahu increased by 1 position on organic desktop",
                        ]}
                      />

                      <DetailLabel>Organic Mobile Results (Tracked Keywords)</DetailLabel>
                      <P>
                        Here are some recent improvements to the keywords we track. For organic mobile, we saw an increase in the following keywords:
                      </P>
                      <BulletList
                        items={[
                          "fan installation oahu increased by 6 positions on organic mobile",
                          "house fan installation oahu increased by 3 positions on organic mobile",
                          "electrical service upgrades oahu increased by 2 positions on organic mobile",
                          "light fixture installer oahu increased by 1 position on organic mobile",
                          "light fixture installation oahu increased by 1 position on organic mobile",
                          "electrical panel replacement oahu increased by 1 position on organic mobile",
                          "electrical service upgrade oahu increased by 1 position on organic mobile",
                          "ceiling fan installation oahu increased by 1 position on organic mobile",
                        ]}
                      />

                      <SubHead>Google Business Profile</SubHead>

                      <DetailLabel>Search and Map Views</DetailLabel>
                      <P>Date Range: March 2024–August 2024</P>
                      <P>
                        Here are the metrics for the client's Google Business Profile listing. In March 2024–August 2024, the listing had 1.20K total views. Out of these total views, 444 came from desktop search view results, 641 came from mobile search view results, 104 came from desktop map view results, and 14K came from mobile map view results.
                      </P>
                      <P>
                        Additionally, the listing had 158 total business profile interactions. There were 124 total website clicks and 34 calls.
                      </P>

                      <PdfBlock src="/case-studies/electrical-oahu-case-study.pdf" />
                      <MicroCTA />
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
          <section className="py-20 relative" style={{ backgroundColor: 'hsl(210 25% 10%)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                    <MousePointerClick className="w-4 h-4" />
                    PPC Case Studies
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                    PPC Case Studies
                  </h2>
                  <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                    This section highlights paid search campaign performance for HVAC, plumbing, and electrical businesses, with a focus on lead generation, conversion efficiency, and cost-effective growth through Google Ads.
                  </p>
                </div>

                {/* ── HVAC PPC Case Study ── */}
                <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                    HVAC PPC Case Study
                  </h3>
                  <div className="space-y-6">
                    <DetailLabel>Synopsis</DetailLabel>
                    <P>
                      PPC case study content will be injected here. Please provide the exact HVAC PPC case study content to populate this section.
                    </P>

                    <DetailLabel>Challenges</DetailLabel>
                    <P>Content pending — awaiting approved PPC case study text.</P>

                    <DetailLabel>Objective</DetailLabel>
                    <P>Content pending — awaiting approved PPC case study text.</P>

                    <DetailLabel>Campaign Strategy</DetailLabel>
                    <P>Content pending — awaiting approved PPC case study text.</P>

                    <DetailLabel>Results</DetailLabel>
                    <P>Content pending — awaiting approved PPC case study text.</P>

                    <DetailLabel>Conclusion</DetailLabel>
                    <P>Content pending — awaiting approved PPC case study text.</P>

                    <div className="mt-10">
                      <h4 className="text-lg font-display font-semibold text-foreground mb-4">
                        View Full PPC Case Study Report
                      </h4>
                      <p className="text-muted-foreground text-sm italic">PDF will be loaded once the PPC case study PDF is uploaded.</p>
                    </div>

                    <MicroCTA />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>{/* end #google-ppc */}

        {/* ═══ FAQ SECTION ═══ */}
        <section className="py-20 relative" style={{ backgroundColor: 'hsl(215 30% 14%)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                  Answers to common questions about how GrowSmallBiz approaches Local SEO and PPC strategy for HVAC, plumbing, and electrical businesses.
                </p>
              </div>

              <div className="grid lg:grid-cols-5 gap-10">
                {/* LEFT: FAQ Accordion */}
                <div className="lg:col-span-3">
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="q1" className="bg-card border border-border rounded-xl px-6">
                      <AccordionTrigger className="text-foreground font-display font-semibold text-left py-5 hover:no-underline">
                        Are these results from GrowSmallBiz clients?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 pb-5 leading-relaxed">
                        These case studies reflect campaigns executed in a white-label fulfillment capacity prior to the launch of GrowSmallBiz. The methodology and execution experience now inform GrowSmallBiz's current client work.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="bg-card border border-border rounded-xl px-6">
                      <AccordionTrigger className="text-foreground font-display font-semibold text-left py-5 hover:no-underline">
                        Can Local SEO really help HVAC, plumbing, and electrical businesses get more calls?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 pb-5 leading-relaxed">
                        Yes. Local SEO improves visibility in map results, Google Business Profile, and localized search—helping generate high-intent calls and inquiries.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3" className="bg-card border border-border rounded-xl px-6">
                      <AccordionTrigger className="text-foreground font-display font-semibold text-left py-5 hover:no-underline">
                        Can PPC help HVAC businesses generate leads faster?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 pb-5 leading-relaxed">
                        Yes. PPC enables immediate visibility for high-intent searches, helping generate qualified leads quickly while supporting broader marketing efforts.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q4" className="bg-card border border-border rounded-xl px-6">
                      <AccordionTrigger className="text-foreground font-display font-semibold text-left py-5 hover:no-underline">
                        How long does it take to see results from Local SEO or PPC?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 pb-5 leading-relaxed">
                        PPC can generate faster initial results, while Local SEO builds momentum over time depending on competition, website quality, and local authority.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="bg-card border border-border rounded-xl px-6">
                      <AccordionTrigger className="text-foreground font-display font-semibold text-left py-5 hover:no-underline">
                        What is included in your Local SEO strategy?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 pb-5 leading-relaxed">
                        Keyword research, Google Business Profile optimization, citations, onsite optimization, content support, and ongoing performance improvements.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q6" className="bg-card border border-border rounded-xl px-6">
                      <AccordionTrigger className="text-foreground font-display font-semibold text-left py-5 hover:no-underline">
                        Can you review my current marketing performance?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 pb-5 leading-relaxed">
                        Yes. You can request a website and SEO audit or book a strategy session to identify improvement opportunities.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* RIGHT: CTA Panel */}
                <div className="lg:col-span-2">
                  <div className="bg-card border border-border rounded-2xl p-8 sticky top-24">
                    <h3 className="text-xl font-display font-bold text-foreground mb-4">
                      Need Better Lead Flow from Search?
                    </h3>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      If your HVAC, plumbing, or electrical business depends on calls, form fills, and high-intent search traffic, GrowSmallBiz can help identify where Local SEO or PPC improvements can drive better results.
                    </p>
                    <div className="space-y-3">
                      <Button variant="hero" size="lg" className="w-full" asChild>
                        <Link to="/contact">
                          Book a Strategy Session
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" className="w-full" asChild>
                        <Link to="/contact">
                          Request a Website & SEO Audit
                        </Link>
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 text-center">
                      Get clarity on your visibility, traffic quality, and conversion performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        {/* ═══ CONSULTATION FORM ═══ */}
        <ConsultationFormSection />
      </main>
      <Footer />
    </>
  );
};

export default LocalSEOHvacPlumbingElectrical;
