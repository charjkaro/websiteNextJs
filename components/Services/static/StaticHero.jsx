/* eslint-disable react/no-unescaped-entities */
"use client";
import { staticAdvertisingData } from "@/Data/ServicesList";
import Navbar from "@/components/common/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const StaticHero = () => {
  return (
    <div>
      <div className="bg-[#1b1b1b] text-white">
        <div className="fixed z-50 w-full">
          <Navbar />
        </div>
        <Hero />
      </div>
      {/* <div className="">
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
      </div> */}
    </div>
  );
};

export default StaticHero;

function Hero(params) {
  return (
    <>
      <div className="pb-5 pt-24 text-center  text-white">
        <h1 className="mx-auto max-w-3xl text-6xl">
          Make Your Message Stand Still, But Not Forgotten
        </h1>
        <p className="mx-auto my-5 max-w-2xl ">
          Transform static spaces into dynamic showcases. Elevate your brand
          with impactful static advertising.
        </p>
        <button className="rounded-2xl border-2 border-white bg-white p-2 px-8 text-black hover:bg-primary">
          Contact us
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="relative mx-auto grid h-[80vh] w-[100vw] grid-cols-5 gap-2 overflow-hidden rounded-t-2xl "
      >
        <div className="absolute h-full w-full bg-gradient-to-b from-transparent via-transparent to-black"></div>

        {staticAdvertisingData.slice(0, 10).map((serviceData, index) => (
          <div key={index} className="h-64 w-full bg-blue-400 rounded-3xl overflow-hidden">
            <Image
              height={500}
              width={500}
              src={serviceData.images[0]}
              alt=""
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        ))}
      </motion.div>
    </>
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
    <div className="p-5 lg:p-20 ">
      <h1 className="overflow-hidden text-center text-4xl font-bold lg:text-5xl">
        Use OOH to Meet Any Objective
      </h1>
      <div className="mt-10 grid gap-4 py-2 lg:grid-cols-4">
        <div className="h-96 w-full overflow-hidden rounded-2xl p-5 transition-all duration-400 hover:bg-gray-600 hover:shadow-md hover:shadow-white ">
          <h1 className="text-center text-3xl font-bold ">
            New Market Exposure
          </h1>
          <div className="mt-2 w-full">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/icons%2F4.svg?alt=media&token=9969c5fe-c06a-4185-a069-5d33cadec4a4"
              className="h-full w-full object-contain object-top"
              alt=""
            />
          </div>
        </div>
        <div className="h-96 w-full overflow-hidden rounded-2xl p-5 transition-all duration-400 hover:bg-gray-600 hover:shadow-md hover:shadow-white ">
          <h1 className="text-center text-3xl font-bold ">New Brand Launch</h1>
          <div className="mt-2 w-full">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/icons%2F5.svg?alt=media&token=17cf9733-4968-4496-98a0-1e0ed29f655b"
              className="h-full w-full object-contain object-center"
              alt=""
            />
          </div>
        </div>
        <div className="h-96 w-full overflow-hidden rounded-2xl p-5 transition-all duration-400 hover:bg-gray-600 hover:shadow-md hover:shadow-white ">
          <h1 className="text-center text-3xl font-bold ">
            New Product Launch
          </h1>
          <div className="mt-2 w-full">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/icons%2F6.svg?alt=media&token=6fd67143-dc3f-448c-8801-9a858acbfca5"
              className="h-full w-full object-center"
              alt=""
            />
          </div>
        </div>
        <div className="h-96 w-full overflow-hidden rounded-2xl p-5 transition-all duration-400 hover:bg-gray-600 hover:shadow-md hover:shadow-white ">
          <h1 className="text-center text-3xl font-bold ">
            Raise Brand Awareness
          </h1>
          <div className="mt-2 w-full">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/icons%2F7.svg?alt=media&token=821786a1-be14-4838-a857-bb46d2bd4376"
              className="h-full w-full object-center"
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
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg  p-6 text-gray-400 sm:h-24">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg  p-6 text-gray-400 sm:h-24">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg  p-6 text-gray-400 sm:h-24">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Sharp_Corporation.svg/2560px-Logo_of_the_Sharp_Corporation.svg.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg  p-6 text-gray-400 sm:h-24">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg  p-6 text-gray-400 sm:h-24">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/1280px-Lenovo_logo_2015.svg.png"
                alt=""
                className="h-full w-full object-contain"
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
      <h1 className="overflow-hidden text-center text-5xl font-bold ">
        Services We offer
      </h1>
      <div className="grid gap-4 p-5 lg:grid-cols-2 lg:p-20">
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
                  className="h-full w-full object-cover object-center transition duration-200 ease-soft-spring hover:brightness-100  group-hover:scale-110 lg:brightness-[30%]"
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
    <div className="relative h-96 w-full overflow-hidden bg-blue-500">
      hello
    </div>
  );
}
