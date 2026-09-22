import {
  Building2,
  FileSearch,
  Globe2,
  Package,
  Scale,
  Ship,
  Truck,
  Warehouse,
} from "lucide-react";

export const NAV = [
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/hizmetler", label: "Hizmetler" },
  { to: "/ik", label: "İK" },
  { to: "/uygulamalar", label: "E-Uygulamalar" },
  { to: "/e-takip", label: "E-Takip", featured: true },
  { to: "/iletisim", label: "İletişim" },
] as const;

export const BRANCHES = [
  {
    city: "İstanbul Merkez",
    address:
      "Şirinevler Mh. Adnan Kahveci Bulvarı, Kocasinan İş Merkezi B Blok No: 200, Bahçelievler / İstanbul",
    note: "Genel müdürlük ve tüm İstanbul gümrük sahalarında saha kadrosu",
    q: "Kocasinan İş Merkezi Adnan Kahveci Bulvarı Şirinevler Bahçelievler İstanbul",
  },
  {
    city: "İzmir Şubesi",
    address: "1456 sok. Bener Nural İş Hanı No:10 Kat:1 / Alsancak / İZMİR",
    note: "Ege bölgesi operasyonları (2007)",
    q: "1456 Sokak No 10 Alsancak Konak İzmir",
  },
  {
    city: "Bursa Şubesi",
    address:
      "Fethiye Mah. Fesleğen Sok. No:2/1 Ata Plaza D:5 (Ata Bulvarı) Nilüfer / Bursa",
    note: "Marmara bölgesi ve Gemlik operasyonları (2011)",
    q: "Ata Plaza Fesleğen Sokak No 2 Fethiye Mahallesi Nilüfer Bursa",
  },
  {
    city: "Kayseri Şubesi",
    address: "Serbest Bölge, Anbar Mah. 54. Cd. 15-D, Melikgazi / KAYSERİ",
    note: "İç Anadolu bölgesi operasyonları (Şubat 2024)",
    q: "Anbar Mahallesi 54. Cadde 15 Melikgazi Kayseri Serbest Bölge",
  },
];

export const CUSTOMS_OFFICES = [
  // İstanbul
  { type: "sea", name: "Ambarlı Gümrük Müdürlüğü", city: "İstanbul", region: "İstanbul", q: "Ambarlı Gümrük Müdürlüğü Avcılar İstanbul" },
  { type: "land", name: "Erenköy Gümrük Müdürlüğü", city: "İstanbul", region: "İstanbul", q: "Erenköy Gümrük Müdürlüğü İstanbul" },
  { type: "land", name: "Muratbey Gümrük Müdürlüğü", city: "İstanbul", region: "İstanbul", q: "Muratbey Gümrük Müdürlüğü Çatalca İstanbul" },
  { type: "rail", name: "Halkalı Gar Gümrük Müdürlüğü", city: "İstanbul", region: "İstanbul", q: "Halkalı Gar Gümrük Müdürlüğü Küçükçekmece İstanbul" },
  {
    name: "İstanbul Havalimanı Gümrük Müdürlüğü",
    type: "air",
    city: "İstanbul",
    region: "İstanbul",
    q: "İstanbul Havalimanı Gümrük Müdürlüğü Arnavutköy",
  },
  {
    name: "Sabiha Gökçen Havalimanı Gümrük Müdürlüğü",
    type: "air",
    city: "İstanbul",
    region: "İstanbul",
    q: "Sabiha Gökçen Havalimanı Gümrük Müdürlüğü Pendik",
  },
  // Trakya ve sınır kapıları
  { type: "land", name: "Çerkezköy Gümrük Müdürlüğü", city: "Tekirdağ", region: "Trakya ve Sınır Kapıları", q: "Çerkezköy Gümrük Müdürlüğü Tekirdağ" },
  { type: "land", name: "Kapıkule Gümrük Müdürlüğü", city: "Edirne", region: "Trakya ve Sınır Kapıları", q: "Kapıkule Gümrük Kapısı Edirne" },
  { type: "land", name: "İpsala Gümrük Müdürlüğü", city: "Edirne", region: "Trakya ve Sınır Kapıları", q: "İpsala Gümrük Kapısı Edirne" },
  // Güney Marmara
  { type: "land", name: "Bursa Gümrük Müdürlüğü", city: "Bursa", region: "Güney Marmara", q: "Bursa Gümrük Müdürlüğü" },
  { type: "sea", name: "Gemlik Gümrük Müdürlüğü", city: "Bursa", region: "Güney Marmara", q: "Gemlik Gümrük Müdürlüğü Bursa" },
  { type: "sea", name: "Yalova Gümrük Müdürlüğü", city: "Yalova", region: "Güney Marmara", q: "Yalova Gümrük Müdürlüğü" },
  // Ege
  { type: "sea", name: "İzmir (Alsancak) Gümrük Müdürlüğü", city: "İzmir", region: "Ege", q: "Alsancak Gümrük Müdürlüğü İzmir" },
  {
    name: "Adnan Menderes Havalimanı Gümrük Müdürlüğü",
    type: "air",
    city: "İzmir",
    region: "Ege",
    q: "Adnan Menderes Havalimanı Gümrük Müdürlüğü İzmir",
  },
  { type: "sea", name: "Aliağa Gümrük Müdürlüğü", city: "İzmir", region: "Ege", q: "Aliağa Gümrük Müdürlüğü İzmir" },
  // İç Anadolu
  { type: "land", name: "Kayseri Gümrük Müdürlüğü", city: "Kayseri", region: "İç Anadolu", q: "Kayseri Gümrük Müdürlüğü" },
  // Akdeniz
  { type: "sea", name: "Mersin Gümrük Müdürlüğü", city: "Mersin", region: "Akdeniz", q: "Mersin Gümrük Müdürlüğü" },
  { type: "sea", name: "Yumurtalık Gümrük Müdürlüğü", city: "Adana", region: "Akdeniz", q: "Yumurtalık Serbest Bölge Gümrük Müdürlüğü Adana" },
];

export const CUSTOMS_REGIONS = [
  "İstanbul",
  "Trakya ve Sınır Kapıları",
  "Güney Marmara",
  "Ege",
  "İç Anadolu",
  "Akdeniz",
] as const;

export const SERVICES = [
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

export const METRICS = [
  { value: "20+", label: "Yıllık sektör deneyimi" },
  { value: "45.000+", label: "Tamamlanan beyanname" },
  { value: "%99,4", label: "Zamanında gümrükleme" },
  { value: "7/24", label: "Operasyon desteği" },
];

export const VALUES = [
  { icon: Building2, t: "Kurumsal yapı", d: "Kurumsal firmalara özel dedike operasyon ekibi." },
  { icon: Globe2, t: "Global ağ", d: "Yurt dışı acente ve taşıyıcı ağıyla uçtan uca çözüm." },
  { icon: Scale, t: "Mevzuat uyumu", d: "Güncel mevzuat takibi ve risk analizi." },
  { icon: FileSearch, t: "Şeffaf takip", d: "Her aşamada bildirim ve raporlama." },
];
