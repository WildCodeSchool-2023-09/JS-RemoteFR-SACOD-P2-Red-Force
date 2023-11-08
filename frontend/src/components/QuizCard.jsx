import PropTypes from "prop-types";
import * as React from "react";
import "../scss/quizcard.scss";
import Life from "./Life";

export default function QuizCard({
  questionValue,
  scoreValue,
  lifeValue,
  category,
  timeValue,
}) {
  QuizCard.propTypes = {
    questionValue: PropTypes.string.isRequired,
    scoreValue: PropTypes.number.isRequired,
    lifeValue: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    timeValue: PropTypes.string.isRequired,
  };

  let backgroundImage;
  switch (category) {
    case "Any Category":
      backgroundImage = "url(./assets/icons/dice.svg)";
      break;

    case "General Knowledge":
      backgroundImage = "url(./assets/icons/general-knowledge.svg)";
      break;

    case "Entertainment: Books":
      backgroundImage = "url(./assets/icons/book.svg)";
      break;

    case "Entertainment: Film":
      backgroundImage = "url(./assets/icons/film.svg)";
      break;

    case "Entertainment: Music":
      backgroundImage = "url(./assets/icons/music.svg)";
      break;

    case "Entertainment: Musicals & Theatres":
      backgroundImage = "url(./assets/icons/theatre.svg)";
      break;

    case "Entertainment: Television":
      backgroundImage = "url(./assets/icons/tv.svg)";
      break;

    case "Entertainment: Video Games":
      backgroundImage = "url(./assets/icons/videogames.svg)";
      break;

    case "Entertainment: Board Games":
      backgroundImage = "url(./assets/icons/boardgames.svg)";
      break;

    case "Science & Nature":
      backgroundImage = "url(./assets/icons/natural.svg)";
      break;

    case "Science: Computers":
      backgroundImage = "url(./assets/icons/computer-science.svg)";
      break;

    case "Science: Mathematics":
      backgroundImage = "url(./assets/icons/maths.svg)";
      break;

    case "Mythology":
      backgroundImage = "url(./assets/icons/mythology.svg)";
      break;

    case "Sports":
      backgroundImage = "url(./assets/icons/sports.svg)";
      break;

    case "Geography":
      backgroundImage = "url(./assets/icons/geography.svg)";
      break;

    case "History":
      backgroundImage = "url(./assets/icons/history.svg)";
      break;

    case "Politics":
      backgroundImage = "url(./assets/icons/politics.svg)";
      break;

    case "Art":
      backgroundImage = "url(./assets/icons/art.svg)";
      break;

    case "Celebrities":
      backgroundImage = "url(./assets/icons/celebrities.svg)";
      break;

    case "Animals":
      backgroundImage = "url(./assets/icons/animals.svg)";
      break;

    case "Vehicles":
      backgroundImage = "url(./assets/icons/vehicles.svg)";
      break;

    default:
      backgroundImage = "none";
      break;
  }

  return (
    <div className="quizcard-container">
      <div
        style={{ backgroundImage: `${backgroundImage}` }}
        className="card-icon"
      />
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
