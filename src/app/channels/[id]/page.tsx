import { headers } from "next/headers";
import ChannelMain from "@/components/channelUI/ChannelMain";
import ChannelNavbar from "@/components/channelUI/ChannelNavbar";

const page = async ({
  params: { id },
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // idk why headers needed, works fine without it
  const response = await fetch("http://localhost:3000/api/discordServers", {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json());
  return (
    <div className="flex w-full overflow-hidden">
      <ChannelNavbar searchParams={searchParams} response={response} id={id} />
      <ChannelMain searchParams={searchParams} response={response} id={id} />
    </div>
  );
};

export default page;
