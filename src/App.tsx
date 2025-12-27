import usFlag from "./assets/images/flag/usa-20flag_png.png";
import ruFlag from "./assets/images/flag/rus-20flag_png.png";
import NationCard from "./components/NationCard";
import * as specImages from "./assets/images/specs";
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
          <NationCard
            nation="USA"
            flag={usFlag}
            spec1={specImages.marines}
            spec2={specImages.armored}
            spec3={specImages.airborne}
            spec4={specImages.stryker}
            spec5={specImages.sof}
          />
          <NationCard
            nation="Russia"
            flag={ruFlag}
            spec1={specImages.vdv}
            spec2={specImages.guards}
            spec3={specImages.motostrelki}
            spec4={specImages.morskaya}
            spec5={specImages.mech}
          />
        </div>
      </div>
    </>
  );
};

export default App;
