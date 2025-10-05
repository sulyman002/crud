import { Routes, Route } from "react-router-dom";
import AdminLayout from "./Layouts/AdminLayout";
import UserManagement from "./pages/UserManagement";
import Dashboard from "./pages/Dashboard";
import Survey from "./pages/Survey";
import ProfileInfo from "./pages/ProfileInfo";
import AdminLogin1 from "./AdminPages/AdminLogin1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route index element={<UserManagement />} />
          <Route path="survey" element={<Survey />} />
          <Route path="profile-info" element={<ProfileInfo />} />
        </Route>
        <Route path="admin-1" element={<AdminLogin1 />} /> 
      </Routes>
    </>
  );
}

export default App;
