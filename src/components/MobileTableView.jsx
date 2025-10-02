import React from "react";
import { useQuery } from "@tanstack/react-query";
import chevronUp from "../assets/chevronUp.svg";
import ChevronDown from "../assets/chevronDown.svg";
import { fetchUsers } from "../services/fetchUsers";
import { useState } from "react";
import useAppContext from "../context/useAppContext";

const MobileTableView = () => {
  const { data } = useQuery({ queryKey: ["users"], queryFn: fetchUsers });
  const [expandedRow, setExpandedRow] = useState(null);
  const {
    currentPage,
    setCurrentPage,
    rowsPerPage,
    setRowsPerPage,
    clickRow,
    setClickRow,
  } = useAppContext();

   const handleClickRow = () => {
    setClickRow(!clickRow);
  };
  return (
    <div className="md:hidden w-full">
      {data
        .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
        .map((user, index) => {
          const isOpen = expandedRow === index;
          return (
            <div
              key={index}
              className="bg-white border-y border-gray-200 p-[20px] px-[14px]"
            >
              <div className="flex flex-col gap-[25px] ">
                <div className="flex items-center justify-between">
                  {/* for chevron and select */}
                  <div className="flex items-center jus gap-[14px]">
                    <div
                      onClick={() => setExpandedRow(isOpen ? null : index)}
                      className="cursor-pointer"
                    >
                      {isOpen ? (
                        <div className="">
                          <img src={chevronUp} alt="" />
                        </div>
                      ) : (
                        <div className="">
                          <img src={ChevronDown} alt="" />
                        </div>
                      )}
                    </div>
                    {/* select */}

                    <div className="flex items-center gap-[8px] text-gray-600 text-[14px]">
                      <label htmlFor={user.name}>Select</label>
                      <input
                        type="checkbox"
                        name=""
                        id={user.name}
                        className="w-[18px] h-[18px]"
                      />
                    </div>
                  </div>

                  {/* edit and delete */}
                  <div className="flex items-center gap-[17px] text-[14px] underline cursor-pointer text-gray-600">
                    <p className="">Edit</p>
                    <p className="">Delete</p>
                  </div>
                </div>
                {/* name will be here  */}
                <div className="flex items-center justify-between ">
                  <p className="text-[14px] text-gray-600 ">Name</p>
                  <p className="text-purple-600 text-[14px] ">{user.name}</p>
                </div>
              </div>

              {isOpen && (
                <div className="flex mt-5 space-y-4 flex-col">
                  <div className="flex items-center justify-between text-[14px]">
                    <p className="text-gray-600 ">Email</p>
                    <p className="text-gray-900">{user.email}</p>
                  </div>
                  <div className="flex items-center justify-between text-[14px]">
                    <p className="text-gray-600 ">Department</p>
                    <p className="text-gray-900">{user.department}</p>
                  </div>
                  <div className="flex items-center justify-between text-[14px]">
                    <p className="text-gray-600 ">Account Created Date</p>
                    <p className="text-gray-900">{user.account_created}</p>
                  </div>
                  <div className="flex items-center justify-between text-[14px]">
                    <p className="text-gray-600 ">Permission</p>
                    <p className="text-gray-900">Admin</p>
                  </div>
                  <div className="flex items-center justify-between text-[14px]">
                    <p className="text-gray-600 ">Status</p>
                    <div
                      className={`relative flex items-center gap-2 before:content-[''] before:h-[7px] before:w-[7px] before:rounded-full  ${
                        user.status === "Active"
                          ? "bg-green-100 py-[4px] px-[12px] rounded-full text-green-600 before:bg-green-600"
                          : "bg-[#F9EDC4] py-[4px] px-[12px] rounded-full text-[#D0AA25] before:bg-[#D0AA25]"
                      }`}
                    >
                      {user.status}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      {/* Pagination for mobile */}
      <div className="flex items-center justify-end py-[20px] border-y bg-[#F4F2FF] border-gray-200 gap-6 w-full pr-6">
        <div className="relative">
          <div onClick={handleClickRow} className=" flex items-center gap-2 ">
            Rows per page: {rowsPerPage}
            <svg
              width="9"
              height="5"
              viewBox="0 0 9 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.20094 5L0.211853 0H8.19003L4.20094 5Z"
                fill="#6E6893"
              />
            </svg>
          </div>
          {/* Pagination */}
          {clickRow && (
            <div className=" absolute bottom-14 md:right-0 bg-white shadow gap-3 z-99 rounded-[8px] py-[12px] px-4 bg-blue-100 md:w-[164px] w-full rounded-[8px] flex flex-col ">
              <div
                onClick={() => {
                  setRowsPerPage(10);
                  setClickRow(false);
                }}
                className="flex items-center border-t border-gray-200 justify-center py-3 active:bg-gray-50"
              >
                10
              </div>
              <div
                onClick={() => {
                  setClickRow(false);
                  setRowsPerPage(20);
                }}
                className="flex items-center border-t border-gray-200 justify-center py-3 active:bg-gray-50"
              >
                20
              </div>
              <div
                onClick={() => {
                  setRowsPerPage(40);
                  setClickRow(false);
                }}
                className="flex items-center border-t border-gray-200 justify-center py-3 active:bg-gray-50"
              >
                40
              </div>
              <div
                onClick={() => {
                  setRowsPerPage(60);
                  setClickRow(false);
                }}
                className="flex items-center border-t border-gray-200 justify-center py-3 active:bg-gray-50"
              >
                60
              </div>
            </div>
          )}
        </div>

        <div className="">1 - 10 of 276</div>
        <div className="flex items-center gap-10">
          {/* decrement */}
          <div
            onClick={() => {
              setCurrentPage(Math.max(currentPage - 1, 1));
            }}
            className=""
          >
            <svg
              width="7px"
              height="10px"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.50752 1.10636C7.13422 0.51287 6.14195 -0.426818 5.51525 0.216126L0.919476 4.51891C0.658352 4.7662 0.658352 5.21131 0.919476 5.4586L5.51525 9.81084C6.14195 10.4043 7.13422 9.46464 6.50752 8.87115L2.43399 5.01348L6.50752 1.10636Z"
                fill="#6E6893"
              />
            </svg>
          </div>
          <div
            onClick={() => {
              setCurrentPage(Math.min(currentPage + 1, Math.ceil(data.length / rowsPerPage)));
            }}
            className=""
          >
            <svg
              width="7px"
              height="10px"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.770676 1.10636C0.143979 0.51287 1.13625 -0.426818 1.76295 0.216126L6.35872 4.51891C6.61985 4.7662 6.61985 5.21131 6.35872 5.4586L1.76295 9.81084C1.13625 10.4043 0.143979 9.46464 0.770676 8.87115L4.84421 5.01348L0.770676 1.10636Z"
                fill="#6E6893"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTableView;
