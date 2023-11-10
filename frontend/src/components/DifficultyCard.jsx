import PropTypes from "prop-types";
import * as React from "react";
import "../scss/difficultycard.scss";
import Button from "./buttons/Buttons";

export default function DifficultyCard({
  setSelectedDifficulty,
  selectedDifficulty,
  getStarted,
  setStateCard,
  setLife,
}) {
  DifficultyCard.propTypes = {
    setSelectedDifficulty: PropTypes.func.isRequired,
    selectedDifficulty: PropTypes.string.isRequired,
    setStateCard: PropTypes.func.isRequired,
    getStarted: PropTypes.func.isRequired,
    setLife: PropTypes.func.isRequired,
  };

  function DifficultyChoice(choice) {
    setSelectedDifficulty(choice);
  }

  function goStart() {
    setStateCard("quiz");

    if (selectedDifficulty === "hard") {
      setLife(2);
    } else if (selectedDifficulty === "medium") {
      setLife(4);
    } else if (selectedDifficulty === "easy") {
      setLife(6);
    } else {
      setLife(6);
    }
    getStarted();
  }
  return (
    <div className="difficultycard-container">
      <div className="card-content">
        <p className="title">Choisissez votre difficulté</p>
        <div className="choices">
          <Button
            styles="1"
            className="timer"
            linkUrl={() => DifficultyChoice("easy")}
            name="Facile"
          />
          <Button
            styles="2"
            className="timer"
            linkUrl={() => DifficultyChoice("medium")}
            name="Moyen"
          />
          <Button
            styles="3"
            className="timer"
            linkUrl={() => DifficultyChoice("hard")}
            name="Difficile"
          />
        </div>
      </div>
      <div className="starter">
        <Button styles="0" linkUrl={() => goStart()} name="Lancer la partie" />
      </div>
    </div>
  );
}
