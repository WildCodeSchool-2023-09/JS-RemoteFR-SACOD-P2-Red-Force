import PropTypes from "prop-types";
import * as React from "react";
import "../scss/difficultycard.scss";
import Button from "./buttons/Buttons";

export default function DifficultyCard({
  setSelectedDifficulty,
  selectedDifficulty,
  setStateCard,
  getStarted,
}) {
  DifficultyCard.propTypes = {
    setSelectedDifficulty: PropTypes.func.isRequired,
    selectedDifficulty: PropTypes.string.isRequired,
    setStateCard: PropTypes.func.isRequired,
    getStarted: PropTypes.func.isRequired,
  };

  function DifficultyChoice(choice) {
    setSelectedDifficulty(choice);
  }

  function goStart() {
    setStateCard("quiz");
    getStarted();
  }
  console.warn(selectedDifficulty);
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
