import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  Target,
  Search,
  Layers,
} from "lucide-react";
import { PdfViewer } from "@/components/PdfViewerWrapper";

/* ─── Summary Proof Cards ─── */
const summaryCards = [
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
    title: "Home Remodeling Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+366.67% Goal Completions",
      "+304.78% Goal Conversion Rate",
      "+382.11% Clicks",
      "+375.10% Impressions",
    ],
  },
  {
    title: "Cleaning Service Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+261.20% Clicks",
      "+868.02% Impressions",
      "+114.8% GBP Calls",
      "+116.0% GBP Interactions",
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
  {
    title: "Home Renovation Growth",
    subtitle: "Local SEO Campaign",
    metrics: [
      "+151.8% Organic Conversions",
      "+393.3% Organic Traffic",
      "60% of Thank You Page Completions from Organic",
      "Strong local pack and local finder visibility",
    ],
  },
];

/* ─── Image placeholder ─── */
const CaseImage = ({ name }: { name: string }) => (
  <div className="my-8 mx-auto max-w-4xl rounded-xl border border-border bg-muted/30 p-8 text-center">
    <div className="flex flex-col items-center gap-2 text-muted-foreground">
      <BarChart3 className="w-10 h-10 opacity-40" />
      <span className="text-sm font-medium">{name}</span>
      <span className="text-xs opacity-60">Image placeholder — upload to display</span>
    </div>
  </div>
);

/* ─── Case Block Component ─── */
const CaseBlock = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-16 last:mb-0">
    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 pb-4 border-b border-primary/30">
      {title}
    </h3>
    <div className="prose-custom space-y-6">{children}</div>
  </div>
);

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

/* ═══════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════ */

