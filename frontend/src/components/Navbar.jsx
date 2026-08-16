import { Bell, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-title">
        <h2>Smart Waste Management</h2>
        <p>Nagpur Municipal Dashboard</p>
      </div>

      <div className="navbar-actions">

        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="admin-profile">

          <div className="admin-avatar">
            <UserCircle size={24} />
          </div>

          <div className="admin-info">
            <strong>Admin</strong>
            <span>Municipal Authority</span>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;