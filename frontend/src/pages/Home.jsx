import { useOutletContext, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import homePhrases from "../data/homepage-titles.json";
import bgvideo from "../assets/mp4/home-background.mp4";
import "../scss/home.scss";
import Button from "../components/buttons/Buttons";

export default function Home() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [url, setUrl] = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase(
        (prevhomePhrases) => (prevhomePhrases + 1) % homePhrases.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  function handleClick() {
    setUrl(`https://opentdb.com/api.php?amount=1&category=0`);
    navigate("/quiz");
  }
  console.warn(url);
  return (
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
        <div className="allcontainer">
          <div className="title-container">
            <div className="content">
              {homePhrases[currentPhrase].split(" ").map((word, index) => (
                <p
                  className="title"
                  key={`${currentPhrase}-${word}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word}
                </p>
              ))}
            </div>
          </div>
          <div className="play-container">
            <Button
              name="Lancer une partie rapide"
              linkUrl={() => handleClick()}
              styles="0"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
