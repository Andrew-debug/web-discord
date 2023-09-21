"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Avatar from "./Avatar";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <Avatar width={48} height={48} img={session?.user?.image} />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div>
      <Avatar width={48} height={48} />
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  );
}

export default AuthButton;
