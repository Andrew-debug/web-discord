"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import ServersList from "./ServersList";
import { ThemeToggle } from "./ThemeToggle";

function AuthButton() {
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

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-[150px] h-screen">
      <AuthButton />
      <ServersList pathname={pathname} />
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
