import { useLocation } from "react-router-dom";

function Topbar() {
  const location = useLocation();

  const titles = {
    "/": "City Overview",
    "/risk-map": "GVP Risk Map",
    "/vehicles": "Vehicle Tracking",
    "/segregation": "Waste Segregation",
    "/alerts": "Alerts & Notifications",
    "/complaints": "Citizen Complaints",
    "/ward-analytics": "Ward Analytics",
  };

  return (
    <header className="topbar">

      <div>
        <div className="breadcrumb">
          Nagpur / Swacch Intelligence
        </div>

        <h1>
          {titles[location.pathname] || "Dashboard"}
        </h1>
      </div>

      <div className="topbar-actions">

        <div className="live-status">
          <span></span>
          LIVE
        </div>

        <button className="icon-button">
          🔔
          <b>3</b>
        </button>

        <div className="profile">
          <div className="avatar">O</div>
          <div>
            <strong>Municipal Officer</strong>
            <small>Nagpur Municipal Corporation</small>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Topbar;