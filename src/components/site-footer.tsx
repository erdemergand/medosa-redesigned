import { Link } from "@tanstack/react-router";

import logoMark from "@/assets/medosa-mark.png.asset.json";
import { NAV } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row">
        <div className="flex items-center gap-3">
          <img src={logoMark.url} alt="Medosa logosu" className="h-16 w-16 object-contain" />
          <div>
            <div className="font-display text-lg font-extrabold text-white">MEDOSA</div>
            <div className="text-xs text-white/50">Customs • Trade • Technology</div>
          </div>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-5">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-xs text-white/60 hover:text-white">
              {n.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} Medosa Gümrük Müşavirliği
        </p>
      </div>
    </footer>
  );
}
