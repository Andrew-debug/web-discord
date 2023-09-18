import { ReactNode } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";

const HoverCardComponent = ({
  Link,
  Card,
  side = "right",
}: {
  Link: ReactNode;
  Card: ReactNode;
  side?: "left" | "top" | "right" | "bottom";
}) => {
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
    </>
  );
};

export default HoverCardComponent;
