import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="at-header">
      <svg width="48" height="48">
        <rect
          width="48"
          height="48"
          style={{
            fill: "darkgrey",
          }}
        />
      </svg>
      <ul className="header-menu-list">
        <li className="header-menu-element">
          <a href="#home-slide">Naslovna</a>
        </li>
        <li className="header-menu-element">
          <a href="#about-slide">O događaju</a>
        </li>
        <li className="header-menu-element">
          <a href="#partners-slide">Partneri</a>
        </li>
        <li className="header-menu-element">
          <a href="#apply-slide">Prijava</a>
        </li>
        <li className="header-menu-element">
          <a href="#contact-slide">Kontakt</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
