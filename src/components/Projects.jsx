import { useState } from "react";
import { technologies, projects } from "../data/data";
import Pill from "./Pill";

function Projects() {
  const [projectList, setProjectList] = useState(projects);

  function searchProjects(techValue) {
    const newProjects = projects.filter((p) => p.tech.includes(techValue));
    setProjectList(newProjects);
  }

  return (
    <div className="space-y-10 mb-5">
      {/* Languages */}
      <div>
        <ul className="flex gap-2 flex-wrap justify-center">
          <Pill color="slate-500" onclick={() => setProjectList(projects)}>
            All
          </Pill>
          {technologies.map((t, i) => (
            <Pill
              key={i}
              color={t.color}
              onclick={() => searchProjects(t.name)}
            >
              {t.name} {t.level}
            </Pill>
          ))}
        </ul>
      </div>
      <div className="">
        <h4 className="text-2xl font font-bold text-secondary my-5 text-center">
          Projects
        </h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {projectList.map((p, i) => (
            <li
              key={i}
              className="p-5 aspect-square flex flex-col justify-center relative overflow-hidden rounded-xl"
            >
              <a href={p.url} target="_blank" className="group">
                <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <img
                  src={p.img}
                  className="z-0 absolute w-full h-full top-0 left-0 opacity-15 grayscale"
                />
                <div className="relative space-y-3 z-20 ">
                  <h6 className="relative font-semibold text-lg uppercase inline-block after:content-[''] after:w-full after:h-0.5 after:bg-accent after:z-30 after:absolute after:-bottom-1 after:left-0 after:opacity-100">
                    {p.name}
                  </h6>
                  <p>{p.description}</p>
                  <div>
                    <ul className="italic text-xs flex flex-wrap gap-1">
                      {p.tech.map((t, i) => {
                        const el = technologies.find((el) => el.name === t);
                        if (el)
                          return (
                            <Pill key={i} color={el.color}>
                              {t}
                            </Pill>
                          );
                      })}
                    </ul>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
        {projectList.length < 1 && (
          <p className="text-center text-xl">
            🚧 I&apos;m sorry I&apos;m still working on this project. 🚧
          </p>
        )}
      </div>
    </div>
  );
}

export default Projects;
