import React, { useState } from "react";
import useAppContext from "../context/useAppContext";
import close from "../assets/close.svg";
import MobileNav from "./MobileNav";

const AddNewUser = () => {
  const { addNewUser, setAddNewUser } = useAppContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    phoneNumber: "",
    department: "",
    permission: "",
  });
  if (!addNewUser) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="fixed inset-0 w-full h-full bg-[#575D7299] z-50">
      <MobileNav />
      {addNewUser && (
        <div className="flex justify-end ">
          
          <div className="w-full lg:w-1/4 md:2/3 h-screen bg-white pt-20 px-8 flex flex-col gap-[45px] ">
            <div className="flex items-center justify-between">
              <p className="uppercase font-500 font-medium text-[20px] text-gray-600 leading-[150%] ">
                Add New User
              </p>
              <div
                onClick={() => setAddNewUser(false)}
                className="cursor-pointer"
              >
                <img src={close} alt="close-btn" />
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-[34px]">
              <input
                name="firstName"
                type="text"
                placeholder="First Name*"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="py-[16px] px-[20px] border border-[#6C748B] rounded-[8px] outline-none"
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name*"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="py-[16px] px-[20px] border border-[#6C748B] rounded-[8px] outline-none"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address*"
                required
                value={formData.email}
                onChange={handleChange}
                className="py-[16px] px-[20px] border border-[#6C748B] rounded-[8px] outline-none"
              />
              <input
                name="userName"
                type="text"
                placeholder="Username"
                value={formData.userName}
                onChange={handleChange}
                className="py-[16px] px-[20px] border border-[#6C748B] rounded-[8px] outline-none"
              />
              <input
                name="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="py-[16px] px-[20px] border border-[#6C748B] rounded-[8px] outline-none"
              />

              <select
                name="department"
                required
                value={formData.department}
                onChange={handleChange}
                className="py-[16px] px-[20px] border border-[#6C748B]/80 rounded-[8px] outline-none"
              >
                <option value="">Select Department</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
              </select>

              <select
                name="permission"
                required
                value={formData.permission}
                onChange={handleChange}
                className="py-[16px] px-[20px] border border-[#6C748B]/80 rounded-[8px] outline-none"
              >
                <option value="">Select Permission</option>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="viewer">Viewer</option>
              </select>

              <button
                type="submit"
                className="text-[16px] font-medium text-white rounded-[8px] bg-[#1F66B7] py-[16px]"
              >
                Add User
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewUser;
