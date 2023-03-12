import React, { useEffect, useRef, useState } from "react";
import Slide from "../Slide/Slide";
import "./applySlide.scss";

const ApplySlide = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <Slide className="at-apply-slide" id="apply">
      <div className="main-title">Prijavi se!</div>
      <iframe
        title="Algotrade application form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfz4tAsc0OD4ipNUACKUM8TMNBfwSn4ZYCRx8ed15MTgYqqTA/viewform?embedded=true"
        width={windowSize[0] > 900 ? windowSize[0] - 640 : windowSize[0] - 64}
        height="600"
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