const LocalSEOHomeServices = () => {
  return (
    <>
      <Head>
        <title>Local SEO Case Studies for Home Service Businesses | GrowSmallBiz</title>
        <meta
          name="description"
          content="Explore documented local SEO campaign results across roofing, landscaping, home remodeling, cleaning, HVAC, plumbing, and electrical services."
        />
        <link rel="canonical" href="https://growsmallbiz.io/case-studies/local-seo/home-service-businesses" />
      </Head>
      <PageJsonLd
        pageType="WebPage"
        name="Local SEO Case Studies for Home Service Businesses"
        description="Explore documented local SEO campaign results across roofing, landscaping, home remodeling, cleaning, HVAC, plumbing, and electrical services."
        url="/case-studies/local-seo/home-service-businesses"
        breadcrumbs={[
          { name: "Case Studies", url: "/case-studies" },
          { name: "Local SEO", url: "/case-studies/local-seo" },
          { name: "Home Service Businesses", url: "/case-studies/local-seo/home-service-businesses" },
        ]}
      />
      <Header />
      <main>
        {/* ═══ SECTION 1: HERO ═══ */}
        <section className="hero-section">
          <div className="absolute inset-0" style={{ backgroundColor: "hsl(var(--background) / 0.85)" }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="service-badge mb-6 animate-fade-up">
                <Search className="w-4 h-4" />
                <span>Case Studies / Local SEO</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up leading-tight">
                Local SEO Case Studies for Home Service Businesses
              </h1>
              <div
                className="text-lg md:text-xl text-foreground/80 mb-8 animate-fade-up max-w-3xl mx-auto leading-relaxed"
                style={{ animationDelay: "0.1s" }}
              >
                Explore documented local SEO campaign results across roofing, landscaping, home remodeling, cleaning, HVAC, plumbing, and electrical services. This page showcases real proof drawn from organic search, Google Business Profile, keyword movement, map visibility, and conversion-focused local SEO execution.
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 2: SUMMARY PROOF CARDS ═══ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 section-glow" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
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
                          <span className="text-sm text-foreground leading-snug">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 3: METHODOLOGY ═══ */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Layers className="w-6 h-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Consistent Local SEO Methodology Across Campaigns
                </h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                Across these campaigns, the work consistently included extensive keyword research, Google Business Profile optimization, local and niche citation building, onsite location signal improvements, ongoing content support, and local visibility enhancements designed to improve rankings, engagement, and lead generation.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 4: TABBED CASE STUDIES ═══ */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="roofing" className="max-w-6xl mx-auto">
              <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-muted/50 p-2 rounded-xl mb-12">
                <TabsTrigger value="roofing" className="flex-1 min-w-[180px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Roofing & Exterior
                </TabsTrigger>
                <TabsTrigger value="landscaping" className="flex-1 min-w-[180px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Landscaping & Outdoor
                </TabsTrigger>
                <TabsTrigger value="remodeling" className="flex-1 min-w-[180px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Home Remodeling
                </TabsTrigger>
                <TabsTrigger value="cleaning" className="flex-1 min-w-[180px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Cleaning Services
                </TabsTrigger>
                <TabsTrigger value="hvac" className="flex-1 min-w-[180px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  HVAC, Plumbing & Electrical
                </TabsTrigger>
              </TabsList>

              {/* ─── TAB 1: Roofing ─── */}
              <TabsContent value="roofing">
                <CaseBlock title="Roofing — Content & Rankings">
                  <DetailLabel>The client:</DetailLabel>
                  <P>This is a company focused on professional roofing, roof replacement, inspection and design.</P>
                  <DetailLabel>Niche:</DetailLabel>
                  <P>Roofing</P>
                  <DetailLabel>The Solutions:</DetailLabel>
                  <P>We worked on developing content on the site and building out service pages. We optimized the homepage for search to increase traffic.</P>
                  <DetailLabel>The Results:</DetailLabel>
                  <P>Our efforts greatly impacted the traffic and helped contribute to new keyword rankings on site.</P>
                  <PdfViewer src="/case-studies/roofing-content-rankings.pdf" />
                </CaseBlock>

                <CaseBlock title="Roofing — Restoration / Florida">
                  <P>This roofing, renovation, and hail restoration company in Florida came to us to increase organic traffic and leads. By optimizing on-page elements, creating optimized localized content, and increasing their local presence in their service areas we increased organic conversions by 26% in a 6 month period. Many of these conversions were for large commercial roofing projects which is where the client wanted to grow as that is the client's most profitable service. We saw very significant increases in searches (+76%) and views (+127%) generated from their Google My Business listing. We also saw steady keyword increases over the first 6 months, jumping up 90+ spots for high search volume keywords like "siding installation", "roofing installation", "roof tarping", and "hail damage roof".</P>
                  <CaseImage name="roofing-restoration-summary-board.png" />
                </CaseBlock>

                <CaseBlock title="Roofing — AI SEO Campaign">
                  <P>The client started their SEO campaign in August 2023 and is now in their fourth month of working on improving their search visibility through organic methods. Here are the improvements to the metrics.</P>

                  <SubHead>Google Analytics</SubHead>

                  <DetailLabel>User Acquisition</DetailLabel>
                  <P>Here is the user acquisition of the website in August - November 2023 as compared to the previous period, April - July 2023. As seen in the image, new users from organic search increased by 16.45%, and engaged sessions from new users increased by 6.54%. The increase in the numbers is a good indication of the positive effect of our campaign.</P>

                  <DetailLabel>Traffic Acquisition</DetailLabel>
                  <P>For traffic acquisition, users from organic search increased by 15.38%, sessions increased by 7.44%, engaged sessions increased by 9.57%, and events increased by 11.06%.</P>

                  <SubHead>Google Search Console</SubHead>
                  <P>For our Google Search Console metrics, clicks improved by 2.73% in August - November 2023 as compared to clicks in April - July 2023. The average position also improved from 48.3 to 44.2.</P>

                  <SubHead>Google Business Profile</SubHead>
                  <P>For the client's Google Business Profile, we saw an increase in direction requests. In August - November 2023, we had a 5.4% increase in direction requests compared to 2022 metrics.</P>
                  <P>We also had a 200% increase in the number of messages in August - November 2023 compared to last year's data.</P>
                  <P>Calls from Google Business Profile for August - November 2023 need improvement, as we saw a 1.1% decrease.</P>

                  <SubHead>Keywords</SubHead>
                  <P>Keywords we track have also increased. As seen, we had the following keywords with their improved positions.</P>

                  <DetailLabel>Bellevue</DetailLabel>
                  <BulletList items={[
                    "flat roofing increased by 30 positions in organic desktop results",
                    "commercial roofing increased by 26 in organic desktop results",
                    "synthetic cedar shake roofing increased by 19 positions in organic desktop results",
                    "Local grid results still need improvement.",
                  ]} />

                  <DetailLabel>Kent</DetailLabel>
                  <BulletList items={[
                    "flat roofing increased by 34 positions in organic desktop results",
                    "commercial roofing increased by 12 in organic desktop results",
                    "synthetic cedar shake roofing increased by 12 positions in organic desktop results",
                    "commercial roofing contractor increased by 2 positions in organic desktop results",
                    "Local grid results still needs improvement.",
                  ]} />

                  <DetailLabel>Seattle</DetailLabel>
                  <BulletList items={[
                    "commercial roofing increased by 26 in organic desktop results",
                    "commercial roofing contractor increased by 21 positions in organic desktop results",
                    "roofing company increased by 16 positions in organic desktop results",
                    "roofing company increased by 13 positions in organic desktop results",
                    "synthetic cedar shake roofing increased by 13 positions in organic desktop results",
                    "residential roofing company increased by 6 positions in organic desktop results",
                    "Local grid results show a 0.4 increase but still need improvement.",
                  ]} />

                  <CaseImage name="roofing-ai-ga-user-acquisition.png" />
                  <CaseImage name="roofing-ai-gsc-gbp.png" />
                  <CaseImage name="roofing-ai-gbp-messages-calls.png" />
                  <CaseImage name="roofing-ai-keywords-bellevue-kent.png" />
                  <CaseImage name="roofing-ai-keywords-seattle-grid.png" />
                </CaseBlock>
              </TabsContent>

              {/* ─── TAB 2: Landscaping ─── */}
              <TabsContent value="landscaping">
                <CaseBlock title="Tree & Lawn Care">
                  <DetailLabel>Goals</DetailLabel>
                  <BulletList items={[
                    "Enhance Keyword Performance",
                    "Increase Engagement and Visibility",
                  ]} />

                  <DetailLabel>Action Plan</DetailLabel>
                  <BulletList items={[
                    "Extensive keyword research to find relevant keywords including competitive analysis",
                    "Optimize GMB profile from top to bottom",
                    "Built relevant niche and local citations",
                    "Optimized onsite for location signals",
                    "Post weekly on their GMB profile to increase additional signals",
                    "Evaluate the site's content silo for content strategy",
                    "Create and publish monthly blogs as supplementary content for target keywords",
                  ]} />

                  <SubHead>Google Analytics</SubHead>

                  <DetailLabel>User Acquisition</DetailLabel>
                  <P>Reference Data: October - November 2023 vs. August - September 2023</P>
                  <P>Here is the user acquisition for the client. As seen in the image, new users from organic search increased by 2.95%, and engaged sessions from new users increased by 5.3% in October - November 2023 compared to August - September 2023. As we aim for more keyword ranking, visibility, and engagement improvement, we also aim to see more organic traffic for the website.</P>

                  <DetailLabel>Traffic Acquisition</DetailLabel>
                  <P>Reference Data: October - November 2023 vs. August - September 2023</P>
                  <P>Here is the traffic acquisition for the client. As seen in the image, users from organic search increased by 7.39%, and conversions increased by 7.14% in October - November 2023 compared to August - September 2023. As we aim for more keyword ranking, visibility, and engagement improvement, we also aim to see more organic traffic for the website.</P>

                  <DetailLabel>Conversions (Website)</DetailLabel>
                  <P>Reference Data: October - November 2023 vs. August - September 2023</P>
                  <P>Here are the total conversions of the website from all the traffic channels. As seen below, contact form conversion increased by 16.67%, and phone number clicks increased by 770%.</P>

                  <DetailLabel>Contact Form</DetailLabel>
                  <P>Reference Data: October - November 2023 vs. August - September 2023</P>
                  <P>As seen in the image, organic search contributed to 37.5% of the contact form goals. We saw a decrease of 3.45% in our contact form conversion and we aim to improve these numbers as we go deeper into our campaigns.</P>

                  <DetailLabel>Phone Number Clicks</DetailLabel>
                  <P>Reference Data: October - November 2023 vs. August - September 2023</P>
                  <P>As seen in the image, organic search contributed to 6.7% of phone number click conversions. 5 phone call clicks came from organic search in October - November 2023 and we aim to improve these numbers as we go deeper into our campaigns.</P>

                  <SubHead>Google Search Console</SubHead>
                  <P>Reference Data: October - November 2023 vs. August - September 2023</P>
                  <P>Here are our Google Search Console metrics. Total clicks on the website increased by 25.77% and total impressions increased by 138.54% in October - November vs. August - September 2023.</P>

                  <SubHead>Local Search Grid</SubHead>
                  <P>Here are our local search grid results for the client in the past 6 months. As seen, our average map rank is 1.1</P>

                  <SubHead>Keywords</SubHead>
                  <P>We have also observed some significant improvement in the keywords we track. Some of them include:</P>
                  <BulletList items={[
                    "tree care company increased 7 positions in organic desktop and 16 positions in organic mobile",
                    "arborist naperville area increased by 4 positions in organic desktop and 7 positions in organic mobile",
                    "lawn care in western springs increased by 6 positions in organic mobile",
                    "tree service naperville increased by 2 positions in organic desktop and 5 positions in organic mobile",
                    "tree service increased by 5 positions in organic mobile",
                    "tree care increased by 5 positions in organic mobile",
                    "lawn and tree service increased by 15 positions in organic desktop and 4 positions in organic mobile",
                    "tree and lawn care services increased by 5 positions in organic desktop and 4 positions in organic mobile",
                    "lawn and tree care increased by 4 positions in organic desktop, 4 positions in organic mobile, and 3 positions in local finder",
                    "tree specialist increased by 3 positions in organic desktop and 4 positions in organic mobile",
                    "tree companies increased by 3 positions in organic desktop and 4 positions in organic mobile",
                    "tree care la grange park increased by 2 positions in organic desktop, 4 positions in organic mobile, and 2 positions in local finder",
                    "tree service western springs il increased by 2 positions in organic desktop, 2 positions in organic mobile, and 3 positions in local finder",
                    "tree pest treatment oak park increased by 3 positions in organic desktop and 1 positions in organic mobile",
                    "tree trimming naperville oak park increased by 1 positions in organic desktop and 1 positions in organic mobile",
                  ]} />

                  <SubHead>Google Business Profile</SubHead>

                  <CaseImage name="tree-lawn-traffic-acquisition-conversions.png" />
                  <CaseImage name="tree-lawn-contact-form.png" />
                  <CaseImage name="tree-lawn-phone-clicks-gsc.png" />
                  <CaseImage name="tree-lawn-local-grid.png" />
                  <CaseImage name="tree-lawn-keywords-gbp.png" />
                </CaseBlock>

                <CaseBlock title="Landscaping — Design-Build">
                  <DetailLabel>The client:</DetailLabel>
                  <P>This is a landscape design company specializing in residential backyard design-build projects.</P>
                  <DetailLabel>Niche:</DetailLabel>
                  <P>Design-Build Landscaping</P>
                  <DetailLabel>The Solution:</DetailLabel>
                  <P>We worked on revising the internal linking strategy on the site to push forward rankings for their main pages. We also added technical aspects, like advanced Schema Markup, to capture more real estate on the SERPs and attract high-quality traffic that will convert.</P>
                  <DetailLabel>The Results:</DetailLabel>
                  <P>Our efforts greatly impacted the organic traffic (year over year) and helped contribute to new and better keyword rankings.</P>
                  <CaseImage name="landscape-designbuild-traffic-growth.png" />
                  <CaseImage name="landscape-designbuild-keyword-table.png" />
                </CaseBlock>

                <CaseBlock title="Landscaping — Local SEO">
                  <SubHead>Summary</SubHead>
                  <P>Google Business Profile is an essential tool for optimizing local SEO and maximizing your online presence. Without leveraging its power, you may face significant challenges in achieving favorable search engine results. By claiming and optimizing your Google Business Profile listing, you can ensure that your business information is accurate, up-to-date, and readily available to potential customers. This not only boosts your visibility in local search results but also enhances your credibility and trustworthiness.</P>
                  <P>With your Google Business Profile waiting to be verified, results are limited. One major roadblock is the approval of content and other deliverables, and this also hinders us from achieving greater results as improvement on the website and content is limited. However, we are happy to inform you that despite these major roadblocks, we were able to increase some KPIs. We were also able to improve keyword rankings and have the following notable results:</P>
                  <BulletList items={[
                    "landscape maintenance companies near me - dominating organic desktop at rank 3 and organic mobile at rank 2",
                    "landscape installation ashland ky - dominating organic desktop at rank 1 and organic mobile at rank 1",
                    "ashland landscaping - dominating organic desktop at rank 2 and organic mobile at rank 2",
                    "landscape installation ashland ky - dominating organic desktop at rank 2 and organic mobile at rank 2",
                    "landscaping service russel - dominating organic desktop at rank 1 and organic mobile at rank 1",
                  ]} />

                  <SubHead>Google Analytics - GA4 KPIs</SubHead>
                  <P>From April to June 2023, we had a total of 260 users, and 256 of those were new users. Please take into consideration that we are encountering roadblocks in access and approval of deliverables along the way during this period.</P>

                  <DetailLabel>Traffic Acquisition</DetailLabel>
                  <DetailLabel>April vs. May</DetailLabel>
                  <P>Here is the traffic acquisition comparison for May 2023 vs. April 2023. As seen from the chart, the website's total users and sessions increased. The majority of these users and session counts came from direct visits. Your total average engagement time per session, engaged sessions per user, events per session, and engagement rate decreased. However, you can see a movement from organic search on these KPIs. For our organic search, we had a 40.63% change in engagement time per session, a 18.56% change in events per session, and a 25% change in engagement rate.</P>

                  <DetailLabel>May vs. June</DetailLabel>
                  <P>Here is the traffic acquisition comparison for June 2023 vs. May 2023. As seen from the chart, the website's total users, sessions, and engaged sessions decreased. However, you can see a good amount of movement from organic search on these KPIs. For our organic search, we had a 125% change in the number of users, a 53.33% change in the number of sessions, and a 30% change in engaged sessions.</P>

                  <SubHead>Google Search Console KPIs</SubHead>
                  <P>We recorded 7 total clicks and 692 total impressions from April to June 2022. Please take into consideration that we are encountering roadblocks in access and approval of deliverables along the way during this period.</P>

                  <DetailLabel>May vs. June</DetailLabel>
                  <P>We were also able to increase total impressions by 43.14%, from 227 total impressions last May to 334 total impressions in June. Clicks increased and the average position is now at 34.4 compared to May's average position of 39.2</P>

                  <DetailLabel>April vs. May</DetailLabel>
                  <P>Even with roadblocks still being encountered, we were able to increase total impressions by 73.28%, from 131 total impressions last April to 227 total impressions in May. Clicks were maintained and average position is now at 39.2 compared to April's average position of 43.9</P>

                  <SubHead>Google Search Console Queries</SubHead>
                  <P>Here are the top 10 queries for your website:</P>
                  <BulletList items={[
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
                  ]} />

                  <SubHead>Keyword Rankings</SubHead>
                  <P>Even with limited access and approvals still pending, we had a number of increased keywords for your website. Please check the image below for your reference.</P>
                  <P>We also had a number of ranking keywords including:</P>
                  <BulletList items={[
                    "landscape maintenance companies near me dominating organic desktop at rank 3 and organic mobile at rank 2",
                    "landscape installation ashland ky dominating organic desktop at rank 1 and organic mobile at rank 1",
                    "ashland landscaping dominating organic desktop at rank 2 and organic mobile at rank 2",
                    "landscape installation ashland ky dominating organic desktop at rank 2 and organic mobile at rank 2",
                    "landscaping service russel dominating organic desktop at rank 1 and organic mobile at rank 1",
                  ]} />

                  <SubHead>Major Roadblocks</SubHead>
                  <P>Our major roadblock had been the approval of deliverables.</P>
                  <BulletList items={[
                    "Approval of blogs and other deliverables",
                    "Access issues and verification of Google Business Profile.",
                  ]} />

                  <CaseImage name="landscape-local-roadblocks-summary.png" />
                  <CaseImage name="landscape-local-traffic-apr-may.png" />
                  <CaseImage name="landscape-local-traffic-may-june-gsc.png" />
                  <CaseImage name="landscape-local-gsc-growth.png" />
                  <CaseImage name="landscape-local-query-list.png" />
                  <CaseImage name="landscape-local-keyword-rankings.png" />
                </CaseBlock>
              </TabsContent>

              {/* ─── TAB 3: Home Remodeling ─── */}
              <TabsContent value="remodeling">
                <CaseBlock title="Home Renovation — Dallas">
                  <DetailLabel>Strategic Objective</DetailLabel>
                  <P>Increase local visibility and leads for a home renovation company in Dallas, TX.</P>

                  <DetailLabel>Initial Insight</DetailLabel>
                  <P>This client needed to increase their presence in their service area across the Dallas-Ft. Worth area in order to increase the quantity of leads coming in.</P>

                  <DetailLabel>Direction</DetailLabel>
                  <P>By optimizing their local listing and focusing on their two main services (kitchen remodeling and bathroom remodeling) we were able to increase the visibility of the Google My Business listing by 96.2%, and clicks to the website by 85.2% year over year.</P>
                  <P>The local optimizations worked in tandem with a strategic content plan, solid foundational research and implementation, and our technical SEO efforts. We manually created and implemented geographic markup that gave Google even more information about our location and services which led to a huge increase of ROI and profit for our client.</P>

                  <DetailLabel>Results</DetailLabel>
                  <P>Our efforts paid off, we saw a 151.8% increase in organic conversions year over year and a 393.3% increase in organic traffic year over year.</P>
                  <P>AI SEO Client Success - Home Renovations -</P>
                  <P>151.8% increase in organic conversions year over year. 393.3% increase in organic traffic year over year.</P>

                  <CaseImage name="renovation-dallas-growth-board.png" />
                </CaseBlock>

                <CaseBlock title="Home Remodeling — 2-Year Campaign">
                  <SubHead>Summary</SubHead>
                  <P>The client started with us in May of 2021. At present, we have already provided Local Search Engine Optimization (SEO) services for more than two years. Our local SEO strategy is an ever evolving effort, and we are proud to show a year-over-year (June 2022 - May 2023) comparison of our work from the previous year's efforts (June 2021 - May 2022).</P>
                  <P>The team has been diligently working behind the scenes to enhance your online presence, drive more organic traffic, and boost your rankings, and we are proud to show an improvement in the results we provide.</P>

                  <DetailLabel>Goal</DetailLabel>
                  <BulletList items={[
                    "Enhance Keyword Performance",
                    "Increase Engagement and Visibility",
                    "20-40% increase in conversions/goal completions",
                  ]} />

                  <SubHead>Notable Improvements</SubHead>
                  <P>Here are some notable improvements from both your website and Google My Business metrics:</P>
                  <BulletList items={[
                    "The total goal completion increased by 366.67%",
                    "The total goal completions from organic search (SEO) increased by 125%.",
                    "The total goal conversion rate increased by 304.78%",
                    "The goal conversion rate from organic search (SEO) increased by 161.62%",
                    "The total thank you goal increased by 960%",
                    "Phone calls tracked on the website increased by 88.89%",
                    "Google My Business calls increased by 15% in March - July 2023 vs. March - July 2022.",
                    "The total page views increased by 9.17%",
                    "The total unique page views increased by 11.38%",
                    "The average time on website pages increased by 13.66%",
                    "The exit rate improved by 5.60%.",
                    "Total website clicks from Google Search console increased 382.11%",
                    "The total website impressions from Google Search Console increased by 375.10%",
                    "The average Google position increased by 8 positions",
                    "There were 9 keyword movements",
                    "There were 82 gained positional movement",
                  ]} />

                  <SubHead>Google Analytics - KPIs</SubHead>

                  <DetailLabel>Leads and Conversions</DetailLabel>
                  <P>Here is how conversions improved between June 1, 2022, - May 31, 2023, vs. June 1, 2021, - May 31, 2022. As seen in the image below, overall goal completions, goal conversion rate, thank you goal, and phone call tracking increased. Our goal completion increased by 366.67%, our goal conversion rate increased by 304.78%, our thank you goal increased by 960%, and our phone call tracking increased by 88.89%.</P>
                  <P>From organic search, the goal conversion rate increased by 161.62%, and goal completions (the number of total conversions) increased by 125%.</P>

                  <DetailLabel>Traffic Acquisition</DetailLabel>
                  <P>Here is our traffic acquisition per channel. As seen on the image, total users increased by 15.57%, total new users increased by 16.09%, and total sessions increased by 15.29%. However, we saw a decrease for organic search for the number of users, new users, and sessions. Our team included a strategy at the end of this report to help increase these metrics.</P>

                  <DetailLabel>Page Views</DetailLabel>
                  <P>Page views and unique page views also increased. As seen in the image, page views increased by 9.17%, unique page views increased by 11.38%, average time on website pages increased by 13.66%, and the exit rate improved by 5.60%.</P>

                  <SubHead>Google Search Console KPIs</SubHead>
                  <P>We also saw a huge improvement in our Google Search Console KPIs. As seen in the image below, we saw a 382.11% increase in your website's total clicks and a 375.10% increase in the website's total impressions.</P>

                  <SubHead>Google Search Console Queries</SubHead>
                  <P>Here are the top 10 queries for your website:</P>
                  <BulletList items={[
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
                  ]} />

                  <SubHead>Keyword Rankings</SubHead>
                  <P>Over the past 12 months, we also saw improvements in our keyword rankings. Our average Google position increased by 8 positions, we had 9 keyword movements, and 82 gained positional movement.</P>
                  <P>Keyword Movement: The number of keywords that have moved. If a keyword has moved from 8th to 5th, this is counted as one (1) keyword movement up.</P>
                  <P>Positional Movement: The number of positions that your keywords have moved. If a keyword has moved from 8th to 5th, this is counted as three (3) positions gained.</P>
                  <P>Here is the current ranking of the keywords we track. As seen, we have a number of keywords ranking in the top 10 of organic desktop, organic mobile, local pack, and local finder. Your top keywords include:</P>
                  <BulletList items={[
                    '"high end remodeling" ranks 4th in organic desktop, 4th in organic mobile, 1st in local pack and 1st in local finder',
                    '"remodeling design services" ranks 4th in organic desktop, 7th in organic mobile, 1st in local pack, and 1st in local finder',
                    '"renovation design services" ranks 12th in organic desktop, 13th in organic mobile, 1st in local pack, and 1st in local finder',
                    '"design build bathroom remodel" ranks 16th in organic desktop, 17th in organic mobile, 1st in local pack, and 1st in local finder',
                    "Most of the near me keywords, like bathroom contractors near me, bathroom remodelers near me, kitchen design near me, and kitchen remodeling near me, are ranking 1st in both local pack and local finder.",
                  ]} />

                  <SubHead>Google My Business</SubHead>
                  <P>Note: Available data is from March 2023 to July 2023. We are pulling data directly from your Google My Business listing.</P>

                  <DetailLabel>Google My Business Calls</DetailLabel>
                  <P>Google My Business calls increased by 15% in March - July 2023 compared to March - July 2022.</P>

                  <CaseImage name="remodeling-2yr-ga-conversions.png" />
                  <CaseImage name="remodeling-2yr-traffic-acquisition.png" />
                  <CaseImage name="remodeling-2yr-pageviews-gsc.png" />
                  <CaseImage name="remodeling-2yr-gsc-queries.png" />
                  <CaseImage name="remodeling-2yr-keyword-movement.png" />
                  <CaseImage name="remodeling-2yr-top-keyword-table.png" />
                  <CaseImage name="remodeling-2yr-gmb-calls.png" />
                </CaseBlock>

                <CaseBlock title="Home Renovation — Ongoing Campaign">
                  <P>For close to a year, the client has held a special place in our SEO client roster. Despite the persistent challenges encountered in the home improvement industry, we are delighted to showcase the remarkable achievements that have arisen from our collaborative SEO efforts.</P>

                  <SubHead>Notable Contributions (SEO)</SubHead>
                  <BulletList items={[
                    "Organic search contributed to 754 or 27.66% of the total website users",
                    "Organic search contributed 739 or 27.12% of the total new users",
                    "Organic search contributed 952 or 31.69% of the total sessions",
                    "Organic search contributed 33 or 60% of the total thank you page completions.",
                    "Most of the keywords we track dominate the first and second rank in the local pack (map rankings)",
                  ]} />

                  <SubHead>Notable Improvement (SEO)</SubHead>
                  <BulletList items={[
                    "Total clicks for the whole duration of the campaign improved by 3.55% and total impressions improved by 7.56%. Average position also improved from 51.2 to 48.6.",
                  ]} />
                  <P>We also saw improvements in the following keywords:</P>
                  <BulletList items={[
                    "bathroom remodeling service increased by 1 rank in the local pack.",
                    "home design and remodeling service increased by 1 rank in the local pack.",
                    "home renovation increased by 1 rank in the local pack.",
                    "home renovation near me increased by 1 rank in the local pack.",
                    "design and remodeling increased by 2 ranks in the local finder",
                    "home renovation firm increased by 2 ranks in the local finder",
                    "bath remodeling service increased by 1 rank in the local finder",
                    "home design and remodeling increased by 1 rank in the local finder",
                    "home renovation increased by 1 rank in the local finder",
                    "remodeling and design increased by 1 rank in the local finder",
                  ]} />

                  <SubHead>Google Analytics</SubHead>

                  <DetailLabel>Traffic Acquisition</DetailLabel>
                  <P>Here is how organic search channel performed in terms of traffic acquisition in December 2022 - July 2023. Organic search contributed to 754 or 27.66% of the total website users, 739 or 27.12% of the total new users, 952 or 31.69% of the total sessions. Organic search also contributed 33 or 60% of the total thank you page completions.</P>

                  <DetailLabel>Behavior</DetailLabel>
                  <P>Total page views of the website is 5720 and unique page views totaled 5,021.</P>

                  <DetailLabel>Conversion</DetailLabel>
                  <P>The thank you page goal completions totaled to 55. 60% or 33 thank you page completions come from organic search.</P>

                  <SubHead>Google Search Console</SubHead>
                  <P>Total clicks for the whole campaign duration improved by 3.55%, and total impressions improved by 7.56%. The average position also improved from 51.2 to 48.6.</P>

                  <SubHead>Keywords</SubHead>
                  <P>We also saw some keyword improvement for most of your keywords. As seen in the image below, we have observed the following:</P>

                  <DetailLabel>Local Pack</DetailLabel>
                  <BulletList items={[
                    "bathroom remodeling service increased by 1 rank in the local pack.",
                    "home design and remodeling service increased by 1 rank in the local pack.",
                    "home renovation increased by 1 rank in the local pack.",
                    "home renovation near me increased by 1 rank in the local pack.",
                  ]} />

                  <DetailLabel>Local Finder</DetailLabel>
                  <BulletList items={[
                    "design and remodeling increased by 2 ranks in the local finder",
                    "home renovation firm increased by 2 ranks in the local finder",
                    "bath remodeling service increased by 1 rank in the local finder",
                    "home design and remodeling increased by 1 rank in the local finder",
                    "home renovation increased by 1 rank in the local finder",
                    "remodeling and design increased by 1 rank in the local finder",
                  ]} />

                  <P>Most of the keywords we track dominate the first and second rank in the local pack (map rankings):</P>

                  <CaseImage name="renovation-ongoing-ga-behavior.png" />
                  <CaseImage name="renovation-ongoing-conversion-gsc.png" />
                  <CaseImage name="renovation-ongoing-local-pack.png" />
                  <CaseImage name="renovation-ongoing-local-finder.png" />
                  <CaseImage name="renovation-ongoing-keyword-table.png" />
                </CaseBlock>
              </TabsContent>

              {/* ─── TAB 4: Cleaning ─── */}
              <TabsContent value="cleaning">
                <CaseBlock title="Cleaning Service — Atlanta">
                  <DetailLabel>Goals (6months)</DetailLabel>
                  <BulletList items={[
                    "Enhance Keyword Performance",
                    "Increase Engagement and Visibility",
                  ]} />

                  <DetailLabel>Action Plan</DetailLabel>
                  <BulletList items={[
                    "Extensive keyword research to find relevant keywords including competitive analysis",
                    "Optimize GMB profile from top to bottom",
                    "Built relevant niche and local citations",
                    "Optimized onsite for location signals",
                    "Post weekly on their GMB profile to increase additional signals",
                    "Evaluate the site's content silo for content strategy",
                    "Create and publish monthly blogs as supplementary content for target keywords",
                  ]} />

                  <SubHead>Notable Metrics</SubHead>
                  <BulletList items={[
                    "560 out of 1527, or 36.67% of the users, came from organic search",
                    "695 out of 1813, or 38.33% of the sessions, came from organic search",
                    "261.20% increase in total clicks in August - November vs. April - July 2023",
                    "868.02% increase in total impressions in August - November vs. April - July 2023",
                    "114.8% increase in GBP calls in August - November 2023 vs. August - November 2022",
                    "116.0% increase in GBP interactions in August - November 2023 vs. August - November 2022",
                    "119.3% increase in GBP website clicksin August - November 2023 vs. August - November 2022",
                    '"cleaning services Atlanta" keyword improved by 12 positions in organic desktop',
                    '"cleaning services Atlanta" keyword improved by 15 positions in organic mobile',
                    "increasing trend in our organic traffic for the last couple of months has been observed",
                    "good number of LSI keywords that the website has gained have been observed",
                  ]} />

                  <SubHead>Google Analytics</SubHead>

                  <DetailLabel>Google Analytics: Traffic Acquisition</DetailLabel>
                  <P>Here is our traffic from different channels in August - November 2023. As seen in the image below, 560 out of 1527, or 36.67% of the users, came from organic search. Additionally, 695 out of 1813, or 38.33% of the sessions, came from organic search.</P>

                  <DetailLabel>Ahrefs: Organic Traffic</DetailLabel>
                  <P>We also monitor organic traffic through a trusted third party tool, Ahrefs. As seen in the image, we can see an increasing trend in our organic traffic for the last couple of months.</P>

                  <SubHead>Google Search Console</SubHead>
                  <P>For our Google Search Console metrics, total clicks in August - November 2023 increased by 261.20% as compared to April - July 2023 impressions. Impressions also improved by 868.02% in August - November 2023 vs. April - July 2023.</P>

                  <SubHead>Keywords</SubHead>

                  <DetailLabel>Tracked Keywords</DetailLabel>
                  <P>For our tracked keywords, "cleaning services Atlanta" improved by 12 positions in organic desktop and 15 positions in organic mobile.</P>

                  <DetailLabel>Additional Keywords</DetailLabel>
                  <P>In Ahrefs, we also saw a good number of LSI keywords that the website has gained. LSI (latent semantic indexing) keywords are words that appear in similar contexts to a given keyword. We have included a list of additional keywords we gained below.</P>

                  <SubHead>Google Business Profile</SubHead>

                  <DetailLabel>Business Profile Interactions</DetailLabel>
                  <P>For Google Business Profile metrics, profile interactions increased by 116.0% in August - November 2023 as compared to last year's metrics.</P>

                  <DetailLabel>Calls</DetailLabel>
                  <P>Calls also increased in August - November 2023 by 114.8% compared to last year's GBP calls.</P>

                  <DetailLabel>Website Clicks</DetailLabel>
                  <P>Additionally, website clicks increased by 119.3% in August - November 2023 vs. August - November 2022.</P>

                  <CaseImage name="cleaning-ga-ahrefs.png" />
                  <CaseImage name="cleaning-gsc-keyword-table.png" />
                  <CaseImage name="cleaning-ahrefs-additional-keywords.png" />
                  <CaseImage name="cleaning-gbp-interactions-calls.png" />
                  <CaseImage name="cleaning-gbp-clicks.png" />
                </CaseBlock>
              </TabsContent>

              {/* ─── TAB 5: HVAC, Plumbing & Electrical ─── */}
              <TabsContent value="hvac">
                <CaseBlock title="HVAC — Sacramento">
                  <DetailLabel>Goals</DetailLabel>
                  <BulletList items={[
                    "Enhance Keyword Performance",
                    "Increase Engagement and Visibility",
                    "20-40% Lead Generation (combo of both GBP calls + onsite conversions (forms/calls depending on the tracking setup)",
                  ]} />

                  <DetailLabel>Action Plan</DetailLabel>
                  <BulletList items={[
                    "Extensive keyword research to find relevant keywords including competitive analysis",
                    "Optimize GMB profile from top to bottom",
                    "Built relevant niche and local citations",
                    "Optimized onsite for location signals",
                    "Post weekly on their GMB profile to increase additional signals",
                    "Evaluate the site's content silo for content strategy",
                    "Create and publish monthly blogs as supplementary content for target keywords",
                  ]} />

                  <P>We have used Ahrefs, a trusted third-party tool, to check a website's organic traffic performance. As seen, we have seen an increase in average organic traffic, average organic traffic value, and organic pages in April - July. In August, we saw a decline. This decline can be attributed to the recent August 2023 Core Update. To recover, we encourage updating pages with helpful content to improve the user experience on the website.</P>

                  <SubHead>Google Search Console</SubHead>
                  <P>Here is the website's Google Sarch Console metrics. In June - November 2023, total clicks increased by 30.23% and total impressions by 91.47%. The average position also improved from 42.6 to 38.7.</P>

                  <SubHead>Google Business Profile</SubHead>

                  <DetailLabel>GBP Profile Interactions</DetailLabel>
                  <P>In July - November 2023, Google Business Profile interactions increased by 5.5% as compared to interactions in July - November 2022.</P>

                  <DetailLabel>GBP Calls</DetailLabel>
                  <P>In July - November 2023, Google Business Profile calls increased by 4.8% as compared to calls in July - November 2022.</P>

                  <DetailLabel>GBP Direction Requests</DetailLabel>
                  <P>In July - November 2023, Google Business Profile direction requests increased by 58.7% as compared to direction requests in July - November 2022.</P>

                  <SubHead>Keyword</SubHead>

                  <DetailLabel>Tracked Keyword</DetailLabel>
                  <P>Here are the improvements to the keywords we track. As seen, we had the following keyword position increase:</P>
                  <BulletList items={[
                    "ac maintenance services increased by 21 positions in the local finder",
                    "ac installation service increased by 18 positions in the local finder",
                    "ac maintenance near me increased by 18 positions in local finder",
                    "ac service maintenance increased by 12 positions in local finder",
                    "ac repair services sacramento increased by 1 positions in local finder",
                  ]} />

                  <DetailLabel>LSI Keyword</DetailLabel>
                  <P>Additionally, here are the LSI keywords the website gained in addition to the ones we track. LSI (latent semantic indexing) keywords are words or phrases that are conceptually related to a target keyword.</P>

                  <CaseImage name="hvac-ga-ahrefs.png" />
                  <CaseImage name="hvac-gsc-gbp-interactions.png" />
                  <CaseImage name="hvac-gbp-calls-directions.png" />
                  <CaseImage name="hvac-tracked-keywords.png" />
                  <CaseImage name="hvac-lsi-keywords-1.png" />
                  <CaseImage name="hvac-lsi-keywords-2.png" />
                  <CaseImage name="hvac-lsi-keywords-3.png" />
                  <CaseImage name="hvac-lsi-keywords-4.png" />
                </CaseBlock>

                <CaseBlock title="HVAC & Plumbing — Fairbanks">
                  <SubHead>Synopsis</SubHead>
                  <P>This HVAC & Plumbing company was in dire need of leads when they came to us in May of 2021. In this industry, most leads are coming from GMB phone calls or Google Ads. We were brought on to improve their GMB visibility and lead generation.</P>

                  <DetailLabel>Goal</DetailLabel>
                  <P>Qualified Leads & Conversions</P>

                  <DetailLabel>Action Plan</DetailLabel>
                  <BulletList items={[
                    "Extensive keyword research to find relevant keywords including competitive analysis",
                    "Optimize GMB profile from top to bottom",
                    "Built relevant niche and local citations",
                    "Optimized onsite for location signals",
                    "Posted weekly on their GMB profile to increase additional signals",
                  ]} />

                  <DetailLabel>Outcome</DetailLabel>
                  <BulletList items={[
                    "Significant improvement for top service keywords",
                    "Core plumbing + location map pack rankings",
                    "1395.2% increase in phone calls",
                    "520% increase in GMB actions to the website",
                  ]} />

                  <CaseImage name="hvac-plumbing-summary-board.png" />
                </CaseBlock>

                <CaseBlock title="Electrical — Oahu">
                  <DetailLabel>Goal</DetailLabel>
                  <BulletList items={[
                    "Enhance Keyword Performance",
                    "Increase Engagement and Visibility",
                    "20-40% increase in conversions/goal completions",
                  ]} />

                  <DetailLabel>Action Plan</DetailLabel>
                  <BulletList items={[
                    "Extensive keyword research to find relevant keyword s including competitive analysis",
                    "Optimize GMB profile from top to bottom",
                    "Built relevant niche and local citations",
                    "Optimized onsite for location signals",
                    "Post weekly on their GMB profile to increase additional signals",
                    "Evaluate the site's content silo for content strategy",
                    "Create and publish monthly blogs as supplementary content for target keywords",
                  ]} />

                  <SubHead>Google Analytics</SubHead>

                  <DetailLabel>User Acquisition</DetailLabel>
                  <P>Date Range: December 2023–July 2024</P>
                  <P>Here are the user acquisition metrics for the client's website. As seen, organic search is the channel that brings the highest number of new users to the website. Out of 711 new users, organic search contributed 45.29% of the total new users. 44.02% of new users' engaged sessions also came from organic search.</P>

                  <DetailLabel>COMPARISON</DetailLabel>
                  <P>Date Range: December 2023–March 2024 vs. April 2024–July 2024</P>
                  <P>If we compare how our strategy improved, we can see an improvement in user acquisition metrics. Below is a comparison of the first half of the campaign vs. the second half of the campaign (December 2023–March 2024 vs. April 2024–July 2024). As seen, new users from organic search increased by 485.11%, and new users' engaged sessions from organic search increased by 218.97%.</P>

                  <DetailLabel>Traffic Acquisition</DetailLabel>
                  <P>Date Range: December 2023–July 2024</P>
                  <P>Here are the traffic acquisition metrics for the client's website. Similar to the user acquisition metrics, organic search is the channel that brings the highest number of users and sessions to the website. Out of 711 users and 901 sessions, organic search contributed 46.13% of the total users and 46.84% of the total sessions. Additionally, organic search also contributed to 47.10% of engaged sessions. 43.09% of the total events and 53.62% of the total key events also came from organic search.</P>

                  <DetailLabel>COMPARISON</DetailLabel>
                  <P>Date Range: December 2023–March 2024 vs. April 2024–July 2024</P>
                  <P>If we compare how our strategy improved, we can see an improvement in traffic acquisition metrics. Below is a comparison of the first half of the campaign versus the second half of the campaign (December 2023–March 2024 vs. April 2024–July 2024). As seen, users from organic search increased by 447.06%, sessions from organic search increased by 252.69%, and engaged sessions from organic search increased by 226.23%. Additionally, event counts improved by 851.94% and key events improved by 725%.</P>

                  <SubHead>Google Search Console</SubHead>

                  <DetailLabel>Clicks, Impressions, CTR and Position</DetailLabel>
                  <P>Date Range: December 2023–July 2024</P>
                  <P>Here are the Google Search Console metrics for the client's website. In December 2023–July 2024, the website recorded 240 total clicks, 4.86K total impressions, 4.9% average click-through rates and 23.1 average positions.</P>

                  <DetailLabel>COMPARISON</DetailLabel>
                  <P>Date Range: December 2023–March 2024 vs. April 2024–July 2024</P>
                  <P>If we compare how our strategy improved, we can see an improvement in the metrics measured in the Google Search Console. Below is a comparison of the first half of the campaign versus the second half of the campaign (December 2023–March 2024 vs. April 2024–July 2024). As seen, total clicks on the website increased by 63.73% from 91 to 149. Impressions of the website also increased by 185.71%, from 1.26K to 3.6K total impressions.</P>

                  <SubHead>Keywords</SubHead>
                  <P>Here is the average Google position from December 2023–July 2024. We have seen an increase in March.</P>

                  <DetailLabel>Organic Desktop Results (Tracked Keywords)</DetailLabel>
                  <P>Here are some recent improvements to the keywords we track. For organic desktop, we saw an increase in the following keywords:</P>
                  <BulletList items={[
                    "fan installation oahu increased by 5 positions on organic desktop",
                    "house fan installation oahu increased by 4 positions on organic desktop",
                    "light fixture installer oahu increased by 1 position on organic desktop",
                    "electrical service upgrades oahu increased by 1 position on organic desktop",
                    "electrical service upgrade oahu increased by 1 position on organic desktop",
                    "ceiling fan installation oahu increased by 1 position on organic desktop",
                  ]} />

                  <DetailLabel>Organic Mobile Results (Tracked Keywords)</DetailLabel>
                  <P>Here are some recent improvements to the keywords we track. For organic mobile, we saw an increase in the following keywords:</P>
                  <BulletList items={[
                    "fan installation oahu increased by 6 positions on organic mobile",
                    "house fan installation oahu increased by 3 positions on organic mobile",
                    "electrical service upgrades oahu increased by 2 positions on organic mobile",
                    "light fixture installer oahu increased by 1 position on organic mobile",
                    "light fixture installation oahu increased by 1 position on organic mobile",
                    "electrical panel replacement oahu increased by 1 position on organic mobile",
                    "electrical service upgrade oahu increased by 1 position on organic mobile",
                    "ceiling fan installation oahu increased by 1 position on organic mobile",
                  ]} />

                  <SubHead>Google Business Profile</SubHead>

                  <DetailLabel>Search and Map Views</DetailLabel>
                  <P>Date Range: March 2024–August 2024</P>
                  <P>Here are the metrics for the client's Google Business Profile listing. In March 2024–August 2024, the listing had 1.20K total views. Out of these total views, 444 came from desktop search view results, 641 came from mobile search view results, 104 came from desktop map view results, and 14K came from mobile map view results.</P>
                  <P>Additionally, the listing had 158 total business profile interactions. There were 124 total website clicks and 34 calls.</P>

                  <CaseImage name="electrical-ga-user-acquisition.png" />
                  <CaseImage name="electrical-comparison-traffic.png" />
                  <CaseImage name="electrical-comparison-gsc.png" />
                  <CaseImage name="electrical-gsc-position.png" />
                  <CaseImage name="electrical-desktop-keywords.png" />
                  <CaseImage name="electrical-mobile-keywords.png" />
                  <CaseImage name="electrical-gbp-views-actions.png" />
                </CaseBlock>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* ═══ SECTION 5: CTA ═══ */}
        <section className="py-24 relative">
          <div className="absolute inset-0 section-glow" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Want Similar Local SEO Results for Your Home Service Business?
              </h2>
              <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
                If your business depends on local search visibility, map presence, and conversion-focused website traffic, GrowSmallBiz can help you build a stronger local SEO foundation designed for measurable business growth.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 6: DISCLOSURE ═══ */}
        <section className="py-12 bg-card/30 border-t border-border">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground italic max-w-3xl mx-auto">
              These campaigns were executed in a white-label fulfillment capacity prior to the launch of GrowSmallBiz.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <ConsultationFormSection />
      </main>
      <Footer />
    </>
  );
};

export default LocalSEOHomeServices;
