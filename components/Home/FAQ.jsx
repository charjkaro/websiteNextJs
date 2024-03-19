"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

const FAQ = () => {
  return (
    <div className="p-5 lg:p-10">
      <h1 className="text-center text-4xl font-bold capitalize text-primary">
        frequently Asked questions
      </h1>
      <div className="">
        <Accordion
          variant="splitted"
          className="mx-auto my-10 max-w-3xl grid-cols-2 lg:grid"
        >
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="Accordion 1"
            className="col-span-1 bg-primary-50 "
          >
            hello
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            hello
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            hello
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 4" title="Accordion 4">
            hello
          </AccordionItem>
          <AccordionItem key="5" aria-label="Accordion 5" title="Accordion 5">
            hello
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
