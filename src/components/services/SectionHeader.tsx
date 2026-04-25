import { ReactNode } from "react";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  children?: ReactNode;
  /** Heading level - defaults to h2, use h3 for sub-sections */
  as?: "h2" | "h3";
}

export const SectionHeader = ({
  subtitle,
  title,
  titleHighlight,
  description,
  centered = true,
  className = "",
  children,
  as: HeadingTag = "h2",
}: SectionHeaderProps) => {
  const baseHeadingClass =
    HeadingTag === "h3"
      ? "text-2xl md:text-3xl font-display font-bold text-foreground"
      : "section-title";
  const headingClass = HeadingTag === "h3"
    ? baseHeadingClass
    : `${baseHeadingClass} bg-gradient-heading bg-clip-text text-transparent`;
  const headingText = titleHighlight ? `${title} ${titleHighlight}` : title;

  return (
    <div
      className={`${centered ? "text-center" : ""} mb-10 animate-fade-up ${className}`}
    >
      {subtitle && <p className="section-subtitle">{subtitle}</p>}

      <HeadingTag className={headingClass}>
        {headingText}
      </HeadingTag>
      
      {description && (
        <p className="section-description mt-4">{description}</p>
      )}
      
      {children}
    </div>
  );
};
