import usFlag from "./assets/images/flag/usa-20flag_png.png";
import ruFlag from "./assets/images/flag/rus-20flag_png.png";
import NationCard from "./components/NationCard";
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
          <NationCard nation="USA" flag={usFlag} />
          <NationCard nation="Russia" flag={ruFlag} />
        </div>
      </div>
    </>
  );
};

export default App;
