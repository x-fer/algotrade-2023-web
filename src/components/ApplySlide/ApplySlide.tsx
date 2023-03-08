import React from "react";
import Slide from "../Slide/Slide";
import "./applySlide.scss";

const ApplySlide = () => {
  return (
    <Slide className="at-apply-slide">
      <div className="main-title">Prijavi se!</div>
      <iframe
        title="Algotrade application form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfz4tAsc0OD4ipNUACKUM8TMNBfwSn4ZYCRx8ed15MTgYqqTA/viewform?embedded=true"
        width="640"
        height="422"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      >
        Učitavanje…
      </iframe>
    </Slide>
  );
};

export default ApplySlide;
