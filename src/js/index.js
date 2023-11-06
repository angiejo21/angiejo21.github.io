import bootstrap from "bootstrap";
import introView from "./introView.js";
// import "../img/hacker-news.png";
import "../scss/style.scss";
import view from "./view.js";
import homeView from "./homeView.js";
import projectsView from "./projectsView.js";
import contactView from "./contactView.js";
import bioView from "./bioView.js";
import footerView from "./footerView.js";
import "../img/github.svg";
import "../img/instagram.svg";
import "../img/linkedin.svg";
import "../img/moon.svg";
import "../img/navigation.svg";
import "../img/sun.svg";

function initalize() {
  document
    .getElementById("theme-toggle")
    .addEventListener("click", function () {
      if (document.documentElement.getAttribute("data-bs-theme") === "dark") {
        document.documentElement.setAttribute("data-bs-theme", "light");
        this.querySelector("use").setAttribute("xlink:href", "#moon");
      } else {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        this.querySelector("use").setAttribute("xlink:href", "#sun");
      }
    });

  document.getElementById("root").addEventListener("click", (e) => {
    if (!e.target.closest(".submit")) e.preventDefault();
    if (e.target.closest("#intro")) homeView.init();
    if (e.target.closest("#projects")) projectsView.init();
    if (e.target.closest("#bio")) bioView.init();
    if (e.target.closest("#contact")) contactView.init();

    // if (target.closest("#portfolio")) console.log("portfolio");
    console.log(e.target);
  });
  document.getElementById("root").addEventListener("submit", function (e) {
    e.preventDefault();
    const contactForm = document.getElementById("contact-form");
    const success = document.getElementById("success");
    // generate a five digit number for the contact_number variable
    contactForm.contact_number.value = (Math.random() * 100000) | 0;
    // these IDs from the previous steps
    emailjs.sendForm("contact_service", "contact_form", contactForm).then(
      function () {
        console.log("SUCCESS!", success);
        document.querySelector(".contact_form").classList.add("d-none");
        document.getElementById("success").classList.remove("d-none");
        console.log(success);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });
  introView.init();
  footerView.init();
}
initalize();
//DARK MODE
document.getElementById("theme-toggle").addEventListener("click", () => {
  if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
    document.documentElement.setAttribute("data-bs-theme", "light");
  } else {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
});

//SPINNER
const spinnerWrapperEl = document.querySelector(".spinner-wrapper");

window.addEventListener("load", () => {
  spinnerWrapperEl.style.opacity = "0";

  setTimeout(() => {
    spinnerWrapperEl.style.display = "none";
  }, 300);
});

//EmailJS
// const success = document.getElementById("success");
// const form = document.getElementById("contact_form");

// window.onload = function () {
//   document
//     .getElementById("contact-form")
//     .addEventListener("submit", function (event) {
//       event.preventDefault();
//       // generate a five digit number for the contact_number variable
//       this.contact_number.value = (Math.random() * 100000) | 0;
//       // these IDs from the previous steps
//       emailjs.sendForm("contact_service", "contact_form", this).then(
//         function () {
//           console.log("SUCCESS!");
//           form.classList.add("d-none");
//           success.classList.remove("d-none");
//         },
//         function (error) {
//           console.log("FAILED...", error);
//         }
//       );
//     });
// };
