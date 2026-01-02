import { TrendingUp, Users, Award, Zap } from "lucide-react";

const stats = [
  { value: "500+", label: "Clients Served", icon: Users },
  { value: "150%", label: "Avg. Traffic Growth", icon: TrendingUp },
  { value: "98%", label: "Client Retention", icon: Award },
  { value: "<2s", label: "Page Load Time", icon: Zap },
];

export const StatsSection = () => {
  return (
    <section className="py-16 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
