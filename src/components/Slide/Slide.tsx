import React from "react";
import "./slide.scss";

const Slide = ({ children }: { children: React.ReactNode }) => {
  return <div className="at-slide">{children}</div>;
};

export default Slide;
