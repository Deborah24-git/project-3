import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Safety() {
  const navigate = useNavigate();
  const [incidents, setIncidents] = useState(() => {
    return JSON.parse(localStorage.getItem("incidents") || "[]");
  });
  const [form, setForm] = useState({
    date: "",
    shift: "",
    severity: "Low",
    description: ""
  });

  useEffect(() => {
    localStorage.setItem("incidents", JSON.stringify(incidents));
  }, [incidents]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addIncident = (e) => {
    e.preventDefault();
    setIncidents([...incidents, form]);
    setForm({ date: "", shift: "", severity: "Low", description: "" });
  };

  const deleteIncident = (index) => {
    setIncidents(incidents.filter((_, i) => i !== index));
  };

  const severityColor = (s) => {
    if (s === "High") return "#fef2f2";
    if (s === "Medium") return "#fffbeb";
    return "#f0fdf4";
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <button onClick={() => navigate("/dashboard")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "20px" }}>←</button>
        <h2 style={{ margin: 0 }}>Safety Incidents</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div style={{ background: "white", borderRadius: "10px", padding: "20px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
          <h3 style={{ margin: "0 0 14px", fontSize: "16px" }}>Report Incident</h3>
          <form onSubmit={addIncident} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input type="date" name="date" value={form.date} onChange={handleChange} required style={{ padding: "10px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "14px" }} />
            <input name="shift" placeholder="Shift (Day/Night)" value={form.shift} onChange={handleChange} required style={{ padding: "10px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "14px" }} />
            <select name="severity" value={form.severity} onChange={handleChange} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "14px" }}>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
            <input name="description" placeholder="Incident Description" value={form.description} onChange={handleChange} required style={{ padding: "10px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "14px" }} />
            <button type="submit" style={{ padding: "10px", borderRadius: "6px", border: "none", background: "#dc2626", color: "white", fontSize: "14px", fontWeight: "bold", cursor: "pointer" }}>Add Incident</button>
          </form>
        </div>

        <div>
          <h3 style={{ margin: "0 0 14px", fontSize: "16px" }}>Incident Log</h3>
          {incidents.length === 0 ? (
            <p style={{ color: "#94a3b8" }}>No incidents reported</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {incidents.map((i, idx) => (
                <div key={idx} style={{ padding: "12px", borderRadius: "8px", background: severityColor(i.severity), border: "1px solid #e2e8f0", position: "relative" }}>
                  <button onClick={() => deleteIncident(idx)} style={{ position: "absolute", top: "6px", right: "8px", background: "none", border: "none", cursor: "pointer", color: "#94a3b8", fontSize: "14px" }}>✕</button>
                  <p style={{ fontSize: "13px", margin: 0 }}><strong>{i.severity}</strong> — {i.description}</p>
                  <p style={{ fontSize: "12px", color: "#64748b", margin: "4px 0 0" }}>{i.date} · {i.shift}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Safety;
