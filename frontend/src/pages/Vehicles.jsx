import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { vehicles } from "../data/mockData";

function Vehicles() {

  const [selected, setSelected] = useState(vehicles[0]);

  const active = vehicles.filter(
    (v) => v.status === "Active"
  ).length;

  return (
    <div>

      <SectionTitle
        title="Garbage Vehicle Tracking"
        subtitle="Monitor collection vehicles in real time"
      />

      <div className="vehicle-stats">

        <div className="vehicle-stat">
          <span>ACTIVE</span>
          <strong>{active}</strong>
          <small>Vehicles on route</small>
        </div>

        <div className="vehicle-stat">
          <span>COLLECTED</span>
          <strong>7,840 kg</strong>
          <small>Today's collection</small>
        </div>

        <div className="vehicle-stat">
          <span>EFFICIENCY</span>
          <strong>91%</strong>
          <small>Route efficiency</small>
        </div>

      </div>

      <div className="vehicle-layout">

        <div className="panel">

          <div className="fake-map vehicle-map">

            <div className="map-road road-1"></div>
            <div className="map-road road-2"></div>
            <div className="map-road road-3"></div>

            {vehicles.map((vehicle, index) => (

              <button
                key={vehicle.id}
                className={`vehicle-marker ${
                  vehicle.status.toLowerCase()
                }`}
                style={{
                  left: `${25 + index * 18}%`,
                  top: `${35 + (index % 2) * 25}%`,
                }}
                onClick={() => setSelected(vehicle)}
              >
                🚛
              </button>

            ))}

            <div className="map-label nagpur">
              NAGPUR COLLECTION ROUTES
            </div>

          </div>

        </div>

        <div className="vehicle-list panel">

          <SectionTitle
            title="Fleet"
            subtitle="Today's collection vehicles"
          />

          {vehicles.map((vehicle) => (

            <button
              className={`vehicle-row ${
                selected.id === vehicle.id ? "selected" : ""
              }`}
              key={vehicle.id}
              onClick={() => setSelected(vehicle)}
            >

              <div className="truck-icon">
                🚛
              </div>

              <div className="vehicle-info">
                <strong>{vehicle.id}</strong>

                <span>
                  {vehicle.driver} • {vehicle.ward}
                </span>

                <div className="progress">
                  <i
                    style={{
                      width: `${vehicle.progress}%`,
                    }}
                  ></i>
                </div>
              </div>

              <span
                className={`status-badge ${
                  vehicle.status.toLowerCase()
                }`}
              >
                {vehicle.status}
              </span>

            </button>

          ))}

        </div>

      </div>

      <div className="panel vehicle-detail">

        <SectionTitle
          title={`Vehicle ${selected.id}`}
          subtitle="Selected vehicle details"
        />

        <div className="detail-grid">

          <div>
            <span>Driver</span>
            <strong>{selected.driver}</strong>
          </div>

          <div>
            <span>Current Ward</span>
            <strong>{selected.ward}</strong>
          </div>

          <div>
            <span>Route Progress</span>
            <strong>{selected.progress}%</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>{selected.status}</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Vehicles;