import { TrendingUp, Bot, Eye, Clock } from "lucide-react";

const stats = [
  { value: "2-4x", label: "Customer Growth", icon: TrendingUp },
  { value: "24/7", label: "AI Automation", icon: Bot },
  { value: "100%", label: "Transparency", icon: Eye },
  { value: "15+", label: "Hours Saved/Week", icon: Clock },
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-[#1a2a3a]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/15 border border-primary/30 text-primary mb-5 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(255,127,80,0.4)] group-hover:bg-primary/25">
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-4xl md:text-5xl font-display font-bold mb-2 tracking-tight" style={{ color: '#FC8253' }}>
                {stat.value}
              </p>
              <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
