"use client";

import { useTheme } from "next-themes";
import { ReactNode } from "react";

const ClientChatWrapper = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`h-[88vh] flex flex-col-reverse overflow-y-auto ${
        theme === "light" && "light-scrollbar-track light-scrollbar-thumb"
      }`}
    >
      {children}
    </div>
  );
};

export default ClientChatWrapper;
