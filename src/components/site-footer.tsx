import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";

import logoFull from "@/assets/medosa-logo-full.png.asset.json";
import { NewsletterForm } from "@/components/newsletter-form";
import { CITY_PAGES } from "@/lib/city-data";
import { NAV } from "@/lib/site-data";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.53 3h3.02l-6.6 7.54L21.75 21h-5.9l-4.63-6.05L5.93 21H2.9l7.06-8.07L2.25 3h6.05l4.19 5.54L17.53 3Zm-1.06 16.2h1.67L7.6 4.72H5.81l10.66 14.48Z" />
    </svg>
  );
}

const SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com/medosagumruk/", Icon: Instagram },
  { name: "Facebook", href: "https://www.facebook.com/medosagumruk/", Icon: Facebook },
  { name: "LinkedIn", href: "https://tr.linkedin.com/company/medosa-gumruk", Icon: Linkedin },
  { name: "X", href: "https://x.com/medosagumruk", Icon: XIcon },
];

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
          <Link to="/sektorel-akis" className="text-xs text-white/60 hover:text-white">
            Sektörel Akış
          </Link>
          {/* Şehir sayfaları görsel olarak gizli; arama motorları için bağlantı korunuyor. */}
          {CITY_PAGES.map((c) => (
            <Link
              key={c.slug}
              to="/gumruk-musavirligi/$sehir"
              params={{ sehir: c.slug }}
              className="sr-only"
            >
              {c.city} Gümrük Müşavirliği
            </Link>
          ))}

        </nav>
        <div className="flex w-full max-w-xs flex-col items-center gap-4 sm:items-end">
          <NewsletterForm variant="dark" />
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={name}
                title={name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Medosa Gümrük Müşavirliği
          </p>
        </div>
      </div>
    </footer>
  );
}
