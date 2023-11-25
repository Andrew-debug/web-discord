import Image from "next/image";
import Avatar from "../Avatar";
import { Hash } from "lucide-react";

const UserChatSidebar = ({ image }: { image?: string }) => {
  return (
    <div className="h-full user-friend-sidebar overflow-y-auto">
      <aside className="h-full bg-dark-600">
        <div className="relative">
          {image ? (
            <Image fill height={120} src={image} alt="friend background" />
          ) : (
            <div className="w-full h-[120px] bg-light-400"></div>
          )}
          <div className="absolute top-16 left-3 w-[90px] h-[90px] rounded-full">
            <Image
              src={"https://cdn.discordapp.com/embed/avatars/0.png"}
              className="rounded-full"
              width={90}
              height={90}
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex justify-end p-4">
          <div className="flex justify-center items-center w-8 h-8 bg-dark-900 rounded cursor-pointer">
            <div className="flex justify-center items-center w-5 h-5 bg-[#1dba9a] rounded-full">
              <Hash size={12} color="black" />
            </div>
          </div>
        </div>

        <div className="mx-4 px-2 bg-dark-900 rounded-lg text-sm font-semibold">
          <div className="w-full py-2 border-b-[1px] border-dark-300">
            <h3 className="text-lg">Arthas</h3>
            <div className="text-sm font-normal text-light-200">arthas6969</div>
          </div>
          <div className="w-full py-2 border-b-[1px] border-dark-300">
            <h3 className="uppercase text-xs mb-1">discord member since</h3>
            <div className="text-xs font-normal text-light-400">
              8 <span className="capitalize">oct</span> 1999
            </div>
          </div>
          <div className="w-full py-2 uppercase">
            <h3 className="text-xs mb-1">note</h3>
            <textarea
              id="friendNote"
              maxLength={215}
              style={{ height: "auto" }}
              className="w-full min-h-[36px] max-h-20 resize-none text-xs p-1 bg-transparent border-none box-border placeholder:text-xs placeholder:font-normal placeholder:text-light-400 focus:outline-none"
              placeholder="Click to add a note"
            ></textarea>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default UserChatSidebar;
