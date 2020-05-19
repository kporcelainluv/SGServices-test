import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars as MenuIcon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

import logo from "../imgs/b-logo.png";
const buttons = ["HOME", "PORTFOLIO", "ABOUT", "CONTACT"];

export const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="header">
      <Navigation menu={menu} />

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
            icon={MenuIcon}
            style={{ color: "#444444" }}
            size="sm"
          />
        </button>
      </div>
    </header>
  );
};

const Navigation = ({ menu }) => {
  return (
    <nav
      className={
        menu ? "header__navigation-wrap" : "header__navigation-wrap hidden"
      }
    >
      <ul className="header__navigation">
        {buttons.map(b => {
          return (
            <li key={b}>
              <Link
                activeClass="active"
                className="button header_button"
                to={b.toLowerCase()}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {b}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
