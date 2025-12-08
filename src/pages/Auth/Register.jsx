import React, { useState } from "react";
// import backgroundImg from "../../assets/backgroundImg.png";
import { Listbox } from "@headlessui/react";
import { industry } from "../../data/data";
import * as Icons from "lucide-react";
import { useCountryFlagAndNames } from "../../services/request";
import { Controller, useForm } from "react-hook-form";

const Register = () => {

  const { data: flagsAndName } = useCountryFlagAndNames();
  console.log(flagsAndName);
  const getHundred = flagsAndName.slice(0, 100);

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      industries: null,
      country: null,
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  console.log(getHundred);

  return (
    <div
      //   style={{
      //     backgroundImage: `url(${backgroundImg}), linear-gradient(to left, #326D2D, #1C421B)`,
      //   }}
      className="h-screen w-full bg-contain bg-no-repeat flex justify-center"
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-end"></div>
        <div className="flex items-center justify-center bg-gray-300">
          <div className="flex flex-col bg-red-100 gap-3 mx-5">
            <div className="flex flex-col gap-3">
              <img src="/nothing" alt="logo" />
              <div className="flex flex-col items-center justify-center gap-1">
                <h2 className="font-600 font-bold text-1xl md:text-2xl">
                  Register your account
                </h2>
                <p className="text-gray-600 text-sm">
                  Please enter your details.
                </p>
              </div>
            </div>

            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2 w-full"
            >
              <div className="flex items-center gap-2 w-full">
                <div className="px-2 py-1 border border-gray-400 flex flex-col gap-1 rounded-md w-full">
                  <label htmlFor="firstName" className="text-gray-600 text-sm">
                    First Name
                  </label>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: true,
                      maxLength: 50,
                    })}
                    placeholder="Text"
                    className=" placeholder:text-gray-500 text-sm text-gray-600 outline-0"
                  />
                </div>
                <div className="px-2 py-1 border border-gray-400 flex flex-col gap-1 rounded-md w-full">
                  <label htmlFor="lastName" className="text-gray-600 text-sm">
                    Last Name
                  </label>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: true,
                      maxLength: 50,
                    })}
                    placeholder="Text"
                    className=" placeholder:text-gray-500 text-sm text-gray-600 outline-0"
                  />
                </div>
              </div>
              <div className="px-2 py-1 border border-gray-400 flex flex-col gap-1 rounded-md w-full">
                <label htmlFor="emailAddress" className="text-gray-600 text-sm">
                  Email Address
                </label>
                <input
                  type="email"
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
                  placeholder="Text"
                  className=" placeholder:text-gray-500 text-sm text-gray-600 outline-0"
                />
              </div>
              {/* Select Industry */}
              <Controller
                name="industries"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <Listbox value={field.value} onChange={field.onChange}>
                      <Listbox.Button className=" outline-0 gap-2 md:w-lg w-full flex cursor-pointer border border-gray-300 shadow items-center justify-between text-gray-900 rounded-lg py-2.5 px-3.5">
                        <p className="flex flex-1 border-r border-gray-400 text-base text-gray-600">
                          {field.value ? field.value.title : "Select Industry"}
                        </p>
                        <div>
                          <Icons.ChevronDown
                            size={18}
                            className="text-gray-500"
                          />
                        </div>
                      </Listbox.Button>

                      <Listbox.Options className="absolute h-60 overflow-y-auto outline-0 left-0 top-full mt-2 w-full bg-white border-gray-200 rounded-lg z-50 shadow">
                        {industry.map((item, index) => {
                          const IconComponent = Icons[item.icon];
                          return (
                            <Listbox.Option
                              value={item}
                              key={index}
                              className="hover:bg-gray-100 py-2 px-3 cursor-pointer"
                            >
                              <div className="flex items-center gap-2 text-base text-gray-600">
                                {IconComponent && (
                                  <IconComponent
                                    size={18}
                                    className={
                                      item.color === "red"
                                        ? "text-red-800"
                                        : item.color === "blue"
                                        ? "text-blue-800"
                                        : item.color === "green"
                                        ? "text-green-800"
                                        : item.color === "gray"
                                        ? "text-gray-800"
                                        : ""
                                    }
                                  />
                                )}
                                <p>{item.title}</p>
                              </div>
                            </Listbox.Option>
                          );
                        })}
                      </Listbox.Options>
                    </Listbox>
                  </div>
                )}
              />
              {/* Select country */}
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <Listbox value={field.value} onChange={field.onChange}>
                      <Listbox.Button className=" outline-0 gap-2 md:w-lg w-full flex cursor-pointer border border-gray-300 shadow items-center justify-between text-gray-900 rounded-lg py-2.5 px-3.5">
                        <p className="flex flex-1 border-r border-gray-400 text-base text-gray-600">
                          {field.value
                            ? field.value?.name?.common
                            : "Select Country"}
                        </p>
                        <div>
                          <Icons.ChevronDown
                            size={18}
                            className="text-gray-500"
                          />
                        </div>
                      </Listbox.Button>

                      <Listbox.Options className="absolute h-60 overflow-y-auto outline-0 left-0 top-full mt-2 w-full bg-white border-gray-200 rounded-lg z-50 shadow">
                        {getHundred.map((item, index) => {
                          const IconComponent = Icons[item.icon];
                          return (
                            <Listbox.Option
                              value={item}
                              key={index}
                              className="hover:bg-gray-100 py-2 px-3 cursor-pointer"
                            >
                              <div className="flex items-center gap-3 text-base text-gray-600">
                                <div className="h-4 w-8">
                                  <img
                                    src={item.flags?.svg}
                                    alt={item.flags?.alt}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <p>{item.name?.common}</p>
                              </div>
                            </Listbox.Option>
                          );
                        })}
                      </Listbox.Options>
                    </Listbox>
                  </div>
                )}
              />
              {/* Password */}
              <div className="px-3 py-3 border border-gray-400 flex items-center gap-1 rounded-md w-full">
                <input
                  type="password"
                  placeholder="Password"
                  className=" placeholder:text-gray-500 text-sm text-gray-600 outline-0 flex-1"
                />
                <Icons.Eye size={20} className="text-gray-500 cursor-pointer" />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icons.CircleCheck size={14} className="text-green-900" />
                  <p className="text-xs text-gray-500">
                    Create a password (10+ characters, must include letters,{" "}
                    <br />
                    numbers, and a special character).
                  </p>
                </div>
                <p className="text-sm text-gray-600">
                  {" "}
                  Already have an account?{" "}
                  <span className="text-blue-500 cursor-pointer">Login</span>
                </p>
              </div>

              <button
                type="submit"
                className="bg-blue-500 py-3 rounded-md text-base font-500 font-medium text-white cursor-pointer"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
