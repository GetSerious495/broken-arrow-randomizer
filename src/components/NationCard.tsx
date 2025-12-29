import { useState } from "react";
import "./Modal.css";
interface NationCardProps {
  nation: string;
  flag: string;
  specs: { src: string; name: string }[];
}

function NationCard(props: NationCardProps) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log("Modal toggled:", !modal);
  };

  return (
    <>
      <button className="nation" onClick={toggleModal}>
        <img src={props.flag} alt={`${props.nation} Flag`} className="flag" />
        <div className="spec-row">
          {props.specs.slice(0, 5).map((spec, index) => (
            <img key={index} src={spec.src} alt="" className="spec-icon" />
          ))}
        </div>
        <p className="nation-text">{props.nation}</p>
      </button>

      {modal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={toggleModal}>
              x
            </button>
            <h2 className="modal-title">{props.nation}</h2>
            <p className="modal-text">
              Select 2 of your desired specialization:
            </p>

            {props.specs.map((spec, index) => (
              <button key={index} className="button-spec">
                <img src={spec.src} alt="" className="spec-icon" />
                <p className="button-spec-title">{spec.name}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default NationCard;
