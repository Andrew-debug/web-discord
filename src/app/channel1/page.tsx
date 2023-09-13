import { headers } from "next/headers";
import Link from "next/link";

const tmp1 = "py-1 px-2 text-gray-300 bg-gray-700";
const tmp2 = "py-1 px-2 text-blue-800 hover:text-gray-300 hover:bg-gray-700";

const Channel1 = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const selectedSection = searchParams.section;

  // idk why headers needed works fine without it
  const response = await fetch("http://localhost:3000/api/channel1", {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json());

  return (
    <div className="flex w-full">
      <div className="min-w-[300px] bg-slate-500">
        {response.sections[0]}
        {response.sections[1]}
        {response.sections[2]}
        <Link
          href={`?${new URLSearchParams({ section: "general" })}`}
          className={`${selectedSection === "general" ? tmp1 : tmp2} block`}
        >
          general
        </Link>
        <Link
          href={`?${new URLSearchParams({ section: "league-of-legends" })}`}
          className={`${
            selectedSection === "league-of-legends" ? tmp1 : tmp2
          } block`}
        >
          league of legends
        </Link>
        <Link
          href={`?${new URLSearchParams({ section: "afk" })}`}
          className={`${selectedSection === "afk" ? tmp1 : tmp2} block`}
        >
          afk
        </Link>
      </div>
      <div className="w-full bg-slate-800"></div>
    </div>
  );
};

export default Channel1;
