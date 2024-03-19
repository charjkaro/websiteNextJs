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
import Link from "next/link";

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
          className="  scale-125 animate-pulse "
        >
          <g id="Menu / Menu_Alt_02">
            <path
              id="Vector"
              d="M11 17H19M5 12H19M11 7H19"
              stroke="black"
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
        <ModalContent className="overflow-y-scroll ">
          {(onClose) => (
            <>
              <div className="h-full w-full overflow-y-scroll bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFRyYW5zZm9ybT0icm90YXRlKC0zMDcsIDAuNSwgMC41KSIgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImdnZ3JhaW4tZ3JhZGllbnQyIj48c3RvcCBzdG9wLWNvbG9yPSJoc2woMTk0LCA4MyUsIDQ5JSkiIHN0b3Atb3BhY2l0eT0iMSIgb2Zmc2V0PSItMCUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSJyZ2JhKDI1NSwyNTUsMjU1LDApIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMTAwJSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VHJhbnNmb3JtPSJyb3RhdGUoMzA3LCAwLjUsIDAuNSkiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiIGlkPSJnZ2dyYWluLWdyYWRpZW50MyI+PHN0b3Agc3RvcC1jb2xvcj0iaHNsKDIyNywgMTAwJSwgNTAlKSIgc3RvcC1vcGFjaXR5PSIxIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0icmdiYSgyNTUsMjU1LDI1NSwwKSIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxmaWx0ZXIgaWQ9ImdnZ3JhaW4tZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC41NSIgbnVtT2N0YXZlcz0iMiIgc2VlZD0iMiIgc3RpdGNoVGlsZXM9InN0aXRjaCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXN1bHQ9InR1cmJ1bGVuY2UiPjwvZmVUdXJidWxlbmNlPgogIDxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiIHg9IjAlIiB5PSIwJSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgaW49InR1cmJ1bGVuY2UiIHJlc3VsdD0iY29sb3JtYXRyaXgiPjwvZmVDb2xvck1hdHJpeD4KICA8ZmVDb21wb25lbnRUcmFuc2ZlciB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGluPSJjb2xvcm1hdHJpeCIgcmVzdWx0PSJjb21wb25lbnRUcmFuc2ZlciI+CiAgICA8ZmVGdW5jUiB0eXBlPSJsaW5lYXIiIHNsb3BlPSIzIj48L2ZlRnVuY1I+CiAgICA8ZmVGdW5jRyB0eXBlPSJsaW5lYXIiIHNsb3BlPSIzIj48L2ZlRnVuY0c+CiAgICA8ZmVGdW5jQiB0eXBlPSJsaW5lYXIiIHNsb3BlPSIzIj48L2ZlRnVuY0I+CiAgPC9mZUNvbXBvbmVudFRyYW5zZmVyPgogIDxmZUNvbG9yTWF0cml4IHg9IjAlIiB5PSIwJSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgaW49ImNvbXBvbmVudFRyYW5zZmVyIiByZXN1bHQ9ImNvbG9ybWF0cml4MiIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjEgMCAwIDAgMAogICAgICAgICAgMCAxIDAgMCAwCiAgICAgICAgICAwIDAgMSAwIDAKICAgICAgICAgIDAgMCAwIDI0IC0xNiI+PC9mZUNvbG9yTWF0cml4PgogIDwvZmlsdGVyPjwvZGVmcz48Zz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJoc2woMCwgMTAwJSwgNjAlKSI+PC9yZWN0PjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ2dncmFpbi1ncmFkaWVudDMpIj48L3JlY3Q+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnZ2dyYWluLWdyYWRpZW50MikiPjwvcmVjdD48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIgZmlsdGVyPSJ1cmwoI2dnZ3JhaW4tZmlsdGVyKSIgb3BhY2l0eT0iMC4xMiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBzb2Z0LWxpZ2h0Ij48L3JlY3Q+PC9nPjwvc3ZnPg==')] bg-cover bg-center bg-no-repeat p-5 py-20 text-white md:p-20">
                <ul className="flex flex-col justify-evenly gap-5">
                  <li className="overflow-hidden">
                    <Link
                      className="p-2 py-2 text-4xl font-bold  transition-all duration-250 ease-linear  hover:tracking-widest hover:text-[#FF5F1F] hover:underline md:text-6xl lg:text-8xl "
                      href="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="overflow-hidden">
                    <Link
                      className="p-2 py-2 text-4xl font-bold transition-all duration-250 ease-linear hover:tracking-widest hover:text-[#FF5F1F] hover:underline md:text-6xl lg:text-8xl "
                      href="/about"
                    >
                      About
                    </Link>
                  </li>

                  <li className="overflow-hidden">
                    <Link
                      className="p-2 py-2 text-4xl font-bold transition-all duration-250 ease-linear hover:tracking-widest hover:text-[#FF5F1F] hover:underline md:text-6xl lg:text-8xl "
                      href="/work"
                    >
                      Work
                    </Link>
                  </li>
                  <li className="overflow-hidden">
                    <Link
                      className="p-2 py-2 text-4xl font-bold transition-all duration-250 ease-linear hover:tracking-widest hover:text-[#FF5F1F] hover:underline md:text-6xl lg:text-8xl "
                      href="/team"
                    >
                      Team
                    </Link>
                  </li>
                  <li className="overflow-hidden">
                    <Link
                      className="p-2 py-2 text-4xl font-bold transition-all duration-250 ease-linear hover:tracking-widest hover:text-[#FF5F1F] hover:underline md:text-6xl lg:text-8xl "
                      href="/careers"
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="overflow-hidden">
                    <Link
                      className="p-2 py-2 text-4xl font-bold transition-all duration-250 ease-linear hover:tracking-widest hover:text-[#FF5F1F] hover:underline md:text-6xl lg:text-8xl "
                      href="/careers"
                    >
                      Investor Relations
                    </Link>
                  </li>
                  <li className="overflow-hidden">
                    <Link
                      className="p-2 py-2 text-4xl font-bold transition-all duration-250 ease-linear hover:tracking-widest hover:text-[#FF5F1F] hover:underline md:text-6xl lg:text-8xl "
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="overflow-hidden">
                    <Link
                      className="p-2 py-2 text-4xl font-bold transition-all duration-250 ease-linear hover:tracking-widest hover:text-[#FF5F1F] hover:underline md:text-6xl lg:text-8xl "
                      href="/privacy-policy"
                    >
                      Privacy
                    </Link>
                  </li>

                  <li className="overflow-hidden">
                    <Link
                      className="p-2 py-2 text-4xl font-bold transition-all duration-250 ease-linear hover:tracking-widest hover:text-[#FF5F1F] hover:underline md:text-6xl lg:text-8xl "
                      href="/sitemap"
                    >
                      Sitemap
                    </Link>
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
