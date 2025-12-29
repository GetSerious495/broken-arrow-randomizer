import { useState } from "react";
import "./Modal.css";
interface NationCardProps {
  nation: string;
  flag: string;
  spec1?: string;
  spec2?: string;
  spec3?: string;
  spec4?: string;
  spec5?: string;
  specName1?: string;
  specName2?: string;
  specName3?: string;
  specName4?: string;
  specName5?: string;
  selectToggle?: boolean;
}

function NationCard(props: NationCardProps) {
  const [modal, setModal] = useState(false);

  const [select, setSelect] = useState(false)

  const toggleModal = () => {
    setModal(!modal);
    console.log("Modal toggled:", !modal);
  };

  const toggleSelect = () => {
    setSelect(!select);
    console.log("Select toggled:", !select);
  }

  return (
    <>
      <button className="nation" onClick={toggleModal}>
        <img src={props.flag} alt={`${props.nation} Flag`} className="flag" />
        <div className="spec-row">
          <img src={props.spec1} alt="" className="spec-icon" />
          <img src={props.spec2} alt="" className="spec-icon" />
          <img src={props.spec3} alt="" className="spec-icon" />
          <img src={props.spec4} alt="" className="spec-icon" />
          <img src={props.spec5} alt="" className="spec-icon" />
        </div>
        <p className="nation-text">{props.nation}</p>
      </button>

      {modal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={toggleModal}>x</button>
            <h2 className="modal-title">{props.nation}</h2>
            <p className="modal-text">Select 2 of your desired specialization:</p>
            
            <button className="button-spec" onClick={toggleSelect}>
              <img src={props.spec1} alt="" className="spec-icon" />
              <p className="button-spec-title">{props.specName1}</p>
            </button>
            
            <button className="button-spec" onClick={toggleSelect}>
              <img src={props.spec2} alt="" className="spec-icon" />
              <p className="button-spec-title">{props.specName2}</p>
            </button>
            
            <button className="button-spec" onClick={toggleSelect}>
              <img src={props.spec3} alt="" className="spec-icon" />
              <p className="button-spec-title">{props.specName3}</p>
            </button>
            
            <button className="button-spec" onClick={toggleSelect}>
              <img src={props.spec4} alt="" className="spec-icon" />
              <p className="button-spec-title">{props.specName4}</p>
            </button>
            
            <button className="button-spec" onClick={toggleSelect}>
              <img src={props.spec5} alt="" className="spec-icon" />
              <p className="button-spec-title">{props.specName5}</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default NationCard;
