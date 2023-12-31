import { useOutletContext, useNavigate } from "react-router-dom";
import React from "react";
import Category from "../components/buttons/Category";
import category from "../data/category.json";
import bgvideo from "../assets/mp4/home-background.mp4";
import "../scss/categorypage.scss";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function CategoryPage() {
  const navigate = useNavigate();
  const [url, setUrl] = useOutletContext();

  function handleClick(id) {
    setUrl(`https://opentdb.com/api.php?amount=1&category=${id}`);
    navigate("/quiz");
    console.warn(url);
  }

  return (
    <>
      <Navbar />
      <main className="Main">
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
          <h1>Choisis ton thème</h1>
          <div className="CategoryCard">
            {category.map((catego) => (
              <div key={catego.name} className="Display">
                <div
                  style={{ backgroundImage: `url(${catego.logo})` }}
                  className="Icon"
                />
                {catego.name}
                <Category
                  name="Jouer"
                  id={catego.id}
                  handleClick={() => handleClick(catego.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CategoryPage;
