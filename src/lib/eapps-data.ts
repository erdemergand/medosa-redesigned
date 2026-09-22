export type AppLink = { name: string; href: string };

export const TICARET_BAKANLIGI: AppLink[] = [
  { name: "E-Fatura Sorgulama", href: "https://efatura.gtb.gov.tr/login" },
  {
    name: "Bağlayıcı Tarife Bilgisi (BTB) E-Başvuru Sistemi",
    href: "https://uygulama.gtb.gov.tr/BTBBasvuru/AnaSayfa",
  },
  {
    name: "Lara Web Sorgulama ve Belge Yükleme Ekranı",
    href: "https://uygulama.gtb.gov.tr/LaraTahlilSorgulama/Ekranlar/Index.aspx",
  },
  {
    name: "Yükümlü Kayıt ve Takip Sistemi",
    href: "https://uygulama.gtb.gov.tr/FirmaVekalet/Login/Login.aspx",
  },
  { name: "Merkezi Sicil Kayıt Sistemi (MERSİS)", href: "https://mersis.ticaret.gov.tr/" },
  {
    name: "Fikri ve Sınai Mülkiyet Hakları E-Başvuru",
    href: "https://uygulama.gtb.gov.tr/FSMH/Login.aspx",
  },
  { name: "NCTS", href: "https://ncts.gtb.gov.tr/Giris.aspx" },
  { name: "Detaylı Beyan Durum Sorgulama", href: "https://uygulama.gtb.gov.tr/BeyannameSorgulama/" },
  {
    name: "Gümrük İşlemleri Beyanname Sorgulama",
    href: "https://uygulama.gtb.gov.tr/GETAPP/account/login",
  },
  { name: "GÜVAS", href: "https://guvas.gtb.gov.tr" },
  { name: "DİR-TCGB Takip", href: "https://uygulama.gtb.gov.tr/DIRSorgu/" },
  { name: "Telafi Edici Vergi (TEV)", href: "https://uygulama.gtb.gov.tr/TEV/" },
  { name: "Kota/Kontenjan Sorgulama Uygulaması", href: "https://uygulama.gtb.gov.tr/KotaSorgulama/" },
  { name: "Yetkilendirme Başvuruları", href: "https://basvuru.dtm.gov.tr/yetkiBasvuru/giris.jsp" },
  {
    name: "E-İmza Uygulamalarına Giriş",
    href: "https://eortak.dtm.gov.tr/eortak/login/listApplications.htm",
  },
  { name: "Firma Tanımlama", href: "https://dtvs.dtm.gov.tr/DTVS_FirmaUygulamasi/" },
  { name: "Transfer Bildirim Formu Sorgulama", href: "https://uygulama.gtb.gov.tr/tbfsorgulama/" },
  {
    name: "Tek Pencere Sistemine Giriş",
    href: "https://www.turkiye.gov.tr/gumruk-ve-ticaret-tek-pencere",
  },
  { name: "TOBB Medos Giriş", href: "https://medos-tobb.org.tr/" },
];

export const SAGLIK_BAKANLIGI: AppLink[] = [
  { name: "Türkiye İlaç ve Tıbbi Cihaz Kurumu (TİTCK)", href: "https://ebs.titck.gov.tr/Login/Index" },
  { name: "Ürün Takip Sistemi (ÜTS)", href: "https://utsuygulama.saglik.gov.tr/UTS/" },
];

export const MENSE_SORGULAMA: AppLink[] = [
  { name: "Almanya", href: "https://cert.ihk.de/sigv4/servlet/UZInfoServlet" },
  { name: "Amerika Birleşik Devletleri", href: "https://certificates.iccwbo.org/" },
  { name: "Avusturya", href: "https://certificates.iccwbo.org/" },
  { name: "Belçika", href: "https://certificates.iccwbo.org/" },
  { name: "Belçika-DIGI", href: "https://www.digichambers.be/verify" },
  { name: "Birleşik Arap Emirlikleri", href: "https://certificates.iccwbo.org/" },
  { name: "Brezilya", href: "https://certificates.iccwbo.org/" },
  { name: "Bulgaristan", href: "https://certificates.iccwbo.org/" },
  { name: "Çin Halk Cumhuriyeti-CCP", href: "http://check.ccpiteco.net/" },
  { name: "Çin Halk Cumhuriyeti-GOV", href: "http://origin.customs.gov.cn/" },
  { name: "Çin Halk Cumhuriyeti-ICC", href: "https://certificates.iccwbo.org/" },
  { name: "Danimarka", href: "https://certificates.iccwbo.org/" },
  { name: "Finlandiya", href: "https://certificates.iccwbo.org/" },
  { name: "Finlandiya-FI", href: "https://www.e-vientiasiakirjat.fi" },
  { name: "Fransa", href: "https://certificates.iccwbo.org/" },
  { name: "Güney Kore-KCCI", href: "https://cert.korcham.net/search/index.htm" },
  { name: "Güney Kore-ICC", href: "https://certificates.iccwbo.org/" },
  { name: "Hollanda", href: "https://certificates.iccwbo.org/" },
  { name: "İngiltere", href: "https://www.tax.service.gov.uk/check-eori-number" },
  { name: "İran", href: "https://iccima.ir/co/" },
  { name: "İsveç", href: "https://certificates.iccwbo.org/" },
  { name: "İtalya", href: "https://certificates.iccwbo.org/" },
  { name: "Japonya (QR kodun okutulması ile)", href: "https://ref.jcci.or.jp" },
  { name: "Kanada", href: "https://certificates.iccwbo.org/" },
  { name: "Litvanya", href: "https://essdocs.com/esscert-certificate-of-origin-verification" },
  { name: "Norveç", href: "https://certificates.iccwbo.org/" },
  { name: "Norveç (EUR.1)", href: "https://eur1.toll.no/" },
  { name: "Portekiz", href: "https://certificates.iccwbo.org/" },
  { name: "Singapur", href: "https://certificates.iccwbo.org/" },
  { name: "Slovakya", href: "https://certificates.iccwbo.org/" },
  { name: "Slovenya", href: "https://certificates.iccwbo.org/" },
  { name: "Umman", href: "https://eservices.chamberoman.om/coo-verify" },
];
