import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RiskMap from "./pages/RiskMap";
import Vehicles from "./pages/Vehicles";
import Segregation from "./pages/Segregation";
import Alerts from "./pages/Alerts";
import Complaints from "./pages/Complaints";
import WardAnalytics from "./pages/WardAnalytics";

function AdminLayout() {
  return (
    <div className="app">

      <Sidebar />

      <div className="main">

        <Navbar />

        <div className="content-area">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/risk-map" element={<RiskMap />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/segregation" element={<Segregation />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/wards" element={<WardAnalytics />} />
          </Routes>
        </div>

      </div>

    </div>
  );
}

function CitizenPage() {
  return (
    <div className="citizen-page">
      <div className="citizen-card">
        <div className="citizen-icon">👋</div>

        <h1>Citizen Portal</h1>

        <p>
          Citizen complaint portal coming soon.
        </p>

        <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* LOGIN IS NOW THE HOME PAGE */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* ADMIN */}
        <Route
          path="/*"
          element={<AdminLayout />}
        />

        {/* CITIZEN */}
        <Route
          path="/citizen"
          element={<CitizenPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;