function AlertCard({ alert }) {

  return (
    <div className={`alert-card ${alert.type.toLowerCase()}`}>

      <div>
        <strong>
          {alert.type === "HIGH" ? "🔴" : "🟡"}{" "}
          {alert.type}
        </strong>

        <p>{alert.message}</p>
        <small>📍 {alert.location}</small>
      </div>

    </div>
  );
}

export default AlertCard;