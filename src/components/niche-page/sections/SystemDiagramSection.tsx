import type { NicheConfig } from "../NicheConfig";
import predictableMarketingSystem from "@/assets/predictable-marketing-system.png";

interface SystemDiagramSectionProps {
  config: NicheConfig;
}

export const SystemDiagramSection = ({ config }: SystemDiagramSectionProps) => {
  return (
    <div className="mb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
            🎯 The Complete Picture
          </span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            See How It All <span className="text-transparent bg-clip-text bg-gradient-primary italic">Works Together</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {config.systemDiagramBody}
          </p>
        </div>

        <div
          className="relative p-6 md:p-10 rounded-2xl overflow-hidden"
          style={{
            border: '2px solid rgba(255, 127, 80, 0.4)',
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            boxShadow: '0 0 40px rgba(255, 127, 80, 0.15), 0 0 80px rgba(255, 127, 80, 0.1)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
          <div className="relative z-10 flex justify-center">
            <img
              src={predictableMarketingSystem}
              alt="Predictable Marketing System showing the complete client acquisition and retention funnel"
              className="w-full max-w-5xl rounded-xl shadow-2xl shadow-primary/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
