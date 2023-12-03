import ChannelMain from "@/components/channelUI/ChannelMain";
import ChannelNavbar from "@/components/channelUI/ChannelNavbar";
import { IChannel } from "@/types";
import { getChannelData } from "@/lib/actions";

const page = async ({
  params: { id },
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const channelData = (await getChannelData(id)) as IChannel;

  return (
    <div className="flex w-full overflow-hidden">
      <ChannelNavbar searchParams={searchParams} channelData={channelData} />
      <ChannelMain searchParams={searchParams} channelData={channelData} />
    </div>
  );
};

export default page;
