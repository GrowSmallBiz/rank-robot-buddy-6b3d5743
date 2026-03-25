import { Head } from "vite-react-ssg";
import { useUtm } from "@/hooks/use-utm";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { baseContactCTA } from "@/config/contactCTA";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeader } from "@/components/services/SectionHeader";
import {
  LinkIcon,
  ArrowRight,
  Shield,
  Target,
  FileText,
  Globe,
  TrendingUp,
  CheckCircle2,
  Layers,
  Users,
  Bot,
  Award,
  BarChart3,
  Newspaper,
  Building2,
  Sparkles,
  Network,
  Search,
  Handshake,
  BookOpen,
} from "lucide-react";

const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";
const SECONDARY_CTA_BASE = "https://lp.growsmallbiz.io/growsmallbiz-seo-optimization-page";

const linkBuildingServices = [
  {
    icon: Newspaper,
    title: "Press Release Distribution",
    description: "Premium press release creation and national distribution to earn high-authority media citations and brand mentions.",
  },
  {
    icon: BookOpen,
    title: "Guest Content Placements",
    description: "Expert-authored content placed on relevant industry publications and authoritative websites in your niche.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnership Links",
    description: "Building genuine relationships with complementary businesses, associations, and industry organizations for natural link placements.",
  },
  {
    icon: Globe,
    title: "Local Citation Building",
    description: "Consistent NAP citations across directories, chambers of commerce, and local business platforms to strengthen local link profiles.",
  },
  {
    icon: FileText,
    title: "Linkable Asset Creation",
    description: "Creating high-value resources, guides, tools, and data-driven content that naturally attract editorial links from authoritative sources.",
  },
  {
    icon: Network,
    title: "Digital PR & Outreach",
    description: "Strategic outreach to journalists, bloggers, and industry influencers to earn editorial coverage and contextual backlinks.",
  },
];

const whyGSBItems = [
  {
    icon: Target,
    title: "Built for Local Service Businesses",
    description: "Link building strategies designed specifically for local markets where relevance and geographic authority matter most.",
  },
  {
    icon: Shield,
    title: "White-Hat Only Approach",
    description: "Every link is earned through legitimate methods — press coverage, expert placements, editorial citations, and genuine relationships.",
  },
  {
    icon: Layers,
    title: "Quality Over Quantity",
    description: "We prioritize high-relevance, high-authority placements over volume. One great link outperforms dozens of low-quality ones.",
  },
  {
    icon: Bot,
    title: "AI-Enhanced Research & Outreach",
    description: "AI-powered workflows identify the best link opportunities while human judgment ensures every placement meets quality standards.",
  },
  {
    icon: Users,
    title: "Fully Managed Execution",
    description: "From prospecting through outreach, content creation, and placement — we handle the entire link building process for you.",
  },
  {
    icon: TrendingUp,
    title: "Part of a Complete SEO System",
    description: "Link Building integrates with Authority Building, AEO, GEO, and Local SEO so every pillar reinforces the others.",
  },
];

const faqs = [
  {
    question: "What types of links does GrowSmallBiz build?",
    answer: "We earn links through press releases, guest content placements, digital PR outreach, strategic partnerships, local citations, and linkable asset creation. Every link comes from a legitimate, white-hat method aligned with search engine guidelines.",
  },
  {
    question: "How is Link Building different from Authority Building?",
    answer: "Link Building focuses specifically on earning external backlinks from other websites. Authority Building is a broader strategy that includes link building alongside topical depth, entity clarity, brand presence, and content ecosystems. Link Building is one essential component within the Authority Building framework.",
  },
  {
    question: "How long does it take to see results from link building?",
    answer: "Link building is a long-term investment. Most businesses begin seeing measurable impact within 2-4 months, with results compounding over time as your link profile grows stronger and more diverse.",
  },
  {
    question: "Do you buy links or use link farms?",
    answer: "Absolutely not. GrowSmallBiz only earns links through legitimate methods — press coverage, expert placements, editorial citations, partnerships, and content that naturally attracts links. We never purchase links or use tactics that violate search engine guidelines.",
  },
  {
    question: "How do you choose which websites to target for links?",
    answer: "We evaluate potential link sources based on domain authority, topical relevance, geographic relevance for local businesses, editorial quality, and audience alignment. Every target is vetted before outreach begins.",
  },
  {
    question: "Can link building help with local SEO rankings?",
    answer: "Yes. Links from locally relevant sources — chambers of commerce, local news outlets, community organizations, and regional industry publications — are powerful signals for local search rankings and Google Business Profile visibility.",
  },
  {
    question: "What is a linkable asset?",
    answer: "A linkable asset is a high-value piece of content — such as an industry guide, data report, interactive tool, or comprehensive resource — designed to be so useful that other websites naturally want to reference and link to it.",
  },
  {
    question: "How do you report on link building progress?",
    answer: "We provide regular reporting showing new links earned, domain authority of linking sites, anchor text distribution, referring domain growth, and the impact on your search rankings and organic traffic.",
  },
  {
    question: "Is link building still important in 2025 with AI search?",
    answer: "Yes. While AI search systems evaluate many signals, backlinks remain one of the strongest indicators of trust and authority. AI systems like Google's SGE and other answer engines still heavily weight the credibility signals that quality links provide.",
  },
  {
    question: "Can I do link building myself?",
    answer: "You can, but effective link building requires significant time, expertise, relationships, and tools. Most local service business owners find that the time investment needed to do it well takes away from running their business. GrowSmallBiz handles the entire process so you can focus on what you do best.",
  },
];

