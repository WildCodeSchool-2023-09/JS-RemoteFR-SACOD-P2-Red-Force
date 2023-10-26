import React from "react";
import "../scss/question.scss";
import PropTypes from "prop-types";

function Question({ name, reponse }) {
  Question.propTypes = {
    name: PropTypes.string.isRequired,
    reponse: PropTypes.string.isRequired,
  };
  return (
    <div className="Reponse">
      <div className="A" type="button">
        <div className="colorA"> {name}</div>
        <div className="ReponseA"> {reponse} </div>
      </div>
    </div>
  );
}

export default Question;
