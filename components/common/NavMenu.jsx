"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

export default function NavMenu() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={onOpen} className="bg-transparent ">
        <svg
          width={100}
          height={100}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="invert animate-pulse"
        >
          <g id="Menu / Menu_Alt_02">
            <path
              id="Vector"
              d="M11 17H19M5 12H19M11 7H19"
              stroke="#000000"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </Button>

      <Modal
        isOpen={isOpen}
        placement="top"
        onOpenChange={onOpenChange}
        size="full"
      >
        <ModalContent className="overflow-y-scroll bg-[#1b1b1b]">
          {(onClose) => (
            <>
              <div className="h-full w-full bg-[#1b1b1b] text-white md:p-20 p-5 py-20">
                <ul className="flex flex-col justify-evenly gap-5">
                  <li className="overflow-hidden">
                    <a
                      className="lg:text-8xl md:text-6xl text-4xl  hover:tracking-widest font-bold py-2 hover:text-[#FF5F1F] hover:underline transition-all ease-linear duration-250 p-2 "
                      href="/"
                    >
                      Home.
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      className="lg:text-8xl md:text-6xl text-4xl hover:tracking-widest font-bold py-2 hover:text-[#FF5F1F] hover:underline transition-all ease-linear duration-250 p-2 "
                      href="/services"
                    >
                      Services.
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      className="lg:text-8xl md:text-6xl text-4xl hover:tracking-widest font-bold py-2 hover:text-[#FF5F1F] hover:underline transition-all ease-linear duration-250 p-2 "
                      href="/about"
                    >
                      About.
                    </a>
                  </li>

                  <li className="overflow-hidden">
                    <a
                      className="lg:text-8xl md:text-6xl text-4xl hover:tracking-widest font-bold py-2 hover:text-[#FF5F1F] hover:underline transition-all ease-linear duration-250 p-2 "
                      href="/work"
                    >
                      Work.
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      className="lg:text-8xl md:text-6xl text-4xl hover:tracking-widest font-bold py-2 hover:text-[#FF5F1F] hover:underline transition-all ease-linear duration-250 p-2 "
                      href="/careers"
                    >
                      Careers.
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      className="lg:text-8xl md:text-6xl text-4xl hover:tracking-widest font-bold py-2 hover:text-[#FF5F1F] hover:underline transition-all ease-linear duration-250 p-2 "
                      href="/contact"
                    >
                      Contact.
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      className="lg:text-8xl md:text-6xl text-4xl hover:tracking-widest font-bold py-2 hover:text-[#FF5F1F] hover:underline transition-all ease-linear duration-250 p-2 "
                      href="/privacy-policy"
                    >
                      Privacy.
                    </a>
                  </li>

                  <li className="overflow-hidden">
                    <a
                      className="lg:text-8xl md:text-6xl text-4xl hover:tracking-widest font-bold py-2 hover:text-[#FF5F1F] hover:underline transition-all ease-linear duration-250 p-2 "
                      href="/sitemap"
                    >
                      Sitemap.
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
