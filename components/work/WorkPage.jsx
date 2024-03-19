import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const WorkPage = ({ title, description, image, i1, i2, i1Link, i2Link }) => {
  return (
    <div className=" p-10">
      <a
        href="/work"
        className="flex items-center gap-4 duration-250 hover:translate-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={35}
          viewBox="0 -960 960 960"
          width={35}
        >
          <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
        </svg>
        <h1 className="w-fit text-2xl font-bold">Back</h1>
      </a>

      <Accordion>
        <AccordionItem
          startContent={
            <>
              <h1 className="text-8xl text-black duration-200 hover:text-primary">
                Client: {title}
              </h1>{" "}
            </>
          }
          key="1"
          aria-label="Accordion 1"
        >
          <div className="max-w-2xl text-xl">{description}</div>
        </AccordionItem>
      </Accordion>
      <div className="mb-4  h-[30rem] w-full">
        <Image
          width={1000}
          height={1000}
          quality={100}
          src={image}
          alt={title}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
      <hr />
      {/* <div className="p-5">
        <h1 className="text-center text-5xl font-bold">You may also like</h1>
        <div className=" my-4 grid grid-cols-4 gap-3">
          <a className="col-span-2" href={i1Link}>
            <img
              src={i1}
              className="col-span-2 h-96 w-full rounded-lg  brightness-50 duration-250 hover:brightness-100"
            />
          </a>
          <a className="col-span-2" href={i2Link}>
            <img
              src={i2}
              className="col-span-2 h-96 w-full rounded-lg  brightness-50 duration-250 hover:brightness-100"
            />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default WorkPage;
