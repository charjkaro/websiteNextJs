import React from "react";

const AboutPresence = () => {
  return (
    <div className="p-10">
      <h1 className="font-bold text-4xl w-full">Our Presence in India</h1>
      <div className="grid lg:grid-cols-3 text-white gap-2 mt-10">
        <div className=" w-full   col-span-1 flex items-center justify-center">
          {" "}
          <h1 className="font-bold text-2xl w-full bg-[#1b1b1b] rounded-xl p-10 ">
            Delhi{" "}
          </h1>{" "}
        </div>
        <div className=" w-full  col-span-1 flex items-center justify-center">
          <h1 className="font-bold text-2xl w-full bg-[#1b1b1b] rounded-xl p-10 ">
            Mumbai{" "}
          </h1>{" "}
        </div>
        <div className=" w-full  col-span-1 flex items-center justify-center">
          <h1 className="font-bold text-2xl w-full bg-[#1b1b1b] rounded-xl p-10 ">
          Dehradun{" "}
          </h1>{" "}
        </div>
        <div className=" w-full  col-span-1 flex items-center justify-center">
          <h1 className="font-bold text-2xl w-full bg-[#1b1b1b] rounded-xl p-10 ">
          Chandigarh{" "}
          </h1>{" "}
        </div>
        <div className=" w-full  col-span-1 flex items-center justify-center">
          <h1 className="font-bold text-2xl w-full bg-[#1b1b1b] rounded-xl p-10 ">
          Noida{" "}
          </h1>{" "}
        </div>
        <div className=" w-full  col-span-1 flex items-center justify-center">
          <h1 className="font-bold text-2xl w-full bg-[#1b1b1b] rounded-xl p-10 ">
          Lucknow{" "}
          </h1>{" "}
        </div>
    
      </div>
    </div>
  );
};

export default AboutPresence;
