import "./Maintenance.scss";

interface MaintenanceProps {
  colorName: string;
  colorDesc: string;
  materialContain: string;
  materialSetUp?: string;
  directions: string;
}

const Maintenance = ({
  colorName,
  colorDesc,
  materialContain,
  materialSetUp,
  directions,
}: MaintenanceProps) => {
  return (
    <div className="maintenance-container">
      <div className="maintenance-color">
        <div className="color-label">Боја:</div>
        <div className={`color ${colorName}`}></div>
        <div className="color-desc">{colorDesc}</div>
      </div>
      <div className="maintenance-material">
        <div className="material">Материјал:</div>
        <div className="material-contain">{materialContain}</div>
        <div className="material-set-up">{materialSetUp}</div>
        <div className="condition">
          <span className="condition-desc">Состојба</span>
          <span className="condition-rating">10/10</span>{" "}
          <span className="condition-read-more">прочитај повеќе</span>
        </div>
      </div>
      <div className="maintenance-directions">
        <div className="maintenance-directions-header">
          Насоки за одржување:
        </div>
        <div className="maintenance-directions-text">{directions}</div>
      </div>
    </div>
  );
};

export default Maintenance;
