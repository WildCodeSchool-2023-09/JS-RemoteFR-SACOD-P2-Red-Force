import { useOutletContext, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import * as React from "react";
import he from "he";
import QuizCard from "../components/QuizCard";
import "../scss/root.scss";
import DifficultyCard from "../components/DifficultyCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "../components/buttons/Buttons";
import ResponseBtn from "../components/buttons/ResponseBtn";
import bgvideo from "../assets/mp4/home-background.mp4";

const initialQuestionData = {
  question: "",
  correct_answer: "",
  incorrect_answers: [],
};

const userScore = JSON.parse(localStorage.getItem("userScore")) || [];

export default function Quiz() {
  const [url] = useOutletContext();
  const [newQuestion, setNewQuestion] = useState(initialQuestionData);
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const [points, setPoints] = useState(0);
  const [life, setLife] = useState(3);
  const [multiply, setMultiply] = useState(1);
  const [stateCard, setStateCard] = useState("difficulty");
  const [responses, setResponses] = useState([]);
  const navigate = useNavigate();

  /* TIMER LOGIC */

  const [seconds, setSeconds] = useState(30);
  const [paused, setPaused] = useState(true);
  const currentCount = seconds < 10 ? `00:0${seconds}` : `00: ${seconds}`;
  let currentLife = life;

  const decodeString = (str) => {
    return he.decode(str);
  };

  const translateFR = async (value) => {
    const API_KEY = import.meta.env.VITE_TRANSLATION_KEY_GOOGLEAPI;
    let urlTranslate = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    urlTranslate += `&q=${encodeURI(value)}`;
    urlTranslate += `&source=en`;
    urlTranslate += `&target=fr`;
    try {
      const response = await fetch(urlTranslate, {
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
      const response = await axios.get(
        `${url}&difficulty=${selectedDifficulty}`
      );
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

  function shuffleArray(responsesRandom) {
    return responsesRandom.sort(() => Math.random() - 0.5);
  }

  function getStarted() {
    setSeconds(30);
    getQuestion();
    setPaused(false);
  }

  useEffect(() => {
    if (newQuestion.incorrect_answers && newQuestion.correct_answer) {
      const shuffledResponses = shuffleArray([
        ...newQuestion.incorrect_answers,
        newQuestion.correct_answer,
      ]);
      setResponses(shuffledResponses);
    }
  }, [newQuestion]);

  /* ANSWERS SYSTEM */
  function sendUserResponse(response) {
    if (response === newQuestion.correct_answer && seconds > 0 && life > 0) {
      /* SCORE LOGIC 4 ANSWERS */
      if (responses.length === 4) {
        setPoints(points + 100);
        setMultiply(multiply + 1);
        if (multiply >= 4 && selectedDifficulty === "hard") {
          setPoints(300 + points);
        }
        if (multiply >= 4 && selectedDifficulty === "medium") {
          setPoints(200 + points);
        }
      }
      /* SCORE LOGIC 2 ANWERS */
      if (responses.length === 2) {
        setPoints(points + 50);
        setMultiply(multiply + 1);
        if (multiply >= 4 && selectedDifficulty === "hard") {
          setPoints(150 + points);
        }
        if (multiply >= 4 && selectedDifficulty === "medium") {
          setPoints(100 + points);
        }
      }
      getStarted();
    } else {
      setLife(life - 1);
      currentLife = life - 1;
      setMultiply(0);
      if (currentLife === 0) {
        setPoints({ points });
        setStateCard("error");
        let categoryofgame;
        if (url.includes("category=0")) {
          categoryofgame = "Random";
        } else {
          categoryofgame = newQuestion.category;
        }
        userScore.push({
          score: points,
          difficulty: newQuestion.difficulty,
          category: categoryofgame,
          date: Date.now(),
        });
        localStorage.setItem("userScore", JSON.stringify(userScore));
      } else {
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
      <main>
        <div className="home-main">
          <video
            className="background-video"
            autoPlay
            loop
            controls={false}
            playsInline
            muted
          >
            <source src={bgvideo} type="video/mp4" />
          </video>
          {stateCard === "difficulty" && (
            <DifficultyCard
              selectedDifficulty={selectedDifficulty}
              setSelectedDifficulty={setSelectedDifficulty}
              setStateCard={setStateCard}
              getStarted={() => getStarted()}
              setLife={setLife}
            />
          )}
          {stateCard === "quiz" && (
            <div>
              <QuizCard
                questionValue={newQuestion.question}
                lifeValue={currentLife}
                scoreValue={points}
                category={newQuestion.category}
                level=""
                timeValue={currentCount}
                multiplyValue={multiply}
                selectedDifficulty={selectedDifficulty}
              />

              <div className="buttons-container">
                {responses[0] !== ""
                  ? responses.map((response, index) => (
                      <ResponseBtn
                        key={response}
                        responseValue={response}
                        styles={index}
                        type="button"
                        onClick={() => sendUserResponse(response)}
                      />
                    ))
                  : null}
              </div>
            </div>
          )}
          {stateCard === "error" && (
            <div className="gameover">
              <h1>Partie Terminée</h1>
              <Button
                styles="0"
                linkUrl={() => navigate("/scoreboard")}
                name="Voir le Scoreboard"
              />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
