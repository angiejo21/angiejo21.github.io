import View from "./view.js";

class HomeView extends View {
  _markup = `
  <div class="row py-5" id='home'>
    <div class="col-12 text-end">
      <h2 class="text-uppercase fw-bolder section-title mb-4 colorful">
        Hi there!
      </h2>
    </div>
    <div class="row">
    <h4>I'm a <span class="colorful" id="carousel-words"></span></h4>
    <p>
      I'm Angela, a Junior Full Stack Developer based in
      Italy. With my background in languages and my love for
      technology, I've found a perfect match in the world of coding.
      I'm always on a mission to learn and grow, continuously
      expanding my skills and knowledge to stay ahead of the game.
    </p>
    <div class="col-12 pt-3 d-flex justify-content-center gap-3">
      <a
        class="btn btn-tertiary col-3 shadow-lg" id="projects"
        >Projects</a
      >
      <a
      class="btn btn-primary col-3 shadow-lg" id="bio"
      >Bio</a
      >
      <a
        class="btn btn-secondary col-3 shadow-lg" id="contact"
        >Contact me</a
      >
    </div>
  </div>
</div>
`;
}

export default new HomeView();

// WORD CAROUSEL
// const words = [
//   "dreamer",
//   "problem solver",
//   "art enthusiast",
//   "team leader",
//   "team player",
//   "nerd",
//   "traveller",
//   "curious learner",
//   "culture lover",
//   "language addicted",
// ];
// let counter = 0;
// let word = document.getElementById("carousel-words");
// setInterval(updateCarouselWords, 1500);
// function updateCarouselWords() {
//   word.innerHTML = words[counter];
//   counter++;
//   if (counter >= words.length) {
//     counter = 0;
//   }
// }
