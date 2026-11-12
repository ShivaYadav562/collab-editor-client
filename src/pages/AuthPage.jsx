import React, { useState } from "react";
import "./AuthPage.css";
import DotGlobe from "./DotGlobeBackground";

const API_BASE =
  "https://collab-editor-backend-1-fy11.onrender.com/api/auth";

const features = [
  { icon: "▣", title: "Live Code Rooms", text: "Real-time collaboration", color: "violet" },
  { icon: "✦", title: "AI Tutor", text: "Context-aware help", color: "blue" },
  { icon: "⌘", title: "Run Your Code", text: "Fast feedback loop", color: "green" },
  { icon: "↗", title: "Peer Review", text: "Build better together", color: "orange" },
];

function GoogleIcon() {
  return (
    <svg className="oauth-icon" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 37.97 46.98 31.85 46.98 24.55z" />
      <path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.14 1.45-4.89 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function CodePreview() {
  return (
    <div className="preview-window" aria-label="Decorative collaborative editor preview">
      <div className="preview-toolbar">
        <div className="preview-brand">
          <span>⌘</span> Collab<span>Editor</span>
        </div>
        <div className="live-users">
          <i>J</i><i>M</i><i>A</i><small>+3</small>
        </div>
        <span className="sync-pill"><b /> Live sync</span>
      </div>

      <div className="preview-content">
        <aside className="preview-files">
          <span>⌁   collab-room-01</span>
          <strong>▣   index.js</strong>
          <span>▧   styles.css</span>
          <span>⌘   App.jsx</span>
          <span>▤   README.md</span>
        </aside>

        <div className="preview-code">
          <div className="file-tab">index.js <b>●</b></div>
          <div className="code-lines">
            <p><em>1</em><span className="syntax-comment">// Build something great together</span></p>
            <p><em>2</em><span className="syntax-pink">import</span> express <span className="syntax-pink">from</span> <span className="syntax-green">'express'</span>;</p>
            <p><em>3</em><span className="syntax-pink">const</span> app = express();</p>
            <p><em>4</em></p>
            <p><em>5</em>app.<span className="syntax-yellow">get</span>(<span className="syntax-green">'/'</span>, (req, res) =&gt; {"{"}</p>
            <p><em>6</em>  res.json({"{"}</p>
            <p><em>7</em>    message: <span className="syntax-green">'Code. Collaborate. Grow.'</span></p>
            <p><em>8</em>  {"}"});</p>
            <p><em>9</em>{"}"});</p>
          </div>
        </div>

        <div className="ai-preview">
          <div className="ai-preview-heading">✦   AI Pair Assistant</div>
          <div className="question-bubble">Can you explain this code?</div>
          <div className="answer-bubble">
            <span>✦</span>
            <p>This creates a simple Express server and returns a JSON response from the root route.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (isSignup && username.trim().length < 3) {
      setError("Username must be at least 3 characters long.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    if (
      isSignup &&
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(password)
    ) {
      setError(
        "Password must be 8+ characters and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    setLoading(true);

    try {
      const endpoint = isSignup
        ? `${API_BASE}/signup`
        : `${API_BASE}/login`;

      const payload = isSignup
        ? { username: username.trim(), email: email.trim(), password }
        : { email: email.trim(), password };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.message ||
          data.error ||
          `${isSignup ? "Signup" : "Login"} failed. Please try again.`
        );
      }

      const token = data.token || data.accessToken;
      const user = data.user || data.data?.user;

      if (token) {
        localStorage.setItem("token", token);
      }

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }

      if (token && !rememberMe && !isSignup) {
        sessionStorage.setItem("token", token);
        localStorage.removeItem("token");
      }

      const redirectTo =
        sessionStorage.getItem("redirectAfterLogin") || "/dashboard";

      sessionStorage.removeItem("redirectAfterLogin");
      window.location.href = redirectTo;
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    setError(
      "Google sign-in needs a Google OAuth endpoint configured in the backend."
    );
  };

  const switchMode = () => {
    setIsSignup((current) => !current);
    setError("");
    setPassword("");
  };

  return (
    <div className="orbit-page-wrapper">
      {/* Interactive 3D background */}
      <DotGlobe />

      {/* Existing background effects */}
      <div className="ambient-glow glow-top-left" />
      <div className="ambient-glow glow-bottom-right" />
      <div className="orbit-grid" />

      <header className="orbit-navbar">
        <div className="nav-container">
          <a className="brand-group" href="/" aria-label="CollabEditor home">
            <span className="brand-logo-badge">⌘</span>
            <span className="brand-title">
              Collab<span>Editor</span>
            </span>
            <span className="status-pill hide-on-mobile">
              <i /> ALL SYSTEMS OPERATIONAL
            </span>
          </a>

          <nav className="desktop-links hide-on-mobile">
            <a href="#features">Features</a>
            <a href="#docs">Documentation</a>
            <a href="#pricing">Pricing</a>
            <a href="#status">Runtime Status</a>
          </nav>

          <button
            type="button"
            className="btn-secondary-sm"
            onClick={switchMode}
          >
            {isSignup ? "Already a member? Sign In" : "New here? Sign Up"}
          </button>
        </div>
      </header>

      <main className="main-content-layout">
        <section className="left-hero-section" id="features">
          <div className="version-tag">
            <i /> CollabEditor <b>·</b> Real-time Dev Studio
          </div>

          <h1 className="hero-heading">
            Code Together,
            <br />
            <span className="gradient-text">Beyond Limits.</span>
          </h1>

          <p className="hero-subtext">
            A collaborative coding platform with real-time synchronized rooms,
            contextual AI pair assistance, and developer-friendly tools built
            for teams that create together.
          </p>

          <div className="capability-grid">
            {features.map((feature) => (
              <div className="capability-card" key={feature.title}>
                <div className={`card-icon ${feature.color}`}>
                  {feature.icon}
                </div>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="workspace-meta">
            <span className="workspace-live">
              <i /> Workspace Live: <strong>collab-room-01</strong>
            </span>
            <span className="latency-badge">↔ Real-time sync</span>
          </div>

          <CodePreview />
        </section>

        <section className="right-auth-section">
          <div className="auth-card">
            <div className="auth-header">
              <div className="auth-logo-badge">⌘</div>
              <div className="auth-brand-name">
                Collab<span>Editor</span>
              </div>
              <h2>{isSignup ? "Create your account" : "Welcome Back"}</h2>
              <p>
                {isSignup
                  ? "Join your team and start building together"
                  : "Sign in to continue your coding journey"}
              </p>
            </div>

            <div className="oauth-button-group">
              <button
                type="button"
                className="oauth-btn"
                onClick={handleGoogleLogin}
              >
                <GoogleIcon />
                <span>Continue with Google</span>
                <small>SSO</small>
              </button>
            </div>

            <div className="divider-line">
              <span>OR CONTINUE WITH EMAIL</span>
            </div>

            <form onSubmit={handleSubmit} className="auth-form" noValidate>
              {isSignup && (
                <div className="input-group">
                  <div className="label-row">
                    <label htmlFor="username">Username</label>
                  </div>
                  <div className="input-field-wrapper">
                    <span className="field-icon">@</span>
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="your username"
                      autoComplete="username"
                      required
                      minLength={3}
                    />
                  </div>
                </div>
              )}

              <div className="input-group">
                <div className="label-row">
                  <label htmlFor="email">Developer Email</label>
                  {!isSignup && (
                    <span className="input-hint">Your account email</span>
                  )}
                </div>
                <div className="input-field-wrapper">
                  <span className="field-icon">✉</span>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.dev"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <div className="label-row">
                  <label htmlFor="password">Password</label>
                  {!isSignup && (
                    <a
                      href="#forgot"
                      className="forgot-link"
                      onClick={(e) => {
                        e.preventDefault();
                        setError(
                          "Please contact support to reset your password."
                        );
                      }}
                    >
                      Forgot password?
                    </a>
                  )}
                </div>

                <div className="input-field-wrapper">
                  <span className="field-icon">▣</span>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={
                      isSignup
                        ? "Create a strong password"
                        : "Enter your password"
                    }
                    autoComplete={
                      isSignup ? "new-password" : "current-password"
                    }
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password-btn"
                    onClick={() => setShowPassword((v) => !v)}
                    title={showPassword ? "Hide password" : "Show password"}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "Hide" : "◎"}
                  </button>
                </div>
              </div>

              {!isSignup && (
                <div className="checkbox-row">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span className="checkmark" />
                    <span className="checkbox-label">
                      Remember this device
                    </span>
                  </label>
                </div>
              )}

              {error && (
                <p role="alert" className="auth-error">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="btn-primary-gradient"
                disabled={loading}
              >
                <span>
                  {loading
                    ? isSignup
                      ? "Creating account..."
                      : "Signing in..."
                    : isSignup
                    ? "Create Account"
                    : "Sign In"}
                </span>
                <span className="btn-arrow">→</span>
              </button>
            </form>

            <div className="card-footer-signup">
              {isSignup
                ? "Already have an account? "
                : "Don't have an account? "}
              <button
                type="button"
                className="signup-link"
                onClick={switchMode}
              >
                {isSignup ? "Sign in →" : "Create an account →"}
              </button>
            </div>

            <div className="card-trust-footer">
              <span>▣ Secure Sign In</span>
              <span>·</span>
              <span> Real-time Collaboration</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="orbit-footer">
        <div className="footer-container">
          <p>
            © {new Date().getFullYear()} CollabEditor · Built for collaborative
            coding
          </p>
          <div className="compliance-badges">
            <span>▣ Secure Sessions</span>
            <span> Real-time Sync</span>
          </div>
        </div>
      </footer>
    </div>
  );
}