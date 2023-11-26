"use client";
import React, { ReactNode, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "../../styles/dialogDemoStyles.css";
import ChannelForm from "../createChannel/ChannelForm";
import { X } from "lucide-react";

const DialogDemo = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay bg-black/80" />
        <Dialog.Content className="DialogContent bg-primary-white">
          <Dialog.Title className="text-xl font-bold text-black text-center">
            Customise your server
          </Dialog.Title>
          <Dialog.Description className="mt-[10px] mb-5 text-sm text-dark-800 text-center font-light">
            Give your new server a personality with a name and an icon. You can
            always change it later.
          </Dialog.Description>

          <ChannelForm setOpenModal={setOpen} />

          <Dialog.Close asChild>
            <button
              type="button"
              className="absolute top-[10px] right-[10px] inline-flex justify-center items-center rounded-full w-6 h-6 text-light-600 hover:text-light-800 transition-colors"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogDemo;
