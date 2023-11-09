import PropTypes from "prop-types";
import "../scss/components/scorecard.scss";

export default function ScoreCard({ score, difficulty, category, date }) {
  ScoreCard.propTypes = {
    score: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  };

  return (
    <div>
      <div className="scoreCard">
        <p className="category">{category}</p>
        <div className="section">
          <div className="diffanddate">
            <p className="difficulty">{difficulty}</p>
            <p className="date">{date}</p>
          </div>
          <p className="score">{score} points</p>
        </div>
      </div>
    </div>
  );
}
