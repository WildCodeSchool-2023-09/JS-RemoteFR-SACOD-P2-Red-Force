import { useState, useEffect } from "react";
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
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div className="homemain">
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
        <div className="container">
          <div className="titleContainer">
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
      </div>
    </main>
  );
}
