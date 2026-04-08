import { WhyChooseSection as WhyChooseBase } from "@/components/sections/WhyChooseSection";
import type { NicheConfig } from "../NicheConfig";

interface WhyChooseUsSectionProps {
  config: NicheConfig;
}

export const WhyChooseUsSection = ({ config }: WhyChooseUsSectionProps) => {
  return (
    <div id="why-choose" className="scroll-mt-24">
      <WhyChooseBase
        title={config.whyChooseUsHeadline}
        subtitle={config.whyChooseUsSubtitle}
        description={config.whyChooseUsBody}
        variant="light"
        items={config.whyChooseUsCards.map((card) => ({
          title: card.title,
          description: card.description,
          icon: card.icon,
        }))}
      />
    </div>
  );
};
