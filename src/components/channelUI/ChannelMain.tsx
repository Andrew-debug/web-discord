import { IChannel } from "@/types";
import ChatInput from "./ChatInput";
import { formatDate } from "@/utils";
import React from "react";
import Message from "./Message";
import ChatWelcome from "./ChatWelcome";
import { Hash } from "lucide-react";
import { redirect } from "next/navigation";
interface IChannelMain {
  searchParams: { [key: string]: string | string[] | undefined };
  channelData: IChannel | undefined;
}

const ChannelMain = ({ searchParams, channelData }: IChannelMain) => {
  if (!channelData) return <>server 404</>;
  if (Object.keys(searchParams).length < 1)
    redirect(`${channelData._id}?section=general`);

  return (
    <section className="w-full h-[100vh] flex flex-col">
      <header className="py-3 border-b-[1px] border-dark-700">
        <h1 className="flex items-center ml-4">
          <Hash size={20} className="text-light-600 mr-2" />
          <p>{searchParams.section}</p>
        </h1>
      </header>
      <main className="relative h-[calc(100vh-113px)]">
        <div className="w-full h-full flex flex-col-reverse">
          <div
            className={`flex flex-col-reverse overflow-y-auto overflow-x-hidden light-scrollbar-track light-scrollbar-thumb dark:dark-scrollbar-track dark:dark-scrollbar-thumb`}
          >
            <div className="mb-3 px-4 ">
              {Object.entries(
                channelData.sections[searchParams.section as string]
              ).map(([date, messages]) => (
                <div
                  key={date}
                  className="mt-2 border-t-[1px] border-zinc-600/50"
                >
                  <span className="relative -top-3.5 left-[500px] bg-dark-400 px-2 text-xs text-zinc-300/70">
                    {formatDate(date)}
                  </span>
                  {messages.map((messageData, messageDataIndex) => (
                    <Message key={messageDataIndex} messageData={messageData} />
                  ))}
                </div>
              ))}
            </div>
            <ChatWelcome searchParams={searchParams} />
          </div>
        </div>
      </main>
      <ChatInput searchParams={searchParams} />
    </section>
  );
};

export default ChannelMain;
