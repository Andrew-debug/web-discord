import { channlesObj } from "@/utils";
import Link from "next/link";

const ServersList = ({ pathname }: { pathname: string }) => {
  return (
    <>
      {channlesObj.map((item, index) => (
        <Link
          href={`/server/${item.id}?section=general`} // redirect to default 'general' channel
          key={index}
          className={`block text-${
            pathname === `/${item.name}` ? "red-500" : "blue-500"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default ServersList;
