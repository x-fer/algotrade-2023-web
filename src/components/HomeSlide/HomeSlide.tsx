import React from "react";
import Button from "../Button/Button";
import Slide from "../Slide/Slide";
import "./homeSlide.scss";

const HomeSlide = () => {
  return (
    <Slide className="at-home-slide" id="at-home-slide">
      <div className="inner-div">
        <div className="slogan">Lorem ipsum dolor sit amet!</div>
        <div className="slogan-subtitle">Predavanja - 29. do 31. ožujka </div>
        <div className="slogan-subtitle">Hackathon - 1. do 2. travnja</div>
        <Button className="call-to-action-button">Prijavi se!</Button>
      </div>
    </Slide>
  );
};

export default HomeSlide;
