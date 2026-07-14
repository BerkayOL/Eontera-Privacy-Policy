document.documentElement.classList.add("js");

const translations = {
  tr: {
    skipLink: "Ana içeriğe geç",
    eyebrow: "Bağımsız Bilgilendirme Uygulaması",
    subtitle: "Gizlilik Politikası",
    packageLabel: "Android paket kimliği: <strong>com.berkay.eontera</strong>",
    heroKicker: "Gizlilik Bildirimi",
    heroTitle: "Eontera Gizlilik Politikası",
    heroBody1: "Eontera yerel verileri, isteğe bağlı konum servislerini, kamuya açık veri kaynaklarını ve gizliliğe duyarlı özellikleri nasıl işler?",
    heroBody2: "Resmî afet uyarı sistemi, acil durum servisi veya yetkili kamu hizmeti değildir.",
    effectiveLabel: "Yürürlük tarihi",
    developerLabel: "Geliştirici",
    developerValue: "Berkay — Independent Developer",
    contactLabel: "İletişim",
    quickNavTitle: "Hızlı Bölümler",
    navPurpose: "Eontera ne yapar",
    navHandled: "İşlenen bilgiler",
    navNotCollected: "Toplanmayan bilgiler",
    navThirdParty: "Üçüncü taraf hizmetleri",
    navRetention: "Saklama ve silme",
    navNotifications: "Bildirimler",
    navContact: "İletişim",
    cardAccountsTitle: "Hesap sistemi yok",
    cardAccountsBody: "Kayıt, giriş veya uzak hesap silme akışı bulunmaz.",
    cardAdsTitle: "Reklam ve analiz yok",
    cardAdsBody: "Reklam SDK'sı, analiz SDK'sı ve izleme katmanı kullanılmaz.",
    cardLocationTitle: "Konum kullanımı sınırlı",
    cardLocationBody: "Yalnızca isteğe bağlı, yaklaşık ve ön plan konumu kullanılabilir.",
    cardStorageTitle: "Yerel izleme bölgesi verisi",
    cardStorageBody: "İzleme bölgesi verileri cihazda kalır ve uygulama düzeyinde şifrelenmez.",
    policyKicker: "Gizlilik Metni",
    sectionPurposeTitle: "1. Eontera ne yapar",
    sectionPurposeBody1:
      "Eontera; deprem, orman yangını, fırtına, volkan, sel ve benzeri doğal olaylara ilişkin kamuya açık verileri etkileşimli harita görünümü üzerinde sunar. Uygulama ayrıca isteğe bağlı uydu takibi ve görünür veri bağlamına dayalı bilgilendirici özetler sağlayabilir.",
    sectionPurposeNote:
      "Eontera, resmî afet uyarı servisi, acil müdahale sistemi veya tehlike tahmin hizmeti değildir. Güvenlik açısından kritik kararlar için resmî kurumlar ve yerel yetkili makamlar takip edilmelidir.",
    sectionHandledTitle: "2. İşlediğimiz bilgiler",
    subLocationTitle: "2.1 İsteğe bağlı cihaz konumu",
    subLocationBody:
      "Kullanıcı yaklaşık konum izni verirse, bu bilgi yalnızca ISS veya benzeri gökyüzü bağlamı sunan özelliklerde gözlemci bağlamını hesaplamak için kullanılır.",
    subLocationItem1: "Yalnızca yaklaşık (coarse) konum kullanılır.",
    subLocationItem2: "Kullanım ön plan ile sınırlıdır; arka plan konumu kullanılmaz.",
    subLocationItem3: "Ana harita deneyimi için konum izni zorunlu değildir.",
    subLocationItem4: "Kamera kullanılmaz; yönelim sensörleri ve yaklaşık konum yeterlidir.",
    subWatchTitle: "2.2 İzleme bölgesi verileri",
    subWatchBody:
      "Kullanıcı bir izleme bölgesi oluşturduğunda seçilen bölge adı, koordinatlar ve yarıçap bilgisi uygulamanın cihaza özel depolama alanında yerel olarak tutulur.",
    subWatchItem1: "Depolama Android uygulama korumalı alanı (sandbox) içindeki yerel veri yapılarındadır.",
    subWatchItem2: "Bu veriler uygulama düzeyinde şifrelenmez.",
    subWatchItem3: "İzleme bölgesi verileri herhangi bir uzak hesap veya sunucu hizmetine yüklenmez.",
    subWatchItem4: "Veriler siz silene, uygulama verisini temizleyene veya uygulamayı kaldırana kadar kalabilir.",
    subLocalTitle: "2.3 Yerel önbellek ve tercihler",
    subLocalBody:
      "Eontera performans, geçici görüntüleme ve tercih yönetimi için bazı verileri cihaz üzerinde yerel olarak saklayabilir.",
    subLocalItem1: "Kamuya açık kaynaklardan çekilen son olay verileri yerel önbellekte tutulabilir.",
    subLocalItem2: "Bildirim tercihleri, karşılama durumu ve arayüz ayarları cihazda saklanabilir.",
    subLocalItem3: "Harita kütüphaneleri performans amacıyla geçici tile önbelleği oluşturabilir.",
    subNetworkTitle: "2.4 Ağ meta verileri",
    subNetworkBody:
      "Eontera kamuya açık veri sağlayıcılarına HTTPS isteği gönderdiğinde, sağlayıcılar normal ağ işleyişi kapsamında standart meta verileri görebilir.",
    subNetworkItem1: "IP adresi",
    subNetworkItem2: "İstek zamanı",
    subNetworkItem3: "HTTP user-agent başlığı",
    subNetworkItem4: "Talep edilen URL",
    subNetworkFoot:
      "Bu meta veriler ilgili sağlayıcılar tarafından kendi gizlilik şartları kapsamında işlenebilir. Eontera bu ayrı veri işleme sürecini kontrol etmez.",
    sectionNotCollectedTitle: "3. Toplamadığımız bilgiler",
    notCollectedIdentityTitle: "Kimlik ve hesap verileri",
    notCollectedIdentityBody: "Ad, e-posta, telefon numarası, kullanıcı hesabı veya profil verisi toplanmaz.",
    notCollectedSensitiveTitle: "Hassas erişimler",
    notCollectedSensitiveBody: "Kesin konum, arka plan konumu, kamera, mikrofon ve medya verisi işlenmez.",
    notCollectedCommercialTitle: "Ticari izleme verileri",
    notCollectedCommercialBody: "Reklam tanımlayıcıları, analiz SDK verileri, ödeme bilgileri ve uygulama içi satın alma (IAP) verileri yoktur.",
    notCollectedSocialTitle: "Sosyal içerik",
    notCollectedSocialBody: "Kullanıcı Tarafından Oluşturulan İçerik (UGC), sosyal paylaşım, kişi listesi, takvim veya çağrı verisi toplanmaz.",
    sectionThirdPartyTitle: "4. Üçüncü taraf hizmetleri",
    sectionThirdPartyBody:
      "Eontera kamuya açık HTTPS veri kaynaklarına bağlanabilir. Bu bağlantılar yalnızca veri kaynağını ifade eder; resmî bağ veya onay anlamına gelmez.",
    providersCaption: "Kamuya açık veri sağlayıcıları",
    tableService: "Hizmet",
    tableData: "Erişilen veri",
    tablePrivacy: "Gizlilik sayfası",
    provider1: "Doğal olay kayıtları",
    provider2: "Uydu görüntü kutucukları",
    provider3: "Deprem besleme verileri",
    provider4: "Temel harita kutucukları",
    provider5: "Kamusal yörünge elemanları",
    provider6: "ISS konum bağlamı",
    notAvailable: "Mevcut değil",
    sectionThirdPartyFoot:
      "Eontera; NASA, USGS, EONET, CelesTrak, SpaceX veya Starlink ile bağlı, onlar tarafından onaylı ya da resmî bir hizmet değildir.",
    sectionRetentionTitle: "5. Saklama ve silme",
    retentionCaption: "Veri saklama özeti",
    retentionData: "Veri",
    retentionPeriod: "Saklama süresi",
    retentionDelete: "Silme yöntemi",
    retentionWatchData: "İzleme bölgeleri",
    retentionWatchPeriod: "Kullanıcı silene kadar",
    retentionWatchDelete: "Uygulama içi silme veya uygulama verisini temizleme",
    retentionCacheData: "Olay önbelleği",
    retentionCachePeriod: "Otomatik yenilenene kadar",
    retentionCacheDelete: "Uygulama verisini temizleme",
    retentionPrefsData: "Tercihler",
    retentionPrefsPeriod: "Değiştirilene kadar",
    retentionPrefsDelete: "Ayarları değiştirme veya veri temizleme",
    retentionLocationData: "Yaklaşık konum",
    retentionLocationPeriod: "Kalıcı olarak tutulmaz",
    retentionLocationDelete: "Cihaz ayarlarından izni geri alma",
    sectionRetentionFoot: "Hesap sistemi bulunmadığı için uzak hesap silme süreci yoktur.",
    sectionNotificationsTitle: "6. Bildirimler",
    sectionNotificationsBody:
      "Kullanıcı ilgili özelliğe izin verirse Eontera bilgi amaçlı yerel bildirimler gösterebilir. Bu bildirimler resmî acil durum bildirimi niteliği taşımaz.",
    sectionContactTitle: "7. İletişim",
    sectionContactBody:
      "Bu gizlilik politikasıyla ilgili sorular için <a href=\"mailto:berkay81341@gmail.com\">berkay81341@gmail.com</a> adresi üzerinden iletişime geçebilirsiniz.",
    footerLine1: "Eontera için hazırlanmış statik GitHub Pages gizlilik sayfası.",
    footerLine2: "Bağımsız geliştirici bildirimi geçerlidir; resmî kurum bağlantısı yoktur."
  },
  en: {
    skipLink: "Skip to main content",
    eyebrow: "Independent Informational App",
    subtitle: "Privacy Policy",
    packageLabel: "Android package name: <strong>com.berkay.eontera</strong>",
    heroKicker: "Privacy Notice",
    heroTitle: "Eontera Privacy Policy",
    heroBody1: "How Eontera handles local data, optional location, public data sources, and privacy-sensitive features.",
    heroBody2: "It is not an official disaster warning system, emergency service, or public authority service.",
    effectiveLabel: "Effective date",
    developerLabel: "Developer",
    developerValue: "Berkay — Independent Developer",
    contactLabel: "Contact",
    quickNavTitle: "Quick Sections",
    navPurpose: "What Eontera does",
    navHandled: "Information we handle",
    navNotCollected: "What we do not collect",
    navThirdParty: "Third-party services",
    navRetention: "Retention and deletion",
    navNotifications: "Notifications",
    navContact: "Contact",
    cardAccountsTitle: "No account system",
    cardAccountsBody: "There is no sign-up, sign-in, or remote account deletion flow.",
    cardAdsTitle: "No ads or analytics",
    cardAdsBody: "No advertising SDK, analytics SDK, or tracking layer is used.",
    cardLocationTitle: "Limited location use",
    cardLocationBody: "Only optional, approximate, foreground location may be used.",
    cardStorageTitle: "Local watch-zone data",
    cardStorageBody: "Watch-zone entries stay on the device and are not app-level encrypted.",
    policyKicker: "Privacy Policy",
    sectionPurposeTitle: "1. What Eontera does",
    sectionPurposeBody1:
      "Eontera presents publicly available data about earthquakes, wildfires, storms, volcanoes, floods, and similar natural events through an interactive map view. The app may also provide optional satellite tracking and informational summaries based on visible public data context.",
    sectionPurposeNote:
      "Eontera is not an official disaster warning service, emergency response system, or hazard prediction service. For safety-critical decisions, users should follow official institutions and competent local authorities.",
    sectionHandledTitle: "2. Information we handle",
    subLocationTitle: "2.1 Optional device location",
    subLocationBody:
      "If the user grants approximate location permission, that information is used only to calculate observer context for ISS or similar sky-related features.",
    subLocationItem1: "Only approximate coarse location is used.",
    subLocationItem2: "Use is limited to the foreground; there is no background location use.",
    subLocationItem3: "Location permission is not required for the main map experience.",
    subLocationItem4: "The camera is not used; orientation sensors and approximate location are sufficient.",
    subWatchTitle: "2.2 Watch-zone data",
    subWatchBody:
      "When a user creates a watch zone, the selected area name, coordinates, and radius are stored locally in the app's device-specific storage area.",
    subWatchItem1: "Storage is kept in local data structures inside the Android app sandbox.",
    subWatchItem2: "This data is not app-level encrypted.",
    subWatchItem3: "Watch-zone data is not uploaded to any remote account or backend service.",
    subWatchItem4: "The data may remain until the user deletes it, clears app data, or uninstalls the app.",
    subLocalTitle: "2.3 Local cache and preferences",
    subLocalBody:
      "Eontera may store certain data locally on the device for performance, temporary viewing, and preference management.",
    subLocalItem1: "Recently fetched public event data may remain in local cache.",
    subLocalItem2: "Notification preferences, onboarding state, and interface settings may be stored on-device.",
    subLocalItem3: "Map libraries may create temporary tile cache for performance.",
    subNetworkTitle: "2.4 Network metadata",
    subNetworkBody:
      "When Eontera sends HTTPS requests to public data providers, those providers may observe standard metadata as part of normal network operations.",
    subNetworkItem1: "IP address",
    subNetworkItem2: "Request time",
    subNetworkItem3: "HTTP user-agent header",
    subNetworkItem4: "Requested URL",
    subNetworkFoot:
      "That metadata may be processed by the relevant providers under their own privacy terms. Eontera does not control that separate processing.",
    sectionNotCollectedTitle: "3. What we do not collect",
    notCollectedIdentityTitle: "Identity and account data",
    notCollectedIdentityBody: "No name, email address, phone number, user account, or profile data is collected.",
    notCollectedSensitiveTitle: "Sensitive access",
    notCollectedSensitiveBody: "No precise location, background location, camera, microphone, or media data is processed.",
    notCollectedCommercialTitle: "Commercial tracking data",
    notCollectedCommercialBody: "There are no advertising identifiers, analytics SDK data, payment details, or IAP data.",
    notCollectedSocialTitle: "Social content",
    notCollectedSocialBody: "No UGC, social sharing, contacts, calendar information, or call data is collected.",
    sectionThirdPartyTitle: "4. Third-party services",
    sectionThirdPartyBody:
      "Eontera may connect to publicly available HTTPS data sources. These connections identify the source of the data only and do not imply any official relationship or endorsement.",
    providersCaption: "Public data providers",
    tableService: "Service",
    tableData: "Data accessed",
    tablePrivacy: "Privacy page",
    provider1: "Natural event records",
    provider2: "Satellite imagery tiles",
    provider3: "Earthquake feed data",
    provider4: "Base-map tiles",
    provider5: "Public orbital elements",
    provider6: "ISS position context",
    notAvailable: "Not available",
    sectionThirdPartyFoot:
      "Eontera is not affiliated with, endorsed by, or an official service of NASA, USGS, EONET, CelesTrak, SpaceX, or Starlink.",
    sectionRetentionTitle: "5. Retention and deletion",
    retentionCaption: "Data retention summary",
    retentionData: "Data",
    retentionPeriod: "Retention period",
    retentionDelete: "Deletion method",
    retentionWatchData: "Watch zones",
    retentionWatchPeriod: "Until deleted by the user",
    retentionWatchDelete: "In-app deletion or clearing app data",
    retentionCacheData: "Event cache",
    retentionCachePeriod: "Until refreshed automatically",
    retentionCacheDelete: "Clearing app data",
    retentionPrefsData: "Preferences",
    retentionPrefsPeriod: "Until changed",
    retentionPrefsDelete: "Changing settings or clearing app data",
    retentionLocationData: "Approximate location",
    retentionLocationPeriod: "Not retained as persistent stored data",
    retentionLocationDelete: "Revoking permission in device settings",
    sectionRetentionFoot: "There is no remote account deletion process because there is no account system.",
    sectionNotificationsTitle: "6. Notifications",
    sectionNotificationsBody:
      "If the user enables the relevant feature, Eontera may display local informational notifications. These notifications are not official emergency alerts.",
    sectionContactTitle: "7. Contact",
    sectionContactBody:
      "For questions about this privacy policy, you can contact <a href=\"mailto:berkay81341@gmail.com\">berkay81341@gmail.com</a>.",
    footerLine1: "Static GitHub Pages privacy page prepared for Eontera.",
    footerLine2: "Independent developer notice applies; there is no official institutional affiliation."
  }
};

