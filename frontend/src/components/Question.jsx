import React from "react";
import "../scss/question.scss";

function Question() {
  return (
    <div className="Question">
      <div className="DisplayQuestion"> Question </div>
      <div className="Reponse">
        <div className="A" type="button">
          <div className="colorA">A</div>
          <div className="ReponseA"> {"  "} </div>
        </div>
        <div className="B" type="button">
          <div className="colorB">B</div>
          <div className="ReponseB"> {"  "} </div>
        </div>
        <div className="C" type="button">
          <div className="colorC">C</div>
          <div className="ReponseC"> {"  "} </div>
        </div>
        <div className="D" type="button">
          <div className="colorD">D</div>
          <div className="ReponseD"> {"  "} </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
