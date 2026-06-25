const windowScene = document.querySelector("[data-window]");
const toggleButton = document.querySelector("[data-toggle-window]");

const setOpenState = (isOpen) => {
  windowScene.classList.toggle("is-open", isOpen);
  toggleButton.textContent = isOpen ? "关上窗户" : "打开窗户";
  toggleButton.setAttribute("aria-pressed", String(isOpen));
};

if (windowScene && toggleButton) {
  toggleButton.setAttribute("aria-pressed", "false");

  toggleButton.addEventListener("click", () => {
    setOpenState(!windowScene.classList.contains("is-open"));
  });

  windowScene.addEventListener("click", () => {
    setOpenState(!windowScene.classList.contains("is-open"));
  });
}
