import React, { useState } from "react";
import { Element } from "react-scroll";

import img1 from "../imgs/img-1.png";
import img1webp from "../imgs/webp/img-1.webp";
import img2 from "../imgs/img-2.png";
import img2webp from "../imgs/webp/img-2.webp";
import img3 from "../imgs/img-3.png";
import img3webp from "../imgs/webp/img-3.webp";
import img4 from "../imgs/img-4.png";
import img4webp from "../imgs/webp/img-4.webp";
import img5 from "../imgs/img-5.png";
import img5webp from "../imgs/webp/img-5.webp";
import img6 from "../imgs/img-6.png";
import img6webp from "../imgs/webp/img-6.webp";

import { ComponentHeading } from "./ComponentHeading";

const buttons = ["all", "web", "graphic", "flat"];

const projectsList = [
  { id: "1", name: "project 1", img: img1, webp: img1webp, type: "web design" },
  {
    id: "2",
    name: "project 2",
    img: img2,
    webp: img2webp,
    type: "graphic design"
  },
  {
    id: "3",
    name: "project 3",
    img: img3,
    webp: img3webp,
    type: "flat design"
  },
  { id: "4", name: "project 4", img: img4, webp: img4webp, type: "web design" },
  {
    id: "5",
    name: "project 5",
    img: img5,
    webp: img5webp,
    type: "graphic design"
  },
  {
    id: "6",
    name: "project 6",
    img: img6,
    webp: img6webp,
    type: "flat design"
  },
  {
    id: "7",
    name: "project 7",
    img: img1,
    webp: img1webp,
    type: "graphic design"
  },
  { id: "8", name: "project 8", img: img2, webp: img2webp, type: "flat design" }
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
    <Element name={"portfolio"}>
      <section className="portfolio">
        <ComponentHeading name={"Portfolio"} color="black" />
        <div className="portfolio__buttons">
          {buttons.map(button => {
            const buttonType =
              button === TYPES.ALL ? button : button + " design";
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
                <div className="portfolio__project-wrap">
                  <span className="visually-hidden">{p.name}</span>
                  <picture>
                    <source type="image/webp" srcSet={p.webp} />

                    <img
                      src={p.img}
                      alt={p.name}
                      height="180px"
                      width="180px"
                    />
                  </picture>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Element>
  );
};
