// Variables globales
let langSwitcher;

// Guardar idioma en localStorage
const getSavedLang = () => localStorage.getItem("lang") || "en";

// ✅ Obtener idioma de la query string
function getLangFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get("lang"); // devuelve "es", "en", etc. o null
}

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

    // Hero section
    updateTitle(".hero-content .title:nth-child(1)", translations.hero.title1);
    updateTitle(".hero-content .title:nth-child(2)", translations.hero.title2);
    updateTitle(".hero-content .title:nth-child(3)", translations.hero.title3);
    
    const heroDesc = document.querySelector(".hero-content p");
    if (heroDesc) heroDesc.textContent = translations.hero.description;
    
    const heroBtn = document.querySelector(".hero-content .hero-btn");
    if (heroBtn) heroBtn.textContent = translations.hero.button;

    // What is Blonect section
    const whatIsTitle = document.querySelector(".hero-section-2:nth-of-type(1) .title");
    if (whatIsTitle) {
      whatIsTitle.textContent = translations.what_is.title;
      whatIsTitle.setAttribute("data-text", translations.what_is.title);
    }
    
    const centerText = document.querySelector(".center-text");
    if (centerText) centerText.textContent = translations.what_is.description;
    
    const whatIsBtn = document.querySelector(".hero-section-2:nth-of-type(1) .hero-btn");
    if (whatIsBtn) whatIsBtn.textContent = translations.what_is.button;

    // Features section
    const featuresTitle = document.querySelector(".hero-section-2:nth-of-type(2) .title");
    if (featuresTitle) {
      featuresTitle.textContent = translations.features.title;
      featuresTitle.setAttribute("data-text", translations.features.title);
    }

    // Features list
    const featureItems = document.querySelectorAll(".gradient-border");
    if (featureItems.length > 0 && translations.features.list_left && translations.features.list_right) {
      const allFeatures = [...translations.features.list_left, ...translations.features.list_right];
      featureItems.forEach((item, index) => {
        if (allFeatures[index]) {
          item.textContent = allFeatures[index];
        }
      });
    }

    // Token launch section
    const tokenTitle = document.querySelector(".hero-section-2:nth-of-type(3) .title");
    if (tokenTitle) {
      tokenTitle.textContent = translations.token_launch.title;
      tokenTitle.setAttribute("data-text", translations.token_launch.title);
    }

    // Token launch table
    if (translations.token_launch.table) {
      const tableHeaders = document.querySelectorAll(".custom-table th");
      if (tableHeaders.length >= 3) {
        tableHeaders[1].textContent = translations.token_launch.table.header_phase1;
        tableHeaders[2].textContent = translations.token_launch.table.header_phase2;
      }

      const tableRows = document.querySelectorAll(".custom-table tbody tr");
      if (tableRows.length >= 4 && translations.token_launch.table.rows) {
        // Supply row
        if (tableRows[0] && translations.token_launch.table.rows.supply) {
          const supplyCells = tableRows[0].querySelectorAll("td");
          if (supplyCells.length >= 3) {
            supplyCells[1].textContent = translations.token_launch.table.rows.supply[0];
            supplyCells[2].textContent = translations.token_launch.table.rows.supply[1];
          }
        }
        
        // Price row
        if (tableRows[1] && translations.token_launch.table.rows.price) {
          const priceCells = tableRows[1].querySelectorAll("td");
          if (priceCells.length >= 3) {
            priceCells[1].textContent = translations.token_launch.table.rows.price[0];
            priceCells[2].textContent = translations.token_launch.table.rows.price[1];
          }
        }
        
        // Raise row
        if (tableRows[2] && translations.token_launch.table.rows.raise) {
          const raiseCells = tableRows[2].querySelectorAll("td");
          if (raiseCells.length >= 3) {
            raiseCells[1].textContent = translations.token_launch.table.rows.raise[0];
            raiseCells[2].textContent = translations.token_launch.table.rows.raise[1];
          }
        }
        
        // Access row
        if (tableRows[3] && translations.token_launch.table.rows.access) {
          const accessCells = tableRows[3].querySelectorAll("td");
          if (accessCells.length >= 3) {
            accessCells[1].textContent = translations.token_launch.table.rows.access[0];
            accessCells[2].textContent = translations.token_launch.table.rows.access[1];
          }
        }
      }
    }

    // Rewards section
    const rewardsTitle = document.querySelector(".hero-section-2:nth-of-type(4) .title");
    if (rewardsTitle) {
      rewardsTitle.textContent = translations.rewards.title;
      rewardsTitle.setAttribute("data-text", translations.rewards.title);
    }

    // Rewards description
    const rewardsSubtitle = document.querySelector(".hero-section-2:nth-of-type(4) .center-text");
    if (rewardsSubtitle && translations.rewards.subtitle) {
      rewardsSubtitle.innerHTML = `<span style="color: #f0a020;">${translations.rewards.subtitle}</span>`;
    }

    // Why join section
    const whyJoinTitle = document.querySelector(".hero-section-2:nth-of-type(5) .title");
    if (whyJoinTitle) {
      whyJoinTitle.textContent = translations.why_join.title;
      whyJoinTitle.setAttribute("data-text", translations.why_join.title);
    }

    // Feature cards
    const featureCards = document.querySelectorAll(".feature-card");
    if (featureCards.length > 0 && translations.why_join.features) {
      featureCards.forEach((card, index) => {
        if (translations.why_join.features[index]) {
          const cardTitle = card.querySelector("h3");
          const cardDesc = card.querySelector("p");
          
          if (cardTitle) cardTitle.textContent = translations.why_join.features[index].title;
          if (cardDesc) cardDesc.textContent = translations.why_join.features[index].description;
        }
      });
    }

    // Final section title
    const finalTitle = document.querySelector(".hero-section-2:nth-of-type(6) .title");
    if (finalTitle) {
      finalTitle.textContent = translations.why_join.title;
      finalTitle.setAttribute("data-text", translations.why_join.title);
    }

    // Form button
    const formBtn = document.querySelector(".form-btn");
    if (formBtn && translations.form && translations.form.button) {
      formBtn.textContent = translations.form.button;
    }

    // Footer
    const footerCopyright = document.querySelector(".form-footer p");
    if (footerCopyright) footerCopyright.textContent = translations.form.footer.copyright;

    // Countdown labels
    if (translations.countdown) {
      const timeBoxes = document.querySelectorAll(".time-box small");
      const labels = ["DAYS", "HOURS", "MINUTES", "SECONDS"];
      timeBoxes.forEach((box, index) => {
        if (translations.countdown[labels[index].toLowerCase()]) {
          box.textContent = translations.countdown[labels[index].toLowerCase()];
        }
      });
    }

    // Save language
    localStorage.setItem("lang", lang);
    
    console.log(`Language changed to: ${lang}`);
  } catch (error) {
    console.error("Error loading translations:", error);
  }
}

