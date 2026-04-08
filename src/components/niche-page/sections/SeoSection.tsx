import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import {
  ArrowRight, CheckCircle2, MapPin, BarChart3, RefreshCw, Globe, Bot,
  Shield, Megaphone, Zap, Database, FileSearch, FileText, Share2, Target, Sparkles
} from "lucide-react";
import type { NicheConfig } from "../NicheConfig";

// FIXED Technical SEO images
import technicalSeoImage from "@/assets/technical-seo.png";
import onPageSeoImage from "@/assets/on-page-seo.png";
import linkBuildingImage from "@/assets/link-building.png";
import localSeoImage from "@/assets/local-seo.png";
import seoDashboardImage from "@/assets/seo-dashboard-metrics.png";
import aeoServiceImage from "@/assets/aeo-service.png";
import geoServiceImage from "@/assets/geo-service.png";
import googlePpcScreenshot from "@/assets/ad-screenshot-google-ppc.png";
import idxGoogleMap from "@/assets/idx-google-map.png";
import localHeatmap from "@/assets/local-heatmap.png";
import localCitationAggregators from "@/assets/local-citation-aggregators.png";
import socialMediaHero from "@/assets/social-media-hero.jpg";
import llmVisibilitySentiment from "@/assets/llm-visibility-sentiment.png";
import llmVisibilityDashboard from "@/assets/llm-visibility-dashboard.png";
import pressReleaseDistribution from "@/assets/press-release-distribution.png";
import backlinkAnalyticsDashboard from "@/assets/backlink-analytics-dashboard.png";
import articleQualityMetrics from "@/assets/article-quality-metrics.png";
import topicalMapAuthority from "@/assets/topical-map-authority.png";
import articleScoreInsights from "@/assets/article-score-insights.png";
import articleStructure from "@/assets/article-structure.png";
import articleKeywords from "@/assets/article-keywords.png";
import articleCompetitors from "@/assets/article-competitors.png";
import contentAgents from "@/assets/content-agents.png";
import contentRefiners from "@/assets/content-refiners.png";

// FIXED data
const technicalSEOSections = [
  { title: "Core Technical SEO", icon: FileSearch, image: technicalSeoImage, items: ["Deep Technical Audit", "Speed Optimization Experts", "Mobile First Approach", "Schema & Structured Data", "Agentic AI SEO Workflow to deploy technical fixes"] },
  { title: "On-Page Optimization", icon: FileText, image: onPageSeoImage, items: ["Title Tag & Meta Description Optimization", "Header Structure (H1-H6) Optimization", "Image Alt Text & Compression", "Internal Linking Strategy", "Content Optimization for Target Keywords"] },
  { title: "Link Building", icon: Share2, image: linkBuildingImage, items: ["Internal Linking Opportunities", "Canonical Link Management", "Issues with Links Detection & Fix"] },
  { title: "Cloud Stacks", icon: Globe, image: localSeoImage, items: ["AI-Generated Articles with Backlinks", "Published Across 14 Trusted Platforms", "AWS, Azure, GitHub & More", "Full Content Control & Publishing"], note: "Build authority with high-quality backlinks from trusted cloud platforms like AWS, Azure, and GitHub—domains that search engines already trust." },
  { title: "WILDFIRE", icon: Zap, image: aeoServiceImage, items: ["Community Backlink Exchange Network", "2:1 Exchange System", "Links from Other Users' Sites", "Approval System for Quality Control"], note: "Earn real backlinks from relevant websites through our community exchange—you control which links appear on your site while building domain authority." },
  { title: "Miscellaneous", icon: Database, image: geoServiceImage, items: ["Open Graph Optimization", "Twitter Card Setup", "Missing Lang Attribute Fix", "Custom HTML Content Validation"] },
  { title: "Agentic AI Workflow", icon: Bot, image: seoDashboardImage, items: ["AI-Powered Issue Detection & Resolution", "Automated Technical Fix Deployment", "Real-Time SEO Health Monitoring", "Zero Manual Intervention Required"], note: "Our AI agents continuously scan your site for technical issues and deploy fixes automatically—saving you hours of manual work while keeping your SEO in peak condition." },
  { title: "Instant Indexing", icon: Zap, image: googlePpcScreenshot, items: [{ text: "Google - GSC Instant Indexing", logo: "google" }, { text: "Bing - IndexNow Integration", logo: "bing" }], hasLogos: true, note: "Skip the waiting game—get your new pages indexed in hours instead of weeks, accelerating your SEO rankings faster than competitors." },
];

