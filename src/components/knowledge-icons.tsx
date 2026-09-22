/** Ana sayfadaki bilgi kutuları için gerçekçi, renkli SVG simgeler.
 *  Hepsi 64x64 çerçeveyi tam dolduracak şekilde çizilmiştir. */

type IconProps = { className?: string };

/** Avrupa Birliği bayrağı: çerçeveyi tamamen dolduran lacivert zemin, 12 altın yıldız. */
export function EuFlagIcon({ className = "" }: IconProps) {
  const stars = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    return { x: 32 + 17 * Math.sin(angle), y: 32 - 17 * Math.cos(angle) };
  });
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Avrupa Birliği bayrağı">
      <rect x="0" y="0" width="64" height="64" fill="#003399" />
      {stars.map((s, i) => (
        <path
          key={i}
          d="M0 -4.4 L1.29 -1.36 L4.4 -1.36 L1.76 0.66 L2.75 3.85 L0 1.98 L-2.75 3.85 L-1.76 0.66 L-4.4 -1.36 L-1.29 -1.36 Z"
          transform={`translate(${s.x} ${s.y})`}
          fill="#ffcc00"
        />
      ))}
      {/* hafif ışık geçişi */}
      <rect x="0" y="0" width="64" height="64" fill="url(#eu-shine)" />
      <defs>
        <linearGradient id="eu-shine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#000000" stopOpacity="0.18" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Dış ticaret: konteyner limanı - vinç, yüklü gemi, deniz. */
export function TradeShipIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Konteyner limanı">
      <defs>
        <linearGradient id="trade-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bae6fd" />
          <stop offset="1" stopColor="#e0f2fe" />
        </linearGradient>
        <linearGradient id="trade-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0ea5e9" />
          <stop offset="1" stopColor="#075985" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="64" height="64" fill="url(#trade-sky)" />
      <circle cx="52" cy="13" r="6" fill="#fde68a" />
      {/* liman vinci */}
      <path d="M6 44V16h3v28z" fill="#64748b" />
      <path d="M6 18h30v3H6z" fill="#94a3b8" />
      <path d="M33 21v7" stroke="#475569" strokeWidth="1.6" />
      <rect x="30" y="27" width="6" height="4" fill="#f59e0b" />
      {/* deniz */}
      <path d="M0 44h64v20H0z" fill="url(#trade-sea)" />
      {/* gemi gövdesi */}
      <path d="M7 36h47l-6 11H13z" fill="#1e293b" />
      <path d="M7 36h47l-1.4 3H8.2z" fill="#334155" />
      <path d="M7 41h44.5l-1 2H7.6z" fill="#b91c1c" opacity="0.85" />
      {/* konteynerler */}
      <rect x="13" y="29" width="8.5" height="6" fill="#ef4444" />
      <rect x="22.5" y="29" width="8.5" height="6" fill="#f59e0b" />
      <rect x="32" y="29" width="8.5" height="6" fill="#22c55e" />
      <rect x="17.5" y="23" width="8.5" height="5.5" fill="#3b82f6" />
      <rect x="27" y="23" width="8.5" height="5.5" fill="#e11d48" />
      {/* köprü üstü */}
      <rect x="43" y="25" width="9" height="10" rx="1.5" fill="#f8fafc" />
      <rect x="44.6" y="27" width="5.8" height="2.6" fill="#0ea5e9" />
      <rect x="51" y="17" width="1.6" height="8" fill="#94a3b8" />
      {/* dalgalar */}
      <path
        d="M0 52c6 0 6 3 12 3s6-3 12-3 6 3 12 3 6-3 12-3 6 3 12 3"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.35"
        strokeWidth="1.6"
      />
    </svg>
  );
}

/** Gümrük mevzuatı: resmî mevzuat kitabı, terazi ve mühür. */
export function LawBookIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Gümrük mevzuatı">
      <defs>
        <linearGradient id="law-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1e293b" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="law-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fde68a" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="64" height="64" fill="url(#law-bg)" />
      {/* terazi */}
      <path d="M32 9v9" stroke="url(#law-gold)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M18 14h28" stroke="url(#law-gold)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="32" cy="9" r="2.6" fill="url(#law-gold)" />
      <path d="M18 14l-5 8h10z" fill="url(#law-gold)" />
      <path d="M46 14l-5 8h10z" fill="url(#law-gold)" />
      <path d="M18 14v1.5M46 14v1.5" stroke="#fde68a" strokeWidth="1" />
      {/* kitap */}
      <path d="M8 34h22a4 4 0 014 4v18H12a4 4 0 01-4-4z" fill="#7f1d1d" />
      <path d="M56 34H34a4 4 0 00-4 4v18h22a4 4 0 004-4z" fill="#991b1b" />
      <path d="M30 38h4v18h-4z" fill="#450a0a" />
      <path
        d="M13 42h14M13 46h14M37 42h14M37 46h14"
        stroke="#fca5a5"
        strokeWidth="1.6"
        opacity="0.7"
      />
      {/* mühür */}
      <circle cx="46" cy="50" r="7.5" fill="url(#law-gold)" />
      <circle cx="46" cy="50" r="5" fill="none" stroke="#7c2d12" strokeWidth="1.2" />
      <path
        d="M46 46.8l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4z"
        fill="#7c2d12"
      />
    </svg>
  );
}
