 function Navbar() {
  return (
    <header
      style={{
        background: "linear-gradient(90deg, #0f172a, #2563eb, #06b6d4)",
        color: "white",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
      }}
    >
      <h2 style={{ margin: 0 }}>⛏ Mine Production Tracker</h2>

      <nav style={{ display: "flex", gap: "15px" }}>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Dashboard
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Reports
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Settings
        </a>
      </nav>
    </header>
  );
}

export default Navbar;