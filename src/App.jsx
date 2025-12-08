import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./Layouts/AdminLayout";
import UserManagement from "./pages/UserManagement";
import Dashboard from "./pages/Dashboard";
import Survey from "./pages/Survey";
import ProfileInfo from "./pages/ProfileInfo";
import { Toaster } from "sonner";
import Login from "./pages/Auth/Login";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import Register from "./pages/Auth/Register";
import RouterTracker from "./components/RouterTracker";
import PublicRoute from "./router/PublicRoute";
import ProtectedRoute from "./router/ProtectedRoute";

function App() {
  return (
    <>
      <Toaster />
      <RouterTracker />
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
        <Route path="auth">
          <Route index element={<Navigate to="login" replace />} />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route path="forget-password" element={<ForgetPassword />} />
        </Route>

        <Route
          path="en"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="survey" element={<Survey />} />
          <Route path="profile-info" element={<ProfileInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
