/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const Team = () => {
  return (
    <div className="overflow-x-hidden pt-16">
      <div className="">
        <div className="items-center justify-evenly lg:flex">
          <div className="max-w-2xl p-5 pt-10 lg:px-10">
            <h1 className="font-secondary text-6xl font-bold lg:text-8xl">
              Bright Minds, Big Impact
            </h1>
            <p className="mt-4 font-primary text-lg font-medium">
              Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Nostrum ipsa quos facere eum
              nobis, dolorum sint maxime animi porro rem a?
            </p>
          </div>
          <div className=" rotate-45 scale-110">
            <IconSvg />
          </div>
        </div>
        <div className="hidden px-10">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/team%2FTeam%20Page.png?alt=media&token=d7c22e4e-a2c8-4ef2-9210-00359992aaed"
            alt=""
            className="w-full object-cover object-top lg:h-96"
          />
        </div>
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </div>
    </div>
  );
};

export default Team;

const IconSvg = () => {
  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={200}
        height={200}
        viewBox="0 0 64 64"
        className=""
      >
        <path
          d="M4 15.51a1 1 0 0 0 .71-.29L15.22 4.71a1 1 0 1 0-1.42-1.42L3.29 13.8a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29m0 11.38a1 1 0 0 0 .71-.29L26.6 4.71a1 1 0 1 0-1.42-1.42L3.29 25.18a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29m0 11.36a1 1 0 0 0 .71-.25L38 4.71a1 1 0 1 0-1.42-1.42L3.29 36.54a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29m0 11.38a1 1 0 0 0 .71-.29L49.34 4.71a1 1 0 1 0-1.42-1.42L3.29 47.92a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29M60.71 3.29a1 1 0 0 0-1.42 0l-56 56a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l56-56a1 1 0 0 0 0-1.42m-1.42 11.37L14.66 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l44.63-44.63a1 1 0 0 0-1.42-1.42m0 11.34L26 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l33.29-33.25A1 1 0 0 0 59.29 26m0 11.4L37.4 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l21.89-21.89a1 1 0 0 0-1.42-1.42m0 11.38L48.78 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L60.71 50.2a1 1 0 0 0-1.42-1.42"
          data-name="Layer 9"
          fill='url("#a")'
        />
        <defs>
          <linearGradient id="a">
            <stop stopColor="#fceabb" offset={0} />
            <stop stopColor="#f8b500" offset={1} />
          </linearGradient>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={200}
        height={200}
        fill="none"
        viewBox="0 0 200 200"
      >
        <path
          fill="url(#a)"
          fillRule="evenodd"
          d="M200 150c0-55.228-44.772-100-100-100S0 94.772 0 150z"
          clipRule="evenodd"
        />
        <defs>
          <linearGradient
            id="a"
            x1={27.5}
            x2={69.942}
            y1={59.5}
            y2={168.136}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD9A0" />
            <stop offset={1} stopColor="#FFF5F1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const SectionTwo = () => {
  return (
    <div className="p-5 lg:p-10">
      <div className="items-center justify-evenly lg:flex">
        <div className="h-72 w-full rounded-3xl bg-green-700 lg:h-96 lg:w-96"></div>
        <div className="flex max-w-xl flex-col justify-evenly">
          <h1 className="mt-4 font-secondary text-3xl font-bold text-orange-500 lg:mb-10 lg:text-4xl">
            The Who's Who, Just for You
          </h1>
          <p className="max-w-md font-primary text-lg font-medium">
            In the quiet hum of our day-to-day, amidst the whirl of ideas and
            the click of keyboards, there lies a softer melody—an anthem that
            weaves through the heart of every CUDian. It’s not always sung
            aloud, but it’s felt, in the gentle nod of acknowledgment, the
            shared smiles over coffee, and the silent celebrations of our
            successes.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

const SectionThree = () => {
  return (
    <div className="p-5 lg:p-10">
      <div className="flex-row-reverse items-center justify-evenly lg:flex">
        <div className="h-72 w-full rounded-3xl bg-green-700 lg:h-96 lg:w-96"></div>
        <div className="flex max-w-xl flex-col justify-evenly">
          <h1 className="mt-4 font-secondary text-3xl font-bold text-orange-500 lg:mb-10 lg:text-4xl">
            Behind the Scenes
          </h1>
          <p className="max-w-md font-primary text-lg font-medium">
            We don't line up for the spotlight; we’re the pulse in the shadow,
            the passion behind the precision. Catch glimpses of our spirit
            through snapshots of creativity and determination. Here, a spirited
            debate, there, a burst of laughter over code and canvases. It's not
            just work; it's the art of excellence in motion.
          </p>
        </div>
      </div>
    </div>
  );
};
const SectionFour = () => {
  return (
    <div className="p-5">
      <h1 className="overflow-y-hidden text-center font-secondary text-4xl font-bold text-orange-500 ">
        At the core, our maestros
      </h1>
      <p className="mx-auto mt-4 max-w-md text-center font-primary text-lg font-medium">
        The leaders who direct the show—ensure every act, no matter how daring
        or detailed, contributes to our grand NARRATIVE
      </p>
      <div className="mt-4 justify-evenly lg:flex">
        <div className="h-80 w-full rounded-2xl bg-blue-500 lg:w-72"></div>
        <div className="h-80 w-full rounded-2xl bg-blue-500 lg:w-72"></div>
      </div>
    </div>
  );
};
const SectionFive = () => {
  return (
    <div className="mt-10">
      <div className=" overflow-y-hidden bg-primary p-10 text-center text-white">
        <h1 className="mx-auto my-5  font-secondary text-2xl font-bold text-white  lg:text-nowrap lg:text-4xl lg:text-5xl">
          Think you can play to our rhythm?{" "}
        </h1>
        <Link href="/team/career">
          <button className="border-white bg-orange-500 p-2 px-10 font-primary text-xl font-bold hover:bg-black  lg:py-4">
            Join Us
          </button>
        </Link>
      </div>
    </div>
  );
};
