const scores = [
  { label: "Content Hierarchy", value: 94, color: "hsl(142 71% 45%)" },
  { label: "Factuality", value: 96, color: "hsl(142 71% 45%)" },
  { label: "Information Gain", value: 88, color: "hsl(174 60% 45%)" },
  { label: "Authority", value: 86, color: "hsl(174 60% 45%)" },
  { label: "Accuracy", value: 95, color: "hsl(142 71% 45%)" },
  { label: "Content Format", value: 92, color: "hsl(142 71% 45%)" },
];

const overallScore = 91;

export const ContentScoreDashboard = () => {
  // Arc for the gauge
  const r = 60;
  const cx = 80;
  const cy = 80;
  const startAngle = -210;
  const endAngle = 30;
  const totalAngle = endAngle - startAngle; // 240 degrees
  const filledAngle = (overallScore / 100) * totalAngle;

  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const arcPoint = (angle: number) => ({
    x: cx + r * Math.cos(toRad(angle)),
    y: cy + r * Math.sin(toRad(angle)),
  });

  const bgStart = arcPoint(startAngle);
  const bgEnd = arcPoint(endAngle);
  const fillEnd = arcPoint(startAngle + filledAngle);
  const largeArcBg = totalAngle > 180 ? 1 : 0;
  const largeArcFill = filledAngle > 180 ? 1 : 0;

  return (
    <div className="rounded-2xl border-2 border-[hsl(188_78%_41%_/_0.25)] bg-[hsl(210_50%_8%)] p-6 md:p-8">
      {/* Overall Score Gauge */}
      <div className="flex flex-col items-center mb-8">
        <svg width="160" height="120" viewBox="0 0 160 120">
          {/* Background arc */}
          <path
            d={`M ${bgStart.x} ${bgStart.y} A ${r} ${r} 0 ${largeArcBg} 1 ${bgEnd.x} ${bgEnd.y}`}
            fill="none"
            stroke="hsl(210 30% 20%)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Filled arc */}
          <path
            d={`M ${bgStart.x} ${bgStart.y} A ${r} ${r} 0 ${largeArcFill} 1 ${fillEnd.x} ${fillEnd.y}`}
            fill="none"
            stroke="hsl(142 71% 45%)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Score text */}
          <text
            x={cx}
            y={cy - 2}
            textAnchor="middle"
            fill="white"
            fontWeight="800"
            fontSize="28"
            fontFamily="inherit"
          >
            {overallScore}
          </text>
          <text
            x={cx}
            y={cy + 14}
            textAnchor="middle"
            fill="hsl(210 20% 60%)"
            fontSize="11"
            fontFamily="inherit"
          >
            / 100
          </text>
        </svg>
        <p className="text-sm font-semibold text-foreground mt-1">Dental Content Quality Score</p>
      </div>

      {/* Six Score Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {scores.map((score) => (
          <div
            key={score.label}
            className="rounded-xl border border-[hsl(188_78%_41%_/_0.2)] bg-[hsl(210_45%_12%)] p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">{score.label}</span>
              <span className="text-sm font-bold" style={{ color: score.color }}>
                {score.value}/100
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-[hsl(210_30%_20%)]">
              <div
                className="h-2 rounded-full transition-all"
                style={{
                  width: `${score.value}%`,
                  backgroundColor: score.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="text-xs text-muted-foreground mt-6 text-center leading-relaxed">
        Sample score for a GrowSmallBiz-managed dental content article. All content must pass minimum thresholds across all six dimensions before publication.
      </p>
    </div>
  );
};
