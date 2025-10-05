import placeHolderImage from "../assets/placeHolderImg.svg";
import UploadPage from "../components/UploadPage.jsx";
import useAppContext from "../context/useAppContext.js";
import edit from "../assets/edit.svg";

const ProfileInfo = () => {
  const { openUpload, setOpenUpload, displayLogo } = useAppContext();

  return (
    <div className="pt-4 pb-8 w-full flex flex-col gap-[40px] md:px-[32px] px-[12px]">
      <div className="border-b border-gray-200 w-full flex items-center text-[14px] font-500 font-medium ">
        <div className="flex items-center gap-[16px] py-[8px] px-[16px]">
          <p className="">Company</p>
          <p className="">Personal Details</p>
          <p className="">Activity</p>
        </div>
      </div>
      <div className="flex flex-col gap-[40px]">
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
          <div className="flex items-center gap-[28px] flex-col md:flex-row">
            <div className="border border-gray-300 rounded-[12px] py-[15px] px-[18px] flex flex-col items-start gap-[18px] w-full md:w-[205px] ">
              <label
                onClick={() => {
                  setOpenUpload(!openUpload);
                }}
                htmlFor="changeLogo"
                className="rounded-[8px] cursor-pointer p-[8px] flex items-center justify-center bg-[#F6F7F9] "
              >
                Upload Logo
              </label>
              {openUpload && <UploadPage />}

              <div className="h-[100px] flex items-center justify-center">
                <img
                  src={displayLogo || placeHolderImage}
                  alt="preview-logo"
                  className="object-cover"
                />
              </div>
            </div>
            {/* change theme */}
            <div className="border border-gray-300 rounded-[12px] py-[15px] px-[18px] flex flex-col items-start gap-[18px] w-full md:w-[205px] ">
              <div className="rounded-[8px] cursor-pointer p-[8px] flex items-center justify-center bg-[#F6F7F9] ">
                Upload Logo
              </div>

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
        <div className="flex flex-col w-full gap-[28px]">
          {/* business header */}
          <div className="flex md:items-center items-start flex-col md:flex-row gap-[24px] md:justify-between ">
            <div className="flex flex-col gap-[4px] ">
              <p className="text-gray-700 font-semibold text-[20px] font-[Source Sans Pro] ">
                Business Information
              </p>
              <p className="font-[Open Sans] text-[14px] text-gray-500 ">
                Basic info, like organization name and address
              </p>
            </div>

            <div className="flex items-center gap-[8px] ">
              <img src={edit} alt="edit" className="w-[14.29px] h-[14.29px] " />
              <p className="text-400 text-purple-600 ">Edit Details</p>
            </div>
          </div>
          {/* business table */}
          <div className="rounded-[8px]  border border-gray-200">
            <table className=" w-full ">
              <tbody className="border-b border-gray-200">
                <tr className="border-b border-gray-200 space-x-[12px]">
                  <td className="pl-3 py-[32px] text-left font-500 font-medium text-[16px] text-gray-500 ">
                    Organization Name
                  </td>
                  <td className="py-[32px] text-left font-400 text-[16px] text-gray-700 ">
                    Novant Health
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="pl-3 py-[32px] text-left font-500 font-medium text-[16px] text-gray-500 ">
                    Email
                  </td>
                  <td className="py-[32px] text-left font-400 text-[16px] text-gray-700 ">
                    info@novanthealth.com
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="pl-3 py-[32px] text-left font-500 font-medium text-[16px] text-gray-500 ">
                    Website
                  </td>
                  <td className="py-[32px] text-left font-400 text-[16px] text-gray-700 ">
                    https://novanthealth.com
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="pl-3 py-[32px] text-left font-500 font-medium text-[16px] text-gray-500 ">
                    Address
                  </td>
                  <td className="py-[32px] text-left font-400 text-[16px] text-gray-700 ">
                    1234 Street name, city, country
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
