import React from "react";
import Slide from "../Slide/Slide";
import "./contactSlide.scss";

const ContactSlide = () => {
  return (
    <Slide className="at-contact-slide" id="contact">
      <div className="at-title">Kontakt</div>

      <div className="at-contact">
        E-mail:{" "}
        <a href="mailto:algo.trade.hackathon@gmail.com">
          algo.trade.hackathon@gmail.com
        </a>
      </div>
      <div className="at-contact">
        Instagram:{" "}
        <a
          href="https://www.instagram.com/algotrade_hackathon/"
          target="_blank"
          rel="noreferrer"
        >
          @algotrade_hackathon
        </a>
      </div>
    </Slide>
  );
};

export default ContactSlide;
