import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import homePhrases from "../data/homepage-titles.json";
import bgvideo from "../assets/mp4/home-background.mp4";
import "../scss/home.scss";

export default function Home() {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase(
        (prevhomePhrases) => (prevhomePhrases + 1) % homePhrases.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

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
            <Link to="/game">
              <button
                className="play-button"
                title="Launch a random game"
                type="button"
              >
                Play a random game
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