const contentInsightsImages = [
  { src: articleScoreInsights, alt: "Content scoring insights" },
  { src: articleCompetitors, alt: "Competitor analysis" },
];

const contentAgentsRefinersImages = [
  { src: contentAgents, alt: "Content Agents - Create and improve content" },
  { src: contentRefiners, alt: "Content Refiners - Polish and optimize" },
];

const localGBPServices = [
  { title: "Connect GBP to Get More Local Traffic", description: "Optimize your Google Business Profile for maximum visibility", icon: MapPin, image: idxGoogleMap },
  { title: "Run Heatmap for Local Business", description: "Visualize your local search presence and identify opportunities", icon: BarChart3, image: localHeatmap },
  { title: "Enable GBP + Social Post Automation", description: "Automated posting to keep your profile active and engaging", icon: RefreshCw, image: socialMediaHero },
  { title: "Local Citation Building", description: "Build consistent listings across 50+ directories", icon: Globe, image: localCitationAggregators },
];

const llmVisibilityServices = [
  { title: "LLM Visibility & Rank Tracking", description: "Track how AI platforms like ChatGPT, Gemini, Perplexity, and Grok recommend your studio. Monitor your visibility score and sentiment across all major AI search engines.", icon: Bot, images: [llmVisibilitySentiment, llmVisibilityDashboard] },
];

const onlineAuthorityServices = [
  { title: "Publish Press Release", description: "Get featured in news outlets to build credibility and backlinks", icon: Megaphone, image: pressReleaseDistribution },
  { title: "Cloud Stack - Quality Backlink Building", description: "Build high-authority backlinks to boost domain authority", icon: Globe, image: backlinkAnalyticsDashboard },
];

const contentStrategy = [
  { title: "We Build Topical Maps—Interconnected Content Clusters of Topics Related to Your Photography Business That Boost Your Entire Site's Rankings", description: "Strategic content clusters around your photography specialties", icon: Target, note: "AI-generated topical maps establish you as an authority by creating interconnected content clusters that signal expertise to search engines—boosting your entire site's rankings." },
  { title: "We Create Articles That Rank on Google & AI Search", description: "AI-assisted content creation optimized for search and client education", icon: FileSearch, note: "Every article is measured for quality using readability scores, keyword optimization, and engagement metrics—ensuring your content ranks and converts." },
];

interface SeoSectionProps {
  config: NicheConfig;
  strategySessionUrl: string;
}

