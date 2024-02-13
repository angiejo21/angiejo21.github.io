import View from "./view";

class HeaderView extends View {
  _parentElement = document.querySelector("header");
  _markup = `
  <button
    type="button"
    class="my-5"
    aria-label="Toggle dark mode"
    id="theme-toggle"
  >
    <svg>
      <use xlink:href="#sun"></use>
    </svg>
  </button>
  `;
  addHandler() {
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
      const theme = document.documentElement.getAttribute("data-bs-theme");
      if (theme === "dark") {
        document.documentElement.setAttribute("data-bs-theme", "light");
        themeToggle.querySelector("use").setAttribute("xlink:href", "#moon");
      } else {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        themeToggle.querySelector("use").setAttribute("xlink:href", "#sun");
      }
    });
  }
}

export default new HeaderView();
