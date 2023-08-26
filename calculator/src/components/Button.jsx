import React from "react";
import "../styles/Button.css";

function Button(props) {
  const isOperator = (val) => {
    // Revisa si el valor es un operador
    return isNaN(val) && val !== "." && val !== "=";
  };

  return (
    <button
      className={`button-container ${
        isOperator(props.children) ? "operator" : ""
      }`.trimEnd()}
      onClick={() => props.clickHandler(props.children)}
    >
      {props.children}
    </button>
  );
}

export default Button;
