import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import ChannelUI from "./ChannelUI";
import { useState } from "react";

// function AuthButton() {
//   usePathname;
//   const { data: session } = useSession();

//   if (session) {
//     return (
//       <>
//         {session?.user?.name}
//         <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }
//   return (
//     <>
//       Not signed in
//       <br />
//       <button onClick={() => signIn()}>Sign In</button>
//     </>
//   );
// }

const Navbar = () => {
  //   const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  return (
    <nav className="w-[100px] h-screen bg-slate-700">
      {/* <AuthButton /> */}
      <ChannelUI
      // selectedChannel={selectedChannel}
      // setSelectedChannel={setSelectedChannel}
      />
    </nav>
  );
};

export default Navbar;
