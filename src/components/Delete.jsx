import React from "react";
import confirmDelete from "../assets/confirmDelete.svg"


const Delete = () => {
  return (
     <div className="fixed inset-0 bg-[#575D7299] backdrop-blur-[2px] z-40 flex justify-center items-center ">
      {/* Container */}
      <div className="bg-white w-full md:w-[481px] flex items-center mx-[24px] justify-center flex-col shadow-xl rounded-[12px] p-[24px] gap-[32px] ">
        <div className="flex items-center flex-col justify-center gap-[20px]">
          <img src={confirmDelete} alt="confirm delete" className='w-[48px] h-[48px]' />
          <div className="flex items-center flex-col justify-center gap-[8px]">

            <p className="text-[18px] font-500 text-gray-900 ">Delete User</p>
            <p className="text-[14px] text-gray-500 text-center ">
              Are you sure you want to delete <span className='text-red-600 '>“Sarah Martinez”</span>? This action cannot be undone.
            </p>
          </div>
        </div>

       <div className="flex items-center gap-[12px] w-full">
        <button className='cursor-pointer rounded-[8px] py-[10px] px-[18px] border border-gray-300 text-gray-700 font-500 text-[16px] w-full '>Cancel</button>
        <button className='cursor-pointer rounded-[8px] py-[10px] px-[18px] bg-red-600 border border-red-600 text-white font-500 text-[16px] w-full '>Cancel</button>
       </div>
      </div>
    </div>

  );
};

export default Delete;
