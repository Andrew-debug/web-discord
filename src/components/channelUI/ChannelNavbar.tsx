import { IChannel } from "@/types";
import Link from "next/link";
import AccordionComponent from "../ui/AccordionComponent";
import { Hash } from "lucide-react";
import ActionPanel from "../ActionPanel";

interface IChannelNavbar {
  searchParams: { [key: string]: string | string[] | undefined };
  channelData: IChannel | undefined;
}

const ChannelNavbar = async ({ searchParams, channelData }: IChannelNavbar) => {
  const selectedSection = searchParams.section;
  if (!channelData) return <></>;
  return (
    <section className="flex flex-col w-[240px] min-w-[240px] h-[100vh]">
      <div className="flex items-center py-3 bg-dark-500 rounded-tl-lg border-b-[1px] border-dark-700">
        <p className="ml-4 mr-2 truncate">{channelData.name}</p>
      </div>
      <div className="h-full bg-dark-500">
        <AccordionComponent>
          {Object.keys(channelData.sections).map((section, index) => (
            <Link
              key={index}
              href={`?${new URLSearchParams({ section: section })}`}
              className={`block rounded mx-2 my-0.5 p-2 py-1 ${
                selectedSection === section
                  ? "bg-light-800"
                  : "hover:bg-dark-400"
              }`}
            >
              <div className="flex items-center gap-2 text-light-600">
                <div className="w-[18px] h-[18px]">
                  <Hash size={18} />
                </div>
                <div
                  className={`truncate ${
                    selectedSection === section && "text-white"
                  }`}
                >
                  {section}
                </div>
              </div>
            </Link>
          ))}
        </AccordionComponent>
      </div>
      <ActionPanel />
    </section>
  );
};

export default ChannelNavbar;
