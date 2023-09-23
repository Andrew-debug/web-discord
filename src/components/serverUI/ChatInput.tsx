import { PlusCircle } from "lucide-react";
import { Input } from "../ui/input";

const ChatInput = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div className="mt-auto px-4">
      <div className="flex justify-center items-center mb-4 bg-zinc-200/90 dark:bg-[#383a40] rounded-lg">
        <PlusCircle
          size={28}
          className="ml-3 stroke-[#383a40] dark:fill-[#b5bac0] hover:fill-zinc-300 hover:dark:fill-zinc-200 "
        />
        <Input
          type="text"
          className="pl-3 py-6 bg-zinc-200/90 dark:bg-[#383a40] border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600 dark:text-light-200 placeholder:text-light-700"
          placeholder={`Message #${searchParams.section}`}
        />
      </div>
    </div>
  );
};

export default ChatInput;
