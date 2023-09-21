"use client";
import { ReactNode } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { usePathname } from "next/navigation";

const HoverCardComponent = ({
  Link,
  Card,
  side = "right",
  id,
}: {
  Link: ReactNode;
  Card: ReactNode;
  side?: "left" | "top" | "right" | "bottom";
  id: string;
}) => {
  const pathname = usePathname();
  return (
    <>
      <HoverCard.Root openDelay={50} closeDelay={50}>
        <HoverCard.Trigger asChild>{Link}</HoverCard.Trigger>
        <HoverCard.Content
          className="relative bg-primary-black ml-[18px] py-2 px-4 rounded-md"
          side={side}
        >
          {Card}
        </HoverCard.Content>
      </HoverCard.Root>
      {pathname === `/server/${id}` ? (
        <div
          className={`absolute top-2.5 left-0 h-10 w-1 bg-primary-white rounded-e opacity-1 `}
        />
      ) : (
        <div
          className={`absolute top-5 left-0 h-5 w-1 bg-primary-white rounded-e server-side--scale`}
        />
      )}
    </>
  );
};

export default HoverCardComponent;
