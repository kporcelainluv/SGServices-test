import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import { ComponentHeading } from "./ComponentHeading";
import ava1 from "../imgs/ava-1.png";
import ava2 from "../imgs/ava-2.png";
import ava3 from "../imgs/ava-3.png";

const employees = [
  {
    id: "21",
    name: "Melannie Doe",
    title: "project manager",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: ava1
  },
  {
    id: "22",
    name: "Jhonnie Doe",
    title: "graphic designer",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: ava3
  },
  {
    id: "23",
    name: "Daniel Doe",
    title: "web designer",
    about: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamc.",
    img: ava2
  }
];

export const About = () => {
  return (
    <ScrollableAnchor id={"about"}>
    <section className="about">
      <ComponentHeading name={"About Us"} color="white" />
      <div className="about__container">
        {employees.map(employee => {
          return <AboutCard employee={employee} key={employee.id} />;
        })}
      </div>
    </section>
    </ScrollableAnchor>
  );
};
const AboutCard = ({ employee }) => {
  return (

      <div className="about__card">
        <img
          src={employee.img}
          alt={employee.name + " image"}
          height="220px"
          width="220px"
        />
        <div className="about__description">
          <h3 className="about__name">{employee.name}</h3>
          <h4 className="about__title">{employee.title}</h4>
          <p className="about__bio">{employee.about}</p>
        </div>
      </div>
  );
};
