import { useState, useEffect } from "react";
import hometitles from "../data/homepage-titles.json";
import bgvideo from "../assets/mp4/home-background.mp4";
import "../scss/home.scss";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hometitles.length);
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
            <p className="title a1">{hometitles[currentIndex].t1}</p>
            <p className="title a2">{hometitles[currentIndex].t2}</p>
            <p className="title a3">{hometitles[currentIndex].t3}</p>
            <p className="title a4">{hometitles[currentIndex].t4}</p>
            <p className="title a5">{hometitles[currentIndex].t5}</p>
            <p className="title a6">{hometitles[currentIndex].t6}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
