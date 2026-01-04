interface StatCardProps {
  value: string;
  label: string;
  subtext?: string;
  delay?: number;
  className?: string;
}

export const StatCard = ({
  value,
  label,
  subtext,
  delay = 0,
  className = "",
}: StatCardProps) => {
  return (
    <div
      className={`stat-card animate-fade-up ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="stat-value">{value}</div>
      <p className="stat-label">{label}</p>
      {subtext && <p className="stat-subtext">{subtext}</p>}
    </div>
  );
};

interface StatsGridProps {
  stats: Array<{
    value: string;
    label: string;
    subtext?: string;
  }>;
  columns?: 2 | 3 | 4;
  className?: string;
}

export const StatsGrid = ({
  stats,
  columns = 4,
  className = "",
}: StatsGridProps) => {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          value={stat.value}
          label={stat.label}
          subtext={stat.subtext}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};
