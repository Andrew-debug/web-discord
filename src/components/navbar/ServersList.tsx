import DialogDemo from "../ui/DialogDemo";
import NavbarLink from "./NavbarLink";
import { IServer } from "@/types";

const ServersList = async () => {
  const response = (await fetch(
    "http://localhost:3000/api/discordServers"
  ).then((res) => res.json())) as IServer[];

  return (
    <div>
      <div className="my-2 server-icon">
        <NavbarLink
          type="serverLink"
          id="user"
          link="/server/user"
          cardMessage="Direct Messages"
        />
      </div>
      <div className="w-8 h-[2px] bg-dark-400 rounded-[1px] mx-auto my-[2px]"></div>
      {Object.values(response).map((item, index) => (
        <NavbarLink
          type="serverLink"
          key={index}
          id={item.id}
          link={`/server/${item.id}?section=general`}
          img={item.defaultImg}
          cardMessage={item.name}
        />
      ))}
      <DialogDemo>
        <NavbarLink
          type="actionLink"
          cardMessage="Add a server"
          id="createServer"
          link=""
          icon="addServer"
        />
      </DialogDemo>
      <NavbarLink
        type="actionLink"
        cardMessage="Explore Discoverable Servers"
        id="exploreServers"
        link="/"
        icon="exploreServers"
      />
      <div className="w-8 h-[2px] bg-dark-400 rounded-[1px] mx-auto mt-2"></div>
      <NavbarLink
        type="actionLink"
        cardMessage="Download Apps"
        id="downloableApps"
        link="/"
        icon="downloadApps"
      />
    </div>
  );
};

export default ServersList;
