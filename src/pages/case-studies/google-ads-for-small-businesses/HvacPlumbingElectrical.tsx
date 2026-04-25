import { Head } from "vite-react-ssg";
import { GoogleColoredText } from "@/components/GoogleColoredText";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Search,
  ChevronDown,
  MousePointerClick,
} from "lucide-react";
import { PdfViewer } from "@/components/PdfViewerWrapper";
import { useUtm } from "@/hooks/use-utm";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { PersonCTA } from "@/components/services";
import { FAQSection } from "@/components/sections/FAQSection";
import { createContactCTA } from "@/config/contactCTA";
import heroBg from "@/assets/case-studies-hvac-hero-bg.webp";

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

const GoogleAdsHvacPlumbingElectrical = () => {
  const { strategySessionUrl, freeAuditUrl } = useUtm();

  return (
    <>
      <Head>
        <title>HVAC Google Ads Case Study: How We Increased Leads & Revenue</title>
        <meta name="description" content="GrowSmallBiz helps HVAC contractors generate more calls and booked jobs with AI optimized Google PPC and LSA Ads. Schedule Strategy Call." />
        <meta name="keywords" content="HVAC marketing, Google Ads for HVAC, lead generation HVAC, PPC advertising HVAC, case study HVAC contractors, digital marketing HVAC, GrowSmallBiz, local service marketing" />
        <link rel="canonical" href="https://growsmallbiz.io/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/" />
      </Head>
      <ArticleJsonLd
        headline="How Google Ads Filled the Calendars of HVAC, Plumbing & Electrical Contractors"
        description="Explore documented Google PPC case study results for HVAC, plumbing, and electrical businesses."
        url="/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/"
        datePublished="2025-01-15"
        breadcrumbs={[
          { name: "Home Service Contractors", url: "/home-service-contractors/" },
          { name: "Google Ads", url: "/home-service-contractors/marketing-for-hvac-contractors/" },
          { name: "HVAC Google Ads Case Study", url: "/home-service-contractors/marketing-for-hvac-contractors/hvac-google-ads-case-study/" },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* ═══ HERO ═══ */}
        <ServiceHero
          badge={{ icon: MousePointerClick, text: "Case Studies / Google PPC" }}
          title="How Google Ads Filled the Calendars of HVAC, Plumbing & Electrical Contractors Businesses"
          subtitle="Explore documented Google PPC case study results for HVAC, plumbing, and electrical businesses. This page showcases real proof from paid search performance, lead generation, conversion efficiency, and cost-effective growth through Google Ads."
          primaryCTA={{ label: "Schedule Strategy Call", href: strategySessionUrl }}
          secondaryCTA={{ label: "Request a Website & SEO Audit", href: freeAuditUrl }}
          backgroundImage={heroBg}
          overlayOpacity={85}
        />

        {/* ═══ CROSS-LINK BANNER ═══ */}
        <section className="py-6 bg-card/50 border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-sm">
              Also see:{" "}
              <Link to="/home-service-contractors/marketing-for-hvac-contractors/hvac-seo-case-study/" className="text-primary hover:underline font-medium">
                Local SEO Case Studies for HVAC, Plumbing & Electrical →
              </Link>
            </p>
          </div>
        </section>

        {/* ═══ PPC SECTION HEADING ═══ */}
        <section className="pt-20 pb-4 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <MousePointerClick className="w-4 h-4" />
                <GoogleColoredText /> PPC Case Studies
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-heading bg-clip-text text-transparent">
                Google PPC Case Studies
              </h2>
              <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                This section highlights paid search campaign performance for HVAC, plumbing, and electrical businesses, with a focus on lead generation, conversion efficiency, and cost-effective growth through Google Ads.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ PPC SUMMARY PROOF CARDS ═══ */}
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
                    HVAC <GoogleColoredText /> PPC Growth
                  </h3>
                  <p className="text-xs text-primary-foreground/70">Google Ads Lead Generation Campaign</p>
                </div>
                <div className="p-5 flex-1">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Paid Ads Impact</h4>
                  <div className="space-y-3">
                    {[
                      "CTR → +50.23%",
                      "Conversions → +83%",
                      "Conversion Rate → +56.3%",
                      "CPA → -41%",
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
                      "Increased qualified lead volume",
                      "Improved conversion efficiency",
                      "Reduced cost per acquisition",
                      "Stronger campaign performance consistency",
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
                  HVAC <GoogleColoredText /> PPC Case Study
                </h3>
                <div className="space-y-6">
                  <DetailLabel>Synopsis</DetailLabel>
                  <P>
                    In the dynamic landscape of HVAC services, an industry player sought to amplify its digital footprint and connect with a broader audience. The objective was clear: leverage Google Ads to strategically position its services, captivate potential clients, and foster meaningful engagements.
                  </P>

                  <DetailLabel>Challenges</DetailLabel>
                  <P>
                    The primary objective was to enhance online visibility, attract qualified leads, reduce the average CPC &amp; CPA, and improve conversion rates through the company's website. For any new campaign, we request to wait for 45 days for the campaign to start performing as Google's algorithm takes time to collect data and we get a clear picture of how and what needs to be done for that campaign. For a campaign far lower than the suggested budget can take a bit more time for data collection. This can be applied to an old campaign as well if the campaign needs to be rebuilt or significant changes are needed to be made for that campaign.
                  </P>

                  <DetailLabel>Objective</DetailLabel>
                  <P>
                    The overarching goal was to augment brand exposure, cultivate high-quality leads, and ultimately drive conversions for HVAC services.
                  </P>

                  <DetailLabel>Campaign Strategy</DetailLabel>

                  <SubHead>Keyword Precision</SubHead>
                  <P>
                    Meticulously researched and selected keywords were instrumental in ensuring the ads surfaced during relevant searches, targeting users actively seeking HVAC solutions.
                  </P>

                  <SubHead>Geographic Focus</SubHead>
                  <P>
                    Tailored campaigns were deployed with a keen focus on areas exhibiting a heightened demand for HVAC services. This approach optimized the campaign for specific regions, maximizing impact within the designated budget.
                  </P>

                  <SubHead>Compelling Ad Copy</SubHead>
                  <P>
                    Compelling ad copy was crafted to highlight the company's unique value propositions, aiming to capture users' attention and entice them to click through to the website.
                  </P>

                  <SubHead>Ad Extensions Integration</SubHead>
                  <P>
                    Implemented diverse ad extensions, such as site-link extensions and callout extensions, to furnish additional information and encourage user interaction.
                  </P>

                  <SubHead>Targeted Campaigns</SubHead>
                  <P>
                    The campaigns were segmented to target specific demographics and interests, ensuring that the ads reached the most relevant audience likely to convert.
                  </P>

                  <SubHead>Continuous Refinement through A/B Testing</SubHead>
                  <P>
                    Regular A/B testing facilitated the refinement of ad copies, visuals, and landing pages based on real-time data. This iterative approach ensured that the campaign evolved in response to user preferences.
                  </P>

                  <SubHead>Continuous Optimization</SubHead>
                  <P>
                    The campaign performance was regularly monitored, and adjustments were made based on insights gathered from data analytics. This included refining targeting parameters, testing different ad creatives, and bidding strategy.
                  </P>

                  <DetailLabel>Results</DetailLabel>

                  <SubHead>Notable Click-Through Rate Increase</SubHead>
                  <P>
                    The optimized campaign witnessed a substantial boost in the Click-Through Rate (CTR), signifying heightened engagement from users actively interested in HVAC services. CTR was increased by 50.23%.
                  </P>

                  <SubHead>Robust Lead Generation</SubHead>
                  <P>
                    The Google Ads initiative yielded a significant uptick in qualified leads, showcasing a genuine interest from users in exploring the featured HVAC services. Our approach resulted in an 83% increase in total conversions.
                  </P>

                  <SubHead>Enhanced Conversion Rates</SubHead>
                  <P>
                    Ongoing refinement through A/B testing contributed to a marked improvement in conversion rates, translating into a higher volume of clients actively seeking HVAC services. The conversion rate was increased by 56.3%.
                  </P>

                  <SubHead>Cost-Effective Acquisition</SubHead>
                  <P>
                    Strategic targeting and continuous optimization led to a cost-effective outcome, ensuring a positive return on investment for the advertising budget. CPA decreased by 41% from the time frame including both phone calls and form submissions before our thorough account reorganization.
                  </P>

                  <SubHead>Results Obtained For an HVAC Company in Florida</SubHead>
                  <P>From August 25, 2022, to January 24, 2023:</P>
                  <BulletList
                    items={[
                      "Clicks: 546",
                      "Conversions: 158",
                      "CPA: $36.80",
                      "Conversion rate: 28.94%",
                      "Avg. CPC: $10.65",
                    ]}
                  />

                  <DetailLabel>Conclusion</DetailLabel>
                  <P>
                    This Google Ads campaign exemplifies the effectiveness of PPC strategies within the HVAC sector. By strategically navigating the online landscape, the campaign successfully elevated the visibility of HVAC services, fostering engagement, and driving growth in a competitive industry.
                  </P>

                  <PdfBlock src="/case-studies/ppc-hvac-case-study.pdf" />

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

        {/* ═══ FAQ SECTION ═══ */}
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about how GrowSmallBiz approaches Google PPC strategy for HVAC, plumbing, and electrical businesses."
          faqs={[
            { question: "Can GrowSmallBiz create a similar Google Ads strategy for my HVAC, plumbing, or electrical business?", answer: "Yes. Every business starts from a different baseline, market, service area, level of competition, and budget, so no two campaigns are identical. But the same strategic thinking behind these case studies can be adapted to your business. GrowSmallBiz builds tailored paid ads strategies around your goals, your market, and the specific opportunities available in your service area.\n\nWe conduct a complimentary audit to determine what could be realistically possible, cost and ROI before we undertake any assignment." },
            { question: "Can Google PPC help HVAC businesses generate leads faster?", answer: "Yes. Google PPC enables immediate visibility for high-intent searches, helping generate qualified leads quickly while supporting broader marketing efforts." },
            { question: "How long does it take to see results from Google PPC?", answer: "Google PPC can generate results quickly, though we recommend waiting at least 45 days for the campaign to start performing as Google's algorithm takes time to collect data." },
            { question: "How much do PPC services cost?", answer: "PPC pricing can vary widely, but the lowest-cost option is rarely the one that produces the best business outcome. The real investment depends on your market, competition, service area, goals, and how much strategy, execution, tracking, and optimization are required to generate profitable growth.\n\nWe begin with a complimentary audit to determine what could be realistically possible, the likely cost, and the ROI potential before we recommend any assignment." },
            { question: "Do you offer a performance guarantee?", answer: "Yes. If GrowSmallBiz does not deliver the agreed-upon performance within the agreed-upon time frame, we will continue working for free until we do. No questions asked." },
            { question: "Can you review my current Google Ads performance?", answer: "Yes. You can request a website and SEO audit or book a strategy session to identify improvement opportunities in your paid search campaigns." },
          ]}
          contactCTA={createContactCTA({
            title: "Need Better Lead Flow from Google Ads?",
            description: "If your HVAC, plumbing, or electrical business depends on calls, form fills, and high-intent search traffic, GrowSmallBiz can help identify where Google PPC improvements can drive better results.",
            tagline: "Get clarity on your ad spend, conversion performance, and growth potential.",
          })}
        />

        {/* ═══ CONCLUSION SECTION ═══ */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 bg-gradient-heading bg-clip-text text-transparent">
                What This Case Study Shows
              </h2>
              <div className="space-y-6 text-foreground/85 leading-relaxed text-lg">
                <p>
                  This case study demonstrates how a structured Google Ads strategy can deliver measurable improvements in click-through rates, conversions, and cost efficiency for HVAC businesses.
                </p>
                <p>
                  The goal is not just visibility — it is connecting that visibility to real business outcomes through qualified leads and cost-effective acquisition.
                </p>
              </div>

              <p className="mt-8 text-muted-foreground text-sm leading-relaxed">
                If you want to understand how these approaches could apply to your business, the next step is a focused review of your current ad performance, competition, and conversion path.
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

        <ConsultationFormSection />
      </main>
      <Footer />
    </>
  );
};

export default GoogleAdsHvacPlumbingElectrical;
