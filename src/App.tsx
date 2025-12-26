import React from "react";
import usFlag from "./assets/images/usa-20flag_png.png";
import ruFlag from "./assets/images/rus-20flag_png.png";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="titlecard">
          <h1 className="title">Broken Arrow Randomizer</h1>
        </div>

        <div className="option-1">
          <h2 className="option-text">Choose your Nation</h2>
        </div>

        <div className="nation-select">
          <div className="nation">
            <img src={usFlag} alt="USA Flag" className="flag" />
            <p className="nation-text">USA</p>
          </div>
          <div className="nation">
            <img src={ruFlag} alt="RU Flag" className="flag" />
            <p className="nation-text">Russia</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
