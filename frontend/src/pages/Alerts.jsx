import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { alerts } from "../data/mockData";

function Alerts() {

  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? alerts
      : alerts.filter((a) => a.type === filter);

  return (
    <div>

      <SectionTitle
        title="Alerts & Notifications"
        subtitle="Real-time waste management intelligence"
        action={
          <select
            className="small-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Alerts</option>
            <option value="critical">Critical</option>
            <option value="warning">Warning</option>
            <option value="success">Resolved</option>
          </select>
        }
      />

      <div className="alert-summary">

        <div>
          <strong>01</strong>
          <span>Critical</span>
        </div>

        <div>
          <strong>02</strong>
          <span>Warnings</span>
        </div>

        <div>
          <strong>01</strong>
          <span>Resolved</span>
        </div>

      </div>

      <div className="alerts-container">

        {filtered.map((alert) => (

          <div
            className={`full-alert ${alert.type}`}
            key={alert.id}
          >

            <div className="full-alert-icon">
              {alert.type === "critical"
                ? "!"
                : alert.type === "warning"
                ? "⚠"
                : "✓"}
            </div>

            <div className="full-alert-content">

              <div className="alert-top">

                <strong>{alert.title}</strong>

                <span>{alert.time}</span>

              </div>

              <p>{alert.message}</p>

              <button className="text-btn">
                View Details →
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Alerts;