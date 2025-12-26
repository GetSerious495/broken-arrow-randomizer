interface NationCardProps {
  nation: string;
  flag: string;
  spec1?: string;
  spec2?: string;
  spec3?: string;
  spec4?: string;
  spec5?: string;
}

function NationCard(props: NationCardProps) {
  return (
    <button className="nation">
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
  );
}

export default NationCard;
