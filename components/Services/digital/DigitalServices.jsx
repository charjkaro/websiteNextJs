/* eslint-disable react/no-unescaped-entities */
"use client";

import { digitalData } from "@/Data/DIgitalData";

const { Accordion, AccordionItem, Avatar } = require("@nextui-org/react");

export const DigitalServices = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion
      className="px-20 py-10 gap-10"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                duration: 3,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
    >
      <AccordionItem
        key="1"
        startContent={
          <h1 className="font-bold  text-5xl overflow-hidden mb-4">
            Creative Service{" "}
          </h1>
        }
        className="border-3 border-white p-4 rounded-3xl hover:border-[#C9F24D] hover:border-[10px] my-4 transition-all duration-400"
      >
        <p className="text-xl">
          At CASHurDRIVE, we believe in the power of creativity and innovation.
          Our creative team is dedicated to creating innovative solutions that
          drive positive change and drive customer loyalty. We believe that
          creativity is the key to success, and we strive to create exceptional
          work that reflects your brand's unique values.
        </p>
        <div className="grid grid-cols-2 gap-1 mt-10">
          {digitalData.slice(0, 7).map((item, index) => {
            return (
              <div
                key={index}
                className=" p-5 hover:bg-[#C9F24D]  border-3  transition-all duration-300 hover:text-white hover:border-3 rounded-3xl border-white"
              >
                {" "}
                <h1 className="text-xl font-bold">{item.title}</h1>
              </div>
            );
          })}
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        startContent={
          <h1 className="font-bold  text-5xl overflow-hidden mb-4">
            Media Service{" "}
          </h1>
        }
        className="border-3 border-white p-4 rounded-3xl hover:border-[#C9F24D] hover:border-[10px] my-4 transition-all duration-400"
      >
        <p className="text-xl">
          At CASHurDRIVE, we believe in the power of creativity and innovation.
          Our creative team is dedicated to creating innovative solutions that
          drive positive change and drive customer loyalty. We believe that
          creativity is the key to success, and we strive to create exceptional
          work that reflects your brand's unique values.
        </p>
        <div className="grid grid-cols-2 gap-1 mt-10">
          {digitalData.slice(7, 10).map((item, index) => {
            return (
              <div
                key={index}
                className=" p-5 hover:bg-[#C9F24D]  border-3  transition-all duration-300 hover:text-white hover:border-3 rounded-3xl border-white"
              >
                {" "}
                <h1 className="text-xl font-bold">{item.title}</h1>
              </div>
            );
          })}
        </div>
      </AccordionItem>
      <AccordionItem
        key="3"
        startContent={
          <h1 className="font-bold  text-5xl overflow-hidden mb-4">
            Creative Service{" "}
          </h1>
        }
        className="border-3 border-white p-4 rounded-3xl hover:border-[#C9F24D] hover:border-[10px] my-4 transition-all duration-400"
      >
        <p className="text-xl">
          At CASHurDRIVE, we believe in the power of creativity and innovation.
          Our creative team is dedicated to creating innovative solutions that
          drive positive change and drive customer loyalty. We believe that
          creativity is the key to success, and we strive to create exceptional
          work that reflects your brand's unique values.
        </p>
        <div className="grid grid-cols-2 gap-1 mt-10">
          {digitalData.slice(0, 7).map((item, index) => {
            return (
              <div
                key={index}
                className=" p-5 hover:bg-[#C9F24D]  border-3  transition-all duration-300 hover:text-white hover:border-3 rounded-3xl border-white"
              >
                {" "}
                <h1 className="text-xl font-bold">{item.title}</h1>
              </div>
            );
          })}
        </div>
      </AccordionItem>
    </Accordion>
  );
};
