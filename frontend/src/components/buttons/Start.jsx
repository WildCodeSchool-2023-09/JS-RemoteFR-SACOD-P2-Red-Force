import React from "react";
import "../../scss/components/start.scss";
import PropTypes from "prop-types";

function Start({ name }) {
  Start.propTypes = {
    name: PropTypes.string.isRequired,
  };
  return (
    <button type="button" className="Start">
      {name}
    </button>
  );
}

export default Start;
