import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GoogleColoredText } from "@/components/GoogleColoredText";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Search,
  ChevronDown,
  MousePointerClick,
} from "lucide-react";
import { PdfViewer } from "@/components/PdfViewerWrapper";
import { useUtm } from "@/hooks/use-utm";
import { ServiceHero } from "@/components/services/ServiceHero";
import dentalHero from "@/assets/case-study-dental-hero.webp";
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

const ppcSummaryCards = [
  { metric: "+175.51%", label: "Conversions YOY", subtext: "135 vs 49" },
  { metric: "-64.62%", label: "Cost Per Acquisition", subtext: "$39.81 vs $112.52" },
  { metric: "+187.04%", label: "Conversion Rate", subtext: "26.89% vs 9.37%" },
];

const DentalCaseStudy = () => {
  const { strategySessionUrl, freeAuditUrl } = useUtm();

  return (
    <>
      <Head>
        <title>Dental SEO Case Study: Real Results for Practices | GrowSmallBiz</title>
        <meta name="description" content="Documented Google Ads results for a dental practice — conversions, cost-per-acquisition, conversion rate, and CTR improvements year-over-year." />
        <link rel="canonical" href="https://growsmallbiz.io/health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study/" />
      </Head>
      <ArticleJsonLd
        headline="Real Results for Dental Practices — Not Projections"
        description="Documented Google Ads results for a dental practice — conversions, cost-per-acquisition, conversion rate, and CTR improvements year-over-year."
        url="/health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study/"
        datePublished="2025-01-15"
        breadcrumbs={[
          { name: "Health & Wellness", url: "/health-and-wellness-practices/" },
          { name: "Dental Marketing", url: "/health-and-wellness-practices/marketing-for-dentists/" },
          { name: "Case Study", url: "/health-and-wellness-practices/marketing-for-dentists/dental-seo-case-study/" },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <ServiceHero
          badge={{ icon: MousePointerClick, text: "Case Studies / Google PPC" }}
          title="Real Results for Dental Practices — Not Projections"
          subtitle="Explore documented Google Ads campaign results for a dental practice. Real campaign data — conversion volume, cost-per-acquisition, conversion rate, and click-through rate performance."
          primaryCTA={{ label: "Schedule Strategy Call", href: strategySessionUrl }}
          secondaryCTA={{ label: "Request a Website & SEO Audit", href: freeAuditUrl }}
          backgroundImage={dentalHero}
          overlayOpacity={85}
        />

        {/* SINGLE NAV BUTTON */}
        <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 py-3">
              <button className="px-5 py-2.5 rounded-full text-sm font-display font-semibold bg-primary text-primary-foreground shadow-md">
                <MousePointerClick className="inline-block w-4 h-4 mr-2 -mt-0.5" /><GoogleColoredText /> PPC Results
              </button>
            </div>
          </div>
        </div>

        {/* PPC SECTION HEADING */}
        <section className="pt-20 pb-4 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <MousePointerClick className="w-4 h-4" /><GoogleColoredText /> PPC Case Studies
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                <GoogleColoredText /> Ads <span className="text-transparent bg-clip-text bg-gradient-primary">Case Studies</span>
              </h2>
              <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                This section highlights paid search campaign performance for a dental practice, with a focus on lead generation efficiency, cost-per-acquisition, conversion volume, and year-over-year improvement.
              </p>
            </div>
          </div>
        </section>

        {/* PPC SUMMARY CARDS */}
        <section className="py-16 relative">
          <div className="absolute inset-0 section-glow" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {ppcSummaryCards.map((card, index) => (
                <div key={index} className="text-center p-6 bg-card border border-border rounded-2xl card-hover">
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{card.metric}</div>
                  <p className="text-foreground font-medium mb-1">{card.label}</p>
                  <p className="text-sm text-muted-foreground">({card.subtext})</p>
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
                  Dental Practice <GoogleColoredText /> Ads — Concord, CA
                </h3>
                <div className="space-y-6">
                  <DetailLabel>Problem</DetailLabel>
                  <P>This dental practice was heavily investing in Google Ads but not achieving efficient results. The main focus was getting non-branded conversions for general dentistry and attracting high-value patients needing implants (all-in-4 treatment at approximately $17,000 per case).</P>

                  <DetailLabel>Goals</DetailLabel>
                  <BulletList items={[
                    "Increase total number of leads",
                    "Improve proportion of high-value implant and all-in-4 inquiries",
                    "Reduce cost-per-acquisition",
                  ]} />

                  <DetailLabel>Campaign Strategy</DetailLabel>
                  <BulletList items={[
                    "Full audit of existing Google Ads account — identified ad spend waste and bidding inefficiencies",
                    "Rebuilt general dentistry campaign with stronger CTAs for higher CTR",
                    "Created call-only campaign to drive direct phone call conversions",
                    "Built dedicated implants and all-in-4 campaign for high-value patients",
                    "Implemented extensive negative keyword list to eliminate irrelevant clicks",
                    "Tested ad extensions to identify highest-performing combinations",
                  ]} />

                  <SubHead>Q4 Year-Over-Year Results</SubHead>
                  {/* Results Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 text-foreground font-semibold">Metric</th>
                          <th className="text-left py-3 px-4 text-foreground font-semibold">Prior Year Q4</th>
                          <th className="text-left py-3 px-4 text-foreground font-semibold">Current Q4</th>
                          <th className="text-left py-3 px-4 text-foreground font-semibold">Change</th>
                        </tr>
                      </thead>
                      <tbody className="text-foreground/85">
                        <tr className="border-b border-border/50"><td className="py-3 px-4">Conversions</td><td className="py-3 px-4">49</td><td className="py-3 px-4">135</td><td className="py-3 px-4 text-primary font-semibold">+175.51%</td></tr>
                        <tr className="border-b border-border/50"><td className="py-3 px-4">Cost Per Acquisition</td><td className="py-3 px-4">$112.52</td><td className="py-3 px-4">$39.81</td><td className="py-3 px-4 text-primary font-semibold">-64.62%</td></tr>
                        <tr className="border-b border-border/50"><td className="py-3 px-4">Conversion Rate</td><td className="py-3 px-4">9.37%</td><td className="py-3 px-4">26.89%</td><td className="py-3 px-4 text-primary font-semibold">+187.04%</td></tr>
                        <tr className="border-b border-border/50"><td className="py-3 px-4">Account CTR</td><td className="py-3 px-4">1.68%</td><td className="py-3 px-4">3.82%</td><td className="py-3 px-4 text-primary font-semibold">+127.25%</td></tr>
                        <tr className="border-b border-border/50"><td className="py-3 px-4">Phone Calls</td><td className="py-3 px-4">Baseline</td><td className="py-3 px-4">194</td><td className="py-3 px-4 text-primary font-semibold">+223.33%</td></tr>
                        <tr><td className="py-3 px-4">Total Ad Spend</td><td className="py-3 px-4">—</td><td className="py-3 px-4">$5,487.27</td><td className="py-3 px-4">—</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <SubHead>Verified Key Takeaway</SubHead>
                  <P>Campaign restructuring, call-only strategy, and negative keyword management more than doubled conversions while cutting cost-per-acquisition by nearly two-thirds. The implants and all-in-4 campaign created a new high-value lead stream.</P>

                  <PdfBlock src="/case-studies/Google-PPC-Dental_-Case-Study-Concord-CA.pdf" title="View Full PPC Case Study Report" />
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

        {/* FAQ */}
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about dental marketing case studies and strategy."
          faqs={[
            { question: "Can GrowSmallBiz create a similar strategy for my dental practice?", answer: "Yes. Every dental practice starts from a different baseline. The same strategic approach behind this case study can be adapted to your practice. We conduct a complimentary audit to determine what could be realistically possible, cost and ROI before we undertake any assignment." },
            { question: "How much do Google Ads services cost?", answer: "Pricing depends on your market, competition, service area, goals, and how much strategy, execution, tracking, and optimization are required. We begin with a complimentary audit to determine the likely cost and ROI potential before we recommend any assignment." },
            { question: "Do you offer a performance guarantee?", answer: "Yes. If GrowSmallBiz does not deliver the agreed-upon performance within the agreed-upon time frame, we will continue working for free until we do. No questions asked." },
          ]}
          contactCTA={createContactCTA({
            title: "Need Better Lead Flow for Your Dental Practice?",
            description: "GrowSmallBiz can help identify where Google Ads improvements can drive more patient bookings.",
            tagline: "Get clarity on your conversion performance and ad spend efficiency.",
          })}
        />

        {/* CONCLUSION */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                What This <span className="text-transparent bg-clip-text bg-gradient-primary">Case Study</span> Shows
              </h2>
              <div className="space-y-6 text-foreground/85 leading-relaxed text-lg">
                <p>This dental practice case study demonstrates how a structured Google Ads strategy — combining campaign restructuring, call-only campaigns, and negative keyword management — can dramatically improve conversion volume while cutting acquisition costs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PERSON CTA */}
        <PersonCTA
          title="Ready to Grow Your Dental Practice?"
          description="Schedule a strategy call to see how Google Ads optimization can drive more patients to your practice."
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

export default DentalCaseStudy;
