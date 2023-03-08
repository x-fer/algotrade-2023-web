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
          <a href="#at-home-slide">Naslovna</a>
        </li>
        <li className="header-menu-element">
          <a href="#at-about-slide">O događaju</a>
        </li>
        <li className="header-menu-element">
          <a href="#at-partners-slide">Partneri</a>
        </li>
        <li className="header-menu-element">
          <a href="#at-apply-slide">Prijava</a>
        </li>
        <li className="header-menu-element">
          <a href="#at-contact-slide">Kontakt</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