const LinkBuilding = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");
  const SECONDARY_CTA_URL = buildUrl(SECONDARY_CTA_BASE, "free-seo-audit");

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Link Building for Local Service Businesses | GrowSmallBiz</title>
        <meta name="description" content="GrowSmallBiz earns high-quality backlinks for local service businesses through press releases, guest placements, digital PR, strategic partnerships, and linkable asset creation." />
        <link rel="canonical" href="https://growsmallbiz.io/services/managed-ai-seo/link-building" />
      </Head>

      <ServiceJsonLd
        serviceName="Link Building for Local Service Businesses"
        serviceType="Link Building SEO"
        description="Strategic link building for local service businesses through press releases, guest placements, digital PR, partnerships, and linkable asset creation."
        url="/services/managed-ai-seo/link-building"
        breadcrumbs={[
          { name: "Services", url: "/services" },
          { name: "Managed AI SEO", url: "/services/managed-ai-seo" },
          { name: "Link Building", url: "/services/managed-ai-seo/link-building" },
        ]}
      />

      <Header />

      <main>
        {/* HERO */}
        <ServiceHero
          badge={{ icon: LinkIcon, text: "Link Building for Local Service Businesses" }}
          title={<>Earn the Backlinks That Build{" "}<br className="hidden md:inline" /></>}
          titleHighlight="Real Authority"
          subtitle="In competitive local markets, the businesses that rank highest are not always the ones with the best websites — they are the ones with the strongest trust signals. Quality backlinks remain one of the most powerful ranking factors in both traditional search and AI-powered search systems.<br/><br/>GrowSmallBiz earns high-quality, relevant backlinks for local service businesses through legitimate methods — press releases, expert placements, digital PR, strategic partnerships, and content that naturally attracts links."
          primaryCTA={{
            label: "Schedule Strategy Session",
            href: PRIMARY_CTA_URL,
            variant: "hero",
            external: true,
          }}
          secondaryCTA={{
            label: "Free SEO Audit",
            href: SECONDARY_CTA_URL,
            variant: "heroOutline",
            external: true,
          }}
          overlayOpacity={85}
        />

        {/* SECTION 2 — WHY LINKS STILL MATTER */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE FUNDAMENTALS</p>
                <h2 className="section-title">
                  Why Link Building Still Matters in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Modern Search</span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up">
                <p>
                  Despite the evolution of search algorithms and the rise of AI-powered search, backlinks remain one of the strongest signals of trust and authority. When reputable websites link to your business, search engines interpret that as a vote of confidence in your expertise.
                </p>
                <p>
                  For local service businesses, links from locally relevant sources — industry publications, chambers of commerce, local news outlets, and community organizations — carry even more weight because they signal both topical authority and geographic relevance.
                </p>

                <div className="rounded-2xl p-6 space-y-4 border-l-4 border-primary" style={{ backgroundColor: 'hsl(210 40% 16%)' }}>
                  <p className="text-foreground leading-relaxed">
                    <strong>GrowSmallBiz earns links the right way.</strong> No purchased links, no link farms, no shortcuts that put your business at risk. Every link we build is earned through genuine value — press coverage, expert content, strategic relationships, and resources worth referencing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — THE IMPACT */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE IMPACT</p>
                <h2 className="section-title">
                  What Quality Links Do for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Your Business</span>
                </h2>
              </div>

              <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {[
                  { icon: TrendingUp, title: "Higher Rankings", text: "Quality backlinks are a direct ranking factor — they tell search engines your content deserves to rank." },
                  { icon: Globe, title: "Referral Traffic", text: "Links from relevant websites drive qualified visitors directly to your business." },
                  { icon: Award, title: "Brand Credibility", text: "Being referenced by trusted publications and industry sources builds instant credibility with prospects." },
                  { icon: Sparkles, title: "AI Search Visibility", text: "AI systems and answer engines prioritize sources with strong backlink profiles as signals of trustworthiness." },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-6 border-l-4 border-primary animate-fade-up"
                    style={{ backgroundColor: 'hsl(210 40% 16%)', animationDelay: `${i * 0.05}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHAT WE DO */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <p className="section-subtitle">OUR LINK BUILDING METHODOLOGY</p>
              <h2 className="section-title">
                How GrowSmallBiz Builds{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Quality Links</span>
              </h2>
              <p className="section-description mt-4">Every link we earn is the result of a strategic, multi-channel approach designed specifically for local service businesses.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {linkBuildingServices.map((service, index) => (
                <GlowCard
                  key={index}
                  className="p-6 animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — OUR PROCESS */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <p className="section-subtitle">THE PROCESS</p>
                <h2 className="section-title">
                  Our Link Building{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-primary italic">Process</span>
                </h2>
              </div>

              <div className="space-y-0 max-w-3xl mx-auto">
                {[
                  { icon: Search, num: "01", title: "Link Profile Audit & Gap Analysis", desc: "We analyze your current backlink profile, identify gaps, and benchmark against competitors to build a targeted strategy." },
                  { icon: Target, num: "02", title: "Prospect Identification & Vetting", desc: "AI-enhanced research identifies high-value link targets based on domain authority, relevance, and geographic alignment." },
                  { icon: FileText, num: "03", title: "Content Creation & Asset Development", desc: "We create compelling content — press releases, guest articles, linkable resources — designed to earn placements." },
                  { icon: Handshake, num: "04", title: "Strategic Outreach & Relationship Building", desc: "Personalized outreach to journalists, editors, partners, and industry contacts to secure quality placements." },
                  { icon: BarChart3, num: "05", title: "Monitoring & Reporting", desc: "Ongoing tracking of new links earned, link quality metrics, and the impact on your rankings and organic traffic." },
                ].map((step, i) => (
                  <div key={i}>
                    <div className="animate-fade-up rounded-2xl p-8 bg-background/60 border border-border/50" style={{ animationDelay: `${i * 0.1}s` }}>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-start gap-3">
                        <span className="text-primary font-mono text-lg mt-0.5">{step.num}</span>
                        <step.icon className="w-6 h-6 text-primary mt-1 shrink-0" />
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed pl-16">{step.desc}</p>
                    </div>
                    {i < 4 && <div className="border-b border-primary/10 mx-8" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — WHY GROWSMALLBIZ */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <p className="section-subtitle">WHY GROWSMALLBIZ</p>
              <h2 className="section-title">
                Why Local Businesses Choose GrowSmallBiz for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Link Building</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyGSBItems.map((item, i) => (
                <GlowCard
                  key={i}
                  className="p-6 animate-fade-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-up">
              <h2 className="section-title mb-4">
                Ready to Build a Link Profile That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Drives Real Results?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let GrowSmallBiz build the backlinks your business needs to outrank competitors and earn trust from both search engines and customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href={PRIMARY_CTA_URL} target="_blank" rel="noopener noreferrer">
                    Schedule Strategy Session <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href={SECONDARY_CTA_URL} target="_blank" rel="noopener noreferrer">
                    Free SEO Audit
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* LINK TO AUTHORITY BUILDING */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl p-8 border-l-4 border-primary animate-fade-up" style={{ backgroundColor: 'hsl(210 40% 16%)' }}>
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Link Building Is Part of a Bigger Picture
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Link Building is one essential component of GrowSmallBiz's broader <strong className="text-foreground">Authority Building</strong> service. While quality backlinks are critical, true search authority requires topical depth, entity clarity, brand presence, and a coordinated content ecosystem. Explore how all the pieces work together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/services/managed-ai-seo/authority-building">
                      Explore Authority Building <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="heroOutline" size="lg" asChild>
                    <Link to="/services/managed-ai-seo">
                      View All Managed AI SEO Services
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={faqs} />

        {/* FINAL CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-up">
              <h2 className="section-title mb-4">
                Stop Losing Rankings to Competitors with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary italic">Stronger Link Profiles</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Your competitors are earning links. Your market is getting more competitive. The businesses that invest in strategic link building today will own the search results tomorrow. GrowSmallBiz makes it happen — systematically, legitimately, and without you having to manage the process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href={PRIMARY_CTA_URL} target="_blank" rel="noopener noreferrer">
                    Schedule Strategy Session <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href={SECONDARY_CTA_URL} target="_blank" rel="noopener noreferrer">
                    Free SEO Audit
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CONSULTATION FORM */}
        <ConsultationFormSection />
      </main>

      <Footer />
    </div>
  );
};

export default LinkBuilding;
