import React from "react";
import Slide from "../Slide/Slide";
import "./partnersSlide.scss";

import { partnersData } from "./partners-data";

const PartnersSlide = () => {
  return (
    <Slide>
      <div className="at-partners-slide" id="at-partners-slide">
        <div>Sponzori</div>
        <div>
          {partnersData.map((partner) => (
            <div>
              <a href={partner.website} target="_blank" rel="noreferrer">
                <img alt={`${partner.name} logo`} src={partner.imgSrc} />
                <div>{partner.name}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default PartnersSlide;
