import { channlesObj } from "@/utils";
import Link from "next/link";
import Avatar from "../Avatar";
import HoverCardComponent from "../HoverCardComponent";

const ServersList = ({ pathname }: { pathname: string }) => {
  return (
    <>
      {channlesObj.map((item, index) => (
        <div className="relative flex justify-center mb-2" key={index}>
          <div className="absolute top-2 left-0">
            <span className="absolute opacity-1 h-[32px] w-[4px] block bg-primary-white rounded-e"></span>
          </div>
          <HoverCardComponent
            Link={
              <Link
                href={`/server/${item.id}?section=general`}
                className={`block text-${
                  pathname === `/${item.name}` ? "red-500" : "blue-500"
                }`}
              >
                <Avatar width={48} height={48} />
              </Link>
            }
            Card={
              <>
                <div className="absolute top-[10px] -left-[6px] w-0 h-0 border-t-[8px] border-t-transparent border-r-[10px] border-r-primary-black border-b-[8px] border-b-transparent"></div>
                <div className="text-sm">{item.name}</div>
              </>
            }
          />
        </div>
      ))}
    </>
  );
};

export default ServersList;
