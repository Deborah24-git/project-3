import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Safety from "./pages/Safety";
import Equipment from "./pages/Equipment";
import Handover from "./pages/Handover";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/handover" element={<Handover />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;