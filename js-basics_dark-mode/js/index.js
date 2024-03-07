console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const switchToDarkMode = document.querySelector('[data-js="dark-mode-button"]');

switchToDarkMode.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

const switchToLightMode = document.querySelector(
  '[data-js="light-mode-button"]'
);

switchToLightMode.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

const toggleMode = document.querySelector('[data-js="toggle-button"]');

toggleMode.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
