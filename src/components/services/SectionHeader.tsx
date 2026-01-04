import { ReactNode } from "react";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  children?: ReactNode;
}

export const SectionHeader = ({
  subtitle,
  title,
  titleHighlight,
  description,
  centered = true,
  className = "",
  children,
}: SectionHeaderProps) => {
  return (
    <div
      className={`${centered ? "text-center" : ""} mb-16 animate-fade-up ${className}`}
    >
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      
      <h2 className="section-title">
        {title}
        {titleHighlight && (
          <>
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary italic">
              {titleHighlight}
            </span>
          </>
        )}
      </h2>
      
      {description && (
        <p className="section-description mt-4">{description}</p>
      )}
      
      {children}
    </div>
  );
};
