import React from "react";
import mockup from "../assets/ipad-screen-mockup-with-keyboard-removebg-preview.png";
const Burner = () => {
  return (
    <div className="h-[230px]  w-full  bg-mainBlue text-gray-100 relative">
      <div className="h-full w-mobile md:w-container mx-auto grid md:grid-cols-3 items-center ">
        <div className="col-span-2 space-y-2">
          <p className="text-xl">
            Let placid systems limited(PSL) bring your software solution to life
            and drive your business forward.
          </p>
          <p className="text-gray-200">
            Code is like a story,it needs to be easy to follow.
          </p>
          <button className=" px-5 py-3 bg-darkBlue text-gray-100 flex items-center space-x-4  justify-center">
            <span>Contact us </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-mainBlue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </div>
        <div></div>
        <div className="absolute right-20 -top-32 md:block hidden">
          <img className="h-[400px]  " src={mockup} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Burner;
