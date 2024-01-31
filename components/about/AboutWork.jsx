import React from "react";

const AboutWork = () => {
  return (
    <div>
      {" "}
      <div className="bg-[#1B1B1B] text-white p-10">
        <h1 className="font-bold text-8xl overflow-hidden my-5">
          Work With us
        </h1>
        <p className="text-2xl font-bold mb-4">Opportunities</p>
        <JobRoles />
        <JobRoles />
        <JobRoles />
        <JobRoles />
        <JobRoles />
      </div>
    </div>
  );
};

export default AboutWork;
function JobRoles({}) {
  return (
    <div className="">
      <div className="grid grid-cols-3 list-none items-center p-10">
        <li className="text-2xl">Role</li>
        <li className="text-2xl">Location</li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={50}
            viewBox="0 -960 960 960"
            width={50}
            className="invert"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </li>
      </div>
      <hr />
    </div>
  );
}
