import React from 'react'

const MobileNav = () => {
  return (
    <div className="flex items-center md:hidden justify-between px-[22px] py-4 bg-[#1F66B7] w-full">
        <div className="">
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.666504 1H11.3332M0.666504 5H11.3332M0.666504 9H11.3332"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="font-500 font-medium text-[16px] text-white ">
          User Management
        </div>
        <div className="">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.26855 9.7501C5.2673 8.86096 5.44197 7.98035 5.78251 7.15901C6.12305 6.33766 6.62272 5.5918 7.25275 4.96438C7.88277 4.33697 8.6307 3.84041 9.45346 3.50329C10.2762 3.16617 11.1575 2.99516 12.0467 3.0001C15.7592 3.02823 18.7311 6.1126 18.7311 9.83448V10.5001C18.7311 13.8564 19.4342 15.8064 20.0529 16.8751C20.1186 16.9889 20.1533 17.118 20.1534 17.2494C20.1535 17.3809 20.1191 17.51 20.0536 17.624C19.9881 17.7379 19.8938 17.8326 19.7801 17.8986C19.6665 17.9647 19.5375 17.9996 19.4061 18.0001H4.59355C4.46212 17.9996 4.33312 17.9647 4.21948 17.8986C4.10583 17.8326 4.01153 17.7379 3.94601 17.624C3.8805 17.51 3.84608 17.3809 3.84619 17.2494C3.84631 17.118 3.88096 16.9889 3.94667 16.8751C4.56542 15.8064 5.26855 13.8564 5.26855 10.5001V9.7501Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
  )
}

export default MobileNav