import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScoreCard from "../components/ScoreCard";
import bgvideo from "../assets/mp4/home-background.mp4";
import "../scss/scoreboard.scss";

export default function ScoreBoard() {
  let userScore;

  if (localStorage.getItem("userScore") === null) {
    userScore = [
      {
        score: 11200,
        difficulty: "easy",
        category: "Entertainment: Musicals & Theatres",
        date: "02-10-2023 | 04:45",
      },
      {
        score: 11200,
        difficulty: "hard",
        category: "Random Game",
        date: "02-10-2023 | 05:00",
      },
      {
        score: 11200,
        difficulty: "easy",
        category: "Entertainment: Musicals & Theatres",
        date: "02-10-2023 | 05:10",
      },
      {
        score: 11200,
        difficulty: "medium",
        category: "Entertainment: Sports",
        date: "04-10-2023 | 17:34",
      },
    ];
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
              userScore.map((score) => (
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
