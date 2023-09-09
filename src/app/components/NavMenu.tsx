"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const tmp1 = "py-1 px-2 text-gray-300 bg-gray-700";
const tmp2 = "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

function AuthButton() {
  usePathname;
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session?.user?.name}
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in
      <br />
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}

export default function NavMenu() {
  const pathname = usePathname();
  return (
    <div>
      <AuthButton />
      <hr className="my-4" />
      <ul>
        <Link href="/">
          <li className={pathname === "/" ? tmp1 : tmp2}>Home</li>
        </Link>
        <Link href="/protected">
          <li className={pathname === "/protected" ? tmp1 : tmp2}>
            protected routes
          </li>
        </Link>
        <Link href="/serverAction">
          <li className={pathname === "/serverAction" ? tmp1 : tmp2}>
            serverAction
          </li>
        </Link>
      </ul>
    </div>
  );
}
