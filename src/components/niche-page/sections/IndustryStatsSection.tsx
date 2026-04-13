import type { NicheConfig } from "../NicheConfig";

interface Props {
  data: NicheConfig["industryStats"];
}

export const IndustryStatsSection = ({ data }: Props) => {
  if (!data) return null;

  const { headline, headlineHighlight, subheadline, items } = data;

  return (
    <section
      id="industry-stats"
      className="py-20 md:py-28 bg-[hsl(var(--card))]"
    >
      <div className="container mx-auto px-4">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-white">
          {headline}{" "}
          <span className="text-primary">{headlineHighlight}</span>
        </h2>

        {/* Subheadline */}
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16 text-lg">
          {subheadline}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {items.map((item, index) => (
            <div key={index} className="text-center space-y-3">
              {/* Value — visually dominant */}
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
                {item.value}
              </span>

              {/* Label */}
              <p className="text-white text-base md:text-lg leading-snug">
                {item.label}
              </p>

              {/* Source attribution — outbound dofollow link */}
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener"
                className="inline-block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Source: {item.source}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
