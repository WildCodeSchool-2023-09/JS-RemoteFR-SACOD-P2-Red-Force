import React from "react";
import "../../scss/components/question.scss";
import PropTypes from "prop-types";

function Question({ responseValue, styles, onClick }) {
  Question.propTypes = {
    responseValue: PropTypes.string.isRequired,
    styles: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  let Value;
  switch (styles) {
    case 0:
      Value = "A";
      break;
    case 1:
      Value = "B";
      break;
    case 2:
      Value = "C";
      break;
    case 3:
      Value = "D";
      break;
    case 10:
      Value = "V";
      break;
    default:
      Value = "X";
  }

  return (
    <button className="buttonResponses" type="button" onClick={onClick}>
      <span className={`quest ${Value}`} type="button">
        <p className={`letterbox ${Value}`}>{Value}</p>
        <p className="response"> {responseValue}</p>
      </span>
    </button>
  );
}
export default Question;
