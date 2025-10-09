import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/login";
import About from "./pages/about";
import PlanningPage from "./pages/PlanningPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
       <Route path="/PlanningPage" element={<PlanningPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;


