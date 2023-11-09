import axios from "axios";
import { useState, useEffect } from "react";
import * as React from "react";
import he from "he";
import QuizCard from "../components/QuizCard";
import "../scss/root.scss";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Responses from "../components/buttons/Question";

const initialQuestionData = {
  question: "",
  correct_answer: "",
  incorrect_answers: [],
};
let userScore;
export default function Quiz() {
  const [newQuestion, setNewQuestion] = useState(initialQuestionData);
  const [points, setPoints] = useState(0);
  const [life, setLife] = useState(3);
  const [multiply, setMultiply] = useState(1);
  let currentLife = life;

  if (localStorage.getItem("userScore") === !undefined) {
    userScore = localStorage.getItem("userScore");
  } else {
    userScore = [];
  }

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

  /* REPONSES CORRECT ET INCORRECT */
  let responses = newQuestion.incorrect_answers.concat(
    newQuestion.correct_answer
  );

  /* TIMER LOGIC */

  const [seconds, setSeconds] = useState(30);
  const [paused, setPaused] = useState(true);

  const currentCount = seconds < 10 ? `00:0${seconds}` : `00: ${seconds}`;

  /* QUESTION LAUNCH */
  function getStarted() {
    setSeconds(30);
    getQuestion();
    setPaused(false);

    /* ANSWERS SHUFFLE */
    function shuffleArray(responsesRandom) {
      return responsesRandom.sort(() => Math.random() - 0.5);
    }
    responses = shuffleArray(responses);
  }
  /* ANSWERS SYSTEM */
  function sendUserResponse(response) {
    const difficulty = "hard";
    if (response === newQuestion.correct_answer && seconds > 0 && life > 0) {
      /* SCORE LOGIC 4 ANSWERS */
      if (responses.length === 4) {
        console.warn("Correct answer!");
        setPoints(points + 100);
        setMultiply(multiply + 1);
        if (multiply >= 4 && difficulty === "hard") {
          setPoints(300 + points);
        }
        if (multiply >= 4 && difficulty === "medium") {
          setPoints(200 + points);
        }
      }
      /* SCORE LOGIC 2 ANWERS */
      if (responses.length === 2) {
        console.warn("Correct answer!");
        setPoints(points + 50);
        setMultiply(multiply + 1);
        if (multiply >= 4 && difficulty === "hard") {
          setPoints(points * 3 + 50);
        }
        if (multiply >= 4 && difficulty === "medium") {
          setPoints(points * 2 + 50);
        }
      }
      console.warn(multiply);
      console.warn(`vie: ${currentLife}`);
      getStarted();
    } else {
      setLife(life - 1);
      currentLife = life - 1;
      setMultiply(0);
      console.warn(`vie: ${currentLife}`);
      if (currentLife === 0) {
        console.warn("Game over!");
        setPoints({ points });
        userScore.push({
          points: { points },
          difficulty: "data.difficulty",
          category: "data.category",
          date: Date.now(),
        });
        localStorage.setItem("userScore", JSON.stringify(userScore));
        setPoints(0);
        setLife(3);
      } else {
        console.warn("Try again!");
        console.warn("Wrong answer!");
        getStarted();
      }
    }
  }

  /* TIMER EFFECT */
  useEffect(() => {
    let interval;

    if (!paused && seconds > 0 && life > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      sendUserResponse();
      setSeconds(30);
    }
    return () => {
      clearInterval(interval);
    };
  }, [paused, seconds]);

  return (
    <>
      <Navbar />
      <main className="main-master">
        <QuizCard
          questionValue={newQuestion.question}
          lifeValue={currentLife}
          scoreValue={points}
          category={newQuestion.category}
          level=""
          timeValue={currentCount}
        />
        <button type="button" onClick={getStarted}>
          Get Question
        </button>
        {responses.map((response, index) => (
          <Responses
            key={index.id}
            responseValue={response}
            styles={index}
            type="button"
            onClick={() => sendUserResponse(response)}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
