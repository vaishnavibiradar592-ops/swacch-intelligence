function StatCard({ icon, title, value, change, subtitle, type }) {
  return (
    <div className="stat-card">

      <div className={`stat-icon ${type || ""}`}>
        {icon}
      </div>

      <div className="stat-content">
        <span>{title}</span>

        <strong>{value}</strong>

        <small className={change?.includes("+") ? "positive" : ""}>
          {change} {subtitle}
        </small>
      </div>

    </div>
  );
}

export default StatCard;