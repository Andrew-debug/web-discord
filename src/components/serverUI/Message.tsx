import Image from "next/image";
interface MessageProps {
  avatar: string;
  name: string;
  date: string;
  message: string;
}

const Message = ({
  messageData: { avatar, name, date, message },
}: {
  messageData: MessageProps;
}) => {
  return (
    <div className="flex items-center mb-4 hover:bg-zinc-800/20">
      <div className="relative w-[38px] h-[38px] ml-3">
        <Image
          fill
          className="rounded-full object-cover"
          src={avatar}
          alt="userImage"
        />
      </div>
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
