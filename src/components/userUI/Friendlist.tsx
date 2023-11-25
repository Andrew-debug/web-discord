"use client";
import NavigationLink from "./NavigationLink";
import { useSession } from "next-auth/react";

const Friendlist = () => {
  const { data: session } = useSession();
  const arr = Array.from(Array(50).keys());
  const mockFriends = Array.from(Array(10).keys());
  return (
    <>
      {session?.user?.name ? (
        <ul>
          {arr.map((_, index) => (
            <NavigationLink
              key={index}
              type="friend"
              img={"https://cdn.discordapp.com/embed/avatars/0.png"}
              href={`/channels/me/${index}`}
              text="friend"
            />
          ))}
        </ul>
      ) : (
        <ul>
          {mockFriends.map((_, index) => {
            return (
              <li key={index} className="flex items-center gap-3 my-3">
                <div
                  style={{ opacity: 1 - index / 10 }}
                  className={`w-8 h-8 bg-dark-400 rounded-full ml-4`}
                ></div>
                <div
                  style={{ opacity: 1 - index / 10 }}
                  className={`w-[160px] h-6 bg-dark-400 rounded-full mr-4`}
                ></div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Friendlist;
