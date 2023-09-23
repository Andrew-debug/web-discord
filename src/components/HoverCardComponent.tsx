"use client";
import * as HoverCard from "@radix-ui/react-hover-card";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Avatar from "./Avatar";

const HoverCardComponent = ({
  link,
  cardMessage,
  side = "right",
  id,
  isNavbar = false,
  img,
}: {
  link: string;
  cardMessage: string;
  side?: "left" | "top" | "right" | "bottom";
  id: string;
  isNavbar?: boolean;
  img?: string;
}) => {
  const pathname = usePathname();
  return (
    <>
      <HoverCard.Root openDelay={50} closeDelay={50}>
        <HoverCard.Trigger asChild>
          <Link href={link}>
            <Avatar
              width={48}
              height={48}
              img={img}
              active={pathname === `/server/${id}`}
            />
          </Link>
        </HoverCard.Trigger>
        <HoverCard.Content
          className="relative bg-primary-black ml-[18px] py-2 px-4 rounded-md"
          side={side}
        >
          <div className="absolute top-2.5 -left-1.5 w-0 h-0 border-t-8 border-t-transparent border-r-[10px] border-r-primary-black border-b-8 border-b-transparent" />
          <div className="text-sm">{cardMessage}</div>
        </HoverCard.Content>
      </HoverCard.Root>
      {isNavbar && (
        <>
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
      )}
    </>
  );
};

export default HoverCardComponent;
