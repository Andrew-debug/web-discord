import { IMessageProps } from "@/types";
import Avatar from "../Avatar";

const Message = ({
  messageData: { avatar, name, date, message },
}: {
  messageData: IMessageProps;
}) => {
  return (
    <div className="flex items-center mb-4 hover:bg-zinc-800/20">
      <Avatar width={38} height={38} img={avatar} />
      <div className="ml-4">
        <div className="flex justify-center items-end gap-3">
          <h2 className="font-medium">{name}</h2>
          <span className="text-[11px] font-light dark:text-zinc-300/90 text-zinc-800">
            {date}
          </span>
        </div>
        <p className="font-light">{message}</p>
      </div>
    </div>
  );
};

export default Message;
