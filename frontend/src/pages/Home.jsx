import { useState, useEffect } from "react";

import hometitles from "../data/homepage-titles.json";

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
      <p>{hometitles[currentIndex].t1}</p>
      <p>{hometitles[currentIndex].t2}</p>
      <p>{hometitles[currentIndex].t3}</p>
      <p>{hometitles[currentIndex].t4}</p>
      <p>{hometitles[currentIndex].t5}</p>
      <p>{hometitles[currentIndex].t6}</p>
      <p>{hometitles[currentIndex].t7}</p>
    </main>
  );
}
