import HoverCardComponent from "../HoverCardComponent";
import { IServer } from "@/types";
import NavbarLink from "./NavbarLink";

const ServersList = async () => {
  const response = (await fetch(
    "http://localhost:3000/api/discordServers"
  ).then((res) => res.json())) as IServer[];

  return (
    <div>
      <div className="relative flex justify-center my-2 pt-[6px] server-icon">
        <HoverCardComponent
          id="user"
          isNavbar
          link="/server/user"
          cardMessage="Direct Messages"
        />
      </div>
      <div className="w-8 h-[2px] bg-dark-400 rounded-[1px] mx-auto my-[2px]"></div>
      {Object.values(response).map((item, index) => (
        <NavbarLink
          type="channel"
          key={index}
          id={item.id}
          link={`/server/${item.id}?section=general`}
          img={item.defaultImg}
          cardMessage={item.name}
        />
      ))}
      <NavbarLink
        type="action"
        bgColor="#000"
        cardMessage="lol"
        id="create"
        link="/"
        svg="link"
      />
    </div>
  );
};

export default ServersList;
