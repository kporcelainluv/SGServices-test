import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG
} from "@fortawesome/free-brands-svg-icons";
import { Element } from "react-scroll";

import { ComponentHeading } from "./ComponentHeading";
import ava1 from "../imgs/ava-1.png";
import ava1webp from "../imgs/webp/ava-1.webp";
import ava2 from "../imgs/ava-2.png";
import ava2webp from "../imgs/webp/ava-2.webp";
import ava3 from "../imgs/ava-3.png";
import ava3webp from "../imgs/webp/ava-3.webp";

const employees = [
  {
    id: "21",
    name: "Melannie Doe",
    title: "project manager",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: ava1,
    webp: ava1webp,
    facebook: "https://www.facebook.com/",
    twitter: "http://twitter.com/",
    google_plus: "https://ru.wikipedia.org/wiki/Google%2B",
    website: "https://meduza.io/"
  },
  {
    id: "22",
    name: "Jhonnie Doe",
    title: "graphic designer",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: ava3,
    webp: ava3webp,
    facebook: "https://www.facebook.com/",
    twitter: "http://twitter.com/",
    google_plus: "https://ru.wikipedia.org/wiki/Google%2B",
    website: "https://meduza.io/"
  },
  {
    id: "23",
    name: "Daniel Doe",
    title: "web designer",
    about: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamc.",
    img: ava2,
    webp: ava2webp,
    facebook: "https://www.facebook.com/",
    twitter: "http://twitter.com/",
    google_plus: "https://ru.wikipedia.org/wiki/Google%2B",
    website: "https://meduza.io/"
  }
];

const socials = [
  { name: "facebook", icon: faFacebookF },
  { name: "twitter", icon: faTwitter },
  { name: "google_plus", icon: faGooglePlusG },
  { name: "website", icon: faGlobe }
];

export const About = () => {
  return (
    <Element name={"about"}>
      <section className="about">
        <ComponentHeading name={"About Us"} color="white" />
        <div className="about__container">
          {employees.map(employee => {
            return <AboutCard employee={employee} key={employee.id} />;
          })}
        </div>
      </section>
    </Element>
  );
};
const AboutCard = ({ employee }) => {
  return (
    <div className="about__card">
      <picture>
        <source type="image/webp" srcSet={employee.webp} />
        <img
          src={employee.img}
          alt={employee.name + " image"}
          height="220px"
          width="220px"
          className="about__img"
        />
      </picture>
      <div className="about__socials">
        {socials.map(s => {
          return (
            <a key={s.name} href={employee[s.name]} className="about__links">
              <span className="visually-hidden">{s.name}</span>
              <FontAwesomeIcon icon={s.icon} size="1x" />
            </a>
          );
        })}
      </div>
      <div className="about__description">
        <h3 className="about__name">{employee.name}</h3>
        <h4 className="about__title">{employee.title}</h4>
        <p className="about__bio">{employee.about}</p>
      </div>
    </div>
  );
};
