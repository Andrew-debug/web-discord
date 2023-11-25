import HoverCardComponent from "../hoverCard/HoverCardComponent";

type NavbarLinkProps =
  | {
      type: "actionLink";
      id: string;
      link: string;
      cardMessage: string;
      icon: string;
    }
  | {
      type: "channelLink";
      id: string;
      link: string;
      cardMessage: string;
      img?: string;
    };

const NavbarLink = (props: NavbarLinkProps) => {
  const { cardMessage, id, link } = props;
  if (props.type === "channelLink") {
    const { img } = props;
    return (
      <div className="relative flex justify-center mb-1 pt-[6px] channel-icon">
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
    const { icon } = props;
    return (
      <div className="relative flex justify-center mb-1 pt-[6px] channel-icon">
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
