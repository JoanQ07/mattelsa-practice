import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ButtonIcon = ({ children, properties, action = null }) => {
  const props = {
    sizeIcon: "" || "lg",
    stylesText: "",
    stylesImg: "",
    action: action,
    reverse: "",
    styles: "",
    text: "",
    icon: "",
    img: "",
    gap: "",
    ...properties,
  };

  const justify_reverse = props.reverse ? "flex-row-reverse" : "";
  return (
    <button
      className={`flex justify-evenly items-center gap-${props.gap} ${justify_reverse} ${props.styles}`}
      onClick={props.action}
    >
      {props.text && <span className={`${props.stylesText} font-sans`}> {props.text} </span>}
      {props.img && <img className={`${props.stylesImg}`} src={props.img} />}
      {props.icon && <FontAwesomeIcon icon={props.icon} size={props.sizeIcon} />}
      {children}
    </button>
  );
};
