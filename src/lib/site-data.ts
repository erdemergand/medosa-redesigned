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
  { name: "Ambarlı Gümrük Müdürlüğü", city: "İstanbul", q: "Ambarlı Gümrük Müdürlüğü Avcılar İstanbul" },
  { name: "Erenköy Gümrük Müdürlüğü", city: "İstanbul", q: "Erenköy Gümrük Müdürlüğü İstanbul" },
  { name: "Muratbey Gümrük Müdürlüğü", city: "İstanbul", q: "Muratbey Gümrük Müdürlüğü Çatalca İstanbul" },
  {
    name: "İstanbul Havalimanı (AHL) Gümrük Müdürlüğü",
    city: "İstanbul",
    q: "İstanbul Havalimanı Gümrük Müdürlüğü Arnavutköy",
  },
  {
    name: "Sabiha Gökçen Havalimanı Gümrük Müdürlüğü",
    city: "İstanbul",
    q: "Sabiha Gökçen Havalimanı Gümrük Müdürlüğü Pendik",
  },
  { name: "Halkalı Gümrük Müdürlüğü", city: "İstanbul", q: "Halkalı Gümrük Müdürlüğü İstanbul" },
  { name: "Gemlik Gümrük Müdürlüğü", city: "Bursa", q: "Gemlik Gümrük Müdürlüğü Bursa" },
  { name: "Bursa Gümrük Müdürlüğü", city: "Bursa", q: "Bursa Gümrük Müdürlüğü" },
  { name: "İzmir (Alsancak) Gümrük Müdürlüğü", city: "İzmir", q: "Alsancak Gümrük Müdürlüğü İzmir" },
  { name: "Adnan Menderes Havalimanı Gümrük Müdürlüğü", city: "İzmir", q: "Adnan Menderes Havalimanı Gümrük Müdürlüğü İzmir" },
  { name: "Kayseri Gümrük Müdürlüğü", city: "Kayseri", q: "Kayseri Gümrük Müdürlüğü" },
];

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
