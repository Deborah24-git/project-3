import { useMemo } from "react";

function Reports() {
  // Load records from localStorage
  const records = JSON.parse(localStorage.getItem("records") || "[]");

  // 📊 Calculations
  const summary = useMemo(() => {
    const totalTons = records.reduce(
      (sum, r) => sum + Number(r.tons || 0),
      0
    );

    const totalRecords = records.length;

    const safetyIncidents = records.filter(
      (r) => r.safetyIncidents && r.safetyIncidents !== ""
    ).length;

    const pushbacks = records.filter(
      (r) => r.pushback === "Yes"
    ).length;

    const running = records.filter((r) => r.status === "Running").length;
    const stopped = records.filter((r) => r.status === "Stopped").length;
    const maintenance = records.filter(
      (r) => r.status === "Maintenance"
    ).length;

    return {
      totalTons,
      totalRecords,
      safetyIncidents,
      pushbacks,
      running,
      stopped,
      maintenance
    };
  }, [records]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 Reports Dashboard</h2>

      {/* CARDS */}
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        <Card title="Total Production" value={`${summary.totalTons} tons`} />
        <Card title="Total Records" value={summary.totalRecords} />
        <Card title="Safety Incidents" value={summary.safetyIncidents} />
        <Card title="Pushbacks" value={summary.pushbacks} />
      </div>

      {/* STATUS BREAKDOWN */}
      <h3 style={{ marginTop: "20px" }}>⚙️ Equipment Status Overview</h3>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        <Card title="Running" value={summary.running} />
        <Card title="Stopped" value={summary.stopped} />
        <Card title="Maintenance" value={summary.maintenance} />
      </div>

      {/* TABLE */}
      <h3 style={{ marginTop: "20px" }}>📅 Daily Production Log</h3>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "10px"
        }}
      >
        <thead style={{ background: "#0f172a", color: "white" }}>
          <tr>
            <th>Date</th>
            <th>Shift</th>
            <th>Operator</th>
            <th>Tons</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {records.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No data available
              </td>
            </tr>
          ) : (
            records.map((r, i) => (
              <tr key={i} style={{ textAlign: "center" }}>
                <td>{r.date}</td>
                <td>{r.shift}</td>
                <td>{r.operator}</td>
                <td>{r.tons}</td>
                <td>{r.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

// 📦 Reusable card component
function Card({ title, value }) {
  return (
    <div
      style={{
        padding: "15px",
        borderRadius: "10px",
        background: "#e0f2fe",
        minWidth: "150px",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}
    >
      <h4>{title}</h4>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}

export default Reports;