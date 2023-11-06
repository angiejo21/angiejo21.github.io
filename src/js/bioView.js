import View from "./view.js";

class BioView extends View {
  _markup = `
  <div class="row d-flex mb-5 justify-content-center">
    <div class="col-12 text-end">
      <button id="intro">← Back</button>
      <h2 class="text-uppercase fw-bolder section-title mb-4 colorful">
        About me:
      </h2>
    </div>
    <!---Bla bla bla--->
  </div>
`;
}

export default new BioView();
