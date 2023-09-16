import { Hash } from "lucide-react";

const ServerChatWelcome = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div className="p-4">
      <div className="flex justify-center items-center w-20 h-20 my-2 rounded-full bg-zinc-200/90 dark:bg-zinc-700/75">
        <Hash size={60} />
      </div>
      <h3 className="text-4xl font-bold">Welcome to #{searchParams.section}</h3>
      <p className="my-2 text-zinc-300/90">
        This is the start of the #{searchParams.section} channel
      </p>
    </div>
  );
};

export default ServerChatWelcome;
