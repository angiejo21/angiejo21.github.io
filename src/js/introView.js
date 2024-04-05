import View from "./view.js";
import homeView from "./homeView.js";
import projectsView from "./projectsView.js";
import contactView from "./contactView.js";
import bioView from "./bioView.js";

import resume from "../file/bello-angela-resume-2024.pdf";

class IntroView extends View {
  _markup = `
  <div class="row py-5" id='intro'>
    <div class="col-12 py-5 text-center">
      <h1 class="text-uppercase fw-bolder mb-4 colorful say-hi">Hi!</h1>
      <h2 class="">I'm Angela Bellò</h2>
      <h2 class="text-muted">Junior Full-Stack Developer</h2>
      <button class="btn btn-primary col-6 mt-2" onclick="(e)=>e.preventDefault()">Come in</button>
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
      if (e.target.closest("#download")) {
        window.open(resume, "blank");
      }
    });

    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      const contactForm = document.getElementById("contact-form");
      const isValid = () => {
        const firstName = contactForm.querySelector("#firstName");
        const lastName = contactForm.querySelector("#lastName");
        const email = contactForm.querySelector("#email");
        const message = contactForm.querySelector("#message");

        if (firstName.value && lastName.value && email.value && message.value) {
          return true;
        }
        if (!firstName.value) firstName.classList.add("bg-danger");
        if (!lastName.value) lastName.classList.add("bg-danger");
        if (!email.value) email.classList.add("bg-danger");
        if (!message.value) message.classList.add("bg-danger");
        return false;
      };
      if (isValid()) {
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
      } else return;
    });
  }
}

export default new IntroView();
