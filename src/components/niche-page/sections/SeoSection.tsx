import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import {
  ArrowRight, CheckCircle2, MapPin, BarChart3, Bot,
  FileSearch, FileText, Target, Trophy, UserCheck
} from "lucide-react";
import type { NicheConfig } from "../NicheConfig";
import { TopicMapVisual } from "./TopicMapVisual";
import { ContentScoreDashboard } from "./ContentScoreDashboard";

interface SeoSectionProps {
  config: NicheConfig;
  strategySessionUrl: string;
}

export const SeoSection = ({ config, strategySessionUrl }: SeoSectionProps) => {
  const H2 = config.flattenHeadings ? "h3" : "h2";
  const keywordCategories = Object.entries(config.seoKeywordCategories);

  return (
    <section id="seo" className="py-24 relative bg-background-alt scroll-mt-24">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {config.aiSearchStats.map((stat, i) => (
                <div key={i} className="p-4 bg-[hsl(210_45%_14%)] backdrop-blur-sm rounded-xl border border-[hsl(188_78%_41%_/_0.25)]">
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
                If you want more booked patients, you need to rank on Google <strong className="text-foreground">and</strong> show up in AI search.
              </span>
            </div>
          </div>
        </div>

        {/* Conversational AI Query Examples Block */}
        {config.conversationalAiQueries && config.conversationalAiQueries.length > 0 && (
        <div className="mb-16 max-w-4xl mx-auto rounded-2xl border border-white/10 bg-[hsl(210_50%_10%)] p-8 md:p-10">
          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
            Patients Are <span className="bg-gradient-primary bg-clip-text text-transparent italic">Already Asking AI</span> These Questions About Your Practice
          </h3>
          <p className="text-foreground/80 mb-6">
            Before opening Google, patients are typing questions like these into ChatGPT, Gemini, and Perplexity:
          </p>
          <div className="space-y-2">
            {config.conversationalAiQueries.map((query, i) => (
              <div key={i} className="border-l-[3px] border-l-primary bg-[hsl(210_40%_18%)] rounded-lg px-4 py-2.5">
                <span className="text-foreground text-sm md:text-[15px]">{query}</span>
              </div>
            ))}
          </div>
          <p className="text-foreground/80 mt-6">
            If your practice isn't showing up in these AI-generated answers, you're invisible to a growing segment of patients before they ever open Google. We change that.
          </p>
        </div>
        )}
        {/* Editorial SEO Explanation */}
        <div className="mb-16 max-w-4xl mx-auto text-center">
          <H2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 bg-gradient-heading bg-clip-text text-transparent">
            {config.seoEditorialHeadline} {config.seoEditorialHighlight}
          </H2>
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

        {/* Entity Definition Block (AEO) */}
        {config.aeoEntityBlock && config.aeoEntityBlock.length > 0 && (
        <div className="mb-16 max-w-5xl mx-auto grid md:grid-cols-3 gap-4">
          {config.aeoEntityBlock.map((card, i) => (
            <div key={i} className="bg-[hsl(210_40%_18%)] border border-white/[0.08] rounded-xl p-6">
              <span className="inline-block px-2.5 py-1 bg-[hsl(174_60%_40%)] text-white text-[11px] font-semibold uppercase rounded-[10px] mb-3">
                {card.badge}
              </span>
              <h4 className="text-[15px] font-semibold text-foreground mb-2">{card.title}</h4>
              <p className="text-foreground/80 text-[13px] leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
        )}

        <div className="mb-8 text-center">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">{config.seoBadge}</p>
          <H2 className="text-2xl md:text-3xl font-display font-bold text-foreground bg-gradient-heading bg-clip-text text-transparent">
            {config.seoHeadline} {config.seoHighlight}
          </H2>
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
              { id: "seo-content", label: "Content Strategy", icon: "📝" },
              { id: "seo-local", label: "Local SEO & GBP", icon: "📍" },
              { id: "seo-ai-visibility", label: "AI Visibility", icon: "🤖" },
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
            <ul className="space-y-3">
              {(config.seoCompetitorBullets || [
                { bold: "Competitor keyword gap analysis", desc: "we identify which dental implant, cosmetic, and emergency dental terms your top competitors rank for that you don't" },
                { bold: "Backlink profile comparison", desc: "we find authoritative health and dental publications linking to competitors and target the same sources" },
                { bold: "Content gap identification", desc: "we find the service and location pages driving competitor traffic that you're missing" },
                { bold: "Local pack positioning tactics", desc: "we analyze competitor GBP profiles, review velocity, and citation consistency to build a plan to outrank them in the Map Pack" },
              ]).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>{item.bold}</strong> — {item.desc}</span>
                </li>
              ))}
            </ul>
          </GlowCard>
        </div>


        {/* 4. Content Strategy */}
        <div id="seo-content" className="mb-12 scroll-mt-24">
          <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            We Create Content That Ranks & Converts
          </h3>
          <div className="space-y-8">
            {/* A: Authority Statement */}
            <div className="p-6 rounded-xl bg-card border-l-4 border-l-[hsl(var(--accent))] border border-border">
              <h4 className="text-lg font-display font-bold text-foreground mb-3">
                {config.seoContentAuthorityStatement || "We Don't Publish Bulk AI Blogs. We Build Dental Authority."}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Most agencies use ChatGPT to generate hundreds of generic articles and hit publish. We don't. Every piece of content we create is produced by a highly trained AI content system built specifically for your business, your service area, and your target keywords — then reviewed and approved by a human expert before it goes live. The difference isn't just quality. It's whether the content actually builds your ranking authority or just adds noise.
              </p>
            </div>

            {/* B: Topic Map Visual */}
            <div>
              <h4 className="text-lg font-display font-bold text-foreground mb-3">
                We Build Topical Maps That Cover Your Entire Market
              </h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {config.seoTopicalMapBody || "A topical map ensures Google sees your site as a complete authority on dental care — not just a collection of random pages. We identify every topic cluster your ideal patients search across all treatment categories, then systematically build the content that covers it."}
              </p>
              <TopicMapVisual centerLine1={config.topicMapCenterLine1} centerLine2={config.topicMapCenterLine2} spokes={config.topicMapSpokes} />
            </div>

            {/* C: Content Quality Score Dashboard */}
            <div>
              <h4 className="text-lg font-display font-bold text-foreground mb-3">
                Every Article Scored Across Six Quality Dimensions Before Publishing
              </h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Before any content goes live on your site, it is measured against six independent quality dimensions. Our goal is not to pass a content score — it is to build genuine digital authority that earns rankings and AI search citations in your market.
              </p>
              <ContentScoreDashboard label={config.contentScoreLabel} caption={config.contentScoreCaption} />
            </div>

            {/* D: What This Means For You */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="feature-card-teal space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h5 className="font-display font-semibold text-foreground">AI-Trained on Your Business</h5>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Content is generated by an AI model trained on your specific services, service area, pricing structure, and competitive positioning — not a generic prompt.
                </p>
              </div>
              <div className="feature-card-teal space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>
                <h5 className="font-display font-semibold text-foreground">Human Review Before Every Publish</h5>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Every article is reviewed by a human expert for accuracy, brand voice, and local relevance. Nothing goes live that has not passed both AI scoring and human approval.
                </p>
              </div>
              <div className="feature-card-teal space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h5 className="font-display font-semibold text-foreground">Built to Rank and Be Cited by AI</h5>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {config.seoContentThirdCardBody || "Content is structured for Google rankings and AI citation — so when a patient asks ChatGPT, Perplexity, or Google AI which dental practice to call, your practice is the answer."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Local SEO & GBP */}
        <div id="seo-local" className="mb-12 scroll-mt-24">
          <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            We Optimize Your Local SEO & Google Business Profile
          </h3>
          <GlowCard className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-bold text-foreground mb-3">GBP Optimization</h5>
                <ul className="space-y-2">
                  {[
                    "Full Google Business Profile audit and optimization",
                    "Category selection, service area setup, and photo optimization",
                    "Weekly GBP posting cadence for Map Pack signals",
                    "GBP heatmap tracking — visualize your local search presence across your service area",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-foreground mb-3">Citation & Local Authority</h5>
                <ul className="space-y-2">
                  {[
                    "Local citation building across 50+ directories",
                    "NAP consistency audit and cleanup",
                    "GBP + social post automation",
                    "Monthly local search performance reporting",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlowCard>
        </div>

        {/* 6. AI Visibility */}
        <div id="seo-ai-visibility" className="mb-12 scroll-mt-24">
          <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <Bot className="w-6 h-6 text-primary" />
            {config.seoAiVisibilityHeading || "We Get Your Dental Practice Recommended by AI Search Engines"}
          </h3>
          <GlowCard className="p-6">
            <p className="text-muted-foreground mb-2">
              {config.seoAiVisibilityBody1 || "GrowSmallBiz tracks how AI platforms recommend your dental practice across 6 major AI search engines — including ChatGPT, Gemini, Perplexity, Grok, Copilot, and Google AI Mode."}
            </p>
            <p className="text-muted-foreground mb-4">
              {config.seoAiVisibilityBody2 || "When a patient asks an AI assistant 'what's the best dentist for implants near me?' or 'which cosmetic dentist has the best reviews in [city]?' — we make sure your practice is the answer."}
            </p>
            <ul className="space-y-2">
              {[
                "LLM visibility score tracking across 6 AI platforms — updated monthly",
                "Sentiment monitoring — how AI engines describe your practice to potential patients",
                "Citation share tracking — which queries your practice appears in vs. competitors",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </GlowCard>
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
