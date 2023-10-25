import { Flame, Accessibility, Plus } from "lucide-react";
import ActionPanel from "../ActionPanel";
import Link from "next/link";
import { ReactNode } from "react";
import { headers } from "next/headers";

type INavLink =
  | { type: "section"; text: string; href: string; Icon: ReactNode }
  | { type: "friend"; text: string; href: string; Avatar: ReactNode };

const NavLink = (props: INavLink) => {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";

  if (props.type === "section") {
    const { href, text, Icon } = props;
    return (
      <div className="text-sm">
        <Link
          href={href}
          className={`px-3 py-2 text-sm flex items-center gap-3 ${
            pathname === href ? "bg-dark-400" : "bg-dark-500 text-light-400"
          } hover:bg-dark-400 m-2 rounded-md`}
        >
          <div>{Icon}</div>
          <span>{text}</span>
        </Link>
      </div>
    );
  }
  if (props.type === "friend") {
    const { Avatar } = props;
    return <div>{Avatar}</div>;
  }
};

const UserNavbar = () => {
  const arr = Array.from(Array(50).keys());
  return (
    <section className="flex flex-col w-[240px] min-w-[240px] h-[100vh] bg-primary-white dark:bg-dark-500">
      <header className="flex items-center py-3 bg-dark-500 rounded-tl-lg border-b-[1px] border-dark-700">
        <div className="ml-4 mr-2 truncate">search</div>
      </header>
      <main className="h-full scrollbar-gutter-stable thin-scrollbar transparent-track-scrollbar overflow-hidden hover:overflow-y-scroll light-scrollbar-thumb dark:darker-scrollbar-thumb">
        <NavLink
          type="section"
          href="/server/user"
          text="Friend"
          Icon={<Accessibility />}
        />
        <NavLink type="section" href="/store" text="Nitro" Icon={<Flame />} />
        <div className="px-4 py-2 flex justify-between gap-4">
          <h2 className="text-[11px] font-medium text-light-600 hover:text-light-400 ">
            DIRECT MESSAGES
          </h2>
          <Plus className="text-light-600" size={17} />
        </div>
        <ol>
          {arr.map((friend) => (
            <li className="flex">
              <div className="w-4 h-4 bg-black"></div>
              <p>friend</p>
              <span>X</span>
            </li>
          ))}
        </ol>
      </main>
      <ActionPanel />
    </section>
  );
};

export default UserNavbar;
