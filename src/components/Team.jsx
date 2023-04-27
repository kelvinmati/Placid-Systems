import React from "react";
import muthama from "../assets/pp_eric.jpg";
import chris from "../assets/pp_pic.jpeg";
import james from "../assets/james.jpeg";

const Team = () => {
  return (
    <div id="team">
      <div className="w-mobile md:w-container mx-auto space-y-2">
        <h2 className="text-2xl">Our Team</h2>
        <p>
          Our team maintains an effective mix of experience, technical know-how,
          and seasoned leadership in order to provide innovative IT strategies
          and solutions required to meet the needs of our local, regional and
          continental client base. Our team relies on unparalleled information
          technology, project management, monitoring and evaluation, team
          management, and stakeholder management experience in order to ensure
          our clients’ success.{" "}
        </p>
        <p>
          The team members who run the company have a combined experience of 15
          years plus in the industry as detailed below:
        </p>
        <div className="grid md:grid-cols-3 gap-5 py-5">
          <div className="p-4  space-y-4 shadow-md border rounded-lg ">
            <div className="flex justify-center ">
              <img
                className="h-[200px] w-[200px]  bg-darkBlue p-1 rounded-full"
                src={muthama}
                alt=""
              />
            </div>
            <div className="">
              <p className="uppercase text-mainBlue">Founder & CEO</p>
              <h2 className="font-bold">Eric Muthama</h2>
              <p>
                Result oriented, never-say-die doer IT consultant with deep
                expertise in designing, implementing, and managing complex
                database solutions.
              </p>
              <p>
                Eric is currently working in Oracle Corporation as an Advanced
                Customer Support (ACS) Engineer for Safaricom LTD
              </p>
            </div>
          </div>
          <div className="p-4  space-y-4 shadow-md border rounded-lg ">
            <div className="flex justify-center ">
              <img
                className="h-[200px] w-[200px]  bg-darkBlue p-1 rounded-full"
                src={chris}
                alt=""
              />
            </div>
            <div className="">
              <p className="uppercase text-mainBlue">Chief Operating Officer</p>
              <h2 className="font-bold">Chris Changilwa</h2>
              <p>
                Chris is an experience ICT professional based on his strong
                academic and professional training. Having graduated from JKUAT
                University with an ICT degree, Chris has also done several ICT
                certifications. He is currently the Regional Manager - North
                Rift Region at Kingsway Autowatch Ltd.
              </p>
            </div>
          </div>
          <div className="p-4  space-y-4 shadow-md border rounded-lg ">
            <div className="flex justify-center ">
              <img
                className="h-[200px] w-[200px]  bg-darkBlue p-1 rounded-full"
                src={james}
                alt=""
              />
            </div>
            <div className="">
              <p className="uppercase text-mainBlue">Founder & MD</p>
              <h2 className="font-bold">James Njoroge</h2>
              <p>
                James is a dedicated and motivated Oracle Database Administrator
                with a passion for managing technology-based businesses. He
                thrives in fast-paced environments, and I am committed to
                delivering high-quality solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
