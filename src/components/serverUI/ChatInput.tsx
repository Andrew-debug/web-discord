import { PlusCircle } from "lucide-react";
import { Input } from "../ui/input";

const ChatInput = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div className="flex justify-center items-center mb-4 bg-zinc-200/90 dark:bg-zinc-700/75 rounded-lg">
      <PlusCircle
        size={28}
        className="ml-3 stroke-zinc-600 dark:fill-zinc-300 hover:fill-zinc-300 hover:dark:fill-zinc-200 "
      />
      <Input
        type="text"
        className="pl-3 py-6 bg-zinc-200/90 dark:bg-zinc-700/75 border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600 dark:text-zinc-200"
        placeholder={`Message #${searchParams.section}`}
      />
    </div>
  );
};

export default ChatInput;
