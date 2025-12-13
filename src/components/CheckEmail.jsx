import { ArrowLeft, Mail } from "lucide-react";
import React from "react";
import useAuthContext from "../context/useAuthContext";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../assets/backgroundImg.png";
import ChangeLang from "./ChangeLang";

const CheckEmail = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  console.log(user?.email);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg}), linear-gradient(to left, #f5f5f5, #c1abd6)`,
      }}
      className="h-screen w-full bg-contain bg-no-repeat  relative"
    >
      <div className="flex flex-col gap-4">
        <div className="w-full flex justify-end pr-6 pt-6">
          <ChangeLang />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="h-0">
              <img src="" alt="logoss" className="w-full h-full" />
            </div>
            <div className="h-20 w-20 rounded-full flex items-center justify-center border-5 border-blue-200 bg-blue-300/70">
              <Mail size={36} className="text-blue-700" />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-600 font-bold text-center text-1xl md:text-2xl">
                Check your email
              </h2>
              <p className="text-gray-600 text-base text-center">
                We sent a verification link to <br />
                {user?.email}
              </p>
            </div>
            <div
              onClick={() => navigate("/auth/login")}
              className="cursor-pointer text-gray-600 flex items-center gap-2"
            >
              <ArrowLeft />
              <p className="">Back to Login Page</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
