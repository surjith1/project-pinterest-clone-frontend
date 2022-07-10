import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MainDashboard from "./components/MainDashboard";
import DashboardHome from "./components/DashboardPages/DashboardHome";

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main-dashboard" element={<MainDashboard />} />
        <Route path="/dashboard-home" element={<DashboardHome />} />
      </Routes>
    </div>
  );
}

export default App;
