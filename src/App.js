import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./Signup/Signup";
import Login from "./components/Login";
import DashboardHome from "./components/DashboardPages/DashboardHome";
import EmailVerify from "./components/EmailVerify/EmailVerify";
import DashboardHomeDetail from "./components/DashboardPages/DashboardHomeDetail";
import ForgotPassword from "./ForgorPassword/ForgotPassword";
import DashboardToday from "./components/DashboardPages/DashboardToday";
import CreateDashBoardHome from "./components/DashboardPages/CreateDashBoardHome";
import { ProtectedRoutes, useAuth } from "./ProtectedRoutes";
import NotFound from "./components/NotFound";

function App() {
  return (
    <ProtectedRoutes>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard-home" element={<DashboardHome />} />
          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/dashboard-home/:_id"
            element={<DashboardHomeDetail />}
          />
          <Route path="/dbhome-creation" element={<CreateDashBoardHome />} />
          <Route path="/dashboard-today" element={<DashboardToday />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
    </ProtectedRoutes>
  );
}

export const RequireAuth = ({ children, path }) => {
  //const token = localStorage.getItem("token");
  //return token ? children : <Navigate replace to="\login" />;
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to={path} />;
  }
  return children;
};
export default App;
