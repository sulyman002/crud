import React, { useState } from "react";
import useAppContext from "../context/useAppContext";
import close from "../assets/close.svg";
import MobileNav from "./MobileNav";
import errorIcon from "../assets/errorIcon.svg";
import errorClose from "../assets/errorClose.svg";
import successIcon from "../assets/successIcon.svg";
import plusIcon from "../assets/plusIcon.svg";

const AddNewUser = () => {
  const { setAddNewUser, formData, setFormData, error, setError } =
    useAppContext();

  const [successfullyAdded, setSuccessfullyAdded] = useState(false);

  // if (!addNewUser) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleError = () => {
    if (
      formData.firstName.trim() === "" ||
      formData.lastName.trim() === "" ||
      formData.email.trim() === "" ||
      formData.department.trim() === "" ||
      formData.permission.trim() === ""
    ) {
      setError(
        "Please fill in all required fields. Double-check and try again."
      );
      return true;
    }
    {
      return false;
    }
  };

  const handleCloseError = () => {
    setError(!error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (handleError()) return;
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      phoneNumber: "",
      department: "",
      permission: "",
    });
    setError(null);
    setSuccessfullyAdded(true);
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-[#575D7299] z-50">
      <MobileNav />

      <div className="px-8 flex md:hidden items-center gap-[2px] py-[14px] bg-[#FAF7FC] ">
        <p className="leading-[20px] text-[#89939E] ">User Management/</p>
        <p className="leading-[20px] text-[#8F50A9] ">Add New User</p>
      </div>
      {successfullyAdded ? (
        <div className="flex justify-end ">
          <div className="w-full lg:w-1/4 md:2/3 h-screen px-6 bg-white">
            <div className="mt-30 flex flex-col items-center gap-[32px] bg-white rounded-[12px]">
              <div className="flex items-center gap-[20px] flex-col w-full ">
                <div className="flex items-center justify-center">
                  <img src={successIcon} alt="success icon" />
                </div>
                <div className="flex flex-col items-start w-full">
                  <h3 className="text-center font-500 text-[18px] text-gray-900 ">
                    User Added Successfully!
                  </h3>
                  <div className="flex flex-col gap-[4px] ">
                    <p className="py-[16px] text-gray-500 text-[16px] ">
                      Full Name:{" "}
                      <span className="text-gray-900">Sandra Bullocks</span>
                    </p>

                    <p className="py-[16px] text-gray-500 text-[16px] ">
                      Email Address: <br />
                      <span className="text-gray-900">
                        sandra.bullocks@novathealth.com
                      </span>
                    </p>
                    <div className="flex flex-col gap-[4px]">
                      <p className="py-[16px] text-gray-500 text-[16px] ">
                        Permission: <span className="text-gray-900">User</span>
                      </p>
                    </div>
                  </div>

                  <a href="" className="underline purple-700 text-[16px] ">
                    Edit
                  </a>
                </div>
              </div>
              <div className="w-full flex flex-col gap-[12px] ">
                <button className="rounded-[8px] bg-[#713C84] text-white font-500 text-[16px] py-[10px] ">
                  Finish
                </button>
                <button className="rounded-[8px] border border-gray-300 text-white font-500 text-[16px] py-[10px] flex items-center justify-center gap-[8px] ">
                  <img src={plusIcon} alt="plus icon" />{" "}
                  <span className="text-[16px] font-500 text-gray-700 ">
                    Add more users
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-end ">
          <div
            className={`w-full lg:w-1/4 md:2/3 h-screen bg-white  ${
              error ? "pt-10" : "pt-20"
            }  flex flex-col gap-[30px] `}
          >
            {error && (
              <div className="flex items-start justify-between py-[12px] md:mx-[20px] px-[20px] bg-red-50">
                <div className="flex items-center gap-[8px] pr-10">
                  <div
                    onClick={handleCloseError}
                    className="bg-red-100 rounded-[8px] py-3 px-4 flex items-center justify-center"
                  >
                    <img
                      src={errorIcon}
                      alt="error-icon"
                      className=" size-8 "
                    />
                  </div>
                  <p className="flex flex-start text-start text-[14px] font-400 text-red-600 ">
                    {error}
                  </p>
                </div>
                <img src={errorClose} alt="error-close" />
              </div>
            )}
            <div className="px-8 flex flex-col gap-[45px] ">
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
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-[34px]"
              >
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name*"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`py-[16px] px-[20px] border border-[#6C748B] rounded-[8px] outline-none ${
                    error ? "border-red-600" : ""
                  }`}
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name*"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`py-[16px] px-[20px] border border-[#6C748B] rounded-[8px] outline-none ${
                    error ? "border-red-600" : ""
                  }`}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`py-[16px] px-[20px] border border-[#6C748B] rounded-[8px] outline-none ${
                    error ? "border-red-600" : ""
                  }`}
                />
                <input
                  name="userName"
                  type="text"
                  placeholder="Username"
                  value={formData.userName}
                  onChange={handleChange}
                  className={`py-[16px] px-[20px] border border-[#6C748B] rounded-[8px] outline-none ${
                    error ? "border-red-600" : ""
                  }`}
                />
                <input
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`py-[16px] px-[20px] border border-[#6C748B] rounded-[8px] outline-none ${
                    error ? "border-red-600" : ""
                  }`}
                />

                <select
                  name="department"
                  required
                  value={formData.department}
                  onChange={handleChange}
                  className={`py-[16px] px-[20px] border border-[#6C748B] rounded-[8px] outline-none ${
                    error ? "border-red-600" : ""
                  }`}
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
                  className={`py-[16px] px-[20px] border border-[#6C748B] rounded-[8px] outline-none ${
                    error ? "border-red-600" : ""
                  }`}
                >
                  <option value="">Select Permission</option>
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                  <option value="viewer">Viewer</option>
                </select>

                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="text-[16px] cursor-pointer font-medium text-white rounded-[8px] bg-[#1F66B7] py-[16px]"
                >
                  Add User
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewUser;
