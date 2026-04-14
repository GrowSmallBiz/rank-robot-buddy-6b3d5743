const spokes = [
  "Implants & Restorative",
  "Cosmetic Dentistry",
  "Emergency Dental",
  "Family & Pediatric",
  "Invisalign & Ortho",
  "Preventive Care",
  "Oral Health Education",
];

export const TopicMapVisual = () => {
  const cx = 300;
  const cy = 200;
  const hubRx = 110;
  const hubRy = 36;
  const spokeRadius = 160;

  const spokePositions = spokes.map((label, i) => {
    const angle = (i / spokes.length) * 2 * Math.PI - Math.PI / 2;
    return {
      label,
      x: cx + spokeRadius * Math.cos(angle),
      y: cy + spokeRadius * Math.sin(angle),
    };
  });

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 600 400"
        className="w-full max-w-3xl mx-auto"
        style={{ minWidth: 480 }}
      >
        {/* Lines from hub to spokes */}
        {spokePositions.map((sp, i) => (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={sp.x}
            y2={sp.y}
            stroke="hsl(174 60% 40%)"
            strokeWidth="1.5"
            strokeOpacity="0.45"
          />
        ))}

        {/* Hub node — orange fill */}
        <ellipse cx={cx} cy={cy} rx={hubRx} ry={hubRy} fill="hsl(16 85% 55%)" />
        <text
          x={cx}
          y={cy - 6}
          textAnchor="middle"
          fill="white"
          fontWeight="700"
          fontSize="11"
          fontFamily="inherit"
        >
          Dental Practice
        </text>
        <text
          x={cx}
          y={cy + 10}
          textAnchor="middle"
          fill="white"
          fontWeight="700"
          fontSize="11"
          fontFamily="inherit"
        >
          Authority
        </text>

        {/* Spoke nodes */}
        {spokePositions.map((sp, i) => {
          const w = 120;
          const h = 32;
          return (
            <g key={i}>
              <rect
                x={sp.x - w / 2}
                y={sp.y - h / 2}
                width={w}
                height={h}
                rx={8}
                fill="hsl(210 50% 10%)"
                stroke="hsl(174 60% 40%)"
                strokeWidth="1.5"
              />
              <text
                x={sp.x}
                y={sp.y + 4}
                textAnchor="middle"
                fill="white"
                fontSize="9.5"
                fontWeight="500"
                fontFamily="inherit"
              >
                {sp.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
