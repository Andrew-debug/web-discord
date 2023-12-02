import { getServerSession } from "next-auth";
import DialogDemo from "../ui/DialogDemo";
import NavbarLink from "./NavbarLink";
import Testbtn from "./Testbtn";
import { revalidatePath } from "next/cache";
import { endpoints } from "@/lib/actions";

const ChannelsList = async () => {
  // const response = (await fetch(
  //   "http://localhost:3000/api/discordServers"
  // ).then((res) => res.json())) as IChannel[];
  const session = await getServerSession();
  const channelsToRender = await endpoints.user
    .getUserSubscriptions(session?.user?.email as string)
    .then((data) => data);
  // const channelsToRender = await fetchUserChannels(
  //   session?.user?.email as string
  // ).then((data) => data);

  // const fn1 = async () => {
  //   "use server";
  //   await subscribeUser("yatsenkoandy97@gmail.com", "656a2255c9ee10bc896dc627");
  //   // return await fetchUserChannels("yatsenkoandy97@gmail.com 6564e370dc26e6887118c690");
  //   revalidatePath("/");
  // };
  // const fn = async () => {
  //   "use server";
  //   await createServerChannel("chinazes", "");
  //   // return await fetchUserChannels("yatsenkoandy97@gmail.com 6564e370dc26e6887118c690");
  //   revalidatePath("/");
  // };
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

      {/* <Testbtn handleClick={fn} />
      <Testbtn handleClick={fn1} /> */}
      {session &&
        channelsToRender &&
        channelsToRender.map((channel) => {
          const channelId = channel._id.toString();
          return (
            <NavbarLink
              type="channelLink"
              key={channelId}
              id={channelId}
              link={`/channels/${channelId}?section=general`}
              img={channel.image}
              cardMessage={channel.name}
            />
          );
        })}

      {/* {Object.values(response).map((item, index) => (
        <NavbarLink
          type="channelLink"
          key={index}
          id={item.id}
          link={`/channels/${item.id}?section=general`}
          img={item.defaultImg}
          cardMessage={item.name}
        />
      ))} */}
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
