import React from "react";
import AdminTabs from "../components/AdminTabs";

import { Outlet } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

const AdminLayout = () => {
  // const navigate = useNavigate();
  return (
    <div>
      {/* Admin sections */}
      <div className="md:flex items-center ">
        {/* Admin Tabs */}
        <AdminTabs />
        <div className="md:w-9/11 w-full  h-screen bg-[#F5F5F5]"><Outlet /></div>
      </div>
      
    </div>
  );
};

export default AdminLayout;
