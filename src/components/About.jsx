import React from "react";
import about_img from "../assets/about.jpg";
const About = () => {
  return (
    <div id="about_us">
      <div className=" items-center w-mobile md:w-container mx-auto grid md:grid-cols-2 gap-3">
        <div>
          <img
            className="h-[350px] w-full object-contain"
            src={about_img}
            alt=""
          />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl pb-2">Who we are</h2>
          <p className="text-gray-700">
            Placid Systems LTD is a dynamic IT consultancy firm based in
            Nairobi, Kenya that caters to a broad, regional clientele. We
            support you in all phases of your project, from vision to success,
            offering a comprehensive portfolio of value-added services.
          </p>

          <button className=" px-5 py-3 bg-darkBlue text-gray-100 flex items-center space-x-4  justify-center">
            <span>Learn more</span>
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
      </div>
    </div>
  );
};

export default About;
