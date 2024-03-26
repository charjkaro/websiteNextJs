/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
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
        <div className="">
          <div className="h-80 w-full overflow-hidden rounded-2xl bg-blue-500 lg:w-72">
            <Image
              alt="Raghu Khanna"
              src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/31a79262-05ac-4c6e-979d-5a7572e7d49b%20(1).png?alt=media&token=66de948d-1736-470a-9208-3203ab25ebe9"
              height={800}
              width={800}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h1 className="font-secondary text-2xl font-bold">Raghu Khanna</h1>
          <div className="mt-2 flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 50 50"
            >
              <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5M17 20v19h-6V20zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53M39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M47.3,21.01c-0.58-1.6-1.3-3.16-2.24-4.66c-0.93-1.49-2.11-2.93-3.63-4.13c-1.51-1.19-3.49-2.09-5.59-2.26l-0.78-0.04	c-0.27,0.01-0.57,0.01-0.85,0.04c-0.57,0.06-1.11,0.19-1.62,0.34c-1.03,0.32-1.93,0.8-2.72,1.32c-1.42,0.94-2.55,2.03-3.57,3.15	c0.01,0.02,0.03,0.03,0.04,0.05l0.22,0.28c0.51,0.67,1.62,2.21,2.61,3.87c1.23-1.2,2.83-2.65,3.49-3.07	c0.5-0.31,0.99-0.55,1.43-0.68c0.23-0.06,0.44-0.11,0.64-0.12c0.1-0.02,0.19-0.01,0.3-0.02l0.38,0.02c0.98,0.09,1.94,0.49,2.85,1.19	c1.81,1.44,3.24,3.89,4.17,6.48c0.95,2.6,1.49,5.44,1.52,8.18c0,1.31-0.17,2.57-0.57,3.61c-0.39,1.05-1.38,1.45-2.5,1.45	c-1.63,0-2.81-0.7-3.76-1.68c-1.04-1.09-2.02-2.31-2.96-3.61c-0.78-1.09-1.54-2.22-2.26-3.37c-1.27-2.06-2.97-4.67-4.15-6.85	L25,16.35c-0.31-0.39-0.61-0.78-0.94-1.17c-1.11-1.26-2.34-2.5-3.93-3.56c-0.79-0.52-1.69-1-2.72-1.32	c-0.51-0.15-1.05-0.28-1.62-0.34c-0.18-0.02-0.36-0.03-0.54-0.03c-0.11,0-0.21-0.01-0.31-0.01l-0.78,0.04	c-2.1,0.17-4.08,1.07-5.59,2.26c-1.52,1.2-2.7,2.64-3.63,4.13C4,17.85,3.28,19.41,2.7,21.01c-1.13,3.2-1.74,6.51-1.75,9.93	c0.01,1.78,0.24,3.63,0.96,5.47c0.7,1.8,2.02,3.71,4.12,4.77c1.03,0.53,2.2,0.81,3.32,0.81c1.23,0.03,2.4-0.32,3.33-0.77	c1.87-0.93,3.16-2.16,4.33-3.4c2.31-2.51,4.02-5.23,5.6-8c0.44-0.76,0.86-1.54,1.27-2.33c-0.21-0.41-0.42-0.84-0.64-1.29	c-0.62-1.03-1.39-2.25-1.95-3.1c-0.83,1.5-1.69,2.96-2.58,4.41c-1.59,2.52-3.3,4.97-5.21,6.98c-0.95,0.98-2,1.84-2.92,2.25	c-0.47,0.2-0.83,0.27-1.14,0.25c-0.43,0-0.79-0.1-1.13-0.28c-0.67-0.35-1.3-1.1-1.69-2.15c-0.4-1.04-0.57-2.3-0.57-3.61	c0.03-2.74,0.57-5.58,1.52-8.18c0.93-2.59,2.36-5.04,4.17-6.48c0.91-0.7,1.87-1.1,2.85-1.19l0.38-0.02c0.11,0.01,0.2,0,0.3,0.02	c0.2,0.01,0.41,0.06,0.64,0.12c0.26,0.08,0.54,0.19,0.83,0.34c0.2,0.1,0.4,0.21,0.6,0.34c1,0.64,1.99,1.58,2.92,2.62	c0.72,0.81,1.41,1.71,2.1,2.63L25,25.24c0.75,1.55,1.53,3.09,2.39,4.58c1.58,2.77,3.29,5.49,5.6,8c0.68,0.73,1.41,1.45,2.27,2.1	c0.61,0.48,1.28,0.91,2.06,1.3c0.93,0.45,2.1,0.8,3.33,0.77c1.12,0,2.29-0.28,3.32-0.81c2.1-1.06,3.42-2.97,4.12-4.77	c0.72-1.84,0.95-3.69,0.96-5.47C49.04,27.52,48.43,24.21,47.3,21.01z"></path>
            </svg>
          </div>
        </div>
        <div className="">
          <div className="h-80 w-full overflow-hidden rounded-2xl bg-blue-500 lg:w-72">
            <Image
              alt="Nitesh Nagpal"
              src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/vp%20cud.png?alt=media&token=6ff87550-1f23-4548-9b1a-69f688f0ba0e overflow-hidden"
              height={800}
              width={800}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h1 className="font-secondary text-2xl font-bold">Nitesh Nagpal</h1>
          <div className="mt-2 flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 50 50"
            >
              <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5M17 20v19h-6V20zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53M39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M47.3,21.01c-0.58-1.6-1.3-3.16-2.24-4.66c-0.93-1.49-2.11-2.93-3.63-4.13c-1.51-1.19-3.49-2.09-5.59-2.26l-0.78-0.04	c-0.27,0.01-0.57,0.01-0.85,0.04c-0.57,0.06-1.11,0.19-1.62,0.34c-1.03,0.32-1.93,0.8-2.72,1.32c-1.42,0.94-2.55,2.03-3.57,3.15	c0.01,0.02,0.03,0.03,0.04,0.05l0.22,0.28c0.51,0.67,1.62,2.21,2.61,3.87c1.23-1.2,2.83-2.65,3.49-3.07	c0.5-0.31,0.99-0.55,1.43-0.68c0.23-0.06,0.44-0.11,0.64-0.12c0.1-0.02,0.19-0.01,0.3-0.02l0.38,0.02c0.98,0.09,1.94,0.49,2.85,1.19	c1.81,1.44,3.24,3.89,4.17,6.48c0.95,2.6,1.49,5.44,1.52,8.18c0,1.31-0.17,2.57-0.57,3.61c-0.39,1.05-1.38,1.45-2.5,1.45	c-1.63,0-2.81-0.7-3.76-1.68c-1.04-1.09-2.02-2.31-2.96-3.61c-0.78-1.09-1.54-2.22-2.26-3.37c-1.27-2.06-2.97-4.67-4.15-6.85	L25,16.35c-0.31-0.39-0.61-0.78-0.94-1.17c-1.11-1.26-2.34-2.5-3.93-3.56c-0.79-0.52-1.69-1-2.72-1.32	c-0.51-0.15-1.05-0.28-1.62-0.34c-0.18-0.02-0.36-0.03-0.54-0.03c-0.11,0-0.21-0.01-0.31-0.01l-0.78,0.04	c-2.1,0.17-4.08,1.07-5.59,2.26c-1.52,1.2-2.7,2.64-3.63,4.13C4,17.85,3.28,19.41,2.7,21.01c-1.13,3.2-1.74,6.51-1.75,9.93	c0.01,1.78,0.24,3.63,0.96,5.47c0.7,1.8,2.02,3.71,4.12,4.77c1.03,0.53,2.2,0.81,3.32,0.81c1.23,0.03,2.4-0.32,3.33-0.77	c1.87-0.93,3.16-2.16,4.33-3.4c2.31-2.51,4.02-5.23,5.6-8c0.44-0.76,0.86-1.54,1.27-2.33c-0.21-0.41-0.42-0.84-0.64-1.29	c-0.62-1.03-1.39-2.25-1.95-3.1c-0.83,1.5-1.69,2.96-2.58,4.41c-1.59,2.52-3.3,4.97-5.21,6.98c-0.95,0.98-2,1.84-2.92,2.25	c-0.47,0.2-0.83,0.27-1.14,0.25c-0.43,0-0.79-0.1-1.13-0.28c-0.67-0.35-1.3-1.1-1.69-2.15c-0.4-1.04-0.57-2.3-0.57-3.61	c0.03-2.74,0.57-5.58,1.52-8.18c0.93-2.59,2.36-5.04,4.17-6.48c0.91-0.7,1.87-1.1,2.85-1.19l0.38-0.02c0.11,0.01,0.2,0,0.3,0.02	c0.2,0.01,0.41,0.06,0.64,0.12c0.26,0.08,0.54,0.19,0.83,0.34c0.2,0.1,0.4,0.21,0.6,0.34c1,0.64,1.99,1.58,2.92,2.62	c0.72,0.81,1.41,1.71,2.1,2.63L25,25.24c0.75,1.55,1.53,3.09,2.39,4.58c1.58,2.77,3.29,5.49,5.6,8c0.68,0.73,1.41,1.45,2.27,2.1	c0.61,0.48,1.28,0.91,2.06,1.3c0.93,0.45,2.1,0.8,3.33,0.77c1.12,0,2.29-0.28,3.32-0.81c2.1-1.06,3.42-2.97,4.12-4.77	c0.72-1.84,0.95-3.69,0.96-5.47C49.04,27.52,48.43,24.21,47.3,21.01z"></path>
            </svg>
          </div>
        </div>
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
