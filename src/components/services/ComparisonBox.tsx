interface ComparisonBoxProps {
  title: string;
  variant?: "danger" | "success";
  className?: string;
  children: React.ReactNode;
}

export const ComparisonBox = ({
  title,
  variant = "danger",
  className = "",
  children,
}: ComparisonBoxProps) => {
  const boxClass = variant === "danger" ? "math-box" : "math-box-success";

  return (
    <div className={`${boxClass} ${className}`}>
      <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
        {title}
      </h3>
      {children}
    </div>
  );
};

interface ComparisonSplitProps {
  without: {
    label: string;
    description: string;
    result: string;
    resultColor?: string;
  };
  withFeature: {
    label: string;
    description: string;
    result: string;
    resultColor?: string;
  };
  className?: string;
}

export const ComparisonSplit = ({
  without,
  withFeature,
  className = "",
}: ComparisonSplitProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-6 ${className}`}>
      <div className="text-center">
        <p className="text-muted-foreground mb-2">
          <strong>{without.label}</strong>
        </p>
        <p className="text-foreground">{without.description}</p>
        <p className={`font-bold ${without.resultColor || "text-destructive"}`}>
          {without.result}
        </p>
      </div>
      <div className="text-center">
        <p className="text-muted-foreground mb-2">
          <strong>{withFeature.label}</strong>
        </p>
        <p className="text-foreground">{withFeature.description}</p>
        <p className={`font-bold ${withFeature.resultColor || "text-primary"}`}>
          {withFeature.result}
        </p>
      </div>
    </div>
  );
};
