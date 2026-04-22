import { useState } from "react";

function Equipment() {
  const [equipment, setEquipment] = useState([]);
  const [form, setForm] = useState({
    name: "",
    status: "Running",
    downtime: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addEquipment = (e) => {
    e.preventDefault();
    setEquipment([...equipment, form]);

    setForm({
      name: "",
      status: "Running",
      downtime: ""
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>⚙️ Equipment Status</h2>

      <form onSubmit={addEquipment} style={{ display: "grid", gap: "10px" }}>
        <input
          name="name"
          placeholder="Equipment Name"
          value={form.name}
          onChange={handleChange}
        />

        <select name="status" value={form.status} onChange={handleChange}>
          <option>Running</option>
          <option>Maintenance</option>
          <option>Broken</option>
        </select>

        <input
          name="downtime"
          placeholder="Downtime"
          value={form.downtime}
          onChange={handleChange}
        />

        <button type="submit">Add Equipment</button>
      </form>

      <hr />

      {equipment.map((e, i) => (
        <div key={i} style={{ border: "1px solid #ccc", padding: "10px" }}>
          <p><b>Name:</b> {e.name}</p>
          <p><b>Status:</b> {e.status}</p>
          <p><b>Downtime:</b> {e.downtime}</p>
        </div>
      ))}
    </div>
  );
}

export default Equipment;