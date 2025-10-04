import React from "react";

import useAppContext from "../context/useAppContext.js";
import crudLogo from "../assets/crudLogo.png";
import { useNavigate } from "react-router-dom";
import dashboard from "../assets/dashboard.svg";
import userManagement from "../assets/userManagement.svg";
import survey from "../assets/survey.svg";
import profileArrow from "../assets/profileArrow.svg"

const AdminTabs = () => {
  const { changeAdmin, setChangeAdmin, setAdminTitle } = useAppContext();
  
  const navigate = useNavigate();
  return (
    <aside className=" p-8 bg-[#373737] hidden md:flex flex-col w-75  text-white h-screen ">
       {/* site icon */}
      <div
        onClick={() => navigate("/user-management")}
        className="flex items-center justify-center"
      >
        <img src={crudLogo} alt="crudLogo" />
      </div>

     

      {/* admin menu */}
      <nav className="flex-1 px-2 space-y-6 mt-8">
        <button
          name="dashboard"
          onClick={(event) => {
            setChangeAdmin(event.target.name);
            setAdminTitle("Dashboard")
            console.log(event.target);
            navigate("dashboard");
          }}
          className={`flex items-center gap-3 cursor-pointer justify-start pl-6 py-4 rounded-[8px]  text-[16px] w-full ${
            changeAdmin === "dashboard"
              ? "bg-[#1F66B7]  text-white "
              : "text-[#F5EEF9] "
          }`}
        >
          <img src={dashboard} alt="dashboard" className="h-[20px] w-[20px] " />
          Dashboard
        </button>
        <button
          name="allUsers"
          onClick={(event) => {
            setChangeAdmin(event.target.name);
            setAdminTitle("User Management")
            console.log(event.target);
            navigate("/");
          }}
          className={`flex items-center gap-3 cursor-pointer justify-start pl-6 py-4 rounded-[8px]  text-[16px] w-full ${
            changeAdmin === "allUsers"
              ? "bg-[#1F66B7]  text-white "
              : "text-[#F5EEF9] "
          }`}
        >
          <img
            src={userManagement}
            alt="user management"
            className="h-[20px] w-[20px] "
          />
          User Management
        </button>
        <button
          name="create-trip"
          onClick={(event) => {
            setChangeAdmin(event.target.name);
            setAdminTitle("Survey")
            console.log(event.target);
            navigate("survey");
          }}
          className={`flex items-center gap-3 cursor-pointer justify-start pl-6 py-4 rounded-[8px]  text-[16px] w-full ${
            changeAdmin === "create-trip"
              ? "bg-[#1F66B7]  text-white font-medium font-500"
              : "text-[#F5EEF9] "
          }`}
        >
          <img src={survey} alt="survey" className="h-[20px] w-[20px] " />
          Survey
        </button>
      </nav>

      <div className=" flex items-center gap-[10px] w-full justify-between">
        <div className="flex items-center gap-4">
          <div className="p-[10px] bg-[#FAF7FC] rounded-[4px] font-medium text-[#1F66B7] text-[16px] ">
            S.B
          </div>
          <div className="flex flex-col items-start gap-[4px] font-[Source Code Pro]">
            <p className="text-[16px]   ">Admin</p>
            <p className="">Sandra Bullocks</p>
          </div>
        </div>
        <div className="">
          <img src={profileArrow} alt="profile arrow" />
        </div>
      </div>
    </aside>
  );
};

export default AdminTabs;
