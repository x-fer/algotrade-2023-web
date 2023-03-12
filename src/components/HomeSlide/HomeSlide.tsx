import React from "react";
import Button from "../Button/Button";
import Slide from "../Slide/Slide";
import "./homeSlide.scss";

const HomeSlide = () => {
  return (
    <Slide className="at-home-slide" id="home">
      <div className="inner-div">
        <div className="slogan">Lorem ipsum dolor sit amet!</div>
        <div className="slogan-subtitle">Predavanja - Datum - Lokacija </div>
        <div className="slogan-subtitle">Hackathon - Datum - Lokacija</div>
        <Button isLink href="#about" className="call-to-action-button">
          Saznaj više!
        </Button>
      </div>
    </Slide>
  );
};

export default HomeSlide;
