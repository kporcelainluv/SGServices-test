import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareUp } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <span className="footer-copyright">
          © Copyright 2016 Bla Bla Studio | One Page Flat Template
        </span>
        <button className="footer-button" onClick={() => window.scrollTo(0, 0)}>
          <span className="visually-hidden">go to the top</span>
          <FontAwesomeIcon icon={faCaretSquareUp} size="3x" />
        </button>
      </div>
    </footer>
  );
};
