// Default language
let currentLang = "en";

// Example cost values (replace with your actual calculation results)
let goldenScrapValue = 123456;
let magnetValue = 98765.432;
let fragmentValue = 54321;



function showTab(index) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-buttons button');
    tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
    buttons[i].classList.toggle('active', i === index);
    });
}

document.querySelectorAll(".accordion").forEach(accordion => {
  const buttons = accordion.querySelectorAll(".collapsible");

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      const content = this.nextElementSibling;

      // Collapse all other sections inside this accordion only
      accordion.querySelectorAll(".content").forEach(section => {
        if (section !== content) {
          section.style.maxHeight = null;
          section.previousElementSibling.classList.remove("active");
        }
      });

      // Toggle the clicked section
      this.classList.toggle("active");
      if (content.style.maxHeight) {
        content.style.maxHeight = null;   // collapse
      } else {
        content.style.maxHeight = content.scrollHeight + "px"; // expand
      }
    });
  });
});

// Helper: format numbers based on current language
window.formatNumber = function(value) {
  return new Intl.NumberFormat(currentLang, {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(value);
}


i18next.init({
  lng: 'en', // default language
  //debug: true,
  resources
}, function(err, t) {
  // Initial render
  updateContent();
});

function updateContent() {
  // Stars
  document.getElementById("lg-setAllStars").innerText = i18next.t("lg-setAllStars");
  document.getElementById("lg-current").innerText = i18next.t("lg-current");
  document.getElementById("lg-setIndividualStars").innerText = i18next.t("lg-setIndividualStars");

  // Scrapyard / Achievements / Mastery
  document.getElementById("lg-scrapyardV2").innerText = i18next.t("lg-scrapyardV2");
  document.getElementById("lg-achievementLvl2").innerText = i18next.t("lg-achievementLvl2");
  document.getElementById("lg-masteryLvl17").innerText = i18next.t("lg-masteryLvl17");

  // Targets
  document.getElementById("lg-setAllTarget").innerText = i18next.t("lg-setAllTarget");
  document.getElementById("lg-target").innerText = i18next.t("lg-target");
  document.getElementById("lg-setIndividualTarget").innerText = i18next.t("lg-setIndividualTarget");

    // Update cost labels with translation + formatted numbers
  document.getElementById("gsCost").innerText =
    i18next.t(formatNumber(goldenScrapValue));

  document.getElementById("magnetCost").innerText =
    i18next.t(formatNumber(magnetValue));

  document.getElementById("fragmentCost").innerText =
    i18next.t(formatNumber(fragmentValue));


}



// Example: switch language
function changeLanguage(lang) {
  currentLang = lang; // update current language
  i18next.changeLanguage(lang, updateContent);
}

// Attach listener after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("languageSelect");

  langSelect.addEventListener("change", (event) => {
    const selectedLang = event.target.value;
    changeLanguage(selectedLang);
  });

  // Initial run
  updateContent();
});


