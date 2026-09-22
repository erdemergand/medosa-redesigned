import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/medosa-logo.jpg.asset.json";
import { NAV, WHATSAPP } from "@/lib/site-data";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl ring-1 ring-border">
            <img src={logo.url} alt="Medosa logosu" className="h-full w-full object-cover" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-navy">
            MEDOSA
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Teklif Alın
          </Link>
        </div>

        <button
          aria-label="Menü"
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-md p-2 text-foreground md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/iletisim"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Teklif Alın
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
