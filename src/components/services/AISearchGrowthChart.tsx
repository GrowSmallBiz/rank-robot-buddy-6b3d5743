import { TrendingUp } from "lucide-react";

const platforms = [
  { name: "Google", growth: "4%", height: 8, isAI: false },
  { name: "YouTube", growth: "9%", height: 14, isAI: false },
  { name: "Bing", growth: "8%", height: 12, isAI: false },
  { name: "ChatGPT", growth: "49.5%", height: 38, isAI: true },
  { name: "Gemini", growth: "563.6%", height: 78, isAI: true },
  { name: "Claude", growth: "620%", height: 88, isAI: true },
  { name: "Perplexity", growth: "340%", height: 58, isAI: true },
];

export const AISearchGrowthChart = () => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
          Search Engine Growth Rate
        </h4>
      </div>

      <div className="flex items-end justify-between gap-2 sm:gap-3 h-64 mb-4">
        {platforms.map((platform) => (
          <div key={platform.name} className="flex flex-col items-center flex-1 min-w-0">
            <span
              className={`text-xs sm:text-sm font-bold mb-1 ${
                platform.isAI ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {platform.growth}
            </span>
            <span className="text-[9px] text-muted-foreground/60 mb-2 hidden sm:block">
              YoY
            </span>
            <div
              className={`w-full max-w-[44px] rounded-t-lg transition-all duration-500 ${
                platform.isAI
                  ? "bg-gradient-to-t from-primary/70 to-primary border border-primary/40 shadow-[0_0_20px_rgba(255,127,80,0.2)]"
                  : "bg-muted-foreground/20 border border-border"
              }`}
              style={{ height: `${platform.height}%` }}
            />
            <span className="text-[10px] sm:text-xs text-muted-foreground mt-2 text-center truncate w-full">
              {platform.name}
            </span>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-muted-foreground/50 mt-4 leading-relaxed">
        Source: Third-party industry research compiled for illustrative purposes. Exact platform shares and growth rates may evolve over time.
      </p>
    </div>
  );
};
