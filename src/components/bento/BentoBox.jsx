import React from "react";

const BentoBox = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>;
};

export default BentoBox;
