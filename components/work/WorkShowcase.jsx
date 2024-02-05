import { WorkData } from "@/Data/Work";
import React from "react";

const WorkShowcase = () => {
  const sequence = [3, 1, 2, 2, 1, 3, 3, 1, 2, 2, 1, 3, 3, 1, 2, 2, 1, 3];
  return (
    <div>
      <div className="grid md:grid-cols-4 grid-col-2  lg:p-20 p-2 gap-2">
        {WorkData.map((item, index) => (
          <WorkCard
            key={index}
            colSpan={sequence[index]} // Change this line according to your requirement
            img={item.img}
            client={item.title}
            detail={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkShowcase;

const WorkCard = ({ colSpan, img, client, detail }) => {
  return (
    <div
      className={`bg-gray-700 w-full lg:h-72 h-48 rounded-xl lg:col-span-${colSpan}    md:col-span-${colSpan} relative hover:border-[8px] border-[#C9F24D] transition-all duration-300  overflow-hidden`}
    >
      <img
        src={img}
        alt={client}
        className="w-full h-full object-cover brightness-[60%] hover:brightness-100 hover:scale-105 transition-all ease-soft-spring duration-200"
      />
      <div className="absolute z-20 bottom-0 left-0 lg:p-5 text-wrap text-white">
        <h1 className="lg:text-xl text-sm font-bold">{client}</h1>
      </div>
      <div
        className="bg-[#1b1b1b] h-full w-full opacity-0 hover:opacity-100 transition-opacity duration-700 absolute top-0 z-10  text-white "
        id="detail"
      >
        <p className="md:text-base md:p-5 p-1 text-small mb-10 mt-4 ">{detail}</p>
      </div>
    </div>
  );
};
