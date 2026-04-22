import { useState } from "react";

function Safety() {
  const [incidents, setIncidents] = useState([]);
  const [form, setForm] = useState({
    date: "",
    shift: "",
    severity: "Low",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addIncident = (e) => {
    e.preventDefault();
    setIncidents([...incidents, form]);

    setForm({
      date: "",
      shift: "",
      severity: "Low",
      description: ""
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🚨 Safety Incidents</h2>

      <form onSubmit={addIncident} style={{ display: "grid", gap: "10px" }}>
        <input type="date" name="date" value={form.date} onChange={handleChange} />
        <input name="shift" placeholder="Shift" value={form.shift} onChange={handleChange} />

        <select name="severity" value={form.severity} onChange={handleChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          name="description"
          placeholder="Incident Description"
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit">Add Incident</button>
      </form>

      <hr />

      <h3>Incident List</h3>

      {incidents.map((i, index) => (
        <div key={index} style={{ padding: "10px", border: "1px solid #ccc" }}>
          <p><b>Date:</b> {i.date}</p>
          <p><b>Shift:</b> {i.shift}</p>
          <p><b>Severity:</b> {i.severity}</p>
          <p><b>Description:</b> {i.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Safety;