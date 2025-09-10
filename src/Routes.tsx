import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Homepage";
import Login from "./views/Login";
import ProtectedRoute from "./context/ProtectedRoute";
import WeatherDashboard from "./views/Dashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <WeatherDashboard />
          </ProtectedRoute>
        }
      />
      {/* Optional: redirect root to home */}
      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default AppRoutes;
