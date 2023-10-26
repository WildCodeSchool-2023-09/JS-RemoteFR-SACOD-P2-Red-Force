import React from "react";
import "../scss/dificulty.scss";
import PropTypes from "prop-types";

function Dificulty({ name, styles }) {
  Dificulty.propTypes = {
    name: PropTypes.string.isRequired,
    styles: PropTypes.string.isRequired,
  };
  let buttonClassName;
  switch (styles) {
    case "1":
      buttonClassName = "ButtonsF";
      break;
    case "2":
      buttonClassName = "ButtonsM";
      break;
    case "3":
      buttonClassName = "ButtonsM";
      break;
    default:
      buttonClassName = "Buttons";
  }
  return (
    <button type="button" className={buttonClassName}>
      {name}
    </button>
  );
}

export default Dificulty;
