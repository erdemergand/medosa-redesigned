export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string; // ISO
  href?: string | undefined;
};

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
    date: new Date().toISOString(),
  },
  {
    id: "2",
    title: "TAREKS başvurularında yeni ekran",
    summary:
      "Ticaret Bakanlığı TAREKS uygulamasında ürün güvenliği başvuru ekranları yenilendi.",
    category: "E-Uygulama",
    date: new Date(Date.now() - 864e5).toISOString(),
  },
  {
    id: "3",
    title: "Antrepo stok mutabakatı hatırlatması",
    summary:
      "Ay sonu antrepo stok mutabakatlarınızı aacc portalinden tek ekranda kontrol edebilirsiniz.",
    category: "Antrepo",
    date: new Date(Date.now() - 3 * 864e5).toISOString(),
  },
  {
    id: "4",
    title: "Kapıkule'de yoğunluk bilgilendirmesi",
    summary:
      "Sınır kapısındaki araç yoğunluğu nedeniyle transit süreçlerinde planlama önerilir.",
    category: "Operasyon",
    date: new Date(Date.now() - 5 * 864e5).toISOString(),
  },
  {
    id: "5",
    title: "Menşe ispat belgelerinde dikkat edilecekler",
    summary:
      "Elektronik menşe sorgulamada doğrulanamayan belgeler için yeni kontrol adımları uygulanıyor.",
    category: "Mevzuat",
    date: new Date(Date.now() - 8 * 864e5).toISOString(),
  },
];
