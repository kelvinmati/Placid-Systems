import React from "react";

const Footer = () => {
  return (
    <div className="py-10 bg-darkBlue text-gray-100">
      <div className="w-mobile md:w-container mx-auto flex flex-col md:flex-row justify-between items-center">
        <ul className="flex space-x-3">
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
        <div className="flex space-x-2">
          <i class="bx bx-md bxl-facebook-circle"></i>
          <i class="bx bx-md bxl-linkedin-square"></i>
          <i class="bx bx-md bxl-twitter"></i>
          <i class="bx bx-md bxl-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
