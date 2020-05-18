import React, { useState } from "react";
import img1 from "../imgs/img-1.png";
import img2 from "../imgs/img-2.png";
import img3 from "../imgs/img-3.png";
import img4 from "../imgs/img-4.png";
import img5 from "../imgs/img-5.png";
import img6 from "../imgs/img-6.png";

const buttons = ["all", "web", "graphic", "flat"];

const projectsList = [
  {
    id: "1",
    name: "project 1",
    img: img1,
    type: "web design"
  },
  { id: "2", name: "project 2", img: img2, type: "graphic design" },
  { id: "3", name: "project 3", img: img3, type: "flat design" },
  { id: "4", name: "project 4", img: img4, type: "web design" },
  { id: "5", name: "project 5", img: img5, type: "graphic design" },
  { id: "6", name: "project 6", img: img6, type: "flat design" },
  { id: "7", name: "project 7", img: img1, type: "graphic design" },
  { id: "8", name: "project 8", img: img2, type: "flat design" }
];

const TYPES = {
  FLAT: "flat design",
  GRAPHIC: "graphic design",
  WEB: "web design",
  ALL: "all"
};

const filteredProjects = (type, projects) => {
  if (type === TYPES.ALL) {
    return projects;
  }
  return projects.filter(p => p.type === type);
};

export const Portfolio = () => {
  const [type, setType] = useState(TYPES.ALL);
  const projects = filteredProjects(type, projectsList);
  return (
    <section className="portfolio">
      <h2 className="portfolio__heading">Portfolio</h2>
      <p className="portfolio__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="portfolio__buttons">
        {buttons.map(button => {
          const buttonType = button === TYPES.ALL ? button : button + " design";
          return (
            <button
              key={button}
              className="button button--portfolio"
              onClick={() => setType(buttonType)}
            >
              {button.toUpperCase()}
              {button === TYPES.ALL ? (
                ""
              ) : (
                <span className="portfolio__extra">DESIGN</span>
              )}
            </button>
          );
        })}
      </div>
      <div className="portfolio__projects">
        {projects.map(p => {
          return (
            <div className="portfolio__project" key={p.id}>
              <span className="visually-hidden">{p.name}</span>
              <img src={p.img} alt={p.img} height="180px" width="180px" />
            </div>
          );
        })}
      </div>
    </section>
  );
};
