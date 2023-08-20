import React from "react";
import "../stylesheets/Testimony.css";

function Testimony(props) {
  return (
    <div className="container-testimony">
      <img
        className="image-testimony"
        src={require(`../img/${props.shortName}.png`)}
        alt={`img-${props.shortName}`}
      />
      <div className="container-text-testimony">
        <p className="name-testimony">
          <strong>{props.name}</strong> en {props.country}
        </p>
        <p className="charge-testimony">
          <strong>{props.charge}</strong> en <strong>{props.company}</strong>
        </p>
        <p className="text-testimony">"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony;
