import UserNavbar from "@/components/userUI/UserNavbar";
import { ReactNode } from "react";

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full overflow-hidden">
      <UserNavbar />
      {children}
    </div>
  );
}