const languageButtons = Array.from(document.querySelectorAll("[data-language]"));
const i18nNodes = Array.from(document.querySelectorAll("[data-i18n]"));
const navLinks = Array.from(document.querySelectorAll(".quick-nav__link"));
const sectionIds = [
  "section-purpose",
  "section-handled",
  "section-not-collected",
  "section-third-party",
  "section-retention",
  "section-notifications",
  "section-contact"
];

let currentLanguage = "tr";

function applyTranslations(language) {
  const copy = translations[language] || translations.tr;

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (!copy[key]) {
      return;
    }
    node.innerHTML = copy[key];
  });
}

function setLanguage(language) {
  currentLanguage = language === "en" ? "en" : "tr";

  applyTranslations(currentLanguage);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.setAttribute("aria-current", String(isActive));
  });

  document.documentElement.lang = currentLanguage;
  document.title =
    currentLanguage === "en"
      ? "Eontera Privacy Policy"
      : "Eontera Gizlilik Politikası";

  const nextHash = `#${currentLanguage}`;
  if (window.location.hash !== nextHash) {
    history.replaceState(null, "", nextHash);
  }

  updateActiveNav();
}

function updateActiveNav() {
  let currentSection = "";

  for (const id of sectionIds) {
    const section = document.getElementById(id);
    if (!section) {
      continue;
    }

    const rect = section.getBoundingClientRect();
    if (rect.top <= 180 && rect.bottom >= 180) {
      currentSection = id;
      break;
    }
  }

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentSection}`;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

window.addEventListener("scroll", updateActiveNav, { passive: true });

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#tr" || window.location.hash === "#en") {
    setLanguage(window.location.hash === "#en" ? "en" : "tr");
  }
});

window.addEventListener("load", () => {
  const initialLanguage = window.location.hash === "#en" ? "en" : "tr";
  setLanguage(initialLanguage);
});
