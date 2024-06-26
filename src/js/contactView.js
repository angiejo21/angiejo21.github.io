import View from "./view.js";

class ContactView extends View {
  _markup = `
  <div class="row py-5 d-flex justify-content-center" id='home'>
    <div class="col-12 text-end">
      <button id="intro" class="mb-3">← Back</button>
      <h2 class="text-uppercase fw-bolder section-title mb-5 colorful">
        Contacts:
      </h2>
    </div>
    <div class="row d-flex justify-content-center">      
        <ul class="row d-flex flex-wrap list-unstyled">
          <li class="col-6 col-md-3">
            <a class="d-flex flex-column text-decoration-none justify-content-center align-items-center nav-link"  href="https://github.com/angiejo21" target="_blank">              
                <svg class="mb-1">
                <use xlink:href="#github"></use>
                </svg>              
              Github
            </a>
          </li>
          <li class="col-6 col-md-3">
            <a class="d-flex flex-column text-decoration-none justify-content-center align-items-center nav-link" href="https://www.linkedin.com/in/angelabello/" target="_blank">              
                <svg class="mb-1">
                <use xlink:href="#linkedin"></use>
                </svg>                
                Linkedin
            </a>
          </li>
          <li class="col-6 col-md-3">
            <a class="d-flex flex-column text-decoration-none justify-content-center align-items-center nav-link" href="https://www.instagram.com/angiejo21" target="_blank">              
                <svg class="mb-1">
                <use xlink:href="#instagram"></use>
                </svg>              
              Instagram
            </a>
          </li>
          <li class="col-6 col-md-3">
            <a class="d-flex flex-column text-decoration-none justify-content-center align-items-center nav-link" href="https://talent.start2impact.it/profile/angela-bello" target="_blank">               
                <svg class="mb-1">
                <use xlink:href="#navigation"></use>
                </svg>              
              start2impact
            </a>
          </li>
        </ul>
      
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
            id='firstName'
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            name="last_name"
            aria-label="Last name"
            id='lastName'
          />
        </div>
      </div>
      <div class="mb-3">
        <input
          type="email"
          class="form-control"
          placeholder="name@example.com"
          name="email"
          id='email'
        />
      </div>
      <div class="">
        <textarea
          class="form-control"
          placeholder="Message"
          style="height: 100px"
          name="message"
          id='message'
        ></textarea>
      </div>
      <div class="mt-3">
        <button type="submit" class="btn btn-primary submit" value="Submit">
          Submit
        </button>
      </div>
    </form>
    <div id="success" class="text-center d-none mt-5">
      <h3 class="colorful fw-bolder text-uppercase">Thank you!</h3>
      <h5>I'll get back to you shortly 🏃‍♀️</h5>
    </div>
    </div>
  </div>
`;
}

export default new ContactView();
