/** Ana sayfadaki bilgi kutuları için gerçekçi, renkli SVG simgeler. */

type IconProps = { className?: string };

/** Avrupa Birliği bayrağı: lacivert zemin, 12 altın yıldız. */
export function EuFlagIcon({ className = "" }: IconProps) {
  const stars = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    return { x: 32 + 15 * Math.sin(angle), y: 32 - 15 * Math.cos(angle) };
  });
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Avrupa Birliği bayrağı">
      <rect x="2" y="8" width="60" height="48" rx="6" fill="#03308f" />
      <rect
        x="2"
        y="8"
        width="60"
        height="48"
        rx="6"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.35"
      />
      {stars.map((s, i) => (
        <path
          key={i}
          d="M0 -4 L1.18 -1.24 L4 -1.24 L1.6 0.6 L2.5 3.5 L0 1.8 L-2.5 3.5 L-1.6 0.6 L-4 -1.24 L-1.18 -1.24 Z"
          transform={`translate(${s.x} ${s.y}) scale(0.95)`}
          fill="#ffcc00"
        />
      ))}
    </svg>
  );
}

/** Dış ticaret: konteyner yüklü kargo gemisi ve deniz. */
export function TradeShipIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Konteyner gemisi">
      <rect x="0" y="0" width="64" height="64" rx="12" fill="#e6f4f6" />
      <path d="M0 42h64v22H0z" fill="#0e7490" />
      <path d="M0 42h64v6H0z" fill="#0ea5a4" opacity="0.8" />
      {/* gövde */}
      <path d="M8 34h46l-5 12H13z" fill="#1f2937" />
      <path d="M8 34h46l-1.2 3H9z" fill="#374151" />
      {/* konteynerler */}
      <rect x="14" y="26" width="9" height="7" fill="#ef4444" />
      <rect x="24" y="26" width="9" height="7" fill="#f59e0b" />
      <rect x="34" y="26" width="9" height="7" fill="#22c55e" />
      <rect x="19" y="19" width="9" height="6" fill="#3b82f6" />
      <rect x="29" y="19" width="9" height="6" fill="#ef4444" />
      {/* köprü üstü */}
      <rect x="45" y="22" width="8" height="11" rx="1.5" fill="#f8fafc" />
      <rect x="46.5" y="24" width="5" height="3" fill="#0ea5a4" />
      <rect x="52" y="14" width="1.6" height="9" fill="#94a3b8" />
    </svg>
  );
}

/** Gümrük mevzuatı: kanun kitabı, terazi ve resmî mühür. */
export function LawBookIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Mevzuat kitabı">
      <rect x="0" y="0" width="64" height="64" rx="12" fill="#fff7e6" />
      {/* kitap */}
      <path d="M10 18h20a6 6 0 016 6v26H16a6 6 0 01-6-6z" fill="#b45309" />
      <path d="M54 18H34a6 6 0 00-6 6v26h20a6 6 0 006-6z" fill="#d97706" />
      <path d="M30 24h4v26h-4z" fill="#92400e" />
      <path d="M14 26h14M14 31h14M36 26h14M36 31h14" stroke="#fde68a" strokeWidth="2" opacity="0.8" />
      {/* terazi */}
      <path d="M32 6v10" stroke="#475569" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M21 11h22" stroke="#475569" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M21 11l-4 6h8z" fill="#facc15" stroke="#a16207" strokeWidth="1" />
      <path d="M43 11l-4 6h8z" fill="#facc15" stroke="#a16207" strokeWidth="1" />
      <circle cx="32" cy="6" r="2.6" fill="#facc15" stroke="#a16207" strokeWidth="1" />
      {/* mühür */}
      <circle cx="48" cy="46" r="8" fill="#b91c1c" />
      <circle cx="48" cy="46" r="5.4" fill="none" stroke="#fecaca" strokeWidth="1.4" />
      <path d="M48 42.4l1.4 2.6 2.9.4-2.1 2 .5 2.9-2.7-1.4-2.7 1.4.5-2.9-2.1-2 2.9-.4z" fill="#fee2e2" />
    </svg>
  );
}
