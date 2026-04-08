import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { CardCTA } from "@/components/services/CardCTA";
import { StickyCardCTA } from "@/components/services/StickyCardCTA";
import { ArrowRight } from "lucide-react";
import { useUtm } from "@/hooks/use-utm";
import type { NicheConfig } from "./NicheConfig";

import { HeroSection } from "./sections/HeroSection";
import { PainPointsSection } from "./sections/PainPointsSection";
import { SystemDiagramSection } from "./sections/SystemDiagramSection";
import { CtaBlock } from "./sections/CtaBlock";
import { OnThisPageNav } from "./sections/OnThisPageNav";
import { WebsiteDesignSection } from "./sections/WebsiteDesignSection";
import { SeoSection } from "./sections/SeoSection";
import { PaidMediaSection } from "./sections/PaidMediaSection";
import { RetargetingSection } from "./sections/RetargetingSection";
import { SocialMediaSection } from "./sections/SocialMediaSection";
import { AiGrowthSystemSection } from "./sections/AiGrowthSystemSection";
import { ReputationSection } from "./sections/ReputationSection";
import { AiVoiceChatSection } from "./sections/AiVoiceChatSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
import { FaqSection } from "./sections/FaqSection";
import { CaseStudyLinksSection } from "./sections/CaseStudyLinksSection";

interface NichePageProps {
  config: NicheConfig;
}

const NichePage = ({ config }: NichePageProps) => {
  const { strategySessionUrl } = useUtm();

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>{config.pageTitle}</title>
        <meta name="description" content={config.metaDescription} />
      </Head>
      <ServiceJsonLd
        serviceName={config.serviceName}
        serviceType={config.serviceType}
        description={config.serviceDescription}
        url={config.canonicalUrl}
        breadcrumbs={config.breadcrumbs}
      />

      <Header />

      {/* 1. Hero */}
      <HeroSection config={config} strategySessionUrl={strategySessionUrl} />

      {/* 2. Pain Points + System Diagram */}
      <PainPointsSection config={config} />

      {/* 3. System Diagram (inside pain points bg) */}
      <SystemDiagramSection config={config} />

      {/* CTA after pain points */}
      <CtaBlock
        headline={config.ctaAfterPainPoints.headline}
        subtext={config.ctaAfterPainPoints.subtext}
        strategySessionUrl={strategySessionUrl}
      />

      {/* 4. On This Page Nav */}
      <OnThisPageNav config={config} />

      {/* 5. Website Design */}
      <WebsiteDesignSection config={config} strategySessionUrl={strategySessionUrl} />

      {/* 6. SEO */}
      <SeoSection config={config} strategySessionUrl={strategySessionUrl} />

      {/* CTA after SEO */}
      <CardCTA
        title={config.ctaAfterSeo.headline}
        description={config.ctaAfterSeo.subtext}
        buttonText="Schedule Strategy Call"
        buttonHref={strategySessionUrl}
        accentWords={["Free", "SEO Visibility Audit"]}
        sectionClassName="py-16"
      />

      {/* 7. Paid Media */}
      <PaidMediaSection config={config} strategySessionUrl={strategySessionUrl} />

      {/* 8. Retargeting */}
      <RetargetingSection config={config} />

      {/* 9. Social Media */}
      <SocialMediaSection config={config} />

      {/* 10. AI Growth System */}
      <AiGrowthSystemSection config={config} />

      {/* 11. Reputation */}
      <ReputationSection config={config} />

      {/* 12. AI Voice & Chat */}
      <AiVoiceChatSection config={config} />

      {/* CTA after growth system */}
      <CardCTA
        title={config.ctaAfterGrowthSystem.headline}
        description={config.ctaAfterGrowthSystem.subtext}
        buttonText="Schedule Strategy Call"
        buttonHref={strategySessionUrl}
        accentWords={config.stickyCtaConfig.accentWords}
        sectionClassName="py-16"
      />

      {/* 13. Why Choose Us */}
      <WhyChooseUsSection config={config} />

      {/* 14. FAQ */}
      <FaqSection config={config} />

      {/* 15. Consultation Form */}
      <ConsultationFormSection />

      {/* Back to Top */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
          >
            <ArrowRight className="w-4 h-4 rotate-[-90deg] group-hover:-translate-y-1 transition-transform" />
            <span className="font-medium">Back to Top</span>
          </a>
        </div>
      </section>

      <Footer />

      {/* Sticky CTA */}
      <StickyCardCTA
        title={config.stickyCtaConfig.title}
        description={config.stickyCtaConfig.description}
        buttonText={config.stickyCtaConfig.buttonText}
        buttonHref={strategySessionUrl}
        accentWords={config.stickyCtaConfig.accentWords}
        showAfterScroll={config.stickyCtaConfig.showAfterScroll}
      />
    </div>
  );
};

export default NichePage;
