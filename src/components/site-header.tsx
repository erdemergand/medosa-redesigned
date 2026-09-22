import { Link } from "@tanstack/react-router";
import { Menu, Moon, Radar, Sun, X } from "lucide-react";
import { useState } from "react";

import logoFull from "@/assets/medosa-logo-full.png.asset.json";
import { NAV } from "@/lib/site-data";
import { useTheme } from "@/lib/theme";

function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Gündüz moduna geç" : "Gece moduna geç"}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted ${className}`}
    >
      {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
    </button>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoFull.url}
            alt="Medosa logosu"
            className="h-14 w-auto object-contain md:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) =>
            "featured" in n && n.featured ? (
              <Link
                key={n.to}
                to={n.to}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cobalt to-navy px-5 py-2 text-sm font-semibold text-white shadow-md shadow-cobalt/25 transition-all hover:-translate-y-0.5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                <Radar className="h-4 w-4" />
                {n.label}
              </Link>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                activeProps={{ className: "text-primary" }}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </Link>
            ),
          )}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Menü"
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-md p-2 text-foreground"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV.map((n) =>
              "featured" in n && n.featured ? (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cobalt to-navy px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <Radar className="h-4 w-4" /> {n.label}
                </Link>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-foreground"
                >
                  {n.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}
