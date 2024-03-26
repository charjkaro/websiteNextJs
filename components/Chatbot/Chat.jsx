"use client";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Chatbot } from "../Chatbot/Chatbot";

export default function Chat() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        className="rounded-full bg-primary p-2 duration-200 hover:bg-black "
        onClick={onOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={60}
          viewBox="0 -960 960 960"
          width={60}
          className="invert"
        >
          <path d="m480-80-10-120h-10q-142 0-241-99t-99-241 99-241 241-99q71 0 132.5 26.5t108 73 73 108T800-540q0 75-24.5 144t-67 128-101 107T480-80m80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800t-184.5 75.5T200-540t75.5 184.5T460-280h100zm-101-95q17 0 29-12t12-29-12-29-29-12-29 12-12 29 12 29 29 12m-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5 40.5 15 13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448m30-65" />
        </svg>
      </button>
      <Modal
        isOpen={isOpen}
        backdrop="transparent"
        size="sm"
        onOpenChange={onOpenChange}
        className="w-fit bg-transparent p-0 px-0 py-0 shadow-none"
        style={{ position: "fixed", bottom: 0, right: 0 }} // Add this line
      >
        <ModalContent className="bg-transparent">
          {(onClose) => (
            <>
              <ModalBody className="">
                <Chatbot />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
