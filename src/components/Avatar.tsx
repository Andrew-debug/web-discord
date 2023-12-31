import Image from "next/image";
import _ from "lodash";

const Avatar = ({
  width,
  height,
  img = null,
  active = false,
}: {
  width: number;
  height: number;
  img?: string | undefined | null;
  active?: boolean;
}) => {
  return (
    <div className={`relative w-[${width}px] h-[${height}px]`}>
      <Image
        priority
        src={img || `https://cdn.discordapp.com/embed/avatars/0.png`}
        width={width}
        height={height}
        className={`${active ? "rounded-[17px]" : "rounded--channel-image"}`}
        alt="user avatar"
      />
    </div>
  );
};

export default Avatar;
