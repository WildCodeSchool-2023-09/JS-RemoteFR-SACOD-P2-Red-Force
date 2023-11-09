import axios from "axios";
import { useState } from "react";
import he from "he";
import QuizCard from "../components/QuizCard";
import "../scss/root.scss";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const initialQuestionData = {
  question: "",
  correct_answer: "",
  incorrect_answers: [],
};

export default function Quiz() {
  const [newQuestion, setNewQuestion] = useState(initialQuestionData);
  const [points, setPoints] = useState(0);
  const [life, setLife] = useState(3);

  const decodeString = (str) => {
    return he.decode(str);
  };

  const translateFR = async (value) => {
    const API_KEY = import.meta.env.VITE_TRANSLATION_KEY_GOOGLEAPI;
    let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    url += `&q=${encodeURI(value)}`;
    url += `&source=en`;
    url += `&target=fr`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        const { translatedText } = data.data.translations[0];
        return translatedText;
      }
      console.error("Translation request failed");
      return value;
    } catch (error) {
      console.error("There was an error with the translation request: ", error);
      return value;
    }
  };

  const getQuestion = async () => {
    try {
      const response = await axios.get("https://opentdb.com/api.php?amount=1");
      const data = response.data.results[0];

      data.question = decodeString(data.question);
      data.question = await translateFR(data.question);
      data.question = decodeString(data.question);
      data.correct_answer = decodeString(data.correct_answer);
      data.correct_answer = await translateFR(data.correct_answer);
      data.correct_answer = decodeString(data.correct_answer);

      const badAnswers = await Promise.all(
        data.incorrect_answers.map(async (answer) => {
          const decodedAnswer = decodeString(answer);
          const translatedAnswer = await translateFR(decodedAnswer);
          const decodedTranslatedAnswer = decodeString(translatedAnswer);
          return decodedTranslatedAnswer;
        })
      );

      data.incorrect_answers = badAnswers;

      setNewQuestion(data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  let responses = newQuestion.incorrect_answers.concat(
    newQuestion.correct_answer
  );

  function shuffleArray(responsesRandom) {
    return responsesRandom.sort(() => Math.random() - 0.5);
  }
  responses = shuffleArray(responses);

  function sendUserResponse(response) {
    if (response === newQuestion.correct_answer) {
      console.warn("Correct answer!");
      setPoints(points + 1);
      getQuestion();
    } else {
      console.warn("Wrong answer!");
      setLife(life - 1);
      if (life === 0) {
        console.warn("Game over!");
        getQuestion();
        setPoints(0);
        setLife(3);
      } else {
        console.warn("Try again!");
        getQuestion();
      }
    }
  }
  return (
    <>
      <Navbar />
      <main className="main-master">
        <QuizCard
          questionValue={newQuestion.question}
          lifeValue={life}
          scoreValue={points}
          category={newQuestion.category}
          level=""
          timeValue="1:14"
        />
        <button type="button" onClick={getQuestion}>
          Get Question
        </button>
        {responses.map((response) => (
          <button
            key={response}
            type="button"
            onClick={() => sendUserResponse(response)}
          >
            {response}
          </button>
        ))}
      </main>
      <Footer />
    </>
  );
}
