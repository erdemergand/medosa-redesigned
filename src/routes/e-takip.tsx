import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Download, Mail, MapPin, ShieldCheck, TriangleAlert } from "lucide-react";
import { useState } from "react";

import { Modal } from "@/components/modal";
import { PageHero } from "@/components/page-hero";

import emdsLogo from "@/assets/e-mds.png.asset.json";
import aaccLogo from "@/assets/aacc.png.asset.json";
import emdsLogoDark from "@/assets/e-mds-dark.png";
import aaccLogoDark from "@/assets/aacc-dark.png";
import taahhutname from "@/assets/taahhutname.docx.asset.json";
import { breadcrumbJsonLd, canonical } from "@/lib/seo";

const TITLE = "E-Takip | Beyanname ve Antrepo Takip Portalları — Medosa";
const DESCRIPTION =
  "Medosa müşteri portalları: e-mds ile beyanname ve dijital evrak arşivi, aacc ile canlı yük, beyanname ve antrepo stok takibi. Güvenli giriş ve üyelik taahhütnamesi.";

export const Route = createFileRoute("/e-takip")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "beyanname sorgulama, gümrük beyanname takibi, antrepo stok takibi, e-mds, aacc, gümrük müşteri portalı",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical("/e-takip") },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: canonical("/e-takip") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Ana Sayfa", path: "/" },
            { name: "E-Takip", path: "/e-takip" },
          ]),
        ),
      },
    ],
  }),
  component: ETakip,
});

const PORTALS = [
  {
    name: "e-mds",
    logo: emdsLogo.url,
    logoDark: emdsLogoDark,
    href: "https://webgumruk.com/authentication/login.xhtml",
    desc: "Medosa dijital takip portalı. Beyannamelerinizi görüntüleyin, evrak arşivinize ulaşın ve belgelerinizi indirin.",
    features: ["Beyanname", "Evrak arşivi ve indirme"],
  },
  {
    name: "All About Customs Clearance",
    logo: aaccLogo.url,
    logoDark: aaccLogoDark,
    href: "https://gumruk.io/login",
    desc: "Uçtan uca canlı takip ve izleme platformu. Yükünüzün, beyannamenizin, antrepo stoğunuzun ve kargonuzun tüm sürecini anlık olarak izleyin.",
    features: [
      "Canlı yük takibi",
      "Canlı beyanname takibi",
      "Antrepo stok takibi",
      "Kargo ve tüm süreç izleme",
    ],
  },
];

function ETakip() {
  return (
    <>
      <PageHero
        eyebrow="E-Takip"
        title="Müşteri portallarımıza giriş"
        desc="e-mds ve aacc, Medosa müşterilerine özel iki ayrı portaldır. Kullanıcı bilgilerinizle giriş yaparak dosya ve antrepo hareketlerinizi anlık takip edebilirsiniz."
      >
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {PORTALS.map((p) => (
            <article key={p.name} className="glass-panel flex flex-col rounded-2xl p-7">
              <span className="group/logo flex h-44 w-full items-center justify-center overflow-hidden rounded-2xl bg-white p-4 dark:bg-white/5">
                <img
                  src={p.logo}
                  alt={`${p.name} logosu`}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover/logo:scale-105 dark:hidden"
                />
                <img
                  src={p.logoDark}
                  alt={`${p.name} logosu`}
                  className="hidden max-h-full max-w-full object-contain transition-transform duration-300 group-hover/logo:scale-105 dark:block"
                />
              </span>
              <h2 className="mt-5 font-display text-2xl font-extrabold text-white">{p.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cobalt to-primary px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                >
                  Giriş Yap
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <button
                  type="button"
                  onClick={() => setPortal(p.name)}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10"
                >
                  Neler yapabilirim?
                </button>
              </div>
            </article>
          ))}

        </div>
      </PageHero>

      {/* Üyelik ve güvenlik */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="soft-card rounded-2xl p-8">
            <span className="eyebrow text-cobalt">Nasıl üye olurum?</span>
            <h2 className="mt-3 text-xl font-bold text-navy">Üyelik başvurusu</h2>
            <ol className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-display font-extrabold text-cobalt">1.</span>
                Taahhütnamenin çıktısı alınarak ıslak kaşe ve şirketiniz adına imza yetkisine haiz kişi
                tarafından imzalanır.
              </li>
              <li className="flex gap-3">
                <span className="font-display font-extrabold text-cobalt">2.</span>
                İmza sirküleri ile birlikte taahhütname e-posta adresimize iletilir.
              </li>
              <li className="flex gap-3">
                <span className="font-display font-extrabold text-cobalt">3.</span>
                Islak kaşeli ve imzalı taahhütname, “Müşteri İlişkileri Departmanı” adına posta ya da
                kargo ile merkez adresimize gönderilir.
              </li>
            </ol>

            <a
              href={taahhutname.url}
              download="Medosa-Taahhutname-2026.docx"
              className="group mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cobalt to-primary px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Taahhütnameyi indir
            </a>
            <div className="mt-6 space-y-2 border-t border-border pt-5 text-sm text-foreground/85">
              <p className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" /> info@medosa.com.tr
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                Şirinevler Mah. Adnan Kahveci Bulvarı, Kocasinan İş Merkezi B Blok No: 200,
                Bahçelievler / İstanbul
              </p>
            </div>
          </article>

          <article className="soft-card rounded-2xl p-8">
            <span className="eyebrow text-cobalt">Güvenlik</span>
            <h2 className="mt-3 text-xl font-bold text-navy">İki faktörlü doğrulama</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Siz değerli müşterilerimize ait verilerin güvenliği bizim için en önemli konudur. Bu
              nedenle iki faktörlü doğrulama sistemine geçmiş bulunmaktayız. Aktivasyon aşamasında
              aşağıdaki adımlara dikkat etmenizi rica ederiz.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-foreground/85">
              <li className="flex gap-2">
                <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                Tanımlı e-posta adresiniz güncel değilse yeni taahhütname ile yeni hesap alınmalıdır.
              </li>
              <li className="flex gap-2">
                <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                Aktivasyon kodu e-postanızda spam kutusuna düşmüş olabilir.
              </li>
              <li className="flex gap-2">
                <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                Aktivasyon e-postası iki dakika içinde ulaşmazsa lütfen bize bildirin.
              </li>
              <li className="flex gap-2">
                <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                Taahhütnamede yetki verilen kişinin iş akdi sona erdiğinde tarafımıza bildirilmelidir.
              </li>
            </ul>
          </article>
        </div>
      </section>
      {PORTALS.map((p) => (
        <Modal
          key={p.name}
          open={portal === p.name}
          onClose={() => setPortal(null)}
          label={`${p.name} portalı`}
        >
          <span className="flex h-24 w-full items-center justify-center rounded-2xl bg-white p-3">
            <img src={p.logo} alt={`${p.name} logosu`} className="max-h-full max-w-full object-contain" />
          </span>
          <h2 className="mt-5 text-xl font-bold text-navy">{p.name}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          <ul className="mt-5 space-y-2 border-t border-border pt-4">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                <ShieldCheck className="h-4 w-4 shrink-0 text-cobalt" /> {f}
              </li>
            ))}
          </ul>
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cobalt to-primary px-6 text-sm font-semibold text-white"
          >
            Giriş Yap <ArrowRight className="h-4 w-4" />
          </a>
        </Modal>
      ))}
    </>

  );
}
