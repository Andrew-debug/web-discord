import Link from "next/link";
import Avatar from "../Avatar";
import { Swords } from "lucide-react";

const UserMainSidebar = () => {
  return (
    <div className="border-l-[1px] h-full border-light-800 user-main-sidebar">
      <aside className="h-full bg-dark-400">
        <div className="p-4">
          <h2 className="text-xl font-bold">Active now</h2>

          <ul className="mt-4">
            <li>
              <Link
                href={"/"}
                className="flex justify-between items-center p-[14px] bg-dark-500 border-[1px] border-light-800 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <Avatar width={36} height={36} />
                  <div>
                    <div className="font-medium">Arthas</div>
                    <div className="text-xs text-light-400">Dota 2 - 21m</div>
                  </div>
                </div>
                <Swords />
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default UserMainSidebar;
