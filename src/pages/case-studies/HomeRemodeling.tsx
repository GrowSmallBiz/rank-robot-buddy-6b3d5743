import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  Search,
  ChevronDown,
} from "lucide-react";
import { PdfViewer } from "@/components/PdfViewerWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";
import { useUtm } from "@/hooks/use-utm";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA, PersonCTA } from "@/components/services";
import { FAQSection } from "@/components/sections/FAQSection";
import { createContactCTA } from "@/config/contactCTA";
import heroBg from "@/assets/case-studies-home-remodeling-hero-bg.jpg";

/* ─── Summary Proof Cards ─── */
const summaryCards = [
  {
    title: "Home Remodeling Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+366.67% Goal Completions",
      "+382.11% Website Clicks",
      "+375.10% Impressions",
      "+15% GBP Calls",
    ],
  },
  {
    title: "Home Renovation SEO Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "27.66% of Total Users from Organic Search",
      "31.69% of Total Sessions from Organic Search",
      "60% of Thank You Completions from Organic Search",
      "Strong First- and Second-Position Local Pack Rankings",
    ],
  },
  {
    title: "Dallas Home Renovation Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+151.8% Organic Conversions YoY",
      "+393.3% Organic Traffic YoY",
      "+96.2% Google Business Profile Visibility",
      "+85.2% Website Clicks YoY",
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

const HomeRemodeling = () => {
  const [activeTab, setActiveTab] = useState("home-remodeling-long-term");
  const { strategySessionUrl, freeAuditUrl } = useUtm();

  return (
    <>
      <Head>
        <title>Case Studies for Home Remodeling Businesses | GrowSmallBiz</title>
        <meta
          name="description"
          content="Explore documented Local SEO case study results for home remodeling and home renovation businesses. Real proof from Google Business Profile visibility, organic search growth, keyword movement, calls, conversions, and conversion-focused lead generation strategy."
        />
        <link rel="canonical" href="https://growsmallbiz.io/case-studies/home-remodeling/" />
      </Head>
      <PageJsonLd
        pageType="WebPage"
        name="Case Studies for Home Remodeling Businesses"
        description="Explore documented Local SEO case study results for home remodeling and home renovation businesses."
        url="/case-studies/home-remodeling/"
        breadcrumbs={[
          { name: "Case Studies", url: "/case-studies/" },
          { name: "Home Remodeling", url: "/case-studies/home-remodeling/" },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* ═══ SECTION 1: HERO ═══ */}
        <ServiceHero
          badge={{ icon: Search, text: "Case Studies / Local SEO" }}
          title="Case Studies for Home Remodeling Businesses"
          subtitle="Explore documented Local SEO case study results for home remodeling and home renovation businesses. This page showcases real proof drawn from Google Business Profile visibility, organic search growth, keyword movement, calls, conversions, and conversion-focused lead generation strategy."
          primaryCTA={{ label: "Schedule Strategy Call", href: strategySessionUrl }}
          secondaryCTA={{ label: "Request a Website & SEO Audit", href: freeAuditUrl }}
          backgroundImage={heroBg}
          overlayOpacity={85}
        />

        {/* ═══ LOCAL SEO SECTION HEADING ═══ */}
        <section className="pt-20 pb-4 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <Search className="w-4 h-4" />
                Local SEO Results
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Local SEO <span className="text-transparent bg-clip-text bg-gradient-primary">Case Studies</span>
              </h2>
              <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                This section highlights local SEO campaign performance for home remodeling businesses, with a focus on Google Business Profile visibility, map rankings, organic search growth, keyword movement, calls, and conversion-focused lead generation.
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
                Consistent Local SEO <span className="text-transparent bg-clip-text bg-gradient-primary">Methodology</span> Across Home Remodeling Campaigns
              </h2>
              <P>
                Across these campaigns, the work consistently included extensive keyword research, Google Business Profile optimization, local and niche citation building, onsite location and service signal improvements, content support, technical SEO enhancements, and geo-relevance improvements designed to strengthen rankings, engagement, and lead generation for high-intent home remodeling searches.
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
                    value="home-remodeling-long-term"
                    className="flex-1 min-w-[120px] py-3 text-xs sm:text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                  >
                    Home Remodeling
                  </TabsTrigger>
                  <TabsTrigger
                    value="home-renovation-organic"
                    className="flex-1 min-w-[120px] py-3 text-xs sm:text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                  >
                    Home Renovation
                  </TabsTrigger>
                  <TabsTrigger
                    value="dallas-home-renovation"
                    className="flex-1 min-w-[120px] py-3 text-xs sm:text-sm font-display font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                  >
                    Home Remodeling — Dallas
                  </TabsTrigger>
                </TabsList>

                {/* ── TAB 1: Home Remodeling — Long-Term SEO Campaign ── */}
                <TabsContent value="home-remodeling-long-term">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                      Home Remodeling — Long-Term SEO Campaign
                    </h3>
                    <div className="space-y-6">
                      <DetailLabel>Goals</DetailLabel>
                      <BulletList
                        items={[
                          "Enhance Keyword Performance",
                          "Increase Engagement and Visibility",
                          "20-40% increase in conversions / goal completions",
                        ]}
                      />

                      <DetailLabel>Action Plan</DetailLabel>
                      <BulletList
                        items={[
                          "Extensive keyword research to find relevant keywords, including competitive analysis",
                          "Ongoing Google Business Profile optimization",
                          "Built relevant niche and local citations",
                          "Optimized onsite pages for stronger local and service signals",
                          "Improved engagement and visibility through local SEO execution",
                          "Strengthened conversion paths tied to SEO traffic",
                          "Supported rankings with content and technical improvements",
                          "Continued long-term optimization over a multi-year campaign",
                        ]}
                      />

                      <DetailLabel>Notable Improvements</DetailLabel>
                      <P>
                        Here are some notable improvements from both the website and Google Business Profile metrics over the year-over-year comparison period:
                      </P>
                      <BulletList
                        items={[
                          "The total goal completion increased by 366.67%",
                          "The total goal completions from organic search (SEO) increased by 125%",
                          "The total goal conversion rate increased by 304.78%",
                          "The goal conversion rate from organic search (SEO) increased by 161.62%",
                          "The total thank you goal increased by 960%",
                          "Phone calls tracked on the website increased by 88.89%",
                          "Google My Business calls increased by 15% in March - July 2023 vs. March - July 2022",
                          "The total page views increased by 9.17%",
                          "The total unique page views increased by 11.38%",
                          "The average time on website pages increased by 13.66%",
                          "The exit rate improved by 5.60%",
                          "Total website clicks from Google Search Console increased by 382.11%",
                          "The total website impressions from Google Search Console increased by 375.10%",
                          "The average Google position increased by 8 positions",
                          "There were 9 keyword movements",
                          "There were 82 gained positional movement",
                        ]}
                      />

                      <SubHead>Google Analytics - KPIs</SubHead>

                      <DetailLabel>Leads and Conversions</DetailLabel>
                      <P>
                        Here is how conversions improved between June 1, 2022 - May 31, 2023 vs. June 1, 2021 - May 31, 2022. Overall goal completions, goal conversion rate, thank you goal, and phone call tracking increased. Goal completion increased by 366.67%, goal conversion rate increased by 304.78%, thank you goal increased by 960%, and phone call tracking increased by 88.89%.
                      </P>
                      <P>
                        From organic search, the goal conversion rate increased by 161.62%, and goal completions (the number of total conversions) increased by 125%.
                      </P>

                      <DetailLabel>Traffic Acquisition</DetailLabel>
                      <P>
                        Here is the traffic acquisition per channel. Total users increased by 15.57%, total new users increased by 16.09%, and total sessions increased by 15.29%. However, there was a decrease in organic search for the number of users, new users, and sessions, and the strategy included follow-up recommendations to improve those metrics.
                      </P>

                      <DetailLabel>Page Views</DetailLabel>
                      <P>
                        Page views and unique page views also increased. Page views increased by 9.17%, unique page views increased by 11.38%, average time on website pages increased by 13.66%, and the exit rate improved by 5.60%.
                      </P>

                      <SubHead>Google Search Console KPIs</SubHead>
                      <P>
                        There was also a major improvement in Google Search Console KPIs. Total clicks increased by 382.11% and total impressions increased by 375.10%.
                      </P>

                      <DetailLabel>Google Search Console Queries</DetailLabel>
                      <P>
                        Here are the top 10 queries for the website:
                      </P>
                      <BulletList
                        items={[
                          "euro design build",
                          "euro design cabinets",
                          "eurodesign cabinets",
                          "euro design",
                          "high end remodeling",
                          "oil based vs. water based sealer",
                          "kitchen design elements",
                          "remodeling",
                          "custom kitchen cabinets",
                          "kitchen remodel dallas",
                        ]}
                      />

                      <SubHead>Keyword Rankings</SubHead>
                      <P>
                        Over the past 12 months, keyword rankings also improved. The average Google position increased by 8 positions, there were 9 keyword movements, and 82 gained positional movement.
                      </P>
                      <BulletList
                        items={[
                          "Keyword Movement: The number of keywords that have moved. If a keyword has moved from 8th to 5th, this is counted as one keyword movement up.",
                          "Positional Movement: The number of positions that keywords have moved. If a keyword has moved from 8th to 5th, this is counted as three positions gained.",
                        ]}
                      />
                      <P>
                        A number of keywords rank in the top 10 of organic desktop, organic mobile, local pack, and local finder. Top keywords include:
                      </P>
                      <BulletList
                        items={[
                          '"high end remodeling" ranks 4th in organic desktop, 4th in organic mobile, 1st in local pack and 1st in local finder',
                          '"remodeling design services" ranks 4th in organic desktop, 7th in organic mobile, 1st in local pack, and 1st in local finder',
                          '"renovation design services" ranks 12th in organic desktop, 13th in organic mobile, 1st in local pack, and 1st in local finder',
                          '"design build bathroom remodel" ranks 16th in organic desktop, 17th in organic mobile, 1st in local pack, and 1st in local finder',
                          'Most of the "near me" keywords, like bathroom contractors near me, bathroom remodelers near me, kitchen design near me, and kitchen remodeling near me, are ranking 1st in both local pack and local finder',
                        ]}
                      />

                      <SubHead>Google Business Profile</SubHead>
                      <P>
                        Available data is from March 2023 to July 2023. Data is pulled directly from the Google Business Profile listing.
                      </P>

                      <DetailLabel>Google Business Profile Calls</DetailLabel>
                      <P>
                        Google Business Profile calls increased by 15% in March - July 2023 compared to March - July 2022.
                      </P>

                      <PdfBlock src="/case-studies/home-remodeling-case-study-1.pdf" />
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

                {/* ── TAB 2: Home Renovation — Organic Search Contribution Campaign ── */}
                <TabsContent value="home-renovation-organic">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                      Home Renovation — Organic Search Contribution Campaign
                    </h3>
                    <div className="space-y-6">
                      <DetailLabel>Synopsis</DetailLabel>
                      <P>
                        Despite the persistent challenges encountered in the home improvement industry, this campaign produced measurable SEO improvements in traffic contribution, visibility, conversion share, and local pack performance.
                      </P>

                      <DetailLabel>Notable Contributions (SEO)</DetailLabel>
                      <BulletList
                        items={[
                          "Organic search contributed to 754 or 27.66% of the total website users",
                          "Organic search contributed 739 or 27.12% of the total new users",
                          "Organic search contributed 952 or 31.69% of the total sessions",
                          "Organic search contributed 33 or 60% of the total thank you page completions",
                          "Most of the keywords tracked dominate the first and second rank in the local pack (map rankings)",
                        ]}
                      />

                      <DetailLabel>Notable Improvement (SEO)</DetailLabel>
                      <BulletList
                        items={[
                          "Total clicks for the whole duration of the campaign improved by 3.55%",
                          "Total impressions improved by 7.56%",
                          "Average position improved from 51.2 to 48.6",
                          "bathroom remodeling service increased by 1 rank in the local pack",
                          "home design and remodeling service increased by 1 rank in the local pack",
                          "home renovation increased by 1 rank in the local pack",
                          "home renovation near me increased by 1 rank in the local pack",
                          "design and remodeling increased by 2 ranks in the local finder",
                          "home renovation firm increased by 2 ranks in the local finder",
                          "bath remodeling service increased by 1 rank in the local finder",
                          "home design and remodeling increased by 1 rank in the local finder",
                          "home renovation increased by 1 rank in the local finder",
                          "remodeling and design increased by 1 rank in the local finder",
                        ]}
                      />

                      <SubHead>Google Analytics</SubHead>

                      <DetailLabel>Traffic Acquisition</DetailLabel>
                      <P>
                        Here is how the organic search channel performed in terms of traffic acquisition in December 2022 - July 2023. Organic search contributed to 754 or 27.66% of the total website users, 739 or 27.12% of the total new users, and 952 or 31.69% of the total sessions. Organic search also contributed 33 or 60% of the total thank you page completions.
                      </P>

                      <DetailLabel>Behavior</DetailLabel>
                      <P>
                        Total page views of the website is 5720 and unique page views totaled 5,021.
                      </P>

                      <DetailLabel>Conversion</DetailLabel>
                      <P>
                        The thank you page goal completions totaled to 55. Of those, 60% or 33 thank you page completions came from organic search.
                      </P>

                      <SubHead>Google Search Console</SubHead>
                      <P>
                        Total clicks for the whole campaign duration improved by 3.55%, total impressions improved by 7.56%, and the average position improved from 51.2 to 48.6.
                      </P>

                      <SubHead>Keywords</SubHead>
                      <P>
                        There was keyword improvement across both local pack and local finder visibility.
                      </P>

                      <DetailLabel>Local Pack</DetailLabel>
                      <BulletList
                        items={[
                          "bathroom remodeling service increased by 1 rank in the local pack",
                          "home design and remodeling service increased by 1 rank in the local pack",
                          "home renovation increased by 1 rank in the local pack",
                          "home renovation near me increased by 1 rank in the local pack",
                        ]}
                      />

                      <DetailLabel>Local Finder</DetailLabel>
                      <BulletList
                        items={[
                          "design and remodeling increased by 2 ranks in the local finder",
                          "home renovation firm increased by 2 ranks in the local finder",
                          "bath remodeling service increased by 1 rank in the local finder",
                          "home design and remodeling increased by 1 rank in the local finder",
                          "home renovation increased by 1 rank in the local finder",
                          "remodeling and design increased by 1 rank in the local finder",
                        ]}
                      />
                      <P>
                        Most of the keywords tracked dominate the first and second rank in the local pack (map rankings).
                      </P>

                      <PdfBlock src="/case-studies/home-remodeling-case-study-2.pdf" />
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

                {/* ── TAB 3: Dallas Home Renovation — Local Visibility Campaign ── */}
                <TabsContent value="dallas-home-renovation">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
                      Dallas Home Renovation — Local Visibility Campaign
                    </h3>
                    <div className="space-y-6">
                      <DetailLabel>Strategic Objective</DetailLabel>
                      <P>
                        Increase local visibility and leads for a home renovation company in Dallas, TX.
                      </P>

                      <DetailLabel>Initial Insight</DetailLabel>
                      <P>
                        This client needed to increase their presence in their service area across the Dallas-Ft. Worth area in order to increase the quantity of leads coming in.
                      </P>

                      <DetailLabel>Direction</DetailLabel>
                      <P>
                        By optimizing the local listing and focusing on the two main services — kitchen remodeling and bathroom remodeling — visibility of the Google My Business listing increased by 96.2%, and clicks to the website increased by 85.2% year over year.
                      </P>
                      <P>
                        The local optimizations worked in tandem with a strategic content plan, solid foundational research and implementation, and technical SEO efforts.
                      </P>
                      <P>
                        Geographic markup was manually created and implemented to give Google more information about the location and services, which contributed to stronger ROI and profit impact.
                      </P>

                      <DetailLabel>Results</DetailLabel>
                      <P>
                        The campaign produced a 151.8% increase in organic conversions year over year and a 393.3% increase in organic traffic year over year.
                      </P>

                      <DetailLabel>Campaign Outcome</DetailLabel>
                      <BulletList
                        items={[
                          "Increased local visibility across the Dallas-Ft. Worth service area",
                          "Stronger Google Business Profile presence",
                          "Higher website click volume from local search",
                          "Improved conversion performance from organic traffic",
                          "Better alignment between service pages, local intent, and geo-signals",
                        ]}
                      />

                      <PdfBlock src="/case-studies/home-remodeling-case-study-3.pdf" />
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

        {/* ═══ FAQ SECTION ═══ */}
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about how GrowSmallBiz approaches Local SEO strategy for home remodeling businesses."
          faqs={[
            { question: "Can GrowSmallBiz create a similar strategy for my home remodeling business?", answer: "Yes. These case studies show the kind of structured Local SEO work GrowSmallBiz can apply to home remodeling businesses, including Google Business Profile optimization, local relevance improvements, keyword targeting, conversion-focused website support, content strategy, and technical SEO enhancements." },
            { question: "Can Local SEO really help home remodeling businesses get more calls and estimate requests?", answer: "Yes. Home remodeling is a high-intent category. When a business improves map visibility, service-page relevance, local rankings, and conversion paths, Local SEO can contribute to more calls, contact form submissions, and estimate requests from people already searching for remodeling services." },
            { question: "What is included in your Local SEO strategy?", answer: "Our Local SEO work typically includes keyword research, Google Business Profile optimization, local and niche citation work, onsite location and service signal improvements, content support, technical SEO enhancements, and conversion-focused recommendations tied to lead generation." },
            { question: "How long does it take to see results from Local SEO?", answer: "Timelines vary based on competition, location, website quality, Google Business Profile health, and the starting visibility of the business. In many cases, measurable movement begins before the full strategy matures, but Local SEO works best as a consistent effort rather than a one-time fix." },
            { question: "How much do SEO services cost?", answer: "SEO pricing can vary widely, but the lowest-cost option is rarely the one that produces the best business outcome. The real investment depends on your market, competition, service area, goals, and how much strategy, execution, tracking, and optimization are required to generate profitable growth.\n\nSome providers sell isolated tactics or generic packages. GrowSmallBiz takes a more complete approach by looking at the full picture — visibility, lead quality, conversion path, tracking, and return on investment. That means pricing is based on what your business actually needs to compete and grow, not on a one-size-fits-all template.\n\nWe begin with a complimentary audit to determine what could be realistically possible, the likely cost, and the ROI potential before we recommend any assignment." },
            { question: "Do you offer a performance guarantee?", answer: "Yes. If GrowSmallBiz does not deliver the agreed-upon performance within the agreed-upon time frame, we will continue working for free until we do. No questions asked." },
            { question: "Can you review my current marketing performance?", answer: "Yes. GrowSmallBiz can review your current local visibility, website conversion path, Google Business Profile presence, and overall search positioning to identify where improvement opportunities exist." },
          ]}
          contactCTA={createContactCTA({
            title: "Need Better Lead Flow from Search?",
            description: "If your home remodeling business depends on calls, form fills, and high-intent search traffic, GrowSmallBiz can help identify where Local SEO improvements can drive better results.",
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
                  Across home remodeling campaigns, one pattern remains consistent — businesses that invest in structured local visibility and high-intent search strategy tend to see measurable improvements in calls, engagement, rankings, and lead flow over time.
                </p>
                <p>
                  These case studies reflect different starting points, markets, and levels of competition, but the underlying approach remains consistent: improving how a remodeling business appears, competes, and converts in search environments where homeowners are actively looking for kitchen, bathroom, renovation, and design-build services.
                </p>
                <p>
                  The goal is not just better visibility. It is turning local search visibility into real business outcomes through better rankings, stronger Google Business Profile performance, higher-intent traffic, and clearer conversion paths.
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

export default HomeRemodeling;
