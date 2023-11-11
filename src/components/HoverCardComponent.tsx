"use client";
import * as HoverCard from "@radix-ui/react-hover-card";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Avatar from "./Avatar";
import { ReactNode } from "react";

interface HoverCardComponentProps {
  link: string;
  cardMessage: string;
  id: string;
  img?: string;
  icon?: ReactNode;
}

const HoverCardComponent = ({
  link,
  cardMessage,
  id,
  img,
  icon,
}: HoverCardComponentProps) => {
  const pathname = usePathname();
  return (
    <>
      <HoverCard.Root openDelay={50} closeDelay={50}>
        <HoverCard.Trigger asChild>
          <Link href={link}>
            {img && (
              <Avatar
                width={48}
                height={48}
                img={img}
                active={pathname === `/server/${id}`}
              />
            )}
            {icon && icon}
          </Link>
        </HoverCard.Trigger>
        <HoverCard.Content
          className="relative bg-primary-black ml-[18px] py-2 px-4 rounded-md z-50"
          side="right"
        >
          <div className="absolute top-2.5 -left-1.5 w-0 h-0 border-t-8 border-t-transparent border-r-[10px] border-r-primary-black border-b-8 border-b-transparent" />
          <div className="text-sm">{cardMessage}</div>
        </HoverCard.Content>
      </HoverCard.Root>
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
    </>
  );
};

export default HoverCardComponent;
