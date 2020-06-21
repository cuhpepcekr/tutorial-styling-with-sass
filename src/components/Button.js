import React from "react";
import "./Button.scss";

// size : large, medium, small
function Button({ children, size }) {
  return <button className={["Button", size].join(" ")}>{children}</button>;
}

export default Button;
