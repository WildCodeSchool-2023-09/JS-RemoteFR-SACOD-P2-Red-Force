import { useState } from "react";

function ResponseMap(userResponses, correctAnswers) {
   // const calculateScore = () => {
    const score = userResponses.map((userResponse, index) => {
      return userResponse === correctAnswers[index] ? 1 : 0;
    });
    return score.reduce((acc, current) => acc + current, 0);
  };
  const score = calculateScore();

  return (
    <div>
      <p>
        score: {score}/{correctAnswers.length}
      </p>
      <ul>
        {userResponses.map((response, index) => (
          //<li key={index}>
            Question {index + 1} :
            <br />
            Réponse de l'utilisateur : {response}
            <br />
            Réponse correcte : {correctAnswers[index]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResponseMap;
