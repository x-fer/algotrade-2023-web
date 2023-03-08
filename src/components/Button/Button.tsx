import React from "react";
import "./button.scss";

const Button = ({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: (e: any) => void;
  children: React.ReactNode;
}) => {
  return (
    <button onClick={onClick} className={`at-button ${className || ""}`}>
      {children}
    </button>
  );
};

export default Button;
