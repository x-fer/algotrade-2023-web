import React from "react";
import Button from "../Button/Button";
import Slide from "../Slide/Slide";
import "./homeSlide.scss";

const HomeSlide = () => {
  return (
    <Slide className="at-home-slide" id="home">
      <div className="inner-div">
        <div className="slogan">Crack the code to financial success!</div>
        <div className="slogan-subtitle">
          Predavanja - od 29. do 31. ožujka - FER{" "}
        </div>
        <div className="slogan-subtitle">
          Hackathon - od 1. do 2. travnja - Studentski centar
        </div>
        <Button isLink href="#about" className="call-to-action-button">
          Saznaj više!
        </Button>
      </div>
    </Slide>
  );
};

export default HomeSlide;
