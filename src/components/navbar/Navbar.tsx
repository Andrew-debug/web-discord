"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import ServersList from "./ServersList";
import { ThemeToggle } from "./ThemeToggle";
import Avatar from "../Avatar";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Avatar width={48} height={48} img={session?.user?.image} />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <Avatar width={48} height={48} />
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-[72px] h-screen">
      <AuthButton />
      <ServersList pathname={pathname} />
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
