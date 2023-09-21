import Link from "next/link";
import Avatar from "../Avatar";
import HoverCardComponent from "../HoverCardComponent";
import { IServer } from "@/types";

const ServersList = async () => {
  const response = (await fetch(
    "http://localhost:3000/api/discordServers"
  ).then((res) => res.json())) as IServer[];

  return (
    <div>
      <div className="relative flex justify-center my-2 pt-1 server-icon">
        <HoverCardComponent
          id="user"
          Link={
            <Link href={`/server/user`}>
              <Avatar width={48} height={48} />
            </Link>
          }
          Card={
            <>
              <div className="absolute top-2.5 -left-1.5 w-0 h-0 border-t-8 border-t-transparent border-r-[10px] border-r-primary-black border-b-8 border-b-transparent" />
              <div className="text-sm">Direct Messages</div>
            </>
          }
        />
      </div>
      <div className="w-8 h-[2px] bg-dark-400 rounded-[1px] mx-auto my-1"></div>
      {Object.values(response).map((item, index) => (
        <div
          className="relative flex justify-center mb-1 server-icon"
          key={index}
        >
          <HoverCardComponent
            id={item.id}
            Link={
              <Link
                href={`/server/${item.id}?section=general`}
                className="mt-1.5"
              >
                <Avatar width={48} height={48} img={item.defaultImg} />
              </Link>
            }
            Card={
              <>
                <div className="absolute top-2.5 -left-1.5 w-0 h-0 border-t-8 border-t-transparent border-r-[10px] border-r-primary-black border-b-8 border-b-transparent" />
                <div className="text-sm">{item.name}</div>
              </>
            }
          />
        </div>
      ))}
    </div>
  );
};

export default ServersList;
