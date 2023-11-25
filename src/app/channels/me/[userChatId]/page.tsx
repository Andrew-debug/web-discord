import ChatInput from "@/components/channelUI/ChatInput";
import ChatWelcome from "@/components/channelUI/ChatWelcome";
import Message from "@/components/channelUI/Message";
import UserChatSidebar from "@/components/userUI/UserChatSidebar";
import { formatDate } from "@/utils";

const objData = {
  id: 1,
  image: "https://cdn.discordapp.com/embed/avatars/0.png",
  messages: {
    "2000/11/01": [
      {
        name: "user1",
        avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
        message: "user1message",
        date: "01/11/2000 05:31",
      },
      {
        name: "user2",
        avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
        message: "user2message",
        date: "01/11/2000 05:32",
      },
      {
        name: "user1",
        avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
        message: "user1message",
        date: "01/11/2000 05:33",
      },
      {
        name: "user2",
        avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
        message: "user2message",
        date: "01/11/2000 05:34",
      },
    ],
    "2000/11/02": [
      {
        name: "user1",
        avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
        message: "user1message",
        date: "02/11/2000 01:11",
      },
      {
        name: "user2",
        avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
        message: "user2message",
        date: "02/11/2000 01:12",
      },
      {
        name: "user1",
        avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
        message: "user1message",
        date: "02/11/2000 01:13",
      },
      {
        name: "user2",
        avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
        message: "user2message",
        date: "02/11/2000 01:14",
      },
    ],
  },
};

const page = () => {
  return (
    <>
      <section className="w-full h-[100vh] flex flex-col">
        <header className="py-3 border-b-[1px] border-dark-700">
          <h1 className="flex items-center ml-4">
            Avatar
            <p>friend</p>
          </h1>
        </header>
        <main className="flex h-full">
          <div className="relative w-full h-[calc(100vh-113px)]">
            <div className="w-full h-full flex flex-col-reverse">
              <div
                className={`flex flex-col-reverse overflow-y-auto overflow-x-hidden light-scrollbar-track light-scrollbar-thumb dark:dark-scrollbar-track dark:dark-scrollbar-thumb`}
              >
                <div className="mb-3 px-4 ">
                  {Object.entries(objData.messages).map(([date, messages]) => (
                    <div
                      key={date}
                      className="mt-2 border-t-[1px] border-zinc-600/50"
                    >
                      <span className="relative -top-3.5 left-[500px] bg-dark-400 px-2 text-xs text-zinc-300/70">
                        {formatDate(date)}
                      </span>
                      {messages.map((messageData, messageDataIndex) => (
                        <Message
                          key={messageDataIndex}
                          messageData={messageData}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <ChatWelcome searchParams={{ idk: "kek" }} />
              </div>
            </div>
            <ChatInput searchParams={{ idk: "kek" }} />
          </div>
          <UserChatSidebar />
        </main>
      </section>
    </>
  );
};

export default page;
