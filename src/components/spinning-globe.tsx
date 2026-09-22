import worldMap from "@/assets/world-map.jpg";

const ORBIT = [
  { code: "de", angle: 0 },
  { code: "cn", angle: 120 },
  { code: "us", angle: 240 },
];

export function SpinningGlobe() {
  return (
    <div className="relative h-20 w-20 shrink-0">
      {/* atmosphere */}
      <span className="absolute inset-1.5 rounded-full bg-cobalt/30 blur-md" />

      {/* sphere */}
      <div className="absolute inset-2 overflow-hidden rounded-full shadow-lg shadow-cobalt/40 ring-1 ring-white/40">
        <span
          className="globe-map absolute inset-0"
          style={{ backgroundImage: `url(${worldMap})` }}
        />
        {/* spherical shading */}
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_28%,rgba(255,255,255,0.55),rgba(255,255,255,0.05)_42%,rgba(0,0,0,0.35)_78%,rgba(0,0,0,0.65))]" />
        {/* limb highlight */}
        <span className="pointer-events-none absolute inset-0 rounded-full ring-[1.5px] ring-inset ring-sky-200/40" />
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
