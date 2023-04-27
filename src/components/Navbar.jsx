import React from "react";
import logo from "../assets/logo-transparent.png";
const Navbar = () => {
  return (
    <div className="h-[80px] text-darkBlue">
      <div className=" h-full w-mobile md:w-container mx-auto flex justify-between items-center">
        {" "}
        <div>
          <img
            src="https://res.cloudinary.com/kelvin45/image/upload/c_scale,w_157/v1682513156/logo-transparent_ofkicd.png"
            alt=""
          />
        </div>
        <div>
          <ul className="flex space-x-4 text-lg">
            <li>Home</li>
            <li>About us</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
