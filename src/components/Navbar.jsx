import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header
      style={{
        background: "#0f172a",
        color: "white",
        padding: "15px",
        display: "flex",
        gap: "15px"
      }}
    >
      <Link to="/" style={{ color: "white" }}>Home</Link>
      <Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link>
      <Link to="/reports" style={{ color: "white" }}>Reports</Link>
      <Link to="/safety" style={{ color: "white" }}>Safety</Link>
      <Link to="/equipment" style={{ color: "white" }}>Equipment</Link>
      <Link to="/handover" style={{ color: "white" }}>Handover</Link>
    </header>
  );
}

export default Navbar;