"use client";

import Image from "next/image";
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-[#F7D446] p-5 py-20 lg:p-10">
        <div className="">
          <div className=" items-center justify-evenly lg:flex  ">
            <div className=" flex max-w-2xl flex-col gap-4">
              <h1 className="font-secondary text-5xl first-letter:font-bold lg:text-6xl ">
                We are
              </h1>
              <div className=" w-fit rounded-full bg-black">
                <h1 className="w-fit -translate-x-2 -translate-y-2 rounded-full border-3 border-black bg-[#F7D446] p-4 font-secondary text-5xl italic duration-150 hover:translate-x-0 hover:translate-y-0 lg:text-7xl">
                  CASH ur Drive
                </h1>
              </div>
              <h1 className="font-secondary text-5xl first-letter:font-bold lg:text-6xl ">
                Your all in one OOH solution
              </h1>
            </div>
            <div className="hidden lg:flex">
              <SvgIcon />
            </div>
          </div>
          <div className="mt-20 flex justify-center lg:mt-5">
            <button className="mx-auto bg-black p-5 px-10 text-center  font-primary text-white">
              Get Started Now
            </button>
          </div>
          <Socials />
        </div>
      </div>
      <div className="mt-10 items-start  justify-evenly p-5  lg:flex lg:p-10">
        <div className="">
          <h1 className="font-secondary text-5xl font-bold ">About Us</h1>
          <div className="my-2 h-64 w-full rounded-3xl bg-green-500"></div>
          <p className="font-primary text-xl font-semibold">
            Let's Paint the Town with Your Brand
          </p>
        </div>
        <div className="max-w-lg font-primary  font-medium leading-relaxed">
          <p className="">
            From Dream to Dazzling Reality In the epoch of 2009, CASHurDRIVE
            leaped not just on faith but on imagination. What if the daily drive
            is much more than a way from 'A' to 'B'? What if the daily drive
            actually does speak to its audience, paint a picture, or maybe even
            sell a dream? And just like that, against a still and quiet world,
            was born CASHurDRIVE, making a hum of daily vehicular journeys the
            canvas for creativity and conversation. As a beacon of innovation in
            the outdoor advertising industry, we make the ordinary
            extraordinary. <br />
            {/* CASHurDRIVE rolls creative flair with
          strategic insight, turning the cityscape into the stage for brands to
          shine. From vinyl to creative approach, we ensure every campaign
          speaks volume to the pulse of the streets and the hearts of the
          audience, making every advertisement an adventure, each brand story an
          anthem up across the skylines. */}
          </p>
          <p className="hidden lg:flex">
            We are one of the pioneer and leading media advertising companies of
            India catering to transit media with the concept of branding on
            wheels, be it any type of cabs, buses, autos, commercial vehicles,
            etc. To reach every Indian with an everyday vision that our means
            are predicated on, strengthening the relationship between brands and
            their consumers, we are proud to assist and help in realizing the
            business goals that you aspire to achieve. We are in the most
            innovative space for advertising.
          </p>
        </div>
      </div>
      <Vision />
      <Founder />
      <Mission />
    </div>
  );
};

export default About;

