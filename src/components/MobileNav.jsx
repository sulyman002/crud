import React, { useState } from "react";
import crudLogo from "../assets/crudLogo.png";
import useAppContext from "../context/useAppContext";
import { useNavigate } from "react-router-dom";
import closeIcon from "../assets/X.svg";

const MobileNav = () => {
  const { setChangeAdmin, changeAdmin } = useAppContext();
  const [openNav, setOpenNav] = useState(false);
  const [adminTitle, setAdminTitle] = useState("User Management");

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
            <div onClick={handleNav} className="flex items-center justify-end cursor-pointer">
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
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.9285 -0.00878906H1.14279C0.946359 -0.00878906 0.785645 0.151925 0.785645 0.348354V7.13407C0.785645 7.3305 0.946359 7.49121 1.14279 7.49121H7.9285C8.12493 7.49121 8.28565 7.3305 8.28565 7.13407V0.348354C8.28565 0.151925 8.12493 -0.00878906 7.9285 -0.00878906ZM6.76779 5.97335H2.3035V1.50907H6.76779V5.97335ZM16.8571 -0.00878906H10.0714C9.87493 -0.00878906 9.71422 0.151925 9.71422 0.348354V7.13407C9.71422 7.3305 9.87493 7.49121 10.0714 7.49121H16.8571C17.0535 7.49121 17.2142 7.3305 17.2142 7.13407V0.348354C17.2142 0.151925 17.0535 -0.00878906 16.8571 -0.00878906ZM15.6964 5.97335H11.2321V1.50907H15.6964V5.97335ZM7.9285 8.91978H1.14279C0.946359 8.91978 0.785645 9.0805 0.785645 9.27693V16.0626C0.785645 16.2591 0.946359 16.4198 1.14279 16.4198H7.9285C8.12493 16.4198 8.28565 16.2591 8.28565 16.0626V9.27693C8.28565 9.0805 8.12493 8.91978 7.9285 8.91978ZM6.76779 14.9019H2.3035V10.4376H6.76779V14.9019ZM16.8571 8.91978H10.0714C9.87493 8.91978 9.71422 9.0805 9.71422 9.27693V16.0626C9.71422 16.2591 9.87493 16.4198 10.0714 16.4198H16.8571C17.0535 16.4198 17.2142 16.2591 17.2142 16.0626V9.27693C17.2142 9.0805 17.0535 8.91978 16.8571 8.91978ZM15.6964 14.9019H11.2321V10.4376H15.6964V14.9019Z"
                        fill="#F5EEF9"
                      />
                    </svg>
                    Dashboard
                  </button>
                  <button
                    name="userManagement"
                    onClick={(event) => {
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
                    <svg
                      width="16px"
                      height="18px"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.6668 16.7041V15.0374C14.6668 14.1534 14.3156 13.3055 13.6905 12.6804C13.0654 12.0553 12.2176 11.7041 11.3335 11.7041H4.66683C3.78277 11.7041 2.93493 12.0553 2.30981 12.6804C1.68469 13.3055 1.3335 14.1534 1.3335 15.0374V16.7041M11.3335 5.03743C11.3335 6.87838 9.84111 8.37077 8.00016 8.37077C6.15921 8.37077 4.66683 6.87838 4.66683 5.03743C4.66683 3.19649 6.15921 1.7041 8.00016 1.7041C9.84111 1.7041 11.3335 3.19649 11.3335 5.03743Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    User Management
                  </button>
                  <button
                    name="survey"
                    onClick={(event) => {
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
                    <svg
                      width="16px"
                      height="19px"
                      viewBox="0 0 16 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.66683 0.871094H3.00016C2.55814 0.871094 2.13421 1.04669 1.82165 1.35925C1.50909 1.67181 1.3335 2.09573 1.3335 2.53776V15.8711C1.3335 16.3131 1.50909 16.737 1.82165 17.0496C2.13421 17.3622 2.55814 17.5378 3.00016 17.5378H13.0002C13.4422 17.5378 13.8661 17.3622 14.1787 17.0496C14.4912 16.737 14.6668 16.3131 14.6668 15.8711V5.87109M9.66683 0.871094L14.6668 5.87109M9.66683 0.871094V5.87109H14.6668M11.3335 10.0378H4.66683M11.3335 13.3711H4.66683M6.3335 6.70443H4.66683"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
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
                  <svg
                    width="9"
                    height="15"
                    viewBox="0 0 9 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 13.2041L7.5 7.2041L1.5 1.2041"
                      stroke="#FAF7FC"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="font-500 font-medium text-[16px] text-white ">
        {adminTitle}
      </div>
      <div className="">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.26855 9.7501C5.2673 8.86096 5.44197 7.98035 5.78251 7.15901C6.12305 6.33766 6.62272 5.5918 7.25275 4.96438C7.88277 4.33697 8.6307 3.84041 9.45346 3.50329C10.2762 3.16617 11.1575 2.99516 12.0467 3.0001C15.7592 3.02823 18.7311 6.1126 18.7311 9.83448V10.5001C18.7311 13.8564 19.4342 15.8064 20.0529 16.8751C20.1186 16.9889 20.1533 17.118 20.1534 17.2494C20.1535 17.3809 20.1191 17.51 20.0536 17.624C19.9881 17.7379 19.8938 17.8326 19.7801 17.8986C19.6665 17.9647 19.5375 17.9996 19.4061 18.0001H4.59355C4.46212 17.9996 4.33312 17.9647 4.21948 17.8986C4.10583 17.8326 4.01153 17.7379 3.94601 17.624C3.8805 17.51 3.84608 17.3809 3.84619 17.2494C3.84631 17.118 3.88096 16.9889 3.94667 16.8751C4.56542 15.8064 5.26855 13.8564 5.26855 10.5001V9.7501Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default MobileNav;
