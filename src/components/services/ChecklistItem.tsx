import { CheckCircle, LucideIcon } from "lucide-react";

interface ChecklistItemProps {
  text: string;
  icon?: LucideIcon;
  iconColor?: string;
  className?: string;
}

export const ChecklistItem = ({
  text,
  icon: Icon = CheckCircle,
  iconColor = "text-primary",
  className = "",
}: ChecklistItemProps) => {
  return (
    <div className={`checklist-item ${className}`}>
      <Icon className={`checklist-icon ${iconColor}`} />
      <span className="text-foreground">{text}</span>
    </div>
  );
};

interface ChecklistProps {
  items: string[];
  icon?: LucideIcon;
  iconColor?: string;
  className?: string;
}

export const Checklist = ({
  items,
  icon,
  iconColor,
  className = "",
}: ChecklistProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <ChecklistItem
          key={index}
          text={item}
          icon={icon}
          iconColor={iconColor}
        />
      ))}
    </div>
  );
};
