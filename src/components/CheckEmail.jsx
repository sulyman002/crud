import { Mail } from "lucide-react";
import React from "react";
import useAuthContext from "../context/useAuthContext";


const CheckEmail = () => {

  const {user} = useAuthContext();
  console.log(user?.email);
  
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="h-30">
          <img src="" alt="logo" className="w-full h-full" />
        </div>
        <div className="h-40 w-40 rounded-full flex items-center justify-center border-4 border-blue-100 bg-blue-200">
          <Mail size={24} className="text-blue-700" />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-600 font-bold text-center text-1xl md:text-2xl">
            Check your email
          </h2>
          <p className="text-gray-600 text-base text-center">We sent a verification link to <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
