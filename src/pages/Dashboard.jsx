import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductionForm from "../components/ProductionForm";
import ProductionTable from "../components/ProductionTable";
import Summary from "../components/Summary";

function Dashboard() {
  // ✅ Load saved data properly (no errors)
  const [records, setRecords] = useState(() => {
    return JSON.parse(localStorage.getItem("records") || "[]");
  });

  // ✅ Save data whenever it changes
  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  // ✅ Add new record
  const addRecord = (data) => {
    setRecords([...records, data]);
  };

  // ✅ Delete record
  const deleteRecord = (index) => {
    const updated = records.filter((_, i) => i !== index);
    setRecords(updated);
  };

  return (
    <div>
      <Navbar />

      <h2 style={{ textAlign: "center" }}>
        Mine Production Dashboard
      </h2>

      {/* Summary */}
      <Summary records={records} />

      {/* Form */}
      <ProductionForm addRecord={addRecord} />

      {/* Table */}
      <ProductionTable
        records={records}
        deleteRecord={deleteRecord}
      />
    </div>
  );
}

export default Dashboard;