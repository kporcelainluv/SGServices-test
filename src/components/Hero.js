import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <section className="hero">
      <h2 className="hero__heading">
        We Build <span className="hero__heading-bold">Brand</span>
      </h2>
      <p className="hero__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Link
        activeClass="active"
        className="button button--hero"
        to={"portfolio"}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        LEARN MORE
      </Link>
      <Link
        activeClass="active"
        className="hero__icon"
        to={"portfolio"}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <span className="visually-hidden"> icon down</span>
        <FontAwesomeIcon icon={faChevronCircleDown} size="3x" />
      </Link>
    </section>
  );
};
