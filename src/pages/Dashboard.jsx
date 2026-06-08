import { useMemo } from "react";

function Dashboard() {
  const records = JSON.parse(localStorage.getItem("records") || "[]");
  const equipmentList = JSON.parse(localStorage.getItem("equipment") || "[]");
  const incidents = JSON.parse(localStorage.getItem("incidents") || "[]");
  const handovers = JSON.parse(localStorage.getItem("handovers") || "[]");

  const kpi = useMemo(() => {
    const totalTons = records.reduce((s, r) => s + Number(r.tons || 0), 0);
    const running = equipmentList.filter((e) => e.status === "Running").length;
    const maintenance = equipmentList.filter((e) => e.status === "Maintenance").length;
    const broken = equipmentList.filter((e) => e.status === "Broken").length;
    const highIncidents = incidents.filter((i) => i.severity === "High").length;
    return { totalTons, totalRecords: records.length, running, maintenance, broken, highIncidents, handovers: handovers.length };
  }, [records, equipmentList, incidents, handovers]);

  const recentRecords = records.slice(-5).reverse();
  const recentIncidents = incidents.slice(-3).reverse();

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Dashboard</h2>
      <p style={{ color: "#64748b", marginBottom: "20px" }}>Overview of all mine operations</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "14px", marginBottom: "28px" }}>
        <KpiCard title="Total Production" value={`${kpi.totalTons} tons`} color="#2563eb" />
        <KpiCard title="Records" value={kpi.totalRecords} color="#059669" />
        <KpiCard title="Equipment Running" value={kpi.running} color="#16a34a" />
        <KpiCard title="In Maintenance" value={kpi.maintenance} color="#d97706" />
        <KpiCard title="Broken" value={kpi.broken} color="#dc2626" />
        <KpiCard title="High Incidents" value={kpi.highIncidents} color="#dc2626" />
        <KpiCard title="Handovers" value={kpi.handovers} color="#7c3aed" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div style={{ background: "white", borderRadius: "10px", padding: "16px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
          <h4 style={{ margin: "0 0 10px" }}>Recent Production</h4>
          {recentRecords.length === 0 ? (
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>No records yet</p>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ background: "#f1f5f9", textAlign: "left" }}>
                  <th style={{ padding: "6px" }}>Date</th>
                  <th style={{ padding: "6px" }}>Operator</th>
                  <th style={{ padding: "6px" }}>Tons</th>
                  <th style={{ padding: "6px" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentRecords.map((r, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "6px" }}>{r.date}</td>
                    <td style={{ padding: "6px" }}>{r.operator}</td>
                    <td style={{ padding: "6px" }}>{r.tons}</td>
                    <td style={{ padding: "6px" }}>{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div style={{ background: "white", borderRadius: "10px", padding: "16px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
          <h4 style={{ margin: "0 0 10px" }}>Recent Safety Incidents</h4>
          {recentIncidents.length === 0 ? (
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>No incidents reported</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {recentIncidents.map((i, idx) => (
                <div key={idx} style={{ padding: "8px", background: "#fef2f2", borderRadius: "6px", fontSize: "13px" }}>
                  <strong>{i.severity}</strong> — {i.description}
                  <span style={{ color: "#94a3b8", marginLeft: "8px" }}>({i.date})</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function KpiCard({ title, value, color }) {
  return (
    <div style={{ background: "white", borderRadius: "10px", padding: "16px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)", borderTop: `3px solid ${color}` }}>
      <p style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>{title}</p>
      <p style={{ fontSize: "24px", fontWeight: "bold", color: "#0f172a", margin: "6px 0 0" }}>{value}</p>
    </div>
  );
}

export default Dashboard;
