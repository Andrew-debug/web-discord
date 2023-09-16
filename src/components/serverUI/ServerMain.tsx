import { IServer } from "@/types";
import Home from "./Home";
import ChatInput from "./ChatInput";
import { formatDate } from "@/utils";
import React from "react";
import ClientChatWrapper from "./ClientChatWrapper";
import Message from "./Message";
import ServerChatWelcome from "./ServerChatWelcome";
import { Hash } from "lucide-react";
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

const ServerMain = ({ searchParams, response, id }: ServerMain) => {
  if (Object.keys(searchParams).length < 1) return <Home />;

  return (
    <div className="w-full flex flex-col">
      <header className="py-3 border-b-[1px] border-dark-800">
        <h1 className="flex items-center ml-4">
          <Hash size={20} className="text-light-600 mr-2" />
          <p>{searchParams.section}</p>
        </h1>
      </header>
      <main className="relative basis-[95%]">
        <div className="w-full h-full flex flex-col-reverse">
          <ChatInput searchParams={searchParams} />
          <ClientChatWrapper>
            <div className="mb-3 px-4 ">
              {Object.entries(serverChat).map(([date, messages], dateIndex) => (
                <div
                  key={dateIndex}
                  className="mt-2 border-t-[1px] border-zinc-600/50"
                >
                  <span className="relative top-[-14px] left-[500px] bg-dark-400 px-2 text-xs text-zinc-300/70">
                    {formatDate(date)}
                  </span>
                  {messages.map((messageData, messageDataIndex) => (
                    <Message key={messageDataIndex} messageData={messageData} />
                  ))}
                </div>
              ))}
            </div>
            <ServerChatWelcome searchParams={searchParams} />
          </ClientChatWrapper>
        </div>
      </main>
    </div>
  );
};

export default ServerMain;
