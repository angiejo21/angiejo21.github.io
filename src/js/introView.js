import View from "./view.js";
import homeView from "./homeView.js";
import projectsView from "./projectsView.js";
import contactView from "./contactView.js";
import bioView from "./bioView.js";

class IntroView extends View {
  _markup = `
  <div class="row py-5" id='intro'>
    <div class="col-12 py-5 text-center">
      <h1 class="text-uppercase fw-bolder mb-4 colorful say-hi">Hi!</h1>
      <h2 class="">I'm Angela Bellò</h2>
      <h2 class="text-muted">Junior Full-Stack Developer</h2>
    </div>
  </div>
`;
  addHandler() {
    this._parentElement.addEventListener("click", (e) => {
      if (!e.target.closest(".submit")) e.preventDefault();
      if (e.target.closest("#intro")) homeView.init();
      if (e.target.closest("#projects")) projectsView.init();
      if (e.target.closest("#bio")) bioView.init();
      if (e.target.closest("#contact")) contactView.init();
      if (e.target.closest(".project")) {
        const project = e.target.closest("a");
        window.open(project.href, "blank");
      }
      if (e.target.closest(".nav-link")) {
        const link = e.target.closest(".nav-link");
        window.open(link.href, "blank");
      }
    });

    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      const contactForm = document.getElementById("contact-form");
      const success = document.getElementById("success");
      // generate a five digit number for the contact_number variable
      contactForm.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("contact_service", "contact_form", contactForm).then(
        function () {
          document.querySelector(".contact_form").classList.add("d-none");
          document.getElementById("success").classList.remove("d-none");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
  }
}

export default new IntroView();
