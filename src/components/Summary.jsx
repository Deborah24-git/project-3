function Summary({ records }) {
  const totalTons = records.reduce((sum, r) => sum + Number(r.tons || 0), 0);

  const incidents = records.filter(r => r.safetyIncidents && r.safetyIncidents !== "").length;

  const pushbacks = records.filter(r => r.pushback === "Yes").length;

  return (
    <div style={{ padding: "20px", background: "#e0f2fe", margin: "10px" }}>
      <h3>📈 Shift Overview</h3>
      <p>Total Records: {records.length}</p>
      <p>Total Production: {totalTons} tons</p>
      <p>Safety Incidents: {incidents}</p>
      <p>Pushbacks: {pushbacks}</p>
    </div>
  );
}

export default Summary;