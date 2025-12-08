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

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="auth">
          <Route index element={<Navigate to="login" replace />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forget-password" element={<ForgetPassword />} />
        </Route>

        <Route path="/" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route index element={<UserManagement />} />
          <Route path="survey" element={<Survey />} />
          <Route path="profile-info" element={<ProfileInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
