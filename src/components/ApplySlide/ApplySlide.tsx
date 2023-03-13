import React from "react";
import Slide from "../Slide/Slide";
import "./applySlide.scss";

const ApplySlide = () => {
  return (
    <Slide className="at-apply-slide" id="apply">
      <div className="are-you-ready">Jeste li spremni za izazov?</div>
      <a
        href="https://forms.gle/owMEMstj5rdhrTmv8"
        target="_blank"
        rel="noreferrer"
        className="apply-button"
      >
        Prijavite se!
      </a>
    </Slide>
  );
};

export default ApplySlide;
