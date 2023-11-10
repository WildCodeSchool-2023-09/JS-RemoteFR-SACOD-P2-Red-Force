import React from "react";
import "../../scss/components/buttons.scss";
import PropTypes from "prop-types";

function Buttons({ name, styles, linkUrl }) {
  Buttons.propTypes = {
    name: PropTypes.string.isRequired,
    styles: PropTypes.string.isRequired,
    linkUrl: PropTypes.func.isRequired,
  };
  let buttonClassName;
  switch (styles) {
    case "1":
      buttonClassName = "button easy";
      break;
    case "2":
      buttonClassName = "button medium";
      break;
    case "3":
      buttonClassName = "button hard";
      break;
    default:
      buttonClassName = "button default";
  }
  return (
    <button type="button" onClick={linkUrl} className={buttonClassName}>
      {name}
    </button>
  );
}

export default Buttons;
