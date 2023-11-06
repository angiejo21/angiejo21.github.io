import View from "./view.js";

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
}

export default new IntroView();
