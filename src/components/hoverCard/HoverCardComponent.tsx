"use client";
import * as HoverCard from "@radix-ui/react-hover-card";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as Realm from "realm-web";
import HoverCardTriggerImage from "./HoverCardTriggerImage";

interface HoverCardComponentProps {
  link: string;
  cardMessage: string;
  id: string;
  img?: string;
  icon?: string;
}

const HoverCardComponent = ({
  link,
  cardMessage,
  id,
  img,
  icon,
}: HoverCardComponentProps) => {
  const pathname = usePathname();

  // const [tmpData, setTmpData] = useState();
  // useEffect(() => {
  //   const realm_app = "application-0-yfymw";
  //   const app = new Realm.App({ id: realm_app });
  //   const credentials = Realm.Credentials.anonymous();

  //   const lmao = async () => {
  //     try {
  //       const user = await app.logIn(credentials);
  //       const allData = await user.functions.getAllServers();
  //       console.log(allData);
  //       setTmpData(allData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   lmao();
  // }, []);

  // useEffect(() => {
  //   const lmao = async () => {
  //     try {
  //       console.log("FETCHING DOCUMENTS");
  //       const fetchedUsers = await fetch("/api/leTest");
  //       const res = await fetchedUsers.json();
  //       console.log("FETCHED DOCUMENTS");

  //       console.log(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   lmao();
  // }, []);

  const handleClick1 = async () => {
    const realm_app = process.env.NEXT_PUBLIC_REALM_APP_ID ?? "";
    const app = new Realm.App({ id: realm_app });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      console.log(app);
      const allData = await user.functions.getAllServers();
      console.log(allData);
    } catch (error) {
      console.error(error);
    }
  };
  const handleClick = async () => {
    const realm_app = process.env.NEXT_PUBLIC_REALM_APP_ID ?? "";
    const app = new Realm.App({ id: realm_app });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allData = await user.functions.getAllServers();
      const id = await allData.result[1]._id.toString();
      console.log(id);
      await user.functions.deleteServer(id);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {/* <button onClick={handleClick1}>show</button>
      <span>||</span>
      <button onClick={handleClick}>delete</button> */}
      <HoverCard.Root openDelay={50} closeDelay={50}>
        <HoverCard.Trigger asChild>
          {link ? (
            <Link href={link}>
              <HoverCardTriggerImage
                icon={icon}
                id={id}
                img={img}
                pathname={pathname}
              />
            </Link>
          ) : (
            <div className="cursor-pointer">
              <HoverCardTriggerImage
                icon={icon}
                id={id}
                img={img}
                pathname={pathname}
              />
            </div>
          )}
        </HoverCard.Trigger>
        <HoverCard.Content
          className="relative bg-primary-black ml-[18px] py-2 px-4 rounded-md z-50 max-w-[200px]"
          side="right"
        >
          <div className="absolute top-2.5 -left-1.5 w-0 h-0 border-t-8 border-t-transparent border-r-[10px] border-r-primary-black border-b-8 border-b-transparent" />
          <div className="text-sm">{cardMessage}</div>
        </HoverCard.Content>
      </HoverCard.Root>
      <>
        {pathname === `/channels/${id}` ? (
          <div
            className={`absolute top-2.5 left-0 h-10 w-1 bg-primary-white rounded-e opacity-1 `}
          />
        ) : (
          <div
            className={`absolute top-5 left-0 h-5 w-1 bg-primary-white rounded-e channel-side--scale`}
          />
        )}
      </>
    </>
  );
};

export default HoverCardComponent;
