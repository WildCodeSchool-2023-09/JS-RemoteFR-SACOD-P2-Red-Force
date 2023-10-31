import axios from "axios";
import { useState } from "react";
import "../scss/root.scss";
import Question from "../components/buttons/Question";

const initialQuestionData = {
  question: "",
  correct_answer: "",
  incorrect_answers: [],
};
function Quiz() {
  const [answersValue, setAnswersValue] = useState(initialQuestionData);

  const getQuestion = () => {
    axios.get("https://opentdb.com/api.php?amount=1").then((response) => {
      setAnswersValue(response.data.results[0]);
    });
  };
  const responses = answersValue.incorrect_answers.concat([
    answersValue.correct_answer,
  ]);


  return (
    <div>
      <h2>{answersValue.question}</h2>
      {responses.map((index, i) => {
        return <Question key={index} responseValue={index} styles={i} />;
      })}
      <button type="button" onClick={getQuestion}>
        get Question
      </button>
    </div>
  );
}

export default Quiz;
