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
      <div className="flex flex-row h-full overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
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

          <UserMainFriend />
        </div>

        <UserMainSidebar />
      </div>
    </section>
  );
};

export default UserMain;
