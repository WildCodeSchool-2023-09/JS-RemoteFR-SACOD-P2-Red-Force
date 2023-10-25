import React from "react";
import Start from "./Start";

function Dificulty() {
  return (
    <div className="Dificulty">
      <h1> Choix de la difficulté </h1>
      <button type="button"> Facile </button>
      <button type="button"> Moyen </button>
      <button type="button"> Difficile </button>
      <Start />
    </div>
  );
}

export default Dificulty;
