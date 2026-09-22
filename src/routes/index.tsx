import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ExternalLink,
  FileSearch,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Package,
  Phone,
  Scale,
  Ship,
  Truck,
  Warehouse,
  X,
} from "lucide-react";

import logo from "@/assets/medosa-logo.jpg.asset.json";
import emdsLogo from "@/assets/e-mds.png.asset.json";
import aaccLogo from "@/assets/aacc.png.asset.json";
import heroPort from "@/assets/hero-port.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Medosa | Gümrük Müşavirliği, Dış Ticaret ve Teknoloji" },
      {
        name: "description",
        content:
          "Medosa; ithalat, ihracat, antrepo, transit ticaret ve gümrük mevzuat danışmanlığında dijital çözümler sunar. Beyanname takibi ve e-uygulamalarla hızlı gümrükleme.",
      },
      {
        property: "og:title",
        content: "Medosa | Gümrük Müşavirliği, Dış Ticaret ve Teknoloji",
      },
      {
        property: "og:description",
        content:
          "İthalat, ihracat, antrepo ve transit ticaret operasyonlarınızı teknolojiyle hızlandırın. Medosa e-takip portalı ile beyannamenizi anında sorgulayın.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/905000000000";

const NAV = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#etakip", label: "E-Takip" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#iletisim", label: "İletişim" },
];

const SERVICES = [
  {
    icon: Package,
    title: "İthalat İşlemleri",
    desc: "Eşyanın tarife tespitinden gümrük beyannamesinin kapanmasına kadar tüm ithalat sürecinin uçtan uca yönetimi.",
    points: ["GTİP tespiti", "TAREKS / TSE / TARIM", "Muafiyet ve teşvik"],
  },
  {
    icon: Ship,
    title: "İhracat İşlemleri",
    desc: "Beyanname tescili, menşe ve dolaşım belgeleri ile ihracat operasyonlarınızda kesintisiz akış.",
    points: ["ATR / EUR.1 / Menşe", "Kapanma takibi", "İhracat teşvikleri"],
  },
  {
    icon: Warehouse,
    title: "Antrepo Hizmetleri",
    desc: "Genel ve özel antrepo süreçlerinde stok, süre ve devir takibinin dijital kontrolü.",
    points: ["Antrepo beyannamesi", "Stok mutabakatı", "Süre uyarıları"],
  },
  {
    icon: Truck,
    title: "Transit Ticaret",
    desc: "Transit ve aktarma işlemlerinde rota, teminat ve NCTS süreçlerinin eksiksiz yönetimi.",
    points: ["NCTS / TIR", "Teminat yönetimi", "Liman & aktarma"],
  },
  {
    icon: Scale,
    title: "Gümrük Mevzuat Danışmanlığı",
    desc: "Mevzuat değişikliklerine karşı proaktif danışmanlık, denetim ve itiraz süreçleri.",
    points: ["YYS başvuru desteği", "Denetim & itiraz", "Eğitim programları"],
  },
  {
    icon: Globe2,
    title: "Lojistik Koordinasyon",
    desc: "Taşıma, sigorta ve depolama paydaşlarınızla tek noktadan koordinasyon ve raporlama.",
    points: ["Navlun takibi", "Sigorta", "Maliyet raporu"],
  },
];

const PORTALS: {
  name: string;
  desc: string;
  href: string;
  logo?: string;
}[] = [
  {
    name: "e-mds",
    desc: "Medosa dijital dosya ve operasyon portalı",
    href: "#etakip",
    logo: emdsLogo.url,
  },
  {
    name: "aacc",
    desc: "Antrepo & araç kontrol uygulaması",
    href: "#etakip",
    logo: aaccLogo.url,
  },
  {
    name: "Ticaret Bakanlığı",
    desc: "Resmî gümrük işlemleri ve duyurular",
    href: "https://www.ticaret.gov.tr",
  },
  {
    name: "BİLGE / Tek Pencere",
    desc: "Beyanname ve e-belge sistemi",
    href: "https://uygulama.gtb.gov.tr",
  },
];

