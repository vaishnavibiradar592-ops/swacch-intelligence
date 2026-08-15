import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import RiskMap from "./pages/RiskMap";
import Vehicles from "./pages/Vehicles";
import Segregation from "./pages/Segregation";
import Alerts from "./pages/Alerts";
import Complaints from "./pages/Complaints";
import WardAnalytics from "./pages/WardAnalytics";

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Sidebar />

        <main className="main-content">

          <Topbar />

          <div className="page-content">

            <Routes>

              <Route
                path="/"
                element={<Dashboard />}
              />

              <Route
                path="/risk-map"
                element={<RiskMap />}
              />

              <Route
                path="/vehicles"
                element={<Vehicles />}
              />

              <Route
                path="/segregation"
                element={<Segregation />}
              />

              <Route
                path="/alerts"
                element={<Alerts />}
              />

              <Route
                path="/complaints"
                element={<Complaints />}
              />

              <Route
                path="/ward-analytics"
                element={<WardAnalytics />}
              />

            </Routes>

          </div>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;