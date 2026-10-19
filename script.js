const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector(".main-navigation");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");
const currentYear = document.querySelector("#current-year");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  mainNavigation.classList.toggle("is-open", !isExpanded);
});

mainNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    mainNavigation.classList.remove("is-open");
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const studentName = new FormData(contactForm).get("name").trim();
  formStatus.textContent = `Thanks, ${studentName}. This preview does not send enquiries yet.`;
});

currentYear.textContent = new Date().getFullYear();