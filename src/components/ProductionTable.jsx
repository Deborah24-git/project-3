function ProductionTable({ records, deleteRecord }) {
  return (
    <div style={{ padding: "20px" }}>
      <h3>📊 Shift Records</h3>

      <table border="1" width="100%" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Shift</th>
            <th>Operator</th>
            <th>Tons</th>
            <th>Equipment</th>
            <th>Status</th>
            <th>Incidents</th>
            <th>Notes</th>
            <th>Pushback</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {records.map((r, i) => (
            <tr key={i}>
              <td>{r.date}</td>
              <td>{r.shift}</td>
              <td>{r.operator}</td>
              <td>{r.tons}</td>
              <td>{r.equipment}</td>
              <td>{r.status}</td>
              <td>{r.safetyIncidents || "None"}</td>
              <td>{r.criticalNotes || "None"}</td>
              <td>{r.pushback}</td>
              <td>
                <button onClick={() => deleteRecord(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductionTable; 