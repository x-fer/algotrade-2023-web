import React from "react";
import Slide from "../Slide/Slide";
import "./footer.scss";

const Footer = () => {
  return (
    <Slide className="at-footer">
      <div>
        <a href="https://xfer.hr" target="_blank" rel="noreferrer">
          X.FER
        </a>
        ,{" "}
        <a href="https://finance.hr" target="_blank" rel="noreferrer">
          Financijski klub
        </a>{" "}
        | 2023
      </div>
      <div>
        <a href="/" target="_blank" rel="noreferrer">
          Terms of service
        </a>
        {" | "}
        <a href="/" target="_blank" rel="noreferrer">
          Privacy policy
        </a>
      </div>
      <div>Social media links go here</div>
    </Slide>
  );
};

export default Footer;
