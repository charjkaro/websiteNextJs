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
      <Button onPress={onOpen} className="bg-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={60}
          height={60}
          viewBox="0 -960 960 960"
          className="invert rounded"
          
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </Button>

      <Modal
        isOpen={isOpen}
        placement="top"
        onOpenChange={onOpenChange}
        size="full"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="h-full w-full bg-green-400"></div>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
