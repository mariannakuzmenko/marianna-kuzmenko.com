/**
 * Cinematic fixed background: soft sky + architectural white shapes + drifting clouds.
 * Stays static while content scrolls above it.
 */
export const BreathingBackground = () => {
  return (
    <div className="sky-bg" aria-hidden="true">
      {/* Sky gradient base */}
      <div className="sky-base" />

      {/* Soft glow orbs */}
      <div className="sky-glow sky-glow-1" />
      <div className="sky-glow sky-glow-2" />
      <div className="sky-glow sky-glow-3" />

      {/* Drifting clouds */}
      <div className="cloud cloud-1" />
      <div className="cloud cloud-2" />
      <div className="cloud cloud-3" />

      {/* Architectural silhouette */}
      <svg
        className="sky-architecture"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bldgGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(0 0% 100% / 0.95)" />
            <stop offset="100%" stopColor="hsl(205 60% 96% / 0.85)" />
          </linearGradient>
          <linearGradient id="bldgGradSoft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(0 0% 100% / 0.7)" />
            <stop offset="100%" stopColor="hsl(205 70% 92% / 0.55)" />
          </linearGradient>
          <linearGradient id="bldgFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(205 60% 97% / 0.55)" />
            <stop offset="100%" stopColor="hsl(208 60% 90% / 0.4)" />
          </linearGradient>
        </defs>

        {/* Far layer */}
        <g fill="url(#bldgFar)">
          <rect x="40"   y="520" width="120" height="380" rx="6" />
          <rect x="200"  y="470" width="90"  height="430" rx="6" />
          <rect x="320"  y="540" width="160" height="360" rx="8" />
          <rect x="520"  y="500" width="80"  height="400" rx="4" />
          <rect x="640"  y="560" width="140" height="340" rx="6" />
          <rect x="820"  y="490" width="100" height="410" rx="6" />
          <rect x="960"  y="540" width="180" height="360" rx="8" />
          <rect x="1180" y="510" width="90"  height="390" rx="4" />
          <rect x="1300" y="540" width="120" height="360" rx="6" />
        </g>

        {/* Mid layer — softer */}
        <g fill="url(#bldgGradSoft)">
          <rect x="80"   y="600" width="180" height="300" rx="10" />
          <rect x="300"  y="640" width="140" height="260" rx="10" />
          <rect x="480"  y="610" width="220" height="290" rx="14" />
          <rect x="740"  y="650" width="120" height="250" rx="8" />
          <rect x="900"  y="620" width="200" height="280" rx="12" />
          <rect x="1140" y="650" width="160" height="250" rx="10" />
        </g>

        {/* Front layer — main */}
        <g fill="url(#bldgGrad)">
          {/* curved tower */}
          <path d="M120 720 Q120 700 140 700 L260 700 Q280 700 280 720 L280 900 L120 900 Z" />
          {/* tall block */}
          <rect x="320" y="680" width="180" height="220" rx="14" />
          {/* low wide */}
          <rect x="540" y="740" width="280" height="160" rx="18" />
          {/* tower with arch */}
          <path d="M860 700 Q860 670 900 670 L1020 670 Q1060 670 1060 700 L1060 900 L860 900 Z" />
          {/* slim */}
          <rect x="1100" y="710" width="90" height="190" rx="10" />
          {/* dome */}
          <path d="M1220 760 Q1220 720 1280 720 Q1340 720 1340 760 L1340 900 L1220 900 Z" />
        </g>

        {/* Window hints — barely visible */}
        <g opacity="0.35" fill="hsl(205 70% 88%)">
          <circle cx="200" cy="760" r="3" /><circle cx="220" cy="760" r="3" /><circle cx="240" cy="760" r="3" />
          <circle cx="200" cy="790" r="3" /><circle cx="220" cy="790" r="3" /><circle cx="240" cy="790" r="3" />
          <circle cx="380" cy="730" r="3" /><circle cx="410" cy="730" r="3" /><circle cx="440" cy="730" r="3" />
          <circle cx="380" cy="770" r="3" /><circle cx="410" cy="770" r="3" /><circle cx="440" cy="770" r="3" />
          <circle cx="940" cy="730" r="3" /><circle cx="970" cy="730" r="3" /><circle cx="1000" cy="730" r="3" />
        </g>
      </svg>

      {/* Foreground haze */}
      <div className="sky-haze" />

      {/* Particles */}
      <div className="sky-particles">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className={`sky-particle sky-particle-${(i % 5) + 1}`} style={{ left: `${(i * 7.3) % 100}%`, animationDelay: `${i * 1.7}s` }} />
        ))}
      </div>
    </div>
  );
};