const METRICS = [
  { value: "20+", label: "Yıllık sektör deneyimi" },
  { value: "45.000+", label: "Tamamlanan beyanname" },
  { value: "%99,4", label: "Zamanında gümrükleme" },
  { value: "7/24", label: "Operasyon desteği" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl ring-1 ring-border">
              <img src={logo.url} alt="Medosa logosu" className="h-full w-full object-cover" />
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight text-navy">
              MEDOSA
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Teklif Alın
            </a>
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
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-foreground"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#iletisim"
                onClick={() => setMenuOpen(false)}
                className="rounded-md bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Teklif Alın
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep">
        <img
          src={heroPort}
          alt="Konteyner limanı"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep/85 to-cobalt/30" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white/90">
              CUSTOMS • TRADE • TECHNOLOGY
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-white md:text-6xl">
              Gümrükte hız, dış ticarette
              <span className="block bg-gradient-to-r from-white via-steel to-cobalt bg-clip-text text-transparent">
                teknolojiyle güven.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              Medosa; ithalat, ihracat, antrepo ve transit ticaret operasyonlarınızı uzman gümrük
              müşavirliği kadrosu ve kendi geliştirdiği dijital takip altyapısıyla tek çatı altında
              yönetir.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#iletisim"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-cobalt px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Teklif Alın <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
              >
                <MessageCircle className="h-4 w-4" /> Hızlı İletişim
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/15 bg-white/10 lg:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m.label} className="bg-navy-deep/70 px-5 py-6 backdrop-blur">
                <div className="font-display text-2xl font-extrabold text-white md:text-3xl">
                  {m.value}
                </div>
                <div className="mt-1 text-xs text-white/65 md:text-sm">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section id="hizmetler" className="facet-bg mx-auto max-w-7xl px-5 py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cobalt">
            Hizmetlerimiz
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            Dış ticaretin her adımında yanınızdayız
          </h2>
          <p className="mt-4 text-muted-foreground">
            Operasyonun tamamını tek ekiple yürütüyor, mevzuat riskini azaltıyor ve süreçleri
            ölçülebilir hale getiriyoruz.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-cobalt/40 hover:shadow-xl hover:shadow-cobalt/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-navy to-cobalt text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cobalt" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* E-Takip */}
      <section id="etakip" className="bg-navy py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-steel">
              E-Takip & E-Uygulamalar
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Beyannamenizin durumunu saniyeler içinde görün
            </h2>
            <p className="mt-4 text-white/70">
              Beyanname veya dosya numaranızla sorgulama yapın; tescil, muayene, ödeme ve kapanma
              adımlarını anlık olarak takip edin. Medosa e-mds ve aacc sistemleri ile Ticaret
              Bakanlığı uygulamalarına tek ekrandan erişin.
            </p>

            <div className="mt-8 rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <label
                htmlFor="beyanname"
                className="text-sm font-semibold text-white/85"
              >
                Beyanname / Dosya Sorgulama
              </label>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setResult(
                    query.trim()
                      ? `“${query.trim()}” numaralı kayıt için sorgulama talebiniz alındı. Operasyon ekibimiz durum bilgisini en kısa sürede paylaşacaktır.`
                      : null,
                  );
                }}
                className="mt-3 flex flex-col gap-3 sm:flex-row"
              >
                <div className="relative flex-1">
                  <FileSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
                  <input
                    id="beyanname"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Örn: 26341300IM123456"
                    className="w-full rounded-md border border-white/20 bg-navy-deep/60 py-3 pl-9 pr-3 text-sm text-white placeholder:text-white/40 focus:border-cobalt focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-cobalt px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Sorgula
                </button>
              </form>
              {result && (
                <p className="mt-4 rounded-md border border-cobalt/40 bg-cobalt/10 p-3 text-sm text-white/85">
                  {result}
                </p>
              )}
              <div className="mt-5 flex flex-wrap gap-2">
                {["Tescil", "Muayene", "Vergi Ödeme", "Kapanma"].map((step, i) => (
                  <span
                    key={step}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
                  >
                    {i + 1}. {step}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PORTALS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex h-full flex-col justify-between rounded-xl border border-white/15 bg-white/5 p-6 transition-colors hover:border-cobalt/60 hover:bg-white/10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base font-bold text-white">{p.name}</h3>
                    <ExternalLink className="h-4 w-4 text-white/40 transition-colors group-hover:text-cobalt" />
                  </div>
                  <p className="mt-2 text-sm text-white/65">{p.desc}</p>
                </div>
                <span className="mt-6 text-xs font-semibold uppercase tracking-wide text-steel">
                  Sisteme git
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Hakkımızda */}
      <section id="hakkimizda" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cobalt">
              Hakkımızda
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
              Gümrük müşavirliğini teknolojiyle birleştiren ekip
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Medosa, yetkilendirilmiş gümrük müşavirliği tecrübesini kendi geliştirdiği dijital
              uygulamalarla buluşturur. Her dosya; sorumlu müşavir, operasyon uzmanı ve dijital
              takip altyapısıyla birlikte yürütülür. Amacımız, işlem sürelerini kısaltırken mevzuat
              uyumunu en üst seviyede tutmaktır.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Yetkin müşavir kadrosu",
                "Şeffaf maliyet raporlaması",
                "Dijital dosya arşivi",
                "Liman ve gümrük sahasında saha ekibi",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Building2, t: "Kurumsal yapı", d: "Kurumsal firmalara özel dedike operasyon ekibi." },
              { icon: Globe2, t: "Global ağ", d: "Yurt dışı acente ve taşıyıcı ağıyla uçtan uca çözüm." },
              { icon: Scale, t: "Mevzuat uyumu", d: "Güncel mevzuat takibi ve risk analizi." },
              { icon: FileSearch, t: "Şeffaf takip", d: "Her aşamada bildirim ve raporlama." },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border border-border bg-card p-6">
                <c.icon className="h-6 w-6 text-cobalt" />
                <h3 className="mt-4 text-base font-bold text-navy">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İletişim */}
      <section id="iletisim" className="bg-secondary py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cobalt">
              İletişim
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">Teklif alın</h2>
            <p className="mt-4 text-muted-foreground">
              Operasyonunuzu birlikte planlayalım. Formu doldurun, uzman ekibimiz aynı gün içinde
              size dönüş yapsın.
            </p>
            <div className="mt-8 space-y-4">
              <a href="tel:+902120000000" className="flex items-center gap-3 text-sm text-foreground">
                <Phone className="h-5 w-5 text-cobalt" /> +90 212 000 00 00
              </a>
              <a href="mailto:info@medosa.com.tr" className="flex items-center gap-3 text-sm text-foreground">
                <Mail className="h-5 w-5 text-cobalt" /> info@medosa.com.tr
              </a>
              <p className="flex items-center gap-3 text-sm text-foreground">
                <MapPin className="h-5 w-5 text-cobalt" /> İstanbul, Türkiye
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp ile hızlı destek
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-xl border border-border bg-card p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Ad Soyad" name="ad" />
              <Field label="Firma" name="firma" />
              <Field label="E-posta" name="email" type="email" />
              <Field label="Telefon" name="tel" type="tel" />
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-foreground" htmlFor="konu">
                Hizmet konusu
              </label>
              <select
                id="konu"
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-cobalt focus:outline-none"
              >
                {SERVICES.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-foreground" htmlFor="mesaj">
                Mesajınız
              </label>
              <textarea
                id="mesaj"
                rows={4}
                required
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-cobalt focus:outline-none"
                placeholder="Yük tipi, güzergâh ve termin bilgisi..."
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-cobalt px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Teklif Talebi Gönder
            </button>
            {sent && (
              <p className="mt-4 rounded-md border border-cobalt/30 bg-cobalt/10 p-3 text-sm text-navy">
                Talebiniz alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-deep py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Medosa logosu" className="h-10 w-10 object-cover" />
            <div>
              <div className="font-display text-sm font-extrabold text-white">MEDOSA</div>
              <div className="text-xs text-white/50">Customs • Trade • Technology</div>
            </div>
          </div>
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Medosa Gümrük Müşavirliği. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-cobalt text-white shadow-lg shadow-cobalt/40 transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-cobalt focus:outline-none"
      />
    </div>
  );
}
