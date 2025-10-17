const languageSwitcher = document.getElementById("language-switcher");

languageSwitcher.addEventListener("change", () => {
  const lang = languageSwitcher.value;
  applyTranslations(lang);
});

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Countdown
  document.getElementById("days").nextElementSibling.textContent = t.countdown.days;
  document.getElementById("hours").nextElementSibling.textContent = t.countdown.hours;
  document.getElementById("minutes").nextElementSibling.textContent = t.countdown.minutes;
  document.getElementById("seconds").nextElementSibling.textContent = t.countdown.seconds;

  // Hero Section
  const heroTitles = document.querySelectorAll(".hero-section .title-container .title");
  heroTitles[0].textContent = t.hero.title1;
  heroTitles[1].textContent = t.hero.title2;
  heroTitles[2].textContent = t.hero.title3;
  document.querySelector(".hero-section .hero-content p").textContent = t.hero.paragraph;
  document.querySelector(".hero-section .hero-btn").textContent = t.hero.button;

  // Hero Section 2 - What is Blonect
  const hero2_1 = document.querySelectorAll(".hero-section-2")[0];
  hero2_1.querySelector(".title").textContent = t.heroSection2_1.heading;
  hero2_1.querySelector(".center-text").textContent = t.heroSection2_1.text;
  hero2_1.querySelector(".hero-btn").textContent = t.heroSection2_1.button;

  // Features
  const featuresLeft = hero2_1.querySelectorAll(".features-list")[0].children;
  t.heroSection2_1.featuresLeft.forEach((text, i) => {
    featuresLeft[i].textContent = text;
  });
  const featuresRight = hero2_1.querySelectorAll(".features-list")[1].children;
  t.heroSection2_1.featuresRight.forEach((text, i) => {
    featuresRight[i].textContent = text;
  });

  // Token Launch Overview
  const hero2_2 = document.querySelectorAll(".hero-section-2")[1];
  hero2_2.querySelector(".title").textContent = t.heroSection2_2.heading;
  hero2_2.querySelectorAll("table thead th").forEach((th, i) => {
    th.textContent = t.heroSection2_2.table.headers[i];
  });
  hero2_2.querySelectorAll("table tbody tr").forEach((tr, rowIndex) => {
    tr.querySelectorAll("td").forEach((td, colIndex) => {
      td.textContent = t.heroSection2_2.table.rows[rowIndex][colIndex];
    });
  });

  // Modal
  const modal = document.getElementById("whitelistModal");
  modal.querySelector(".modal-content h2").textContent = t.modal.title;
  modal.querySelector(".modal-content p").textContent = t.modal.text;
  modal.querySelector(".modal-content a").textContent = t.modal.cta;

  // Reward Emission Breakdown
  const hero2_3 = document.querySelectorAll(".hero-section-2")[2];
  hero2_3.querySelector(".title").textContent = t.heroSection2_3.heading;
  const centerTexts = hero2_3.querySelectorAll(".center-text");
  centerTexts[0].textContent = t.heroSection2_3.text1;
  centerTexts[1].textContent = t.heroSection2_3.text2;

  const roadmapTableRows = hero2_3.querySelectorAll(".roadmap-right table tbody tr");
  t.heroSection2_3.roadmapTable.rows.forEach((row, i) => {
    roadmapTableRows[i].querySelectorAll("td").forEach((td, j) => {
      td.textContent = row[j];
    });
  });

  // Whitelist Section
  const hero2_4 = document.querySelectorAll(".hero-section-2")[3];
  hero2_4.querySelector(".title").textContent = t.heroSection2_4.heading;

  // Features cards
  const featureCards = hero2_4.querySelectorAll(".feature-card");
  t.heroSection2_4.features.forEach((f, i) => {
    featureCards[i].querySelector("h3").textContent = f.title;
    featureCards[i].querySelector("p").textContent = f.text;
  });

  // Form
  const applyButtonTitle = document.getElementById("apply-button-title");
  applyButtonTitle.textContent = t.whitelistForm.applyButton;
  const form = document.getElementById("whitelist-form");
  form.querySelector("input[name='firstName']").placeholder = t.whitelistForm.placeholders.firstName;
  form.querySelector("input[name='lastName']").placeholder = t.whitelistForm.placeholders.lastName;
  form.querySelector("input[name='email']").placeholder = t.whitelistForm.placeholders.email;
  form.querySelector("input[name='phone']").placeholder = t.whitelistForm.placeholders.phone;
  form.querySelector("select[name='country']").options[0].text = t.whitelistForm.placeholders.country;
  form.querySelector("label[for='terms']").innerHTML = t.whitelistForm.terms.replace(/\*/g, "*");
  form.querySelector("label[for='updates']").textContent = t.whitelistForm.updates;
  form.querySelector("button.form-btn").textContent = t.whitelistForm.submitButton;

  // Footer
  document.querySelector(".form-footer p").textContent = t.footer.copyright;
}

// Inicializa con el idioma por defecto
applyTranslations(languageSwitcher.value);
