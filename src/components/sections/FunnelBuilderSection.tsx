import { SectionHeader } from "@/components/services/SectionHeader";
import { FeatureCard } from "@/components/services/FeatureCard";
import {
  LayoutTemplate,
  MousePointerClick,
  FlaskConical,
  BarChart3,
  Home,
  Building2,
} from "lucide-react";

const funnelFeatures = [
  {
    icon: Home,
    title: "Med Spa Marketing Funnel",
    description: "Optimized for high conversion",
  },
  {
    icon: MousePointerClick,
    title: "Drag & Drop Builder",
    description: "No coding required",
  },
  {
    icon: Building2,
    title: "HVAC & Plumbing Marketing Funnel",
    description: "Optimized for high conversion",
  },
  {
    icon: FlaskConical,
    title: "A/B Testing",
    description: "Optimize conversions",
  },
  {
    icon: LayoutTemplate,
    title: "Real Estate Marketing Funnel",
    description: "Optimized for high conversion",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track every metric",
  },
];

export const FunnelBuilderSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="High-Converting Funnels for Every Industry"
          title="FUNNEL BUILDER &"
          titleHighlight="UNLIMITED FUNNELS"
          description="Build unlimited sales funnels with our drag-and-drop builder. Pre-designed templates optimized for your specific business niche."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {funnelFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variant="default"
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
