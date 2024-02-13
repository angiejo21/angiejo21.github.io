import View from "./view.js";

class HomeView extends View {
  _markup = `
  <div class="row py-5  d-flex justify-content-center" id='home'>
    <div class="col-12 text-end">
      <h2 class="text-uppercase fw-bolder section-title mb-5 colorful">
        Hi there!
      </h2>
    </div>
    <div class="row col-12 d-flex justify-content-center">
    <h4 class='text-center'>What are you looking for?</h4>

    <div class="row col-12 pt-3 d-flex flex-wrap justify-content-center gap-3">
      <a
        class="btn btn-info col-md-3 shadow-lg" id="projects"
        >Projects</a
      >
      <a
      class="btn btn-primary col-md-3 shadow-lg" id="bio"
      >Bio</a
      >
      <a
        class="btn btn-secondary col-md-3 shadow-lg" id="contact"
        >Contact me</a
      >
    </div>
  </div>
</div>
`;
  // words = [
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
  // addHandler() {
  //   let counter = 0;
  //   const wordElement = document.getElementById("carousel-words");
  //   setInterval(() => {
  //     if (counter >= this.words.length) {
  //       counter = 0;
  //     } else {
  //       wordElement.innerHTML = this.words[counter];
  //       counter++;
  //     }
  //   }, 1500);
  // }
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
