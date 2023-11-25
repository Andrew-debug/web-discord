import DialogDemo from "../ui/DialogDemo";
import NavbarLink from "./NavbarLink";
import { IChannel } from "@/types";

const ChannelsList = async () => {
  const response = (await fetch(
    "http://localhost:3000/api/discordServers"
  ).then((res) => res.json())) as IChannel[];

  return (
    <div>
      <div className="my-2 channel-icon">
        <NavbarLink
          type="channelLink"
          id="me"
          link="/channels/me"
          cardMessage="Direct Messages"
        />
      </div>
      <div className="w-8 h-[2px] bg-dark-400 rounded-[1px] mx-auto my-[2px]"></div>
      {Object.values(response).map((item, index) => (
        <NavbarLink
          type="channelLink"
          key={index}
          id={item.id}
          link={`/channels/${item.id}?section=general`}
          img={item.defaultImg}
          cardMessage={item.name}
        />
      ))}
      <DialogDemo>
        <NavbarLink
          type="actionLink"
          cardMessage="Add a Server"
          id="createChannel"
          link=""
          icon="addChannel"
        />
      </DialogDemo>
      <NavbarLink
        type="actionLink"
        cardMessage="Explore Discoverable Servers"
        id="exploreChannels"
        link="/"
        icon="exploreChannels"
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

export default ChannelsList;
