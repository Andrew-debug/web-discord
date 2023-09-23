"use client";
import * as HoverCard from "@radix-ui/react-hover-card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Avatar from "../Avatar";

type ChannelLink = {
  type: "channel";
  link: string;
  cardMessage: string;
  id: string;
  img: string;
};
type ActionLink = {
  type: "action";
  link: string;
  cardMessage: string;
  id: string;
  svg: string;
  bgColor: string;
};

type INavbarLink = {
  link: string;
  cardMessage: string;
  id: string;
  img?: string;
} & (ChannelLink | ActionLink);

const NavbarLink = ({ link, img, cardMessage, id }: INavbarLink) => {
  const pathname = usePathname();
  return (
    <div className="relative flex justify-center mb-1 pt-[6px] server-icon">
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
          side="right"
        >
          <div className="absolute top-2.5 -left-1.5 w-0 h-0 border-t-8 border-t-transparent border-r-[10px] border-r-primary-black border-b-8 border-b-transparent" />
          <div className="text-sm">{cardMessage}</div>
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
    </div>
  );
};

export default NavbarLink;
