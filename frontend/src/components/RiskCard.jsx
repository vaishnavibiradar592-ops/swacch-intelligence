function RiskCard({ ward, score, level }) {
  const levelClass = level.toLowerCase();

  return (
    <div className={`risk-card ${levelClass}`}>

      <div>
        <span className="risk-label">GVP RISK</span>
        <h3>{ward}</h3>
      </div>

      <div className="risk-score">
        <strong>{score}</strong>
        <span>/100</span>
      </div>

      <div className="risk-footer">
        <span className={`badge ${levelClass}`}>
          {level} Risk
        </span>

        <span>AI Prediction</span>
      </div>

    </div>
  );
}

export default RiskCard;