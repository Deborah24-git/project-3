import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Equipment() {
  const navigate = useNavigate();
  const [equipment, setEquipment] = useState(() => {
    return JSON.parse(localStorage.getItem("equipment") || "[]");
  });
  const [form, setForm] = useState({
    name: "",
    status: "Running",
    downtime: ""
  });

  useEffect(() => {
    localStorage.setItem("equipment", JSON.stringify(equipment));
  }, [equipment]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addEquipment = (e) => {
    e.preventDefault();
    setEquipment([...equipment, { ...form, id: Date.now() }]);
    setForm({ name: "", status: "Running", downtime: "" });
  };

  const deleteEquipment = (id) => {
    setEquipment(equipment.filter((e) => e.id !== id));
  };

  const statusColor = (s) => {
    if (s === "Running") return "#059669";
    if (s === "Maintenance") return "#d97706";
    return "#dc2626";
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <button onClick={() => navigate("/dashboard")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "20px" }}>←</button>
        <h2 style={{ margin: 0 }}>Equipment Status</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div style={{ background: "white", borderRadius: "10px", padding: "20px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
          <h3 style={{ margin: "0 0 14px", fontSize: "16px" }}>Add Equipment</h3>
          <form onSubmit={addEquipment} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input name="name" placeholder="Equipment Name" value={form.name} onChange={handleChange} required style={{ padding: "10px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "14px" }} />
            <select name="status" value={form.status} onChange={handleChange} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "14px" }}>
              <option>Running</option>
              <option>Maintenance</option>
              <option>Broken</option>
            </select>
            <input name="downtime" placeholder="Downtime (hours)" value={form.downtime} onChange={handleChange} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "14px" }} />
            <button type="submit" style={{ padding: "10px", borderRadius: "6px", border: "none", background: "#2563eb", color: "white", fontSize: "14px", fontWeight: "bold", cursor: "pointer" }}>Add Equipment</button>
          </form>
        </div>

        <div>
          <h3 style={{ margin: "0 0 14px", fontSize: "16px" }}>Equipment List</h3>
          {equipment.length === 0 ? (
            <p style={{ color: "#94a3b8" }}>No equipment added</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {equipment.map((e) => (
                <div key={e.id} style={{ padding: "12px", borderRadius: "8px", background: "white", border: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <p style={{ margin: 0, fontWeight: "bold", fontSize: "14px" }}>{e.name}</p>
                    <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#64748b" }}>Downtime: {e.downtime || "N/A"}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ padding: "4px 10px", borderRadius: "12px", background: statusColor(e.status), color: "white", fontSize: "12px", fontWeight: "bold" }}>{e.status}</span>
                    <button onClick={() => deleteEquipment(e.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#94a3b8", fontSize: "16px" }}>✕</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Equipment;
