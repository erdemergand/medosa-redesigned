import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, ShieldCheck, TriangleAlert } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import emdsLogo from "@/assets/e-mds.png.asset.json";
import aaccLogo from "@/assets/aacc.png.asset.json";

export const Route = createFileRoute("/e-takip")({
  head: () => ({
    meta: [
      { title: "E-Takip | Medosa Müşteri Portalları" },
      {
        name: "description",
        content:
          "Medosa müşteri portalları: e-mds dijital dosya ve operasyon takibi, aacc antrepo ve araç kontrol sistemi. İki faktörlü doğrulama ile güvenli giriş.",
      },
      { property: "og:title", content: "E-Takip | Medosa Müşteri Portalları" },
      {
        property: "og:description",
        content: "e-mds ve aacc portallarına giriş yapın, dosyalarınızı ve antrepo hareketlerinizi takip edin.",
      },
    ],
  }),
  component: ETakip,
});

const PORTALS = [
  {
    name: "e-mds",
    logo: emdsLogo.url,
    href: "https://www.e-mds.com.tr",
    desc: "Medosa dijital dosya ve operasyon takip portalı. Beyanname durumu, evrak arşivi ve cari hareketlerinizi tek ekrandan izleyin.",
    features: ["Beyanname ve dosya durumu", "Evrak arşivi ve indirme", "Cari hesap ve raporlar"],
  },
  {
    name: "aacc",
    logo: aaccLogo.url,
    href: "https://www.aacc.com.tr",
    desc: "Antrepo ve araç kontrol uygulaması. Stok, giriş-çıkış ve araç hareketlerini anlık olarak görüntüleyin.",
    features: ["Antrepo stok takibi", "Araç giriş-çıkış kontrolü", "Süre ve devir uyarıları"],
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
              <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/95 p-3">
                <img src={p.logo} alt={`${p.name} logosu`} className="h-full w-full object-contain" />
              </span>
              <h2 className="mt-5 font-display text-xl font-extrabold text-white">{p.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</p>
              <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-cobalt" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cobalt to-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
              >
                Giriş Yap
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
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
            <div className="mt-6 space-y-2 border-t border-border pt-5 text-sm text-foreground/85">
              <p className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" /> info@medosa.com.tr
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                Şirinevler Mh. Adnan Kahveci Bulvarı, Kocasinan İş Merkezi B Blok No: 200,
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
    </>
  );
}
