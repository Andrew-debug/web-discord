import { Flame, Accessibility, Plus } from "lucide-react";
import ActionPanel from "../ActionPanel";
import NavigationLink from "./NavigationLink";
import Friendlist from "./Friendlist";

const UserNavbar = async () => {
  return (
    <section className="flex flex-col w-[240px] min-w-[240px] h-[100vh] bg-primary-white dark:bg-dark-500">
      <header className="min-h-[48px] flex items-center py-3 bg-dark-500 rounded-tl-lg border-b-[2px] border-dark-600/40">
        <div className="ml-4 mr-2 truncate">search</div>
      </header>
      <main className="h-full scrollbar-gutter-stable thin-scrollbar transparent-track-scrollbar overflow-hidden hover:overflow-y-scroll light-scrollbar-thumb dark:darker-scrollbar-thumb">
        <NavigationLink
          type="section"
          href="/server/user"
          text="Friends"
          icon={<Accessibility />}
        />
        <NavigationLink
          type="section"
          href="/store"
          text="Nitro"
          icon={<Flame />}
        />
        <div className="px-4 py-2 flex justify-between gap-4">
          <h2 className="text-[11px] font-medium text-light-600 hover:text-light-400 cursor-default">
            DIRECT MESSAGES
          </h2>
          <Plus
            className="text-light-600 hover:text-light-200 cursor-pointer"
            size={17}
          />
        </div>
        <Friendlist />
      </main>
      <ActionPanel />
    </section>
  );
};

export default UserNavbar;
