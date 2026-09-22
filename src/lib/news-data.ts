/** "haber" herkese açık; "duyuru" detayı yalnızca aacc portal girişi ile görülebilir. */
export type NewsKind = "haber" | "duyuru";

export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string; // ISO
  kind: NewsKind;
  href?: string | undefined;
};

/** Duyuru detayları için aacc portal giriş adresi. */
export const AACC_PORTAL_URL = "https://www.aacc.com.tr";

/**
 * AACC portalındaki haber/duyuru akışı yayına alınana kadar kullanılan
 * yedek içerik. Sunucu tarafı (src/lib/news.functions.ts) portaldan veri
 * çekemezse bu liste gösterilir.
 */
export const FALLBACK_NEWS: NewsItem[] = [
  {
    id: "1",
    title: "Gümrük Yönetmeliği'nde güncelleme",
    summary:
      "Beyanname tescil süreçlerine ilişkin usul değişiklikleri Resmî Gazete'de yayımlandı; yürürlük tarihine dikkat edilmelidir.",
    category: "Mevzuat",
    kind: "haber",
    date: new Date().toISOString(),
  },
  {
    id: "2",
    title: "TAREKS başvurularında yeni ekran",
    summary:
      "Ticaret Bakanlığı TAREKS uygulamasında ürün güvenliği başvuru ekranları yenilendi.",
    category: "E-Uygulama",
    kind: "haber",
    date: new Date(Date.now() - 864e5).toISOString(),
  },
  {
    id: "3",
    title: "Antrepo stok mutabakatı hatırlatması",
    summary:
      "Ay sonu antrepo stok mutabakatlarınızı aacc portalinden tek ekranda kontrol edebilirsiniz.",
    category: "Antrepo",
    kind: "duyuru",
    date: new Date(Date.now() - 3 * 864e5).toISOString(),
  },
  {
    id: "4",
    title: "Kapıkule'de yoğunluk bilgilendirmesi",
    summary:
      "Sınır kapısındaki araç yoğunluğu nedeniyle transit süreçlerinde planlama önerilir.",
    category: "Operasyon",
    kind: "duyuru",
    date: new Date(Date.now() - 5 * 864e5).toISOString(),
  },
  {
    id: "5",
    title: "Menşe ispat belgelerinde dikkat edilecekler",
    summary:
      "Elektronik menşe sorgulamada doğrulanamayan belgeler için yeni kontrol adımları uygulanıyor.",
    category: "Mevzuat",
    kind: "haber",
    date: new Date(Date.now() - 8 * 864e5).toISOString(),
  },
  {
    id: "6",
    title: "Müşterilerimize özel operasyon bilgilendirmesi",
    summary:
      "Dönemsel operasyon planlaması ve firmanıza özel süreç notları aacc portalinde yayımlandı.",
    category: "Duyuru",
    kind: "duyuru",
    date: new Date(Date.now() - 10 * 864e5).toISOString(),
  },
  {
    id: "7",
    title: "Yetkilendirilmiş yükümlü (YYS) denetimlerinde güncel takvim",
    summary:
      "YYS sahibi firmalar için yıllık iç denetim raporlarının sunum takvimi güncellendi.",
    category: "Mevzuat",
    kind: "haber",
    date: new Date(Date.now() - 12 * 864e5).toISOString(),
  },
  {
    id: "8",
    title: "Tek Pencere Sistemi'nde yeni belge kodları",
    summary:
      "İthalatta kontrol belgesi süreçleri için TPS'ye eklenen belge kodları yayımlandı.",
    category: "E-Uygulama",
    kind: "haber",
    date: new Date(Date.now() - 15 * 864e5).toISOString(),
  },
  {
    id: "9",
    title: "Konteyner navlun ve demuraj eğilimleri",
    summary:
      "Ege ve Marmara limanlarında güncel demuraj süreleri ve planlama önerileri.",
    category: "Lojistik",
    kind: "haber",
    date: new Date(Date.now() - 18 * 864e5).toISOString(),
  },
  {
    id: "10",
    title: "Beyanname arşiv raporlarınız yenilendi",
    summary:
      "Firmanıza özel dönemsel beyanname raporları e-mds üzerinden indirilebilir durumda.",
    category: "Duyuru",
    kind: "duyuru",
    date: new Date(Date.now() - 20 * 864e5).toISOString(),
  },
  {
    id: "11",
    title: "Resmî tatil dönemi operasyon planı",
    summary:
      "Tatil döneminde gümrük idarelerindeki çalışma saatleri ve nöbetçi ekip bilgileri.",
    category: "Operasyon",
    kind: "duyuru",
    date: new Date(Date.now() - 24 * 864e5).toISOString(),
  },
  {
    id: "12",
    title: "Antrepo süre aşımı uyarı sistemi",
    summary:
      "Süre aşımı yaklaşan eşyalarınız için otomatik uyarılar portal hesabınıza tanımlandı.",
    category: "Antrepo",
    kind: "duyuru",
    date: new Date(Date.now() - 28 * 864e5).toISOString(),
  },
];
