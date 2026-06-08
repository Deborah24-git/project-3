import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Handover() {
  const navigate = useNavigate();
  const [records, setRecords] = useState(() => {
    return JSON.parse(localStorage.getItem("handovers") || "[]");
  });
  const [form, setForm] = useState({
    date: "",
    outgoingShift: "",
    incomingShift: "",
    notes: "",
    pushback: "No"
  });

  useEffect(() => {
    localStorage.setItem("handovers", JSON.stringify(records));
  }, [records]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addHandover = (e) => {
    e.preventDefault();
    setRecords([...records, { ...form, id: Date.now() }]);
    setForm({ date: "", outgoingShift: "", incomingShift: "", notes: "", pushback: "No" });
  };

  const deleteHandover = (id) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <button onClick={() => navigate("/dashboard")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "20px" }}>←</button>
        <h2 style={{ margin: 0 }}>Shift Handover</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div style={{ background: "white", borderRadius: "10px", padding: "20px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
          <h3 style={{ margin: "0 0 14px", fontSize: "16px" }}>New Handover</h3>
          <form onSubmit={addHandover} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input type="date" name="date" value={form.date} onChange={handleChange} required style={{ padding: "10px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "14px" }} />
            <input name="outgoingShift" placeholder="Outgoing Shift Operator" value={form.outgoingShift} onChange={handleChange} required style={{ padding: "10px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "14px" }} />
            <input name="incomingShift" placeholder="Incoming Shift Operator" value={form.incomingShift} onChange={handleChange} required style={{ padding: "10px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "14px" }} />
            <textarea name="notes" placeholder="Critical Notes" value={form.notes} onChange={handleChange} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "14px", minHeight: "60px" }} />
            <select name="pushback" value={form.pushback} onChange={handleChange} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "14px" }}>
              <option>No</option>
              <option>Yes</option>
            </select>
            <button type="submit" style={{ padding: "10px", borderRadius: "6px", border: "none", background: "#7c3aed", color: "white", fontSize: "14px", fontWeight: "bold", cursor: "pointer" }}>Submit Handover</button>
          </form>
        </div>

        <div>
          <h3 style={{ margin: "0 0 14px", fontSize: "16px" }}>Handover History</h3>
          {records.length === 0 ? (
            <p style={{ color: "#94a3b8" }}>No handovers recorded</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {records.map((r) => (
                <div key={r.id} style={{ padding: "12px", borderRadius: "8px", background: "white", border: "1px solid #e2e8f0", position: "relative" }}>
                  <button onClick={() => deleteHandover(r.id)} style={{ position: "absolute", top: "6px", right: "8px", background: "none", border: "none", cursor: "pointer", color: "#94a3b8", fontSize: "14px" }}>✕</button>
                  <p style={{ margin: 0, fontSize: "13px" }}><strong>Out:</strong> {r.outgoingShift} → <strong>In:</strong> {r.incomingShift}</p>
                  <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#64748b" }}>{r.date} {r.pushback === "Yes" ? "· Pushback" : ""}</p>
                  {r.notes && <p style={{ margin: "4px 0 0", fontSize: "12px", fontStyle: "italic" }}>{r.notes}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Handover;