// ✅ Inicializar idioma con prioridad: query > localStorage > "en"
const queryLang = getLangFromQuery();
const savedLang = getSavedLang();
const initialLang = queryLang || savedLang;

langSwitcher.value = initialLang;
setLanguage(initialLang);

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
  langSwitcher = document.getElementById("language-switcher");
  
  // Evento al cambiar selector
  if (langSwitcher) {
    langSwitcher.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }
  
  // Cargar idioma inicial
  const initialLang = getLangFromQuery() || getSavedLang();
  setLanguage(initialLang);
  if (langSwitcher) {
    langSwitcher.value = initialLang;
  }
  
  // Inicializar contador
  initCountdown();
  
  // Inicializar formulario
  initForm();
});

// -------- COUNTDOWN --------
function initCountdown() {
  // Fecha objetivo: 22 de octubre de 2025
  const targetDate = new Date("2025-10-22T23:59:59");
  
  function updateCountdown() {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    // Si ya pasó la fecha
    if (diff <= 0) {
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";  
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      return;
    }

    // Calcular tiempo restante
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Actualizar elementos del DOM
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  // Ejecutar inmediatamente y luego cada segundo
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// -------- WHITELIST FORM --------
function initForm() {
  const form = document.getElementById('whitelist-form');
  if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.firstName || !data.lastName || !data.email || !data.country || !data.terms) {
        alert('Please fill all required fields and accept the terms of service.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate form submission (you can replace this with actual API call)
    const submitBtn = this.querySelector('.form-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('Thank you! You have been successfully added to the Blonect Wallet whitelist. We will contact you soon!');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
    
    console.log('Whitelist application:', data);
    });
  }
}