// import 'bootstrap';

//DARK MODE
document.getElementById("darkMode").addEventListener("click", () => {
  if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
    document.documentElement.setAttribute("data-bs-theme", "light");
  } else {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
});

// WORD CAROUSEL
const words = [
  "dreamer",
  "problem solver",
  "art enthusiast",
  "team leader",
  "team player",
  "nerd",
  "traveller",
  "curious learner",
  "culture lover",
  "language addicted",
];
let counter = 0;
let word = document.getElementById("carousel-words");
setInterval(updateCarouselWords, 1500);
function updateCarouselWords() {
  word.innerHTML = words[counter];
  counter++;
  if (counter >= words.length) {
    counter = 0;
  }
}
//  FOOTER YEAR
let today = new Date();
let year = today.getFullYear();
let currentYear = document.getElementById("current-year");

currentYear.innerHTML = year;

//SPINNER
const spinnerWrapperEl = document.querySelector(".spinner-wrapper");

window.addEventListener("load", () => {
  spinnerWrapperEl.style.opacity = "0";

  setTimeout(() => {
    spinnerWrapperEl.style.display = "none";
  }, 300);
});

//EmailJS

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("contact_service", "contact_form", this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
