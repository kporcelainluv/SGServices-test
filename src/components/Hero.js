import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

export const Hero = () => {
  return (
    <div className="hero">
      <h2 className="hero__heading">
        We Build <span className="hero__heading--bold">Brand</span>
      </h2>
      <p className="hero__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a className="button button--hero" href="#portfolio">
        LEARN MORE
      </a>
      <a className="hero__icon" href="#portfolio">
        <span className="visually-hidden"> icon down</span>
        <FontAwesomeIcon icon={faChevronCircleDown} size="3x" />
      </a>
    </div>
  );
};
