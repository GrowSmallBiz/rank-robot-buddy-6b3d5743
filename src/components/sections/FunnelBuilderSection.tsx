import { SectionHeader } from "@/components/services/SectionHeader";
import { Sparkles, MousePointerClick, FlaskConical, BarChart3 } from "lucide-react";

interface FunnelStep {
  label: string;
}

interface FunnelData {
  emoji: string;
  title: string;
  subtitle: string;
  steps: FunnelStep[];
  color: string;
  colorLight: string;
}

const funnels: FunnelData[] = [
  {
    emoji: "🔧",
    title: "HVAC & Plumbing",
    subtitle: "Marketing Funnel",
    steps: [
      { label: "Lead Capture" },
      { label: "Quote Request" },
      { label: "Scheduling" },
      { label: "Service" },
      { label: "Review" },
    ],
    color: "#4466DD",
    colorLight: "#5577EE",
  },
  {
    emoji: "💆",
    title: "Med Spa",
    subtitle: "Marketing Funnel",
    steps: [
      { label: "Awareness" },
      { label: "Interest" },
      { label: "Booking" },
      { label: "Treatment" },
      { label: "Loyalty" },
    ],
    color: "#D4587A",
    colorLight: "#E06990",
  },
  {
    emoji: "🏡",
    title: "Real Estate",
    subtitle: "Marketing Funnel",
    steps: [
      { label: "Property Search" },
      { label: "Inquiry" },
      { label: "Showing" },
      { label: "Offer" },
      { label: "Closing" },
    ],
    color: "#44B89A",
    colorLight: "#55CCAA",
  },
];

const bottomFeatures = [
  { icon: MousePointerClick, title: "Drag & Drop Builder", subtitle: "No coding required" },
  { icon: FlaskConical, title: "A/B Testing", subtitle: "Optimize conversions" },
  { icon: BarChart3, title: "Analytics Dashboard", subtitle: "Track every metric" },
];

const FunnelCard = ({ funnel }: { funnel: FunnelData }) => {
  return (
    <div className="bg-[#1a2233] border border-white/10 rounded-2xl p-6 flex flex-col items-center">
      <span className="text-4xl mb-2">{funnel.emoji}</span>
      <h3 className="text-xl font-bold text-foreground">{funnel.title}</h3>
      <p className="text-sm text-muted-foreground mb-6">{funnel.subtitle}</p>

      <div className="flex flex-col items-center gap-2 w-full max-w-[280px]">
        {funnel.steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            <div
              className="w-full py-3 rounded-full text-center text-sm font-semibold text-white"
              style={{
                background: `linear-gradient(135deg, ${funnel.color}, ${funnel.colorLight})`,
                width: `${100 - i * 5}%`,
              }}
            >
              {step.label}
            </div>
            {i < funnel.steps.length - 1 && (
              <span className="text-muted-foreground text-xs my-1">↓</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/10 w-full">
        <Sparkles className="w-4 h-4 text-yellow-400" />
        <span className="text-xs text-muted-foreground">Optimized for high conversion</span>
      </div>
    </div>
  );
};

export const FunnelBuilderSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="FUNNEL BUILDER & UNLIMITED FUNNELS"
          title="High-Converting Funnels for"
          titleHighlight="Every Industry"
          description="Build unlimited sales funnels with our drag-and-drop builder. Pre-designed templates optimized for your specific business niche."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {funnels.map((funnel, index) => (
            <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <FunnelCard funnel={funnel} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          {bottomFeatures.map((feat, i) => (
            <div key={i} className="text-center animate-fade-up" style={{ animationDelay: `${(i + 3) * 0.1}s` }}>
              <feat.icon className="w-7 h-7 text-primary mx-auto mb-3" />
              <p className="font-bold text-foreground text-base">{feat.title}</p>
              <p className="text-sm text-muted-foreground mt-1">{feat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
