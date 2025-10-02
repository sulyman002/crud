import React, { useState } from "react";
import MobileNav from "../components/MobileNav";
import useAppContext from "../context/useAppContext";
import { useQuery } from "@tanstack/react-query";

import { fetchUsers } from "../services/fetchUsers";
import MobileTableView from "../components/MobileTableView";
import AddNewUser from "../components/AddNewUser";

const UserManagement = () => {
  const {
    searchUser,
    setSearchUser,
    currentPage,
    setCurrentPage,
    rowsPerPage,
    setRowsPerPage,
    clickRow,
    setClickRow,
    addNewUser,
    setAddNewUser,
  } = useAppContext();
  const [openFilter, setOpenFilter] = useState(false);
  const [newUser, setNewUser] = useState(false);

  const handleClickRow = () => {
    setClickRow(!clickRow);
  };

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  console.log(data);

  return (
    <div className="">
      <div className=" flex flex-col  bg-[#F0F7FF]">
        <MobileNav />
        <div className="pt-[48px] hidden md:flex pb-[24px] px-[32px] flex items-center justify-between bg-white shadow-lg">
          <h2 className="text-[24px] font-semibold font-600 text-gray-700">
            User Management
          </h2>
          <div className="">
            <svg
              width="20"
              height="23"
              viewBox="0 0 20 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.73 20.5C11.5542 20.8031 11.3018 21.0547 10.9982 21.2295C10.6946 21.4044 10.3504 21.4965 10 21.4965C9.64962 21.4965 9.30539 21.4044 9.00177 21.2295C8.69816 21.0547 8.44581 20.8031 8.27 20.5M16 7.5C16 5.9087 15.3679 4.38258 14.2426 3.25736C13.1174 2.13214 11.5913 1.5 10 1.5C8.4087 1.5 6.88258 2.13214 5.75736 3.25736C4.63214 4.38258 4 5.9087 4 7.5C4 14.5 1 16.5 1 16.5H19C19 16.5 16 14.5 16 7.5Z"
                stroke="#575D72"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* Manage User */}
        <div className="flex  pl-[34px] pr-[40px] py-[24px] flex-col gap-[24px]">
          {/* Manage User */}
          <div className="w-full">
            <div className="flex md:items-center justify-between flex-col md:flex-row gap-[8px]  font-[Source Code Pro] ">
              <div className="flex items-start flex-col">
                <p className="text-gray-700 font-600 font-semibold text-[20px] ">
                  Manage User
                </p>
                <p className="text-[14px] ">
                  Administer and oversee user accounts and privileges within the
                  platform.
                </p>
              </div>

              <div className="relative flex flex-col md:w-auto w-full gap-4">
                <div
                  onClick={() => setNewUser(!newUser)}
                  className="relative bg-[#1F66B7] rounded-[8px] px-[18px] py-3 flex items-center justify-center gap-[12px] "
                >
                  <span className="font-500  text-[16px] leading-[150%] text-white">
                    New User
                  </span>
                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L13 1"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                {/* new user drop down */}
                {newUser && (
                  <div className=" md:absolute md:top-13 md:right-0 bg-white shadow gap-3 z-99 rounded-[8px] py-[12px] px-4 bg-blue-100 md:w-[164px] w-full rounded-[8px] flex flex-col ">
                    <div
                      onClick={() => {
                        setAddNewUser(!addNewUser);
                        setNewUser(false)
                      }}
                      className="flex items-center gap-[18px] justify-center cursor-pointer py-3 active:bg-gray-50"
                    >
                      <p className="text-gray-950 text-[14px] tracking-[5%] ">
                        Fill Manually
                      </p>
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.3335 2.50004C11.5086 2.32494 11.7165 2.18605 11.9452 2.09129C12.174 1.99653 12.4192 1.94775 12.6668 1.94775C12.9145 1.94775 13.1597 1.99653 13.3884 2.09129C13.6172 2.18605 13.8251 2.32494 14.0002 2.50004C14.1753 2.67513 14.3142 2.883 14.4089 3.11178C14.5037 3.34055 14.5524 3.58575 14.5524 3.83337C14.5524 4.08099 14.5037 4.32619 14.4089 4.55497C14.3142 4.78374 14.1753 4.99161 14.0002 5.16671L5.00016 14.1667L1.3335 15.1667L2.3335 11.5L11.3335 2.50004Z"
                          stroke="#575D72"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center gap-[18px] cursor-pointer justify-center py-3 active:bg-gray-50">
                      <p className="text-gray-950 text-[14px] tracking-[5%] ">
                        Import User
                      </p>
                      <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 9.5V12.1667C13 12.5203 12.8595 12.8594 12.6095 13.1095C12.3594 13.3595 12.0203 13.5 11.6667 13.5H2.33333C1.97971 13.5 1.64057 13.3595 1.39052 13.1095C1.14048 12.8594 1 12.5203 1 12.1667V9.5M3.66667 6.16667L7 9.5M7 9.5L10.3333 6.16667M7 9.5V1.5"
                          stroke="#575D72"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Filter & search input*/}
          <div className=" pt-[24px] ">
            <div className="flex items-center gap-[17px]">
              <input
                className="py-[12px] border border-gray-200 rounded-[8px] pl-[18px] pr-[72px] outline-none"
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)}
                type="text"
                placeholder="Search users..."
              />
              {/* filter button */}
              <div
                onClick={handleOpenFilter}
                className="relative flex items-center justify-center py-[12px] w-[48px] border border-gray-200 rounded-[8px] cursor-pointer "
              >
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 1H1L9 10.46V17L13 19V10.46L21 1Z"
                    stroke="#6C748B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                {openFilter && (
                  <div className="absolute top-15 right-0 bg-white rounded-[8px] shadow z-99 w-[233px] py-[20px] px-[14px] ">
                    {/* sort by */}
                    <div className="flex items-start flex-col gap-[8px] ">
                      <p className="text-[#6E6893] text-[14px] uppercase tracking-[5%] ">
                        Sort By:
                      </p>

                      <div className="flex items-center gap-[8px] w-full flex-col ">
                        <div className="w-full flex items-center justify-between h-[48px]">
                          <label
                            htmlFor="all"
                            className="text-[#24252D] text-[14px] tracking-[5%] "
                          >
                            All
                          </label>
                          <input
                            type="radio"
                            name="sort"
                            id="all"
                            className="size-5 border-[10px] border-[#0D1C2E]"
                          />
                        </div>
                        <div className="w-full flex items-center justify-between h-[48px]">
                          <label
                            htmlFor="all"
                            className="text-[#24252D] text-[14px] tracking-[5%] "
                          >
                            Active
                          </label>
                          <input
                            type="radio"
                            name="sort"
                            id="active"
                            className="size-5 border-[10px] border-[#0D1C2E]"
                          />
                        </div>
                        <div className="w-full flex items-center justify-between h-[48px]">
                          <label
                            htmlFor="all"
                            className="text-[#24252D] text-[14px] tracking-[5%] "
                          >
                            Inactive
                          </label>
                          <input
                            type="radio"
                            name="sort"
                            id="inactive"
                            className="size-5 border-[10px] border-[#0D1C2E]"
                          />
                        </div>
                        <div className="w-full flex items-center justify-between h-[48px]">
                          <label
                            htmlFor="all"
                            className="text-[#24252D] text-[14px] tracking-[5%] "
                          >
                            Archived
                          </label>
                          <input
                            type="radio"
                            name="sort"
                            id="inactive"
                            className="size-5 border-[10px] border-[#0D1C2E]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Permission */}
                    <div className="flex items-start flex-col gap-[8px] ">
                      <p className="text-[#6E6893] text-[14px] uppercase tracking-[5%] ">
                        Permissions:
                      </p>

                      <div className="flex items-center gap-[8px] w-full flex-col ">
                        <div className="w-full flex items-center justify-between h-[48px]">
                          <label
                            htmlFor="all"
                            className="text-[#24252D] text-[14px] tracking-[5%] "
                          >
                            All
                          </label>
                          <input
                            type="radio"
                            name="permissions"
                            id="all"
                            className="size-5 border-[10px] border-[#0D1C2E]"
                          />
                        </div>
                        <div className="w-full flex items-center justify-between h-[48px]">
                          <label
                            htmlFor="all"
                            className="text-[#24252D] text-[14px] tracking-[5%] "
                          >
                            Super Admin
                          </label>
                          <input
                            type="radio"
                            name="permissions"
                            id="superAdmin"
                            className="size-5 border-[10px] border-[#0D1C2E]"
                          />
                        </div>
                        <div className="w-full flex items-center justify-between h-[48px]">
                          <label
                            htmlFor="all"
                            className="text-[#24252D] text-[14px] tracking-[5%] "
                          >
                            Admin
                          </label>
                          <input
                            type="radio"
                            name="permissions"
                            id="admin"
                            className="size-5 border-[10px] border-[#0D1C2E]"
                          />
                        </div>
                        <div className="w-full flex items-center justify-between h-[48px]">
                          <label
                            htmlFor="all"
                            className="text-[#24252D] text-[14px] tracking-[5%] "
                          >
                            User
                          </label>
                          <input
                            type="radio"
                            name="permissions"
                            id="user"
                            className="size-5 border-[10px] border-[#0D1C2E]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* clear items */}
            {/* this will be display if user select something */}
          </div>
        </div>
      </div>
      {/* user management table here */}
      <div className="w-full h-full bg-white p-8 flex ">
        <div className="hidden md:flex h-[570px] overflow-y-auto rounded-[16px] w-full">
          <table className=" bg-[#DCEDFF] w-full ">
            {/* table head */}
            <thead className="sticky top-0 bg-[#DCEDFF] rounded-[16px] shadow-md z-10">
              <tr className="text-[14px] font-600 font-semibold ">
                <th className="w-14 px-2 py-3 text-left">
                  <input
                    type="checkbox"
                    name="selectAll"
                    id=""
                    className="w-[20px] h-[20px]"
                  />
                </th>
                <th className="min-w-[150px] max-w-[180px] px-4 py-3 text-left truncate">
                  Name/Email
                </th>
                <th className="min-w-[100px] px-4 py-3 text-left">
                  Department
                </th>
                <th className="min-w-[140px] px-4 py-3 text-left">
                  Account Created
                </th>
                <th className="min-w-[120px] px-4 py-3 text-left">Status</th>
                <th className="w-[50px] px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            {/* table body */}
            <tbody className="bg-white h-[640px] ">
              {data
                .slice(
                  (currentPage - 1) * rowsPerPage,
                  currentPage * rowsPerPage
                )
                .map((user, index) => (
                  <tr key={index} className="text-[14px] text-gray-900 ">
                    <td className="w-14 px-2 py-3 text-left">
                      <input
                        type="checkbox"
                        name="selectAll"
                        id=""
                        className="w-[20px] h-[20px]"
                      />
                    </td>
                    <td className="min-w-[150px] max-w-[180px] px-4 py-3 text-left truncate flex flex-col gap-1">
                      <p className="font-500 font-medium  ">{user.name}</p>
                      <p className="text-[#6E6893]">{user.email}</p>
                    </td>
                    <td className="min-w-[100px] px-4 py-3 text-left">
                      {user.department}
                    </td>
                    <td className="min-w-[140px] px-4 py-3 text-left">
                      {user.account_created}
                    </td>
                    <td
                      className={`min-w-[120px] px-4 py-3 text-left flex font-500 font-medium  `}
                    >
                      <div
                        className={`relative flex items-center gap-2 before:content-[''] before:h-[7px] before:w-[7px] before:rounded-full  ${
                          user.status === "Active"
                            ? "bg-green-100 py-[4px] px-[12px] rounded-full text-green-600 before:bg-green-600"
                            : "bg-[#F9EDC4] py-[4px] px-[12px] rounded-full text-[#D0AA25] before:bg-[#D0AA25]"
                        }`}
                      >
                        {user.status}
                      </div>
                    </td>
                    <td className="w-[50px] px-4 py-3 text-left">
                      <div className="flex items-center gap-[16px] py-[11px]">
                        <svg
                          width="16px"
                          height="16px"
                          viewBox="0 0 15 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.95872 12.284C2.99443 12.284 3.03015 12.2805 3.06586 12.2751L6.06943 11.7483C6.10515 11.7412 6.13908 11.7251 6.16408 11.6983L13.7337 4.12868C13.7503 4.11216 13.7634 4.09254 13.7724 4.07094C13.7813 4.04934 13.7859 4.02618 13.7859 4.00279C13.7859 3.9794 13.7813 3.95625 13.7724 3.93464C13.7634 3.91304 13.7503 3.89342 13.7337 3.8769L10.7659 0.907254C10.7319 0.873326 10.6873 0.855469 10.6391 0.855469C10.5909 0.855469 10.5462 0.873326 10.5123 0.907254L2.94265 8.4769C2.91586 8.50368 2.89979 8.53583 2.89265 8.57154L2.36586 11.5751C2.34849 11.6708 2.3547 11.7692 2.38395 11.862C2.41319 11.9547 2.4646 12.0389 2.53372 12.1073C2.65158 12.2215 2.79979 12.284 2.95872 12.284ZM4.16229 9.16975L10.6391 2.69475L11.948 4.00368L5.47122 10.4787L3.88372 10.759L4.16229 9.16975ZM14.0712 13.784H0.928362C0.612291 13.784 0.356934 14.0394 0.356934 14.3555V14.9983C0.356934 15.0769 0.421219 15.1412 0.499791 15.1412H14.4998C14.5784 15.1412 14.6426 15.0769 14.6426 14.9983V14.3555C14.6426 14.0394 14.3873 13.784 14.0712 13.784Z"
                            fill="#6C748B"
                          />
                        </svg>
                        <svg
                          width="15px"
                          height="16px"
                          viewBox="0 0 15 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.78544 2.14118H4.64258C4.72115 2.14118 4.78544 2.0769 4.78544 1.99833V2.14118H10.214V1.99833C10.214 2.0769 10.2783 2.14118 10.3569 2.14118H10.214V3.4269H11.4997V1.99833C11.4997 1.36797 10.9872 0.855469 10.3569 0.855469H4.64258C4.01222 0.855469 3.49972 1.36797 3.49972 1.99833V3.4269H4.78544V2.14118ZM13.7854 3.4269H1.21401C0.897935 3.4269 0.642578 3.68225 0.642578 3.99833V4.56975C0.642578 4.64833 0.706864 4.71261 0.785435 4.71261H1.86401L2.30508 14.0519C2.33365 14.6608 2.83722 15.1412 3.44615 15.1412H11.5533C12.164 15.1412 12.6658 14.6626 12.6944 14.0519L13.1354 4.71261H14.214C14.2926 4.71261 14.3569 4.64833 14.3569 4.56975V3.99833C14.3569 3.68225 14.1015 3.4269 13.7854 3.4269ZM11.4158 13.8555H3.58365L3.15151 4.71261H11.8479L11.4158 13.8555Z"
                            fill="#6C748B"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
            {/* table footer */}
            <tfoot className="sticky bottom-0 bg-[#DCEDFF] shadow-md z-10 ">
              <tr>
                <td
                  colSpan="6"
                  className="px-4 py-3 text-right text-[#6E6893] font-600 text-[12px] tracking-[5%] w-full"
                >
                  <div className="flex items-center justify-end gap-6 w-full pr-6">
                    <div className="relative">
                      <div
                        onClick={handleClickRow}
                        className=" flex items-center gap-2 "
                      >
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
                        <div className=" md:absolute bottom-14 md:right-0 bg-white shadow gap-3 z-99 rounded-[8px] py-[12px] px-4 bg-blue-100 md:w-[164px] w-full rounded-[8px] flex flex-col ">
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
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Mobile view */}
        <MobileTableView />
        <AddNewUser />
      </div>
    </div>
  );
};

export default UserManagement;
