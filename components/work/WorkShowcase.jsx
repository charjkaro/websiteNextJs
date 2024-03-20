import { WorkData } from "@/Data/Work";
import Image from "next/image";
import React from "react";

const WorkShowcase = () => {
  const sequence = [3, 1, 2, 2, 1, 3, 3, 1, 2, 2, 1, 3, 3, 1, 2, 2, 1, 3];
  return (
    <div>
      <div className="grid-col-2 grid gap-1  p-2 md:grid-cols-4 lg:p-20">
        {WorkData.map((item, index) => (
          <WorkCard
            id={item.id}
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

const WorkCard = ({ colSpan, img, client, detail, id }) => {
  return (
    <a
      href={`work/${id}`}
      className={`h-48 w-full bg-gray-700 lg:h-72 lg:rounded-xl lg:col-span-${colSpan}    md:col-span-${colSpan} relative overflow-hidden border-[#C9F24D] transition-all duration-300  hover:border-[8px]`}
    >
      <Image
        width={600}
        height={600}
        src={img}
        alt={client}
        className="h-full w-full object-cover brightness-[60%] transition-all duration-200 ease-soft-spring hover:scale-105 hover:brightness-100"
      />
      <div className="absolute bottom-0 left-0 z-20 text-wrap p-5 text-white">
        <h1 className="font-primary text-lg font-bold lg:text-xl">{client}</h1>
      </div>
      {/* <div
        className="absolute top-0 z-10 h-full w-full overflow-y-scroll bg-[#1b1b1b] text-white opacity-0 transition-opacity duration-700  hover:opacity-100 "
        id="detail"
      >
        <p className="mb-10 mt-4 p-1 text-small md:p-5 md:text-base ">
          {detail}
        </p>
      </div> */}
    </a>
  );
};
