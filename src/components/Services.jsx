import React from "react";

const Services = () => {
  return (
    <div id="services">
      <h2 className="text-2xl text-center pb-6">What we do</h2>
      <div className="w-mobile md:w-container mx-auto grid md:grid-cols-2 gap-y-20 gap-x-5">
        {/* 1st row */}
        <div>
          <div className="flex space-x-2 font-bold items-center text-2xl pb-3">
            <p className="bg-darkBlue text-white w-8 h-8 flex  justify-center items-center rounded-full text-xl">
              1
            </p>
            <h2>Oracle</h2>
          </div>
          <p className="text-gray-700">
            Installation/Implementation- Oracle Database, Oracle ERP, Business
            Intelligence, Oracle Governance, Risk and Compliance (GRC), Audit
            Vault, Golden Gate, and Oracle Cloud Upgrade- Oracle Database,
            Oracle ERP, and Exadata Support- Oracle Database, Oracle ERP,
            Business Intelligence, Oracle Governance, Risk and Compliance (GRC),
            Exadata, and Golden Gate Integration- We integrate Oracle EBS with
            all other legacy systems through web service
          </p>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/computer-technology-isometric-icon-server-room-digital-device-set-element-design-pc-laptop_39422-1026.jpg?size=626&ext=jpg"
            alt=""
          />
        </div>
        {/* second row */}
        <div>
          <img
            src="https://img.freepik.com/free-vector/computer-technology-isometric-icon-server-room-digital-device-set-element-design-pc-laptop_39422-1026.jpg?size=626&ext=jpg"
            alt=""
          />
        </div>
        <div>
          <div className="flex space-x-2 font-bold items-center text-2xl pb-3">
            <p className="bg-darkBlue text-white w-8 h-8 flex  justify-center items-center rounded-full text-xl">
              2
            </p>
            <h2>Software development</h2>
          </div>
          <p className="text-lg text-mainBlue">
            Simplify your business processes with our production-ready
            solutions.
          </p>
          <p className="text-gray-700">
            As an SME or MSME, you need to focus on growing your business, not
            on complex technological solutions. PSL offers production-ready SaaS
            solutions that simplify your business processes and help you achieve
            your goals faster. Say goodbye to manual work and hello to
            efficiency with our software solutions.
          </p>
        </div>
        {/* 3rd row */}
        <div>
          <div className="flex space-x-2 font-bold items-center text-2xl pb-3">
            <p className="bg-darkBlue text-white w-8 h-8 flex  justify-center items-center rounded-full text-xl">
              3
            </p>
            <h2>AI & Data Analytics</h2>
          </div>
          <p className="text-lg text-mainBlue">
            Unlock the power of AI and data analytics for your business
          </p>
          <p className="text-gray-700">
            With Placid Systems LTD, experience innovative software solutions
            that leverage the power of AI and data analytics. Our client-focused
            approach ensures that your business needs are met with customized
            software solutions in FinTech, Logistics, Cybersecurity, Insurance,
            Health and Construction domains. Unlock new possibilities for your
            business today with PSLs customized solutions.
          </p>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/computer-technology-isometric-icon-server-room-digital-device-set-element-design-pc-laptop_39422-1026.jpg?size=626&ext=jpg"
            alt=""
          />
        </div>
        {/* 4th row */}
        <div>
          <img
            src="https://img.freepik.com/free-vector/server-status-concept-illustration_114360-6820.jpg?size=626&ext=jpg"
            alt=""
          />
        </div>
        <div>
          <div className="flex space-x-2 font-bold items-center text-2xl pb-3">
            <p className="bg-darkBlue text-white w-8 h-8 flex  justify-center items-center rounded-full text-xl">
              4
            </p>
            <h2>CYBER SECURITY</h2>
          </div>
          <div className="space-y-2">
            {cyberSecurityLists.map((cyberSecurityList) => {
              return (
                <div className="text-gray-700 flex space-x-2 ">
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
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <p>{cyberSecurityList}</p>
                </div>
              );
            })}
          </div>
          <div className="flex space-x-2 font-bold items-center text-2xl pt-7 pb-3">
            <p className="bg-darkBlue text-white w-8 h-8 flex  justify-center items-center rounded-full text-xl">
              5
            </p>
            <h2>Training</h2>
          </div>
          <p className="text-gray-700">
            Oracle Database courses, Software development courses, Project
            management courses, Cyber security courses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

const cyberSecurityLists = [
  "Information Security",
  "Endpoint Protection (Mcafee, Trendmicro, Kaspersky, Bitdefender)",
  "Network/Perimeter Security (Checkpoint, Fortigate, Sophos)",
  "Security Event & Information Management (SIEM) (Mcafee siem)",
  "Data Leakage Prevention (Mcafee)",
  "Database Activity Monitoring (Mcafee DAM)",
  "Network Access Control (Portnox)",
  "Configuration & change management.",
];
