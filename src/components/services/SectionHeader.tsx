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
  const headingClass = HeadingTag === "h3" 
    ? "text-2xl md:text-3xl font-display font-bold text-foreground"
    : "section-title";

  return (
    <div
      className={`${centered ? "text-center" : ""} mb-16 animate-fade-up ${className}`}
    >
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      
      <HeadingTag className={headingClass}>
        {title}
        {titleHighlight && (
          <>
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary italic">
              {titleHighlight}
            </span>
          </>
        )}
      </HeadingTag>
      
      {description && (
        <p className="section-description mt-4">{description}</p>
      )}
      
      {children}
    </div>
  );
};
