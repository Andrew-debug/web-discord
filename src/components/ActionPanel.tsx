import React from "react";
import Avatar from "./Avatar";
import { Headphones, Mic, MicOff, Settings } from "lucide-react";
import { getServerSession } from "next-auth";

const ActionPanel = async () => {
  const session = await getServerSession();
  return (
    <div className="flex gap-1 items-center min-h-[52px] h-[52px] text-xs bg-dark-600">
      <div className="flex gap-1 m-2">
        <div className="relative">
          <Avatar width={32} height={32} img={session?.user?.image} />
          <div className="flex items-center justify-center absolute -bottom-1 -right-1 w-[17px] h-[17px] bg-dark-700 rounded-full">
            <div className="w-[11px] h-[11px] bg-green-600 rounded-full"></div>
          </div>
        </div>
        <div className="ml-1">
          <div className="font-semibold max-w-[100px] truncate">
            {session?.user?.name}
          </div>
          <span className="font-extralight text-light-400">Online</span>
        </div>
      </div>
      <div className="flex gap-2 mr-2">
        <div className="w-5 h-5">
          {true ? (
            <Mic
              width="100%"
              height="100%"
              className="text-light-600 hover:text-light-200 cursor-pointer"
            />
          ) : (
            <MicOff
              width="100%"
              height="100%"
              className="text-light-600 hover:text-light-200 cursor-pointer"
            />
          )}
        </div>
        <div className="w-5 h-5">
          <Headphones
            width="100%"
            height="100%"
            className="text-light-600 hover:text-light-200 cursor-pointer"
          />
        </div>
        <div className="w-5 h-5">
          <Settings
            width="100%"
            height="100%"
            className="text-light-600 hover:text-light-200 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ActionPanel;
