import { Search } from "lucide-react";
import UserMainNav from "./UserMainNav";
import UserMainFriend from "./UserMainFriend";
import UserMainSidebar from "./UserMainSidebar";

const UserMain = () => {
  return (
    <section className="w-full h-[100vh] flex flex-col overflow-hidden">
      <header className="w-full min-h-[48px] flex items-center bg-dark-400 border-b-[2px] border-dark-600/40">
        <UserMainNav />
      </header>
      <main className="flex h-[calc(100%-40px)]">
        <div className="w-full h-full flex flex-col overflow-hidden">
          <div className="mt-4 mr-5 mb-2 ml-[30px] bg-dark-700 rounded">
            <div className="flex items-center py-[2px]">
              <input
                type="text"
                name="Search"
                placeholder="Search"
                className="w-full px-2 h-[30px] min-w-[48px] bg-transparent focus:outline-none placeholder:text-sm"
              />
              <Search size={18} color="silver" className="mr-3" />
            </div>
          </div>
          <div className="flex-auto my-3 ml-6">
            <div className="ml-2 uppercase text-xs font-bold text-light-600">
              online - 2
            </div>
          </div>
          <UserMainFriend />
        </div>
        <UserMainSidebar />
      </main>
    </section>
  );
};

export default UserMain;
