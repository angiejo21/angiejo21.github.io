import View from "./view.js";

class ProjectsView extends View {
  projects = [
    {
      id: 4,
      name: "Checked",
      href: "https://checked.bello.codes/",
      class: "project--4",
      language: "Javascript - React",
    },
    {
      id: 3,
      name: "NXT",
      href: "https://nxt.bello.codes/",
      class: "project--3",
      language: "Vanilla JS - Open Library API",
    },
    {
      id: 2,
      name: "Hacker News",
      href: "https://hacker-news.bello.codes",
      class: "project--2",
      language: "Vanilla JS - Hacker News API",
    },
    {
      id: 1,
      name: "Retro-Counter",
      href: "https://counter.bello.codes",
      class: "project--1",
      language: "Vanilla Javascript",
    },
    {
      id: 0,
      name: "Kicks Inc",
      href: "https://kicks.bello.codes",
      class: "project--0",
      language: "Canva - Bootstrap 5 - Sass",
    },
  ];
  _markup = `
  <div class="row py-5 d-flex justify-content-center">
    <div class="col-12 text-end">
      <button id="intro" class="mb-3">← Back</button>
      <h2 class="text-uppercase fw-bolder section-title mb-5 colorful">
        Projects:
      </h2>
    </div>
    <!--Project-->
    ${this.projects
      .map((p) => {
        return `
      <div class="col-lg-4 col-md-6 col-12 text-center text-center">
        <a href=${p.href}>
          <figure class="mb-3 project ${p.class}"></figure>
        </a>
        <h3>${p.name}</h3>
        <p>${p.language}</p>
      </div>
      `;
      })
      .join("")}
  </div>
  `;
}

export default new ProjectsView();

// <div class="row d-flex my-5 justify-content-center">
//   <button class="btn btn-primary col-6 text-uppercase">More</button>
// </div>
