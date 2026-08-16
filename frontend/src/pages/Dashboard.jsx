import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Doughnut } from "react-chartjs-2";

import StatCard from "../components/StatCard";
import RiskCard from "../components/RiskCard";
import SectionTitle from "../components/SectionTitle";

import { wards, alerts } from "../data/mockData";
import { predictGVP } from "../services/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function Dashboard() {

  const [selectedWard, setSelectedWard] = useState(3);
  const [aiScore, setAiScore] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");

  const ward = wards.find(
    (item) => item.ward_id === Number(selectedWard)
  );
    const runAIPrediction = async () => {
    setAiLoading(true);
    setAiError("");

    try {
      const result = await predictGVP({
        population: ward.population,
        waste_kg: ward.waste_kg,
        segregated_kg: ward.segregated_kg,
        complaints: ward.complaints,
        collection_delay: ward.collection_delay,
        previous_gvp: ward.previous_gvp,
      });

      setAiScore(result.risk_score);
    } catch (error) {
      console.error(error);
      setAiError("AI prediction failed");
    } finally {
      setAiLoading(false);
    }
  };
    useEffect(() => {
    runAIPrediction();
  }, [selectedWard]);

  const barData = {
    labels: wards.map((w) => w.name),
    datasets: [
      {
        label: "Cleanliness Score",
        data: wards.map((w) => w.cleanliness),
        borderRadius: 8,
      },
    ],
  };

  const doughnutData = {
    labels: ["Segregated", "Non-segregated"],
    datasets: [
      {
        data: [
          ward.segregated_kg,
          ward.waste_kg - ward.segregated_kg,
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div>

      <div className="hero-banner">

        <div>
          <span className="eyebrow">SMART CITY • NAGPUR</span>

          <h2>
            Cleaner city.
            <br />
            Smarter decisions.
          </h2>

          <p>
            Detect → Predict → Alert → Act
          </p>
        </div>

        <div className="hero-badge">
          <span>AI ENGINE</span>
          <strong>ACTIVE</strong>
        </div>

      </div>

      <div className="dashboard-toolbar">

        <div>
          <label>Select Ward</label>

          <select
            value={selectedWard}
            onChange={(e) => setSelectedWard(e.target.value)}
          >
            {wards.map((w) => (
              <option key={w.ward_id} value={w.ward_id}>
                {w.name}
              </option>
            ))}
          </select>
        </div>

        <div className="selected-info">
          Showing live intelligence for <strong>{ward.name}</strong>
        </div>

      </div>

      <div className="stats-grid">

        <StatCard
          icon="♻"
          title="Total Waste"
          value={`${ward.waste_kg.toLocaleString()} kg`}
          change="+8.4%"
          subtitle="vs yesterday"
          type="green"
        />

        <StatCard
          icon="◈"
          title="Segregation"
          value={`${Math.round(
         (ward.segregated_kg / ward.waste_kg) * 100 )}%`}
          change="+4.2%"
          subtitle="this week"
          type="blue"
        />

        <StatCard
          icon="▣"
          title="Active Vehicles"
          value="86"
          change="+12"
          subtitle="on route"
          type="purple"
        />

        <StatCard
          icon="⚠"
          title="Open Complaints"
          value={ward.complaints}
          change="-6"
          subtitle="from yesterday"
          type="orange"
        />

      </div>

      <div className="grid-2">

        <div className="panel">

          <SectionTitle
            title="Ward Cleanliness"
            subtitle="Overall performance by ward"
          />

          <div className="chart-box">
            <Bar
              data={barData}
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
            title="Segregation Score"
            subtitle={`${ward.name} waste composition`}
          />

          <div className="donut-container">

            <div className="donut">
              <Doughnut
                data={doughnutData}
                options={{
                  cutout: "72%",
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />

              <div className="donut-value">
                <strong>
                  {Math.round(
                    (ward.segregated_kg / ward.waste_kg) * 100
                  )}
                  %
                </strong>
                <span>Segregated</span>
              </div>
            </div>

            <div className="legend-list">
              <div>
                <span className="legend-dot green"></span>
                Segregated
                <strong>
                  {ward.segregated_kg} kg
                </strong>
              </div>

              <div>
                <span className="legend-dot gray"></span>
                Non-segregated
                <strong>
                  {ward.waste_kg - ward.segregated_kg} kg
                </strong>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className="grid-2">

        <div className="panel">

          <SectionTitle
            title="AI GVP Risk"
            subtitle="Garbage Vulnerable Point prediction"
          />

          <RiskCard
            ward={ward.name}
            score={ward.risk_score}
            level={ward.risk_level}
          />

          <div className="risk-explanation">

            <div>
              <span>Waste Generated</span>
              <strong>{ward.waste_kg} kg</strong>
            </div>

            <div>
              <span>Complaints</span>
              <strong>{ward.complaints}</strong>
            </div>

            <div>
              <span>Collection Delay</span>
              <strong>{ward.collection_delay} hrs</strong>
            </div>

          </div>

        </div>

        <div className="panel">

          <SectionTitle
            title="Recent Alerts"
            subtitle="Latest system intelligence"
          />

          <div className="alert-list">

            {alerts.slice(0, 4).map((alert) => (

              <div className="mini-alert" key={alert.id}>

                <div className={`alert-icon ${alert.type}`}>
                  {alert.type === "critical"
                    ? "!"
                    : alert.type === "warning"
                    ? "⚠"
                    : "✓"}
                </div>

                <div>
                  <strong>{alert.title}</strong>
                  <p>{alert.message}</p>
                  <small>{alert.time}</small>
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;