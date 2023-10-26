import React from "react";
import "../../scss/components/question.scss";
import PropTypes from "prop-types";

function Question({ responseValue, styles, onClick }) {
  Question.propTypes = {
    responseValue: PropTypes.string.isRequired,
    styles: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  let Value;
  switch (styles) {
    case "A":
      Value = "A";

      break;
    case "B":
      Value = "B";

      break;
    case "C":
      Value = "C";

      break;
    case "D":
      Value = "D";
      break;
    case "V":
      Value = "V";
      break;
    default:
      Value = "X";
  }
  return (
    <button type="button" onClick={onClick}>
      <span className={`quest ${Value}`} type="button">
        <p className={`letterbox ${Value}`}>{Value}</p>
        <p className="response">{responseValue}</p>
      </span>
    </button>
  );
}

export default Question;

/* <Difficulty responseValue="" onClick="/#" styles="A" /> */
