import { IServer } from "@/app/types";
import Link from "next/link";

interface ServerNavbar {
  response: { [key: string]: IServer };
  id: string;
}

const ServerNavbar = ({ response, id }: ServerNavbar) => {
  return (
    <div className="min-w-[300px]">
      {response[id].sections.map((section: string, index: number) => (
        <Link
          key={index}
          href={`?${new URLSearchParams({ section: section })}`}
          className="block"
        >
          {section}
        </Link>
      ))}
    </div>
  );
};

export default ServerNavbar;
