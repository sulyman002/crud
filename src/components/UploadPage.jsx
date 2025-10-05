import React, { useState } from "react";
import uploadIcon from "../assets/uploadIcon.svg";
import closeErrorProfile from "../assets/closeErrorProfile.svg";
import useAppContext from "../context/useAppContext";

const UploadPage = () => {
  const { setPreview, preview, setDisplayLogo, setOpenUpload } =
    useAppContext();
  const [error, setError] = useState("");
const [file, setFile] = useState(null)

  const handleChangeLogo = (event) => {
    const file = event.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }

    const validTypes = ["image/png", "image/jpeg"];
    if (!validTypes.includes(file.type)) {
      setError(
        "This file format is not supported, please delete and upload another file"
      );
      setFile(file);
      return;
    }

    setError("");
    setFile(file);
  };

  const handleSubmit = () => {
    setDisplayLogo(preview);
    setOpenUpload(false);
  };

  return (
    <div className="fixed inset-0 bg-[#575D7299] backdrop-blur-[2px] z-40 flex justify-center items-center ">
      {/* Container */}
      <div className="bg-white w-full md:w-[533px] p-[44px] flex items-center mx-[24px] md:mx-0 justify-center flex-col shadow-xl rounded-[8px] gap-[30px] ">
        <p className="text-gray-950 font-600 font-semibold text-[22px] text-center ">
          Upload
        </p>
        <div className="w-full h-[427px] flex items-center justify-center flex-col gap-[20px] border border-dashed rounded-[4px] border-purple-400 bg-[#F8F8FF] ">
          <img
            src={uploadIcon}
            alt="upload icon"
            className="w-[68.78px] h-[59.59px] "
          />
          <p className="font-600 font-semibold text-[16px] text-gray-950 text-center ">
            Drag & drop files or{" "}
            <label className="underline text-purple-600 cursor-pointer ">
              Browse
              <input
                type="file"
                id="changeLogo"
                className="hidden"
                accept="image/png, image/jpeg"
                onChange={handleChangeLogo}
              />
            </label>
          </p>
          <p className="text-center text-[12px] text-[#676767] ">
            Supported formats: JPEG, PNG
          </p>
          <p className="text-center text-[12px] text-[#676767] ">
            Max file size: 20 MB
          </p>
        </div>

        {error && (
          <div className="flex flex-col gap-[10px] w-full ">
            <p className="font-600 font-semibold text-[14px] text-gray-500 ">
              Uploading - 1 file
            </p>
            <div className="flex flex-col">
              <div className="border-[0.5px] border-[#DE3024] rounded-[4px] py-[9px] flex items-center justify-between px-[8px] ">
                <p className="text-purple-950 text-[12px] ">
                  {file.name}
                </p>
                <img
                  src={closeErrorProfile}
                  alt="close error"
                  className="w-[16px] h-[16px] "
                />
              </div>
              <p className="text-[10px] text-red-600 font-500 ">
                {error}
              </p>
            </div>
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={!preview || !!error}
          className={`uppercase font-700 font-bold text-[14px] text-white w-full rounded-[8px] py-[9px] px-[14px]   ${
            preview || error
              ? "bg-[#8F50A9] cursor-pointer"
              : "bg-[#8F50A9]/20 cursor-not-allowed"
          } `}
        >
          CHANGE LOGO
        </button>
      </div>
    </div>
  );
};

export default UploadPage;
