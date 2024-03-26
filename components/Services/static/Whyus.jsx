import React from "react";

const Whyus = ({ n1, n2, n3, n4, p1, p2, p3 }) => {
  return (
    <div className="p-5 lg:flex lg:px-10">
      <div className="my-10 flex flex-col  justify-between gap-5 py-5">
        <h1 className="max-w-xl text-3xl font-bold lg:text-6xl">
          Why Choose Cash ur Drive for Your Next Campaign ??
        </h1>
        <div className="h-fit w-full  text-center ">
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            <li className="text-bold col-span-1 font-secondary text-2xl">
              {n1}+ <br /> <span> Campaign</span>{" "}
            </li>
            <li className="text-bold col-span-1 font-secondary text-2xl">
              {n2}+ <br /> <span> Impressions</span>{" "}
            </li>
            <li className="text-bold col-span-1 font-secondary text-2xl">
              {n3}+ <br /> <span> Clients</span>{" "}
            </li>
          
          </ul>
        </div>
      </div>
      <div className="flex max-w-xl flex-col gap-4 text-lg">
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <button className=" mt-4 w-fit justify-center bg-black p-3 text-white ">
          <div className="flex">
            <p>Get Started Now </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={30}
              viewBox="0 -960 960 960"
              width={30}
              className="invert"
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Whyus;
