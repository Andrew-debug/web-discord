import { channlesObj } from "@/utils";
import Link from "next/link";
import Avatar from "../Avatar";
import HoverCardComponent from "../HoverCardComponent";

const ServersList = ({ pathname }: { pathname: string }) => {
  return (
    <>
      {channlesObj.map((item, index) => (
        <div
          className="relative flex justify-center mb-2 server-icon"
          key={index}
        >
          <HoverCardComponent
            Link={
              <Link
                href={`/server/${item.id}?section=general`}
                className="mt-1.5"
              >
                <Avatar
                  width={48}
                  height={48}
                  img={item.img}
                  active={pathname === `/server/${item.id}`}
                />
              </Link>
            }
            Card={
              <>
                <div className="absolute top-2.5 -left-1.5 w-0 h-0 border-t-8 border-t-transparent border-r-[10px] border-r-primary-black border-b-8 border-b-transparent" />
                <div className="text-sm">{item.name}</div>
              </>
            }
          />
          {pathname === `/server/${item.id}` ? (
            <div
              className={`absolute top-2.5 left-0 h-10 w-1 bg-primary-white rounded-e opacity-1 `}
            />
          ) : (
            <div
              className={`absolute top-5 left-0 h-5 w-1 bg-primary-white rounded-e server-side--scale`}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default ServersList;
