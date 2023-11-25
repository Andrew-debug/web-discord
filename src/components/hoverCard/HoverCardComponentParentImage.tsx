import { Compass, Download, Plus } from "lucide-react";
import { ReactNode } from "react";
import Avatar from "../Avatar";

interface IActionLinkIcons {
  addServer: ReactNode;
  exploreServers: ReactNode;
  downloadApps: ReactNode;
}

const actionLinkIcons: IActionLinkIcons = {
  addServer: <Plus className="nav-action-link--icon" />,
  exploreServers: <Compass className="nav-action-link--icon" />,
  downloadApps: <Download className="nav-action-link--icon" />,
};

interface HoverCardComponentParentImageProps {
  icon?: string;
  pathname: string;
  id: string;
  img?: string;
}
const HoverCardComponentParentImage = ({
  icon,
  pathname,
  id,
  img,
}: HoverCardComponentParentImageProps) => {
  return (
    <>
      {icon ? (
        <div
          className={`flex justify-center items-center bg-dark-400 w-12 h-12 nav-action-link--bg ${
            pathname === `/server/${id}`
              ? "rounded-[17px]"
              : "rounded--server-image"
          }`}
        >
          {actionLinkIcons[icon as keyof IActionLinkIcons]}
        </div>
      ) : (
        <Avatar
          width={48}
          height={48}
          img={img}
          active={pathname === `/server/${id}`}
        />
      )}
    </>
  );
};

export default HoverCardComponentParentImage;
