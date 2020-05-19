import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../imgs/b-logo.png";

const buttons = ["HOME", "PORTFOLIO", "ABOUT", "CONTACT"];
export const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="header">
      <nav
        className={
          menu ? "header__navigation-wrap" : "header__navigation-wrap hidden"
        }
      >
        <ul className="header__navigation">
          {buttons.map(b => {
            return (
              <li key={b} className="button header_button">
                <a href="#">{b}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="header__container">
        <img src={logo} alt="company logo" height="50px" width="50px" />
        <div className="header__company-name">
          <h2 className="header__heading">BLA BLA</h2>
          <p className="header__description">One Page Flat Template</p>
        </div>
        <button
          className="header__menu"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <span className="visually-hidden">open menu</span>
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#444444" }}
            size="1.5x"
          />
        </button>
      </div>
    </header>
  );
};
