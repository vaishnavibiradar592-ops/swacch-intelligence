import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { wards } from "../data/mockData";

function WardAnalytics() {

  const [selectedWard, setSelectedWard] = useState(wards[2]);

  const segregation = Math.round(
    (selectedWard.segregated_kg /
      selectedWard.waste_kg) *
      100
  );

  return (
    <div>

      <SectionTitle
        title="Ward Analytics"
        subtitle="Detailed cleanliness intelligence"
        action={
          <select
            className="small-select"
            value={selectedWard.ward_id}
            onChange={(e) => {
              const ward = wards.find(
                (w) =>
                  w.ward_id === Number(e.target.value)
              );

              setSelectedWard(ward);
            }}
          >
            {wards.map((ward) => (
              <option
                key={ward.ward_id}
                value={ward.ward_id}
              >
                {ward.name}
              </option>
            ))}
          </select>
        }
      />

      <div className="ward-header">

        <div>
          <span>SELECTED WARD</span>
          <h2>{selectedWard.name}</h2>
          <p>
            Population:{" "}
            {selectedWard.population.toLocaleString()}
          </p>
        </div>

        <div className="clean-score">

          <span>CLEANLINESS SCORE</span>

          <strong>
            {selectedWard.cleanliness}
          </strong>

          <small>/100</small>

        </div>

      </div>

      <div className="stats-grid">

        <div className="analytics-card">
          <span>Total Waste</span>
          <strong>
            {selectedWard.waste_kg} kg
          </strong>
          <small>Generated</small>
        </div>

        <div className="analytics-card">
          <span>Segregation</span>
          <strong>{segregation}%</strong>
          <small>Properly separated</small>
        </div>

        <div className="analytics-card">
          <span>Complaints</span>
          <strong>
            {selectedWard.complaints}
          </strong>
          <small>This period</small>
        </div>

        <div className="analytics-card">
          <span>Collection Delay</span>
          <strong>
            {selectedWard.collection_delay}h
          </strong>
          <small>Average delay</small>
        </div>

      </div>

      <div className="grid-2">

        <div className="panel">

          <SectionTitle
            title="Performance Indicators"
            subtitle="Ward health overview"
          />

          <div className="indicator-list">

            <div>
              <div>
                <span>Cleanliness</span>
                <strong>
                  {selectedWard.cleanliness}%
                </strong>
              </div>

              <div className="indicator-bar">
                <i
                  style={{
                    width: `${selectedWard.cleanliness}%`,
                  }}
                ></i>
              </div>
            </div>

            <div>
              <div>
                <span>Segregation</span>
                <strong>{segregation}%</strong>
              </div>

              <div className="indicator-bar">
                <i
                  style={{
                    width: `${segregation}%`,
                  }}
                ></i>
              </div>
            </div>

            <div>
              <div>
                <span>Collection Efficiency</span>
                <strong>
                  {100 -
                    selectedWard.collection_delay *
                      5}
                  %
                </strong>
              </div>

              <div className="indicator-bar">
                <i
                  style={{
                    width: `${
                      100 -
                      selectedWard.collection_delay *
                        5
                    }%`,
                  }}
                ></i>
              </div>
            </div>

          </div>

        </div>

        <div className="panel">

          <SectionTitle
            title="AI Risk Assessment"
            subtitle="Garbage Vulnerable Point"
          />

          <div className="ai-score">

            <div>
              <span>RISK SCORE</span>
              <strong>
                {selectedWard.risk_score}
              </strong>
              <small>/100</small>
            </div>

            <span
              className={`badge ${selectedWard.risk_level.toLowerCase()}`}
            >
              {selectedWard.risk_level}
            </span>

          </div>

          <p className="ai-description">
            Risk prediction uses waste generation,
            complaints, collection delay and previous
            GVP incidents.
          </p>

        </div>

      </div>

    </div>
  );
}

export default WardAnalytics;