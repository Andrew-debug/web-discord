import Home from "@/components/serverUI/Home";
import { headers } from "next/headers";
import Link from "next/link";

const tmp1 = "py-1 px-2 text-gray-300 bg-gray-700";
const tmp2 = "py-1 px-2 text-blue-800 hover:text-gray-300 hover:bg-gray-700";

const Channel = async ({
  params: { id },
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const selectedSection = searchParams.section;

  // idk why headers needed, works fine without it
  const response = await fetch("http://localhost:3000/api/discordServers", {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json());

  return (
    <div className="flex w-full">
      <div className="min-w-[300px] bg-slate-500">
        {response[id].sections.map((section: string, index: number) => (
          <Link
            key={index}
            href={`?${new URLSearchParams({ section: section })}`}
            className={`${selectedSection === section ? tmp1 : tmp2} block`}
          >
            {section}
          </Link>
        ))}
      </div>
      <div className="w-full bg-slate-800">
        {Object.keys(searchParams).length < 1 ? (
          <Home />
        ) : (
          <div>{response[id].name}</div>
        )}
      </div>
    </div>
  );
};

export default Channel;
