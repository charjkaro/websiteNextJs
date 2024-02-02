"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import Image from "next/image";
import React from "react";

export function ThreeDCardDemo({ title, subTitle }) {
  return (
    <CardContainer className="inter-var overflow-hidden">
      <CardBody className="  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {subTitle}
        </CardItem>
        {/* <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem> */}

        <CardItem
          translateZ={20}
          as="button"
          className="flex justify-end  w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            viewBox="0 -960 960 960"
            className="invert"
          >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
          </svg>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

