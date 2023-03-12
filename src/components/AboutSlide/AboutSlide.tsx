import React from "react";
import Slide from "../Slide/Slide";
import "./aboutSlide.scss";

const AboutSlide = () => {
  return (
    <Slide className="at-about-slide" id="about">
      <div className="main-title">
        Što je <span className="event-name event-name-dark">ALGO</span>
        <span className="event-name event-name-color">TRADE</span>?
      </div>
      <div className="event-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
        pulvinar diam. Fusce quis posuere ligula, eget porttitor lectus.
        Curabitur consequat ipsum risus, quis aliquet risus rhoncus id. Sed
        venenatis lacus in eros vehicula, ut vehicula sapien posuere. In hac
        habitasse platea dictumst. Donec quis condimentum tortor. Praesent lacus
        nisi, condimentum et efficitur eget, placerat id est. Proin blandit ante
        est.
      </div>

      <div className="subtitle">Predavanja</div>
      <div className="event-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
        pulvinar diam. Fusce quis posuere ligula, eget porttitor lectus.
        Curabitur consequat ipsum risus, quis aliquet risus rhoncus id. Sed
        venenatis lacus in eros vehicula, ut vehicula sapien posuere. In hac
        habitasse platea dictumst. Donec quis condimentum tortor. Praesent lacus
        nisi, condimentum et efficitur eget, placerat id est. Proin blandit ante
        est.
      </div>
      <div className="subtitle">Hackathon</div>
      <div className="event-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
        pulvinar diam. Fusce quis posuere ligula, eget porttitor lectus.
        Curabitur consequat ipsum risus, quis aliquet risus rhoncus id. Sed
        venenatis lacus in eros vehicula, ut vehicula sapien posuere. In hac
        habitasse platea dictumst. Donec quis condimentum tortor. Praesent lacus
        nisi, condimentum et efficitur eget, placerat id est. Proin blandit ante
        est.
      </div>
    </Slide>
  );
};

export default AboutSlide;
