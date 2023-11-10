import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScoreCard from "../components/ScoreCard";
import bgvideo from "../assets/mp4/home-background.mp4";
import "../scss/scoreboard.scss";

export default function ScoreBoard() {
  let userScore;

  if (localStorage.getItem("userScore") === null) {
    userScore = [];
    localStorage.setItem("userScore", JSON.stringify(userScore));
  } else {
    userScore = JSON.parse(localStorage.getItem("userScore"));
  }

  return (
    <>
      <Navbar />
      <main className="main-master">
        <div className="home-main">
          <video
            className="background-video"
            autoPlay="true"
            loop="true"
            controls={false}
            playsInline="true"
            muted="true"
          >
            <source src={bgvideo} type="video/mp4" />
          </video>

          <div className="container">
            <div className="head">
              <h1 className="title">Scoreboard</h1>
              <p className="description">
                Retrouvez ici le resultat de toutes vos parties jouées. Ses
                valeurs sont unique à votre session sur ce navigateur et sont
                enregistrées uniquement chez vous.
              </p>
              <hr className="separator" />
            </div>
            {userScore[0] !== undefined ? (
              userScore
                .reverse()
                .map((score) => (
                  <ScoreCard
                    key={score.date}
                    score={score.score}
                    difficulty={score.difficulty}
                    category={score.category}
                    date={score.date}
                  />
                ))
            ) : (
              <p className="noResults">Il n'y pas de score enregistrés</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
