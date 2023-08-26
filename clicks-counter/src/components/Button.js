import React from "react";
import "../styles/Boton.css";

function Button({ text, clickButton, clickHandler }) {
  return (
    <button
      className={clickButton ? "click-button" : "restart-button"}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}

export default Button;
