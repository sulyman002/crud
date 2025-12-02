import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./Layouts/AdminLayout";
import UserManagement from "./pages/UserManagement";
import Dashboard from "./pages/Dashboard";
import Survey from "./pages/Survey";
import ProfileInfo from "./pages/ProfileInfo";
import { Toaster } from "sonner";
import Login from "./pages/AdminPages/Login";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="auth">
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<Login />} />
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
