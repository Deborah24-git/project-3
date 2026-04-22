import { useState } from "react";

function ProductionForm({ addRecord }) {
  const [form, setForm] = useState({
    date: "",
    shift: "",
    operator: "",
    tons: "",
    equipment: "",
    status: "Running",
    safetyIncidents: "",
    criticalNotes: "",
    pushback: "No"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecord(form);

    setForm({
      date: "",
      shift: "",
      operator: "",
      tons: "",
      equipment: "",
      status: "Running",
      safetyIncidents: "",
      criticalNotes: "",
      pushback: "No"
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>➕ Shift Handover Entry</h3>

      <form style={{ display: "grid", gap: "10px" }} onSubmit={handleSubmit}>
        <input name="date" type="date" value={form.date} onChange={handleChange} />
        <input name="shift" placeholder="Shift (Day/Night)" value={form.shift} onChange={handleChange} />
        <input name="operator" placeholder="Operator Name" value={form.operator} onChange={handleChange} />
        <input name="tons" type="number" placeholder="Tons Produced" value={form.tons} onChange={handleChange} />
        <input name="equipment" placeholder="Equipment Used" value={form.equipment} onChange={handleChange} />

        <select name="status" value={form.status} onChange={handleChange}>
          <option>Running</option>
          <option>Stopped</option>
          <option>Maintenance</option>
        </select>

        <input name="safetyIncidents" placeholder="Safety Incidents" value={form.safetyIncidents} onChange={handleChange} />
        <textarea name="criticalNotes" placeholder="Critical Notes" value={form.criticalNotes} onChange={handleChange} />

        <select name="pushback" value={form.pushback} onChange={handleChange}>
          <option>No</option>
          <option>Yes</option>
        </select>

        <button type="submit">Save Shift</button>
      </form>
    </div>
  );
}

export default ProductionForm;  