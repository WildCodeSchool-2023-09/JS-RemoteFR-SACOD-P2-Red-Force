import PropTypes from "prop-types";
import "../scss/components/scorecard.scss";

export default function ScoreCard({ score, difficulty, category, date }) {
  ScoreCard.propTypes = {
    score: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  };

  const timestamp = parseInt(date, 10);
  const newdate = new Date(timestamp);

  function formatHour(hourdate) {
    const hours = hourdate.getHours().toString().padStart(2, "0");
    const minutes = hourdate.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  const formattedDate = `${newdate.getDate()}/${
    newdate.getMonth() + 1
  }/${newdate.getFullYear()} | ${formatHour(newdate)}`;

  return (
    <div>
      <div className="scoreCard">
        <p className="category">{category}</p>
        <div className="section">
          <div className="diffanddate">
            <p className="difficulty">{difficulty}</p>
            <p className="date">{formattedDate}</p>
          </div>
          <p className="score">{score} points</p>
        </div>
      </div>
    </div>
  );
}
