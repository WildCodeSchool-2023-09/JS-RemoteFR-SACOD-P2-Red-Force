import PropTypes from "prop-types";
import "../scss/quizcard.scss";
import Life from "./Life";

export default function QuizCard({
  questionValue,
  scoreValue,
  lifeValue,
  timeValue,
}) {
  QuizCard.propTypes = {
    questionValue: PropTypes.string.isRequired,
    scoreValue: PropTypes.number.isRequired,
    lifeValue: PropTypes.number.isRequired,
    timeValue: PropTypes.string.isRequired,
  };

  return (
    <div className="quizcard-container">
      <div className="card-icon" />
      <div className="card-content">
        <p className="question">{questionValue}</p>
        <div className="levelInfos">
          <Life lifeValue={lifeValue} />
          <p className="separator" />
          <p className="score">{scoreValue} pts</p>
        </div>
      </div>
      <p className="timer">{timeValue}</p>
    </div>
  );
}
