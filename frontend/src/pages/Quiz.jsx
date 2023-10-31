import axios from "axios";
import { useState } from "react";
import QuizCard from "../components/QuizCard";
import "../scss/root.scss";

const initialQuestionData = {
  question: "",
  correct_answer: "",
  incorrect_answers: [],
};

export default function Quiz() {
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
      <QuizCard
        questionValue="Comment ça va ?"
        lifeValue="4"
        scoreValue="25 874"
        category="Vehicles"
        level=""
        timeValue="1:14"
      />
      <button type="button" onClick={getQuestion}>
        Get Question
      </button>
      <p>{responses}</p>
    </div>
  );
}
