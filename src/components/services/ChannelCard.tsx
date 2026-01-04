import { LucideIcon, Smartphone, Globe, Facebook, Instagram, MapPin } from "lucide-react";

type ChannelType = "sms" | "web" | "facebook" | "instagram" | "google";

interface ChannelCardProps {
  channel: string;
  description: string;
  type: ChannelType;
  delay?: number;
  className?: string;
}

const channelConfig: Record<
  ChannelType,
  {
    icon: LucideIcon;
    bgColor: string;
    borderColor: string;
    iconColor: string;
    isGoogle?: boolean;
  }
> = {
  sms: {
    icon: Smartphone,
    bgColor: "#0d2818",
    borderColor: "#22c55e",
    iconColor: "#22c55e",
  },
  web: {
    icon: Globe,
    bgColor: "#0d1f2d",
    borderColor: "#17a2b8",
    iconColor: "#17a2b8",
  },
  facebook: {
    icon: Facebook,
    bgColor: "#0d1a33",
    borderColor: "#1877f2",
    iconColor: "#1877f2",
  },
  instagram: {
    icon: Instagram,
    bgColor: "#2d0d1f",
    borderColor: "#e1306c",
    iconColor: "#e1306c",
  },
  google: {
    icon: MapPin,
    bgColor: "#0f1419",
    borderColor: "",
    iconColor: "#4285f4",
    isGoogle: true,
  },
};

export const ChannelCard = ({
  channel,
  description,
  type,
  delay = 0,
  className = "",
}: ChannelCardProps) => {
  const config = channelConfig[type];
  const Icon = config.icon;

  if (config.isGoogle) {
    return (
      <div
        className={`channel-card channel-card-google animate-fade-up ${className}`}
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="google-border-animated" />
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(66,133,244,0.3), rgba(234,67,53,0.3), rgba(251,188,5,0.3), rgba(52,168,83,0.3))",
          }}
        >
          <Icon className="w-5 h-5" style={{ color: config.iconColor }} />
        </div>
        <div>
          <p className="font-medium text-foreground">{channel}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`channel-card animate-fade-up ${className}`}
      style={{
        animationDelay: `${delay}s`,
        background: config.bgColor,
        border: `1px solid ${config.borderColor}`,
        boxShadow: `0 0 20px ${config.borderColor}40`,
      }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${config.iconColor}20` }}
      >
        <Icon className="w-5 h-5" style={{ color: config.iconColor }} />
      </div>
      <div>
        <p className="font-medium text-foreground">{channel}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

interface ChannelsListProps {
  channels: Array<{
    channel: string;
    description: string;
    type: ChannelType;
  }>;
  className?: string;
}

export const ChannelsList = ({ channels, className = "" }: ChannelsListProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {channels.map((channel, index) => (
        <ChannelCard
          key={index}
          {...channel}
          delay={index * 0.05}
        />
      ))}
    </div>
  );
};
