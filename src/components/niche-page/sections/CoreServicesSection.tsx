import type { NicheConfig } from "../NicheConfig";
import { SectionHeader } from "@/components/services/SectionHeader";
import { GlowCard } from "@/components/ui/glow-card";
import { ArrowRight } from "lucide-react";

interface CoreServicesSectionProps {
  config: NicheConfig;
}

export const CoreServicesSection = ({ config }: CoreServicesSectionProps) => {
  if (!config.coreServices || config.coreServices.length === 0) return null;

  return (
    <section id="core-services" className="py-24 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={config.coreServicesHeadline || "Our Services"}
          titleHighlight={config.coreServicesHighlight}
          description={config.coreServicesSubheadline}
          as="h2"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {config.coreServices.map((service, i) => {
            const Icon = service.icon;
            const content = (
              <div className="feature-card-teal group hover:border-primary/30 transition-colors h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-3 flex-grow">{service.whatWeDo}</p>
                <p className="text-sm font-medium text-primary">{service.impact}</p>
                {service.url && (
                  <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );

            return service.url ? (
              <a key={i} href={service.url} className="block h-full">
                {content}
              </a>
            ) : (
              <div key={i} className="h-full">{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
