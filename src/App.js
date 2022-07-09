import "./App.css";
import Topbar from "./components/Topbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MainDashboard from "./components/MainDashboard";

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main-dashboard" element={<MainDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
