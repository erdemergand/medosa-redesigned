import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Building2, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { CITY_PAGES, cityBranch, cityOffices, getCityPage } from "@/lib/city-data";
import { breadcrumbJsonLd, canonical, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/gumruk-musavirligi/$sehir")({
  loader: ({ params }) => {
    if (!getCityPage(params.sehir)) throw notFound();
    return null;
  },
  head: ({ params }) => {
    const page = getCityPage(params.sehir);
    if (!page) {
      return { meta: [{ title: "Sayfa bulunamadı" }, { name: "robots", content: "noindex" }] };
    }
    const path = `/gumruk-musavirligi/${page.slug}`;
    const branch = cityBranch(page);
    const offices = cityOffices(page);
    return {
      meta: [
        { title: page.title },
        { name: "description", content: page.description },
        { name: "keywords", content: page.keywords },
        { property: "og:title", content: page.title },
        { property: "og:description", content: page.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonical(path) },
        { name: "twitter:title", content: page.title },
        { name: "twitter:description", content: page.description },
      ],
      links: [{ rel: "canonical", href: canonical(path) }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": `${SITE_URL}${path}#business`,
            name: `Medosa Gümrük Müşavirliği — ${page.city}`,
            description: page.description,
            url: canonical(path),
            image: `${SITE_URL}/favicon.ico`,
            telephone: branch?.phoneHref ?? "+902125514307",
            email: branch?.email ?? "info@medosa.com.tr",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: branch?.address ?? page.city,
              addressLocality: page.city,
              addressCountry: "TR",
            },
            geo: { "@type": "GeoCoordinates", latitude: page.lat, longitude: page.lng },
            areaServed: offices.map((o) => ({ "@type": "City", name: o.city })),
            parentOrganization: {
              "@type": "Organization",
              name: "Medosa Gümrük Müşavirliği",
              url: SITE_URL,
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Ana Sayfa", path: "/" },
              { name: "Gümrük Müşavirliği", path: "/hizmetler" },
              { name: `${page.city} Gümrük Müşavirliği`, path },
            ]),
          ),
        },
      ],
    };
  },
  component: CityPageView,
});

function CityPageView() {
  const { sehir } = Route.useParams();
  const page = getCityPage(sehir);
  if (!page) return null;
  const branch = cityBranch(page);
  const offices = cityOffices(page);

  return (
    <>
      <PageHero
        eyebrow={`${page.city} Gümrük Müşavirliği`}
        title={`${page.locative} gümrük müşavirliği ve gümrükleme hizmetleri`}
        desc={page.description}
      >
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cobalt to-navy px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cobalt/25 transition hover:-translate-y-0.5"
          >
            İletişime geçin <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/hizmetler"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10"
          >
            Tüm hizmetler
          </Link>
        </div>
      </PageHero>

      <section className="facet-bg mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="eyebrow text-cobalt">Bölge operasyonu</span>
            <h2 className="mt-3 text-2xl font-extrabold text-navy md:text-3xl">
              {page.city}&apos;da gümrük işlemlerinizi tek ekiple yürütüyoruz
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {page.intro}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {page.highlights.map((h) => (
                <article key={h.title} className="soft-card rounded-2xl p-5">
                  <CheckCircle2 className="h-5 w-5 text-cobalt" />
                  <h3 className="mt-3 text-sm font-bold text-navy">{h.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{h.desc}</p>
                </article>
              ))}
            </div>

            <h3 className="mt-10 text-sm font-bold uppercase tracking-wide text-navy">
              {page.city} ve çevresinde çalıştığımız gümrük müdürlükleri
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {offices.map((o) => (
                <li
                  key={o.name}
                  className="flex items-start gap-2 rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-muted-foreground"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                  {o.name}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-sm font-bold uppercase tracking-wide text-navy">
              Deneyimli olduğumuz sektörler
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {page.sectors.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-cobalt/20 bg-cobalt/5 px-3 py-1 text-xs font-semibold text-cobalt"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <aside className="soft-card h-fit rounded-2xl p-6">
            <div className="flex items-center gap-2 text-navy">
              <Building2 className="h-5 w-5 text-cobalt" />
              <h2 className="text-base font-bold">{branch?.city ?? page.city} ofisimiz</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {branch?.address ?? page.city}
            </p>
            <div className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
              <a
                href={`tel:${branch?.phoneHref ?? "+902125514307"}`}
                className="flex items-center gap-2 text-navy hover:text-cobalt"
              >
                <Phone className="h-4 w-4 text-cobalt" />
                {branch?.phone ?? "0212 551 43 07"}
              </a>
              <a
                href="mailto:info@medosa.com.tr"
                className="flex items-center gap-2 text-navy hover:text-cobalt"
              >
                <Mail className="h-4 w-4 text-cobalt" />
                info@medosa.com.tr
              </a>
            </div>
            <Link
              to="/iletisim"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-4 py-3 text-sm font-semibold text-white transition hover:bg-cobalt"
            >
              Bize ulaşın <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-navy">Diğer şehirler</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {CITY_PAGES.filter((c) => c.slug !== page.slug).map((c) => (
              <Link
                key={c.slug}
                to="/gumruk-musavirligi/$sehir"
                params={{ sehir: c.slug }}
                className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-navy transition hover:border-cobalt hover:text-cobalt"
              >
                {c.city} Gümrük Müşavirliği
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
