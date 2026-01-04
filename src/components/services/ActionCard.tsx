import { LucideIcon } from "lucide-react";

interface ActionCardProps {
  icon: LucideIcon;
  label: string;
  iconColor?: string;
  className?: string;
}

export const ActionCard = ({
  icon: Icon,
  label,
  iconColor = "text-primary",
  className = "",
}: ActionCardProps) => {
  return (
    <div className={`action-card ${className}`}>
      <Icon className={`w-5 h-5 ${iconColor}`} />
      <span className="text-sm text-foreground">{label}</span>
    </div>
  );
};

interface ActionsGridProps {
  actions: Array<{
    icon: LucideIcon;
    label: string;
  }>;
  columns?: 2 | 3;
  iconColor?: string;
  className?: string;
}

export const ActionsGrid = ({
  actions,
  columns = 2,
  iconColor,
  className = "",
}: ActionsGridProps) => {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4 ${className}`}>
      {actions.map((action, index) => (
        <ActionCard
          key={index}
          icon={action.icon}
          label={action.label}
          iconColor={iconColor}
        />
      ))}
    </div>
  );
};
