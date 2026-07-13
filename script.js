document.documentElement.classList.add("js");

const languageButtons = Array.from(document.querySelectorAll("[data-language]"));
const languageSections = Array.from(
  document.querySelectorAll("[data-language-section]")
);
const quickNavLinks = Array.from(document.querySelectorAll(".quick-nav a"));
const progressBar = document.getElementById("scroll-progress-bar");
let currentLanguage = "tr";

function updateQuickNavTargets(language) {
  quickNavLinks.forEach((link) => {
    const targetId =
      language === "en" ? link.dataset.targetEn : link.dataset.targetTr;
    if (targetId) {
      link.setAttribute("href", `#${targetId}`);
    }
  });
}

function setLanguage(language) {
  const nextLanguage = language === "en" ? "en" : "tr";
  currentLanguage = nextLanguage;

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === nextLanguage;
    button.setAttribute("aria-current", String(isActive));
  });

  languageSections.forEach((section) => {
    const isActive = section.dataset.languageSection === nextLanguage;
    section.hidden = !isActive;
  });

  document.documentElement.lang = nextLanguage;
  document.title =
    nextLanguage === "en"
      ? "Eontera Privacy Policy"
      : "Eontera Gizlilik Politikasi";

  updateQuickNavTargets(nextLanguage);

  const targetHash = `#${nextLanguage}`;
  if (window.location.hash !== targetHash) {
    history.replaceState(null, "", targetHash);
  }
}

function updateProgress() {
  const scrollTop = window.scrollY;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

  if (progressBar) {
    progressBar.style.width = `${Math.min(progress, 100)}%`;
  }
}

function updateActiveNav() {
  let activeId = "";

  quickNavLinks.forEach((link) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) {
      return;
    }

    const rect = target.getBoundingClientRect();
    if (rect.top <= 140 && rect.bottom >= 140) {
      activeId = target.id;
    }
  });

  quickNavLinks.forEach((link) => {
    const targetId =
      currentLanguage === "en" ? link.dataset.targetEn : link.dataset.targetTr;
    const isActive = targetId === activeId;
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
  });
});

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#en" || window.location.hash === "#tr") {
    setLanguage(window.location.hash === "#en" ? "en" : "tr");
  }
});

window.addEventListener("scroll", () => {
  updateProgress();
  updateActiveNav();
});

window.addEventListener("load", () => {
  const initialLanguage = window.location.hash === "#en" ? "en" : "tr";
  setLanguage(initialLanguage);
  updateProgress();
  updateActiveNav();
});
