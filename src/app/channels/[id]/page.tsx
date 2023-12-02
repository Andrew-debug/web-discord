import ChannelMain from "@/components/channelUI/ChannelMain";
import ChannelNavbar from "@/components/channelUI/ChannelNavbar";
import { getServerSession } from "next-auth";
import { endpoints } from "@/lib/actions";
import { IChannel } from "@/types";

const page = async ({
  params: { id },
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const session = await getServerSession();
  // const channelData = (await fetchUserChannels(
  //   session?.user?.email as string
  // ).then((data) =>
  //   data?.find((channel) => channel._id.toString() === id)
  // )) as IChannel;

  const channelData = (await endpoints.user
    .getUserSubscriptions(session?.user?.email as string)
    .then((data) =>
      data?.find((channel) => channel._id.toString() === id)
    )) as IChannel;

  // const channelData = await endpoints.user
  //   .getUserSubscriptions(session?.user?.email as string)
  //   .then((data) => data?.find((channel) => channel._id.toString() === id));
  // console.log(channelData);
  return (
    <div className="flex w-full overflow-hidden">
      <ChannelNavbar searchParams={searchParams} channelData={channelData} />
      <ChannelMain searchParams={searchParams} channelData={channelData} />
    </div>
  );
};

export default page;
