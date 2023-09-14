"use client";
import { IServer } from "@/app/types";
import Home from "./Home";
import ChatInput from "./ChatInput";
import Image from "next/image";
import { Hash } from "lucide-react";
import { formatDate } from "@/app/utils";
import React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
interface ServerMain {
  searchParams: { [key: string]: string | string[] | undefined };
  response: { [key: string]: IServer };
  id: string;
}

const serverChat = {
  "2000/11/01": [
    {
      name: "user1",
      avatar: "https://picsum.photos/id/237/200/300",
      message: "user1message",
      date: "01/11/2000 05:31",
    },
    {
      name: "user2",
      avatar: "https://picsum.photos/seed/picsum/200/300",
      message: "user2message",
      date: "01/11/2000 05:32",
    },
    {
      name: "user3",
      avatar: "https://picsum.photos/200/300?grayscale",
      message: "user3message",
      date: "01/11/2000 05:33",
    },
    {
      name: "user4",
      avatar: "https://picsum.photos/200/300/?blur",
      message: "user4message",
      date: "01/11/2000 05:34",
    },
  ],
  "2000/11/02": [
    {
      name: "user1",
      avatar: "https://picsum.photos/id/237/200/300",
      message: "user1message",
      date: "01/11/2000 05:31",
    },
    {
      name: "user2",
      avatar: "https://picsum.photos/seed/picsum/200/300",
      message: "user2message",
      date: "01/11/2000 05:32",
    },
    {
      name: "user3",
      avatar: "https://picsum.photos/200/300?grayscale",
      message: "user3message",
      date: "01/11/2000 05:33",
    },
    {
      name: "user4",
      avatar: "https://picsum.photos/200/300/?blur",
      message: "user4message",
      date: "01/11/2000 05:34",
    },
  ],
  "2000/11/03": [
    {
      name: "user1",
      avatar: "https://picsum.photos/id/237/200/300",
      message: "user1message",
      date: "01/11/2000 05:31",
    },
    {
      name: "user2",
      avatar: "https://picsum.photos/seed/picsum/200/300",
      message: "user2message",
      date: "01/11/2000 05:32",
    },
    {
      name: "user3",
      avatar: "https://picsum.photos/200/300?grayscale",
      message: "user3message",
      date: "01/11/2000 05:33",
    },
    {
      name: "user4",
      avatar: "https://picsum.photos/200/300/?blur",
      message: "user4message",
      date: "01/11/2000 05:34",
    },
  ],
  "2000/11/04": [
    {
      name: "user1",
      avatar: "https://picsum.photos/id/237/200/300",
      message: "user1message",
      date: "01/11/2000 05:31",
    },
    {
      name: "user2",
      avatar: "https://picsum.photos/seed/picsum/200/300",
      message: "user2message",
      date: "01/11/2000 05:32",
    },
    {
      name: "user3",
      avatar: "https://picsum.photos/200/300?grayscale",
      message: "user3message",
      date: "01/11/2000 05:33",
    },
    {
      name: "user4",
      avatar: "https://picsum.photos/200/300/?blur",
      message: "user4message",
      date: "01/11/2000 05:34",
    },
  ],
  "2000/11/05": [
    {
      name: "user1",
      avatar: "https://picsum.photos/id/237/200/300",
      message: "user1message",
      date: "01/11/2000 05:31",
    },
    {
      name: "user2",
      avatar: "https://picsum.photos/seed/picsum/200/300",
      message: "user2message",
      date: "01/11/2000 05:32",
    },
    {
      name: "user3",
      avatar: "https://picsum.photos/200/300?grayscale",
      message: "user3message",
      date: "01/11/2000 05:33",
    },
    {
      name: "user4",
      avatar: "https://picsum.photos/200/300/?blur",
      message: "user4message",
      date: "01/11/2000 05:34",
    },
  ],
  "2000/11/06": [
    {
      name: "user1",
      avatar: "https://picsum.photos/id/237/200/300",
      message: "user1message",
      date: "01/11/2000 05:31",
    },
    {
      name: "user2",
      avatar: "https://picsum.photos/seed/picsum/200/300",
      message: "user2message",
      date: "01/11/2000 05:32",
    },
    {
      name: "user3",
      avatar: "https://picsum.photos/200/300?grayscale",
      message: "user3message",
      date: "01/11/2000 05:33",
    },
    {
      name: "user4",
      avatar: "https://picsum.photos/200/300/?blur",
      message: "user4message",
      date: "01/11/2000 05:34",
    },
  ],
  "2000/11/07": [
    {
      name: "user1",
      avatar: "https://picsum.photos/id/237/200/300",
      message: "user1message",
      date: "01/11/2000 05:31",
    },
    {
      name: "user2",
      avatar: "https://picsum.photos/seed/picsum/200/300",
      message: "user2message",
      date: "01/11/2000 05:32",
    },
    {
      name: "user3",
      avatar: "https://picsum.photos/200/300?grayscale",
      message: "user3message",
      date: "01/11/2000 05:33",
    },
    {
      name: "user4",
      avatar: "https://picsum.photos/200/300/?blur",
      message: "user4message",
      date: "01/11/2000 05:34",
    },
  ],
  "2000/11/08": [
    {
      name: "user1",
      avatar: "https://picsum.photos/id/237/200/300",
      message: "user1message",
      date: "01/11/2000 05:31",
    },
    {
      name: "user2",
      avatar: "https://picsum.photos/seed/picsum/200/300",
      message: "user2message",
      date: "01/11/2000 05:32",
    },
    {
      name: "user3",
      avatar: "https://picsum.photos/200/300?grayscale",
      message: "user3message",
      date: "01/11/2000 05:33",
    },
    {
      name: "user4",
      avatar: "https://picsum.photos/200/300/?blur",
      message: "user4message",
      date: "01/11/2000 05:34",
    },
  ],
};
const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);
const ServerMain = ({ searchParams, response, id }: ServerMain) => {
  if (Object.keys(searchParams).length < 1) return <Home />;

  // return (
  //   <ScrollArea.Root type="auto" className="ScrollAreaRoot">
  //     <ScrollArea.Viewport className="ScrollAreaViewport">
  //       <div style={{ padding: "15px 20px" }}>
  //         <div className="Text">Tags</div>
  //         {TAGS.map((tag) => (
  //           <div className="Tag" key={tag}>
  //             {tag}
  //           </div>
  //         ))}
  //       </div>
  //     </ScrollArea.Viewport>
  //     <ScrollArea.Scrollbar
  //       className="ScrollAreaScrollbar"
  //       orientation="vertical"
  //     >
  //       <ScrollArea.Thumb className="ScrollAreaThumb" />
  //     </ScrollArea.Scrollbar>
  //     <ScrollArea.Scrollbar
  //       className="ScrollAreaScrollbar"
  //       orientation="horizontal"
  //     >
  //       <ScrollArea.Thumb className="ScrollAreaThumb" />
  //     </ScrollArea.Scrollbar>
  //     <ScrollArea.Corner className="ScrollAreaCorner" />
  //   </ScrollArea.Root>
  // );

  return (
    <div className="w-full flex flex-col">
      <header className="basis-[5%] border-b-2 py-2 border-dark-400 dark:border-primary-black">
        <h1># {searchParams.section}</h1>
      </header>
      <main className="relative basis-[95%]">
        <div className="w-full h-full flex flex-col-reverse">
          <ChatInput searchParams={searchParams} />
          <div className="h-[88vh] flex flex-col-reverse overflow-y-auto">
            <div className="mb-3">
              {Object.entries(serverChat).map(([date, messages], dateIndex) => (
                <div
                  key={dateIndex}
                  className="mt-2 border-t-[1px] border-zinc-600/50"
                >
                  <span className="relative top-[-14px] left-[500px] bg-dark-400 px-2 text-xs text-zinc-300/70">
                    {formatDate(date)}
                  </span>
                  {messages.map((messageData, messageDataIndex) => (
                    <div
                      key={messageDataIndex}
                      className="flex items-center mb-4 hover:bg-zinc-800/20"
                    >
                      <div className="relative w-[38px] h-[38px] ml-3">
                        <Image
                          fill
                          className=" rounded-full object-cover"
                          src={messageData.avatar}
                          alt="userImage"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="flex justify-center items-end gap-3">
                          <h2 className="font-medium">{messageData.name}</h2>
                          <span className="text-[11px] font-light dark:text-zinc-300/90 text-zinc-800">
                            {messageData.date}
                          </span>
                        </div>
                        <p className="font-light">{messageData.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div>
              <div className="flex justify-center items-center w-20 h-20 my-2 rounded-full bg-zinc-200/90 dark:bg-zinc-700/75">
                <Hash size={60} />
              </div>
              <h3 className="text-4xl font-bold">
                Welcome to #{searchParams.section}
              </h3>
              <p className="my-2 text-zinc-300/90">
                This is the start of the #{searchParams.section} channel
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServerMain;
