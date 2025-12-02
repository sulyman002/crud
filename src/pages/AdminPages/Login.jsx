import React from "react";
import backgroundImg from "../../assets/backgroundImg.png";
import { Eye } from "lucide-react";
import { useForm } from "react-hook-form";

const Login = () => {
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
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="pt-[334px] flex flex-col gap-[10px] "
      >
        <p className="font-200 text-[24px] text-white ">
          Connect <span className="font-600 font-semibold ">{">"} T B S</span>
        </p>
        <div className="flex items-center gap-[10px] text-[16.78px]">
          <div className="">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required. ",
                validate: (value) => {
                  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  return (
                    pattern.test(value) ||
                    "Please enter a valid email address. "
                  );
                },
              })}
              className={` ${
                errors.email ? "border-red-500" : "border-gray-300"
              } px-[14px] py-[14px] outline-none text-black/50 w-[295px] rounded-l-[5px] bg-white`}
              required
            />
          </div>
          <div className="w-[295px] flex items-center justify-between bg-white px-[14px]">
            <input
              type="password"
              {...register("password", {
                required: "Password is required. ",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters. ",
                },
              })}
              placeholder="Password"
              className={`${
                errors.password ? "border-red-500" : "border-gray-300"
              } py-[14px]  outline-none "`}
              required
            />
            <Eye size={16} />
          </div>
          <div className="">
            <button
              type="submit"
              disabled={isSubmitting}
              className={` ${
                isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
              } bg-white px-[30px] py-[14px] rounded-r-[5px] text-[#226434] font-700 font-bold"`}
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
