import View from "./view.js";

class BioView extends View {
  _markup = `
  <div class="row d-flex justify-content-center">
    <div class="col-12 text-end">
      <button id="intro" class="mb-3">← Back</button>
      <h2 class="text-uppercase fw-bolder section-title mb-5 colorful">
        About me:
      </h2>
    </div>
    <p>
      I'm Angela, a Junior Full Stack Developer based in
      Italy. With my background in languages and my love for
      technology, I've found a perfect match in the world of coding.
      I'm always on a mission to learn and grow, continuously
      expanding my skills and knowledge to stay ahead of the game.
    </p>
    <div class="row d-flex my-5 justify-content-center">
      <button class="btn btn-primary col-6 text-uppercase" disabled>Resume</button>
    </div>
  </div>
`;
}

export default new BioView();
