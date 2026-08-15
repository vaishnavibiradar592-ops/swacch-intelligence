import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { gvpPoints } from "../data/mockData";

function RiskMap() {

  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(gvpPoints[0]);

  const filtered =
    filter === "All"
      ? gvpPoints
      : gvpPoints.filter((p) => p.level === filter);

  return (
    <div>

      <SectionTitle
        title="Garbage Vulnerable Point Map"
        subtitle="AI-powered risk locations across Nagpur"
        action={
          <select
            className="small-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        }
      />

      <div className="map-layout">

        <div className="map-panel">

          <div className="map-header">
            <div>
              <strong>Nagpur Smart Waste Map</strong>
              <span>Live prototype data</span>
            </div>

            <div className="map-legend">
              <span>
                <i className="high"></i> High
              </span>
              <span>
                <i className="medium"></i> Medium
              </span>
              <span>
                <i className="low"></i> Low
              </span>
            </div>
          </div>

          <div className="fake-map">

            <div className="map-road road-1"></div>
            <div className="map-road road-2"></div>
            <div className="map-road road-3"></div>
            <div className="map-road road-4"></div>

            {filtered.map((point) => (

              <button
                key={point.id}
                className={`map-marker ${point.level.toLowerCase()}`}
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                }}
                onClick={() => setSelected(point)}
              >
                <span></span>
                <b>{point.risk}</b>
              </button>

            ))}

            <div className="map-label nagpur">
              NAGPUR
            </div>

          </div>

        </div>

        <div className="map-side">

          <div className="panel">

            <span className="eyebrow">
              SELECTED LOCATION
            </span>

            <h2>{selected.location}</h2>

            <p className="muted">
              {selected.ward}
            </p>

            <div className={`big-risk ${selected.level.toLowerCase()}`}>
              {selected.risk}
              <span>/100</span>
            </div>

            <div className="risk-status">
              {selected.level} Risk
            </div>

            <div className="location-details">
              <div>
                <span>Latitude</span>
                <strong>21.1458°</strong>
              </div>

              <div>
                <span>Longitude</span>
                <strong>79.0882°</strong>
              </div>

              <div>
                <span>Prediction</span>
                <strong>AI Model</strong>
              </div>
            </div>

            <button className="primary-btn">
              View Ward Details →
            </button>

          </div>

          <div className="panel">

            <SectionTitle
              title="Risk Locations"
              subtitle={`${filtered.length} locations found`}
            />

            {filtered.map((point) => (

              <button
                className="location-row"
                key={point.id}
                onClick={() => setSelected(point)}
              >
                <span className={`location-dot ${point.level.toLowerCase()}`}>
                  {point.risk}
                </span>

                <div>
                  <strong>{point.location}</strong>
                  <small>{point.ward}</small>
                </div>

                <span>→</span>
              </button>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default RiskMap;