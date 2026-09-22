import { Link } from "@tanstack/react-router";

import logoFull from "@/assets/medosa-logo-full.png.asset.json";
import { NAV } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="logo-tile flex h-32 w-32 items-center justify-center rounded-full bg-white p-4 shadow-lg md:h-36 md:w-36">
            <img
              src={logoFull.url}
              alt="Medosa logosu"
              className="h-full w-full object-contain"
            />
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