export const SeoSection = ({ config, strategySessionUrl }: SeoSectionProps) => {
  const keywordCategories = Object.entries(config.seoKeywordCategories);

  return (
    <section id="seo" className="py-24 relative bg-slate-800/40 scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5" />
      <div className="container mx-auto px-4 relative z-10">
        {/* AI Search Ranking Banner */}
        <div className="mb-16 p-8 md:p-12 bg-gradient-to-br from-primary/20 via-purple-500/10 to-blue-500/10 rounded-3xl border border-primary/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
              ⚡ The Search Landscape is Changing
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
              {config.aiSearchCalloutHeadline}<br />
              <span className="text-transparent bg-clip-text bg-gradient-primary">{config.aiSearchCalloutHighlight}</span>
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {config.aiSearchCalloutBody}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {config.aiSearchStats.map((stat, i) => (
                <div key={i} className="p-4 bg-background/60 backdrop-blur-sm rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href={strategySessionUrl} className="inline-flex items-center gap-2">
                  Schedule Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <span className="text-sm text-muted-foreground">
                If you want more booked sessions, you need to rank on Google <strong className="text-foreground">and</strong> show up in AI search.
              </span>
            </div>
          </div>
        </div>

        {/* Editorial SEO Explanation */}
        <div className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            {config.seoEditorialHeadline}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary italic">{config.seoEditorialHighlight}</span>
          </h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            {config.seoEditorialBody.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "font-semibold text-foreground" : "text-muted-foreground"}>
                {paragraph}
              </p>
            ))}
            <p className="text-foreground/80 border-l-2 border-primary pl-4 mt-6">
              {config.seoEditorialPullQuote}
            </p>
          </div>
        </div>

        {/* SEO Content Header */}
        <div className="mb-8 text-center">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">{config.seoBadge}</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            {config.seoHeadline} <span className="text-transparent bg-clip-text bg-gradient-primary italic">{config.seoHighlight}</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">{config.seoSubheadline}</p>
        </div>

        {/* SEO Sub-Navigation */}
        <div className="mb-12 p-8 bg-gradient-to-br from-primary/10 via-emerald-500/5 to-teal-500/10 rounded-2xl border-2 border-primary/30 shadow-lg shadow-primary/5">
          <div className="text-center mb-5">
            <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-2">📚 Quick Navigation</span>
            <h4 className="text-lg font-display font-bold text-foreground">Jump to SEO Topic</h4>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: "seo-keywords", label: "Keyword Research", icon: "🔑" },
              { id: "seo-competitors", label: "Competitor Analysis", icon: "🎯" },
              { id: "seo-technical", label: "Technical SEO", icon: "⚙️" },
              { id: "seo-content", label: "Content Strategy", icon: "📝" },
              { id: "seo-local", label: "Local SEO & GBP", icon: "📍" },
              { id: "seo-ai-visibility", label: "AI Visibility", icon: "🤖" },
              { id: "seo-authority", label: "Backlinks", icon: "🔗" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background/80 border border-border hover:border-primary hover:bg-primary/10 hover:shadow-md hover:shadow-primary/10 transition-all duration-300 text-sm font-medium group"
              >
                <span>{item.icon}</span>
                <span className="text-muted-foreground group-hover:text-primary transition-colors">{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* 1. Keyword Research */}
        <div id="seo-keywords" className="mb-12 scroll-mt-24">
          <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            We Target Keywords Your Ideal Clients Search
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {keywordCategories.map(([key, cat]) => {
              const CatIcon = cat.icon;
              return (
                <GlowCard key={key} className="overflow-hidden">
                  <div className="relative h-32 bg-muted">
                    <img src={cat.image} alt={cat.label} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <CatIcon className="w-5 h-5 text-primary" />
                      <h5 className="font-bold text-foreground">{cat.label}</h5>
                    </div>
                    <ul className="space-y-1.5 mb-3">
                      {cat.keywords.map((kw, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          {kw}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground border-t border-border pt-2">
                      <strong>Competitors:</strong> {cat.competitors}
                    </p>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>

        {/* 2. Competitor Analysis */}
        <div id="seo-competitors" className="mb-12 scroll-mt-24">
          <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            We Analyze & Outrank Your Competitors
          </h3>
          <GlowCard className="p-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-muted-foreground mb-4">
                  We reverse-engineer what's working for your top competitors—their keywords, backlinks, content gaps, and ad strategies—then build a plan to outperform them.
                </p>
                <ul className="space-y-2">
                  {["Competitor keyword gap analysis", "Backlink profile comparison", "Content gap identification", "Ad spend & strategy intelligence", "Local pack positioning tactics"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden border border-border/50">
                <img src={articleQualityMetrics} alt="Competitor analysis dashboard" className="w-full h-auto object-cover" />
              </div>
            </div>
          </GlowCard>
        </div>

        {/* 3. Technical SEO */}
        <div id="seo-technical" className="mb-12 scroll-mt-24">
          <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <FileSearch className="w-5 h-5 text-primary" />
            We Handle Your Technical SEO
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {technicalSEOSections.map((section, i) => {
              const SIcon = section.icon;
              return (
                <GlowCard key={i} className="overflow-hidden">
                  <div className="h-24 bg-muted/50">
                    <img src={section.image} alt={section.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <SIcon className="w-4 h-4 text-primary" />
                      <h5 className="font-semibold text-foreground text-sm">{section.title}</h5>
                    </div>
                    <ul className="space-y-1">
                      {section.items.map((item: any, j: number) => (
                        <li key={j} className="text-xs text-muted-foreground flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                          {typeof item === 'string' ? item : item.text}
                        </li>
                      ))}
                    </ul>
                    {section.note && (
                      <p className="text-xs text-muted-foreground mt-2 border-l-2 border-primary/30 pl-2 italic">{section.note}</p>
                    )}
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>

        {/* 4. Content Strategy */}
        <div id="seo-content" className="mb-12 scroll-mt-24">
          <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            We Create Content That Ranks & Converts
          </h3>
          <div className="space-y-6">
            {/* Topical Maps */}
            <GlowCard className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h5 className="font-bold text-foreground">{contentStrategy[0].title}</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{contentStrategy[0].description}</p>
              <p className="text-sm text-muted-foreground border-l-2 border-primary/30 pl-3 mb-4">{contentStrategy[0].note}</p>
              <div className="mt-4 rounded-lg overflow-hidden border border-border/50">
                <img src={topicalMapAuthority} alt="Topical map authority" className="w-full h-auto object-cover" />
              </div>
            </GlowCard>

            {/* Articles */}
            <GlowCard className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <FileSearch className="w-5 h-5 text-amber-500" />
                </div>
                <h5 className="font-bold text-foreground">{contentStrategy[1].title}</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{contentStrategy[1].description}</p>
              <p className="text-sm text-muted-foreground border-l-2 border-primary/30 pl-3 mb-6">{contentStrategy[1].note}</p>

              <div className="mb-6">
                <h6 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-amber-500" />
                  Content Insights — How We Measure What Works
                </h6>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {contentInsightsImages.map((img, i) => (
                    <div key={i} className="rounded-lg overflow-hidden border border-border/50">
                      <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h6 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Human Strategy + AI Tools for Content Excellence
                </h6>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {contentAgentsRefinersImages.map((img, i) => (
                    <div key={i} className="rounded-lg overflow-hidden border border-border/50">
                      <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>
          </div>
        </div>

        {/* 5. Local SEO & GBP */}
        <div id="seo-local" className="mb-12 scroll-mt-24">
          <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            We Optimize Your Local SEO & Google Business Profile
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {localGBPServices.map((service, i) => (
              <GlowCard key={i} className="p-0 overflow-hidden">
                <div className="relative h-32 bg-muted">
                  <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                </div>
                <div className="p-5 pt-3">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                      <service.icon className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">{service.title}</h5>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* 6. AI Visibility */}
        <div id="seo-ai-visibility" className="mb-12 scroll-mt-24">
          <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <Bot className="w-6 h-6 text-primary" />
            We Get Your Studio Recommended by AI Search Engines
          </h3>
          <div className="grid md:grid-cols-1 gap-6">
            {llmVisibilityServices.map((service, i) => (
              <GlowCard key={i} className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                    <service.icon className="w-5 h-5 text-violet-500" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">{service.title}</h5>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.images.map((img, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden bg-muted/30">
                      <img src={img} alt={`${service.title} - ${idx + 1}`} className="w-full h-auto object-contain" />
                    </div>
                  ))}
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* 7. Backlinks */}
        <div id="seo-authority" className="mb-12 scroll-mt-24">
          <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            We Build Your Online Authority & Backlink Profile
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {onlineAuthorityServices.map((service, i) => (
              <GlowCard key={i} className="overflow-hidden border-cyan-500/30">
                <div className="h-40 bg-muted/30">
                  <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                </div>
                <div className="p-5 pt-3">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <service.icon className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">{service.title}</h5>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Back to SEO Top */}
        <div className="text-center pt-8 border-t border-border/50">
          <a
            href="#seo"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 text-sm group"
          >
            <ArrowRight className="w-4 h-4 rotate-[-90deg] group-hover:-translate-y-1 transition-transform" />
            Back to SEO Navigation
          </a>
        </div>
      </div>
    </section>
  );
};
