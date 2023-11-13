import {
  Accessibility,
  HelpCircle,
  Inbox,
  MessageSquarePlus,
} from "lucide-react";
import Link from "next/link";

const UserMainNav = () => {
  return (
    <nav className="w-full flex justify-between items-center">
      <ul className="flex justify-between items-center gap-2">
        <li>
          <Link
            href="/server/user"
            className="flex justify-center gap-2 px-3 border-r-[1px] border-light-800"
          >
            <Accessibility size={22} color="silver" />
            <p className="pt-[1px] text-[15px]">Friends</p>
          </Link>
        </li>
        <li>
          <Link
            href="/server/user"
            className="flex text-[14px] justify-center px-2"
          >
            <p className="px-2 py-1 font-medium text-light-600 hover:text-primary-white hover:bg-dark-300 rounded">
              Online
            </p>
          </Link>
        </li>
        <li>
          <Link
            href="/server/user"
            className="flex text-[14px] justify-center px-2"
          >
            <p className="px-2 py-1 font-medium text-light-600 hover:text-primary-white hover:bg-dark-300 rounded">
              All
            </p>
          </Link>
        </li>
        <li>
          <Link
            href="/server/user"
            className="flex text-[14px] justify-center px-2"
          >
            <p className="px-2 py-1 font-medium text-light-600 hover:text-primary-white hover:bg-dark-300 rounded">
              Pending
            </p>
          </Link>
        </li>
        <li>
          <Link
            href="/server/user"
            className="flex text-[14px] justify-center px-2"
          >
            <p className="px-2 py-1 font-medium text-light-600 hover:text-primary-white hover:bg-dark-300 rounded">
              Blocked
            </p>
          </Link>
        </li>
        <li>
          <Link
            href="/server/user"
            className="flex text-[14px] justify-center px-2"
          >
            <p className="px-2 py-[2px] font-medium text-primary-white bg-primary-green rounded">
              Add Friend
            </p>
          </Link>
        </li>
      </ul>

      <ul className="flex justify-between items-center gap-1 mr-2">
        <li>
          <Link
            href="/server/user"
            className="flex justify-center gap-2 px-3 border-r-[1px] border-light-800"
          >
            <MessageSquarePlus size={22} color="silver" />
          </Link>
        </li>
        <li>
          <Link href="/server/user" className="flex justify-center px-2">
            <Inbox size={22} color="silver" />
          </Link>
        </li>
        <li>
          <Link href="/server/user" className="flex justify-center px-2">
            <HelpCircle size={22} color="silver" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserMainNav;
