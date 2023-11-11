import Image from "next/image";
import _ from "lodash";
import { ReactElement } from "react";
const Avatar = ({
  width,
  height,
  img = null,
  svg,
  active = false,
}: {
  width: number;
  height: number;
  img?: string | undefined | null;
  svg?: ReactElement;
  active?: boolean;
}) => {
  return (
    <div className={`relative w-[${width}px] h-[${height}px]`}>
      <Image
        src={img || `https://cdn.discordapp.com/embed/avatars/0.png`}
        width={width}
        height={height}
        className={`${active ? "rounded-[17px]" : "rounded--server-image"}`}
        alt="user avatar"
      />
    </div>
  );
};

export default Avatar;
