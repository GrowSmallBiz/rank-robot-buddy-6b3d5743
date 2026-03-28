import { SectionHeader } from "@/components/services/SectionHeader";
import funnelGraphic from "@/assets/funnel-builder-funnels.png";

export const FunnelBuilderSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="FUNNEL BUILDER & UNLIMITED FUNNELS"
          title="High-Converting Funnels for"
          titleHighlight="Every Industry"
          description="Build unlimited sales funnels with our drag-and-drop builder. Pre-designed templates optimized for your specific business niche."
        />
        <div className="flex justify-center animate-fade-up">
          <img
            src={funnelGraphic}
            alt="Marketing funnels for Med Spa, HVAC & Plumbing, and Real Estate industries with drag & drop builder, A/B testing, and analytics dashboard"
            className="w-full max-w-5xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};
