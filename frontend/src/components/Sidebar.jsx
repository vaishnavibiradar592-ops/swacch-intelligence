import { NavLink } from "react-router-dom";

function Sidebar() {
  const menu = [
    ["Dashboard", "/", "⌂"],
    ["Risk Map", "/risk-map", "◉"],
    ["Vehicles", "/vehicles", "▣"],
    ["Segregation", "/segregation", "♻"],
    ["Alerts", "/alerts", "⚠"],
    ["Complaints", "/complaints", "☷"],
    ["Ward Analytics", "/ward-analytics", "▥"],
  ];

  return (
    <aside className="sidebar">

      <div className="brand">
        <div className="brand-icon">♻</div>

        <div>
          <h2>Swacch</h2>
          <span>INTELLIGENCE</span>
        </div>
      </div>

      <div className="sidebar-label">
        SMART WASTE MANAGEMENT
      </div>

      <nav>
        {menu.map(([name, path, icon]) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span className="nav-icon">{icon}</span>
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="system-status">
          <span className="status-dot"></span>
          <div>
            <strong>System Online</strong>
            <small>All services operational</small>
          </div>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;