import React from "react";
import "../../scss/components/buttons.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Difficulty({ name, styles, linkUrl }) {
  Difficulty.propTypes = {
    name: PropTypes.string.isRequired,
    styles: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
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
    <Link to={linkUrl} className={buttonClassName}>
      {name}
    </Link>
  );
}

export default Difficulty;
