"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tmp1 = "py-1 px-2 text-gray-300 bg-gray-700";
const tmp2 = "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

export default function NavMenu() {
  const pathname = usePathname();
  return (
    <div>
      <ul>
        <Link href="/">
          <li className={pathname === "/" ? tmp1 : tmp2}>Home</li>
        </Link>
        <Link href="/protected">
          <li className={pathname === "/protected" ? tmp1 : tmp2}>
            Protected route
          </li>
        </Link>
        <Link href="/serverAction">
          <li className={pathname === "/serverAction" ? tmp1 : tmp2}>
            Server action
          </li>
        </Link>
        <Link href="/apiFromClient">
          <li className={pathname === "/apiFromClient" ? tmp1 : tmp2}>
            API From Client
          </li>
        </Link>
        <Link href="/apiFromServer">
          <li className={pathname === "/apiFromServer" ? tmp1 : tmp2}>
            API From Server
          </li>
        </Link>
      </ul>
    </div>
  );
}
