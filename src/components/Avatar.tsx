import Image from "next/image";
import _ from "lodash";
const Avatar = ({
  width,
  height,
  img = null,
}: {
  width: number;
  height: number;
  img?: string | undefined | null;
}) => {
  return (
    <div className={`relative w-[${width}px] h-[${height}px]`}>
      <Image
        src={img || `https://cdn.discordapp.com/embed/avatars/0.png`}
        width={width}
        height={height}
        className="rounded-full"
        alt="user avatar"
      />
    </div>
  );
};

export default Avatar;
