import bootstrap from "bootstrap";
import "../scss/style.scss";
import headerView from "./headerView.js";
import introView from "./introView.js";
import footerView from "./footerView.js";
import "../img/github.svg";
import "../img/instagram.svg";
import "../img/linkedin.svg";
import "../img/moon.svg";
import "../img/navigation.svg";
import "../img/sun.svg";

function initalize() {
  headerView.init();
  introView.init();
  footerView.init();
}
initalize();

//SPINNER
const spinnerWrapperEl = document.querySelector(".spinner-wrapper");

window.addEventListener("load", () => {
  spinnerWrapperEl.style.opacity = "0";

  setTimeout(() => {
    spinnerWrapperEl.style.display = "none";
  }, 300);
});
