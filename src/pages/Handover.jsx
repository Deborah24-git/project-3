import { useState } from "react";

function Handover() {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({
    date: "",
    outgoingShift: "",
    incomingShift: "",
    notes: "",
    pushback: "No"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addHandover = (e) => {
    e.preventDefault();
    setRecords([...records, form]);

    setForm({
      date: "",
      outgoingShift: "",
      incomingShift: "",
      notes: "",
      pushback: "No"
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔁 Shift Handover</h2>

      <form onSubmit={addHandover} style={{ display: "grid", gap: "10px" }}>
        <input type="date" name="date" value={form.date} onChange={handleChange} />

        <input
          name="outgoingShift"
          placeholder="Outgoing Shift Notes"
          value={form.outgoingShift}
          onChange={handleChange}
        />

        <input
          name="incomingShift"
          placeholder="Incoming Shift Notes"
          value={form.incomingShift}
          onChange={handleChange}
        />

        <textarea
          name="notes"
          placeholder="Critical Notes"
          value={form.notes}
          onChange={handleChange}
        />

        <select name="pushback" value={form.pushback} onChange={handleChange}>
          <option>No</option>
          <option>Yes</option>
        </select>

        <button type="submit">Submit Handover</button>
      </form>

      <hr />

      <h3>Handover History</h3>

      {records.map((r, i) => (
        <div key={i} style={{ border: "1px solid #ccc", padding: "10px" }}>
          <p><b>Date:</b> {r.date}</p>
          <p><b>Outgoing:</b> {r.outgoingShift}</p>
          <p><b>Incoming:</b> {r.incomingShift}</p>
          <p><b>Notes:</b> {r.notes}</p>
          <p><b>Pushback:</b> {r.pushback}</p>
        </div>
      ))}
    </div>
  );
}

export default Handover;