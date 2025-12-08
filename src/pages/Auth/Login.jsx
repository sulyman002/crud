import React from "react";
import backgroundImg from "../../assets/backgroundImg.png";
import { Eye } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = async (data) => {

    await createUserWithEmailAndPassword(auth, data?.email, data?.password)
    console.log(data);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg}), linear-gradient(to left, #326D2D, #1C421B)`,
      }}
      className="h-screen w-full bg-contain bg-no-repeat flex justify-center"
    >
      <div className=" ">
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="pt-75 flex flex-col gap-[10px] "
        >
          <p className="font-200 text-[24px] text-white ">
            Connect <span className="font-600 font-semibold ">{">"} T B S</span>
          </p>
          <div className="flex items-center flex-col md:flex-row gap-[10px] text-[16.78px]">
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
              } px-3 py-3 border outline-none text-black/50 w-full md:w-[300px]  md:rounded-l-md md:rounded-r-[0px] rounded-md bg-white`}
              required
            />

            <div
              className={`${
                errors.password ? "border-red-500" : "border-gray-300"
              } w-74 flex items-center justify-between bg-white px-[14px]`}
            >
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
                className="py-3  outline-none"
                required
              />
              <Eye size={22} className="text-gray-500" />
            </div>
            <div className="">
              <button
                type="submit"
                disabled={isSubmitting}
                className={` ${
                  isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                } bg-white px-7 py-3 rounded-r-[5px] text-[#226434] font-900 font-bold`}
              >
                {isSubmitting ? "Logging In..." : "Log In"}
              </button>
            </div>
          </div>

          <div
            onClick={() => navigate("/auth/forget-password")}
            className="cursor-pointer mt-2 "
          >
            <p className="font-400 text-white ">Forget Password? </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
