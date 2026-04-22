import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #0f172a, #2563eb, #06b6d4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        flexDirection: "column",
        padding: "20px"
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        ⛏ Mine Production Tracker
      </h1>

      <p style={{ fontSize: "18px", maxWidth: "500px" }}>
        Manage shift handovers, production data, equipment status, safety
        incidents, and critical notes in one system.
      </p>

      <button
        onClick={() => navigate("/dashboard")}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          fontSize: "16px",
          background: "white",
          color: "#0f172a",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Go to Dashboard →
      </button>
    </div>
  );
}

export default Home;