const SvgIcon = () => {
  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={200}
        height={200}
      >
        <path
          d="M256 0c-34.849 0-63.2 28.352-63.2 63.2s28.352 63.2 63.2 63.2 63.2-28.351 63.2-63.2S290.849 0 256 0m0 96.4c-18.307 0-33.2-14.893-33.2-33.2S237.693 30 256 30s33.2 14.894 33.2 33.2-14.893 33.2-33.2 33.2m0 96.4c-34.849 0-63.2 28.352-63.2 63.2s28.352 63.2 63.2 63.2 63.2-28.352 63.2-63.2-28.351-63.2-63.2-63.2m0 96.4c-18.307 0-33.2-14.894-33.2-33.2s14.894-33.2 33.2-33.2 33.2 14.894 33.2 33.2-14.893 33.2-33.2 33.2m0 96.4c-34.849 0-63.2 28.351-63.2 63.2S221.151 512 256 512s63.2-28.352 63.2-63.2-28.351-63.2-63.2-63.2m0 96.4c-18.307 0-33.2-14.894-33.2-33.2s14.894-33.2 33.2-33.2 33.2 14.893 33.2 33.2S274.307 482 256 482M63.2 0C28.352 0 0 28.352 0 63.2s28.352 63.2 63.2 63.2 63.2-28.351 63.2-63.2S98.049 0 63.2 0m0 96.4C44.894 96.4 30 81.507 30 63.2S44.894 30 63.2 30s33.2 14.894 33.2 33.2-14.893 33.2-33.2 33.2m0 96.4C28.352 192.8 0 221.151 0 256s28.352 63.2 63.2 63.2 63.2-28.352 63.2-63.2-28.351-63.2-63.2-63.2m0 96.4C44.894 289.2 30 274.307 30 256s14.894-33.2 33.2-33.2 33.2 14.894 33.2 33.2-14.893 33.2-33.2 33.2m0 96.4C28.352 385.6 0 413.951 0 448.8S28.352 512 63.2 512s63.2-28.352 63.2-63.2-28.351-63.2-63.2-63.2m0 96.4C44.894 482 30 467.106 30 448.8s14.894-33.2 33.2-33.2 33.2 14.893 33.2 33.2S81.507 482 63.2 482M448.8 0c-34.848 0-63.2 28.352-63.2 63.2s28.351 63.2 63.2 63.2S512 98.049 512 63.2 483.648 0 448.8 0m0 96.4c-18.306 0-33.2-14.893-33.2-33.2S430.493 30 448.8 30 482 44.894 482 63.2s-14.894 33.2-33.2 33.2m0 96.4c-34.849 0-63.2 28.352-63.2 63.2s28.352 63.2 63.2 63.2S512 290.849 512 256s-28.352-63.2-63.2-63.2m0 96.4c-18.307 0-33.2-14.894-33.2-33.2s14.894-33.2 33.2-33.2S482 237.693 482 256s-14.894 33.2-33.2 33.2m0 96.4c-34.849 0-63.2 28.351-63.2 63.2s28.352 63.2 63.2 63.2 63.2-28.352 63.2-63.2-28.352-63.2-63.2-63.2m0 96.4c-18.307 0-33.2-14.894-33.2-33.2s14.894-33.2 33.2-33.2 33.2 14.893 33.2 33.2-14.894 33.2-33.2 33.2"
          fill='url("#a")'
        />
        <defs>
          <linearGradient id="a">
            <stop stopColor="rgba(105, 234, 203)" offset={0} />
            <stop stopColor="rgba(234, 204, 248)" offset={0.48} />
            <stop stopColor="rgba(102, 84, 241)" offset={1} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const Socials = () => {
  return (
    <div className="">
      <div className="my-4 flex justify-center gap-2 lg:justify-end ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 50 50"
        >
          <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 50 50"
        >
          <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 50 50"
        >
          <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 50 50"
        >
          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
        </svg>
      </div>
    </div>
  );
};

const Vision = () => {
  return (
    <div className="p-5 lg:p-10 ">
      <h1 className="font-secondary text-5xl font-bold">
        Our Vision and Values{" "}
      </h1>
      <div className="mt-5 grid grid-cols-1 gap-2 lg:grid-cols-3">
        <VisionCard
          index={1}
          para="Innovation at Every Turn: Since 2009, CASHurDRIVE has reimagined daily commutes as canvases for creativity, pioneering transit media advertising. By transforming vehicles into moving billboards, we've opened a new realm of possibilities for brand storytelling and engagement."
        />
        <VisionCard
          index={2}
          para="Strategic Brand Connections: CASHurDRIVE merges creativity with strategic planning to make brands shine in the urban landscape. Our targeted campaigns ensure that your message resonates deeply with audiences, turning every street into a stage for your brand."
        />
        <VisionCard
          index={3}
          para="Unforgettable Brand Experiences: We're not just about visibility; we're about creating memorable encounters. CASHurDRIVE crafts advertising experiences that stick with people, making every journey an opportunity for brands to leave a lasting impression."
        />
      </div>
    </div>
  );
};

function VisionCard({ para, index }) {
  return (
    <div className=" w-full p-3 ">
      <h1 className=" font-secondary text-2xl font-bold">{index}</h1>
      <p className="h-48 p-2 font-primary font-semibold">{para}</p>
      <div className="h-64 w-full bg-green-400"></div>
    </div>
  );
}

const Founder = () => {
  return (
    <div className="p-5 lg:p-10">
      <div className="">
        <h1 className="font-secondary text-5xl font-bold">Our Founder</h1>
        <div className="mt-10 justify-evenly lg:flex">
          <div className="relative h-80 w-full rounded-2xl border-3 border-black lg:h-96 lg:w-80">
            <div className="relative z-40 h-full w-full translate-x-1 translate-y-1 overflow-hidden rounded-2xl bg-green-500 lg:translate-x-4 lg:translate-y-4">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/31a79262-05ac-4c6e-979d-5a7572e7d49b%20(1).png?alt=media&token=66de948d-1736-470a-9208-3203ab25ebe9"
                alt="Raghu Khanna"
                width={800}
                height={800}
                className="h-full w-full object-cover "
              />
            </div>
            <div className="absolute -right-2 top-2 z-0 h-80 w-full rounded-2xl border-3 border-black lg:-right-9 lg:top-8 lg:h-96 lg:w-80 "></div>
            <div className="absolute -left-24 -top-10 z-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={100}
                height={100}
                fill="none"
                viewBox="0 0 200 200"
                className="rotate-45 duration-1000 hover:rotate-[360deg]"
              >
                <g clipPath="url(#clip0_105_560)">
                  <path
                    fill="rgba(0, 0, 0, 1)"
                    fillRule="evenodd"
                    d="M200 100.671 100 0 0 100.671h98.667L0 200h200l-98.667-99.329z"
                    clipRule="evenodd"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="lg:max-w-lg">
            <h1 className="mb-5 mt-5 font-secondary text-3xl font-bold  lg:text-4xl">
              Our Founder
            </h1>
            <div className="text-xl font-semibold">
              <p>
                An alumnus of IIT Guwahati, is the visionary founder of
                CASHurDRIVE, a company he established in the year 2008.
                Pioneering the realm of transit advertising, he strategically
                ventured into the dynamic field of advertisements on radio
                taxis, including Mega, Meru, Easy, and Tabcabs. Today, under his
                leadership, CASHurDRIVE has become a distinguished name in both
                transit and OOH advertising, renowned for its innovative
                approaches and impactful strategies.
              </p>
              <div className="mt-4 flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                  viewBox="0 0 50 50"
                >
                  <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5M17 20v19h-6V20zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53M39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <path d="M47.3,21.01c-0.58-1.6-1.3-3.16-2.24-4.66c-0.93-1.49-2.11-2.93-3.63-4.13c-1.51-1.19-3.49-2.09-5.59-2.26l-0.78-0.04	c-0.27,0.01-0.57,0.01-0.85,0.04c-0.57,0.06-1.11,0.19-1.62,0.34c-1.03,0.32-1.93,0.8-2.72,1.32c-1.42,0.94-2.55,2.03-3.57,3.15	c0.01,0.02,0.03,0.03,0.04,0.05l0.22,0.28c0.51,0.67,1.62,2.21,2.61,3.87c1.23-1.2,2.83-2.65,3.49-3.07	c0.5-0.31,0.99-0.55,1.43-0.68c0.23-0.06,0.44-0.11,0.64-0.12c0.1-0.02,0.19-0.01,0.3-0.02l0.38,0.02c0.98,0.09,1.94,0.49,2.85,1.19	c1.81,1.44,3.24,3.89,4.17,6.48c0.95,2.6,1.49,5.44,1.52,8.18c0,1.31-0.17,2.57-0.57,3.61c-0.39,1.05-1.38,1.45-2.5,1.45	c-1.63,0-2.81-0.7-3.76-1.68c-1.04-1.09-2.02-2.31-2.96-3.61c-0.78-1.09-1.54-2.22-2.26-3.37c-1.27-2.06-2.97-4.67-4.15-6.85	L25,16.35c-0.31-0.39-0.61-0.78-0.94-1.17c-1.11-1.26-2.34-2.5-3.93-3.56c-0.79-0.52-1.69-1-2.72-1.32	c-0.51-0.15-1.05-0.28-1.62-0.34c-0.18-0.02-0.36-0.03-0.54-0.03c-0.11,0-0.21-0.01-0.31-0.01l-0.78,0.04	c-2.1,0.17-4.08,1.07-5.59,2.26c-1.52,1.2-2.7,2.64-3.63,4.13C4,17.85,3.28,19.41,2.7,21.01c-1.13,3.2-1.74,6.51-1.75,9.93	c0.01,1.78,0.24,3.63,0.96,5.47c0.7,1.8,2.02,3.71,4.12,4.77c1.03,0.53,2.2,0.81,3.32,0.81c1.23,0.03,2.4-0.32,3.33-0.77	c1.87-0.93,3.16-2.16,4.33-3.4c2.31-2.51,4.02-5.23,5.6-8c0.44-0.76,0.86-1.54,1.27-2.33c-0.21-0.41-0.42-0.84-0.64-1.29	c-0.62-1.03-1.39-2.25-1.95-3.1c-0.83,1.5-1.69,2.96-2.58,4.41c-1.59,2.52-3.3,4.97-5.21,6.98c-0.95,0.98-2,1.84-2.92,2.25	c-0.47,0.2-0.83,0.27-1.14,0.25c-0.43,0-0.79-0.1-1.13-0.28c-0.67-0.35-1.3-1.1-1.69-2.15c-0.4-1.04-0.57-2.3-0.57-3.61	c0.03-2.74,0.57-5.58,1.52-8.18c0.93-2.59,2.36-5.04,4.17-6.48c0.91-0.7,1.87-1.1,2.85-1.19l0.38-0.02c0.11,0.01,0.2,0,0.3,0.02	c0.2,0.01,0.41,0.06,0.64,0.12c0.26,0.08,0.54,0.19,0.83,0.34c0.2,0.1,0.4,0.21,0.6,0.34c1,0.64,1.99,1.58,2.92,2.62	c0.72,0.81,1.41,1.71,2.1,2.63L25,25.24c0.75,1.55,1.53,3.09,2.39,4.58c1.58,2.77,3.29,5.49,5.6,8c0.68,0.73,1.41,1.45,2.27,2.1	c0.61,0.48,1.28,0.91,2.06,1.3c0.93,0.45,2.1,0.8,3.33,0.77c1.12,0,2.29-0.28,3.32-0.81c2.1-1.06,3.42-2.97,4.12-4.77	c0.72-1.84,0.95-3.69,0.96-5.47C49.04,27.52,48.43,24.21,47.3,21.01z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Mission = () => {
  return (
    <div className="mt-10 flex h-[100vh] items-center justify-center bg-black">
      <div className="p-5 text-white lg:max-w-2xl">
        <h1 className="font-secondary text-5xl font-bold">Our Mission</h1>
        <p className="mt-3 font-primary">
          Our mission is to paint the streets with the colors of your brand,
          making every vehicle an ambassador of your message. At CASHurDRIVE,
          we're dedicated to crafting not just campaigns but experiences that
          stick with people long after they've reached their destination.
          Through a blend of innovation, data-driven strategies, and a dash of
          magic, we aim to ensure that your brand doesn't just get seen—it gets
          remembered and loved. We're here to drive your brand's message home,
          literally, offering a canvas as limitless as the roads themselves.
        </p>
      </div>
    </div>
  );
};
