/* eslint-disable react/no-unescaped-entities */
import { staticAdvertisingData } from "@/Data/ServicesList";
import Navbar from "@/components/common/Navbar";
import React from "react";

const StaticHero = () => {
  return (
    <div>
      <div className="bg-[#1b1b1b] text-white">
        <Navbar />
        <Hero />
      </div>
      <div className="">
        <AboutTransit />
      </div>
      <div className="bg-[#1b1b1b] text-white">
        <Reason />
      </div>
      <div className="">
        <Partners />
      </div>
      <div className="bg-[#1b1b1b] text-white">
        <TransitServices />
      </div>
    </div>
  );
};

export default StaticHero;

function Hero(params) {
  return (
    <div className="">
      <div className=" pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-8/12">
              <h1 className="mb-8 text-4xl font-bold overflow-hidden text-white sm:text-5xl  md:text-5xl">
                Make Your Message Stand Still, But Not Forgotten
              </h1>
              <h1 className="mb-8   overflow-hidden text-white  md:mb-12 ">
                Transform static spaces into dynamic showcases. Elevate your
                brand with impactful static advertising.
              </h1>
            </div>
            <div className="h-48 overflow-hidden rounded-xl bg-gray-100 shadow-lg lg:h-96 xl:w-5/12">
              <img
                alt="Photo by Fakurian Design"
                className="h-full w-full object-cover object-center bg-fixed"
                loading="lazy"
                src="https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&q=75&fit=crop&w=1000"
              />
            </div>
          </section>
          <section className="flex flex-col items-center justify-between gap-10 border-t pt-8 lg:flex-row lg:gap-8">
            <div className="-mx-6 grid grid-cols-3 gap-4 md:-mx-8 md:flex md:divide-x">
              <div className="px-6 md:px-8">
                <span className="block text-center text-lg font-bold text-white md:text-left md:text-xl">
                  200
                </span>
                <span className="block text-center text-sm font-semibold text-gray-400 md:text-left md:text-base">
                  People
                </span>
              </div>
              <div className="px-6 md:px-8">
                <span className="block text-center text-lg font-bold text-white md:text-left md:text-xl">
                  500+
                </span>
                <span className="block text-center text-sm font-semibold text-gray-400 md:text-left md:text-base">
                  Projects
                </span>
              </div>
              <div className="px-6 md:px-8">
                <span className="block text-center text-lg font-bold text-white md:text-left md:text-xl">
                  250+
                </span>
                <span className="block text-center text-sm font-semibold text-gray-400 md:text-left md:text-base">
                  Customers
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function AboutTransit() {
  return (
    <div className="">
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-full">
                <img
                  alt="Photo by Martin Sanchez"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1592045022521-21ce8b030d79?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            <div className="md:pt-8">
              <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                Maximize Your Brand Presence
              </h1>
              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                Embark on a transformative journey with our tailored Media
                Strategy, meticulously designed to seamlessly integrate with the
                rhythm of your audience's daily lives. Our diverse formats and
                extensive inventory ensure that your brand is not just visible
                but omnipresent. By strategically employing reach and frequency
                tactics, we amplify your message, creating a symphony of
                impressions that linger in the minds of your target audience.
                <br />
                <br />
                Choose us to navigate the dynamic landscape of brand promotion.
                Let us be the catalyst that propels your brand into the
                spotlight, making every interaction an opportunity for lasting
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Reason() {
  return (
    <div className="p-20 ">
      <h1 className="font-bold text-5xl text-center overflow-hidden">
        Use OOH to Meet Any Objective
      </h1>
      <div className="grid grid-cols-4 mt-10 gap-4 py-2">
        <div className="w-full p-5 hover:bg-gray-600 rounded-2xl overflow-hidden transition-all duration-400 h-96 hover:shadow-md hover:shadow-white ">
          <h1 className="text-center font-bold text-3xl ">
            New Market Exposure
          </h1>
          <div className="w-full mt-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/icons%2F4.svg?alt=media&token=9969c5fe-c06a-4185-a069-5d33cadec4a4"
              className="w-full h-full object-top object-contain"
              alt=""
            />
          </div>
        </div>
        <div className="w-full p-5 hover:bg-gray-600 rounded-2xl overflow-hidden transition-all duration-400 h-96 hover:shadow-md hover:shadow-white ">
          <h1 className="text-center font-bold text-3xl ">New Brand Launch</h1>
          <div className="w-full mt-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/icons%2F5.svg?alt=media&token=17cf9733-4968-4496-98a0-1e0ed29f655b"
              className="w-full h-full object-center object-contain"
              alt=""
            />
          </div>
        </div>
        <div className="w-full p-5 hover:bg-gray-600 rounded-2xl overflow-hidden transition-all duration-400 h-96 hover:shadow-md hover:shadow-white ">
          <h1 className="text-center font-bold text-3xl ">
            New Product Launch
          </h1>
          <div className="w-full mt-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/icons%2F6.svg?alt=media&token=6fd67143-dc3f-448c-8801-9a858acbfca5"
              className="w-full h-full object-center"
              alt=""
            />
          </div>
        </div>
        <div className="w-full p-5 hover:bg-gray-600 rounded-2xl overflow-hidden transition-all duration-400 h-96 hover:shadow-md hover:shadow-white ">
          <h1 className="text-center font-bold text-3xl ">
            Raise Brand Awareness
          </h1>
          <div className="w-full mt-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/icons%2F7.svg?alt=media&token=821786a1-be14-4838-a857-bb46d2bd4376"
              className="w-full h-full object-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
function Partners() {
  return (
    <div className="">
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
            <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">
              Trusted by the best
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-3 lg:gap-6">
            <div className="flex h-16 items-center justify-center rounded-lg  p-6 text-gray-400 sm:h-24">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Samsung_wordmark.svg/7051px-Samsung_wordmark.svg.png"
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg  p-6 text-gray-400 sm:h-24">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg  p-6 text-gray-400 sm:h-24">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg  p-6 text-gray-400 sm:h-24">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Sharp_Corporation.svg/2560px-Logo_of_the_Sharp_Corporation.svg.png"
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg  p-6 text-gray-400 sm:h-24">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg  p-6 text-gray-400 sm:h-24">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/1280px-Lenovo_logo_2015.svg.png"
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function TransitServices(params) {
  return (
    <div className="py-10">
      <h1 className="text-center text-5xl font-bold overflow-hidden ">
        Services We offer
      </h1>
      <div className="grid-cols-2 grid gap-4 p-20">
        {staticAdvertisingData.map((serviceData, index) => {
          return (
            <div key={index} className="">
              <a
                href={`${serviceData.id}`}
                className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
              >
                <img
                  src={serviceData.images[0]}
                  loading="lazy"
                  alt={serviceData.title}
                  className="h-full w-full lg:brightness-[30%] hover:brightness-100 object-cover object-center transition ease-soft-spring  duration-200 group-hover:scale-110"
                />
              </a>
              <div>
                <a
                  href={`${serviceData.id}`}
                  className="hover:gray-800 mb-1 flex items-center justify-between font-bold text-white transition duration-100 lg:text-xl"
                >
                  {serviceData.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={40}
                    viewBox="0 -960 960 960"
                    width={40}
                    className="invert"
                  >
                    <path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ServiceItem({ image, title, subTitle }) {
  return (
    <div className="w-full h-96 bg-blue-500 relative overflow-hidden">
      hello
    </div>
  );
}
