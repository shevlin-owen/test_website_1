const COMPANY_NAME = "Glór na Gaoithe Media BUM";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".company-name").forEach(el => {
    el.textContent = COMPANY_NAME;
  });
});

const COPYRIGHT = "© 2026 Glór na Gaoithe Media";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".copyright").forEach(el => {
    el.textContent = COPYRIGHT;
  });
});