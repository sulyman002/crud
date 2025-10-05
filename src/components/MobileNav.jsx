import React, { useState } from "react";
import crudLogo from "../assets/crudLogo.png";
import useAppContext from "../context/useAppContext";
import { useNavigate } from "react-router-dom";
import closeIcon from "../assets/X.svg";
import dashboard from "../assets/dashboard.svg";
import userManagement from "../assets/userManagement.svg";
import survey from "../assets/survey.svg";
import mobileBell from "../assets/mobileBell.svg";
import bellIcon from "../assets/bell2.svg";

const MobileNav = () => {
  const { setChangeAdmin, changeAdmin, setAdminTitle, adminTitle } =
    useAppContext();
  const [openNav, setOpenNav] = useState(false);

  const navigate = useNavigate();

  const handleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className="flex items-center md:hidden justify-between px-[22px] py-4 bg-[#1F66B7] w-full">
      <div onClick={handleNav} className="cursor-pointer">
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.666504 1H11.3332M0.666504 5H11.3332M0.666504 9H11.3332"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      {openNav && (
        <div
          className="fixed inset-0 bg-black/40 z-50 md:hidden backdrop-blur-[2px]"
          onClick={handleNav}
        >
          <div
            className="fixed top-[55px] left-0 w-4/5 max-w-xs bg-[#373737] h-full p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              onClick={handleNav}
              className="flex items-center justify-end cursor-pointer"
            >
              <img src={closeIcon} alt="close-icon" />
            </div>
            <div className="flex items-start flex-col justify-between w-full h-full p-8">
              <div className="flex items-start gap-8 flex-col w-full">
                {/* site icon */}
                <div className="">
                  <img src={crudLogo} alt="crudLogo" />
                </div>
                {/* admin menu */}
                <div className="flex flex-col py-6 gap-[8px] w-full">
                  <button
                    name="dashboard"
                    onClick={(event) => {
                      handleNav();
                      setAdminTitle("Dashboard");
                      setChangeAdmin(event.target.name);
                      console.log(event.target);
                      navigate("dashboard");
                    }}
                    className={`flex items-center gap-3 cursor-pointer justify-start pl-6 py-4 rounded-[8px]  text-[16px]  ${
                      changeAdmin === "dashboard"
                        ? "bg-[#1F66B7]  text-white "
                        : "text-[#F5EEF9] "
                    }`}
                  >
                    <img
                      src={dashboard}
                      alt="dashboard"
                      className="h-[20px] w-[20px] "
                    />
                    Dashboard
                  </button>
                  <button
                    name="userManagement"
                    onClick={(event) => {
                      handleNav();
                      setAdminTitle("User Management");
                      setChangeAdmin(event.target.name);
                      console.log(event.target);
                      navigate("/");
                    }}
                    className={`flex items-center gap-3 cursor-pointer justify-start pl-6 py-4 rounded-[8px]  text-[16px]  ${
                      changeAdmin === "userManagement"
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
                    name="survey"
                    onClick={(event) => {
                      handleNav();
                      setAdminTitle("Survey");
                      setChangeAdmin(event.target.name);
                      console.log(event.target);
                      navigate("survey");
                    }}
                    className={`flex items-center gap-3 cursor-pointer justify-start pl-6 py-4 rounded-[8px]  text-[16px]  ${
                      changeAdmin === "survey"
                        ? "bg-[#1F66B7]  text-white font-medium font-500"
                        : "text-[#F5EEF9] "
                    }`}
                  >
                    <img
                      src={survey}
                      alt="survey"
                      className="h-[20px] w-[20px] "
                    />
                    Survey
                  </button>
                </div>
              </div>
              <div className=" flex items-center gap-[10px] w-full justify-between  ">
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
                  <img src={mobileBell} alt="mobile-bell icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="font-500 font-medium text-[16px] text-white ">
        {adminTitle}
      </div>


      {/* bell here */}
     <div
                   onClick={() => {
                     
                     setAdminTitle("Profile Info");
                     
                     navigate("profile-info");
                   }}
                   className=""
                 >
                   <img src={bellIcon} alt="" className="w-[24px] h-[24px]" />
                 </div>
    </div>
  );
};

export default MobileNav;
