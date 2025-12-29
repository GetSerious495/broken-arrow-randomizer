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
            specs={[
              { src: specImages.marines, name: "Marines" },
              { src: specImages.armored, name: "Armored" },
              { src: specImages.airborne, name: "Airborne" },
              { src: specImages.stryker, name: "Stryker" },
              { src: specImages.sof, name: "SOF" },
            ]}
          />
          <NationCard
            nation="Russia"
            flag={ruFlag}
            specs={[
              { src: specImages.vdv, name: "VDV" },
              { src: specImages.guards, name: "Guards" },
              { src: specImages.motostrelki, name: "Motostrelki" },
              { src: specImages.morskaya, name: "Morskaya" },
              { src: specImages.mech, name: "Mech" },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default App;
