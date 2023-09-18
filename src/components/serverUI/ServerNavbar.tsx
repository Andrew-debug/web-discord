import { IServer } from "@/types";
import { channlesObj } from "@/utils";
import Link from "next/link";
import AccordionComponent from "../ui/AccordionComponent";
import { Hash } from "lucide-react";

interface ServerNavbar {
  searchParams: { [key: string]: string | string[] | undefined };
  server: string;
  response: { [key: string]: IServer };
  id: string;
}

const ServerNavbar = ({
  searchParams,
  server: serverStr,
  response,
  id,
}: ServerNavbar) => {
  const serverData = channlesObj.find((server) => server.id === serverStr);
  const selectedSection = searchParams.section;
  if (!serverData) return <div>server 404</div>;
  return (
    <div className="flex flex-col w-[240px] min-w-[240px]">
      <div className="flex items-center py-3 bg-dark-600 rounded-tl-lg border-b-[1px] border-dark-800">
        <p className="ml-4 mr-2 truncate">{serverData.name}</p>
      </div>
      <div className="basis-[90%] bg-dark-600">
        <AccordionComponent>
          {response[id].sections.map((section: string, index: number) => (
            <Link
              key={index}
              href={`?${new URLSearchParams({ section: section })}`}
              className={`block rounded mx-2 my-0.5 p-2 py-1 ${
                selectedSection === section && "bg-light-800"
              } hover:${selectedSection !== section && "bg-dark-400"}`}
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
      <div className="basis-[5%] bg-dark-800"></div>
    </div>
  );
};

export default ServerNavbar;
