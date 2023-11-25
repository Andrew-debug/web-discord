import { Compass, Download, Plus } from "lucide-react";
import { ReactNode } from "react";
import Avatar from "../Avatar";

interface IActionLinkIcons {
  addChannel: ReactNode;
  exploreChannels: ReactNode;
  downloadApps: ReactNode;
}

const actionLinkIcons: IActionLinkIcons = {
  addChannel: <Plus className="nav-action-link--icon" />,
  exploreChannels: <Compass className="nav-action-link--icon" />,
  downloadApps: <Download className="nav-action-link--icon" />,
};

interface HoverCardTriggerImageProps {
  icon?: string;
  pathname: string;
  id: string;
  img?: string;
}
const HoverCardTriggerImage = ({
  icon,
  pathname,
  id,
  img,
}: HoverCardTriggerImageProps) => {
  return (
    <>
      {icon ? (
        <div
          className={`flex justify-center items-center bg-dark-400 w-12 h-12 nav-action-link--bg ${
            pathname === `/channels/${id}`
              ? "rounded-[17px]"
              : "rounded--channel-image"
          }`}
        >
          {actionLinkIcons[icon as keyof IActionLinkIcons]}
        </div>
      ) : (
        <Avatar
          width={48}
          height={48}
          img={img}
          active={pathname === `/channels/${id}`}
        />
      )}
    </>
  );
};

export default HoverCardTriggerImage;
