import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

import SectionTitle from "../components/SectionTitle";
import { wards } from "../data/mockData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function Segregation() {

  const average =
    wards.reduce(
      (sum, ward) =>
        sum + (ward.segregated_kg / ward.waste_kg) * 100,
      0
    ) / wards.length;

  const data = {
    labels: wards.map((ward) => ward.name),
    datasets: [
      {
        label: "Segregation %",
        data: wards.map(
          (ward) =>
            Math.round(
              (ward.segregated_kg / ward.waste_kg) * 100
            )
        ),
        borderRadius: 8,
      },
    ],
  };

  return (
    <div>

      <SectionTitle
        title="Waste Segregation"
        subtitle="Monitor wet and dry waste separation"
      />

      <div className="seg-hero">

        <div>
          <span>AVERAGE CITY SCORE</span>
          <strong>{Math.round(average)}%</strong>

          <p>
            Waste is being properly separated
            across monitored wards.
          </p>
        </div>

        <div className="seg-circle">
          <div>
            <strong>{Math.round(average)}%</strong>
            <span>Segregated</span>
          </div>
        </div>

      </div>

      <div className="grid-2">

        <div className="panel">

          <SectionTitle
            title="Ward Performance"
            subtitle="Segregation percentage"
          />

          <div className="chart-box">
            <Bar
              data={data}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                  },
                },
              }}
            />
          </div>

        </div>

        <div className="panel">

          <SectionTitle
            title="Waste Composition"
            subtitle="Current city estimate"
          />

          <div className="waste-bars">

            <div>
              <div>
                <span>Wet Waste</span>
                <strong>56%</strong>
              </div>

              <div className="bar">
                <i style={{ width: "56%" }}></i>
              </div>
            </div>

            <div>
              <div>
                <span>Dry Waste</span>
                <strong>31%</strong>
              </div>

              <div className="bar">
                <i style={{ width: "31%" }}></i>
              </div>
            </div>

            <div>
              <div>
                <span>Mixed Waste</span>
                <strong>13%</strong>
              </div>

              <div className="bar">
                <i style={{ width: "13%" }}></i>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className="panel">

        <SectionTitle
          title="Ward Segregation Details"
          subtitle="Detailed performance"
        />

        <div className="data-table">

          <div className="table-head">
            <span>Ward</span>
            <span>Total Waste</span>
            <span>Segregated</span>
            <span>Score</span>
            <span>Status</span>
          </div>

          {wards.map((ward) => {

            const score = Math.round(
              (ward.segregated_kg / ward.waste_kg) * 100
            );

            return (
              <div className="table-row" key={ward.ward_id}>

                <strong>{ward.name}</strong>

                <span>{ward.waste_kg} kg</span>

                <span>{ward.segregated_kg} kg</span>

                <strong>{score}%</strong>

                <span
                  className={`badge ${
                    score >= 70
                      ? "low"
                      : score >= 55
                      ? "medium"
                      : "high"
                  }`}
                >
                  {score >= 70
                    ? "Good"
                    : score >= 55
                    ? "Average"
                    : "Needs Action"}
                </span>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}

export default Segregation;