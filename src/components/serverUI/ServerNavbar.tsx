import { IServer } from "@/types";
import Link from "next/link";
import AccordionComponent from "../ui/AccordionComponent";
import { Hash, Headphones, Mic, MicOff, Settings } from "lucide-react";
import { getServerSession } from "next-auth";
import Avatar from "../Avatar";

interface IServerNavbar {
  searchParams: { [key: string]: string | string[] | undefined };
  response: { [key: string]: IServer };
  id: string;
}

const ServerNavbar = async ({ searchParams, response, id }: IServerNavbar) => {
  const session = await getServerSession();
  const serverData = response[id];
  const selectedSection = searchParams.section;
  if (!serverData) return <></>;
  return (
    <div className="flex flex-col w-[240px] min-w-[240px] h-[100vh]">
      <div className="flex items-center py-3 bg-dark-600 rounded-tl-lg border-b-[1px] border-dark-800">
        <p className="ml-4 mr-2 truncate">{serverData.name}</p>
      </div>
      <div className="h-full bg-dark-600">
        <AccordionComponent>
          {Object.keys(serverData.sections).map((section, index) => (
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
      <div className="flex gap-1 items-center min-h-[52px] h-[52px] text-xs bg-dark-700">
        <div className="flex gap-1 m-2">
          <div className="relative">
            <Avatar width={32} height={32} img={session?.user?.image} />
            <div className="flex items-center justify-center absolute -bottom-1 -right-1 w-[17px] h-[17px] bg-dark-800 rounded-full">
              <div className="w-[11px] h-[11px] bg-green-600 rounded-full"></div>
            </div>
          </div>
          <div className="ml-1">
            <div className="font-semibold max-w-[100px] truncate">
              {session?.user?.name}
            </div>
            <span className="font-extralight text-light-400">Online</span>
          </div>
        </div>
        <div className="flex gap-2 mr-2">
          <div className="w-5 h-5">
            {true ? (
              <Mic
                width="100%"
                height="100%"
                className="text-light-600 hover:text-light-200 cursor-pointer"
              />
            ) : (
              <MicOff
                width="100%"
                height="100%"
                className="text-light-600 hover:text-light-200 cursor-pointer"
              />
            )}
          </div>
          <div className="w-5 h-5">
            <Headphones
              width="100%"
              height="100%"
              className="text-light-600 hover:text-light-200 cursor-pointer"
            />
          </div>
          <div className="w-5 h-5">
            <Settings
              width="100%"
              height="100%"
              className="text-light-600 hover:text-light-200 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerNavbar;
