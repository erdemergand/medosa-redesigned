const ORBIT = [
  { code: "de", angle: 0 },
  { code: "cn", angle: 120 },
  { code: "us", angle: 240 },
];

export function SpinningGlobe() {
  return (
    <div className="relative h-20 w-20 shrink-0">
      {/* sphere */}
      <div className="absolute inset-2 overflow-hidden rounded-full bg-gradient-to-br from-cobalt to-navy shadow-lg shadow-cobalt/35">
        <svg viewBox="0 0 100 100" className="spin-globe h-full w-full text-white/70">
          <g fill="none" stroke="currentColor" strokeWidth="1.4">
            <circle cx="50" cy="50" r="48" strokeOpacity="0.5" />
            <line x1="50" y1="2" x2="50" y2="98" strokeOpacity="0.45" />
            <ellipse cx="50" cy="50" rx="18" ry="48" strokeOpacity="0.55" />
            <ellipse cx="50" cy="50" rx="34" ry="48" strokeOpacity="0.35" />
            <line x1="2" y1="50" x2="98" y2="50" strokeOpacity="0.55" />
            <ellipse cx="50" cy="50" rx="48" ry="22" strokeOpacity="0.35" />
          </g>
          <g fill="currentColor" fillOpacity="0.9">
            <circle cx="34" cy="36" r="2.6" />
            <circle cx="62" cy="30" r="2" />
            <circle cx="70" cy="58" r="2.4" />
            <circle cx="40" cy="68" r="2" />
          </g>
        </svg>
        <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/35 via-transparent to-navy-deep/50" />
      </div>

      {/* orbiting flags */}
      <div className="spin-orbit absolute inset-0">
        {ORBIT.map((o) => (
          <span
            key={o.code}
            className="absolute left-1/2 top-1/2 block h-0 w-0"
            style={{ transform: `rotate(${o.angle}deg) translateY(-38px)` }}
          >
            <img
              src={`https://flagcdn.com/w20/${o.code}.png`}
              alt=""
              loading="lazy"
              className="spin-orbit-rev -ml-[9px] -mt-[6px] h-3 w-[18px] rounded-[2px] object-cover shadow ring-1 ring-white/70"
             
            />
          </span>
        ))}
      </div>
    </div>
  );
}
