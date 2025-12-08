import React from "react";
import backgroundImg from "../../assets/backgroundImg.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg}), linear-gradient(to left, #326D2D, #1C421B)`,
      }}
      className="h-screen w-full bg-contain bg-no-repeat flex justify-center"
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="pt-75 flex flex-col gap-4 mx-5 text-white w-full md:w-2/4">
        <p className="font-200 text-[24px]  ">Forgot Your Password</p>
        <p className="text-sm md:text-base">
          We will send a verification link to your email. Kindly check your
          inbox or spam. <br /> Can't remember your mail? Contact{" "}
          <a href="" className=" underline  ">
            Customer support
          </a>
        </p>

        <div className="flex items-center gap-2">
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required. ",
              validate: (value) => {
                const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return (
                  pattern.test(value) || "Please enter a valid email address. "
                );
              },
            })}
            className={` ${
              errors.email ? "border-red-500" : "border-gray-300"
            } px-3 py-2 border outline-none text-black/50 pl-3 w-full flex-1  rounded-l-md bg-white`}
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={` ${
              isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
            } bg-white px-4 md:px-7 py-2 rounded-r-[5px] text-[#003E9C] font-700 font-bold`}
          >
            {isSubmitting ? "Sending... Code" : "Send Code"}
          </button>
        </div>

        <div
          onClick={() => navigate("/auth/login")}
          className="cursor-pointer text-sm md:text-base "
        >
          <p className="font-400 text-white ">Back to login </p>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
