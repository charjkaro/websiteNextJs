"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

const FAQ = ({ q1, s1, q2, s2, q3, s3, q4, s4, q5, s5, q6, s6 }) => {
  return (
    <div className="p-5 lg:p-10">
      <h1 className="text-center text-4xl font-bold capitalize text-primary">
        frequently Asked questions
      </h1>
      <div className="font-semibold">
        <Accordion
          variant="splitted"
          className="mx-auto my-10 max-w-4xl grid-cols-2 lg:grid"
        >
          <AccordionItem
            key="1"
            aria-label={q1}
            title={q1}
            className="col-span-1 bg-primary-50 "
          >
            {s1}
          </AccordionItem>
          <AccordionItem key="2" aria-label={q2} title={q2}>
            {s2}
          </AccordionItem>
          <AccordionItem key="3" aria-label={q3} title={q3}>
            {s3}
          </AccordionItem>
          <AccordionItem key="4" aria-label={q4} title={q4}>
            {s4}
          </AccordionItem>
          <AccordionItem key="5" aria-label={q5} title={q5}>
            {s5}
          </AccordionItem>
          <AccordionItem key="5" aria-label={q6} title={q6}>
            {s6}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
