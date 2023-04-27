import React from "react";
import Navbar from "./Navbar";
import mockup from "../assets/mockup-screens-removebg-preview.png";
import web_page_mockup from "../assets/web-pages-mockup.png";
// import web_page_mockup from "../assets/smartmockups_lgxtdqn6.jpg";
import bg_img from "../assets/bg-img.jpg";
const Hero = () => {
  return (
    <div
      id="home"
      className=" bg-no-repeat  bg-cover bg-center bg-blend-multiply pt-6 pb-20"
      style={{
        backgroundImage: `url(${bg_img})`,
        backgroundColor: " rgba(0, 0, 255,0.2)",
      }}
    >
      <Navbar />
      <div className="w-mobile md:w-container mx-auto grid md:grid-cols-2 items-center gap-3">
        <div className="space-y-12">
          <div>
            <h2 className=" text-4xl font-bold">
              <span className="text-mainBlue">Calm</span> |{" "}
              <span className="text-red-500 font-bold">Innovative</span> |{" "}
              <span className=" font-bold text-darkBlue">Bold</span>
            </h2>
            <p className="text-xl py-2">
              Building the future of ict through innovative software
            </p>
          </div>
          <button className=" px-5 py-3 bg-darkBlue text-gray-100 flex items-center space-x-4  justify-center">
            <span>Get started</span>
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
        <div>
          <img src={web_page_mockup} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
