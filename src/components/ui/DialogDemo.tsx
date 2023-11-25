"use client";
import React, { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "../../styles/dialogDemoStyles.css";
import ServerForm from "../createServer/ServerForm";

const DialogDemo = ({ children }: { children: ReactNode }) => (
  <Dialog.Root>
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
        <ServerForm />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
