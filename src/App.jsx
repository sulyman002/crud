import { Routes, Route } from "react-router-dom";
import AdminLayout from "./Layouts/AdminLayout";
import UserManagement from "./pages/UserManagement";
import Dashboard from "./pages/Dashboard";
import Survey from "./pages/Survey";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="survey" element={<Survey />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
