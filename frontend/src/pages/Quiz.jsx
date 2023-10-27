import axios from "axios";
import { useState } from "react";
import "../scss/root.scss";

function Quiz() {
  const [question, setQuestion] = useState("");

  const getQuestion = () => {
    axios.get("https://opentdb.com/api.php?amount=1").then((response) => {
      console.warn(response.data.results[0].incorrect_answers);
      console.warn(question);
      setQuestion(response.data);
    });
  };

  return (
    <div>
      <button type="button" onClick={getQuestion}>
        get Question
      </button>
    </div>
  );
}

export default Quiz;
