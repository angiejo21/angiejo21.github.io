import View from "./view.js";

class ContactView extends View {
  _markup = `
  <div class="row py-5" id='home'>
    <div class="col-12 text-end">
      <button id="intro">← Back</button>
      <h2 class="text-uppercase fw-bolder section-title mb-4 colorful">
        Contacts:
      </h2>
    </div>
    <div class="row">
      <div class="col-12">
        <ul class="">
          <li class="">
            <a class="">
              <button>
                <svg>
                <use xlink:href="#github"></use>
                </svg>
              </button>
            </a>
          </li>
          <li>
            <a>
              <button>
                <svg>
                <use xlink:href="#linkedin"></use>
                </svg>
              </button>
            </a>
          </li>
          <li>
            <a>
              <button>
                <svg>
                <use xlink:href="#instagram"></use>
                </svg>
              </button>
            </a>
          </li>
          <li>
            <a>
              <button>
                <svg>
                <use xlink:href="#navigation"></use>
                </svg>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
    <form id="contact-form" class="contact_form">
      <input type="hidden" name="contact_number" />
      <div class="row mb-3 g-3">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            name="first_name"
            aria-label="First name"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            name="last_name"
            aria-label="Last name"
          />
        </div>
      </div>
      <div class="mb-3">
        <input
          type="email"
          class="form-control"
          placeholder="name@example.com"
          name="email"
        />
      </div>
      <div class="">
        <textarea
          class="form-control"
          placeholder="Message"
          style="height: 100px"
          name="message"
        ></textarea>
      </div>
      <div class="mt-3">
        <button type="submit" class="btn btn-primary submit" value="Submit">
          Submit
        </button>
      </div>
    </form>
    <div id="success" class="text-center d-none">
      <h3 class="colorful">Thank you!</h3>
      <h5>I'll get back to you shortly 🏃‍♀️</h5>
    </div>
    </div>
  </div>
`;
  addHandlerSubmit() {
    const success = document.getElementById("success");
    const form = document.getElementById("contact_form");

    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("submit!!");
        // generate a five digit number for the contact_number variable
        this.contact_number.value = (Math.random() * 100000) | 0;
        // these IDs from the previous steps
        emailjs.sendForm("contact_service", "contact_form", this).then(
          function () {
            console.log("SUCCESS!");
            form.classList.add("d-none");
            success.classList.remove("d-none");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      });
  }
}

export default new ContactView();
