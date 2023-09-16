import { headers } from "next/headers";
import ServerMain from "@/components/serverUI/ServerMain";
import ServerNavbar from "@/components/serverUI/ServerNavbar";

const Server = async ({
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
    <div className="flex w-full">
      <ServerNavbar
        searchParams={searchParams}
        server={id}
        response={response}
        id={id}
      />
      <ServerMain searchParams={searchParams} response={response} id={id} />
    </div>
  );
};

export default Server;
