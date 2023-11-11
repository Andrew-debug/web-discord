"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";
import Avatar from "../Avatar";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

type NavigationLinkProps =
  | { type: "section"; text: string; href: string; icon: ReactNode }
  | { type: "friend"; text: string; href: string; img: string };

const NavigationLink = (props: NavigationLinkProps) => {
  const pathname = usePathname();
  if (props.type === "section") {
    const { href, text, icon } = props;
    return (
      <div className="text-sm">
        <Link
          href={href}
          className={`px-3 py-2 text-sm flex items-center gap-3 ${
            pathname === href ? "bg-light-800" : "bg-dark-500 text-light-400"
          } hover:bg-dark-400 m-1 rounded-md`}
        >
          <div>{icon}</div>
          <span className="truncate max-w-[120px]">{text}</span>
        </Link>
      </div>
    );
  }
  if (props.type === "friend") {
    const [isHovered, setIsHovered] = useState(false);
    const { href, text, img } = props;
    return (
      <li
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          href={href}
          className={`px-2 py-[6px] text-sm flex justify-between items-center gap-3 ${
            pathname === href ? "bg-light-800" : "bg-dark-500 text-light-400"
          } hover:bg-dark-400 my-1 mx-2 rounded-md`}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar img={img} width={32} height={32} />
              <div
                className={`flex items-center justify-center absolute -bottom-1 -right-1 w-[17px] h-[17px] ${
                  pathname === href ? "bg-light-800" : "bg-dark-500"
                } hover:bg-dark-400 rounded-full`}
              >
                <div className="w-[11px] h-[11px] bg-green-600 rounded-full"></div>
              </div>
            </div>
            <span className="truncate max-w-[120px]">{text}</span>
          </div>
          <button className={`ml-1 ${isHovered ? "opacity-100" : "opacity-0"}`}>
            <X
              size={18}
              className="text-light-600 hover:text-light-200 cursor-pointer"
            />
          </button>
        </Link>
      </li>
    );
  }
};

export default NavigationLink;
