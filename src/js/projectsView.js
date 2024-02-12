import View from "./view.js";

class ProjectsView extends View {
  _markup = `
  <div class="row d-flex justify-content-center">
    <div class="col-12 text-end">
      <button id="intro" class="mb-3">← Back</button>
      <h2 class="text-uppercase fw-bolder section-title mb-4 colorful">
        Projects:
      </h2>
    </div>
    <!--Project 1-->
    <div class="col-lg-4 col-md-6 col-12 text-center text-center">
      <a href="https://https://checked.bello.codes/" target="_blank">
        <figure class="project project--5 mb-3"></figure
      ></a>
      <h3>Checked</h3>
      <p>React</p>
    </div>
    <!--Project 1-->
    <div class="col-lg-4 col-md-6 col-12 text-center text-center">
      <a href="https://https://nxt.bello.codes/" target="_blank">
        <figure class="project project--4 mb-3"></figure
      ></a>
      <h3>NXT</h3>
      <p>JavaScript - Open Library API</p>
    </div>
    <!--Project 1-->
    <div class="col-lg-4 col-md-6 col-12 text-center text-center">
      <a href="https://hacker-news.bello.codes" target="_blank">
        <figure class="project project--1 mb-3"></figure
      ></a>
      <h3>Hacker News</h3>
      <p>JavaScript - Hacker News API</p>
    </div>
    <!--Project 2-->
    <div class="col-lg-4 col-md-6 col-12 text-center text-center">
      <a href="https://kicks.bello.codes" target="_blank">
        <figure class="project project--2 mb-3"></figure>
      </a>
      <h3>Kicks Inc</h3>
      <p>Canva - Bootstrap 5 - Sass</p>
    </div>
    <!--Project 3-->
    <div class="col-lg-4 col-md-6 col-12 text-center text-center">
      <a href="https://counter.bello.codes" target="_blank">
        <figure class="project project--3 mb-3"></figure
      ></a>
      <h3>Retro-Counter</h3>
      <p>Vanilla JavaScript</p>
    </div>
    <div class="row d-flex my-5 justify-content-center">
      <button class="btn btn-primary col-6 text-uppercase">More</button>
    </div>
</div>
  `;
}

export default new ProjectsView();
