const langSwitcher = document.getElementById("language-switcher");

// Guardar idioma en localStorage
const getSavedLang = () => localStorage.getItem("lang") || "en";

function updateTitle(selector, text) {
  const el = document.querySelector(selector);
  if (el) {
    el.textContent = text;
    el.setAttribute("data-text", text);
  }
}

async function setLanguage(lang) {
  try {
    const response = await fetch(`./assets/lang/${lang}.json`);
    const translations = await response.json();

    // Hero titles
    updateTitle(".hero-content .title:nth-child(1)", translations.hero.title1);
    updateTitle(".hero-content .title:nth-child(2)", translations.hero.title2);
    updateTitle(".hero-content .title:nth-child(3)", translations.hero.title3);

    document.querySelector(".hero-content p").textContent = translations.hero.description;
    document.querySelector(".hero-btn").textContent = translations.hero.button;

    // Section: WHAT IS BLONECT
    updateTitle(".hero-section-2 .title", translations.what_is.title);
    document.querySelector(".center-text").textContent = translations.what_is.description;
    document.querySelector(".hero-section-2 .hero-btn").textContent = translations.what_is.button;

    // Section: FEATURES
    updateTitle(".hero-section-2:nth-of-type(2) .title", translations.features.title);

    // Section: TOKEN LAUNCH
    updateTitle(".hero-section-2:nth-of-type(3) .title", translations.token_launch.title);

    // Section: REWARD EMISSION
    updateTitle(".hero-section-2:nth-of-type(4) .title", translations.rewards.title);

    // Section: WHY JOIN
    updateTitle(".hero-section-2:nth-of-type(5) .title", translations.why_join.title);

    // Footer
    document.querySelector(".form-footer p").textContent = translations.form.footer.copyright;

    localStorage.setItem("lang", lang);
  } catch (error) {
    console.error("Error cargando traducciones:", error);
  }
}

// Inicializar idioma guardado
langSwitcher.value = getSavedLang();
setLanguage(getSavedLang());

// Evento al cambiar selector
langSwitcher.addEventListener("change", (e) => {
  setLanguage(e.target.value);
});

const targetDate = new Date("2025-10-22T23:59:59").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.querySelector(".countdown-banner").textContent =
      "00:00:00:00";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);
