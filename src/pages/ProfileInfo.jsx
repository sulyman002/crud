
import placeHolderImage from "../assets/placeHolderImg.svg";
import UploadPage from "../components/UploadPage.jsx";
import useAppContext from "../context/useAppContext.js";

const ProfileInfo = () => {
  const { openUpload, setOpenUpload, displayLogo } = useAppContext();
 

 
  return (
    <div className="pt-4 pb-8 w-full flex flex-col gap-[40px] px-[32px]">
      <div className="border-b border-gray-200 w-full flex items-center text-[14px] font-500 font-medium ">
        <div className="flex items-center gap-[16px] py-[8px] px-[16px]">
          <p className="">Company</p>
          <p className="">Personal Details</p>
          <p className="">Activity</p>
        </div>
      </div>
      <div className="">
        {/* Appearance */}
        <div className=" flex flex-col gap-[28px]">
          <div className="flex items-start flex-col gap-[4px] w-full ">
            <p className="font-600 font-semibold text-[20px] font-[Source Sans Pro] text-gray-700 ">
              Appearance
            </p>
            <p className="text-[14px] text-gray-500 font-[Open Sans] ">
              Basic appearance, like the logo and theme
            </p>
          </div>
          <div className="flex items-center gap-[28px]">
            <div className="border border-gray-300 rounded-[12px] py-[15px] px-[18px] flex flex-col items-start gap-[18px] w-full md:w-[205px] ">
              <div
              onClick={() => {
                setOpenUpload(!openUpload)
              }}
                htmlFor="changeLogo"
                className="rounded-[8px] cursor-pointer p-[8px] flex items-center justify-center bg-[#F6F7F9] "
              >
                Upload Logo
              </div>
              {openUpload && (
                <UploadPage />
              )}

              
              <div className="h-[100px] flex items-center justify-center">
                <img
                  src={displayLogo || placeHolderImage}
                  alt="preview-logo"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Business Information */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default ProfileInfo;
