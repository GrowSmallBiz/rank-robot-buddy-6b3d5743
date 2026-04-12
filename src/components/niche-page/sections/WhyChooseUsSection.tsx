import type { NicheConfig } from "../NicheConfig";

interface WhyChooseUsSectionProps {
  config: NicheConfig;
}

export const WhyChooseUsSection = ({ config }: WhyChooseUsSectionProps) => {
  return (
    <div id="why-choose" className="scroll-mt-24">
      <section className="py-24 relative overflow-hidden border-t bg-card/80 border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-primary font-medium mb-4">{config.whyChooseUsSubtitle}</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
              {config.whyChooseUsHeadline}
            </h2>
            <p className="text-lg text-muted-foreground">
              {config.whyChooseUsBody}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.whyChooseUsCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="feature-card-teal space-y-4 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
