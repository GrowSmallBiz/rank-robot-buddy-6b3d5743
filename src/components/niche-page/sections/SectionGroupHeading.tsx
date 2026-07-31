interface SectionGroupHeadingProps {
  /** Heading text. When omitted, nothing renders. */
  title?: string;
}

/**
 * Group-level <h2> banner used to give an H2 parent to blocks of sections that
 * would otherwise hang off the previous section's H2 (e.g. the SEO block).
 * Purely structural — matches the surrounding dark theme, no new copy styling.
 */
export const SectionGroupHeading = ({ title }: SectionGroupHeadingProps) => {
  if (!title) return null;

  return (
    <section className="pt-16 pb-2 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center bg-gradient-heading bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
    </section>
  );
};
