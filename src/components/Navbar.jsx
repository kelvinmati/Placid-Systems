import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsNavbarScrolled(true);
      } else {
        setIsNavbarScrolled(false);
      }
    });
  }, []);
  return (
    <div
      className={
        isNavbarScrolled
          ? "h-[100px] text-mainBlue fixed bg-white left-0 right-0 top-0 z-30 transition ease-in-out duration-300"
          : "h-[100px] text-mainBlue transition ease-in-out duration-150"
      }
    >
      <div className=" h-full w-mobile md:w-container mx-auto flex justify-between items-center">
        {" "}
        <div>
          <img
            src="https://res.cloudinary.com/kelvin45/image/upload/c_scale,w_165/v1682513156/logo-transparent_ofkicd.png"
            alt=""
          />
        </div>
        <div>
          <ul className="flex space-x-4 text-lg">
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                // smooth={true}
                offset={-80}
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="about_us"
                spy={true}
                // smooth={true}
                offset={-80}
              >
                About us
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                // smooth={true}
                offset={-80}
              >
                Services
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="team"
                spy={true}
                // smooth={true}
                offset={-80}
              >
                Team
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                // smooth={true}
                offset={-80}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
