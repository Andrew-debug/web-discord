import { ReactNode } from "react";
import HoverCardComponent from "../HoverCardComponent";

type NavbarLinkProps =
  | {
      type: "actionLink";
      id: string;
      link: string;
      cardMessage: string;
      icon: ReactNode;
    }
  | {
      type: "serverLink";
      id: string;
      link: string;
      cardMessage: string;
      img?: string;
    };

const NavbarLink = (props: NavbarLinkProps) => {
  if (props.type === "serverLink") {
    const { cardMessage, id, link, img } = props;
    return (
      <div className="relative flex justify-center mb-1 pt-[6px] server-icon">
        <HoverCardComponent
          cardMessage={cardMessage}
          id={id}
          link={link}
          img={img}
        />
      </div>
    );
  }
  if (props.type === "actionLink") {
    const { cardMessage, id, link, icon } = props;
    return (
      <div className="relative flex justify-center mb-1 pt-[6px] server-icon">
        <HoverCardComponent
          cardMessage={cardMessage}
          id={id}
          link={link}
          icon={icon}
        />
      </div>
    );
  }
};

export default NavbarLink;
