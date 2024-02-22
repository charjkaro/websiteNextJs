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
          className="animate-pulse invert"
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
              <div className="h-full w-full bg-[#1b1b1b] p-5 py-20 text-white md:p-20">
                <ul className="flex flex-col justify-evenly gap-5">
                  <li className="overflow-hidden">
                    <a
                      className="p-2 py-2 text-4xl font-bold  transition-all duration-250 ease-linear  hover:tracking-widest hover:text-[#FF5F1F] hover:underline md:text-6xl lg:text-8xl "
                      href="/"
                    >
                      <span className="hover:font-serif">H</span>
                      <span className="hover:font-serif">o</span>
                      <span className="hover:font-serif">m</span>
                      <span className="hover:font-serif">e</span>
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      className="p-2 py-2 text-4xl font-bold transition-all duration-250 ease-linear hover:tracking-widest hover:text-[#FF5F1F] hover:underline md:text-6xl lg:text-8xl "
                      href="/services"
                    >
                      <span className="hover:font-serif">S</span>
                      <span className="hover:font-serif">e</span>
                      <span className="hover:font-serif">r</span>
                      <span className="hover:font-serif">v</span>
                      <span className="hover:font-serif">i</span>
                      <span className="hover:font-serif">c</span>
                      <span className="hover:font-serif">e</span>
                      <span className="hover:font-serif">s</span>
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      className="p-2 py-2 text-4xl font-bold transition-all duration-250 ease-linear hover:tracking-widest hover:text-[#FF5F1F] hover:underline md:text-6xl lg:text-8xl "
                      href="/about"
                    >
                      About
                    </a>
                  </li>

                  <li className="overflow-hidden">
                    <a
                      className="p-2 py-2 text-4xl font-bold transition-all duration-250 ease-linear hover:tracking-widest hover:text-[#FF5F1F] hover:underline md:text-6xl lg:text-8xl "
                      href="/work"
                    >
                      Work
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      className="p-2 py-2 text-4xl font-bold transition-all duration-250 ease-linear hover:tracking-widest hover:text-[#FF5F1F] hover:underline md:text-6xl lg:text-8xl "
                      href="/careers"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      className="p-2 py-2 text-4xl font-bold transition-all duration-250 ease-linear hover:tracking-widest hover:text-[#FF5F1F] hover:underline md:text-6xl lg:text-8xl "
                      href="/contact"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      className="p-2 py-2 text-4xl font-bold transition-all duration-250 ease-linear hover:tracking-widest hover:text-[#FF5F1F] hover:underline md:text-6xl lg:text-8xl "
                      href="/privacy-policy"
                    >
                      Privacy
                    </a>
                  </li>

                  <li className="overflow-hidden">
                    <a
                      className="p-2 py-2 text-4xl font-bold transition-all duration-250 ease-linear hover:tracking-widest hover:text-[#FF5F1F] hover:underline md:text-6xl lg:text-8xl "
                      href="/sitemap"
                    >
                      Sitemap
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
