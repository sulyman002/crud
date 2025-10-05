import React from "react";
import backgroundImg from "../assets/backgroundImg.png";
import { useState } from "react";
import eye from "../assets/eye.svg"

const AdminLogin1 = () => {
const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div
  style={{ backgroundImage: `url(${backgroundImg}), linear-gradient(to left, #326D2D, #1C421B)` }}
  className="h-screen w-full bg-contain bg-no-repeat flex justify-center">

    <form onSubmit={handleSubmit} className="pt-[334px] flex flex-col gap-[10px] ">
        <p className="font-200 text-[24px] text-white ">Connect <span className="font-600 font-semibold ">{">"} T B S</span></p>
        <div className="flex items-center gap-[10px] text-[16.78px]">
            <div className="">
                <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="px-[14px] py-[14px] outline-none text-black/50 w-[295px] outline-none rounded-l-[5px] bg-white"
            required
          />
            </div>
            <div className="w-[295px] flex items-center justify-between bg-white px-[14px]">
              <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="py-[14px]  outline-none "
            required
          />
          <img src={eye} alt="eye" />
            </div>
            <div className=""><button
            type="submit"
            className="bg-white px-[30px] py-[14px] rounded-r-[5px] text-[#226434] font-700 font-bold"
          >
            Login
          </button></div>
        </div>
    </form>
  
    </div>


  );
};

export default AdminLogin1;
