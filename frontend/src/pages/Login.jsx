import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  UserRound,
  LockKeyhole,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  Leaf,
  Building2
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("admin");
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    // Temporary frontend login
    if (role === "admin") {
  navigate("/dashboard");
} else {
  navigate("/citizen");
}
  }

  return (
    <div className="login-page">

      {/* LEFT SIDE */}

      <div className="login-left">

        <div className="brand">

          <div className="brand-icon">
            <Leaf size={28} />
          </div>

          <div>
            <h2>Swachh</h2>
            <span>Intelligence</span>
          </div>

        </div>

        <div className="hero-content">

          <div className="hero-badge">
            <span className="live-dot"></span>
            Smart Waste Management
          </div>

          <h1>
            Building a
            <span> Cleaner Nagpur</span>
          </h1>

          <p>
            AI-powered waste intelligence for smarter wards,
            cleaner streets and better citizen services.
          </p>

          <div className="hero-features">

            <div className="feature-item">
              <div className="feature-icon">
                <ShieldCheck size={20} />
              </div>

              <div>
                <strong>Smart Monitoring</strong>
                <p>Real-time municipal insights</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Leaf size={20} />
              </div>

              <div>
                <strong>AI Risk Prediction</strong>
                <p>Predict garbage vulnerable points</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <UserRound size={20} />
              </div>

              <div>
                <strong>Citizen Connect</strong>
                <p>Report and track complaints</p>
              </div>
            </div>

          </div>

        </div>

        <div className="login-footer">
          © 2026 Swachh Intelligence • Nagpur
        </div>

      </div>


      {/* RIGHT SIDE */}

      <div className="login-right">

        <div className="login-card">

          <div className="mobile-logo">
            <div className="brand-icon">
              <Leaf size={24} />
            </div>

            <div>
              <h2>Swachh</h2>
              <span>Intelligence</span>
            </div>
          </div>

          <div className="login-heading">

            <h1>Welcome back 👋</h1>

            <p>
              Sign in to continue to your dashboard
            </p>

          </div>


          {/* ROLE SELECTOR */}

          <div className="role-section">

            <label>Continue as</label>

            <div className="role-selector">

              <button
                type="button"
                className={
                  role === "admin"
                    ? "role-button selected"
                    : "role-button"
                }
                onClick={() => setRole("admin")}
              >

                <Building2 size={20} />

                <div>
                  <strong>Admin</strong>
                  <small>Municipal Official</small>
                </div>

              </button>


              <button
                type="button"
                className={
                  role === "citizen"
                    ? "role-button selected"
                    : "role-button"
                }
                onClick={() => setRole("citizen")}
              >

                <UserRound size={20} />

                <div>
                  <strong>Citizen</strong>
                  <small>Report an issue</small>
                </div>

              </button>

            </div>

          </div>


          {/* LOGIN FORM */}

          <form onSubmit={handleLogin}>

            <div className="input-group">

              <label>Email Address</label>

              <div className="input-wrapper">

                <Mail size={19} />

                <input
                  type="email"
                  placeholder={
                    role === "admin"
                      ? "admin@nagpur.gov.in"
                      : "you@example.com"
                  }
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />

              </div>

            </div>


            <div className="input-group">

              <label>Password</label>

              <div className="input-wrapper">

                <LockKeyhole size={19} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>


            {error && (
              <div className="login-error">
                ⚠️ {error}
              </div>
            )}


            <div className="login-options">

              <label className="remember">

                <input type="checkbox" />

                <span>Remember me</span>

              </label>

              <button
                type="button"
                className="forgot-password"
              >
                Forgot password?
              </button>

            </div>


            <button
              type="submit"
              className="login-button"
            >

              <span>
                Sign in as{" "}
                {role === "admin"
                  ? "Admin"
                  : "Citizen"}
              </span>

              <ArrowRight size={20} />

            </button>

          </form>


          <div className="login-divider">
            <span>Secure access</span>
          </div>

          <div className="security-note">

            <ShieldCheck size={18} />

            <span>
              Your information is protected with
              secure authentication.
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;