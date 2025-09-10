import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Homepage";
import Login from "./views/Login";
import ProtectedRoute from "./context/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      {/* Optional: redirect root to home */}
      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default AppRoutes;
