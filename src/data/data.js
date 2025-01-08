export const technologies = [
  { name: "NodeJs", level: "👍", color: "lime-500" },
  { name: "Express", level: "👍", color: "green-800" },
  { name: "Mongoose", level: "👶", color: "green-500" },
  { name: "MongoDB", level: "👍", color: "emerald-500" },
  { name: "ReactJs", level: "💪", color: "indigo-500" },
  { name: "ReactRouter", level: "💪", color: "indigo-800" },
  { name: "Redux", level: "👍", color: "blue-500" },
  { name: "TailwindCSS", level: "⭐", color: "sky-500" },
  { name: "Vite", level: "👍", color: "cyan-500" },
  { name: "JavasScript", level: "⭐", color: "yellow-500" },
  { name: "CSS", level: "⭐", color: "orange-500" },
  { name: "HTML", level: "⭐", color: "red-500" },
  { name: "APIs", level: "👍", color: "slate-500" },
  { name: "Bootstrap5", level: "💪", color: "violet-500" },
  { name: "Sass", level: "👍", color: "pink-500" },
  { name: "Git", level: "👍", color: "amber-500" },
  { name: "SQL", level: "👶", color: "stone-500" },
  { name: "PHP", level: "👶", color: "purple-500" },
].sort((a, b) => a.name.localeCompare(b.name));

export const projects = [
  {
    name: "Reach17",
    url: "https://github.com/angiejo21/REACH17",
    tech: ["Git", "NodeJs", "Express", "Mongoose", "MongoDB"],
    description: "REST API for a fictional educational platform",
    img: "img/reach17.png",
  },
  {
    name: "Flow",
    url: "https://flow.bello.codes",
    tech: ["Git", "ReactJs", "ReactRouter", "Redux", "TailwindCSS", "Vite"],
    description:
      "Meditation app with breathing exercises, guided meditations and ambient sounds.",
    img: "img/flow.png",
  },
  {
    name: "Checked",
    url: "https://checked.bello.codes",
    tech: ["Git", "ReactJs", "CSS"],
    description: "Simple to do list app.",
    img: "img/checked.png",
  },
  {
    name: "Nxt",
    url: "https://nxt.bello.codes",
    tech: ["Git", "JavasScript", "CSS", "HTML", "APIs"],
    description:
      "What should I read NXT? searches the OpenLibrary catalogue by genre, author or author, and saves favorite books.",
    img: "img/nxt.png",
  },
  {
    name: "Hacker news",
    url: "https://hacker-news.bello.codes",
    tech: ["Git", "JavasScript", "CSS", "HTML", "APIs"],
    description:
      "Read the most recent stories published on Hacker News and its top story.",
    img: "img/hacker-news.png",
  },
  {
    name: "Retro-Counter",
    url: "https://counter.bello.codes",
    tech: ["Git", "JavasScript", "CSS", "HTML"],
    description: "Simple dynamically created counter inspired by a gameboy",
    img: "img/counter.png",
  },
  {
    name: "Kicks Inc",
    url: "https://kicks.bello.codes",
    tech: ["Git", "Bootstrap5", "Sass"],
    description:
      "Website for a fictional company that offers game development workshops.",
    img: "img/kicks.png",
  },
];
export const projectsObj = {
  reach17: {
    name: "Reach17",
    url: "https://github.com/angiejo21/REACH17",
    tech: ["Git", "NodeJs", "Express", "Mongoose", "MongoDB"],
    description: "REST API for a fictional educational platform",
    img: "img/reach17.png",
  },
  flow: {
    name: "Flow",
    url: "https://flow.bello.codes",
    tech: ["Git", "ReactJs", "ReactRouter", "Redux", "TailwindCSS", "Vite"],
    description:
      "Meditation app with breathing exercises, guided meditations and ambient sounds.",
    img: "img/flow.png",
  },
  checked: {
    name: "Checked",
    url: "https://checked.bello.codes",
    tech: ["Git", "ReactJs", "CSS"],
    description:
      "Meditation app with breathing exercises, guided meditations and ambient sounds.",
    img: "img/checked.png",
  },
  nxt: {
    name: "Nxt",
    url: "https://nxt.bello.codes",
    tech: ["Git", "JavasScript", "CSS", "HTML", "APIs"],
    description:
      "What should I read NXT? searches the OpenLibrary catalogue by genre, author or author, and saves favorite books.",
    img: "img/nxt.png",
  },
  hackerNews: {
    name: "Hacker news",
    url: "https://hacker-news.bello.codes",
    tech: ["Git", "JavasScript", "CSS", "HTML", "APIs"],
    description:
      "Read the most recent stories published on Hacker News and its top story.",
    img: "img/hacker-news.png",
  },
  retroCounter: {
    name: "Retro-Counter",
    url: "https://counter.bello.codes",
    tech: ["Git", "JavasScript", "CSS", "HTML"],
    description: "Simple dynamically created counter inspitred by a gameboy",
    img: "img/counter.png",
  },
  kicks: {
    name: "Kicks Inc",
    url: "https://kicks.bello.codes",
    tech: ["Git", "Bootstrap5", "Sass"],
    description: "Simple dynamically created counter inspitred by a gameboy",
    img: "img/kicks.png",
  },
};
