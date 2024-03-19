import React from "react";

const Whyus = () => {
  return (
    <div className="flex px-10">
      <h1 className="max-w-xl text-6xl font-bold">
        Why Choose Cash ur Drive for Your Next Campaign ??
      </h1>
      <div className="flex max-w-xl flex-col gap-4 text-lg">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          temporibus, tempore nemo culpa quaerat accusantium cum unde nobis,
          illo enim quod, qui architecto vitae. Eaque ut ea quos vitae unde!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          deserunt dolore harum quam explicabo animi exercitationem mollitia
          magni minima molestiae quasi accusantium quos, ullam ipsam sunt totam
          repellendus ut? Nulla.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          temporibus, tempore nemo culpa quaerat accusantium cum unde nobis,
          illo enim quod, qui architecto vitae. Eaque ut ea quos vitae unde!
        </p>
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
