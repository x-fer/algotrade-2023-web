import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="at-header">
      <div className="event-name">
        <a href="https://algotrade.xfer.hr">
          <span className="event-name-dark">ALGO</span>
          <span className="event-name-color">TRADE</span>
        </a>
      </div>
      <ul className="header-menu-list">
        <li className="header-menu-element">
          <a href="#home">Naslovna</a>
        </li>
        <li className="header-menu-element">
          <a href="#about">O događaju</a>
        </li>
        <li className="header-menu-element">
          <a href="#partners">Partneri</a>
        </li>
        <li className="header-menu-element">
          <a href="#schedule">Raspored</a>
        </li>
        <li className="header-menu-element">
          <a href="#apply">Prijava</a>
        </li>
        <li className="header-menu-element">
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
